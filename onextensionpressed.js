

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
	
	if(checkbox.id == 'potOfSwitch')
	{
		chrome.storage.sync.get(['potOfSwitch'], function(result) {
				
			let potOfSwitch = false;
			
			if(result && result.potOfSwitch == true)
				checkbox.checked = true;
			
			else
				checkbox.checked = false;

		});
		
		checkbox.addEventListener('change', function () {
			chrome.storage.sync.set({potOfSwitch: checkbox.checked}, function() {});
		});
	}
});