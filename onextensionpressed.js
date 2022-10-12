

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

	let slider = document.querySelector('input[id="kaibaThemeSlider"]');
	
	if(slider.id == 'kaibaThemeSlider')
	{
		chrome.storage.sync.get(['kaibaThemeSlider'], function(result) {
			if(result && result.kaibaThemeSlider > 0)
				slider.value = result.kaibaThemeSlider;

		});
		
		slider.addEventListener('change', function () {
			chrome.storage.sync.set({kaibaThemeSlider: slider.value}, function() {});
		});
	}
});