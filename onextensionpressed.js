

document.addEventListener('DOMContentLoaded', function () {

	let checkbox = document.querySelector('input[id="unlockCardMechanics"]');
	
	if(checkbox.id == 'unlockCardMechanics')
	{
		chrome.storage.sync.get(['unlockCardMechanics'], function(result) {
		
			// Default to true..
			if(result && result.unlockCardMechanics == false)
				checkbox.checked = false;
			
			else
				checkbox.checked = true;

		});
		
		checkbox.addEventListener('change', function () {
			chrome.storage.sync.set({unlockCardMechanics: checkbox.checked}, function() {});
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {
	let checkbox = document.querySelector('input[id="potOfSwitch"]');
	
	if(checkbox.id == 'potOfSwitch')
	{
		chrome.storage.sync.get(['potOfSwitch'], function(result) {
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



document.addEventListener('DOMContentLoaded', function () {

	let checkbox = document.querySelector('input[id="femOfSwitch"]');
	
	if(checkbox.id == 'femOfSwitch')
	{
		chrome.storage.sync.get(['femOfSwitch'], function(result) {
			
			if(result && result.femOfSwitch == true)
				checkbox.checked = true;
			
			else
				checkbox.checked = false;

		});
		
		checkbox.addEventListener('change', function () {
			chrome.storage.sync.set({femOfSwitch: checkbox.checked}, function() {});
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {

	let checkbox = document.querySelector('input[id="limitedCardsSound"]');
	
	if(checkbox.id == 'limitedCardsSound')
	{
		chrome.storage.sync.get(['limitedCardsSound'], function(result) {
		
			// Default to true..
			if(result && result.limitedCardsSound == false)
				checkbox.checked = false;
			
			else
				checkbox.checked = true;

		});
		
		checkbox.addEventListener('change', function () {
			chrome.storage.sync.set({limitedCardsSound: checkbox.checked}, function() {});
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {

	let checkbox = document.querySelector('input[id="cardLogging"]');
	
	if(checkbox.id == 'cardLogging')
	{
		chrome.storage.sync.get(['cardLogging'], function(result) {
		
			// Default to true..
			if(result && result.cardLogging == false)
				checkbox.checked = false;
			
			else
				checkbox.checked = true;

		});
		
		checkbox.addEventListener('change', function () {
			chrome.storage.sync.set({cardLogging: checkbox.checked}, function() {});
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {

	let checkbox = document.querySelector('input[id="randomRPS"]');
	
	if(checkbox.id == 'randomRPS')
	{
		chrome.storage.sync.get(['randomRPS'], function(result) {
			
			if(result && result.randomRPS == true)
				checkbox.checked = true;
			
			else
				checkbox.checked = false;

		});
		
		checkbox.addEventListener('change', function () {
			chrome.storage.sync.set({randomRPS: checkbox.checked}, function() {});
		});
	}
});


document.addEventListener('DOMContentLoaded', function () {

	let menu = document.getElementById('normalMusicDL');
	
	if(menu)
	{
		chrome.storage.sync.get(['normalMusicDL'], function(result) {
			
			let index = menu.selectedIndex;
			let options = menu.options;
			
			menu.selectedIndex = -1;
			
			if(result)
				menu.selectedIndex = getIndexByValue(options, result.normalMusicDL);
			
			if(menu.selectedIndex == -1)
				menu.selectedIndex = getIndexByValue(options, 'DSOD');

		});
		
		menu.addEventListener('change', function () {
			chrome.storage.sync.set({normalMusicDL: menu.options[menu.selectedIndex].value}, function() {});
		});
	}
});


document.addEventListener('DOMContentLoaded', function () {

	let menu = document.getElementById('victoryMusicDL');
	
	if(menu)
	{
		chrome.storage.sync.get(['victoryMusicDL_V2'], function(result) {
			
			let index = menu.selectedIndex;
			let options = menu.options;
			
			
			menu.selectedIndex = -1;
			
			if(result)
				menu.selectedIndex = getIndexByValue(options, result.victoryMusicDL_V2);
			
			if(menu.selectedIndex == -1)
				menu.selectedIndex = getIndexByValue(options, 'DSOD');

		});
		
		menu.addEventListener('change', function () {
			chrome.storage.sync.set({victoryMusicDL_V2: menu.options[menu.selectedIndex].value}, function() {});
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {

	let slider = document.querySelector('input[id="musicSliderDL"]');
	
	if(slider.id == 'musicSliderDL')
	{
		chrome.storage.sync.get(['musicSliderDL'], function(result) {
			if(result && result.musicSliderDL > 0)
				slider.value = result.musicSliderDL;

		});
		
		slider.addEventListener('change', function () {
			chrome.storage.sync.set({musicSliderDL: slider.value}, function() {});
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {

	let slider = document.querySelector('input[id="musicSliderMD"]');
	
	if(slider.id == 'musicSliderMD')
	{
		chrome.storage.sync.get(['musicSliderMD'], function(result) {
			if(result && result.musicSliderMD > 0)
				slider.value = result.musicSliderMD;

		});
		
		slider.addEventListener('change', function () {
			chrome.storage.sync.set({musicSliderMD: slider.value}, function() {});
		});
	}
});

/*
function conLog(text)
{
	let cons = document.getElementById('consoleLog');
	
	cons.innerHTML = "a" + text;
}
*/
function getIndexByValue(options, value)
{
	for(let abc=0;abc < options.length;abc++)
	{
		if(options[abc].value == value)
			return options[abc].index;
	}
	
	return -1;
}