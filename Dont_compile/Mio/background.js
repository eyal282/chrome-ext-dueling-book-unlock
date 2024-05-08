chrome.webNavigation.onCommitted.addListener(function (e) {
	keepAlive();
}, { url: [{ hostSuffix: 'duelingbook.com' }] });

setInterval(function () {
	performInjection();
}, 4500);

function performInjection() {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		if (tabs[0] && tabs[0].url && (tabs[0].url.search("www.duelingbook.com") != -1 || tabs[0].url.search("https://duelingbook.com") != -1)) {
			if (typeof tabs[0].id !== 'undefined') {
				chrome.scripting.executeScript(
				{
					args: [],
					target: { tabId: tabs[0].id },
					world: "MAIN", // Main world is mandatory to edit other website functions
					func: injectFunction,
					//files: ['inject.js'],
				});
			}
		}
	});
}

let lifeline;

keepAlive();

chrome.runtime.onConnect.addListener(port => {
	if (port.name === 'keepAlive') {
		lifeline = port;
		setTimeout(keepAliveForced, 295e3); // 5 minutes minus 5 seconds
		port.onDisconnect.addListener(keepAliveForced);
	}
});

function keepAliveForced() {
	lifeline?.disconnect();
	lifeline = null;
	keepAlive();
}

async function keepAlive() {
	if (lifeline) return;
	for (const tab of await chrome.tabs.query({ url: '*://*/*' })) {
		try {
			await chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: () => chrome.runtime.connect({ name: 'keepAlive' }),
				// `function` will become `func` in Chrome 93+
			});
			chrome.tabs.onUpdated.removeListener(retryOnTabUpdate);
			return;
		} catch (e) { }
	}
	chrome.tabs.onUpdated.addListener(retryOnTabUpdate);
}

async function retryOnTabUpdate(tabId, info, tab) {
	if (info.url && /^(file|https?):/.test(info.url)) {
		keepAlive();
	}
}


/*
====================================
======= Start of inject.js =========
====================================
*/

function injectFunction()
{
	window.Eyal_OnGetCardVisualsPost = function (cardfront, thingToEdit)
	{
		Mio_ignorePendulums = false;
		Mio_cardType = undefined;
		Mio_cardRace = undefined;
		thingToEdit.find('.atk_lbl').css("color", "");
		thingToEdit.find('.def_lbl').css("color", "");
		thingToEdit.find('.card_atk_txt').css("color", "");
		thingToEdit.find('.card_def_txt').css("color", "");
		thingToEdit.find('.link_txt').css("color", "");
		thingToEdit.find('.passcode_txt').css("color", "");
		
		thingToEdit.find('.card_pendulum_effect_txt').css("left", "130px")
		thingToEdit.find('.card_pendulum_effect_txt').css("width", "555px")
		/*thingToEdit.find('.pic').css("left", "100px");
		thingToEdit.find('.pic').css("top", "217px");
		thingToEdit.find('.pic').css("width", "614px");
		thingToEdit.find('.pic').css("height", "614px");
		thingToEdit.find('.pic').css("max-height", "905px");
		*/
		thingToEdit.find('.custom').css("display", "none");
		
		thingToEdit.find(".effect_txt").css("display", "block");
		
		if(cardfront.data("pendulum"))
		{
			/*thingToEdit.find('.pic').css("left", "53px");
			thingToEdit.find('.pic').css("top", "212px");
			thingToEdit.find('.pic').css("width", "707px");
			thingToEdit.find('.pic').css("height", "528px");
			thingToEdit.find('.pic').css("max-height", "1200px");*/
		}
		if(cardfront.data("monster_color") == "Xyz")
        {
            Mio_SetCardLevelVisuals(thingToEdit, true, CARD_START + "rank.png")
        }
        else if(cardfront.data("monster_color") == "Effect" || cardfront.data("monster_color") == "Normal" || cardfront.data("monster_color") == "Fusion" || cardfront.data("monster_color") == "Synchro")
        {
            Mio_SetCardLevelVisuals(thingToEdit, false, CARD_START + "level.png")            
        }
			
		let effect = cardfront.data("effect");

		// /word/gi --> /word/Global ( all occurences ) case insensitive.
		effect = effect.replace(/This card is a Xros Monster./gi, "");
		effect = effect.replace(/This card is a Dark Synchro Monster./gi, "");
		effect = effect.replace(/This is a custom Evolve Monster card./gi, "");
		effect = effect.replace(/This is a custom card./gi, "");
		effect = effect.replace(/This card is a POSITIVE Circuit Monster./gi, "");
		effect = effect.replace(/This card is a NEGATIVE Circuit Monster./gi, "");
		effect = effect.replace(/This card is a CONNECT Circuit Monster./gi, "");
		effect = effect.replace(/This card is a Switch Monster./gi, "");
		effect = effect.replace(/This card is an Evolve Monster./gi, "");
		effect = effect.replace(/This card is a Token./gi, "");
		effect = effect.replace(/DREAM-Attribute./gi, "");

		let Mio_match = cardfront.data("effect").match(/This card is ([\w\s]+)-type\./);

		if (Mio_match)
		{
			effect = effect.replace(/This card is ([\w\s]+)-type\./gi, "");
		}

		Eyal_newEffect = effect;
		
		if (cardfront.data("ability") == "Gemini")
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/Cu0IVOK.png');
		}
		else if (cardfront.data("effect").search(/This card is a Dark Synchro Monster/i) != -1 && typeof thingToEdit.data("monster_color") !== "undefined")
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/u3ALbQM.jpg');
			Mio_SetCardLevelVisuals(thingToEdit, true, "https://i.imgur.com/BjMaWh2.png");
			Mio_SetCardTypeVisuals(thingToEdit, cardfront, true, "Dark Synchro");
			Eyal_newLevel = cardfront.data("level") * -1
		}
		else if (cardfront.data("name").search(/Obelisk the Tormentor/i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/PHhO8ss.png');
		}
		else if (cardfront.data("name").search(/The Winged Dragon of Ra/i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/Kjfd3wS.png');
		}
		else if (cardfront.data("name").search(/Slifer the Sky Dragon/i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/2w481RO.png');
		}
		else if (cardfront.data("effect").search(/This is a custom card./i) != -1)
		{
			thingToEdit.find('.pic').css("left", "0px");
			thingToEdit.find('.pic').css("top", "0px");
			thingToEdit.find('.pic').css("width", "813px");
			thingToEdit.find('.pic').css("height", "1185px");
			thingToEdit.find('.pic').css("max-height", "2000px");
			thingToEdit.find('.pic').css("z-index", "1");
		}
		else if (cardfront.data("effect").search(/This card is a POSITIVE Circuit Monster./i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/N0XXgEH.png');
			thingToEdit.find('.card_atk_txt').css("color", "red");
			thingToEdit.find('.atk_lbl').css("color", "red");
			Mio_ignorePendulums = true;
			Mio_cardType = "Circuit";
		}
		else if (cardfront.data("effect").search(/This card is a NEGATIVE Circuit Monster./i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/n62qbr1.png');
			thingToEdit.find('.card_def_txt').css("color", "blue");
			thingToEdit.find('.def_lbl').css("color", "blue");
			Mio_cardType = "Circuit";
		}
		else if (cardfront.data("effect").search(/This card is a CONNECT Circuit Monster./i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/RKQo2oB.png');
			thingToEdit.find('.card_atk_txt').css("color", "red");
			thingToEdit.find('.atk_lbl').css("color", "red");
			thingToEdit.find('.card_def_txt').css("color", "blue");
			thingToEdit.find('.def_lbl').css("color", "blue");
			Mio_cardType = "Circuit";
		}	
		else if (cardfront.data("effect").search(/This card is a Switch Monster./i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/wGPVyRg.jpg');
			Mio_ignorePendulums = true;
			Mio_cardType = "Switch";
		}		
		else if (cardfront.data("effect").search(/This card is an Evolve Monster./i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', "");
			thingToEdit.find('.card_color').attr('src', 'https://i.imgur.com/7GK9srL.png');
			thingToEdit.find('.name_txt').css("color", "white");
			thingToEdit.find('.passcode_txt').css("color", "white");
			Mio_cardType = "Evolve";
		}
		else if (cardfront.data("effect").search(/This card is a Token./i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', IMAGES_START + "card/token_front2.jpg");
		}
		else if (cardfront.data("effect").search(/At the start of the Duel, flip this card over./i) != -1)
		{
			thingToEdit.find('.card_color').attr('src', IMAGES_START + "card/skill_front2.jpg");

			thingToEdit.find(".name_txt").css("color", "white")
		}
		if (cardfront.data("effect").search(/DREAM-Attribute./i) != -1)
		{
			thingToEdit.find('.attribute').attr('src', "");
			thingToEdit.find('.attribute').attr('src', "https://i.imgur.com/RO0Pdpd.png")
		}
		// Put the type selector in the end.
		
		// From the Mio_match earlier.
		if (Mio_match)
		{
			let Mio_type = Mio_match[1];
			// "false" because we don't ignore pendulum.
			Mio_cardRace = Mio_match[1];
		}
		

		Mio_SetCardTypeVisuals(thingToEdit, cardfront, false, Mio_cardType, Mio_cardRace);
	}

	// leftToRight is "true" if it should go left to right, and "false" otherwise.
	// src is URL of the star.
	window.Mio_SetCardLevelVisuals = function(thingToEdit, leftToRight, src)
    {
		if(thingToEdit.data("monster_color") == "Link")
			return;
	  
		// Checking if "type" exists or not to ensure we're dealing with a monster.
		if(!thingToEdit.data("type"))
			return;

        // Start of Eyal282's code for the levels.
        let level = thingToEdit.data("level")
        
        // Remove whatever star it had before we start applying.
        thingToEdit.find('.level').each(function(i,e){
            $(this).remove()
        })
        thingToEdit.find('.rank').each(function(i,e){
            $(this).remove()
        })
        
        let visualName = '.level';
        let visualName13 = 'level13';
        
        if(leftToRight)
        {
            visualName = '.rank';
            visualName13 = 'rank13';
        }
            
        for (i = 0; i < level; i++) {
            if (i >= 13) {
                break;
            }

            if (thingToEdit.find(visualName).eq(i).length == 0) {
                if(leftToRight)
                    thingToEdit.addRank(i);
                    
                else
                    thingToEdit.addLevel(i);
            }
            thingToEdit.find(visualName).eq(i)[0].style.display = "block";
        }
        if (level >= 13 && !thingToEdit.hasClass(visualName13)) {
            thingToEdit.addClass(visualName13);
            thingToEdit.find(visualName).each(function(i,e){
                $(this).css("left", (83 + (54 * i)) - 27);
            });
        }
        if (level < 13 && thingToEdit.hasClass("rank13")) {
            thingToEdit.removeClass(visualName13);
            thingToEdit.find(visualName).each(function(i,e){
                $(this).css("left", (83 + (54 * i)));
            });
        }
        thingToEdit.find(visualName).each(function(i,e){
            $(this).attr("src", src)
        })
    }

	// typeName is Synchro Fusion etc...
	// raceTypeName is Warrior Fiend Psychic etc...
	window.Mio_SetCardTypeVisuals = function(thingToEdit, cardfront, ignorePendulum, typeName, raceTypeName)
	{
		// Checking if "type" exists or not to ensure we're dealing with a monster.
		if(!cardfront.data("type"))
			return;
		
		// Start of Eyal282's code for the type.
		let type_str = "";
		let type = cardfront.data("type")

		if (typeof raceTypeName !== "undefined")
			type = raceTypeName;

		let ability = cardfront.data("ability")
		let pendulum = cardfront.data("pendulum")
		let is_effect = cardfront.data("is_effect")
		let monster_color = cardfront.data("monster_color")

		type_str = '<font class="type_large">[</font> ' + getType(type);
		if (flip == 1) {
			type_str += ' / ' + getType("Flip");
		}
		if (ability) {
			type_str += ' / ' + getType(ability);
		}

		if (typeof typeName !== "undefined")
		{
			type_str += ' / ' + getType(typeName);
		}
		else
		{
			if (monster_color == "Ritual" || monster_color == "Fusion" || monster_color == "Synchro" || monster_color == "Xyz" || monster_color == "Link")
			{
				type_str += ' / ' + getType(monster_color);
			}
        }
		

		if (pendulum == 1 && !ignorePendulum) {
			type_str += ' / ' + getType("Pendulum");
		}
		if (is_effect == 1 && monster_color == "Normal") {
			type_str += ' / ' + getType("Normal");
		}
		else if (is_effect == 1 && monster_color != "Token") {
			type_str += ' / ' + getType("Effect");
		}
		
		type_str += ' <font class="type_large">]</font>';
		thingToEdit.find(".type_txt").html(type_str)
	}
}
