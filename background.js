chrome.webNavigation.onCommitted.addListener(function(e) {
	keepAlive();
}, {url: [{hostSuffix: 'duelingbook.com'}]});


const femaleCards = [];


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


if(femaleCards.length == 0)
{
	Eyal_ReadFile("./censored_card_names.txt", function(_res){
	
		let eyal_arr = [];
		
		eyal_arr = _res.split('\r\n');
		
		for(let abc=0;abc < eyal_arr.length;abc++)
		{
			femaleCards.push(eyal_arr[abc]);
			console.log(eyal_arr[abc])
		}
		
	});
}
	

setInterval(function () {
	performInjection();
}, 4500);

setInterval(function () {
	performCensorInjection();
}, 500);

// This is a race

let intervalCounters = 50;

let raceInterval = setInterval(function () {
	if(intervalCounters > 0)
		intervalCounters--;
	
	else
		clearInterval(raceInterval);
	
	performInjection();
}, 250);

function performInjection()
{
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		if(tabs[0] && tabs[0].url && tabs[0].url.search("duelingbook.com") >= 0)
		{
			if(tabs[0].id != undefined)
			{
				chrome.storage.sync.get(['potOfSwitch', 'femOfSwitch', 'kaibaThemeSlider', 'limitedCardsSound'], function(result)
				{
					let potOfSwitch = false;
					
					if(result && result.potOfSwitch == true)
						potOfSwitch = true;
				
					let femOfSwitch = false;
					
					if(result && result.femOfSwitch == true)
						femOfSwitch = true;
					
					let kaibaThemeSlider = 0;
					
					if(result && result.kaibaThemeSlider > 0)
						kaibaThemeSlider = result.kaibaThemeSlider;
					
					let limitedCardsSound = true;
					
					if(result && result.limitedCardsSound == false)
						limitedCardsSound = false;
						
					
					chrome.scripting.executeScript(
					{
						args: [potOfSwitch, femOfSwitch, kaibaThemeSlider, limitedCardsSound, femaleCards],
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
		if(tabs[0] && tabs[0].url && tabs[0].url.search("duelingbook.com") >= 0)
		{
			if(tabs[0].id != undefined)
			{
				chrome.storage.sync.get(['potOfSwitch', 'femOfSwitch'], function(result)
				{
					let potOfSwitch = false;
					
					if(result && result.potOfSwitch == true)
						potOfSwitch = true;
				
					let femOfSwitch = false;
					
					if(result && result.femOfSwitch == true)
						femOfSwitch = true;
					
					if(femOfSwitch)
					{
						chrome.scripting.executeScript(
						{
							args: [potOfSwitch, femOfSwitch, femaleCards],
							target: {tabId: tabs[0].id},
							world: "MAIN", // Main world is mandatory to edit other website functions
							func: censorInjectFunction,
							//files: ['inject.js'],
						});
					}
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
8. pay half your LP
*/


// This function only fires if femOfSwitch = true
function censorInjectFunction(potOfSwitch, femOfSwitch, femaleCards)
{
	
	window.Eyal_checkCensors = function()
	{
		if(femOfSwitch && femaleCards.length > 0)
		{
			for(let abc=0;abc < deck_arr.length;abc++)
			{
				if(femaleCards.indexOf(deck_arr[abc].data("name")) != -1)
				{
					deck_arr[abc].removeImage();
				}
			}
			
			for(let abc=0;abc < side_arr.length;abc++)
			{
				if(femaleCards.indexOf(side_arr[abc].data("name")) != -1)
				{
					side_arr[abc].removeImage();
				}
			}
			
			for(let abc=0;abc < extra_arr.length;abc++)
			{
				if(femaleCards.indexOf(extra_arr[abc].data("name")) != -1)
				{
					extra_arr[abc].removeImage();
				}
			}
			
			for(let abc=0;abc < search_arr.length;abc++)
			{
			if(femaleCards.indexOf(search_arr[abc].data("name")) != -1)
				{
					search_arr[abc].removeImage();
				}
			}
			
			if(player1 != undefined && player1.all_cards_arr != undefined)
			{
				for(let abc=0;abc < player1.all_cards_arr.length;abc++)
				{
					if(femaleCards.indexOf(player1.all_cards_arr[abc].data("cardfront").data("name")) != -1)
					{
						player1.all_cards_arr[abc].data("cardfront").removeImage();
					}
				}
			}
			
			if(player2 != undefined && player2.all_cards_arr != undefined)
			{
				for(let abc=0;abc < player2.all_cards_arr.length;abc++)
				{
					if(femaleCards.indexOf(player2.all_cards_arr[abc].data("cardfront").data("name")) != -1)
					{
						player2.all_cards_arr[abc].data("cardfront").removeImage();
					}
				}
			}
			
			if(player3 != undefined && player3.all_cards_arr != undefined)
			{
				for(let abc=0;abc < player3.all_cards_arr.length;abc++)
				{
					if(femaleCards.indexOf(player3.all_cards_arr[abc].data("cardfront").data("name")) != -1)
					{
						player3.all_cards_arr[abc].data("cardfront").removeImage();
					}
				}
			}
			
			if(player4 != undefined && player4.all_cards_arr != undefined)
			{
				for(let abc=0;abc < player4.all_cards_arr.length;abc++)
				{
					if(femaleCards.indexOf(player4.all_cards_arr[abc].data("cardfront").data("name")) != -1)
					{
						player4.all_cards_arr[abc].data("cardfront").removeImage();
					}
				}
			}
		}
	}
	
	Eyal_checkCensors();
}

function injectFunction(potOfSwitch, femOfSwitch, kaibaThemeSlider, limitedCardsSound, femaleCards)
{
	let Eyal_music = document.getElementById("Eyal_music");
	
	if(Eyal_music == null)
	{
		Eyal_music = document.createElement("audio");
		Eyal_music.src = "https://cdn.freesound.org/previews/649/649769_14275923-lq.mp3";   
		Eyal_music.id = "Eyal_music";
		document.body.appendChild(Eyal_music)
	}
	
	let Eyal_pogSound = document.getElementById("Eyal_pogSound");
	
	if(Eyal_pogSound == null)
	{
		Eyal_pogSound = document.createElement("audio");
		Eyal_pogSound.src = "https://cdn.freesound.org/previews/649/649769_14275923-lq.mp3";   
		Eyal_pogSound.id = "Eyal_pogSound";
		document.body.appendChild(Eyal_pogSound)
	}
	
	let Eyal_drawLimitedSound = document.getElementById("Eyal_drawLimitedSound");
	
	if(Eyal_drawLimitedSound == null)
	{
		Eyal_drawLimitedSound = document.createElement("audio");
		Eyal_drawLimitedSound.src = "https://cdn.freesound.org/previews/653/653122_14275923-lq.mp3";   
		Eyal_drawLimitedSound.id = "Eyal_drawLimitedSound";
		document.body.appendChild(Eyal_drawLimitedSound)
	}
	
	
	Eyal_music.volume = (kaibaThemeSlider / 100.0)
	
	if($('html').scrollTop() != 0)
	{
		$('html').scrollTop(0);
	}
	
	if($('html').scrollLeft() != 0)
	{
		$('html').scrollLeft(0);
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
			
			if(Eyal_playSound)
			{
				Eyal_drawLimitedSound.currentTime = 0;
				Eyal_drawLimitedSound.play();
				
				Eyal_music.pause();
				
				Eyal_drawLimitedSound.addEventListener("ended", function(){
					Eyal_drawLimitedSound.currentTime = 0;
					Eyal_drawLimitedSound.pause();
					
					if(kaibaThemeSlider > 0)
					{
						Eyal_tryStartMusic();
					}
				});
			}
		}
	}
	if(kaibaThemeSlider > 0)
	{
		window.startDuel = function(data)
		{	
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
			
			if(kaibaThemeSlider > 0)
			{
				Eyal_tryStartMusic();
			}
		}
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
		
		if(kaibaThemeSlider > 0)
		{
			Eyal_tryStartMusic();
		}
	}
	
	window.Eyal_tryStartMusic = function()
	{
		// Normal theme.
		
		console.log("ABCDEFG");
		
		let urlToPlay = "https://drive.google.com/uc?id=1b5a7Yl1JkIwLU3cVUPaooqM3IM7l_IJO&export=download"
		
		let lifepointsToUse = player1.lifepoints;
		
		if(player2.lifepoints < player1.lifepoints)
			lifepointsToUse = player2.lifepoints;
		
		if((lifepointsToUse <= 3000 && !speed) || lifepointsToUse <= 1000)
		{
			urlToPlay = "https://drive.google.com/uc?id=17n_G-tGRVyQb2T6j4JuX2jzHDsz7oN2Z&export=download"
		}
		
		if(Eyal_music.src != urlToPlay)
		{
			Eyal_music.volume = (kaibaThemeSlider / 100.0)
			Eyal_music.pause();
			Eyal_music.src = urlToPlay;

			Eyal_music.play();
		}
		else
		{
			Eyal_music.pause();
			Eyal_music.volume = (kaibaThemeSlider / 100.0);
			
			Eyal_music.play();
		}
	}
	window.Eyal_swapCardMenuForPlayer = function(player)
	{
		for(let abc=0;abc < player.all_cards_arr.length;abc++)
		{
			player.all_cards_arr[abc].find('.content:first').off("mouseover", cardMenuE);
			player.all_cards_arr[abc].find('.content:first').mouseover(Eyal_cardMenuE);
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
        if(viewing == "Opponent's Hand")
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
            Eyal_addColoredLine("0000FF", player1.opponent.hand_arr[abc].data("cardfront").data("name"));    
        }
        
        addLine("==============================")
    }
    
	window.Eyal_checkCensors = function()
	{
		if(femOfSwitch && femaleCards.length > 0)
		{
			for(let abc=0;abc < deck_arr.length;abc++)
			{
				if(femaleCards.indexOf(deck_arr[abc].data("name")) != -1)
				{
					deck_arr[abc].removeImage();
				}
			}
			
			for(let abc=0;abc < side_arr.length;abc++)
			{
				if(femaleCards.indexOf(side_arr[abc].data("name")) != -1)
				{
					side_arr[abc].removeImage();
				}
			}
			
			for(let abc=0;abc < extra_arr.length;abc++)
			{
				if(femaleCards.indexOf(extra_arr[abc].data("name")) != -1)
				{
					extra_arr[abc].removeImage();
				}
			}
			
			for(let abc=0;abc < search_arr.length;abc++)
			{
			if(femaleCards.indexOf(search_arr[abc].data("name")) != -1)
				{
					search_arr[abc].removeImage();
				}
			}
			
			if(player1 != undefined && player1.all_cards_arr != undefined)
			{
				for(let abc=0;abc < player1.all_cards_arr.length;abc++)
				{
					if(femaleCards.indexOf(player1.all_cards_arr[abc].data("cardfront").data("name")) != -1)
					{
						player1.all_cards_arr[abc].data("cardfront").removeImage();
					}
				}
			}
			
			if(player2 != undefined && player2.all_cards_arr != undefined)
			{
				for(let abc=0;abc < player2.all_cards_arr.length;abc++)
				{
					if(femaleCards.indexOf(player2.all_cards_arr[abc].data("cardfront").data("name")) != -1)
					{
						player2.all_cards_arr[abc].data("cardfront").removeImage();
					}
				}
			}
			
			if(player3 != undefined && player3.all_cards_arr != undefined)
			{
				for(let abc=0;abc < player3.all_cards_arr.length;abc++)
				{
					if(femaleCards.indexOf(player3.all_cards_arr[abc].data("cardfront").data("name")) != -1)
					{
						player3.all_cards_arr[abc].data("cardfront").removeImage();
					}
				}
			}
			
			if(player4 != undefined && player4.all_cards_arr != undefined)
			{
				for(let abc=0;abc < player4.all_cards_arr.length;abc++)
				{
					if(femaleCards.indexOf(player4.all_cards_arr[abc].data("cardfront").data("name")) != -1)
					{
						player4.all_cards_arr[abc].data("cardfront").removeImage();
					}
				}
			}
		}
	}
	
	window.previewFront = function(cardfront)
	{
		if (preview.data("id") == 0) {
			preview.data("id", -1);
		}
		if (preview.data("id") == cardfront.data("id") && preview.is(":visible")) {
			return;
		}
		preview.find('.skillback').detach();
		showPreview(); // moved from below because setCardName
		
		preview.copyCard(cardfront);
			
		if(femOfSwitch && femaleCards.indexOf(cardfront.data("name")) != -1)
			preview.removeImage();
		
		//if (~~cardfront.data("pendulum") > 0) {
		if (cardfront.data("pendulum")) {
			preview_txt.html("<b>Pendulum Effect:</b><br>" + escapeHTML(cardfront.data("pendulum_effect")) + '<br><br>' + "<b>Monster Effect:</b><br>");
			if (cardfront.data("monster_color") == "Normal") {
				preview_txt.append("<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
			}
			else {
				preview_txt.append(escapeHTML(cardfront.data("effect")));
			}
		}
		else if (cardfront.data("rush") && cardfront.data("monster_color") != "Normal") {
			preview_txt.html(escapeHTML(cardfront.data("effect")).replace('[Requirement]', '<b>[Requirement]</b>').replace('<br>[Effect]', '<br><b>[Effect]</b>').replace('<br>[Continuous Effect]', '<br><b>[Continuous Effect]</b>').replace('<br>[Multi-Choice Effect]', '<br><b>[Multi-Choice Effect]</b>').replace('[REQUIREMENT]', '<b>[REQUIREMENT]</b>').replace('<br>[EFFECT]', '<br><b>[EFFECT]</b>').replace('<br>[CONTINUOUS EFFECT]', '<br><b>[CONTINUOUS EFFECT]</b>').replace('<br>[MULTI-CHOICE EFFECT]', '<br><b>[MULTI-CHOICE EFFECT]</b>'));
		}
		else {
			if (cardfront.data("monster_color") == "Normal") {
				preview_txt.html("<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
			}
			else if (cardfront.data("card_type") == "Skill") {
				preview_txt.html(escapeHTML(cardfront.data("pendulum_effect")) + "<br><br>" + escapeHTML(cardfront.data("effect")));
			}
			else {
				preview_txt.html(escapeHTML(cardfront.data("effect")));
			}
		}
		
	}

    removeButton($('#view .exit_btn'))
    addButton($('#view .exit_btn'), Eyal_exitViewing);
	
	Eyal_checkCensors();
	
	// Is the extension user dueling? "duel_active" is for dueling and watching, while "duelist" is only for dueling
	if(duelist)
	{
		Eyal_swapCardMenuForPlayer(player1);
		Eyal_swapCardMenuForPlayer(player2);
		
		if(tag_duel)
		{
			Eyal_swapCardMenuForPlayer(player3)
			Eyal_swapCardMenuForPlayer(player4)
		}
	}
	
	window.enterM1E = function()
	{
		if(currentPhase != "DP" && currentPhase != "SP")
		{
			Send({"action":"Duel", "play":"Enter M1"});
			return;
		}
		
		
		let serpentFound = false;
		
		for(let abc=0;abc < player1.grave_arr.length;abc++)
		{
			if(player1.grave_arr[abc].data("cardfront").data("name") == "Sinister Serpent")
			{
				serpentFound = true;
				break;
			}
		}
		
		if(serpentFound)
		{
			if(currentPhase == "DP")	
			{
				enterSPE();
			}
			
			getConfirmation2("Take Sinister Serpent before MP1?", "", Eyal_SinisterYes, Eyal_SinisterNo);
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
	
	
	window.findCard = function(arr, hand, grave, like)
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
	
	window.Eyal_cardMenuE = function() {	
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
		
		var menu = [];
		if (card.data("controller") != player1) {
			if (isIn(card, player1.opponent.grave_arr) >= 0 || isIn(card, player1.opponent.banished_arr) >= 0) {
				if (card.data("cardfront").data("card_type") == "Monster") {
					if (hasAvailableMonsterZones(player1)) {
						menu.push({label:"SS ATK",data:"SS ATK"});

						menu.push({label:"SS DEF",data:"SS DEF"});
					}
				}
				if (isIn(card, player1.opponent.grave_arr) >= 0) {
					menu.push({label:"Banish",data:"Banish"});
					
					// Eyal282 here
					menu.push({label:"Banish FD",data:"Banish FD"});
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
			}
			if ((viewing == "Opponent's Deck (partial)" || viewing == "Opponent's Deck (Top 3 Cards)" || viewing == "Opponent's Deck (Top 5 Cards)") && isIn(card, player1.opponent.main_arr) >= 0) {
				if (findCard(["Destiny HERO - Dominance", "Flower Cardian Peony with Butterfly", "Goddess Skuld's Oracle", "Millennium Necklace", "SPYRAL GEAR - Drone"])) {
					menu.push({label:"To Top of Deck",data:"To T Deck 2"});
				}
				if (findCard(["Flower Cardian Peony with Butterfly"])) { // eh
					menu.push({label:"To Bottom of Deck",data:"To B Deck 2"});
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
				// Because setting a main deck monster already exists
				if(isIn(card, player1.extra_arr) >= 0)
					menu.push({label:"Set",data:"Set monster"});
			}
			if (isIn(card, player1.grave_arr) >= 0 && hasAvailableMonsterZones(player1)) {
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
			}
			if (card.data("cardfront").data("monster_color") == "Token") {
				menu.push({label:"Remove",data:"Remove Token"});
				if (isMonster(player1, card)) {
					if (card.data("inDEF")) {
						menu.push({label:"To ATK",data:"To ATK"});
					}
					menu.push({label:"To DEF",data:"To DEF"});
				}
				//menu.push({label:"Change Control",data:"Change control"});
				menu.push({label:"Move",data:"Move"});
			}
			else {
				if (isST(player1, card) && card.data("face_down")) {
					menu.push({label:"Activate",data:"Activate ST"});
				}
				if (player1.fieldSpell && card[0] == player1.fieldSpell[0] && card.data("face_down")) {
					menu.push({label:"Activate",data:"Activate Field Spell"});
				}
				if (isIn(card, player1.hand_arr) < 0)
				{
					menu.push({label:"To Hand",data:"To hand"});
					if(isIn(card, player1.grave_arr) < 0)
					{
						menu.push({label:"To Main Deck FU",data:"To T Deck FU"});
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
				if (card.data("cardfront").data("pendulum") && isIn(card, player1.extra_arr) < 0 && isIn(card, player1.main_arr) < 0 && isIn(card, player1.hand_arr) < 0) { // i think you should be able to return it from the gy to the extra deck
					menu.push({label:"To Extra Deck FU",data:"To ED FU"});
				}
				if (!isExtraDeckCard(card) && isIn(card, player1.main_arr) < 0 && !card.data("isXyzMaterial")) {
					menu.push({label:"To Top of Deck",data:"To T Deck"});
					//if (findEffect("bottom", true, true, true) && isIn(card, player1.extra_arr) < 0 || findCard(["Small World"])) {
					//if (findEffect("bottom", true, true, true) && isIn(card, player1.extra_arr) < 0) {
					if (findEffect("bottom") && isIn(card, player1.extra_arr) < 0) {
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
				if (!card.data("face_down")) {
					if (isMonster(player1, card)) {
						if(Eyal_IsCardAbleToPayHalfLP(card))
						{
							menu.push({label:"Pay Half LP", data:"Eyal Pay Half LP"});
						}
						switch (card.data("cardfront").data("name")) {
							case "SPYRAL GEAR - Drone":
								if (player1.opponent.main_arr.length >= 3) {
									menu.push({label:"Look at cards",data:"Spyral event"});
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
								menu.push({label:"Banish first 3 ED",data:"Banish first 3 ED FD"});
							
							if(countFaceDownExtraDeckCards(player1) >= 6)
								menu.push({label:"Banish first 6 ED",data:"Banish first 6 ED FD"});
						}
						
						if (card.data("cardfront").data("name") == "Pot of Duality" && player1.main_arr.length >= 3) {
							menu.push({label:"Banish 3 Cards",data:"Banish top 3 cards"});
						}
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
						// Eyal282
						if (Eyal_IsCardExchangeOfSpirit(card)) {
							menu.push({label:"Swap Deck with GY", data:"Eyal Exchange Spirit"});
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
				else
				{
					menu.push({label:"To Opponent's Hand",data:"To hand 2"});
				}
				
				let tokenCount = Eyal_CountTokensCardCanSummon(card);
				
				// Negative token count = summon to opponent.
				// For now I'm not implementing it.
				if(tokenCount > 0)
				{
					menu.push({label:`SS DEF ${tokenCount} Tokens`, data:`Eyal SS Many Tokens`});
				}
				
				if (card.data("isXyzMaterial")) {
					menu = [];
					menu.push({label:"Detach",data:"Detach"});
					menu.push({label:"Banish",data:"Banish"});
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
		}
		
		showMenu(card, menu);
	}
	
	// duelResponse is after DB saw our interaction. This is before that happens.
	window.cardMenuClicked = function(card, data, e) {
		console.log('cardMenuClicked. data = ' + data);
		if (!$('#cig1_txt').is(":visible")) {
			return; // this prevents users from shuffling during simultaneousDraw
		}
		removeCardMenu();
		hideSelectZones();
		
		
		if(data == "Eyal Pay Half LP")
		{
			exitViewing();
			
			
			let amountToGive = -1 * Math.ceil((player1.lifepoints / 2.0));
			Send({"action":"Duel", "play":"Life points", "amount":amountToGive});
			return;
		}
		
		else if(data == "Eyal Exchange Spirit")
		{
			exitViewing();
			Eyal_ExchangeOfTheSpirit();
			return;
		}
		
		else if(data == "Eyal SS Many Tokens")
		{
			exitViewing();
			
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
			exitViewing();
		}
		
		else if(data == "Eyal Banish FD")
		{
			cardMenuClicked(card, "To GY");
			cardMenuClicked(card, "Banish FD");
			exitViewing();
		}

		
		if (data == "Choose card") {
			player1.temp_arr.push(card.data("id"));
			if (player1.temp_arr.length == 3 && viewing == "Deck (Picking 3 Cards)" || player1.temp_arr.length == 2 && viewing == "Deck (Picking 2 Cards)" || player1.temp_arr.length == 1 && viewing == "Deck (Picking Card)") {
				Send({"action":"Duel", "play":next_callback, "cards":player1.temp_arr});
				exitViewing();
			}
			return;
		}
		if (data == "Overlay" || data == "OL ATK" || data == "OL DEF") {
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
					exitViewing();
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
					exitViewing();
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
			if (card.data("cardfront").data("type") == "Field") {
				startChooseFieldSpellZones();
			}
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
			exitViewing();
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
			exitViewing(null, true);
		}
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

	// Makes deck viewer lower in height to fit new menu options.
	document.getElementById('view').style.top = "130px"
	
	$("#life_txt").off("input")
	
	window.EyalExprEval = function(str)
	{
		return Function(`'use strict'; return (${str})`)()
	}
	window.lifeEnterHandler = function() 
	{
		if ($('#life_txt').val() == "") {
			return;
		}

		
		var amount = EyalExprEval($('#life_txt').val());
		
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

	window.showMenu = function(card, dp) {
		if (!dp) {
			menu_reason = "Menu has no data";
			return;
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
		
		if(isED && !wasAdded)
		{
			if (countFaceDownExtraDeckCards(player1) >= 1)
				dp.push({label:"Banish random FD",data:"Banish random ED card FD"});
		}
		
		dp.reverse();
		if (TweenMax.isTweening(card)) {
			menu_reason = "Card is currently tweening";
			return;
		}
		if (menu_card && menu_card[0] == card[0]) {
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
		if (isInYourHand(player1, card)) {
			card.css("top", card.data("controller").handY - 30);
			$('#blue_target').hide();
		}
		if (getScale(card[0]) < 0.2) {
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
		menu_card = card;
		menu.find('#card_menu_content').html("");
		var scale = getScale(card[0]);
		if (scale < 0) {
			scale = -scale;
		}
		var width = 400;
		var height = 580;
		var rotation = getRotation(card[0]);
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
				
				// Eyal282
				case "Banish ED Card FD":
				case "To Main Deck FU":
				case "Banish first 3 ED":
				case "Banish first 5 ED":
				case "Banish first 6 ED":
				case "Banish entire ED":
				case "To Opponent's Deck FU":
				case "Swap Deck with GY":
				case "Pay Half LP":
				
					option.find('img').attr("src", IMAGES_START + "svg/card_menu_btn_up2.svg");
					break;
			}
			if (dp[i].label.indexOf("Mill ") >= 0) {
				option.find('img').attr("src", IMAGES_START + "svg/card_menu_btn_up2.svg");
			}
			menu.find('#card_menu_content').append(option);
		}
		$('#viewing').append(menu);
		
		
		
		
		
		menu.css("height", h);
		var left = parseInt(card.css("left")) - scale * width / 2;
		var top = parseInt(card.css("top")) - height * scale / 2 - h;
		if (menu_card.parent()[0] == $('#view > .content')[0]) {
			top += 130 + 32 - $('#view > .content').scrollTop();
			left += 219 + 5;
		}
		var startY = top + menu[0].scrollHeight;
		if (menu[0].scrollHeight > parseInt(card.css("height")) * scale) {
			startY = top + parseInt(card.css("height")) * scale;
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


	window.duelResponse = function(data) {
		
			//duelActions++;
			//saveGamestate(duelActions);
		
		if (SOFT_PLAYS.indexOf(data.play) < 0) {
			$('.red_target').hide();
			$('.blue_target').hide();
			$('.green_target').hide();
		}
		var player;
		if (data.username == player1.username) {
			player = player1;
		}
		else if (data.username == player2.username) {
			player = player2;
		}
		else if (tag_duel && data.username == player3.username) {
			player = player3;
		}
		else if (tag_duel && data.username == player4.username) {
			player = player4;
		}
		if (actionsQueue.length > 0) {
			//console.log("actionsQueue.length = " + actionsQueue.length);
			for (var i = 0; i < actionsQueue.length; i++) {
				//console.log("actionsQueue[i] = " + actionsQueue[i]);
			}
		}
		
		if (data.owner && data.id) {
			actionsQueue.push(function(){
				//updateOwner(getPlayer(data.owner), getDuelCard(data.id));
				updateOwner(getCurrentOwner(data.owner), getDuelCard(data.id)); // the owner is always the active_player on a team
				endAction();
			});
		}
		
		switch (data.play) {
			// Eyal282
			case "Eyal Exchange Spirit":
				if(player.username == player1.username)
				{
					Eyal_ExchangeOfTheSpirit()
				}
				break;
			case "Rejoin duel":
				rejoinDuel(player, data);
				break;
			case "Add watcher":
				addWatcher(data);
				break;
			case "Remove watcher":
				removeWatcher(data);
				enableAdminE();
				break;
			case "Watcher message":
				watchChatPrint(data);
				break;
			case "Siding":
				initSiding(data);
				addLine(escapeHTML(data.message));
				break;
			case "Siding with cards":
				initSiding(data);
				addLine(escapeHTML(data.message));
				createSidingHoles(data);
				initSideCardFromData(data);
				break;
			case "Begin next duel":
				beginNextDuel(data);
				break;
			case "Back to RPS":
				exitRPS();
				exitTP();
				exitDueling();
				exitSiding();
				duel_active = true;
				if (duelist) {
					updateActive(true);
				}
				else {
					$('#draw_btn').hide();
						$('#mulligan_btn').hide();
				}
				initRPSStart();
				gameLossSound = getGameLossSound();
				gameWinSound = getGameWinSound();
				if (switched) {
					if (tag_duel) {
						switchDuelists(data, "player1", "player2", "player3", "player4");
					}
					else {
						switchDuelists(data, "player1", "player2");
					}
				}
				else if (tag_duel && data.player3.username == username) {
					switchDuelists(data, "player1", "player3");
				}
				deckData = data;
				if (data.starting) {
					if (match_type == "m") {
						addLine("Starting new match");
					}
					else if (match_type == "n") {
						addLine("Starting new single");
					}
				}
				$('#draw_btn').val("Offer Draw");
				initSleeves();
				$('.all_good').hide();
				break;
			case "Admit defeat":
				hideDim();
				admittedDefeat(player, data);
				break;
			case "Left duel":
				leftDuel(player, data);
				break;
			case "Quit duel":
				quitDuel(player, data);
				break;
			case "Game loss":
			case "Match loss":
				gamelossed(player, data);
				break;
			case "Loss":
				loss(player, data);
				break;
			case "Cancel game":
				gameCanceled(data);
				break;
			case "Frozen":
				if (data.targeted_username) {
					addLine(data.targeted_username + " has been frozen");
				}
				else {
					addLine(data.username + " has been frozen");
				}
				break;
			case "Beginner":
				if (data.targeted_username) {
					addLine(data.targeted_username + " has been set as a beginner");
				}
				else {
					addLine(data.username + " has been set as a beginner");
				}
				break;
			case "RPS":
				determineWinner(data);
				break;
			case "Typing":
				typingE(player);
				break;
			case "Duel message":
				duelChatPrint(data);
				
				if (player) {
					player.stopTyping();
				}
				if (duelist && data.username == username)
				{
					duelChatTimerE();
					
					// Eyal282, check if this condition we're in prevents an opponent from being able to search for us.
					
					// if the index of a string is 0, that string starts the message.
					if(data.message.indexOf('/snipe') == 0)
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
						
					}
					else if(data.message.indexOf('/search') == 0 || data.message.indexOf("/send") == 0 || data.message.indexOf("/ban") == 0 || data.message.indexOf("/atk") == 0 || data.message.indexOf("/def") == 0)
					{
						let msg = data.message;
						
						let cardClickAction = "To hand";
						let commandName = "/search";
					
						if(msg.indexOf('/search') == 0)
						{
							msg = msg.replace("/search", "");
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
						}
						
						
						else if(msg.indexOf('/send') == 0)
						{
							msg = msg.replace("/send", "");
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "To GY";
							commandName = "/send";
						}
						
						else if(msg.indexOf('/ban') == 0)
						{
							msg = msg.replace("/ban", "");
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "Banish";
							commandName = "/ban";
						}
						
						else if(msg.indexOf('/atk') == 0)
						{
							msg = msg.replace("/atk", "");
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "SS ATK";
							commandName = "/atk";
						}
						
						else if(msg.indexOf('/def') == 0)
						{
							msg = msg.replace("/def", "");
							
							if(msg.indexOf(' ') == 0)
								msg = msg.replace(" ", "");
							
							cardClickAction = "SS DEF";
							commandName = "/def";
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
										if(player1.main_arr[abc].data("cardfront").data("name").toLowerCase().search(msg.toLowerCase()) != -1)
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
										cardMenuClicked(player1.main_arr[foundIndex], cardClickAction);
									}
								}
							}, 50); 
						}
					}
				}
				break;
			case "Reset deck":
			case "Swap cards":
				hideDim();
				$('#reset_btn').disable(false);
				updateSideCards(data);
				checkSidingCards();
				break;
			case "Pause game":
				pauseGame(player, data);
				break;
			case "Resume game":
				resumeGame(data);
				break;
			case "Reset game":
				actionsQueue.push(function(){
					resetGame(player, data);
				});
				break;
			case "Call admin":
				addLine(escapeHTML(player.username) + " has called a judge");
				$('#call_admin_btn').disable(true);
				awaiting_admin = true;
				if (duelist && player.username == username) {
					$('#call_admin_btn').disable(false);
					$('#call_admin_btn').val("Cancel Call");
				}
				break;
			case "Cancel call":
				addLine(escapeHTML(player.username) + " cancelled the call");
				awaiting_admin = false;
				if (duelist) {
					$('#call_admin_btn').disable(false);
					$('#call_admin_btn').val("Call Judge");
				}
				break;
			case "Offer draw":
				addLine(escapeHTML(player.username) + " has made a draw offer");
				if (isPlayer2(player.username)) {
					$('#draw_btn').val("Accept Draw");
					return;
				}
				$('#draw_btn').val("Revoke Draw");
				break;
			case "Revoke draw":
				addLine(escapeHTML(player.username) + " has revoked the draw offer");
				$('#draw_btn').val("Offer Draw");
				break;
			case "Accept draw":
				acceptDraw(player, data);
				break;
			case "Offer rematch":
				addLine(escapeHTML(player.username) + " offered a rematch");
				if (isPlayer2(player.username)) {
					$('#rematch_btn').val("Accept Rematch");
					return;
				}
				$('#rematch_btn').val("Revoke Rematch");
				break;
			case "Revoke rematch":
				addLine(escapeHTML(player.username) + " has revoked the rematch offer");
				$('#rematch_btn').val("Offer Rematch");
				break;
			case "Accept rematch":
				used_allotted_rematch = 1;
				$('#rematch_btn').val("Offer Rematch");
				break;
			case "Done siding":
				if (!duelist && player == Player1()) {
					$('#done_siding1').show();
				}
				else if (duelist && player.username == username) {
					clearHoles();
					$('#done_siding_btn').hide();
					$('#done_siding1').show();
				}
				else if (player == Player2()) {
					$('#done_siding2').show();
				}
				
				// Eyal282 here.
				playSound(Decided)
				break;
			case "Pick first":
				pickFirstResponse(data);
				break;
			case "Target card":
				actionsQueue.push(function(){
					targetCardResponse(player, data); // when not using actionsQueue, it messed up replays
				});
				break;
				break;
			case "Stop viewing":
				stopViewing(data);
				break;
			case "Shuffle deck":
				actionsQueue.push(function(){
					shuffleDeck(player, data);
				});
				break;
			case "Shuffle hand":
				actionsQueue.push(function(){
					shuffleHand2(player, data);
				});
				break;
			case "Permission event":
				permissionEvent(data);
				break;
			case "Permission granted":
				removePermission();
				break;
			case "Permission denied":
				addLine(escapeHTML(data.username) + " denied permission");
				if (isPlayer1(data.username)) {
					if ($('#status1 .status_txt').text() == "Waiting for permission") {
						$('#status1 .status_txt').text("");
					}
				}
				else if (isPlayer2(data.username)) {
					if ($('#status2 .status_txt').text() == "Waiting for permission") {
						$('#status2 .status_txt').text("");
					}
				}
				break;
			case "Start turn":
				actionsQueue.push(function(){
					turn_player = getPlayer(data.username);
					startTurn();
				});
				break;
			case "Enter DP":
				actionsQueue.push(function(){
					enterDP();
				});
				break;
			case "Enter SP":
				actionsQueue.push(function(){
					enterSP();
				});
				break;
			case "Enter M1":
				actionsQueue.push(function(){
					enterM1();
				});
				break;
			case "Enter BP":
				actionsQueue.push(function(){
					enterBP();
				});
				break;
			case "Enter M2":
				actionsQueue.push(function(){
					enterM2();
				});
				break;
			case "Enter EP":
				actionsQueue.push(function(){
					enterEP();
				});
				break;
			case "End turn":
				actionsQueue.push(function(){
					endTurn(data);
				});
				break;
			case "Add counter":
				actionsQueue.push(function(){
					addCounter(player, data);
				});
				break;
			case "Remove counter":
				actionsQueue.push(function(){
					removeCounter(player, data);
				});
				break;
			case "Die":
				actionsQueue.push(function(){
					dieRoll(player, data);
				});
				break;
			case "Coin":
				actionsQueue.push(function(){
					coinFlip(player, data);
				});
				break;
			case "Life points":
				actionsQueue.push(function(){
					updateLifePoints(player, data);
				});
				break;
			case "View deck":
				if (duelist && player.username == username) {
					if (seen_deck == false) {
						//seen_deck = true;
						viewingE(data.viewing, data);
					}
				}
				showViewing(data);
				break;
			case "View GY":
			case "View GY 2":
			case "View Banished":
			case "View Banished 2":
			case "View ED 2":
			case "View Graveyard":
			case "View Extra Deck":
			case "View Opponent's Banished":
			case "View Opponent's Graveyard":
			case "View Opponent's Public Extra Deck":
				showViewing(data);
				break;
			case "View ED":
				if (duelist && player.username == username) {
					if (seen_extra == false) {
						seen_extra = true;
						viewingE("Extra Deck", data);
					}
				}
				showViewing(data);
				break;
			case "Show deck":
			case "Show hand":
			case "Show ED":
			case "Show Extra Deck":
				actionsQueue.push(function(){
					showE(data.viewing, data);
				});
				break;
			case "Reveal":
			case "Reveal card from hand":
			case "Reveal card from deck":
			case "Reveal from Extra":
				actionsQueue.push(function(){
					reveal(player, data);
				});
				break;
			case "Move":
				actionsQueue.push(function(){
					move(player, data);
				});
				break;
			case "Overlay":
				actionsQueue.push(function(){
					overlay(player, data);
				});
				break;
			case "Detach":
				actionsQueue.push(function(){
					detach(player, data);
				});
				break;
			case "Attack":
				actionsQueue.push(function(){
					attack(player, data);
				});
				break;
			case "Attack directly":
				actionsQueue.push(function(){
					attackDirectly(player, data);
				});
				break;
			case "Draw card":
				actionsQueue.push(function(){
					drawCard(player, data);
				});
				break;
			case "To hand":
			case "To hand 2":
			case "To hand from deck":
			case "To hand from field":
			case "To hand from grave":
			case "To hand from Extra":
			case "To hand from banished":
				actionsQueue.push(function(){
					toHand(player, data);
				});
				break;
			case "To B Deck":
			case "To B Deck 2":
			case "To T Deck":
			case "To T Deck 2":
			case "To T Deck FU":
			case "To T Deck 2 FU": // Parasite Paracide
				actionsQueue.push(function(){
					toDeck(player, data);
				});
				break;
			case "To GY":
			case "To grave from deck":
			case "To grave from field":
			case "To grave from hand":
			case "To Grave from Extra":
			case "To grave from banished":
			case "To grave from opponent's banished":
				actionsQueue.push(function(){
					toGY(player, data);
				});
				break;
			case "Mill":
				actionsQueue.push(function(){
					mill(player, data);
				});
				break;
			case "Banish":
			case "Banish FD":
			case "Banish from deck":
			case "Banish top card of deck":
			case "Banish top card of deck FD":
			case "Banish FD from deck":
			case "Banish from field":
			case "Banish from field FD":
			case "Banish from hand":
			case "Banish from hand FD":
			case "Banish Xyz Material":
			case "Banish from Extra":
			case "Banish from Extra FD":
			case "Banish from grave":
			case "Banish from grave FD":
			case "Banish from opponent's grave":
				actionsQueue.push(function(){
					banish(player, data);
				});
				break;
			case "To ED":
			case "To ED FU":
			case "To Extra from field":
			case "To Extra FU from field":
			case "To Extra from grave":
			case "To Extra FU from grave":
			case "To Extra from banished":
			case "To Extra FU from banished":
				actionsQueue.push(function(){
					toED(player, data);
				});
				break;
			case "Normal Summon":
				actionsQueue.push(function(){
					normalSummon(player, data);
				});
				break;
			case "SS ATK":
			case "SS DEF":
			case "SS ATK from hand":
			case "SS ATK from deck":
			case "SS ATK from Extra":
			case "SS ATK from grave":
			case "SS ATK from banished":
			case "SS ATK from opponent's grave":
			case "SS ATK from opponent's banished":
			case "SS DEF from hand":
			case "SS DEF from deck":
			case "SS DEF from Extra":
			case "SS DEF from grave":
			case "SS DEF from banished":
			case "SS DEF from opponent's grave":
			case "SS DEF from opponent's banished":
					actionsQueue.push(function(){
						specialSummon(player, data);
					});
				break;
			case "OL ATK":
			case "OL DEF":
			case "OL ATK from Extra":
			case "OL DEF from Extra":
				actionsQueue.push(function(){
					olSummon(player, data);
				});
				break;
			case "Summon token":
			case "Summon Token":
				actionsQueue.push(function(){
					summonToken(player, data);
				});
				break;
			case "Remove Token":
				actionsQueue.push(function(){
					removeToken(player, data);
				});
				break;
			case "Flip":
			case "Flip monster":
				actionsQueue.push(function(){
					flip(player, data);
				});
				break;
			case "Flip Summon":
				actionsQueue.push(function(){
					flipSummon(player, data);
				});
				break;
			case "To ATK":
				actionsQueue.push(function(){
					toATK(player, data);
				});
				break;
			case "To DEF":
				actionsQueue.push(function(){
					toDEF(player, data);
				});
				break;
			case "Activate ST":
			case "Activate Spell":
			case "Activate Spell from hand":
				actionsQueue.push(function(){
					activateST(player, data);
				});
				break;
			case "To ST":
			case "To ST from deck":
			case "To ST from hand":
			case "To ST from grave":
				actionsQueue.push(function(){
					toST(player, data);
				});
				break;
			case "Set monster":
			case "Set monster from hand":
				actionsQueue.push(function(){
					setMonster(player, data);
				});
				break;
			case "Set ST":
			case "Set ST from deck":
			case "Set ST from hand":
			case "Set monster to ST from hand":
				actionsQueue.push(function(){
					setST(player, data);
				});
				break;
			case "Activate Field Spell":
			case "Activate Field Spell from hand":
				actionsQueue.push(function(){
					activateFieldSpell(player, data);
				});
				break;
			case "Activate Field Spell 2":
				actionsQueue.push(function(){
					activateFieldSpell2(player, data);
				});
				break;
			case "Set Field Spell":
			case "Set Field Spell from hand":
			case "Set Field Spell from deck":
				actionsQueue.push(function(){
					setFieldSpell(player, data);
				});
				break;
			case "Set Field Spell 2": // Set Rotation
			case "Set Field Spell from deck to opponent's field":
				actionsQueue.push(function(){
					setFieldSpell2(player, data);
				});
				break;
			case "Activate Pendulum Left":
			case "Activate Pendulum Left from field":
			case "Activate Pendulum Left from hand":
				actionsQueue.push(function(){
					activatePendulumLeft(player, data);
				});
				break;
			case "Activate Pendulum Right":
			case "Activate Pendulum Right from field":
			case "Activate Pendulum Right from hand":
				actionsQueue.push(function(){
					activatePendulumRight(player, data);
				});
				break;
			case "Activate Skill":
				actionsQueue.push(function(){
					activateSkill(player, data);
				});
				break;
			case "Set Skill":
				actionsQueue.push(function(){
					setSkill(player, data);
				});
				break;
			case "Change control":
				actionsQueue.push(function(){
					changeControl(player, data);
				});
				break;
			case "Add random card from deck to hand": // Crescent effect
				actionsQueue.push(function(){
					addRandomCardFromDeckToHand(player, data);
				});
				break;
			case "Turn top card face-up": // Grave Lure
			case "Turn top card of deck face-up":
				actionsQueue.push(function(){
					turnTopCardOfDeckFU(player, data);
				});
				break;
			case "Flip deck": // Convulsion of Nature
			case "Flip deck back":
				actionsQueue.push(function(){
					flipDeck(player, data);
				});
				break;
			case "Pick 2 cards": // Hi-Speedroid Rubber Band Shooter
			case "Pick 3 cards": // Spellbook Library of the Crescent, Power Tool Dragon, Lilith, Lady of Lament
				if (duelist && player.username == username) {
					viewingE(data.viewing, data);
					next_callback = data.callback; // moved here from below
				}
				showViewing(data);
				break;
			case "Cynet Storm": // Cynet Storm
				actionsQueue.push(function(){
					cynetStorm(player, data);
				});
				break;
			case "Exchange cards": // Exchange
				actionsQueue.push(function(){
					exchangeCards(player, data);
				});
				break;
			case "Attach top card from Deck 2": // Time Thief Redoer
				actionsQueue.push(function(){
					attachTopCardFromDeck2(player, data);
				});
				break;
			case "Swap":
				swap(player, data);
				return;
			case "New card":
				actionsQueue.push(function(){
					newCard(player, data);
				});
				break;
			case "Initialize cards":
				initalizeCards(player, data);
				break;
				
			// DEPRACATED PLAYS
			case "Flip decks":
				actionsQueue.push(function(){
					flipDecks(player, data);
				});
				break;
			case "Flip decks back":
				actionsQueue.push(function(){
					flipDecksBack(player, data);
				});
				break;
			case "Turn face-down":
				actionsQueue.push(function(){
					turnFaceDown(player, data);
				});
				break;
			case "Add proxy":
				actionsQueue.push(function(){
					addProxy(player, data);
				});
				break;
			case "Declare":
				actionsQueue.push(function(){
					declare(player, data);
				});
				break;
			case "Stay revealed":
				actionsQueue.push(function(){
					stayRevealed(player, data);
				});
				break;
			case "Stop revealing":
				actionsQueue.push(function(){
					stopRevealing(player, data);
				});
				break;
			case "Good":
				actionsQueue.push(function(){
					allGood(player, data);
				});
				break;
			case "Stop good":
				actionsQueue.push(function(){
					stopGood(player, data);
				});
				break;
			case "Thinking":
				//actionsQueue.push(function(){
					thinking(player, data);
					typingE(player);
				//});
				break;
			case "Countdown":
				//actionsQueue.push(function(){
					updateCountdown(player, data);
				//});
				break;
			case "Message":
				//addLine(data.line);
				break;
		}
		if (data.line) {
			addLine(escapeHTML(data.line));
		}	
		//if (duelist) {
			if (data.log) {
				if (data.log instanceof Array) {
					for (i = 0; i < data.log.length; i++) {
						data.log[i].seconds = data.seconds;
					}
				}
				else {
					data.log.seconds = data.seconds;
				}
				duelLogPrint(data.log);
			}
		//}
		performNextAction();
	}

	window.isPendulumAttacker = function(card)
	{
		let effect = card.data("cardfront").data("pendulum_effect")
		effect = effect.replaceAll("from your ", "")
		effect = effect.replaceAll("while in your ", "")
		
		if(effect.search(/This card can attack Pendulum/i) != -1)
			return true;
		
		return false;
	}

	window.isEitherTurnAttacker = function(card)
	{
		if(isMonster(player1, card) && card.data("cardfront").data("effect").search(/This card can attack during your opponent's battle phase/i) != -1)
			return true;
		
		else if(isST(player1, card) && isPendulumAttacker(card))
			return true;
		
		return false;
	}
	
	window.Eyal_IsCardAbleToShuffleToOpponentDeck = function(card)
	{
		let effect = card.data("cardfront").data("effect")
		
		if(effect.search(/Shuffle this card face-up into your opponent's Deck/i) != -1)
			return true;
		
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
		
		// /word/gi --> /word/Global ( all occurences ) case insensitive.
		effect = effect.replace(/graveyard/gi, "GY");
		
		if(effect.search(/each player swaps the cards in their GY with the cards in their deck/i) != -1 || effect.search(/swap the cards in your GY with the cards in your deck/i) != -1)
			return true;
		
		return false;
			
			
	}
	
	window.Eyal_IsCardAbleToPayHalfLP = function(card)
	{
		let effect = card.data("cardfront").data("effect");
		
		effect = effect.replace(/Life Points/gi, "LP");
		// /word/gi --> /word/Global ( all occurences ) case insensitive.
		effect = effect.replace(/pay half of your LP/gi, "pay half your LP");
		
		if(effect.search(/pay half your LP/i) != -1)
			return true;
		
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
	
	window.Eyal_getRandomInt = function(min, max)
	{
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * ((max + 1) - min) + min);
	}
	window.Eyal_snipeByArray = async function(opponentArr)
	{
		for(let dragonbuster=0;dragonbuster < opponentArr.length;dragonbuster++)
		{
			let arr = opponentArr[dragonbuster];
			
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
	window.Eyal_ExchangeOfTheSpirit = function()
	{
		if(player1.banished_arr.length > 0)
		{
			addLine("Please remove every card from banish zone first.")

			return;
		}
		
		let oldDeck = player1.main_arr.slice();
		let oldGY = player1.grave_arr.slice();
		
		for(let abc=0;abc < oldDeck.length;abc++)
		{
			cardMenuClicked(oldDeck[abc], "Banish");
		}

		for(let abc=0;abc < oldGY.length;abc++)
		{
			cardMenuClicked(oldGY[abc], "To T Deck");
		}

		for(let abc=0;abc < oldDeck.length;abc++)
		{
			cardMenuClicked(oldDeck[abc], "To GY");
		}
		
		cardMenuClicked(new Card(), "Shuffle deck")
	}
	if(potOfSwitch)
	{
		
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

			if(card.data("cardfront").data("name") == "Pot of Greed" || (card.data("cardfront").data("name") == "Sky Striker Mobilize - Engage!" && Eyal_CountSpellsInGY(player) >= 3))
			{	
				Eyal_pogSound.currentTime = 0;
				Eyal_pogSound.play();
				
				Eyal_music.pause();
				
				Eyal_pogSound.addEventListener("ended", function(){
					Eyal_pogSound.currentTime = 0;
					Eyal_pogSound.pause();
					
					if(kaibaThemeSlider > 0)
					{
						Eyal_tryStartMusic();
					}
				});
			
			}
			else
			{
				playSound(Activate);
			}
			questionE(card);
		}
	}
	else
	{	
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
			playSound(Activate);
			questionE(card);
		}
	}
}
