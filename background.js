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
		}
		
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

// This is a race

let intervalCounters = 50;

let raceInterval = setInterval(function () {
	if(intervalCounters > 0)
		intervalCounters--;
	
	else
		clearInterval(raceInterval);
	
	performInjection();
}, 250);



function performFastInjection(bSecond)
{
	// Is the extension user dueling? "duel_active" is for dueling and watching, while "duelist" is only for dueling
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		if(tabs[0] && tabs[0].url && (tabs[0].url.search("www.duelingbook.com") != -1 || tabs[0].url.search("https://duelingbook.com") != -1))
		{
			if(typeof tabs[0].id !== 'undefined')
			{
				chrome.storage.sync.get(['potOfSwitch', 'femOfSwitch', 'normalMusicDL', 'victoryMusicDL_V2', 'musicSliderDL', 'limitedCardsSound', 'randomRPS'], function(result)
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
					
					let randomRPS = false;
					
					if(result && result.randomRPS == true)
						randomRPS = result.randomRPS;
						
					
					chrome.scripting.executeScript(
					{
						args: [potOfSwitch, femOfSwitch, musicSliderDL, limitedCardsSound, randomRPS, bSecond, femaleCards],
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
				chrome.storage.sync.get(['potOfSwitch', 'femOfSwitch', 'normalMusicDL', 'victoryMusicDL_V2', 'musicSliderDL', 'limitedCardsSound'], function(result)
				{
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
					
					let limitedCardsSound = true;
					
					if(result && result.limitedCardsSound == false)
						limitedCardsSound = false;
						
					
					chrome.scripting.executeScript(
					{
						args: [potOfSwitch, femOfSwitch, normalMusicDL, victoryMusicDL, musicSliderDL, limitedCardsSound, femaleCards],
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
						args: [potOfSwitch, femOfSwitch, femaleCards],
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
8. pay half your LP
9. Special Summon 1 "Gorz Token"
10. Special Summon 4 "Named Tokens"
11. Special Summon as many "Named Tokens" (Stats Here!!!) as possible
12. Excavate the top 5 cards

*/


function fastInjectFunction(potOfSwitch, femOfSwitch, musicSliderDL, limitedCardsSound, randomRPS, bSecond)
{
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
	
	if(bSecond && randomRPS && duelist && player1.username == username)
	{
		if(currentLabel == "rps_start" && !pickedRPS && typeof rock1 !== 'undefined' && typeof paper1 !== 'undefined' && typeof scissors1 !== 'undefined')
		{
			let arr = [rock1[0], paper1[0], scissors1[0]];
			arr[Eyal_getRandomInt(0, arr.length-1)].click();
		}
	}
}

function censorInjectFunction(potOfSwitch, femOfSwitch, femaleCards)
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
		
	
		if(femOfSwitch && femaleCards.length > 0)
		{
			for(let abc=0;abc < Eyal_cards.length;abc++)
			{
				if(typeof Eyal_cards[abc].data === 'undefined')
					continue;
				
				if(Eyal_cards[abc].data("cardfront"))
					Eyal_cards[abc] = Eyal_cards[abc].data("cardfront");
				
				if(femaleCards.indexOf(Eyal_cards[abc].data("name")) != -1)
				{
					Eyal_cards[abc].removeImage();
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

function injectFunction(potOfSwitch, femOfSwitch, normalMusicDL, victoryMusicDL, musicSliderDL, limitedCardsSound, femaleCards)
{
	let Eyal_music = $('#Eyal_music')[0];
	
	if(typeof Eyal_music === "undefined")
	{
		// [0] is mandatory for some funny reason.
		Eyal_music = $(`<audio src="https://cdn.freesound.org/previews/649/649769_14275923-lq.mp3" id="Eyal_music" loop=true></audio>`)[0]
		document.body.appendChild(Eyal_music)
	}
	
	let Eyal_pogSound = $('#Eyal_pogSound')[0];
	
	if(typeof Eyal_pogSound === "undefined")
	{
		// [0] is mandatory for some funny reason.
		Eyal_pogSound = $(`<audio src="https://cdn.freesound.org/previews/649/649769_14275923-lq.mp3" id="Eyal_pogSound"></audio>`)[0]
		document.body.appendChild(Eyal_pogSound)
	}
	
	let Eyal_drawLimitedSound = $('#Eyal_drawLimitedSound')[0];
	
	if(typeof Eyal_drawLimitedSound === "undefined")
	{
		// [0] is mandatory for some funny reason.
		Eyal_drawLimitedSound = $(`<audio src="https://drive.google.com/uc?id=1udHcnHg1evmoS_axmqka9eGFEHbpkmzH&export=download" id="Eyal_drawLimitedSound"></audio>`)[0]
		document.body.appendChild(Eyal_drawLimitedSound)
	}
	
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
	
	
	Eyal_music.volume = (musicSliderDL / 100.0)
	
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
			
			if(Eyal_playSound)
			{
				Eyal_drawLimitedSound.currentTime = 0;
				Eyal_drawLimitedSound.play();
				
				Eyal_music.pause();
				
				Eyal_drawLimitedSound.addEventListener("ended", function(){
					Eyal_drawLimitedSound.currentTime = 0;
					Eyal_drawLimitedSound.pause();
					
					if(musicSliderDL > 0)
					{
						Eyal_tryStartMusic();
					}
				});
			}
		}
	}
	if(musicSliderDL > 0)
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
			
			if(musicSliderDL > 0)
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
		
		if(musicSliderDL > 0)
		{
			Eyal_tryStartMusic();
		}
	}
	
	window.playSound = function(sound, reset)
	{
		if(sound == gameLossSound || sound == gameWinSound)
		{
			Eyal_music.currentTime = 0;
			Eyal_music.pause();
			Eyal_music.paused = true;
		}
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
	
	
	window.Eyal_tryStartMusicAsync = async function()
	{
		let urlToPlay = Eyal_getNormalMusicURL()
		
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
		}
		
		if(urlToPlay == "Retry")
		{
			await Eyal_delay(3);
			
			Eyal_tryStartMusic();
			
			return;
		}
		
		
		if(Eyal_music.src != urlToPlay)
		{
			Eyal_music.volume = (musicSliderDL / 100.0)
			Eyal_music.pause();
			Eyal_music.src = urlToPlay;
		}
		else
		{
			Eyal_music.pause();
			Eyal_music.volume = (musicSliderDL / 100.0);
		}
		
		let result = Eyal_music.play();

		if (result !== undefined) {
			result.then(_ => {
				// autoplay starts!
			}).catch(async error => {
				//show error
				await Eyal_delay(4);
				
				Eyal_tryStartMusic();
			});
		}
	}
	window.Eyal_tryStartMusic = function()
	{	
		Eyal_tryStartMusicAsync();
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
	window.Eyal_swapCardMenuForPlayer = function(player)
	{
		for(let abc=0;abc < player.all_cards_arr.length;abc++)
		{
			player.all_cards_arr[abc].find('.content:first').off("mouseover");
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
		
	
		preview.find('.skillback').detach();
		showPreview(); // moved from below because setCardName

		preview.copyCard(cardfront);

		if(femOfSwitch && femaleCards.indexOf(cardfront.data("name")) != -1)
			preview.removeImage();
		
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
			preview_txt.html("<b>" + levelStr + cardfront.data("level") + "<br>" + "Pendulum Effect:</b><br>" + Eyal_MakePSCTColorOnEffect(escapeHTML(cardfront.data("pendulum_effect"))) + '<br><br>' + "<b>Monster Effect:</b><br>");
			if (cardfront.data("monster_color") == "Normal")
			{
				preview_txt.append("<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
			} else
			{
				preview_txt.append(Eyal_MakePSCTColorOnEffect(escapeHTML(cardfront.data("effect"))));
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
				preview_txt.html("<b>" + levelStr + cardfront.data("level") + "</b><br>" + Eyal_MakePSCTColorOnEffect(escapeHTML(cardfront.data("effect"))));
			}
			else if (cardfront.data("card_type") == "Skill")
			{
				preview_txt.html(escapeHTML(cardfront.data("pendulum_effect")) + "<br><br>" + escapeHTML(cardfront.data("effect")));
			}
			else
			{
				preview_txt.html(Eyal_MakePSCTColorOnEffect(escapeHTML(cardfront.data("effect"))));
			}
		}
	}
	
	window.Eyal_MakePSCTColorOnEffect = function(text)
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
	
	
	window.Send = function(data)
	{
		if(data.action == "Duel" && data.play == "Duel message")
		{
			let Eyal_message = data.message;
		
			if(actionsQueue.length > 0)
			{
				if(Eyal_messageStartsWith(Eyal_message, "/"))
					return;
				
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
			if(Eyal_messageStartsWith(Eyal_message, "/help2") || Eyal_messageStartsWith(Eyal_message, "/cmds2"))
			{
				Eyal_addColoredLine("037F51", "DB Unlock Command List:");
				
				addLine("/ex5 ==> Excavate 5 cards");
				addLine("/excavate5 ==> Excavate 5 cards");
				addLine("/unext ==> Unexcavate cards from ED face-up to top deck");
				addLine("/unexb ==> Unexcavate cards from ED face-up to bottom deck");
				addLine("/unexg ==> Unexcavate cards from ED face-up to GY");
				addLine("/search Skill D ==> Add a card that has 'Skill D' in name from your deck");
				addLine("/send Skill D ==> Mill a card that has 'Skill D' in name from your deck");
				addLine("/st Skill D ==> Places a card in S&T zone that has 'Skill D' in name from your deck");
				addLine("/ban Skill D ==> Banish a card that has 'Skill D' in name from your deck");
				addLine("/banfd Skill D ==> Banish a card face-down that has 'Skill D' in name from your deck");
				addLine("/atk Aleister ==> SS in ATK a card that has 'Aleister' in name from your deck");
				addLine("/def Aleister ==> SS in DEF a card that has 'Aleister' in name from your deck");
				addLine("/snipe ==> Randomly selects a card in your opponent's hand, field and set monsters, in sequence.");
				addLine("/rps ==> Randomly creates rock paper scissors selections.");
				addLine("/gy ==> Silently shows either player's GY.");
				addLine("/ld ==> Silently shows every Light and Dark in your GY.");
				addLine("/card Skill ==> Find's a card named Skill, or abbreviated Skill");
				
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
			
			if(Eyal_messageStartsWith(Eyal_message, "/ex"))
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
			if(Eyal_messageStartsWith(Eyal_message, "/unext") || Eyal_messageStartsWith(Eyal_message, "/unexb") || Eyal_messageStartsWith(Eyal_message, "/unexg"))
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
			if(Eyal_messageStartsWith(Eyal_message, "/rps"))
			{
				let arr = ["Rock", "Paper", "Scissors"];
				
				addLine("Only you can see the random results:");
				
				for(let abc=1;abc <= 5;abc++)
				{
					Eyal_addColoredLine("FF0000", arr[Eyal_getRandomInt(0, arr.length-1)]);
				}
				
				return;
			}
			if(Eyal_messageStartsWith(Eyal_message, "/gy"))
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
		}

		action = JSON.stringify(data, function(k,v){
			if (v == null) {
				v = undefined;
			}
			return v;
		});
		resend();
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
				if (card.data("cardfront").data("card_type") == "Monster" && !card.data("face_down")) {
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
				if (isIn(card, player1.hand_arr) < 0 && (!isExtraDeckCard(card) || isIn(card, player1.extra_arr) < 0))
				{
					menu.push({label:"To Hand",data:"To hand"});
				}
				if (isIn(card, player1.main_arr) < 0 && (!isExtraDeckCard(card) || isIn(card, player1.extra_arr) < 0))
				{
					menu.push({label:"To Top of Deck",data:"To T Deck"});
					menu.push({label:"To Main Deck FU",data:"To T Deck FU"});
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
						
					// Eyal282 here, I allowed extra deck face up to be returned to bottom because adamancipators.
					if (findEffect("bottom") && (isIn(card, player1.extra_arr) < 0 || !card.data("face_down"))) {
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
							case "Fiber Jar":
								menu.push({label:"Resolve Effect",data:"Eyal Fiber Jar"});
								break;
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
								menu.push({label:"Banish first 3 ED",data:"Banish first 3 ED FD"});
							
							if(countFaceDownExtraDeckCards(player1) >= 6)
								menu.push({label:"Banish first 6 ED",data:"Banish first 6 ED FD"});
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
					menu.push({label:"Banish FD",data:"Banish FD"});
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
				if (isIn(card, player1.grave_arr) >= 0 || isIn(card, player1.banished_arr) >= 0) {
					menu.push({label:"Attach",data:"Attach"});
				}
			}
		}
		
		showMenu(card, menu);
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
			if(card && data.username != player1.username && card.data("controller").hand_arr.includes(card))
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
		
		if(card && data.username != player1.username) {
			Eyal_addCardHoverLine(data.username + ' revealed <font color="0000FF">' + quote(data.card.name) + "</font>", card)
		}
	}
	
	window.toHand = function(player, data)
	{
		var card = removeFromDeck(player, data);
		
		// Don't care about non-deck, if card was removed from deck, it's in the deck.
		
		if(card && data.username != player1.username) {
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
			let Eyal_checked = $('#choose_zones_cb').prop("checked");

			$('#choose_zones_cb').checked(false);
			cardMenuClicked(card, "Change control");
			$('#choose_zones_cb').checked(Eyal_checked);
			
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
		
		else if(data == "Eyal Fiber Jar")
		{
			let Eyal_checked = $('#choose_zones_cb').prop("checked")

			$('#choose_zones_cb').checked(false)
			cardMenuClicked(card, "Change control")

			for(let abc = 0;abc < player1.all_cards_arr.length;abc++)
			{
				if(isIn(player1.all_cards_arr[abc], player1.extra_arr) >= 0)
					continue;
				
				else if(isIn(player1.all_cards_arr[abc], player1.banished_arr) >= 0)
					continue;
				
				else if(isIn(player1.all_cards_arr[abc], player1.main_arr) >= 0)
					continue;
				
				if(isIn(player1.all_cards_arr[abc], player1.grave_arr) >= 0)
				{
					cardMenuClicked(player1.all_cards_arr[abc], "SS ATK");
					
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
				
				
				if(isIn(player2.all_cards_arr[abc], player2.grave_arr) >= 0)
				{
					cardMenuClicked(player2.all_cards_arr[abc], "SS ATK");
					
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
			
			$('#choose_zones_cb').checked(Eyal_checked)
			cardMenuClicked(new Card(), "Shuffle deck");
			
			Eyal_addColoredLine("037F51", "Use /draw5 after your opponent shuffles everything.");
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
			
			return;
		}
		
		else if(data == "Eyal Banish")
		{
			cardMenuClicked(card, "To GY");
			cardMenuClicked(card, "Banish");
			exitViewing();
			
			return;
		}
		
		else if(data == "Eyal Banish FD")
		{
			cardMenuClicked(card, "To GY");
			cardMenuClicked(card, "Banish FD");
			exitViewing();
			
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
			
			exitViewing();
			
			return;
		}
		
		else if(data == "Eyal Declare Exodia")
		{	
			getConfirmation("Declare Victory?", "", Eyal_DeclareVictoryYes);
			
			exitViewing();
			
			return;
		}
		
		else if(data == "Eyal Xyz Material To Front")
		{	
			window.Eyal_XyzMaterial = card;
			
			getConfirmation("Bring Xyz Material to front?", "This will make a lot of actions at once.", Eyal_XyzMaterialToFrontYes);
			
			exitViewing();
			
			return;
		}
		else if(data == "Eyal To ED FU")
		{
			cardMenuClicked(card, "To T Deck");
			cardMenuClicked(card, "To ED FU");
		}
		if (data == "Choose card") {
			player1.temp_arr.push(card.data("id"));
			if (player1.temp_arr.length == 3 && viewing == "Deck (Picking 3 Cards)" || player1.temp_arr.length == 2 && viewing == "Deck (Picking 2 Cards)" || player1.temp_arr.length == 1 && viewing == "Deck (Picking Card)") {
				Send({"action":"Duel", "play":next_callback, "cards":player1.temp_arr});
				exitViewing();
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
				Send({"action":"Duel", "play":"To ST", "card":player1.hand_arr[abc].data("id"), "zone":"F-1"});
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
		let Eyal_AllCardsArr = [].concat(player1.all_cards_arr, player2.all_cards_arr);
		
        for(let abc=0;abc < Eyal_AllCardsArr.length;abc++)
        {
            let found = false;
            for(let def=0;def < Eyal_AllCardsArr[abc].data("xyz_arr").length;def++)
			{
				if(Eyal_AllCardsArr[abc].data("xyz_arr")[def].data("id") == card.data("id"))
				{
					found = true;
				}
			}

			if(found)
			{
				let Eyal_arr = [...Eyal_AllCardsArr[abc].data("xyz_arr")]
				
				for(let def=0;def < Eyal_arr.length;def++)
				{
					Send({"action":"Duel", "play":"Detach", "card":Eyal_arr[def].data("id")});
					
					if(Eyal_arr[def].data("id") == card.data("id"))
					{
						Eyal_arr.splice(def, 1)
						def--;
					}
				}

				Eyal_arr.push(card);
				// Make first card to be the Xyz monster.
				Eyal_arr.splice(0, 0, Eyal_AllCardsArr[abc])
				
				for(let def=0;def < Eyal_arr.length;def++)
				{
					console.log(Eyal_arr[def].data("cardfront").data("name"));
				}
				
				let inATK = false;
					
				if(Eyal_AllCardsArr[abc].data("inATK"))
					inATK = true;

				// Start at one to skip the Xyz monster, as we want to overlay on the previous card in the array.
				for(let def=1;def < Eyal_arr.length;def++)
				{
					Send({"action":"Duel", "play":"To ED", "card":Eyal_arr[def].data("id")});

					if(inATK)
						Send({"action":"Duel", "play":"OL ATK", "start_card":Eyal_arr[def].data("id"), "end_card":Eyal_arr[def-1].data("id")});

					else
						Send({"action":"Duel", "play":"OL DEF", "start_card":Eyal_arr[def].data("id"), "end_card":Eyal_arr[def-1].data("id")});;
				}
			}
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
	
	if(document.getElementById('view'))
		document.getElementById('view').style.top = "130px"
	
	if($("#life_txt").length > 0)
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
					
					let Eyal_message = data.message
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
						
					}
					else if(Eyal_messageStartsWith(Eyal_message, "/search") || Eyal_messageStartsWith(Eyal_message, "/send") || Eyal_messageStartsWith(Eyal_message, "/ban") || Eyal_messageStartsWith(Eyal_message, "/atk") || Eyal_messageStartsWith(Eyal_message, "/def") || Eyal_messageStartsWith(Eyal_message, "/st"))
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
				
				while($("#Imperm_Column").length > 0)
				{
					$("#Imperm_Column").remove();
				}
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
			case "Attach":
				actionsQueue.push(function(){
					attach(player, data);
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
			case "Pick 3 cards": // Spellbook Library of the Crescent, Power Tool Dragon, Lilith, Lady of Lament, Bingo Machine, Go!!!, My Friend Purrely
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
			"pic":TOKEN_START + tokenNumber + ".jpg"
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
	
	window.Eyal_IsCardAbleToPayHalfLP = function(card)
	{
		let effect = card.data("cardfront").data("effect");
		
		if(typeof effect === 'undefined')
			return false;
		
		effect = effect.replace(/Life Points/gi, "LP");
		// /word/gi --> /word/Global ( all occurences ) case insensitive.
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
			if(isExtraDeckCard(oldGY[abc]))
				cardMenuClicked(oldGY[abc], "To ED");
			
			else
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
					
					if(musicSliderDL > 0)
					{
						Eyal_tryStartMusic();
					}
				});
			
			}
			else
			{
				playSound(Activate);
				
				if(card.data("cardfront").data("card_type") == "Trap" && card.data("cardfront").data("effect").search(/if this card was Set before activation and is on the field at resolution, for the rest of this turn all other Spell\/Trap effects in this column are negated/i) != -1)
				{
					console.log("Imperm")
					
					
					let impermColumn = $(`<div id="Imperm_Column"></div>`)
					
					impermColumn.css("left", points[0] - 27);
					impermColumn.css("top", points[1] - 10);
					impermColumn.height(55);
					impermColumn.width(55);
					
					let impermColumnImage = $(`<img src="https://images.duelingbook.com/card-pics/9201.jpg"></img>`)
					
					impermColumnImage.attr("id", "Imperm_Column");
					impermColumnImage.css("opacity", 0.75);
					impermColumnImage.height(55);
					impermColumnImage.width(55);
					impermColumn.click(function() {
						while($("#Imperm_Column").length > 0)
						{
							$("#Imperm_Column").remove();
						}
					});
					
					impermColumn.append(impermColumnImage);
					
					$("#field").append(impermColumn);
				}
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
	
	window.Eyal_cardPoolChanged = function()
	{
		if($('#my_banlists .banlists2 .cardpool_sel').val() == "Eyal_clipboard")
		{
			getConfirmation("Make sure you have a .conf list of EDO Pro in your clipboard.", "Important notes:\n1. Every 10% progress it the decklist will save itself\n2. You cannot stop this action, and it will lag you.\n3. It will not delete the existing cardpool, only add cards.", Eyal_ClipboardBanlistYes);
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
		
		let import_arr = str.split("\n");
		
		let cards = [];
		
		let lastPercent = 0;
		
		console.log("Percents of completion for clipboard banlist importing:");
		for (let abc = 0;abc < import_arr.length;abc++)
		{
			curPercent = Math.floor((parseFloat(abc) / import_arr.length) * 100.0);
		
			if(lastPercent < curPercent)
			{
				if(curPercent % 10 == 0)
				{
					saveBanlistE();
					
					await Eyal_delay(1);
				}
				console.log("Progress: " + curPercent + "%");
				
				lastPercent = curPercent;
			}
			import_arr[abc] = import_arr[abc].trim();
			
			if(isNaN(import_arr[abc].charAt(0)))
				continue;
			
			let splittedLine = import_arr[abc].split(" ", 2);
			let cardId = parseInt(splittedLine[0]);
			let cardLimit = splittedLine[1];
			
			if(isNaN(cardLimit))
				continue;
			
			cardLimit = parseInt(cardLimit);
			
			if(cardLimit != 0 && cardLimit != 1 && cardLimit != 2 && cardLimit != 3)
				continue;
			
			for(let i=0;i < Cards.length;i++)
			{
				if(parseInt(Cards[i].serial_number) == cardId)
				{
					let cardfront = Eyal_lookupCard(Cards[i].name);
					
					if(cardfront == undefined)
						break;

					switch(parseInt(cardLimit))
					{
						case 0:
							addToBanlist(cardfront, $('.forbidden_section .banlist_cards'));
						break;
						
						case 1:
							addToBanlist(cardfront, $('.limited_section .banlist_cards'));
						break;
						
						case 2:
							addToBanlist(cardfront, $('.semi_limited_section .banlist_cards'));
						break;
						
						case 3:
							addToBanlist(cardfront, $('.unlimited_section .banlist_cards'));
						break;
					}
				}
			}
		}
		
		saveBanlistE();
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
		
		if($("#search .custom_cb").val() == "From Clipboard")
		{
			window.Eyal_old_cards = Cards.concat([]);
			
			Cards.length = 0;
			
			let str = await navigator.clipboard.readText();
			
			if(str.length == 0)
				return;
			
			let import_arr = str.split("\n");
				
			let cards = [];
			
			let lastPercent = 0;
			
			for(let abc=0;abc < import_arr.length;abc++)
			{
				let passcode = import_arr[abc].substring(0, import_arr[abc].indexOf(" "));
				
				let limit = parseInt(import_arr[abc].substring(import_arr[abc].indexOf(" "), import_arr[abc].length))
				
				// For inventory based cardpools
				if(limit > 3)
					limit = 3;
				
				// Not dealing with anime variants of cards...
				else if(limit == -1)
						continue;
				
				for (var i = 0; i < window.Eyal_old_cards.length; i++)
				{
					if (window.Eyal_old_cards[i] == null || window.Eyal_old_cards[i].name == null) {
						continue;
					}
					
					// Eyal282 here, this property breaks banlists and gives error "One or more cards are no longer available"
					
					if(window.Eyal_old_cards[i].hidden)
						continue;
						
					else if (window.Eyal_old_cards[i].serial_number == passcode) {
						let card = window.Eyal_old_cards[i];
						
						card.tcg_limit = limit;
						card.ocg_limit = limit;
						
						Cards.push(card);
						break;
					}
				}
			}
		}
		else
		{
			if(typeof window.Eyal_old_cards !== "undefined")
			{
				Cards = window.Eyal_old_cards.concat([]);
			}
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
			console.log("Spice");
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
	
	if($("#search .custom_cb option[value='From Clipboard']").length == 0)
	{
		$("#search .custom_cb").append($('<option>', {
             text: "From Clipboard",
             value: 'From Clipboard'
		}));
	}
	
	$("#search .custom_cb").off("change");
	$("#search .custom_cb").change(Eyal_DeckConstructorCardPoolChanged);


	if (Eyal_waitingForAction)
	{
		if (actionsQueue.length > 0)
			Eyal_waitingForAction = false;
    }
	// We're currently in https://www.duelingbook.com/card?id=513 
	if(typeof master !== "undefined" && typeof card_id !== "undefined")
	{
		let cardfront = my_card;
		
		let levelStr = "LEVEL: ";
		
		if(cardfront.data("monster_color") == "Xyz")
			levelStr = "RANK: ";
		
		if (cardfront.data("pendulum"))
		{
			preview_txt.html("<b>" + levelStr + cardfront.data("level") + "<br>" + "Pendulum Effect:</b><br>" + Eyal_MakePSCTColorOnEffect(escapeHTML(cardfront.data("pendulum_effect"))) + '<br><br>' + "<b>Monster Effect:</b><br>");
			if (cardfront.data("monster_color") == "Normal")
			{
				preview_txt.append("<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
			} else
			{
				preview_txt.append(Eyal_MakePSCTColorOnEffect(escapeHTML(cardfront.data("effect"))));
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
				preview_txt.html("<b>" + levelStr + cardfront.data("level") + "</b><br>" + Eyal_MakePSCTColorOnEffect(escapeHTML(cardfront.data("effect"))));
			}
			else if (cardfront.data("card_type") == "Skill")
			{
				preview_txt.html(escapeHTML(cardfront.data("pendulum_effect")) + "<br><br>" + escapeHTML(cardfront.data("effect")));
			}
			else
			{
				preview_txt.html(Eyal_MakePSCTColorOnEffect(escapeHTML(cardfront.data("effect"))));
			}
		}
	}
}
