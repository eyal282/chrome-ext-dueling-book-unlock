
setTimeout(function () {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		//console.log(tabs[0].url.search("duelingbook.com"))
		if(tabs[0].url.search("duelingbook.com") >= 0)
		{
			if(tabs[0].id != undefined)
			{
				chrome.scripting.executeScript(
				{
					target: {tabId: tabs[0].id},
					world: "MAIN", // Main world is mandatory to edit other website functions
					files: ['inject.js'],
				});
			}
		}
	}); 
}, 5000);
