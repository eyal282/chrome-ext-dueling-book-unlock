"use strict";

var actionsQueue = [];
var awaiting_admin = false;
var awaiting_defeat = false;
var awaiting_start_turn = false;
var awaiting_token = false;
var bottomChoice;
var bottomChoices;
var currentPhase;
var deckData;
var duel_active = false;
var duel_links = false;
var duel_log = $('#duel_log');
var duel_log_vsp = 1000;
var duel_logs = [];
var duel_vsp = 1000;
var duelFormat;
var easeSeconds = 0.3;
var easeSeconds2 = 0.4;
var easeSecondsBanish = 0.25;
var first;
var first_player;
var gameLossSound;
var games = 0;
var gameWinSound;
var handDestination = 0;
var lastDuelId = 0;
var life_amount;
var life_bar;
var lifepointMax = 0;
var linkLeft;
var linkLeftX = 426.3;
var linkLeftxEnd = 440;
var linkLeftxStart = 413;
var linkRight;
var linkRightX = 613;
var linkRightxEnd = 626;
var linkRightxStart = 599;
var links = false;
var linkY = 291.5;
var match = false;
var match_type;
var menu_card;
var paper1;
var paper2;
var pickedRPS = false;
var player1 = {};
var player2 = {};
var players;
var prev_life;
var rated = false;
var recycled_cards_arr = [];
var resetting = false;
var rock1;
var rock2;
var rpsWinner = "";
var scissors1;
var scissors2;
var second;
var show_cards = 0;
var solo = false;
var speed = false;
var stopQueue = true;
var topChoice;
var topChoices;
var turn_player = {};
var turnCount = 0;
var unknown_totals = false;
var used_allotted_rematch = 0;
var viewing;
var watch_chat = $('#watch_chat');
var watch_chat_limit = 0;
var watch_chat_vsp = 1000;
var watchers_data = [];
var watchers_vsp = 0;

var red_stream = loadSVGAnimation(red_stream, "red_stream", "red_stream", 500, 20, 24);
var blue_stream = loadSVGAnimation(blue_stream, "blue_stream", "blue_stream", 500, 20, 24);
var bubbles1 = new MovieClip();
var bubbles2 = new MovieClip();

$('#bubbles1').data("cycle", new MovieClip());
$('#bubbles2').data("cycle", new MovieClip());

var rpsTimer = new Timer(3000);
	rpsTimer.callback = rpsNext;

var counter_btn = new Counter();
	counter_btn.attr("id", "counter_btn");
	counter_btn.find('.total_txt').hide();
	counter_btn.insertAfter($('#minus_btn'));

var m1_counter = new Counter("m1_counter");
var m2_counter = new Counter("m2_counter");
var m3_counter = new Counter("m3_counter");
var s1_counter = new Counter("s1_counter");
var s2_counter = new Counter("s2_counter");
var opp_m1_counter = new Counter("opp_m1_counter");
var opp_m2_counter = new Counter("opp_m2_counter");
var opp_m3_counter = new Counter("opp_m3_counter");
var opp_s1_counter = new Counter("opp_s1_counter");
var opp_s2_counter = new Counter("opp_s2_counter");

var counters = [m1_counter, m2_counter, m3_counter, s1_counter, s2_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_s1_counter, opp_s2_counter];
counters.forEach(function(e,i){
	$('#counters').append(e);
});

//$('#view .content:first').mouseenter(showFaceDownCards);
//$('#view .content:first').mouseleave(hideFaceDownCards);
$('#duel .cout_txt').scroll(saveDuelVSP);
$('#duel .cout_txt').blur(restoreDuelVSP);
$('#grave_hidden').mouseover(graveOver);
$('#deck_hidden').mouseover(deckOver);
$('#opp_deck_hidden').mouseover(oppDeckOver);
$('#opp_grave_hidden').mouseover(oppGraveOver);
$('#grave_hidden').click(viewGY);
$('#opp_grave_hidden').click(viewGY2);
$('.duel_avatar .rating').mouseover(showRating);
$('.duel_avatar .rating').mouseleave(hideRating);
//$('#avatar1 .nsfw_btn').click(showDuelNSFW);
//$('#avatar2 .nsfw_btn').click(showDuelNSFW);
//$('#avatar1 .rating').click(hideDuelNSFW);
//$('#avatar2 .rating').click(hideDuelNSFW);
$('#avatar1 .rating').click(showAbilities);
$('#avatar2 .rating').click(showAbilities);
$('#duel_log .log_txt').scroll(saveDuelLogVSP);
$('#duel_log .log_txt').blur(restoreDuelLogVSP);
$('#duel_log .search_txt').on('input', updateDuelLog);
$('#duel_log .chat_cb').change(updateDuelLog);
$('#duel_log .duel_cb').change(updateDuelLog);
$('#duel_log .game_cb').change(updateDuelLog);
$('#duel_log .private_cb').change(updateDuelLog);
$('#duel_log .usernames_cb').change(updateDuelLog);
$('#watchers_btn').mouseover(function(){
	$('#watch_chat_tooltip').show();
});
$('#watchers_btn').mouseout(function(){
	$('#watch_chat_tooltip').hide();
});
$('#log_btn').mouseover(function(){
	$('#log_tooltip').show();
});
$('#log_btn').mouseout(function(){
	$('#log_tooltip').hide();
});
addDragging($('#duel_log'), ".chat_top_bg", ".chat_background", function(){
	appendChat($('#duel_log'));
});
addButton($('#duel_log .minimize_btn'), toggleDuelLog);
addButton($('#over .ok_btn'), hideDuelOver);
addButton($('#log_btn'), toggleDuelLog);
addButton($('#view .exit_btn'), exitViewing);
addButton($('#abilities .exit_btn'), exitAbilities);

for (var s = 1; s < 7; s++) {
	getElement("side" + s).innerHTML = "", addClass(getElement("side" + s), "activate"), drawDice(s, s);
}
watch($('#coin img'), 'transform', function(){
	var rotationY = getRotationY(this);
	if (rotationY < 0) {
		$('#coin .heads').hide();
	}
	else {
		$('#coin .heads').show();
	}
});
if (SAFARI) {
	$('#overlay img').attr("src", "images/overlay.png");
}

function startDuel(data) {
	console.log('startDuel');
	hideDim();
	duel_active = true;
	links = data.links;
	solo = (data.format == "so");
	rated = data.rated;
	match_type = data.type;
	duelFormat = data.format;
	if (data.type == "m") {
		match = true;
	}
	lifepointMax = 400;
	duelId = data.id;
	lastDuelId = data.id;
	deckData = data;
	player1 = new Player();
	player2 = new Player();
	players = [player1, player2];
	turn_player = player1;
	player1.username = data.player1.username;
	player2.username = data.player2.username;
	player1.opponent = player2;
	player2.opponent = player1;
	player1.skill = data.player1.skill;
	player2.skill = data.player2.skill;
	player1.abilities = data.player1.abilities;
	player2.abilities = data.player2.abilities;
	exitAbilities();
	
	log('player1.abilities:');
	console.log(player1.abilities);
}

function gotoDuel(str) {
	goto('duel');
	$('.duel_frame').hide();
	$('#' + str).show();
	currentLabel = str;
	$('#duel_content').show();
	switch(str) {
		case "duel_start":
			$('#tp_start').show();
			break;
		default:
			$('#numbers span').text("");
			$('#duel_content').hide();
			break;
	}
}

function initWatcher() {
	console.log('initWatcher');
	player1.initPlayer1();
	player2.initPlayer2();
	player1.bubbles = $('#bubbles1');
	player2.bubbles = $('#bubbles2');
	preview.hide();
	$('#duel .preview').append(preview);
	preview_txt.hide();
	preview_txt.insertAfter(preview);
	$('#over').hide();
	$('#log_btn').hide()
	$('#log_tooltip').hide();
	$('.duel_avatar .rating_txt').hide();
	$('.duel_avatar .rating_txt').css("opacity", 0);
	$('.duel_status .status_txt').text("");
	$('.duel_avatar .aura').hide();
	$('#duel .cin_txt').hide();
	$('#duel .html_cb').hide();
	$('#duel .cout_txt').css("height", 246);
	watch_chat.find('.cout_txt').html("");
	watch_chat.find('.cin_txt').val("");
	$('#bubbles1').hide();
	$('#bubbles2').hide();
	$('#bubbles1').data("cycle").stop();
	$('#bubbles2').data("cycle").stop();
	$('.duel_avatar .gone').hide();
	$('.duel_avatar .nsfw').css("opacity", 0);
	$('.duel_avatar .nsfw').hide();
	$('.duel_avatar .nsfw_btn').hide();
	$('#avatar1').show();
	$('#avatar2').show();
	
	$('#rematch_btn').hide();
	$('#rematch_btn').disable(true);
	if (duelist && !solo) {
		$('#rematch_btn').show();
	}
	
	$('#call_admin_btn').disable(true);
	$('#call_admin_btn').hide();
	$('#draw_btn').hide();
	$('#defeat_btn').hide();
	$('#cancel_duel_btn').hide();
	$('#host_loss_btn').hide();
	$('#opponent_loss_btn').hide();
	$('#reset_btn').hide();
	$('#duel #swap_btn').hide();
	$('#siding_btn').hide();
	$('#pause_btn').hide();
	duel_log.find('.log_txt').html("");
	$('#duel .refresh_btn').hide();
	$('.gone').hide();
	$('#duel .cout_txt').html("");
	$('#duel_content').append($('#field_content'));
	$('#card_menu').hide();
	$('#done_siding_btn').hide();
	$('#done_siding1').hide();
	$('#done_siding2').hide();
	$('#overlay').hide();
	$('.counter').css("pointer-events",	duelist ? "auto" : "none");
	$('#watchers .cell').detach();
	$('#watchers .watchers_txt').text("Watchers: 0");
	watchers_data = [];
	duel_vsp = 1000;
}

function rpsNext() {
	console.log("rpsNext entered");
	if (!pickedRPS && player1 == Player1() && duelist) {
		return;
	}
	if (currentLabel == "rps_start") {
		initTPStart();
		exitRPS();
	}
	rpsTimer.reset();
}

function exitRPS() {
	if (rock1) {
		rock1.detach();
		paper1.detach();
		scissors1.detach();
		rock2.detach();
		paper2.detach();
		scissors2.detach();
	}
}

function exitTP() {
	if (first) {
		first.detach();
		second.detach();
	}
}

function saveDuelLogVSP() {
	duel_log_vsp = $('#duel_log .log_txt').scrollTop();
	var maxVSP = $('#duel_log .log_txt').scrollMax();
	if (duel_log_vsp >= maxVSP - 80 || maxVSP < 0) {
		duel_log_vsp += 1000;
	}
}

function restoreDuelLogVSP() {
	$('#duel_log .log_txt').scrollTop(duel_log_vsp);
}
		
function duelLogPrint(data) {
	if (!data) {
		return;
	}
	if (data instanceof Array) {
		for (var i = 0; i < data.length; i++) {
			duel_logs.push(data[i]);
		}
		updateDuelLog();
	}
	else {
		duel_logs.push(data);
		var color = "#0000FF";
		var entry = data.public_log;
		var user = "";
		var str = "";
		var timestamp = getTimestamp(data.seconds);
		if (!data.seconds && data.timestamp) {
			timestamp = data.timestamp;
		}
		if ($('#duel_log .private_cb').is(":checked")) {
			if (data.private_log) {
				entry = data.private_log;
			}
		}
		if ($('#duel_log .search_txt').val() != "") {
			if (entry.toLowerCase().indexOf($('#duel_log .search_txt').val().toLowerCase()) < 0) {
				return;
			}
		}
		if (player1.username == data.username) {
			color = "#FF0000";
		}
		else if (player2.username == data.username) {
			color = "#0000FF";
		}
		else {
			color = "#000000";
		}
		if ($('#duel_log .usernames_cb').is(":checked")) {
			user = " " + data.username + ":";
		}
		if (data.type == "chat") {
			if ($('#duel_log .chat_cb').is(":checked")) {
				str += '<font color="' + color + '">' + timestamp + escapeHTML(user) + " <i>" + escapeHTML(entry) + "</i></font><br>";
			}
		}
		else if (data.type == "duel") {
			if ($('#duel_log .duel_cb').is(":checked")) {
				if (entry == "Entered Draw Phase") {
					str += '<font color="' + color + '">--------------------------------------------</font><br>';
				}
				str += '<font color="' + color + '">' + timestamp + escapeHTML(user) + " " + escapeHTML(entry) + '</font><br>';
			}
		}
		else {
			if ($('#duel_log .game_cb').is(":checked")) {
				str += '<font color="' + color + '">' + timestamp + escapeHTML(user) + " " + escapeHTML(entry) + '</font><br>';
			}
		}
		$('#duel_log .log_txt').append(str);
		$('#duel_log .log_txt').scrollTop(duel_log_vsp);
	}
}

function updateDuelLog() {
	var str = "";
	for (var i = 0; i < duel_logs.length; i++) {
		var color = "#0000FF";
		var entry = duel_logs[i].public_log;
		var user = "";
		var timestamp = getTimestamp(duel_logs[i].seconds);
		if (!duel_logs[i].seconds && duel_logs[i].timestamp) {
			timestamp = duel_logs[i].timestamp;
		}
		if ($('#duel_log .private_cb').is(":checked")) {
			if (duel_logs[i].private_log) {
				entry = duel_logs[i].private_log;
			}
		}
		if ($('#duel_log .search_txt').val() != "") {
			if (entry.toLowerCase().indexOf($('#duel_log .search_txt').val().toLowerCase()) < 0) {
				continue;
			}
		}
		if (player1.username == duel_logs[i].username) {
			color = "#FF0000";
		}
		else if (player2.username == duel_logs[i].username) {
			color = "#0000FF";
		}
		else {
			color = "#000000";
		}
		if ($('#duel_log .usernames_cb').is(":checked")) {
			user = " " + duel_logs[i].username + ":";
		}
		if (duel_logs[i].type == "chat") {
			if ($('#duel_log .chat_cb').is(":checked")) {
				str += '<font color="' + color + '">' + timestamp + escapeHTML(user) + " <i>" + escapeHTML(entry) + "</i></font><br>";
			}
		}
		else if (duel_logs[i].type == "duel") {
			if ($('#duel_log .duel_cb').is(":checked")) {
				if (entry == "Entered Draw Phase") {
					str += '<font color="' + color + '">--------------------------------------------</font><br>';
				}
				str += '<font color="' + color + '">' + timestamp + escapeHTML(user) + " " + escapeHTML(entry) + '</font><br>';
			}
		}
		else {
			if ($('#duel_log .game_cb').is(":checked")) {
				str += '<font color="' + color + '">' + timestamp + escapeHTML(user) + " " + escapeHTML(entry) + '</font><br>';
			}
		}
	}
	$('#duel_log .log_txt').html(str);
	$('#duel_log .log_txt').scrollTop(duel_log_vsp);
}

function getTimestamp(seconds) {
	var m = Math.floor(seconds / 60);
	var s = (seconds % 60).toString();
	if (s.length < 2) {
		s = '0' + s;
	}
	return '[' + m + ':' + s + ']';
}

function initRPSStart() {
	console.log("initRPSStart");
	gotoDuel("rps_start");
	if (solo) {
		$('.field_decks').css("opacity", 1);
		addCards();
		return;
	}
	$('#over').hide();
	$('#preview').hide();
	$('#preview_txt').hide();
	if (!duelist) {
		$('#duel #draw_btn').hide();
	}
	resetLifepoints();
	resetDuelButtons();
	rpsWinner = "";
	pickedRPS = false;
	
	rock1 = new Card();
	rock1.css("left", 319);
	rock1.css("top", 478);
	rock1.onRotate(true);
	$('#rps_start').append(rock1);

	paper1 = new Card();
	paper1.css("left", 523);
	paper1.css("top", 478);
	paper1.onRotate(true);
	$('#rps_start').append(paper1);
	
	scissors1 = new Card();
	scissors1.css("left", 727);
	scissors1.css("top", 478);
	scissors1.onRotate(true);
	$('#rps_start').append(scissors1);
	
	rock2 = new Card();
	rock2.css("left", 727);
	rock2.css("top", 162);
	$('#rps_start').append(rock2);
	
	paper2 = new Card();
	paper2.css("left", 523);
	paper2.css("top", 162);
	$('#rps_start').append(paper2);
	
	scissors2 = new Card();
	scissors2.css("left", 319);
	scissors2.css("top", 162);
	$('#rps_start').append(scissors2);

	TweenMax.set($('#rps_start .card'), {scale:0.4375});
	TweenMax.set([rock2, paper2, scissors2], {rotation:180});
	TweenMax.to($('#rps_start .card'), 0, {rotationY:180});
	if (duelist) {
		$('#duel .cin_txt').focus();
		if (player1 == Player1()) {
			rock1.addClass("rps_card");
			paper1.addClass("rps_card");
			scissors1.addClass("rps_card");
			TweenMax.to($('.rps_card'), 0, {rotationY:0});
		}
	}
	
	var data = {"name":"Rock", "effect":"Rock beats scissors but loses to paper", "card_type":"", "level":"", "power":"", "hero":"", "pic":"https://www.duelingbook.com/images/card/rock.jpg"};
	rock1.data("cardfront").initializeFromData(data);
	rock2.data("cardfront").initializeFromData(data);
	
	data = {"name":"Paper", "effect":"Paper beats rock but loses to scissors", "card_type":"", "level":"", "power":"", "hero":"", "pic":"https://www.duelingbook.com/images/card/paper.jpg"};
	paper1.data("cardfront").initializeFromData(data);
	paper2.data("cardfront").initializeFromData(data);
	
	data = {"name":"Scissors", "effect":"Scissors beats paper but loses to rock", "card_type":"", "level":"", "power":"", "hero":"", "pic":"https://www.duelingbook.com/images/card/scissors.jpg"};
	scissors1.data("cardfront").initializeFromData(data);
	scissors2.data("cardfront").initializeFromData(data);

	bottomChoices = [rock1, paper1, scissors1];
	topChoices = [rock2, paper2, scissors2];

	TweenMax.fromTo([rock1, paper1, scissors1], 0.5, {top:726.8}, {top:478.1, delay:0.3, ease:Expo.easeInOut});
	TweenMax.fromTo(rock2, 0.5, {top:-113.15}, {top:161.8, delay:0.3, ease:Expo.easeInOut});
	TweenMax.fromTo(paper2, 0.5, {top:-113.15}, {top:161.8, delay:0.3, ease:Expo.easeInOut});
	TweenMax.fromTo(scissors2, 0.5, {top:-113.15}, {top:161.8, delay:0.3, ease:Expo.easeInOut, onComplete:function() {
		if (duelist && Player1().username == username) {
			rock1.click(chooseRPS);
			paper1.click(chooseRPS);
			scissors1.click(chooseRPS);
		}
	}});
}

function determineWinner(data) {
	console.log('determineWinner');
	if (data.player2 == username) {
		data.player1 = username
		data.player2 = player2.username;
		var player1_original = data.player1_choice;
		var player2_original = data.player2_choice;
		data.player1_choice = player2_original;
		data.player2_choice = player1_original;
	}
	rpsWinner = data.winner;
	if (data.player1_choice == "Rock") {
		bottomChoice = rock1;
	}
	else if (data.player1_choice == "Paper") {
		bottomChoice = paper1;
	}
	else {
		bottomChoice = scissors1;
	}
	if (data.player2_choice == "Rock") {
		topChoice = rock2;
	}
	else if (data.player2_choice == "Paper") {
		topChoice = paper2;
	}
	else {
		topChoice = scissors2;
	}
	var rotY = 180;
	if (duelist) {
		rotY = 0;
	}
	if (Player1().username != username || !duelist) {
		for (i = 0; i < bottomChoices.length; i++) {
			if (bottomChoice[0] != bottomChoices[i][0]) {
				TweenMax.fromTo(bottomChoices[i], 0.5, {top:478}, {top:794, rotationY:getRotationY(bottomChoices[i][0]) + 360});
			}
			else {
				TweenMax.fromTo(bottomChoices[i], 0.5, {left:parseInt(bottomChoices[i].css("left"))}, {left:523, rotationY:360});
			}
		}
	}
	for (var i = 0; i < topChoices.length; i++) {
		if (topChoice[0] != topChoices[i][0]) {
			TweenMax.fromTo(topChoices[i], 0.5, {top:162, rotationY:-180}, {top:-113, rotationY:180});
		}
		else {
			$('#rps_start').append(topChoice);
			TweenMax.fromTo(topChoices[i], 0.5, {left:parseInt(topChoices[i].css("left"))}, {left:523, rotationY:360, onComplete:function(){
				TweenMax.fromTo(bottomChoice, 0.2, {top:parseInt(bottomChoice.css("top"))}, {top:447, ease:Linear.easeNone});
				TweenMax.fromTo(topChoice, 0.2, {top:parseInt(topChoice.css("top"))}, {top:193, ease:Linear.easeNone, onComplete:function(){
					if (data.winner == Player2().username) {
						TweenMax.fromTo(bottomChoice, 0.5, {top:447}, {top:794, ease:Linear.easeNone});
						TweenMax.fromTo(topChoice, 0.2, {top:193}, {top:320, ease:Linear.easeNone});
						rpsTimer.start();
					}
					else if (data.winner == Player1().username || data.winner != "") {
						TweenMax.fromTo(bottomChoice, 0.2, {top:447}, {top:320, ease:Linear.easeNone});
						TweenMax.fromTo(topChoice, 0.5, {top:193}, {top:-155, ease:Linear.easeNone});
						rpsTimer.start();
					}
					else {
						TweenMax.fromTo(bottomChoice, 0.2, {top:447}, {top:478, ease:Linear.easeNone});
						TweenMax.fromTo(topChoice, 0.2, {top:193}, {top:162, ease:Linear.easeNone, onComplete:function(){
							// RETURN ALL CARDS BACK TO ORIGINAL POSITIONS
							TweenMax.to(rock1, 0.5, {top:478, left:319, rotationY:rotY, ease:Linear.easeNone});
							TweenMax.to(paper1, 0.5, {top:478, left:523, rotationY:rotY, ease:Linear.easeNone});
							TweenMax.to(scissors1, 0.5, {top:478, left:727, rotationY:rotY, ease:Linear.easeNone});
							TweenMax.to(rock2, 0.5, {top:162, left:727, rotationY:180, ease:Linear.easeNone});
							TweenMax.to(paper2, 0.5, {top:162, left:523, rotationY:180, ease:Linear.easeNone});
							TweenMax.to(scissors2, 0.5, {top:162, left:319, rotationY:180, ease:Linear.easeNone, onComplete:function() {
								if (Player1().username == username && duelist) {
									rock1.click(chooseRPS);
									paper1.click(chooseRPS);
									scissors1.click(chooseRPS);
									rock1.css("pointer-events", "auto");
									paper1.css("pointer-events", "auto");
									scissors1.css("pointer-events", "auto");
									rock1.find('.content:first').css("pointer-events", "auto");
									paper1.find('.content:first').css("pointer-events", "auto");
									scissors1.find('.content:first').css("pointer-events", "auto");
								}
							}});
						}});
					}
				}});
			}});
		}
	}
}

function initTPStart() {
	console.log('initTPStart');
	gotoDuel("tp_start");
	if (duelist) {
		Send({"action":"Duel", "play":"Ready", "status":"Pick first"});
	}
	rpsTimer.reset();
	preview.hide();
	preview_txt.hide();
	if (duel_active) {
		resetDuelButtons();
	}
	$('#over').hide();
	resetLifepoints();
	$('#field').show();
	$('#field_content').hide();
	$('#cid1_txt').text("");
	$('#cid2_txt').text("");
	$('#cie1_txt').text("");
	$('#cie2_txt').text("");
	$('#cie1_txt').css("top", 515);
	first = new Card();
	first.css("left", 370.5);
	first.css("top", 320);
	first.css("transform", "scale(0.6875)");
	first.css("pointer-events", "none");
	first.find('.content').css("pointer-events", "auto");
	first.onRotate(true);
	var data = {"name":"First", "effect":"The player who picks this card will go first", "card_type":"", "power":"", "hero":"", "card_type":"", "level":"", "pic":"https://www.duelingbook.com/images/card/first.jpg"};
	first.data("cardfront").initializeFromData(data);
	first.insertBefore($('#over'));
	
	second = new Card();
	data = {"name":"Second", "effect":"The player who picks this card will go second", "card_type":"", "power":"", "hero":"", "card_type":"", "level":"", "pic":"https://www.duelingbook.com/images/card/second.jpg"};
	second.insertBefore($('#over'));
	
	second.css("left", 675.5);
	second.css("top", 320);
	second.css("transform", "scale(0.6875)");
	second.css("pointer-events", "none");
	second.find('.content').css("pointer-events", "auto");
	second.onRotate(true);
	second.data("cardfront").initializeFromData(data);
	
	if (!solo) {
		$('.field_decks').css("opacity", 0);
	}
	$('#field').css("pointer-events", "none");
	TweenMax.fromTo(first, 0.5, {top:-199}, {top:320, onComplete:function(){
		if (currentLabel.indexOf("tp_start") >= 0) {
			if (duelist && rpsWinner == username) {
				first.find('.content').click(pickFirst);
				first.addClass("tp_card");
				second.find('.content').click(pickFirst);
				second.addClass("tp_card");
			}
			TweenMax.to($('#' + currentLabel + ' .field_decks'), 1, {alpha:1, onComplete:function(){
				$('#numbers').insertBefore($('#over'));
				if (!solo) {
					addCards();
				}
			}});
		}
	}});
	TweenMax.fromTo(second, 0.5, {top:839}, {top:320});
}

function getCard(id) {
	for (var i = 0; i < players.length; i++) {
		for (var j = 0; j < players[i].all_cards_arr.length; j++) {
			if (players[i].all_cards_arr[j].data("id") == id) {
				return players[i].all_cards_arr[j];
			}
		}
	}
}

function duelResponse(data) {
	if (SOFT_PLAYS.indexOf(data.play) < 0) {
		$('#red_target').hide();
		$('#blue_target').hide();
		$('#green_target').hide();
	}
	var player;
	if (data.username == player1.username) {
		player = player1;
	}
	else if (data.username == player2.username) {
		player = player2;
	}
	if (data.owner && data.id) {
		updateOwner(getPlayer(data.owner), getCard(data.id));
	}
	switch (data.play) {
		case "Add watcher":
			addWatcher(data);
			break;
		case "Remove watcher":
			removeWatcher(data);
			break;
		case "Begin next duel":
			exitDueling();
			beginNextDuel(data);
			break;
		case "Back to RPS":
			exitRPS();
			exitTP();
			exitDueling();
			duel_active = true;
			if (duelist) {
				updateActive(true);
			}
			else {
				$('#draw_btn').hide();
			}
			initRPSStart();
			deckData = data;
			$('#draw_btn').val("Offer Draw");
			break;
		case "RPS":
			determineWinner(data);
			break;
		case "Typing":
			player.typingE();
			TweenMax.fromTo(player.bubbles, 0.25, {scale:0.45, alpha:0.75}, {scale:1, alpha:1});
			break;
		case "Duel message":
			duelChatPrint(data);
			if (player) {
				player.stopTyping();
			}
			if (duelist && data.username == username) {
				duelChatTimerE();
			}
			break;
		case "Reset game":
			actionsQueue.push(function(){
				resetGame(player, data);
			});
			break;
		case "Admit defeat":
			hideDim();
			admittedDefeat(player, data);
			break;
		case "Quit duel":
			quitDuel(player, data);
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
		case "Pick first":
			pickFirstResponse(data);
			break;
		case "Target card":
			targetCardResponse(player, data);
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
		case "Start turn":
			actionsQueue.push(function(){
				turn_player = getPlayer(data.username);
				startTurn();
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
		case "View GY2":
			showViewing(data);
			break;
		case "Show deck":
		case "Show hand":
			actionsQueue.push(function(){
				showE(data.viewing, data);
			});
			break;
		case "Reveal":
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
		case "Choose card":
			actionsQueue.push(function(){
				chooseCard(player, data);
			});
			break;
		case "Draw card":
			actionsQueue.push(function(){
				drawCard(player, data);
			});
			break;
		case "To hand":
		case "To hand 2":
			actionsQueue.push(function(){
				toHand(player, data);
			});
			break;
		case "To B Deck":
		case "To T Deck":
			actionsQueue.push(function(){
				toDeck(player, data);
			});
			break;
		case "To GY":
			actionsQueue.push(function(){
				toGY(player, data);
			});
			break;
		case "Mill":
			actionsQueue.push(function(){
				mill(player, data);
			});
			break;
		case "Summon":
			actionsQueue.push(function(){
				summon(player, data);
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
			actionsQueue.push(function(){
				activateST(player, data);
			});
			break;
		case "To ST":
			actionsQueue.push(function(){
				toST(player, data);
			});
			break;
		case "Set monster":
			actionsQueue.push(function(){
				setMonster(player, data);
			});
			break;
		case "Set ST":
			actionsQueue.push(function(){
				setST(player, data);
			});
			break;
		case "Change control":
			actionsQueue.push(function(){
				changeControl(player, data);
			});
			break;
		case "Change level":
			changeLevel(data);
			break;
	}
	if (data.line) {
		addLine(escapeHTML(data.line));
	}
	if (data.log) {
		if (data.log instanceof Array) {
			for (var i = 0; i < data.log.length; i++) {
				data.log[i].seconds = data.seconds;
			}
		}
		else {
			data.log.seconds = data.seconds;
		}
		duelLogPrint(data.log);
	}
	performNextAction();
}

function beginNextDuel(data) {
	rpsWinner = data.username;
	deckData = data;
	initTPStart();
	if (!duelist) {
		$('#draw_btn').hide();
	}
	if (solo) {
		addCards();
		$('.field_decks').css("opacity", 1);
	}
}

function pickFirstResponse(data) {
	console.log('pickFirstResponse');
	if (solo) {
		duelStart(data);
		$('#cid2_txt').hide();
		$('#cie2_txt').hide();
		$('#defeat_btn').hide();
		$('#draw_btn').val("View Replay");
		$('#draw_btn').css("top", 590);
		$('#call_admin_btn').hide();
		$('#reset_btn').show();
		$('#siding_btn').show();
		return;
	}
	first.css("pointer-events", "none");
	second.css("pointer-events", "none");
	players = [];
	if (data.order) {
		for (var i = 0; i < data.order.length; i++) {
			players.push(getPlayer(data.order[i]));
		}
	}
	else {
		players = [getPlayer(data.username), getPlayer(data.username).opponent];
	}
	first_player = data.username;
	turn_player = getPlayer(data.username);
	turn_player.opponent = players[players.length - 1];
	turn_player.opponent.opponent = turn_player;
	var num = 0;
	if (isPlayer1(data.username)) {
		TweenMax.fromTo(first, 0.5, {alpha:1}, {alpha:1, ease:Linear.easeNone, onUpdate:function(){
			num += 4;
			first.find('.content').css("box-shadow", "0px 0px " + num + "px #FF0000, 0px 0px " + num + "px #FF0000");
			second.find('.content').css("box-shadow", "0px 0px " + num + "px #0000FF, 0px 0px " + num + "px #0000FF");
		}});
		TweenMax.fromTo(first, 0.5, {top:320}, {top:839, delay:2, ease:Linear.easeNone});
		TweenMax.fromTo(second, 0.5, {top:320}, {top:-199, delay:2, ease:Linear.easeNone, onComplete:function(){
			if (currentLabel.indexOf("tp_start") >= 0) {
				duelStart(data);
			}
		}});
	}
	else {
		TweenMax.fromTo(second, 0.5, {alpha:1}, {alpha:1, ease:Linear.easeNone, onUpdate:function(){
			num += 4;
			second.find('.content').css("box-shadow", "0px 0px " + num + "px #FF0000, 0px 0px " + num + "px #FF0000");
			first.find('.content').css("box-shadow", "0px 0px " + num + "px #0000FF, 0px 0px " + num + "px #0000FF");
		}});
		TweenMax.fromTo(second, 0.5, {top:320}, {top:839, delay:2, ease:Linear.easeNone});
		TweenMax.fromTo(first, 0.5, {top:320}, {top:-199, delay:2, ease:Linear.easeNone, onComplete:function(){
			if (currentLabel.indexOf("tp_start") >= 0) {
				duelStart(data);
			}
		}});
	}
}

function addCards() {
	console.time("addCards");
	initDecks(deckData);
	shiftDeck(Player1());
	shiftDeck(Player2());
	deckData = null;
	console.timeEnd("addCards");
}

function initDecks(data) {
	console.log('initDecks');
	player1.resetDeck();
	player2.resetDeck();
	for (var i = 0; i < data.player1.main_total; i++) {
		var card = newDuelCard();
		card.data("id", data.player1.start + i);
		card.data("owner", player1);
		card.data("controller", player1);
		player1.main_arr.push(card);
		player1.all_cards_arr.push(card);
	}
	for (i = 0; i < data.player2.main_total; i++) {
		card = newDuelCard();
		card.data("id", data.player2.start + i);
		card.data("owner", player2);
		card.data("controller", player2);
		if (player1.username == username) {
			card.css("cursor", "pointer");
			card.click(targetCard);
		}
		player2.main_arr.push(card);
		player2.all_cards_arr.push(card);
	}
}

function shiftDeck(player) {
	if (currentLabel == "rps_start") {
		return;
	}
	if (viewing == "Deck" || viewing == "Opponent's Deck") {
		viewingE(viewing);
		return;
	}
	var mX = 0;
	var mY = 0;
	for (var i = player.main_arr.length - 1; i > -1; i--) {
		var rotY = 180;
		if (player.main_arr[i].data("face_up")|| player.deck_face_up) {
			if (player.main_arr[i].data("cardfront").data("initialized")) {
				rotY = 0;
			}
		}
		player.main_arr[i].css("left", player.deckX + mX);
		player.main_arr[i].css("top", player.deckY + mY);
		TweenMax.to(player.main_arr[i], 0, {scale:0.1485, rotation:player.rot, rotationY:rotY});
		mX += player.mX;
		mY += player.mY;
		$('#field').append(player.main_arr[i]);
		if (!player.main_arr[i].data("face_up")) {
			player.main_arr[i].onRotate();
		}
	}
	$('#cid1_txt').text(Player1().main_arr.length);
	$('#cid2_txt').text(Player2().main_arr.length);
}

function shiftGrave(player) {
	if (viewing.indexOf("Graveyard") >= 0) {
		viewingE(viewing);
		return;
	}
	var gX = 0;
	var gY = 0;
	for (var i = player.grave_arr.length - 1; i > -1; i--) {
		TweenMax.to(player.grave_arr[i], 0, {rotationY:0});
		player.grave_arr[i].css("left", player.graveX + gX);
		player.grave_arr[i].css("top", player.graveY + gY);
		TweenMax.to(player.grave_arr[i], 0, {scale:0.1485, rotation:player.rot});
		gX += player.gX;
		gY += player.gY;
		$('#field').append(player.grave_arr[i]);
	}
	$('#cig1_txt').text(Player1().grave_arr.length);
	$('#cig2_txt').text(Player2().grave_arr.length);
}

function addDeckChildren(player) {
	for (var i = player.main_arr.length - 1; i > -1; i--) {
		$('#field').append(player.main_arr[i]);
	}
}

function removeTopCardFromDeck(player) {
	var card = player.main_arr.splice(0, 1)[0];
	card.data("face_up", false);
	$('#cid1_txt').text(Player1().main_arr.length);
	$('#cid2_txt').text(Player2().main_arr.length);
	updateViewing();
	return card;
}

function determineHandPosition(player) {
	switch(player.hand_arr.length) {
		case 1:
			handDestination = player.hand_position_arr[0];
			break;
		case 2:
			handDestination = player.hand_position_arr[1];
			break;
		case 3:
			handDestination = player.hand_position_arr[2];
			break;
		case 4:
			handDestination = player.hand_position_arr[3];
			break;
		case 5:
			handDestination = player.hand_position_arr[4];
			break;
		default:
			handDestination = player.hand_position_arr[5];
			break;
	}
}

function initHand(player, remove_sleeves) {
	for (var i = 0; i < player.hand_arr.length; i++) {
		TweenMax.to(player.hand_arr[i], 0, {scale:0.25, rotation:player.rot, top:player.handY})
	}
	organizeHand(player, false, true);
}

function organizeHand(player, fast, instant) {
	if (fast !== true) {
		fast = false;
	}
	if (instant !== true) {
		instant = false;
	}
	if (currentLabel.indexOf("duel_start") < 0) {
		return;
	}
	if (viewing == "Opponent's Hand" && player == Player2()) {
		return;
	}
	var duration = easeSeconds;
	if (fast) {
		duration = 0.25;
	}
	else if (instant) {
		duration = 0;
	}
	if (player == Player1()) {
		switch(player.hand_arr.length) {
			case 0:
				break;
			case 1:
				TweenMax.to(player.hand_arr[0], duration, {left:485, ease:Linear.easeNone, immediateRender:instant});
				break;
			case 2:
				TweenMax.to(player.hand_arr[0], duration, {left:435, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[1], duration, {left:535, ease:Linear.easeNone, immediateRender:instant});
				break;
			case 3:
				TweenMax.to(player.hand_arr[0], duration, {left:385, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[1], duration, {left:485, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[2], duration, {left:585, ease:Linear.easeNone, immediateRender:instant});
				break;
			case 4:
				TweenMax.to(player.hand_arr[0], duration, {left:335, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[1], duration, {left:435, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[2], duration, {left:535, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[3], duration, {left:635, ease:Linear.easeNone, immediateRender:instant});
				break;
			case 5:
				TweenMax.to(player.hand_arr[0], duration, {left:285, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[1], duration, {left:385, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[2], duration, {left:485, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[3], duration, {left:585, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[4], duration, {left:685, ease:Linear.easeNone, immediateRender:instant});
				break;
			default:
				TweenMax.to(player.hand_arr[0], duration, {left:272, ease:Linear.easeNone, immediateRender:instant});
				for (var i = 1; i < player.hand_arr.length; i++) {
					TweenMax.to(player.hand_arr[i], duration, {left:((432 / (player.hand_arr.length - 1)) * i) + 272, ease:Linear.easeNone, immediateRender:instant});
				}
		}
	}
	else {
		switch(player.hand_arr.length) {
			case 0:
				break;
			case 1:
				TweenMax.to(player.hand_arr[0], duration, {left:485, ease:Linear.easeNone, immediateRender:instant});
				break;
			case 2:
				TweenMax.to(player.hand_arr[0], duration, {left:535, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[1], duration, {left:435, ease:Linear.easeNone, immediateRender:instant});
				break;
			case 3:
				TweenMax.to(player.hand_arr[0], duration, {left:585, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[1], duration, {left:485, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[2], duration, {left:385, ease:Linear.easeNone, immediateRender:instant});
				break;
			case 4:
				TweenMax.to(player.hand_arr[0], duration, {left:635, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[1], duration, {left:535, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[2], duration, {left:435, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[3], duration, {left:335, ease:Linear.easeNone, immediateRender:instant});
				break;
			case 5:
				TweenMax.to(player.hand_arr[0], duration, {left:685, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[1], duration, {left:585, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[2], duration, {left:485, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[3], duration, {left:385, ease:Linear.easeNone, immediateRender:instant});
				TweenMax.to(player.hand_arr[4], duration, {left:285, ease:Linear.easeNone, immediateRender:instant});
				break;
			default:
				TweenMax.to(player.hand_arr[0], duration, {left:704, ease:Linear.easeNone, immediateRender:instant});
				for (i = 1; i < player.hand_arr.length; i++) {
					TweenMax.to(player.hand_arr[i], duration, {left:704 - ((432 / (player.hand_arr.length - 1)) * i), ease:Linear.easeNone, immediateRender:instant});
				}
		}
	}
	for (i = 0; i < player.hand_arr.length; i++) {
		$('#duel .cards').append(player.hand_arr[i]);
	}
}

function updateController(player, card) {
	card.data("controller", player);
	if (duelist && card.data("controller") == Player1()) {
		card.off("click", targetCard);
		card.css("cursor", "auto");
	}
	else if (duelist || admin) {
		card.off("click", targetCard);
		card.click(targetCard);
		card.css("cursor", "pointer");
	}
}

function updateOwner(player, card) {
	card.data("owner", player);
}

function gotoDueling() {
	gotoDuel('duel_start');
	//setupDuelField();
	initUserDuelStart();
	if (duelist) {
		initDuelistDuelStart();
	}
	else {
		initWatcherDuelStart();
	}
}

function getPlayer(str) {
	if (str == player1.username) {
		return player1;
	}
	if (str == player2.username) {
		return player2;
	}
	return null;
}

function getController(data, player) {
	if (!data) {
		return player;
	}
	if (data == player1.username) {
		return player1;
	}
	else if (data == player2.username) {
		return player2;
	}
	return null;
}

function performNextAction() {
	if (currentLabel.indexOf("duel_start") < 0) {
		return;
	}
	if (stopQueue) {
		return;
	}
	if (actionsQueue.length > 0) {
		stopQueue = true;
		actionsQueue[0]();
		updateCounters();
	}
}

function endAction() {
	if (resetting) {
		return;
	}
	updateCounters();
	if (actionsQueue.length > 0) {
		actionsQueue.splice(0, 1);
	}
	stopQueue = false;
	if (actionsQueue.length > 0) {
		performNextAction();
	}
}

function updateStats() {
	var zones = [player1.m1, player1.m2, player1.m3, player2.m1, player2.m2, player2.m3];
	var texts = [player1.m1_txt, player1.m2_txt, player1.m3_txt, player2.m1_txt, player2.m2_txt, player2.m3_txt];
	for (var i = 0; i < zones.length; i++) {
		if (zones[i]) {
			if (zones[i].data("cardfront").data("card_type") == "Monster" && zones[i].data("cardfront").data("atk")) {
				if ( zones[i].data("face_down") && !show_cards && !duelist || duelist && zones[i].data("face_down") && !isPlayer1(zones[i].data("controller").username) || TweenMax.isTweening(zones[i])) {
					texts[i].hide();
				}
				else {
					texts[i].text(zones[i].data("cardfront").data("atk"));
					if (zones[i].data("cardfront").data("monster_color") != "Link") {
						texts[i][0].innerHTML += "/" + zones[i].data("cardfront").data("def");
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
}

function updateCounters() {
	var cards =  [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2];
	for (var i = 0; i < counters.length; i++) {
		if (cards[i]) {
			if (~~cards[i].data("counters") > 0 && !TweenMax.isTweening(cards[i])) {
				counters[i].show();
				counters[i].find('.total_txt').text(cards[i].data("counters"));
				if (linkLeft && cards[i][0] == linkLeft[0]) {
					if (cards[i].data("controller") == player1) {
						counters[i].css("left", 440.45);
						counters[i].css("top", 315.5);
					}
					else {
						counters[i].css("left", 414.8);
						counters[i].css("top", 272.9);
					}
				}
				else if (linkRight && cards[i][0] == linkRight[0]) {
					if (cards[i].data("controller") == player1) {
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

function Player() {
	var player = {};
	player.stopTyping = function(){
		player.typing_timer.reset();
		player.bubbles.hide();
		player.bubbles.data("cycle").stop();
	}

	player.typingE = function(){
		player.typing_timer.start();
		player.bubbles.show();
		player.bubbles.data("cycle").play();
	}
	player.username = "";
	player.main_arr = [];
	player.grave_arr = [];
	player.hand_arr = [];
	player.field_arr = [];
	player.all_cards_arr = [];
	player.handY = 0;
	player.deckX = 0;
	player.deckY = 0;
	player.graveX = 0;
	player.graveY = 0;
	player.monsterY = 0;
	player.spellY = 0;
	player.mX = 0;
	player.mY = 0;
	player.gX = 0;
	player.gY = 0;
	player.rot = 0;
	player.rotY = 0;
	player.hand_position_arr = [];
	player.m1X = 0;
	player.m2X = 0;
	player.m3X = 0;
	player.s1X = 0;
	player.s2X = 0;
	player.m1Y = 0;
	player.m2Y = 0;
	player.m3Y = 0;
	player.s1Y = 0;
	player.s2Y = 0;
	player.m1xStart = 0;
	player.m1xEnd = 0;
	player.m2xStart = 0;
	player.m2xEnd = 0;
	player.m3xStart = 0;
	player.m3xEnd = 0;
	player.m1;
	player.m2;
	player.m3;
	player.s1;
	player.s2;
	player.opponent;
	player.lifepoints = 400;
	player.m1_txt;
	player.m2_txt;
	player.m3_txt;
	player.typing_timer = new Timer(5000);
	player.typing_timer.callback = player.stopTyping;
	player.bubbles;
	player.level = 1;
	player.abilities = [];
	
	player.initPlayer1 = function(){
		player.handY = 603;
		player.deckX = 801;
		player.deckY = 508;
		player.graveX = 801;
		player.graveY = 384.5;
		player.monsterY = 384.5;
		player.spellY = 476.5;
		player.mX = 0.2925;
		player.mY = 0.1025;
		player.gX = 0.283;
		player.gY = 0.067;
		player.rot = 0;
		player.rotY = 0;
		player.hand_position_arr = [485, 535, 585, 635, 685, 704];
		player.m1X = 370;
		player.m2X = 520;
		player.m3X = 670;
		player.s1X = 444;
		player.s2X = 595;
		player.m1Y = 384.5;
		player.m2Y = 384.5;
		player.m3Y = 384.5;
		player.s1Y = 477.5;
		player.s2Y = 477.5;
		player.m1xStart = 357;
		player.m1xEnd = 384;
		player.m2xStart = 507;
		player.m2xEnd = 534;
		player.m3xStart = 657;
		player.m3xEnd = 684;
	};
	
	player.initPlayer2 = function(){
		player.handY = -21;
		player.deckX = 239;
		player.deckY = 73;
		player.graveX = 239;
		player.graveY = 199.5;
		player.monsterY = 198.5;
		player.spellY = 105.5
		player.mX = -0.2925;
		player.mY = -0.1025;
		player.gX = -0.283;
		player.gY = -0.067;
		player.rot = 180;
		player.rotY = 180;
		player.hand_position_arr = [485, 435, 385, 335, 285, 285];
		player.m1X = 670;
		player.m2X = 520;
		player.m3X = 370;
		player.s1X = 595
		player.s2X = 444;
		player.m1Y = 199.5;
		player.m2Y = 199.5;
		player.m3Y = 199.5;
		player.s1Y = 105.5;
		player.s2Y = 105.5;
		player.m1xStart = 683;
		player.m1xEnd = 656;
		player.m2xStart = 533;
		player.m2xEnd = 506;
		player.m3xStart = 384;
		player.m3xEnd = 357;
	}
	
	player.resetDeck = function(){
		player.main_arr = [];
		player.grave_arr = [];
		player.hand_arr = [];
		player.main_arr = [];
		player.all_cards_arr = [];
		player.m1 = null;
		player.m2 = null;
		player.m3 = null;
		player.s1 = null;
		player.s2 = null;
		player.lifepoints = 400;
		player.level = 1;
		
		for (var i = 0; i < player.abilities.length; i++) {
			player.abilities[i].used = false;
			player.abilities[i].unavailable = false;
		}
	}
	return player;
}

function initUserDuelStart() {
	console.log('initUserDuelStart');
	viewing = "";
	currentPhase = "";
	$('#field').show();
	$('#field_content').show();
	$('#numbers').insertBefore($('#red_stream'));
	$('#coin').hide();
	$('#die').hide();
	$('#red_stream').hide();
	$('#blue_stream').hide();
	red_stream.stop();
	blue_stream.stop();
	$('#counters .counter').hide()
	resetLifepoints();
	actionsQueue = [];
	awaiting_defeat = false;
	awaiting_start_turn = false;
	awaiting_token = false;
	hideSelectZones();
	$('#red_target').hide();
	$('#blue_target').hide();
	$('#green_target').hide();
	$('#sword').hide();
	$('#overlay').hide();
	$('#view').hide();
	$('#end_turn').hide();
	$('#cig2_txt').hide();
	$('#cig1_txt').hide();
	player1.m1_txt = $('#hm1_txt');
	player1.m2_txt = $('#hm2_txt');
	player1.m3_txt = $('#hm3_txt');
	player2.m1_txt = $('#om1_txt');
	player2.m2_txt = $('#om2_txt');
	player2.m3_txt = $('#om3_txt');
	$('#start_turn').hide();
	$('#duel #field_content').css("opacity", 0);
	$('#field').prepend($('#field_content'));
	$('#field_stats > span').text("");
	$('#field_stats > span').hide();
}

function initWatcherDuelStart() {
	console.log('initWatcherDuelStart');
	$('#shuffle_btn').hide();
	$('#show_hand_btn').hide();
	$('#auto_draw_cb').hide();
	$('#auto_draw_lbl').hide();
	$('#choose_zones').hide();
	counter_btn.hide();
	$('#duel .token_btn').hide();
	$('#coin_btn').hide();
	$('#die_btn').hide();
	$('#lp_txt').hide();
	$('#life_txt').hide();
	$('#plus_btn').hide();
	$('#minus_btn').hide();
	if (duelist) {
		$('#turn').hide();
	}
}

function resetGame(player, data) {
	if (resetting) {
		return;
	}
	resetting = true;
	var total = 0;
	var times = 0;
	outerloop:
	for (var i = 0; i < player.all_cards_arr.length; i++) {
		for (var j = 0; j < player.main_arr.length; j++) {
			if (player.main_arr[j].data("id") == player.all_cards_arr[i].data("id")) {
				player.all_cards_arr[i].data("face_down", false);
				player.all_cards_arr[i].data("face_up", false);
				continue outerloop;
			}
		}
		var card = removeCard(player, {"id":player.all_cards_arr[i].data("id")});
		if (!card) {
			card = removeCard(player.opponent, {"id":player.all_cards_arr[i].data("id")});
			if (!card) {
				continue;
			}
		}
		if (card.data("cardfront").data("monster_color") == "Token") {
			player.all_cards_arr.splice(i, 1);
			card.remove();
			card = null;
			i--;
			continue;
		}
		var xPosition = card.data("controller").deckX;
		var yPosition = card.data("controller").deckY;
		player.main_arr.push(card);
		total++;
		$('#field').append(card);
		TweenMax.killTweensOf(card);
		TweenMax.to(card, easeSeconds, {left:xPosition, top:yPosition, scale:0.1485, rotation:card.data("controller").rot, rotationY:180, delay:total * 0.25, ease:Linear.easeNone, onComplete:function(){
			times++;
			if (total == times) {
				resetting = false;
				shuffleDeck(player, data);
			}
		}});
	}
}

function newDuelCard() {
	var card = new Card();
	card.on("mouseover click", previewE);
	if (duelist) {
		card.find('.content:first').mouseover(cardMenuE);
		card.find('.content:first').mouseleave(menuOutE);
	}	
	card.find('.cardfront').hide();
	TweenMax.to(card, 0, {rotationY:180, scale:0.1485});
	return card;
}

function showRating(e) {
	/*var mc = $(this);
	if (mc[0] == $('#pause_btn')[0]) {
		if ($('#avatar1 .rating').is(":visible")) {
			mc = $('#avatar1 .rating');
		}
		else {
			mc = $('#avatar2 .rating');
		}
	}
	if (mc[0] == $('#avatar2 .rating')[0] && solo) {
		return;
	}
	mc.find('.rating_txt').show();
	TweenMax.to(mc.find('.rating_txt'), 0.25, {alpha:1});
	if (duelist && ((!viewing) || viewing == "Paused Game") && currentLabel.indexOf("duel_start") == 0) {
		$('#pause_btn').show();
		TweenMax.to($('#pause_btn').data("proxy"), 0.25, {alpha:1});
	}*/
}

function hideRating() {
	/*var mc = $(this);
	if (mc[0] == $('#pause_btn')[0]) {
		if ($('#avatar1 .rating').is(":visible")) {
			mc = $('#avatar1 .rating');
		}
		else {
			mc = $('#avatar2 .rating');
		}
	}
	TweenMax.to(mc.find('.rating_txt'), 0.25, {alpha:0, onComplete:function(){
		mc.find('.rating_txt').hide();
	}});
	if (duelist) {
		TweenMax.to($('#pause_btn').data("proxy"), 0.25, {alpha:0, onComplete:function(){
			$('#pause_btn').hide();
		}});
	}*/
}
		
function resetLifepoints() {
	player1.lifepoints = lifepointMax;
	player2.lifepoints = lifepointMax;
	$('.lifepoints .black_bar').css("width", 0);
	$('.lifepoints .life_txt').text(lifepointMax);
}

function saveDuelVSP(e) {
	duel_vsp = $('#duel .cout_txt').scrollTop();
	var maxVSP = $('#duel .cout_txt').scrollMax();
	if (duel_vsp >= maxVSP - 80) {
		duel_vsp += 1000;
	}
}

function restoreDuelVSP() {
	$('#duel .cout_txt').scrollTop(duel_vsp);
}

function duelChatPrint(data) {
	saveDuelVSP();
	var color = "#0000FF";
	if (data.color) {
		color = "#" + data.color;
	}
	if (player1.username == data.username) {
		if (color == "#0000FF") {
			color = "#FF0000";
		}
	}
	if (!data.html) {
		data.message = escapeHTMLWithLinks(data.message);
	}
	$('#duel .cout_txt').append('<b><font color="' + color + '">' + escapeHTML(data.username) + ": </font></b><font>" + data.message + '</font><br>');
	restoreDuelVSP();
}

function addLine(str) {
	saveDuelVSP();
	$('#duel .cout_txt').append('<b>' + str + '</b><br>');
	restoreDuelVSP();
}

function graveOver() {
	if (player1.grave_arr.length > 0) {
		previewCard(player1.grave_arr[0]);
		$('#grave_hidden').css("cursor", "pointer");
	}
	else {
		$('#grave_hidden').css("cursor", "auto");
	}
}

function oppGraveOver() {
	if (player2.grave_arr.length > 0) {
		previewCard(player2.grave_arr[0]);
		$('#opp_grave_hidden').css("cursor", "pointer");
	}
	else {
		$('#opp_grave_hidden').css("cursor", "auto");
	}
}

function deckOver() {
	if (Player1().main_arr.length < 1) {
		return;
	}
	if (TweenMax.isTweening(Player1().main_arr[0])) {
		return;
	}
	if (Player1().deck_face_up || Player1().main_arr[0].data("face_up")) {
		previewFront(Player1().main_arr[0].data("cardfront"));
	}
}

function oppDeckOver() {
	if (Player2().main_arr.length < 1) {
		return;
	}
	if (Player2().main_arr[0].data("face_up") || Player2().deck_face_up || (duelist && player1.skill == "Prescience" && findCard(["Prescience"]) && (player2.lifepoints > player1.lifepoints * 2))) {
		previewFront(Player2().main_arr[0].data("cardfront"));
	}
}

function addCounter(player, data) {
	console.time("addCounter");
	var card = getFieldCard(player, data);
	card.data("counters", data.total);
	updateCounters();
	addLine(escapeHTML(player.username) + " placed a counter on \"" + card.data("cardfront").data("name") + "\" (now " + data.total + ")");
	endAction();
	console.timeEnd("addCounter");
}

function removeCounter(player, data) {
	var card = getFieldCard(player, data);
	card.data("counters", data.total);
	updateCounters();
	addLine(escapeHTML(player.username) + " removed a counter from \"" + card.data("cardfront").data("name") + "\" (now " + data.total + ")");
	endAction();
}

function viewGY() {
	if (viewing != "") {
		return;
	}
	if (player1.grave_arr.length > 0) {
		if (Duelist()) {
			Send({"action":"Duel", "play":"View GY"});
		}
		viewingE("Graveyard");
	}
}

function viewGY2() {
	if (viewing != "") {
		return;
	}
	if (findCard(["Question"])) {
		return;
	}
	if (player2.grave_arr.length > 0) {
		if (Duelist()) {
			Send({"action":"Duel", "play":"View GY 2"});
		}
		viewingE("Opponent's Graveyard");
	}
	endAction();
}

function viewingE(str, data) {
	if (!str) {
		return;
	}
	var arr = [];
	switch (str) {
		case "Deck":
		case "Choosing Card":
			arr = Player1().main_arr;
			break;
		case "Graveyard":
			arr = player1.grave_arr;
			break;
		case "Opponent's Graveyard":
			arr = player1.opponent.grave_arr;
			break;
		case "Opponent's Hand":
			arr = Player1().opponent.hand_arr;
			break;
		case "Opponent's Deck":
			arr = Player1().opponent.main_arr;
			break;
	}
	viewing = str;
	var title = "Viewing " + str;
	if (str == "Choosing Card") {
		title = str;
	}
	$('#view .title_txt').text(title);
	if (Duelist()) {
		$('#status1 .status_txt').text(title);
	}
	viewCards(arr, data);
}

function showViewing(data) {
	var str = "Viewing " + data.viewing;
	if (data.viewing == "Choosing Card") {
		str = data.viewing;
	}
	if (duelist && data.username == Player1().username && Player1() != player1 || !duelist && data.username == Player1().username) {
		$('#status1 .status_txt').text(str);
	}
	else if (data.username == Player2().username) {
		$('#status2 .status_txt').text(str);
	}
	if (data.deck) {
		data.deck = undefined;
	}
}

function shiftDecks() {
	shiftDeck(Player1());
	shiftDeck(Player2());
	shiftGrave(Player1());
	shiftGrave(Player2());
}

function removeCard(player, data) {
	var card = removeFromHand(player, data);
	if (!card) {
		card = removeFromDeck(player, data);
	}
	if (!card) {
		card = removeFromGY(player, data);
	}
	if (!card) {
		card = removeFromField(player, data);
	}
	return card;
}

function removeFromHand(player, data) {
	for (var i = 0; i < player.hand_arr.length; i++) {
		if (player.hand_arr[i].data("id") == data.id) {
			var card = player.hand_arr.splice(i, 1)[0];
			card.detach();
			updateViewing();
			organizeHand(player);
			return card;
		}
	}
	return null
}

function removeFromDeck(player, data) {
	for (var i = 0; i < player.main_arr.length; i++) {
		if (player.main_arr[i].data("id") == data.id) {
			var card = player.main_arr.splice(i, 1)[0];
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

function removeFromGY(player, data) {
	for (var i = 0; i < player.grave_arr.length; i++) {
		if (player.grave_arr[i].data("id") == data.id) {
			var card = player.grave_arr.splice(i, 1)[0];
			card.detach();
			//card.data("cardfront").autoLoad();
			shiftGrave(card.data("owner"));
			updateViewing();
			return card;
		}
	}
	return null;
}

function removeFromField(player, data, keep_stats) {
	if (keep_stats !== true) {
		keep_stats = false;
	}
	var card;
	if (player.m3) {
		if (player.m3.data("id") == data.id) {
			card = player.m3;
			player.m3 = null;
			player.m3_txt.text("");
		}
	}
	if (player.m2) {
		if (player.m2.data("id") == data.id) {
			card = player.m2;
			player.m2 = null;
			player.m2_txt.text("");
		}
	}
	if (player.m1) {
		if (player.m1.data("id") == data.id) {
			card = player.m1;
			player.m1 = null;
			player.m1_txt.text("");
		}
	}
	if (player.s2) {
		if (player.s2.data("id") == data.id) {
			card = player.s2;
			player.s2 = null;
		}
	}
	if (player.s1) {
		if (player.s1.data("id") == data.id) {
			card = player.s1;
			player.s1 = null;
		}
	}
	if (!card) {
		return null;
	}
	if (card.data("controller") != card.data("owner")) {
		card.data("controller", card.data("owner"));
		card.off("click", targetCard);
		card.css("cursor", "auto");
		if (!isPlayer1(card.data("owner").username)) {
			card.click(targetCard);
			card.css("cursor", "pointer");
		}
	}
	if (keep_stats == false) {
		card.data("face_down", false);
		card.data("counters", 0);
	}
	updateCounters();
	updateViewing();
	return card;
}

function restoreHandCards() {
	for (var i = 0; i < Player1().hand_arr.length; i++) {
		if (!TweenMax.isTweening(Player1().hand_arr)) {
			Player1().hand_arr[i].css("top", Player1().handY);
		}
	}
}

function getPointsByZone(player, zone) {
	switch (zone) {
		case "M-1":
			return [player.m1X, player.m1Y];
		case "M-2":
			return [player.m2X, player.m2Y];
		case "M-3":
			return [player.m3X, player.m3Y];
		case "S-1":
			return [player.s1X, player.s1Y];
		case "S-2":
			return [player.s2X, player.s2Y];
	}
	return null;
}

function getNextMonsterZone(player, card, data) {
	var points = [];
	if (data.zone) {
		switch (data.zone) {
			case "M-1":
				player.m1 = card;
				break;
			case "M-2":
				player.m2 = card;
				break;
			case "M-3":
				player.m3 = card;
				break;
		}
		points = getPointsByZone(player, data.zone);
		updateController(player, card);
		return points;
	}
	if (player.m2 == null) {
		player.m2 = card;
		points = [player.m2X, player.m2Y];
	}
	else if (player.m3 == null) {
		player.m3 = card;
		points = [player.m3X, player.m3Y];
	}
	else if (player.m1 == null) {
		player.m1 = card;
		points = [player.m1X, player.m1Y];
	}
	else {
		endAction();
		return null;
	}
	updateController(player, card);
	return points;
}

function getNextSTZone(player, card, data) {
	var points = [];
	if (data.zone) {
		switch (data.zone) {
			case "S-1":
				player.s1 = card;
				break;
			case "S-2":
				player.s2 = card;
				break;
		}
		points = getPointsByZone(player, data.zone);
		updateController(player, card);
		return points;
	}
	if (player.s2 == null) {
		player.s2 = card;
		points = [player.s2X, player.s2Y];
	}
	else if (player.s1 == null) {
		player.s1 = card;
		points = [player.s1X, player.s1Y];
	}
	else {
		endAction();
		return null;
	}
	updateController(player, card);
	return points;
}

function targetCardResponse(player, data) {
	var targeting_target;
	var targeting_player;
	var targeted_card;
	if (data.username == Player1().username) {
		targeting_target = $('#red_target')
		targeting_player = Player2();
	}
	else if (data.username == Player2().username) {
		targeting_target = $('#blue_target')
		targeting_player = Player1();
	}
	else {
		targeting_target = $('#green_target')
		targeting_player = Player1();
	}
	for (var i = 0; i < targeting_player.all_cards_arr.length; i++) {
		if (targeting_player.all_cards_arr[i]) {
			if (targeting_player.all_cards_arr[i].data("id") == data.id) {
				targeted_card = targeting_player.all_cards_arr[i];
				break;
			}
		}
	}
	if (i == targeting_player.all_cards_arr.length) {
		for (var j = 0; j < targeting_player.opponent.all_cards_arr.length; j++) {
			if (targeting_player.opponent.all_cards_arr[j]) {
				if (targeting_player.opponent.all_cards_arr[j].data("id") == data.id) {
					targeted_card = targeting_player.opponent.all_cards_arr[j];
					break;
				}
			}
		}
	}
	if (targeted_card) {
		targeting_target.css("left", parseInt(targeted_card.css("left")));
		targeting_target.css("top", parseInt(targeted_card.css("top")));
		TweenMax.to(targeting_target, 0, {rotation:getRotation(targeted_card[0]), scale:getScale(targeted_card[0])});
		targeting_target.show();
		targeted_card.parent().append(targeting_target);
	}
}

function shuffleHand(player, data) {
	restoreHandCards();
	if (player == Player1().opponent && viewing == "Opponent's Hand" || player.hand_arr.length < 2) {
		onComplete();
		return;
	}
	TweenMax.to(player.hand_arr, 0.25, {left:485, ease:Linear.easeNone, onComplete:onComplete});
	
	function onComplete() {
		updateIDs(player.hand_arr, data.hand, data.prev);
		player.hand_arr = shuffle(player, player.hand_arr, data.hand);
		organizeHand(player, true);
		endAction();
	}
}

function updateIDs(arr, new_ids, prev_ids) {
	if (prev_ids) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < prev_ids.length; j++) {
				if (arr[i].data("id") == prev_ids[j]) {
					//log('setting ' + arr[i].data("cardfront").data("name") + 's id from ' + arr[i].data("id") + ' to ' + new_ids[j]);
					arr[i].data("id", new_ids[j]);
				}
			}
		}
		return;
	}
	for (var i = 0; i < arr.length; i++) {
		arr[i].data("id", new_ids[i]);
	}
}

function shuffleHand2(player, data) {
	restoreHandCards();
	TweenMax.to(player.hand_arr, 0.25, {left:485, ease:Linear.easeNone, onComplete:function(){
		updateIDs(player.hand_arr, data.hand, data.prev);
		player.hand_arr = shuffle(player, player.hand_arr, data.hand);
		organizeHand(player, true);
		endAction();
	}});
}

function shuffle(player, arr, data) {
	try {
		var data0 = data.slice();
		if (player == Player1().opponent && viewing == "Opponent's Hand") {
			return arr;
		}
		var temp_arr = [];
		var total = arr.length;
		while (arr.length > 0) {
			if (arr[0].data("sleeve") != player.sleeve) {
				arr[0].setSleeve(player.sleeve);
			}
			temp_arr.push(arr[0]);
			arr.splice(0, 1);
		}
		outerloop:
		while (arr.length < total) {
			for (var i = 0; i < temp_arr.length; i++) {
				if (temp_arr[i].data("id") == data0[0]) {
					arr.push(temp_arr[i]);
					data0.splice(0, 1);
					continue outerloop;
				}
			}
			arr.push(removeCard(player, {"id":data0[0]}));
			data0.splice(0, 1);
			continue outerloop;
		}
		return arr;
	}
	catch(e) {
		console.log(e.message);
	}
	return arr;
}

function viewCards(arr, data) {
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
		if (data && data.deck && data.deck[i]) {
			if (!arr[i].data("cardfront").data("initialized") || data.deck[i].id != arr[i].data("cardfront").data("id")) {
				arr[i].data("cardfront").initializeFromData(data.deck[i]);
			}
		}
		else if (viewing.indexOf("Opponent") < 0) {
			if (!arr[i].data("cardfront").data("initialized") && data && data.deck && data.deck[i]) {
				arr[i].data("cardfront").initializeFromData(data.deck[i]);
			}
		}
		arr[i].css("left", viewingX);
		arr[i].css("top", viewingY);
		TweenMax.to(arr[i], 0, {rotation:0, scale:0.1485, rotationY:0});		
		if (arr[i].data("cardfront") && !arr[i].data("cardfront").data("initialized")) {
			arr[i].showFaceDown();
		}
		viewingX += 70.5;
		if (viewingX > 536.5) {
			viewingX = 43;
			viewingY += 97;
		}
		$('#view > .content').append(arr[i]);
	}
	$('#view').show();
}

function exitViewing(e) {
	if (e && viewing == "Choosing Card") {
		return;
	}
	if (duelist && viewing) {
		Send({"action":"Duel", "play":"Stop viewing", "viewing":viewing});
		player1.temp_arr = [];
	}
	removeCardMenu();
	viewing = "";
	$('#view .title_txt').text("");
	$('#view > .content').scrollTop(0);
	$('#view').hide();
	shiftDecks();
}

function reveal(player, data) {
	var card = revealFromHand(player, data);
	if (!card) {
		card = revealFromDeck(player, data);
	}
}

function revealFromHand(player, data) {
	for (var i = 0; i < player.hand_arr.length; i++) {
		if (player.hand_arr[i].data("id") == data.id) {
			var card = player.hand_arr[i];
			removeFromHand(player, data);
			organizeHand(player);
			revealAndToHand(player, card, data);
			return card;
		}
	}
	return null;
}

function revealFromDeck(player, data) {
	var card = removeFromDeck(player, data);
	if (!card) {
		return null;
	}
	revealAndToTopOfDeck(card.data("controller"), card, data);
	return card;
}

function revealAndToHand(player, card, data) {
	if (viewing) {
		removeCardMenu();
	}
	$('#duel .cards').append(card);
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds2, {left:512, top:280, scale:0.5, rotation:0, rotationY:0, onComplete:function(){ 
		previewCard(card);
		determineHandPosition(player);
		var rotY = 180;
		if (isPlayer1(player.username) && show_cards || show_cards == 2) {
			rotY = 0;
		}
		TweenMax.to(card, easeSeconds2, {left:handDestination, top:player.handY, scale:0.25, rotation:player.rot, rotationY:rotY, delay:0.5, onStart:function(){
			player.hand_arr.push(card);
			organizeHand(player);
		}, onComplete:function(){
			shuffleHand(player, data);
		}});
	}});
}

function revealAndToTopOfDeck(player, card, data) {
	$('#duel .cards').append(card);
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:0, onComplete:function(){ 
		previewCard(card);
		TweenMax.to(card, easeSeconds, {left:player.deckX, top:player.deckY, scale:0.1485, rotation:player.rot, rotationY:180, delay:0.5, onStart:function(){
			player.main_arr.unshift(card);
		}, onComplete:function(){ 
			shiftDeck(player);
			endAction();
		}});
	}});
}

function revealAndToBottomOfDeck(player, card, data) {
	$('#field').append(card);
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:0, onComplete:function(){ 
		previewCard(card);
		TweenMax.to(card, easeSeconds, {left:player.deckX, top:player.deckY, scale:0.1485, rotation:player.rot, rotationY:180, delay:0.5, onStart:function(){
			player.main_arr.push(card);
			addDeckChildren(player);
		}, onComplete:function(){ 
			shiftDeck(player);
			endAction();
		}});
	}});
}

function move(player, data) {
	var card = removeFromField(player, data, true);
	var points;
	var rot = getRotation(card[0]);
	if (data.zone.indexOf("S-") >= 0) {
		points = getNextSTZone(player, card, data);
	}
	else {
		points = getNextMonsterZone(player, card, data);
	}
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], rotation:rot, scale:0.1485, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function attack(player, data) {
	var Data = {};
	Data.id = data.attacking_id;
	var attacking_card = getFieldCard(player, Data);
	Data.id = data.attacked_id;
	var attacked_card = getFieldCard(player.opponent, Data);
	var target = $('#red_target');
	if (player == Player2()) {
		target = $('#blue_target');
	}
	TweenMax.to(target, 0, {left:parseInt(attacked_card.css("left")), top:parseInt(attacked_card.css("top")), scale:getScale(attacked_card[0]), rotation:getRotation(attacked_card[0])});
	target.show();
	attacked_card.parent().append(target);
	var stream = red_stream;
	var stream_parent = $('#red_stream');
	if (player == Player2()) {
		stream = blue_stream;
		stream_parent = $('#blue_stream');
	}
	var xPoint = parseInt(attacked_card.css("left"));
	var yPoint = parseInt(attacked_card.css("top"));
	var _loc9_ = xPoint - parseInt(attacking_card.css("left"));
	var _loc10_ = yPoint - parseInt(attacking_card.css("top"));
	var _loc11_ = Math.sqrt(_loc9_ * _loc9_ + _loc10_ * _loc10_);
	TweenMax.to(stream_parent, 0, {left:parseInt(attacking_card.css("left")), top:parseInt(attacking_card.css("top")), rotation:Math.atan2(_loc10_,_loc9_) * 180 / Math.PI});
	stream_parent.show();
	stream.play();
	TweenMax.fromTo(stream_parent, easeSeconds, {scaleX:0}, {scaleX:_loc11_ / 500});
	TweenMax.fromTo(stream, 1.5, {alpha:1}, {alpha:1, onComplete:function(){
		$('#sword').hide();
		stream_parent.hide();
		stream.stop();
		endAction();
	}});
	var attacking_card_left = parseInt(attacking_card.css("left"));
	var attacking_card_top = parseInt(attacking_card.css("top"));
	$('#sword').css("left", attacking_card_left);
	$('#sword').css("top", attacking_card_top);
	$('#sword').show();
	var _loc2_ = attacking_card_top - parseInt($('#sword').css("top"));
	var _loc3_ = attacking_card_left - parseInt($('#sword').css("left"));
	TweenMax.to($('#sword'), 0, {rotation:Math.atan2(yPoint - parseInt($('#sword').css("top")), xPoint - parseInt($('#sword').css("left"))) * 180 / Math.PI});
	TweenMax.fromTo($('#sword'), easeSeconds, {left:attacking_card_left, top:attacking_card_top}, {left:parseInt(attacked_card.css("left")), top:parseInt(attacked_card.css("top")), ease:Circ.easeInOut});
}

function attackDirectly(player, data) {
	var card = getFieldCard(player, data);
	$('#sword').show();
	TweenMax.to($('#sword'), 0, {left:parseInt(card.css("left")), top:parseInt(card.css("top")), rotation:player.rot - 90});
	var xPoint = 518;
	var yPoint = 50;
	if (player == Player2()) {
		yPoint = 590;
	}
	var stream = red_stream;
	var stream_parent = $('#red_stream');
	if (player == Player2()) {
		stream = blue_stream;
		stream_parent = $('#blue_stream');
	}
	var _loc9_ = xPoint - parseInt(card.css("left"));
	var _loc10_ = yPoint - parseInt(card.css("top"));
	var _loc11_ = Math.sqrt(_loc9_ * _loc9_ + _loc10_ * _loc10_);
	TweenMax.to(stream_parent, 0, {left:parseInt(card.css("left")), top:parseInt(card.css("top")), rotation:Math.atan2(_loc10_,_loc9_) * 180 / Math.PI});
	stream_parent.show();
	stream.play();
	TweenMax.fromTo(stream_parent, easeSeconds, {scaleX:0}, {scaleX:_loc11_ / 500});
	TweenMax.fromTo(stream, 1.5, {alpha:1}, {alpha:1, onComplete:function(){
		$('#sword').hide();
		stream_parent.hide();
		stream.stop();
		endAction();
	}});
	TweenMax.to($('#sword'), 0, {rotation:Math.atan2(yPoint - parseInt($('#sword').css("top")), xPoint - parseInt($('#sword').css("left"))) * 180 / Math.PI});
	TweenMax.fromTo($('#sword'), easeSeconds, {left:parseInt(card.css("left")), top:parseInt(card.css("top"))}, {left:xPoint, top:yPoint, ease:Circ.easeInOut});
}

function chooseCard(player, data) {
	var card = removeFromDeck(player, data);
	card.data("cardfront").reinitialize(data.card);
	player.hand_arr.push(card);
	determineHandPosition(player);
	organizeHand(player);
	var rotY = 180;
	if ((show_cards && player == Player1()) || (show_cards == 2)) {
		rotY = 0;
	}
	TweenMax.to(card, easeSeconds, {left:handDestination, top:player.handY, scale:0.25, rotation:player.rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){ 
		endAction();
		if (player.username == username && player1.level == 1) {
			showAbilities();
		}
	}});
	$('#duel .cards').append(card);
	
	data.viewing = "Choose card";
	stopViewing(data);
}

function drawCard(player, data) {
	var card = removeTopCardFromDeck(player);
	player.hand_arr.push(card);
	determineHandPosition(player);
	organizeHand(player);
	card.data("cardfront").reinitialize(data.card);
	var rotY = 180;
	//if ((show_cards && player == player1) || (show_cards == 2)) { // tag partner doesn't see cards
	if ((show_cards && player == Player1()) || (show_cards == 2)) {
		rotY = 0;
	}
	TweenMax.to(card, easeSeconds, {left:handDestination, top:player.handY, scale:0.25, rotation:player.rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){ 
		endAction();
	}});
	$('#duel .cards').append(card);
}

function toHand(player, data) {
	var card = removeFromDeck(player, data);
	if (!card) {
		card = removeFromGY(player, data);
	}
	if (!card) {
		card = removeFromHand(player, data); // Graceful Tear
		if (data.play == "To hand 2") {
			if (card) {
				updateController(player.opponent, card);
				revealAndToHand(player.opponent, card, data);
				return;
			}
		}
	}
	if (card) {
		revealAndToHand(player, card, data);
		return;
	}
	toHandFromField(player, data);
}

function toHandFromField(player, data) {
	var card = removeFromField(player, data);
	if (!card) {
		card = removeFromField(player.opponent, data);
	}
	if (!card) {
		return;
	}
	
	var to_player = card.data("owner");
	if (data.play == "To hand 2") {
		to_player = player.opponent;
	}
	updateController(to_player, card);
	
	to_player.hand_arr.push(card);
	determineHandPosition(to_player);
	organizeHand(to_player);
	var rotY = 180;
	if (isPlayer1(to_player.username) && show_cards || show_cards == 2) {
		rotY = 0;
	}
	TweenMax.to(card, easeSeconds, {left:handDestination, top:to_player.handY, scale:0.25, rotation:to_player.rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
		shuffleHand(to_player, data);
	}});
}

function toDeck(player, data) {
	var rotY = 180;
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
		card = removeCard(player, data);
	}
	if (!card) {
		card = removeFromDeck(player.opponent, data); // Opponent's Deck (partial)
	}
	if (card.data("face_down")) {
		revealing = false;
		card.data("face_down", false);
	}
	updateController(card.data("owner"), card);
	$('#field').append(card);
	if (data.play.indexOf("FU") >= 0) {
		card.data("face_up", true);
		rotY = 0;
	}
	if (data.play == "To B Deck") {
		if (revealing) {
			revealAndToBottomOfDeck(card.data("controller"), card, data);
			return;
		}
		else {
			card.data("owner").main_arr.push(card);
			addDeckChildren(player);
		}
	}
	else if (data.play == "To B Deck 2") {
		player.opponent.main_arr.push(card);
		updateController(player.opponent, card);
	}
	else if (data.play.indexOf("To T Deck 2") == 0) {
		player.opponent.main_arr.unshift(card);
		updateController(player.opponent, card);
	}
	else {
		if (revealing) {
			revealAndToTopOfDeck(card.data("controller"), card, data);
			return;
		}
		else {
			card.data("owner").main_arr.unshift(card);
		}
	}
	TweenMax.to(card, easeSeconds, {left:card.data("controller").deckX, top:card.data("controller").deckY, scale:0.1485, rotation:card.data("controller").rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
		shiftDeck(card.data("controller"));
		endAction();
	}});
}

function toGY(player, data) {
	var card = removeCard(player, data);
	updateController(card.data("owner"), card);
	card.data("cardfront").reinitialize(data.card);
	card.data("face_down", false);
	$('#field').append(card);
	card.data("owner").grave_arr.unshift(card);
	TweenMax.to(card, easeSeconds, {left:card.data("owner").graveX, top:card.data("owner").graveY, scale:0.1485, rotation:card.data("owner").rot, rotationY:0, ease:Linear.easeNone, onComplete:function(){
		shiftGrave(card.data("owner"));
		endAction();
	}});
}

function mill(player, data) {
	var card = removeTopCardFromDeck(player);
	updateController(card.data("owner"), card);
	card.data("cardfront").reinitialize(data.card);
	$('#field').append(card);
	card.data("owner").grave_arr.unshift(card);
	TweenMax.to(card, easeSecondsBanish, {left:card.data("owner").graveX, top:card.data("owner").graveY, rotation:card.data("owner").rot, rotationY:0, ease:Linear.easeNone, onComplete:function(){
		shiftGrave(card.data("owner"));
		endAction();
	}});
}

function summon(player, data, points, card, end) {
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
	card.data("face_down", false);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:rot, rotationY:0, ease:Linear.easeNone, onComplete:function(){
		if (end) {
			endAction();
		}
	}});
}

function summonToken(player, data) {
	awaiting_token = false;
	var token = newDuelCard();
	token.data("id", data.id);
	token.data("face_down", false);
	token.data("controller", player);
	token.data("owner", player);
	token.data("cardfront").initializeFromData({
		"name":"Token",
		"effect":"",
		"level":"",
		"power":"",
		"card_type":"",
		"hero":"",
		"pic":IMAGES_START + "avatar.jpg"
	});
	player.all_cards_arr.push(token);
	
	var points = getNextMonsterZone(player, token, data);
	TweenMax.to(token, 0, {left:points[0], top:points[1], rotationY:0, rotation:player.rot, scale:0.1485});
	$('#field').append(token);
	token.onRotate(true);
	if (duelist && player != Player1()) {
		token.css("cursor", "pointer");
		token.click(targetCard);
	}
	endAction();
}

function removeToken(player, data) {
	var card = removeFromField(player, data);
	card.remove();
	card = null;
	endAction();
}

function flip(player, data) {
	var card = getFieldCard(player, data);
	card.data("face_down", false);
	$('#field').append(card);
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {rotation:player.rot, rotationY:0, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function activateST(player, data) {
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
	card.data("face_down", false);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:0, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function toST(player, data) {
	var card = getFieldCard(player, data);
	if (!card) {
		card = removeCard(player, data);
	}
	card.data("cardfront").reinitialize(data.card);
	card.data("face_down", false);
	var points = getNextSTZone(player, card, data);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:0, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function setMonster(player, data) {
	var points;
	var card = getFieldCard(player, data);
	if (!card) {
		card = removeCard(player, data);
		points = getNextMonsterZone(player, card, data);
	}
	else {
		points = [parseInt(card.css("left")), parseInt(card.css("top"))];
	}
	card.data("face_down", true);
	card.data("counters", 0);
	card.data("cardfront").reinitialize(data.card);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:180, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function setST(player, data) {
	var points;
	var card = getFieldCard(player, data);
	if (!card) {
		card = removeCard(player, data);
		points = getNextSTZone(player, card, data);
	}
	else {
		points = [parseInt(card.css("left")), parseInt(card.css("top"))];
	}
	card.data("face_down", true);
	card.data("cardfront").reinitialize(data.card);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:180, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function changeControl(player, data) {
	var card = removeFromField(player, data, true);
	updateController(card.data("controller"), card);
	if (player.username != username) {
		card.off("click", targetCard);
		card.css("cursor", "auto");
	}
	if (duelist && !card.data("cardfront").data("initialized")) {
		card.data("cardfront").initializeFromData(data.card);
	}
	$('#field').append(card);
	var points = getNextMonsterZone(player.opponent, card, data);
	var rot = card.data("controller").rot;
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], rotation:rot, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function changeLevel(data) {
	player1.level = data.level;
	player2.level = data.level;
	addLine("Each player is now level " + data.level);
	if (duelist) {
		showAbilities();
	}
}

function getFieldCard(player, data) {
	var card;
	if (player.m2) {
		if (player.m2.data("id") == data.id) {
			card = player.m2;
			return card;
		}
	}
	if (player.m3) {
		if (player.m3.data("id") == data.id) {
			card = player.m3;
			return card;
		}
	}
	if (player.m1) {
		if (player.m1.data("id") == data.id) {
			card = player.m1;
			return card;
		}
	}
	if (player.s2) {
		if (player.s2.data("id") == data.id) {
			card = player.s2;
			return card;
		}
	}
	if (player.s1) {
		if (player.s1.data("id") == data.id) {
			card = player.s1;
			return card;
		}
	}
	return card;
}

function shuffleDeck(player, data) {
	var total = 0;
	var cardX = parseInt(player.main_arr[0].css("left"));
	var t = setInterval(function(){
		for (var i = 0; i < player.main_arr.length; i++) {
			var n1 = random(24);
			var n2 = -random(24);
			player.main_arr[i].css("left", cardX + (n1 + n2));
		}
		total++;
		if (total > 10) {
			clearInterval(t);
			updateIDs(player.main_arr, data.deck, data.prev);
			player.main_arr = shuffle(player, player.main_arr, data.deck);
			shiftDeck(player);
			endAction();
		}
	}, 42);
}

function quitDuel(player, data) {
	var message = "";
	var game_type = "duel";
	if (match) {
		game_type = "match";
	}
	addLine(escapeHTML(player.username) + " has left the duel");
	if (player == Player1()) {
		$('#gone1').show();
	}
	else if (player == Player2()) {
		$('#gone2').show();
	}
	if (duel_active) {
		if (duelist) {
			if (!isPlayer1(data.username)) {
				message = "Your opponent quit the duel. You win the " + game_type + "!";
				if (rated) {
					message += " Your rating has increased by " + data.player1.points;
					total_wins++;
				}
				displayBox("Opponent Quit", message);
			}
			else {
				message = "Your partner quit the duel. You lose the " + game_type + "!";
				displayBox("Partner Quit", message);
			}
		}
		else {
			if (solo) {
				return;
			}
			$('#over').show();
			$('#over .body_txt').html("The duel has ended because " + escapeHTML(player.username) + " has quit.<br><br><br><br>" + escapeHTML(player.opponent.username) + " wins the " + game_type + "!");
		}
		duelOver(data);
	}
	$('#rematch_btn').disable(true);
}

function acceptDraw(player, data) {
	var message = "";
	addLine("The players have agreed on a draw");
	if (rated && data.over) {
		if (data.player1.points > 0) {
			message = " Your rating has increased by " + data.player1.points + ".";
		}
		else if (data.player1.points < 0) {
			message = " Your rating has decreased by " + -data.player1.points + ".";
		}
		else {
			message = " Your rating has remained unchanged.";
		}
	}
	if (duelist) {
		if (!isPlayer1(data.username)) {
			displayBox("Draw Accepted", "Your opponent accepted your draw offer." + message);
		}
		else {
			displayBox("Draw Accepted", "You accepted your opponent's draw offer." + message);
		}
		$('#draw_btn').val("Offer Draw");
	}
	else {
		$('#over').show();
		$('#over .body_txt').text("The players have agreed on a draw.");
	}
	duelOver(data);
}

function admittedDefeat(player, data) {
	awaiting_defeat = false;
	var message = "";
	var game_type = "duel";
	if (match) {
		game_type = "match";
	}
	addLine(escapeHTML(player.username) + " admitted defeat");
	if (data.over) {
		if (duelist) {		
			if (isPlayer2(data.username)) {
				message = "Your opponent admitted defeat. You win the " + game_type + "!";
				if (rated) {
					message += " Your rating has increased by " + data.player1.points;
					total_wins++;
				}
				displayBox("You Win!", message);
			}
			else if (data.username == username) {
				message = "You admitted defeat. You lose the " + game_type + "!";
				if (rated) {
					message += " Your rating has decreased by " + -data.player1.points;
				}
				displayBox("You Lose!", message);
			}
			else {
				message = "Your partner admitted defeat. You lose the " + game_type + "!";
				displayBox("You Lose!", message);
			}
		}
		else {
			var str = "The duel has ended because " + escapeHTML(player.username) + " admitted defeat.";
			if (data.over) {
				str += "<br><br><br><br>" + escapeHTML(player.opponent.username);
				if (player.partner) {
					str += " & " + escapeHTML(player.partner.username) + " win the " + game_type + "!";
				}
				else {
					str += " wins the " + game_type + "!";
				}
			}
			$('#over .body_txt').html(str);
			$('#over').show();
		}
	}
	duelOver(data);
}

function duelOver(data) {
	duel_active = false;
	updateActive(false);
	$('#defeat_btn').disable(true);
	$('#host_loss_btn').disable(true);
	$('#opponent_loss_btn').disable(true);
	$('#draw_btn').disable(false);
	$('#draw_btn').val("View Replay");
	if (!duelist && !admin) {
		$('#draw_btn').css("top", 590);
		$('#draw_btn').show();
	}
	$('#cancel_duel_btn').disable(true);
	$('#call_admin_btn').disable(true);
	$('#call_admin_btn').hide();
	$('#rematch_btn').disable(false);
	if (rated && used_allotted_rematch) {
		$('#rematch_btn').disable(true);
	}
	if (duelist) {
		$('#rematch_btn').show();
	}
	awaiting_admin = false;
	$('#pause_btn').val("Pause Game");
}

function hideDuelOver() {
	$('#over').hide();
}

function showDuelNSFW() {
	$(this).siblings('.nsfw').css("opacity", 0);
	$(this).siblings('.nsfw').hide();
	$(this).hide();
}

function hideDuelNSFW() {
	if (solo && this == $('#avatar2 .rating')[0]) {
		return;
	}
	$(this).siblings('.nsfw').css("opacity", 1);
	$(this).siblings('.nsfw').show();
	$(this).siblings('.nsfw_btn').show();
	$(this).siblings('.nsfw_btn').val("Show Image");
}

function startTurn() {
	awaiting_start_turn = false;
	turn_player.opponent = players[players.length - 1];
	turn_player.opponent.opponent = turn_player;
	turnCount++;
	if (!duelist) {
		$('#turn').show();
		$('#turn .red').hide();
		if (isPlayer1(turn_player.username)) {
			$('#turn .red').show();
		}
	}
	$('#end_turn').hide();
	if (duelist && turn_player.username == username) {
		$('#end_turn').css("pointer-events", "auto");
		$('#end_turn .green').hide();
		$('#end_turn .yellow').hide();
		$('#end_turn .white_glow').hide();
		$('#start_turn').hide();
		stopStartTurn();
		if ($('#auto_draw_cb').is(":checked")) {
			TweenMax.to($('#end_turn'), easeSeconds, {onComplete:function(){
				$('#end_turn').show();
				setText($('#end_turn .end_turn_txt'));
			}});
		}
		else {
			$('#end_turn').show();
			setText($('#end_turn .end_turn_txt'));
		}
	}
	//enterDP();
	endAction();
}

function endTurn(data) {
	if (duelist && data.username == username) {
		$('.phase').css("pointer-events", "none");
		$('#end_turn').css("pointer-events", "none");
		$('#end_turn .yellow').show();
		$('#end_turn .white_glow').show();
	}
	currentPhase = "";
	console.log('players[0].username = ' + players[0].username);
	players.push(players.splice(0, 1)[0]);
	log('a');
	if (duelist && players[0].username == username) {
		log('b');
		console.log('players[0].username = ' + players[0].username);
		$('#start_turn').show();
		setText($('#start_turn .start_turn_txt'));
		playStartTurn();
	}
	endAction();
}

function updateLifePoints(player, data) {
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
		endAction();
	}});
	animation = setInterval(function(){
		life_bar.find('.life_txt').text(prev_life + Math.floor(lifepoints_tween.progress() * life_amount));
	}, 42);
}

/*function setupDuelField() {
	counters = [m1_counter, m2_counter, m3_counter, s1_counter, s2_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_s1_counter, opp_s2_counter];
	m1_counter.css("left", 383.5);
	m2_counter.css("left", 533.5);
	m3_counter.css("left", 683.5);
	s1_counter.css("left", 458.5);
	s2_counter.css("left", 608.5);
	opp_m1_counter.css("left", 658);
	opp_m2_counter.css("left", 508);
	opp_m3_counter.css("left", 358);
	opp_s1_counter.css("left", 608.5);
	opp_s2_counter.css("left", 458.5);
	
	$('#die_btn').css("left", 351);
	$('#coin_btn').css("left", 383);
	$('#duel .token_btn').css("left", 416);
	counter_btn.css("left", 467.5);
	$('#lp_txt').css("left", 488);
	$('#lp_txt').css("top", 309);
	$('#lp_txt').css("font-size", 20);
	$('#life_txt').css("left", 523);
	$('#life_txt').setWidth(50);
	if (!CHROME) {
		$('#life_txt').css("width", 38);
	}
	$('#plus_btn, #minus_btn').css("left", 576.5);
	$('#plus_btn, #minus_btn').css("top", 307);
	$('#plus_btn, #minus_btn').css("transform", "scale(1)");
	$('#minus_bg').css("left", 571.5);
	$('#turn').css("left", 615);
	$('#start_turn').css("left", 615);
	$('#end_turn').css("left", 615);
	
	$('#hm1_txt').css("left", 326);
	$('#hm2_txt').css("left", 476);
	$('#hm3_txt').css("left", 626);
	$('#om1_txt').css("left", 626);
	$('#om2_txt').css("left", 476);
	$('#om3_txt').css("left", 326);
	
	$('#field_spell_counter').css("top", 362.5);
	
	$('#m1_hidden').css("left", 324.5);
	$('#m2_hidden').css("left", 474.5);
	$('#m3_hidden').css("left", 624.5);
	$('#m4_hidden').hide();
	$('#m5_hidden').hide();
	$('#opp_m1_hidden').css("left", 624.5);
	$('#opp_m2_hidden').css("left", 474.5);
	$('#opp_m3_hidden').css("left", 324.5);
	$('#opp_m4_hidden').hide();
	$('#opp_m5_hidden').hide();
	$('#deck_hidden').css("top", 464);
	$('#grave_hidden').css("left", 769.5);
	$('#grave_hidden').css("top", 339.5);
	$('#banished_hidden').css("left", 769.5);
	$('#extra_hidden').css("top", 464);
	$('#opp_deck_hidden').css("top", 21.5);
	$('#opp_grave_hidden').css("left", 207.5);
	$('#opp_grave_hidden').css("top", 153.5);
	$('#opp_banished_hidden').css("left", 207.5);
	$('#opp_extra_hidden').css("top", 29);
	$('#link_left_hidden').hide();
	$('#link_right_hidden').hide();
	
	$('#m1_select').css("left", 323);
	$('#m2_select').css("left", 473);
	$('#m3_select').css("left", 623);
	$('#m4_select').hide();
	$('#m5_select').hide();
	$('#s1_select').css("left", 323);
	$('#s2_select').css("left", 473);
	$('#s3_select').css("left", 623);
	$('#s4_select').hide();
	$('#s5_select').hide();
	$('#link_left_select').hide();
	$('#link_right_select').hide();
}

function setupDuelFieldLinks() {
	counters = [m1_counter, m2_counter, m3_counter, m4_counter, m5_counter, s1_counter, s2_counter, s3_counter, s4_counter, s5_counter, field_spell_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_m4_counter, opp_m5_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_s4_counter, opp_s5_counter, opp_field_spell_counter, left_link_counter, right_link_counter];
	m1_counter.css("left", 347.5);
	m2_counter.css("left", 440.5);
	m3_counter.css("left", 533.5);
	s1_counter.css("left", 347.5);
	s2_counter.css("left", 440.5);
	s3_counter.css("left", 533.5);
	opp_m1_counter.css("left", 694);
	opp_m2_counter.css("left", 601);
	opp_m3_counter.css("left", 508);
	opp_s1_counter.css("left", 694);
	opp_s2_counter.css("left", 601);
	opp_s3_counter.css("left", 508);
	
	$('#dp').css("left", 268.5);
	$('#sp').css("left", 327.6);
	$('#m1').css("left", 463.65);
	$('#bp').css("left", 519.5);
	$('#m2').css("left", 655.5);
	$('#m2').show();
	$('#ep').css("left", 714.6);
	$('#die_btn').css("left", 280.5);
	$('#coin_btn').css("left", 310);
	$('#duel .token_btn').css("left", 345.5);
	counter_btn.css("left", 671.85);
	$('#lp_txt').css("left", 475);
	$('#lp_txt').css("top", 312);
	$('#lp_txt').css("font-size", 16);
	$('#life_txt').css("left", 501);
	$('#life_txt').setWidth(37);
	if (CHROME && PC) {
		$('#life_txt').setWidth(33); // looks good for chrome pc
	}
	if (!CHROME) {
		$('#life_txt').css("width", 25);
	}
	//$('#plus_btn, #minus_btn').css("left", 539.5);
	$('#plus_btn, #minus_btn').css("left", 537.5);
	$('#plus_btn, #minus_btn').css("top", 308);
	$('#plus_btn, #minus_btn').css("transform", "scale(0.9)");
	$('#minus_bg').css("left", 531);
	$('#turn').css("left", 691);
	$('#start_turn').css("left", 691);
	$('#end_turn').css("left", 691);
	
	$('#hm1_txt').css("left", 290);
	$('#hm2_txt').css("left", 383);
	$('#hm3_txt').css("left", 476);
	$('#hm4_txt').show();
	$('#hm5_txt').show();
	$('#om1_txt').css("left", 662);
	$('#om2_txt').css("left", 569);
	$('#om3_txt').css("left", 476);
	$('#om4_txt').show();
	$('#om5_txt').show();
	
	$('#field_spell_counter').css("top", 409);
	
	$('#m1_hidden').css("left", 288.5);
	$('#m2_hidden').css("left", 381.5);
	$('#m3_hidden').css("left", 474.5);
	$('#m4_hidden').show();
	$('#m5_hidden').show();
	$('#opp_m1_hidden').css("left", 660.5);
	$('#opp_m2_hidden').css("left", 567.5);
	$('#opp_m3_hidden').css("left", 474.5);
	$('#opp_m4_hidden').show();
	$('#opp_m5_hidden').show();
	$('#deck_hidden').css("top", 464);
	$('#grave_hidden').css("left", 754);
	$('#grave_hidden').css("top", 339.5);
	$('#banished_hidden').css("left", 768.5);
	$('#extra_hidden').css("top", 464);
	$('#opp_deck_hidden').css("top", 21.5);
	$('#opp_grave_hidden').css("left", 222);
	$('#opp_grave_hidden').css("top", 153.5);
	$('#opp_banished_hidden').css("left", 207.5);
	$('#opp_extra_hidden').css("top", 29);
	$('#link_left_hidden').show();
	$('#link_right_hidden').show();
	
	$('#m1_select').css("left", 287);
	$('#m2_select').css("left", 380);
	$('#m3_select').css("left", 473);
	$('#m4_select').show();
	$('#m5_select').show();
	$('#s1_select').css("left", 287);
	$('#s2_select').css("left", 380);
	$('#s3_select').css("left", 473);
	$('#s4_select').show();
	$('#s5_select').show();
	$('#link_left_select').show();
	$('#link_right_select').show();
}

function setupDuelFieldSpeed() {
	counters = [m1_counter, m2_counter, m3_counter, s1_counter, s2_counter, s3_counter, field_spell_counter, skill_card_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_field_spell_counter, opp_skill_card_counter];
	m1_counter.css("left", 383.5);
	m2_counter.css("left", 533.5);
	m3_counter.css("left", 683.5);
	s1_counter.css("left", 383.5);
	s2_counter.css("left", 533.5);
	s3_counter.css("left", 683.5);
	opp_m1_counter.css("left", 658);
	opp_m2_counter.css("left", 508);
	opp_m3_counter.css("left", 358);
	opp_s1_counter.css("left", 658);
	opp_s2_counter.css("left", 508);
	opp_s3_counter.css("left", 358);
	
	//counters = [m1_counter, m3_counter, m5_counter, s1_counter, s3_counter, s5_counter, field_spell_counter, skill_card_counter, opp_m1_counter, opp_m3_counter, opp_m5_counter, opp_s1_counter, opp_s3_counter, opp_s5_counter, opp_field_spell_counter, opp_skill_card_counter];
	$('#dp').css("left", 344);
	$('#sp').css("left", 418);
	$('#m1').css("left", 492);
	$('#bp').css("left", 566);
	$('#m2').hide();
	$('#ep').css("left", 639);
	$('#die_btn').css("left", 351);
	$('#coin_btn').css("left", 383.15);
	$('#duel .token_btn').css("left", 416);
	counter_btn.css("left", 467.5);
	$('#lp_txt').css("left", 488);
	$('#lp_txt').css("top", 309);
	$('#lp_txt').css("font-size", 20);
	$('#life_txt').css("left", 523);
	$('#life_txt').setWidth(50);
	if (!CHROME) {
		$('#life_txt').css("width", 38);
	}
	//$('#plus_btn, #minus_btn').css("left", 579.5);
	$('#plus_btn, #minus_btn').css("left", 576.5);
	$('#plus_btn, #minus_btn').css("top", 307);
	$('#plus_btn, #minus_btn').css("transform", "scale(1)");
	$('#minus_bg').css("left", 571.5);
	$('#turn').css("left", 615);
	$('#start_turn').css("left", 615);
	$('#end_turn').css("left", 615);
	
	$('#hm1_txt').css("left", 326);
	$('#hm2_txt').css("left", 476);
	$('#hm3_txt').css("left", 626);
	$('#hm4_txt').hide();
	$('#hm5_txt').hide();
	$('#om1_txt').css("left", 626);
	$('#om2_txt').css("left", 476);
	$('#om3_txt').css("left", 326);
	$('#om4_txt').hide();
	$('#om5_txt').hide();
	
	$('#field_spell_counter').css("top", 409);
	
	$('#m1_hidden').css("left", 324.5);
	$('#m2_hidden').css("left", 474.5);
	$('#m3_hidden').css("left", 624.5);
	$('#m4_hidden').hide();
	$('#m5_hidden').hide();
	$('#opp_m1_hidden').css("left", 624.5);
	$('#opp_m2_hidden').css("left", 474.5);
	$('#opp_m3_hidden').css("left", 324.5);
	$('#opp_m4_hidden').hide();
	$('#opp_m5_hidden').hide();
	$('#deck_hidden').css("top", 464);
	$('#grave_hidden').css("left", 769.5);
	$('#grave_hidden').css("top", 339.5);
	$('#banished_hidden').css("left", 769.5);
	$('#extra_hidden').css("top", 464);
	$('#opp_deck_hidden').css("top", 21.5);
	$('#opp_grave_hidden').css("left", 207.5);
	$('#opp_grave_hidden').css("top", 153.5);
	$('#opp_banished_hidden').css("left", 207.5);
	$('#opp_extra_hidden').css("top", 29);
	$('#link_left_hidden').hide();
	$('#link_right_hidden').hide();
	
	$('#m1_select').css("left", 323);
	$('#m2_select').css("left", 473);
	$('#m3_select').css("left", 623);
	$('#m4_select').hide();
	$('#m5_select').hide();
	$('#s1_select').css("left", 323);
	$('#s2_select').css("left", 473);
	$('#s3_select').css("left", 623);
	$('#s4_select').hide();
	$('#s5_select').hide();
	$('#link_left_select').hide();
	$('#link_right_select').hide();
}*/

function resetDuelButtons() {
	if (duelist) {
		$('#defeat_btn').show();
		$('#defeat_btn').disable(false);
		$('#draw_btn').show();
		$('#draw_btn').disable(false);
		//$('#rematch_btn').hide();
		//$('#rematch_btn').disable(false);
	}
	$('#reset_btn').hide();
	$('#rematch_btn').val("Offer Rematch");
	$('#draw_btn').val("Offer Draw");
	$('.duel_status .status_txt').text("");
	$('.duel_status .aura').hide();
	viewing = "";
}

function Player1() {
	if (player1 == turn_player || player1 == turn_player.opponent) {
		return player1;
	}
	return player1;
}

function Player2() {
	if (player2 == turn_player || player2 == turn_player.opponent) {
		return player2;
	}
	return player2;
}

function isPlayer1(str) {
	if (str == player1.username) {
		return true;
	}
	return false;
}

function isPlayer2(str) {
	if (str == player2.username) {
		return true;
	}
	return false;
}

function Duelist() {
	if (duelist && (player1 == turn_player || player1 == turn_player.opponent)) {
		return true;
	}
	return false;
}

function getElement(t) {
    return document.getElementById(t)
}

function drawDice(t, e) {
    var s = document.createElement("canvas");
    s.id = "mycanvas" + t, s.width = 100, s.height = 100, getElement("side" + t).appendChild(s);
    var n = getElement("mycanvas" + t).getContext("2d");
    n.strokeStyle = "#000000", n.fillStyle = "#000000", 1 != e && 3 != e && 5 != e || (n.beginPath(), n.arc(50, 50, 8, 0, 2 * Math.PI), n.stroke(), n.fill()), 2 != e && 3 != e && 4 != e && 5 != e && 6 != e || (n.beginPath(), n.arc(25, 75, 8, 0, 2 * Math.PI), n.stroke(), n.fill(), n.beginPath(), n.arc(75, 25, 8, 0, 2 * Math.PI), n.stroke(), n.fill()), 4 != e && 5 != e && 6 != e || (n.beginPath(), n.arc(25, 25, 8, 0, 2 * Math.PI), n.stroke(), n.fill(), n.beginPath(), n.arc(75, 75, 8, 0, 2 * Math.PI), n.stroke(), n.fill()), 6 == e && (n.beginPath(), n.arc(25, 50, 8, 0, 2 * Math.PI), n.stroke(), n.fill(), n.beginPath(), n.arc(75, 50, 8, 0, 2 * Math.PI), n.stroke(), n.fill())
}

function shuffleDice(t) {
   	var result = 3;
    var e, s, n = t.length;
    if (n) {
    	for (; --n;) e = t[s = Math.floor(Math.random() * (n + 1))], t[s] = t[n], t[n] = e;
    }
    return t
}

function dieRoll(player, data) {
	$('#die').show();
	removeClass(getElement("die"), "reset");
	var t = 6;
	((t = isNaN(parseInt(t)) ? 6 : parseInt(t)) < 2 || t > 100) && (t = 6);
	for (var e = [], s = 0; s < t; ++s) e[s] = s + 1;
	var die_result = shuffleDice(e);
	while (die_result[0] != data.result) {
		die_result = shuffleDice(e);
	};
	addClass(getElement("die"), "activate"), addClass(getElement("die"), "opacity"), setTimeout(function() {
		for (var s = 1; s < 7; ++s) void 0 !== e[s - 1] ? t > 6 ? (getElement("side" + s).innerHTML = "<h3>" + e[s - 1] + "</h3>", addClass(getElement("side" + s), "activate")) : (getElement("side" + s).innerHTML = "", addClass(getElement("side" + s), "activate"), drawDice(s, e[s - 1])) : (getElement("side" + s).innerHTML = "", addClass(getElement("side" + s), "activate"))
	}, 1e3), setTimeout(function() {
		removeClass(getElement("die"), "activate"), addClass(getElement("die"), "reset");
		addLine(escapeHTML(player.username) + "'s die landed on " + data.result);
		$('#die').hide();
		endAction();
	}, 3010)
	TweenMax.fromTo($('#die'), 2, {left:0, top:0}, {left:512, top:320});
}

function coinFlip(player, data) {
	var start = 745;
	var end = 380;
	var left = 466;
	var startX = 0;
	var endX = 630;
	var mid = start - end / 2;
	if (data.result == "tails") {
		startX = 180;
		endX = 810;
	}
	if (isPlayer2(player.username)) {
		start = -110;
		end = 101;
		mid = start + end / 2;
	}
	console.log('mid = ' + mid);
	$('#coin').show();
	TweenMax.fromTo($('#coin'), 1.3, {"left":left, "top":start, scale:0.5}, {"left":520, "top":mid, scale:1, ease:Linear.easeNone});
	TweenMax.fromTo($('#coin img'), 1.3, {"rotationX":startX}, {"rotationX":endX, ease:Linear.easeNone, onComplete:function(){
		TweenMax.fromTo($('#coin'), 1.3, {"left":520, "top":mid, scale:1}, {"left":left, "top":end, scale:0.5, ease:Linear.easeNone});
		TweenMax.fromTo($('#coin img'), 1.3, {"rotationX":endX}, {"rotationX":startX, ease:Linear.easeNone, onComplete:function(){
			addLine(escapeHTML(player.username) + "'s coin landed on " + data.result);
			TweenMax.to($('#coin img'), 0.7, {onComplete:function(){
				$('#coin').hide();
				endAction();
			}});
		}});
	}});
}

function sortWatchers() {
	watchers_data.sort(function(a,b){
		if (~~a.donator > ~~b.donator) {
			return -1;
		}
		if (~~a.donator < ~~b.donator) {
			return 1;
		}
		if (~~!!a.admin > ~~!!b.admin) {
			return -1;
		}
		if (~~!!a.admin < ~~!!b.admin) {
			return 1;
		}
		if (a.username.toLowerCase() < b.username.toLowerCase()) {
			return -1;
		}
		if (a.username.toLowerCase() > b.username.toLowerCase()) {
			return 1;
		}
		return 0;
	});
}

function isWatching(str) {
	var arr = $('#watchers .cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i)[0].textContent == str) {
			return true;
		}
	}
	return false;
}

function addWatcher(data, b) {
	if (!b) {
		for (var i = 0; i < watchers_data.length; i++) {
			if (watchers_data[i].username == data.username) {
				return;
			}
		}
	}
	var cell = new Cell(data.username);
	if (b) {
		return cell.outerHTML;
	}
	data.u = data.username;
	watchers_data.push(data);
	sortWatchers();
	insertAt(watchers_data.indexOf(data), cell, $('#watchers .users'));
	$('#watchers .watchers_txt').text('Watchers: ' + $('#watchers .cell').length);
}

function removeWatcher(data) {
	var arr = $('#watchers .cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i)[0].textContent == data.username) {
			arr.eq(i).remove();
			break;
		}
	}
	$('#watchers .watchers_txt').text('Watchers: ' + $('#watchers .cell').length);
	for (i = 0; i < watchers_data.length; i++) {
		if (watchers_data[i].username == data.username) {
			watchers_data.splice(i, 1);
			break;
		}
	}
}

function saveWatchChatVSP() {
	watch_chat_vsp = $('#watch_chat .cout_txt').scrollTop();
	var maxVSP = $('#watch_chat .cout_txt').scrollMax();
	if (watch_chat_vsp >= maxVSP - 80 || maxVSP < 0) {
		watch_chat_vsp += 1000;
	}
}

function exitDueling() {
	$('#field').hide();
	$('#duel .card').detach();
	recycleCards();
}

function recycleCards() {
	for (var i = 0; i < player1.all_cards_arr.length; i++) {
		player1.all_cards_arr[i].detach();
	}
	for (i = 0; i < player2.all_cards_arr.length; i++) {
		player2.all_cards_arr[i].detach();
	}
}

function Counter(str) {
	var counter = $('<div class="counter"></div>');
	if (str) {
		counter.attr("id", str);
	}
	var content = $('<div class="content"></div>');
	var background = $('<img class="background" src="' +  IMAGES_START + 'svg/counter.svg" />');
	var glow = $('<img class="glow" src="' +  IMAGES_START + 'svg/counter_glow.svg" />');
	glow.hide();
	
	var total_txt = $('<span class="total_txt">1</span>');
	
	content.append(background);
	content.append(glow);
	counter.append(content);
	counter.append(total_txt);
	
	counter.mouseover(function(){
		glow.show();
	});
	counter.mouseout(function(){
		glow.hide();
	});
	return counter;
}

function updateViewing() {
	switch (viewing) {
		case "Deck":
			viewCards(Player1().main_arr);
			break;
		case "Graveyard":
			viewCards(player1.grave_arr);
			break;
		case "Opponent's Deck":
			viewCards(Player1().opponent.main_arr);
			break;
		case "Opponent's Graveyard":
			viewCards(player1.opponent.grave_arr);
			break;
		case "Opponent's Hand":
			viewCards(Player1().opponent.hand_arr);
			break;
	}
}

function stopViewing(data) {
	if (duelist && data.username == username) {
		switch (data.viewing) {
			case "Deck":
				break;
			case "Opponent's Hand":
				for (var i = 0; i < Player2().hand_arr.length; i++) {
					TweenMax.to(Player2().hand_arr[i], 0, {rotationY:180});
					Player2().hand_arr[i].onRotate();
				}
				initHand(Player2());
				break;
		}
	}
	else if (duelist) {
		if (data.viewing == "Opponent's Deck") {
			Send({"action":"Duel", "play":"Shuffle deck"});
			shiftDeck(Player2());
		}
		else if (data.viewing == "Opponent's Hand") {
			Send({"action":"Duel", "play":"Shuffle hand"});
		}
	}
	if (data.username == Player1().username || data.username == username) {
		$('#status1 .status_txt').text("");
	}
	else if (data.username == Player2().username) {
		$('#status2 .status_txt').text("");
	}
}

function toggleDuelLog() {
	determineChatX($('#duel_log'));
	if ($('#duel_log').is(':visible')) {
		$('#duel_log').hide();
	}
	else {
		$('#duel_log').show();
		$('#chats').append($('#duel_log'));
		restoreDuelLogVSP();
		$('#duel_log .search_txt').focus();
		$('#duel_log .search_txt').select();
		restoreDuelLogVSP();
	}
}

function showE(str, data) {
	var arr = [];
	switch (str) {
		case "Opponent's Deck":
			arr = Player1().opponent.main_arr;
			break;
		case "Opponent's Hand":
			arr = Player1().opponent.hand_arr;
			break;
	}
	if (duelist && data.username != username && player1 == Player1()) {
		viewing = str;
		$('#view .title_txt').text("Viewing " + str);
		viewCards(arr, data);
	}
	if (data.username == Player2().username) {
		$('#status1 .status_txt').text("Viewing " + str);
	}
	else if (data.username == Player1().username) {
		$('#status2 .status_txt').text("Viewing " + str);
	}
	endAction();
}

function duelStart(data) {
	exitTP();
	gotoDueling();
	turnCount = 0;
	TweenMax.fromTo([$('#duel #field_content'), $('#' + currentLabel)], 0.75, {alpha:0}, {alpha:1, delay:0.5, ease:Linear.easeNone, onComplete:function(){
		if (duelist) {
			//firstCards = data.cards;
		}
		shiftDecks();
		if (solo) {
			turn_player = getPlayer(username);
		}
		/*actionsQueue.push(simultaneousDraw);
		actionsQueue.push(simultaneousDraw);
		actionsQueue.push(simultaneousDraw);
		if (!speed) {
			actionsQueue.push(simultaneousDraw);
			actionsQueue.push(simultaneousDraw);
		}*/
		actionsQueue.push(function(){
			if (!solo) {
				$('#cig2_txt').show();
			}
			$('#cig1_txt').show();
			TweenMax.fromTo([$('#cig2_txt'), $('#cig1_txt')], 1, {alpha:0}, {alpha:1});
			startTurn();
			if (!$(':focus')[0]) {
				duelFocus = $('#duel .cin_txt');
				duelFocus.focus();
			}
			if (duelist) {
				Send({"action":"Duel", "play":"Ready", "status":"Dueling"});
				viewingE("Choosing Card", data);
			}
			showViewing({"username":Player1().username, "viewing":"Choosing Card"});
			if (!solo) {
				showViewing({"username":Player2().username, "viewing":"Choosing Card"});
			}
		});				
		stopQueue = false;
		performNextAction();
		$('#field').css("pointer-events", "auto");
	}});
}

function simultaneousDraw() {
	var card;
	if (Player1().main_arr.length > 0) {
		var card1 = removeTopCardFromDeck(Player1());
		card = card1;
		Player1().hand_arr.push(card1);
		determineHandPosition(Player1());
		organizeHand(Player1());
		var rotY = 180;
		if (player1.username == username) {
			rotY = 0;
			card1.data("cardfront").initializeFromData(firstCards[0]);
		}
		TweenMax.to(card1, easeSeconds, {left:handDestination, top:player1.handY, scale:0.25, rotation:player1.rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){ 
			if (duelist) {
				firstCards.splice(0, 1);
			}
		}});
		$('#duel .cards').append(card1);
	}
	if (Player2().main_arr.length > 0) {
		var card2 = removeTopCardFromDeck(Player2());
		card = card2;
		Player2().hand_arr.push(card2);
		determineHandPosition(Player2());
		organizeHand(Player2());
		TweenMax.to(card2, easeSeconds, {left:handDestination, top:player2.handY, scale:0.25, rotation:player2.rot, rotationY:180, ease:Linear.easeNone});
		$('#duel .cards').append(card2);
	}
	if (!card) {
		endAction();
		return;
	}
	TweenMax.to(card, easeSeconds, {alpha:1, onComplete:function(){
		endAction();
		if (actionsQueue.length == 0) {
			shiftDeck(Player1());
			shiftDeck(Player2());
		}
	}});
}

function isExtraDeckCard(card) {
	if (card.attr("class").indexOf("cardfront") >= 0) {
		if (card.data("monster_color") == "Fusion" || card.data("monster_color") == "Synchro" || card.data("monster_color") == "Xyz" || card.data("monster_color") == "Link") {
			return true;
		}
	}
	else {
		if (card.data("cardfront").data("monster_color") == "Fusion" || card.data("cardfront").data("Synchro") == "Fusion" || card.data("cardfront").data("monster_color") == "Xyz" || card.data("cardfront").data("monster_color") == "Link") {
			return true;
		}
	}
	return false;
}

function initPlayers(data) {
	console.log('initPlayers');
	expandAvatar($('#avatar1 .username_txt'), data.player1.username);
	expandAvatar($('#avatar2 .username_txt'), data.player2.username);
	$('#avatar1 .image').attr("src", getAvatar(data.player1.hero));
	if (data.player2.username) {
		$('#avatar2 .image').attr("src", getAvatar(data.player2.hero));
	}
	else {
		$('#avatar2 .image').attr("src", IMAGES_START + "black.jpg");
	}
}

function getAvatar(hero) {
	if (hero) {
		return IMAGES_START + "avatars/" + hero + ".jpg";
	}
	return IMAGES_START + "avatar.jpg";
}

function expandAvatar(username_txt, username1, username2) {
	var display = username_txt.parent()[0].style.display;
	username_txt.text(username1);
	username_txt.css("left", username2 ? 3 : 7);
	username_txt.css("width", 142);
	setText(username_txt);
	TweenMax.to(username_txt, 0, {scaleX:getScale(username_txt[0]), rotation:-90});
}

function showAbilities() {
	var data = player1.abilities;
	$('#abilities .title_txt').text("Your Abilities");
	if ($(this)[0] == $('#avatar2 .rating')[0]) {
		$('#abilities .title_txt').text("Your Opponent's Abilities");
		data = player2.abilities;
	}
	$('.ability_desc_txt').text("");
	$('#abilities').show();
	
	$('#abilities .content div').off("mouseover");
	$('#abilities .content div').off("chooseAbility");
	$('#abilities .content div').each(function(){
		$(this).removeData();
		$(this).find('.talent_txt').text("");
	});
	var level = 4;
	while (level > 0) {
		var index = 1;
		for (var i = 0; i < data.length; i++) {
			if (data[i].level == level) {
				$('.lvl' + level + '_' + index + ' .talent_txt').text(data[i].talent);
				$('.lvl' + level + '_' + index).data("effect", data[i].effect);
				$('.lvl' + level + '_' + index).data("id", data[i].id);
				$('.lvl' + level + '_' + index).data("type", data[i].type);
				$('.lvl' + level + '_' + index).data("level", data[i].level);
				$('.lvl' + level + '_' + index).css("background", getAbilityBG(data[i]));
				$('.lvl' + level + '_' + index).mouseover(abilityOverE);
				if (!data[i].used && !data[i].unavailable) {
					$('.lvl' + level + '_' + index).click(chooseAbility);
				}
				index++;
			}
		}
		level--;
	}
}

function exitAbilities() {
	$('#abilities').hide();
}

function getAbilityBG(data) {
	if (data.used) {
		return "#333333";
	}
	if (data.type.toLowerCase() == "passive") {
		return "#9fc5e8";
	}
	if (data.type.toLowerCase() == "active") {
		return "#ffe599";
	}
	return "#333333";
}

function abilityOverE() {
	$('#abilities .ability_desc_txt').text($(this).data("effect"));
}