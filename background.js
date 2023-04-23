chrome.webNavigation.onCommitted.addListener(function(e) {
	keepAlive();
}, {url: [{hostSuffix: 'duelingbook.com'}]});


const edisonCards = [];
const negate_icon_blob = [];

function Eyal_BlobFileAsString(_path, _cb)
{
	let obj = {};
	
	fetch(_path, {mode:'same-origin'})   // <-- important
	
	.then(function(_res) {
		return _res.blob();
	})

	.then(function(_blob) {
		obj.blob = _blob;
		return obj.blob.text();
	})
	
	.then(function(_text) {
		obj.text = _text;
		return obj.blob.type;
	})
	
	.then(function(_type) {
		obj.type = _type;
		
		_cb(obj.text, obj.type);
	});
};
function Eyal_ReadFile(_path, _cb)
{

	fetch(_path, {mode:'same-origin'})   // <-- important

	.then(function(_res) {
		return _res.blob();
	})

	.then(function(_blob) {
		var reader = new FileReader();

		reader.addEventListener("loadend", function() {
			_cb(this.result);
		});

		reader.readAsText(_blob); 
	});
};

if(edisonCards.length == 0)
{
	Eyal_ReadFile("./edison_cardpool.txt", function(_res){
	
		let eyal_arr = [];
		
		_res = _res.replaceAll("\r", "");
		
		eyal_arr = _res.split('\n');
		
		for(let abc=0;abc < eyal_arr.length;abc++)
		{
			if(eyal_arr[abc][0] == ';' || eyal_arr[abc].length == 0)
				continue;
			
			edisonCards.push(eyal_arr[abc]);
		}
		
	});
}

if(negate_icon_blob.length == 0)
{
	Eyal_BlobFileAsString("./negate_icon.png", function(text, type)
	{
	
		let obj = {};
		
		obj.type = type;
		obj.text = text;
		negate_icon_blob.push(obj);
	});
}
	

setInterval(function () {
	performInjection();
}, 4500);

let Eyal_timestamp = 0;

setInterval(function () {
	Eyal_timestamp = Eyal_timestamp + 0.1;
	
	if(Eyal_timestamp >= 1.0)
	{
		Eyal_timestamp = 0.0;
		performFastInjection(true);
	}
	else
	{
		performFastInjection(false);
	}
}, 100);


setInterval(function () {
	
	performCensorInjection();
}, 500);

setInterval(function () {
	
	performBlitzInjection();
}, 100);

// This is a race

let intervalCounters = 50;

let raceInterval = setInterval(function () {
	if(intervalCounters > 0)
		intervalCounters--;
	
	else
		clearInterval(raceInterval);
	
	performInjection();
}, 250);


function performBlitzInjection()
{
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		if(tabs[0] && tabs[0].url && (tabs[0].url.search("www.duelingbook.com") != -1 || tabs[0].url.search("https://duelingbook.com") != -1))
		{
			if(typeof tabs[0].id !== 'undefined')
			{
				chrome.scripting.executeScript(
				{
					args: [],
					target: {tabId: tabs[0].id},
					world: "MAIN", // Main world is mandatory to edit other website functions
					func: blitzInjectFunction,
					//files: ['inject.js'],
				});
			}
		}
	}); 
}

function performFastInjection(bSecond)
{
	// Is the extension user dueling? "duel_active" is for dueling and watching, while "duelist" is only for dueling
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		if(tabs[0] && tabs[0].url && (tabs[0].url.search("www.duelingbook.com") != -1 || tabs[0].url.search("https://duelingbook.com") != -1))
		{
			if(typeof tabs[0].id !== 'undefined')
			{
				chrome.storage.sync.get(['potOfSwitch', 'femOfSwitch', 'normalMusicDL', 'victoryMusicDL_V2', 'musicSliderDL', 'limitedCardsSound', 'cardLogging', 'randomRPS'], function(result)
				{
					let potOfSwitch = false;
					
					if(result && result.potOfSwitch == true)
						potOfSwitch = true;
				
					let femOfSwitch = false;
					
					if(result && result.femOfSwitch == true)
						femOfSwitch = true;
					
					let musicSliderDL = 0;
					
					if(result && result.musicSliderDL > 0)
						musicSliderDL = result.musicSliderDL;
					
					let limitedCardsSound = true;
					
					if(result && result.limitedCardsSound == false)
						limitedCardsSound = false;
					
					let cardLogging = true;
					
					if(result && result.cardLogging == false)
						cardLogging = false;
					
					let randomRPS = false;
					
					if(result && result.randomRPS == true)
						randomRPS = result.randomRPS;
						
					
					chrome.scripting.executeScript(
					{
						args: [potOfSwitch, femOfSwitch, musicSliderDL, limitedCardsSound, cardLogging, randomRPS, bSecond],
						target: {tabId: tabs[0].id},
						world: "MAIN", // Main world is mandatory to edit other website functions
						func: fastInjectFunction,
						//files: ['inject.js'],
					});
				});
			}
		}
	}); 
}

function performInjection()
{
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		if(tabs[0] && tabs[0].url && (tabs[0].url.search("www.duelingbook.com") != -1 || tabs[0].url.search("https://duelingbook.com") != -1))
		{
			if(typeof tabs[0].id !== 'undefined')
			{
				chrome.storage.sync.get(['unlockCardMechanics', 'silentCommands', 'potOfSwitch', 'femOfSwitch', 'normalMusicDL', 'victoryMusicDL_V2', 'musicSliderDL', 'musicSliderMD', 'limitedCardsSound', 'cardLogging'], function(result)
				{
					let unlockCardMechanics = true;
					
					if(result && result.unlockCardMechanics == false)
						unlockCardMechanics = false;
					
					let silentCommands = false;
					
					if(result && result.silentCommands == true)
						silentCommands = true;
					
					let potOfSwitch = false;
					
					if(result && result.potOfSwitch == true)
						potOfSwitch = true;
				
					let femOfSwitch = false;
					
					if(result && result.femOfSwitch == true)
						femOfSwitch = true;
					
					let normalMusicDL = "kaibaDSOD";
					
					if(result && result.normalMusicDL)
						normalMusicDL = result.normalMusicDL;
					
					let victoryMusicDL = "DSOD";
					
					if(result && result.victoryMusicDL_V2)
						victoryMusicDL = result.victoryMusicDL_V2;
					
					let musicSliderDL = 0;
					
					if(result && result.musicSliderDL > 0)
						musicSliderDL = result.musicSliderDL;
					
					let musicSliderMD = 0;
					
					if(result && result.musicSliderMD > 0)
						musicSliderMD = result.musicSliderMD;
					
					let limitedCardsSound = true;
					
					if(result && result.limitedCardsSound == false)
						limitedCardsSound = false;
					
					let cardLogging = true;
					
					if(result && result.cardLogging == false)
						cardLogging = false;
						
					
					chrome.scripting.executeScript(
					{
						args: [unlockCardMechanics, silentCommands, potOfSwitch, femOfSwitch, normalMusicDL, victoryMusicDL, musicSliderDL, musicSliderMD, limitedCardsSound, cardLogging, edisonCards, negate_icon_blob],
						target: {tabId: tabs[0].id},
						world: "MAIN", // Main world is mandatory to edit other website functions
						func: injectFunction,
						//files: ['inject.js'],
					});
				});
			}
		}
	}); 
}

function performCensorInjection()
{
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		if(tabs[0] && tabs[0].url && (tabs[0].url.search("www.duelingbook.com") != -1 || tabs[0].url.search("https://duelingbook.com") != -1))
		{
			console.log(tabs[0].url);
			if(typeof tabs[0].id !== 'undefined')
			{
				chrome.storage.sync.get(['potOfSwitch', 'femOfSwitch'], function(result)
				{
					let potOfSwitch = false;
					
					if(result && result.potOfSwitch == true)
						potOfSwitch = true;
				
					let femOfSwitch = false;
					
					if(result && result.femOfSwitch == true)
						femOfSwitch = true;
					
					chrome.scripting.executeScript(
					{
						args: [potOfSwitch, femOfSwitch],
						target: {tabId: tabs[0].id},
						world: "MAIN", // Main world is mandatory to edit other website functions
						func: censorInjectFunction,
						//files: ['inject.js'],
					});
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
    } catch (e) {}
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

/*
=== List of Effects that generate mechanics ===

1. This card can attack from your Pendulum Scale
2. This card can attack during your opponent's battle phase
3. This card can attack while in face-up Defense Position
4. You can Set this card from your hand to your Spell
5. each player swaps the cards in their graveyard with the cards in their deck
6. swap the cards in your graveyard with the cards in your deck
7. Shuffle this card face-up into your opponent's Deck
8. Shuffle 1 "Archetype" card face-up into your opponent's Deck.
9. Shuffle 1 "Archetype" monster face-up into your opponent's Deck.
10. pay half your LP
11. Special Summon 1 "Gorz Token"
12. Special Summon 4 "Named Tokens"
13. Special Summon as many "Named Tokens" (Stats Here!!!) as possible
14. Excavate the top 5 cards
15. Excavate the top card of
16. You can Special Summon this card (from your hand) to your opponent's field
17. Special Summoned (from your hand) to your opponent's field
18. Normal Summon to that side of the field
*/

function blitzInjectFunction()
{
	if (window.Eyal_waitingForAction)
	{
		if (actionsQueue.length > 0)
			window.Eyal_waitingForAction = false;
    }
}

function fastInjectFunction(potOfSwitch, femOfSwitch, musicSliderDL, limitedCardsSound, cardLogging, randomRPS, bSecond)
{
	if(duelist && typeof Eyal_swapCardMenuForPlayer == "function")
	{
		if(actionsQueue.indexOf(simultaneousDraw) >= 0)
		{
			window.GYwarning = [];
		}
		
		Eyal_swapCardMenuForPlayer(player1);
		Eyal_swapCardMenuForPlayer(player2);
		
		if(tag_duel)
		{
			Eyal_swapCardMenuForPlayer(player3)
			Eyal_swapCardMenuForPlayer(player4)
		}
	}	
	
	if(bSecond && randomRPS && duelist && player1.username == username)
	{
		if(currentLabel == "rps_start" && !pickedRPS && typeof rock1 !== 'undefined' && typeof paper1 !== 'undefined' && typeof scissors1 !== 'undefined')
		{
			let arr = [rock1[0], paper1[0], scissors1[0]];
			arr[Eyal_getRandomInt(0, arr.length-1)].click();
		}
	}
}

function censorInjectFunction(potOfSwitch, femOfSwitch)
{
	window.loadThumbnails = function(data) {
		$('#' + currentLabel + ' .prev_thumb_btn').hide();
		$('#' + currentLabel + ' .next_thumb_btn').hide();
		$('#' + currentLabel + ' .thumbs .thumbnail').css("opacity", 0);
		$('#' + currentLabel + ' .thumbs .thumbnail .nsfw').hide();
		totalThumbs = data.pics.length;
		var thumbs = $('#' + currentLabel + ' .thumbs .thumbnail');
		for (var i = 0; i < thumbs.length; i++) {
			var thumb = thumbs.eq(i);
			thumb.off("click", uploadAvatarE);
			thumb.off("click", onThumbClick);
			if (data.pics.length >= i + 1) {
				thumb.data("index", i);
				thumb.data("id", data.ids[i]);
				thumb.data("nsfw", data.nsfws[i]);
				
				
				thumb.find('img').attr("src", IMAGES_START + "loading.gif");
				if (!data.nsfws[i] || always_show_nsfw)
				{
					thumb.find('img').attr("src", getAvatarStart(data.pics[i]));
				}
				
				thumb.click(onThumbClick);
				if (selectedThumb > 1) {
					$('#' + currentLabel + ' .prev_thumb_btn').show();
				}
				if (i < data.pics.length - 1) {
					$('#' + currentLabel + ' .next_thumb_btn').show();
				}
				if (data.pic == data.pics[i]) {
					$('#' + currentLabel + ' .profile_avatar').data("id", data.ids[i]);
				}
				thumb.find('.no_image').hide();
			}
			else {
				thumb.find('img').attr("src", IMAGES_START + "blank.png");
				thumb.find('.no_image').show();
				thumb.click(uploadAvatarE);
			}
			thumb.data("index", i);
			TweenMax.to(thumb, (i * 200 + 342) / 1000, {onComplete:function(){
				$(this.target).css("opacity", 1);
			}});
		}
		$('#' + currentLabel + ' .thumbs').show();
	}
	window.Avatar = function(data)
	{
		if (data.p) {
			data.pic = data.p;
		}
		if (data.u) {
			data.username = data.u;
		}
		
		var avatar = $('<div class="avatar"></div>');
		if (data.pic)
		{
			if(!data.nsfw || always_show_nsfw)
			{
				avatar.data("pic", getAvatarStart(data.pic));
			}
			else
			{
				avatar.data("pic", IMAGES_START + "loading.gif");
			}
		}
		avatar.click(function(){
			loadProfile(data.username);
		});
		
		var frame = $('<img class="avatar_frame" src="' + IMAGES_START + 'svg/avatar_red.svg" />');
		if (data.username == username) {
			frame.attr("src", IMAGES_START + "svg/avatar_teal.svg");
		}
		
		var img = $('<img class="image" width="256" height="256" />');
		if (data.delay || !data.pic) {
			img.attr("src", IMAGES_START + "loading.gif");
			avatar.data("started", false);
		}
		else {
			if(!data.nsfw || always_show_nsfw)
			{
				img.attr("src", getAvatarStart(data.pic));
			}
			avatar.data("started", true);
		}
		
		
		avatar.append(frame);
		if (!data.nsfw || always_show_nsfw)
		{
			avatar.append(img);
		}
		
		return avatar;
	}
	
	window.Eyal_checkCensors = function()
	{
		if(typeof window.Eyal_TextImages === "undefined")
		{
			window.Eyal_TextImages = [];
		}
		
		let Eyal_cards = [];
		
		for(let abc=0;abc < deck_arr.length;abc++)
		{
			Eyal_cards.push(deck_arr[abc]);
		}
		
		for(let abc=0;abc < side_arr.length;abc++)
		{
			Eyal_cards.push(side_arr[abc]);
		}
		
		for(let abc=0;abc < extra_arr.length;abc++)
		{
			Eyal_cards.push(extra_arr[abc]);
		}
		
		for(let abc=0;abc < search_arr.length;abc++)
		{
			Eyal_cards.push(search_arr[abc]);
		}
		
		if(typeof player1 !== 'undefined' && player1 != null && typeof player1.all_cards_arr !== 'undefined')
		{
			for(let abc=0;abc < player1.all_cards_arr.length;abc++)
			{
				Eyal_cards.push(player1.all_cards_arr[abc]);
			}
		}
		
		if(typeof player2 !== 'undefined' && player2 != null && typeof player2.all_cards_arr !== 'undefined')
		{
			for(let abc=0;abc < player2.all_cards_arr.length;abc++)
			{
				Eyal_cards.push(player2.all_cards_arr[abc]);
			}
		}
		
		if(typeof player3 !== 'undefined' && player3 != null && typeof player3.all_cards_arr !== 'undefined')
		{
			for(let abc=0;abc < player3.all_cards_arr.length;abc++)
			{
				Eyal_cards.push(player3.all_cards_arr[abc]);
			}
		}
		
		if(typeof player4 !== 'undefined' && player4 != null && typeof player4.all_cards_arr !== 'undefined')
		{
			for(let abc=0;abc < player4.all_cards_arr.length;abc++)
			{
				Eyal_cards.push(player4.all_cards_arr[abc]);
			}
		}
		
	
		if(femOfSwitch && typeof Eyal_femaleCards !== "undefined")
		{
			for(let abc=0;abc < Eyal_cards.length;abc++)
			{
				if(typeof Eyal_cards[abc].data === 'undefined')
					continue;
				
				if(Eyal_cards[abc].data("cardfront"))
					Eyal_cards[abc] = Eyal_cards[abc].data("cardfront");
				
				if(Eyal_femaleCards.indexOf(Eyal_cards[abc].data("name")) != -1 && Eyal_cards[abc].find('.pic').attr("src").indexOf("card-pics") >= 0)
				{
					Eyal_cards[abc].removeImage();
					
					let obj = Eyal_TextImages.find(o => o.name === Eyal_cards[abc].data("name"));
					
					if(obj)
					{
						Eyal_cards[abc].find('.pic').attr("src", obj.pic);
						continue;
					}
					
					let canvas = document.createElement("canvas");
					let context = canvas.getContext("2d");
					
					context.fillStyle = "white";
					context.fillRect(0, 0, 350, 350);
					
					context.fillStyle = "black";
					context.font = "42px MatrixRegularSmallCaps";
					
					let segments = [];
					segments = Eyal_cards[abc].data("name").split(" ");
					
					// Bring back the spaces.
					for(let abc=0;abc < segments.length;abc++)
					{
						segments[abc] = segments[abc] + " ";
					}
					
					if(segments.length > 1)
					{
						// Notice the limit where we loop until the second to last element, rather than until the last element.
						for(let abc=0;abc < segments.length - 1;abc++)
						{
							
							if(segments[abc].length + segments[abc + 1].length <= 12)
							{
								segments[abc] = segments[abc] + segments[abc + 1];
								segments.splice(abc + 1, 1);
								// Return to the beginning.
								abc = 0;
							}
						}
					}
					
					let x = 15;
					let y = 30;
					
					for(let abc=0;abc < segments.length;abc++)
					{
						context.fillText(segments[abc], x, y);	
						
						y += 35;
					}
							
					let imageURL = canvas.toDataURL();
					
					Eyal_cards[abc].find('.pic').attr("src", imageURL);
					
					// We already created obj above.
					obj = {};
					
					obj.name = Eyal_cards[abc].data("name");
					obj.pic = imageURL;
					
					Eyal_TextImages.push(obj);
				}
			}
		}
		for(let abc=0;abc < Eyal_cards.length;abc++)
		{
			if(typeof Eyal_cards[abc].data === 'undefined')
				continue;
			
			if(Eyal_cards[abc].data("cardfront"))
				Eyal_cards[abc] = Eyal_cards[abc].data("cardfront");
			
			if(Eyal_cards[abc].data("effect") && Eyal_cards[abc].data("effect").search(/(This card is an Evolve Monster)/i) != -1)
			{
				Eyal_cards[abc].find('.card_color').attr('src', "https://i.ibb.co/XzGbZ6p/Evolution-cardtype.png");
				
				
				Eyal_cards[abc].find(".name_txt").css("color", "white")
			}
			else if(Eyal_cards[abc].data("effect") && Eyal_cards[abc].data("effect").search(/(This card is a Token)/i) != -1)
			{
				Eyal_cards[abc].find('.card_color').attr('src', IMAGES_START + "card/token_front2.jpg");
			}
			else if(Eyal_cards[abc].data("effect") && Eyal_cards[abc].data("effect").search(/At the start of the Duel, flip this card over/i) != -1)
			{
				Eyal_cards[abc].find('.card_color').attr('src', IMAGES_START + "card/skill_front2.jpg");
				
				Eyal_cards[abc].find(".name_txt").css("color", "white")
			}
			if(Eyal_cards[abc].data("effect") && Eyal_cards[abc].data("effect").search(/this card is DREAM-Attribute/i) != -1)
			{
				Eyal_cards[abc].find('.attribute').attr('src', "https://i.ibb.co/X2VSTR0/dream2-en.png")
			}
		}
	}
	
	Eyal_checkCensors();
}

function injectFunction(unlockCardMechanics, silentCommands, potOfSwitch, femOfSwitch, normalMusicDL, victoryMusicDL, musicSliderDL, musicSliderMD, limitedCardsSound, cardLogging, edisonCards, negate_icon_blob)
{
//	let Eyal_blob = new Blob([negate_icon_blob[0].text], {type: negate_icon_blob[0].type});
	
	//window.Eyal_blob2 = Eyal_blob;
	// Expression eval. What is this black magic? How does it even work?
	// https://www.npmjs.com/package/math-expression-evaluator/v/2.0.2?activeTab=code
	
	if(typeof Mexp === "undefined")
	{
		!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Mexp=t()}(this,(function(){"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.apply(this,arguments)}var t,n={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0,14:-1};function a(e,t){for(var n=0;n<e.length;n++)e[n]+=t;return e}!function(e){e[e.FUNCTION_WITH_ONE_ARG=0]="FUNCTION_WITH_ONE_ARG",e[e.NUMBER=1]="NUMBER",e[e.BINARY_OPERATOR_HIGH_PRECENDENCE=2]="BINARY_OPERATOR_HIGH_PRECENDENCE",e[e.CONSTANT=3]="CONSTANT",e[e.OPENING_PARENTHESIS=4]="OPENING_PARENTHESIS",e[e.CLOSING_PARENTHESIS=5]="CLOSING_PARENTHESIS",e[e.DECIMAL=6]="DECIMAL",e[e.POSTFIX_FUNCTION_WITH_ONE_ARG=7]="POSTFIX_FUNCTION_WITH_ONE_ARG",e[e.FUNCTION_WITH_N_ARGS=8]="FUNCTION_WITH_N_ARGS",e[e.BINARY_OPERATOR_LOW_PRECENDENCE=9]="BINARY_OPERATOR_LOW_PRECENDENCE",e[e.BINARY_OPERATOR_PERMUTATION=10]="BINARY_OPERATOR_PERMUTATION",e[e.COMMA=11]="COMMA",e[e.EVALUATED_FUNCTION=12]="EVALUATED_FUNCTION",e[e.EVALUATED_FUNCTION_PARAMETER=13]="EVALUATED_FUNCTION_PARAMETER",e[e.SPACE=14]="SPACE"}(t||(t={}));var o={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0,14:!0},h={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},r={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},u={},s={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},p={1:!0},i=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"," ","&"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];function l(e,t,n,a){for(var o=0;o<a;o++)if(e[n+o]!==t[o])return!1;return!0}function v(e){for(var a=0;a<e.length;a++){var o=e[a].token.length,h=-1;e[a].type===t.FUNCTION_WITH_N_ARGS&&void 0===e[a].numberOfArguments&&(e[a].numberOfArguments=2),i[o]=i[o]||[];for(var r=0;r<i[o].length;r++)if(e[a].token===i[o][r]){h=f(i[o][r],this.tokens);break}-1===h?(this.tokens.push(e[a]),e[a].precedence=n[e[a].type],i.length<=e[a].token.length&&(i[e[a].token.length]=[]),i[e[a].token.length].push(e[a].token)):(this.tokens[h]=e[a],e[a].precedence=n[e[a].type])}}function f(e,t){for(var n=0;n<t.length;n++)if(t[n].token===e)return n;return-1}var y=function(e,t){var n,v={value:this.math.changeSign,type:0,precedence:1,show:"-"},y={value:")",show:")",type:5,precedence:0},c={value:"(",type:4,precedence:0,show:"("},w=[c],m=[],E=e,g=o,N=0,d=u,A="";void 0!==t&&this.addToken(t);var k=function(e,t){for(var n,a,o,h=[],r=t.length,u=0;u<r;u++)if(!(u<r-1&&" "===t[u]&&" "===t[u+1])){for(n="",a=t.length-u>i.length-2?i.length-1:t.length-u;a>0;a--)if(void 0!==i[a])for(o=0;o<i[a].length;o++)l(t,i[a][o],u,a)&&(n=i[a][o],o=i[a].length,a=0);if(u+=n.length-1,""===n)throw new Error("Can't understand after "+t.slice(u));h.push(e.tokens[f(n,e.tokens)])}return h}(this,E);for(n=0;n<k.length;n++){var M=k[n];if(14!==M.type){var O,T=M.token,_=M.type,I=M.value,P=M.precedence,R=M.show,C=w[w.length-1];for(O=m.length;O--&&0===m[O];)if(-1!==[0,2,3,4,5,9,10,11,12,13].indexOf(_)){if(!0!==g[_])throw new Error(T+" is not allowed after "+A);w.push(y),g=h,d=s,m.pop()}if(!0!==g[_])throw new Error(T+" is not allowed after "+A);!0===d[_]&&(_=2,I=this.math.mul,R="&times;",P=3,n-=1);var S={value:I,type:_,precedence:P,show:R,numberOfArguments:M.numberOfArguments};if(0===_)g=o,d=u,a(m,2),w.push(S),4!==k[n+1].type&&(w.push(c),m.push(2));else if(1===_)1===C.type?(C.value+=I,a(m,1)):w.push(S),g=h,d=r;else if(2===_)g=o,d=u,a(m,2),w.push(S);else if(3===_)w.push(S),g=h,d=s;else if(4===_)a(m,1),N++,g=o,d=u,w.push(S);else if(5===_){if(!N)throw new Error("Closing parenthesis are more than opening one, wait What!!!");N--,g=h,d=s,w.push(S),a(m,1)}else if(6===_){if(C.hasDec)throw new Error("Two decimals are not allowed in one number");1!==C.type&&(C={show:"0",value:0,type:1,precedence:0},w.push(C)),g=p,a(m,1),d=u,C.value+=I,C.hasDec=!0}else 7===_&&(g=h,d=s,a(m,1),w.push(S));8===_?(g=o,d=u,a(m,M.numberOfArguments+2),w.push(S),4!==k[n+1].type&&(w.push(c),m.push(M.numberOfArguments+2))):9===_?(9===C.type?C.value===this.math.add?(C.value=I,C.show=R,a(m,1)):C.value===this.math.sub&&"-"===R&&(C.value=this.math.add,C.show="+",a(m,1)):5!==C.type&&7!==C.type&&1!==C.type&&3!==C.type&&13!==C.type?"-"===T&&(g=o,d=u,a(m,2).push(2),w.push(v),w.push(c)):(w.push(S),a(m,2)),g=o,d=u):10===_?(g=o,d=u,a(m,2),w.push(S)):11===_?(g=o,d=u,w.push(S)):12===_?(g=o,d=u,a(m,6),w.push(S),4!==k[n+1].type&&(w.push(c),m.push(6))):13===_&&(g=h,d=s,w.push(S)),a(m,-1),A=T}else if(n>0&&n<k.length-1&&1===k[n+1].type&&(1===k[n-1].type||6===k[n-1].type))throw new Error("Unexpected Space")}for(O=m.length;O--;)w.push(y);if(!0!==g[5])throw new Error("complete the expression");for(;N--;)w.push(y);return w.push(y),w};function c(e){for(var t,n,a,o=[],h=-1,r=-1,u=[{value:"(",type:4,precedence:0,show:"("}],s=1;s<e.length;s++)if(1===e[s].type||3===e[s].type||13===e[s].type)1===e[s].type&&(e[s].value=Number(e[s].value)),o.push(e[s]);else if(4===e[s].type)u.push(e[s]);else if(5===e[s].type)for(;4!==(null==(p=n=u.pop())?void 0:p.type);){var p;n&&o.push(n)}else if(11===e[s].type){for(;4!==(null==(i=n=u.pop())?void 0:i.type);){var i;n&&o.push(n)}u.push(n)}else{r=(t=e[s]).precedence,h=(a=u[u.length-1]).precedence;var l="Math.pow"==a.value&&"Math.pow"==t.value;if(r>h)u.push(t);else{for(;h>=r&&!l||l&&r<h;)n=u.pop(),a=u[u.length-1],n&&o.push(n),h=a.precedence,l="Math.pow"==t.value&&"Math.pow"==a.value;u.push(t)}}return o}function w(e,t){(t=t||{}).PI=Math.PI,t.E=Math.E;for(var n,a,o,h=[],r=void 0!==t.n,u=0;u<e.length;u++)if(1===e[u].type)h.push({value:e[u].value,type:1});else if(3===e[u].type)h.push({value:t[e[u].value],type:1});else if(0===e[u].type){var s=h[h.length-1];Array.isArray(s)?s.push(e[u]):s.value=e[u].value(s.value)}else if(7===e[u].type){var p=h[h.length-1];Array.isArray(p)?p.push(e[u]):p.value=e[u].value(p.value)}else if(8===e[u].type){for(var i=[],l=0;l<e[u].numberOfArguments;l++){var v=h.pop();v&&i.push(v.value)}h.push({type:1,value:e[u].value.apply(e[u],i.reverse())})}else if(10===e[u].type)n=h.pop(),a=h.pop(),Array.isArray(a)?((a=a.concat(n)).push(e[u]),h.push(a)):Array.isArray(n)?(n.unshift(a),n.push(e[u]),h.push(n)):h.push({type:1,value:e[u].value(a.value,n.value)});else if(2===e[u].type||9===e[u].type)n=h.pop(),a=h.pop(),Array.isArray(a)?((a=a.concat(n)).push(e[u]),h.push(a)):Array.isArray(n)?(n.unshift(a),n.push(e[u]),h.push(n)):h.push({type:1,value:e[u].value(a.value,n.value)});else if(12===e[u].type){n=h.pop();var f=void 0;f=!Array.isArray(n)&&n?[n]:n||[],a=h.pop(),o=h.pop(),h.push({type:1,value:e[u].value(o.value,a.value,f)})}else 13===e[u].type&&(r?h.push({value:t[e[u].value],type:3}):h.push([e[u]]));if(h.length>1)throw new Error("Uncaught Syntax error");return parseFloat(h[0].value.toFixed(15))}var m=function(){function t(){var t;this.toPostfix=c,this.addToken=v,this.lex=y,this.postfixEval=w,this.math=(t=this,{isDegree:!0,acos:function(e){return t.math.isDegree?180/Math.PI*Math.acos(e):Math.acos(e)},add:function(e,t){return e+t},asin:function(e){return t.math.isDegree?180/Math.PI*Math.asin(e):Math.asin(e)},atan:function(e){return t.math.isDegree?180/Math.PI*Math.atan(e):Math.atan(e)},acosh:function(e){return Math.log(e+Math.sqrt(e*e-1))},asinh:function(e){return Math.log(e+Math.sqrt(e*e+1))},atanh:function(e){return Math.log((1+e)/(1-e))},C:function(e,n){var a=1,o=e-n,h=n;h<o&&(h=o,o=n);for(var r=h+1;r<=e;r++)a*=r;var u=t.math.fact(o);return"NaN"===u?"NaN":a/u},changeSign:function(e){return-e},cos:function(e){return t.math.isDegree&&(e=t.math.toRadian(e)),Math.cos(e)},cosh:function(e){return(Math.pow(Math.E,e)+Math.pow(Math.E,-1*e))/2},div:function(e,t){return e/t},fact:function(e){if(e%1!=0)return"NaN";for(var t=1,n=2;n<=e;n++)t*=n;return t},inverse:function(e){return 1/e},log:function(e){return Math.log(e)/Math.log(10)},mod:function(e,t){return e%t},mul:function(e,t){return e*t},P:function(e,t){for(var n=1,a=Math.floor(e)-Math.floor(t)+1;a<=Math.floor(e);a++)n*=a;return n},Pi:function(e,n,a){for(var o=1,h=e;h<=n;h++)o*=Number(t.postfixEval(a,{n:h}));return o},pow10x:function(e){for(var t=1;e--;)t*=10;return t},sigma:function(e,n,a){for(var o=0,h=e;h<=n;h++)o+=Number(t.postfixEval(a,{n:h}));return o},sin:function(e){return t.math.isDegree&&(e=t.math.toRadian(e)),Math.sin(e)},sinh:function(e){return(Math.pow(Math.E,e)-Math.pow(Math.E,-1*e))/2},sub:function(e,t){return e-t},tan:function(e){return t.math.isDegree&&(e=t.math.toRadian(e)),Math.tan(e)},tanh:function(e){return t.math.sinh(e)/t.math.cosh(e)},toRadian:function(e){return e*Math.PI/180},and:function(e,t){return e&t}}),this.tokens=function(t){return[{token:"sin",show:"sin",type:0,value:t.math.sin},{token:"cos",show:"cos",type:0,value:t.math.cos},{token:"tan",show:"tan",type:0,value:t.math.tan},{token:"pi",show:"&pi;",type:3,value:"PI"},{token:"(",show:"(",type:4,value:"("},{token:")",show:")",type:5,value:")"},{token:"P",show:"P",type:10,value:t.math.P},{token:"C",show:"C",type:10,value:t.math.C},{token:" ",show:" ",type:14,value:" ".anchor},{token:"asin",show:"asin",type:0,value:t.math.asin},{token:"acos",show:"acos",type:0,value:t.math.acos},{token:"atan",show:"atan",type:0,value:t.math.atan},{token:"7",show:"7",type:1,value:"7"},{token:"8",show:"8",type:1,value:"8"},{token:"9",show:"9",type:1,value:"9"},{token:"int",show:"Int",type:0,value:Math.floor},{token:"cosh",show:"cosh",type:0,value:t.math.cosh},{token:"acosh",show:"acosh",type:0,value:t.math.acosh},{token:"ln",show:" ln",type:0,value:Math.log},{token:"^",show:"^",type:10,value:Math.pow},{token:"root",show:"root",type:0,value:Math.sqrt},{token:"4",show:"4",type:1,value:"4"},{token:"5",show:"5",type:1,value:"5"},{token:"6",show:"6",type:1,value:"6"},{token:"/",show:"&divide;",type:2,value:t.math.div},{token:"!",show:"!",type:7,value:t.math.fact},{token:"tanh",show:"tanh",type:0,value:t.math.tanh},{token:"atanh",show:"atanh",type:0,value:t.math.atanh},{token:"Mod",show:" Mod ",type:2,value:t.math.mod},{token:"1",show:"1",type:1,value:"1"},{token:"2",show:"2",type:1,value:"2"},{token:"3",show:"3",type:1,value:"3"},{token:"*",show:"&times;",type:2,value:t.math.mul},{token:"sinh",show:"sinh",type:0,value:t.math.sinh},{token:"asinh",show:"asinh",type:0,value:t.math.asinh},{token:"e",show:"e",type:3,value:"E"},{token:"log",show:" log",type:0,value:t.math.log},{token:"0",show:"0",type:1,value:"0"},{token:".",show:".",type:6,value:"."},{token:"+",show:"+",type:9,value:t.math.add},{token:"-",show:"-",type:9,value:t.math.sub},{token:",",show:",",type:11,value:","},{token:"Sigma",show:"&Sigma;",type:12,value:t.math.sigma},{token:"n",show:"n",type:13,value:"n"},{token:"Pi",show:"&Pi;",type:12,value:t.math.Pi},{token:"pow",show:"pow",type:8,value:Math.pow,numberOfArguments:2},{token:"&",show:"&",type:9,value:t.math.and}].map((function(t){return e({},t,{precedence:n[t.type]})}))}(this)}return t.prototype.eval=function(e,t,n){return this.postfixEval(this.toPostfix(this.lex(e,t)),n)},t}();return m.TOKEN_TYPES=t,m.tokenTypes=t,m}));
	}
	
	window.Eyal_unlockCardMechanics = unlockCardMechanics;
	window.Eyal_silentCommands = silentCommands;
	window.Eyal_EdisonCardpool = edisonCards;
	
	window.Eyal_ActionQueueDoNothing = function()
	{
		return;
	}
	
	if(typeof Eyal_checkHeartbeat !== "undefined")
		console.log("Beat");
	
	window.Eyal_OnKeyPressed = function(evt)
	{
		if(Eyal_unlockCardMechanics)
		{
			// ESC
			if (evt.keyCode == 27)
			{
				if(viewing)
				{
					$("#view .exit_btn").click();
				}

				hideSelectZones();
			}
		}
	}
	window.Eyal_getNormalMusicURL = function(abcdef)
	{
		if(!abcdef)
			abcdef = 0;
		
		switch(normalMusicDL)
		{
			case "victoryMusic":
				if(abcdef >= 3)
				{
					return "https://drive.google.com/uc?id=17n_G-tGRVyQb2T6j4JuX2jzHDsz7oN2Z&export=download";
				}
				else
				{
					return Eyal_getVictoryMusicURL(abcdef + 1);
				}
				break;
				
			case "kaibaDSOD":
				return "https://drive.google.com/uc?id=1b5a7Yl1JkIwLU3cVUPaooqM3IM7l_IJO&export=download"
				break;
			
			case "kaibaSTD":
				return "https://drive.google.com/uc?id=1mwYBJKBu8Nr1LZgff-ZBjbEyOTRUISfH&export=download"
				break;
				
			case "jadenGX":
				return "https://drive.google.com/uc?id=1jnk9dynB12az5Gj51cdJEFD88n4TlnDD&export=download"
				break;
				
			case "alexisGX":
				return "https://drive.google.com/uc?id=1pCNuYhwEfPSK6aVHnl_wCbh6HfKVqMT6&export=download";
				break;
				
			case "profile":
				if(my_profile_data == null)
					return "https://drive.google.com/uc?id=1b5a7Yl1JkIwLU3cVUPaooqM3IM7l_IJO&export=download"
				
				else if(my_profile_data.loading)
					return "Retry";
				
				else if(typeof my_profile_data.song === 'undefined')
					return "https://drive.google.com/uc?id=1b5a7Yl1JkIwLU3cVUPaooqM3IM7l_IJO&export=download"
				
				else if(typeof my_profile_data.song.original_url === 'undefined')
					return "https://drive.google.com/uc?id=1b5a7Yl1JkIwLU3cVUPaooqM3IM7l_IJO&export=download"
				
				else if(my_profile_data.song.original_url == "")
					return "https://drive.google.com/uc?id=1b5a7Yl1JkIwLU3cVUPaooqM3IM7l_IJO&export=download"
				
				return my_profile_data.song.original_url;
				break;
		}
	}
	
	window.Eyal_getVictoryMusicURL = function(abcdef)
	{
		if(!abcdef)
			abcdef = 0;
		
		switch(victoryMusicDL)
		{
			case "normalMusic":
				if(abcdef >= 3)
				{
					return "https://drive.google.com/uc?id=1b5a7Yl1JkIwLU3cVUPaooqM3IM7l_IJO&export=download";
				}
				else
				{
					return Eyal_getNormalMusicURL(abcdef + 1);
				}
				break;
				
			case "DMGX":
				return "https://drive.google.com/uc?id=1CCOPyX3mwQfTUgPZRLyq6Bjf2aStjtq3&export=download";
				break;
				
			case "DSOD":
				return "https://drive.google.com/uc?id=17n_G-tGRVyQb2T6j4JuX2jzHDsz7oN2Z&export=download";
				break;
				
			case "5Ds":
				return "https://drive.google.com/uc?id=1wr3gdiJBJ4zU4deuBX2LwP_Cz_P6wg8N&export=download"
				break;
			
			case "ArcV":
				return "https://drive.google.com/uc?id=1q23d0ySZflsMX9cdDR-0AwVvGD4UM9BJ&export=download"
				break;
				
			case "ZEXAL":
				return "https://drive.google.com/uc?id=1d1OzoqfZ2pgVBXXv5q00wo3vsq8ek34y&export=download"
				break;
				
			case "kiteAceZEXAL":
				return "https://drive.google.com/uc?id=1usqlxqHby-dVcGjUxahZOKk4YlyVbbJl&export=download";
				break;
		
			case "kaibaSTD":
				return "https://drive.google.com/uc?id=1mwYBJKBu8Nr1LZgff-ZBjbEyOTRUISfH&export=download"
				break;
				
			case "profile":
				if(my_profile_data == null)
					return "https://drive.google.com/uc?id=17n_G-tGRVyQb2T6j4JuX2jzHDsz7oN2Z&export=download"
				
				else if(my_profile_data.loading)
					return "Retry";
				
				else if(typeof my_profile_data.song === 'undefined')
					return "https://drive.google.com/uc?id=17n_G-tGRVyQb2T6j4JuX2jzHDsz7oN2Z&export=download"
				
				else if(typeof my_profile_data.song.original_url === 'undefined')
					return "https://drive.google.com/uc?id=17n_G-tGRVyQb2T6j4JuX2jzHDsz7oN2Z&export=download"
				
				else if(my_profile_data.song.original_url == "")
					return "https://drive.google.com/uc?id=17n_G-tGRVyQb2T6j4JuX2jzHDsz7oN2Z&export=download"
				
				return my_profile_data.song.original_url;
				break;
		}
	}
	
	async function importSounds()
	{
		let Eyal_music = $('#Eyal_music')[0];
		let Eyal_brinkMusic = $('#Eyal_brinkMusic')[0];
		
		if(typeof Eyal_music === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_music = $(`<audio src="https://cdn.freesound.org/previews/649/649769_14275923-lq.mp3" id="Eyal_music" loop=true></audio>`)[0];
			document.body.appendChild(Eyal_music);
			
		}
		else if(Eyal_music.error != null)
		{
			Eyal_music.load();
		}
		
		if(typeof Eyal_brinkMusic === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_brinkMusic = $(`<audio src="https://cdn.freesound.org/previews/649/649769_14275923-lq.mp3" id="Eyal_brinkMusic" loop=true></audio>`)[0];
			document.body.appendChild(Eyal_brinkMusic);

		}
		else if(Eyal_brinkMusic.error != null)
		{
			Eyal_brinkMusic.load();
		}
		
		if(Eyal_music.src != Eyal_getNormalMusicURL())
		{
			Eyal_music.src = Eyal_getNormalMusicURL();
			
			Eyal_music.preload = "auto";
			Eyal_music.load();
		}
		
		if(Eyal_brinkMusic.src != Eyal_getVictoryMusicURL())
		{
			Eyal_brinkMusic.src = Eyal_getVictoryMusicURL();
			
			Eyal_brinkMusic.preload = "auto";
			Eyal_brinkMusic.load();
		}
		
		let Eyal_pogSound = $('#Eyal_pogSound')[0];
		
		if(typeof Eyal_pogSound === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_pogSound = $(`<audio src="https://cdn.freesound.org/previews/649/649769_14275923-lq.mp3" id="Eyal_pogSound"></audio>`)[0];
			document.body.appendChild(Eyal_pogSound);
			
			Eyal_pogSound.preload = "auto";
			Eyal_pogSound.load();
		}
		else if(Eyal_pogSound.error != null)
		{
			Eyal_pogSound.load();
		}
		
		let Eyal_drawLimitedSound = $('#Eyal_drawLimitedSound')[0];
		
		if(typeof Eyal_drawLimitedSound === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_drawLimitedSound = $(`<audio src="https://drive.google.com/uc?id=1udHcnHg1evmoS_axmqka9eGFEHbpkmzH&export=download" id="Eyal_drawLimitedSound"></audio>`)[0];
			document.body.appendChild(Eyal_drawLimitedSound);
			
			Eyal_drawLimitedSound.preload = "auto";
			Eyal_drawLimitedSound.load();
		}
		else if(Eyal_drawLimitedSound.error != null)
		{
			Eyal_drawLimitedSound.load();
		}
		
		let Eyal_chaosAnimSound = $('#Eyal_chaosAnimSound')[0];
		
		if(typeof Eyal_chaosAnimSound === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_chaosAnimSound = $(`<audio src="https://drive.google.com/uc?id=1K7nG6diCjDfGVPqyLzLL9Qaeyz9vAXtX&export=download" id="Eyal_chaosAnimSound"></audio>`)[0];
			document.body.appendChild(Eyal_chaosAnimSound);
			
			Eyal_chaosAnimSound.preload = "auto";
			Eyal_chaosAnimSound.load();
		}
		else if(Eyal_chaosAnimSound.error != null)
		{
			Eyal_chaosAnimSound.load();
		}
		
		let Eyal_darkAnimSound = $('#Eyal_darkAnimSound')[0];
		
		if(typeof Eyal_darkAnimSound === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_darkAnimSound = $(`<audio src="https://drive.google.com/uc?id=1K7nG6diCjDfGVPqyLzLL9Qaeyz9vAXtX&export=download" id="Eyal_darkAnimSound"></audio>`)[0];
			document.body.appendChild(Eyal_darkAnimSound);
			
			Eyal_darkAnimSound.preload = "auto";
			Eyal_darkAnimSound.load();
		}
		else if(Eyal_darkAnimSound.error != null)
		{
			Eyal_darkAnimSound.load();
		}
		
		let Eyal_lightAnimSound = $('#Eyal_lightAnimSound')[0];
		
		if(typeof Eyal_lightAnimSound === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_lightAnimSound = $(`<audio src="https://drive.google.com/uc?id=1abjshJt75ch8n9DAzfDiY_EdgszdE49g&export=download" id="Eyal_lightAnimSound"></audio>`)[0];
			document.body.appendChild(Eyal_lightAnimSound);
			
			Eyal_lightAnimSound.preload = "auto";
			Eyal_lightAnimSound.load();
		}
		else if(Eyal_lightAnimSound.error != null)
		{
			Eyal_lightAnimSound.load();
		}
		
		let Eyal_waterAnimSound = $('#Eyal_waterAnimSound')[0];
		
		if(typeof Eyal_waterAnimSound === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_waterAnimSound = $(`<audio src="https://drive.google.com/uc?id=15PNOH8VGLbolzr-UvnDHyJxT_hFw8uGF&export=download" id="Eyal_waterAnimSound"></audio>`)[0];
			document.body.appendChild(Eyal_waterAnimSound);
			
			Eyal_waterAnimSound.preload = "auto";
			Eyal_waterAnimSound.load();
		}
		else if(Eyal_waterAnimSound.error != null)
		{
			Eyal_waterAnimSound.load();
		}
		
		
		let Eyal_earthAnimSound = $('#Eyal_earthAnimSound')[0];
		
		if(typeof Eyal_earthAnimSound === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_earthAnimSound = $(`<audio src="https://drive.google.com/uc?id=1d1pTBTE9GwGv-KS1-AqCfl7EmYumifrk&export=download" id="Eyal_earthAnimSound"></audio>`)[0];
			document.body.appendChild(Eyal_earthAnimSound);
			
			Eyal_earthAnimSound.preload = "auto";
			Eyal_earthAnimSound.load();		
		}
		else if(Eyal_earthAnimSound.error != null)
		{
			Eyal_earthAnimSound.load();
		}
		
		
		let Eyal_fireAnimSound = $('#Eyal_fireAnimSound')[0];

		if(typeof Eyal_fireAnimSound === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_fireAnimSound = $(`<audio src="https://drive.google.com/uc?id=12je2FD8SXqY7p4wWe3G_L7K3_tEFUTkv&export=download" id="Eyal_fireAnimSound"></audio>`)[0];
			document.body.appendChild(Eyal_fireAnimSound);
			
			Eyal_fireAnimSound.preload = "auto";
			Eyal_fireAnimSound.load();
		}
		else if(Eyal_fireAnimSound.error != null)
		{
			Eyal_fireAnimSound.load();
		}
		
		
		let Eyal_windAnimSound = $('#Eyal_windAnimSound')[0];

		if(typeof Eyal_windAnimSound === "undefined")
		{
			// [0] is mandatory for some funny reason.
			Eyal_windAnimSound = $(`<audio src="https://drive.google.com/uc?id=1RPbpOVtSrE0M7JiqYkLGDCW0-cP-x8qs&export=download" id="Eyal_windAnimSound"></audio>`)[0];
			document.body.appendChild(Eyal_windAnimSound);
			
			Eyal_windAnimSound.preload = "auto";
			Eyal_windAnimSound.load();
		}
		else if(Eyal_windAnimSound.error != null)
		{
			Eyal_windAnimSound.load();
		}
		
		Eyal_music.volume = (musicSliderDL / 100.0);
		Eyal_brinkMusic.volume = (musicSliderDL / 100.0);
		
		
		let Eyal_list = document.querySelectorAll("audio")
		
		for(let abc=0;abc < Eyal_list.length;abc++)
		{
			if(!Eyal_list[abc].id.startsWith("Eyal_"))
				continue;
			
			else if(Eyal_list[abc].Eyal_registered)
				continue;
			
			Eyal_list[abc].Eyal_registered = true;

			if(Eyal_list[abc].id == "Eyal_music" || Eyal_list[abc].id == "Eyal_brinkMusic")
				continue;
			
			Eyal_list[abc].addEventListener("ended", function()
			{
				if(event.target.id == "Eyal_chaosAnimSound")
				{
					if(event.target.src == Eyal_lightAnimSound.src)
					{
						playMDSoundByAttribute("DARK");
					}
					else
					{
						playMDSoundByAttribute("LIGHT");
					}
				}
				else
				{
					event.target.currentTime = 0;
					event.target.pause();
					
					if(musicSliderDL > 0)
					{
						Eyal_tryStartMusic(true);
					}
				}
			});
		}
	}
	importSounds();
	
	let Eyal_offlineDeckViewer = $("#front_page #Eyal_offlineDeckViewer")
	
	if(Eyal_offlineDeckViewer.length == 0)
	{	
		Eyal_offlineDeckViewer = $(`<div></div>`)
		Eyal_offlineDeckViewer.setHTML(`<div class="menu_btn" style="top: 550px; left: 550px; opacity: 1; cursor: pointer;">
							<img src="https://images.duelingbook.com/svg/menu_btn_up.svg" alt="Duel Room">
							<span style="font-size:18pt; font-weight: bold; text-align:center; color: white;"><center>Browse Cards</center></span></div>`);
							
		Eyal_offlineDeckViewer.attr("id", "Eyal_offlineDeckViewer");
		
		// Create new clickable button outside of the screen
		Eyal_offlineDeckViewer.append($(`<div style="top: 5000px"><button></button></div>`))
		
		// Add the whole button to the front page
		$('#front_page').append(Eyal_offlineDeckViewer)		
	}
	
	if(Eyal_offlineDeckViewer.length > 0 && typeof gotoDeckConstructor !== 'undefined')
	{
		Eyal_offlineDeckViewer.off("click");
		Eyal_offlineDeckViewer.on("click", gotoDeckConstructor);
		Eyal_offlineDeckViewer.on("click", searchCardsE);
		Eyal_offlineDeckViewer.on("click", function() { $('#welcome_buttons').hide() });
		
		Eyal_offlineDeckViewer.off("touchend");
		Eyal_offlineDeckViewer.on("touchend", gotoDeckConstructor);
		Eyal_offlineDeckViewer.on("touchend", searchCardsE);
		Eyal_offlineDeckViewer.on("touchend", function() { $('#welcome_buttons').hide() });
	}

	
	if($('html').scrollTop() != 0)
	{
		$('html').scrollTop(0);
	}
	
	if($('html').scrollLeft() != 0)
	{
		$('html').scrollLeft(0);
	}
	
	if (typeof my_profile_data === 'undefined')
	{
		window.my_profile_data = null;
	}
	
	// We get the song by asking to load the profile while in a duel.
	if(my_profile_data == null && typeof websocket !== 'undefined' && websocket !== false && websocket.readyState == websocket.OPEN)
	{
		my_profile_data = {};
		my_profile_data.loading = true;
		loadMyProfile();
	}


	if (typeof window.Eyal_waitingForAction === 'undefined')
	{
		window.Eyal_waitingForAction = false;
    }

	window.Eyal_showDuelNSFW = function() 
	{
		$(this).siblings('.nsfw').css("opacity", 0);
		$(this).siblings('.nsfw').hide();
		$(this).hide();
		
		switch(this)
		{
			case $('#avatar1 .nsfw_btn')[0]:
				if(typeof window.oldSleeves1 !== 'undefined')
				{
					player1.sleeve = window.oldSleeves1;
					window.oldSleeves1 = undefined;
					loadSleeves(player1);
				}
			break;
			
			case $('#avatar2 .nsfw_btn')[0]:
				if(typeof window.oldSleeves2 !== 'undefined')
				{
					player2.sleeve = window.oldSleeves2;
					window.oldSleeves2 = undefined;
					loadSleeves(player2);
				}
			break;
			
			case $('#avatar3 .nsfw_btn')[0]:
				if(typeof window.oldSleeves3 !== 'undefined')
				{
					player3.sleeve = window.oldSleeves3;
					window.oldSleeves3 = undefined;
					loadSleeves(player3);
				}
			break;
			
			case $('#avatar4 .nsfw_btn')[0]:
				if(typeof window.oldSleeves4 !== 'undefined')
				{
					player4.sleeve = window.oldSleeves4;
					window.oldSleeves4 = undefined;
					loadSleeves(player4);
				}
			break;
		}
		
		
	}
	
	if(typeof window.GYwarning === 'undefined')
	{
		window.GYwarning = [];
	}

	window.Eyal_startTurnE = function() {
		if (awaiting_start_turn) {
			return;
		}
		
		let Eyal_count = 0;
		
		if(window.GYwarning.length > 0)
		{
			let Eyal_msg = "You have End Phase GY effects:<br>"
			let Eyal_max = 5;
			
			let Unique_arr = [];
			for(let abc=0;abc < window.GYwarning.length;abc++)
			{
				if(Eyal_count == Eyal_max)
					break;
				
				else if(isIn(window.GYwarning[abc], player1.grave_arr) == -1)
					continue;
				
				else if(Unique_arr.indexOf(window.GYwarning[abc].data("id")) >= 0)
					continue;
				
				Eyal_msg = Eyal_msg + window.GYwarning[abc].data("cardfront").data("name") + "<br>"
				Eyal_count++;
				Unique_arr.push(window.GYwarning[abc].data("id"));
			}
			
			if(Eyal_count > 0)
			{
				getConfirmation("GY Warning", Eyal_msg, undefined, undefined, true);
			}
		}
		
		if(Eyal_count == 0)
		{
			Send({"action":"Duel", "play":"Start turn", "draw":$('#auto_draw_cb').is(":checked")});
		}
		
		
		window.GYwarning = [];
	}
	window.Eyal_endTurnE = function()
	{
		
		let Eyal_count = 0;
		
		if(window.GYwarning.length > 0)
		{
			let Eyal_msg = "You have End Phase GY effects:<br>"
			let Eyal_max = 5;
			
			let Unique_arr = [];
			
			for(let abc=0;abc < window.GYwarning.length;abc++)
			{
				if(Eyal_count == Eyal_max)
					break;
				
				else if(isIn(window.GYwarning[abc], player1.grave_arr) == -1)
					continue;
				
				else if(Unique_arr.indexOf(window.GYwarning[abc].data("id")) >= 0)
					continue;
				
				Eyal_msg = Eyal_msg + window.GYwarning[abc].data("cardfront").data("name") + "<br>"
				Eyal_count++;
				Unique_arr.push(window.GYwarning[abc].data("id"));
			}
			
			
			if(Eyal_count > 0)
			{
				getConfirmation("GY Warning", Eyal_msg, undefined, undefined, true);
			}
		}
		
		if(Eyal_count == 0)
		{
			Send({"action":"Duel", "play":"End turn"});
		}
		
		window.GYwarning = [];
	}
	
	window.toGY = function(player, data)
	{
		var card = removeCard(player, data);
		if (!card) {
			card = removeFromBanished(player.opponent, data);
		}
		updateController(card.data("owner"), card);
		card.data("cardfront").reinitialize(data.card);
		card.data("face_down", false);
		$('#field').append(card);
		TweenMax.set(card, {"z":card.getGraveZ()})
		card.data("owner").grave_arr.unshift(card);
		TweenMax.to(card, easeSeconds, {left:card.data("owner").graveX, top:card.data("owner").graveY, scale:0.1485, rotation:card.data("owner").rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
			shiftGrave(card.data("owner"));
			endAction();
		}});
		playSound(Move);
		
		if(card.data("owner") == player1 && card && card.data("cardfront").data("effect").search(/During the End Phase, if this card is in the GY because it was sent there this turn:/i) != -1)
		{
			window.GYwarning.push(card)
		}
	}

	window.mill = function(player, data)
	{
		var card = removeTopCardFromDeck(player);
		updateController(card.data("owner"), card);
		card.data("cardfront").reinitialize(data.card);
		$('#field').append(card);
		TweenMax.set(card, {"z":card.getGraveZ()})
		card.data("owner").grave_arr.unshift(card);
		TweenMax.to(card, easeSecondsBanish, {left:card.data("owner").graveX, top:card.data("owner").graveY, rotation:card.data("owner").rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
			shiftGrave(card.data("owner"));
			endAction();
		}});
		playSound(Move);
		
		if(card.data("owner") == player1 && card && card.data("cardfront").data("effect").search(/During the End Phase, if this card is in the GY because it was sent there this turn:/i) != -1)
		{
			window.GYwarning.push(card)
		}
	}
	
	window.Eyal_hideDuelNSFW = function()
	{
		if (solo && this == $('#avatar2 .rating')[0])
		{
			return;
		}
		$(this).siblings('.nsfw').css("opacity", 1);
		$(this).siblings('.nsfw').show();
		$(this).siblings('.nsfw_btn').show();
		$(this).siblings('.nsfw_btn').val("Show Image");
		
		switch(this)
		{
			case $('#avatar1 .rating')[0]:
				if(typeof window.oldSleeves1 === 'undefined')
				{
					window.oldSleeves1 = player1.sleeve;
					player1.sleeve = '1.jpg';
					loadSleeves(player1)
				}
			break;
			
			case $('#avatar2 .rating')[0]:
				if(typeof window.oldSleeves2 === 'undefined')
				{
					window.oldSleeves2 = player2.sleeve;
					player2.sleeve = '1.jpg';
					loadSleeves(player2)
				}
			break;
			
			case $('#avatar3 .rating')[0]:
				if(typeof window.oldSleeves3 === 'undefined')
				{
					window.oldSleeves3 = player3.sleeve;
					player3.sleeve = '1.jpg';
					loadSleeves(player3)
				}
			break;
			
			case $('#avatar4 .rating')[0]:
				if(typeof window.oldSleeves4 === 'undefined')
				{
					window.oldSleeves4 = player4.sleeve;
					player4.sleeve = '1.jpg';
					loadSleeves(player4)
				}
			break;
		}
	}
	
	window.loadMyProfileResponse = function(data) {
		my_profile_data = data;
		my_profile_data.loading = false;
		console.log(data);
		hideDim();
		$('#my_profile .profile_txt').val(data.profile_txt);
		profileBodyState = data.profile_txt;
		unsavedChanges = false;
		if (data.html) {
			$('#my_profile .html_cb').show();
			$('#my_profile .html_lbl').show();
		}
		$('#my_profile .html_cb').checked(!!data.use_html_txt);
		if (data.customs) {
			customs = ~~data.customs;
		}
		sleeveIndex = 0;
		if (data.admin) {
			$('#my_profile .donation_txt').show();
			if (data.calls) {
				$('#my_profile .donation_txt').text(data.calls + " calls/day (" + (admin_status >= 2 ? "5" : "10") + " Required)");
			}
			else {
				$('#my_profile .donation_txt').text("Insufficient calls");
			}
		}
		$('#my_profile .thumbs').hide();
		if (data.customs) {
			loadThumbnails(data);
			if (data.days) {
				$('#my_profile .donation_txt').show();
				$('#my_profile .donation_txt').text("Donation Reward: " + data.days + " left");
			}
			$('#my_profile .upload_btn').show();
			$('#my_profile .html_cb').show();
			$('#my_profile .html_lbl').show();
		}
		if (data.sleeve) {
			$('#sleeve .image').attr("src", SLEEVE_START + data.sleeve);
			sleeveIndex = ~~data.sleeve.substring(0, data.sleeve.indexOf("."));
			$('#my_profile #sleeve').data("id", sleeveIndex);
			if (sleeveIndex <= 132) {
				if (sleeveIndex < 132) {
					$('#my_profile .next_sleeve_btn').show();
				}
				if (sleeveIndex > 1) {
					$('#my_profile .prev_sleeve_btn').show();
				}
			}
			displaySleeve();
		}
		else {
			sleeveIndex = 1;
			$('#my_profile .next_sleeve_btn').show();
		}
		if (data.nsfw) {
			if (!always_show_nsfw) {
				$('#my_profile .nsfw_btn').show();
			}
			$('#my_profile .nsfw_cb').checked(true);
		}
		$('#my_profile .profile_avatar .image').attr("src", getAvatarStart(data.pic));
		if (data.pic.indexOf(".") >= 5) {
			$('#my_profile .nsfw_cb').show();
			$('#my_profile .nsfw_lbl').show();
			$('#my_profile .remove_btn').show();
		}
	}

	window.loadProfileResponse = function(data) {
		profile_data = data;
		resumeTime = 0;
		if (profileSong) {
			profileSong.pause();
		}
		$('#profile_viewer').css("visibility", "visible");
		$('#profile_viewer').css("opacity", 1);
		$('#profile_content').css("left", 0);
		$('#profile_content').scrollTop(0);
		$('#profile_content').show();
		$('#all_comments').hide();
		$('#all_friends').hide();		
		$('#profile_viewer .nsfw_btn').hide();
		$('#profile_viewer .nsfw_cb').hide();
		$('#profile_viewer .nsfw_cb').checked(false);
		$('#profile_viewer .nsfw_lbl').hide();
		$('#profile_viewer .prev_thumb_btn').hide();
		$('#profile_viewer .next_thumb_btn').hide();
		$('#profile_viewer .remove_btn').hide();
		$('#profile_viewer .thumbs').hide();
		//autoCompleteTimer.reset();
		selectedThumb = 0;
		$('#profile_viewer .match_ranking_txt').text("Calculate");
		$('#profile_viewer .match_ranking_txt').removeClass("calculating");
		$('#profile_viewer .single_ranking_txt').text("Calculate");
		$('#profile_viewer .single_ranking_txt').removeClass("calculating");
		$('#profile_viewer .send_pm_btn').hide();
		$('#profile_viewer .follow_btn').hide();
		$('#profile_viewer .unfollow_btn').hide();
		$('#profile_viewer .add_friend_btn').hide();
		$('#profile_viewer .accept_request_btn').hide();
		$('#profile_viewer .revoke_friend_btn').hide();
		$('#profile_viewer .delete_friend_btn').hide();
		$('#profile_viewer .block_user_btn').hide();
		$('#profile_viewer .unblock_user_btn').hide();
		$('#profile_viewer .watch_duel_btn').hide();
		$('#profile_viewer .key').hide();
		//$('#profile_viewer .add_note_btn').hide();
		hideAutoComplete($('#profile_username_txt'));
		$('#profile_viewer .social').html("");
		$('#profile_viewer .friends').html("");
		$('#profile_viewer .comments').html("");
		$('#profile_viewer .friends_lbl').hide();
		$('#profile_viewer .view_all_friends_btn').hide();
		$('#profile_viewer .view_all_comments_btn').hide();
		view_more_comments_btn.hide();
		$('#profile_bottom .reply_cb').hide();
		$('#profile_bottom .reply_cb').checked(false);
		$('#profile_bottom .reply_lbl').hide();
		friendsLoaded = false;
		commentsLoaded = false;
		$('#all_comments .content').scrollTop(0);
		$('#all_comments .content .comment').detach();
		userCommentY = 0;
		$('#profile_viewer #all_comments').hide();
		$('#profile_viewer #all_friends').hide();
		lastAutoCompleteString = null;
		$('#profile_bottom .comment_txt').removeClass("readonly");
		$('#profile_bottom .comment_txt').prop("disabled", false);
		TweenMax.killAll(true);
		currentProfile = data.username;
		currentProfileId = data.user_id;
		currentNote = str(data.note);
		if (data.judge) {
			loadProfileResponse2(data);
			return;
		}
		goto('profile_viewer');
		$('#profile_username_txt').insertAfter($('#profile_viewer .username_lbl:first'));
		$('#profile_username_txt').data("proxy").insertAfter($('#profile_username_txt'));
		$('#profile_username_txt').data("autocomplete").insertAfter($('#profile_username_txt').data("proxy"));
		//$('#autocomplete').insertAfter($('#profile_username_txt').data("proxy")); 
		$('#profile_username_txt').val(currentProfile);
		$('#profile_username_txt').select();
		$('#profile_viewer .profile_avatar').remove();
		var avatar = new Avatar(data);
		avatar.addClass("profile_avatar");
		$('#profile_content').prepend(avatar);
		if (currentProfile == username) {
			$('#profile_viewer .stats_red').hide();
		}
		$('#profile_content .nsfw_cb').checked(!!data.nsfw);
		if (data.nsfw) {
			if (!always_show_nsfw) {
				avatar.find('.image').hide();
				avatar.find('.nsfw').hide();
			}
		}
		$('#profile_viewer .follow_btn').show();
		$('#profile_viewer .follow_btn').show();
		if (isFollowing(currentProfile)) {
			$('#profile_viewer .follow_btn').hide();
			$('#profile_viewer .unfollow_btn').show();
		}
		if (currentProfile != username) {
			$('#profile_viewer .send_pm_btn').show();
			if (isFriend(currentProfile)) {
				$('#profile_viewer .delete_friend_btn').show();
			}
			else if (isFriendReceived(currentProfile)) {
				$('#profile_viewer .accept_request_btn').show();
			}
			else if (isFriendSent(currentProfile)) {
				$('#profile_viewer .revoke_friend_btn').show();
			}
			else {
				$('#profile_viewer .add_friend_btn').show();
			}
			if (data.duel) {
				clickedDuel = data.duel;
				$('#profile_viewer .watch_duel_btn').show();
			}
			if (isBlocked(currentProfile)) {
				$('#profile_viewer .send_pm_btn').hide();
				$('#profile_viewer .follow_btn').hide();
				$('#profile_viewer .unfollow_btn').hide();
				$('#profile_viewer .add_friend_btn').hide();
				$('#profile_viewer .block_user_btn').hide();
				$('#profile_viewer .unblock_user_btn').hide();
				$('#profile_viewer .watch_duel_btn').hide();
				if (isBlockedByYou(currentProfile)) {
					$('#profile_viewer .unblock_user_btn').show();
				}
			}
			else {
				$('#profile_viewer .block_user_btn').show();
			}
		}
		$('#profile_viewer .social_buttons').css("top", 0);
		if (!$('#profile_viewer .watch_duel_btn').is(":visible") && $('#profile_viewer .send_pm_btn').is(":visible") && !isBlocked(currentProfile)) {
			$('#profile_viewer .social_buttons').css("top", 25);
		}
		if (!simple) {
			TweenMax.from($('#profile_viewer .send_pm_btn'), 0.375, {left:1050, delay:0.75, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .follow_btn'), 0.375, {left:1032, delay:1, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .unfollow_btn'), 0.375, {left:1045, delay:1, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .add_friend_btn'), 0.375, {left:1050, delay:1.25, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .accept_request_btn'), 0.375, {left:1020, delay:1.25, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .revoke_friend_btn'), 0.375, {left:1020, delay:1.25, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .delete_friend_btn'), 0.375, {left:1050, delay:1.25, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .unblock_user_btn'), 0.375, {left:1035, delay:1.5, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .block_user_btn'), 0.375, {left:1050, delay:1.5, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .watch_duel_btn'), 0.375, {left:1050, delay:1.75, ease:Expo.easeOut, onComplete:function(){
				if (data.password) {
					$('#profile_viewer .key').show();
				}
			}});
		}
		else {
			if (data.password) {
				$('#profile_viewer .key').show();
			}
		}
		$('#profile_viewer .stats .status_txt').html(data.status);
		if (data.ban_status == 1) {
			$('#profile_viewer .stats .status_txt').html('<font color="#3ce1ff">Frozen</font>');
		}
		else if (data.ban_status == 2) {
			$('#profile_viewer .stats .status_txt').html('<font color="#FF0000">Banned</font>');
		}
		$('#profile_viewer .stats .last_seen_txt').text(data.last_seen);
		$('#profile_viewer .stats .registered_txt').text(data.registered);
		showAdvancedStats(data);
		$('#profile_viewer .views_txt').text(data.views);
		/*if (data.html) {
			var ifr = $('<iframe scrolling="no" width="100%" height="100%" frameborder="0" marginwidth="0" marginheight="0" sandbox="allow-same-origin allow-popups"></iframe>');
			$('#profile_viewer .profile_txt').html(ifr);
			ifr.attr("height", 0);
			ifr.get(0).contentWindow.document.write('<html><style>::selection { color: white; background: black; } ::-moz-selection { color: white; background: black; } div { display: inline; }</style><body style="font-family: Arial; font-size: 12px;">' + addLinks(addBreaks(flashToHTML(data.profile_txt))) + '</body></html>');
			//ifr.get(0).contentWindow.document.body.outerHTML = '<html><style>::selection { color: white; background: black; } ::-moz-selection { color: white; background: black; } div { display: inline; }</style><body style="font-family: Arial; font-size: 12px;">' + addLinks(addBreaks(data.profile_txt.replace(/  /g, ' &nbsp;'))) + '</body></html>';
			ifr.attr("height", ifr.get(0).contentWindow.document.body.scrollHeight);
		}
		else {
			$('#profile_viewer .profile_txt').html(escapeHTMLWithLinks(data.profile_txt));
		}*/
		
		log('validHTMLText(data.profile_txt) = ' + validHTMLText(data.profile_txt))
		
		if (data.html && validHTMLText(data.profile_txt)) {
			$('#profile_viewer .profile_txt').html(addLinks(flashToHTML(data.profile_txt))); // why are we adding links if a user is handling their own html?
			//$('#profile_viewer .profile_txt').html(data.profile_txt);
			//$('#profile_viewer .profile_txt').html(flashToHTML(data.profile_txt));
		}
		else {
			//$('#profile_viewer .profile_txt').html(escapeHTMLWithLinks(data.profile_txt));
			$('#profile_viewer .profile_txt').html(escapeHTMLWithLinks(data.profile_txt).replace(/  /g, ' &nbsp;'));
		}
		
		$('#profile_song').hide();
		if (data.song.active == 1 && data.song.size > 0) {
			$('#profile_song .name_txt').text(data.song.name + " - " + data.song.artist);
			$('#profile_song .play_btn').show();
			$('#profile_song .pause_btn').hide();
			$('#profile_song').show();
			profileSong = new Audio(data.song.original_url);
			tweenSong();
			if (always_play_profile_song) {
				playProfileSong();
			}
		}
		for (var i = 0; i < data.social.length; i++) {
			var social_btn = new SocialButton(data.social[i]);
			social_btn.css("left", 564 - (37.7 * i));
			social_btn.css("opacity", 0);
			$('#profile_viewer .social').prepend(social_btn);
			TweenMax.fromTo(social_btn, 0.33, {left:564 - (37.7 * i) + 37.5}, {left:564 - (37.7 * i), delay:i * 0.33 + 0.8, ease:Expo.easeOut, onStart:function(){
				$(this.target).css("opacity", 1);
			}});
		}
		loadThumbnails(data);
		if (data.ids.length <= 1) {
			$('#profile_viewer .thumbs').hide();
		}
		$('#profile_viewer .prev_thumb_btn').hide();
		$('#profile_viewer .next_thumb_btn').hide();
		$('#profile_bottom').css("top", 1450);
		$('#profile_viewer .about_lbl').html("");
		$('#profile_viewer .about_lbl').show();
		$('#profile_viewer .about_txt').html("");
		$('#profile_viewer .about_txt').show();
		$('#profile_viewer .stats2_red').show();
		if (data.gender) {
			$('#profile_viewer .about_lbl').append("Gender:<br>");
			$('#profile_viewer .about_txt').html(escapeHTML(data.gender) + '<br>');
		}
		if (data.orientation) {
			$('#profile_viewer .about_lbl').append("Orientation:<br>");
			$('#profile_viewer .about_txt').append(escapeHTML(data.orientation) + '<br>');
		}
		if (data.distance) {
			$('#profile_viewer .about_lbl').append("Distance:<br>");
			$('#profile_viewer .about_txt').append(escapeHTML(data.distance) + '<br>');
		}
		if (data.location) {
			$('#profile_viewer .about_lbl').append("Location:<br>");
			$('#profile_viewer .about_txt').append(escapeHTML(data.location) + '<br>');
		}
		if (data.languages) {
			$('#profile_viewer .about_lbl').append("Languages:<br>");
			$('#profile_viewer .about_txt').append(escapeHTML(data.languages) + '<br>');
		}
		if ($('#profile_viewer .about_txt').text() == "") {
			$('#profile_viewer .about_lbl').hide();
			$('#profile_viewer .about_txt').hide();
			$('#profile_viewer .stats2_red').hide();
			$('#profile_viewer .comments_lbl').css("top", 281);
			$('#profile_viewer .comments').css("top", 350);
		}
		else {
			$('#profile_viewer .comments_lbl').css("top", 525);
			$('#profile_viewer .comments').css("top", 594);
		}
		if (data.comments.length > 0) {
			var profileCommentY = 0;
			for (var i = 0; i < data.comments.length; i++) {
				var comment = new Comment(data.comments[i]);
				manageLikes(comment, data.comments[i]);
				comment.css("top", profileCommentY);
				$('#profile_viewer .comments').append(comment);
				setText(comment.find('.username_txt'));
				profileCommentY += comment[0].scrollHeight + 12;
			}
		}
		total_comments = data.total_comments;
		$('#profile_viewer .view_all_comments_btn').hide();
		profileBottomY = parseInt($('#profile_body .comments').css("top")) + $('#profile_viewer .comments')[0].scrollHeight + 32;
		if (total_comments > 10) {
			comment_limit = 0;
			//all_comments_arr = [];
			$('#profile_viewer .view_all_comments_btn').show();
			$('#profile_viewer .view_all_comments_btn').css("top", profileBottomY);
			profileBottomY += 63;
		}
		$('#profile_viewer .comments_lbl').text("No Comments");
		if (data.comments.length > 0) {
			$('#profile_viewer .comments_lbl').text("Comments: (" + total_comments + ")");
		}
		enableComments();
		if (data.allow_comments_friends_only) {
			if (!isFriend(currentProfile) && username != currentProfile) {
				disableComments(currentProfile + " only allows comments from friends");
			}
		}
		if (!data.allow_comments) {
			disableComments(currentProfile + " does not allow profile comments");
		}
		if (isBlocked(currentProfile)) {
			disableComments("You are blocked");
		}
		if (frozen) {
			disableComments("You are frozen");
		}
		if (data.ban_status == 1 && !isFriend(currentProfile)) {
			disableComments(currentProfile + " is frozen");
		}
		if (data.ban_status > 1) {
			disableComments(currentProfile + " is banned");
		}
		if (judge) {
			disableComments("You cannot post comments as a judge");
		}
		var profileBottomY2 = 345;
		profileFriends = data.friends;
		$('#profile_viewer #all_comments .title_txt').text(currentProfile + "'s Comments (" + total_comments + ")");
		$('#profile_viewer #all_friends .title_txt').text(currentProfile + "'s Friends (" + data.total_friends + ")");
		if (data.friends.length > 0) {
			for (i = 0; i < data.friends.length; i++) {
				if (i >= 10) {
					break;
				}
				var friend = new FriendItem(data.friends[i]);
				friend.css("top", i * 50);
				$('#profile_viewer .friends').append(friend);
				setText(friend.find('.username_txt'));
				profileBottomY2 += 50;
			}
			$('#profile_viewer .friends_lbl').show();
			$('#profile_viewer .friends_lbl').text("Friends: (" + data.total_friends + ")");
			if (data.friends.length > 5 && data.comments.length <= 2 || data.total_friends > 10) {
				$('#profile_viewer .view_all_friends_btn').show();
				$('#profile_viewer .view_all_friends_btn').css("top", profileBottomY2);
			}
		}
		if (profileBottomY > profileBottomY2) {
			$('#profile_bottom').css("top", profileBottomY);
		}
		else {
			$('#profile_bottom').css("top", profileBottomY2);
		}
		$('#profile_username_txt').focus();
		if (!simple) {
			TweenMax.from($('#profile_viewer .stats'), 0.6, {left:1035, delay:0.5, ease:Expo.easeOut});
			TweenMax.from([$('#profile_username_txt'), $('#profile_username_txt').data("proxy"), $('#profile_viewer .username_lbl')], 0.6, {top:-123, delay:0.5, ease:Expo.easeOut});
			TweenMax.from($('#profile_body'), 0.6, {top:651, delay:0.5, ease:Expo.easeOut});
			TweenMax.from($('#profile_viewer .profile_avatar'), 0.6, {left:-320, ease:Expo.easeOut, delay:0.5, onComplete:function(){
				onAvatarTweened(data);
			}});
		}
		else {
			onAvatarTweened(data);
		}
		hideAutoComplete($('#profile_username_txt'));
		
		if (moderator) {
			//$('#profile_viewer .add_note_btn').show();
		}
	}
	
	window.drawCard = function(player, data)
	{
		if (data.username == username && $('#mulligan_btn').length == 1) {
			$('#mulligan_btn').hide();
			$('#draw_btn').show();
		}
		var card = removeTopCardFromDeck(player);
		player.hand_arr.push(card);
		determineHandPosition(player);
		organizeHand(player);
		card.data("cardfront").reinitialize(data.card);
		var rotY = 180 + ABOUT_ZERO;
		if ((show_cards && player == Player1()) || (show_cards == 2)) {
			rotY = ABOUT_ZERO;
		}
		TweenMax.to(card, easeSeconds, {left:handDestination, top:player.handY, scale:0.25, rotation:player.rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){ 
			endAction();
		}});
		$('#duel .cards').append(card);
		
		playSound(DrawSound);
		
		if(player == player1 && currentPhase == "DP" && limitedCardsSound)
		{
			let Eyal_playSound = false;
			
			if(card.data("cardfront").data("custom"))
			{
				if(card.data("cardfront").data("tcg_limit") < 3)
				{
					Eyal_playSound = true;
				}
			}
			else
			{
				if(card.data("cardfront").data("tcg") && card.data("cardfront").data("tcg_limit") < 3)
				{
					Eyal_playSound = true;
				}
				if(card.data("cardfront").data("ocg") && card.data("cardfront").data("ocg_limit") < 3)
				{
					Eyal_playSound = true;
				}
			}
			
			if(Eyal_playSound && musicSliderMD > 0.0)
			{
				Eyal_playLimitedSound();
			}
		}

		// Eyal282 here..
		
	}
	if(musicSliderDL > 0)
	{
		window.startDuel = function(data)
		{	
			let Eyal_list = document.querySelectorAll("div")

			for (let abc = 0; abc < Eyal_list.length; abc++) {
				if (!Eyal_list[abc].id.startsWith("Imperm_Column_Real"))
					continue;

				$(Eyal_list[abc]).remove();
			}
			
			window.Eyal_RealImpermColumns = [false, false, false, false, false];
			
			window.Eyal_preErratas = false;
			
			if(!data.links)
			{
				getConfirmation("Play with Edison's pre-erratas?", "", Eyal_preErratasYes);	
			}
			console.log('startDuel');
			hideDim();
			duel_active = true;
			links = data.links;
			tag_duel = !!data.tag_duel;
			speed = (data.format == "su" || data.format == "sr");
			rush = !!data.rush || (data.format == "ru" || data.format == "rr");
			solo = (data.format == "so");
			rated = data.rated;
			match_type = data.type;
			duelFormat = data.format;
			automaticTourney = !!data.automatic_tourney;
			if (data.type == "m") {
				match = true;
			}
			lifepointMax = 8000;
			if (tag_duel && duelId >= 9943145) {
				lifepointMax = 16000;
			}
			if (speed) {
				lifepointMax = 4000;
				if (tag_duel) {
					lifepointMax = 6000;
				}
			}
			duelId = data.id;
			lastDuelId = data.id;
			duelHash = data.hash;
			deckData = data;
			player1 = new Player();
			player2 = new Player();
			players = [player1, player2];
			turn_player = player1; // it has to be someone
			if (tag_duel) {
				player3 = new Player();
				player4 = new Player();
				if (data.player3.username == username) {
					switchDuelists(data, "player1", "player3");
					
					// because player1 and player3 share grave, banished, and field, it's only given to player1 in the data. so, when you switch the data, you need to give those back to player1, since it's player1's grave, banished, and field that's used in initDuel
					data.player1.grave = data.player3.grave;
					data.player1.banished = data.player3.banished;
					data.player1.field = data.player3.field;
					
					turn_player = player3; // makes sure correct rps backs show
				}
				if (switched) {
					switchDuelists(data, "player3", "player4");
				}
				player3.username = data.player3.username;
				player4.username = data.player4.username;
				player3.opponent = player2;
				player4.opponent = player1;
				player3.skill = data.player3.skill;
				player4.skill = data.player4.skill;
				player3.still_good = data.player3.still_good;
				player4.still_good = data.player4.still_good;
			}
			player1.username = data.player1.username;
			player2.username = data.player2.username;
			player1.opponent = player2;
			player2.opponent = player1;
			player1.skill = data.player1.skill;
			player2.skill = data.player2.skill;
			player1.start = data.player1.start;
			player2.start = data.player2.start;
			player1.still_good = data.player1.still_good;
			player2.still_good = data.player2.still_good;
			if (zooming) {
				//unZoom();
			}
			turnCount = ~~data.turnCount;
			
			if(musicSliderDL > 0)
			{
				Eyal_tryStartMusic();
			}
		}
	}
	
	window.Eyal_preErratasYes = function()
	{
		window.Eyal_preErratas = true;
	}
	window.updateLifePoints = function(player, data)
	{
		var wid = 0;
		prev_life = player.lifepoints;
		life_amount = data.amount;
		player.lifepoints = data.life;
		if (player.lifepoints < 0) {
			player.lifepoints = 0;
		}
		wid = 154 - player.lifepoints / lifepointMax * 154;
		if (player.lifepoints >= lifepointMax) {
			wid = 0;
		}
		var word = " lost ";
		var points = -data.amount;
		if (data.amount > 0) {
			word = " gained ";
			points = data.amount;
		}
		var animation;
		var life_bar = $('#lifepoints1');
		if (isPlayer2(player.username)) {
			life_bar = $('#lifepoints2');
		}
		var lifepoints_tween = TweenMax.to(life_bar.find('.black_bar'), 1, {width:wid, ease:Expo.easeOut, onComplete:function(){
			clearInterval(animation);
			life_bar.find('.life_txt').text(player.lifepoints);
			addLine(escapeHTML(player.username) + word + points + " LP");
			if (player.lifepoints <= 0) {
				playSound(LifePointsEnd);
			}
			endAction();
		}});
		animation = setInterval(function(){
			life_bar.find('.life_txt').text(prev_life + Math.floor(lifepoints_tween.progress() * life_amount));
		}, 42);
		playSound(LifePoints);
		
		if(musicSliderDL > 0)
		{
			Eyal_tryStartMusic();
		}
	}
	
	window.playSound = function(sound, reset)
	{
		if (reset !== false) {
			reset = true;
		}
		try {
			if (typeof(sound) == "string") {
				for (var i = 0; i < audio_arr.length; i++) {
					if (audio_arr[i].getAttribute("src") == sound) {
						sound = audio_arr[i];
						break;
					}
				}
				if (i == audio_arr.length) {
					sound = new Audio(sound);
					//sound.attr("playsinline", "playsinline");
				}
			}
			var s = sound;
			if (!sound.paused) {
				s = sound.cloneNode();
			}
			if ($('#cross').is(":visible")) {
				s.volume = 0;
			}
			else {
				s.volume = 0.35;
			}
			if (reset) {
				s.currentTime = 0;
			}
			else {
				sound.play();
				return;
			}
			s.play();
			audio_arr.push(s);
		}
		catch(err) {
			console.error(err);
		}
	}
	
	window.Eyal_tryStartMusicAsync = async function(bForceContinue)
	{
		let urlToPlay = Eyal_getNormalMusicURL();
		
		let currentMusicObject;
		let targetMusicObject = Eyal_music;
		
		if(!Eyal_music.paused)
			currentMusicObject = Eyal_music;
		
		else if(!Eyal_brinkMusic.paused)
			currentMusicObject = Eyal_brinkMusic;
		
		if(!player1)
		{
			await Eyal_delay(3);
			
			Eyal_tryStartMusic();
			
			return;
		}
		
		let lifepointsToUse = player1.lifepoints;
		
		if(player2.lifepoints < player1.lifepoints)
			lifepointsToUse = player2.lifepoints;
		
		if((lifepointsToUse <= 3000 && !speed) || lifepointsToUse <= 1000)
		{
			urlToPlay = Eyal_getVictoryMusicURL();
			targetMusicObject = Eyal_brinkMusic
		}
		
		if(urlToPlay == "Retry")
		{
			await Eyal_delay(3);
			
			Eyal_tryStartMusic();
			
			return;
		}
		
		
		targetMusicObject.volume = (musicSliderDL / 100.0);
		
		if(currentMusicObject != targetMusicObject)
		{
			if(currentMusicObject != undefined)
			{
				currentMusicObject.pause();
			}
			
			if(!bForceContinue)
			{
				targetMusicObject.currentTime = 0;
			}
			
			targetMusicObject.play();
			
			await Eyal_delay(0.4);
			
			if(targetMusicObject.paused)
			{
				targetMusicObject.load();
				
				await Eyal_delay(4);
			
				Eyal_tryStartMusic();	
			}
		}
		else if(urlToPlay != targetMusicObject.src)
		{
			targetMusicObject.src = urlToPlay;
			
			if(!bForceContinue)
			{
				targetMusicObject.currentTime = 0;
			}
		}
	}
	window.Eyal_tryStartMusic = function(bForceContinue)
	{	
		Eyal_tryStartMusicAsync(bForceContinue);
	}
	
	window.Eyal_EditCardStatsMenu = function()
	{
		let objId = $(this).attr("id");
		
		let cardId = objId.replace("Eyal_new_atk_", "").replace("Eyal_new_def_", "");
		let card = Eyal_getCardByIdReal(cardId);
		
		if(card == null)
			return;
		
		window.Eyal_editStat = objId.slice(0, 12);
		window.Eyal_editCard = card;
		
		let originalStat = window.Eyal_editStat.replace("Eyal_new_", "");
		
		let defaultStat = "x";
		
		switch(card.data("cardfront").data("name"))
		{
			case "Borreload Savage Dragon":
			
				if(originalStat == "atk")
				{
					Eyal_CheckPlayerZones(true);
					
					let Eyal_cards;
					
					if(card.data("controller") == player1)
					{
						Eyal_cards = Eyal_Player1STZones;
					}
					else
					{
						Eyal_cards = Eyal_Player2STZones;
					}
					
					let foundCard = null;
					
					for(let abc=0;abc < Eyal_cards.length;abc++)
					{
						if(Eyal_cards[abc].card.data("cardfront").data("monster_color") != "Link")
							continue;
						
						if(foundCard != null)
						{
							foundCard = -1;
							break;
						}
						else
						{
							foundCard = Eyal_cards[abc].card;
						}
					}
					
					if(foundCard != -1 && foundCard != null && !isNaN(foundCard.data("cardfront").data("atk")))
					{
						defaultStat = `x + ${foundCard.data("cardfront").data("atk")} / 2`;
					}
				}
			break;
			
			// A bit dangerous, as a player may have the highest link already in GY.
			/*
			case "Accesscode Talker":
				let highestLink = 0;
				
				for(let abc=0;abc < player1.grave_arr.length;abc++)
				{
					// let card is occupied.
					let targetCard = player1.grave_arr[abc];
					
					if(targetCard.data("cardfront").data("monster_color") != "Link")
						continue;
					
					if(targetCard.data("cardfront").data("level") > highestLink)
						highestLink = targetCard.data("cardfront").data("level");
				}
				
				defaultStat = `x + (1000 * ${highestLink})`;
			break;
			*/
			
			case "Eater of Millions":
				let count = 0;
				let Eyal_arr = [].concat(player1.banished_arr, player2.banished_arr);
				
				for(let abc=0;abc < Eyal_arr.length;abc++)
				{
					if(Eyal_arr[abc].data("face_down"))
						count++;
				}
				defaultStat = `100 * ${count}`;
			break;
			
			case "Gren Maju Da Eiza":
				defaultStat = `400 * ${card.data("controller").banished_arr.length}`;
			break;
			
			case "Tragoedia":
				defaultStat = `600 * ${card.data("controller").hand_arr.length}`;
			break;
			
			case "Swordsoul Supreme Sovereign - Chengying":
				defaultStat = `x + (100 * ${player1.banished_arr.length + player2.banished_arr.length})`;
			break;
			
			case "Apollousa, Bow of the Goddess":
				defaultStat = `y - 800`;
			break;
			
			case "Light and Darkness Dragon":
				defaultStat = `y - 500`;
		}
		
		getInput(`Choose new ${originalStat.toUpperCase()}:`, `x = old ${originalStat.toUpperCase()}, y = current ${originalStat.toUpperCase()}`, defaultStat, 999, Eyal_editStatsYes);
	}

	window.Negate = function(str) 
	{
		let obj = $('<div class="counter"></div>');
		
		if (str) {
			obj.attr("id", str);
		}
		var content = $('<div class="content"></div>');
		var background = $('<img class="background" src="' + IMAGES_START + 'svg/forbidden.svg" />');
		var glow = $('<img class="glow" src="' + IMAGES_START + 'svg/counter_glow.svg" />');
		glow.hide();
		
		var total_txt = $('<span class="total_txt">1</span>');
		
		content.append(background);
		content.append(glow);
		obj.append(content);
		obj.append(total_txt);
		
		obj.mouseover(function(){
			glow.show();
		});
		obj.mouseout(function(){
			glow.hide();
		});
		return obj;
	}
	
	window.Eyal_createNegateButton = function()
	{
		return;
		
		if($("#counter_btn").length > 0)
		{
			if($("#negate_btn").length == 0)
			{
				
				$('html > head').append($(`<style>
					#m1_negate
					{
						left: 347.5px;
						top: 374px;
					}
					#m2_negate 
					{
						left: 440.5px;
						top: 374px;
					}
					#m3_negate 
					{
						left: 533.5px;
						top: 374px;
					}
					#m4_negate 
					{
						left: 626.5px;
						top: 374px;
					}
					#m5_negate 
					{
						left: 719.5px;
						top: 374px;
					}
					#s1_negate 
					{
						left: 347.5px;
						top: 467px;
					}
					#s2_negate 
					{
						left: 440.5px;
						top: 467px;
					}
					#s3_negate 
					{
						left: 533.5px;
						top: 467px;
					}
					#s4_negate 
					{
						left: 626.5px;
						top: 467px;
					}
					#s5_negate 
					{
						left: 719.5px;
						top: 467px;
					}
					#field_spell_negate 
					{
						left: 235.5px;
						top: 327.5px;
					}
					#pendulum_left_negate 
					{
						left: 265.5px;
						top: 420.5px;
					}
					#pendulum_right_negate 
					{
						left: 796.5px;
						top: 420.5px;
					}
					#opp_m1_negate 
					{
						left: 694px;
						top: 147px;
					}
					#opp_m2_negate 
					{
						left: 601px;
						top: 147px;
					}
					#opp_m3_negate 
					{
						left: 508px;
						top: 147px;
					}
					#opp_m4_negate 
					{
						left: 414px;
						top: 147px;
					}
					#opp_m5_negate 
					{
						left: 323px;
						top: 147px;
					}
					#opp_s1_negate 
					{
						left: 694px;
						top: 40.5px;
					}
					#opp_s2_negate 
					{
						left: 601px;
						top: 40.5px;
					}
					#opp_s3_negate 
					{
						left: 508px;
						top: 40.5px;
					}
					#opp_s4_negate 
					{
						left: 414px;
						top: 40.5px;
					}
					#opp_s5_negate 
					{
						left: 323px;
						top: 40.5px;
					}
					#opp_field_spell_negate 
					{
						left: 790px;
						top: 180.5px;
					}
					#opp_pendulum_left_negate 
					{
						left: 774.5px;
						top: 87px;
					}
					#opp_pendulum_right_negate 
					{
						left: 242.5px;
						top: 87px;
					}
					#left_link_negate 
					{
						left: 415px;
						top: 238px;
					}
					#right_link_negate 
					{
						left: 626.5px;
						top: 280.5px;
					}
					#skill_card_negate 
					{
						left: 745px !important;
						top: 280.5px;
					}
					#opp_skill_card_negate
					{
						left: 295px !important;
						top: 238px;
					}</style>`));
			
				$("#duel #field_content").append($(
				`<div class="negate ui-draggable ui-draggable-handle" id="negate_btn" style="cursor: pointer; pointer-events: auto; width: 23px; height: 25px; top: 435px; left: 240px;">
				<div class="content"><img class="background" src="https://images.duelingbook.com/svg/forbidden.svg" style="width: 23px; height: 25px;">
				<img class="glow" src="https://images.duelingbook.com/svg/counter_glow.svg" style="display: none;">
				</div><span class="total_txt" style="display: none;">1</span></div>`));
				
				
				window.negate_btn = $("#negate_btn");
		
				window.negate = new Negate();
				
				negate.find('.glow').detach();
				negate.find('.total_txt').hide();
					
				window.m1_negate = new Negate("m1_negate");
				window.m2_negate = new Negate("m2_negate");
				window.m3_negate = new Negate("m3_negate");
				window.m4_negate = new Negate("m4_negate");
				window.m5_negate = new Negate("m5_negate");
				window.s1_negate = new Negate("s1_negate");
				window.s2_negate = new Negate("s2_negate");
				window.s3_negate = new Negate("s3_negate");
				window.s4_negate = new Negate("s4_negate");
				window.s5_negate = new Negate("s5_negate");
				window.field_spell_negate = new Negate("field_spell_negate");
				window.pendulum_left_negate = new Negate("pendulum_left_negate");
				window.pendulum_right_negate = new Negate("pendulum_right_negate");
				window.opp_m1_negate = new Negate("opp_m1_negate");
				window.opp_m2_negate = new Negate("opp_m2_negate");
				window.opp_m3_negate = new Negate("opp_m3_negate");
				window.opp_m4_negate = new Negate("opp_m4_negate");
				window.opp_m5_negate = new Negate("opp_m5_negate");
				window.opp_s1_negate = new Negate("opp_s1_negate");
				window.opp_s2_negate = new Negate("opp_s2_negate");
				window.opp_s3_negate = new Negate("opp_s3_negate");
				window.opp_s4_negate = new Negate("opp_s4_negate");
				window.opp_s5_negate = new Negate("opp_s5_negate");
				window.opp_field_spell_negate = new Negate("opp_field_spell_negate");
				window.opp_pendulum_left_negate = new Negate("opp_pendulum_left_negate");
				window.opp_pendulum_right_negate = new Negate("opp_pendulum_right_negate");
				window.left_link_negate = new Negate("left_link_negate");
				window.right_link_negate = new Negate("right_link_negate");
				window.skill_card_negate = new Negate("skill_card_negate");
				window.opp_skill_card_negate = new Negate("opp_skill_card_negate");
				
				window.negates = [m1_negate, m2_negate, m3_negate, m4_negate, m5_negate, s1_negate, s2_negate, s3_negate, s4_negate, s5_negate, pendulum_left_negate, pendulum_right_negate, field_spell_negate, opp_m1_negate, opp_m2_negate, opp_m3_negate, opp_m4_negate, opp_m5_negate, opp_s1_negate, opp_s2_negate, opp_s3_negate, opp_s4_negate, opp_s5_negate, opp_pendulum_left_negate, opp_pendulum_right_negate, opp_field_spell_negate, left_link_negate, right_link_negate, skill_card_negate, opp_skill_card_negate];
				
				$("#duel #duel_content.duel_frame").append($(`<div id = "negates"></div>`));
				
				negates.forEach(function(e,i)
				{
					$('#negates').append(e);
					e.hide();
				});
				
			}
			
			// Destroy requires draggable functionality, set up a dummy for instant destroy when created for the first time.
			
			negates.forEach(function(e,i)
			{
				e.draggable()
				e.draggable("destroy")
		
				addNegateDragging(e);
			});
			
			negate_btn.draggable()
			negate_btn.draggable("destroy")
			addNegateDragging(negate_btn);
			
			if(typeof window.removedNegateCardId === "undefined")
				window.removedNegateCardId = 0;
		}
	}	
	
	window.addNegateDragging = function(el)
	{
		el.css("cursor", "pointer");
		el.draggable({
			"scroll":false,
			"start":function(e, ui){
				removedNegateCardId = 0;
				var cards;
				if (rush) {
					cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell];
				}
				else if (speed) {
					cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player1.skillCard, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell, player2.skillCard];
				}
				else if (links) {
					cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.fieldSpell, linkLeft, linkRight];
				}
				else {
					cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell];
				}
				for (var i = 0; i < negates.length; i++) {
					if (this == negates[i][0]) {
						cards[i].data("negations", ~~cards[i].data("negations") - 1);
						removedNegateCardId = cards[i].data("id");
						updateNegates();
					}
				}
				$('#viewing').append(negate);
				//if (start_function) {
				//	start_function(e, $(ui));
				//}
				updateMouse(e);
				dragXOffset = mouseXScaled - parseInt($(this).css("left"));
				dragYOffset = mouseYScaled - parseInt($(this).css("top"));
			},
			"helper":function(e, ui){
				return negate;
			},
			"drag":function(e, ui){
				updateMouse(e);
				ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
			},
			"stop":function(e, ui){
				var addingNegate = false;
				negate.detach();
				var cards;
				if (rush) {
					cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell];
				}
				else if (speed) {
					cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player1.skillCard, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell, player2.skillCard];
				}
				else if (links) {
					cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.fieldSpell, linkLeft, linkRight];
				}
				else {
					cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell];
				}
				for (var i = 0; i < cards.length; i++) 
				{
					if (cards[i]) 
					{
						if (!cards[i].data("face_down")) 
						{
							if (inBounds(cards[i].find('.content:first'))) 
							{
								cards[i].data("negations", ~~cards[i].data("negations") + 1);
								updateNegates();
								removedNegateCardId = 0;
								return;
							}
						}
					}
				}
				//if (end_function) {
				//	end_function(e, $(ui));
				//}
			}
		});
	}
	
	window.updateCounters = function()
	{
		updateNegates();
		var cards;
		if (rush) {
			cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell];
		}
		else if (speed) {
			cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player1.skillCard, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell, player2.skillCard];
		}
		else if (links) {
			cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.fieldSpell, linkLeft, linkRight];
		}
		else {
			cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell];
		}
		for (var i = 0; i < counters.length; i++) {
			if (cards[i]) {
				if (~~cards[i].data("counters") > 0 && !TweenMax.isTweening(cards[i])) {
					counters[i].show();
					counters[i].find('.total_txt').text(cards[i].data("counters"));
					if (linkLeft && cards[i][0] == linkLeft[0]) {
						if (cards[i].data("controller") == player1 || cards[i].data("controller") == player3) {
							counters[i].css("left", 440.45);
							counters[i].css("top", 315.5);
						}
						else {
							counters[i].css("left", 414.8);
							counters[i].css("top", 272.9);
						}
					}
					else if (linkRight && cards[i][0] == linkRight[0]) {
						if (cards[i].data("controller") == player1 || cards[i].data("controller") == player3) {
							counters[i].css("left", 626.45);
							counters[i].css("top", 315.5);
						}
						else {
							counters[i].css("left", 600.8);
							counters[i].css("top", 272.9);
						}
					}
				}
				else {
					counters[i].hide();
				}
			}
			else {
				counters[i].hide();
			}
		}
		updateStats();
	}
	window.updateNegates = function()
	{
		Eyal_createNegateButton();
		
		if(typeof negates === "undefined")
			return;
		
		var cards;
		if (rush) {
			cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell];
		}
		else if (speed) {
			cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player1.skillCard, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell, player2.skillCard];
		}
		else if (links) {
			cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.fieldSpell, linkLeft, linkRight];
		}
		else {
			cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell];
		}
		for (var i = 0; i < negates.length; i++) {
			if (cards[i]) {
				if (~~cards[i].data("negations") > 0 && !TweenMax.isTweening(cards[i])) {
					negates[i].show();
					negates[i].find('.total_txt').text(cards[i].data("negations"));
					if (linkLeft && cards[i][0] == linkLeft[0]) {
						if (cards[i].data("controller") == player1 || cards[i].data("controller") == player3) {
							negates[i].css("left", 440.45);
							negates[i].css("top", 315.5);
						}
						else {
							negates[i].css("left", 414.8);
							negates[i].css("top", 272.9);
						}
					}
					else if (linkRight && cards[i][0] == linkRight[0]) {
						if (cards[i].data("controller") == player1 || cards[i].data("controller") == player3) {
							negates[i].css("left", 626.45);
							negates[i].css("top", 315.5);
						}
						else {
							negates[i].css("left", 600.8);
							negates[i].css("top", 272.9);
						}
					}
				}
				else {
					negates[i].hide();
				}
			}
			else {
				negates[i].hide();
			}
		}
		updateStats();
	}

	window.Eyal_createEditStatsButtons = function()
	{
		// Edit stats on replays.
		if(typeof getInput === "function" && typeof addButton === "function" && typeof hideDisplayBoxes === "function" && $("#input").length == 0)
		{
			$(document.body).append($(`<div id="input">
				<span class="title_txt">Choose new ATK:</span>
				<div class="body_txt selectable">x = old ATK, y = current ATK</div>
				<input class="input_txt" type="text">
				<div class="ok_btn">
					<img src="https://images.duelingbook.com/svg/ok_btn_up.svg" alt="OK">
				</div>
				<div class="cancel_btn">
					<img src="https://images.duelingbook.com/svg/cancel_btn_up.svg" alt="Cancel">
				</div>
			</div>`));
			
			addButton($('#input .ok_btn'), inputOK);
			addButton($('#input .cancel_btn'), cancelCallback);
			
			hideDisplayBoxes();
			
			$('html > head').append($(`<style>input
			{
				writing-mode: horizontal-tb !important;
				font-style: ;
				font-variant-ligatures: ;
				font-variant-caps: ;
				font-variant-numeric: ;
				font-variant-east-asian: ;
				font-variant-alternates: ;
				font-weight: ;
				font-stretch: ;
				font-size: ;
				font-family: ;
				font-optical-sizing: ;
				font-kerning: ;
				font-feature-settings: ;
				font-variation-settings: ;
				text-rendering: auto;
				color: fieldtext;
				letter-spacing: normal;
				word-spacing: normal;
				line-height: normal;
				text-transform: none;
				text-indent: 0px;
				text-shadow: none;
				display: inline-block;
				text-align: start;
				appearance: auto;
				-webkit-rtl-ordering: logical;
				cursor: text;
				background-color: field;
				margin: 0em;
				padding: 1px 2px;
				border-width: 2px;
				border-style: inset;
				border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
				border-image: initial;
			}</style>`));
			
			$('html > head').append($(`<style>#msg, #confirm, #confirm2, #input, #combo
			{
				left: 212px;
				top: 170px;
				width: 600px;
				height: 300px;
				font-family: "Arial Rounded MT Bold";
				background-image: url('https://images.duelingbook.com/svg/msg_background.svg');
				background-size: contain;
				/* background-size: cover; */
				z-index: 45;
			}</style>`));
		
			$('html > head').append($(`<style>.textinput
			{
				font-family: "Arial";
				font-size: 12px !important;
				padding-left: 3.5px;
				background-color: white;
				border-left: 1px solid #C9CBCC;
				border-top: 1px solid #6D6F70;
				border-right: 1px solid #C9CBCC;
				border-bottom: 1px solid #D3D5D6;
				font-weight: normal;
				line-height: 20px;
				pointer-events: none;
				/* overflow: hidden; */
				color: black;
				/* white-space: nowrap; */
			}</style>`));
			
			$('#input .input_txt').on('input', function(){
				var regex = $(this).data("regex");
				if ($(this).val().match(regex)) {
					$(this).val($(this).val().replace(regex, ""));
				}
			});
			
			$('textarea').on('input blur', function(){
					$(this).text($(this).val());
				});
				$('.textarea').addClass("selectable");
				$('input').click(function(){ // for super_cb
					$(this).focus();
				});
		}
		let Eyal_globalList = document.querySelectorAll("eyal")

		for (let abc = 0; abc < Eyal_globalList.length; abc++)
		{
			let objId = Eyal_globalList[abc].id;
			
			if(objId.startsWith("Eyal_new_"))
			{	
				$(Eyal_globalList[abc]).off("mouseup");
				$(Eyal_globalList[abc]).mouseup(Eyal_EditCardStatsMenu);
			}
		}
	}
	
	Eyal_createNegateButton();
	Eyal_createEditStatsButtons();
	
	window.Eyal_swapCardMenuForPlayer = function(player)
	{
		for(let abc=0;abc < player.all_cards_arr.length;abc++)
		{
			if(player.all_cards_arr[abc] && typeof player.all_cards_arr[abc].data("negations") === "undefined")
			{
				player.all_cards_arr[abc].data("negations", 0);
			}
			player.all_cards_arr[abc].find('.content:first').off("mouseover");
			player.all_cards_arr[abc].find('.content:first').mouseover(Eyal_cardMenuE);
			
			player.all_cards_arr[abc].find('.content:first').off("contextmenu");
			player.all_cards_arr[abc].find('.content:first').contextmenu(function()
			{
				if(!Eyal_unlockCardMechanics)
					return;
				
				event.preventDefault();
				
				let card = player.all_cards_arr[abc];

				// Should not work for things in your hand...
				if(isIn(card, player1.hand_arr) >= 0)
					return;
				
				if(isIn(card, player1.opponent.hand_arr) >= 0)
				{
					let arr = player1.opponent.hand_arr.slice();
					
					if(arr.length >= 2)
					{
						getConfirmation("Randomly target a card in their hand?", "", Eyal_snipeHandYes);	
					}
					
					return;
				}
				if(!card.data("face_down"))
				{
					switch(card.data("cardfront").data("name"))
					{
						case "Book of Eclipse":
							// Find on field, if not, find in GY / banished.
							if(Eyal_findCardByIdReal(card.data("id")))
							{
								getConfirmation("Set all of your monsters?", "You can right click this card in the GY to flip them back.", Eyal_FlipAllYes);	
							}
							else
							{
								getConfirmation("Flip back all of your monsters?", "", Eyal_UnflipAllYes);	
							}
						break;
						
						case "Nibiru, the Primal Being":
							window.Eyal_nibiruCard = card;
							getConfirmation("Tribute all of your monsters?", "This will force you to say how much ATK/DEF you tributed.", Eyal_NibiruYes);	
						break;
						
						
						case "Card Destruction":
							getConfirmation("Replace hand?", "Discard hand, draw hand.", Eyal_CardDestructionYes);	
						break;
						
						case "Morphing Jar":
							getConfirmation("Refill hand?", "Discard hand, draw 5.", Eyal_MorphingJarYes);	
						break;
						
						case "Morphing Jar #2":
							getConfirmation("Resolve effect?", "Send Jar to GY if it was destroyed.<br>It will shuffle your field to deck & excavate.<br>This may ilegally SS some monsters.", Eyal_MorphingJarNumberTwoYes, null, true);	
						break;
						
						case "Divine Arsenal AA-ZEUS - Sky Thunder":
							window.Eyal_zeusCard = card;
							
							getConfirmation("Send all cards to the GY?", "", Eyal_ZeusYes);	
						break;
						
						case "Black Rose Dragon":
						case "Final Destiny":
						case "Ojama Delta Hurricane!!":
							getConfirmation("Send all cards to the GY?", "", Eyal_OjamaDeltaYes);	
						break;
						
						case "Raigeki":
						case "Dark Hole":
						case "Cyber Jar":
						case "Torrential Tribute":
						case "Giant Trap Hole":
						case "Time Wizard":
							getConfirmation("Send all monsters to the GY?", "", Eyal_RaigekiYes);	
						break;
						
						// In GY only
						case "Elemental HERO Absolute Zero":
						case "Prank-Kids Battle Butler":
						case "Mirrorjade the Iceblade Dragon":
						case "Volcanic Scattershot":
							if(Eyal_findCardByIdReal(card.data("id")))
							{
								
							}
							else
							{
								getConfirmation("Send all monsters to the GY?", "", Eyal_RaigekiYes);	
							}
						break;
						
						case "Harpie's Feather Duster":
						case "Heavy Storm":
						case "Malevolent Catastrophe":
							getConfirmation("Send all backrow to the GY?", "", Eyal_DusterYes);	
						break;
						
						case "Fiber Jar":
							window.Eyal_fiberCard = card;
							
							getConfirmation("Resolve Fiber Jar?", "This will make a lot of actions at once.", Eyal_FiberJarYes);
						break;
						
						default:
												
							if(Eyal_IsCardExchangeOfSpirit(card))
							{
								getConfirmation("Swap Deck with GY?", "This will make a lot of actions at once.", Eyal_ExchangeSpiritYes);
							}
						break;
					}
					
		
					return;
				}
				
				let opponentST = [];
				let opponentMonsters = [];
				
				let bST = false;
				let bMonster = false;
				
				
				for(let abc=1;abc <= 5;abc++)
				{
					if(player1.opponent["m" + abc] == card)
						bMonster = true;
					
					if(player1.opponent["m" + abc] != null && player1.opponent["m" + abc].data("face_down"))
						opponentMonsters.push(player1.opponent["m" + abc])
				}
				for(let abc=1;abc <= 5;abc++)
				{
					if(player1.opponent["s" + abc] == card)
						bST = true;
					
					if(player1.opponent["s" + abc] != null && player1.opponent["s" + abc].data("face_down"))
						opponentST.push(player1.opponent["s" + abc])
				}
				
				if(bST)
				{
					let arr = opponentST;
					
					if(arr.length >= 2)
					{
						getConfirmation("Randomly target a card in their backrow?", "", Eyal_snipeBackrowYes);	
					}
					
					return;
				}
				else if(bMonster)
				{
					let arr = opponentMonsters;
					
					if(arr.length >= 2)
					{
						getConfirmation("Randomly target an opponent's face-down monster?", "", Eyal_snipeMonstersYes);	
					}
					
					return;
				}
			});
		}
	}
	
	window.Eyal_editStatsYes = function()
	{				
		if (typeof window.Eyal_editCard === "undefined")
			return;

		else if (typeof window.Eyal_editCard.data === "undefined")
			return;

		else if (typeof window.Eyal_editCard.data("cardfront") === "undefined")
			return
		
		let card = window.Eyal_editCard;
		
		let originalStat = window.Eyal_editStat.replace("Eyal_new_", "");
		let stat = $('#input .input_txt').val();
		
		if(stat.length == 0)
			stat = card.data("cardfront").data(originalStat);
		
		else
		{	
			let oldStat = card.data("cardfront").data(originalStat);
			
			if(typeof oldStat === "undefined")
				oldStat = 0;
			
			let currentStat = card.data("cardfront").data(window.Eyal_editStat);
			
			if(typeof currentStat === "undefined")
				currentStat = oldStat;
			
			stat = Eyal_ExprEval(stat, oldStat, currentStat);
		}
		if(stat < 0)
		{
			errorE(`${originalStat.toUpperCase()} cannot be lower than 0!`);
			return;
		}
		
		else if(stat > 99999)
		{
			errorE(`${originalStat.toUpperCase()} cannot be higher than 99999!`);
			return;
		}
		
		card.data("cardfront").data(window.Eyal_editStat, stat.toString());
		
		updateStats();
	}
	
	window.updateStats = function()
	{
		var zones = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5];
		var texts = [player1.m1_txt, player1.m2_txt, player1.m3_txt, player1.m4_txt, player1.m5_txt, player2.m1_txt, player2.m2_txt, player2.m3_txt, player2.m4_txt, player2.m5_txt];
		if (links) {
			zones.push(linkLeft);
			zones.push(linkRight);
			texts.push($('#ol_txt'));
			texts.push($('#hl_txt'));
		}
		
		for (var i = 0; i < zones.length; i++)
		{
			if (zones[i]) {
				if (zones[i].data("cardfront").data("card_type") == "Monster" || zones[i].data("cardfront").data("card_type") == "Trap")
				{
					let originalATK = "0";
					
					if(zones[i].data("cardfront").data("atk"))
					{
						originalATK = zones[i].data("cardfront").data("atk");
					}
					let originalDEF = "0"
					
					if (zones[i].data("cardfront").data("monster_color") != "Link" && zones[i].data("cardfront").data("def"))
					{
						originalDEF = zones[i].data("cardfront").data("def");
					}
					
					let atk = originalATK;
					let def = originalDEF;
					
					if(zones[i].data("cardfront").data("Eyal_new_atk"))
						atk = zones[i].data("cardfront").data("Eyal_new_atk");
					
					if(zones[i].data("cardfront").data("monster_color") != "Link" && zones[i].data("cardfront").data("Eyal_new_def"))
						def = zones[i].data("cardfront").data("Eyal_new_def");
					
					if(parseInt(atk) > parseInt(originalATK))
					{
						atk = `<font color='00FF00'>${atk}</font>`;
					}
					else if(parseInt(atk) < (originalATK))
					{
						atk = `<font color='FF0000'>${atk}</font>`;
					}
					
					if(parseInt(def) > (originalDEF))
					{
						def = `<font color='00FF00'>${def}</font>`;
					}
					else if(parseInt(def) < (originalDEF))
					{
						def = `<font color='FF0000'>${def}</font>`;
					}
					
					// Invalid elements avoid all styling bugs.
					// Create new clickable button outside of the screen
					atk = `<eyal id="Eyal_new_atk_${zones[i].data("id")}">${atk}</eyal>`
					def = `<eyal id="Eyal_new_def_${zones[i].data("id")}">${def}</eyal>`
					
					

					
					//if ((zones[i].data("face_down") && zones[i].data("controller").username != username) || TweenMax.isTweening(zones[i])) {
					//if ((zones[i].data("face_down") && !isPlayer1(zones[i].data("controller").username)) || TweenMax.isTweening(zones[i])) {
					//if ((zones[i].data("face_down") && !show_cards) || isPlayer2(zones[i].data("controller").username) || TweenMax.isTweening(zones[i])) {
					if ( zones[i].data("face_down") && !show_cards && !duelist || duelist && zones[i].data("face_down") && !isPlayer1(zones[i].data("controller").username) || TweenMax.isTweening(zones[i])) {
						texts[i].hide();
					}
					else {						
						// Eyal282 here, DUELING BOOK AHHHHHHHH WHYYYYYY YOU DO THISSSS
						texts[i].css("pointer-events", "auto");
						
						texts[i][0].innerHTML = atk;
						if (zones[i].data("cardfront").data("monster_color") != "Link") {
							texts[i][0].innerHTML += "/" + def;
							//texts[i].append(def);
						}
						texts[i].show();
						if (texts[i][0] == $('#ol_txt')[0] || texts[i][0] == $('#hl_txt')[0]) {
							if (isPlayer1(zones[i].data("controller").username)) {
								texts[i].css("top", 313);
							}
							else {
								texts[i].css("top", 247);
							}
						}
					}
				}
			}
		}
		
		Eyal_createEditStatsButtons();
	}
	
	window.Eyal_getCardATK = function(card)
	{
		if(card.data("cardfront").data("Eyal_new_atk"))
			return card.data("cardfront").data("Eyal_new_atk");
		
		return card.data("cardfront").data("atk");
	}
	
	window.Eyal_getCardDEF = function(card)
	{
		if(card.data("cardfront").data("Eyal_new_def"))
			return card.data("cardfront").data("Eyal_new_def");
		
		return card.data("cardfront").data("def");
	}
	window.Eyal_UnexcavateYes = function()
	{
		for(let abc=0;abc < window.Eyal_excavatedArr.length;abc++)
		{
			if(window.Eyal_excavatedArr[abc].data("face_down") || isIn(window.Eyal_excavatedArr[abc], player1.banished_arr) < 0)
			{

				window.Eyal_excavatedArr.splice(abc, 1);
				abc--;
			}
		}
		let Eyal_val = $('#combo .combo_cb').val();
		
		for(let abc=0;abc < window.Eyal_excavatedArr.length;abc++)
		{
			
			if(Eyal_val == "Top Deck")
				cardMenuClicked(window.Eyal_excavatedArr[abc], "To T Deck");

			else if(Eyal_val == "Bottom Deck")
				cardMenuClicked(window.Eyal_excavatedArr[abc], "To B Deck");
			
			else if(Eyal_val == "GY")
				cardMenuClicked(window.Eyal_excavatedArr[abc], "To GY");	
		}
		
		window.Eyal_excavatedArr.length = 0;
	}
	
	window.Eyal_NibiruYes = function()
	{
		if (typeof window.Eyal_nibiruCard === "undefined")
			return;

		else if (typeof window.Eyal_nibiruCard.data === "undefined")
			return;

		else if (typeof window.Eyal_nibiruCard.data("cardfront") === "undefined")
			return
		
		Eyal_CheckPlayerZones(true);
		
		let totalATK = 0;
		let totalDEF = 0;
		
		let foundToken = false;
		let foundTrapMonster = false;
		let foundAny = false;
		
		
		for(let abc=0;abc < Eyal_Player1MonsterZones.length;abc++)
		{
			let card = Eyal_Player1MonsterZones[abc].card;
			
			if(card.data("face_down"))
				continue;
			
			else if(window.Eyal_nibiruCard.data("id") == card.data("id"))
				continue;
			
			foundAny = true;
			
			if(card.data("cardfront").data("monster_color") == "Token")
			{
				foundToken = true;
				cardMenuClicked(card, "To GY");
				continue;
			}
			
			else if(card.data("cardfront").data("card_type") != "Monster")
			{
				foundTrapMonster = true;
				cardMenuClicked(card, "To GY");
				continue;
			}
			
			let atk = parseInt(card.data("cardfront").data("atk"));
			let def = parseInt(card.data("cardfront").data("def"));
			
			// For ?/? ATK/DEF.
			if(!isNaN(atk))
			{
				totalATK += atk;
			}
			
			// For ?/? ATK/DEF and for Link Monsters.
			if(!isNaN(def))
			{
				totalDEF += def;
			}
			cardMenuClicked(card, "To GY");
		}
		
		if(!foundAny)
		{
			return;
		}
		
		Send({"action":"Duel", "play":"Duel message", "message":`I have tributed ${totalATK}/${totalDEF} ATK/DEF worth of monsters.`, "html":~~0});
		
		if(foundToken)
		{
			Send({"action":"Duel", "play":"Duel message", "message":`I did not calculate the tokens for this.`, "html":~~0});
		}
		
		if(foundTrapMonster)
		{
			Send({"action":"Duel", "play":"Duel message", "message":`I did not calculate the trap monsters for this.`, "html":~~0});
		}
	}
	
	window.Eyal_CardDestructionYes = function()
	{
		if(player1.main_arr.length < player1.hand_arr.length)
			return;
		
		let count = 0;
		
		for(let abc=0;abc < player1.hand_arr.length;abc++)
		{
			cardMenuClicked(player1.hand_arr[abc], "To GY");
			count++;
		}
		
		for(let abc=0;abc < count;abc++)
		{
			cardMenuClicked(player1.main_arr[abc], "Draw card");
		}
	}
	window.Eyal_MorphingJarYes = function()
	{
		if(player1.main_arr.length < 5)
			return;
		
		for(let abc=0;abc < player1.hand_arr.length;abc++)
		{
			cardMenuClicked(player1.hand_arr[abc], "To GY");
		}
		
		for(let abc=0;abc < 5;abc++)
		{
			cardMenuClicked(player1.main_arr[abc], "Draw card");
		}
	}
	
	window.Eyal_MorphingJarNumberTwoYes = function()
	{	
		if(window.Eyal_excavatedArr.length > 0)
			return;
			
		let amountSent = 0;
						
		window.Eyal_waitingForAction = true;
		
		Eyal_CheckPlayerZones(true);
		
		//TweenMax.globalTimeScale(3);
		
		for(let abc=0;abc < Eyal_Player1MonsterZones.length;abc++)
		{
			let card = Eyal_Player1MonsterZones[abc].card;
			
			if(isExtraDeckCard(card))
				cardMenuClicked(card, "To ED");
			
			else
			{
				cardMenuClicked(card, "To T Deck");
				
				// Traps don't count...
				if(card.data("cardfront").data("card_type") == "Monster" && card.data("owner") == player1)
				{
					amountSent++;
				}
			}
		}
		
		cardMenuClicked(new Card(), "Shuffle deck");
		
		let jarInterval = setInterval(function ()
		{
			if(amountSent == 0)
			{
				clearInterval(jarInterval)
				window.Eyal_excavatedArr = [];
				
				//TweenMax.globalTimeScale(1);
				return;
			}
			
			if(actionsQueue.length <= 0 && !window.Eyal_waitingForAction)
			{
				if(window.Eyal_excavatedArr.length == 0)
				{
					for(let abc=0;abc < amountSent;abc++)
					{
						let Eyal_card = player1.main_arr[abc];
						
						cardMenuClicked(Eyal_card, "Banish");
						window.Eyal_waitingForAction = true;
						window.Eyal_excavatedArr.push(Eyal_card);
					
					}
				}
				else
				{
					for(let abc=0;abc < window.Eyal_excavatedArr.length;abc++)
					{
						let Eyal_card = window.Eyal_excavatedArr[abc];
						
						if(Eyal_card.data("cardfront").data("card_type") == "Monster")
						{
							
							amountSent--;
							
							if(Eyal_card.data("cardfront").data("level") <= 4)
							{
								let Eyal_checked = $('#choose_zones_cb').prop("checked")
	
								$('#choose_zones_cb').checked(false)
	
								cardMenuClicked(Eyal_card, "SS DEF");
								
								$('#choose_zones_cb').checked(Eyal_checked);
							}
							else
							{
								cardMenuClicked(Eyal_card, "To GY");
							}
						}
						else
						{
							cardMenuClicked(Eyal_card, "To GY");
						}
					}
					
					window.Eyal_excavatedArr = [];
					window.Eyal_waitingForAction = false;
				}
			}
		}, 50);
	}
	
	window.Eyal_ZeusYes = function()
	{
		if (typeof window.Eyal_zeusCard === "undefined")
			return;

		else if (typeof window.Eyal_zeusCard.data === "undefined")
			return;

		else if (typeof window.Eyal_zeusCard.data("cardfront") === "undefined")
			return
		
		Eyal_CheckPlayerZones(true);

		for(let abc=0;abc < Eyal_Player1Field.length;abc++)
		{
			let card = Eyal_Player1Field[abc].card;
			
			
			if(window.Eyal_zeusCard.data("id") == card.data("id"))
				continue;

			cardMenuClicked(card, "To GY");
		}
	}
	
	window.Eyal_OjamaDeltaYes = function()
	{
		Eyal_CheckPlayerZones(true);

		for(let abc=0;abc < Eyal_Player1Field.length;abc++)
		{
			let card = Eyal_Player1Field[abc].card;

			cardMenuClicked(card, "To GY");
		}
	}
	
	window.Eyal_RaigekiYes = function()
	{
		Eyal_CheckPlayerZones();
		
		for(let abc=0;abc < Eyal_Player1MonsterZones.length;abc++)
		{
			let card = Eyal_Player1MonsterZones[abc].card;
			

			if(card == null)
				continue;

			cardMenuClicked(card, "To GY");
		}
	}
	
	window.Eyal_DusterYes = function()
	{
		Eyal_CheckPlayerZones();
		
		for(let abc=0;abc < Eyal_Player1STZones.length;abc++)
		{
			let card = Eyal_Player1STZones[abc].card;
			

			if(card == null)
				continue;

			cardMenuClicked(card, "To GY");
		}
	}
	
	window.Eyal_FlipAllYes = function()
	{
		Eyal_CheckPlayerZones();
		
		for(let abc=0;abc < Eyal_Player1MonsterZones.length;abc++)
		{
			let card = Eyal_Player1MonsterZones[abc].card;
			
			if(card == null)
				continue;
			
			else if(card.data("face_down"))
				continue;

			cardMenuClicked(card, "Set monster");
		}
	}
	
	window.Eyal_UnflipAllYes = function()
	{
		Eyal_CheckPlayerZones();
		
		for(let abc=0;abc < Eyal_Player1MonsterZones.length;abc++)
		{
			let card = Eyal_Player1MonsterZones[abc].card;
			
			if(card == null)
				continue;

			else if(!card.data("face_down"))
				continue;
			
			cardMenuClicked(card, "Flip");
		}		
	}
	window.Eyal_snipeHandYes = function()
	{
		let arr = player1.opponent.hand_arr.slice();
		
		if(arr.length >= 2)
		{
			cardMenuClicked(arr[Eyal_getRandomInt(0, arr.length-1)], "Target");
		}
	}
	
	window.Eyal_snipeBackrowYes = function()
	{
		let opponentST = [];
		
		for(let abc=1;abc <= 5;abc++)
		{
			if(player1.opponent["s" + abc] != null && player1.opponent["s" + abc].data("face_down"))
				opponentST.push(player1.opponent["s" + abc])
		}
		
		let arr = opponentST;
		
		if(arr.length >= 2)
		{
			cardMenuClicked(arr[Eyal_getRandomInt(0, arr.length-1)], "Target");
		}
	}
	
	window.Eyal_snipeMonstersYes = function()
	{
		let opponentMonsters = [];
		
		for(let abc=1;abc <= 5;abc++)
		{
			if(player1.opponent["m" + abc] != null && player1.opponent["m" + abc].data("face_down"))
				opponentMonsters.push(player1.opponent["m" + abc])
		}
		
		let arr = opponentMonsters;
		
		if(arr.length >= 2)
		{
			cardMenuClicked(arr[Eyal_getRandomInt(0, arr.length-1)], "Target");
		}
	}
	
    window.Eyal_addColoredLine = function(color, str)
    {
        if (conceal)
        {
            return;
        }
        saveDuelVSP();
        $('#duel .cout_txt').append('<b><font color="' + color + '">' + escapeHTML(str) + '</b></font><br>');
        restoreDuelVSP();
    }
    
    window.Eyal_exitViewing = function(e, b)
    {
		if($("#ed_select").length > 0)
		{
			$("#ed_select").hide();
			Eyal_ed_select.stop();
		}
		
		Eyal_GenerateTrueAllCardsArray();
		
		if(viewing == "Deck")
		{
			window.Eyal_DigString = undefined;
		}
        if(viewing == "Opponent's Hand" && cardLogging)
        {
            Eyal_LastOpponentHand = [];
            
            for(let abc=0;abc < player1.opponent.hand_arr.length;abc++)
            {
                Eyal_LastOpponentHand.push(player1.opponent.hand_arr[abc]);
            }
            
            getConfirmation("Log Opponent's Hand?", "", Eyal_LogHandYes);
        }
        
        if (duelist && viewing) {
            Send({"action":"Duel", "play":b ? "Stop viewing 2" : "Stop viewing", "viewing":viewing});
            player1.temp_arr = [];
        }
        removeCardMenu();
        viewing = "";
        $('#view .title_txt').text("");
        $('#view > .content').scrollTop(0);
        $('#view').hide();
        shiftDecks();
        
        if (e)
        {
            e.preventDefault();
            e.stopPropagation();
        }

    }
    
    window.Eyal_LogHandYes = function()
    {
        addLine("==============================")
        
        for(let abc=0;abc < player1.opponent.hand_arr.length;abc++)
        {
			let cardName = player1.opponent.hand_arr[abc].data("cardfront").data("name");
			
			if(cardName.length > 27)
				cardName = cardName.slice(0, 27);
			
			Eyal_addCardHoverLine('<font color="0000FF">' + quote(cardName) + "</font>", player1.opponent.hand_arr[abc]);
        }
        
        addLine("==============================")
    }
	
	window.previewFront = function(cardfront)
	{
		if (preview.data("id") == 0) {
			preview.data("id", -1);
		}
		if (preview.data("id") == cardfront.data("id") && preview.is(":visible")) {
			return;
		}
		
		if(typeof window.Eyal_TextImages === "undefined")
		{
			window.Eyal_TextImages = []
		}
	
		preview.find('.skillback').detach();
		showPreview(); // moved from below because setCardName

		preview.copyCard(cardfront);

		if(femOfSwitch && Eyal_femaleCards.indexOf(cardfront.data("name")) != -1 && preview.find('.pic').attr("src").indexOf("card-pics") >= 0)
		{
			preview.removeImage();
			
			let obj = Eyal_TextImages.find(o => o.name === cardfront.data("name"));
					
			if(obj)
			{
				preview.find('.pic').attr("src", obj.pic);
			}
			else
			{
				let canvas = document.createElement("canvas");
				let context = canvas.getContext("2d");
				
				context.fillStyle = "white";
				context.fillRect(0, 0, 350, 350);
				
				context.fillStyle = "black";
				context.font = "42px MatrixRegularSmallCaps";
				
				let segments = [];
				segments = cardfront.data("name").split(" ");
				
				// Bring back the spaces.
				for(let abc=0;abc < segments.length;abc++)
				{
					segments[abc] = segments[abc] + " ";
				}
				
				if(segments.length > 1)
				{
					// Notice the limit where we loop until the second to last element, rather than until the last element.
					for(let abc=0;abc < segments.length - 1;abc++)
					{
						
						if(segments[abc].length + segments[abc + 1].length <= 12)
						{
							segments[abc] = segments[abc] + segments[abc + 1];
							segments.splice(abc + 1, 1);
							// Return to the beginning.
							abc = 0;
						}
					}
				}
				
				let x = 15;
				let y = 30;
				
				for(let abc=0;abc < segments.length;abc++)
				{
					context.fillText(segments[abc], x, y);	
					
					y += 35;
				}
						
				let imageURL = canvas.toDataURL();
				
				preview.find('.pic').attr("src", imageURL);
				
				// We already created obj above.
				obj = {};
				
				obj.name = cardfront.data("name");
				obj.pic = imageURL;
				
				Eyal_TextImages.push(obj);
			}
		}
		if(cardfront.data("effect").search(/(This card is an Evolve Monster)/i) != -1)
		{
			preview.find('.card_color').attr('src', "");
			preview.find('.card_color').attr('src', 'https://i.ibb.co/XzGbZ6p/Evolution-cardtype.png')
			preview.find('.name_txt').css("color", "white");
		}
		else if(cardfront.data("effect").search(/(This card is a Token)/i) != -1)
		{
			preview.find('.card_color').attr('src', IMAGES_START + "card/token_front2.jpg");
		}
		else if(cardfront.data("effect").search(/At the start of the Duel, flip this card over/i) != -1)
		{
			preview.find('.card_color').attr('src', IMAGES_START + "card/skill_front2.jpg");
			
			preview.find(".name_txt").css("color", "white")
		}
		if(cardfront.data("effect").search(/this card is DREAM-Attribute/i) != -1)
		{
			preview.find('.attribute').attr('src', "");
			preview.find('.attribute').attr('src', "https://i.ibb.co/X2VSTR0/dream2-en.png")
		}
		
		// Eyal282 here, adding URL to the card.
		removeButton(preview, Eyal_openPreviewURL);
		addButton(preview, Eyal_openPreviewURL);
		
		//if (~~cardfront.data("pendulum") > 0) {
			
		let levelStr = "LEVEL: ";
		
		if(cardfront.data("monster_color") == "Xyz")
			levelStr = "RANK: ";
		
		if (cardfront.data("pendulum"))
		{
			preview_txt.html("<b>" + levelStr + cardfront.data("level") + "<br>" + "Pendulum Effect:</b><br>" + Eyal_MakePSCTColorOnEffect(cardfront.data("name"), escapeHTML(cardfront.data("pendulum_effect"))) + '<br><br>' + "<b>Monster Effect:</b><br>");
			if (cardfront.data("monster_color") == "Normal")
			{
				preview_txt.append("<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
			} else
			{
				preview_txt.append(Eyal_MakePSCTColorOnEffect(cardfront.data("name"), escapeHTML(cardfront.data("effect"))));
			}
		}
		else if (cardfront.data("rush") && cardfront.data("monster_color") != "Normal")
		{
			preview_txt.html(escapeHTML(cardfront.data("effect")).replace('[Requirement]', '<b>[Requirement]</b>').replace('<br>[Effect]', '<br><b>[Effect]</b>').replace('<br>[Continuous Effect]', '<br><b>[Continuous Effect]</b>').replace('<br>[Multi-Choice Effect]', '<br><b>[Multi-Choice Effect]</b>').replace('[REQUIREMENT]', '<b>[REQUIREMENT]</b>').replace('<br>[EFFECT]', '<br><b>[EFFECT]</b>').replace('<br>[CONTINUOUS EFFECT]', '<br><b>[CONTINUOUS EFFECT]</b>').replace('<br>[MULTI-CHOICE EFFECT]', '<br><b>[MULTI-CHOICE EFFECT]</b>'));
		}
		else
		{
			if (cardfront.data("monster_color") == "Normal")
			{
				preview_txt.html("<b>" + levelStr + cardfront.data("level") + "</b><br>" + "<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
			}
			else if (cardfront.data("level") > 0 && cardfront.data("monster_color") != "Link")
			{
				preview_txt.html("<b>" + levelStr + cardfront.data("level") + "</b><br>" + Eyal_MakePSCTColorOnEffect(cardfront.data("name"), escapeHTML(cardfront.data("effect"))));
			}
			else if (cardfront.data("card_type") == "Skill")
			{
				preview_txt.html(escapeHTML(cardfront.data("pendulum_effect")) + "<br><br>" + escapeHTML(cardfront.data("effect")));
			}
			else
			{
				preview_txt.html(Eyal_MakePSCTColorOnEffect(cardfront.data("name"), escapeHTML(cardfront.data("effect"))));
			}
		}
	}
	
	window.Eyal_MakePSCTColorOnEffect = function(name, text)
	{
		if(window.Eyal_preErratas)
		{
			let obj = Eyal_EdisonPreErratas.find(o => o.name === name);
		
			if(obj)
			{
				text = `<b>PRE ERRATA</b><br>${obj.effect}`;
			}
		}
		
		return Eyal_MakePSCTColorOnEffect2(text);
	}
	
	window.Eyal_MakePSCTColorOnEffect2 = function(text)
	{
		// Fixes text.replaceAll('&quot;', '"'); and text = text.replaceAll('&amp;', '&'); and friends.
		
		text = decodeHtmlStr(text);
		// 0 = nothing. 1 = cost. 2 = condition.
		let stateActive = 0;

		let stateColors = []
		stateColors.push(`</eyal>`)
		stateColors.push(`<eyal style="color:red;">`)
		stateColors.push(`<eyal style="color:green;">`)

		let newText = [];

		for(let abc=text.length;abc >= 0;abc--)
		{
			newText.push(text[abc])
			
			if(stateActive != 0 && (abc == 0 || (text[abc-1] == "." && text[abc] == ")") || text[abc] == "]" || text[abc] == ">" || (text[abc] == "." && text[abc+1] == " ") || (text[abc] == ":" && !Eyal_IsCharacterInQuotes(text, abc)) || text[abc] == ";" || Eyal_isUltraSpecialCharacter(text[abc])))
			{
				if(abc == 0)
				{
					if(text[abc] == ">" || (text[abc] == "." && text[abc+1] == " ") || text[abc] == ":" || text[abc] == ";" || Eyal_isUltraSpecialCharacter(text[abc]))
					{
						newText.length = newText.length - 1
						newText.push(stateColors[stateActive])
						newText.push(text[abc])
					}
					else
						newText.push(stateColors[stateActive])
				}

				else
				{
					newText.length = newText.length - 1
					newText.push(stateColors[stateActive])
					newText.push(text[abc])
				}

				stateActive = 0;
			}
			if(text[abc] == ";" && !Eyal_IsCharacterInQuotes(text, abc))
			{
			  newText.push(stateColors[0])
			  stateActive = 1
			}

			else if(text[abc] == ":" && !Eyal_IsCharacterInQuotes(text, abc))
			{
			  newText.push(stateColors[0])
			  stateActive = 2
			}
		}

		let finalText = newText.reverse().join("")
		
		return finalText;
	}
	
	window.decodeHtmlStr = function(str)
	{
		let Eyal_temp = document.createElement("textarea");
		Eyal_temp.innerHTML = str;
	
		return Eyal_temp.value;
	};
	
	window.Eyal_isUltraSpecialCharacter = function(charac)
	{
		// Space is included in chars.
		
		let csgoConsole = "`"
		let chars = `AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890 ~${csgoConsole}!#$%^&*+_=-()[]\';,./{}|":<>?`
		
		if(chars.indexOf(charac) == -1)
			return true;
		
		return false;
		
	}
	
	// This hard thing is solved by going right / left and checking if the amount of quotes to that direction are odd / even.
	window.Eyal_IsCharacterInQuotes = function(str, index)
	{
		let count = 0;
		for(let i=index;i < str.length;i++)
		{
			if(str[i] == `"`)
				count++;
		}
		
		return count % 2 == 1
	}
	window.Eyal_openPreviewURL = function()
	{
		if(!preview || !preview.data("id"))
			return;

		window.open('https://www.duelingbook.com/card?id=' + preview.data("id"));
	}
	
	window.enterM1E = function()
	{
		if(currentPhase != "DP" && currentPhase != "SP")
		{
			Send({"action":"Duel", "play":"Enter M1"});
			return;
		}
		
		
		let serpentFound = false;
		let treebornFound = false;
		
		for(let abc=0;abc < player1.grave_arr.length;abc++)
		{
			if(player1.grave_arr[abc].data("cardfront").data("name") == "Sinister Serpent")
			{
				serpentFound = true;
				break;
			}
			
			if(player1.grave_arr[abc].data("cardfront").data("name") == "Treeborn Frog")
			{
				treebornFound = true;
				break;
			}
		}
		
		let playerST = [];

		for(let abc=1;abc <= 5;abc++)
		{
			if(player1["s" + abc] != null)
				playerST.push(player1["s" + abc])
		}
		
		if(playerST.length > 0)
		{
			treebornFound = false;
		}
		
		Eyal_CheckPlayerZones(true);
		
		if(Eyal_Player1MonsterZones.find(o => o.card.data("cardfront").data("name") === "Treeborn Frog"))
		{
			treebornFound = false;
		}
		
		if(serpentFound)
		{
			if(currentPhase == "DP")	
			{
				enterSPE();
			}
			
			getConfirmation2("Take Sinister Serpent before MP1?", "", Eyal_SinisterYes, Eyal_SinisterNo);
		}
		else if(treebornFound)
		{
			if(currentPhase == "DP")	
			{
				enterSPE();
			}
			
			getConfirmation2("SS Treeborn Frog before MP1?", "", Eyal_TreebornYes, Eyal_TreebornNo);
		}
		else
		{
			Send({"action":"Duel", "play":"Enter M1"});
		}
	}
	
	window.Eyal_SinisterYes = function()
	{

		
		for(let abc=0;abc < player1.grave_arr.length;abc++)
		{
			if(player1.grave_arr[abc].data("cardfront").data("name") == "Sinister Serpent")
			{
				cardMenuClicked(player1.grave_arr[abc], "To hand");
				break;
			}
		}
		
		Send({"action":"Duel", "play":"Enter M1"});
	}
	
	window.Eyal_SinisterNo = function()
	{
		Send({"action":"Duel", "play":"Enter M1"});
	}
	
	window.Eyal_TreebornYes = function()
	{
		let playerST = [];

		for(let abc=1;abc <= 5;abc++)
		{
			if(player1["s" + abc] != null)
				playerST.push(player1["s" + abc])
		}
		
		if(playerST.length > 0)
		{
			Send({"action":"Duel", "play":"Enter M1"});
			return;
		}
		
		for(let abc=0;abc < player1.grave_arr.length;abc++)
		{
			if(player1.grave_arr[abc].data("cardfront").data("name") == "Treeborn Frog")
			{
				let Eyal_checked = $('#choose_zones_cb').prop("checked");

				$('#choose_zones_cb').checked(false);
				cardMenuClicked(player1.grave_arr[abc], "SS DEF");
				$('#choose_zones_cb').checked(Eyal_checked);
				
				break;
			}
		}
		
		

	}
	
	window.Eyal_TreebornNo = function()
	{
		Send({"action":"Duel", "play":"Enter M1"});
	}
	
	window.Eyal_ImportDeckE = function()
	{
		var options = ["File"];
		var custom = false;
		var rush = false;
		
		for (var i = 0; i < deck_filled_arr.length; i++) {
			if (deck_filled_arr[i].data("custom")) {
				custom = true;
			}
			if (deck_filled_arr[i].data("rush")) {
				rush = true;
			}
		}
		for (i = 0; i < side_filled_arr.length; i++) {
			if (side_filled_arr[i].data("custom")) {
				custom = true;
			}
			if (side_filled_arr[i].data("rush")) {
				rush = true;
			}
		}
		for (i = 0; i < extra_filled_arr.length; i++) {
			if (extra_filled_arr[i].data("custom")) {
				custom = true;
			}
			if (extra_filled_arr[i].data("rush")) {
				rush = true;
			}
		}
		
		if (!custom) {
			options.push("Clipboard List");
		}
		getComboBox("Import Deck", "For Clipboard import, use this example: https://ibb.co/7jZ4bS1", options, 0, Eyal_ImportDeck);
		showDim();
	}

	window.Eyal_ImportDeck = function()
	{
		if ($('#combo .combo_cb').val().indexOf("File") >= 0)
		{
			importDeck();
			return;
		}
		else if ($('#combo .combo_cb').val().indexOf("Clipboard List") >= 0)
		{
			Eyal_ImportDeckFromList();
		}
	
	}
	
	window.Eyal_ImportDeckFromList = async function()
	{
		
		let str = await navigator.clipboard.readText();

		var main_arr = [];
		var side_arr = [];
		var extra_arr = [];
		
		let cards = [];
		
		let import_arr = str.split("\n");
		
		for (let abc = 0;abc < import_arr.length;abc++)
		{
			if(import_arr[abc].charAt(0) != 1 && import_arr[abc].charAt(0) != 2 && import_arr[abc].charAt(0) != 3)
				continue;
			
			let count = import_arr[abc].charAt(0);
			
			if(import_arr[abc].charAt(1) == 'x' || import_arr[abc].charAt(1) == 'X')
			{
				import_arr[abc] = import_arr[abc].replace(import_arr[abc].charAt(1), "")
			}
			
			import_arr[abc] = import_arr[abc].replace(import_arr[abc].charAt(0), "")
			import_arr[abc] = import_arr[abc].trim()
			
			for(let dummy_value=0;dummy_value < count;dummy_value++)
			{
				cards.push(import_arr[abc]);
			}
		}
		for (let abc = 0; abc < cards.length; abc++)
		{			
			for(let i=0;i < Cards.length;i++)
			{
				if(Cards[i].name_lowercase == cards[abc].toLowerCase())
				{
					if(Cards[i].monster_color == "Fusion" || Cards[i].monster_color == "Synchro" || Cards[i].monster_color == "Xyz" || Cards[i].monster_color == "Link")
					{
						extra_arr.push(Cards[i].id);
						i = 9999999;
					}
					else
					{
						main_arr.push(Cards[i].id);
						i = 9999999;
					}
				}
			}
		}
		
		importedCards = {"main":main_arr, "side":side_arr, "extra":extra_arr};
		Eyal_importDeckFromListB();
	}

	window.Eyal_importDeckFromListB = function(str)
	{
		importedDeckName = "";
		getInput("Import Deck", "Enter a name for your new deck", importedDeckName, 20, Eyal_importDeckFromListC, /[^ -~●]/g);
		showDim();
	}

	window.Eyal_importDeckFromListC = function()
	{
		var name = $('#input .input_txt').val();
		if (name == "") {
			errorE("Deck name cannot be blank");
			importedCards = null;
			importedDeckName = null;
			return;
		}
		for (var i = 0; i < decks.length; i++) {
			if (decks[i].data.toLowerCase() == name.toLowerCase()) {
				errorE("Deck with name exists", importDeckE);
				showDim();
				return;
			}
		}
		Send({"action":"Import deck", "cards":importedCards, "name":name});
		importedCards = null;
		importedDeckName = null;
		showDim();
	}
	
	$('#deck_constructor #import_btn').off("click")
	$('#deck_constructor #import_btn').click(Eyal_ImportDeckE)
	
	
	window.Eyal_findCardReal = function(arr, hand, grave, like) {
		var cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell, linkLeft, linkRight, player1.skillCard, player2.skillCard];
		if (hand) {
			for (var k = 0; k < player1.hand_arr.length; k++) {
				cards.push(player1.hand_arr[k]);
			}
		}
		if (grave) {
			for (k = 0; k < player1.grave_arr.length; k++) {
				cards.push(player1.grave_arr[k]);
			}
		}
		for (var i = 0; i < arr.length;i ++) {
			for (var j = 0; j < cards.length; j++) {
				if (cards[j]) {
					if (cards[j].data("face_down")) { // Question
						continue;
					}
					//if (cards[j].data("cardfront").data("treated_as") == arr[i] && !cards[j].data("face_down")) {
					if (cards[j].data("cardfront").data("treated_as") == arr[i] || like && cards[j].data("cardfront").data("treated_as") && cards[j].data("cardfront").data("treated_as").indexOf(arr[i]) >= 0) {
						return true;
					}
				}
			}
		}
		return false;
	}
	
	// Card ID is fully unique, two copies of nibiru have different card IDs.
	// Card ID is found with card.data("id")
	window.Eyal_findCardByIdReal = function(cardId, hand, grave, like) {
		var cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell, linkLeft, linkRight, player1.skillCard, player2.skillCard];
		if (hand) {
			for (var k = 0; k < player1.hand_arr.length; k++) {
				cards.push(player1.hand_arr[k]);
			}
		}
		if (grave) {
			for (k = 0; k < player1.grave_arr.length; k++) {
				cards.push(player1.grave_arr[k]);
			}
		}
		for (var j = 0; j < cards.length; j++) {
			if (cards[j]) {
				if (cards[j].data("face_down")) { // Question
					continue;
				}
				//if (cards[j].data("cardfront").data("treated_as") == arr[i] && !cards[j].data("face_down")) {
				if (cards[j].data("id") == cardId)
				{
					return true;
				}
			}
		}
		return false;
	}
	
	// Card ID is fully unique, two copies of nibiru have different card IDs.
	// Card ID is found with card.data("id")
	window.Eyal_getCardByIdReal = function(cardId, hand, grave, like) {
		var cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell, linkLeft, linkRight, player1.skillCard, player2.skillCard];
		if (hand) {
			for (var k = 0; k < player1.hand_arr.length; k++) {
				cards.push(player1.hand_arr[k]);
			}
		}
		if (grave) {
			for (k = 0; k < player1.grave_arr.length; k++) {
				cards.push(player1.grave_arr[k]);
			}
		}
		for (var j = 0; j < cards.length; j++) {
			if (cards[j]) {
				/*
				if (cards[j].data("face_down")) { // Question
					continue;
				}*/
				//if (cards[j].data("cardfront").data("treated_as") == arr[i] && !cards[j].data("face_down")) {
				if (cards[j].data("id") == cardId)
				{
					return cards[j];
				}
			}
		}
		return null;
	}

	window.findCard = function(arr, hand, grave, like)
	{
		if(Eyal_unlockCardMechanics)
		{
			var no_question = true;
			var cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell, linkLeft, linkRight, player1.skillCard, player2.skillCard];
			if (hand) {
				for (var k = 0; k < player1.hand_arr.length; k++) {
					cards.push(player1.hand_arr[k]);
				}
			}
			if (grave) {
				for (k = 0; k < player1.grave_arr.length; k++) {
					cards.push(player1.grave_arr[k]);
				}
			}
			for (var i = 0; i < arr.length;i ++) {
				if(arr[i] != "Question")
					continue;
				
				no_question = false;
				
				for (var j = 0; j < cards.length; j++) {
					if (cards[j]) {
						if (cards[j].data("face_down")) { // Question
							continue;
						}
						//if (cards[j].data("cardfront").data("treated_as") == arr[i] && !cards[j].data("face_down")) {
						if (cards[j].data("cardfront").data("treated_as") == arr[i] || like && cards[j].data("cardfront").data("treated_as") && cards[j].data("cardfront").data("treated_as").indexOf(arr[i]) >= 0) {
							return true;
						}
					}
				}
			}
			return no_question;
		}
		// Original function content.
		else
		{
			var cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell, linkLeft, linkRight, player1.skillCard, player2.skillCard];
			if (hand) {
				for (var k = 0; k < player1.hand_arr.length; k++) {
					cards.push(player1.hand_arr[k]);
				}
			}
			if (grave) {
				for (k = 0; k < player1.grave_arr.length; k++) {
					cards.push(player1.grave_arr[k]);
				}
			}
			for (var i = 0; i < arr.length;i ++) {
				for (var j = 0; j < cards.length; j++) {
					if (cards[j]) {
						if (cards[j].data("face_down")) { // Question
							continue;
						}
						//if (cards[j].data("cardfront").data("treated_as") == arr[i] && !cards[j].data("face_down")) {
						if (cards[j].data("cardfront").data("treated_as") == arr[i] || like && cards[j].data("cardfront").data("treated_as") && cards[j].data("cardfront").data("treated_as").indexOf(arr[i]) >= 0) {
							return true;
						}
					}
				}
			}
			return false;
		}
	}
	
	
	window.Send = function(data)
	{
		if(data.action == "Duel" && data.play.indexOf("Stop viewing") >= 0)
		{
			if(data.viewing.indexOf("Secret ") >= 0 || data.viewing == "Xyz materials")
				return;
		}
		else if(data.action == "Duel" && data.play == "Duel message")
		{
			let Eyal_message = data.message;
			
			if(actionsQueue.length > 0)
			{
				if(Eyal_messageStartsWith(Eyal_message, "/"))
				{
					setTimeout(function()
					{ 
						$("#duel .cin_txt").val(Eyal_message);
					}, 50);
					
					return;
				}
				else 
				{
					action = JSON.stringify(data, function(k,v){
						if (v == null) {
							v = undefined;
						}
						return v;
					});
					resend();
					
					return;
				}
			}
			
			if(Eyal_messageStartsWith(Eyal_message, "/card") || Eyal_messageStartsWith(Eyal_message, "/find"))
			{
				if(Eyal_messageStartsWith(Eyal_message, "/card"))
					Eyal_message = Eyal_message.replace(/\/card/i, "")
				
				else if(Eyal_messageStartsWith(Eyal_message, "/find"))
					Eyal_message = Eyal_message.replace(/\/find/i, "")
				
				if(Eyal_message.indexOf(" ") == 0)
					Eyal_message = Eyal_message.replace(" ", "")
				
				let str = Eyal_message.toUpperCase();
				
				str = str.trim();
				
				if(str.length == 0)
					return;
				
				let cardNamesFound = [];
				let cardAbbrevFound = [];
				
				
				for(let abc=0;abc < Cards.length;abc++)
				{
					if(Cards[abc].hidden)
						continue;
					
					let cardName = Cards[abc].name.toUpperCase();
					
					if(cardName.search(str) == -1)
					{
						// Try here to search by abbreviation, like MST --> Mystical Space Typhoon.
					
						let abbrev = cardName.replaceAll("'", "").match(/[\p{Alpha}\p{Nd}]+/gu)
						.reduce((previous, next) => previous + ((+next === 0 || parseInt(next)) ? parseInt(next): next[0] || ''), '')
						.toUpperCase()
						
						if(abbrev.search(str) == -1)
							continue;
						
						if(cardAbbrevFound.indexOf(Cards[abc].name) == -1)
							cardAbbrevFound.push(Cards[abc].name);
						
						continue;
					}
					
					else if(cardNamesFound.indexOf(Cards[abc].name) != -1)
						continue;
					
					cardNamesFound.push(Cards[abc].name);
				}
				
				if(cardNamesFound.length > 15)
					Eyal_addColoredLine("FF0000", "Error: Found over 15 cards with that name.");
				
				else
				{
					Eyal_addColoredLine("00CCCC", `List of cards that contain "${str}":`);
					
					for(let abc=0;abc < cardNamesFound.length;abc++)
					{
						let card = Eyal_lookupCard(cardNamesFound[abc]);
						
						card.data("cardfront", card)
						Eyal_addCardHoverLine('<font color="0000FF">' + quote(cardNamesFound[abc]) + "</font>", card);
					}
					
					for(let abc=0;abc < cardAbbrevFound.length;abc++)
					{
						let card = Eyal_lookupCard(cardAbbrevFound[abc]);
						
						card.data("cardfront", card)
						Eyal_addCardHoverLine('<font color="FF0000">' + quote(cardAbbrevFound[abc]) + "</font>", card);
					}
				}
				
				return;
			}
			else if(Eyal_messageStartsWith(Eyal_message, "/help3") || Eyal_messageStartsWith(Eyal_message, "/cmds3"))
			{
				addLine("/rps ==> Randomly creates rock paper scissors selections.");
				addLine("/ld ==> Silently shows every Light and Dark in your GY.");
				addLine("/card Skill ==> Find's a card named Skill, or abbreviated Skill");
				addLine("/calc (10 + 10) * 20 ==> Silently calculates, prints result.");
				addLine("/calc2 (10 + 10) * 20 ==> calculates, forces you to say formula = result.");
				addLine("/unext ==> Depracated. Right click banish pile to unexcavate.");
				addLine("/unexb ==> Depracated. Right click banish pile to unexcavate.");
				addLine("/unexg ==> Depracated. Right click banish pile to unexcavate.");
				addLine("/snipe ==> Deprecated. In order to snipe face-down cards, right click them");
				addLine("/gy ==> Deprecated. In order to silently show a GY, right click it.");
				return;
			}
			else if(Eyal_messageStartsWith(Eyal_message, "/help2") || Eyal_messageStartsWith(Eyal_message, "/cmds2"))
			{
				Eyal_addColoredLine("037F51", "DB Unlock Command List:");
				
				addLine("/ex5 ==> Excavate 5 cards");
				addLine("/excavate5 ==> Excavate 5 cards");
				addLine("/search Skill D ==> Add a card that has 'Skill D' in name from your deck");
				addLine("/dig Eldlixir*Golden Land ==> View deck for only cards with 'Eldlixir' or 'Golden Land' in name.");
				addLine("/pend <card name> ==> Conducts a pendulum mechanic with a given card in deck");
				addLine("/send Skill D ==> Mill a card that has 'Skill D' in name from your deck");
				addLine("/st Skill D ==> Places a card in S&T zone that has 'Skill D' in name from your deck");
				addLine("/ban Skill D ==> Banish a card that has 'Skill D' in name from your deck");
				addLine("/banfd Skill D ==> Banish a card face-down that has 'Skill D' in name from your deck");
				addLine("/atk Eldlich ==> SS in ATK a card that has 'Eldlich' in name from your deck");
				addLine("/def Eldlich ==> SS in DEF a card that has 'Eldlich' in name from your deck");
				
				Eyal_message = Eyal_message.substring(0, 5);
				
				Eyal_addColoredLine("037F51", "For More Dueling Book Unlock commands, use " + Eyal_message + "3");
				
				return;
			}
			// So it won't double down on both /help and /help2.
			else if(Eyal_messageStartsWith(Eyal_message, "/help") || Eyal_messageStartsWith(Eyal_message, "/cmds"))
			{
				Eyal_addColoredLine("037F51", "Command List:");
				
				addLine("/drawx ==> Draw x cards");
				addLine("/millx ==> Mill x cards of your top deck");
				addLine("/banishx ==> Banish x cards of your top deck");
				addLine("/banishfdx ==> Banish x cards of your top deck, face-down");
				addLine("/discardhand ==> Discards your hand");
				addLine("/banishhand ==> Banishes your hand");
				addLine("/addx ==> Gain x LP");
				addLine("/subx ==> Lose x LP.");
				addLine("/pause ==> Pauses or Unpauses the game.");
				addLine("/unpause ==> Identical to /pause in every way.");
				Eyal_addColoredLine("037F51", "For Dueling Book Unlock commands, use " + data.message + "2");

				return;
			}
			else if(Eyal_messageStartsWith(Eyal_message, "/dig"))
			{
				let msg = data.message;
				
				msg = msg.substring(4);
						
				if(msg.indexOf(' ') == 0)
					msg = msg.replace(" ", "");
					
				if(msg.length == 0)
				{
					addLine("Usage: /dig <cardName>")
					addLine("Usage 2: /dig <cardName*cardName2>")
				}
				else if(msg.length <= 1)
				{
					addLine("Error: Use 2+ characters of the name")
				}
				else
				{
					Eyal_DigString = msg;
					
					cardMenuClicked(new Card(), "View deck");
				}
				
				return;
			}
			else if(Eyal_messageStartsWith(Eyal_message, "/ex"))
			{
				Eyal_message = Eyal_message.replace(/\/ex/i, "")
				
				if(Eyal_messageStartsWith(Eyal_message, "cavate"))
					Eyal_message = Eyal_message.replace(/cavate/i, "")
				
				if(isNaN(Eyal_message))
					return;
				
				let num = parseInt(Eyal_message);
				
				if(num > 9)
					return;
				
				if(num > player1.main_arr.length)
					return;
				
				for(let abc=0;abc < num;abc++)
				{
					let Eyal_card = player1.main_arr[abc];
					cardMenuClicked(Eyal_card, "Banish");

					window.Eyal_waitingForAction = true;
					window.Eyal_excavatedArr.push(Eyal_card);
				}
				
				return;
			}
			else if(Eyal_messageStartsWith(Eyal_message, "/unext") || Eyal_messageStartsWith(Eyal_message, "/unexb") || Eyal_messageStartsWith(Eyal_message, "/unexg"))
			{
				for(let abc=0;abc < window.Eyal_excavatedArr.length;abc++)
				{
					if(window.Eyal_excavatedArr[abc].data("face_down") || isIn(window.Eyal_excavatedArr[abc], player1.banished_arr) < 0)
					{

						window.Eyal_excavatedArr.splice(abc, 1);
						abc--;
					}
				}
				for(let abc=0;abc < window.Eyal_excavatedArr.length;abc++)
				{
					if (Eyal_messageStartsWith(Eyal_message, "/unext"))
						cardMenuClicked(window.Eyal_excavatedArr[abc], "To T Deck");

					else if (Eyal_messageStartsWith(Eyal_message, "/unexb"))
						cardMenuClicked(window.Eyal_excavatedArr[abc], "To B Deck");
					
					else if(Eyal_messageStartsWith(Eyal_message, "/unexg"))
						cardMenuClicked(window.Eyal_excavatedArr[abc], "To GY");	
				}
				
				window.Eyal_excavatedArr.length = 0;
				
				return;
			}
			else if(Eyal_messageStartsWith(Eyal_message, "/rps"))
			{
				let arr = ["Rock", "Paper", "Scissors"];
				
				addLine("Only you can see the random results:");
				
				for(let abc=1;abc <= 5;abc++)
				{
					Eyal_addColoredLine("FF0000", arr[Eyal_getRandomInt(0, arr.length-1)]);
				}
				
				return;
			}
			else if(Eyal_messageStartsWith(Eyal_message, "/gy"))
			{
				let count = 0;
				
				for(let abc=0;abc < player1.opponent.grave_arr.length;abc++)
				{
					count++;
				}
				
				for(let abc=0;abc < player1.grave_arr.length;abc++)
				{
					count++;
				}
				
				if(count == 0)
				{
					addLine("Graveyards are empty.");
					return;
				}
				
				addLine("==============================")
				
				for(let abc=0;abc < player1.opponent.grave_arr.length;abc++)
				{
					let cardName = player1.opponent.grave_arr[abc].data("cardfront").data("name");
					
					if(cardName.length > 27)
						cardName = cardName.slice(0, 27);
					
					Eyal_addCardHoverLine('<font color="0000FF">' + quote(cardName) + "</font>", player1.opponent.grave_arr[abc]);
				}
				
				for(let abc=0;abc < player1.grave_arr.length;abc++)
				{
					let cardName = player1.grave_arr[abc].data("cardfront").data("name");
					
					if(cardName.length > 27)
						cardName = cardName.slice(0, 27);
					
					Eyal_addCardHoverLine('<font color="FF0000">' + quote(cardName) + "</font>", player1.grave_arr[abc]); 
				}
				
				addLine("==============================")
				return;
			}
			else if(Eyal_messageStartsWith(Eyal_message, "/ld") || Eyal_messageStartsWith(Eyal_message, "/light") || Eyal_messageStartsWith(Eyal_message, "/dark"))
			{
				let count = 0;
				
				for(let abc=0;abc < player1.grave_arr.length;abc++)
				{
					if(player1.grave_arr[abc].data("cardfront").data("attribute") == "DARK")
					{
						count++;
					}
					else if(player1.grave_arr[abc].data("cardfront").data("attribute") == "LIGHT")
					{
						count++;
					}
				}
				
				if(count == 0)
				{
					addLine("Your GY has no light and dark monsters.");
					return;
				}
				
				addLine("==============================")
				
				for(let abc=0;abc < player1.grave_arr.length;abc++)
				{
					let cardName = player1.grave_arr[abc].data("cardfront").data("name");
					
					if(cardName.length > 27)
						cardName = cardName.slice(0, 27);
					
					if(player1.grave_arr[abc].data("cardfront").data("attribute") == "DARK")
					{
						Eyal_addCardHoverLine('<font color="68478D">' + quote(cardName) + "</font>", player1.grave_arr[abc]);
					}
					else if(player1.grave_arr[abc].data("cardfront").data("attribute") == "LIGHT")
					{
						Eyal_addCardHoverLine('<font color="FFC200">' + quote(cardName) + "</font>", player1.grave_arr[abc]);
					}
				}
				addLine("==============================")
				return;
			}
			else if(Eyal_messageStartsWith(Eyal_message, "/calc2"))
			{
				Eyal_message = Eyal_message.replace(/\/calc2/i, "");
			
				let formula = Eyal_message;
				
				// Remove all spaces, not necessary...
				Eyal_message = Eyal_message.replace(/ /gi, "");
				
				if(Eyal_message.length == 0)
					return;
				
				let result = Eyal_ExprEval(Eyal_message);
				
				let messageToSend = `${formula} = ${result}`;
				
				Send({"action":"Duel", "play":"Duel message", "message":messageToSend, "html":~~0});
				
				return;
			}		
			else if(Eyal_messageStartsWith(Eyal_message, "/calc"))
			{
				Eyal_message = Eyal_message.replace(/\/calc/i, "");
			
				let formula = Eyal_message;
				
				// Remove all spaces, not necessary...
				Eyal_message = Eyal_message.replace(/ /gi, "");
				
				if(Eyal_message.length == 0)
					return;
				
				let result = Eyal_ExprEval(Eyal_message);
				
				let messageToSend = `${formula} = ${result}`;
				
				Eyal_addColoredLine("037F51", messageToSend);
				
				return;
			}
			
			if(Eyal_silentCommands)
			{
				let fakeData = {};
				fakeData.fake = true;
				fakeData.username = username;
				fakeData.play = "Duel message";
				fakeData.message = Eyal_message; 
				
				// fake duelResponse returns true if a command was consumed.
				if(duelResponse(fakeData))
				{
					// Return immediately, don't send the action over to DB.
					return;
				}
			}
		}
		else if(data.action == "Duel" && data.play == "Quit duel")
		{
			Eyal_music.pause();
			
			window.Eyal_preErratas = false;
			// Don't return, send the data to DB.
		}			

		action = JSON.stringify(data, function(k,v){
			if (v == null) {
				v = undefined;
			}
			return v;
		});
		resend();
	}

	window.Eyal_cardMenuE = function()
	{	
		if(!Eyal_unlockCardMechanics)
		{
			let boundFunc = cardMenuE.bind(this);
			boundFunc();
			return;
		}
		if (!Duelist()) {
			menu_reason = "You are not a duelist";
			return;
		}
		var card = $(this).parent();
		if (automatic) {
			showEquips(card);
		}
		if (card.data("controller") != player1) {
			if (card.data("controller") == player3) {
				updateController(player1, card);
				updateOwner(player1, card);
			}
		}
		if (card == menu_card) {
			menu_reason = "card is menu_card";
			return;
		}
		if (!viewing) {
			if (!isPlayer1(card.data("controller").username)) {
				menu_reason = "You don't control this card";
				return;
			}
			if (isIn(card, player1.main_arr) >= 0) {
				menu_reason = "Card is in the Deck";
				return;
			}
			if (isIn(card, player1.extra_arr) >= 0) {
				menu_reason = "Card is in the Extra Deck";
				return;
			}
		}
		
		if (automatic) {
			cardMenuE2(card);
			return;
		}

		let originalCard = card;

		if (card.data("fake_card") && viewing == "Xyz materials")
		{
			if (typeof Eyal_lastXyzCard === "undefined")
				return;

			let substitute = Eyal_findSubstitute(card, Eyal_lastXyzCard.data("xyz_arr"));

			if (substitute != null) {
				originalCard = card;
				card = substitute;
			}
			else
			{
				return;	
			}
		}
		
		var menu = [];
		if (card.data("controller") != player1) {
			if (isIn(card, player1.opponent.grave_arr) >= 0 || isIn(card, player1.opponent.banished_arr) >= 0) {
				if (card.data("cardfront").data("card_type") == "Monster" && !card.data("face_down")) {
					if (hasAvailableMonsterZones(player1)) {
						menu.push({label:"SS ATK",data:"SS ATK"});

						menu.push({label:"SS DEF",data:"SS DEF"});
					}
				}
				
				if (isIn(card, player1.opponent.grave_arr) >= 0)
				{
					menu.push({label:"Banish",data:"Banish"});
					
					// Eyal282 here
					menu.push({ label: "Banish FD", data: "Banish FD" });
				}
				else if (!card.data("face_down")) {
					menu.push({label:"To Grave",data:"To GY"});
					menu.push({label:"Banish FD", data:"Eyal Banish FD"});
				}
				menu.push({label:"Target",data:"Target"});
				
				
				if (findCard(["Toadally Awesome"], true, true, true)) {
					if (card.data("cardfront").data("card_type") != "Monster") {
						if (hasAvailableSTZones(player1) && card.data("cardfront").data("type") != "Field") {
							menu.push({label:"To S/T",data:"To ST"});
						}
						else if (player1.fieldSpell == null	&& card.data("cardfront").data("type") == "Field") {
							//menu.push({label:"Set",data:"Set Field Spell"});
							menu.push({label:"Activate",data:"Activate Field Spell"});
						}
					}
				}
				
				if (hasXyzMonster(player1)) {
					menu.push({label:"Attach",data:"Attach"});
				}
			}
			if ((viewing == "Opponent's Deck (partial)" || viewing == "Opponent's Deck (Top 3 Cards)" || viewing == "Opponent's Deck (Top 5 Cards)") && isIn(card, player1.opponent.main_arr) >= 0) {
				if (findCard(["Destiny HERO - Dominance", "Flower Cardian Peony with Butterfly", "Goddess Skuld's Oracle", "Millennium Necklace", "SPYRAL GEAR - Drone"])) {
					menu.push({label:"To Top of Deck",data:"To T Deck 2"});
				}
				if (findCard(["Flower Cardian Peony with Butterfly"])) { // eh
					menu.push({label:"To Bottom of Deck",data:"To B Deck 2"});
				}
				if (findCard(["Fairy Tail - Rochka"])) {
					menu.push({label:"To Opponent's Hand",data:"To hand 2"});
				}
			}
		}
		else {
			
			// for attacking during opponent's battle phase.
			if (currentPhase == "BP" && (turn_player.username == username || isEitherTurnAttacker(card)) && !card.data("face_down") && isST(player1, card) && isPendulumAttacker(card)) {
					if (countMonsters(player2) > 0) {
						menu.push({label:"Attack",data:"Attack"});
					}
					menu.push({label:"Attack Directly",data:"Attack directly"});
			}
			else if (currentPhase == "BP" && (turn_player.username == username || isEitherTurnAttacker(card)) && !card.data("face_down") && isMonster(player1, card)) {
				if (card.data("inATK")) {
					if (countMonsters(player2) > 0) {
						menu.push({label:"Attack",data:"Attack"});
					}
					menu.push({label:"Attack Directly",data:"Attack directly"});
				}
				else {
					switch (card.data("cardfront").data("name")) {
						default:
							if (card.data("cardfront").data("effect").search(/This card can attack while in face-up Defense Position/i) == -1) {
								break;
							}
						case "Elemental HERO Rampart Blaster":
						case "Invoked Cocytus":
						case "Superheavy Samurai Beast Kyubi":
						case "Superheavy Samurai Big Benkei":
						case "Superheavy Samurai General Jade":
						case "Superheavy Samurai Ninja Sarutobi":
						case "Superheavy Samurai Ogre Shutendoji":
						case "Superheavy Samurai Stealth Ninja":
						case "Superheavy Samurai Steam Train King":
						case "Superheavy Samurai Swordmaster Musashi":
						case "Superheavy Samurai Wagon":
						case "Superheavy Samurai Warlord Susanowo":
						case "Total Defense Shogun":
							if (countMonsters(player2) > 0) {
								menu.push({label:"Attack",data:"Attack"});
							}
							menu.push({label:"Attack Directly",data:"Attack directly"});
					}
				}
			}
			if (isIn(card, player1.hand_arr) >= 0) {
				if (hasAvailableSTZones(player1) && card.data("cardfront").data("effect").search(/You can Set this card from your hand to your Spell/i) != -1) {
					menu.push({label:"Set (To S/T)",data:"Set ST"});
				}
				if (card.data("cardfront").data("pendulum")) {
					if (links && (!player1.s1 || !player1.s5)) {
						menu.push({label:"Activate",data:player1.s1 && !player1.s5 ? "Activate Pendulum Right" : (!player1.s1 && player1.s5 ? "Activate Pendulum Left" : "Activate Pendulum")});
					}
					else if (!links) {
						if (!player1.pendulumLeft) {
							menu.push({label:"Activate Left",data:"Activate Pendulum Left"});
						}
						if (!player1.pendulumRight) {
							menu.push({label:"Activate Right",data:"Activate Pendulum Right"});
						}
					}
				}
				if (card.data("cardfront").data("type") != "Field" && card.data("cardfront").data("card_type") != "Monster" && hasAvailableSTZones(player1)) {
					//if (card.data("cardfront").data("card_type") == "Spell" || (card.data("cardfront").data("name") == "Harpie's Feather Storm" && findCard(["Harpie Lady", "Harpie Queen", "Harpie Channeler", "Harpie Dancer"])) || card.data("cardfront").data("card_type") == "Trap" && card.data("cardfront").data("name").indexOf("Magical Musket") == 0 && findCard(["Magical Musket Mastermind Zakiel", "Magical Musketeer Calamity", "Magical Musketeer Caspar", "Magical Musketeer Doc", "Magical Musketeer Kidbrave", "Magical Musketeer Starfire", "Magical Musketeer Wild"])) {
					if (card.data("cardfront").data("card_type") == "Spell") {
						menu.push({label:"Activate",data:"Activate ST"});
					}
					menu.push({label:"Set",data:"Set ST"});
				}
				if (card.data("cardfront").data("type") == "Field" && !player1.fieldSpell) {
					menu.push({label:"Activate",data:"Activate Field Spell"});
					menu.push({label:"Set",data:"Set Field Spell"});
				}
				if (hasAvailableMonsterZones(player1)) {
					if(Eyal_IsEaterOfMillions(card)) {
						if(countFaceDownExtraDeckCards(player1) >= 5)
						{
							menu.push({label:"Banish first 5 ED",data:"Banish first 5 ED FD"});
						}
					}
					// Eyal282, we use else if to prevent normal summoning Eater of Millions.
					else if (card.data("cardfront").data("card_type") == "Monster") {
						menu.push({label:"Normal Summon",data:"Normal Summon"});
						menu.push({label:"Set",data:"Set monster"});
					}
					else if (findCard(["Magical Hats"])) {
						menu.push({label:"Set to Monster Zone",data:"Set monster"});
					}
					
				}
				
				if(card.data("cardfront").data("name").search(/The Forbidden One/i) != -1)
				{
					let slots = [];
					for(let abc=0;abc < 5;abc++)
					{
						slots[abc] = false;
					}
					
					for(let abc=0;abc < player1.hand_arr.length;abc++)
					{
						if(player1.hand_arr[abc].data("cardfront").data("name") == "Exodia the Forbidden One")
							slots[0] = true;
						
						if(player1.hand_arr[abc].data("cardfront").data("name") == "Right Arm of the Forbidden One")
							slots[1] = true;
						
						if(player1.hand_arr[abc].data("cardfront").data("name") == "Left Arm of the Forbidden One")
							slots[2] = true;
						
						if(player1.hand_arr[abc].data("cardfront").data("name") == "Right Leg of the Forbidden One")
							slots[3] = true;
						
						if(player1.hand_arr[abc].data("cardfront").data("name") == "Left Leg of the Forbidden One")
							slots[4] = true;
						
						
					}
					
					if(slots.indexOf(false) == -1)
					{
						menu.push({label:"Declare Victory",data:"Eyal Declare Exodia"});
					}
				}
			}
			// Eyal282 here, for Magical Hats.
			if (isIn(card, player1.banished_arr) >= 0 && hasAvailableMonsterZones(player1) && findCard(["Magical Hats"]) && card.data("cardfront").data("card_type") != "Monster")
			{
				menu.push({label:"Set to Monster Zone",data:"Set monster"});
			}
			if (card.data("cardfront").data("monster_color") == "Xyz" && isIn(card, player1.extra_arr) >= 0 && countOverlayOptions(player1) >= 1) {
				menu.push({label:"OL ATK",data:"OL ATK"});
				menu.push({label:"OL DEF",data:"OL DEF"});
			}
			if ((hasAvailableMonsterZones(player1) || links && (!linkLeft || !linkRight) && isIn(card, player1.extra_arr) >= 0) && card.data("cardfront").data("card_type") == "Monster" && !card.data("isXyzMaterial") && !isMonster(player1, card) && !isST(player1, card)) {
				menu.push({label:"S. Summon ATK",data:"SS ATK"});
				menu.push({label:"S. Summon DEF",data:"SS DEF"});
				
				
				if(Eyal_IsEaterOfMillions(card) && (isIn(card, player1.hand_arr) >= 0 || isIn(card, player1.extra_arr) >= 0))
				{
					if(countFaceDownExtraDeckCards(player1) >= 5)
					{
						menu.push({label:"Banish entire ED",data:"Banish entire ED FD"});
					}
				}
				else if(isIn(card, player1.hand_arr) >= 0 && card.data("cardfront").data("name") == "Mathmech Circular")
				{
					if (player1.main_arr.length >= 1)
					{
						menu.push({label:"Mill Sigma",data:"Eyal Mill Sigma"});
					}
				}
				// Because setting a main deck monster already exists
				if(isIn(card, player1.extra_arr) >= 0)
					menu.push({label:"Set",data:"Set monster"});
			}
			else if (!card.data("face_down") && hasAvailableMonsterZones(player1) && !card.data("isXyzMaterial") && card.data("cardfront").data("effect").search(/Special Summon this card/i) != -1 && !isMonster(player1, card))
			{
				menu.push({ label: "S. Summon ATK", data: "SS ATK" });
				menu.push({ label: "S. Summon DEF", data: "SS DEF" });
            }
			if (isIn(card, player1.grave_arr) >= 0/* && hasAvailableMonsterZones(player1)*/) {
				if (card.data("cardfront").data("name") == "Invocation")
				{
					menu.push({ label: "Resolve GY Effect", data: "Eyal Invocation GY" });
				}
				/*
				switch (card.data("cardfront").data("name")) {
					case "First-Aid Squad":
					case "Paleozoic Olenoides":
					case "Paleozoic Hallucigenia":
					case "Paleozoic Canadia":
					case "Paleozoic Pikaia":
					case "Paleozoic Eldonia":
					case "Paleozoic Dinomischus":
					case "Paleozoic Marrella":
					case "Paleozoic Leanchoilia":
					case "The Phantom Knights of Dark Gauntlets":
					case "The Phantom Knights of Shadow Veil":
					case "The Prime Monarch":
						menu.push({label:"SS ATK",data:"SS ATK"});
						menu.push({label:"SS DEF",data:"SS DEF"});
						break;
				}
				*/
			}
			if (card.data("cardfront").data("monster_color") == "Token") {
				menu.push({label:"Remove",data:"Remove Token"});
				if (isMonster(player1, card))
				{
					if (card.data("inDEF")) {
						menu.push({label:"To ATK",data:"To ATK"});
					}
					else
					{
						menu.push({label:"To DEF",data:"To DEF"});
					}
				}
				menu.push({label:"Target",data:"Target"});
				menu.push({label:"Move",data:"Move"});
			}
			else {
				if (isST(player1, card) && card.data("face_down")) {
					menu.push({label:"Activate",data:"Activate ST"});
				}
				if (player1.fieldSpell && card[0] == player1.fieldSpell[0] && card.data("face_down")) {
					menu.push({label:"Activate",data:"Activate Field Spell"});
				}
				if (isIn(card, player1.hand_arr) < 0 && (!isExtraDeckCard(card) && isIn(card, player1.extra_arr) < 0))
				{
					menu.push({label:"To Hand",data:"To hand"});
				}
				if (isIn(card, player1.main_arr) < 0 && (!isExtraDeckCard(card) && isIn(card, player1.extra_arr) < 0))
				{
					menu.push({ label: "To Top of Deck", data: "To T Deck" });

					if (isIn(card, player1.grave_arr) < 0 && isIn(card, player1.banished_arr) < 0)
					{
						menu.push({ label: "To Main Deck FU", data: "To T Deck FU" });
					}
				}
				if (isIn(card, player1.main_arr) >= 0) {
					//if (!player1.fieldSpell && card.data("cardfront").data("type") == "Field" && findCard(["Ancient Fairy Dragon", "Demise of the Land", "Dream Mirror Hypnagogia", "Galatea, the Orcust Automaton", "Ghostrick Renovation", "Last Resort", "Metaverse", "Pop-Up", "Triamid Dancer", "Triamid Hunter", "Triamid Master"])) {
					if (!player1.fieldSpell && card.data("cardfront").data("type") == "Field") {
						//menu.push({label:"Activate ",data:"Activate Field Spell"});
						menu.push({label:"Activate",data:"Activate Field Spell"});
					}
				}
				if (isIn(card, player1.grave_arr) < 0 && !card.data("isXyzMaterial")) {
					menu.push({label:"To Graveyard",data:"To GY"});
				}
				if (!card.data("face_down")) {
					//if (isMonster(player1, card) || isST(player1, card) || player1.fieldSpell && card[0] == player1.fieldSpell[0] || player1.pendulumLeft && card[0] == player1.pendulumLeft[0] || player1.pendulumRight && card[0] == player1.pendulumRight[0]) {
					if (isMonster(player1, card) || isST(player1, card) || player1.fieldSpell && card[0] == player1.fieldSpell[0] || player1.pendulumLeft && card[0] == player1.pendulumLeft[0] || player1.pendulumRight && card[0] == player1.pendulumRight[0] || isIn(card, player1.grave_arr) >= 0 || isIn(card, player1.banished_arr) >= 0) {
						menu.push({label:"Declare",data:"Declare"});
					}
				}
				if (!links && card.data("cardfront").data("pendulum") && isIn(card, player1.hand_arr) < 0) {
					if (!player1.pendulumLeft) {
						menu.push({label:"Activate Left",data:"Activate Pendulum Left"});
					}
					if (!player1.pendulumRight) {
						menu.push({label:"Activate Right",data:"Activate Pendulum Right"});
					}
				}
				if (isMonster(player1, card)) {
					if (card.data("inDEF")) {
						if (card.data("face_down")) {
							menu.push({label:"Flip Summon",data:"Flip Summon"});
							menu.push({label:"Flip",data:"Flip"});
						}
						else {
							menu.push({label:"To ATK",data:"To ATK"});
						}
					}

					menu.push({label:"To DEF",data:"To DEF"});

					if (!card.data("face_down")) {
						menu.push({label:"Set",data:"Set monster"});
					}
				}
				if (isST(player1, card) && !card.data("face_down")) {
					menu.push({label:"Set",data:"Set ST"});
				}
				if (player1.fieldSpell && card[0] == player1.fieldSpell[0] && !card.data("face_down")) {
					menu.push({label:"Set",data:"Set Field Spell"});
				}
				// Eyal282 commented these 3 lines out:
				/*
				if (isIn(card, player1.hand_arr) < 0 && isIn(card, player1.main_arr) < 0 && !isExtraDeckCard(card) && card.data("cardfront").data("monster_color") != "Token" && !card.data("isXyzMaterial")) {
					menu.push({label:"To Hand",data:"To hand"});
					
				}
				*/
				//if (card.data("isXyzMaterial")) {
				//	menu.push({label:"Detach",data:"Detach"});
				//}
				if (isIn(card, player1.banished_arr) < 0) {
					menu.push({label:"Banish",data:"Banish"});
					if (findCard([
						"Black Luster Soldier - Envoy of the Evening Twilight",
						"Blue Duston",
						"Chaos Scepter Blast",
						"Eater of Millions",
						"Elemental HERO Nebula Neos",
						"Evening Twilight Knight",
						"Evenly Matched",
						"Banquet of Millions",
						"Gizmek Orochi, the Serpentron Sky Slasher",
						"Lightforce Sword",
						"Necro Fusion",
						"Network Trap Hole",
						"Number 89: Diablosis the Mind Hacker",
						"PSY-Frame Overload",
						"Small World",
						"Super Koi Koi",
						"Transmission Gear",
						"Treasure Panda",
						"Wind-Up Zenmaintenance",
						"Xyz Override"
					//], true) || isIn(card, player1.main_arr) >= 0 || card.data("face_down")) {
					], true) || isIn(card, player1.main_arr) >= 0 || isIn(card, player1.extra_arr) >= 0 || card.data("face_down")) {
						menu.push({label:"Banish FD",data:"Banish FD"});
					}
				}
				if (player1.opponent == null) {
					player1.opponent = player2; // quick fix
				}
				if (isMonster(player1, card) && hasAvailableMonsterZones(player1.opponent)) {
					//menu.push({label:"Change Control",data:"Change control"});
				}
				if (isExtraDeckCard(card) && isIn(card, player1.extra_arr) < 0) {
					menu.push({label:"To Extra Deck",data:"To ED"});
				}
				//if (card.data("cardfront").data("pendulum") && isIn(card, player1.extra_arr) < 0 && (isMonster(player1, card) || isST(player1, card) || card == player1.pendulumRight || card == player1.pendulumLeft)) {
					
					// Eyal282 here, prevented extra deck from going to extra deck
					
				if(isIn(card, player1.extra_arr) < 0)
				{
					if (card.data("cardfront").data("pendulum") && isIn(card, player1.main_arr) < 0 && isIn(card, player1.hand_arr) < 0 && isIn(card, player1.extra_arr) < 0) { // i think you should be able to return it from the gy to the extra deck // 1-15-23 added extra_arr to list
						menu.push({label:"To Extra Deck FU",data:"To ED FU"});
					}
					// Eyal282 here, DB broke pendulum sneaking.
					/*else if(isPendulumSneaker(card))
					{
						menu.push({label:"To Extra Deck FU",data:"Eyal To ED FU"});
					}*/
				}
				if (!isExtraDeckCard(card) && isIn(card, player1.main_arr) < 0 && !card.data("isXyzMaterial")) {
					

					//if (findEffect("bottom", true, true, true) && isIn(card, player1.extra_arr) < 0 || findCard(["Small World"])) {
					//if (findEffect("bottom", true, true, true) && isIn(card, player1.extra_arr) < 0) {
						
					
					if (allowToBottom || findEffect("bottom") || Eyal_findCardReal(["Tearlament"], true, true, true) && isIn(card, player1.extra_arr) < 0)
					{
						menu.push({label:"To Bottom of Deck",data:"To B Deck"});
					}
				}
				
				// Eyal282 here, nobody will ever use this...
				/*if (isIn(card, player1.main_arr) >= 0 && findCard(["Upside Down"])) {
					menu.push({label:"To Bottom of Deck",data:"Upside Down effect 2"});
				}*/
				
				
				/*if (card.data("cardfront").data("pendulum") && !card.data("face_down") && (isMonster(player1, card) || isST(player1, card))) {
					if (!links) {
						if (!player1.pendulumRight) {
							menu.push({label:"To P. Right",data:"Activate Pendulum Right"});
						}
						if (!player1.pendulumLeft) {
							menu.push({label:"To P. Left",data:"Activate Pendulum Left"});
						}
					}
					else if (!player1.s1 || !player1.s5) {
						menu.push({label:"Activate Pendulum",data:player1.s1 && !player1.s5 ? "Activate Pendulum Right" : (!player1.s1 && player1.s5 ? "Activate Pendulum Left" : "Activate Pendulum")});
					}
				}*/
				
				
				
				
				
				//if (isMonster(player1, card) || isST(player1, card) || (player1.fieldSpell && card[0] == player1.fieldSpell[0]) || (player1.pendulumRight && card[0] == player1.pendulumRight[0]) || (player1.pendulumLeft && card[0] == player1.pendulumLeft[0])) {
				if (isIn(card, player1.hand_arr) < 0 && isIn(card, player1.main_arr) < 0 && isIn(card, player1.extra_arr) < 0) {
					menu.push({label:"Target",data:"Target"});
				}
				
				
				
				if (isMonster(player1, card) || isST(player1, card) || (player1.fieldSpell && card[0] == player1.fieldSpell[0]) && !card.data("face_down")) {
					menu.push({label:"Move",data:"Move"});
				}
				if (isMonster(player1, card) && countOverlayOptions(player1) > 1 && !card.data("face_down")) {
					menu.push({label:"Overlay",data:"Overlay"});
				}
				if ((isIn(card, player1.hand_arr) >= 0 && card.data("cardfront").data("card_type") != "Spell") || isIn(card, player1.main_arr) >= 0 || isIn(card, player1.grave_arr) >= 0) {
					//if (card.data("cardfront").type != "Field" && hasAvailableSTZones(player1)) {
					if (hasAvailableSTZones(player1)) {
						menu.push({label:"To S/T",data:"To ST"});
					}
				}
				if (isIn(card, player1.hand_arr) >= 0) {
					menu.push({label:"Declare",data:"Declare"}); // we'll need to enforce a minimum of v446
				}
				if (isIn(card, player1.hand_arr) >= 0 || isIn(card, player1.extra_arr) >= 0 || isIn(card, player1.main_arr) >= 0 && findCard(["Small World"])) {
					menu.push({label:"Reveal",data:"Reveal"});
					if (card.data("face_up")) {
						menu.push({label:"Stop Revealing",data:"Stop revealing"});
					}
					else if (card.data("cardfront").data("effect").includes("becomes revealed") || card.data("cardfront").data("effect").includes("remain revealed") || findCard(["Contract with Don Thousand"])) {
						menu.push({label:"Stay Revealed",data:"Stay revealed"});
					}
				}
				// Eyal282 here, for flipping banished cards
				if (isIn(card, player1.banished_arr) >= 0) {
					if (card.data("face_down"))
					{
						menu.push({label:"Banish", data:"Eyal Banish"});
					}
					else
					{
						menu.push({label:"Banish FD", data:"Eyal Banish FD"});
					}
				}
				if (!card.data("face_down")) {
					if (isMonster(player1, card)) {
						let Eyal_excavated = Eyal_IsExcavator(card);
						
						if(Eyal_excavated > 0)
						{
							menu.push({label:"Excavate Top " + Eyal_excavated, data:"Eyal Excavate Top"});
						}
						if(Eyal_IsCardAbleToPayHalfLP(card))
						{
							menu.push({label:"Pay Half LP", data:"Eyal Pay Half LP"});
						}
						switch (card.data("cardfront").data("name")) {
							// Eyal282 here.
							case "Magical Merchant": 
								menu.push({label:"Resolve Effect",data:"Eyal Magical Merchant"});
								
								break;
								
							
							case "SPYRAL GEAR - Drone":
								if (player1.opponent.main_arr.length >= 3) {
									menu.push({label:"Look at cards",data:"Spyral event"});
								}
								break;
							case "Fairy Tail - Rochka":
								if (player1.main_arr.length >= 3) {
									menu.push({label:"Resolve Effect",data:"Show top 3 cards"});
								}
								break;
							case "Destiny HERO - Dominance":
								if (player1.opponent.main_arr.length >= 5) {
									menu.push({label:"Look at opponent cards",data:"Dominance event"});
								}
								break;
							case "Zolga the Prophet":
								if (player1.opponent.main_arr.length >= 1) {
									menu.push({label:"Look at opponent cards",data:"Zolga event"});
								}
								break;
							case "Flower Cardian Peony with Butterfly":
								if (player1.opponent.main_arr.length >= 3) {
									menu.push({label:"Look at cards",data:"Peony event"});
								}
								break;
							case "Aegaion the Sea Castrum":
								if (player1.opponent.extra_arr.length > 0) {
									menu.push({label:"Resolve Effect",data:"Random extra event"});
								}
								break;
							case "Number 78: Number Archive":
								if (player1.extra_arr.length > 0) {
									menu.push({label:"Resolve Effect",data:"Banish random ED card"});
								}
								break;
							case "Kozmo Tincan": // this card requires the remaining cards to go to the GY
							case "Noble Knight Borz": // this card requires the remaining cards to go to the GY
								if (player1.main_arr.length >= 3) {
									menu.push({label:"Resolve Effect",data:"Tincan effect"});
								}
								break;
							case "Hi-Speedroid Rubber Band Shooter": // this card requires the remaining cards to go to the GY
								if (player1.main_arr.length >= 2) {
									menu.push({label:"Resolve Effect",data:"Rubber Band effect"});
								}
								break;
							case "Crowley, the First Propheseer":
							case "Power Tool Dragon":
							case "Machina Metalcruncher":
								if (player1.main_arr.length >= 3) {
									menu.push({label:"Resolve Effect",data:"Crescent effect"});
								}
								break;
							case "Salamangreat Foxy":
								if (player1.main_arr.length >= 3) {
									menu.push({label:"Banish 3 Cards",data:"Banish top 3 cards"});
								}
								break;
							case "Time Thief Redoer":
								if (player1.opponent.main_arr.length >= 1) {
									menu.push({label:"Resolve Effect",data:"Redoer event"});
								}
								break;
							case "Necroface":
								if (player1.opponent.banished_arr.length >= 1 || player2.opponent.banished_arr.length >= 1) {
									menu.push({label:"Resolve Effect",data:"Necroface event"});
								}
								break;
						}
						if (card.data("cardfront").data("id") == 10190) {
							if (player1.extra_arr.length >= 1) {
								menu.push({label:"Banish Random Card",data:"Banish random ED card 2"});
							}
						}
					}
					if (isST(player1, card)) {
						let Eyal_excavated = Eyal_IsExcavator(card);
						
						if(Eyal_excavated > 0)
						{
							menu.push({label:"Excavate Top " + Eyal_excavated, data:"Eyal Excavate Top"});
						}
						if (card.data("cardfront").data("name") == "Pot of Desires" && player1.main_arr.length >= 12) {
							menu.push({label:"Banish 10 Cards FD",data:"Banish top 10 cards FD"});
						}
						if (card.data("cardfront").data("name") == "Pot of Extravagance" && countFaceDownExtraDeckCards(player1) >= 3) {
							menu.push({label:"Banish 3 ED Cards FD",data:"Banish 3 random ED cards FD"});
						}
						if (card.data("cardfront").data("name") == "Pot of Extravagance" && countFaceDownExtraDeckCards(player1) >= 6) {
							menu.push({label:"Banish 6 ED Cards FD",data:"Banish 6 random ED cards FD"});
						}
						// Eyal282 here
						if(card.data("cardfront").data("name") == "Pot of Prosperity") {
							if(countFaceDownExtraDeckCards(player1) >= 3)
								menu.push({label:"Banish first 3 ED",data:"Banish first 3 ED FD Prosperity"});
							
							if(countFaceDownExtraDeckCards(player1) >= 6)
								menu.push({label:"Banish first 6 ED",data:"Banish first 6 ED FD Prosperity"});
						}
						
						//if (card.data("cardfront").data("name") == "Pot of Duality" && player1.main_arr.length >= 3) {
							//menu.push({label:"Banish 3 Cards",data:"Banish top 3 cards"});
						//}
						if (card.data("cardfront").data("name") == "That Grass Looks Greener" && player1.main_arr.length > player1.opponent.main_arr.length) {
							menu.push({label:"Mill " + String(player1.main_arr.length - player1.opponent.main_arr.length),data:"Mill difference"});
						}
						if (card.data("cardfront").data("name") == "Pharaoh's Treasure") {
							menu.push({label:"To Top of Deck face-up",data:"To T Deck FU"});
						}
						if (card.data("cardfront").data("id") == 11111 && player1.main_arr.length >= 3) {
							//menu.push({label:"Resolve Effect",data:"Crescent effect"});
						}
						if (card.data("cardfront").data("name") == "Spellbook Library of the Crescent" && player1.main_arr.length >= 3) {
							menu.push({label:"Resolve Effect",data:"Crescent effect"});
						}
						if (card.data("cardfront").data("name") == "Bingo Machine, Go!!!" && player1.main_arr.length >= 3) {
							menu.push({label:"Resolve Effect",data:"Crescent effect"});
						}
						if (card.data("cardfront").data("name") == "My Friend Purrely" && player1.main_arr.length >= 3) {
							menu.push({label:"Resolve Effect",data:"Crescent effect"});
						}
						if (card.data("cardfront").data("name") == "Exchange") {
							//menu.push({label:"Resolve Effect",data:"Exchange event"});
						}
						if (card.data("cardfront").data("name") == "Goddess Skuld's Oracle" && player2.main_arr.length >= 3) {
							menu.push({label:"Look at cards",data:"Oracle event"});
						}
						if (card.data("cardfront").data("name") == "You're in Danger!" && player1.main_arr.length >= 3) {
							menu.push({label:"Resolve Effect",data:"Page-Flip effect"});
						}
						if (card.data("cardfront").data("name") == "Toon Page-Flip" && player1.main_arr.length >= 3) {
							menu.push({label:"Resolve Effect",data:"Page-Flip effect"});
						}
						if (card.data("cardfront").data("name") == "Ancient Telescope" && player2.main_arr.length >= 1) {
							menu.push({label:"Look at cards",data:"Telescope event"});
						}
						if (card.data("cardfront").data("name") == "Senri Eye") {
							menu.push({label:"Look at cards",data:"Senri event"});
						}
						if (card.data("cardfront").data("name") == "Draw of Fate") {
							menu.push({label:"Resolve Effect",data:"Fate effect"});
						}
						if (card.data("cardfront").data("name") == "Transmission Gear" && moderator >= 2) {
							//menu.push({label:"Resolve Effect",data:"Play RPS"});
						}
						if (card.data("cardfront").data("name") == "Fusion Guard") {
							menu.push({label:"Resolve Effect",data:"Banish random Fusion card"});
						}
						if (card.data("cardfront").data("name") == "Upside Down" || card.data("id") == 13393) {
							menu.push({label:"Resolve Effect",data:"Upside Down effect"});
						}
						if(card.data("cardfront").data("name") == "Magical Mallet" || card.data("cardfront").data("name") == "Reload")
						{
							menu.push({label:"Replace Hand",data:"Eyal Replace Hand"});
						}
						
						if(Eyal_IsCardAbleToPayHalfLP(card)) {
							menu.push({label:"Pay Half LP", data:"Eyal Pay Half LP"});
						}
					}
					if (isIn(card, player1.grave_arr) >= 0 || isMonster(player1, card)) {
						if (card.data("cardfront").data("name") == "Lilith, Lady of Lament") {
							if (player1.main_arr.length >= 3 && hasAvailableSTZones(player1)) {
								menu.push({label:"Resolve Effect",data:"Lilith effect"});
							}
						}
						if (card.data("cardfront").data("name") == "Super Quantal Fairy Alphan") {
							if (player1.main_arr.length >= 3 && hasAvailableSTZones(player1)) {
								menu.push({label:"Resolve Effect",data:"Alphan effect"});
							}
						}
						if (card.data("cardfront").data("name") == "Gizmek Orochi, the Serpentron Sky Slasher") {
							if (player1.main_arr.length >= 8) {
								menu.push({label:"Banish 8 Cards FD",data:"Banish top 8 cards FD"});
							}
						}
					}
					if (card.data("cardfront").data("name") == "Golden Castle of Stromberg" && player1.fieldSpell && card[0] == player1.fieldSpell[0] && player1.main_arr.length >= 10) {
						menu.push({label:"Banish 10 Cards FD",data:"Banish top 10 cards FD"});
					}
					if (card.data("cardfront").data("name") == "Malefic World" && player1.fieldSpell && card[0] == player1.fieldSpell[0] && player1.main_arr.length >= 3) {
						menu.push({label:"Resolve Effect",data:"Crescent effect"});
					}
					if (card.data("cardfront").data("name") == "Cynet Storm" && player1.fieldSpell && card[0] == player1.fieldSpell[0]) {
						menu.push({label:"Resolve Effect", data:"Cynet Storm"});
					}
					if (card.data("cardfront").data("name") == "Numeron Network" && player1.fieldSpell && card[0] == player1.fieldSpell[0]) {
						menu.push({ label: "Summon 4 Gates", data: "Eyal Numeron Network" });
					}
					if (card.data("cardfront").data("name") == "Runick Fountain" && player1.fieldSpell && card[0] == player1.fieldSpell[0]) {
						menu.push({ label: "Resolve Effect", data: "Eyal Runick Fountain" });
					}
					if (card.data("cardfront").data("name") == "Prescience" && player1.opponent.main_arr.length > 0) {
						menu.push({label:"Resolve Effect",data:"View top card 2"});
					}
				}
				if (card.data("cardfront").data("type") == "Field" && isIn(card, player1.main_arr) >= 0) {
					if (findCard(["Set Rotation"])) {
						if (player1.fieldSpell == null) {
							menu.push({label:"Set",data:"Set Field Spell"});
						}
						if (player1.opponent.fieldSpell == null) {
							menu.push({label:"Set to other side",data:"Set Field Spell 2"});
						}
					}
					if (findCard(["Dream Mirror Hypnagogia", "Valiants Vorld - Koenig Wissen", "Valiants Vorld - Shinrabansho"])) {
						if (player1.opponent.fieldSpell == null) {
							menu.push({label:"Activate to other side",data:"Activate Field Spell 2"});
						}
					}
				}
				if (card.data("cardfront").data("name") == "Small World") {
					menu.push({label:"Check Options",data:"Resolve Small World"});
				}
				
				if(Eyal_IsCardAbleToShuffleToOpponentDeck(card))
				{
					menu.push({label:"To Opponent's Deck FU",data:"To T Deck 2 FU"});
				}
				else if(isIn(card, player1.main_arr) < 0 && isIn(card, player1.extra_arr) < 0)
				{
					menu.push({label:"To Opponent's Hand",data:"To hand 2"});
				}
				
				let tokenCount = Eyal_CountTokensCardCanSummon(card);
				
				// Negative token count = summon to opponent.
				// For now I'm not implementing it.
				if(tokenCount > 1)
				{
					menu.push({label:`SS DEF ${tokenCount} Tokens`, data:`Eyal SS Many Tokens`});
				}
				
				if (card.data("isXyzMaterial")) {
					menu = [];
					menu.push({ label: "Detach", data: "Detach" });
					menu.push({label:"Banish",data:"Banish"});
					menu.push({ label: "Banish FD", data: "Banish FD" });
					menu.push({ label: "SS ATK", data: "SS ATK" });
					menu.push({ label: "SS DEF", data: "SS DEF" });
					menu.push({label:"To Front",data:"Eyal Xyz Material To Front"});
				}
				if ((viewing == "Deck (Picking 3 Cards)" || viewing == "Deck (Picking 2 Cards)" || viewing == "Deck (Picking Card)") && (isIn(card, player1.main_arr) >= 0 || isIn(card, player1.opponent.main_arr) >= 0)) {
					menu = [];
					if (player1.temp_arr.indexOf(card.data("id")) < 0) {
						menu.push({label:"Choose",data:"Choose card"});
					}
				}
				if (player1.skillCard && card[0] == player1.skillCard[0]) {
					menu = [];
					if (card.data("face_down")) {
						menu.push({label:"Activate",data:"Activate Skill"});
					}
					else {
						menu.push({label:"Set",data:"Set Skill"});
						if (card.data("cardfront").data("name") == "Millennium Necklace") {
							menu.push({label:"Look at cards",data:"Necklace event"});
						}
						if (card.data("cardfront").data("name") == "Cyberdark Style") {
							menu.push({label:"Resolve Effect",data:"Crescent effect"});
						}
					}
				}
				if (moderator >= 2 && isIn(card, player1.hand_arr) >= 0) {
					menu.push({label:"Swap",data:"Swap"});
				}
			}
			
			if (hasXyzMonster(player1))
			{
				if (isIn(card, player1.grave_arr) >= 0 || isIn(card, player1.banished_arr) >= 0)
				{
					menu.push({ label: "Attach", data: "Attach" });
				}
				else if ((isIn(card, player1.hand_arr) >= 0 || isIn(card, player1.main_arr) >= 0) && (card.data("cardfront").data("effect").search(/Attach this card/i) >= 0 || findEffect("attach 1 ")))
				{
					menu.push({ label: "Attach", data: "Eyal Attach" });
                }
			}

			if (card.data("xyz_arr").length >= 3)
			{
				menu.push({ label: "View materials", data: "Eyal View Materials" });
			}
		}
		
		showMenu(card, menu, originalCard);
	}
	
	
	window.joinDuelResponse = function(data)
	{
		var arr = $('#joinlist .cell');
		for (var i = 0; i < arr.length; i++) {
			if (arr.eq(i).data("username") == data.username) {
				console.log('returning');
				return;
			}
		}
		var cell = $(new Cell2(data.username + data.rating));
		if (data.rating.indexOf(" (Deck contains under 40 cards)") >= 0) {
			cell.find('span').html(escapeHTML(data.username) + data.rating.substring(0, data.rating.indexOf(" (Deck contains under 40 cards)")) + ' <font color="#FF0000">(Deck contains under 40 cards)</font>');
		}
		//else if (data.rating.indexOf(" (Bypassing card limits)") >= 0) {
		//	cell.find('span').html(escapeHTML(data.username) + data.rating.substring(0, data.rating.indexOf(" (Bypassing card limits)")) + ' <font color="#FF0000">(Bypassing card limits)</font>');
		//}
		else if (data.rating.indexOf(" (Unlimited)") >= 0) {
			cell.find('span').html(escapeHTML(data.username) + data.rating.substring(0, data.rating.indexOf(" (Unlimited)")) + ' <font color="#FF0000">(Unlimited)</font>');
		}
		else if (data.rating.indexOf(" (Expert)") >= 0) {
			cell.find('span').html(escapeHTML(data.username) + data.rating.substring(0, data.rating.indexOf(" (Expert)")) + ' <font color="#009900">(Expert)</font>');
		}
		cell.removeAttr("ondblclick");
		//cell.data("label", data.username + data.rating);
		cell.data("username", data.username);
		cell.click(function(){
			$('#hosting .accept_btn').disable(false);
			$('#hosting .reject_btn').disable(false);
		});
		$('#joinlist').append(cell);
		
		let Eyal_players = $('#joinlist .cell').length;
		
		let Eyal_title = (`(${Eyal_players}) Duelingbook`)
		
		Eyal_setTitle(Eyal_title);
		
		if(Eyal_players == 1)
			Eyal_notifyOfPotentialDuel();
	}
	
	window.setupHosting = function() {
		Eyal_setTitle(`Duelingbook`);
		$('#host').hide();
		$('#hosting').show();
		$('#joining').hide();
		$('#joining_pool').hide();
		disablePools();
		decklist_cb.disable(true);
		$('#ar .format_cb').disable(true);
		$('#ar .rules_cb').disable(true);
		$('#ar .type_cb').disable(true);
		$('#ar .join_btn').disable(true);
		$('#hosting .accept_btn').disable(true);
		$('#hosting .reject_btn').disable(true);
		$('#joinlist').html("");
	}
	window.Eyal_acceptUser = function() {
		var str = $('#joinlist .cell2.selected').data("username");
		if (!str) {
			return;
		}
		Send({"action":"Accept user", "username":str});
		$('#joinlist').html("");
		showDim();
	}
	
	window.Eyal_cancelDuel = function()
	{
		hosting = false;
		partner = null;
		setupHost();
		enablePools();
		removeJoinButton(username);
		Eyal_setTitle(`Duelingbook`);
		Send({"action":"Cancel duel"});	
	}
	
	window.removeFromJoinlist = function(data)
	{
		$('#joinlist .cell').each(function(){
			if ($(this).data("username") == data.username) {
				$(this).remove();
				if ($('#joinlist .cell2.selected').length == 0) {
					$('#hosting .accept_btn').disable(true);
					$('#hosting .reject_btn').disable(true);
				}
				return false;
			}
		});
		
		let Eyal_players = $('#joinlist .cell').length;
		
		let Eyal_title = (`(${Eyal_players}) Duelingbook`)
		
		Eyal_setTitle(Eyal_title);
	}
	
	window.Eyal_setTitle = function(str)
	{
		// May be edited because DB uses some weird title system...
		document.title = str;
	}
	window.Eyal_notifyOfPotentialDuel = async function()
	{
		playSound(ChatInbound);
		await Eyal_delay(0.7);
		
		playSound(ChatOutbound);
		await Eyal_delay(0.7);
		
		playSound(ChatInbound);
		await Eyal_delay(0.7);
		
		playSound(ChatOutbound);
		await Eyal_delay(0.7);
	}
	
	window.toDeck = function(player, data)
	{
		var rotY = 180 + ABOUT_ZERO;
		var revealing = true;
		var card = getFieldCard(player, data);
		if (card) {
			revealing = false;
			card = removeCard(player, data);
		}
		else {
			card = removeFromHand(player, data);
			if (card) {
				revealing = false;
			}
		}
		if (!card) {
			card = removeFromBanished(player, data, false);
		}
		if (!card) {
			card = removeCard(player, data);
		}
		if (!card) {
			card = removeFromDeck(player.opponent, data); // Opponent's Deck (partial)
		}
		if (card.data("face_down")) {
			revealing = false;
			card.data("face_down", false);
		}
		if (data.discreet) {
			revealing = false;
		}
		updateController(card.data("owner"), card);
		$('#field').append(card);
		if (data.play.indexOf("FU") >= 0) {
			card.data("face_up", true);
			rotY = ABOUT_ZERO;
		}
		if (data.play == "To B Deck") 
		{
			if (revealing) 
			{
				revealAndToBottomOfDeck(card.data("controller"), card, data);
				return;
			}
			else {
				card.data("owner").main_arr.push(card);
				
				if(player == player1)
				{
					Eyal_AddCardToTrueDeck(card);
				}
				addDeckChildren(player);
			}
		}
		else if (data.play == "To B Deck 2") {
			player.opponent.main_arr.push(card);
			
			if(player.opponent == player1)
			{
				Eyal_RemoveCardFromTrueDeck(card);
			}
			
			updateController(player.opponent, card);
		}
		else if (data.play.indexOf("To T Deck 2") == 0) {
			player.opponent.main_arr.unshift(card);
			
			if(player.opponent == player1)
			{
				Eyal_AddCardToTrueDeck(card);
			}
			updateController(player.opponent, card);
			TweenMax.set(card, {"z":player.opponent.main_arr.length + 30});
		}
		else {
			if (revealing) {
				revealAndToTopOfDeck(card.data("controller"), card, data);
				return;
			}
			else {
				card.data("owner").main_arr.unshift(card);
				
				if(player == player1)
				{
					Eyal_AddCardToTrueDeck(card);
				}
				
				TweenMax.set(card, {"z":card.getDeckZ()});
			}
		}
		
		
		let cardsInteracted = [];
		
		let rotYOffset = -45;
		let rotZ = 0;
		let offsetX = 10;
		
		if(player == player1.opponent)
		{
			offsetX = -10;
			rotYOffset = 45;
		}
		
		let curSeconds = easeSeconds;
		
		if(data.play == "To B Deck")
		{
			var mX = 0;
			
			if(card.data("owner") != player1 || viewing.indexOf("Deck") == -1)
			{
				for (let abc = card.data("owner").main_arr.length - 1; abc > -1; abc--)
				{
					
					TweenMax.set(card.data("owner").main_arr[abc], {rotationZ: rotZ});
					TweenMax.to(card.data("owner").main_arr[abc], easeSeconds / 2, {rotationY: rotY + rotYOffset, rotleft:card.data("owner").deckX + offsetX + mX});
					
					cardsInteracted.push({card: card.data("owner").main_arr[abc], mX: mX, rotY: rotY});
					
					mX += card.data("owner").mX;
					
				}
				
				curSeconds *= 2.5
			}
		}
		TweenMax.to(card, curSeconds, {left:card.data("controller").deckX, top:card.data("controller").deckY, scale:0.1485, rotation:card.data("controller").rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
			
			for(let abc=0;abc < cardsInteracted.length;abc++)
			{	
				TweenMax.set(cardsInteracted[abc].card, {rotationZ: rotZ});
				TweenMax.set(cardsInteracted[abc].card, {rotationY: cardsInteracted[abc].rotY, rotationZ: rotZ, left: card.data("owner").deckX + cardsInteracted[abc].mX});
			}
			
			shiftDeck(card.data("controller"));
			
			if(viewing)
				updateViewing();
				
			endAction();
		}});
	}
	
	window.removeFromDeck = function(player, data)
	{
		for (var i = 0; i < player.main_arr.length; i++) 
		{
			if (player.main_arr[i].data("id") == data.id) {
				console.log('found');
				var card = player.main_arr.splice(i, 1)[0];
				
				if(player == player1)
				{
					Eyal_RemoveCardFromTrueDeck(card);
				}
				
				card.detach();
				card.data("face_up", false);
				$('#cid1_txt').text(Player1().main_arr.length);
				$('#cid2_txt').text(Player2().main_arr.length);
				updateViewing();
				return card;
			}
		}
		
		return null;
	}
	
	window.removeTopCardFromDeck = function(player)
	{
		var card = player.main_arr.splice(0, 1)[0];
		
		if(player == player1)
		{
			Eyal_RemoveCardFromTrueDeck(card);
		}
		
		card.data("face_up", false);
		$('#cid1_txt').text(Player1().main_arr.length);
		$('#cid2_txt').text(Player2().main_arr.length);
		updateViewing();
		return card;
	}
	
	window.revealAndToTopOfDeck = function(player, card, data)
	{
		$('#duel .cards').append(card);
		TweenMax.set(card, {"z":card.getDeckZ()});
		card.data("cardfront").reinitialize(data.card);
		TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:ABOUT_ZERO, onComplete:function(){ 
			previewCard(card);
			TweenMax.to(card, easeSeconds, {left:player.deckX, top:player.deckY, scale:0.1485, rotation:player.rot, rotationY:180 + ABOUT_ZERO, delay:0.5, onStart:function(){
				player.main_arr.unshift(card);
				
				if(player == player1)
				{
					Eyal_AddCardToTrueDeck(card);
				}
			}, onComplete:function(){ 
				shiftDeck(player);

				if (viewing)
					updateViewing();
				
				endAction();
			}});
		}});
		playSound(Reveal);
	}


	window.revealAndToBottomOfDeck = function(player, card, data)
	{
		let cardsInteracted = [];
		
		let rotYOffset = -45;
		let rotZ = 0;
		let offsetX = 10;
		
		if(card.data("owner") == player1.opponent)
		{
			offsetX = -10;
			rotYOffset = 45;
		}
		
		
		if(data.play == "To B Deck")
		{
			var mX = 0;
			
			if(card.data("owner") != player1 || viewing.indexOf("Deck") == -1)
			{
				for (let abc = card.data("owner").main_arr.length - 1; abc > -1; abc--)
				{
					// Eyal282 here
					var rotY = 180 + ABOUT_ZERO;
					
					if (card.data("owner").main_arr[abc].data("face_up") || card.data("owner").deck_face_up) {
						if (card.data("owner").main_arr[abc].data("cardfront").data("initialized")) {
							rotY = ABOUT_ZERO;
						}
					}
					
					TweenMax.set(card.data("owner").main_arr[abc], {rotationZ: rotZ});
					TweenMax.to(card.data("owner").main_arr[abc], easeSeconds / 2, {rotationY: rotY + rotYOffset, rotationZ: rotZ, left:card.data("owner").deckX + offsetX + mX});
					
					cardsInteracted.push({card: card.data("owner").main_arr[abc], mX: mX, rotY: rotY});
					
					mX += card.data("owner").mX;
					
				}
			}
		}
		
		$('#field').append(card);
		TweenMax.set(card, {"z":0});
		card.data("cardfront").reinitialize(data.card);
		TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:ABOUT_ZERO, onComplete:function(){ 
			previewCard(card);
			TweenMax.to(card, easeSeconds, {left:player.deckX, top:player.deckY, scale:0.1485, rotation:player.rot, rotationY:180 + ABOUT_ZERO, delay:0.5, onStart:function(){
				player.main_arr.push(card);
				
				if(player == player1)
				{
					Eyal_AddCardToTrueDeck(card);
				}
				
				addDeckChildren(player);
			}, onComplete:function(){ 
				for(let abc=0;abc < cardsInteracted.length;abc++)
				{	
					TweenMax.set(cardsInteracted[abc].card, {rotationZ: rotZ});
					TweenMax.set(cardsInteracted[abc].card, {rotationY: cardsInteracted[abc].rotY, rotationZ: rotZ, left: card.data("owner").deckX + cardsInteracted[abc].mX});
				}
				
				shiftDeck(player);
				
				if(viewing)
					updateViewing();
				
				endAction();
			}});
		}});
		playSound(Reveal);
	}

	window.declare = function(player, data)
	{
		var spark_mc = createSVGAnimation(spark, "spark", 110, 110, 24, spark.json);
		var card = getDuelCard(data.id);
		card.data("cardfront").reinitialize(data.card);
		var isViewingCard = card.parent()[0] == $('#view > .content')[0];
		var grave_index = null;
		var banished_index = null;
		if (isViewingCard) {
			$('#spark').css("z-index", 16); // #view has z-index of 15
		}
		else {
			if (card.data("controller").grave_arr.indexOf(card) >= 0) {
				grave_index = card.data("controller").grave_arr.indexOf(card);
				card.data("controller").grave_arr.splice(grave_index, 1);
				card.data("controller").grave_arr.unshift(card);
				shiftGrave(card.data("controller"));
			}
			if (card.data("controller").banished_arr.indexOf(card) >= 0) {
				banished_index = card.data("controller").banished_arr.indexOf(card);
				card.data("controller").banished_arr.splice(banished_index, 1);
				card.data("controller").banished_arr.unshift(card);
				shiftBanished(card.data("controller"));
			}
		}
		
		if (card.data("cardfront").data("name").includes("Tearlament")) {
			allowToBottom = true;
		}
		
		var delay = 0;
		var _spark = $('#' + spark_mc.mc.id);
		
		if (card.data("controller").hand_arr.includes(card) && !(duelist && isPlayer1(player.username))) {
			$('#duel .cards').append(card);
			TweenMax.to(card, 0.5, {"rotationY":ABOUT_ZERO});
			delay = 0.4;
		}
		
		
		
		TweenMax.set(_spark, {"left":parseInt(card.css("left")), "top":parseInt(card.css("top"))});
		if (isViewingCard) {
			
			TweenMax.set(_spark, {"left":parseInt(card.css("left")) + 219 + 5, "top":parseInt(card.css("top")) + 58 + 32 - $('#view > .content').scrollTop()});
		}
		
		
		setTimeout(function(){
			TweenMax.to(_spark, 0.95, {onComplete:function(){
				spark_mc.stop();
				_spark.remove();
			}});
			spark_mc.play();
			playSound(Declare);
			delay = 0.2;
			if (card.data("controller").hand_arr.includes(card)) {
				delay = 0.4;
				previewCard(card);
				var rotY = 180 + ABOUT_ZERO;
				if ((show_cards && player == Player1()) || (show_cards == 2)) {
					rotY = ABOUT_ZERO;
				}
				TweenMax.to(card, 0.5, {"rotationY":rotY, "delay":0.6});
			}
			if (grave_index || banished_index) {
				delay = 0.6; // gives you time to see the card before it re-indexes itself
			}
			setTimeout(function(){
				
				if (grave_index != null) {
					card.data("controller").grave_arr.splice(0, 1);
					card.data("controller").grave_arr.splice(grave_index, 0, card);
					shiftGrave(card.data("controller"));
				}
				if (banished_index != null) {
					card.data("controller").banished_arr.splice(0, 1);
					card.data("controller").banished_arr.splice(banished_index, 0, card);
					shiftBanished(card.data("controller"));
				}
				
				//$('#spark').insertAfter($('#duel .cards'));
				$('#spark').css("z-index", 0); // #view has z-index of 15
				
				//if (!automatic) {
				//	endAction();
				//}
				
				setTimeout(function(){
					endAction();
				}, automatic ? 300 : 0);
				
			}, 300 + (delay * 1.5 * 1000));
		}, delay * 1000);
		if (data.name) {
			if(card && data.username != player1.username && card.data("controller").hand_arr.includes(card) && cardLogging)
			{
				Eyal_addCardHoverLine(data.username + ' declared effect of <font color="0000FF">' + quote(data.card.name) + "</font>", card)
			}
			else
			{
				addLine(data.username + " declared effect of " + quote(data.name));
			}
		}
		else if (data.log) {
			var str = data.username + " " + data.log.public_log.replace("Declared", "declared");
			if (str.indexOf(" in ") >= 0) {
				str = str.substring(0, str.indexOf(" in "));
			}
			addLine(str);
		}
	}
	
	window.reveal = function(player, data)
	{
		var card = revealFromHand(player, data);
		if (!card) {
			card = revealFromExtra(player, data);
		}
		if (!card) {
			card = revealFromDeck(player, data);
		}
		
		if(card && data.username != player1.username && cardLogging) {
			Eyal_addCardHoverLine(data.username + ' revealed <font color="0000FF">' + quote(data.card.name) + "</font>", card)
		}
	}
	
	window.toHand = function(player, data)
	{
		var card = removeFromDeck(player, data);
		
		// Don't care about non-deck, if card was removed from deck, it's in the deck.
		
		if(card && data.username != player1.username && cardLogging) {
			Eyal_addCardHoverLine(data.username + ' added <font color="0000FF">' + quote(data.card.name) + "</font> from deck", card)
		}
		
		if (!card) {
			card = removeFromGY(player, data);
		}
		if (!card) {
			card = removeFromExtra(player, data);
		}
		if (!card) {
			card = removeFromHand(player, data); // Graceful Tear
			if (data.play == "To hand 2") {
				if (!card) {
					card = removeCard(player, data);
				}
				revealAndToHand(player, card, data);
				return;
				
				/*if (card) {
					revealAndToHand(player, card, data);
					return;
				}
				if (!card) {
					card = removeFromBanished(player, data); // Gift Exchange
					if (card) {
						revealAndToHand(player, card, data);
						return;	
					}
				}*/
			}
		}
		if (card) {
			revealAndToHand(player, card, data);
			return;
		}
		toHandFromBanished(player, data);
		toHandFromField(player, data);
	}

	window.Connect = function()
	{
		console.log('Connecting...');
		connection_success = false;
		connectTimer.start();
		try {
			websocket = new WebSocket(HOSTNAME);
			websocket.onopen = connectHandler;
			websocket.onmessage = Eyal_handleData;
			websocket.onclose = socketClosedE;
			websocket.onerror = socketErrorE;
			
			//websocket.onclose = reconnectE;
			//websocket.onerror = reconnectE;
			
			//websocket.onclose = closedE;
			//websocket.onerror = closedE;
		}
		catch(e) {
			console.log(e);
			console.log('Failed to connect'); // happens when the server takes to long to finish the connecting process
		}
	}
	// This is when Dueling Book's server gives us data.
	window.Eyal_handleData = function(e)
	{
		// For late loading the extension...
		Eyal_handleData2(e);
	}
	
	window.Eyal_handleData2 = function(e)
	{
		try {
			var data = JSON.parse(e.data);
		}
		catch(e) {
			errorE("Malformed server response");
			return;
		}
		
		
		if(window.Eyal_debug && typeof data === "Object")
		{
			if(typeof window.Eyal_debug == "string")
			{
				if(data.username == window.Eyal_debug || data.username == player1.username)
					console.log(data);
			}
			else
				console.log(data);
		}
		// Send the data to the original function, it is a garbage idea to edit the original function...
		handleData(e);
	}
	// duelResponse is after DB saw our interaction. This is before that happens.
	window.cardMenuClicked = function(card, data, e) {
		if(viewing == "Secret Deck")
		{
			Eyal_addColoredLine("FF0000", "Error: Cannot interact with cards in Secret Deck");
			return;
		}
		else if (card.data("fake_card") && viewing == "Xyz materials")
		{
			if (typeof Eyal_lastXyzCard === "undefined")
				return;
			
			let substitute = Eyal_findSubstitute(card, Eyal_lastXyzCard.data("xyz_arr"));

			if (substitute != null)
			{
				cardMenuClicked(substitute, data, e);
			}

			return;	
		}
		console.log('cardMenuClicked. data = ' + data);
		if (!$('#cig1_txt').is(":visible")) {
			return; // this prevents users from shuffling during simultaneousDraw
		}
		removeCardMenu();
		hideSelectZones();
		
		if(data == "Eyal Pay Half LP")
		{
			Eyal_exitViewing();
			
			
			let amountToGive = -1 * Math.ceil((player1.lifepoints / 2.0));
			Send({"action":"Duel", "play":"Life points", "amount":amountToGive});
			return;
		}
		
		else if(data == "Eyal SS Many Tokens")
		{
			Eyal_exitViewing();
			
			let tokenCount = Eyal_CountTokensCardCanSummon(card);
			
			if(tokenCount == 0)
				return;
			
			let toOpponent = false;
			
			if(tokenCount < 0)
			{
				toOpponent = true;
				
				tokenCount = -1 * tokenCount;
			}
			
			for(let abc=0;abc < tokenCount;abc++)
			{
				Send({"action":"Duel", "play":"Summon token", "card":newDuelCard()});
			}
			
			return;
		}
		else if(data == "Eyal Replace Hand")
		{
			window.Eyal_reloadCard = card;
			
			getConfirmation("Replace Hand?", "This will shuffle your hand to deck and draw that many cards.", Eyal_ReplaceHandYes);
		}
		else if (data == "Eyal Numeron Network")
		{
			getConfirmation("Summon 4 Gates?", "In attack position", Eyal_NumeronNetworkYes);
			
			if(Eyal_GenerateSecretExtraDeck() == null)
			{
				Send({ "action": "Duel", "play": "View ED" });
				
				let count = 50;
		
				let interval = setInterval(function () {
					count--;

					if (count == 0)
					{
						clearInterval(interval);
						return;
					}

					Send({ "action": "Duel", "play": "Stop viewing", "viewing": "Extra Deck" });
					Eyal_exitViewing();
				}, 50);
			}

		}
		else if (data == "Eyal Mill Sigma")
		{
			getConfirmation("Mill Sigma from Deck?", "The extension will view the deck and try to mill it.", Eyal_MillSigmaYes);
		}
		else if (data == "Eyal Invocation GY")
		{
			window.Eyal_invocationCard = card;

			getConfirmation("Resolve GY Effect?", "", Eyal_InvocationGYYes);
		}
		else if (data == "Eyal Runick Fountain")
		{
			getConfirmation("Resolve effect?", "Bottom deck as many as possible, then draw same number of cards", Eyal_RunickFountainYes);
		}
		else if(data == "Banish first 3 ED FD" || data == "Banish first 5 ED FD" || data == "Banish first 6 ED FD" || data == "Banish entire ED FD")
		{
			let banishMax;
				
			if(data.search("3") != -1)
				banishMax = 3;
			
			if(data.search("5") != -1)
				banishMax = 5;
				
			if(data.search("6") != -1)
				banishMax = 6;
			
			if(data.search("entire") != -1)
				banishMax = 9999;
				
			
			for(let abc = 0;abc < player1.all_cards_arr.length;abc++)
			{
				if(banishMax == 0)
					break;
				
				// Skip myself, this is because I made an eater of millions that banishes the rest of the ED.
				if(player1.all_cards_arr[abc].data("id") == card.data("id"))
					continue;
				
				if(isIn(player1.all_cards_arr[abc], player1.extra_arr) >= 0)
				{
					cardMenuClicked(player1.all_cards_arr[abc], "Banish FD");
					banishMax--;
				}
			}
			
			if(Eyal_IsEaterOfMillions(card))
			{
				cardMenuClicked(card, "SS ATK")
			}
			Eyal_exitViewing();
			
			return;
		}
		
		else if(data == "Banish first 3 ED FD Prosperity" || data == "Banish first 6 ED FD Prosperity")
		{
			let banishLimit;
			let banishMax;
				
			if(data.search("3") != -1)
				banishMax = 3;
				
			if(data.search("6") != -1)
				banishMax = 6;
			
			banishLimit = banishMax;
			
			if(player1.extra_arr.length < banishMax)
				return;
			
			for(let abc = 0;abc < player1.all_cards_arr.length;abc++)
			{
				if(banishMax == 0)
					break;
				
				// Skip myself, this is because I made an eater of millions that banishes the rest of the ED.
				if(player1.all_cards_arr[abc].data("id") == card.data("id"))
					continue;
				
				if(isIn(player1.all_cards_arr[abc], player1.extra_arr) >= 0)
				{
					cardMenuClicked(player1.all_cards_arr[abc], "Banish FD");
					banishMax--;
				}
			}
			
			if(banishMax == 0)
			{
				window.Eyal_excavateAmount = banishLimit;
				
				getConfirmation(`Excavate ${banishLimit} cards?`, "", Eyal_excavateYes);
			}
			Eyal_exitViewing();
			
			return;
		}
		
		else if(data == "Eyal Banish")
		{
			cardMenuClicked(card, "To GY");
			cardMenuClicked(card, "Banish");
			Eyal_exitViewing();
			
			return;
		}
		
		else if(data == "Eyal Banish FD")
		{
			cardMenuClicked(card, "To GY");
			cardMenuClicked(card, "Banish FD");
			Eyal_exitViewing();
			
			return;
		}
		
		else if(data == "Eyal Excavate Top")
		{
			let Eyal_excavated = Eyal_IsExcavator(card);
			
			if(Eyal_excavated <= player1.main_arr.length)
			{
				for(let abc=0;abc < Eyal_excavated;abc++)
				{
					let Eyal_card = player1.main_arr[abc];
					cardMenuClicked(Eyal_card, "Banish");
					window.Eyal_excavatedArr.push(Eyal_card);
					
				}
			}
			
			Eyal_exitViewing();
			
			return;
		}
		
		else if(data == "Eyal Declare Exodia")
		{	
			getConfirmation("Declare Victory?", "", Eyal_DeclareVictoryYes);
			
			Eyal_exitViewing();
			
			return;
		}
		
		else if(data == "Eyal Xyz Material To Front")
		{	
			window.Eyal_XyzMaterial = card;
			
			getConfirmation("Bring Xyz Material to front?", "This will make a lot of actions at once.", Eyal_XyzMaterialToFrontYes);
			
			Eyal_exitViewing();
			
			return;
		}
		else if(data == "Eyal To ED FU")
		{
			cardMenuClicked(card, "To T Deck");
			cardMenuClicked(card, "To ED FU");
		}
		else if(data == "Eyal Banish ED Everything")
		{
			getConfirmation("Banish every card in your Extra Deck?", "To unbanish back, shuffle 1 card back and use the other option.", Eyal_BanishEverythingEDYes);
		}
		else if(data == "Eyal Unbanish ED Everything")
		{
			getConfirmation("Unbanish every face-up card to your Extra Deck?", "This includes cards banished in other ways...", Eyal_UnbanishEverythingEDYes);
		}
		else if(data == "Eyal Magical Merchant")
		{
			getConfirmation("Mill until you find a Spell / Trap?", "This will make a lot of actions at once.", Eyal_MagicalMerchantYes);
		}
		else if (data == "Eyal Attach") {
			olPlay = "Eyal Attach";
			overlaying_card = card;
			if (countOverlayOptions(player1) == 0) {
				overlaying_card = null;
				return;
			}
			else if (countOverlayOptions(player1) == 1) {
				Send({ "action": "Duel", "play": "To GY", "card": overlaying_card.data("id") });
				Send({ "action": "Duel", "play": "Attach", "start_card": overlaying_card.data("id"), "end_card": getOnlyOverlayId(player1) });
				overlaying_card = null;
			}
			/*else if (data != "Overlay" && countOverlayOptions(player1) == 1) { // impossible condition?
				Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":getOnlyOverlayId(player1)});
				overlaying_card = null;
			}
			else if (data == "Overlay" && countOverlayOptions(player1) == 1) { // impossible condition?
				Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":getOnlyOverlayId(player1)});
				overlaying_card = null;
			}*/
			else {
				startOverlay(e);
				if (linkCardChosen(player1)) {
					Eyal_exitViewing();
				}
			}
			return;
		}
		else if (data == "Eyal View Materials")
		{
			Eyal_lastXyzCard = card;

			viewingE("Xyz materials");	
		}


		if (data == "Choose card") {
			player1.temp_arr.push(card.data("id"));
			if (player1.temp_arr.length == 3 && viewing == "Deck (Picking 3 Cards)" || player1.temp_arr.length == 2 && viewing == "Deck (Picking 2 Cards)" || player1.temp_arr.length == 1 && viewing == "Deck (Picking Card)") {
				Send({"action":"Duel", "play":next_callback, "cards":player1.temp_arr});
				Eyal_exitViewing();
			}
			return;
		}
		if (data == "Overlay" || data == "OL ATK" || data == "OL DEF" || data == "Attach") {
			olPlay = data;
			overlaying_card = card;
			if (countOverlayOptions(player1) == 0) {
				overlaying_card = null;
				return;
			}
			else if (countOverlayOptions(player1) == 1) {
				Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":getOnlyOverlayId(player1)});
				overlaying_card = null;
			}
			else if (countOverlayOptions(player1) == 2 && data == "Overlay") {
				Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":getOnlyOverlayId(player1)});
				overlaying_card = null;
			}
			/*else if (data != "Overlay" && countOverlayOptions(player1) == 1) { // impossible condition?
				Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":getOnlyOverlayId(player1)});
				overlaying_card = null;
			}
			else if (data == "Overlay" && countOverlayOptions(player1) == 1) { // impossible condition?
				Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":getOnlyOverlayId(player1)});
				overlaying_card = null;
			}*/
			else {
				startOverlay(e);
				if (linkCardChosen(player1)) {
					Eyal_exitViewing();
				}
			}
			return;
		}
		else if (data == "Attack") {
			attacking_card = card;
			if (countMonsters(Player2()) == 0) {
				return;
			}
			else if (countMonsters(Player2()) == 1) {
				Send({"action":"Duel", "play":"Attack", "attacking_card":attacking_card.data("id"), "attacked_card":getOnlyAttackId(Player2())});
				attacking_card = null;
			}
			else {
				startAttack(e);
			}
			return;
		}
		else if (data == "Show deck") {
			getConfirmation("Show Deck", "Are you sure you want to show your opponent your deck?", showDeck);
			return;
		}
		else if (data == "Show ED") {
			getConfirmation("Show Extra", "Are you sure you want to show your opponent your extra deck?", showExtra);
			return;
		}
		if (links && isIn(card, player1.extra_arr) >= 0 && (data == "SS ATK" || data == "SS DEF")) {
			if (!bothLinkCardsChosen(player1)) {
				if (!linkCardChosen(player1) || $('#choose_zones_cb').is(":checked")) {
					Eyal_exitViewing();
					summoning_card = card;
					summoning_play = data;
					startChooseExtraZones();
					startChooseMonsterZones();
					return;
				}
			}
		}
		if (data == "Move") {
			summoning_card = card;
			summoning_play = data;
			startChooseMonsterZones();
			startChooseSTZones();
			
			// Eyal282 here.
			//if (card.data("cardfront").data("type") == "Field") {
				startChooseFieldSpellZones();
			//}
			if (links) {
				startChooseExtraZones();
			}
			startChooseMonsterZones2();
			return;
		}
		if (data == "Activate Pendulum") {
			summoning_card = card;
			summoning_play = "Activate ST";
			$('#s1_select').show();
			s1_select.play();
			$('#s5_select').show();
			s5_select.play();
			return;
		}
		if (data == "Swap") {
			addAutoComplete($('#input .input_txt'), "card");
			getInput("Swap Card", "Enter the name of the new card:", "", 100, function(){
				removeAutoComplete($('#input .input_txt'));
				Send({"action":"Duel", "play":"Swap", "card":card.data("id"), "name":$('#input .input_txt').val()});
			}, null, null, function(){
				removeAutoComplete($('#input .input_txt'));
			});
			return;
		}
		/*if (data == "Resolve Small World") {
			var arr = [];
			player1.hand_arr.forEach(function(e,i){
				if (e.data("cardfront").data("card_type") == "Monster") {
					addIfNotExists(arr, e.data("cardfront").data("name"));
				}
			});
			addAutoComplete($('#input .input_txt'), "card");
			getInput("Small World", "Enter a card name from the hand:", "", 100, function(){
				//removeAutoComplete($('#input .input_txt'));
				Send({"action":"Duel", "play":"Check Small World 1", "name":$('#input .input_txt').val()});
			}, null, null, function(){
				//removeAutoComplete($('#input .input_txt'));
			});
			autoCompleteReponse({"names":arr, "selector":"#input .input_txt"});
			removeAutoComplete($('#input .input_txt'));
			showDim();
			return;
		}*/
		if (data == "Resolve Small World") {
			var arr = [];
			player1.hand_arr.forEach(function(e,i){
				if (e.data("cardfront").data("card_type") == "Monster") {
					addIfNotExists(arr, e.data("cardfront").data("name"));
				}
			});
			getComboBox("Small World", "Select a card in your hand:", arr, 0, function(){
				Send({"action":"Duel", "play":"Check Small World 1", "name":$('#combo .combo_cb').val()});
				showDim();
			});
			showDim();
			return;
		}
		
		
		
		/*if (data == "Swap") {
			getInput("Swap Card", "Enter the ID of the new card:", "", 0, function(){
				Send({"action":"Duel", "play":"Swap", "prev_id":card.data("id"), "new_id":~~$('#input .input_txt').val()});
			}, /[^0-9]/g);
			return;
		}*/
		if ($('#choose_zones_cb').is(":checked")) {
			if (data.indexOf("SS ATK") >= 0 || data.indexOf("SS DEF") >= 0 || data == "Normal Summon" || data == "Summon token" || (data == "Set monster" && isIn(card, player1.hand_arr) >= 0)) {
				if (links || countMonsters(player1) != 4) {
					summoning_card = card;
					summoning_play = data;
					startChooseMonsterZones();
					
					if(data.indexOf("SS ATK") >= 0 || data.indexOf("SS DEF") >= 0 || data == "Normal Summon" || (data == "Set monster" && isIn(card, player1.hand_arr) >= 0))
					{
						if(Eyal_unlockCardMechanics && Eyal_IsCardKaiju(card))
						{
							startChooseMonsterZones2();
						}
					}
					return;
				}
			}
			switch (data) {
				case "Activate ST":
				case "Set ST":
					if (player1.s1 && player1.s1[0] == card[0] || player1.s2 && player1.s2[0] == card[0] || player1.s3 && player1.s3[0] == card[0] || player1.s4 && player1.s4[0] == card[0] || player1.s5 && player1.s5[0] == card[0]) {
						break;
					}
				case "To ST":
					if (countSpells(player1) != 4) {
						summoning_card = card;
						summoning_play = data;
						startChooseSTZones();
						return;
					}
					break;
				case "Change control":
					summoning_card = card;
					summoning_play = data;
					startChooseMonsterZones2();
					return;
			}
		}
		$('#sword').hide();
		if (data == "Summon token") {
			awaiting_token = true;
		}
		if (data == "Lilith effect" || data == "Alphan effect") {
			Eyal_exitViewing();
		}
		if (data == "Shuffle deck" && $('#avatar2 .status_txt').text().indexOf("Opponent's Hand") >= 0) {
			return;
		}

		Send({"action":"Duel", "play":data, "card":card.data("id")});

		if (!paused) {
			if (data == "View deck" && seen_deck) {
				viewingE("Deck");
			}
			if (data == "View ED" && seen_extra) {
				if ($('#avatar2 .status_txt').text() != "Viewing Opponent's Extra Deck") {
					viewingE("Extra Deck");
				}
			}
		}
		if (data == "Upside Down effect 2") {
			Eyal_exitViewing(null, true);
		}
	}

	window.startOverlay = function(e)
	{
		updateMouse(e);
		$('#overlay').show();
		$('body').mousemove(moveXyzTargetE);
		moveXyzTargetE(e);
		e.stopPropagation();
		$('body').click(Eyal_checkOverlay);
	}
	window.checkOverlay = function (e) {
		Eyal_checkOverlay(e);
	}
	
	// Avoid the notorious bug where replacing the function breaks .off
	if(typeof Eyal_checkOverlay === "undefined")
	{
		window.Eyal_checkOverlay = function(e)
		{
			if (olPlay == "Eyal Attach")
			{
				olPlay = "Attach";
				Send({ "action": "Duel", "play": "To GY", "card": overlaying_card.data("id") });
			}
			updateMouse(e);
			$('body').off("click", Eyal_checkOverlay);
			$('body').off("mousemove", moveXyzTargetE);
			$('#overlay').hide();
			if (player1.m1) {
				if (overlaying_card != player1.m1) {
					if (inBounds($('#m1_hidden'))) {
						overlayCard(player1.m1);
						return;
					}
				}
			}
			if (player1.m2) {
				if (overlaying_card != player1.m2) {
					if (inBounds($('#m2_hidden'))) {
						overlayCard(player1.m2);
						return;
					}
				}
			}
			if (player1.m3) {
				if (overlaying_card != player1.m3) {
					if (inBounds($('#m3_hidden'))) {
						overlayCard(player1.m3);
						return;
					}
				}
			}
			if (player1.m4) {
				if (overlaying_card != player1.m4) {
					if (inBounds($('#m4_hidden'))) {
						overlayCard(player1.m4);
						return;
					}
				}
			}
			if (player1.m5) {
				if (overlaying_card != player1.m5) {
					if (inBounds($('#m5_hidden'))) {
						overlayCard(player1.m5);
						return;
					}
				}
			}
			if (linkLeft) {
				if (overlaying_card != linkLeft && linkLeft.data("controller") == player1) {
					if (inBounds($('#link_left_hidden'))) {
						overlayCard(linkLeft);
						return;
					}
				}
			}
			if (linkRight) {
				if (overlaying_card != linkRight && linkRight.data("controller") == player1) {
					if (inBounds($('#link_right_hidden'))) {
						overlayCard(linkRight);
						return;
					}
				}
			}
			overlaying_card = null;
		}
	}
	
	window.hideSelectZones = function()
	{
		// This function should not exist in replays, and this function breaks replays.
		if($("#m1_select").length == 0)
			return;
		
		$('#m1_select').hide();
		m1_select.stop();
		$('#m2_select').hide();
		m2_select.stop();
		$('#m3_select').hide();
		m3_select.stop();
		$('#m4_select').hide();
		m4_select.stop();
		$('#m5_select').hide();
		m5_select.stop();
		
		$('#m1_select2').hide();
		m1_select2.stop();
		$('#m2_select2').hide();
		m2_select2.stop();
		$('#m3_select2').hide();
		m3_select2.stop();
		$('#m4_select2').hide();
		m4_select2.stop();
		$('#m5_select2').hide();
		m5_select2.stop();
		
		$('#s1_select').hide();
		s1_select.stop();
		$('#s2_select').hide();
		s2_select.stop();
		$('#s3_select').hide();
		s3_select.stop();
		$('#s4_select').hide();
		s4_select.stop();
		$('#s5_select').hide();
		s5_select.stop();
		
		$('#field_spell1_select').hide();
		field_spell1_select.stop();
		$('#field_spell2_select').hide();
		field_spell2_select.stop();
		
		$('#link_left_select').hide();
		link_left_select.stop();
		$('#link_right_select').hide();
		link_right_select.stop();
		
		$("#ed_select").hide();
		Eyal_ed_select.stop();
	}
	window.Eyal_chooseZone = function()
	{
		if(this == $("#ed_select")[0])
		{
			hideSelectZones();
			
			if(summoning_card.data("cardfront").data("pendulum"))
			{
				Send({"action":"Duel", "play":"To ED FU", "card":summoning_card.data("id"), "zone":zone});
			}
			return;
		}
		
		var zone;
		switch(this)
		{
			case $('#m1_select')[0]:
				zone = "M-1";
				break;
			case $('#m2_select')[0]:
				zone = "M-2";
				break;
			case $('#m3_select')[0]:
				zone = "M-3";
				break;
			case $('#m4_select')[0]:
				zone = "M-4";
				break;
			case $('#m5_select')[0]:
				zone = "M-5";
				break;
				
			case $('#m1_select2')[0]:
				zone = "M2-1";
				break;
			case $('#m2_select2')[0]:
				zone = "M2-2";
				break;
			case $('#m3_select2')[0]:
				zone = "M2-3";
				break;
			case $('#m4_select2')[0]:
				zone = "M2-4";
				break;
			case $('#m5_select2')[0]:
				zone = "M2-5";
				break;
				
			case $('#s1_select')[0]:
				zone = "S-1";
				break;
			case $('#s2_select')[0]:
				zone = "S-2";
				break;
			case $('#s3_select')[0]:
				zone = "S-3";
				break;
			case $('#s4_select')[0]:
				zone = "S-4";
				break;
			case $('#s5_select')[0]:
				zone = "S-5";
				break;
				
			case $('#field_spell1_select')[0]:
				//zone = "Field Spell Zone";
				zone = "F-1";
				break;
			case $('#field_spell2_select')[0]:
				zone = "F-2";
				break;
				
			case $('#link_left_select')[0]:
				zone = "Left Extra Monster Zone";
				break;
			case $('#link_right_select')[0]:
				zone = "Right Extra Monster Zone";
				break;
		}
		if (getZoneByName(player1, zone)) {
			return;
		}
		
		// For imperm column mechanics, keep in mind "zone" is unedited.
		let realZone = parseInt(zone.replace(/\D/g, ''));
		
		if(zone.startsWith("M") && !zone.startsWith("M-") && (summoning_play.indexOf("SS ATK") >= 0 || summoning_play.indexOf("SS DEF") >= 0 || summoning_play == "Normal Summon" || summoning_play == "Set monster"))
		{
			hideSelectZones();
			
			if (automatic && $('#duelmessage').is(":visible")) {
				hideDuelMessage();
			}
			else if (automatic) {
				$('#duel .cancel_btn').hide();
			}



			removeMenuData();

			let Eyal_zone = null;
			
			if (!duel_links && linkLeft == null)
			{
				Eyal_zone = "Left Extra Monster Zone"
			}
			else if (!duel_links && linkRight == null)
			{
				Eyal_zone = "Right Extra Monster Zone";
			}
			else if(player1.m3 == null)
			{
				Eyal_zone = "M-3";
			}
			else if(player1.m2 == null)
			{
				Eyal_zone = "M-2";
			}
			else if(player1.m1 == null)
			{
				Eyal_zone = "M-1";
			}
			else if(!duel_links && player1.m4 == null)
			{
				Eyal_zone = "M-4";
			}
			else if(!duel_links && player1.m4 == null)
			{
				Eyal_zone = "M-5";
			}
			
			if(Eyal_zone == null)
			{
				Eyal_zone = "M-3";
			}
				
		
			let Eyal_monsterCard = player1.m3;
				
			let Eyal_isFacedown = false;
			let Eyal_isATK = false;
			
			if(Eyal_monsterCard)
			{
				Eyal_isFacedown = Eyal_monsterCard.data("face_down");
				Eyal_isATK = Eyal_monsterCard.data("inATK");
			}
			
			if(Eyal_monsterCard != null && Eyal_zone == "M-3")
			{
				cardMenuClicked(Eyal_monsterCard, "Banish FD");
			}		


			Send({"action":"Duel", "play":summoning_play, "card":summoning_card.data("id"), "zone":Eyal_zone});
			
			Send({"action":"Duel", "play":"Move", "card":summoning_card.data("id"), "zone":zone});
			
			if(Eyal_monsterCard != null && Eyal_zone == "M-3")
			{
				if(Eyal_isFacedown)
				{
					
					Send({"action":"Duel", "play":"Set monster", "card":Eyal_monsterCard.data("id")});
				}
				else
				{
					if(Eyal_isATK)
					{
						Send({"action":"Duel", "play":"SS ATK", "card":Eyal_monsterCard.data("id")});
					}
					else
					{
						Send({"action":"Duel", "play":"SS DEF", "card":Eyal_monsterCard.data("id")});
					}
				}
			}
			
			return;
		
		}
		
		if(zone.startsWith("S-") && Eyal_RealImpermColumns[realZone - 1] && (summoning_play == "Activate ST" || summoning_play == "To ST"))
		{
			hideSelectZones();
			
			if (automatic && $('#duelmessage').is(":visible")) {
				hideDuelMessage();
			}
			else if (automatic) {
				$('#duel .cancel_btn').hide();
			}



			removeMenuData();
			
			window.Eyal_summoning_zone = zone;
			
			getConfirmation2("Imperm Column Detected!!!", "The extension believes this is an imperm column. Continue with the misplay?", Eyal_ImpermMisplayYes);
			
			return;
		}
		
		hideSelectZones();
		Send({"action":"Duel", "play":summoning_play, "card":summoning_card.data("id"), "zone":zone});


		if (automatic && $('#duelmessage').is(":visible")) {
			hideDuelMessage();
		}
		else if (automatic) {
			$('#duel .cancel_btn').hide();
		}



		removeMenuData();
	}
	
	window.Eyal_ImpermMisplayYes = function()
	{
		Send({"action":"Duel", "play":summoning_play, "card":summoning_card.data("id"), "zone":Eyal_summoning_zone});
	}
	window.Eyal_excavateYes = function()
	{	
		if(typeof window.Eyal_excavateAmount === "undefined")
			return;
		
		let num = window.Eyal_excavateAmount;
		
		if(num > 9)
			return;
		
		if(num > player1.main_arr.length)
			return;
		
		for(let abc=0;abc < num;abc++)
		{
			let Eyal_card = player1.main_arr[abc];
			cardMenuClicked(Eyal_card, "Banish");

			window.Eyal_waitingForAction = true;
			window.Eyal_excavatedArr.push(Eyal_card);
		}
	}
	window.Eyal_DeclareVictoryYes = function() {
		let slots = [];
		for(let abc=0;abc < 5;abc++)
		{
			slots[abc] = false;
		}
		
		for(let abc = 0;abc < player1.all_cards_arr.length;abc++)
		{
			if(isMonster(player1, player1.all_cards_arr[abc]) || isST(player1, player1.all_cards_arr[abc]) || (player1.fieldSpell && player1.fieldSpell[0] == player1.all_cards_arr[abc][0]))
			{
				if(player1.all_cards_arr[abc].data("face_down"))
					cardMenuClicked(player1.all_cards_arr[abc], "Banish FD");
				
				else
					cardMenuClicked(player1.all_cards_arr[abc], "To GY");
			}
		}
		
		for(let abc = 0;abc < player2.all_cards_arr.length;abc++)
		{
			if(isMonster(player2, player2.all_cards_arr[abc]) || isST(player2, player2.all_cards_arr[abc]) || (player1.fieldSpell && player1.fieldSpell[0] == player2.all_cards_arr[abc][0]))
			{
				if(player2.all_cards_arr[abc].data("face_down"))
					cardMenuClicked(player2.all_cards_arr[abc], "Banish FD");
				
				else
					cardMenuClicked(player2.all_cards_arr[abc], "To GY");
			}
		}
		
		let Eyal_arr = [];
		
		for(let abc=0;abc < player1.hand_arr.length;abc++)
		{
			if(player1.hand_arr[abc].data("cardfront").data("name") == "Exodia the Forbidden One")
			{
				Eyal_arr.push(player1.hand_arr[abc]);
				Send({"action":"Duel", "play":"Activate Field Spell", "card":player1.hand_arr[abc].data("id"), "zone":"F-1"});
			}
			
			if(player1.hand_arr[abc].data("cardfront").data("name") == "Right Arm of the Forbidden One")
			{
				Eyal_arr.push(player1.hand_arr[abc]);
				Send({"action":"Duel", "play":"Normal Summon", "card":player1.hand_arr[abc].data("id"), "zone":"M-2"});
			}
			
			if(player1.hand_arr[abc].data("cardfront").data("name") == "Left Arm of the Forbidden One")
			{
				Eyal_arr.push(player1.hand_arr[abc]);
				Send({"action":"Duel", "play":"Normal Summon", "card":player1.hand_arr[abc].data("id"), "zone":"M-4"});
			}
			
			if(player1.hand_arr[abc].data("cardfront").data("name") == "Right Leg of the Forbidden One")
			{
				Eyal_arr.push(player1.hand_arr[abc]);
				Send({"action":"Duel", "play":"To ST", "card":player1.hand_arr[abc].data("id"), "zone":"S-2"});
			}
			
			if(player1.hand_arr[abc].data("cardfront").data("name") == "Left Leg of the Forbidden One")
			{
				Eyal_arr.push(player1.hand_arr[abc]);
				Send({"action":"Duel", "play":"To ST", "card":player1.hand_arr[abc].data("id"), "zone":"S-4"});
			}
		}
		
		if(turn_player == player1)
		{
			if(currentPhase != "BP")
			{
				currentPhase = "BP";
				Send({"action":"Duel", "play":"Enter BP"});
			}
			
			for(let abc=0;abc < Eyal_arr.length;abc++)
			{
				Send({"action":"Duel", "play":"Attack directly", "card":Eyal_arr[abc].data("id")});
			}
		}
	}
	
	window.Eyal_XyzMaterialToFrontYes = function() {
		if(typeof window.Eyal_XyzMaterial === "undefined")
			return;
		
		else if(typeof window.Eyal_XyzMaterial.data === "undefined")
			return;
		
		else if(typeof window.Eyal_XyzMaterial.data("isXyzMaterial") === "undefined")
			return;
		
		Eyal_XyzMaterialToFront(window.Eyal_XyzMaterial);
	}
	
	window.Eyal_XyzMaterialToFront = function(card)
    {
		let newXyz = card;
		let zone = null;
		let oldXyz = null;
		let xyzArr = [];
		
		Eyal_CheckPlayerZones();
		
        for(let abc=0;abc < window.Eyal_Player1MonsterZones.length;abc++)
        {
            let found = false;
			let cardToTest = window.Eyal_Player1MonsterZones[abc].card;
			let zoneToTest = window.Eyal_Player1MonsterZones[abc].zoneName;
			
			if(cardToTest == null)
				continue;
			
            for(let def=0;def < cardToTest.data("xyz_arr").length;def++)
			{
				if(cardToTest.data("xyz_arr")[def].data("id") == card.data("id"))
				{
					oldXyz = cardToTest;
					zone = zoneToTest;
				}
			}
		}
		
		if(oldXyz == null)
		{
			return;
		}
		
		let inATK = false;
			
		if(oldXyz.data("inATK"))
			inATK = true;
		
		
		xyzArr = [].concat(oldXyz.data("xyz_arr"));
		
		Send({"action":"Duel", "play":"To GY", "card":oldXyz.data("id")});
		
		
		
		if(inATK)
			Send({"action":"Duel", "play":"SS ATK", "card":newXyz.data("id"), "zone":zone});

		else
			Send({"action":"Duel", "play":"SS DEF", "card":newXyz.data("id"), "zone":zone});
		
		
		Send({"action":"Duel", "play":"Attach", "start_card":oldXyz.data("id"), "end_card":newXyz.data("id")});
		
		for(let abc=0;abc < xyzArr.length;abc++)
		{
			Send({"action":"Duel", "play":"Attach", "start_card":xyzArr[abc].data("id"), "end_card":newXyz.data("id")});
		}
	}
	
	window.Eyal_BanishEverythingEDYes = function()
	{
		for(let abc=0;abc < player1.extra_arr.length;abc++)
		{
			cardMenuClicked(player1.extra_arr[abc], "Banish");
		}	
	}
	
	window.Eyal_UnbanishEverythingEDYes = function()
	{
		for(let abc=0;abc < player1.banished_arr.length;abc++)
		{
			let card = player1.banished_arr[abc];
			
			if(!card.data("face_down") && isExtraDeckCard(card))
			{
				cardMenuClicked(card, "To ED");
			}
		}	
	}
	window.Eyal_MagicalMerchantYes = function()
	{
		if(window.Eyal_excavatedArr.length > 0)
			return;
		
		// Only make it true if we're making an action prior to the interval starting.
		window.Eyal_waitingForAction = false;
		
		let merchantInterval = setInterval(function ()
		{
			
			if(player1.main_arr.length == 0)
			{
				clearInterval(merchantInterval)
				window.Eyal_excavatedArr = [];
				
				//TweenMax.globalTimeScale(1);
				return;
			}
			
			if(actionsQueue.length <= 0 && !window.Eyal_waitingForAction)
			{
				if(window.Eyal_excavatedArr.length == 0)
				{
					let Eyal_card = player1.main_arr[0];
					cardMenuClicked(Eyal_card, "Banish");
					window.Eyal_waitingForAction = true;
					window.Eyal_excavatedArr.push(Eyal_card);
				}
				else
				{
					for(let abc=0;abc < window.Eyal_excavatedArr.length;abc++)
					{
						let Eyal_card = window.Eyal_excavatedArr[abc];
						
						if(Eyal_card.data("cardfront").data("card_type") == "Monster")
						{
							cardMenuClicked(Eyal_card, "To GY");
						}
						else
						{
							cardMenuClicked(Eyal_card, "To hand");
							
							// Break the interval when it ends.
							clearInterval(merchantInterval);
						}
					}
					
					window.Eyal_excavatedArr = [];
					window.Eyal_waitingForAction = false;
				}
			}
		}, 50);
	}
	window.startChooseMonsterZones = function() {
		console.log('startChooseMonsterZones');
		if (player1.m1 == null) {
			$('#m1_select').show();
			m1_select.play();
		}
		if (player1.m2 == null) {
			$('#m2_select').show();
			m2_select.play();
		}
		if (player1.m3 == null) {
			$('#m3_select').show();
			m3_select.play();
		}
		if (!duel_links && !speed && !rush) {
			if (player1.m4 == null) {
				$('#m4_select').show();
				m4_select.play();
			}
			if (player1.m5 == null) {
				$('#m5_select').show();
				m5_select.play();
			}
		}
		/*
		if(summoning_play == "SS ATK" || summoning_play == "SS DEF")
		{
			let effect = summoning_card.data("cardfront").data("effect")
			let effectV2 = effect
			
			effect = effect.replaceAll("(", "");
			effect = effect.replaceAll(")", "");
			effect = effect.replaceAll("opponent's side of the field", "opponent's field");
			effect = effect.replaceAll("to your opponent's field", "to the opponent's field");
			
			effectV2 = effectV2.replaceAll("(", "");
			effectV2 = effectV2.replaceAll(")", "");
			effectV2 = effectV2.replaceAll("opponent's side of the field", "opponent's field");
			effectV2 = effectV2.replaceAll("to your opponent's field", "to the opponent's field");

			console.log(effect);
			if (effect.indexOf("You can Special Summon this card from your hand to the opponent's field") >= 0 || effectV2.indexOf("Special Summoned from your hand to the opponent's field") >= 0)
			{
				startChooseMonsterZones2()
			}
		}
		*/
	}
	
	if($("#life_txt").length > 0)
		$("#life_txt").off("input")
	
	window.Eyal_ExprEval = function(str, ecks, why, zed)
	{
		const mexp = new Mexp()

		let lastMulti = null;
		
		// Make sure it's not the user who made the blunder.
		for(let abc=str.length;abc >= 0;abc--)
		{
			if(lastMulti == null)
			{
				if(str[abc] == "*")
					lastMulti = abc;
			}
			else
			{
				// It's a number
				if(!isNaN(parseInt(str[abc])))
				{
					lastMulti = null;
				}
				// Not a number & not a space = it's bad news...
				else if(str[abc] != " " && str[abc] != "x" && str[abc] != "y" && str[abc] != "z")
				{
					return mexp.eval(str);
				}
			}
		}
		
		if(typeof ecks !== "undefined")
			str = str.replaceAll("x", `*${ecks}`);
		
		if(typeof why !== "undefined")
			str = str.replaceAll("y", `*${why}`);
		
		if(typeof zed !== "undefined")
			str = str.replaceAll("z", `*${zed}`);

		lastMulti = null;

		let newStr = [];
		let removeSlots = [];

		for(let abc=str.length-1;abc >= 0;abc--)
		{
			newStr.push(str[abc]);
			
			if(lastMulti == null)
			{
				if(str[abc] == "*")
					lastMulti = abc;
			}
			else
			{
				// It's a number
				if(!isNaN(parseInt(str[abc])))
				{
					lastMulti = null;
				}
				// Not a number & not a space = it's bad news...
				else if(str[abc] != " ")
				{
					removeSlots.push(lastMulti);
					lastMulti = null;
				}
			}
		}

		newStr.reverse()

		// No need to reverse, as it already sorts highest to lowest to prevent messing with array size as we remove indexes.
		for(let abc=0;abc < removeSlots.length;abc++)
		{
			newStr.splice(removeSlots[abc], 1);
		}

		if(newStr[0] == "*")
			newStr.splice(0, 1);

		let finalStr = newStr.join("")
	
		return mexp.eval(finalStr);
	}
	window.lifeEnterHandler = function() 
	{
		if ($('#life_txt').val() == "") {
			return;
		}

		
		var amount = Eyal_ExprEval($('#life_txt').val());
		
		if ($('#plus_btn').is(":visible") == false) {
			amount = amount * -1
		}
		
		$('#life_txt').val("");
		if (amount == 0)
		{
			return;
		}
		
		Send({"action":"Duel", "play":"Life points", "amount":amount});
	}
	/*$("#life_txt").on("input")
	{
		if(
	}*/

	window.showMenu = function(card, dp, originalCard) {
		if (!dp) {
			menu_reason = "Menu has no data";
			return;
		}
		
		if (typeof originalCard === "undefined")
		{
			originalCard = card;	
		}

		let isED = false;
		let wasAdded = false;
		
		for(let abc=0;abc < dp.length;abc++)
		{
			if(dp[abc].data == "View ED")
				isED = true;
			
			if(dp[abc].data == "Banish random ED card FD")
				wasAdded = true;
			
			if(dp[abc].label == "Banish random ED Card")
				dp[abc].label = "Banish random";
		}
		
		if(isED && !wasAdded && Eyal_unlockCardMechanics)
		{
			if (countFaceDownExtraDeckCards(player1) >= 1)
				dp.push({label:"Banish random FD",data:"Banish random ED card FD"});
			
			if(Eyal_findCardReal(["Banquet of Millions"]))
			{
				dp.push({label:"Banish Everything", data:"Eyal Banish ED Everything"});
				dp.push({label:"Unbanish Everything", data:"Eyal Unbanish ED Everything"});
			}
		}
		
		dp.reverse();
		if (TweenMax.isTweening(originalCard)) {
			menu_reason = "Card is currently tweening";
			return;
		}
		if (menu_card && menu_card[0] == originalCard[0]) {
			menu_reason = "Card is menu_card 2";
			return;
		}
		if ($('#overlay').is(":visible")) {
			menu_reason = "overlay is visible";
			return;
		}
		if (!$('#cig1_txt').is(":visible")) {
			menu_reason = "Number of cards in GY is invisible";
			return;
		}
		if (menu_card) {
			if (getRotation(menu_card[0]) == -90 && inBounds(menu)) {
				menu_reason = "Card is rotated";
				return;
			}
			removeCardMenu();
		}
		if (isInYourHand(player1, originalCard)) {
			card.css("top", originalCard.data("controller").handY - 30);
			$('#blue_target').hide();
		}
		if (getScale(originalCard[0]) < 0.2) {
			for (var i = 0; i < dp.length; i++) {
				switch (dp[i].label) {
					case "S. Summon ATK":
						dp[i].label = "SS ATK";
						break;
					case "S. Summon DEF":
						dp[i].label = "SS DEF";
						break;
					case "To Graveyard":
						dp[i].label = "To Grave";
						break;
					case "To Top of Deck":
						dp[i].label = "To T. Deck";
						break;
					case "To Bottom of Deck":
						dp[i].label = "To B. Deck";
						break;
				}
			}
		}
		menu_card = originalCard;
		menu.find('#card_menu_content').html("");
		var scale = getScale(originalCard[0]);
		if (scale < 0) {
			scale = -scale;
		}
		var width = 400;
		var height = 580;
		var rotation = getRotation(originalCard[0]);
		if (rotation == 180) {
			rotation = 0;
		}
		if (rotation != 0) {
			width = 580;
			height = 400;
		}
		menu.css("width", width * scale);
		if (width * scale > 100) {
			console.log('menu is too wide');
			return;
		}
		var h = 0;
		var menu_height = 14;
		for (var i = 0; i < dp.length ;i++) {
			if (automatic && dp[i].label == "Set ST") {
				dp[i].label = "Set";
			}
			var option = $('<div class="card_menu_btn"><div class="image"><img src="' + IMAGES_START + 'svg/card_menu_btn_up.svg" /></div><span class="card_menu_txt">' + dp[i].label + '</span></div>');
			option.data("data", dp[i].data);
			option.click(cardMenuClickE);
			option.css("width", width * scale);
			option.css("height", menu_height);
			option.find('.image').css("width", width);
			if (menu.hasClass("unloaded")) {
				option.find('.image img')[0].onload = function(){
					menu.removeClass("unloaded");
				};
			}
			var optionScaleY = 0.265;
			if (rotation != 0) {
				optionScaleY = 0.18;
			}
			TweenMax.to(option.find('.image'), 0, {scaleY:optionScaleY, scaleX:scale});
			$('body').append(option);
			var num = 14;
			if (option.find('.card_menu_txt')[0].scrollHeight > 15) {
				h += option.find('.card_menu_txt')[0].scrollHeight / num * menu_height;
				option.css("height", option.find('.card_menu_txt')[0].scrollHeight / num * menu_height);
				TweenMax.to(option.find('.image'), 0, {scaleY:optionScaleY * option.find('.card_menu_txt')[0].scrollHeight / num, scaleX:scale});
			}
			else {
				h += menu_height;
				option.find('.card_menu_txt').css("white-space", "nowrap");
			}
			addButton(option);
			switch (dp[i].label) {
				case "Activate ":
				case "Flip Deck":
				case "Turn Top Card FU":
				case "Banish 10 Cards FD":
				case "Banish 3 Cards":
				case "Banish 3 ED Cards FD":
				case "Banish 6 ED Cards FD":
				case "Banish random ED Card":
				case "Banish random":
				case "Banish random FD":
				case "Banish random ED Card FD":
				case "To Top of Deck face-up":
				case "To Opponent's Deck":
				case "Face-Down":
				case "Mill difference":
				case "Activate to other side":
				case "Set to your side":
				case "Set to other side":
				case "Resolve Effect":
				case "Look at cards":
				case "Set to Monster Zone":
				case "Draw Spell/Trap":
				case "Draw Spellcaster":
				case "Choose":
				case "To Opponent's Hand":
				case "Look at opponent cards":
				case "Card of Fate Effect":
				case "Banish Random Card":
				case "Banish 8 Cards FD":
				case "Stay Revealed":
				case "Stop Revealing":
				case "Check Small World":
				case "Check Options":
				
				// Eyal282 here
				case "Declare Victory":
				case "Banish ED Card FD":
				case "To Main Deck FU":
				case "Banish first 3 ED":
				case "Banish first 5 ED":
				case "Banish first 6 ED":
				case "Banish entire ED":
				case "To Opponent's Deck":
				case "To Opponent's Deck FU":
				case "Swap Deck with GY":
				case "Pay Half LP":
				case "Replace Hand":
				case "Banish Everything":
				case "Unbanish Everything":
				case "Summon 4 Gates":
				case "Resolve GY Effect":
				case "View materials":
				
					option.find('img').attr("src", IMAGES_START + "svg/card_menu_btn_up2.svg");
					break;
			}
			if (dp[i].label.indexOf("Mill ") >= 0) {
				option.find('img').attr("src", IMAGES_START + "svg/card_menu_btn_up2.svg");
			}
			
			// Eyal282 here
			if (dp[i].label.indexOf("Excavate Top ") >= 0) {
				option.find('img').attr("src", IMAGES_START + "svg/card_menu_btn_up2.svg");
			}
			
			// Eyal282 here
			if (dp[i].data == "Eyal To ED FU")
				option.find('img').attr("src", IMAGES_START + "svg/card_menu_btn_up2.svg");
			
			menu.find('#card_menu_content').append(option);
		}
		$('#viewing').append(menu);
		
		
		
		
		
		menu.css("height", h);
		var left = parseInt(originalCard.css("left")) - scale * width / 2;
		var top = parseInt(originalCard.css("top")) - height * scale / 2 - h;
		if (menu_card.parent()[0] == $('#view > .content')[0]) {
			top += 15 + parseInt($("#view").css("top")) + 32 - $('#view > .content').scrollTop();
			left += parseInt($("#view").css("left")) + 5;
		}
		var startY = top + menu[0].scrollHeight;
		if (menu[0].scrollHeight > parseInt(originalCard.css("height")) * scale) {
			startY = top + parseInt(originalCard.css("height")) * scale;
		}
		//menu.css("top", top);
		menu.css("top", top + 1); // helps prevent unwanted menuOutE events
		menu.data("top", top + 1);
		menu.css("left", left);
		TweenMax.set(menu, {"scaleY":1});
		//TweenMax.set(menu, {"scaleY":isMonster(player1, menu_card) ? 2 : 2.5});
		TweenMax.fromTo(menu.find('#card_menu_content'), 0.03 * dp.length, {"top":h}, {"top":0, ease:Linear.easeNone, onComplete:function(){
			var scaleY = 1;
			if (menu[0].getBoundingClientRect().y < -marginTop) {
				scaleY = (menu[0].scrollHeight + menu[0].getBoundingClientRect().y) / menu[0].scrollHeight;
				menu.css("top", top - menu[0].getBoundingClientRect().y);
				TweenMax.set(menu, {"scaleY":scaleY});
			}
		}});
		
		/*if (mobile) {
			var sel = $('<select></select>');
			for (var i = 0; i < dp.length ;i++) {
				sel.append('<option>' + dp[i].label + '</option>');
			}
			sel.insertAfter(menu);
		}*/
	}


	if(typeof window.Eyal_originalDuelResponse === "undefined" && typeof window.duelResponse !== "undefined")
	{
		Function.prototype.clone = function()
		{
			var that = this;
			var temp = function temporary() { return that.apply(this, arguments); };
			for(var key in this) {
				if (this.hasOwnProperty(key)) {
					temp[key] = this[key];
				}
			}
			return temp;
		};
		
		window.Eyal_originalDuelResponse = window.duelResponse.clone();
	}
	
	window.duelResponse = function(data)
	{
		if(!data.fake)
			Eyal_originalDuelResponse(data);
		
		switch(data.play)
		{
			case "Start turn":
			{
				let players = [];
				players.push(player1);
				players.push(player2);
				
				if(tag_duel)
				{
					players.push(player3);
					players.push(player4);
				}
				
				for(let i=0;i < players.length;i++)
				{
					for(let abc=0;abc < players[i].all_cards_arr.length;abc++)
					{
						let card = players[i].all_cards_arr[abc];
						
						if(card && !isNaN(card.data("negations")) && card.data("negations") > 0)
						{
							card.data("negations", ~~card.data("negations") - 1);
						}
					}
				}
				
				updateNegates();
			}
			case "Duel message":
				if (duelist && data.username == username)
				{
					
					// Eyal282, check if this condition we're in prevents an opponent from being able to search for us.
					
					// if the index of a string is 0, that string starts the message.
					
					let Eyal_message = data.message;
					
					if(Eyal_messageStartsWith(Eyal_message, "/snipe"))
					{
						let opponentArr = [];
						let opponentHand = player1.opponent.hand_arr.slice();
						let opponentST = [];
						let opponentMonsters = [];
						
						for(let abc=1;abc <= 5;abc++)
						{
							if(player1.opponent["m" + abc] != null && player1.opponent["m" + abc].data("face_down"))
								opponentMonsters.push(player1.opponent["m" + abc])
						}
						for(let abc=1;abc <= 5;abc++)
						{
							if(player1.opponent["s" + abc] != null && player1.opponent["s" + abc].data("face_down"))
								opponentST.push(player1.opponent["s" + abc])
						}
						
						opponentArr.push(opponentHand)
						opponentArr.push(opponentST)
						opponentArr.push(opponentMonsters)
						
						Eyal_snipeByArray(opponentArr);
						
						return true;
						
					}
					else if(!Eyal_messageStartsWith(Eyal_message, "/banish") && (Eyal_messageStartsWith(Eyal_message, "/search") || Eyal_messageStartsWith(Eyal_message, "/send") || Eyal_messageStartsWith(Eyal_message, "/ban") || Eyal_messageStartsWith(Eyal_message, "/atk") || Eyal_messageStartsWith(Eyal_message, "/def") || Eyal_messageStartsWith(Eyal_message, "/st") || Eyal_messageStartsWith(Eyal_message, "/pend")))
					{
						let msg = data.message;
						
						let cardClickAction = "To hand";
						let commandName = "/search";
					
						if(Eyal_messageStartsWith(Eyal_message, "/search"))
						{
							msg = msg.substring(7);
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
						}
						
						
						else if(Eyal_messageStartsWith(Eyal_message, "/send"))
						{
							msg = msg.substring(5);
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "To GY";
							commandName = "/send";
						}
						
						else if(Eyal_messageStartsWith(Eyal_message, "/ban"))
						{
							msg = msg.substring(4);
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "Banish";
							commandName = "/ban";
						}
						
						else if(Eyal_messageStartsWith(Eyal_message, "/atk"))
						{
							msg = msg.substring(4);
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "SS ATK";
							commandName = "/atk";
						}
						
						else if(Eyal_messageStartsWith(Eyal_message, "/def"))
						{
							msg = msg.substring(4);
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "SS DEF";
							commandName = "/def";
						}
						
						else if(Eyal_messageStartsWith(Eyal_message, "/st"))
						{
							msg = msg.substring(3);
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "To ST";
							commandName = "/st";
						}
						
						else if(Eyal_messageStartsWith(Eyal_message, "/pend"))
						{
							msg = msg.substring(5);
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "Activate Pendulum";
							commandName = "/pend";
						}

						if(msg.length == 0)
						{
							addLine("Usage: " + commandName + " <card name>")
						}
						else if(msg.length <= 3)
						{
							addLine("Error: Use 4+ characters of the name")
						}
						else
						{
							cardMenuClicked(new Card(), "View deck");
							
							
							let searchInterval = setInterval(function () {
								if(viewing == "Deck")
								{
									clearInterval(searchInterval)
									
									let foundNames = [];
									let foundIndex = -1;
									
									for(let abc=0;abc < player1.main_arr.length;abc++)
									{
										// If card click action is Activate Pendulum, only include pendulum monsters.
										if(player1.main_arr[abc].data("cardfront").data("name").toLowerCase().search(msg.toLowerCase()) != -1 && (cardClickAction != "Activate Pendulum" || player1.main_arr[abc].data("cardfront").data("pendulum")))
										{
											if(foundNames.indexOf(player1.main_arr[abc].data("cardfront").data("name")) == -1)
											{
												foundIndex = abc
												foundNames.push(player1.main_arr[abc].data("cardfront").data("name"))
											}
										}
									}
									
									if(foundIndex == -1)
									{
										addLine("Card was not found");
									}
									else if(foundNames.length >= 2 && foundNames.length <= 4)
									{
										addLine("Found multiple name matches:");
										for(let abc=0;abc < foundNames.length;abc++)
										{
											addLine(foundNames[abc].toLowerCase().replace(msg.toLowerCase(), msg.toUpperCase()));
										}
									}
									else if(foundNames.length >= 5)
									{
										addLine("Found 5+ cards with the same name as the search");
									}
									else
									{
										if(cardClickAction == "Activate Pendulum")
										{
											summoning_card = player1.main_arr[foundIndex];
											summoning_play = "Activate ST";
											
											$('#s1_select').show();
											s1_select.play();
											
											$('#s5_select').show();
											s5_select.play();
											
											// Note to self: any cardMenuClicked hides this.
											
											$('#ed_select').show();
											Eyal_ed_select.play();
										}
										else if(cardClickAction != "To ST")
										{
											cardMenuClicked(player1.main_arr[foundIndex], cardClickAction);
										}
										else
										{
											if(player1.main_arr[foundIndex].data("cardfront").data("card_type") == "Spell" && player1.main_arr[foundIndex].data("cardfront").data("type") == "Field")
											{
												cardMenuClicked(player1.main_arr[foundIndex], "Activate Field Spell");
											}
											else
											{
												cardMenuClicked(player1.main_arr[foundIndex], cardClickAction);
											}
										}
									}
								}
							}, 50); 
						}
						
						return true;
					}
				}
				break;
				
			case "Done siding":
				playSound(Decided)
				break;
				
			case "Pick first":
				window.Eyal_TrueDeckArr = [];
				window.Eyal_TrueExtraDeckArr = [];
				window.Eyal_DigString = undefined;
				break;
				
			case "End turn":
				
				let Eyal_list = document.querySelectorAll("div")

				for (let abc = 0; abc < Eyal_list.length; abc++) {
					if (!Eyal_list[abc].id.startsWith("Imperm_Column_Real"))
						continue;

					$(Eyal_list[abc]).remove();
				}
				
				window.Eyal_RealImpermColumns = [false, false, false, false, false];
				
				break;
		}
		
		return false;
	}
	
	window.activateFieldSpell = function(player, data)
	{
		var card = getFieldCard(player, data);
		if (!card) {
			card = removeCard(player, data);
			if (!card) {
				card = removeCard(player.opponent, data);
			}
		}
		card.data("cardfront").reinitialize(data.card);
		card.data("face_down", false);
		player.fieldSpell = card;
		if (tag_duel) {
			player.partner.fieldSpell = card;
		}
		updateController(player, card);
		$('#field').append(card);
		TweenMax.to(card, easeSecondsBanish, {left:player.fieldSpellX, top:player.fieldSpellY, scale:0.1485, rotation:player.rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
			setFieldSpellPic(player, card);
			endAction();
		}});
		playSound(Activate);
		
		checkPlayMDSound(card);
	}
	window.normalSummon = function(player, data) {
		var card = removeFromHand(player, data);
		var points = getNextMonsterZone(player, card, data);
		card.data("inATK", true);
		card.data("inDEF", false);
		card.data("face_down", false);
		$('#field').append(card);
		card.data("cardfront").reinitialize(data.card);
		TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
			endAction();
		}});
		playSound(NormalSummon);
		
		checkPlayMDSound(card);
		
		
	}

	window.specialSummon = function(player, data, points, card, end) {
		if (end !== false) {
			end = true;
		}
		if (!card) {
			card = removeCard(player, data);
		}
		if (!card) {
			card = removeCard(player.opponent, data);
		}
		if (!points) {
			points = getNextMonsterZone(player, card, data);
		}
		var rot = player.rot;
		card.data("cardfront").reinitialize(data.card);
		if (data.play.indexOf("ATK") >= 0 || data.position == "Attack") {
			card.data("inATK", true);
			card.data("inDEF", false);
		}
		else {
			card.data("inATK", false);
			card.data("inDEF", true);
			rot = player.defRot;
		}
		var rotY = ABOUT_ZERO;
		card.data("face_down", false);
		//if (data.position == "Set") { // when is this possible?
		if (data.position == "Set" || data.position == "FD Defense") {
			rotY = 180;
			card.data("face_down", true);
		}
		$('#field').append(card);
		TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
			
			if(viewing)
				updateViewing();
			
			$('#ss_glow').show();
			$('#ss_spiral').show();
			TweenMax.to($('#ss_glow'), 0, {left:points[0], top:points[1]});
			TweenMax.to($('#ss_glow'), 0.7, {scale:6, rotation:-250});
			TweenMax.to($('#ss_glow'), 1, {alpha:0});
			TweenMax.to($('#ss_spiral'), 0, {left:points[0], top:points[1]});
			TweenMax.to($('#ss_spiral'), 0.7, {scale:6, rotation:250});
			TweenMax.to($('#ss_spiral'), 1, {alpha:0, onComplete:function(){
				resetSpecialSummon();
			}});
			playSound(SpecialSummon);
			if (end) {
				endAction();
			}
		}});
		
		checkPlayMDSound(card);
	}

	window.checkPlayMDSound = function(card)
	{
		let isFloodgate = Eyal_IsCardFloodgate(card);
		
		if(!limitedCardsSound)
			return;
		
		else if(Eyal_animationCards.indexOf(card.data("cardfront").data("name")) == -1 && !isFloodgate)
			return;
		
		else if(musicSliderMD == 0.0)
			return;
	
		if(Eyal_getRandomInt(0, 1) == 1)
			Eyal_chaosAnimSound.src = Eyal_darkAnimSound.src;
		
		else
			Eyal_chaosAnimSound.src = Eyal_lightAnimSound.src;
		
		// Time to hear the normal summon sound
		setTimeout(function()
		{
			Eyal_chaosAnimSound.volume = (musicSliderMD / 100.0)
			Eyal_darkAnimSound.volume = (musicSliderMD / 100.0)
			Eyal_lightAnimSound.volume = (musicSliderMD / 100.0)
			Eyal_waterAnimSound.volume = (musicSliderMD / 100.0)
			Eyal_earthAnimSound.volume = (musicSliderMD / 100.0)
			Eyal_fireAnimSound.volume = (musicSliderMD / 100.0)
			Eyal_windAnimSound.volume = (musicSliderMD / 100.0)
			
			let attribute = card.data("cardfront").data("attribute");
			
			if(attribute == "DARK" || attribute == "LIGHT")
			{
				if(card.data("cardfront").data("name").search(/Light and Dark/i) != -1)
					attribute = "CHAOS";
				
				else if(card.data("cardfront").data("effect").search(/1 LIGHT and 1 DARK/i) != -1 || card.data("cardfront").data("effect").search(/1 DARK and 1 LIGHT/i) != -1)
					attribute = "CHAOS";
				
				else if(card.data("cardfront").data("name").search(/Chaos/i) != -1 && (card.data("cardfront").data("effect").search(/LIGHT and\/or DARK/i) != -1 || card.data("cardfront").data("effect").search(/DARK and\/or LIGHT/i) != -1))
					attribute = "CHAOS";
				
			}
			
			if(isFloodgate)
			{
				attribute = "DARK";
			}
			
			playMDSoundByAttribute(attribute);
		}, 500);
	}
	
	
	window.Eyal_playLimitedSound = async function()
	{
		Eyal_drawLimitedSound.currentTime = 0;
		Eyal_drawLimitedSound.play();
		
		await Eyal_delay(0.4);
		
		if(Eyal_drawLimitedSound.paused)
		{
			Eyal_drawLimitedSound.load();
			
			setTimeout(function()
			{
				Eyal_playLimitedSound();
			}, 50);
		}
	}
	window.Eyal_playPogSound = async function()
	{
		
		Eyal_pogSound.currentTime = 0;
		Eyal_pogSound.play();	
		
		await Eyal_delay(0.4);
		
		if(Eyal_pogSound.paused)
		{
			Eyal_pogSound.load();
			
			setTimeout(function()
			{
				Eyal_playPogSound();
			}, 50);
		}
	}
	window.playMDSoundByAttribute = async function(attribute)
	{
		let currentMusicObject;
		
		if(!Eyal_music.paused)
			currentMusicObject = Eyal_music;
		
		else if(!Eyal_brinkMusic.paused)
			currentMusicObject = Eyal_brinkMusic;
		
		if(currentMusicObject != undefined)
		{
			currentMusicObject.pause();
		}
		
		let currentAnimObject = null;
		
		switch(attribute)
		{
			case "CHAOS":
				currentAnimObject = Eyal_chaosAnimSound;
			break;
			case "DARK":
			case "DIVINE":
				currentAnimObject = Eyal_darkAnimSound;
			break;
			case "LIGHT":
				currentAnimObject = Eyal_lightAnimSound;
			break;
			case "WATER":
				currentAnimObject = Eyal_waterAnimSound;
			break;
			case "EARTH":
				currentAnimObject = Eyal_earthAnimSound;
			break;
			case "FIRE":			
				currentAnimObject = Eyal_fireAnimSound;
			break;
			case "WIND":
				currentAnimObject = Eyal_windAnimSound;
			break;
			
			default:
				currentAnimObject = Eyal_darkAnimSound;
			break;
		}
		
		if(currentAnimObject != null)
		{
			currentAnimObject.currentTime = 0;
			currentAnimObject.play();

			await Eyal_delay(0.4);
			
			if(currentAnimObject.paused)
			{
				currentAnimObject.load();
				
				setTimeout(function()
				{
					playMDSoundByAttribute(attribute);
				}, 50);
			}
		}
	}
	
	//rotation WILL affect it
	//rotationY WILL affect it

	window.Eyal_onCardHoverLine = function()
	{
		previewFront($(this).data("card").data("cardfront"));
	}
	window.Eyal_addCardHoverLine = function(str, card)
	{
		if (conceal) {
			return;
		}
		saveDuelVSP();
		let Eyal_txt = $('<b>' + str + '</b><br>')
	
		Eyal_txt.data("card", card)
		Eyal_txt.hover(Eyal_onCardHoverLine);
		$('#duel .cout_txt').append(Eyal_txt);
		restoreDuelVSP();
	}
	window.summonToken = function(player, data)
	{
		awaiting_token = false;
		var tokenNumber = data.token ? data.token : player.token;
		var token = newDuelCard();
		token.data("id", data.id);
		
		// Eyal282 here, ATK & DEF being set allows you to edit stats by pressing them
		token.data("ATK", 0);
		token.data("DEF", 0);
		
		token.data("inATK", false);
		token.data("inDEF", true);
		token.data("face_down", false);
		token.data("controller", player);
		token.data("owner", player);
		//token.addChild(token.data("cardfront"));
		//token.removeChild(token.back_mc);
		//token.data("cardfront").data("doNotLoadImage", true);
		
		//token.data("cardfront").copyCard(player.token.data("cardfront"));
		token.data("cardfront").initializeFromData({
			"name":"Token",
			"treated_as":"Token",
			"effect":"This card can be used as any Token",
			"card_type":"Monster",
			"monster_color":"Token",
			"pic":TOKEN_START + tokenNumber + ".jpg",
			// Eyal282 here, setting ATK / DEF in order to enable stat editting by clicking them
			"atk":'0',
			"def":'0',
		});
		//token.data("cardfront").data("initialized", false); // Tokens DO cause problems otherwise, as seen at 644 in this replay 12889341
		
		
		//token.data("cardfront").setImage();
		player.all_cards_arr.push(token);
		
		var points = getNextMonsterZone(player, token, data);
		TweenMax.to(token, 0, {left:points[0], top:points[1], rotationY:ABOUT_ZERO, rotation:player.defRot, scale:0.1485});
		$('#field').append(token);
		token.onRotate(true);
		playSound(SpecialSummon);
		$('#ss_glow').show();
		$('#ss_spiral').show();
		TweenMax.to($('#ss_glow'), 0, {left:points[0], top:points[1]});
		TweenMax.to($('#ss_glow'), 0.7, {scale:6, rotation:-250});
		TweenMax.to($('#ss_glow'), 1, {alpha:0});
		TweenMax.to($('#ss_spiral'), 0, {left:points[0], top:points[1]});
		TweenMax.to($('#ss_spiral'), 0.7, {scale:6, rotation:250});
		TweenMax.to($('#ss_spiral'), 1, {alpha:0, onComplete:function(){
			resetSpecialSummon();
			if (duelist && player != Player1()) {
				token.css("cursor", "pointer");
				token.click(targetCard);
			}
			endAction();
		}});
	}
	


	window.setMonster = function(player, data)
	{
		var points;
		var card = getFieldCard(player, data);
		if (!card) {
			card = removeCard(player, data);
			points = getNextMonsterZone(player, card, data);
			playSound(FaceDown);
		}
		else {
			points = [parseInt(card.css("left")), parseInt(card.css("top"))];
			playSound(Flip);
		}
		
		if(data.log && !data.log.public_log.startsWith("Set card"))
		{
			if(card.data("controller") != player1)
			{
				Eyal_GenerateImpermColumn(card, points, false);
			}
		}
		
		card.data("inDEF", true);
		card.data("face_down", true);
		card.data("counters", 0);
		card.data("negations", 0);
		card.data("cardfront").reinitialize(data.card);
		$('#field').append(card);
		TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.defRot, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
			//endAction(); // disabling because endAction is also called in updateXyzMaterials
		}});
		updateXyzMaterials(player, card);
	}

	window.setST = function(player, data)
	{
		if (data.zone == "F-1") {
			setFieldSpell(player, data);
			return;
		}
		
		var points;
		var card = getFieldCard(player, data);
		if (!card) {
			card = removeCard(player, data);
			points = getNextSTZone(player, card, data);
			playSound(FaceDown);
		}
		else {
			points = [parseInt(card.css("left")), parseInt(card.css("top"))];
			playSound(Flip);
		}
		
		if(data.log && !data.log.public_log.startsWith("Set card"))
		{
			if(card.data("controller") != player1)
			{
				Eyal_GenerateImpermColumn(card, points, false);
			}
		}
		card.data("face_down", true);
		card.data("cardfront").reinitialize(data.card);
		$('#field').append(card);
		TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
			endAction();
		}});
	}
	
	window.shiftGrave = function(player)
	{
		if (viewing.indexOf("Graveyard") >= 0 || viewing.indexOf("Secret ") >= 0 || viewing == "Xyz materials") {
			viewingE(viewing);
			return;
		}
		var gX = 0;
		var gY = 0;
		for (var i = player.grave_arr.length - 1; i > -1; i--) {
			TweenMax.to(player.grave_arr[i], 0, {rotationY:ABOUT_ZERO});
			player.grave_arr[i].css("left", player.graveX + gX);
			player.grave_arr[i].css("top", player.graveY + gY);
			TweenMax.to(player.grave_arr[i], 0, {scale:0.1485, rotation:player.rot, alpha:1, z:player.grave_arr.length - i});
			gX += player.gX;
			gY += player.gY;
			$('#field').append(player.grave_arr[i]);
			if (i == 0) {
				//player.grave_arr[i].front_mc.autoLoad();
			}
		}
		$('#cig1_txt').text(Player1().grave_arr.length);
		$('#cig2_txt').text(Player2().grave_arr.length);
	}

	window.shiftBanished = function(player)
	{
		if (viewing == "Banished" || viewing == "Opponent's Banished" || viewing.indexOf("Secret ") >= 0 || viewing == "Xyz materials") {
			viewingE(viewing);
			return;
		}
		var bX = 0;
		for (var i = player.banished_arr.length - 1; i > -1; i--) {
			if (!player.banished_arr[i].data("face_down")) {
				TweenMax.to(player.banished_arr[i], 0, {rotationY:ABOUT_ZERO});
			}
			else {
				TweenMax.to(player.banished_arr[i], 0, {rotationY:180 + ABOUT_ZERO});
			}
			player.banished_arr[i].css("left", player.banishedX + bX);
			player.banished_arr[i].css("top", player.banishedY);
			TweenMax.to(player.banished_arr[i], 0, {scale:0.1485, rotation:player.rot, z:player.banished_arr.length - i, alpha:1});
			bX += player.bX;
			$('#field').append(player.banished_arr[i]);
		}
		$('#cib1_txt').text(Player1().banished_arr.length);
		$('#cib2_txt').text(Player2().banished_arr.length);
	}

	window.viewCards = function(arr, data) {
		console.log('viewCards');
		console.time("viewCards");
		
		let content = $('#view > .content')[0];
	
		// Eyal282 here, remove old data from the menu.
		while (content.firstChild)
		{
			content.removeChild(content.lastChild);
		}
		var permission = false;
		if (data) {
			if (data.permission) {
				permission = true;
			}
		}
		var viewingX = 43;
		var viewingY = 56;
		if (menu_card) {
			if (menu_card.parent()[0] == $('#view > .content')[0]) {
				removeCardMenu();
			}
			setTimeout(function(){
				if (TweenMax.isTweening(menu_card)) {
					removeCardMenu();
				}
			}, 5);
		}
		if (!$('#view').is(":visible")) {
			$('#view > .content').addClass("unscrollable");
		}
		for (var i = 0; i < arr.length; i++) {
			if (i == 16) {
				$('#view > .content').removeClass("unscrollable");
			}
			if (data && data.deck && data.deck[i] && viewing != "Secret Deck" && viewing != "Xyz materials") {
				arr[i].data("cardfront").reinitialize(data.deck[i]);
			}
			/*
			// this block is pointless
			else if (viewing.indexOf("Opponent") < 0 && viewing.indexOf("Banished") < 0) {
				if (data && data.deck && data.deck[i]) {
					arr[i].data("cardfront").reinitialize(data.deck[i]);
				}
			}*/
			//if (viewing == "Opponent's Hand") {
			//	TweenMax.to(arr[i], 0, {rotationY:0});
			//}
			
			arr[i].css("left", viewingX);
			arr[i].css("top", viewingY); // Do not set these via tween
			TweenMax.to(arr[i], 0, {rotation:0, scale:0.1485, rotationY:ABOUT_ZERO});
					
			//arr[i].data("cardfront").autoLoad();
			if (duelist && arr[i].data("face_down") && player1.banished_arr.indexOf(arr[i]) >= 0 && !simple) {
				arr[i].showFaceDown();
			}
			// Eyal282 here, added Secret Extra Deck to this statement.
			else if (!permission && arr[i].data("face_down") && viewing != "Extra Deck" && viewing != "Secret Extra Deck") {
				arr[i].showFaceDown();
			}
			else if (viewing.indexOf("Public Extra") >= 0 && (arr[i].data("face_down") || !arr[i].data("cardfront").data("pendulum"))) { // some non pendulum monsters were showing in the public extra deck when they shouldn't have, so i added this
				arr[i].showFaceDown();
			}			
			//else if (!arr[i].data("cardfront").data("initialized")) {
			else if (arr[i].data("cardfront") && !arr[i].data("cardfront").data("initialized")) {
				arr[i].showFaceDown();
			}
			if (viewing == "Deck" || viewing == "Extra Deck") {
				//arr[i].onRotate(); // TweenMax rotationY:0 takes care of this
			}
			else if (permission) {
				arr[i].onRotate();
			}
			if (viewing == "Opponent's Extra Deck") {
				arr[i].data("cardfront").show();
			}
			viewingX += 70.5;
			if (viewingX > 536.5) {
				viewingX = 43;
				viewingY += 97;
			}
			$('#view > .content').append(arr[i]);
		}
		
		
		if (viewing == "Extra Deck" && (duelFormat == "gr" || duelFormat == "gu")) {
			$('#view .expand_btn').show();
		}
		else {
			$('#view .expand_btn').hide();
		}
		
		
		$('#view').show();
		//$('#view > .content').scrollTop(0); // why was this here? it makes it jump back to the top every time you click a card menu button
		console.timeEnd("viewCards");
	}
	window.updateViewing = function()
	{
		switch (viewing) {
			case "Deck":
				let arr = Player1().main_arr;
				let dummy;
				[arr, dummy] = Eyal_CheckDigDeck(arr);
				viewCards(arr);
				break;
				
			case "Secret Deck":
				viewCards(Eyal_GenerateSecretDeck());
				break;
			break;
			case "Graveyard":
			case "Secret GY":
				viewCards(player1.grave_arr);
				break;
			case "Banished":
				viewCards(player1.banished_arr);
				break;
			case "Extra Deck":
				viewCards(Player1().extra_arr);
				break;
			case "Secret Extra Deck":
				if(Eyal_GenerateSecretExtraDeck() == null)
				{
					setTimeout(function() { updateViewing() }, 50);
					return;
				}
				viewCards(Eyal_GenerateSecretExtraDeck());
				break;
			case "Opponent's Public Extra Deck":
				viewCards(Player1().opponent.extra_arr);
				break;
			case "Opponent's Extra Deck":
				viewCards(Player1().opponent.extra_arr);
				break;
			case "Opponent's Deck":
				viewCards(Player1().opponent.main_arr);
				break;
			case "Opponent's Graveyard":
			case "Opponent's Secret GY":
				viewCards(player1.opponent.grave_arr);
				break;
			case "Opponent's Banished":
				viewCards(player1.opponent.banished_arr);
				break;
			case "Opponent's Hand":
				viewCards(Player1().opponent.hand_arr);
				break;
			
			case "Xyz materials":
				if (typeof Eyal_lastXyzCard == undefined)
					return;
				
				viewCards(Eyal_GenerateViewXyzMaterials());
				break;
		}
	}
	
	window.revealAndToExtra = function(player, card, data)
	{	
		$('#duel .cards').append(card);
		TweenMax.set(card, {"z":0});
		card.data("cardfront").reinitialize(data.card);
		TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:ABOUT_ZERO, onComplete:function(){ 
			previewCard(card);
			card.data("face_down", true);
			TweenMax.to(card, easeSeconds, {left:card.data("owner").extraX, top:card.data("owner").extraY, scale:0.1485, rotation:card.data("owner").rot, rotationY:180 + ABOUT_ZERO, delay:0.5, onStart:function(){
				card.data("owner").extra_arr.push(card);
				addExtraChildren(card.data("owner"));
						
				// Eyal282 here.
				updateViewing();
				
			}, onComplete:function(){ 
				shiftExtra(card.data("owner"));
				
				// Eyal282 here.
				updateViewing();
				
				endAction();
			}});
		}});
		playSound(Reveal);
	}

	window.revealAndToExtraFU = function(player, card, data)
	{
		
		$('#duel .cards').append(card);
		TweenMax.set(card, {"z":card.getExtraZ()});
		card.data("cardfront").reinitialize(data.card);
		TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:ABOUT_ZERO, onComplete:function(){ 
			
			previewCard(card);
			card.data("face_down", false);
			TweenMax.to(card, easeSeconds, {left:card.data("owner").extraX, top:card.data("owner").extraY, scale:0.1485, rotation:card.data("owner").rot, rotationY:ABOUT_ZERO, delay:0.5, onStart:function(){
				card.data("owner").extra_arr.unshift(card);
				
				// Eyal282 here.
				updateViewing();
			}, onComplete:function(){ 
				shiftExtra(card.data("owner"));
				
				// Eyal282 here.
				updateViewing();
				
				endAction();
			}});
		}});
		playSound(Reveal);
	}

	window.viewingE = function(str, data)
	{
		if (!str || str == "Paused Game") {
			return;
		}
		
		if(viewing.indexOf("Secret ") >= 0)
			str = viewing;
		
		var arr = [];
				
		Eyal_GenerateTrueAllCardsArray();

		switch (str) {
			case "Deck":
				arr = Player1().main_arr;
				
				[arr, data] = Eyal_CheckDigDeck(arr, data);
				break;
			case "Deck (Picking Card)":
			case "Deck (Picking 2 Cards)":
			case "Deck (Picking 3 Cards)":
				arr = Player1().main_arr;
				break;
			case "Secret Deck":
				arr = Eyal_GenerateSecretDeck();
				break;
			case "Graveyard":
			case "Secret GY":
				arr = player1.grave_arr;
				break;
			case "Banished":
				arr = player1.banished_arr;
				break;
			case "Extra Deck":
				arr = Player1().extra_arr;
				//arr = Player1().extra_arr.concat();
				//arr.push(?);
				break;
			case "Secret Extra Deck":
				arr = Eyal_GenerateSecretExtraDeck();
				break;
			case "Host's Public Extra Deck":
				arr = Player1().extra_arr;
				break;
			case "Opponent's Banished":
				arr = player1.opponent.banished_arr;
				break;
			case "Opponent's Graveyard":
			case "Opponent's Secret GY":
				arr = player1.opponent.grave_arr;
				break;
			case "Opponent's Extra Deck":
			case "Opponent's Public Extra Deck":
				arr = Player1().opponent.extra_arr;
				break;
			case "Opponent's Hand":
				arr = Player1().opponent.hand_arr;
				break;
			case "Opponent's Deck":
				arr = Player1().opponent.main_arr;
				break;
			case "Opponent's Deck (partial)":
			case "Opponent's Deck (Top 3 Cards)":
				for (var i = 0; i < 3; i++) {
					arr.push(Player1().opponent.main_arr[i]);
				}
				break;
			case "Opponent's Deck (Top 5 Cards)":
				for (i = 0; i < 5; i++) {
					arr.push(Player1().opponent.main_arr[i]);
				}
				break;
			case "Opponent's Deck (Top 1 Cards)":
				for (i = 0; i < 1; i++) {
					arr.push(Player1().opponent.main_arr[i]);
				}
				break;
			
			case "Xyz materials":
				if (typeof Eyal_lastXyzCard == undefined)
					return;

				arr = Eyal_GenerateViewXyzMaterials();

				break;
		}
		
		if(!viewing)
		{
			// Eyal282 here, makes deck viewer lower in height to fit new menu options.
			$("#view").css("top", "80px");
			
			// Left is unchanged, this is to revert dragging.
			$("#view").css("left", "219px");
			
			$("#view").css("transform", "scale(1.0, 0.9)");
			// This equals:
			/*
			$("#view .background").css("transform", "scale(1.0, 0.9)")
			$("#view .content.scrollpane").css("transform", "scale(1.0, 0.9)")
			$("#view .title_txt").css("transform", "scale(1.0, 0.9)")
			$("#view .exit_btn").css("transform", "scale(1.0, 0.9)")
			$("#view .expand_btn").css("transform", "scale(1.0, 0.9)")
			*/
			
			// Negate the changes
			$("#view .content.scrollpane").css("transform", "scale(1.0, 1.11111111111)")
			$("#view .title_txt").css("transform", "scale(1.0, 1.11111111111)")
			$("#view .exit_btn").css("transform", "scale(1.0, 1.11111111111)")
			$("#view .expand_btn").css("transform", "scale(1.0, 1.11111111111)")
			
			$("#view .content.scrollpane").css("height", "200px").css("top", "48px")
			$("#view .title_txt").css("top", "5px")
			$("#view .exit_btn").css("top", "5px")
			$("#view .expand_btn").css("top", "5px")
			// Eyal282 ends here.
		}
		viewing = str;
		
		if(viewing.indexOf("Secret ") < 0 && viewing != "Xyz materials")
		{
			$('#view .title_txt').text("Viewing " + str);
			
			if (Duelist()) {
				$('#status1 .status_txt').text("Viewing " + str);
			}
		}

		viewCards(arr, data);
	}
	
	window.Eyal_CheckDigDeck = function(arr, data)
	{
		if(typeof window.Eyal_DigString === "undefined"/*|| typeof data === "undefined" || typeof data.deck === "undefined" || data.deck.length == 0*/)
		{
			return [arr, data];
		}
		
		window.Eyal_DigString = window.Eyal_DigString.toLowerCase();
		
		let digArray = window.Eyal_DigString.split("*");
		
		let finalArr = [];
		let finalData = [].concat(data);
		finalData.deck = [];
		
		for(let abc=0;abc < arr.length;abc++)
		{
			if(data && data.deck && data.deck[abc])
			{
				arr[abc].data("cardfront").reinitialize(data.deck[abc]);
			}
			
			let card = arr[abc];
		
			let cardName = card.data("cardfront").data("name")

			if(typeof cardName === "undefined")
				continue;
			
			let lowerCardName = cardName.toLowerCase();
			
			for(let def=0;def < digArray.length;def++)
			{
				if(lowerCardName.includes(digArray[def]))
				{
					finalArr.push(card);
					
					if(data && data.deck && data.deck[abc])
					{
						finalData.deck.push(data.deck[abc]);
					}
					// Break.
					def = 99999999;
				}	
			}
		}
		
		return [finalArr, finalData];
	}
	window.Eyal_RemoveCardFromTrueDeck = function(card)
	{
		/*
		for(let abc=0;abc < Eyal_TrueDeckArr.length;abc++)
		{
			console.log(Eyal_TrueDeckArr[abc].data("cardfront").data("name"));
		}
		*/
		let deckInterval = setInterval(function ()
		{
			// Be patient because DB is a bit broken regarding deck and cards being instantly removed from deck.
			if(actionsQueue.length > 0)
			{
				return;
			}
			
			// We can go, clear the interval and move.
			clearInterval(deckInterval);
		
			let found = true;
			
			for(let abc=0;abc < Eyal_TrueDeckArr.length;abc++)
			{
				if(Eyal_TrueDeckArr[abc].data("cardfront").data("name") == card.data("cardfront").data("name"))
				{	
					Eyal_TrueDeckArr.splice(abc, 1);
					break;
				}
			}
			
			for(let abc=0;abc < Eyal_TrueDeckArr.length;abc++)
			{
				console.log(Eyal_TrueDeckArr[abc]);
			}
		}, 50);
	}
	
	window.Eyal_AddCardToTrueDeck = function(card)
	{
		/*
		for(let abc=0;abc < Eyal_TrueDeckArr.length;abc++)
		{
			console.log(Eyal_TrueDeckArr[abc].data("cardfront").data("name"));
		}
		*/
		let deckInterval = setInterval(function ()
		{
			// Be patient because DB is a bit broken regarding deck and cards being instantly removed from deck.
			if(actionsQueue.length > 0)
			{
				return;
			}
			
			// We can go, clear the interval and move.
			clearInterval(deckInterval);
			
			let newCard = newDuelCard();
			
			newCard.data("cardfront").copyCard(card.data("cardfront"));
			
			Eyal_TrueDeckArr.push(newCard);
		}, 50);
	}
	window.Eyal_GenerateViewXyzMaterials = function ()
	{
		let cards = [];

		for (let abc = 0; abc < Eyal_lastXyzCard.data("xyz_arr").length; abc++)
		{
			let newCard = newDuelCard();

			newCard.data("cardfront").copyCard(Eyal_lastXyzCard.data("xyz_arr")[abc].data("cardfront"));

			newCard.data("controller", player1);
			newCard.data("owner", player1);
			newCard.data("fake_card", true);

			cards.push(newCard);
		}

		console.log(cards);
		return cards;

	}
	window.Eyal_findSubstitute = function (card, arr)
	{
		
		for (let abc = 0; abc < arr.length; abc++)
		{
			let target_card = arr[abc];

			if (target_card.data("cardfront").data("name") == card.data("cardfront").data("name") && !target_card.data("fake_card"))
			{
				return target_card;
			}
		}
		
		return null;
	}
	window.Eyal_GenerateSecretDeck = function()
	{	
		if(Eyal_TrueDeckArr.length != player1.main_arr.length)
		{
			return null;
		}
		
		return Eyal_TrueDeckArr;
	}
	window.Eyal_GenerateSecretExtraDeck = function()
	{
		let cards = [];
		
		Eyal_CheckPlayerZones(true);
		

		let fieldCards = [];
		
		for(let abc=0;abc < Eyal_Player1Field.length;abc++)
		{
			fieldCards.push(Eyal_Player1Field[abc].card);
		}
		
		for(let abc=0;abc < window.Eyal_TrueExtraDeckArr.length;abc++)
		{
			let card = window.Eyal_TrueExtraDeckArr[abc];
			
			
			if(typeof card.data("cardfront") === "undefined")
				continue;
			
			else if(!isExtraDeckCard(card))
				continue;
			
			else if(card.data("controller") != player1)
				continue;
				
			else if(isIn(card, fieldCards) >= 0 || isIn(card, player1.hand_arr) >= 0 || isIn(card, player1.grave_arr) >= 0 || isIn(card, player1.banished_arr) >= 0)
				continue;
			
			cards.push(card);
			
		}
		
		if(cards.length != player1.extra_arr.length)
		{
			return null;
		}
		
		
		return cards;
	}
	window.Eyal_GenerateTrueAllCardsArray = function()
	{
		if(viewing == "Deck")
		{
			
			Eyal_TrueDeckArr = [];
			
			for(let abc=0;abc < player1.main_arr.length;abc++)
			{
				let newCard = newDuelCard();
				
				newCard.data("cardfront").copyCard(player1.main_arr[abc].data("cardfront"));
				
				Eyal_TrueDeckArr.push(newCard);
			}
		}
		if(viewing == "Extra Deck")
		{
			Eyal_TrueExtraDeckArr = [].concat(player1.extra_arr);
		}
		/*
		let fieldCards = [];
		
		for(let abc=0;abc < Eyal_Player1Field.length;abc++)
		{
			fieldCards.push(Eyal_Player1Field[abc].card);
		}
		
		let outsideDeckCards = [].concat(fieldCards, player1.hand_arr, player1.grave_arr, player1.banished_arr, player1.extra_arr);
		
		for(let abc=0;abc < player1.all_cards_arr.length;abc++)
		{
			if(typeof player1.all_cards_arr[abc].data("cardfront").data("effect") === "undefined")
				continue;
		
			if(isIn(player1.all_cards_arr[abc], outsideDeckCards) >= 0 || viewing == "Deck")
				Eyal_TrueAllCardsArr.push(player1.all_cards_arr[abc]);
		}
		
		// Remove duplicates. This is only under the assumption we don't push cards that are in deck, unless we're viewing it.
		// Remember not to use m.cardfront.id, only m.id, as cardfront ID is not unique 
		let dummy_arr = [];
		dummy_arr = [...new Map(Eyal_TrueAllCardsArr.map((m) => [m.data("id"), m])).values()];
		Eyal_TrueAllCardsArr = [].concat(dummy_arr);
		*/
	}
	window.Eyal_SecretDeckYes = function()
	{	
		if(viewing)
			return;
		
		else if(player1.main_arr.length <= 0)
			return;
		
		else if(Eyal_GenerateSecretDeck() == null)
		{
			Eyal_addColoredLine("FF0000", "ERROR: Could not generate secret Deck, as the extension couldn't log every card in your Deck.");
			return;
		}
		
		viewingE("Secret Deck");
	}
	
	window.Eyal_SecretExtraDeckYes = function()
	{	
		if(viewing)
			return;
		
		else if(player1.extra_arr.length <= 0)
			return;
		
		else if(Eyal_GenerateSecretExtraDeck() == null)
		{
			Eyal_addColoredLine("FF0000", "ERROR: Could not generate secret Extra Deck, as the extension couldn't log every card in your Extra Deck.");
			return;
		}
		
		viewingE("Secret Extra Deck");
	}
	window.Eyal_SecretGYYes = function()
	{
		if(viewing)
			return;
		
		if(findCard(["Question"]))
			return;
		
		else if(player1.grave_arr.length <= 0)
			return;
		
		viewingE("Secret GY");
	}
	
	window.Eyal_SecretOpponentGYYes = function()
	{
		if(viewing)
			return;
		
		if(findCard(["Question"]))
			return;
		
		else if(player1.opponent.grave_arr.length <= 0)
			return;
		
		viewingE("Opponent's Secret GY");
	}
	
	if($("#deck_hidden").length > 0)
	{
		$("#deck_hidden").off("contextmenu");
		$("#deck_hidden").contextmenu(function()
		{
			if(!Eyal_unlockCardMechanics)
				return;
			
			event.preventDefault();
			
			getConfirmation("Secretly check your Deck?", "This will not shuffle it, and order is random.<br>It won't work unless you viewed Deck once this duel.", Eyal_SecretDeckYes, undefined, true);
		});
	}
	
	if($("#extra_hidden").length > 0)
	{
		$("#extra_hidden").off("contextmenu");
		$("#extra_hidden").contextmenu(function()
		{
			if(!Eyal_unlockCardMechanics)
				return;
			
			event.preventDefault();
			
			getConfirmation("Secretly check your Extra Deck?", "It won't work unless you viewed Extra Deck once this duel.", Eyal_SecretExtraDeckYes, undefined, true);
		});
	}
	
	if($("#banished_hidden").length > 0)
	{
		$("#banished_hidden").off("contextmenu");
		$("#banished_hidden").contextmenu(function()
		{
			if(!Eyal_unlockCardMechanics)
				return;
			
			event.preventDefault();
			
			if(window.Eyal_excavatedArr.length > 0)
			{
				getComboBox("Where to return excavated cards?", "", ["Top Deck", "Bottom Deck", "GY", "Banish"], 1, Eyal_UnexcavateYes);
			}
		});
	}
	
	if($("#grave_hidden").length > 0)
	{
		$("#grave_hidden").off("contextmenu");
		$("#grave_hidden").contextmenu(function()
		{
			if(!Eyal_unlockCardMechanics)
				return;
			
			event.preventDefault();
			
			if(window.player1.grave_arr.length > 0)
			{
				getConfirmation("Secretly check your GY?", "",  Eyal_SecretGYYes);
			}
		});
	}
	
	if($("#opp_grave_hidden").length > 0)
	{		
		$("#opp_grave_hidden").off("contextmenu");
		$("#opp_grave_hidden").contextmenu(function()
		{
			if(!Eyal_unlockCardMechanics)
				return;
			
			event.preventDefault();
			
			if(window.player1.opponent.grave_arr.length > 0)
			{
				getConfirmation("Secretly check your opponent's GY?", "",  Eyal_SecretOpponentGYYes);
			}
		});
	}
	
	if(duelist && typeof Eyal_swapCardMenuForPlayer == "function")
	{			
		Eyal_swapCardMenuForPlayer(player1);
		Eyal_swapCardMenuForPlayer(player2);
		
		if(tag_duel)
		{
			Eyal_swapCardMenuForPlayer(player3)
			Eyal_swapCardMenuForPlayer(player4)
		}
	}	

	window.isPendulumAttacker = function(card)
	{
		let effect = card.data("cardfront").data("pendulum_effect")
		
		if(typeof effect === 'undefined')
			return false;
		
		effect = effect.replaceAll("from your ", "")
		effect = effect.replaceAll("while in your ", "")
		
		if(effect.search(/This card can attack Pendulum/i) != -1)
			return true;
		
		return false;
	}
	
	window.isPendulumSneaker = function(card)
	{
		let effect = card.data("cardfront").data("effect")
		
		if(typeof effect === 'undefined')
			return false;
		
		effect = effect.replaceAll("face up", "face-up")
		effect = effect.replaceAll("this monster", "this card")
		effect = effect.replaceAll("to the", "to your")
		
		if(effect.search(/Add this card to your Extra Deck face-up/i) != -1)
			return true;
		
		return false;
	}

	window.isEitherTurnAttacker = function(card)
	{
		let effect = card.data("cardfront").data("effect")
		
		if(typeof effect === 'undefined')
			return false;
		
		if(isMonster(player1, card) && effect.search(/This card can attack during your opponent's battle phase/i) != -1)
			return true;
		
		else if(isST(player1, card) && isPendulumAttacker(card))
			return true;
		
		return false;
	}

	window.Eyal_IsCardKaiju = function(card)
	{
		let effect = card.data("cardfront").data("effect");
		let effectV2 = effect;
		
		effect = effect.replaceAll("(", "");
		effect = effect.replaceAll(")", "");
		effect = effect.replaceAll("opponent's side of the field", "opponent's field");
		effect = effect.replaceAll("to your opponent's field", "to the opponent's field");
		
		effectV2 = effectV2.replaceAll("(", "");
		effectV2 = effectV2.replaceAll(")", "");
		effectV2 = effectV2.replaceAll("opponent's side of the field", "opponent's field");
		effectV2 = effectV2.replaceAll("to your opponent's field", "to the opponent's field");

		// Kaiju || Volcanic Queen & Lava Golem
		if (effect.search(/You can Special Summon this card from your hand to the opponent's field/i) >= 0 || effectV2.search(/Special Summoned from your hand to the opponent's field/i) >= 0)
		{
			return true;
		}
		
		
		// Surgical Striker - H.A.M.P.
		
		
		else if(effect.search(/you can Special Summon this card from your hand to either field/i) >= 0)
		{
			return true;
		}
		
		// Sphere mode.
		else if(effect.search(/Normal Summon to that side of the field/i) >= 0)
		{
			return true;
		}
		
		return false;
	}
	window.Eyal_IsCardAbleToShuffleToOpponentDeck = function(card)
	{
		let effect = card.data("cardfront").data("effect")
		
		if(typeof effect === 'undefined')
			return false;
		
		if(effect.search(/Shuffle this card face-up into your opponent's Deck/i) != -1)
			return true;
		
		
		// What's the distance between Special Summon and Tokens when testing if a card has:
		// "Shuffle x face-up in your opponent's Deck.
		
		let pos = -1;
		
		for(let abc = 0;abc < player1.all_cards_arr.length;abc++)
		{
			let pos = -1;
			
			if(isMonster(player1, player1.all_cards_arr[abc]) || isST(player1, player1.all_cards_arr[abc]) || (player1.fieldSpell && player1.fieldSpell[0] == player1.all_cards_arr[abc][0]))
			{
				if(player1.all_cards_arr[abc].data("face_down"))
					continue;
				
				while(pos < (pos = effect.search(/Shuffle /i, pos+1)))
				{	
				
					let relativePos = effect.search(/face-up in your opponent’s Deck/i, pos+1);
				
				
					if(relativePos == -1)
						continue;
					
					else if(relativePos - pos < 35)
						return true;
				
				}
			}
		}
		
		
		return false;
		
	}
	
	window.Eyal_IsEaterOfMillions = function(card)
	{
		if(card.data("cardfront").data("name") == "Eater of Millions")
			return true;
		
		else if(card.data("cardfront").data("name") == "Eater of Billions")
			return true;
		
		else if(card.data("cardfront").data("name") == "Eater of Trillions")
			return true;

		else if(card.data("cardfront").data("name") == "Eater of Quadrillions")
			return true;
		
		return false;
	}
	
	window.Eyal_CountTokensCardCanSummon = function(card)
	{
		let effect = card.data("cardfront").data("effect");
		
		if(typeof effect === 'undefined')
			return 0;
		
		let pos = -1;
		
		let count = 0;
		// Search the term "Special Summon" as many times as possible in the card.
		
		if(effect.search("ATK") == -1 || effect.search("DEF") == -1 || effect.search("Level") == -1)
			return 0;
			
		while(pos < (pos = effect.search(/Special Summon/i, pos+1)))
		{	
			// What's the distance between Special Summon and Tokens when testing if a card has:
			// "Special Summon x/as many "Card Name Token/s"
			
			let relativePos = effect.search(/ Tokens"/i, pos+1);
			
			if(relativePos == -1)
			{
				relativePos = effect.search(/ Token"/i, pos+1);
			}
			
			
			if(relativePos == -1)
				continue;
			
			
			if(relativePos - pos < 50)
			{
				let relativePosNum2 = effect.search(/DEF /i, relativePos+1);
				
				count = 1;
				
				let relativePosNum3 = effect.search(/ to your opponent/i, relativePosNum2);
				
				if(relativePosNum3 != -1)
				{
					if(relativePosNum3 - relativePosNum2 < 25)
					{
						count = -1;
					}
				}
				
				if(!isNaN(effect[pos+15]))
				{
					count *= effect[pos+15];
					break;
				}
				else if(pos+15 == effect.search(/as many /i, pos+15))
				{
					let player = player1;
					
					let zonesAvailable = 0;
					
					if(count < 0)
						player = player1.opponent;
					
					if (player.m1 == null)
						zonesAvailable++;
					
					if(player.m2 == null)
						zonesAvailable++;
					
					if(player.m3 == null)
						zonesAvailable++;
					
					if (!speed && !rush)
					{
						if (player.m4 == null)
							zonesAvailable++;
						
						if (player.m5 == null)
							zonesAvailable++;
					}
						
					count *= zonesAvailable;
					break;
				}
				
				continue;
			}
		}
		
		return count;
	}
	
	window.Eyal_IsCardExchangeOfSpirit = function(card)
	{
		let effect = card.data("cardfront").data("effect");
	
		if(typeof effect === 'undefined')
			return false;
		
		// /word/gi --> /word/Global ( all occurences ) case insensitive.
		effect = effect.replace(/graveyard/gi, "GY");
		
		if(effect.search(/each player swaps the cards in their GY with the cards in their deck/i) != -1 || effect.search(/swap the cards in your GY with the cards in your deck/i) != -1)
			return true;
		
		return false;
			
			
	}
	
	window.Eyal_IsCardFloodgate = function(card)
	{
		// Replays...
		if(typeof Eyal_MDDetailedCardpool === "undefined")
			return false;
		
		let obj = Eyal_MDDetailedCardpool.find(o => o.id === card.data("cardfront").data("id"));
		
		if(!obj)
			return false;
		
		return obj.floodgate;
	}
	
	window.Eyal_IsCardAbleToPayHalfLP = function(card)
	{
		let effect = card.data("cardfront").data("effect");
		
		if(typeof effect === 'undefined')
			return false;
		
		// /word/gi --> /word/Global ( all occurences ) case insensitive
		effect = effect.replace(/Life Points/gi, "LP");
		effect = effect.replace(/halve your LP/gi, "pay half your LP");
		effect = effect.replace(/pay half of your LP/gi, "pay half your LP");
		
		if(effect.search(/pay half your LP/i) != -1)
			return true;
		
		return false;
			
			
	}
	
	window.Eyal_IsExcavator = function(card)
	{
		let effect = card.data("cardfront").data("effect");

		if(typeof effect === 'undefined')
			return false;
		
		if(effect.search(/excavate the top/i) != -1)
		{
			if(effect.search(/of your opponent's Deck/i) != -1 && (effect.search(/of your opponent's Deck/i) - effect.search(/excavate the top/i) < 15))
				return 0;
			
			// Cynet Storm
			if(effect.search(/your Extra Deck/i) != -1 && effect.search(/excavate the top/i) - effect.search(/your Extra Deck/i) < 10)
				return 0;
			
			// Could be anything, "excavate the top cards of your deck equal to number of rock monsters.
			if(effect.search(/excavate the top cards/i) != -1)
				return 0;
			
			if(effect.search(/excavate the top card /i) != -1)
				return 1;
			
			let pos = effect.search(/excavate the top/i);
			
			// Miss.
			if(isNaN(effect[pos+17]))
				return 0;
			
			return effect[pos+17];
		}
		
		return false;
	}
	
	window.Eyal_CountSpellsInGY = function(player)
	{
		let spellCount = 0;
		
		for(let abc=0;abc < player.grave_arr.length;abc++)
		{
			if(player.grave_arr[abc].data("cardfront").data("card_type") == "Spell")
			{
				spellCount++;
			}
		}
		return spellCount;
	}
	
	window.Eyal_isCardOnField = function(card)
	{
		return isMonster(player1, card) || isST(player1, card) || player1.fieldSpell && card[0] == player1.fieldSpell[0] || player1.pendulumLeft && card[0] == player1.pendulumLeft[0] || player1.pendulumRight && card[0] == player1.pendulumRight[0];
	}
	window.Eyal_messageStartsWith = function(Eyal_str, Eyal_substr)
	{
		
		let Eyal_strToTest = Eyal_str.toLowerCase();
		let Eyal_substrToTest = Eyal_substr.toLowerCase();
		
		if(Eyal_strToTest.indexOf(Eyal_substrToTest) == 0)
			return true;
		
		return false;
	}
	window.Eyal_getRandomInt = function(min, max)
	{
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * ((max + 1) - min) + min);
	}
	window.Eyal_snipeByArray = async function(opponentArr)
	{
		for(let abc=0;abc < opponentArr.length;abc++)
		{
			let arr = opponentArr[abc];
			
			// Can't randomly snipe a single card...
			if(arr.length > 1)
			{
				cardMenuClicked(arr[Eyal_getRandomInt(0, arr.length-1)], "Target");
				
				await Eyal_delay(3)
			}
		}
	}
	window.Eyal_delay = function(n)
	{
		return new Promise(function(resolve){
			setTimeout(resolve,n*1000);
		});
	}
	window.Eyal_ReplaceHandYes = async function()
	{
		if(typeof window.Eyal_reloadCard === "undefined")
			return;
		
		else if(typeof window.Eyal_reloadCard.data === "undefined")
			return;
		
		else if(typeof window.Eyal_reloadCard.data("cardfront") === "undefined")
			return;
		
		cardMenuClicked(Eyal_reloadCard, "To GY");
		
		let count = player1.hand_arr.length;
		
		for(let abc = 0;abc < player1.hand_arr.length;abc++)
		{
			cardMenuClicked(player1.hand_arr[abc], "To T Deck");
		}
		
		cardMenuClicked(new Card(), "Shuffle deck");
		
		for(let abc = 0;abc < count;abc++)
		{
			// As tempting as it is to draw from the main_arr, it doesn't matter which cards you use as long as they are unique,
			// and using main_arr will break if the deck is less than the amount of cards to draw BEFORE SHUFFLING THE HAND TO THE DECK.
			// Using a fake card like new Card() will break and limit itself to 2 as the game thinks the player misclicked.
			cardMenuClicked(player1.all_cards_arr[abc], "Draw card")
		}
	}
	window.Eyal_InvocationGYYes = async function ()
	{
		if (typeof window.Eyal_invocationCard === "undefined")
			return;

		else if (typeof window.Eyal_invocationCard.data === "undefined")
			return;

		else if (typeof window.Eyal_invocationCard.data("cardfront") === "undefined")
			return
		
		let aleister = null;
		
		for(let abc=0;abc < player1.banished_arr.length;abc++)
		{
			if(!player1.banished_arr[abc].data("face_down") && player1.banished_arr[abc].data("cardfront").data("name") == "Aleister the Invoker")
				aleister = player1.banished_arr[abc];
		}
		
		if(aleister == null)
			return;
		
		cardMenuClicked(Eyal_invocationCard, "To T Deck");
		cardMenuClicked(aleister, "To hand");
		cardMenuClicked(new Card(), "Shuffle deck");
	}
	window.Eyal_MillSigmaYes = function ()
	{
		let data = {};
		data.fake = true;
		data.username = username;
		data.play = "Duel message";
		data.message = "/send Mathmech Sigma"; 
		
		duelResponse(data);
	}
	window.Eyal_RunickFountainYes = async function ()
	{
		let limit = 3;
		let cardsFound = [];
		
		for(let abc=0;abc < player1.grave_arr.length;abc++)
		{
			if(player1.grave_arr[abc].data("cardfront").data("card_type") != "Spell" || player1.grave_arr[abc].data("cardfront").data("type") != "Quick-Play")
				continue;
			
			else if(player1.grave_arr[abc].data("cardfront").data("name").search(/Runick/i) == -1)
				continue;
			
			cardsFound.push(player1.grave_arr[abc]);
		}
		
		if(cardsFound.length == 0)
			return;
		
		if(cardsFound.length > limit)
			cardsFound.length = limit;
		
		for(let abc=0;abc < cardsFound.length;abc++)
		{
			cardMenuClicked(cardsFound[abc], "To B Deck");
		}
		
		for(let abc=0;abc < cardsFound.length;abc++)
		{
			cardMenuClicked(cardsFound[abc], "Draw card");
		}
	}
	window.Eyal_NumeronNetworkYes = async function ()
	{
		let Eyal_checked = $('#choose_zones_cb').prop("checked")

		$('#choose_zones_cb').checked(false)

		let cardsToSummon = [];
		for(let abc = 0;abc < player1.extra_arr.length;abc++)
		{
			switch(player1.extra_arr[abc].data("cardfront").data("name"))
			{
				case "Number 1: Numeron Gate Ekam":
				case "Number 2: Numeron Gate Dve":
				case "Number 3: Numeron Gate Trini":
				case "Number 4: Numeron Gate Catvari":
					cardsToSummon.push(player1.extra_arr[abc])
				break;
            }
		}

		// Remove duplicates. This doesn't appear to like using the original variable.
		let dummy_arr = [];
		dummy_arr = [...new Map(cardsToSummon.map((m) => [m.data("cardfront").data("name"), m])).values()];
		cardsToSummon = [].concat(dummy_arr);

		if (cardsToSummon.length < 4)
		{
			$('#choose_zones_cb').checked(Eyal_checked);

			return;
		}

		let originalLinkRight = linkRight;
		let originalLinkLeft = linkLeft;

		let originalCountMonsters = countMonsters(player1);

		for (let abc = 0; abc < cardsToSummon.length; abc++)
		{
			if (originalCountMonsters < 5)
			{
				Send({ "action": "Duel", "play": "SS ATK", "card": cardsToSummon[abc].data("id") });
				originalCountMonsters++;
			}

			else
			{
				if (!originalLinkRight) {
					originalLinkRight = true;
					originalCountMonsters++;
					Send({ "action": "Duel", "play": "SS ATK", "card": cardsToSummon[abc].data("id"), "zone": "Right Extra Monster Zone" });
				}

				else if (!originalLinkLeft)
				{
					originalLinkLeft = true;
					originalCountMonsters++;
					Send({ "action": "Duel", "play": "SS ATK", "card": cardsToSummon[abc].data("id"), "zone": "Left Extra Monster Zone" });
				}
            }
		}

		$('#choose_zones_cb').checked(Eyal_checked);
	}
	window.Eyal_ExchangeSpiritYes = function()
	{
		/*if(player1.banished_arr.length > 0)
		{
			addLine("Please remove every card from banish zone first.")

			return;
		}*/
		
		if(actionsQueue.length > 10)
		{
			errorE("Cannot resolve Exchange of the Spirit while 10+ cards are flying around");
			return;
		}
		
		let Eyal_checked = $('#choose_zones_cb').prop("checked")

		$('#choose_zones_cb').checked(false);
		
		let oldDeck = player1.main_arr.slice();
		let oldGY = player1.grave_arr.slice();
		
		for(let abc=0;abc < oldDeck.length;abc++)
		{
			cardMenuClicked(oldDeck[abc], "Banish");
		}

		for(let abc=0;abc < oldGY.length;abc++)
		{
			cardMenuClicked(oldGY[abc], "To ST");
			
			if(isExtraDeckCard(oldGY[abc]))
				cardMenuClicked(oldGY[abc], "To ED");
			
			else
				cardMenuClicked(oldGY[abc], "To T Deck");
		}

		for(let abc=0;abc < oldDeck.length;abc++)
		{
			cardMenuClicked(oldDeck[abc], "To GY");
		}
		
		cardMenuClicked(new Card(), "Shuffle deck");
	}
	window.Eyal_FiberJarYes = function()
	{
		if (typeof window.Eyal_fiberCard === "undefined")
			return;

		else if (typeof window.Eyal_fiberCard.data === "undefined")
			return;

		else if (typeof window.Eyal_fiberCard.data("cardfront") === "undefined")
			return
		
		let jarInterval = setInterval(function ()
		{
			// Be patient before we exceute, to avoid issues like interacting with already interacted cards.
			if(actionsQueue.length > 0)
			{
				return;
			}
			
			// We can go, clear the interval and move.
			clearInterval(jarInterval);
			
			let Eyal_checked = $('#choose_zones_cb').prop("checked")

			$('#choose_zones_cb').checked(false);
			
			let treatAsGY = null;
			
			if(player1.s3 != null)
			{
				treatAsGY = player1.s3;
				cardMenuClicked(player1.s3, "To GY");
			}
			
			
			for(let abc = 0;abc < player1.all_cards_arr.length;abc++)
			{
				if(isIn(player1.all_cards_arr[abc], player1.extra_arr) >= 0)
					continue;
				
				else if(isIn(player1.all_cards_arr[abc], player1.banished_arr) >= 0)
					continue;
				
				else if(isIn(player1.all_cards_arr[abc], player1.main_arr) >= 0)
					continue;
				
				else if(player1.all_cards_arr[abc] == Eyal_fiberCard)
					continue;
					
					
				if(isIn(player1.all_cards_arr[abc], player1.grave_arr) >= 0 || treatAsGY == player1.all_cards_arr[abc])
				{
					cardMenuClicked(player1.all_cards_arr[abc], "To ST");
					
					if(isExtraDeckCard(player1.all_cards_arr[abc]))
						cardMenuClicked(player1.all_cards_arr[abc], "To ED");
					
					else
						cardMenuClicked(player1.all_cards_arr[abc], "To T Deck");
				}
				else
				{
					if(isExtraDeckCard(player1.all_cards_arr[abc]))
						cardMenuClicked(player1.all_cards_arr[abc], "To ED");
					
					else
						cardMenuClicked(player1.all_cards_arr[abc], "To T Deck");
				}
			}
			
			for(let abc = 0;abc < player2.all_cards_arr.length;abc++)
			{
				// Cannot access opponent's decks, might as well check our own :D
				if(isIn(player2.all_cards_arr[abc], player1.extra_arr) >= 0)
					continue;
				
				else if(isIn(player2.all_cards_arr[abc], player2.banished_arr) >= 0)
					continue;
				
				// Cannot access opponent's decks, might as well check our own :D
				else if(isIn(player2.all_cards_arr[abc], player1.main_arr) >= 0)
					continue;
				
				else if(player2.all_cards_arr[abc] == Eyal_fiberCard)
					continue;
					
				if(isIn(player2.all_cards_arr[abc], player2.grave_arr) >= 0 || treatAsGY == player2.all_cards_arr[abc])
				{
					cardMenuClicked(player2.all_cards_arr[abc], "To ST");
					
					if(isExtraDeckCard(player2.all_cards_arr[abc]))
						cardMenuClicked(player2.all_cards_arr[abc], "To ED");
					
					else
						cardMenuClicked(player2.all_cards_arr[abc], "To T Deck");
				}
				else
				{
					if(isExtraDeckCard(player2.all_cards_arr[abc]))
						cardMenuClicked(player2.all_cards_arr[abc], "To ED");
					
					else
						cardMenuClicked(player2.all_cards_arr[abc], "To T Deck");
				}
			}
			
			cardMenuClicked(Eyal_fiberCard, "To ST");
			cardMenuClicked(Eyal_fiberCard, "To T Deck");
			
			$('#choose_zones_cb').checked(Eyal_checked)
			
			cardMenuClicked(new Card(), "Shuffle deck");
			
			Eyal_addColoredLine("037F51", "Use /draw5 after your opponent shuffles everything.");
		}, 50);
	}
	window.activateST = function(player, data)
	{
		var points;
		var card = getFieldCard(player, data);
		if (!card) {
			card = removeCard(player, data);
			points = getNextSTZone(player, card, data);
		}
		else {
			points = [parseInt(card.css("left")), parseInt(card.css("top"))];
		}
		card.data("cardfront").reinitialize(data.card);
		card.data("inATK", true);
		card.data("inDEF", false);
		card.data("face_down", false);
		$('#field').append(card);
		TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
			endAction();
		}});

		if(potOfSwitch && (card.data("cardfront").data("name") == "Pot of Greed" || (card.data("cardfront").data("name") == "Sky Striker Mobilize - Engage!" && Eyal_CountSpellsInGY(player) >= 3)))
		{	
			let currentMusicObject;
				
			if(!Eyal_music.paused)
				currentMusicObject = Eyal_music;
				
			else if(!Eyal_brinkMusic.paused)
				currentMusicObject = Eyal_brinkMusic;
				
			if(currentMusicObject != undefined)
			{
				currentMusicObject.pause();
			}
				
			Eyal_playPogSound();
		}
		else
		{	
			playSound(Activate);
			
			// For floogates.
			checkPlayMDSound(card);
			
			if(cardLogging && card.data("cardfront").data("card_type") == "Trap" && card.data("cardfront").data("effect").search(/if this card was Set before activation and is on the field at resolution, for the rest of this turn all other Spell\/Trap effects in this column are negated/i) != -1)
			{
				Eyal_GenerateImpermColumn(card, points, true);
			}
		}
		questionE(card);
	}

	// bReal decides if it's an imperm column or an indicator of any spell trap.
	window.Eyal_GenerateImpermColumn = function(card, points, bReal)
	{
		if(!cardLogging)
			return;
		
		if(typeof window.Eyal_counter === "undefined")
			window.Eyal_counter = 0;
		
		Eyal_counter++;


		let impermColumn;
		
		if (bReal && card.data("cardfront").data("card_type") == "Trap" && card.data("cardfront").data("effect").search(/if this card was Set before activation and is on the field at resolution, for the rest of this turn all other Spell\/Trap effects in this column are negated/i) != -1)
		{
			Eyal_CheckPlayerZones();
			
			for(let abc=0;abc < Eyal_STZones.length;abc++)
			{
				if(Eyal_STZones[abc].card == card)
				{
					let realZone = Eyal_STZones[abc].zone - 1;
					
					window.Eyal_RealImpermColumns[realZone] = true;
					break;
				};
			}
			
			impermColumn = $(`<div id="Imperm_Column_Real${Eyal_counter}"></div>`)
		}
		else
		{
			impermColumn = $(`<div id="Imperm_Column${Eyal_counter}"></div>`)
		}
			
			
		impermColumn.css("z-index", 20);				
		impermColumn.css("left", points[0] - 27);
		impermColumn.css("top", points[1] - 10);
		impermColumn.height(55);
		impermColumn.width(55);
		
		let Eyal_src = CARD_IMAGES_START + card.data("cardfront").data("id") + '.jpg';
		let impermColumnImage = $(`<img src="${Eyal_src}"></img>`)
		
		impermColumnImage.attr("id", "Imperm_Column");
		impermColumnImage.css("opacity", 0.75);
		impermColumnImage.height(55);
		impermColumnImage.width(55);
		impermColumn.click(function() {
			let Eyal_list = document.querySelectorAll("div")
	
			for(let abc=0;abc < Eyal_list.length;abc++)
			{
				if(!Eyal_list[abc].id.startsWith("Imperm_Column"))
					continue;

				
				if($(this).attr("className") != $(Eyal_list[abc]).attr("className"))
					continue;
				
				$(Eyal_list[abc]).remove();
			}
		});
		
		impermColumn.append(impermColumnImage);
		
		$("#field").append(impermColumn);
		
		impermColumn.attr("className", card.data("cardfront").data("id"));
		let cardCopy = card.slice(0);
		
		impermColumn.data("card", cardCopy);
		impermColumn.hover(Eyal_onCardHoverLine);
	}
	
	window.Eyal_CheckPlayerZones = function(filterEmpty)
	{
		// Zone name is "normalized" to M-1 instead of M2-1 because you cannot place anything in opponent's S&T zones.
		window.Eyal_Player1MonsterZones = [];
		window.Eyal_Player1STZones = [];
		window.Eyal_Player1Field = [];
		window.Eyal_Player2MonsterZones = [];
		window.Eyal_Player2STZones = [];
		window.Eyal_Player2Field = [];
		window.Eyal_MonsterZones = [];
		window.Eyal_STZones = [];
		window.Eyal_Field = [];
		
		
		Eyal_Player1MonsterZones.push({zone: 1, zoneName: "M-1", card: player1.m1});
		Eyal_Player1MonsterZones.push({zone: 2, zoneName: "M-2", card: player1.m2});
		Eyal_Player1MonsterZones.push({zone: 3, zoneName: "M-3", card: player1.m3});
		Eyal_Player1MonsterZones.push({zone: 4, zoneName: "M-4", card: player1.m4});
		Eyal_Player1MonsterZones.push({zone: 5, zoneName: "M-5", card: player1.m5});
		
		if(linkLeft && linkLeft.data("controller") == player1)
		{
			Eyal_Player1MonsterZones.push({zone: 6, zoneName: "Left Extra Monster Zone", card: linkLeft});
		}
		else
		{
			Eyal_Player1MonsterZones.push({zone: 6, zoneName: "Left Extra Monster Zone", card: undefined});
		}
		
		if(linkRight && linkRight.data("controller") == player1)
		{
			Eyal_Player1MonsterZones.push({zone: 7, zoneName: "Right Extra Monster Zone", card: linkRight});
		}
		else
		{
			Eyal_Player1MonsterZones.push({zone: 7, zoneName: "Right Extra Monster Zone", card: undefined});
		}
		
		Eyal_Player1STZones.push({zone: 1, zoneName: "S-1", card: player1.s1});
		Eyal_Player1STZones.push({zone: 2, zoneName: "S-2", card: player1.s2});
		Eyal_Player1STZones.push({zone: 3, zoneName: "S-3", card: player1.s3});
		Eyal_Player1STZones.push({zone: 4, zoneName: "S-4", card: player1.s4});
		Eyal_Player1STZones.push({zone: 5, zoneName: "S-5", card: player1.s5});
		Eyal_Player1STZones.push({zone: 6, zoneName: "F-1", card: player1.fieldSpell});	
		
		
		
		Eyal_Player2MonsterZones.push({zone: 1, zoneName: "M-1", card: player2.m1});
		Eyal_Player2MonsterZones.push({zone: 2, zoneName: "M-2", card: player2.m2});
		Eyal_Player2MonsterZones.push({zone: 3, zoneName: "M-3", card: player2.m3});
		Eyal_Player2MonsterZones.push({zone: 4, zoneName: "M-4", card: player2.m4});
		Eyal_Player2MonsterZones.push({zone: 5, zoneName: "M-5", card: player2.m5});
						
		if(linkLeft && linkLeft.data("controller") == player2)
		{
			Eyal_Player2MonsterZones.push({zone: 6, zoneName: "Left Extra Monster Zone", card: linkLeft});
		}
		else
		{
			Eyal_Player2MonsterZones.push({zone: 6, zoneName: "Left Extra Monster Zone", card: undefined});
		}
		
		if(linkRight && linkRight.data("controller") == player2)
		{
			Eyal_Player2MonsterZones.push({zone: 7, zoneName: "Right Extra Monster Zone", card: linkRight});
		}
		else
		{
			Eyal_Player2MonsterZones.push({zone: 7, zoneName: "Right Extra Monster Zone", card: undefined});	
		}
		
		
		Eyal_Player2STZones.push({zone: 1, zoneName: "S-1", card: player2.s1});
		Eyal_Player2STZones.push({zone: 2, zoneName: "S-2", card: player2.s2});
		Eyal_Player2STZones.push({zone: 3, zoneName: "S-3", card: player2.s3});
		Eyal_Player2STZones.push({zone: 4, zoneName: "S-4", card: player2.s4});
		Eyal_Player2STZones.push({zone: 5, zoneName: "S-5", card: player2.s5});
		Eyal_Player2STZones.push({zone: 6, zoneName: "F-1", card: player2.fieldSpell});	
		
		Eyal_Player1Field = [].concat(Eyal_Player1MonsterZones, Eyal_Player1STZones);
		Eyal_Player2Field = [].concat(Eyal_Player2MonsterZones, Eyal_Player2STZones);
		
		Eyal_MonsterZones = [].concat(Eyal_Player1MonsterZones, Eyal_Player2MonsterZones);
		Eyal_STZones = [].concat(Eyal_Player1STZones, Eyal_Player2STZones);
		Eyal_Field = [].concat(Eyal_MonsterZones, Eyal_STZones);
		
		if(filterEmpty)
		{
			window.Eyal_Player1MonsterZones = window.Eyal_Player1MonsterZones.filter(function (el) {
				return el.card != null;
			});
			window.Eyal_Player1STZones = window.Eyal_Player1STZones.filter(function (el) {
				return el.card != null;
			});
			window.Eyal_Player1Field = window.Eyal_Player1Field.filter(function (el) {
				return el.card != null;
			});
			window.Eyal_Player2MonsterZones = window.Eyal_Player2MonsterZones.filter(function (el) {
				return el.card != null;
			});
			window.Eyal_Player2STZones = window.Eyal_Player2STZones.filter(function (el) {
				return el.card != null;
			});
			window.Eyal_Player2Field = window.Eyal_Player2Field.filter(function (el) {
				return el.card != null;
			});
			window.Eyal_MonsterZones = window.Eyal_MonsterZones.filter(function (el) {
				return el.card != null;
			});
			window.Eyal_STZones = window.Eyal_STZones.filter(function (el) {
				return el.card != null;
			});
			window.Eyal_Field = window.Eyal_Field.filter(function (el) {
				return el.card != null;
			});
		}
		
	}
	window.Eyal_cardPoolChanged = function()
	{
		for(let abc=0;abc < $('#my_banlists .banlists2 .cardpool_sel')[0].length;abc++)
		{
			if($('#my_banlists .banlists2 .cardpool_sel').val() == $('#my_banlists .banlists2 .cardpool_sel')[0][abc].value)
			{
				$('#my_banlists .banlists2 .cardpool_sel').selectedIndex(abc)
			}
		}
		
		if($('#my_banlists .banlists2 .cardpool_sel').val() == "Eyal_clipboard")
		{
			getConfirmation("Make sure you have a .conf list of EDO Pro in your clipboard.", "Important notes:<br>1. This won't delete existing cards<br>2. Slow PCs will freeze until done.", Eyal_ClipboardBanlistYes, undefined, true);
			$('#my_banlists .banlists2 .cardpool_sel').selectedIndex(0);
		}
	}
	
	window.Eyal_ClipboardBanlistYes = function()
	{
		Eyal_ClipboardBanlistYesAsync();

	}
	
	window.Eyal_ClipboardBanlistYesAsync = async function()
	{
		let str = await navigator.clipboard.readText();
		
		str = str.replaceAll("\r", "");
		let import_arr = str.split("\n");
		
		let cards = [];
			
		if(str.length == 0)
			return;
		
		if ($('#my_banlists .banlists2 .banlist_name_txt').val() == "")
		{
			errorE("Name is blank");
			return;
		}
		
		// Maybe it's changed in the meanwhile...
		let final_name = $('#my_banlists .banlists2 .banlist_name_txt').val()
			
		let optimizing_arr = [];
		
		for(let abc=0;abc < import_arr.length;abc++)
		{
			let passcode = parseInt(import_arr[abc].substring(0, import_arr[abc].indexOf(" ")));
			
			let limit = parseInt(import_arr[abc].substring(import_arr[abc].indexOf(" "), import_arr[abc].length))
			
			// For inventory based cardpools
			if(limit > 3)
				limit = 3;
			
			// Not dealing with anime variants of cards...
			else if(limit == -1)
				continue;
			
			optimizing_arr[passcode] = limit;
		}

		let forbidden_arr = [];
		let limited_arr = [];
		let semi_limited_arr = [];
		let unlimited_arr = [];
		
		for(let abc=0;abc < Cards.length;abc++)
		{
			// Eyal282 here, this property breaks banlists and gives error "One or more cards are no longer available"		
			if(Cards[abc].hidden)
				continue;
			
			let passcode = parseInt(Cards[abc].serial_number);
			
			if(typeof Cards[abc].serial_number !== "undefined" && typeof optimizing_arr[passcode] !== "undefined")
			{
				let limit = optimizing_arr[passcode];
				
				if(limit != 0 && limit != 1 && limit != 2 && limit != 3)
					continue;
				
				switch(parseInt(limit))
				{
					case 0:
						forbidden_arr.push({name: Cards[abc].name, id: Cards[abc].id});
					break;
					
					case 1:
						limited_arr.push({name: Cards[abc].name, id: Cards[abc].id});
					break;
					
					case 2:
						semi_limited_arr.push({name: Cards[abc].name, id: Cards[abc].id});
					break;
					
					case 3:
						unlimited_arr.push({name: Cards[abc].name, id: Cards[abc].id});
					break;
				}
			}
		}
				
		
		// Remove duplicates. This doesn't appear to like using the original variable.
		let dummy_arr = [];
		dummy_arr = [...new Map(forbidden_arr.map((m) => [m.name, m])).values()];
		forbidden_arr = [].concat(dummy_arr);

		// Remove duplicates. This doesn't appear to like using the original variable.
		dummy_arr = [];
		dummy_arr = [...new Map(limited_arr.map((m) => [m.name, m])).values()];
		limited_arr = [].concat(dummy_arr);

		// Remove duplicates. This doesn't appear to like using the original variable.
		dummy_arr = [];
		dummy_arr = [...new Map(semi_limited_arr.map((m) => [m.name, m])).values()];
		semi_limited_arr = [].concat(dummy_arr);
		
		// Remove duplicates. This doesn't appear to like using the original variable.
		dummy_arr = [];
		dummy_arr = [...new Map(unlimited_arr.map((m) => [m.name, m])).values()];
		unlimited_arr = [].concat(dummy_arr);

		for(let abc=0;abc < forbidden_arr.length;abc++)
		{
			forbidden_arr[abc] = forbidden_arr[abc].id;
		}
		for(let abc=0;abc < limited_arr.length;abc++)
		{
			limited_arr[abc] = limited_arr[abc].id;
		}
		
		for(let abc=0;abc < semi_limited_arr.length;abc++)
		{
			semi_limited_arr[abc] = semi_limited_arr[abc].id;
		}
		
		for(let abc=0;abc < unlimited_arr.length;abc++)
		{
			unlimited_arr[abc] = unlimited_arr[abc].id;
		}
		
		Send({
			"action":"Save banlist",
			"id":banlistId,
			"name":final_name,
			"extends":~~$('.banlists2 .extends_sel').val(),
			//"official":~~$('.banlists2 .official_cb').is(":checked"),
			"cardpool":~~$('.banlists2 .cardpool_sel').val(),
			"tcg":~~$('.banlists2 .tcg_cb').is(":checked"),
			"ocg":~~$('.banlists2 .ocg_cb').is(":checked"),
			"min":$('.banlists2 .min_date_cb').is(":checked") ? $('.banlists2 .min_date_dp').val() : null,
			"max":$('.banlists2 .max_date_cb').is(":checked") ? $('.banlists2 .max_date_dp').val() : null,
			"forbidden":{
				"cards":forbidden_arr,
			},
			"limited":{
				"cards":limited_arr,
			},
			"semi_limited":{
				"cards":semi_limited_arr,
			},
			"unlimited":{
				"cards":unlimited_arr,
			}
		});
		showDim();
		unsavedChanges = false;
		
		
		banlistBackE();
	}
	
	window.Eyal_FastAddToBanlist = function(card, div)
	{
		if (div.parents('.banlist_sections').find('.cardfront').filter(function()
		{
			return $(this).data("id") == card.data("id");
		}).length > 0)
		{
			return;
		}
		
		var c = new CardFront();
		c.copyCard(card);
		div.append(c);
		c.setCardName();
		
	}
	window.Eyal_DeckConstructorCardPoolChanged = async function()
	{
		let currentVal = $(`#search .custom_cb option[value='${$("#search .custom_cb").val()}']`)
		
		for(let abc=0;abc < $("#search .combobox.proxy.unselectable").length;abc++)
		{
			if($("#search .combobox.proxy.unselectable")[abc].previousSibling.className != "custom_cb")
				continue;
			
			$("#search .combobox.proxy.unselectable")[abc].innerHTML = $("#search .combobox.proxy.unselectable")[abc].innerHTML.replace($("#search .combobox.proxy.unselectable")[abc].textContent, currentVal.text())
			
		}
		
		if($("#search .custom_cb").val() == "Eyal From Clipboard")
		{
			if(typeof window.Eyal_old_cards === "undefined")
			{
				window.Eyal_old_cards = [].concat(Cards);
			}
			
			Cards.length = 0;
			
			let str = await navigator.clipboard.readText();
			
			if(str.length == 0)
				return;
			
			let import_arr = str.split("\n");
				
			let cards = [];
			
			let optimizing_arr = [];
			
			for(let abc=0;abc < import_arr.length;abc++)
			{
				let passcode = parseInt(import_arr[abc].substring(0, import_arr[abc].indexOf(" ")));
				
				let limit = parseInt(import_arr[abc].substring(import_arr[abc].indexOf(" "), import_arr[abc].length))
				
				// For inventory based cardpools
				if(limit > 3)
					limit = 3;
				
				// Not dealing with anime variants of cards...
				else if(limit == -1)
					continue;
				
				optimizing_arr[passcode] = limit;
			}
			
			for(let abc=0;abc < Eyal_old_cards.length;abc++)
			{
				let passcode = parseInt(Eyal_old_cards[abc].serial_number);
					
				if(typeof Eyal_old_cards[abc].serial_number !== "undefined" && typeof optimizing_arr[passcode] !== "undefined")
				{
					let card = jQuery.extend({}, window.Eyal_old_cards[abc]);
					
					card.tcg_limit = optimizing_arr[passcode];
					card.ocg_limit = optimizing_arr[passcode];
					
					Cards.push(card);
				}
			}
		}
		else if($("#search .custom_cb").val() == "Eyal Master Duel")
		{
			if(typeof window.Eyal_old_cards === "undefined")
			{
				window.Eyal_old_cards = [].concat(Cards);
			}
			
			Cards.length = 0;
			
			let import_arr = [].concat(Eyal_MDCardpool);
				
			let cards = [];
			
			let optimizing_arr = [];
			
			for(let abc=0;abc < import_arr.length;abc++)
			{
				let passcode = parseInt(import_arr[abc].substring(0, import_arr[abc].indexOf(" ")));
				
				let limit = parseInt(import_arr[abc].substring(import_arr[abc].indexOf(" "), import_arr[abc].length))
				
				// For inventory based cardpools
				if(limit > 3)
					limit = 3;
				
				// Not dealing with anime variants of cards...
				else if(limit == -1)
					continue;
				
				optimizing_arr[passcode] = limit;
			}
			
			for(let abc=0;abc < Eyal_old_cards.length;abc++)
			{
				let passcode = parseInt(Eyal_old_cards[abc].serial_number);
					
				if(typeof Eyal_old_cards[abc].serial_number !== "undefined" && typeof optimizing_arr[passcode] !== "undefined")
				{
					let card = jQuery.extend({}, window.Eyal_old_cards[abc]);
					
					card.tcg_limit = optimizing_arr[passcode];
					card.ocg_limit = optimizing_arr[passcode];
					
					Cards.push(card);
				}
			}
		}
		else if($("#search .custom_cb").val() == "Eyal Edison Format")
		{
			if(typeof window.Eyal_old_cards === "undefined")
			{
				window.Eyal_old_cards = [].concat(Cards);
			}
			
			Cards.length = 0;
			
			let import_arr = [].concat(Eyal_EdisonCardpool);
				
			let cards = [];
			
			let optimizing_arr = [];
			
			for(let abc=0;abc < import_arr.length;abc++)
			{
				let passcode = parseInt(import_arr[abc].substring(0, import_arr[abc].indexOf(" ")));
				
				let limit = parseInt(import_arr[abc].substring(import_arr[abc].indexOf(" "), import_arr[abc].length))
				
				// For inventory based cardpools
				if(limit > 3)
					limit = 3;
				
				// Not dealing with anime variants of cards...
				else if(limit == -1)
					continue;
				
				optimizing_arr[passcode] = limit;
			}
			
			for(let abc=0;abc < Eyal_old_cards.length;abc++)
			{
				let passcode = parseInt(Eyal_old_cards[abc].serial_number);
					
				if(typeof Eyal_old_cards[abc].serial_number !== "undefined" && typeof optimizing_arr[passcode] !== "undefined")
				{
					let card = jQuery.extend({}, window.Eyal_old_cards[abc]);
					
					card.tcg_limit = optimizing_arr[passcode];
					card.ocg_limit = optimizing_arr[passcode];
					
					Cards.push(card);
				}
			}
		}
		else
		{
			if(typeof window.Eyal_old_cards !== "undefined")
			{
				Cards = [].concat(window.Eyal_old_cards)
			}
		}
	}
	
	
	window.exitDeckConstructor = function()
	{
		gotoMainMenu();
		deckCleanup();
		updateActive(false);
		
		if(typeof window.Eyal_old_cards !== "undefined")
		{
			Cards = [].concat(window.Eyal_old_cards)
		}
	}
	window.Eyal_lookupCard = function(str)
	{
		if (!str) {
			return undefined;
		}
		var card = null;
		for (var i = 0; i < Cards.length; i++) {
			if (Cards[i] == null || Cards[i].name == null) {
				continue;
			}
			
			// Eyal282 here, this property breaks banlists and gives error "One or more cards are no longer available"		
			if(Cards[i].hidden)
				continue;
				
			if (Cards[i].name.toLowerCase() == str.toLowerCase()) {
				card = Cards[i];
				break;
			}
			else if (Cards[i].name.toLowerCase().indexOf(str.toLowerCase()) >= 0) {
				card = Cards[i];
			}
		}
		if (card) {
			var cardfront = newCardFront();
			cardfront.initializeFromData(card);
			return cardfront;
		}
		
		return undefined;
	}
	
	if(typeof window.Eyal_RealImpermColumns === "undefined")
	{
		window.Eyal_RealImpermColumns = [false, false, false, false, false];
	}
	
	if(typeof window.Eyal_TrueDeckArr === "undefined")
	{
		window.Eyal_TrueDeckArr = [];
	}
	
	if(typeof window.Eyal_TrueExtraDeckArr === "undefined")
	{
		window.Eyal_TrueExtraDeckArr = [];
	}
	
	if(typeof window.Eyal_EdisonPreErratas === "undefined")
	{
		window.Eyal_EdisonPreErratas = [];
		
		$.get('https://raw.githubusercontent.com/eyal282/chrome-ext-dueling-book-unlock/master/Dont_compile/edison_pre_erratas.txt', function(data)
		{
			data = data.replaceAll("\r", "");
			
			let eyal_arr = data.split("\n");
			
			for(let abc=0;abc < eyal_arr.length;abc++)
			{
				if(eyal_arr[abc][0] == ';' || eyal_arr[abc].length == 0)
					continue;
				
				
				// DO NOT EDIT OPTIMIZING_ARR OR IT WILL EDIT Cards[abc] ( I think )
				let obj = {};
				
				let splitted = eyal_arr[abc].split("```");
				
				
				if(!splitted[1])
					console.log(eyal_arr[abc]);
				
				obj.name = splitted[0];
				obj.effect = splitted[1].replaceAll("///n", "<br>");
			
				
				window.Eyal_EdisonPreErratas.push(obj);
			}
		}, 'text');
	}
	
		// Comparing cards length above 1000 just in case another extension decides to alter a few cards in for no reason.
	if(typeof window.Eyal_MDCardpool === "undefined" && typeof Cards !== "undefined" && Cards.length > 1000)
	{
		window.Eyal_MDCardpool = [];
		window.Eyal_MDDetailedCardpool = [];
		
		$.get('https://raw.githubusercontent.com/eyal282/chrome-ext-dueling-book-unlock/master/Dont_compile/md_cardpool.txt', function(data)
		{
			data = data.replaceAll("\r", "");
			
			let eyal_arr = data.split("\n");
			
			let optimizing_arr = [];
		
			// Be extremely careful here.
			for(let abc=0;abc < Cards.length;abc++)
			{
				// Mandatory check that will break your efforts if you don't take it into account.
				if(Cards[abc].hidden)
					continue;
				
				let passcode = Cards[abc].serial_number;
				
				optimizing_arr[passcode] = Cards[abc];
			}
			
			
			for(let abc=0;abc < eyal_arr.length;abc++)
			{
				if(eyal_arr[abc][0] == ';' || eyal_arr[abc].length == 0)
					continue;
				
				// passcode is splitting string by space, grabbing the first result.
				let passcode = eyal_arr[abc].split(" ")[0];
				
				if(typeof optimizing_arr[passcode] === "undefined")
					continue;
				
				
				// DO NOT EDIT OPTIMIZING_ARR OR IT WILL EDIT Cards[abc] ( I think )
				let obj = {};
				
				obj.id = optimizing_arr[passcode].id;
				obj.name = optimizing_arr[passcode].name;
				obj.serial_number = optimizing_arr[passcode].serial_number;
				obj.floodgate = true;
				obj.handtrap = true;
				
				if(eyal_arr[abc].indexOf("Not_Floodgate") >= 0)
					obj.floodgate = false;
				
				if(eyal_arr[abc].indexOf("Not_HT") >= 0)
					obj.handtrap = false;
				
				window.Eyal_MDDetailedCardpool.push(obj);
				window.Eyal_MDCardpool.push(eyal_arr[abc]);
			}
		}, 'text');

	}
	
	if(typeof window.Eyal_animationCards === "undefined")
	{
		window.Eyal_animationCards = [];
		
		$.get('https://raw.githubusercontent.com/eyal282/chrome-ext-dueling-book-unlock/master/Dont_compile/masterduel_cards_with_animations.txt', function(data)
		{
			data = data.replaceAll("\r", "");
			
			let eyal_arr = data.split("\n");
			
			for(let abc=0;abc < eyal_arr.length;abc++)
			{
				if(eyal_arr[abc][0] == ';' || eyal_arr[abc].length == 0)
					continue;
				
				window.Eyal_animationCards.push(eyal_arr[abc]);
			}
			
		}, 'text');
	}
	
	if(typeof window.Eyal_femaleCards === "undefined")
	{
		window.Eyal_femaleCards = [];
		
		$.get('https://raw.githubusercontent.com/eyal282/chrome-ext-dueling-book-unlock/master/Dont_compile/censored_card_names.txt', function(data)
		{
			data = data.replaceAll("\r", "");
			
			let eyal_arr = data.split("\n");
			
			for(let abc=0;abc < eyal_arr.length;abc++)
			{
				if(eyal_arr[abc][0] == ';' || eyal_arr[abc].length == 0)
					continue;
				
				window.Eyal_femaleCards.push(eyal_arr[abc]);
			}
			
		}, 'text');
	}
	if(duelist)
	{
		Eyal_GenerateTrueAllCardsArray();
	}
	
	if(typeof window.Eyal_excavatedArr === 'undefined')
	{
		window.Eyal_excavatedArr = [];
	}
	
	for(let abc=0;abc < window.Eyal_excavatedArr.length;abc++)
	{
		// Eyal_waitingForAction is automatically set to false when an action is made, to guarantee while we call a banish request, that this won't.
		// won't eat the excavated cards before DB responds to the banish request.
		if (actionsQueue.length == 0 && !window.Eyal_waitingForAction && (window.Eyal_excavatedArr[abc].data("face_down") || isIn(window.Eyal_excavatedArr[abc], player1.banished_arr) < 0))
		{
			window.Eyal_excavatedArr.splice(abc, 1);
			abc--;
		}
	}
	
	if(typeof Eyal_lastNormalMusic !== 'undefined' && Eyal_lastNormalMusic != normalMusicDL)
	{
		Eyal_tryStartMusic();
	}
	else if(typeof Eyal_lastVictoryMusic !== 'undefined' && Eyal_lastVictoryMusic != victoryMusicDL)
	{
		Eyal_tryStartMusic();
	} 

	window.Eyal_lastNormalMusic = normalMusicDL;
	window.Eyal_lastVictoryMusic = victoryMusicDL;
	// If Eyal_clipboard doesn't exist in select menu of the card pool in a tournament ban list
	if($("#my_banlists .banlists2 .cardpool_sel option[value='Eyal_clipboard']").length <= 0)
	{
		$('#my_banlists .banlists2 .cardpool_sel').append(new Option("Copy from clipboard", "Eyal_clipboard"));	
	}
	
	if($('#my_banlists .banlists2 .cardpool_sel').length > 0)
	{
		$('#my_banlists .banlists2 .cardpool_sel').off("change");
		$('#my_banlists .banlists2 .cardpool_sel').change(Eyal_cardPoolChanged);
	}
	
	
	if(typeof removeButton !== 'undefined')
	{
		removeButton($('#view .exit_btn'))
		addButton($('#view .exit_btn'), Eyal_exitViewing);
	}
	
	if(typeof showAbilities !== 'undefined')
	{
		$('.uploader .ability_btn').off("touchend");
		$('.uploader .ability_btn').on("touchend", showAbilities);
	}
	
	if(typeof cancelDuel !== 'undefined')
	{
		$('#hosting .cancel_btn').off("click");
		$('#hosting .cancel_btn').click(Eyal_cancelDuel);
		$('#hosting .cancel_btn').click(cancelDuel);
	}
	
	if(typeof rejectUser !== 'undefined')
	{
		$('#hosting .reject_btn').off("click");
		$('#hosting .reject_btn').click(rejectUser);
	}
	
	if(typeof acceptUser !== 'undefined')
	{
		$('#hosting .accept_btn').off("click");
		$('#hosting .accept_btn').click(Eyal_acceptUser);
	}
	
	if(typeof acceptUser !== 'undefined')
	{
		$('#hosting .accept_btn').off("dblclick");
		$('#hosting #joinlist').dblclick(Eyal_acceptUser);
	}
	
	if($("#search .custom_cb option[value='Eyal Master Duel']").length == 0)
	{
			$("#search .custom_cb").append($('<option>', {
             text: "Master Duel",
             value: 'Eyal Master Duel'
		}));
	}
	
	if($("#search .custom_cb option[value='Eyal Edison Format']").length == 0)
	{
			$("#search .custom_cb").append($('<option>', {
             text: "Edison Format",
             value: 'Eyal Edison Format'
		}));
	}

	if ($("#search .custom_cb option[value='Eyal From Clipboard']").length == 0) {
		$("#search .custom_cb").append($('<option>', {
			text: "From Clipboard",
			value: 'Eyal From Clipboard'
		}));
	}
	
	if($('#avatar1 .nsfw_btn').length > 0)
	{
		$('#avatar1 .nsfw_btn').off("click");
		$('#avatar1 .nsfw_btn').click(Eyal_showDuelNSFW);
	}
	
	if($('#avatar2 .nsfw_btn').length > 0)
	{
		$('#avatar2 .nsfw_btn').off("click");
		$('#avatar2 .nsfw_btn').click(Eyal_showDuelNSFW);
	}
	
	if($('#avatar3 .nsfw_btn').length > 0)
	{
		$('#avatar3 .nsfw_btn').off("click");
		$('#avatar3 .nsfw_btn').click(Eyal_showDuelNSFW);
	}
	
	if($('#avatar4 .nsfw_btn').length > 0)
	{
		$('#avatar4 .nsfw_btn').off("click");
		$('#avatar4 .nsfw_btn').click(Eyal_showDuelNSFW);
	}
	
	if($('#avatar1 .rating').length > 0)
	{
		$('#avatar1 .rating').off("click");
		$('#avatar1 .rating').click(Eyal_hideDuelNSFW);
	}
	
	if($('#avatar2 .rating').length > 0)
	{
		$('#avatar2 .rating').off("click");
		$('#avatar2 .rating').click(Eyal_hideDuelNSFW);
	}
	
	if($('#avatar3 .rating').length > 0)
	{
		$('#avatar3 .rating').off("click");
		$('#avatar3 .rating').click(Eyal_hideDuelNSFW);
	}
	
	if($('#avatar4 .rating').length > 0)
	{
		$('#avatar4 .rating').off("click");
		$('#avatar4 .rating').click(Eyal_hideDuelNSFW);
	}

	if($('#end_turn').length > 0)
	{
		$('#end_turn').off("click");
		$('#end_turn').click(Eyal_endTurnE);
	}
	
	if($('#start_turn').length > 0)
	{
		$('#start_turn').off("click");
		$('#start_turn').click(Eyal_startTurnE);
	}
	
	if($('#search .custom_cb').length > 0)
	{
		$("#search .custom_cb").off("change");
		$("#search .custom_cb").change(Eyal_DeckConstructorCardPoolChanged);
	}
	
	if($("#duel #select_zones").length > 0 && $("#ed_select").length <= 0)
	{
		let ed_select = new MovieClip()
	
		$("#duel #select_zones").append($(`<div id="ed_select"></div>`)[0]);
	
		window.Eyal_ed_select = loadSVGAnimation(ed_select, "ed_select", "zone_select2", 93, 93, 24, true);
	
		$("#ed_select").append(Eyal_ed_select)
	
		$("#ed_select").css("top", "461px")
		$("#ed_select").css("left", "203px")
		
		$("#ed_select").hide();
		Eyal_ed_select.stop();
	}

	if($('#select_zones div').length > 0)
	{
		$('#select_zones div').off("click");
		$('#select_zones div').click(Eyal_chooseZone);
	}
	
	// Code for dragging view deck & pressing keys on the document.

	if($('#view').length > 0)
	{
		jQuery(document).off('keyup');
		jQuery(document).on('keyup', Eyal_OnKeyPressed);
		
		$('#view').draggable({distance: "75", cursor: "move", helper: "title_txt", cursorat: {top: "50"}});
		$("#view .title_txt").css("cursor", "move")
	}

	// We're currently in https://www.duelingbook.com/card?id=513 
	if(typeof master !== "undefined" && typeof card_id !== "undefined")
	{
		let nullName = "";
		
		let cardfront = my_card;
		
		let levelStr = "LEVEL: ";
		
		if(cardfront.data("monster_color") == "Xyz")
			levelStr = "RANK: ";
		
		if (cardfront.data("pendulum"))
		{
			preview_txt.html("<b>" + levelStr + cardfront.data("level") + "<br>" + "Pendulum Effect:</b><br>" + Eyal_MakePSCTColorOnEffect(nullName, escapeHTML(cardfront.data("pendulum_effect"))) + '<br><br>' + "<b>Monster Effect:</b><br>");
			if (cardfront.data("monster_color") == "Normal")
			{
				preview_txt.append("<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
			} else
			{
				preview_txt.append(Eyal_MakePSCTColorOnEffect(nullName, escapeHTML(cardfront.data("effect"))));
			}
		}
		else if (cardfront.data("rush") && cardfront.data("monster_color") != "Normal")
		{
			preview_txt.html(escapeHTML(cardfront.data("effect")).replace('[Requirement]', '<b>[Requirement]</b>').replace('<br>[Effect]', '<br><b>[Effect]</b>').replace('<br>[Continuous Effect]', '<br><b>[Continuous Effect]</b>').replace('<br>[Multi-Choice Effect]', '<br><b>[Multi-Choice Effect]</b>').replace('[REQUIREMENT]', '<b>[REQUIREMENT]</b>').replace('<br>[EFFECT]', '<br><b>[EFFECT]</b>').replace('<br>[CONTINUOUS EFFECT]', '<br><b>[CONTINUOUS EFFECT]</b>').replace('<br>[MULTI-CHOICE EFFECT]', '<br><b>[MULTI-CHOICE EFFECT]</b>'));
		}
		else
		{
			if (cardfront.data("monster_color") == "Normal")
			{
				preview_txt.html("<b>" + levelStr + cardfront.data("level") + "</b><br>" + "<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
			}
			else if (cardfront.data("level") > 0 && cardfront.data("monster_color") != "Link")
			{
				preview_txt.html("<b>" + levelStr + cardfront.data("level") + "</b><br>" + Eyal_MakePSCTColorOnEffect(nullName, escapeHTML(cardfront.data("effect"))));
			}
			else if (cardfront.data("card_type") == "Skill")
			{
				preview_txt.html(escapeHTML(cardfront.data("pendulum_effect")) + "<br><br>" + escapeHTML(cardfront.data("effect")));
			}
			else
			{
				preview_txt.html(Eyal_MakePSCTColorOnEffect(nullName, escapeHTML(cardfront.data("effect"))));
			}
		}
	}

	// For creating fake cards as fake cards cannot be caught with swapCardMenu.
	window.newDuelCard = function() {
		var card = getRecycledCard();
		if (!card) {
			card = new Card();
		}
		if (automatic) {
			card.contextmenu(duelCardDownE);
		}
		//card.on("mouseover click", previewE);
		card.on("mouseenter click", previewE);
		if (duelist) {
			card.find('.content:first').mouseover(Eyal_cardMenuE);
			//card.find('.content:first').mouseleave(menuOutE);
		}
		card.find('.content:first').mouseleave(menuOutE);
		card.find('.cardfront').hide();
		if (admin || adjudicator) {
			if (!automatic) {
				card.css("cursor", "pointer");
				card.click(targetCard);
			}
		}
		TweenMax.to(card, 0, { rotationY: 180 + ABOUT_ZERO, scale: 0.1485 });
		return card;
	}
}
