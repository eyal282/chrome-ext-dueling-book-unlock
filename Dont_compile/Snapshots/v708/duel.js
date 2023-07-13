"use strict";

var spark = loadSVGAnimation(spark, "spark", "spark", 110, 110, 24);

var active_player;
var actionsQueue = [];
var allowToBottom = false;
var automaticTourney = false;
var awaiting_admin = false;
var awaiting_defeat = false;
var awaiting_start_turn = false;
var awaiting_token = false;
var bottomChoice;
var bottomChoices;
var currentPhase;
var deckData;
var duelHash;
var duelActions = 0;
var duel_active = false;
var duel_links = false;
var duel_log = $('#duel_log');
var duel_log_vsp = 1000;
var duel_logs = [];
var duel_vsp = 1000;
var duelChatTyping = false;
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
var logTurnCount = 0;
var match = false;
var match_type;
var menu_reason = "";
var paper1;
var paper2;
var paused = false;
var pickedRPS = false;
var player1 = {};
var player2 = {};
var player3 = {};
var player4 = {};
var players;
var prev_life;
var rated = false;
var recycled_cards_arr = [];
var resetting = false;
var rock1;
var rock2;
var rpsWinner = "";
var rush = false;
var scissors1;
var scissors2;
var second;
var selectedToken = 0;
var show_cards = 0;
var solo = false;
var speed = false;
var stopQueue = true;
var switched = false;
var tag_duel = false;
var topChoice;
var topChoices;
var turn_player = {};
var turnCount = 0;
var unknown_totals = false;
var used_allotted_rematch = 0;
var viewing;
var viewing_card_with_materials;
var watch_chat = $('#watch_chat');
var watch_chat_limit = 0;
var watch_chat_vsp = 1000;
var watchers_data = [];
var watchers_vsp = 0;

var red_stream = loadSVGAnimation(red_stream, "red_stream", "red_stream", 500, 20, 24);
var blue_stream = loadSVGAnimation(blue_stream, "blue_stream", "blue_stream", 500, 20, 24);
var bubbles1 = new MovieClip();
var bubbles2 = new MovieClip();
var bubbles3 = new MovieClip();
var bubbles4 = new MovieClip();

$('#bubbles1').data("cycle", new MovieClip());
$('#bubbles2').data("cycle", new MovieClip());
$('#bubbles3').data("cycle", new MovieClip());
$('#bubbles4').data("cycle", new MovieClip());

var Activate = 'sounds/activate.mp3';
var Attack = 'sounds/attack.mp3';
var Banish = 'sounds/banish.mp3';
var CoinFlip = 'sounds/coinflip.mp3';
var CoinStart = 'sounds/coinstart.mp3';
var CounterSound = 'sounds/counter.mp3';
var Decided = 'sounds/decided.mp3';
var Declare = 'sounds/declare.mp3';
var DiceSound = 'sounds/dice.mp3';
var DrawSound = 'sounds/draw.mp3';
var FaceDown = 'sounds/facedown.mp3';
var Flip = 'sounds/flip.mp3';
var LifePoints = 'sounds/lifepoints.mp3';
var LifePointsEnd = 'sounds/lifepoints_end.mp3';
var Move = 'sounds/move.mp3';
var NormalSummon = 'sounds/normal_summon.mp3';
var Ok = 'sounds/ok.mp3';
var PartnerFound = 'sounds/partner_found.mp3';
var Reveal = 'sounds/reveal.mp3';
var Shred = 'sounds/shred.mp3';
var SpecialSummon = 'sounds/special_summon.mp3';
var ShuffleHand = 'sounds/shuffle_hand.mp3';
var ShuffleSound = 'sounds/shuffle.mp3';
var Swap = 'sounds/swap.mp3';
var Switch = 'sounds/switch.mp3';
var Target = 'sounds/target.mp3';
var TurnChime = 'sounds/turn_chime.mp3';

var countdownTimer = new Timer(980);
	countdownTimer.callback = countdownE;
var duelChatTimer = new Timer(5000);
	duelChatTimer.callback = duelChatTimerE;
var rpsTimer = new Timer(3000);
	rpsTimer.callback = rpsNext;
	
var dp_btn = new Phase("dp");
var sp_btn = new Phase("sp");
var m1_btn = new Phase("m1");
var bp_btn = new Phase("bp");
var m2_btn = new Phase("m2");
var ep_btn = new Phase("ep");
	$('#duel #field_content').prepend(ep_btn);
	$('#duel #field_content').prepend(m2_btn);
	$('#duel #field_content').prepend(bp_btn);
	$('#duel #field_content').prepend(m1_btn);
	$('#duel #field_content').prepend(sp_btn);
	$('#duel #field_content').prepend(dp_btn);

var counter_btn = new Counter();
	counter_btn.attr("id", "counter_btn");
	counter_btn.find('.total_txt').hide();
	counter_btn.insertAfter($('#minus_btn'));

var m1_counter = new Counter("m1_counter");
var m2_counter = new Counter("m2_counter");
var m3_counter = new Counter("m3_counter");
var m4_counter = new Counter("m4_counter");
var m5_counter = new Counter("m5_counter");
var s1_counter = new Counter("s1_counter");
var s2_counter = new Counter("s2_counter");
var s3_counter = new Counter("s3_counter");
var s4_counter = new Counter("s4_counter");
var s5_counter = new Counter("s5_counter");
var field_spell_counter = new Counter("field_spell_counter");
var pendulum_left_counter = new Counter("pendulum_left_counter");
var pendulum_right_counter = new Counter("pendulum_right_counter");
var opp_m1_counter = new Counter("opp_m1_counter");
var opp_m2_counter = new Counter("opp_m2_counter");
var opp_m3_counter = new Counter("opp_m3_counter");
var opp_m4_counter = new Counter("opp_m4_counter");
var opp_m5_counter = new Counter("opp_m5_counter");
var opp_s1_counter = new Counter("opp_s1_counter");
var opp_s2_counter = new Counter("opp_s2_counter");
var opp_s3_counter = new Counter("opp_s3_counter");
var opp_s4_counter = new Counter("opp_s4_counter");
var opp_s5_counter = new Counter("opp_s5_counter");
var opp_field_spell_counter = new Counter("opp_field_spell_counter");
var opp_pendulum_left_counter = new Counter("opp_pendulum_left_counter");
var opp_pendulum_right_counter = new Counter("opp_pendulum_right_counter");
var left_link_counter = new Counter("left_link_counter");
var right_link_counter = new Counter("right_link_counter");
var skill_card_counter = new Counter("skill_card_counter");
var opp_skill_card_counter = new Counter("opp_skill_card_counter");
var counters = [m1_counter, m2_counter, m3_counter, m4_counter, m5_counter, s1_counter, s2_counter, s3_counter, s4_counter, s5_counter, pendulum_left_counter, pendulum_right_counter, field_spell_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_m4_counter, opp_m5_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_s4_counter, opp_s5_counter, opp_pendulum_left_counter, opp_pendulum_right_counter, opp_field_spell_counter, left_link_counter, right_link_counter, skill_card_counter, opp_skill_card_counter];
counters.forEach(function(e,i){
	$('#counters').append(e);
});






// from main.js

var automatic = false;
var seen_deck = false;
var seen_extra = false;
var duelFocus;






$('#view .content:first').mouseenter(showFaceDownCards);
$('#view .content:first').mouseleave(hideFaceDownCards);
//$('#view .content:first').mouseout(hideFaceDownCards);
$('#duel .cout_txt').scroll(saveDuelVSP);
$('#duel .cout_txt').blur(restoreDuelVSP);
$('#grave_hidden').mouseover(graveOver);
$('#banished_hidden').mouseover(banishedOver);
$('#extra_hidden').mouseover(extraOver);
$('#extra_hidden').mouseenter(showExtraDeckMenu);
$('#deck_hidden').mouseover(deckOver);
$('#opp_deck_hidden').mouseover(oppDeckOver);
$('#opp_grave_hidden').mouseover(oppGraveOver);
$('#opp_banished_hidden').mouseover(oppBanishedOver);
$('#opp_extra_hidden').mouseover(oppExtraOver);
$('#grave_hidden').click(viewGY);
$('#banished_hidden').click(viewBanished);
$('#opp_grave_hidden').click(viewGY2);
$('#opp_banished_hidden').click(viewBanished2);
$('#opp_extra_hidden').click(viewED2);
$('#extra_hidden').click(viewED);
$('#watchers').mouseover(maximizeWatchers);
$('#watchers').mouseleave(minimizeWatchers);
$('#watchers').scroll(watchersScrollE);
$('#watchers').mousemove(watchersMoveE);
$('.duel_avatar .rating').mouseover(showRating);
$('.duel_avatar .rating').mouseleave(hideRating);
$('#pause_btn').mouseenter(showRating);
$('#pause_btn').mouseout(showRating);
$('#avatar1 .nsfw_btn').click(showDuelNSFW);
$('#avatar2 .nsfw_btn').click(showDuelNSFW);
$('#avatar3 .nsfw_btn').click(showDuelNSFW);
$('#avatar4 .nsfw_btn').click(showDuelNSFW);
$('#avatar1 .rating').click(hideDuelNSFW);
$('#avatar2 .rating').click(hideDuelNSFW);
$('#avatar3 .rating').click(hideDuelNSFW);
$('#avatar4 .rating').click(hideDuelNSFW);
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
addDragging($('#watch_chat'), ".chat_top_bg", ".chat_background", function(){
	appendChat($('#watch_chat'));
}, function(){
	toggleAds($('#watch_chat'));
});
addDragging($('#duel_log'), ".chat_top_bg", ".chat_background", function(){
	appendChat($('#duel_log'));
}, function(){
	toggleAds($('#duel_log'));
});
$('#watch_chat .cout_txt').scroll(saveWatchChatVSP);
$('#watch_chat .cout_txt').blur(restoreWatchChatVSP);
addButton($('#watch_chat .minimize_btn'), toggleWatchersChat);
addButton($('#duel_log .minimize_btn'), toggleDuelLog);
addButton($('#over .ok_btn'), hideDuelOver);
addButton($('#log_btn'), toggleDuelLog);
addButton($('#watchers_btn'), toggleWatchersChat);
addButton($('#view .exit_btn'), exitViewing);
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
		case "duel_start2":
		case "duel_start3":
		case "duel_start4":
			$('#tp_start2').show();
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
	if (tag_duel) {
		player1.partner = player3;
		player2.partner = player4;
		player3.partner = player1;
		player4.partner = player2;
		player3.initPlayer1();
		player4.initPlayer2();
	}
	if (links) {
		player1.initPlayer1Links();
		player2.initPlayer2Links();
		if (tag_duel) {
			player3.initPlayer1Links();
			player4.initPlayer2Links();
		}
	}
	if (speed || rush) {
		player1.initPlayer1Speed();
		player2.initPlayer2Speed();
		if (tag_duel) {
			player3.initPlayer1Speed();
			player4.initPlayer2Speed();
		}
	}
	player1.bubbles = $('#bubbles1');
	player1.all_good = $('#avatar1 .all_good');
	player1.thinking = $('#avatar1 .think');
	//player1.countdown = $('#avatar1 .countdown');
	player1.countdown = $('#countdown1');
	player2.bubbles = $('#bubbles2');
	player2.all_good = $('#avatar2 .all_good');
	player2.thinking = $('#avatar2 .think');
	//player2.countdown = $('#avatar2 .countdown');
	player2.countdown = $('#countdown2');
	if (tag_duel) {
		player3.bubbles = $('#bubbles3');
		player3.all_good = $('#avatar3 .all_good');
		player3.thinking = $('#avatar3 .think');
		player3.countdown = $('#avatar3 .countdown');
		player4.bubbles = $('#bubbles4');
		player4.all_good = $('#avatar4 .all_good');
		player4.thinking = $('#avatar4 .think');
		player4.countdown = $('#avatar4 .countdown');
	}
	preview.hide();
	$('#duel .preview').append(preview);
	preview_txt.hide();
	preview_txt.insertAfter(preview);
	$('#over').hide();
	$('#log_btn').hide()
	$('#log_tooltip').hide();
	$('#watchers_tooltip').hide();
	$('.duel_avatar .rating_txt').hide();
	$('.duel_avatar .rating_txt').css("opacity", 0);
	$('.duel_status .status_txt').text("");
	$('.duel_avatar .aura').hide();
	$('#duel .cin_txt').setWidth(181);
	$('#duel .cin_txt').hide();
	$('#duel .html_cb').hide();
	$('#duel .cout_txt').css("height", 246);
	watch_chat.find('.cout_txt').html("");
	watch_chat.find('.cin_txt').val("");
	$('#bubbles1').hide();
	$('#bubbles2').hide();
	$('#bubbles3').hide();
	$('#bubbles4').hide();
	$('#bubbles1').data("cycle").stop();
	$('#bubbles2').data("cycle").stop();
	$('#bubbles3').data("cycle").stop();
	$('#bubbles4').data("cycle").stop();
	$('.duel_avatar .gone').hide();
	$('.duel_avatar .nsfw').css("opacity", 0);
	$('.duel_avatar .nsfw').hide();
	$('.duel_avatar .nsfw_btn').hide();
	$('#avatar1').show();
	$('#avatar2').show();
	$('#avatar3').hide();
	$('#avatar4').hide();
	$('#rematch_btn').hide();
	$('#call_admin_btn').disable(true);
	$('#call_admin_btn').hide();
	$('#draw_btn').hide();
	$('#mulligan_btn').hide();
	$('#defeat_btn').hide();
	$('#cancel_duel_btn').hide();
	$('#host_loss_btn').hide();
	$('#opponent_loss_btn').hide();
	$('#reset_btn').hide();
	$('#duel #swap_btn').hide();
	$('#siding_btn').hide();
	$('#pause_btn').hide();
	$('#ss_glow').hide();
	$('#ss_spiral').hide();
	$('.all_good').hide();
	gameLossSound = getGameLossSound();
	gameWinSound = getGameWinSound();
	player1.rating_rep_txt = $('#avatar1 .rating_txt');
	player2.rating_rep_txt = $('#avatar2 .rating_txt');
	if (tag_duel) {
		player3.rating_rep_txt = $('#avatar3 .rating_txt');
		player4.rating_rep_txt = $('#avatar4 .rating_txt');
	}
	duel_log.find('.log_txt').html("");
	$('#duel .refresh_btn').hide();
	//if (moderator || admin) {
		$('#duel .refresh_btn').show();
	//}
	shiftPlayersE();
	$('.gone').hide();
	$('#duel .cout_txt').html("");
	$('#duel_content').append($('#field_content'));
	$('#card_menu').hide();
	
	watch_chat_limit = 0;
	$('#watch_chat .html_cb').hide();
	if (html) {
		$('#watch_chat .html_cb').show();
	}
	
	$('#done_siding_btn').hide();
	$('#done_siding1').hide();
	$('#done_siding2').hide();
	$('#overlay').hide();
	$('.counter').css("pointer-events",	duelist ? "auto" : "none");
	removeFieldSpellPic();
	$('#watchers .cell').detach();
	$('#watchers .watchers_txt').text("Watchers: 0");
	watchers_data = [];
	duel_vsp = 1000;
	logTurnCount = 0;
	$('#think_btn').hide();
	
	hideCountdown();
	if (duelist) {
		initDuelist();
	}
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
	if (first) { // solo
		first.detach();
		second.detach();
	}
}

/*function saveDuelLogVSP() {
	duel_log_vsp = $('#duel_log .log_txt').scrollTop();
	var maxVSP = $('#duel_log .log_txt').scrollMax();
	//if (duel_log_vsp >= maxVSP - 80 || maxVSP < 0) {
	//if (duel_log_vsp >= maxVSP - 80 || maxVSP < 0 || $('#duel_log .log_txt').data("maxVPS") && !inBounds($('#duel_log .log_txt'))) {
	if (duel_log_vsp >= maxVSP || maxVSP < 0 || $('#duel_log .log_txt').data("maxVPS") && !inBounds($('#duel_log .log_txt'))) {
		console.log('.');
		console.log(duel_log_vsp >= maxVSP - 80);
		console.log(maxVSP < 0);
		console.log($('#duel_log .log_txt').data("maxVPS") && !inBounds($('#duel_log .log_txt')));
		console.log('..');
		//duel_log_vsp = Infinity;
		duel_log_vsp += 1000;
		$('#duel_log .log_txt').data("maxVPS", true);
	}
	else {
		$('#duel_log .log_txt').data("maxVPS", false);
	}
}*/

function saveDuelLogVSP() {
	//console.log('before, duel_log_vsp = ' + duel_log_vsp);
	duel_log_vsp = $('#duel_log .log_txt').scrollTop();
	//console.log('saving to = ' + duel_log_vsp);
	var maxVSP = $('#duel_log .log_txt').scrollMax();
	$('#duel_log .log_txt').data("maxVPS", duel_log_vsp >= maxVSP);
}

/*function restoreDuelLogVSP() {
	if (!$('#duel_log .log_txt').data("maxVPS")) {
		//return;
	}
	console.log('passed');
	$('#duel_log .log_txt').scrollTop(duel_log_vsp);
}*/

function restoreDuelLogVSP() {
	if ($('#duel_log .log_txt').data("maxVPS")) {
		$('#duel_log .log_txt').scrollTop(duel_log_vsp + 1000);
		//console.log('restoring to MAX');
		return;
	}
	var num = duel_log_vsp;
	setTimeout(function(){
		$('#duel_log .log_txt').scrollTop(num);
	}, 20);
	//console.log('restoring to ' + duel_log_vsp);
}
		
function duelLogPrint(data) {
	if (!data) {
		return;
	}
	if (data instanceof Array) {
		data.forEach(function(e,i){
			duel_logs.push(e);
		});
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
		if (!data.username) {
			color = "#777777";
		}
		else if (player1.username == data.username || (tag_duel && player3.username == data.username)) {
			color = "#FF0000";
		}
		else if (player2.username == data.username || (tag_duel && player4.username == data.username)) {
			color = "#0000FF";
		}
		else {
			color = "#000000";
		}
		if ($('#duel_log .usernames_cb').is(":checked")) {
			if (conceal && isPlayer1(data.username)) {
				user = " Red:";
			}
			else if (conceal && isPlayer2(data.username)) {
				user = " Blue:";
			}
			else {
				user = " " + data.username + ":";
			}
		}
		if (data.type == "chat") {
			if ($('#duel_log .chat_cb').is(":checked")) {
				str += '<font color="' + color + '">' + timestamp + escapeHTML(user) + " <i>" + escapeHTML(entry) + "</i></font><br>";
			}
		}
		else if (data.type == "duel") {
			if ($('#duel_log .duel_cb').is(":checked")) {
				if (entry == "Entered Draw Phase") {
					//str += '<font color="' + color + '">--------------------------------------------</font><br>';
					logTurnCount++
					str += '<font color="' + color + '">----------------(Turn ' + logTurnCount + ')';
					if (logTurnCount < 10) {
						str += '-';
					}
					str += '----------------</font><br>';
				}
				str += '<font color="' + color + '">' + timestamp + escapeHTML(user) + " " + escapeHTML(entry) + '</font><br>';
			}
		}
		else {
			if ($('#duel_log .game_cb').is(":checked")) {
				str += '<font color="' + color + '">' + timestamp + escapeHTML(user) + " " + escapeHTML(entry) + '</font><br>';
			}
		}
		saveDuelLogVSP();
		$('#duel_log .log_txt').append(str);
		restoreDuelLogVSP();
		//$('#duel_log .log_txt').scrollTop(duel_log_vsp); // received complaints
	}
}

//$('#duel_log .log_txt').scrollTop(2306)
//$('#duel_log .log_txt').append('<font color="#FF0000">[64:38] <i>&quot;ddd&quot;</i></font><br>'); 

/*setInterval(function(){
	//console.log(duel_log_vsp);
	console.log(inBounds($('#duel_log .log_txt')));
}, 300);*/












function updateDuelLog() {
	var str = "";
	logTurnCount = 0;
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
		if (!duel_logs[i].username) {
			color = "#777777";
		}
		else if (player1.username == duel_logs[i].username || (tag_duel && player3.username == duel_logs[i].username)) {
			color = "#FF0000";
		}
		else if (player2.username == duel_logs[i].username || (tag_duel && player4.username == duel_logs[i].username)) {
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
					logTurnCount++;
					//str += '<font color="' + color + '">--------------------------------------------</font><br>';
					str += '<font color="' + color + '">----------------(Turn ' + logTurnCount + ')';
					if (logTurnCount < 10) {
						str += '-';
					}
					str += '----------------</font><br>';
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
	console.log('doing here');
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
			$('#duel #mulligan_btn').hide();
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
	TweenMax.to($('#rps_start .card'), 0, {rotationY:180 + ABOUT_ZERO});
	if (duelist) {
		$('#duel .cin_txt').focus();
		if (player1 == Player1()) {
			rock1.addClass("rps_card");
			paper1.addClass("rps_card");
			scissors1.addClass("rps_card");
			TweenMax.to($('.rps_card'), 0, {rotationY:ABOUT_ZERO});
		}
	}
	
	var data = {"name":"Rock", "treated_as":"Rock", "effect":"Rock beats scissors but loses to paper", "card_type":"Monster", "monster_color":"Ritual", "type":"Rock", "attribute":"EARTH", "pic":IMAGES_START + "card/rock.jpg"};
	rock1.data("cardfront").initializeFromData(data);
	rock2.data("cardfront").initializeFromData(data);
	
	data = {"name":"Paper", "effect":"Paper beats rock but loses to scissors", "card_type":"Monster", "monster_color":"Normal", "type":"Winged Beast", "attribute":"WIND", "pic":IMAGES_START + "card/paper.jpg"};
	paper1.data("cardfront").initializeFromData(data);
	paper2.data("cardfront").initializeFromData(data);
	
	data = {"name":"Scissors", "effect":"Scissors beats paper but loses to rock", "card_type":"Monster", "monster_color":"Fusion", "type":"Machine", "attribute":"LIGHT", "pic":IMAGES_START + "card/scissors.jpg"};
	scissors1.data("cardfront").initializeFromData(data);
	scissors2.data("cardfront").initializeFromData(data);
	
	bottomChoices = [rock1, paper1, scissors1];
	topChoices = [rock2, paper2, scissors2];

	TweenMax.fromTo([rock1, paper1, scissors1], 0.5, {top:726.8}, {top:478.1, delay:0.3, ease:Expo.easeInOut, onStart:function(){
		playSound(Reveal);
	}});
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
	pickedRPS = true;
	console.log('determineWinner');
	if (data.player2 == username || (tag_duel && data.player2 == player1.partner.username)) {
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
	var rotY = 180 + ABOUT_ZERO;
	if (duelist) {
		rotY = ABOUT_ZERO;
	}
	if (Player1().username != username || !duelist) {
		for (i = 0; i < bottomChoices.length; i++) {
			if (bottomChoice[0] != bottomChoices[i][0]) {
				TweenMax.fromTo(bottomChoices[i], 0.5, {top:478}, {top:794, rotationY:getRotationY(bottomChoices[i][0]) + 360 + ABOUT_ZERO});
			}
			else {
				TweenMax.fromTo(bottomChoices[i], 0.5, {left:parseInt(bottomChoices[i].css("left"))}, {left:523, rotationY:360 + ABOUT_ZERO});
			}
		}
	}
	for (var i = 0; i < topChoices.length; i++) {
		if (topChoice[0] != topChoices[i][0]) {
			TweenMax.fromTo(topChoices[i], 0.5, {top:162, rotationY:-180 + ABOUT_ZERO}, {top:-113, rotationY:180 + ABOUT_ZERO});
		}
		else {
			$('#rps_start').append(topChoice);
			TweenMax.fromTo(topChoices[i], 0.5, {left:parseInt(topChoices[i].css("left"))}, {left:523, rotationY:360 + ABOUT_ZERO, onComplete:function(){
				TweenMax.fromTo(bottomChoice, 0.2, {top:parseInt(bottomChoice.css("top"))}, {top:447, ease:Linear.easeNone});
				TweenMax.fromTo(topChoice, 0.2, {top:parseInt(topChoice.css("top"))}, {top:193, ease:Linear.easeNone, onComplete:function(){
					if (data.winner == Player2().username) {
						TweenMax.fromTo(bottomChoice, 0.5, {top:447}, {top:794, ease:Linear.easeNone});
						TweenMax.fromTo(topChoice, 0.2, {top:193}, {top:320, ease:Linear.easeNone});
						rpsTimer.start();
						playSound(Shred);
					}
					else if (data.winner == Player1().username || data.winner != "") {
						TweenMax.fromTo(bottomChoice, 0.2, {top:447}, {top:320, ease:Linear.easeNone});
						TweenMax.fromTo(topChoice, 0.5, {top:193}, {top:-155, ease:Linear.easeNone});
						rpsTimer.start();
						playSound(Shred);
					}
					else {
						pickedRPS = false;
						console.log("data.winner = " + data.winner);
						console.log("Player1().username = " + Player1().username);
						console.log("Player2().username = " + Player2().username);
						TweenMax.fromTo(bottomChoice, 0.2, {top:447}, {top:478, ease:Linear.easeNone});
						TweenMax.fromTo(topChoice, 0.2, {top:193}, {top:162, ease:Linear.easeNone, onComplete:function(){
							// RETURN ALL CARDS BACK TO ORIGINAL POSITIONS
							TweenMax.to(rock1, 0.5, {top:478, left:319, rotationY:rotY, ease:Linear.easeNone});
							TweenMax.to(paper1, 0.5, {top:478, left:523, rotationY:rotY, ease:Linear.easeNone});
							TweenMax.to(scissors1, 0.5, {top:478, left:727, rotationY:rotY, ease:Linear.easeNone});
							TweenMax.to(rock2, 0.5, {top:162, left:727, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone});
							TweenMax.to(paper2, 0.5, {top:162, left:523, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone});
							TweenMax.to(scissors2, 0.5, {top:162, left:319, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone, onComplete:function() {
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
	if (links || speed || rush) {
		gotoDuel("tp_start2");
	}
	else {
		gotoDuel("tp_start");
	}
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
	
	
	
	
	
	
	
	
			$('#cid2_txt').show();
			$('#cie2_txt').show();
			if (duelFormat == "gr" || duelFormat == "gu") {
				$('#cie2_txt').hide();
				$('#cie1_txt').hide();
				//$('#view .expand_btn').show();
			}
			else {
				$('#cie2_txt').show();
				$('#cie1_txt').show();
				//$('#view .expand_btn').hide();
			}
	
	
	
	
	
	
	
	
	
	$('#cid1_txt').text("");
	$('#cid2_txt').text("");
	$('#cie1_txt').text("");
	$('#cie2_txt').text("");
	/*$('#cid1_txt').hide();
	$('#cid2_txt').hide();
	$('#cie1_txt').hide();
	$('#cie2_txt').hide();*/
	$('#cie1_txt').css("top", 515);
	first = new Card();
	first.css("left", 370.5);
	first.css("top", 320);
	first.css("transform", "scale(0.6875)");
	first.css("pointer-events", "none");
	first.find('.content').css("pointer-events", "auto");
	first.onRotate(true);
	//first.data("cardfront").first_mc.visible = true;
	//first.data("cardfront").restoreThickness();
	var data = {"name":"First", "effect":"The player who picks this card will go first", "card_type":"Monster", "monster_color":"Effect", "type":"Spellcaster", "attribute":"LIGHT", "pic":IMAGES_START + "card/first.jpg"};
	first.data("cardfront").initializeFromData(data);
	//$('#duel').append(first); // #over is behind the cards
	//$('#' + currentLabel).append(first); // first is behind the decks
	first.insertBefore($('#over'));
	
	second = new Card();
	data = {"name":"Second", "effect":"The player who picks this card will go second", "card_type":"Monster", "monster_color":"Ritual", "type":"Spellcaster", "attribute":"DARK", "pic":IMAGES_START + "card/second.jpg"};
	second.insertBefore($('#over'));
	
	second.css("left", 675.5);
	second.css("top", 320);
	second.css("transform", "scale(0.6875)");
	second.css("pointer-events", "none");
	second.find('.content').css("pointer-events", "auto");
	second.onRotate(true);
	//second.data("cardfront").second_mc.visible = true;
	//second.data("cardfront").restoreThickness();
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
				//$('#duel').append($('#numbers'));
				$('#numbers').insertBefore($('#over'));
				setupNumbers();
				if (!solo) {
					addCards();
				}
			}});
		}
	}});
	TweenMax.fromTo(second, 0.5, {top:839}, {top:320});
}

/*function getDuelCard(id) {
	for (var i = 0; i < players.length; i++) {
		for (var j = 0; j < players[i].all_cards_arr.length; j++) {
			if (players[i].all_cards_arr[j].data("id") == id) {
				return players[i].all_cards_arr[j];
			}
		}
	}
}*/

function getDuelCard(id) {
	var arr = player1.all_cards_arr.concat(player2.all_cards_arr);
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].data("id") == id) {
			return arr[i];
		}
	}
	return null;
}

function duelResponse(data) {
	
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
			if (duelist && data.username == username) {
				duelChatTimerE();
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
			actionsQueue.push(function(){ // adding this for fiber jar
				permissionEvent(data);
				endAction();
			});
			break;
		case "Permission granted":
			actionsQueue.push(function(){ // adding this for fiber jar
				removePermission();
				endAction();
			});
			break;
		case "Permission denied":
			actionsQueue.push(function(){ // adding this for fiber jar
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
				endAction();
			});
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
		case "View materials":
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
		case "Pick 4 cards": // Rescue-ACE Turbulence
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
		case "Edit stats":
			actionsQueue.push(function(){
				editStats(player, data);
			});
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

function beginNextDuel(data) {
	rpsWinner = data.username;
	if (switched) {
		if (tag_duel) {
			switchDuelists(data, "player1", "player2", "player3", "player4");
		}
		else {
			switchDuelists(data, "player1", "player2");
		}
	}
	else if (tag_duel && data.player3.username == username) { // replay.as doesn't use this
		switchDuelists(data, "player1", "player3");
	}
	deckData = data;
	initTPStart();
	gameLossSound = getGameLossSound();
	gameWinSound = getGameWinSound();
	if (!duelist) {
		$('#draw_btn').hide();
			$('#mulligan_btn').hide();
	}
	exitSiding();
	if (solo) {
		addCards();
		$('.field_decks').css("opacity", 1);
	}
	
	$('.all_good').hide();
}

function exitSiding() {
	$('#done_siding1').hide();
	$('#done_siding2').hide();
	$('#lifepoints1').show();
	$('#lifepoints2').show();
	$('#viewing').children().detach();
	$('#siding .cardfront').detach();
}

function initSoloModeButtons() {
	$('#defeat_btn').hide();
	$('#draw_btn').val("View Replay");
	$('#draw_btn').css("top", 590);
	$('#call_admin_btn').hide();
	$('#reset_btn').show();
	$('#siding_btn').show();
	
	$('#draw_btn').show();
		
		$('#mulligan_btn').hide();
}

function pickFirstResponse(data) {
	console.log('pickFirstResponse');
	if (solo) {
		duelStart(data);
		$('#cid2_txt').hide();
		$('#cie2_txt').hide();
		initSoloModeButtons();
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
		TweenMax.fromTo(second, 0.5, {top:320}, {top:-199, delay:2, ease:Linear.easeNone, onStart:function(){
			playSound(Reveal);
		}, onComplete:function(){
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
		TweenMax.fromTo(first, 0.5, {top:320}, {top:-199, delay:2, ease:Linear.easeNone, onStart:function(){
			playSound(Reveal);
		}, onComplete:function(){
			if (currentLabel.indexOf("tp_start") >= 0) {
				duelStart(data);
			}
			playSound(Reveal);
		}});
	}
	playSound(Decided);
	shiftPlayersE();
}

function addCards() {
	console.time("addCards");
	initDecks(deckData);
	shiftDeck(Player1());
	shiftDeck(Player2());
	shiftExtra(Player1());
	shiftExtra(Player2());
	deckData = null;
	if (tag_duel) {
		shiftDeck(Player1().partner);
		shiftDeck(Player2().partner);
		shiftExtra(Player1().partner);
		shiftExtra(Player2().partner);
		removeDeck(Player1().partner);
		removeDeck(Player2().partner);
		removeExtra(Player1().partner);
		removeExtra(Player2().partner);
	}
	initSleeves();
	shiftPlayersE();
	console.timeEnd("addCards");
}

function loadSleeves(player) {
	if (currentLabel == "rps_start" && !solo) {
		if (player == Player1()) {
			rock1.setSleeve(player.sleeve);
			paper1.setSleeve(player.sleeve);
			scissors1.setSleeve(player.sleeve);
		}
		else if (player == Player2()) {
			rock2.setSleeve(player.sleeve);
			paper2.setSleeve(player.sleeve);
			scissors2.setSleeve(player.sleeve);
		}
	}
	else if (currentLabel.indexOf("tp_start") >= 0 || currentLabel.indexOf("duel_start") >= 0 || solo) {
		for (var i = 0; i < player.all_cards_arr.length; i++) {
			if (!tag_duel || player.main_arr.indexOf(player.all_cards_arr[i]) >= 0 || player.extra_arr.indexOf(player.all_cards_arr[i]) >= 0 || player.hand_arr.indexOf(player.all_cards_arr[i]) >= 0) {
				player.all_cards_arr[i].setSleeve(player.sleeve);
			}
			else if (tag_duel && (player == turn_player || player == turn_player.opponent) && player.partner.main_arr.indexOf(player.all_cards_arr[i]) < 0 && player.partner.extra_arr.indexOf(player.all_cards_arr[i]) < 0 && player.partner.hand_arr.indexOf(player.all_cards_arr[i]) < 0) {
				player.all_cards_arr[i].setSleeve(player.sleeve);
			}
		}
	}
}
//player1.hand_arr[0].setSleeve(player1.sleeve);

function initDecks(data) {
	console.log('initDecks');
	console.time("initDecks");
	player1.resetDeck();
	player2.resetDeck();
	for (var i = 0; i < data.player1.main_total; i++) {
		var card = newDuelCard(player1);
		card.data("id", data.player1.start + i);
		player1.main_arr.push(card);
		player1.all_cards_arr.push(card);
	}
	for (i = 0; i < data.player1.extra_total; i++) {
		card = newDuelCard(player1);
		card.data("id", data.player1.start + i + data.player1.main_total);
		card.data("face_down", true);
		player1.extra_arr.push(card);
		player1.all_cards_arr.push(card);
	}
	for (i = 0; i < data.player2.main_total; i++) {
		card = newDuelCard(player2);
		card.data("id", data.player2.start + i);
		if (player1.username == username && !automatic) {
			card.css("cursor", "pointer");
			card.click(targetCard);
		}
		player2.main_arr.push(card);
		player2.all_cards_arr.push(card);
	}
	for (i = 0; i < data.player2.extra_total; i++) {
		card = newDuelCard(player2);
		card.data("id", data.player2.start + i + data.player2.main_total);
		card.data("face_down", true);
		if (player1.username == username && !automatic) {
			card.css("cursor", "pointer");
			card.click(targetCard);
		}
		player2.extra_arr.push(card);
		player2.all_cards_arr.push(card);
	}
	if (tag_duel) {
		player3.resetDeck();
		player4.resetDeck();
		for (i = 0; i < data.player3.main_total; i++) {
			card = newDuelCard(player3);
			card.data("id", data.player3.start + i);
			player3.main_arr.push(card);
			player3.all_cards_arr.push(card);
		}
		for (i = 0; i < data.player3.extra_total; i++) {
			card = newDuelCard(player3);
			card.data("id", data.player3.start + i + data.player3.main_total);
			card.data("face_down", true);
			player3.extra_arr.push(card);
			player3.all_cards_arr.push(card);
		}
		for (i = 0; i < data.player4.main_total; i++) {
			card = newDuelCard(player4);
			card.data("id", data.player4.start + i);
			if (player1.username == username && !automatic) {
				card.css("cursor", "pointer");
				card.click(targetCard);
			}
			player4.main_arr.push(card);
			player4.all_cards_arr.push(card);
		}
		for (i = 0; i < data.player4.extra_total; i++) {
			card = newDuelCard(player4);
			card.data("id", data.player4.start + i + data.player4.main_total);
			card.data("face_down", true);
			if (player1.username == username && !automatic) {
				card.css("cursor", "pointer");
				card.click(targetCard);
			}
			player4.extra_arr.push(card);
			player4.all_cards_arr.push(card);
		}
	}
	console.timeEnd("initDecks");
}

function removeDeck(player) {
	for (var i = 0; i < player.main_arr.length; i++) {
		player.main_arr[i].detach();
	}
}

function removeExtra(player) {
	for (var i = 0; i < player.extra_arr.length; i++) {
		player.extra_arr[i].detach();
	}
}

function removeHand(player) {
	for (var i = 0; i < player.hand_arr.length; i++) {
		player.hand_arr[i].detach();
	}
}

function shiftDeck(player) { // 144 millis
	try {
		if (currentLabel == "rps_start") {
			return;
		}
		switch(viewing) {
			case "Opponent's Deck (partial)":
			case "Opponent's Deck (Top 1 Cards)":
			case "Opponent's Deck (Top 3 Cards)":
			case "Opponent's Deck (Top 5 Cards)":
				return;
			case "Deck":
			case "Opponent's Deck":
				viewingE(viewing);
				return;
		}
		var mX = 0;
		var mY = 0;
		for (var i = player.main_arr.length - 1; i > -1; i--) {
			var rotY = 180 + ABOUT_ZERO;
			if (player.main_arr[i].data("face_up")|| player.deck_face_up) {
				if (player.main_arr[i].data("cardfront").data("initialized")) {
					rotY = ABOUT_ZERO;
				}
			}
			player.main_arr[i].css("left", player.deckX + mX);
			player.main_arr[i].css("top", player.deckY + mY);
			TweenMax.to(player.main_arr[i], 0, {scale:0.1485, rotation:player.rot, rotationY:rotY, z:player.main_arr.length - i, alpha:1});
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
	catch(err) {
		Send({"action":"Error report", "line":"1948", "message":err.message});
	}
}
/*
shiftDeck(player1);
TweenMax.to(player1.main_arr[0], 2, {rotation:95})
TweenMax.to(player1.main_arr[0], 2, {transformPerspective:0})
*/

function shiftGrave(player) {
	if (viewing.indexOf("Graveyard") >= 0) {
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

function shiftBanished(player) {
	if (viewing == "Banished" || viewing == "Opponent's Banished") {
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

function shiftExtra(player) {
	if (currentLabel == "rps_start" || currentLabel == "siding") {
		return;
	}
	if (viewing == "Extra Deck" || viewing == "Opponent's Extra Deck" || viewing == "Opponent's Public Extra Deck" || viewing == "Host's Public Extra Deck") {
		viewingE(viewing);
		return;
	}
	var eX = 0;
	var eY = 0;
	for (var i = player.extra_arr.length - 1; i > -1; i--) {
		if (!player.extra_arr[i].data("face_down")) {
			TweenMax.to(player.extra_arr[i], 0, {rotationY:ABOUT_ZERO});
			//player.extra_arr[i].find('.cardback').hide();
			player.extra_arr[i].find('.cardfront').show();
		}
		else {
			TweenMax.to(player.extra_arr[i], 0, {rotationY:180 + ABOUT_ZERO});
			player.extra_arr[i].find('.cardback').show();
			player.extra_arr[i].find('.cardfront').hide();
		}
		player.extra_arr[i].css("left", player.extraX + eX);
		player.extra_arr[i].css("top", player.extraY + eY);
		TweenMax.to(player.extra_arr[i], 0, {scale:0.1485, rotation:player.rot, z:player.extra_arr.length - i});
		eX += player.eX;
		eY += player.eY;
		$('#field').append(player.extra_arr[i]);
	}
	$('#cie1_txt').text(Player1().extra_arr.length);
	$('#cie2_txt').text(Player2().extra_arr.length);
}

function addDeckChildren(player) {
	for (var i = player.main_arr.length - 1; i > -1; i--) {
		$('#field').append(player.main_arr[i]);
	}
}

function addExtraChildren(player) {
	if ((player == Player1() && viewing == "Extra Deck") || (player != Player1() && viewing == "Opponent's Extra Deck")) {
		return;
	}
	for (var i = player.extra_arr.length - 1; i > -1; i--) {
		$('#field').append(player.extra_arr[i]);
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
		if (remove_sleeves) {
			player.hand_arr[i].removeSleeve();
		}
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
	/*for (var i = 0; i < player.hand_arr.length; i++) {
		if (player.hand_arr[i].data("face_up") && player.username == username && duelist) {
			player.hand_arr[i].css("top", player.hand_arr[i].data("controller").handY - 30);
		}
	}*/
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
				for (var i = 1; i < player.hand_arr.length; i++) {
					TweenMax.to(player.hand_arr[i], duration, {left:704 - ((432 / (player.hand_arr.length - 1)) * i), ease:Linear.easeNone, immediateRender:instant});
				}
		}
	}
	for (var i = 0; i < player.hand_arr.length; i++) {
		$('#duel .cards').append(player.hand_arr[i]);
		TweenMax.to(player.hand_arr[i], 0, {"z":i})
	}
}

function updateController(player, card) {
	card.data("controller", player);
	if (automatic) {
		return;
	}
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

/*function updateController(player, card) {
	card.data("controller", player);
	if (duelist && card.data("controller") == Player1()) {
		card.off("click", targetCard);
		card.css("cursor", "auto");
	}
	else if (duelist) {
		//if (!card.hasEventListener(MouseEvent.CLICK)) {
			card.click(targetCard);
		//}
		card.css("cursor", "pointer");
	}
}*/

/*function updateOwner(player, card) { // why do we have to be careful not to just give it to this player?
	console.log('a');
	if (card.data("owner") == player || (tag_duel && card.data("owner") == player.partner)) {
		console.log('b');
		card.data("owner", player);
	}
}*/

function updateOwner(player, card) { // why do we have to be careful not to just give it to this player?
	card.data("owner", player);
}

function gotoDueling() {
	$('#sp').show();
	if (rush) {
		gotoDuel('duel_start4');
		setupDuelField();
		setupDuelFieldSpeed();
		setupDuelFieldRush();
	}
	else if (speed) {
		gotoDuel('duel_start3');
		setupDuelField();
		setupDuelFieldSpeed();
	}
	else if (links) {
		gotoDuel('duel_start2');
		setupDuelFieldLinks();
	}
	else {
		gotoDuel('duel_start');
		setupDuelField();
	}
	initUserDuelStart();
	if (duelist) {
		initDuelistDuelStart();
	}
	else {
		initWatcherDuelStart();
	}
	if ((admin || adjudicator) && !duelist) {
		initAdminDuelStart();
	}
}

function getPlayer(str) {
	if (str == player1.username) {
		return player1;
	}
	if (str == player2.username) {
		return player2;
	}
	if (tag_duel) {
		if (str == player3.username) {
			return player3;
		}
		if (str == player4.username) {
			return player4;
		}
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
	if (tag_duel) {
		if (data == player3.username) {
			return player3;
		}
		if (data == player4.username) {
			return player4;
		}
	}
	errorE("Card controller error");
	return null;
}

function getCurrentOwner(data, player) {
	if (!data) {
		return player;
	}
	if (data == player1.username) {
		return Player1();
	}
	else if (data == player2.username) {
		return Player2();
	}
	if (tag_duel) {
		if (data == player3.username) {
			return Player1();
		}
		if (data == player4.username) {
			return Player2();
		}
	}
	return null;
}

function performNextAction() {
	if (currentLabel.indexOf("duel_start") < 0) {
		return;
	}
	if (stopQueue) {
		return;
	
		/*if (TweenMax.getAllTweens().length == 0) {
			stopQueue = false;
			if (moderator) {
				addLine('<font color="#FF0000" style="font-size: 16px;">HAD TO MANUALLY CHANGE STOPQUEUE</font>');
				if (actionsQueue.length > 0) {
					console.log(actionsQueue[0]);
				}
			}
		}
		else {
			return;
		}*/
	
		
	}
	if (actionsQueue.length > 0) {
		stopQueue = true;
		//try {
			actionsQueue[0]();
			updateCounters();
		/*}
		catch (e) {
			console.log('duel error: ' + e.message);
			endAction();
		}*/
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

/*function endAction() {
	if (resetting) {
		return;
	}
	updateCounters();
	if (actionsQueue.length > 0) {
		actionsQueue.splice(0, 1);
	}
	if (stopQueue) {
		stopQueue = false;
		if (actionsQueue.length > 0) {
			performNextAction();
		}
	}
}*/

function editStats(player, data) {
	var card = getFieldCard(player, data);
	if (card == null) {
		card = getFieldCard(player.opponent, data);
		if (card == null) {
			return;
		}
	}
	card.data("new_atk", data.atk);
	card.data("new_def", data.def);
	endAction();
}

function updateStats() {
	var zones = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5];
	var texts = [player1.m1_txt, player1.m2_txt, player1.m3_txt, player1.m4_txt, player1.m5_txt, player2.m1_txt, player2.m2_txt, player2.m3_txt, player2.m4_txt, player2.m5_txt];
	if (links) {
		zones.push(linkLeft);
		zones.push(linkRight);
		texts.push($('#ol_txt'));
		texts.push($('#hl_txt'));
	}
	for (var i = 0; i < zones.length; i++) {
		if (zones[i]) {
			if (zones[i].data("cardfront").data("card_type") == "Monster" && zones[i].data("cardfront").data("atk")) {
				//if ((zones[i].data("face_down") && zones[i].data("controller").username != username) || TweenMax.isTweening(zones[i])) {
				//if ((zones[i].data("face_down") && !isPlayer1(zones[i].data("controller").username)) || TweenMax.isTweening(zones[i])) {
				//if ((zones[i].data("face_down") && !show_cards) || isPlayer2(zones[i].data("controller").username) || TweenMax.isTweening(zones[i])) {
				if (zones[i].data("face_down") && !show_cards && !duelist || duelist && zones[i].data("face_down") && !isPlayer1(zones[i].data("controller").username) || TweenMax.isTweening(zones[i])) {
					texts[i].hide();
				}
				else {
					/*texts[i].text(zones[i].data("cardfront").data("atk"));
					if (zones[i].data("cardfront").data("monster_color") != "Link") {
						texts[i][0].innerHTML += "/" + zones[i].data("cardfront").data("def");
					}*/
					texts[i].html(getATKColor(zones[i]));
					
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

function getATKColor(card) {
	var str = "";
	if (!card.data("new_atk") || card.data("new_atk") == card.data("cardfront").data("atk")) {
		str += card.data("cardfront").data("atk");
	}
	else {
		str += '<font color="#' + (~~card.data("new_atk") > ~~card.data("cardfront").data("atk") ? "33FFFF" : "FF3300") + '">' + card.data("new_atk") + '</font>';
	}
	if (card.data("cardfront").data("monster_color") != "Link") {
		if (!card.data("new_def") || card.data("new_def") == card.data("cardfront").data("def")) {
			str += '/' + card.data("cardfront").data("def");
		}
		else {
			str += '<font color="#' + (~~card.data("new_def") > ~~card.data("cardfront").data("def") ? "33FFFF" : "FF3300") + '">/' + card.data("new_def") + '</font>';
		}
	}
	return str;
}

function updateCounters() {
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



function playCircles() {
	TweenMax.to(player1.circles.find('.circle1'), 0, {"display":"block"});
	TweenMax.to(player1.circles.find('.circle2'), 0, {"display":"block", "delay":0.5});
	TweenMax.to(player1.circles.find('.circle3'), 0, {"display":"block", "delay":1});
	TweenMax.to(player1.circles.find('.circle1, .circle2, .circle3'), 0, {"display":"none", "delay":1.5, onComplete:function(){
		playCircles();
	}});
}

function playCircles() {
	TweenMax.to(player1.circles.find('.circle1'), 0, {"display":"block"});
	TweenMax.to(player1.circles.find('.circle2'), 0, {"display":"block", "delay":0.5});
	TweenMax.to(player1.circles.find('.circle3'), 0, {"display":"block", "delay":1});
	TweenMax.to(player1.circles.find('.circle1, .circle2, .circle3'), 0, {"display":"none", "delay":1.5});
	TweenMax.to(player1.circles.find('.circle1'), 0, {"delay":2, "onComplete":function(){
		playCircles();
	}});
}

function Player() {
	var player = {};
	player.stopTyping = function(){
		player.typing_timer.reset();
		player.bubbles.hide();
		player.bubbles.data("cycle").stop();
		player.stopThinking();
	}
	player.typingE = function(){
		player.typing_timer.start();
		player.bubbles.show();
		player.bubbles.data("cycle").play();
	}
	player.stopThinking = function(){
		TweenMax.to(player.thinking, 0.3, {"scale":0.7, "alpha":0, ease:Expo.easeIn, "onComplete":function(){
			player.thinking.hide();
		}});
	}
	
	/*player.stopWaiting = function(){
		TweenMax.killTweensOf(player.circles.find('.circle1, .circle2, .circle3'));
		player.circles.find('.circle1, .circle2, .circle3').hide();
	}
	player.waitingE = function(){
		TweenMax.to(player.circles.find('.circle1'), 0, {"display":"block"});
		TweenMax.to(player.circles.find('.circle2'), 0, {"display":"block", "delay":0.5});
		TweenMax.to(player.circles.find('.circle3'), 0, {"display":"block", "delay":1});
		TweenMax.to(player.circles.find('.circle1, .circle2, .circle3'), 0, {"display":"none", "delay":1.5});
		TweenMax.to(player.circles.find('.circle1'), 0, {"delay":2, "onComplete":function(){
			player.waitingE();
		}});
	}*/
	
	
	player.username = "";
	player.main_arr = [];
	player.grave_arr = [];
	player.extra_arr = [];
	player.hand_arr = [];
	player.banished_arr = [];
	player.field_arr = [];
	player.all_cards_arr = [];
	player.temp_arr = [];
	player.handY = 0;
	player.deckX = 0;
	player.deckY = 0;
	player.graveX = 0;
	player.graveY = 0;
	player.banishedX = 0;
	player.banishedY = 0;
	player.extraX = 0;
	player.extraY = 0;
	player.fieldSpellX = 0;
	player.fieldSpellY = 0;
	player.pendulumLeftX = 0;
	player.pendulumRightX = 0;
	player.pendulumY = 0;
	player.monsterY = 0;
	player.spellY = 0;
	player.mX = 0;
	player.mY = 0;
	player.gX = 0;
	player.gY = 0;
	player.bX = 0;
	player.eX = 0;
	player.eY = 0;
	player.rot = 0;
	player.rotY = 0;
	player.defRot = 0;
	player.hand_position_arr = [];
	player.m1X = 0;
	player.m2X = 0;
	player.m3X = 0;
	player.m4X = 0;
	player.m5X = 0;
	player.s1X = 0;
	player.s2X = 0;
	player.s3X = 0;
	player.s4X = 0;
	player.s5X = 0;
	player.m1Y = 0;
	player.m2Y = 0;
	player.m3Y = 0;
	player.m4Y = 0;
	player.m5Y = 0;
	player.s1Y = 0;
	player.s2Y = 0;
	player.s3Y = 0;
	player.s4Y = 0;
	player.s5Y = 0;
	player.m1xStart = 0;
	player.m1xEnd = 0;
	player.m2xStart = 0;
	player.m2xEnd = 0;
	player.m3xStart = 0;
	player.m3xEnd = 0;
	player.m4xStart = 0;
	player.m4xEnd = 0;
	player.m5xStart = 0;
	player.m5xEnd = 0;
	player.m1;
	player.m2;
	player.m3;
	player.m4;
	player.m5;
	player.s1;
	player.s2;
	player.s3;
	player.s4;
	player.s5;
	player.fieldSpell;
	player.pendulumLeft;
	player.pendulumRight;
	player.opponent;
	player.lifepoints = 8000;
	player.m1_txt;
	player.m2_txt;
	player.m3_txt;
	player.m4_txt;
	player.m5_txt;
	player.deck_face_up = false;
	player.rating_rep_txt;
	player.pronoun = "his";
	player.token = 1;
	player.linkCard;
	player.leftLinkX = 0;
	player.leftLinkY = 0;
	player.rightLinkX = 0;
	player.rightLinkY = 0;
	player.skillCardX = 0;
	player.skillCardY = 0;
	player.link_txt;
	player.typing_timer = new Timer(5000);
	player.typing_timer.callback = player.stopTyping;
	player.bubbles;
	player.countdown;
	player.all_good;
	player.skillCard;
	player.skill = "";
	player.partner;
	player.sleeve;
	player.seconds;
	player.start;
	player.still_good;
	
	player.initPlayer1 = function(){
		player.handY = 603;
		player.deckX = 801;
		player.deckY = 531.5;
		player.graveX = 801;
		player.graveY = 338.5;
		player.banishedX = 734;
		player.banishedY = 291.5;
		player.extraX = 239;
		player.extraY = 531.5;
		player.fieldSpellX = 239;
		player.fieldSpellY = 338.5;
		player.pendulumLeftX = 254;
		player.pendulumRightX = 785;
		player.pendulumY = 431.5;
		player.monsterY = 384.5;
		player.spellY = 476.5;
		player.mX = 0.2925;
		player.mY = 0.1025;
		player.eX = -0.2925;
		player.eY = 0.1025;
		player.bX = 0.283;
		player.gX = 0.283;
		player.gY = 0.067;
		player.rot = 0;
		player.rotY = 0;
		player.defRot = -90;
		player.hand_position_arr = [485, 535, 585, 635, 685, 704];
		player.m1X = 332.7;
		player.m2X = 426.3;
		player.m3X = 519.9;
		player.m4X = 613;
		player.m5X = 705;
		player.s1X = 332.7;
		player.s2X = 426.3;
		player.s3X = 519.9;
		player.s4X = 613;
		player.s5X = 705;
		player.m1Y = 384.5;
		player.m2Y = 384.5;
		player.m3Y = 384.5;
		player.m4Y = 384.5;
		player.m5Y = 384.5;
		player.s1Y = 477.5;
		player.s2Y = 477.5;
		player.s3Y = 477.5;
		player.s4Y = 477.5;
		player.s5Y = 477.5;
		player.m1xStart = 320;
		player.m1xEnd = 347;
		player.m2xStart = 413;
		player.m2xEnd = 440;
		player.m3xStart = 506;
		player.m3xEnd = 533;
		player.m4xStart = 599;
		player.m4xEnd = 626;
		player.m5xStart = 692;
		player.m5xEnd = 719;
	};
	
	player.initPlayer2 = function(){
		player.handY = -21;
		player.deckX = 239;
		player.deckY = 52.5;
		player.graveX = 239;
		player.graveY = 244.5;
		player.banishedX = 306;
		player.banishedY = 291.5;
		player.extraX = 801;
		player.extraY = 52.5;
		player.fieldSpellX = 801;
		player.fieldSpellY = 244.5;
		player.pendulumLeftX = 785;
		player.pendulumRightX = 254;
		player.pendulumY = 151.5;
		player.monsterY = 198.5;
		player.spellY = 105.5
		player.mX = -0.2925;
		player.mY = -0.1025;
		player.eX = 0.2925;
		player.eY = -0.1025;
		player.bX = -0.283;
		player.gX = -0.283;
		player.gY = -0.067;
		player.rot = 180;
		player.rotY = 180;
		player.defRot = 90;
		player.hand_position_arr = [485, 435, 385, 335, 285, 285];
		player.m1X = 705;
		player.m2X = 613;
		player.m3X = 519.9;
		player.m4X = 426.3;
		player.m5X = 332.7;
		player.s1X = 705;
		player.s2X = 613;
		player.s3X = 519.9;
		player.s4X = 426.3;
		player.s5X = 332.7;
		player.m1Y = 199.5;
		player.m2Y = 199.5;
		player.m3Y = 199.5;
		player.m4Y = 199.5;
		player.m5Y = 199.5;
		player.s1Y = 105.5;
		player.s2Y = 105.5;
		player.s3Y = 105.5;
		player.s4Y = 105.5;
		player.s5Y = 105.5;
		player.m1xStart = 719;
		player.m1xEnd = 692;
		player.m2xStart = 626;
		player.m2xEnd = 599;
		player.m3xStart = 533;
		player.m3xEnd = 506;
		player.m4xStart = 440;
		player.m4xEnd = 413;
		player.m5xStart = 347;
		player.m5xEnd = 320;
	}
	
	player.initPlayer1Links = function(){
		player.deckY = 508;
		player.graveX = 785;
		player.graveY = 384.5;
		player.banishedX = 801;
		player.extraY = 508;
		player.fieldSpellX = 254;
		player.fieldSpellY = 384.5;
		player.pendulumLeft = player.s1;
		player.pendulumRight = player.s5;
		player.s1 = player.pendulumLeft;
		player.s5 = player.pendulumRight;
		player.pendulumLeftX = 332.7;
		player.pendulumRightX = 705;
		player.pendulumY = 477.5;
	}
	
	player.initPlayer2Links = function(){
		player.deckY = 73;
		player.graveX = 253.5;
		player.graveY = 199.5;
		player.banishedX = 239;
		player.extraY = 73;
		player.fieldSpellX = 785;
		player.fieldSpellY = 199.5;
		player.pendulumLeft = player.s1;
		player.pendulumRight = player.s5;
		player.s1 = player.pendulumLeft;
		player.s5 = player.pendulumRight;
		player.pendulumLeftX = 705;
		player.pendulumRightX = 332.7;
		player.pendulumY = 105.5;
	}
	
	player.initPlayer1Speed = function(){
		player.m1X = 370;
		player.m2X = 520;
		player.m3X = 670;
		player.s1X = 370;
		player.s2X = 520;
		player.s3X = 670;
		player.m1xStart = 357;
		player.m1xEnd = 384;
		player.m2xStart = 507;
		player.m2xEnd = 534;
		player.m3xStart = 657;
		player.m3xEnd = 684;
		player.deckX = 801;
		player.deckY = 508;
		player.extraX = 239;
		player.extraY = 508;
		player.graveX = 801;
		player.graveY = 384.5;
		player.fieldSpellX = 239;
		player.fieldSpellY = 384.5;
		player.skillCardX = 734;
		player.skillCardY = 291.5;
		player.banishedX = 801;
		player.banishedY = 291.5;
	}
	
	player.initPlayer2Speed = function(){
		player.m1X = 670;
		player.m2X = 520;
		player.m3X = 370;
		player.s1X = 670;
		player.s2X = 520;
		player.s3X = 370;
		player.m1xStart = 683;
		player.m1xEnd = 656;
		player.m2xStart = 533;
		player.m2xEnd = 506;
		player.m3xStart = 384;
		player.m3xEnd = 357;
		player.deckX = 239;
		player.deckY = 73;
		player.extraX = 801;
		player.extraY = 73;
		player.graveX = 239;
		player.graveY = 199.5;
		player.fieldSpellX = 801;
		player.fieldSpellY = 199.5;
		player.skillCardX = 306;
		player.skillCardY = 291.5;
		player.banishedX = 239;
		player.banishedY = 291.5;
	}
	
	player.resetDeck = function(){
		player.main_arr = [];
		player.grave_arr = [];
		player.banished_arr = [];
		player.extra_arr = [];
		player.hand_arr = [];
		player.main_arr = [];
		player.all_cards_arr = [];
		player.m1 = null;
		player.m2 = null;
		player.m3 = null;
		player.m4 = null;
		player.m5 = null;
		player.s1 = null;
		player.s2 = null;
		player.s3 = null;
		player.s4 = null;
		player.s5 = null;
		player.fieldSpell = null;
		player.pendulumLeft = null;
		player.pendulumRight = null;
		player.skillCard = null;
		player.lifepoints = 8000;
		player.deck_face_up = false;
		player.still_good = false;
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
	$('.red_target').hide();
	$('.blue_target').hide();
	$('.green_target').hide();
	$('#sword').hide();
	$('#overlay').hide();
	$('#view').hide();
	//view_mc.viewing_sp.addEventListener(KeyboardEvent.KEY_DOWN, moveDuelFocus);
	$('#end_turn').hide();
	$('#cig2_txt').hide();
	$('#cib2_txt').hide();
	$('#cig1_txt').hide();
	$('#cib1_txt').hide();
	player1.m1_txt = $('#hm1_txt');
	player1.m2_txt = $('#hm2_txt');
	player1.m3_txt = $('#hm3_txt');
	player2.m1_txt = $('#om1_txt');
	player2.m2_txt = $('#om2_txt');
	player2.m3_txt = $('#om3_txt');
	if (!speed && !rush) {
		player1.m4_txt = $('#hm4_txt');
		player1.m5_txt = $('#hm5_txt');
		player2.m4_txt = $('#om4_txt');
		player2.m5_txt = $('#om5_txt');
	}
	if (links) {
		player1.link_txt = $('#hl_txt');
		player2.link_txt = $('#ol_txt');
		linkLeft = null;
		linkRight = null;
	}
	$('#start_turn').hide();
	$('#duel #field_content').css("opacity", 0);
	changeDarks();
	/*$('#cid1_txt').show();
	$('#cid2_txt').show();
	$('#cie1_txt').show();
	$('#cie2_txt').show();
	$('#cid1_txt').text(Player1().main_arr.length);
	$('#cid2_txt').text(Player2().main_arr.length);
	$('#cie1_txt').text(Player1().extra_arr.length);
	$('#cie2_txt').text(Player2().extra_arr.length);*/
	$('#field').prepend($('#field_content'));
	if (unknown_totals) {
		$('#cid1_txt').hide();
		$('#cie1_txt').hide();
		$('#cib1_txt').hide();
		$('#cig1_txt').hide();
		$('#cid2_txt').hide();
		$('#cie2_txt').hide();
		$('#cib2_txt').hide();
		$('#cig2_txt').hide();
	}
	if (tag_duel) {
		setPartner(player3, player1);
		setPartner(player4, player2);
	}
	hidePhases();
	//$('.field_stats').text("");
	//$('.field_stats').hide();
	$('#field_stats > span').text("");
	$('#field_stats > span').hide();
	$('#view').css("left", 219);
	$('#view').css("top", 58);
}

function initWatcherDuelStart() {
	console.log('initWatcherDuelStart');
	$('#good_btn').hide();
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
	$('#turn').hide();
	//$('#view .expand_btn').hide();
}

function pauseGame(player, data) {
	if (player) {
		data.viewing = "Paused Game";
		showViewing(data);
		addLine(escapeHTML(data.username) + " paused the game");
	}
	else {
		addLine("A judge paused the game");
	}
	paused = true;
	if (paused) {
		$('#pause_btn').val("Resume Game");
	}
	else {
		$('#pause_btn').val("Pause Game");
	}
	if (username == data.username && duelist) {
		viewing = "Paused Game";
	}
	//else if (!admin) {
	//	$('#pause_btn').hide(); // ??
	//}
	playSound(PartnerFound);
}

function resumeGame(data) {
	addLine("The game can now resume");
	paused = false;
	$('#pause_btn').val("Pause Game");
	if (viewing == "Paused Game") {
		viewing = "";
	}
	if (data) {
		stopViewing(data);
	}
	playSound(PartnerFound);
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
		for (var j = 0; j < player.extra_arr.length; j++) {
			if (player.extra_arr[j].data("id") == player.all_cards_arr[i].data("id")) {
				if (!player.extra_arr[j].data("cardfront").data("initialized") || isExtraDeckCard(player.extra_arr[j])) {
					player.all_cards_arr[i].data("face_down", true);
					player.all_cards_arr[i].data("face_up", false);
					continue outerloop;
				}
			}
		}
		for (j = 0; j < player.main_arr.length; j++) {
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
				console.log("problem finding " + player.all_cards_arr[i].data("id"));
				continue;
			}
			updateController(player, card);
		}
		if (card.data("cardfront").data("monster_color") == "Token" || card.data("cardfront").data("card_type") == "Skill") {
			player.all_cards_arr.splice(i, 1);
			card.remove();
			card = null;
			i--;
			continue;
		}
		var xPosition = card.data("owner").deckX;
		var yPosition = card.data("owner").deckY;
		if (isExtraDeckCard(card)) {
			card.data("face_down", true);
			xPosition = card.data("owner").extraX;
			yPosition = card.data("owner").extraY;
			player.extra_arr.push(card);
		}
		else {
			player.main_arr.push(card);
		}
		total++;
		$('#field').append(card);
		TweenMax.killTweensOf(card);
		TweenMax.to(card, easeSeconds, {left:xPosition, top:yPosition, scale:0.1485, rotation:card.data("owner").rot, rotationY:180 + ABOUT_ZERO, delay:total * 0.25, ease:Linear.easeNone, onComplete:function(){
			times++;
			if (total == times) {
				resetting = false;
				shiftExtra(player);
				shuffleDeck(player, data);
			}
		}});
	}
}

function initSleeves() {
	loadSleeves(player1);
	loadSleeves(player2);
	if (tag_duel) {
		loadSleeves(player3);
		loadSleeves(player4);
	}
}

function initPlayers(data) {
	console.log('initPlayers');
	$('#avatar1 .rating_txt').text(data.player1.rating + "/" + data.player1.experience);
	$('#avatar1 .image').attr("src", getAvatarStart(data.player1.pic));
	$('#avatar2 .rating_txt').text(data.player2.rating + "/" + data.player2.experience);
	if (data.player2.pic) {
		$('#avatar2 .image').attr("src", getAvatarStart(data.player2.pic));
	}
	else {
		$('#avatar2 .image').attr("src", IMAGES_START + "black.jpg");
	}
	if (duelist) {
		selectedToken = data.player1.token;
	}
	player1.token = data.player1.token;
	if (player1.token == 0) {
		player1.token = 1;
	}
	player2.token = data.player2.token;
	if (player2.token == 0) {
		player2.token = 1;
	}
	player1.sleeve = data.player1.sleeve;
	player2.sleeve = data.player2.sleeve;
	if (tag_duel) {
		$('#avatar3 .rating_txt').text(data.player3.rating + "/" + data.player3.experience);
		$('#avatar3 .image').attr("src", getAvatarStart(data.player3.pic));

		$('#avatar4 .rating_txt').text(data.player4.rating + "/" + data.player4.experience);
		$('#avatar4 .image').attr("src", getAvatarStart(data.player4.pic));
		
		expandAvatar($('#avatar1 .username_txt'), data.player1.username, data.player3.username);
		expandAvatar($('#avatar2 .username_txt'), data.player2.username, data.player4.username);
		expandAvatar($('#avatar3 .username_txt'), data.player3.username, data.player1.username);
		expandAvatar($('#avatar4 .username_txt'), data.player4.username, data.player2.username);
		
		player3.token = data.player3.token;
		if (player3.token == 0) {
			player3.token = 1;
		}
		player4.token = data.player4.token;
		if (player4.token == 0) {
			player4.token = 1;
		}
		player3.sleeve = data.player3.sleeve;
		player4.sleeve = data.player4.sleeve;
		if (!always_show_nsfw) {
			if (data.player3.nsfw) {
				$('#avatar3 .nsfw').css("opacity", 1);
				$('#avatar3 .nsfw').show();
				$('#avatar3 .nsfw_btn').show();
			}
			if (data.player4.nsfw) {
				$('#avatar4 .nsfw').css("opacity", 1);
				$('#avatar4 .nsfw').show();
				$('#avatar4 .nsfw_btn').show();
			}
		}
	}
	else {
		expandAvatar($('#avatar1 .username_txt'), data.player1.username);
		expandAvatar($('#avatar2 .username_txt'), data.player2.username);
	}
	if (!always_show_nsfw) {
		if (data.player1.nsfw) {
			$('#avatar1 .nsfw').css("opacity", 1);
			$('#avatar1 .nsfw').show();
			$('#avatar1 .nsfw_btn').show();
		}
		if (data.player2.nsfw) {
			$('#avatar2 .nsfw').css("opacity", 1);
			$('#avatar2 .nsfw').show();
			$('#avatar2 .nsfw_btn').show();
		}
	}
	stillGood(Player1(), true);
	stillGood(Player2(), true);
	if (streaming) {
		$('#avatar1 .username_txt').text(censor($('#avatar1 .username_txt').text()));
		$('#avatar2 .username_txt').text(censor($('#avatar2 .username_txt').text()));
		$('#avatar3 .username_txt').text(censor($('#avatar3 .username_txt').text()));
		$('#avatar4 .username_txt').text(censor($('#avatar4 .username_txt').text()));
	}
}

function expandAvatar(username_txt, username1, username2) {
	var display = username_txt.parent()[0].style.display;
	username_txt.text(username1);
	username_txt.css("left", username2 ? 3 : 7);
	username_txt.css("width", 142);
	if (username2) {
		username_txt.html(escapeHTML(username1) + '<br><font style="font-size: 12px;">& ' + escapeHTML(username2) + '</font>');
		username_txt.css("white-space", "nowrap");
		
		username_txt.parent().show();
		//setTimeout(function(){
			username_txt.css("width", username_txt[0].scrollWidth);
			username_txt.css("transform", "scaleX(1)");
			if (username_txt[0].scrollWidth > 142) {
				username_txt.css("transform", "scaleX(" + (142 / username_txt[0].scrollWidth) + ")");
				username_txt.css("transform-origin", "top left");
			}
			username_txt.parent()[0].style.display = display;
			finish();
		//}, 5);
		
		return;
	}
	setText(username_txt);
	finish();
	
	function finish() {
		TweenMax.to(username_txt, 0, {scaleX:getScale(username_txt[0]), rotation:-90});
	}
}

function shiftPlayersE(moving) {
	if (!tag_duel) {
		return;
	}
	if (turnCount < 2) {
		moving = false;
	}
	if (moving) {
		moveDecks(turn_player.partner, turn_player);
	}
	else {
		removeDeck(turn_player.partner);
		removeExtra(turn_player.partner);
		removeHand(turn_player.partner);
		shiftDeck(turn_player);
		shiftExtra(turn_player);
		initHand(turn_player);
		shiftPlayer(turn_player);
	}
}

function shiftPlayer(player) {
	console.log("shiftPlayer");
	console.log("turn_player = " + turn_player.username);
	console.log("turn_player.opponent = " + turn_player.opponent.username);
	switch(player) {
		case player1:
			if (~~$('#avatar1 .nsfw').css("opacity") == 1) {
				$('#avatar1 .nsfw_btn').show();
				$('#avatar1 .nsfw').show();
			}
			else {
				$('#avatar1 .nsfw_btn').hide();
				$('#avatar1 .nsfw').hide();
			}
			$('#avatar1').show();
			$('#avatar3').hide();
			break;
		case player2:
			if (~~$('#avatar2 .nsfw').css("opacity") == 1) {
				$('#avatar2 .nsfw_btn').show();
				$('#avatar2 .nsfw').show();
			}
			else {
				$('#avatar2 .nsfw_btn').hide();
				$('#avatar2 .nsfw').hide();
			}
			$('#avatar2').show();
			$('#avatar4').hide();
			break;
		case player3:
			if (~~$('#avatar3 .nsfw').css("opacity") == 1) {
				$('#avatar3 .nsfw_btn').show();
				$('#avatar3 .nsfw').show();
			}
			else {
				$('#avatar3 .nsfw_btn').hide();
				$('#avatar3 .nsfw').hide();
			}
			$('#avatar3').show();
			$('#avatar1').hide();
			break;
		case player4:
			if (~~$('#avatar4 .nsfw').css("opacity") == 1) {
				$('#avatar4 .nsfw_btn').show();
				$('#avatar4 .nsfw').show();
			}
			else {
				$('#avatar4 .nsfw_btn').hide();
				$('#avatar4 .nsfw').hide();
			}
			$('#avatar4').show();
			$('#avatar2').hide();
			break;
	}
}

function getGameLossSound() {
	console.log('getGameLossSound');
	var num = Math.ceil(Math.random() * 14);
	gameLossSound = new Audio('sounds/lose' + num + '.mp3');
	return gameLossSound;
}

function getGameWinSound() {
	console.log('getGameWinSound');
	var num = Math.ceil(Math.random() * 14);
	gameWinSound = new Audio('sounds/win' + num + '.mp3');
	return gameWinSound;
}

function recycleCards() {
	for (var i = 0; i < player1.all_cards_arr.length; i++) {
		addRecycledCard(player1.all_cards_arr[i]);
	}
	for (i = 0; i < player2.all_cards_arr.length; i++) {
		addRecycledCard(player2.all_cards_arr[i]);
	}
}

function duelCardDownE(e) {
	$('html').contextmenu(function(){
		return false;
	});
	if ($(this).parents('#duelmessage:first').length > 0) {
		return;
	}
	removeCardMenu();
	showMenu($(this), [{label:"Why don't I have more options?",data:"Trace menu"}]);
	setTimeout(function(){
		$('html').off("contextmenu");
	}, 5);
}

function newDuelCard(player) {
	var card = getRecycledCard();
	if (!card) {
		card = new Card();
	}
	if (automatic) {
		card.contextmenu(duelCardDownE);
	}
	card.off("mouseenter click");
	card.on("mouseenter click", previewE);
	if (duelist) {
		card.find('.content:first').mouseover(cardMenuE);
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
	card.data("controller", player);
	card.data("owner", player);
	TweenMax.to(card, 0, {rotationY:180 + ABOUT_ZERO, scale:0.1485});
	return card;
}

function getRecycledCard() {
	if (recycled_cards_arr.length > 0) {
		var card = recycled_cards_arr.splice(0, 1)[0];
		//card.data("cardfront").reset(); // error
		if (card.data("cardfront")) {
			card.data("cardfront").reset();
				card.data("cardfront")[0].style.display = "none"; // added 10/16
		}
		//if (card.data("cardback")) {
		//	card.data("cardback")[0].style.display = "block"; // i noticed a set s/t whose cardfront was showing with this code enabled
		//}
		card.reset();
		console.log('recycled card');
		return card;
	}
	return null;
}

function addRecycledCard(card) {
	/*log('addRecycledCard');
	if (!card) {
		log('ignoring');
		return;
	}
	log(card.data("id"));*/

	card.removeSleeve();
	card.css("cursor", "auto");
	card.find('.content:first').off("mouseover", cardMenuE);
	card.find('.content:first').off("mouseleave", menuOutE);
	card.off("click", targetCard);
	//card.rotationY = 180;
	card.find('.cardfront').hide();
	card.find('.skillback').remove();
	card.find('.sleeve').remove();
	card.detach();
	//if (card.isSkill || card.data("cardfront").card_type == 'Skill' || card.data("cardfront").data("name") == 'Token' || card.data("face_down")) {
	//	card = null;
	//	return;
	//}
	if (recycled_cards_arr.indexOf(card) >= 0) {
		return; // in some past replays where Siding unfortunately happens twice, this could happen and cause problems
	}
	recycled_cards_arr.push(card);
}

//TweenMax.to(Player1().main_arr[0], 1, {rotationY:0});

function showRating(e) {
	var mc = $(this);
	if (mc[0] == $('#pause_btn, #next_game_btn')[0]) {
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
	if ($('#pause_btn, #next_game_btn').length > 0) {
		if (replay || admin || adjudicator || duelist && ((!viewing && !paused) || viewing == "Paused Game") && currentLabel.indexOf("duel_start") == 0) {
			$('#pause_btn, #next_game_btn').show();
			TweenMax.to($('#pause_btn, #next_game_btn').data("proxy"), 0.25, {alpha:1});
		}
	}
}

function hideRating() {
	var mc = $(this);
	if (mc[0] == $('#pause_btn, #next_game_btn')[0]) {
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
	if ($('#pause_btn, #next_game_btn').length > 0 && !admin && !adjudicator) {
		TweenMax.to($('#pause_btn, #next_game_btn').data("proxy"), 0.25, {alpha:0, onComplete:function(){
			$('#pause_btn, #next_game_btn').hide();
		}});
	}
}
		
function resetLifepoints() {
	player1.lifepoints = lifepointMax;
	player2.lifepoints = lifepointMax;
	if (tag_duel) {
		player3.lifepoints = lifepointMax;
		player4.lifepoints = lifepointMax;
	}
	$('.lifepoints .black_bar').css("width", 0);
	$('.lifepoints .life_txt').text(lifepointMax);
}

function duelChatPrint(data) {
	saveDuelVSP();
	var color = "#0000FF";
	if (data.color) {
		color = "#" + data.color;
	}
	if (player1.username == data.username || player3 && player3.username == data.username) {
		if (color == "#0000FF") {
			color = "#FF0000";
		}
	}
	if (!data.html) {
		data.message = escapeHTMLWithLinks(data.message);
	}
	if (conceal) {
		switch(data.username) {
			case player1.username:
				data.username = "Red";
				break;
			case player2.username:
				data.username = "Blue";
				break;
			case player3.username:
			case player4.username:
				data.username = "Partner";
				break;
		}
		switch(data.color) {
			case "009900":
			case "707070":
			case "CC9900":
			case "660099":
				data.username = "Admin";
				break;
		}
	}
	else if (streaming) {
		data.username = censor(data.username);
		data.message = censor(data.message);
	}
	
	$('#duel .cout_txt').append('<b><font color="' + color + '">' + escapeHTML(data.username) + ": </font></b><font>" + data.message + '</font><br>');
	restoreDuelVSP();
}

function addLine(str) {
	if (conceal) {
		return;
	}
	saveDuelVSP();
	$('#duel .cout_txt').append('<b>' + escapeHTML(str) + '</b><br>');
	restoreDuelVSP();
}

function saveDuelVSP(e) {
	duel_vsp = $('#duel .cout_txt').scrollTop();
	var maxVSP = $('#duel .cout_txt').scrollMax();
	if (duel_vsp >= maxVSP - 80) {
		//duel_vsp = Infinity; // Infinity is treated as 0 on mobile safari
		duel_vsp += 9999;
	}
}

function restoreDuelVSP() {
	if (duel_vsp >= $('#duel .cout_txt').scrollMax()) {
		var vsp = duel_vsp + 9999;
		setTimeout(function(){
			$('#duel .cout_txt').scrollTop(vsp); // delaying this helps make Pot of Extravagance's lines restore to scrollMax
		}, 50);
	}
	$('#duel .cout_txt').scrollTop(duel_vsp);
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

function banishedOver() {
	if (player1.banished_arr.length > 0) {
		if (player1.banished_arr[0].data("face_down") && findCard(["Pot of Extravagance"])) {
			return;
		}
		previewCard(player1.banished_arr[0]);
		$('#banished_hidden').css("cursor", "pointer");
	}
	else {
		$('#banished_hidden').css("cursor", "auto");
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

function oppBanishedOver() {
	if (player2.banished_arr.length > 0) {
		previewCard(player2.banished_arr[0]);
		$('#opp_banished_hidden').css("cursor", "pointer");
	}
	else {
		$('#opp_banished_hidden').css("cursor", "auto");
	}
}

function extraOver() {
	if (Player1().extra_arr.length > 0) {
		if (!Player1().extra_arr[0].data("face_down") && Player1().extra_arr[0].data("cardfront").data("pendulum")) {
			previewCard(Player1().extra_arr[0]);
		}
		if (!Duelist()) {
			$('#extra_hidden').css("cursor", "pointer");
		}
		else {
			$('#extra_hidden').css("cursor", "auto");
		}
	}
	else {
		$('#extra_hidden').css("cursor", "auto");
	}
}

function oppExtraOver() {
	if (Player2().extra_arr.length > 0) {
		if (!Player2().extra_arr[0].data("face_down")) {
			previewCard(Player2().extra_arr[0]);
		}
		$('#opp_extra_hidden').css("cursor", "pointer");
	}
	else {
		$('#opp_extra_hidden').css("cursor", "auto");
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
	playSound(CounterSound);
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

function viewED() {
	if (viewing != "") {
		return;
	}
	if (Duelist()) {
		return;
	}
	if (Player1().extra_arr.length > 0) {
		viewingE("Host's Public Extra Deck");
	}
}

function viewED2() {
	if (viewing != "") {
		return;
	}
	if (Player2().extra_arr.length > 0) {
		if (Duelist()) {
			Send({"action":"Duel", "play":"View ED 2"});
		}
		viewingE("Opponent's Public Extra Deck");
	}
}

function viewGY() {
	if (viewing != "") {
		return;
	}
	if (findCard(["Question"])) {
		return;
	}
	if (player1.grave_arr.length > 0) {
		if (Duelist()) {
			Send({"action":"Duel", "play":"View GY"});
		}
		viewingE("Graveyard");
	}
	//endAction(); // so, for some reason if you click view grave while cards are milling into it, the queue stops
}

function viewBanished() {
	if (viewing != "") {
		return;
	}
	if (player1.banished_arr.length > 0) {
		if (Duelist()) {
			Send({"action":"Duel", "play":"View Banished"});
		}
		viewingE("Banished");
	}
	endAction();
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

function viewBanished2() {
	if (viewing != "") {
		return;
	}
	if (player2.banished_arr.length > 0) {
		if (Duelist()) {
			Send({"action":"Duel", "play":"View Banished 2"});
		}
		viewingE("Opponent's Banished");
	}
	endAction();
}

function viewingE(str, data) {
	if (!str || str == "Paused Game") {
		return;
	}
	var arr = [];
	switch (str) {
		case "Deck":
		case "Deck (Picking Card)":
		case "Deck (Picking 2 Cards)":
		case "Deck (Picking 3 Cards)":
		case "Deck (Picking 4 Cards)":
			arr = Player1().main_arr;
			break;
		case "Graveyard":
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
		case "Host's Public Extra Deck":
			arr = Player1().extra_arr;
			break;
		case "Opponent's Banished":
			arr = player1.opponent.banished_arr;
			break;
		case "Opponent's Graveyard":
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
		case "Xyz Materials":
			arr = viewing_card_with_materials.data("xyz_arr");
			break;
	}
	viewing = str;
	$('#view .title_txt').text("Viewing " + str);
	if (Duelist()) {
		$('#status1 .status_txt').text("Viewing " + str);
	}
	viewCards(arr, data);
}

function showViewing(data) {
	var str = "Viewing " + data.viewing;
	if (data.viewing == "Paused Game") {
		str = "Paused Game";
	}
	//if (duelist && data.username == Player1().username && Player1() != player1 || !duelist && data.username == Player1().username) { // why does this test if Player1() != player1?
	if (duelist && data.username == Player1().username || !duelist && data.username == Player1().username) { // why does this test if Player1() != player1?
		$('#status1 .status_txt').text(str);
	}
	else if (data.username == Player2().username) {
		$('#status2 .status_txt').text(str);
	}
	if (data.deck) {
		data.deck = undefined;
	}
}

function permissionEvent(data) {
	if (duelist && data.username != username && player1 == Player1()) {
		getConfirmation(data.title, data.message, function(){
			permissionCallback(data.callback);
		}, permissionDeniedE);
	}
	if (data.username != Player1().username) {
		//status1_mc.aura_mc.visible = true;
		$('#status1 .status_txt').text("Waiting for permission");
	}
	else if (data.username != Player2().username) {
		$('#status2 .status_txt').text("Waiting for permission");
		//status2_mc.aura_mc.visible = true;
	}
}

function shiftDecks() {
	shiftDeck(Player1());
	shiftDeck(Player2());
	shiftGrave(Player1());
	shiftGrave(Player2());
	shiftBanished(Player1());
	shiftBanished(Player2());
	shiftExtra(Player1());
	shiftExtra(Player2());
}

function moveDecks(player, partner) {
	var Y = 200;
	if (player == player2 || player == player4) {
		Y = -200;
	}
	TweenMax.to(player.main_arr, 0.35, {top:player.deckY + Y, ease:Circ.easeInOut});
	TweenMax.to(player.extra_arr, 0.35, {top:player.extraY + Y, ease:Circ.easeInOut});
	TweenMax.to(player.hand_arr, 0.35, {top:player.handY + Y, ease:Circ.easeInOut, onComplete:function(){
		shiftPlayer(turn_player);
		removeDeck(player);
		removeExtra(player);
		removeHand(player);
		shiftDeck(partner);
		shiftExtra(partner);
		initHand(partner);
		TweenMax.fromTo(partner.main_arr, 0.35, {top:partner.deckY + Y}, {top:partner.deckY, ease:Circ.easeInOut});
		TweenMax.fromTo(partner.extra_arr, 0.35, {top:partner.extraY + Y}, {top:partner.extraY, ease:Circ.easeInOut});
		TweenMax.fromTo(partner.hand_arr, 0.35, {top:partner.handY + Y}, {top:partner.handY, ease:Circ.easeInOut, onComplete:function(){
			shiftDecks();
			enterDP();
		}});
	}});
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
		card = removeFromBanished(player, data);
	}
	if (!card) {
		card = removeFromExtra(player, data);
	}
	if (!card) {
		card = removeFromField(player, data);
	}
	if (!card) {
		card = removeXyzMaterial(player, data, false);
	}
	return card;
}

function removeFromHand(player, data) {
	for (var i = 0; i < player.hand_arr.length; i++) {
		if (player.hand_arr[i].data("id") == data.id) {
			var card = player.hand_arr.splice(i, 1)[0];
			card.data("face_up", false);
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
			console.log('found');
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

function removeFromBanished(player, data, reset_face_down) {
	if (reset_face_down !== false) {
		reset_face_down = true;
	}
	for (var i = 0; i < player.banished_arr.length; i++) {
		if (player.banished_arr[i].data("id") == data.id) {
			var card = player.banished_arr.splice(i, 1)[0];
			card.detach();
			//card.data("cardfront").autoLoad();
			if (reset_face_down) {
				card.data("face_down", false);
			}
			shiftBanished(card.data("owner"));
			updateViewing();
			return card;
		}
	}
	return null;
}

function removeFromExtra(player, data) {
	for (var i = 0; i < player.extra_arr.length; i++) {
		if (player.extra_arr[i].data("id") == data.id) {
			var card = player.extra_arr.splice(i, 1)[0];
			card.detach();
			card.data("cardfront").show();
			//card.data("cardfront").autoLoad();
			addExtraChildren(card.data("owner"));
			$('#cie1_txt').text(Player1().extra_arr.length);
			$('#cie2_txt').text(Player2().extra_arr.length);		
			updateViewing();
			return card;
		}
	}
	if (unknown_totals) {
		for (i = 0; i < player.extra_arr.length; i++) {
			player.extra_arr[i].data("id", player.extra_arr[i].data("id") - 1);
			return removeFromExtra(player, data);
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
			if (tag_duel) {
				player.partner.m3 = null;
			}
			player.m3_txt.text("");
		}
	}
	if (player.m4) {
		if (player.m4.data("id") == data.id) {
			card = player.m4;
			player.m4 = null;
			if (tag_duel) {
				player.partner.m4 = null;
			}
			player.m4_txt.text("");
		}
	}
	if (player.m2) {
		if (player.m2.data("id") == data.id) {
			card = player.m2;
			player.m2 = null;
			if (tag_duel) {
				player.partner.m2 = null;
			}
			player.m2_txt.text("");
		}
	}
	if (player.m5) {
		if (player.m5.data("id") == data.id) {
			card = player.m5;
			player.m5 = null;
			if (tag_duel) {
				player.partner.m5 = null;
			}
			player.m5_txt.text("");
		}
	}
	if (player.m1) {
		if (player.m1.data("id") == data.id) {
			card = player.m1;
			player.m1 = null;
			if (tag_duel) {
				player.partner.m1 = null;
			}
			player.m1_txt.text("");
		}
	}
	if (player.s3) {
		if (player.s3.data("id") == data.id) {
			card = player.s3;
			player.s3 = null;
			if (tag_duel) {
				player.partner.s3 = null;
			}
		}
	}
	if (player.s4) {
		if (player.s4.data("id") == data.id) {
			card = player.s4;
			player.s4 = null;
			if (tag_duel) {
				player.partner.s4 = null;
			}
		}
	}
	if (player.s2) {
		if (player.s2.data("id") == data.id) {
			card = player.s2;
			player.s2 = null;
			if (tag_duel) {
				player.partner.s2 = null;
			}
		}
	}
	if (player.s5) {
		if (player.s5.data("id") == data.id) {
			card = player.s5;
			player.s5 = null;
			if (tag_duel) {
				player.partner.s5 = null;
			}
		}
	}
	if (player.s1) {
		if (player.s1.data("id") == data.id) {
			card = player.s1;
			player.s1 = null;
			if (tag_duel) {
				player.partner.s1 = null;
			}
		}
	}
	if (player.fieldSpell) {
		if (player.fieldSpell.data("id") == data.id) {
			card = player.fieldSpell;
			player.fieldSpell = null;
			if (tag_duel) {
				player.partner.fieldSpell = null;
			}
			removeFieldSpellPic(player);
		}
	}
	if (player.pendulumLeft) {
		if (player.pendulumLeft.data("id") == data.id) {
			card = player.pendulumLeft;
			player.pendulumLeft = null;
			if (tag_duel) {
				player.partner.pendulumLeft = null;
			}
		}
	}
	if (player.pendulumRight) {
		if (player.pendulumRight.data("id") == data.id) {
			card = player.pendulumRight;
			player.pendulumRight = null;
			if (tag_duel) {
				player.partner.pendulumRight = null;
			}
		}
	}
	if (linkLeft) {
		if (linkLeft.data("id") == data.id) {
			card = linkLeft;
			linkLeft = null;
			$('#ol_txt').text("");
		}
	}
	if (linkRight) {
		if (linkRight.data("id") == data.id) {
			card = linkRight;
			linkRight = null;
			$('#hl_txt').text("");
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
		card.data("inATK", false);
		card.data("inDEF", false);
		card.data("face_down", false);
		card.data("counters", 0);
		card.data("new_atk", null);
		card.data("new_def", null);
		detachAllMaterials(card);
	}
	updateCounters();
	updateViewing();
	if (card.data("cardfront").data("name") == "Question") {
		unquestionE(card);
	}
	return card;
}

function restoreHandCards() {
	for (var i = 0; i < Player1().hand_arr.length; i++) {
		//if (!TweenMax.isTweening(Player1().hand_arr)) {
		if (!TweenMax.isTweening(Player1().hand_arr)) {
			if (Player1().hand_arr[i].data("face_up") && duelist) {
				Player1().hand_arr[i].css("top", Player1().handY - 30);
			}
			else {
				Player1().hand_arr[i].css("top", Player1().handY);
			}
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
		case "M-4":
			return [player.m4X, player.m4Y];
		case "M-5":
			return [player.m5X, player.m5Y];
		case "M2-1":
			return [player.opponent.m1X, player.opponent.m1Y];
		case "M2-2":
			return [player.opponent.m2X, player.opponent.m2Y];
		case "M2-3":
			return [player.opponent.m3X, player.opponent.m3Y];
		case "M2-4":
			return [player.opponent.m4X, player.opponent.m4Y];
		case "M2-5":
			return [player.opponent.m5X, player.opponent.m5Y];
		case "S-1":
			return [player.s1X, player.s1Y];
		case "S-2":
			return [player.s2X, player.s2Y];
		case "S-3":
			return [player.s3X, player.s3Y];
		case "S-4":
			return [player.s4X, player.s4Y];
		case "S-5":
			return [player.s5X, player.s5Y];
		case "F-1":
			return [player.fieldSpellX, player.fieldSpellY];
		case "F-2":
			return [player.opponent.fieldSpellX, player.opponent.fieldSpellY];
		case "Left Extra Monster Zone":
			if (player == player1 || player == player3) {
				return [linkLeftX, linkY];
			}
			else {
				return [linkRightX, linkY];
			}
		case "Right Extra Monster Zone":
			if (player == player1 || player == player3) {
				return [linkRightX, linkY];
			}
			else {
				return [linkLeftX, linkY];
			}
	}
	return null;
}

function getNextMonsterZone(player, card, data) {
	var points = [];
	if (data.zone) {
		switch (data.zone) {
			case "M-1":
				player.m1 = card;
				if (tag_duel) {
					player.partner.m1 = card;
				}
				break;
			case "M-2":
				player.m2 = card;
				if (tag_duel) {
					player.partner.m2 = card;
				}
				break;
			case "M-3":
				player.m3 = card;
				if (tag_duel) {
					player.partner.m3 = card;
				}
				break;
			case "M-4":
				player.m4 = card;
				if (tag_duel) {
					player.partner.m4 = card;
				}
				break;
			case "M-5":
				player.m5 = card;
				if (tag_duel) {
					player.partner.m5 = card;
				}
				break;
				
				
				
				
				
			case "M2-1":
				player.opponent.m1 = card;
				if (tag_duel) {
					player.opponent.partner.m1 = card;
				}
				break;
			case "M2-2":
				player.opponent.m2 = card;
				if (tag_duel) {
					player.opponent.partner.m2 = card;
				}
				break;
			case "M2-3":
				player.opponent.m3 = card;
				if (tag_duel) {
					player.opponent.partner.m3 = card;
				}
				break;
			case "M2-4":
				player.opponent.m4 = card;
				if (tag_duel) {
					player.opponent.partner.m4 = card;
				}
				break;
			case "M2-5":
				player.opponent.m5 = card;
				if (tag_duel) {
					player.opponent.partner.m5 = card;
				}
				break;
				
				
				
				
				
			case "Left Extra Monster Zone":
				if (player == player1 || player == player3) {
					linkLeft = card;
				}
				else {
					linkRight = card;
				}
				break;
			case "Right Extra Monster Zone":
				if (player == player1 || player == player3) {
					linkRight = card;
				}
				else {
					linkLeft = card;
				}
				break;
		}
		points = getPointsByZone(player, data.zone);
		if (data.zone.indexOf("2-") >= 0) {
			updateController(player.opponent, card);
		}
		else {
			updateController(player, card);
		}
		return points;
	}
	if (duel_links || speed || rush) {
		if (player.m2 == null) {
			player.m2 = card;
			if (tag_duel) {
				player.partner.m2 = card;
			}
			points = [player.m2X, player.m2Y];
		}
		else if (player.m3 == null) {
			player.m3 = card;
			if (tag_duel) {
				player.partner.m3 = card;
			}
			points = [player.m3X, player.m3Y];
		}
		else if (player.m1 == null) {
			player.m1 = card;
			if (tag_duel) {
				player.partner.m1 = card;
			}
			points = [player.m1X, player.m1Y];
		}
		else {
			endAction();
			return null;
		}
	}
	else {
		if (player.m3 == null) {
			player.m3 = card;
			if (tag_duel) {
				player.partner.m3 = card;
			}
			points = [player.m3X, player.m3Y];
		}
		else if (player.m4 == null) {
			player.m4 = card;
			if (tag_duel) {
				player.partner.m4 = card;
			}
			points = [player.m4X, player.m4Y];
		}
		else if (player.m2 == null) {
			player.m2 = card;
			if (tag_duel) {
				player.partner.m2 = card;
			}
			points = [player.m2X, player.m2Y];
		}
		else if (player.m5 == null) {
			player.m5 = card;
			if (tag_duel) {
				player.partner.m5 = card;
			}
			points = [player.m5X, player.m5Y];
		}
		else if (player.m1 == null) {
			player.m1 = card;
			if (tag_duel) {
				player.partner.m1 = card;
			}
			points = [player.m1X, player.m1Y];
		}
		else {
			endAction();
			return null;
		}
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
				if (tag_duel) {
					player.partner.s1 = card;
				}
				break;
			case "S-2":
				player.s2 = card;
				if (tag_duel) {
					player.partner.s2 = card;
				}
				break;
			case "S-3":
				player.s3 = card;
				if (tag_duel) {
					player.partner.s3 = card;
				}
				break;
			case "S-4":
				player.s4 = card;
				if (tag_duel) {
					player.partner.s4 = card;
				}
				break;
			case "S-5":
				player.s5 = card;
				if (tag_duel) {
					player.partner.s5 = card;
				}
				break;
			case "F-1":
				player.fieldSpell = card;
				if (tag_duel) {
					player.partner.fieldSpell = card;
				}
				setFieldSpellPic(player, card);
				break;
			case "F-2":
				player.opponent.fieldSpell = card;
				if (tag_duel) {
					player.opponent.partner.fieldSpell = card;
				}
				setFieldSpellPic(player.opponent, card);
				updateController(player.opponent, card);
				break;
		}
		if (data.zone == "F-2") {
			updateController(player.opponent, card);
		}
		else {
			updateController(player, card);
		}
		points = getPointsByZone(player, data.zone);
		return points;
	}
	if (speed || rush) {
		if (player.s2 == null) {
			player.s2 = card;
			if (tag_duel) {
				player.partner.s2 = card;
			}
			points = [player.s2X, player.s2Y];
		}
		else if (player.s3 == null) {
			player.s3 = card;
			if (tag_duel) {
				player.partner.s3 = card;
			}
			points = [player.s3X, player.s3Y];
		}
		else if (player.s1 == null) {
			player.s1 = card;
			if (tag_duel) {
				player.partner.s1 = card;
			}
			points = [player.s1X, player.s1Y];
		}
		else {
			endAction();
			return null;
		}
	}
	else {
		if (player.s3 == null) {
			player.s3 = card;
			if (tag_duel) {
				player.partner.s3 = card;
			}
			points = [player.s3X, player.s3Y];
		}
		else if (player.s4 == null && !duel_links && !speed && !rush) {
			player.s4 = card;
			if (tag_duel) {
				player.partner.s4 = card;
			}
			points = [player.s4X, player.s4Y];
		}
		else if (player.s2 == null) {
			player.s2 = card;
			if (tag_duel) {
				player.partner.s2 = card;
			}
			points = [player.s2X, player.s2Y];
		}
		else if (player.s5 == null && !duel_links && !speed && !rush) {
			player.s5 = card;
			if (tag_duel) {
				player.partner.s5 = card;
			}
			points = [player.s5X, player.s5Y];
		}
		else if (player.s1 == null) {
			player.s1 = card;
			if (tag_duel) {
				player.partner.s1 = card;
			}
			points = [player.s1X, player.s1Y];
		}
		else {
			endAction();
			return null;
		}
	}
	updateController(player, card);
	return points;
}

function resetSpecialSummon() {
	TweenMax.to($('#ss_glow'), 0, {rotation:0, scale:0.1});
	$('#ss_glow').css("opacity", 1);
	$('#ss_glow').hide();
	TweenMax.to($('#ss_spiral'), 0, {rotation:0, scale:0.1});
	$('#ss_spiral').css("opacity", 1);
	$('#ss_spiral').hide();
}

/*function targetCardResponse(player, data) {
	var targeting_target;
	var targeting_player;
	var targeted_card;
	if (data.username == Player1().username) {
		targeting_target = $('.red_target')
		targeting_player = Player2();
	}
	else if (data.username == Player2().username) {
		targeting_target = $('.blue_target')
		targeting_player = Player1();
	}
	else {
		targeting_target = $('.green_target')
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
}*/

function targetCardResponse(player, data) {
	var card = getDuelCard(data.id);
	var isViewingCard = card.parent()[0] == $('#view > .content')[0];
	var grave_index = null;
	var banished_index = null;
	if (!isViewingCard) {
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
	
	var target;
	var targeting_player;
	if (data.username == Player1().username) {
		target = $('.red_target');
		targeting_player = Player2();
	}
	else if (data.username == Player2().username) {
		target = $('.blue_target');
		targeting_player = Player1();
	}
	else {
		target = $('.green_target');
		targeting_player = Player1();
	}
	var NUM = ~~target.data("num") + 1;
	target.data("num", NUM);
	
	
	playSound(Target);
	var delay = 0;
	
	
	
	if (card) {
		target.css("left", parseInt(card.css("left")));
		target.css("top", parseInt(card.css("top")));
		TweenMax.to(target, 0, {rotation:getRotation(card[0]), scale:getScale(card[0])});
		target.show();
		card.parent().append(target);
	}
	
	setTimeout(function(){
		target.hide();
	}, 100);
	setTimeout(function(){
		target.show();
	}, 200);
	setTimeout(function(){
		target.hide();
	}, 300);
	setTimeout(function(){
		target.show();
	}, 400);
	
	
	
	
	setTimeout(function(){
		delay = 0.2;
		if (grave_index || banished_index) {
			delay = 0.3; // gives you time to see the card before it re-indexes itself
		}
		setTimeout(function(){
			
			if (grave_index != null) {
				card.data("controller").grave_arr.splice(0, 1);
				card.data("controller").grave_arr.splice(grave_index, 0, card);
				shiftGrave(card.data("controller"));
				if ( ~~target.data("num") == NUM) {
					target.hide();
				}
			}
			if (banished_index != null) {
				card.data("controller").banished_arr.splice(0, 1);
				card.data("controller").banished_arr.splice(banished_index, 0, card);
				shiftBanished(card.data("controller"));
				if ( ~~target.data("num") == NUM) {
					target.hide();
				}
			}
			setTimeout(function(){
				endAction();
			}, automatic ? 300 : 0);
			
		}, 300 + (delay * 1.5 * 1000));
	}, delay * 1000);
}




















function shuffleHand(player, data) {
	restoreHandCards();
	if (player == Player1().opponent && viewing == "Opponent's Hand" || player.hand_arr.length < 2) {
	//if (player == Player1().opponent && viewing == "Opponent's Hand" && data.play != "To hand 2" || player.hand_arr.length < 2) {
		onComplete();
		return;
	}
	TweenMax.to(player.hand_arr, 0.25, {left:485, ease:Linear.easeNone, onComplete:onComplete});
	if (player.hand_arr.length > 1) {
		playSound(ShuffleHand);
	}
	
	function onComplete() {
		updateIDs(player.hand_arr, data.hand, data.prev);
		player.hand_arr = shuffle(player, player.hand_arr, data.hand);
		organizeHand(player, true);
		endAction();
	}
}

function updateIDs(arr, new_ids0, prev_ids0) {

/*

face_up

face_down

owner

*/

	//if (!new_ids) {
	//	return;
	//}
	
	
	var missing_card_arr = [];
	
	//console.log('updateIDs');
	//console.log(new_ids0);
	
	var new_ids = JSON.parse(JSON.stringify(new_ids0));
	
	
	

	if (prev_ids0) {
		var prev_ids = JSON.parse(JSON.stringify(prev_ids0));
		
		/*if (JSON.stringify(new_ids.concat().sort()) == JSON.stringify(prev_ids.concat().sort())) {
			log('not updating');
			return;
		}*/
		outerloop:
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < prev_ids.length; j++) {
				if (arr[i].data("id") == prev_ids[j]) {
					//log('setting ' + arr[i].data("cardfront").data("name") + 's id from ' + arr[i].data("id") + ' to ' + new_ids[j]);
					arr[i].data("id", new_ids[j]);
					
					prev_ids.splice(j, 1);
					new_ids.splice(j, 1);
					continue outerloop;
				}
			}
			missing_card_arr.push(arr[i]);
		}
		
		
		
		for (i = 0; i < missing_card_arr.length; i++) {
			if (new_ids[i]) {
				addLine('fixing ' + missing_card_arr[i].data("cardfront").data("name") + 's id from ' + missing_card_arr[i].data("id") + ' to ' + new_ids[i]);
				//log('fixing ' + arr[i].data("cardfront").data("name") + 's id from ' + arr[i].data("id") + ' to ' + new_ids[j]);
				missing_card_arr[i].data("id", new_ids[i]);
			}
			else {
				addLine('could not account for ' + missing_card_arr[i].data("cardfront").data("name"));
			}
		}
		return;
	}
	if (version < 13) {
		return;
	}
	for (var i = 0; i < arr.length; i++) {
		arr[i].data("id", new_ids[i]);
	}
}

function updateIDs0(arr, new_ids, prev_ids) {

/*

face_up

face_down

owner

*/

	//if (!new_ids) {
	//	return;
	//}
	
	
	if (prev_ids) {
		/*if (JSON.stringify(new_ids.concat().sort()) == JSON.stringify(prev_ids.concat().sort())) {
			log('not updating');
			return;
		}*/
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < prev_ids.length; j++) {
				if (arr[i].data("id") == prev_ids[j]) {
					log('setting ' + arr[i].data("cardfront").data("name") + 's id from ' + arr[i].data("id") + ' to ' + new_ids[j]);
					arr[i].data("id", new_ids[j]);
				}
			}
		}
		return;
	}
	if (version < 13) {
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
		setTimeout(function(){ // testing
			endAction();
		}, 250);
	}});
	if (player.hand_arr.length > 1) {
		playSound(ShuffleHand);
	}
}

/*function shuffle(player, arr, data) {
	try {
		var data0 = data.slice();
		if (player == Player1().opponent && viewing == "Opponent's Hand") {
			return arr;
		}
		var temp_arr = [];
		var total = arr.length;
		while (arr.length > 0) {
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
			console.log('NOT FOUND ' + data0[0]);
			console.log('first, arr.length = ' + arr.length);
			arr.push(removeCard(player, {"id":data0[0]}));
			console.log('then, arr.length = ' + arr.length);
			data0.splice(0, 1);
			continue outerloop;
		}
		return arr;
	}
	catch(e) {
		console.log(e.message);
	}
	if (unknown_totals && arr.length < total) {
		for (i = 0; i < player.extra_arr.length; i++) {
			player.extra_arr[i].data("id", player.extra_arr[i].data("id") - (original_length - arr.length));
		}
	}
	return arr;
}*/

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
			console.log('NOT FOUND ' + data0[0]);
			console.log('first, arr.length = ' + arr.length);
			arr.push(removeCard(player, {"id":data0[0]}));
			console.log('then, arr.length = ' + arr.length);
			data0.splice(0, 1);
			continue outerloop;
		}
		return arr;
	}
	catch(e) {
		console.log(e.message);
	}
	if (unknown_totals && arr.length < total) {
		for (i = 0; i < player.extra_arr.length; i++) {
			player.extra_arr[i].data("id", player.extra_arr[i].data("id") - (original_length - arr.length));
		}
	}
	return arr;
}

function viewCards(arr, data) {
	console.log('viewCards');
	console.time("viewCards");
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
		//TweenMax.killTweensOf(arr[i]); // 5-24-23 added for viewing xyz materials // caused FreeMaxxC's glitch
		if (arr[i].data("isXyzMaterial")) {
			// updateXyzMaterials is called frequently, causing Xyz Materials to line up. That tween keeps going long after this function executes. So, by killing those tweens, this function is what happens to those cards last.
			TweenMax.killTweensOf(arr[i]);
		}
		
		if (i == 16) {
			$('#view > .content').removeClass("unscrollable");
		}
		if (data && data.deck && data.deck[i]) {
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
		else if (!permission && arr[i].data("face_down") && viewing != "Extra Deck") {
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

function exitViewing(e, b) {
	if (e && duelist && viewing == "Deck (Picking 4 Cards)" && player1.temp_arr.length > 0) {
		Send({"action":"Duel", "play":next_callback, "cards":player1.temp_arr});
		
	}
	if (duelist && viewing) {
		Send({"action":"Duel", "play":b ? "Stop viewing 2" : "Stop viewing", "viewing":viewing});
		player1.temp_arr = [];
	}
	if (viewing == "Xyz Materials") {
		updateAllXyzMaterials(player1);
	}
	removeCardMenu();
	viewing = "";
	$('#view .title_txt').text("");
	$('#view > .content').scrollTop(0);
	$('#view').hide();
	shiftDecks();
	if (e) {
		e.preventDefault();
		e.stopPropagation();
	}
}

function updateAllXyzMaterials(player) {
	player1.all_cards_arr.forEach(function(e,i){
		if (e.data("xyz_arr").length > 0) {
			updateXyzMaterials(e.data("controller"), e, null, true);
		}
	});
}

function reveal(player, data) {
	var card = revealFromHand(player, data);
	if (!card) {
		card = revealFromExtra(player, data);
	}
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

function revealFromExtra(player, data) {
	var card = removeFromExtra(player, data);
	if (!card) {
		return null;
	}
	if (!card.data("face_down")) {
		revealAndToExtraFU(card.data("controller"), card, data);
	}
	else {
		revealAndToExtra(card.data("controller"), card, data);
	}
	return card;
}

function revealAndToHand(player, card, data) {
	if (viewing) {
		removeCardMenu();
	}
	if (data.play == "To hand 2") {
		player = player.opponent;
		updateController(player, card);
	}
	$('#duel .cards').append(card); 
	card.data("cardfront").reinitialize(data.card);
	if (data.discreet) {
		 toHandFromDeckDiscreet(player, card, data);
		 return;
	}
	TweenMax.to(card, easeSeconds2, {left:512, top:280, scale:0.5, rotation:0, rotationY:ABOUT_ZERO, onComplete:function(){ 
		previewCard(card);
		determineHandPosition(player);
		var rotY = 180 + ABOUT_ZERO;
		if (isPlayer1(player.username) && show_cards || show_cards == 2) {
			rotY = ABOUT_ZERO;
		}
		TweenMax.to(card, easeSeconds2, {left:handDestination, top:player.handY, scale:0.25, rotation:player.rot, rotationY:rotY, delay:0.5, onStart:function(){
			player.hand_arr.push(card);
			organizeHand(player);
		}, onComplete:function(){
			if (automatic) {
				endAction();
			}
			else if (data.shuffle !== false) {
				shuffleHand(player, data);
			}
			else {
				endAction();
			}
		}});
	}});
	playSound(Reveal);
}

//easeSeconds = 2; easeSeconds2 = 2; easeSecondsBanish = 2;

function revealAndToTopOfDeck(player, card, data) {
	$('#duel .cards').append(card);
	TweenMax.set(card, {"z":card.getDeckZ()});
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:ABOUT_ZERO, onComplete:function(){ 
		previewCard(card);
		TweenMax.to(card, easeSeconds, {left:player.deckX, top:player.deckY, scale:0.1485, rotation:player.rot, rotationY:180 + ABOUT_ZERO, delay:0.5, onStart:function(){
			player.main_arr.unshift(card);
		}, onComplete:function(){ 
			shiftDeck(player);
			endAction();
		}});
	}});
	playSound(Reveal);
}

function revealAndToBottomOfDeck(player, card, data) {
	$('#field').append(card);
	TweenMax.set(card, {"z":0});
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:ABOUT_ZERO, onComplete:function(){ 
		previewCard(card);
		TweenMax.to(card, easeSeconds, {left:player.deckX, top:player.deckY, scale:0.1485, rotation:player.rot, rotationY:180 + ABOUT_ZERO, delay:0.5, onStart:function(){
			player.main_arr.push(card);
			addDeckChildren(player);
		}, onComplete:function(){ 
			shiftDeck(player);
			endAction();
		}});
	}});
	playSound(Reveal);
}

function revealAndToExtra(player, card, data) {
	$('#duel .cards').append(card);
	TweenMax.set(card, {"z":0});
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:ABOUT_ZERO, onComplete:function(){ 
		previewCard(card);
		card.data("face_down", true);
		TweenMax.to(card, easeSeconds, {left:card.data("owner").extraX, top:card.data("owner").extraY, scale:0.1485, rotation:card.data("owner").rot, rotationY:180 + ABOUT_ZERO, delay:0.5, onStart:function(){
			card.data("owner").extra_arr.push(card);
			addExtraChildren(card.data("owner"));
		}, onComplete:function(){ 
			shiftExtra(card.data("owner"));
			endAction();
		}});
	}});
	playSound(Reveal);
}

function revealAndToExtraFU(player, card, data) {
	$('#duel .cards').append(card);
	TweenMax.set(card, {"z":card.getExtraZ()});
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {left:512, top:280, scale:0.5, rotation:0, rotationY:ABOUT_ZERO, onComplete:function(){ 
		previewCard(card);
		card.data("face_down", false);
		TweenMax.to(card, easeSeconds, {left:card.data("owner").extraX, top:card.data("owner").extraY, scale:0.1485, rotation:card.data("owner").rot, rotationY:ABOUT_ZERO, delay:0.5, onStart:function(){
			card.data("owner").extra_arr.unshift(card);
		}, onComplete:function(){ 
			shiftExtra(card.data("owner"));
			endAction();
		}});
	}});
	playSound(Reveal);
}

function move(player, data) {
	var card = removeFromField(player, data, true);
	var points;
	//var rot = getRotation(card[0]);
	//var rot = null;
	var rot;
	if (data.zone.indexOf("M") == 0 || data.zone == "Left Extra Monster Zone" || data.zone == "Right Extra Monster Zone") {
		points = getNextMonsterZone(player, card, data);
		rot = card.data("controller").rot;
		if (card.data("face_down")) {
			card.data("inATK", false);
			card.data("inDEF", true);
		}
		if (card.data("inDEF")) {
			rot = card.data("controller").defRot;
		}
	}
	else {
		card.data("inATK", true);
		card.data("inDEF", false);
		card.data("new_atk", null);
		card.data("new_def", null);
		points = getNextSTZone(player, card, data);
		detachAllMaterials(card);
		rot = card.data("controller").rot;
	}
	
	/*if (data.zone.indexOf("S-") >= 0) {
		card.data("inATK", true);
		card.data("inDEF", false);
		points = getNextSTZone(player, card, data);
		detachAllMaterials(card);
		//rot = player.rot;
		rot = card.data("controller").rot;
	}
	else {
		points = getNextMonsterZone(player, card, data);
		rot = card.data("controller").rot;
		if (card.data("face_down")) {
			//rot = player.defRot;
			card.data("inATK", false);
			card.data("inDEF", true);
		}
		if (card.data("inDEF")) {
			rot = card.data("controller").defRot;
		}
	}*/
	if (getRotation(card[0]) == 0) {
		card.data("inATK", true);
	}
	$('#field').append(card);
	card.data("cardfront").reinitialize(data.card);
	var end = true;
	//if (data.zone.indexOf("S-") < 0) {
	if (data.zone.indexOf("M") == 0 || data.zone == "Left Extra Monster Zone" || data.zone == "Right Extra Monster Zone") {
		end = false;
	}
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], rotation:rot, scale:0.1485, ease:Linear.easeNone, onComplete:function(){
		if (end) {
			endAction();
		}
	}});
	if (!end) {
		updateXyzMaterials(card.data("controller"), card);
	}
}

function overlay(player, data) {
	console.log('overlay entered');
	var start_card = getFieldCard(player, {id:data.start_id});
	var end_card = getFieldCard(player, {id:data.end_id});
	start_card.data("xyz_arr").push(end_card);
	while (end_card.data("xyz_arr").length > 0) {
		start_card.data("xyz_arr").push(end_card.data("xyz_arr")[0]);
		end_card.data("xyz_arr").splice(0, 1);
	}
	removeFromField(player, {id:data.start_id}, true);
	replaceCard(player, start_card, end_card);
	updateXyzMaterials(player, start_card);
	console.log('overlay ended');
}

function attach(player, data) {
	console.log('attach entered');
	var start_card = removeCard(player, {id:data.start_id});
	if (!start_card) {
		start_card = removeCard(player.opponent, {id:data.start_id});
	}
	if (!start_card) {
		return;
	}
	if (data.card) {
		start_card.data("cardfront").reinitialize(data.card);
	}
	start_card.data("face_down", false);
	var end_card = getFieldCard(player, {id:data.end_id});
	end_card.data("xyz_arr").push(start_card);
	updateXyzMaterials(player, end_card);
	console.log('attach ended');
}

function detach(player, data) {
	var card = removeXyzMaterial(player, data, true);
	card.data("owner").grave_arr.unshift(card);
	updateController(card.data("owner"), card);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:card.data("owner").graveX, top:card.data("owner").graveY, rotation:card.data("owner").rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		shiftGrave(player);
		shiftGrave(player.opponent);
		//endAction(); // disabling because endAction is also called in updateXyzMaterials
	}});
	playSound(Move);
	updateViewing(); // 5-24-23
}

function attack(player, data) {
	var Data = {};
	Data.id = data.attacking_id;
	var attacking_card = getFieldCard(player, Data);
	Data.id = data.attacked_id;
	var attacked_card = getFieldCard(player.opponent, Data);
	var target = $('.red_target');
	if (player == Player2()) {
		target = $('.blue_target');
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
	//TweenMax.to(stream_parent, 0, {left:parseInt(attacking_card.css("left")), top:parseInt(attacking_card.css("top")), rotation:Math.atan2(_loc10_,_loc9_) * 180 / Math.PI, y:getSwordYPercent(Math.atan2(_loc10_,_loc9_) * 180 / Math.PI)});
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
	playSound(Attack);
	
	
	
	
	
	//TweenMax.set($('#blue_stream'), {"xPercent":-200, "yPercent":-200, "scale":1});
	
	//TweenMax.set($('#blue_stream'), {"xPercent":-200, "yPercent":-200, "scale":0.4});
	
	
}

function getSwordYPercent(rotation) {
	var xPercent = 0;
	if (rotation < -90) {
		xPercent = 10 * rotation / (-154 / 2) - 10;
	}
	else {
		xPercent = (-10 + -rotation / 26 * 3) * 1.4;
	}
	console.log('xPercent = ' + xPercent);
	return xPercent;
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
	playSound(Attack);
}

function drawCard(player, data) {
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
}

/*function toHand(player, data) {
	var card = removeFromDeck(player, data);
	if (!card) {
		card = removeFromGY(player, data);
	}
	if (!card) {
		card = removeFromExtra(player, data);
	}
	if (!card) {
		card = removeFromHand(player, data); // Graceful Tear
		if (data.play == "To hand 2") {
			if (card) {
				updateController(player.opponent, card);
				revealAndToHand(player.opponent, card, data);
				return;
			}
			if (!card) {
				card = removeFromBanished(player, data); // Gift Exchange
				//card = removeCard(player, data); // Gift Exchange
				if (card) {
					updateController(player.opponent, card);
					revealAndToHand(player.opponent, card, data);
					return;	
				}
				//toHandFromField(player, data); // Old Mind
			}
		}
	}
	if (card) {
		revealAndToHand(player, card, data);
		return;
	}
	toHandFromBanished(player, data);
	toHandFromField(player, data);
}*/

function toHand(player, data) {
	var card = removeFromDeck(player, data);
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
			if (!card) { // Fairy Tail - Rochka
				card = removeCard(player.opponent, data);
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
	var rotY = 180 + ABOUT_ZERO;
	if (isPlayer1(to_player.username) && show_cards || show_cards == 2) {
		rotY = ABOUT_ZERO;
	}
	TweenMax.to(card, easeSeconds, {left:handDestination, top:to_player.handY, scale:0.25, rotation:to_player.rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
		if (automatic) {
			endAction();
		}
		else if (data.shuffle !== false) {
			shuffleHand(to_player, data);
		}
		else {
			endAction();
		}
	}});
}

function toHandFromBanished(player, data) {
	var card = removeFromBanished(player, data, false);
	if (!card) {
		return;
	}
	if (!card.data("face_down")) {
		revealAndToHand(player, card, data);
	}
	else {
		$('#duel .cards').append(card);
		determineHandPosition(player);
		var rotY = 180 + ABOUT_ZERO;
		if (isPlayer1(player.username) && show_cards || show_cards == 2) {
			rotY = ABOUT_ZERO;
			card.data("cardfront").show();
		}
		TweenMax.to(card, 0.7, {left:handDestination, top:player.handY, scale:0.25, rotation:player.rot, rotationY:rotY, delay:0.5, onStart:function(){
			player.hand_arr.push(card);
			organizeHand(player);
		}, onComplete:function(){ 
			card.data("face_down", false);
			shuffleHand(player, data);
		}});
	}
}

function toHandFromDeckDiscreet(player, card, data) {
	determineHandPosition(player);
	var rotY = 180 + ABOUT_ZERO;
	if (isPlayer1(player.username) && show_cards || show_cards == 2) {
		rotY = ABOUT_ZERO;
		card.data("cardfront").show();
	}
	var tween = TweenMax.to(card, 0.7, {left:handDestination, top:player.handY, scale:0.25, rotation:player.rot, rotationY:rotY, onStart:function(){
		player.hand_arr.push(card);
		organizeHand(player);
		$('#field').prepend(card); // to make Upside Down look more correct
	}, 
	onUpdate:function(){ // to make Upside Down look more correct
		if (tween.progress() > 0.2 && tween.progress() < 0.23) {
			$('#duel .cards').append(card);
		}
		if (tween.progress() < 0.03) {
			TweenMax.set(card, {"left":player.deckX});
		}
	},
	onComplete:function(){ 
		if (data.shuffle !== false) {
			shuffleHand(player, data);
		}
		else {
			endAction();
		}
	}});
}

function toDeck(player, data) {
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
		TweenMax.set(card, {"z":player.opponent.main_arr.length + 30});
	}
	else {
		if (revealing) {
			revealAndToTopOfDeck(card.data("controller"), card, data);
			return;
		}
		else {
			card.data("owner").main_arr.unshift(card);
			TweenMax.set(card, {"z":card.getDeckZ()});
		}
	}
	TweenMax.to(card, easeSeconds, {left:card.data("controller").deckX, top:card.data("controller").deckY, scale:0.1485, rotation:card.data("controller").rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
		shiftDeck(card.data("controller"));
		endAction();
	}});
}

function toGY(player, data) {
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
}

function mill(player, data) {
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
}

function banish(player, data) {
	var rotY = ABOUT_ZERO;
	var card = removeCard(player, data);
	if (card) {
		card.data("face_down", false);
	}
	if (!card) {
		card = removeFromGY(player.opponent, data);
	}
	if (data.play.indexOf("FD") >= 0) {
		card.data("face_down", true);
		rotY = 180 + ABOUT_ZERO;
	}
	card.data("cardfront").reinitialize(data.card);
	$('#field').append(card);
	TweenMax.set(card, {"z":card.getBanishedZ()})
	card.data("owner").banished_arr.unshift(card);
	updateController(card.data("owner"), card); // added 4/27/20
	TweenMax.to(card, easeSeconds, {left:card.data("owner").banishedX, top:card.data("owner").banishedY, scale:0.1485, rotation:card.data("owner").rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
		shiftBanished(card.data("owner"));
		endAction();
	}});
	playSound(Banish);
	
	updateViewing(); // 5-24-23
}

function toED(player, data) {
	var revealing = true;
	var card = getFieldCard(player, data);
	if (card) {
		revealing = false;
	}
	for (var i = 0; i < player.banished_arr.length; i++) {
		if (player.banished_arr[i].data("id") == data.id) {
			if (player.banished_arr[i].data("face_down")) {
				revealing = false;
			}
			break;
		}
	}
	card = removeCard(player, data);
	card.data("cardfront").reinitialize(data.card);
	if (!card.data("face_down") && revealing) {
		if (data.play.indexOf("FU") >= 0) {
			revealAndToExtraFU(player, card, data);
		}
		else {
			revealAndToExtra(player, card, data);
		}
		return;
	}
	card.data("face_down", true);
	var rotY = 180 + ABOUT_ZERO;
	if (data.play.indexOf("FU") >= 0) {
		card.data("face_down", false);
		rotY = ABOUT_ZERO;
		card.data("owner").extra_arr.unshift(card);
		TweenMax.set(card, {"z":card.getExtraZ()});
	}
	else {
		card.data("owner").extra_arr.push(card);
		addExtraChildren(card.data("owner"));
	}
	TweenMax.to(card, easeSeconds, {left:card.data("owner").extraX, top:card.data("owner").extraY, scale:0.1485, rotation:card.data("owner").rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
		shiftExtra(card.data("owner"));
		endAction();
	}});
}

function normalSummon(player, data) {
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
}

function specialSummon(player, data, points, card, end) {
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
}

//rotation WILL affect it
//rotationY WILL affect it



function olSummon(player, data) {
	var start_card = removeFromExtra(player, {"id":data.start_id});
	var end_card = getFieldCard(player, {"id":data.end_id});
	var points = [parseInt(end_card.css("left")), parseInt(end_card.css("top"))];
	start_card.data("xyz_arr").push(end_card);
	while (end_card.data("xyz_arr").length > 0) {
		start_card.data("xyz_arr").push(end_card.data("xyz_arr")[0]);
		end_card.data("xyz_arr").splice(0, 1);
	}
	start_card.data("face_down", false);
	start_card.data("cardfront").reinitialize(data.card);
	replaceCard(player, start_card, end_card);
	specialSummon(player, data, points, start_card, false);
	updateXyzMaterials(player, start_card, true);
	if (viewing.indexOf("Extra") >= 0 && player.username == username) {
		viewCards(player.extra_arr);
	}
	/*if (duelist && username == player.username && links && !linkCardChosen(player1)) {
		summoning_card = start_card;
		summoning_play = "Move";
		startChooseExtraZones();
		startChooseMonsterZones(); // added 4/1/20
	}*/
}

function summonToken(player, data) {
	awaiting_token = false;
	var tokenNumber = data.token ? data.token : player.token;
	var token = newDuelCard(player);
	token.data("id", data.id);
	token.data("inATK", false);
	token.data("inDEF", true);
	token.data("face_down", false);
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
}

function removeToken(player, data) {
	var card = removeFromField(player, data);
	card.data("owner").all_cards_arr.splice(card.data("owner").all_cards_arr.indexOf(card), 1);
	card.remove();
	card = null;
	endAction();
}

function flip(player, data) {
	var card = getFieldCard(player, data);
	card.data("inATK", false);
	card.data("inDEF", true);
	card.data("face_down", false);
	$('#field').append(card);
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {rotation:player.defRot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
	playSound(Flip);
}

function flipSummon(player, data) {
	var card = getFieldCard(player, data);
	card.data("inATK", true);
	card.data("inDEF", false);
	card.data("face_down", false);
	$('#field').append(card);
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {rotation:player.rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		//endAction(); // disabling because endAction is also called in updateXyzMaterials
	}});
	updateXyzMaterials(player, card);
	playSound(Flip);
}

function toATK(player, data) {
	var card = getFieldCard(player, data);
	card.data("inATK", true);
	card.data("inDEF", false);
	card.data("face_down", false);
	$('#field').append(card);
	card.data("cardfront").reinitialize(data.card); // for automatic
	TweenMax.to(card, easeSeconds, {rotation:player.rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		//endAction(); // disabling because endAction is also called in updateXyzMaterials
	}});
	updateXyzMaterials(player, card);
	playSound(Swap);
}

/*function toDEF(player, data) {
	var card = getFieldCard(player, data);
	card.data("inATK", false);
	card.data("inDEF", true);
	card.data("face_down", false);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {rotation:player.defRot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		//endAction(); // disabling because endAction is also called in updateXyzMaterials
	}});
	updateXyzMaterials(player, card);
	playSound(Swap);
}*/

function toDEF(player, data) {
	var card = getFieldCard(player, data);
	card.data("inATK", false);
	card.data("inDEF", true);
	card.data("face_down", !!data.face_down);
	$('#field').append(card);
	card.data("cardfront").reinitialize(data.card); // for automatic
	var rotY = ABOUT_ZERO;
	if (data.face_down) {
		playSound(Flip);
		rotY = 180 + ABOUT_ZERO;
	}
	else {
		playSound(Swap);
	}
	TweenMax.to(card, easeSeconds, {rotation:player.defRot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
		//endAction(); // disabling because endAction is also called in updateXyzMaterials
	}});
	setTimeout(function(){
		updateXyzMaterials(player, card);
	//}, automatic ? 550 : 0); // why 550?
	}, automatic ? 0 : 0);
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

function toST(player, data) {
	var card = getFieldCard(player, data);
	if (!card) {
		card = removeCard(player, data);
		if (!card) {
			card = removeFromGY(player.opponent, data); // Toadally Awesome
			if (!card) {
				card = removeFromBanished(player.opponent, data); // Toadally Awesome
			}
		}
	}
	card.data("cardfront").reinitialize(data.card);
	card.data("inATK", true);
	card.data("inDEF", false);
	card.data("face_down", false);
	var points = getNextSTZone(player, card, data);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function setMonster(player, data) {
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
	card.data("inDEF", true);
	card.data("face_down", true);
	card.data("counters", 0);
	card.data("cardfront").reinitialize(data.card);
	card.data("new_atk", null);
	card.data("new_def", null);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.defRot, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		//endAction(); // disabling because endAction is also called in updateXyzMaterials
	}});
	updateXyzMaterials(player, card);
}

function setST(player, data) {
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
	card.data("face_down", true);
	card.data("cardfront").reinitialize(data.card);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function activateFieldSpell(player, data) {
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
}

function activateFieldSpell2(player, data) {
	var card = getFieldCard(player, data);
	if (!card) {
		card = removeCard(player, data);
	}
	card.data("cardfront").reinitialize(data.card);
	card.data("face_down", false);
	player.opponent.fieldSpell = card;
	if (tag_duel) {
		player.opponent.partner.fieldSpell = card;
	}
	updateController(player.opponent, card);
	$('#field').append(card);
	TweenMax.to(card, easeSecondsBanish, {left:player.opponent.fieldSpellX, top:player.opponent.fieldSpellY, scale:0.1485, rotation:player.opponent.rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		setFieldSpellPic(player.opponent, card);
		endAction();
	}});
	playSound(Activate);
}

function setFieldSpell(player, data) {
	var card = getFieldCard(player, data);
	if (!card) {
		card = removeCard(player, data);
		playSound(FaceDown);
	}
	else {
		playSound(Flip);
	}
	card.data("face_down", true);
	player.fieldSpell = card;
	if (tag_duel) {
		player.partner.fieldSpell = card;
	}
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:player.fieldSpellX, top:player.fieldSpellY, scale:0.1485, rotation:player.rot, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		updateController(player, card);
		endAction();
	}});
	removeFieldSpellPic();
}

function setFieldSpell2(player, data) {
	var card = removeCard(player, data);
	card.data("cardfront").reinitialize(data.card);
	card.data("face_down", true);
	player.opponent.fieldSpell = card;
	if (tag_duel) {
		player.opponent.partner.fieldSpell = card;
	}
	updateController(player.opponent, card);
	$('#field').append(card);
	TweenMax.to(card, easeSecondsBanish, {left:player.opponent.fieldSpellX, top:player.opponent.fieldSpellY, scale:0.1485, rotation:player.opponent.rot, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		if (player.opponent.username == username) {
			updateController(player.opponent, card);
		}
		endAction();
	}});
	playSound(FaceDown);
}

/*

function removeFieldSpellPic() {
	$('#field_spell_pic').attr("src", IMAGES_START + "blank.png");
}*/

/*function setFieldSpellPic(player, card) {
	if (card.data("face_down")) {
		return;
	}
	var src = player.fieldSpell.data("cardfront").find('.pic').attr("src") || IMAGES_START + "card-pics/" + player.fieldSpell.data("cardfront").data("id") + ".jpg";
	$('#field_spell_pic').attr("src", src);
	$('#field_spell_pic').attr("src", src.replace("/low-res/", "/card-pics/").replace("/small/", "/card-pics/"));
}*/

function setFieldSpellPic(player, card) {
	if (card.data("face_down")) {
		return;
	}
	var id = player.fieldSpell.data("cardfront").data("id");
	var src = CARD_IMAGES_START + id + '.jpg';
	src = src.replace("/low-res/", "/card-pics/").replace("/small/", "/card-pics/");
	$('#field_spell_pic').attr("src", src);
	
	
			/*
				if (custom > 0) {
				src = CUSTOM_PICS_START + getCustomFolder(id) + '/' + id + '.jpg';
			}*/
	
}





// Reimplementing this bad code to remind myself why this was bad
function setFieldSpellPic(player, card) {
	var src = player.fieldSpell.data("cardfront").find('.pic').attr("src");
	$('#field_spell_pic').attr("src", src);
	$('#field_spell_pic').attr("src", src.replace("/low-res/", "/card-pics/").replace("/small/", "/card-pics/"));
}






function removeFieldSpellPic() {
	if ($('#field').is(":visible")) {
		if (player1.fieldSpell && !player1.fieldSpell.data("face_down")) {
			setFieldSpellPic(player1, player1.fieldSpell);
			return;
		}
		if (player2.fieldSpell && !player2.fieldSpell.data("face_down")) {
			setFieldSpellPic(player2, player2.fieldSpell);
			return;
		}
	}
	$('#field_spell_pic').attr("src", IMAGES_START + "blank.png");
}

function activatePendulumLeft(player, data) {
	var card = getFieldCard(player, data);
	if (!card) {
		playSound(Activate);
	}
	card = removeCard(player, data);
	card.data("cardfront").reinitialize(data.card);
	if (links) {
		player.s1 = card;
		if (tag_duel) {
			player.partner.s1 = card;
		}
	}
	else {
		player.pendulumLeft = card;
		if (tag_duel) {
			player.partner.pendulumLeft = card;
		}
	}
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:player.pendulumLeftX, top:player.pendulumY, scale:0.1485, rotation:player.rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function activatePendulumRight(player, data) {
	var card = getFieldCard(player, data);
	if (!card) {
		playSound(Activate);
	}
	card = removeCard(player, data);
	card.data("cardfront").reinitialize(data.card);
	if (links) {
		player.s5 = card;
		if (tag_duel) {
			player.partner.s5 = card;
		}
	}
	else {
		player.pendulumRight = card;
		if (tag_duel) {
			player.partner.pendulumRight = card;
		}
	}
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:player.pendulumRightX, top:player.pendulumY, scale:0.1485, rotation:player.rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function changeControl(player, data) {
	var card = removeFromField(player, data, true);
	if (!card && automatic) {
		card = removeFromField(player.opponent, data, true);
	}
	/*updateController(card.data("controller"), card);
	if (player.username != username) {
		card.off("click", targetCard);
		card.css("cursor", "auto");
	}*/
	
	card.data("cardfront").reinitialize(data.card);
	$('#field').append(card);
	var points;
	if (data.zone && data.zone.indexOf("2-") >= 0) {
		points = getNextMonsterZone(player, card, data);
	}
	else {
		points = getNextMonsterZone(player.opponent, card, data);
	}
	var rot = card.data("controller").rot;
	if (card.data("inDEF")) {
		rot = card.data("controller").defRot;
	}
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], rotation:rot, ease:Linear.easeNone, onComplete:function(){
		//endAction(); // disabling because endAction is also called in updateXyzMaterials
	}});
	updateXyzMaterials(card.data("controller"), card);
}

function addRandomCardFromDeckToHand(player, data) {
	var card = removeFromDeck(player, data);
	card.data("cardfront").reinitialize(data.card);
	determineHandPosition(player);
	var rotY = 180 + ABOUT_ZERO;
	if (isPlayer1(player.username) && show_cards || show_cards == 2) {
		rotY = ABOUT_ZERO;
	}
	player.hand_arr.push(card);
	organizeHand(player);
	TweenMax.to(card, easeSeconds2, {left:handDestination, top:player.handY, scale:0.25, rotation:player.rot, rotationY:rotY, onComplete:function(){ 
		shuffleHand(player, data);
	}});
}

function turnTopCardOfDeckFU(player, data) {
	var card = player.main_arr[0];
	card.data("face_up", true);
	card.data("cardfront").reinitialize(data.card);
	TweenMax.to(card, easeSeconds, {rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function flipDeck(player, data) {
	player.deck_face_up = !player.deck_face_up;
	//updateIDs(player.main_arr, data.deck, data.prev);
	player.main_arr = shuffle(player, player.main_arr, data.ids);
	for (var i = 0; i < player.main_arr.length; i++) {
		if (data.deck) {
			player.main_arr[i].data("cardfront").reinitialize(data.deck[i]);
		}
		//else if (!player.main_arr[i].data("cardfront").data("initialized") && data.ids && data.ids[i] < 20000) {
		//	player.main_arr[i].data("cardfront").initializeFromData(Cards[i + 1]);
		//}
	}
	shiftDeck(player);
	endAction();
}

function cynetStorm(player, data) {
	var card = removeFromExtra(player, data);
	card.data("face_down", false);
	card.data("cardfront").reinitialize(data.card);
	//updateIDs(player.extra_arr, data.deck, data.prev);
	player.extra_arr = shuffle(player, player.extra_arr, data.deck);
	shiftExtra(player);
	addExtraChildren(card.data("owner"));
	$('#field').append(card);
	card.data("owner").banished_arr.unshift(card);
	TweenMax.to(card, easeSeconds, {left:card.data("owner").banishedX, top:card.data("owner").banishedY, rotation:card.data("owner").rot, rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		shiftBanished(card.data("owner"));
		endAction();
	}});
	addLine(data.username + " resolved Cynet Storm");
	playSound(Banish);
}

function exchangeCards(player, data) {
	if (duelist && data.username == username) {
		exitViewing();
	}
	var card = removeFromHand(player.opponent, data);
	$('#duel .cards').append(card);
	updateController(player, card);
	player.hand_arr.push(card);
	var rotY = 180 + ABOUT_ZERO;
	if (isPlayer1(player.username) && show_cards || show_cards == 2) {
		rotY = ABOUT_ZERO;
	}
	determineHandPosition(player);
	if (!duelist) {
		organizeHand(player);
		organizeHand(player.opponent);
	}
	else if (viewing == "") {
		for (var i = 0; i < Player1().opponent.hand_arr.length; i++) {
			TweenMax.to(Player1().opponent.hand_arr[i], 0, {top:Player1().opponent.handY, scale:0.25, rotation:Player1().opponent.rot, rotationY:180 + ABOUT_ZERO});
			Player1().opponent.hand_arr[i].onRotate();
		}
		organizeHand(Player1().opponent);
	}
	TweenMax.to(card, easeSeconds, {left:handDestination, top:card.data("controller").handY, scale:0.25, rotation:card.data("controller").rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
		if (!duelist || viewing == "") {
			shuffleHand(player, data);
		}
		endAction();
	}});
}

function attachTopCardFromDeck2(player, data) {
	var start_card = getFieldCard(player.opponent, {"id":data.start_id});
	var end_card = removeFromDeck(player, {"id":data.end_id});
	end_card.data("face_up", false);
	end_card.data("cardfront").reinitialize(data.card);
	start_card.data("xyz_arr").push(end_card);
	updateXyzMaterials(player.opponent, start_card);
}

function detachAllMaterials(card) {
	while (array(card.data("xyz_arr")).length > 0) {
		var material = card.data("xyz_arr").splice(0, 1)[0];
		material.data("owner").grave_arr.unshift(material);
		material.data("isXyzMaterial", false);
		updateController(material.data("owner"), material);
		$('#field').append(material);
		TweenMax.to(material, easeSeconds, {left:material.data("owner").graveX, top:material.data("owner").graveY, scale:0.1485, rotation:material.data("owner").rot, rotationY:ABOUT_ZERO, onComplete:function(){
			shiftGrave(Player1());
			shiftGrave(Player1().opponent);
		}});
	}
}

function getFieldCard(player, data) {
	var card;
	if (player.m3) {
		if (player.m3.data("id") == data.id) {
			card = player.m3;
			return card;
		}
	}
	if (player.m4) {
		if (player.m4.data("id") == data.id) {
			card = player.m4;
			return card;
		}
	}
	if (player.m2) {
		if (player.m2.data("id") == data.id) {
			card = player.m2;
			return card;
		}
	}
	if (player.m5) {
		if (player.m5.data("id") == data.id) {
			card = player.m5;
			return card;
		}
	}
	if (player.m1) {
		if (player.m1.data("id") == data.id) {
			card = player.m1;
			return card;
		}
	}
	if (player.s3) {
		if (player.s3.data("id") == data.id) {
			card = player.s3;
			return card;
		}
	}
	if (player.s4) {
		if (player.s4.data("id") == data.id) {
			card = player.s4;
			return card;
		}
	}
	if (player.s2) {
		if (player.s2.data("id") == data.id) {
			card = player.s2;
			return card;
		}
	}
	if (player.s5) {
		if (player.s5.data("id") == data.id) {
			card = player.s5;
			return card;
		}
	}
	if (player.s1) {
		if (player.s1.data("id") == data.id) {
			card = player.s1;
			return card;
		}
	}
	if (player.fieldSpell) {
		if (player.fieldSpell.data("id") == data.id) {
			card = player.fieldSpell;
			return card;
		}
	}
	if (player.pendulumLeft) {
		if (player.pendulumLeft.data("id") == data.id) {
			card = player.pendulumLeft;
			return card;
		}
	}
	if (player.pendulumRight) {
		if (player.pendulumRight.data("id") == data.id) {
			card = player.pendulumRight;
			return card;
		}
	}
	if (player.skillCard) {
		if (player.skillCard.data("id") == data.id) {
			card = player.skillCard;
			return card;
		}
	}
	if (linkLeft) {
		if (linkLeft.data("id") == data.id) {
			card = linkLeft;
			return card;
		}
	}
	if (linkRight) {
		if (linkRight.data("id") == data.id) {
			card = linkRight;
			return card;
		}
	}
	return card;
}

function replaceCard(player, start_card, end_card) {
	var Data = {};
	Data.id = end_card.data("id");
	if (player.m1 == end_card) {
		removeFromField(player, Data);
		player.m1 = start_card;
		if (tag_duel) {
			player.partner.m1 = start_card;
		}
	}
	else if (player.m2 == end_card) {
		removeFromField(player, Data);
		player.m2 = start_card;
		if (tag_duel) {
			player.partner.m2 = start_card;
		}
	}
	else if (player.m3 == end_card) {
		removeFromField(player, Data);
		player.m3 = start_card;
		if (tag_duel) {
			player.partner.m3 = start_card;
		}
	}
	else if (player.m4 == end_card) {
		removeFromField(player, Data);
		player.m4 = start_card;
		if (tag_duel) {
			player.partner.m4 = start_card;
		}
	}
	else if (player.m5 == end_card) {
		removeFromField(player, Data);
		player.m5 = start_card;
		if (tag_duel) {
			player.partner.m5 = start_card;
		}
	}
	else if (linkLeft == end_card) {
		removeFromField(player, Data);
		linkLeft = start_card;
	}
	else if (linkRight == end_card) {
		removeFromField(player, Data);
		linkRight = start_card;
	}
	updateController(player, start_card);
}

function updateXyzMaterials(player, card, end, fast) {
	if (end !== false) {
		end = true;
	}
	var time = easeSeconds;
	/*if (viewing == "Xyz Materials" && viewing_card_with_materials != null && card[0] == viewing_card_with_materials[0]) {
		viewing = ""; // to prevent recursion
		exitViewing();
		fast = true;
	}*/
	//if (fast) {
	if (fast) {
		time = 0;
	}
	var xStart = 0;
	var xEnd = 0;
	var overlayingX = 0;
	var materialX = 0;
	var overlayingInDef = 0;
	var oneMaterial = 0;
	var yPosition = player.monsterY;
	var linkAndInDefense = false;
	var isLink = false;
	switch (card) {
		case player.m1:
			xStart = player.m1xStart;
			xEnd = player.m1xEnd;
			break;
		case player.m2:
			xStart = player.m2xStart;
			xEnd = player.m2xEnd;
			break;
		case player.m3:
			xStart = player.m3xStart;
			xEnd = player.m3xEnd;
			break;
		case player.m4:
			xStart = player.m4xStart;
			xEnd = player.m4xEnd;
			break;
		case player.m5:
			xStart = player.m5xStart;
			xEnd = player.m5xEnd;
			break;
		case linkLeft:
			isLink = true;
			xStart = linkLeftxStart;
			xEnd = linkLeftxEnd;
			yPosition = linkY;
			if (player != Player1() && card.data("xyz_arr").length > 0 && card.data("inDEF") == true) {
				xStart += 27;
				xEnd += 27;
				linkAndInDefense = true;
			}
			break;
		case linkRight:
			isLink = true;
			xStart = linkRightxStart;
			xEnd = linkRightxEnd;
			yPosition = linkY;
			if (player != Player1() && card.data("xyz_arr").length > 0 && card.data("inDEF") == true) {
				xStart += 27;
				xEnd += 27;
				linkAndInDefense = true;
			}
			break;
	}
	if (card.data("inDEF") != 1) {
		overlayingX = xStart;
	}
	else {
		overlayingX = (xEnd + xStart) / 2;
		overlayingInDef = 1;
		if (card.data("xyz_arr").length == 1) {
			oneMaterial = 13.5;
			overlayingInDef = 0;
		}
	}
	if (card.data("xyz_arr").length == 0) {
		overlayingX = (xEnd + xStart) / 2;
		oneMaterial = 0;
	}
	if (linkAndInDefense) {
		overlayingX -= 27;
	}
	else if (isLink && player != Player1() && card.data("xyz_arr").length > 0) {
		overlayingX += 27;
		xStart += 27;
		xEnd += 27;
	}
	for (var i = card.data("xyz_arr").length - 1; i > -1; i--) {
		var material = card.data("xyz_arr")[i];		
		material.data("isXyzMaterial", true);
		$('#field').append(material);
		if (player == player1 || player == player3) {
			TweenMax.to(material, time, {left:xStart + ((27 / (card.data("xyz_arr").length - overlayingInDef)) * (i + 1 - overlayingInDef) - oneMaterial), top:yPosition, scale:0.1485, rotation:player.rot, rotationY:ABOUT_ZERO, z:card.data("xyz_arr").length - i, ease:Linear.easeNone});
		}
		else {
			TweenMax.to(material, time, {left:xStart - ((27 / (card.data("xyz_arr").length - overlayingInDef)) * (i + 1 - overlayingInDef) - oneMaterial), top:yPosition, scale:0.1485, rotation:player.rot, rotationY:ABOUT_ZERO, z:card.data("xyz_arr").length - i, ease:Linear.easeNone});
		}
		updateController(player, material);
		material.off("click", targetCard);
		material.css("cursor", "auto");
	}
	$('#field').append(card);
	TweenMax.set(card, {"z":card.data("xyz_arr").length + 1});
	TweenMax.to(card, time, {left:overlayingX, top:yPosition, scale:0.1485, ease:Linear.easeNone, onComplete:function(){
		if (end) {
			endAction();
		}
	}});
}

/*function removeXyzMaterial(player, data) {
	var card;
	if (player.m1) {
		for (var i = 0; i < player.m1.data("xyz_arr").length; i++) {
			if (player.m1.data("xyz_arr")[i].data("id") == data.id) {
				card = player.m1.data("xyz_arr").splice(i, 1)[0];
				card.detach();
				//updateXyzMaterials(player, player.m1);
				return card;
			}
		}
	}
	if (player.m2) {
		for (i = 0; i < player.m2.data("xyz_arr").length; i++) {
			if (player.m2.data("xyz_arr")[i].data("id") == data.id) {
				card = player.m2.data("xyz_arr").splice(i, 1)[0];
				card.detach();
				//updateXyzMaterials(player, player.m2);
				return card;
			}
		}
	}
	if (player.m3) {
		for (i = 0; i < player.m3.data("xyz_arr").length; i++) {
			if (player.m3.data("xyz_arr")[i].data("id") == data.id) {
				card = player.m3.data("xyz_arr").splice(i, 1)[0];
				card.detach();
				//updateXyzMaterials(player, player.m3);
				return card;
			}
		}
	}
	if (player.m4) {
		for (i = 0; i < player.m4.data("xyz_arr").length; i++) {
			if (player.m4.data("xyz_arr")[i].data("id") == data.id) {
				card = player.m4.data("xyz_arr").splice(i, 1)[0];
				card.detach();
				//updateXyzMaterials(player, player.m4);
				return card;
			}
		}
	}
	if (player.m5) {
		for (i = 0; i < player.m5.data("xyz_arr").length; i++) {
			if (player.m5.data("xyz_arr")[i].data("id") == data.id) {
				card = player.m5.data("xyz_arr").splice(i, 1)[0];
				card.detach();
				//updateXyzMaterials(player, player.m5);
				return card;
			}
		}
	}
	if (linkLeft) {
		for (i = 0; i < linkLeft.data("xyz_arr").length; i++) {
			if (linkLeft.data("xyz_arr")[i].data("id") == data.id) {
				card = linkLeft.data("xyz_arr").splice(i, 1)[0];
				card.detach();
				//updateXyzMaterials(player, linkLeft);
				return card;
			}
		}
	}
	if (linkRight) {
		for (i = 0; i < linkRight.data("xyz_arr").length; i++) {
			if (linkRight.data("xyz_arr")[i].data("id") == data.id) {
				card = linkRight.data("xyz_arr").splice(i, 1)[0];
				card.detach();
				//updateXyzMaterials(player, linkRight);
				return card;
			}
		}
	}
	return null;
}*/

function removeXyzMaterial(player, data, update) {
	var arr = [player.m1, player.m2, player.m3, player.m4, player.m5, linkLeft, linkRight];
	for (var i = 0; i < arr.length; i++) {
		if (!arr[i]) {
			continue
		}
		for (var j = 0; j < arr[i].data("xyz_arr").length; j++) {
			if (arr[i].data("xyz_arr")[j].data("id") == data.id) {
				var card = arr[i].data("xyz_arr").splice(j, 1)[0];
				card.data("isXyzMaterial", false);
				card.detach();
				if (update) {
					updateXyzMaterials(player, arr[i]);
				}
				return card;
			}
		}
	}
	return null;
}

function shuffleDeck(player, data) {
	if (player.main_arr.length == 0) {
		return;
	}
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
	playSound(ShuffleSound);
}

function leftDuel(player, data) {
	addLine(escapeHTML(player.username) + " has left the duel");
	if (player == Player1()) {
		$('#gone1').show();
	}
	else if (player == Player2()) {
		$('#gone2').show();
	}
		$('#rematch_btn').disable(true);
}

function quitDuel(player, data) {
	var message = "";
	var game_type = "duel";
	if (match) {
		game_type = "match";
	}
	/*addLine(escapeHTML(player.username) + " has left the duel");
	if (player == Player1()) {
		$('#gone1').show();
	}
	else if (player == Player2()) {
		$('#gone2').show();
	}*/
	stopCountdown();
	if (duel_active) {
		if (duelist) {
			if (!isPlayer1(data.username)) {
				message = "Your opponent quit the duel. You win the " + game_type + "!";
				if (rated) {
					message += " Your rating has increased by " + data.player1.points;
					//message += " Your rating has increased!";
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
				if (player.opponent.partner) {
					str += " & " + escapeHTML(player.opponent.partner.username) + " win the " + game_type + "!";
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

function gamelossed(player, data) {	
	hideDim();
	if (data.id) {
		if (data.id != duelId) {
			return;
		}
	}
	var message = "";
	var game_type = "duel";
	if (match) {
		game_type = "match";
	}
	if (duelist) {
		if (isPlayer1(player.username)) {
			message = "A judge gave you a " + data.type + " loss.";
			if (rated && data.over) {
				message += " You lose the " + game_type + "! Your rating has decreased by " + -data.player1.points;
			}
			lastJudge = "";
		}
		else {
			message = "A judge gave your opponent a " + data.type + " loss.";
			if (rated && data.over) {
				message += " You win the " + game_type + "! Your rating has increased by " + data.player1.points;
				total_wins++;
			}
		}
		messageE(message);
	}
	else {
		var str = "The duel has ended because a judge gave " + escapeHTML(player.username) + " a " + data.type + " loss.";
		if (data.over) {
			str += "<br><br><br><br>" + escapeHTML(player.opponent.username);
			if (player.opponent.partner) {
				str += " & " + escapeHTML(player.opponent.partner.username) + " win the " + data.type + "!";
			}
			else {
				str += " wins the " + data.type + "!";
			}
		}
		$('#over .body_txt').html(str);
		$('#over').show();
	}
	addLine("A judge gave " + player.username + " a " + data.type + " loss");
	duelOver(data);
}

function loss(player, data) {	
	hideDim();
	var message = "";
	if (duelist) {
		if (isPlayer1(player.username)) {
			message = "You received a " + data.type + " loss for " + data.reason;
		}
		else {
			message = "Your opponent received a " + data.type + " loss for " + data.reason;
		}
		if (rated) {
			if (player.username == player1.username) {
				message += " Your rating has decreased by " + -data.player1.points + ".";
			}
			else {
				message += " Your rating has increased by " + data.player1.points + ".";
			}
		}
		messageE(message);
	}
	else {
		var str = "The duel has ended because " + escapeHTML(player.username) + " received a " + data.type + " loss for " + data.reason + ".";
		if (data.over) {
			str += "<br><br><br><br>" + escapeHTML(player.opponent.username);
			if (player.opponent.partner) {
				str += " & " + escapeHTML(player.opponent.partner.username) + " win the " + data.type + "!";
			}
			else {
				str += " wins the " + data.type + "!";
			}
		}
		$('#over .body_txt').html(str);
		$('#over').show();
	}
	addLine(player.username + " received a " + data.type + " loss for " + data.reason);
	duelOver(data);
}

function gameCanceled(data) {	
	hideDim();
	if (data.id != duelId) {
		return;
	}
	var title = "Game Canceled";
	if (data.type == "match") {
		title = "Match Canceled";
	}
	var message = "The " + data.type + " has been canceled by a judge.";
	if (duelist) {
		if (rated && data.over) {
			message += " Ratings and experiences are unaffected.";
		}
		displayBox(title, message);
		playSound(gameLossSound);
	}
	else {
		$('#over .body_txt').text("The " + data.type + " has been canceled by a judge.");
		$('#over').show();
	}
	addLine("The " + data.type + " has been canceled by a judge");
	duelOver(data);
	if (duelist) {
		$('#draw_btn').val("Offer Draw");
		$('#draw_btn').disable(true);
	}
	else {
		//$('#draw_btn').hide();
			$('#mulligan_btn').hide();
	}
}

function duelOver(data) {
	if (data.username == username) {
		playSound(gameLossSound);
	}
	else {
		playSound(gameWinSound);
	}
	if (switched) {
		switchDuelists(data, "player1", "player2"); // this might be a quick fix
	}
	$('#avatar1 .rating_txt').text(data.player1.rating + "/" + data.player1.experience);
	$('#avatar2 .rating_txt').text(data.player2.rating + "/" + data.player2.experience);
	duel_active = false;
	updateActive(false);
	$('#defeat_btn').disable(true);
	$('#host_loss_btn').disable(true);
		//$('#host_loss_btn').hide(); // adding 4/6/21 because the view replay button is overlayed otherwise // disabling because the replay button is should be the second button, not the third
	$('#opponent_loss_btn').disable(true);
		$('#mulligan_btn').hide();
	$('#reset_btn').hide(); // adding 4/7/21 because the view replay button is overlayed otherwise
	$('#draw_btn').disable(false);
	$('#draw_btn').val("View Replay");
	//if (!duelist && !admin && !adjudicator) { // why?
	if (!duelist) { // why?
		$('#draw_btn').css("top", 590);		// i'm gonna need to be reminded why we move this button up for // it's moved down to the second button for watchers when a game ends
	}
		$('#draw_btn').show();
	
	$('#cancel_duel_btn').disable(true);
		$('#cancel_duel_btn').hide(); // adding 6/1 because View Replay should be here instead.
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
	paused = false;
	$('#pause_btn').val("Pause Game");
	
	$('#done_siding_btn').disable(true);
	$('.all_good').hide();
	
	if (automatic) {
		removeMenuData();
	}
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

function newCard(player, data) {
	var card = newDuelCard(player);
	if (player == player1) {
		card.onRotate(true); // what's this?
	}
	card.data("controller", null);
	//updateController(player, card); // not sure if necessary
	card.data("id", data.id);
	if (data.card) {
		card.data("cardfront").initializeFromData(data.card);
	}
	player.main_arr.push(card);
	player.all_cards_arr.push(card);
	shiftDeck(player);
	switch(data.zone) {
		case "Field Spell":
			activateFieldSpell(player, data);
			break;
		case "S-2":
			if (data.face_down) {
				setST(player, data);
			}
			else {
				activateST(player, data);
			}
			break;
		default:
			placeSkillCard(player, data);
			break;
	}
	loadSleeves(player);
	if (data.back) {
		var skillback = getSkillBack(SKILL_BACKS_START + data.back + '.jpg', data.activation);
		card.find('.cardback').append(skillback);
		card.data("isSkill", true);
	}
}

function getSkillBack(back, activation) {
	var skillback = $('<div class="skillback"></div>');
	var img = $('<img src="' + back + '" width="400" height="580" />');
	
	var skill_txt = $('<span class="skill_txt"></span>');
	skill_txt.text(activation);
	
	skillback.append(img);
	skillback.append(skill_txt);
	return skillback;
}

function placeSkillCard(player, data) {
	var points = [player.skillCardX, player.skillCardY];
	var card = removeCard(player, data);
	card.data("cardfront").reinitialize(data.card);
	card.data("face_down", true);
	player.skillCard = card;
	if (tag_duel) {
		player.partner.skillCard = card;
	}
	var rotY = 180 + ABOUT_ZERO;
	if (data.face_up) {
		card.data("face_down", false);
		rotY = ABOUT_ZERO;
	}
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {left:points[0], top:points[1], scale:0.1485, rotation:player.rot, rotationY:rotY, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
}

function activateSkill(player, data) {
	var card = player.skillCard;
	card.data("cardfront").reinitialize(data.card);
	card.data("face_down", false);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {rotationY:ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
	playSound(Activate);
}

function setSkill(player, data) {
	var card = player.skillCard;
	card.data("cardfront").reinitialize(data.card);
	card.data("face_down", true);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		endAction();
	}});
	playSound(Flip);
}

function addProxy(player, data) {
	console.log('addProxy');
	var card = newDuelCard();
	if (player == player1) {
		card.onRotate(true);
	}
	//card.data("controller", null);
	card.data("controller", player);
	card.data("face_down", true);
	updateController(player, card);
	card.data("owner", player);
	card.data("id", data.id);
	if (data.card) {
		card.data("cardfront").initializeFromData(data.card);
	}
	player.extra_arr.push(card);
	player.all_cards_arr.push(card);
	shiftExtra(player);
	loadSleeves(player);
	endAction();
}

/*function declare(player, data) {
	var spark_mc = createSVGAnimation(spark, "spark", 110, 110, 24, spark.json);
	var card = getFieldCard(player, data);
	var _spark = $('#' + spark_mc.mc.id);
	TweenMax.set(_spark, {"left":parseInt(card.css("left")), "top":parseInt(card.css("top"))});
	TweenMax.to(_spark, 0.95, {onComplete:function(){
		spark_mc.stop();
		_spark.remove();
	}});
	setTimeout(function(){
		endAction();
	}, 300);
	spark_mc.play();
	playSound(Declare);
	if (data.name) {
		addLine(data.username + " declared effect of " + quote(data.name));
	}
	else if (data.log) {
		var str = data.username + " " + data.log.public_log.replace("Declared", "declared");
		if (str.indexOf(" in ") >= 0) {
			str = str.substring(0, str.indexOf(" in "));
		}
		addLine(str);
	}
}*/

/*function declare(player, data) {
	var spark_mc = createSVGAnimation(spark, "spark", 110, 110, 24, spark.json);
	var card = getDuelCard(data.id);
	card.data("cardfront").reinitialize(data.card);
	var delay = 0;
	if (card.data("controller").hand_arr.includes(card) && !(duelist && isPlayer1(player.username))) {
		$('#duel .cards').append(card);
		TweenMax.to(card, 0.5, {"rotationY":ABOUT_ZERO});
		delay = 0.4;
	}
	var _spark = $('#' + spark_mc.mc.id);
	TweenMax.set(_spark, {"left":parseInt(card.css("left")), "top":parseInt(card.css("top"))});
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
		setTimeout(function(){
			endAction();
		}, 300 + (delay * 1.5 * 1000));
	}, delay * 1000);
	if (data.name) {
		addLine(data.username + " declared effect of " + quote(data.name));
	}
	else if (data.log) {
		var str = data.username + " " + data.log.public_log.replace("Declared", "declared");
		if (str.indexOf(" in ") >= 0) {
			str = str.substring(0, str.indexOf(" in "));
		}
		addLine(str);
	}
}*/


function declare(player, data) {
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
		addLine(data.username + " declared effect of " + quote(data.name));
	}
	else if (data.log) {
		var str = data.username + " " + data.log.public_log.replace("Declared", "declared");
		if (str.indexOf(" in ") >= 0) {
			str = str.substring(0, str.indexOf(" in "));
		}
		addLine(str);
	}
}

function stayRevealed(player, data) {
	var delay = 0;
	var card = getDuelCard(data.id);
	card.data("face_up", true);
	card.data("cardfront").reinitialize(data.card);
	$('#duel .cards').append(card);
	restoreHandCards();
	TweenMax.fromTo(card, 0.5, {"rotationY":180}, {"rotationY":ABOUT_ZERO});
	setTimeout(function(){
		organizeHand(card.data("controller"), false, true);
	}, 250);
	setTimeout(function(){
		previewCard(card);
		setTimeout(function(){
			endAction();
		}, 300 + (delay * 1.5 * 1000));
	}, delay * 1000);
}

function stopRevealing(player, data) {
	var card = getDuelCard(data.id);
	card.data("face_up", false);
	card.data("cardfront").reinitialize(data.card);
	var delay = 0.4;
	var rotY = 180 + ABOUT_ZERO;
	if ((show_cards && player == Player1()) || (show_cards == 2)) {
		rotY = ABOUT_ZERO;
	}
	restoreHandCards();
	TweenMax.to(card, 0.5, {"rotationY":rotY});
	setTimeout(function(){
		endAction();
	}, 300 + (delay * 1.5 * 1000));
}

/*function stopRevealing(player, data) {
	var card = getDuelCard(data.id);
	card.data("face_up", false);
	card.data("cardfront").reinitialize(data.card);
	var delay = 0.4;
	var rotY = 180 + ABOUT_ZERO;
	if ((show_cards && player == Player1()) || (show_cards == 2)) {
		rotY = ABOUT_ZERO;
	}
	TweenMax.fromTo(card, 0.5, {"rotationY":ABOUT_ZERO}, {"rotationY":180, "onComplete":function(){
		//organizeHand(card.data("controller"), false, true);
		TweenMax.set(card, {"rotationY":rotY});
	}});
	setTimeout(function(){
		endAction();
	}, 300 + (delay * 1.5 * 1000));
}*/

/*function allGood(player, data) {
	TweenMax.killTweensOf(player.all_good);
	player.all_good.show();
	TweenMax.fromTo(player.all_good, 2, {"scale":1, "alpha":0}, {"scale":1.3, "alpha":1, onComplete:function(){
		player.all_good.hide();
	}});
	endAction();
}*/

/*function allGood(player, data) {
	player.stopTyping();
	player.thinking.hide();
	TweenMax.killTweensOf(player.all_good);
	player.all_good.show();
	TweenMax.fromTo(player.all_good, 2, {"scale":1, "alpha":1}, {"scale":1.3, "ease":Elastic.easeOut.config(3, 0.2)});
	TweenMax.fromTo(player.all_good, 1, {"alpha":1}, {"alpha":0, "delay":1, onComplete:function(){
		player.all_good.hide();
	}});
	setTimeout(function(){
		endAction();
	}, 150);
	playSound(Ok);
}*/

function allGood(player, data) {
	player.stopTyping();
	player.thinking.hide();
	TweenMax.killTweensOf(player.all_good);
	player.all_good.show();
	player.all_good.find('span').hide();
	player.all_good.css("left", 48);
	player.all_good.css("top", 26);
	TweenMax.fromTo(player.all_good, 2, {"scale":1, "alpha":1}, {"scale":1.3, "ease":Elastic.easeOut.config(3, 0.2)});
	if (data.long) {
		player.still_good = true;
		TweenMax.to(player.all_good, 1, {"scale":0.72, "left":83, "top":63, "delay":0.9, "ease":Circ.easeInOut, onComplete:function(){
			stillGood(player, true);
		}});
	}
	else {
		TweenMax.fromTo(player.all_good, 1, {"alpha":1}, {"alpha":0, "delay":1, onComplete:function(){
			player.all_good.hide();
		}});
	}
	setTimeout(function(){
		endAction();
	}, 150);
	playSound(Ok);
}

/*function stillGood(player, b) {
	if (!$('#duel').is(":visible")) {
		return;
	}
	if (!player.still_good) {
		return;
	}
	if (!b && !player.all_good.is(":visible")) {
		return;
	}
	player.all_good.show();
	player.all_good.find('span').show();
		player.all_good.css("opacity", 1);
		TweenMax.set(player.all_good, {"scale":0.72});
	TweenMax.set(player.all_good, {"left":83, "top":63});
	TweenMax.fromTo(player.all_good, 2, {"scale":0.72}, {"scale":0.8, "ease":Elastic.easeOut.config(3, 0.2), onComplete:function(){
		stillGood(player);
	}});
}*/

function stillGood(player, b) {
	if (!$('#duel').is(":visible")) {
		return;
	}
	if (!player.still_good) {
		return;
	}
	if (!b && !player.all_good.is(":visible")) {
		return;
	}
	player.all_good.show();
	player.all_good.find('span').show();
		player.all_good.css("opacity", 1);
		TweenMax.set(player.all_good, {"scale":0.72});
	TweenMax.set(player.all_good, {"left":83, "top":63});
	TweenMax.fromTo(player.all_good, 1.6, {"scale":0.72}, {"scale":0.8, "ease":Expo.easeInOut, onComplete:function(){
		TweenMax.fromTo(player.all_good, 1.6, {"scale":0.8}, {"scale":0.72, "ease":Expo.easeInOut, onComplete:function(){
			stillGood(player);
		}});
	}});
}

function stopGood(player) {
	player.still_good = false;
	TweenMax.killTweensOf(player.all_good);
		TweenMax.set(player.all_good, {"scale":0.8});
	TweenMax.to(player.all_good, 0.2, {"scale":1, "ease":Expo.easeInOut, onComplete:function(){
		TweenMax.to(player.all_good, 0.3, {"scale":0.3, "alpha":0, "ease":Expo.easeInOut});
		endAction();
	}});
}

function typingE(player) {
	player.typingE();
	TweenMax.fromTo(player.bubbles, 0.25, {scale:0.45, alpha:0.75}, {scale:1, alpha:1});
}

function thinking(player, data) {
	player.still_good = false;
	player.all_good.hide();

	TweenMax.killTweensOf(player.thinking);
	player.thinking.show();
	TweenMax.fromTo(player.thinking, 1, {"scale":1, "alpha":1}, {"scale":1.3, "ease":Elastic.easeOut.config(1.2, 0.3)});
	//TweenMax.fromTo(player.thinking, 0.6, {"scale":0.2, "alpha":0}, {"alpha":1, "scale":1.3, "ease":Expo.easeOut});
	//TweenMax.fromTo(player.thinking, 1, {"alpha":1}, {"alpha":0, "delay":1, onComplete:function(){
	//	player.thinking.hide();
	//}});
	setTimeout(function(){
		//endAction();
	}, 150);
	//playSound(Ok);
}

function initalizeCards(player, data) {
	for (var i = 0; i < data.deck.length; i++) {
		for (var j = 0; j < player1.all_cards_arr.length; j++) {
			if (player1.all_cards_arr[j].data("id") == data.deck[i].id) {
				if (!player1.all_cards_arr[j].data("cardfront").initialized) {
					player1.all_cards_arr[j].data("cardfront").initializeFromData(data.deck[i].data);
				}
			}
		}
		for (j = 0; j < player2.all_cards_arr.length; j++) {
			if (player2.all_cards_arr[j].data("id") == data.deck[i].id) {
				if (!player2.all_cards_arr[j].data("cardfront").initialized) {
					player2.all_cards_arr[j].data("cardfront").initializeFromData(data.deck[i].data);
				}
			}
		}
	}
}

function hidePhases() {
	$('#dp .phase_red').hide();
	$('#sp .phase_red').hide();
	$('#m1 .phase_red').hide();
	$('#bp .phase_red').hide();
	$('#m2 .phase_red').hide();
	$('#ep .phase_red').hide();
	
	$('#dp .phase_blue').hide();
	$('#sp .phase_blue').hide();
	$('#m1 .phase_blue').hide();
	$('#bp .phase_blue').hide();
	$('#m2 .phase_blue').hide();
	$('#ep .phase_blue').hide();
	
	$('#dp .white_txt').hide();
	$('#sp .white_txt').hide();
	$('#m1 .white_txt').hide();
	$('#bp .white_txt').hide();
	$('#m2 .white_txt').hide();
	$('#ep .white_txt').hide();
}

function changeDarks() {
	if (turn_player == Player1()) {
		$('#dp .phase_dark_red').show();
		$('#sp .phase_dark_red').show();
		$('#m1 .phase_dark_red').show();
		$('#bp .phase_dark_red').show();
		$('#m2 .phase_dark_red').show();
		$('#ep .phase_dark_red').show();

		$('#dp .phase_dark_blue').hide();
		$('#sp .phase_dark_blue').hide();
		$('#m1 .phase_dark_blue').hide();
		$('#bp .phase_dark_blue').hide();
		$('#m2 .phase_dark_blue').hide();
		$('#ep .phase_dark_blue').hide();
	}
	else {
		$('#dp .phase_dark_red').hide();
		$('#sp .phase_dark_red').hide();
		$('#m1 .phase_dark_red').hide();
		$('#bp .phase_dark_red').hide();
		$('#m2 .phase_dark_red').hide();
		$('#ep .phase_dark_red').hide();
		
		$('#dp .phase_dark_blue').show();
		$('#sp .phase_dark_blue').show();
		$('#m1 .phase_dark_blue').show();
		$('#bp .phase_dark_blue').show();
		$('#m2 .phase_dark_blue').show();
		$('#ep .phase_dark_blue').show();
	}
}

function startTurn() {
	console.log('startTurn');
	//console.log('first, turn_player = ' + turn_player.username + ', turn_player.opponent = ' + turn_player.opponent.username + ', players[0] = ' + players[0].username + ', players[1] = ' + players[1].username);

	awaiting_start_turn = false;
	turn_player.opponent = players[players.length - 1];
	turn_player.opponent.opponent = turn_player;
	
	
	
	//console.log('turn_player = ' + turn_player.username);
	//console.log('opponent = ' + turn_player.opponent.username);
	
	
	
	turnCount++;
	changeDarks();
	if (!duelist) {
		$('#turn').show();
		$('#turn .red').hide();
		if (isPlayer1(turn_player.username)) {
			$('#turn .red').show();
		}
	}
	
	initPhases();
	
	if (tag_duel && turnCount > 1) {
		shiftPlayersE(true);
		for (var i = 0; i < turn_player.all_cards_arr.length; i++) {
			updateOwner(turn_player, turn_player.all_cards_arr[i]);
		}
		for (var i = 0; i < turn_player.opponent.all_cards_arr.length; i++) {
			//updateOwner(turn_player.opponent, turn_player.all_cards_arr[i]);
			if (turn_player.opponent.all_cards_arr[i].data("controller") == turn_player.partner) {
				updateController(turn_player, turn_player.opponent.all_cards_arr[i]);
			}
		}
		/*for (var i = 0; i < turn_player.all_cards_arr.length; i++) {
			updateOwner(turn_player, turn_player.all_cards_arr[i]);
			if (player1 == turn_player && turn_player.all_cards_arr[i].data("cardfront").data("name") == "Atlantean Heavy Infantry") {
				messageE("You now own Atlantean Heavy Infantry at " + i);
			}
			if (turn_player.all_cards_arr[i].data("controller") == turn_player.partner) {
				console.log('now setting ' + turn_player.all_cards_arr[i].data("cardfront").data("name") + 's controller to ' + turn_player.username);
				updateController(turn_player, turn_player.all_cards_arr[i]);
			}
			else {
				console.log('passing over ' + turn_player.all_cards_arr[i].data("cardfront").data("name"));
			}
			//updateController(turn_player, turn_player.all_cards_arr[i]); // idk if this is necessary // actually, you would NOT want this enabled, otherwise it would make the turn_players card's on the opponent's field theirs
		}*/
		/*for (var i = 0; i < turn_player.all_cards_arr.length; i++) {
			if (turn_player.all_cards_arr[i].controller == turn_player || turn_player.all_cards_arr[i].controller == turn_player.partner) {
				updateOwner(turn_player, turn_player.all_cards_arr[i]);
				updateController(turn_player, turn_player.all_cards_arr[i]); // idk if this is necessary
			}
		}*/
	}
	else {
		if (automatic) {
			endAction();
		}
		else {
			enterDP();
		}
	}
	
	//console.log('then, turn_player = ' + turn_player.username + ', turn_player.opponent = ' + turn_player.opponent.username + ', players[0] = ' + players[0].username + ', players[1] = ' + players[1].username);
}


/*

function blahh() {
	for (var i = 0; i < turn_player.opponent.all_cards_arr.length; i++) {
		if (turn_player.opponent.all_cards_arr[i] == player1.s2) {
			console.log('yes, found ' + turn_player.opponent.all_cards_arr[i].data("cardfront").data("name"));
			console.log(turn_player.opponent.all_cards_arr[i].data("controller") == turn_player.partner);
			console.log('turn_player.opponent.all_cards_arr[i].data("controller").username = ' + turn_player.opponent.all_cards_arr[i].data("controller").username);
			console.log('turn_player.partner.username = ' + turn_player.partner.username);
		}
	}
}
blahh();

player1.s2.data("controller").username;


*/
function initPhases() {
	$('#end_turn').hide();
	if (duelist && turn_player.username == username) {
		$('#dp').click(enterDPE);
		$('#sp').click(enterSPE);
		$('#m1').click(enterM1E);
		$('#bp').click(enterBPE);
		$('#m2').click(enterM2E);
		$('#ep').click(enterEPE);
		
		if (!automatic) {
			$('.phase').css("pointer-events", "auto");
			$('#end_turn').css("pointer-events", "auto");
		}
		
		$('#end_turn .green').hide();
		$('#end_turn .yellow').hide();
		$('#end_turn .white_glow').hide();
		$('#start_turn').hide();
		stopStartTurn();
		if (duelFormat != "so") {
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
	}
	else {
		$('.phase').css("pointer-events", "none");
	}
}

function enterDP() {
	hidePhases();
	currentPhase = "DP";
	changeLight($('#dp'));
	endAction();
}

function enterSP() {
	hidePhases();
	currentPhase = "SP";
	changeLight($('#sp'));
	endAction();
}

function enterM1() {
	hidePhases();
	currentPhase = "M1";
	changeLight($('#m1'));
	endAction();
}

function enterBP() {
	hidePhases();
	currentPhase = "BP";
	changeLight($('#bp'));
	endAction();
}

function enterM2() {
	hidePhases();
	currentPhase = "M2";
	changeLight($('#m2'));
	endAction();
}

function enterEP() {
	hidePhases();
	currentPhase = "EP";
	changeLight($('#ep'));
	endAction();
}

function endTurn(data) {
	if (duelist && data.username == username) {
		$('#dp').off("click", enterDPE);
		$('#sp').off("click", enterSPE);
		$('#m1').off("click", enterM1E);
		$('#bp').off("click", enterBPE);
		$('#m2').off("click", enterM2E);
		$('#ep').off("click", enterEPE);
		$('.phase').css("pointer-events", "none");
		$('#end_turn').css("pointer-events", "none");
		$('#end_turn .yellow').show();
		$('#end_turn .white_glow').show();
	}
	hidePhases();
	currentPhase = "";
	
	
	//console.log('so, players[0] = ' + players[0].username + ', players[1] = ' + players[1].username);
	
	players.push(players.splice(0, 1)[0]);
	
	//console.log('now, players[0] = ' + players[0].username + ', players[1] = ' + players[1].username);
	
	showStartTurn();
	
	
	playSound(TurnChime);
	endAction();
}

function showStartTurn() {
	if (duelist && players[0].username == username && !currentPhase) {
		$('#start_turn').show();
		setText($('#start_turn .start_turn_txt'));
		playStartTurn();
	}
}

function changeLight(obj) {
	if (turn_player == Player1()) {
		obj.find('.phase_red').show();
	}
	else {
		obj.find('.phase_blue').show();
	}
	obj.find('.white_txt').show();
	obj.addClass("active");
	if (!duelist) {
		$('#turn').show();
	}
	if (currentPhase != "DP") {
		playSound(Switch);
	}
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
		if (player.lifepoints <= 0) {
			playSound(LifePointsEnd);
		}
		endAction();
	}});
	animation = setInterval(function(){
		life_bar.find('.life_txt').text(prev_life + Math.floor(lifepoints_tween.progress() * life_amount));
	}, 42);
	playSound(LifePoints);
}

function setupDuelField() {
	counters = [m1_counter, m2_counter, m3_counter, m4_counter, m5_counter, s1_counter, s2_counter, s3_counter, s4_counter, s5_counter, pendulum_left_counter, pendulum_right_counter, field_spell_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_m4_counter, opp_m5_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_s4_counter, opp_s5_counter, opp_pendulum_left_counter, opp_pendulum_right_counter, opp_field_spell_counter];
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
	
	$('#dp').css("left", 344);
	$('#sp').css("left", 403);
	$('#m1').css("left", 462);
	$('#bp').css("left", 521);
	$('#m2').css("left", 580);
	$('#m2').show();
	$('#ep').css("left", 639);
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
	//$('#plus_btn, #minus_btn').css("left", 579.5);
	$('#plus_btn, #minus_btn').css("left", 576.5);
	$('#plus_btn, #minus_btn').css("top", 307);
	$('#plus_btn, #minus_btn').css("transform", "scale(1)");
	$('#minus_bg').css("left", 571.5);
	$('#turn').css("left", 615);
	$('#start_turn').css("left", 615);
	$('#end_turn').css("left", 615);
	
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
	
	setupNumbers();
	
	$('#field_spell_counter').css("top", 362.5);
	
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
	$('#deck_hidden').css("top", 486.5);
	$('#grave_hidden').css("left", 769.5);
	$('#grave_hidden').css("top", 293.5);
	$('#banished_hidden').css("left", 702.5);
	$('#extra_hidden').css("top", 486.5);
	$('#opp_deck_hidden').css("top", 0);
	$('#opp_grave_hidden').css("left", 207.5);
	$('#opp_grave_hidden').css("top", 199.5);
	$('#opp_banished_hidden').css("left", 274.5);
	$('#opp_extra_hidden').css("top", 7.5);
	$('#link_left_hidden').hide();
	$('#link_right_hidden').hide();
	
	$('#m1_select').css("left", 287);
	$('#m2_select').css("left", 380);
	$('#m3_select').css("left", 473);
	$('#m4_select').show();
	$('#m5_select').show();
	
	$('#m1_select2').css("left", 659);
	$('#m2_select2').css("left", 566);
	$('#m3_select2').css("left", 473);
	$('#m4_select2').show();
	$('#m5_select2').show();
	
	$('#s1_select').css("left", 287);
	$('#s2_select').css("left", 380);
	$('#s3_select').css("left", 473);
	$('#s4_select').show();
	$('#s5_select').show();
	$('#link_left_select').show();
	$('#link_right_select').show();
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
	
	setupNumbers();
	
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
	
	$('#m1_select2').css("left", 659);
	$('#m2_select2').css("left", 566);
	$('#m3_select2').css("left", 473);
	$('#m4_select2').show();
	$('#m5_select2').show();
	
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
	
	setupNumbers();
	
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
	
	$('#m1_select2').css("left", 623);
	$('#m2_select2').css("left", 473);
	$('#m3_select2').css("left", 323);
	$('#m4_select2').hide();
	$('#m5_select2').hide();
	
	$('#s1_select').css("left", 323);
	$('#s2_select').css("left", 473);
	$('#s3_select').css("left", 623);
	$('#s4_select').hide();
	$('#s5_select').hide();
	$('#link_left_select').hide();
	$('#link_right_select').hide();
}

function setupDuelFieldRush() {
	counters = [m1_counter, m2_counter, m3_counter, s1_counter, s2_counter, s3_counter, field_spell_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_field_spell_counter];
	$('#dp').css("left", 344);
	$('#sp').hide();
	$('#m1').css("left", 442);
	$('#bp').css("left", 541);
	$('#m2').hide();
	$('#ep').css("left", 639);
}

function setupNumbers() {
	if (speed || rush) {
		$('#cid1_txt').css("top", 492.5);
		$('#cid2_txt').css("top", 57.5);
		$('#cig1_txt').css("left", 771.5);
		$('#cig1_txt').css("top", 367.5);
		$('#cig2_txt').css("left", 209.5);
		$('#cig2_txt').css("top", 182.75);
		$('#cib1_txt').css("left", 771.5);
		$('#cib2_txt').css("left", 209.5);
		$('#cie1_txt').css("top", 492.5);
		$('#cie2_txt').css("top", 57.5);
	}
	else if (links) {
		$('#cid1_txt').css("left", 771.5);
		$('#cid1_txt').css("top", 492.5);
		$('#cig1_txt').css("left", 756);
		$('#cig1_txt').css("top", 367.5);
		$('#cib1_txt').css("left", 770.5);
		$('#cib1_txt').css("top",275.5);
		$('#cie1_txt').css("left", 209);
		$('#cie1_txt').css("top", 492.5);
		$('#cid2_txt').css("left", 209.5);
		$('#cid2_txt').css("top", 57.5);
		$('#cig2_txt').css("left", 224);
		$('#cig2_txt').css("top", 182.75);
		$('#cib2_txt').css("left", 209.5);
		$('#cib2_txt').css("top", 275.5);
		$('#cie2_txt').css("left", 771.5);
		$('#cie2_txt').css("top", 57.5);
	}
	else {
		$('#cid1_txt').css("left", 771.5);
		$('#cid1_txt').css("top", 515);
		$('#cig1_txt').css("left", 771.5);
		$('#cig1_txt').css("top", 321.5);
		$('#cib1_txt').css("left", 704.5);
		$('#cib1_txt').css("top", 275.5);
		$('#cie1_txt').css("left", 209);
		$('#cie1_txt').css("top", 496);
		$('#cid2_txt').css("left", 209.5);
		$('#cid2_txt').css("top", 36);
		$('#cig2_txt').css("left", 209.5);
		$('#cig2_txt').css("top", 229);
		$('#cib2_txt').css("left", 276.5);
		$('#cib2_txt').css("top", 275.5);
		$('#cie2_txt').css("left", 771.5);
		$('#cie2_txt').css("top", 36);
	}
}

function resetDuelButtons() {
	if (duelist) {
		$('#defeat_btn').show();
		$('#defeat_btn').disable(false);
		$('#draw_btn').show();
		$('#draw_btn').disable(false);
		$('#rematch_btn').hide();
		$('#rematch_btn').disable(false);
		if (!awaiting_admin) {
			$('#call_admin_btn').show();
		}
		if (rated || automaticTourney) {
			$('#call_admin_btn').disable(false);
		}
		$('#call_admin_btn').val("Call Judge");
	}
	if (admin || adjudicator) {
		$('#host_loss_btn').disable(false);
		$('#opponent_loss_btn').disable(false);
		$('#cancel_duel_btn').disable(false);
		$('#cancel_duel_btn').show();
	}
	$('#siding_btn').hide();
	$('#swap_btn').hide();
	$('#reset_btn').hide();
	$('#rematch_btn').val("Offer Rematch");
	$('#draw_btn').val("Offer Draw");
	$('.duel_status .status_txt').text("");
	$('.duel_status .aura').hide();
	viewing = "";
}

function setPartner(player, partner) {
	player.grave_arr = partner.grave_arr;
	player.banished_arr = partner.banished_arr;
	player.field_arr = partner.field_arr;
	partner.all_cards_arr = partner.all_cards_arr.concat(player.all_cards_arr);
	player.all_cards_arr = partner.all_cards_arr;
	player.m1_txt = partner.m1_txt;
	player.m2_txt = partner.m2_txt;
	player.m3_txt = partner.m3_txt;
	player.m4_txt = partner.m4_txt;
	player.m5_txt = partner.m5_txt;
}

function Player1() {
	if (player1 == turn_player || player1 == turn_player.opponent) {
		return player1;
	}
	if (tag_duel) {
		if (player3 == turn_player || player3 == turn_player.opponent) {
			return player3;
		}
	}
	return player1;
}

function Player2() {
	if (player2 == turn_player || player2 == turn_player.opponent) {
		return player2;
	}
	if (tag_duel) {
		if (player4 == turn_player || player4 == turn_player.opponent) {
			return player4;
		}
	}
	return player2;
}

function isPlayer1(str) {
	if (str == player1.username || (tag_duel && str == player3.username)) {
		return true;
	}
	return false;
}

function isPlayer2(str) {
	if (str == player2.username || (tag_duel && str == player4.username)) {
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
	playSound(DiceSound);
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
	playSound(CoinStart);
	playSound(CoinFlip);
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
		if (~~!!a.adjudicator > ~~!!b.adjudicator) {
			return -1;
		}
		if (~~!!a.adjudicator < ~~!!b.adjudicator) {
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
	if (data.admin > 0) {
		addClass(cell, "isAdmin");
		addClass(cell, "admin" + data.admin);
	}
	if (data.adjudicator) {
		addClass(cell, "adjudicator");
	}
	if (data.donator) {
		addClass(cell, "donator");
		$(cell).find('span').html(colorize(data.username));
	}
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
	//saveVSP();
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
	//restoreWatchersVSP();
}

function saveWatchChatVSP() {
	watch_chat_vsp = $('#watch_chat .cout_txt').scrollTop();
	var maxVSP = $('#watch_chat .cout_txt').scrollMax();
	if (watch_chat_vsp >= maxVSP - 80 || maxVSP < 0) {
		//watch_chat_vsp = Infinity;
		watch_chat_vsp += 1000;
	}
}

function restoreWatchChatVSP() {
	$('#watch_chat .cout_txt').scrollTop(watch_chat_vsp);
}

function watchChatPrint(data) {
	if (blocked_arr.indexOf(data.username) >= 0) {
		return;
	}
	saveWatchChatVSP();
	var color = "#0000FF";
	if (data.color) {
		color = "#" + data.color;
	}
	if (username == data.username) {
		if (color == "#0000FF") {
			color = "#FF0000";
		}
	}
	if (!data.html) {
		data.message = escapeHTMLWithLinks(data.message);
	}
	$('#watch_chat .cout_txt').append('<b><font color="' + color + '">' + escapeHTML(data.username) + ": </font></b><font>" + data.message + '</font><br>');
	restoreWatchChatVSP();
	watch_chat_limit++;
}

function watchChatLoaded(data) {
	var str = "";
	saveWatchChatVSP();
	stopChatCycle($('#watch_chat_cycle'));
	for (var i = 0; i < data.messages.length; i++) {
		if (blocked_arr.indexOf(data.messages[i].username) >= 0) {
			continue;
		}
		if (data.messages[i].username == username && data.messages[i].color == "0000FF") {
			data.messages[i].color = "FF0000";
		}
		if (!data.messages[i].hidden) {
			if (!data.messages[i].html) {
				data.messages[i].message = escapeHTMLWithLinks(data.messages[i].message);
			}
			str += '<font color="#' + data.messages[i].color + '"><b>' + escapeHTML(data.messages[i].username) + ': </b></font><font>' + data.messages[i].message + '</font><br>';
		}
	}
	$('#watch_chat .cout_txt').html(str);
	restoreWatchChatVSP();
}

function exitDueling() {
	$('#field').hide();
	$('#duel .card').detach();
		$('.all_good').hide();
	recycleCards();
	removeFieldSpellPic();
}

function initSiding(data) {
	gotoDuel("siding");
	killAllTweens();
	actionsQueue = [];
	duel_active = true;
	if (!duelist) {
		$('#draw_btn').hide();
			$('#mulligan_btn').hide();
	}
	/*for (var i = 0; i < deck_arr.length; i++) {
		if (deck_arr[i].data("custom")) {
			deck_arr[i].reset();
		}
	}*/
	hideDim();
	hideDuelOver();
	removeCardMenu();
	clearDeck();
	exitDueling();
	$('#done_siding1').hide();
	$('#done_siding2').hide();
	$('#lifepoints1').hide();
	$('#lifepoints2').hide();
	$('#status1 .status_txt').text("");
	$('#status2 .status_txt').text("");
	$('#skill_bg').hide();
	$('#skill_btn').hide();
	games++;
	if (duelist) {
		$('#done_siding_btn').show();
		$('#done_siding_btn').disable(false);
		$('#siding_btn').hide();
		$('#swap_btn').show();
		$('#swap_btn').disable(true);
		$('#reset_btn').show();
		$('#reset_btn').disable(false);
		$('#defeat_btn').hide();
		$('#draw_btn').hide();
			$('#mulligan_btn').hide();
		$('#siding_in_progress').hide();
		$('#rematch_btn').hide();
		$('#call_admin_btn').show();
		$('#call_admin_btn').disable(!rated && !automaticTourney);
		updateActive(true);
		deck_holes_arr = [];
		side_holes_arr = [];
		extra_holes_arr = [];
		sidingMainArr = [];
		sidingSideArr = [];
		sidingExtraArr = [];
		sidingMainTotal = 0;
		sidingSideTotal = 0;
		sidingExtraTotal = 0;
		if (speed) {
			$('#skill_bg').show();
			$('#skill_btn').show();
		}
	}
	else {
		$('#siding_in_progress').show();
		$('#done_siding_btn').hide();
	}
	if (admin || adjudicator) {
		$('#host_loss_btn').disable(false);
		$('#opponent_loss_btn').disable(false);
		$('#cancel_duel_btn').disable(false);
		$('#cancel_duel_btn').show();
	}
	/*if (duelist) {
		createSidingHoles(data);
		initSideCardFromData(data);
	}*/
}

function Phase(str) {
	var phase = $('<div id="' + str + '" class="phase"></div>');
	var background = $('<img class="background" src="' + IMAGES_START + 'svg/phase_background.svg" />');
	var phase_dark_blue = $('<img class="phase_dark_blue" src="' + IMAGES_START + 'svg/phase_dark_blue.svg" />');
	var phase_dark_red = $('<img class="phase_dark_red" src="' + IMAGES_START + 'svg/phase_dark_red.svg" />');
	var phase_blue = $('<img class="phase_blue phase_lit" src="' + IMAGES_START + 'svg/phase_blue.svg" />');
	var phase_red = $('<img class="phase_red phase_lit" src="' + IMAGES_START + 'svg/phase_red.svg" />');
	var gray_txt = $('<span class="gray_txt arial_rounded25">' + str.toUpperCase() + '</span>');
	var white_txt = $('<span class="white_txt arial_rounded25">' + str.toUpperCase() + '</span>');
	
	phase.append(background);
	phase.append(phase_dark_blue);
	phase.append(phase_dark_red);
	phase.append(phase_blue);
	phase.append(phase_red);
	phase.append(gray_txt);
	phase.append(white_txt);
	return phase;
}

function Counter(str) {
	var counter = $('<div class="counter"></div>');
	if (str) {
		counter.attr("id", str);
	}
	var content = $('<div class="content"></div>');
	var background = $('<img class="background" src="' + IMAGES_START + 'svg/counter.svg" />');
	var glow = $('<img class="glow" src="' + IMAGES_START + 'svg/counter_glow.svg" />');
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

function removePermission() {
	if ($('#status1 .status_txt').text() == "Waiting for permission") {
		$('#status1 .status_txt').text("");
	}
	if ($('#status2 .status_txt').text() == "Waiting for permission") {
		$('#status2 .status_txt').text("");
	}
}

function updateViewing() {
	switch (viewing) {
		case "Deck":
			viewCards(Player1().main_arr);
			break;
		case "Graveyard":
			viewCards(player1.grave_arr);
			break;
		case "Banished":
			viewCards(player1.banished_arr);
			break;
		case "Extra Deck":
			viewCards(Player1().extra_arr);
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
			viewCards(player1.opponent.grave_arr);
			break;
		case "Opponent's Banished":
			viewCards(player1.opponent.banished_arr);
			break;
		case "Opponent's Hand":
			viewCards(Player1().opponent.hand_arr);
			break;
		case "Xyz Materials":
			viewCards(viewing_card_with_materials.data("xyz_arr"));
			break;
	}
}

function questionE(card) {
	if (card.data("cardfront").data("name") == "Question") {
		if (duel_log.is(":visible")) {
			toggleDuelLog();
		}
		$('#log_btn').hide();
		if (watch_chat.is(":visible")) {
			toggleWatchersChat();
		}
		$('#watchers_btn').hide();
	}
}

function unquestionE(card) {
	if (card.data("cardfront").data("name") == "Question") {
		if (duelist) {
			$('#log_btn').show();
		}
		$('#watchers_btn').show();
	}
}

function stopViewing(data) {
	if (duelist && data.username == username) {
		switch (data.viewing) {
			case "Deck (Picking Card)":
			case "Deck (Picking 2 Cards)":
			case "Deck (Picking 3 Cards)":
			case "Deck (Picking 4 Cards)":
				if (next_callback == "Place cards on top of deck randomly") {
					break;
				}
			case "Deck":
				//Send({"action":"Duel", "play":"Shuffle deck"});
				break;
			case "Opponent's Hand":
				for (var i = 0; i < Player2().hand_arr.length; i++) {
					//if (Player2().hand_arr[i].front_mc.stage) {
						TweenMax.to(Player2().hand_arr[i], 0, {rotationY:180 + ABOUT_ZERO});
						//Player2().hand_arr[i].rotationY = 180;
						Player2().hand_arr[i].onRotate();
					//}
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

function maximizeWatchers() {
	var num = $('#watchers .cell').length * 20;
	if (num > 172) {
		num = 172;
	}
	if ($('#watchers .cell').length > 2) {
		$('#watchers .users').css("height", num);
		$('#chat_buttons').hide();
		if ($('#watchers .cell').length <= 8) {
			$('#watchers .users').addClass("maximized");
		}
	}
}

function minimizeWatchers() {
	$('#watchers .users').css("height", 50);
	$('#watchers .users').removeClass("maximized");
	$('#watchers .users').scrollTop(watchers_vsp);
	$('#chat_buttons').show();
}

function watchersScrollE() {
	watchers_vsp = $('#watchers .users').scrollTop();
	var maxVSP = $('#watchers .users').scrollMax();
	if (watchers_vsp >= maxVSP) {
		watchers_vsp += 1000;
	}
}

function watchersMoveE(e) {
	updateMouse(e);
	if (parseInt($('#watchers .users').css("height")) > 50) {
		watchers_vsp = mouseYScaled - parseInt($('#watchers').css("top")) + $('#watchers .users').scrollTop() - 10;
	}
}

function toggleWatchersChat() {
	determineChatX($('#watch_chat'));
	if ($('#watch_chat').is(':visible')) {
		$('#watch_chat').hide();
	}
	else {
		$('#watch_chat').show();
		$('#chats').append($('#watch_chat'));
		restoreWatchChatVSP();
		$('#watch_chat .cin_txt').focus();
		setupInput($('#watch_chat .cin_txt'));
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

function findCard(arr, hand, grave, like) {
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

function findEffect(effect) {
	var cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell, linkLeft, linkRight, player1.skillCard, player2.skillCard];
	var arr = [player1.hand_arr, player1.grave_arr, player1.banished_arr, player1.opponent.grave_arr, player1.opponent.banished_arr];
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			cards.push(arr[i][j]);
		}
	}
	for (i = 0; i < cards.length; i++) {
		if (cards[i]) {
			if (str(cards[i].data("cardfront").data("effect")).indexOf(effect) >= 0) {
				return true;
			}
		}
	}
	return false;
}

function showE(str, data) {
	var arr = [];
	switch (str) {
		case "Opponent's Deck":
			arr = Player1().opponent.main_arr;
			break;
		case "Opponent's Deck (partial)":
		case "Opponent's Deck (Top 3 Cards)":
			removePermission();
			//for (var i = 0; i < 3; i++) {
			//for (var i = 0; i < data.deck.length; i++) { // breaks replays
			for (var i = 0; i < getAmount(3, data); i++) { // breaks replays
				arr.push(Player1().opponent.main_arr[i]);
			}
			break;
		case "Opponent's Deck (Top 5 Cards)":
			removePermission();
			//for (i = 0; i < 5; i++) {
			//for (i = 0; i < data.deck.length; i++) {
			for (i = 0; i < getAmount(5, data); i++) {
				arr.push(Player1().opponent.main_arr[i]);
			}
			break;
		case "Opponent's Deck (Top 1 Cards)":
			removePermission();
			//for (i = 0; i < 1; i++) {
			//for (i = 0; i < data.deck.length; i++) {
			for (i = 0; i < getAmount(1, data); i++) {
				arr.push(Player1().opponent.main_arr[i]);
			}
			break;
		case "Opponent's Hand":
			arr = Player1().opponent.hand_arr;
			break;
		case "Opponent's Extra Deck":
			arr = Player1().opponent.extra_arr;
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
	
	function getAmount(num, data) {
		if (!data || !data.deck) {
			return num;
		}
		return ~~data.deck.length;
	}
}

function duelStart(data) {
	log('duelStart');
	exitTP();
	gotoDueling();
	turnCount = 0;
	TweenMax.fromTo([$('#duel #field_content'), $('#' + currentLabel)], 0.75, {alpha:0}, {alpha:1, delay:0.5, ease:Linear.easeNone, onComplete:function(){
		if (duelist) {
			firstCards = data.cards;
		}
		shiftDecks(); // can this just be here?
		if (solo) {
			//shiftDecks();
			turn_player = getPlayer(username);
		}
		actionsQueue.push(simultaneousDraw);
		actionsQueue.push(simultaneousDraw);
		actionsQueue.push(simultaneousDraw);
		if (!speed && !rush) {
			actionsQueue.push(simultaneousDraw);
			actionsQueue.push(simultaneousDraw);
		}
		if (rush) {
			actionsQueue.push(simultaneousDraw);
		}
		actionsQueue.push(function(){
			if (!solo) {
				$('#cig2_txt').show();
				$('#cib2_txt').show();
			}
			$('#cig1_txt').show();
			$('#cib1_txt').show();
			TweenMax.fromTo([$('#cig2_txt'), $('#cib2_txt'), $('#cig1_txt'), $('#cib1_txt')], 1, {alpha:0}, {alpha:1});
			startTurn();
			if (!$(':focus')[0]) {
				duelFocus = $('#duel .cin_txt');
				duelFocus.focus();
			}
			if (duelist) {
				Send({"action":"Duel", "play":"Ready", "status":"Dueling", "shuffle":$('#auto_shuffle_cb').is(":checked") || !$('#auto_shuffle_cb').is(":visible")});
			}
			
			
			
				if (duelist && !solo && $('#mulligan_btn').length == 1) {
					$('#mulligan_btn').show();
					$('#mulligan_btn').disable(false);
					$('#draw_btn').hide();
				}
		});				
		stopQueue = false;
		performNextAction();
		$('#field').css("pointer-events", "auto");
	}});
}

function simultaneousDraw() {
	console.log('simultaneousDraw');
	var card;
	if (Player1().main_arr.length > 0) {
		var card1 = removeTopCardFromDeck(Player1());
		card = card1;
		Player1().hand_arr.push(card1);
		determineHandPosition(Player1());
		organizeHand(Player1());
		var rotY = 180 + ABOUT_ZERO;
		if (player1.username == username) {
			rotY = ABOUT_ZERO;
			//card1.data("cardfront").initializeFromData(firstCards[0]);
			card1.data("cardfront").reinitialize(firstCards[0]);
		}
		console.log('rotY = ' + rotY);
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
		TweenMax.to(card2, easeSeconds, {left:handDestination, top:player2.handY, scale:0.25, rotation:player2.rot, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone});
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
	playSound(DrawSound);
}

function switchDuelists(data, playerA, playerB, playerC, playerD) {
	var pA = JSON.parse(JSON.stringify(data[playerA]));
	var pB = JSON.parse(JSON.stringify(data[playerB]));
	data[playerB] = pA;
	data[playerA] = pB;
	if (playerC) {
		var pC = JSON.parse(JSON.stringify(data[playerC]));
		var pD = JSON.parse(JSON.stringify(data[playerD]));
		data[playerD] = pC;
		data[playerC] = pD;
	}
}

/*function isExtraDeckCard(card) {
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
}*/

/*function showFaceDownCards() {
	$('#view .card').each(function(){
		var card = $(this);
		if (card.data("face_down")) {
			card.data("cardfront").show();
			TweenMax.fromTo(card.data("cardfront"), 0.5, {alpha:0}, {alpha:1});
		}
	});
}

function hideFaceDownCards() {
	return;
	$('#view .card').each(function(){
		var card = $(this);
		if (card.data("face_down")) {
			TweenMax.to(card.data("cardfront"), 0.5, {alpha:0, onComplete:function(){
				if (card.data("face_down")) {
					card.data("cardfront").hide();
				}
				else {
					TweenMax.set(card.data("cardfront"), {alpha:1});
				}
			}});
		}
	});
}*/

function showFaceDownCards() {
	$('#view .card').each(function(){
		if ((duelist || admin || show_cards) && viewing == "Banished" && $(this).data("face_down") && $(this).data("cardfront").data("initialized")) {
			$(this).data("cardfront").show();
		}
	});
}

function hideFaceDownCards(e) {
	updateMouse(e);
	if (inBounds($(this))) {
		return;
	}
	$('#view .card').each(function(){
		if ((duelist || admin || show_cards) && viewing == "Banished" && $(this).data("face_down") && $(this).data("cardfront").data("initialized")) {
			$(this).data("cardfront").hide();
		}
	});
}


/*$('#card204 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').parents().each(function(i,e){
	//console.log(i);
	//console.log($(this[0]));
	console.log('#' + $(this).attr("id") + '.' + $(this).attr("class"));
	//console.log(cssPath($(this[0])));
	console.log($(this).css("transform-style"));
});*/

function hideSelectZones() {
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
}








// DEPRACATED FUNCTIONS

function flipDecks(player, data) {
	removePermission();
	player1.deck_face_up = true;
	player2.deck_face_up = true;
	player1.main_arr = shuffle(player1, player1.main_arr, data.player1_ids);
	player2.main_arr = shuffle(player2, player2.main_arr, data.player2_ids);
	shiftDeck(player1);
	shiftDeck(player2);
	for (var i = 0; i < player1.main_arr.length; i++) {
		if (!player1.main_arr[i].data("cardfront").data("initialized")) {
			player1.main_arr[i].data("cardfront").initializeFromData(data.player1_deck[i]);
		}
	}
	for (i = 0; i < player2.main_arr.length; i++) {
		if (!player2.main_arr[i].data("cardfront").data("initialized")) {
			player2.main_arr[i].data("cardfront").initializeFromData(data.player2_deck[i]);
		}
	}
	shiftDeck(player1);
	shiftDeck(player2);
	endAction();
}

function flipDecksBack(player, data) {	
	player1.deck_face_up = false;
	player2.deck_face_up = false;
	player1.main_arr = shuffle(player1, player1.main_arr, data.player1_ids);
	player2.main_arr = shuffle(player2, player2.main_arr, data.player2_ids);
	shiftDeck(player1);
	shiftDeck(player2);
	endAction();
}

function turnFaceDown(player, data) {
	var card = getFieldCard(player, data);
	card.data("face_down", true);
	card.data("counters", 0);
	$('#field').append(card);
	TweenMax.to(card, easeSeconds, {rotation:player.rot, rotationY:180 + ABOUT_ZERO, ease:Linear.easeNone, onComplete:function(){
		//endAction(); // disabling because endAction is also called in updateXyzMaterials
	}});
	updateXyzMaterials(player, card);
	playSound(Flip);
}















// from main.js

var summoning_card;
var summoning_play;

$('#deck_hidden').mouseenter(showDeckMenu);
$('#select_zones div').click(chooseZone);

function cardMenuE() {	
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
					if (card.data("cardfront").data("monster_color") != "Link") {
						menu.push({label:"SS DEF",data:"SS DEF"});
					}
				}
			}
			if (isIn(card, player1.opponent.grave_arr) >= 0) {
				menu.push({label:"Banish",data:"Banish"});
			}
			else if (!card.data("face_down")) {
				menu.push({label:"To Grave",data:"To GY"});
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
		if (currentPhase == "BP" && turn_player.username == username && !card.data("face_down") && isMonster(player1, card)) {
			if (card.data("inATK")) {
				if (countMonsters(player2) > 0) {
					menu.push({label:"Attack",data:"Attack"});
				}
				menu.push({label:"Attack Directly",data:"Attack directly"});
			}
			else {
				switch (card.data("cardfront").data("name")) {
					default:
						if (card.data("cardfront").data("effect").indexOf("This card can attack while in face-up Defense Position") < 0) {
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
			if (hasAvailableSTZones(player1) && card.data("cardfront").data("effect").indexOf("You can Set this card from your hand to your Spell") >= 0) {
				menu.push({label:"Set (To S/T)",data:"Set ST"});
			}
			/*switch (card.data("cardfront").data("name")) {
				case "Artifact Achilleshield":
				case "Artifact Aegis":
				case "Artifact Beagalltach":
				case "Artifact Caduceus":
				case "Artifact Chakram":
				case "Artifact Failnaught":
				case "Artifact Labrys":
				case "Artifact Lancea":
				case "Artifact Mjollnir":
				case "Artifact Moralltach":
				case "Artifact Scythe":
				case "Artifact Vajra":
				case "Primineral Mandstrong":
				case "Silver Sentinel":
				case "Toy Magician":
				   if (hasAvailableSTZones(player1)) {
					   menu.push({label:"Set (To S/T)",data:"Set ST"});
				   }
				   break;
			}*/
			/*if (card.data("cardfront").data("pendulum")) {
				if (links && !player1.s1 || !links && !player1.pendulumLeft) {
					menu.push({label:"Activate Left",data:"Activate Pendulum Left"});
				}
				if (links && !player1.s5 || !links && !player1.pendulumRight) {
					menu.push({label:"Activate Right",data:"Activate Pendulum Right"});
				}
			}*/
			/*if (!links) {
				if (card.data("cardfront").data("pendulum")) {
					if (links && !player1.s1 || !links && !player1.pendulumLeft) {
						menu.push({label:"Activate Left",data:"Activate Pendulum Left"});
					}
					if (links && !player1.s5 || !links && !player1.pendulumRight) {
						menu.push({label:"Activate Right",data:"Activate Pendulum Right"});
					}
				}
			}*/
			/*if (!links) {
				if (card.data("cardfront").data("pendulum")) {
					if (!player1.pendulumLeft) {
						menu.push({label:"Activate Left",data:"Activate Pendulum Left"});
					}
					if (!player1.pendulumRight) {
						menu.push({label:"Activate Right",data:"Activate Pendulum Right"});
					}
				}
			}
			else {
				if (card.data("cardfront").data("pendulum")) {
					if (!player1.s1 || !player1.s5) {
						//menu.push({label:"Activate",data:"Activate Pendulum"});
						menu.push({label:"Activate",data:player1.s1 && !player1.s5 ? "Activate Pendulum Right" : (!player1.s1 && player1.s5 ? "Activate Pendulum Left" : "Activate Pendulum")});
					}
				}
			}*/
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
				if (card.data("cardfront").data("card_type") == "Monster") {
					menu.push({label:"Normal Summon",data:"Normal Summon"});
					menu.push({label:"Set",data:"Set monster"});
				}
				else if (findCard(["Magical Hats"])) {
					menu.push({label:"Set to Monster Zone",data:"Set monster"});
				}
			}
		}
		if (card.data("cardfront").data("monster_color") == "Xyz" && isIn(card, player1.extra_arr) >= 0 && countOverlayOptions(player1) >= 1) {
			menu.push({label:"OL ATK",data:"OL ATK"});
			menu.push({label:"OL DEF",data:"OL DEF"});
		}
		if ((hasAvailableMonsterZones(player1) || links && (!linkLeft || !linkRight) && isIn(card, player1.extra_arr) >= 0) && card.data("cardfront").data("card_type") == "Monster" && !card.data("isXyzMaterial") && !isMonster(player1, card) && !isST(player1, card)) {
			menu.push({label:"S. Summon ATK",data:"SS ATK"});
			if (card.data("cardfront").data("monster_color") != "Link") {
				menu.push({label:"S. Summon DEF",data:"SS DEF"});
			}
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
				else if (card.data("cardfront").data("monster_color") != "Link") {
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
			if (isIn(card, player1.main_arr) >= 0) {
				menu.push({label:"To Hand",data:"To hand"});
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
				else if (card.data("cardfront").data("monster_color") != "Link") {
					menu.push({label:"To DEF",data:"To DEF"});
				}
				if (!card.data("face_down") && card.data("cardfront").data("monster_color") != "Link") {
					menu.push({label:"Set",data:"Set monster"});
				}
			}
			if (isST(player1, card) && !card.data("face_down")) {
				menu.push({label:"Set",data:"Set ST"});
			}
			if (player1.fieldSpell && card[0] == player1.fieldSpell[0] && !card.data("face_down")) {
				menu.push({label:"Set",data:"Set Field Spell"});
			}
			if (isIn(card, player1.hand_arr) < 0 && isIn(card, player1.main_arr) < 0 && !isExtraDeckCard(card) && card.data("cardfront").data("monster_color") != "Token" && !card.data("isXyzMaterial")) {
				menu.push({label:"To Hand",data:"To hand"});
			}
			//if (card.data("isXyzMaterial")) {
			//	menu.push({label:"Detach",data:"Detach"});
			//}
			if (isIn(card, player1.banished_arr) < 0) {
				menu.push({label:"Banish",data:"Banish"});
				/*if (findCard([
					"Black Luster Soldier - Envoy of the Evening Twilight",
					"Blue Duston",
					"Chaos Scepter Blast",
					"Eater of Millions",
					"Elemental HERO Nebula Neos",
					"Evening Twilight Knight",
					"Evenly Matched",
					"Banquet of Millions",
					"Gizmek Orochi, the Serpentron Sky Slasher",
					"Kashtira Birth",
					"Kashtira Fenrir",
					"Kashtira Ogre",
					"Kashtira Preparations",
					"Kashtira Shangri-Ira",
					"Kashtira Unicorn",
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
				}*/
				menu.push({label:"Banish FD",data:"Banish FD"});
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
			if (card.data("cardfront").data("pendulum") && isIn(card, player1.main_arr) < 0 && isIn(card, player1.hand_arr) < 0 && isIn(card, player1.extra_arr) < 0) { // i think you should be able to return it from the gy to the extra deck // 1-15-23 added extra_arr to list
				menu.push({label:"To Extra Deck FU",data:"To ED FU"});
			}
			if (!isExtraDeckCard(card) && isIn(card, player1.main_arr) < 0 && !card.data("isXyzMaterial")) {
				menu.push({label:"To Top of Deck",data:"To T Deck"});
				//if (findEffect("bottom", true, true, true) && isIn(card, player1.extra_arr) < 0 || findCard(["Small World"])) {
				//if (findEffect("bottom", true, true, true) && isIn(card, player1.extra_arr) < 0) {
				if (allowToBottom || findEffect("bottom") || findCard(["Tearlament"], true, true, true) && isIn(card, player1.extra_arr) < 0) {
					menu.push({label:"To Bottom of Deck",data:"To B Deck"});
				}
			}
			if (isIn(card, player1.main_arr) >= 0 && findCard(["The Great Noodle Inversion"])) {
				menu.push({label:"To Bottom of Deck",data:"Upside Down effect 2"});
			}
			
			
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
			if (card.data("xyz_arr").length > 0) {
				menu.push({label:"View Materials",data:"View materials"});
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
					switch (card.data("cardfront").data("name")) {
						case "Parasite Paracide":
							menu.push({label:"Resolve Effect",data:"To T Deck 2 FU"});
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
						case "Rescue-ACE Turbulence":
							if (player1.main_arr.length >= 1) {
								menu.push({label:"Resolve Effect",data:"Turbulence effect"});
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
						case "Fiber Jar":
							menu.push({label:"Resolve Effect",data:"Fiber effect"});
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
					if (card.data("cardfront").data("name") == "Gold Pride - Start Your Engines!" && player1.main_arr.length >= 3) {
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
					if (card.data("cardfront").data("name") == "Old Mind") {
						menu.push({label:"To Opponent's Hand",data:"To hand 2"});
					}
					if (card.data("cardfront").data("name") == "Transmission Gear" && moderator >= 2) {
						//menu.push({label:"Resolve Effect",data:"Play RPS"});
					}
					if (card.data("cardfront").data("name") == "Fusion Guard") {
						menu.push({label:"Resolve Effect",data:"Banish random Fusion card"});
					}
					if (card.data("cardfront").data("name") == "The Great Noodle Inversion" || card.data("id") == 13393) {
						menu.push({label:"Resolve Effect",data:"Upside Down effect"});
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
				if (findCard(["Dream Mirror Hypnagogia", "Vaylantz World - Konig Wissen", "Vaylantz World - Shinra Bansho"])) {
					if (player1.opponent.fieldSpell == null) {
						menu.push({label:"Activate to other side",data:"Activate Field Spell 2"});
					}
				}
			}
			if (card.data("cardfront").data("name") == "Small World") {
				menu.push({label:"Check Options",data:"Resolve Small World"});
			}
			if (isIn(card, player1.hand_arr) >= 0 && findCard(["Amazoness Chain Master", "Exchange", "Graceful Tear", "Lullaby of Obedience", "Gold Moon Coin", "Magical Contract Door", "Scrounging Goblin"]) || isIn(card, player1.banished_arr) >= 0 && findCard(["Gift Exchange"], true, true)) {
				menu.push({label:"To Opponent's Hand",data:"To hand 2"});
			}
			if (findCard(["Jack-In-The-Hand"])) {
				menu.push({label:"To Opponent's Hand",data:"To hand 2"});
			}
			if (isIn(card, player1.grave_arr) >= 0 && card.data("cardfront").data("card_type") == "Spell" && findCard(["Graverobber"])) {
				menu.push({label:"To Opponent's Hand",data:"To hand 2"});
			}
			if (card.data("isXyzMaterial")) {
				menu = [];
				menu.push({label:"Detach",data:"Detach"});
				menu.push({label:"Banish",data:"Banish"});
			}
			if ((viewing == "Deck (Picking 4 Cards)" || viewing == "Deck (Picking 3 Cards)" || viewing == "Deck (Picking 2 Cards)" || viewing == "Deck (Picking Card)") && (isIn(card, player1.main_arr) >= 0 || isIn(card, player1.opponent.main_arr) >= 0)) {
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
		
		
		if (hasXyzMonster(player1)) {
			if (isIn(card, player1.grave_arr) >= 0 || isIn(card, player1.banished_arr) >= 0) {
				menu.push({label:"Attach",data:"Attach"});
			}
		}
		
		
		
	}
	showMenu(card, menu);
}

function hasXyzMonster(player) {
	if (player.m1 && player.m1.data("cardfront").data("monster_color") == "Xyz") {
		return true;
	}
	if (player.m2 && player.m2.data("cardfront").data("monster_color") == "Xyz") {
		return true;
	}
	if (player.m3 && player.m3.data("cardfront").data("monster_color") == "Xyz") {
		return true;
	}
	if (player.m4 && player.m4.data("cardfront").data("monster_color") == "Xyz") {
		return true;
	}
	if (player.m5 && player.m5.data("cardfront").data("monster_color") == "Xyz") {
		return true;
	}
	if (linkLeft && linkLeft.data("controller") == player && linkLeft.data("cardfront").data("monster_color") == "Xyz") {
		return true;
	}
	if (linkRight && linkRight.data("controller") == player && linkRight.data("cardfront").data("monster_color") == "Xyz") {
		return true;
	}
	return false;
}

function menuOutE(e) {
	if (automatic) {
		$('#equips').children().detach();
	}
	if (!menu_card || menu_card.parent()[0] == $('#view > .content')[0]) {
		return;
	}
	updateMouse(e);
	var height = getScale(menu_card[0]) * 580;
	var rotation = getRotation(menu_card[0]);
	if (rotation == 180) {
		rotation = 0;
	}
	if (rotation != 0) {
		height = getScale(menu_card[0]) * 400;
	}
	if (height < 0) {
		height = -height;
	}
	var top = parseInt(menu_card.css("top")) - height / 2;
	var zoom = parseFloat($('#content')[0].style.zoom);
	var mY = e.pageY / contentScale - marginTop / contentScale * zoom;
	//if (mY <= top + 5) {
	if (mY <= top + 5 || EDGE) {
		return;
	}
	//if (zooming) {
	//	return;
	//}
	removeCardMenu();
}

function initDuelistDuelStart() {
	console.log('initDuelistDuelStart');
	seen_deck = false;
	seen_extra = false;
	counter_btn.show();
	$('#good_btn').show();
	$('#shuffle_btn').show();
	$('#show_hand_btn').show();
	$('#auto_draw_cb').show();
	$('#auto_draw_cb').checked(true);
	$('#auto_draw_lbl').show();
	$('#choose_zones').show();
	$('#duel .token_btn').show();
	$('#coin_btn').show();
	$('#die_btn').show();
	$('#lp_txt').show();
	$('#life_txt').show();
	$('#plus_btn').show();
	$('#minus_btn').show();
	$('#turn').show();
	$('#minus_btn').show();
	$('#plus_btn').hide();
	$('#turn').hide();
	$('#pause_btn').val("Pause Game");
	$('#pause_btn').insertBefore($('#gone1'));
	$('#pause_btn').data("proxy").insertAfter($('#pause_btn'));
	$('#pause_btn').hide();
	$('#pause_btn').css("left", 897);
	$('#pause_btn').css("top", 547);
	$('#pause_btn').setWidth(100);
	$('#choose_zones_cb').checked(links && !rush);
	$('#good_btn').css("opacity", duelist && player1.still_good ? 0.4 : 1);
}

function playStartTurn() {
	if (!$('#start_turn').is(":visible")) {
		return;
	}
	$('#start_turn .red').css("opacity", 0);
	$('#start_turn .white_glow').css("opacity", 0);
	TweenMax.to($('#start_turn .red'), 0.3, {onComplete:function(){
		$('#start_turn .red').css("opacity", 1);
		$('#start_turn .white_glow').css("opacity", 1);
		TweenMax.to($('#start_turn .red'), 0.3, {onComplete:function(){
			playStartTurn();
		}});
	}});
}

function stopStartTurn() {
	TweenMax.killTweensOf($('#start_turn .red'));
	TweenMax.killTweensOf($('#start_turn .white_glow'));
	$('#start_turn .red').css("opacity", "0");
	$('#start_turn .white_glow').css("opacity", "0");
}

function countMonsters(player) {
	var total = 0;
	if (player.m1) {
		total++;
	}
	if (player.m2) {
		total++;
	}
	if (player.m3) {
		total++;
	}
	if (player.m4) {
		total++;
	}
	if (player.m5) {
		total++;
	}
	if (linkLeft) {
		if (linkLeft.data("controller") == player) {
			total++;
		}
	}
	if (linkRight) {
		if (linkRight.data("controller") == player) {
			total++;
		}
	}
	return total;
}

function countSpells(player) {
	var total = 0;
	if (player.s1) {
		total++;
	}
	if (player.s2) {
		total++;
	}
	if (player.s3) {
		total++;
	}
	if (player.s4) {
		total++;
	}
	if (player.s5) {
		total++;
	}
	return total;
}

function countFaceDownExtraDeckCards(player) {
	var total = 0;
	for (var i = 0; i < player.extra_arr.length; i++) {
		if (player.extra_arr[i].data("face_down") == true) {
			total++;
		}
	}
	return total;
}

function showMenu(card, dp) {
	if (!dp) {
		menu_reason = "Menu has no data";
		return;
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
			case "Banish ED Card FD":
			case "To Opponent's Hand":
			case "Look at opponent cards":
			case "Card of Fate Effect":
			case "Banish Random Card":
			case "Banish 8 Cards FD":
			case "Stay Revealed":
			case "Stop Revealing":
			case "Check Small World":
			case "Check Options":
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
		top += 58 + 32 - $('#view > .content').scrollTop();
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

function isInYourHand(player, card) {
	for (var i = 0; i < player.hand_arr.length; i++) {
		if (!player.hand_arr[i]) {
			addLine(player.username + "'s card at " + i + " is null");
			return false;
		}
		if (player.hand_arr[i][0] == card[0]) {
			return true;
		}
	}
	return false;
}

function cardMenuClickE(e) {
	e.stopPropagation(); // one of these may be needed to prevent clicking the coin button underneath for some people
	e.preventDefault();
	cardMenuClicked(menu_card, $(this).data("data"), e);
}

function removeCardMenu() {
	menu.detach();
	menu_card = null;
	restoreHandCards();
}

function resetDuelFocus() {
	if (duelist || admin) {
		if (duelFocus) {
			//if ($(':focus').length == 0 || $(':focus')[0] == duelFocus[0]) { // why would you want to reset the duel focus?
			if ($(':focus').length == 0) {
			//if ($(':focus').length == 0 || $(':focus')[0] != duelFocus[0]) { // is worse
				duelFocus.focus();
			}
		}
	}
}

function setDuelFocus() {
	duelFocus = $(this);
	console.log('duelFocus = ' + duelFocus);
}

function duelChatTimerE() {
	duelChatTyping = false;
	duelChatTimer.reset();
}

function duelChatTypeE() {
	if ($('#duel .cin_txt').val() == "" || $('#duel .cin_txt').val().indexOf('/') == 0 || duelChatTyping || !duelist) {
		return;
	}
	if (!Duelist()) {
		return;
	}
	duelChatTyping = true;
	duelChatTimer.start();
	Send({"action":"Duel", "play":"Typing"});
}

function showDeckMenu() {
	if (viewing) {
		//viewingE(viewing); // why should this be here?
		return;
	}
	if (!Duelist()) {
		return;
	}
	if (player1.main_arr.length == 0) {
		return;
	}
	if (automatic) {
		showDeckMenu2();
		return;
	}
	var menu = [];
	menu.push({label:"Draw",data:"Draw card"});
	menu.push({label:"Shuffle",data:"Shuffle deck"});
	menu.push({label:"Mill",data:"Mill"});
	menu.push({label:"Banish T.",data:"Banish"});
	menu.push({label:"Banish FD",data:"Banish FD"});
	menu.push({label:"View",data:"View deck"});
	if (!solo) {
		menu.push({label:"Show",data:"Show deck"});
	}
	if (findCard(["Convulsion of Nature"]) || player1.deck_face_up) {
		menu.push({label:"Flip Deck",data:"Flip deck"});
	}
	if (findCard(["Grave Lure"])) {
		menu.push({label:"Turn Top Card FU",data:"Turn top card face-up"});
	}
	if (findCard(["Card of Fate"])) {
		menu.push({label:"Card of Fate Effect",data:"Card of Fate effect"});
	}
	showMenu(player1.main_arr[0], menu);
	if (duelist && player1.skill == "Aroma Strategy" || (duelist && player1.skill == "Prescience" && findCard(["Prescience"]) && (player2.lifepoints > player1.lifepoints * 2))) {
		previewFront(player1.main_arr[0].data("cardfront"));
	}
}

function startChooseMonsterZones() {
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
}

function startChooseMonsterZones2() {
	if (player2.m1 == null) {
		$('#m1_select2').show();
		m1_select2.play();
	}
	if (player2.m2 == null) {
		$('#m2_select2').show();
		m2_select2.play();
	}
	if (player2.m3 == null) {
		$('#m3_select2').show();
		m3_select2.play();
	}
	if (!duel_links && !speed && !rush) {
		if (player2.m4 == null) {
			$('#m4_select2').show();
			m4_select2.play();
		}
		if (player2.m5 == null) {
			$('#m5_select2').show();
			m5_select2.play();
		}
	}
}

function startChooseSTZones() {
	if (player1.s1 == null) {
		$('#s1_select').show();
		s1_select.play();
	}
	if (player1.s2 == null) {
		$('#s2_select').show();
		s2_select.play();
	}
	if (player1.s3 == null) {
		$('#s3_select').show();
		s3_select.play();
	}
	if (!duel_links && !speed && !rush) {
		if (player1.s4 == null) {
			$('#s4_select').show();
			s4_select.play();
		}
		if (player1.s5 == null) {
			$('#s5_select').show();
			s5_select.play();
		}
	}
}

function startChooseFieldSpellZones() {
	if (player1.fieldSpell == null) {
		$('#field_spell1_select').show();
		field_spell1_select.play();
	}
	if (player2.fieldSpell == null) {
		$('#field_spell2_select').show();
		field_spell2_select.play();
	}
}

function chooseZone() {
	var zone;
	switch(this) {
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

/*function getZoneByName(player, str) {
	if (str == "M-1") {
		return player.m1;
	}
	if (str == "M-2") {
		return player.m2;
	}
	if (str == "M-3") {
		return player.m3;
	}
	if (str == "M-4") {
		return player.m4;
	}
	if (str == "M-5") {
		return player.m5;
	}
	
	if (str == "M2-1") {
		return player.opponent.m1;
	}
	if (str == "M2-2") {
		return player.opponent.m2;
	}
	if (str == "M2-3") {
		return player.opponent.m3;
	}
	if (str == "M2-4") {
		return player.opponent.m4;
	}
	if (str == "M2-5") {
		return player.opponent.m5;
	}
	
	if (str == "S-1") {
		return player.s1;
	}
	if (str == "S-2") {
		return player.s2;
	}
	if (str == "S-3") {
		return player.s3;
	}
	if (str == "S-4") {
		return player.s4;
	}
	if (str == "S-5") {
		return player.s5;
	}
	
	if (str == "Field Spell Zone") {
		return player.fieldSpell;
	}
	if (str == "Field Spell 2 Zone") {
		return player.opponent.fieldSpell;
	}
	
	return null;
}*/

function getZoneByName(player, str) {
	switch(str) {
		case "M-1":
			return player.m1;
		case "M-2":
			return player.m2;
		case "M-3":
			return player.m3;
		case "M-4":
			return player.m4;
		case "M-5":
			return player.m5;
		case "M2-1":
			return player.opponent.m1;
		case "M2-2":
			return player.opponent.m2;
		case "M2-3":
			return player.opponent.m3;
		case "M2-4":
			return player.opponent.m4;
		case "M2-5":
			return player.opponent.m5;
		case "S-1":
			return player.s1;
		case "S-2":
			return player.s2;
		case "S-3":
			return player.s3;
		case "S-4":
			return player.s4;
		case "S-5":
			return player.s5;
		case "F-1":
			return player.fieldSpell;
		case "F-2":
			return player.opponent.fieldSpell;
	}
	return null;
}

function hasAvailableSTZones(player) {
	if (player.s1 == null || player.s2 == null || player.s3 == null) {
		return true;
	}
	if (!speed && !rush) {
		if (player.s4 == null || player.s5 == null) {
			return true;
		}
	}
	return false;
}

function startAttack(e) {
	updateMouse(e);
	TweenMax.to($('#sword'), 0, {left:parseInt(attacking_card.css("left")), top:parseInt(attacking_card.css("top")), rotation:-90});
	$('#sword').show();
	$('body').mousemove(moveSword);
	moveSword(e);
	e.stopPropagation();
	$('body').click(checkAttack);
}

function moveSword(e) {
	updateMouse(e);
	var n1 = mouseYScaled - parseInt($('#sword').css("top"));
	var n3 = mouseXScaled - parseInt($('#sword').css("left"));
	TweenMax.to($('#sword'), 0, {rotation:Math.atan2(n1,n3) * 180 / Math.PI});
}

function removeMenuData() {
	
}











function stopCountdown() {
	countdownTimer.stop();
	hideCountdown();
}

function hideCountdown() {
	$('#countdown1').text("");
	$('#countdown1').hide();
	$('#countdown2').text("");
	$('#countdown2').hide();
}

function updateCountdown(player, data) {
	player.seconds = data.countdown;
	//active_player = player;
	//endAction();
	countdownE();
	countdownTimer.start();
	addLine("Waiting for " + escapeHTML(data.username) + "...");
}

function countdownE() {
	//if (stopQueue) {
	//	console.log('a');
	//	return;
	//}
	//if (!active_player) {
	//	return;
	//}
	players.forEach(function(p,i){
		if (isOnline(p.username)) {
			return;
		}
		p.countdown.text(p.seconds);
		p.countdown.show();
		p.seconds--;
		if (p.seconds < 0) {
			p.seconds = 0;
		}
	});
	/*active_player.countdown.text(active_player.seconds);
	active_player.countdown.show();
	active_player.seconds--;
	if (active_player.seconds < 0) {
		active_player.seconds = 0;
	}*/
}

function rejoinDuel(player, data) {
	addLine(escapeHTML(data.username) + " is back.");
	if (player == Player1()) {
		$('#gone1').hide();
		$('#status1 .status_txt').text("");
	}
	else if (player == Player2()) {
		$('#gone2').hide();
		$('#status2 .status_txt').text("");
	}
	//if (replay && (!$('#gone1').is(":visible") || !$('#gone2').is(":visible")) || isOnline(player.opponent.username)) {
	if (replay && (!$('#gone1').is(":visible") || !$('#gone2').is(":visible")) || !replay && isOnline(player.opponent.username)) {
		stopCountdown();
		return;
	}
	player.countdown.text("");
	player.countdown.hide();
}

function showExtraDeckMenu() {
	if (viewing != null && viewing != "") {
		viewingE(viewing);
		return;
	}
	if (player1.extra_arr.length == 0) {
		return;
	}
	if (!Duelist()) {
		return;
	}
	var menu = [];
	menu.push({label:"View",data:"View ED"});
	if (!solo && !automatic) {
		menu.push({label:"Show",data:"Show ED"});
	}
	if (findCard(["Banquet of Millions"]) && countFaceDownExtraDeckCards(player1) >= 1) {
		menu.push({label:"Banish random ED Card",data:"Banish random ED card"});
	}
	showMenu(player1.extra_arr[0], menu);
}