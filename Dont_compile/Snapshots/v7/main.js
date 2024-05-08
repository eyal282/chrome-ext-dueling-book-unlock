"use strict";

var m1_select = loadSVGAnimation(m1_select, "m1_select", "zone_select", 93, 93, 24);
var m2_select = new MovieClip();
var m3_select = new MovieClip();
var m4_select = new MovieClip();
var m5_select = new MovieClip();
var s1_select = new MovieClip();
var s2_select = new MovieClip();
var s3_select = new MovieClip();
var s4_select = new MovieClip();
var s5_select = new MovieClip();
var link_left_select = new MovieClip();
var link_right_select = new MovieClip();
bubbles1 = loadSVGAnimation(bubbles1, "bubbles1", "bubbles", 500, 20, 24);

//var HOSTNAME = 'ws://127.0.0.1:1234/';
var HOSTNAME = 'wss://duel.duelingbook.com:1234/';

var allCards = [];
var callback;

var action;
var action_list = $('#action_list');
var attacking_card;
var checked_logged_in = false;
var clickedDuel = 0;
var clickedHoster;
var clickedUsername;
var confirmation_id;
var confirmation_sent = false;
var connection_success = false;
var counter = new Counter();
	counter.find('.glow').detach();
	counter.find('.total_txt').hide();
var currentDeckId = 0;
var deck = {};
var decklist_cb = $('#decklist_cb');
var deck_holes_arr;
var deckName;
var decks = [];
var deckX = 801;
var deckY = 531.5;
var defaultDeckData;
var defaultMainArray;
var default_deck;
var dragCallback;
var dragScaleX;
var dragScaleY;
var dragStartingX = 0;
var dragStartingY = 0;
var dragTransform;
var duelChatTyping = false;
var duelFocus;
var game_records_arr = [];
var edit_card = $('#edit_card');
var exitAfterSave = false;
var firstCards;
var formats = ['ar', 'au', 'cu', 'gu', 'tu', 'uu', 'su', 'dl', 'du'];
var fps = 24;
var frames = $('#frames').children();
var full_search = false;
var game_type;
var got_heartbeat = false;
var hosting = false;
var inPool = false;
var isDimmed = false;
var item_arr = [];
var joining = false;
var lastFormat;
var lastFrame;
var loadDeckAfterSave = false;
var loading_deck = false;
var logged_in = false;
var logging_in = false;
var log_vsp = 0;
var mX = 0;
var mY = 0;
var menu = $('<div id="card_menu"><div id="card_menu_content"></div></div>');
var menu_arr;
var my_card;
var next_callback;
var olPlay;
var online_users = $('#online_users');
var online_users_filter = [];
var online_users_data;
var online_vsp = 0;
var overlaying_card;
var pageNumber = 0;
var poolStatus;
var readyCountdown = 0;
var reconfirm_email;
var records_data;
var records_index = 0;
var remote = window.location.href.indexOf("http") == 0;
var removedCounterCardId = 0;
var resultCardX = 0;
var resultCardY = 0;
var savedDeckState = "";
var saved_search;
var searchCardX = 0;
var searchCardY = 0;
var searched = false;
var searchingCountdown = 0;
var seen_deck = false;
var session_id = randomHex();
var shift = false;
var sideData;
var socket_security_error = false;
var summoning_card;
var summoning_play;
var tempMainState = [];
var totalCardsSearched = 0;
var unsavedChanges = false;
var unsavedDeckState = "";
var update_search = false;
var upload_card = $('#upload_card');
var watch_buttons_arr = [];
var websocket = false;

var timeout_timer = new Timer(40000);
	timeout_timer.callback = timeoutE;
var heartbeat_timer = new Timer(30000);
	heartbeat_timer.callback = sendHeartbeat;
var connectTimer = new Timer(30000);
	connectTimer.callback = connectTimeoutE;
var duelChatTimer = new Timer(5000);
	duelChatTimer.callback = duelChatTimerE;

window.onload = loadedE;
window.onbeforeunload = confirmExit;
window.onscroll = resizeE;

function checkLoggedIn() {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "logged-in.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			checkLoggedInResponse(xhr.responseText);
		}
	}
	xhr.send();			
}

function checkLoggedInResponse(str) {
	console.log(str);
	var data = JSON.parse(str);
	if (data.action == "Logged in") {
		if (logged_in) {
			return;
		}
		username = data.username;
		password = data.password;
		logged_in = true;
		showLoggedIn();
	}
}

function showLogin() {
	$('#login').show();
	$('#register').hide();
	$('#forgot_password').hide();
	$('#logged_in').hide();
	$('#login .username_txt').focus();
	$('#login .username_txt').select();
}

function showRegister() {
	$('#login').hide();
	$('#register').show();
	$('#forgot_password').hide();
	$('#logged_in').hide();
	$('#register .username_txt').focus();
	$('#register .username_txt').select();
}

function showLoggedIn() {
	if (!username || !password) {
		showLogin();
		return;
	}
	TweenMax.set($('#logged_in .username_txt'), {width:222, scale:1});
	$('#login').hide();
	$('#register').hide();
	$('#forgot_password').hide();
	$('#logged_in').show();
	$('#logged_in .username_txt').text(username);
	$('#start_btn').show();
	setText($('#logged_in .username_txt'));
}

function registerE() {
	if ($('#register .username_txt').val() == "") {
		errorE("Username not specified");
		return;
	}
	if ($('#register .password_txt').val() == "") {
		errorE("Password not specified");
		return;
	}
	if ($('#register .email_txt').val() == "") {
		errorE("E-mail not specified");
		return;
	}
	var fd = new FormData();
	fd.append("username", $('#register .username_txt').val());
	fd.append("password", $('#register .password_txt').val());
	fd.append("email", $('#register .email_txt').val());
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "register.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			registerResponse(xhr.responseText);
		}
	}
	xhr.onerror = ioError;
	xhr.send(fd);
	showDim();
}

function registerResponse(str) {
	console.log(str);
	hideDim();
	var data = JSON.parse(str);
	if (data.action == "Registered") {
		messageE(data.message);
		$('#register .username_txt').val("");
		$('#register .password_txt').val("");
		$('#register .email_txt').val("");
		showLogin();
		return;
	}
	if (data.action == "Error") {
		errorE(data.message);
		return;
	}
	errorE("Unknown Error");
}

function loginE() {
	if ($('#login .username_txt').val() == "") {
		errorE("Username not specified");
		return;
	}
	if ($('#login .password_txt').val() == "") {
		errorE("Password not specified");
		return;
	}
	var fd = new FormData();
	fd.append("username", $('#login .username_txt').val());
	fd.append("password", $('#login .password_txt').val());
	fd.append("remember_me", ~~$('#login .remember_cb').is(":checked"));
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "login.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			loginResponse(xhr.responseText);
		}
	}
	xhr.onerror = ioError;
	xhr.send(fd);
	showDim();
}

function loginResponse(str) {
	console.log(str);
	hideDim();
	var data = JSON.parse(str);
	if (data.action == "Logged in") {
		userId = ~~data.user_id;
		username = data.username;
		password = data.password;
		logged_in = true;
		showLoggedIn();
		return;
	}
	errorE(data.message);
}

function logoutE() {
	username = null;
	password = null;
	$('#login .username_txt').val("");
	$('#login .password_txt').val("");
	$('#start_btn').hide();
	TweenMax.set($('#logged_in .username_txt'), {width:222, scaleX:1});
	showLogin();
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "logout.php", true);
	xhr.send();
}

function performStart() {
	goto("connecting");
	lastFrame = "connecting";
	Connect();
}

function gotoDuelRoom() {
	decklist_cb.insertBefore($('#game_room .default_btn'));
	decklist_cb.setPosition(17, 16);
	goto('game_room');
	fillDecklists();
	lastFormat = 'ar';
	$('#chat_buttons').show();
	duelId = 0;
	rpsWinner = "";
	sideData = null;
	games = 0;
	viewing = "";
	$('#hosting .accept_btn').disable(true);
	$('#hosting .reject_btn').disable(true);
	$('#joining').hide();
	$('#hosting').hide();
	loadGames();
	setupHost();
	hideDim();
	decklist_cb.disable(false);
}
	
function loadGames() {
	showDim();
	$('.duelbutton').detach();
	$('.format_inner').html("");
	$('.format_inner').addClass("unscrollable");
	loadHosting();
	loadWatching();
}

function loadHosting() {
	Send({"action":"Load hosting"});
}

function loadWatching() {
	Send({"action":"Load watching"});
}

function loadHostingResponse(data) {
	hideDim();
	for (var i = 0; i < data.duels.length; i++) {
		createJoinButton(data.duels[i]);
	}
}

function loadWatchingResponse(data) {
	hideDim();
	for (var i = 0; i < data.duels.length; i++) {
		createWatchButton(data.duels[i]);
	}
}

function createJoinButton(data) {
	var join_button = new JoinButton(data);
	addDuelButton(join_button, $('#games_hosting .format_inner'));
}

function createWatchButton(data, b) {
	var watch_button = new WatchButton(data);
	addDuelButton(watch_button, $('#games_watching .format_inner'));
}

function addDuelButton(btn, sp, b) {
	var y = 0;
	for (var i = 0; i < sp.find('.duelbutton').length; i++) {
		if (!sp.find('.duelbutton').eq(i).is(":visible")) {
			y -= 50;
			continue;
		}
		var top = parseInt(sp.find('.duelbutton').eq(i).css("top"));
		if (top % 50 != 0) {
			top++;
		}
		if (top != y) {
			insertAt(i, btn, sp);
			break;
		}
		y += 50;
	}
	btn.css("top", y);
	if (y == 250) {
		sp.removeClass("unscrollable");
	}
	if (i == sp.find('.duelbutton').length) {
		if (b) {
			sp.data("arr").push(btn);
			return;
		}
		sp.append(btn);
	}
	if (btn.hasClass("joinbutton")) {
		setText(btn.find('.username_txt'));
	}
	else {
		setText(btn.find('.title_txt'));
		setText(btn.find('.title2_txt'));
	}
}

function removeWatchButton(id) {
	$('.format_inner').find('.duelbutton').each(function(){
		if ($(this).data("id") == id) {
			$(this).remove();
			return false;
		}
	});
	for (var i = 0; i < watch_buttons_arr.length; i++) {
		if (watch_buttons_arr[i].data("id") == id) {
			watch_buttons_arr.splice(i, 1);
			break;
		}
	}
}

function removeJoinButton(str, b) {
	if (b !== false) {
		b = true;
	}
	$('.format_inner').find('.duelbutton').each(function(){
		if ($(this).data("username") == str) {
			$(this).remove();
			return false;
		}
	});
	if ($('#joining').is(":visible") && clickedHoster == str) {
		setupHost();
		messageE("User has cancelled their duel");
	}
}

function hostDuel(e, ready) {
	if (ready !== true) {
		ready = false;
	}
	var format = $('#host .format_cb').val();
	setupHosting();
	hosting = true;
	Send({"action":"Host duel", "format":format, "deck":deck.id});
	if (format == "so") {
		setupHost();
		showDim();
	}
}

function setupHost() {
	clickedHoster = null;
	$('#host').show();
	$('#hosting').hide();
	$('#joining').hide();
	$('#joining_pool').hide();
	$('#host_bg #host_lbl').text("Host a Game");
}

function setupHosting() {
	$('#host').hide();
	$('#hosting').show();
	$('#joining').hide();
	$('#joining_pool').hide();
	decklist_cb.disable(true);
	$('#hosting .accept_btn').disable(true);
	$('#hosting .reject_btn').disable(true);
	$('#joinlist').html("");
}

function setupJoining() {
	joining = true;
	$('#host').hide();
	$('#hosting').hide();
	$('#joining').show();
	$('#joining_pool').hide();
	decklist_cb.disable(true);
	$('#host_bg #host_lbl').text("Joining Duel");
}

function cancelDuel() {
	hosting = false;
	setupHost();
	enablePools();
	removeJoinButton(username);
	Send({"action":"Cancel duel"});
}

function deckIndex() {
	return decklist_cb.prop("selectedIndex");
}

function joinDuelE(e, ready) {
	if (ready !== true) {
		ready = false;
	}
	hosting = false;
	var joinButton;
	if (e instanceof jQuery) {
		joinButton = e;
	}
	else {
		joinButton = e.currentTarget;
	}
	if (joinButton.data("username") == username) {
		errorE("This is your own join button");
		return;
	}
	clickedHoster = joinButton.data("username");
	joinDuel();
}

function joinDuel() {
	setupJoining();
	$('#joining .waiting_txt').text("Waiting for response from host...");
	Send({"action":"Join duel", "username":clickedHoster, "deck":deck.id});
}

function joinDuelResponse(data) {
	var arr = $('#joinlist .cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i).data("username") == data.username) {
			return;
		}
	}
	var cell = $(new Cell2(data.username));
	cell.removeAttr("ondblclick");
	cell.data("username", data.username);
	cell.click(function(){
		$('#hosting .accept_btn').disable(false);
		$('#hosting .reject_btn').disable(false);
	});
	$('#joinlist').append(cell);
}

function removeFromJoinlist(data) {
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
}

function leaveDuel() {
	joining = false;
	setupHost();
	Send({"action":"Leave duel"});
	clickedHoster = null;
}

function rejectUser() {
	var str = $('#joinlist .cell2.selected').data("username");
	Send({"action":"Reject user", "username":str});
	$('#joinlist .cell2.selected').remove();
	$('#hosting .accept_btn').disable(true);
	$('#hosting .reject_btn').disable(true);
}

function acceptUser() {
	var str = $('#joinlist .cell2.selected').data("username");
	if (!str) {
		return;
	}
	Send({"action":"Accept user", "username":str});
	$('#joinlist').html("");
	showDim();
}
		
function resetSearch() {
	$('#search .name_txt').val("");
	$('#search .desc_txt').val("");
	$('#search input[type=checkbox]').checked(false);
	$('#search select').selectedIndex(0);
	$('#search .card_cb').change();
	$('#search .pendulum_cb').checked(false);
	$('#search .tcg_cb').checked(false);
	$('#search .ocg_cb').checked(false);
	$('#search .page_txt').text("0");
	$('#search .tot_pages_txt').text("0");
	$('#search .custom_cb').disable(false);
}

function gotoDeckConstructor() {
	showDim();
	decklist_cb.insertAfter($('#deck_constructor .default_btn'));
	decklist_cb.setPosition(3, 490);
	$('#deck_constructor #clear_btn').val("Clear Deck");
	$('#deck_constructor .cards').children().detach();
	$('#deck_constructor .cards').append(preview);
	$('#deck_constructor .cards').append(preview_txt);
	$('#deck_constructor .search').append($('#search'));
	$('#search').show();
	resetSearch();
	for (var i = 0; i < search_arr.length; i++) {
		$('#deck_constructor .cards').append(search_arr[i]);
	}
	countSearch();
	currentDeckId = 0;
	awaiting_cards = false;
	cardsInMain = 0;
	unsavedChanges = false;
	exitAfterSave = false;
	savedDeckState = "";
	unsavedDeckState = "";
	tempMainState = [];
	resultCardX = 0;
	resultCardY = 0;
	deckCardX = 0;
	deckCardY = 0;
	deck_filled_arr = [];
	draggedCard = new CardFront();
	$('#preview').hide();
	$('#preview_txt').hide();
	saved_search = null;
	full_search = false;
	update_search = true;
	goto('deck_constructor');
	fillDecklists();
	$('#search .name_txt').focus();
	if (decks.length > 0) {
		loadDeck();
	}
	else {
		loadDecks();
	}
}

function loadDecks() {
	Send({"action":"Load deck"});
	showDim();
}

function loadDeck() {
	showDim();
	if (deck.deckData) {
		setTimeout(function(){
			loadDeckResponse(deck.deckData);
		}, 10);
		return;
	}
	Send({"action":"Load deck", "deck":~~decklist_cb.val()});
}

function loadDeckResponse(data) {
	if (decks.length > 0) {
		deck.deckData = data;
		currentDeckId = data.id;
	}
	clearDeck();
	loading_deck = true;
	for (var i = 0; i < data.main.length; i++) {
		draggedCard = new CardFront();
		draggedCard.initializeAndLimit(data.main[i]);
		addCardToMain(draggedCard);
	}
	if (decks.length == 0) {
		decks.push({label:"Untitled (default)", data:"Untitled"});
		default_deck = "Untitled";
		fillDecklists();
	}
	if (data.default) {
		fillDecklists(false);
	}
	loading_deck = false;
	countMain();
	updateActive(false);
	initializeDeckCards();
	setLimits();
	enableDeckButtons();
	updateSavedDeckState();
	unsavedChanges = false;
	hideDim();
	
	
	$('#deck_hero').attr("src", getHeroSrc(deck.hero));
}

function clearDeckE() {
	updateTempDeckState();
	clearDeck(true);
}

function updateSavedDeckState() {
	savedDeckState = "";
	for (var i = 0; i < deck_filled_arr.length; i++) {
		savedDeckState += deck_filled_arr[i].data("id");
		if (i < deck_filled_arr.length - 1) {
			savedDeckState += ",";
		}
	}
}

function updateTempDeckState() {
	tempMainState = deck_filled_arr.concat();
}

function updateUnsavedDeckState() {
	unsavedDeckState = "";
	for (var i = 0; i < deck_filled_arr.length; i++) {
		unsavedDeckState += deck_filled_arr[i].data("id");
		if (i < deck_filled_arr.length - 1) {
			unsavedDeckState += ",";
		}
	}
}

function saveDeck() {
	Send({"action":"Save deck", "deck":str(deck.data), "id":~~deck.id, "cards":getDeckCardIds(), "hero":~~deck.hero});
	showDim();
}

function saveDeckAs() {
	getInput("Save Deck As", "Enter a name for your deck", deck.data, 25, function(){
		var name = $('#input .input_txt').val();
		for (var i = 0; i < decks.length; i++) {
			if (decks[i].data.toLowerCase() == name.toLowerCase()) {
				errorE("Deck with name exists");
				return;
			}
		}
		Send({"action":"Save deck as", "deck":$('#input .input_txt').val(), "id":deck.id, "cards":getDeckCardIds(), "hero":~~deck.hero});
		showDim();
	});
	showDim();
}

function saveDeckResponse(data) {
	hideDim();
	messageE(data.message);
	if (exitAfterSave) {
		exitAfterSave = false;
		messageE(data.message, exitDeckConstructor);
		showDim();
	}
	updateSavedDeckState();
	unsavedChanges = false;
	currentDeckId = data.id;
	var index = deckIndex();
	if (index < 0) {
		index = 0;
	}
	if (decklist_cb.children().length == 0 || decks[index].data != data.name) {
		for (var i = 0; i < decks.length; i++) {
			if (decks[i].data.toLowerCase() > data.name.toLowerCase()) {
				break;
			}
		}
		decks.splice(i, 0, data);
		insertAt(i, '<option value="' + data.id + '">' + escapeHTML(data.name) + '</option>', decklist_cb);
		decklist_cb.selectedIndex(i);
	}
	decklist_cb.find('option').eq(deckIndex()).attr("value", data.id);
	deck = decks[deckIndex()];
	deck.label = data.name;
	deck.data = data.name;
		deck.id = data.id;
		//deck.legality = data.legality;
	deck.deckData = updateDeckData();
	updateActive(false);
}

function deleteDeckE() {
	getConfirmation("Delete Deck", "Are you sure you want to delete " + deck.data + "?", deleteDeck);
	showDim();
}

function deleteDeck() {
	Send({"action":"Delete deck", "id":~~decklist_cb.val()});
	showDim();
}

function deleteDeckResponse(data) {
	var index = decklist_cb.find('option[value="' + data.id + '"]').index();
	decks.splice(index, 1);
	decklist_cb.find('option[value="' + data.id + '"]').remove();
	if (decklist_cb.children().length == 0) {
		hideDim();
		disableDeckButtons();
		clearDeck();
		updateSavedDeckState();
		unsavedChanges = false;
		currentDeckId = 0;
		return;
	}
	if (index != 0) {
		index--;
	}
	decklist_cb.selectedIndex(index);
	decklist_cb.change();
	if (data.name == default_deck) {
		decks[index].label = decks[index].data + " (default)";
		default_deck = decks[index].data;
		decklist_cb.find('option').eq(index).text(decks[index].label);
	}
	loadDeck();
}

function newDeckE() {
	/*var options = "";
	options += '<option value="1">Becca, The Golden Knight</option>';
	options += '<option value="2">Tutaric, Venom Hero</option>';
	options += '<option value="3">Conquest, The First Rider of the End</option>';
	options += '<option value="4">Zooplo, Greed Cultist Master</option>';
	options += '<option value="5">Mika, The Combat Botanist</option>';
	getComboBox("New Deck", "Select a character for this deck:", options, 0, function(){
		getInput("New Deck", "Enter a name for your new deck:", "", 25, newDeck);
		showDim();
	});
	showDim();*/
	getInput("New Deck", "Enter a name for your new deck:", "", 25, function(){
		var options = "";
		options += '<option value="1">Becca, The Golden Knight</option>';
		options += '<option value="2">Tutaric, Venom Hero</option>';
		options += '<option value="3">Conquest, The First Rider of the End</option>';
		options += '<option value="4">Zooplo, Greed Cultist Master</option>';
		options += '<option value="5">Mika, The Combat Botanist</option>';
		getComboBox("New Deck", "Select a character for this deck:", options, 0, newDeck);
		showDim();
	});
	showDim();
}

function newDeck() {
	var name = $('#input .input_txt').val();
	if (name == "") {
		errorE("Deck name cannot be blank");
		return;
	}
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].data.toLowerCase() == name.toLowerCase()) {
			errorE("Deck with name exists");
			return;
		}
	}
	Send({"action":"New deck", "name":$('#input .input_txt').val(), "hero":~~$('#combo .combo_cb').val()});
	showDim();
}

function newDeckResponse(data) {
	hideDim();
	currentDeckId = data.id;
	data.label = data.name;
	data.data = data.name;
	data.hero = data.hero;
	$('#deck_hero').attr("src", getHeroSrc(data.hero));
	if (decks.length == 0) {
		data.label += ' (default)';
		default_deck = data.name;
	}
	for (var i = 0; i < decks.length; i++) {
		console.log('decks[' + i + '].data = ' + decks[i].data);
		if (decks[i].data.toLowerCase() > data.name.toLowerCase()) {
			break;
		}
	}
	decks.splice(i, 0, data);
	insertAt(i, '<option value="' + data.id + '">' + escapeHTML(data.name) + '</option>', decklist_cb);
	decklist_cb.selectedIndex(i);
	decklist_cb.change();
	clearDeck();
	enableDeckButtons();
	updateSavedDeckState();
	unsavedChanges = false;
	$('#search .name_txt').focus();
}

function renameDeckE() {
	if (!deck.id) {
		errorE("First, save your deck");
		return;
	}
	getInput("Rename deck", "Enter a new name for your deck:", deck.data, 25, renameDeck);
	showDim();
}

function renameDeck() {
	var name = $('#input .input_txt').val();
	if (name == "") {
		errorE("Deck name cannot be blank");
		return;
	}
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].data.toLowerCase() == name.toLowerCase()) {
			if (deck.data.toLowerCase() != name.toLowerCase()) {
				errorE("Deck with name exists");
				return;
			}
		}
	}
	Send({"action":"Rename deck", "id":deck.id, "deck":deck.data, "name":name});
	showDim();
}

function renameDeckResponse(data) {
	hideDim();
	var index = deckIndex();
	data.label = data.name;
	data.data = data.name;
	if (default_deck == decks[index].data) {
		default_deck = data.name;
		data.label += ' (default)';
	}
	var id = decks[index].id;
	decks.splice(index, 1);
	decklist_cb.find('option').eq(index).remove();
	messageE(data.message);
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].data.toLowerCase() > data.name.toLowerCase()) {
			break;
		}
	}
	decks.splice(i, 0, data);
	insertAt(i, '<option value="' + id + '">' + escapeHTML(data.label) + '</option>', decklist_cb);
	decklist_cb.selectedIndex(i);
	decklist_cb.change();
}

function setDefault() {
	Send({"action":"Set default", "name":deck.data, "id":deck.id});
	showDim();
}

function setDefaultResponse(data) {
	hideDim();
	default_deck = data.name;
	messageE(data.message);
	var index = deckIndex();
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].label.indexOf(" (default)") >= 0) {
			decks[i].label = decks[i].data;
			decklist_cb.find('option').eq(i).text(decks[i].label);
		}
		if (decks[i].data == default_deck) {
			decks[i].label = decks[i].data + ' (default)';
			decklist_cb.find('option').eq(i).text(decks[i].label);
			decklist_cb.val(decks[i].label);
		}
	}
	decklist_cb.selectedIndex(index);
	decklist_cb.change();
}

function enableDeckButtons() {
	$('#deck_constructor #export_btn').disable(false);
	$('#deck_constructor #clear_btn').disable(false);
	$('#deck_constructor .default_btn').disable(false);
	$('#deck_constructor #decklist_cb').disable(false);
	$('#deck_constructor #new_btn').disable(false);
	$('#deck_constructor #rename_btn').disable(false);
	$('#deck_constructor #delete_btn').disable(false);
	$('#deck_constructor #save_btn').disable(false);
	$('#deck_constructor #save_as_btn').disable(false);
}

function disableDeckButtons() {
	$('#deck_constructor #export_btn').disable(true);
	$('#deck_constructor #clear_btn').disable(true);
	$('#deck_constructor .default_btn').disable(true);
	$('#deck_constructor #decklist_cb').disable(true);
	$('#deck_constructor #new_btn').disable(true);
	$('#deck_constructor #rename_btn').disable(true);
	$('#deck_constructor #delete_btn').disable(true);
	$('#deck_constructor #save_btn').disable(true);
	$('#deck_constructor #save_as_btn').disable(true);
}

function fillDecklists(b) {
	var index = 0;
	var options = "";
	for (var i = 0; i < decks.length; i++) {
		options += '<option value="' + decks[i].id + '">' + escapeHTML(decks[i].label) + '</option>';
		if (decks[i].data == default_deck) {
			index = i;
		}
	}
	decklist_cb.html(options);
	decklist_cb.selectedIndex(index);
	if (b !== false) {
		decklist_cb.change();
	}
}

function updateDeckData() {
	var deckData = {};
	var main = [];
	for (var i = 0; i < deck_filled_arr.length; i++) {
		main.push(deck_filled_arr[i].data());
	}
	deckData = {"main":main};
	return deckData;
}

function getDeckCardIds() {
	var mainCards = [];
	for (var i = 0; i < deck_filled_arr.length; i++) {
		mainCards.push(deck_filled_arr[i].data("id"));
	}
	var cards = {"main":mainCards};
	return cards;
}

function exitDeckConstructorE() {
	if (unsavedChanges) {
		updateUnsavedDeckState();
		if (savedDeckState != unsavedDeckState) {
			getConfirmation("Save Changes", "You have made unsaved changes to your current deck. Do you want to save before continuing?", saveDeckAndExit, exitDeckConstructor);
			showDim();
			return;
		}
	}
	exitDeckConstructor();
}

function exitDeckConstructor() {
	gotoMainMenu();
	deckCleanup();
	updateActive(false);
}

function saveDeckAndExit() {
	exitAfterSave = true;
	saveDeck();
}

function deckCleanup() {
	clearDeck();
	tempMainState = [];
}

function Connect() {
	connection_success = false;
	connectTimer.start();
	try {
		websocket = new WebSocket(HOSTNAME);
		websocket.onopen = connectHandler;
		websocket.onmessage = handleData;
		websocket.onclose = closedE;
		websocket.onerror = closedE;
	}
	catch(e) {
		console.log(e);
	}
}

function Send(data) {
	try {
		websocket.send(data);
	}
	catch(e) {
		closedE();
	}
}

function Close() {
	updateActive(false);
	heartbeat_timer.reset();
	timeout_timer.reset();
	connectTimer.reset();
	hideDisplayBoxes();
	$('#chat_buttons').hide();
	$('#chats > div').hide();
	$('#tooltips > *').hide();
	$('#online_users .cell').detach();
	$('.cin_txt, .search_txt').val("");
	$('.chat').css("left", 3);
	$('.chat').css("top", 3);
	duel_active = false;
	duelist = false;
	deckCleanup();
	hosting = false;
	joining = false;
	try {
		websocket.onerror = null;
		websocket.onclose = null;
		websocket.close();
		websocket = null;
	}
	catch(err) {
		console.error(err);
	}
	if (duelId) {
		exitRPS();
		exitTP();
		exitDueling();
	}
}
	
function connectHandler() {
	Send({"action":"Connect", "username":username, "password":password, "session":session_id});
	got_heartbeat = true;
	heartbeat_timer.start();
	timeout_timer.start();
}

function connectTimeoutE() {
	Close();
	gotoFrontPage();
	errorE("Failed to connect");
}

function closedE(e) {
	if (!websocket) {
		//return;
	}
	Close();
	gotoFrontPage();
	errorE("Lost Connection");
}

function timeoutE() {
	if (!got_heartbeat) {
		closedE(e);
	}
}

function sendHeartbeat() {
	got_heartbeat = false;
	if (searching) {
		Send({"action":"Searching"});
	}
	else {
		Send({"action":"Heartbeat"});
	}
}

function onData(obj) {
	handleData({"data":JSON.stringify(obj)});
}

function handleData(e) {
	console.log(e.data);
	try {
		var data = JSON.parse(e.data);
	}
	catch(e) {
		errorE("Malformed server response");
		return;
	}
	got_heartbeat = true;
	timeout_timer.reset();
	timeout_timer.start();
	switch(data.action) {
		case "Connected":
			connectedE(data);
			break;
		case "Already logged in":
			Close();
			gotoFrontPage()
			errorE("Already logged into duel server elsewhere!");
			break;
		case "Rejected":
			goto("rejected");
			Close();
			logoutE();
			if (data.message) {
				errorE(data.message);
			}
			break;
		case "Online users":
			loadOnlineUsers(data);
			break;
		case "Online user":
			onlineUser(data);
			break;
		case "Offline user":
			offlineUser(data);
			break;
		case "Loaded duel chat":
			duelChatLoaded(data);
			break;
		case "Duel records":
			duelRecordsResponse(data.duels);
			break;
		case "Search cards":
			searchCardsResponse(data);	
			break;
		case "Load decks":
			if (currentLabel == "deck_constructor") {
				loadDeckResponse(data);
			}
			break;
		case "Load decklists":
			fillDecklist(data);	
			break;
		case "Save deck":
			saveDeckResponse(data);
			break;
		case "Set default":
			setDefaultResponse(data);
			break;
		case "Rename deck":
			renameDeckResponse(data);
			break;
		case "Delete deck":
			deleteDeckResponse(data);
			break;
		case "New deck":
			newDeckResponse(data);
			break;
		case "Kicked":
			goto("kicked");
			Close();
			break;
		case "Host duel":
			createJoinButton(data);
			break;
		case "Cancel duel":
			removeJoinButton(data.username);
			clickedHoster = null;
			break;
		case "Duel over":
			removeWatchButton(data.id);
			break;
		case "Join duel":
			joinDuelResponse(data);
			break;
		case "Leave duel":
			removeFromJoinlist(data);
			break;
		case "Reject user":
			if (currentLabel != "game_room" || data.username != clickedHoster) {
				return;
			}
			messageE("You were rejected from the duel");
			joining = false;
			setupHost();
			break;
		case "Add duel":
			createWatchButton(data);
			break;
		case "Accept user":
			startRPS(data);
			break;
		case "Load hosting":
			loadHostingResponse(data);
			break;
		case "Load watching":
			loadWatchingResponse(data);
			break;
		case "Watch duel":
			watchDuelResponse(data);
			break;
		case "Duel":
			duelResponse(data);
			resetDuelFocus();
			break;
		case "Stop and shuffle":
			exitViewing();
			cardMenuClicked(new Card(), "Shuffle deck");
			shuffleHandE();
			break;
		case "Timed out":
			updateActive(false);
			goto("timed_out");
			Close();
			break;
		case "Not online":
		case "Lost connection":
			Close();
			gotoFrontPage();
			errorE("Lost Connection!");
			break;
		case "Message":
			hideDim();
			messageE(data.message);
			if (exitAfterSave) {
				exitAfterSave = false;
				messageE(data.message, callback);
				showDim();
			}
			break;
		case "Error":
			hideDim();
			errorE(data.message);
			break;
		case "Unlock":
			hideDim();
			break;
		case "Open":
			hideDim();
			window.open(data.url);
			break;
		case "Duel error":
			duelError(data);
			break;
		case "Upload card":
			messageE(data.message);
			upload_card.data("id", data.id);
			updateCard();
			searchCards();
			break;
		case "Edit card":
			editCustomCardComplete(data);
			break;
	}
}

function duelError(data) {
	if (duelId > 0) {
		return;
	}
	if (inPool) {
		leavePoolE();
	}
	else if (hosting) {
		cancelDuel();
	}
	else if (joining) {
		leaveDuel();
	}
	errorE(data.message);
}
		
function connectedE(data) {
	connectTimer.reset();
	connection_success = true;
	username = data.username;
	userId = ~~data.id;
	admin = ~~data.admin;
	default_deck = data.default_deck;
	decks = [];
	for (var i = 0; i < data.decks.length; i++) {
		data.decks[i].label = data.decks[i].name;
		if (data.decks[i].name == default_deck) {
			data.decks[i].label += ' (default)';
		}
		decks.push({label:data.decks[i].label, data:data.decks[i].name, id:~~data.decks[i].id, deckData:null, hero:~~data.decks[i].hero});
	}
	$('#chat_buttons').show();
	$('#uploader_btn').hide();
	if (admin) {
		$('#uploader_btn').show();
	}
	gotoMainMenu();
	if (data.message) {
		messageE(data.message);
	}
	$('#online_users').hide();
	$('#duel_log').hide();
	$('#duel_log .chat_cb').checked(true);
	$('#duel_log .duel_cb').checked(true);
	$('#duel_log .game_cb').checked(true);
	$('#duel_log .private_cb').checked(true);
	$('#duel_log .usernames_cb').checked(false);
	$('#main_exit_btn').css("left", 332);
	if (admin) {
		$('#main_exit_btn').css("left", 573);
	}
}

function exitDuelRoomE() {
	exitDuelRoom();
	gotoMainMenu();
}

function exitDuelRoom() {
	hosting = false;
	joining = false;
	inPool = false;
	Send({"action":"Exit duel room"});
}

function leaveDuelRoom() {
	exitDuelRoom();
	exitDuel(false);
	hideDisplayBoxes();
	$('#duel_log').hide();
	if (currentLabel == "deck_constructor") {
		deckCleanup();
	}
}

function gotoMainMenu() {
	goto('main_menu');
	TweenMax.killAll();
	game_records_arr = [];
	deckData = null;
	unsavedChanges = false;
	lastFrame = "main_menu";
	hideDim();
}

function loadedE() {
	$('#edit_card').append($('#upload_card').html());
	$('#edit_card').attr("class", $('#upload_card').attr("class"));
	$('#edit_card .title_txt').text("EDIT");
	$('#edit_card .upload_btn').val("Save");
	initSite();
	$('select').selectedIndex(0);
	$('input[type="text"]').val("");
	$('textarea').val("");
	$('#input .input_txt').on('input', function(){
		var regex = $(this).data("regex");
		if ($(this).val().match(regex)) {
			$(this).val($(this).val().replace(regex, ""));
		}
	});
	$('#login .register_btn').click(showRegister);
	$('#login .login_btn').click(loginE);
	$('#login .remember_cb').checked(true);
	$('#register .back_btn').click(showLogin);
	$('#register .register_btn').click(registerE);
	$('#logged_in .logout_btn').click(logoutE);
	addButton($('#start_btn'), performStart);
	decklist_cb.change(deckChangeE);
	$('#online_btn').mouseenter(function(){
		$('#online_users_tooltip').show();
	});
	$('#online_btn').mouseout(function(){
		$('#online_users_tooltip').hide();
	});
	addDragging($('#online_users'), ".chat_top_bg", ".chat_background", function(){
		appendChat($('#online_users'));
	});
	$('#online_users .users').click(showActionList);
	$('#online_users .users').scroll(saveOnlineVSP);
	$('#online_users .search_txt').on("input", filterOnlineUsers);
	addButton($('#online_users .minimize_btn'), toggleOnline);
	
	$('#duel_log .export_btn').click(viewLog);
	
	addButton($('#room_btn'), gotoDuelRoom);
	addButton($('#deck_btn'), gotoDeckConstructor);
	addButton($('#records_btn'), gotoDuelRecords);
	addButton($('#password_btn'), gotoChangePassword);
	addButton($('#main_exit_btn'), mainExitE);
	addButton($('#uploader_btn'), gotoCustomCards);
	
	$('#action_list').mouseleave(hideActionList);
	$('#action_list').click(performListAction);
	
	addButton($('#online_btn'), toggleOnline);
	
	$('#hosting .accept_btn').click(acceptUser);
	$('#hosting .reject_btn').click(rejectUser);
	$('#hosting .cancel_btn').click(cancelDuel);
	$('#hosting #joinlist').dblclick(acceptUser);
	$('#joining .leave_btn').click(leaveDuel);
	;
	$('#host .host_btn').click(hostDuel);
	
	$('#game_room .default_btn').click(setDefault);
	$('#game_room .room_exit_btn').click(exitDuelRoomE);
	initSearcher();
	$('#deck_constructor #clear_btn').click(clearDeckE);
	$('#deck_constructor .default_btn').click(setDefault);
	$('#deck_constructor #new_btn').click(newDeckE);
	$('#deck_constructor #rename_btn').click(renameDeckE);
	$('#deck_constructor #delete_btn').click(deleteDeckE);
	$('#deck_constructor #save_btn').click(saveDeck);
	$('#deck_constructor #save_as_btn').click(saveDeckAs);
	$('#deck_constructor .room_exit_btn').click(exitDeckConstructorE);
	if (!mobile) {
		$('#deck_mask, #limit_reached').contextmenu(function(){
			return false;
		});
	}
	$('#deck_constructor .info_btn').mouseenter(function(){
		$('#randomize_tooltip').show();
	});
	$('#deck_constructor .info_btn').mouseout(function(){
		$('#randomize_tooltip').hide();
	});
	addButton($('#deck_constructor .sort_btn'), sortDeck);
	addButton($('#deck_constructor .info_btn'), randomizeDeck);
	
	$('#change_password .change_btn').click(changePassword);
	$('#change_password .room_exit_btn').click(gotoMainMenu);
	
	$('#game_records .type_cb').change(loadDuelRecords);
	$('#game_records .period_cb').change(loadDuelRecords);
	$('#game_records .filter_txt').on('input', filterDuelRecords);
	$('#game_records .room_exit_btn').click(gotoMainMenu);
	$('#game_records .content').scroll(duelRecordsScrollE);
	
	initUploader();
	$('#custom_cards #upload_card_btn').click(showUploader);
	$('#custom_cards #edit_card_btn').click(showEditor);
	$('#custom_cards #my_cards_btn').click(showMyCards);
	$('#custom_cards .clear_btn').click(clearCard);
	$('#custom_cards .room_exit_btn').click(gotoMainMenu);
	$('#custom_cards .ocg_limit_rb').hide();
	$('#custom_cards .delete_btn').click(deleteCardE);
	my_card = new CardFront();
	my_card.css("transform", "scale(0.5253, 0.5301)");
	my_card.initialize();
	my_card.removeImage();
	//my_card.click(openCard);
	$('#my_card').html(my_card);
	
	$('#defeat_btn').click(admitDefeatE);
	$('#rematch_btn').click(rematchE);
	$('#end_turn').click(endTurnE);
	$('#end_turn').mouseenter(endTurnOver);
	$('#end_turn').mouseleave(endTurnOut);
	$('#start_turn').click(startTurnE);
	$('#duel .cin_txt').click(setDuelFocus);
	$('#duel .cin_txt').focus(setDuelFocus);
	$('#duel .cin_txt').on('input', duelChatTypeE);
	$('#view > .content').scroll(removeCardMenu);
	$('#shuffle_btn').click(shuffleHandE);
	$('#show_hand_btn').click(showHandE);
	$('#life_txt').click(setDuelFocus);
	$('#life_txt').focus(setDuelFocus);
	$('#life_txt').keydown(moveDuelFocus);
	$('#minus_btn').click(showPlus);
	$('#plus_btn').click(showMinus);
	$('#minus_btn, #plus_btn').mouseenter(function(){
		$('#minus_bg').show();
	});
	$('#minus_btn, #plus_btn').mouseout(function(){
		$('#minus_bg').hide();
	});
	$('#deck_hidden').mouseenter(showDeckMenu);
	$('#select_zones div').click(chooseZone);
	for (var i = 0; i < counters.length; i++) {
		counters[i].css("cursor", "pointer");
		counters[i].mousedown(counterE);
	}
	$('#duel_quit_btn').click(exitDuelE);
	$('#draw_btn').click(drawE);
	$('#reset_btn').click(resetDeckE);
	menu.mouseleave(menuRollOutE);
	counter_btn.mousedown(counterE);
	addButton($('#duel .token_btn'), tokenE);
	addButton($('#die_btn'), dieE);
	addButton($('#coin_btn'), coinE);
	
	goto('front_page');
	checkLoggedIn();
}

function Send(data) {
	action = JSON.stringify(data, function(k,v){
		if (v == null) {
			v = undefined;
		}
		return v;
	});
	resend();
}

function resend() {
	searching = false;
	if (!websocket) {
		console.log(action);
		hideDim();
		return;
	}
	try {
		websocket.send(action);
	}
	catch(e) {
		console.log('Failed to send data');
		closedE();
	}
}

function getLog(str) {
	Send({"action":"Get log", "username":str});
}

function hideActionList(e) {
	action_list.hide();
	$('body').off('mouseup', hideActionList);
	$('#online_users .users').on('click', showActionList);
}

function showActionList(e) {
	if (!admin) {
		return;
	}
	if (!$(e.target).hasClass("cell")) {
		return;
	}
	clickedUsername = e.target.textContent;
	$('#online_users .users').data("selectedItem", $(e.target));
	var index = 0;
	$('#online_users .users .cell:visible').each(function(i,e){
		if (e.textContent == clickedUsername) {
			return false;
		}
		index++;
	});
	var arr = [];
	arr.push("Get log");
	arr.push("Kick user");
	
	action_list.html("");
	for (var i = 0; i < arr.length; i++) {
		var cell = new $(Cell(upperCamelCase(arr[i])));
		cell.data("data", arr[i]);
		action_list.append(cell);
	}
	$('#chats').append(action_list);
	action_list.css("left", parseInt($('#online_users').css("left")) + parseInt($('#online_users').css("width")) - 1);
	action_list.css("top", index * 20 + parseInt($('#online_users').css("top")) + parseInt($('#online_users .chat_background').css("top")) - $('#online_users .users').scrollTop() - 0.5);
	action_list.css("height", arr.length * 20);
	action_list.show();
	if (!mobile) {
		$('body').on('mouseup', hideActionList);
	}
	$('#online_users .users').off('click', showActionList);
}

function DuelButton(data) {
	var duel_button = $('<div class="duelbutton"><div class="background"></div></div>');
	
	var glow = $('<div class="glow"><div class="background"></div></div>');
	glow.css("opacity", 0.7);
	duel_button.append(glow);
	
	duel_button.mouseenter(function(){
		glow.show();
	});
	duel_button.mouseleave(function(){
		glow.hide();
		glow.css("opacity", 0.7);
	});
	duel_button.mousedown(function(){
		glow.css("opacity", 0.4);
	});
	duel_button.mouseup(function(){
		glow.css("opacity", 0.7);
	});
	return duel_button;
}

function JoinButton(data) {
	log('a');
	var join_button = new DuelButton(data);
	join_button.addClass("joinbutton");
	join_button.data("username", data.u);
	join_button.data("format", data.f);
	$('body').append(join_button);
	
	var username_txt = $('<span class="username_txt"></span>');
	username_txt.text(data.u);
	join_button.append(username_txt);
	
	join_button.click(function(){
		joinDuelE($(this));
	});
	log('b');
	return join_button;
}

function WatchButton(data) {
	for (var i = 0; i < watch_buttons_arr.length; i++) {
		if (watch_buttons_arr[i].data("id") == data.id) {
			return watch_buttons_arr[i];
		}
	}
	var watch_button = new DuelButton(data);
	watch_button.addClass("watchbutton");
	
	var title_txt = $('<span class="title_txt"></span>');
	if (data.p2.u) {
		title_txt.text(data.p1.u + " | " + data.p2.u);
	}
	else {
		title_txt.html(escapeHTML(data.p1.u) + " <i>(Solo Mode)</i>");
	}
	watch_button.append(title_txt);
	
	watch_button.data("id", data.id);
	watch_button.data("username", data.p1.u);
	if (data.p1.u > data.p2.u) {
		watch_button.data("username", data.p2.u);
	}
	watch_button.data("username1", data.p1.u);
	watch_button.data("username2", data.p2.u);
	
	watch_button.click(watchDuelE);
	watch_buttons_arr.push(watch_button);
	return watch_button; // 508
}

function watchDuelE() {
	clickedDuel = $(this).data("id");
	watchDuel();
}

function watchDuel() {
	showDim();
	Send({"action":"Watch duel", "id":clickedDuel});
}

function DuelRecord(data) {
	var record = $('<div class="duel_record selectable"></div>');
	record.data("id", data.id);
	record.data("user_id", userId);
	record.data("username", data.username);
	var master = $('#game_records .username_txt').val() == "";
	
	var username_txt = $('<span class="username_txt bisque"></span>');
	if (data.username) {
		username_txt.text(data.username);
	}
	else {
		username_txt.text("(Solo Mode)");
		username_txt.css("font-style", "italic");
	}

	var result_txt = $('<span class="result_txt"></span>');
	if (!data.user_id && data.winner_id == userId || data.user_id && data.user_id == data.winner_id) {
		result_txt.text("WIN");
		result_txt.css("color", "#009900");
	}
	else if (data.winner_id != 0) {
		result_txt.text("LOSE");
		result_txt.css("color", "#FF0000");
	}
	else if (data.draw == 1) {
		result_txt.text("DRAW");
	}
	else {
		result_txt.text("N/A");
		result_txt.css("color", "white");
	}

	var date_txt = $('<span class="date_txt"></span>');
	date_txt.text(data.date);

	record.append(username_txt);
	record.append(result_txt);
	record.append(date_txt);

	var replay_btn = $('<span class="replay_btn">Replay</span>');
	replay_btn.click(function(){
		var url = URL_START + "replay?id=" + data.id;
		window.open(url);
	});
	record.append(replay_btn);
	
	var log_btn = $('<span class="log_btn">Log</span>');
	log_btn.click(function(){
		var url = URL_START + "log?id=" + data.id;
		window.open(url);
	});
	record.append(log_btn);
	return record;
}

function sortOnlineUsers() {
	online_users_data.sort(function(a,b){
		if (a.u.toLowerCase() < b.u.toLowerCase()) {
			return -1;
		}
		if (a.u.toLowerCase() > b.u.toLowerCase()) {
			return 1;
		}
		return 0;
	});
}

function loadOnlineUsers(data) {
	online_users_data = data.users;
	sortOnlineUsers();
	var frag = "";
	for (var i = 0; i < online_users_data.length; i++) {
		frag += onlineUser(online_users_data[i], true);
	}
	$('#online_users .users').html(frag);
	$('#online_users .total_txt').text('Users online: ' + $('#online_users .cell').length);
}

function saveOnlineVSP() {
	online_vsp = $('#online_users .users').scrollTop();
}

function restoreOnlineVSP() {
	$('#online_users .users').scrollTop(online_vsp);
}

function sortCells(list) {
	list.sortElements(function(a, b){
		if (a.textContent.toLowerCase() < b.textContent.toLowerCase()) {
			return -1;
		}
		if (a.textContent.toLowerCase() > b.textContent.toLowerCase()) {
			return 1;
		}
		return 0;
	});
}

function filterOnlineUsers(e) {
	if ($('#online_users .search_txt').val() != "") {
		var u = $('#online_users input').val();
		$('#online_users .cell').each(function(i,e){
			if (e.textContent.toLowerCase().indexOf(u.toLowerCase()) < 0) {
				e.style.display = "none";
			}
			else {
				e.style.display = "block";
			}
		});
	}
	else if (e) {
		$('#online_users .users').find(":hidden").each(function(i,e){
			e.style.display = "block";
		});
	}
}

function isOnline(str) {
	var online = true;
	online_users.find('.cell').each(function(i,e){
		if (e.textContent == str) {
			return online = false;
		}
	});
	return !online;
}

function onlineUser(data, b) {
	if (data.u) {
		data.username = data.u;
	}
	if (!b && isOnline(data.username)) {
		return;
	}
	var cell = new Cell(data.username);
	if (b) {
		return cell.outerHTML;
	}
	data.u = data.username;
	online_users_data.push(data);
	sortOnlineUsers();
	insertAt(online_users_data.indexOf(data), cell, $('#online_users .users'));
	$('#online_users .total_txt').text('Users online: ' + $('#online_users .cell').length);
	filterOnlineUsers();
}

function offlineUser(data) {
	var arr = online_users.find('.cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i)[0].textContent == data.username) {
			arr.eq(i).remove();
			break;
		}
	}
	$('#online_users .total_txt').text('Users online: ' + $('#online_users .cell').length);
	for (i = 0; i < online_users_data.length; i++) {
		if (online_users_data[i].username == data.username) {
			online_users_data.splice(i, 1);
			break;
		}
	}
}
		
function toggleOnline() {
	if ($('#online_users').is(':visible')) {
		saveOnlineVSP();
		$('#online_users').hide();
	}
	else {
		determineChatX($('#online_users'));
		$('#online_users').show();
		$('#chats').append($('#online_users'));
		restoreOnlineVSP();
		online_users.find('.search_txt').focus();
		online_users.find('.search_txt').select();
		active_scrollpane = online_users.find('.scrollpane');
	}
}

function gotoCustomCards(e) {
	$('#search').insertAfter($('#edit_card'));
	goto('custom_cards');
	resetSearch();
	edit_card.data("id", 0);
	clearCard();
	showUploader(e);
	toggleLink();
	searched = false;
	preview.hide();
	$('#custom_cards .cards').append(preview);	
	$('#upload_card .hero_cb').selectedIndex(0);
	$('#upload_card .card_type_cb').selectedIndex(0);
	preview_txt.insertAfter(preview);
	preview_txt.hide();
}

function showUploader(e) {
	$('#upload_card').show();
	$('#upload_card').data("username", username);
	$('#edit_card').hide();
	$('#search').hide();
	removeSearchCards();
	$('#upload_card_btn').disable(true);
	$('#edit_card_btn').disable(true);
	if (~~$('#edit_card').data("id") != 0) {
		$('#edit_card_btn').disable(false);
	}
	$('#my_cards_btn').disable(false);
	$('#custom_cards .clear_btn').show();
	$('#custom_cards .delete_btn').hide();
	if (e) {
		my_card.removeImage();
		updateCard();
	}
	$('#upload_card .name_txt').focus();
}

function showEditor(e) {
	$('#upload_card').hide();
	$('#edit_card').show();
	$('#search').hide();
	removeSearchCards();
	$('#upload_card_btn').disable(false);
	$('#edit_card_btn').disable(true);
	$('#my_cards_btn').disable(false);
	$('#custom_cards .clear_btn').hide();
	$('#custom_cards .delete_btn').show();
	if (e) {
		my_card.removeImage();
		updateCard();
	}
}

function showMyCards(e) {
	$('#upload_card').hide();
	$('#edit_card').hide();
	$('#search').show();
	$('#upload_card_btn').disable(false);
	$('#edit_card_btn').disable(true);
	if (~~$('#edit_card').data("id") != 0) {
		$('#edit_card_btn').disable(false);
	}
	$('#my_cards_btn').disable(true);
	$('#custom_cards .clear_btn').hide();
	$('#custom_cards .delete_btn').hide();
	for (var i = 0; i < search_arr.length; i++) {
		$('#custom_cards .cards').append(search_arr[i]);
	}
	if (!searched) {
		searchCardsE(e);
		searched = true;
	}
	$('#search .name_txt').focus();
}

function clearCard() {
	upload_card.find('.name_txt').val("");
	upload_card.find('.desc_txt').val("");
	upload_card.find('.card_type_cb').selectedIndex(0);
	upload_card.find('.hero_cb').selectedIndex(0);
	upload_card.find('.level_txt').val("");
	upload_card.find('.power_txt').val("");
	upload_card.data("pic", "0");
	updateCard();
	my_card.data("pic", "0");
	my_card.removeImage();
	upload_card.find('.name_txt').focus();
}

function removeSearchCards() {
	$('.search_card').detach();
}

function editCardE(e) {
	if (currentLabel != "custom_cards") {
		return;
	}
	var card = $(e.currentTarget);
	my_card.copyCard(card);
	edit_card.data("id", card.data("id"));
	edit_card.data("pic", card.data("pic"));
	showEditor();
	edit_card.find('.name_txt').val(card.data("name"));
	edit_card.find('.desc_txt').val(card.data("effect"));
	edit_card.find('.card_type_cb').selectedIndex(edit_card.find('.card_type_cb option[value=' + card.data("card_type") + ']').index());
	edit_card.find('.hero_cb').selectedIndex(edit_card.find('.hero_cb option[value="' + card.data("hero") + '"]').index());
	edit_card.find('.level_txt').val(card.data("level"));
	edit_card.find('.power_txt').val(card.data("power"));
	updateCard();
}

function initSearcher() {
	$('#search .search_btn').click(searchCardsE);
	addButton($('#search .search_next_btn'), searchCardsNextPage);
	addButton($('#search .search_prev_btn'), searchCardsPrevPage);
	$('#search .card_cb').change(cardChangeE);
}

function initUploader() {
	$('.uploader .name_txt').on("input", updateCard);
	$('.uploader .desc_txt').on("input", updateCard);
	$('.uploader .card_type_cb').change(updateCard);
	$('.uploader .hero_cb').change(updateCard);
	$('.uploader .level_txt').on("input", updateCard);
	$('.uploader .power_txt').on("input", updateCard);
	restrictInt($('.uploader .level_txt'));
	restrictInt($('.uploader .power_txt'));
	$('#upload_card .upload_btn').click(uploadCardE);
	$('#edit_card .upload_btn').click(saveEditCard);
	$('#custom_cards .browse_btn').click(uploadCustomPicE);
	$('#custom_cards .browse2_btn').change(uploadCustomPic);
	if ($('#custom_cards .browse2_btn').data("proxy")) {
		$('#custom_cards .browse2_btn').data("proxy").hide();
	}
}

function updateCard() {
	searching = true;
	var obj = upload_card;
	if (edit_card.is(':visible')) {
		obj = edit_card;
	}
	var id = obj.data("id");
	var name = obj.find('.name_txt').val();
	var effect = obj.find('.desc_txt').val();
	var card_type = obj.find('.card_type_cb').val();
	var hero = obj.find('.hero_cb').val();
	var level = ~~obj.find('.level_txt').val();
	var power = ~~obj.find('.power_txt').val();
	var pic = obj.data("pic");
	my_card.initializeFromData({"id":id, "name":name, "level":level, "effect":effect, "card_type":card_type, "hero":hero, "power":power, "pic":pic});
}

function uploadCardE() {
	saveCustomCard("Upload card");
}

function saveEditCard() {
	saveCustomCard("Edit card");
}

function saveCustomCard(action) {
	var obj = upload_card;
	if (edit_card.is(":visible")) {
		obj = edit_card;
	}
	if (obj.find('.name_txt').val() == "") {
		errorE("Name is blank");
		return;
	}
	Send({
		"action":action,
		"id":obj.data("id"),
		"name":obj.find('.name_txt').val(),
		"effect":obj.find('.desc_txt').val(),
		"card_type":obj.find('.card_type_cb').val(),
		"hero":obj.find('.hero_cb').val(),
		"level":~~obj.find('.level_txt').val(),
		"power":~~obj.find('.power_txt').val()
	});
	showDim();
}

function editCustomCardComplete(data) {
	messageE(data.message);
	my_card.data("custom", edit_card.find('.privacy_cb').prop("selectedIndex") == 0 ? 2 : 1);
	preview.copyCard(my_card);
	for (var i = 0; i < search_arr.length; i++) {
		if (search_arr[i].data("id") == my_card.data("id")) {
			search_arr[i].copyCard(my_card);
			search_arr[i].setLimit();
		}
	}
	clearDecks();
}

function uploadCustomPicE() {
	if (~~my_card.data("id") == 0) {
		errorE("You can upload an image after uploading a card or while editing a card");
		return;
	}
	$('#custom_cards .browse2_btn').click();
}

function uploadCustomPic() {
	var file = this.files[0];
	var fd = new FormData();
	fd.append("card_id", my_card.data("id"));
	fd.append("user_id", userId);
	fd.append("username", username);
	fd.append("password", password);
	fd.append("date", new Date());
	fd.append("Filedata", file);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "upload-card-pic.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText);
			if (data.action == "Error") {
				errorE(data.message);
				return;
			}
			customCompleteE(data);
		}
	}
	xhr.send(fd);
	$(':focus').blur();
	showDim();
}

function customCompleteE(data) {
	hideDim();
	var obj = upload_card;
	if (edit_card.is(":visible")) {
		obj = edit_card;
	}
	obj.data("pic", data.pic);
	my_card.data("pic", data.pic);
	log('just set my_card pic = ' + data.pic);
	//obj.data("pic", (~~obj.data("pic") + 1).toString());
	//my_card.data("pic", obj.data("pic"));
	my_card.loadImage();
	updateCustomCards(my_card);
}

function updateCustomCards(card) {
	if (preview.data("id") == card.data("id")) {
		preview.copyCard(card);
	}
	for (var i = 0; i < search_arr.length; i++) {
		if (search_arr[i].data("id") == card.data("id")) {
			search_arr[i].copyCard(card);
			search_arr[i].setLimit();
		}
	}
	clearDecks();
}

function hideArrows(obj) {
	obj.find('.arrows').css("opacity", 0.5);
	obj.find('.arrows div').each(function(){
		var src = $(this).find('img').attr("src");
		if (src.indexOf('red') >= 0) {
			src = src.replace('red', 'black');
		}
		$(this).find('img').attr("src", src);
	});
	obj.find('.arrows').css("pointer-events", "none");
}

function showArrows(obj) {
	obj.find('.arrows').css("opacity", 1);
	obj.find('.arrows').css("pointer-events", "auto");
}

function cardChangeE() {
	var obj = $('#search');
	if (currentLabel == "custom_cards") {
		if ($('#upload_card').is(':visible')) {
			obj = $('#upload_card');
		}
		if ($('#edit_card').is(':visible')) {
			obj = $('#edit_card');
		}
	}
	var arr = [];
	switch(obj.find('.card_cb').val()) {
		case "":
			obj.find('.card2_cb').selectedIndex(0);
			obj.find('.card2_cb').disable(true);
			obj.find('.type_cb').selectedIndex(0);
			obj.find('.type_cb').disable(true);
			obj.find('.type2_cb').selectedIndex(0);
			obj.find('.type2_cb').disable(true);
			obj.find('.attrib_cb').selectedIndex(0);
			obj.find('.attrib_cb').disable(true);
			obj.find('.level_txt').val("");
			obj.find('.level_txt').disable(true);
			obj.find('.lvll_txt').val("");
			obj.find('.lvll_txt').disable(true);
			obj.find('.lvlh_txt').val("");
			obj.find('.lvlh_txt').disable(true);
			obj.find('.atk_txt').val("");
			obj.find('.atk_txt').disable(true);
			obj.find('.atkl_txt').val("");
			obj.find('.atkl_txt').disable(true);
			obj.find('.atkh_txt').val("");
			obj.find('.atkh_txt').disable(true);
			obj.find('.def_txt').val("");
			obj.find('.def_txt').disable(true);
			obj.find('.defl_txt').val("");
			obj.find('.defl_txt').disable(true);
			obj.find('.defh_txt').val("");
			obj.find('.defh_txt').disable(true);
			obj.find('.pendulum_cb').disable(true);
			obj.find('.pendulum_cb').checked(false);
			obj.find('.scale_txt').disable(true);
			obj.find('.scalel_txt').disable(true);
			obj.find('.scalel_txt').val("");
			obj.find('.scaleh_txt').disable(true);
			obj.find('.scaleh_txt').val("");
			obj.find('.pendulum_effect_txt').prop("disabled", true);
			obj.find('.pendulum_effect_txt').val("");
			break;
		case "Monster":
			obj.find('.card2_cb').selectedIndex(0);
			obj.find('.card2_cb').disable(false);
			obj.find('.type_cb').selectedIndex(0);
			obj.find('.type_cb').disable(false);
			obj.find('.type2_cb').selectedIndex(0);
			obj.find('.type2_cb').disable(false);
			obj.find('.attrib_cb').selectedIndex(0);
			obj.find('.attrib_cb').disable(false);
			obj.find('.level_txt').disable(false);
			obj.find('.lvll_txt').disable(false);
			obj.find('.lvlh_txt').disable(false);
			obj.find('.atk_txt').disable(false);
			obj.find('.atkl_txt').disable(false);
			obj.find('.atkh_txt').disable(false);
			obj.find('.def_txt').disable(false);
			obj.find('.defl_txt').disable(false);
			obj.find('.defh_txt').disable(false);
			obj.find('.pendulum_cb').disable(false);
			obj.find('.scale_txt').disable(true);
			obj.find('.scalel_txt').disable(true);
			obj.find('.scaleh_txt').disable(true);
			obj.find('.pendulum_effect_txt').prop("disabled", true);
			showArrows(obj);
			arr = ["", "Aqua", "Beast", "Beast-Warrior", "Cyberse", "Dinosaur", "Divine-Beast", "Dragon", "Fairy", "Fiend", "Fish", "Insect", "Machine", "Plant", "Psychic", "Pyro", "Reptile", "Rock", "Sea Serpent", "Spellcaster", "Thunder", "Warrior", "Winged Beast", "Wyrm", "Zombie"];
			break;
		case "Spell":
			arr = ["", "Normal", "Continuous", "Equip", "Quick-Play", "Field", "Ritual"];
			stEnable();
			break;
		case "Trap":
			arr = ["", "Normal", "Continuous", "Counter"];
			stEnable();
			break;
	}
	fillCombobox(obj.find('.type_cb'), arr);
	toggleLink();
}

function stEnable() {
	var obj = $('#search');
	if (currentLabel == "custom_cards") {
		if ($('#upload_card').is(':visible')) {
			obj = $('#upload_card');
		}
		if ($('#edit_card').is(':visible')) {
			obj = $('#edit_card');
		}
	}
	obj.find('.card2_cb').selectedIndex(0);
	obj.find('.card2_cb').disable(true);
	obj.find('.type_cb').selectedIndex(0);
	obj.find('.type_cb').disable(false);
	obj.find('.type2_cb').selectedIndex(0);
	obj.find('.type2_cb').disable(true);
	obj.find('.attrib_cb').selectedIndex(0);
	obj.find('.attrib_cb').disable(true);
	obj.find('.level_txt').val("");
	obj.find('.level_txt').disable(true);
	obj.find('.lvll_txt').val("");
	obj.find('.lvll_txt').disable(true);
	obj.find('.lvlh_txt').val("");
	obj.find('.lvlh_txt').disable(true);
	obj.find('.atk_txt').val("");
	obj.find('.atk_txt').disable(true);
	obj.find('.atkl_txt').val("");
	obj.find('.atkl_txt').disable(true);
	obj.find('.atkh_txt').val("");
	obj.find('.atkh_txt').disable(true);
	obj.find('.def_txt').val("");
	obj.find('.def_txt').disable(true);
	obj.find('.defl_txt').val("");
	obj.find('.defl_txt').disable(true);
	obj.find('.defh_txt').val("");
	obj.find('.defh_txt').disable(true);
	obj.find('.pendulum_cb').checked(false);
	obj.find('.pendulum_cb').disable(true);
	obj.find('.scale_txt').val("");
	obj.find('.scale_txt').disable(true);
	obj.find('.scalel_txt').val("");
	obj.find('.scalel_txt').disable(true);
	obj.find('.scaleh_txt').val("");
	obj.find('.scaleh_txt').disable(true);
	obj.find('.pendulum_effect_txt').val("");
	obj.find('.pendulum_effect_txt').prop("disabled", true);
	hideArrows(obj);
}

function togglePendulum() {
	var obj = $('#upload_card');
	if ($('#edit_card').is(':visible')) {
		obj = $('#edit_card');
	}
	if (obj.find('.pendulum_cb').prop("checked")) {
		obj.find('.scale_txt').disable(false);
		obj.find('.pendulum_effect_txt').prop("disabled", false);
	}
	else {
		obj.find('.scale_txt').val("");
		obj.find('.scale_txt').disable(true);
		obj.find('.pendulum_effect_txt').val("");
		obj.find('.pendulum_effect_txt').prop("disabled", true);
	}
	updateCard();
}

function toggleLink() {
	var obj = $('#upload_card');
	if ($('#edit_card').is(':visible')) {
		obj = $('#edit_card');
	}
	if (obj.find('.card2_cb').val() == "Link") {
		obj.find('.def_txt').val("?");
		obj.find('.def_txt').disable(true);
		obj.find('.pendulum_cb').checked(false);
		obj.find('.pendulum_cb').disable(true);
		obj.find('.scale_txt').val("");
		obj.find('.scale_txt').disable(true);
		obj.find('.pendulum_effect_txt').val("");
		obj.find('.pendulum_effect_txt').prop("disabled", true);
		showArrows(obj);
		updateCard();
	}
	else {
		if (obj.find('.card_cb').val() == "Monster") {
			obj.find('.def_txt').disable(false);
			if (obj.find('.def_txt').val() == "?") {
				obj.find('.def_txt').val("");
			}
			obj.find('.pendulum_cb').disable(false);
		}
		togglePendulum();
		hideArrows(obj);
	}
}

function searchCardsResponse(data) {
	console.log(JSON.stringify(data));
	if (data.full_search != undefined) {
		full_search = data.full_search;
	}
	hideDim();
	countSearch();
	for (var i = 0; i < data.cards.length; i++) {
		if (i >= 20) {
			break;
		}
		if (search_arr.length < i + 1) {
			search_arr.push(new SearchCard(i));
		}
		if (search_arr[i].parent().length == 0 && $('#search').is(":visible")) {
			$('#' + currentLabel + ' .cards').append(search_arr[i]);
		}
		search_arr[i].show();
		search_arr[i].initializeAndLimit(data.cards[i]);
		var card = search_arr[i];
		TweenMax.set(card, {delay:0.005, onComplete:function(card){
			card[0].style.display = "block"; // search cards won't show up the first time without this
		}, onCompleteParams:[card, "card"]});
	}
	totalCardsSearched = data.total;
	$('#search').find('.page_txt').text(pageNumber);
	$('#search').find('.tot_pages_txt').text(Math.ceil(totalCardsSearched / 20));
	if ((pageNumber * 20) < totalCardsSearched) {
		$('#search').find('.search_next_btn').css("pointer-events", "all");
	}
	else {
		$('#search').find('.search_next_btn').css("pointer-events", "none");
	}
	if (pageNumber == 1) {
		$('#search').find('.search_prev_btn').css("pointer-events", "none");
	}
	else {
		$('#search').find('.search_prev_btn').css("pointer-events", "all");
	}
	if (awaiting_cards) {
		allCards = data.cards;
		awaiting_cards = false;
	}
}

function countSearch() {
	for (var i = 0; i < search_arr.length; i++) {
		search_arr[i].hide();
	}
}

function cardDownE(e) {
	if (currentLabel == "custom_cards") {
		editCardE(e);
		return;
	}
	var card = $(this);
	if (e.which == 3) {
		cardRightClickE(e, card);
		return;
	}
	draggedCard = new CardFront();
	draggedCard.css("transform", card.css("transform"));
	draggedCard.copyCard(card);
	draggedCard.setLimit();
}

function addCardDragging(card, start_callback, end_callback) {
	card.on("mouseenter mousedown", previewE);
	card.mousedown(cardDownE);
	card.draggable({
		"scroll":false,
		"start":function(e, ui){
			draggedCard.find('.name_txt').css("transform", card.find('.name_txt').css("transform"));
			draggedCard = new CardFront();
			draggedCard.copyCard(card);
			/*if (card.hasClass("search_card") && limitReached(card)) {
				$('#limit_reached').show();
				$('#limit_reached').css("left", card.css("left"));
				$('#limit_reached').css("top", card.css("top"));
				$('html').mouseup(hideLimitReached);
				e.preventDefault();
				return;
			}*/
			if (start_callback) {
				start_callback(card);
			}
			updateMouse(e);
			dragXOffset = mouseXScaled - parseInt(card.css("left"));
			dragYOffset = mouseYScaled - parseInt(card.css("top"));
			ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
		}, "helper":function(e, ui){
			return draggedCard;
		}, "drag":function(e, ui){
			updateMouse(e);
			ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
		}, "stop":function(){
			end_callback(draggedCard);
		}
	});
	if (!mobile) {
		card.contextmenu(function(e){
			return false;
		});
	}
}

function enterHandler(e) {
	switch(e.which) {
		case 16: // shift
			shiftDown = true;
			$('html').keyup(onKeyUp);
			break;
		case 17: // control
		case 91: // command chrome
		case 224: // command firefix
			log('controlDown');
			controlDown = true;
			$('html').keyup(onKeyUp);
			break;
		case 65: // a
			if (controlDown) {
				setTimeout(function(){
					if (controlFocus[0] instanceof HTMLSpanElement || controlFocus[0] instanceof HTMLDivElement || controlFocus[0] instanceof HTMLFontElement) {
						if ($(':focus').length == 0 || $(':focus').attr("tabindex") == "0") {
							clearSelection();
							selectText(controlFocus[0]);
						}
					}
				}, 5);
			}
			break;
		case 37: // left
		case 38: // up
		case 39: // right
		case 40: // down
			arrowKeyE(e);
			break;
		case 33:
		case 34:
			e.preventDefault();
			$('html').trigger({type:"keydown", which:e.which == 33 ? 38 : 40});
			break;
		case 13:
			if (!$(':focus')[0]) {
				if ($('#msg').is(":visible")) {
					msgOK();
				}
				if ($('#input').is(":visible")) {
					inputOK();
				}
				if ($('#confirm').is(":visible")) {
					confirmYes();
				}
				if ($('#combo').is(":visible")) {
					comboOK();
				}
				console.log('returning');
				return;
			}
			switch(currentLabel) {
				case "front_page":
					switch(document.activeElement) {
						case $('#login .username_txt')[0]:
						case $('#login .password_txt')[0]:
							loginE();
							break;
						case $('#register .username_txt')[0]:
						case $('#register .password_txt')[0]:
						case $('#register .email_txt')[0]:
							registerE();
							break;
					}
					break;
				case "custom_cards":
				case "deck_constructor":
					switch(document.activeElement) {
						case $('#search .name_txt')[0]:
						case $('#search .desc_txt')[0]:
						case $('#search .lvll_txt')[0]:
						case $('#search .lvlh_txt')[0]:
						case $('#search .atkl_txt')[0]:
						case $('#search .atkh_txt')[0]:
						case $('#search .defl_txt')[0]:
						case $('#search .defh_txt')[0]:
						case $('#search .scalel_txt')[0]:
						case $('#search .scaleh_txt')[0]:
							searchCardsE(e);
							break;
					}
					break;
				case "change_password":
					switch(document.activeElement) {
						case $('#change_password .current_txt')[0]:
						case $('#change_password .new_txt')[0]:
						case $('#change_password .confirm_txt')[0]:
							changePassword();
							break;
					}
					break;
				case "game_records":
					switch(document.activeElement) {
						case $('#game_records .username_txt')[0]:
						case $('#game_records .type_cb')[0]:
						case $('#game_records .period_cb')[0]:
							loadDuelRecords();
							break;
					}
				case "rps_start":
				case "tp_start":
				case "duel_start":
				case "siding":
					switch(document.activeElement) {
						case $('#duel .cin_txt')[0]:
							if ($('#duel .cin_txt').val() == "") {
								return;
							}
							Send({"action":"Duel", "play":"Duel message", "message":$('#duel .cin_txt').val()});
							$('#duel .cin_txt').val("");
							break;
						case $('#duel #life_txt')[0]:
							lifeEnterHandler(e);
							break;
					}
					break;
			}
			switch(document.activeElement) {
				case $('#combo .combo_cb')[0]:
					comboOK();
					break;
				case $('#input .input_txt')[0]:
					inputOK();
					break;
				case $('#duel_log .search_txt')[0]:
					lookupCard($('#duel_log .search_txt').val());
					break;
			}
	}
}
	
function cardRightClickE(e, card) {
	$('html').contextmenu(function(){
		return false;
	});
	if (card.attr("class").indexOf("search") >= 0) {
		//if (!limitReached(card)) {
			draggedCard = new CardFront();
			draggedCard.copyCard(card);
			searchCardDrop(card, false);
		//}
	}
	else {
		removeCardE(card);
	}
	setTimeout(function(){
		$('html').off("contextmenu");
	}, 5);
}

function removeCardE(card) {
	if (card.attr("class").indexOf("deck_card") >= 0) {
		removeCardFromMain(card);
	}
	else if (card.attr("class").indexOf("search_card") >= 0) {
		addCardToMain(card);
	}
}

function limitReached(card) {
	var amountAlreadyInDeck = 0;
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (deck_filled_arr[i].data("treated_as") == card.data("treated_as")) {
			amountAlreadyInDeck++;
		}
	}
	var restriction = card.data("limit");
	if (amountAlreadyInDeck >= restriction && amountAlreadyInDeck > 0 && !$('.bypass_limit_cb').prop("checked") || amountAlreadyInDeck >= 3) {
		return true;
	}
	return false;
}

function hideLimitReached() {
	$('#limit_reached').hide();
	$('html').off("mouseup", hideLimitReached);
}

function searchCardDrop(card, adding) {
	if (adding !== false) {
		adding = true;
	}
	if ($('#delete_deck_btn').prop("disabled")) {
		return;
	}
	if (adding) {
		if (inBounds($('#deck_mask')) && !isExtraDeckCard(card)) {
			addCardToMain(draggedCard, getUnderlyingDeckCard());
		}
	}
	else {
		addCardToMain(draggedCard);
	}
}

function deckCardDrop(card, adding) {
	if (adding !== false) {
		adding = true;
	}
	if (adding) {
		if (inBounds($('#deck_mask')) && !isExtraDeckCard(card)) {
			addCardToMain(card, getUnderlyingDeckCard());
		}
	}
}

function removeCardFromMain(card) {
	cardsInMain--;
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (card.attr("id") == "deck_card" + (i + 1)) {
			deck_filled_arr.splice(i, 1);
			for (var j = i; j < deck_filled_arr.length; j++) {
				if (deck_arr[j].data("id") != deck_filled_arr[j].data("id")) {
					deck_arr[j].copyCard(deck_filled_arr[j]);
					deck_arr[j].setLimit();
				}
			}
			break;
		}
	}
	countMain();
	setUnsavedChanges();
}

function setUnsavedChanges() {
	if (currentLabel != "siding") {
		unsavedChanges = true;
		active = true;
	}
}

function confirmExit() {
	if (active) {
		return "Are you sure you want to leave?";
	}
	if (websocket) {
		websocket.onclose = null;
		websocket.onerror = null;
		websocket.close();
	}
	$('.cardfront').detach();
	$('.card').detach();
}

function searchCardsE(e) {
	saved_search = {
		"name": $('#search').find('.name_txt').val(),
		"hero": ~~deck.hero
	};
	pageNumber = 1;
	if ($('#search .name_txt').val().length >= 3) {
		update_search = false;
	}
	searchCards(e);
}

function searchCards(e) {
	if (saved_search == null) {
		return;
	}
	if (e) {
		showDim();
		$('#dim').css("pointer-events", "none");
	}
	var search = {"action":"Search cards", "search":saved_search, "page":pageNumber};
	Send(search);	
}

function searchCardsNextPage(e) {
	if (!saved_search) {
		return;
	}
	if ((pageNumber * 20) < totalCardsSearched) {
		pageNumber++;
		searchCards(e);
	}
}

function searchCardsPrevPage(e) {
	if (saved_search == null) {
		return;
	}
	if (pageNumber > 1) {
		pageNumber--;
		searchCards(e);
	}
}

function sortCards(a,b) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}

function kickUser(str) {
	Send({"action":"Kick user", "username":str});
}

function performListAction(e) {
	switch($(e.target).data("data")) {
		case "Get log":
			getLog(clickedUsername);
			break;
		case "Kick user":
			kickUser(clickedUsername);
			break;
	}
	if (mobile) {
		hideActionList();
	}
}

function gotoChangePassword() {
	goto('change_password');
	$('#change_password .current_txt').val("");
	$('#change_password .new_txt').val("");
	$('#change_password .confirm_txt').val("");
	$('#change_password .current_txt').focus();
}

function changePassword() {
	if ($('#change_password .current_txt').val() == "") {
		errorE("Current password is blank");
		return;
	}
	if ($('#change_password .new_txt').val() == "") {
		errorE("New password is blank");
		return;
	}
	if ($('#change_password .confirm_txt').val() == "") {
		errorE("New password confirmation is blank");
		return;
	}
	if ($('#change_password .new_txt').val() != $('#change_password .confirm_txt').val()) {
		errorE("New password does not match new password confirmation");
		return;
	}
	var fd = new FormData();
	fd.append("user_id", userId);
	fd.append("current_password", $('#change_password .current_txt').val());
	fd.append("new_password", $('#change_password .new_txt').val());
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "change-password.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			changePasswordComplete(xhr.responseText);
		}
	}
	xhr.send(fd);
	showDim();
}

function changePasswordComplete(str) {
	hideDim();
	var data = JSON.parse(str);
	if (data.action == "Change password") {
		$('#change_password .current_txt').val("");
		$('#change_password .new_txt').val("");
		$('#change_password .confirm_txt').val("");
		messageE(data.message);
	}
	else {
		errorE(data.message);
	}
}

function gotoDuelRecords() {
	goto('game_records');
	$('#game_records .content').html("");
	$('#game_records .username_lbl').hide();
	$('#game_records .username_txt').hide();
	$('#game_records .username_txt').val("");
	$('#game_records .filter_lbl').hide();
	$('#game_records .filter_txt').hide();
	if (admin) {
		$('#game_records .username_lbl').show();
		$('#game_records .username_txt').show();
		$('#game_records .username_txt').focus();
	}
	loadDuelRecords();
}

function loadDuelRecords() {
	Send({"action":"Duel records", "username":$('#game_records .username_txt').val(), "type":$('#game_records .type_cb').val()});
	showDim();
}

function duelRecordsResponse(data) {
	hideDim();
	records_index = $('#game_records .type_cb').prop("selectedIndex");
	records_data = data;
	$('#game_records .content').html("");
	$('#game_records .filter_lbl').hide();
	$('#game_records .filter_txt').hide();
	if (data.length > 10) {
		$('#game_records .filter_lbl').show();
		$('#game_records .filter_txt').show();
	}
	game_records_arr = [];
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var record = new DuelRecord(data[i]);
		game_records_arr.push(record);
	}
	filterDuelRecords();
}

function filterDuelRecords() {
	$('.duel_record').hide();
	var recordY = 0;
	var num = 0;
	//var v = $('#game_records .filter_txt').is(":visible");
	var text = $('#game_records .filter_txt').val()
	for (var i = 0; i < game_records_arr.length; i++) {
		/*if (v) {
			if (game_records_arr[i].data("username").toLowerCase().indexOf(text.toLowerCase()) < 0) {
				if (str(game_records_arr[i].data("username2")).toLowerCase().indexOf(text.toLowerCase()) < 0) {
					continue;
				}
			}
		}*/
		game_records_arr[i].css("top", recordY);
		game_records_arr[i].show();
		recordY += 50;
		num++;
	}
	$('#game_records .content').scrollTop(0);
	$('#' + currentLabel + ' .content').trigger("scroll");
}

function duelRecordsScrollE() {
	var vsp = $('#game_records .content').scrollTop();
	for (var i = 0; i < game_records_arr.length; i++) {
		if (parseInt(game_records_arr[i].css("top")) < vsp + 500 || i == game_records_arr.length - 1) {
			if (game_records_arr[i].parent().length == 0) {
				$('#game_records .content').append(game_records_arr[i]);
				setText(game_records_arr[i].find('.username_txt'));
				//setText(game_records_arr[i].find('.rating_txt'));
				//setText(game_records_arr[i].find('.new_rating_txt'));
				setText(game_records_arr[i].find('.date_txt'));
			}
		}
	}
}

function watchDuelResponse(data) {
	startDuel(data);
	show_cards = 0;
	turn_player = getPlayer(data.turn_player);
	if (data.order) {
		players = [];
		for (var i = 0; i < data.order.length; i++) {
			players.push(getPlayer(data.order[i]));
		}
	}
	else {
		players = [getPlayer(data.turn_player), getPlayer(data.turn_player).opponent];
	}
	if (players.length > 2) {
		turn_player.opponent = players[players.length - 1];
		turn_player.opponent.opponent = turn_player;
	}
	initWatcher();
	if (data.status == "RPS") {
		initRPSStart();
	}
	else if (data.status == "Pick first") {
		initTPStart();
	}
	else if (data.status == "Dueling") {
		gotoDueling();
	}
	initPlayers(data);
	if (data.status == "Dueling") {
		initDuel(data);
		TweenMax.fromTo($('#field_content'), 0.75, {alpha:0}, {alpha:1, delay:0.5, ease:Linear.easeNone});
		deckData = null;
		turnCount++;
	}
	addAllWatchers(data);
}

function startRPS(data) {
	console.log('startRPS');
	if (duelId != 0) {
		return;
	}
	startDuel(data);
	hosting = false;
	joining = false;
	inPool = false;
	duelist = true;
	duel_logs = [];
	duel_log.find('.log_txt').html("");
	initRPSStart();
	initWatcher();
	initDuelist();
	initPlayers(data);
	updateDuelLog();
	updateActive(true);
	used_allotted_rematch = 0;
	show_cards = 1;
}

function chooseAbility() {
	if ($('#abilities .title_txt').text() == "Your Opponent's Abilities") {
		return;
	}
	var level = $(this).data("level");
	if (player1.level != level) {
		errorE("You cannot choose this level until your level is " + ~~level);
		return;
	}
	var id = $(this).data("id");
	for (var i = 0; i < player1.abilities.length; i++) {	
		if (player1.abilities[i].level == level) {
			if (player1.abilities[i].id == id) {
				player1.abilities[i].used = true;
			}
			player1.abilities[i].unavailable = true;
		}
	}
	$(this).css("background", "#333333");
	Send({"action":"Duel", "play":"Choose ability", "id":id});
	$('#abilities .content div').each(function(){
		if ($(this).data("level") == level) {
			$(this).off("click");
		}
	});
	exitAbilities();
}

function chooseRPS(e) {
	pickedRPS = true;
	rock1.off("click", chooseRPS);
	paper1.off("click", chooseRPS);
	scissors1.off("click", chooseRPS);

	rock1.css("pointer-events", "none");
	paper1.css("pointer-events", "none");
	scissors1.css("pointer-events", "none");
	rock1.find('.content:first').css("pointer-events", "none");
	paper1.find('.content:first').css("pointer-events", "none");
	scissors1.find('.content:first').css("pointer-events", "none");
	
	var choice;
	if (this == rock1[0]) {
		choice = "Rock";
		bottomChoice = rock1;
	}
	else if (this == paper1[0]) {
		choice = "Paper";
		bottomChoice = paper1;
	}
	else {
		choice = "Scissors";
		bottomChoice = scissors1;
	}
	for (var i = 0; i < bottomChoices.length; i++) {
		if (this != bottomChoices[i][0]) {
			TweenMax.fromTo(bottomChoices[i], 0.5, {top:478}, {top:794, rotationY:360});
		}
		else {
			TweenMax.fromTo(bottomChoices[i], 0.5, {left:parseInt(bottomChoices[i].css("left"))}, {left:523});
		}
	}
	Send({"action":"Duel", "play":"RPS", "choice":choice});
}

function pickFirst() {
	var choice;
	if (this == first.find('.content')[0]) {
		choice = "First";
	}
	else {
		choice = "Second";
	}
	Send({"action":"Duel", "play":"Pick first", "choice":choice});
	if (!duelist) {
		$('#draw_btn').hide();
	}
}

function isIn(card, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][0] == card[0]) {
			return i;
		}
	}
	return -1;
}

function cardMenuE() {
	if (!Duelist()) {
		return;
	}
	var card = $(this).parent();
	if (card == menu_card) {
		return;
	}
	if (!viewing) {
		if (!isPlayer1(card.data("controller").username)) {
			return;
		}
		if (isIn(card, player1.main_arr) >= 0) {
			return;
		}
	}
	var menu = [];
	if (card.data("controller") != player1) {
		if (isIn(card, player1.opponent.grave_arr) >= 0 || isIn(card, player1.opponent.banished_arr) >= 0) {
			if (card.data("cardfront").data("card_type") == "Follower") {
				if (hasAvailableMonsterZones(player1)) {
					menu.push({label:"Summon",data:"Summon"});
				}
			}
			//else if (!card.data("face_down")) {
			//	menu.push({label:"To Grave",data:"To GY"});
			//}
		}
	}
	else {
		if (turn_player.username == username && isMonster(player1, card) && !card.data("face_down")) {
			if (countMonsters(player2) > 0) {
				menu.push({label:"Attack",data:"Attack"});
			}
			menu.push({label:"Attack Directly",data:"Attack directly"});
		}
		if (card.data("cardfront").data("card_type") == "Follower" && !isMonster(player1, card) && !isST(player1, card) && hasAvailableMonsterZones(player1)) {
			menu.push({label:"Summon",data:"Summon"});
		}
		if (card.data("cardfront").data("card_type") != "Follower") {
			if (card.data("cardfront").data("card_type") == "Counter" || isST(player1, card) && card.data("face_down")) {
				menu.push({label:"Use",data:"Activate ST"});
			}
			if (card.data("cardfront").data("card_type") == "Counter") {
				if (hasAvailableSTZones(player1) && !card.data("face_down") || isST(player1, card) && !card.data("face_down")) {
					menu.push({label:"Set",data:"Set ST"});
				}
			}
		}
		if (isIn(card, player1.grave_arr) < 0) {
			menu.push({label:"To Graveyard",data:"To GY"});
		}
		if (card.data("cardfront").data("card_type") == "Follower" || isMonster(player1, card)) {
			if (hasAvailableMonsterZones(player1) && !card.data("face_down") || isMonster(player1, card) && !card.data("face_down")) {
				menu.push({label:"Set",data:"Set monster"});
			}
		}
		if (isIn(card, player1.hand_arr) < 0) {
			menu.push({label:"To Hand",data:"To hand"});
		}
		if (isIn(card, player1.main_arr) < 0) {
			menu.push({label:"To Deck",data:"To T Deck"});
		}
		if (card.data("cardfront").data("card_type") == "Token") {
			menu.push({label:"Remove",data:"Remove Token"});
		}
		if (isMonster(player1, card) || isST(player1, card)) {
			menu.push({label:"Move",data:"Move"});
		}
		if (isMonster(player1, card)) {
			menu.push({label:"Change Control",data:"Change control"});
			if (card.data("face_down")) {
				menu.push({label:"Flip",data:"Flip"});
			}
		}
		if (isIn(card, player1.hand_arr) >= 0) {
			menu.push({label:"Reveal",data:"Reveal"});
		}
		if (viewing == "Choosing Card") {
			menu = [{label:"Choose",data:"Choose card"}];
		}
		/*if (card.data("cardfront").data("card_type") == "Follower" && !isMonster(player1, card) && !isST(player1, card)) {
			if (hasAvailableMonsterZones(player1)) {
				menu.push({label:"Summon",data:"Summon"});
			}
		}
		if (isIn(card, player1.hand_arr) >= 0) {
			if (card.data("cardfront").data("type") == "Drive" && hasAvailableSTZones(player1)) {
				menu.push({label:"Use",data:"To GY"});
				menu.push({label:"Set",data:"Set ST"});
			}
			else if (card.data("cardfront").data("type") == "Counter" && hasAvailableSTZones(player1)) {
				menu.push({label:"Use",data:"Activate ST"});
				menu.push({label:"Set",data:"Set ST"});
			}
			else if (card.data("cardfront").data("type") == "Follower" && hasAvailableMonsterZones(player1)) {
				menu.push({label:"Set",data:"Set monster"});
			}
			
		
		
			if (card.data("cardfront").data("type") != "Field" && card.data("cardfront").data("card_type") != "Follower" && hasAvailableSTZones(player1)) {
				if (card.data("cardfront").data("card_type") == "Spell") {
					menu.push({label:"Use",data:"Activate ST"});
				}
				menu.push({label:"Set",data:"Set ST"});
			}
			if (hasAvailableMonsterZones(player1)) {
				if (card.data("cardfront").data("card_type") == "Follower") {
					menu.push({label:"Set",data:"Set monster"});
				}
			}
		}
		if (card.data("cardfront").data("monster_color") == "Token") {
			menu.push({label:"Remove",data:"Remove Token"});
			menu.push({label:"Change Control",data:"Change control"});
			menu.push({label:"Move",data:"Move"});
		}
		else {
			if (isST(player1, card) && card.data("face_down")) {
				menu.push({label:"Use",data:"Activate ST"});
			}
			if (isIn(card, player1.grave_arr) < 0 && !card.data("isXyzMaterial")) {
				menu.push({label:"To Graveyard",data:"To GY"});
			}
			if (isIn(card, player1.main_arr) >= 0) {
				menu.push({label:"To Hand",data:"To hand"});
			}
			if (isMonster(player1, card)) {
				if (card.data("face_down")) {
					menu.push({label:"Flip",data:"Flip"});
				}
				if (!card.data("face_down") && card.data("cardfront").data("monster_color") != "Link") {
					menu.push({label:"Set",data:"Set monster"});
				}
			}
			if (isST(player1, card) && !card.data("face_down")) {
				menu.push({label:"Set",data:"Set ST"});
			}
			if (isIn(card, player1.hand_arr) < 0 && isIn(card, player1.main_arr) < 0 && !isExtraDeckCard(card) && card.data("cardfront").data("monster_color") != "Token" && !card.data("isXyzMaterial")) {
				menu.push({label:"To Hand",data:"To hand"});
			}
			if (player1.opponent == null) {
				player1.opponent = player2;
			}
			if (isMonster(player1, card) && hasAvailableMonsterZones(player1.opponent)) {
				menu.push({label:"Change Control",data:"Change control"});
			}
			if (!isExtraDeckCard(card) && isIn(card, player1.main_arr) < 0 && !card.data("isXyzMaterial")) {
				menu.push({label:"To Deck",data:"To T Deck"});
			}
			if (isMonster(player1, card) || isST(player1, card) || (player1.fieldSpell && card[0] == player1.fieldSpell[0]) && !card.data("face_down")) {
				menu.push({label:"Move",data:"Move"});
			}
			if ((isIn(card, player1.hand_arr) >= 0 && card.data("cardfront").data("card_type") != "Spell") || isIn(card, player1.main_arr) >= 0 || isIn(card, player1.grave_arr) >= 0) {
				if (hasAvailableSTZones(player1)) {
					menu.push({label:"To S/T",data:"To ST"});
				}
			}
			if (isIn(card, player1.hand_arr) >= 0) {
				menu.push({label:"Reveal",data:"Reveal"});
			}
			if (viewing == "Choosing Card") {
				menu = [{label:"Choose",data:"Choose card"}];
			}
		}*/
	}
	showMenu(card, menu);
}

function showMenu(card, dp) {
	if (!dp) {
		return;
	}
	dp.reverse();
	if (TweenMax.isTweening(card)) {
		return;
	}
	if (menu_card && menu_card[0] == card[0]) {
		return;
	}
	if ($('#overlay').is(":visible")) {
		return;
	}
	if (!$('#cig1_txt').is(":visible")) {
		return;
	}
	if (menu_card) {
		removeCardMenu();
	}
	if (isInYourHand(player1, card)) {
		card.css("top", card.data("controller").handY - 30);
		$('#blue_target').hide();
	}
	if (getScale(card[0]) < 0.2) {
		for (var i = 0; i < dp.length; i++) {
			switch (dp[i].label) {
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
		return;
	}
	var h = 0;
	var menu_height = 14;
	for (var i = 0; i < dp.length ;i++) {
		var option = $('<div class="card_menu_btn"><div class="image"><img src="' +  IMAGES_START + 'svg/card_menu_btn_up.svg" /></div><span class="card_menu_txt">' + dp[i].label + '</span></div>');
		option.data("data", dp[i].data);
		option.click(cardMenuClickE);
		option.css("width", width * scale);
		option.css("height", menu_height);
		option.find('.image').css("width", width);
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
	menu.css("top", top);
	menu.css("left", left);
	TweenMax.set(menu, {"scaleY":1});
	TweenMax.fromTo(menu.find('#card_menu_content'), 0.03 * dp.length, {"top":h}, {"top":0, ease:Linear.easeNone, onComplete:function(){
		var scaleY = 1;
		if (menu[0].getBoundingClientRect().y < -marginTop) {
			scaleY = (menu[0].scrollHeight + menu[0].getBoundingClientRect().y) / menu[0].scrollHeight;
			menu.css("top", top - menu[0].getBoundingClientRect().y);
			TweenMax.set(menu, {"scaleY":scaleY});
		}
	}});
	menu.show();
}

function cardMenuClickE(e) {
	cardMenuClicked(menu_card, $(this).data("data"), e);
}

function menuOutE(e) {
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
	if (mY <= top + 5 || EDGE) {
		return;
	}
	removeCardMenu();
}

function menuRollOutE(e) {
	if (!menu_card || menu_card.parent()[0] == $('#view > .content')[0]) {
		return;
	}
	updateMouse(e);
	var top = parseInt(menu.css("top"));
	var height = menu[0].scrollHeight;
	var mY = e.pageY / contentScale - marginTop / contentScale;
	if (mY >= top + height - 5) {
		return;
	}
	removeCardMenu();
}
	  
function removeCardMenu() {
	menu.detach();
	menu_card = null;
	restoreHandCards();
}

function cardMenuClicked(card, data, e) {
	if (!$('#cig1_txt').is(":visible")) {
		return;
	}
	removeCardMenu();
	hideSelectZones();
	if (data == "Overlay") {
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
	if (links && isIn(card, player1.extra_arr) >= 0 && (data == "Summon" || data == "SS DEF")) {
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
		return;
	}
	if ($('#choose_zones_cb').is(":checked")) {
		if (data.indexOf("Summon") >= 0 || data.indexOf("SS DEF") >= 0 || data == "Normal Summon" || data == "Summon token" || (data == "Set monster" && isIn(card, player1.hand_arr) >= 0)) {
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
		}
	}
	$('#sword').hide();
	if (data == "Summon token") {
		awaiting_token = true;
	}
	if (data == "Shuffle deck" && $('#avatar2 .status_txt').text().indexOf("Opponent's Hand") >= 0) {
		return;
	}
	if (data == "Choose card") {
		viewing = "";
		exitViewing();
	}
	Send({"action":"Duel", "play":data, "card":card.data("id")});
	if (data == "View deck" && seen_deck) {
		viewingE("Deck");
	}
}

function tokenE(e) {
	if (player1.m1 == null || player1.m2 == null || player1.m3 == null || (!speed && (player1.m4 == null || player1.m5 == null))) {
		if (!awaiting_token) {
			cardMenuClicked(new Card(), "Summon token", e);
		}
	}
}

function dieE() {
	Send({"action":"Duel", "play":"Die"});
}

function targetCard() {
	var card = $(this);
	if (TweenMax.isTweening(card)) {
		return;
	}
	if (getScale(card[0]) >= 0.5) {
		return;
	}
	if (!viewing) {
		if (!overlaying_card && !attacking_card) {
			Send({"action":"Duel", "play":"Target", "card":card.data("id")});
		}
	}
	else {
		if (viewing == "Opponent's Hand") {
			Send({"action":"Duel", "play":"Target", "card":card.data("id")});
		}
	}
}

function initDuelist() {
	console.log('initDuelist');
	$('#duel .cin_txt').show();
	$('#duel .cin_txt').val("");
	$('#duel .cin_txt').focus();
	$('#duel .html_cb').checked(false);
	$('#duel .cout_txt').css("height", 221);
	$('#log_btn').show();
	$('#call_admin_btn').show();
	$('#draw_btn').show();
	$('#draw_btn').css("top", 565);
	$('#defeat_btn').show();
	duel_log_vsp = 1000;
	$('#end_turn').css("cursor", "pointer");
}
	
function initDuelistDuelStart() {
	console.log('initDuelistDuelStart');
	seen_deck = false;
	counter_btn.show();
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
	$('#pause_btn').insertBefore($('#gone1'));
	$('#pause_btn').data("proxy").insertAfter($('#pause_btn'));
	$('#pause_btn').hide();
	if (links) {
		$('#choose_zones_cb').checked(true);
	}
	else {
		$('#choose_zones_cb').checked(false);
	}
}

function exitDuelE() {
	if (awaiting_defeat) {
		return;
	}
	if (duelist && duel_active && !solo) {
		getConfirmation("Quit Duel", "Are you sure you want to quit the duel?", exitDuel);
	}
	else {
		exitDuel();
	}
}

function exitDuel(b) {
	showDim();
	if (duelist) {
		Send({"action":"Duel", "play":"Quit duel"});
	}
	else if (duelId) {
		Send({"action":"Exit duel"});
	}
	else {
		return;
	}
	actionsQueue = [];
	updateActive(false);
	duelist = false;
	duel_active = false;
	resetting = false;
	rpsWinner = null;
	exitRPS();
	exitTP();
	exitDueling();
	if (b !== false) {
		gotoDuelRoom();
	}
	watch_chat.hide();
	duel_log.hide();
	player1.resetDeck();
	player2.resetDeck();
	player1 = null;
	player2 = null;
	duelId = 0;
}

function initCards(player, player_arr, data) {
	for (var i = 0; i < data.length; i++) {
		if (data[i]) {
			var card = newDuelCard();
			initCard(card, data[i], player);
			if (data[i].back) {
				var skillback = getSkillBack(SKILL_BACKS_START + data[i].back + '.jpg', data[i].activation);
				card.find('.cardback').append(skillback);
				card.data("isSkill", true);
			}
			if (data[i].xyz_arr) {
				for (var j = 0; j < data[i].xyz_arr.length; j++) {
					var material = newDuelCard();
					initCard(material, data[i].xyz_arr[j], player);
					card.data("xyz_arr").push(material);
				}
			}
			player_arr.push(card);
		}
		else {
			player_arr.push(null);
		}
	}
}

function initCard(card, data, player) {
	card.data("id", data.id);
	card.data("face_up", !!data.face_up);
	card.data("face_down", !!data.face_down);
	card.data("counters", ~~data.counters);
	card.data("controller", getController(data.controller, player));
	card.data("owner", getController(data.owner, player));
	if (data.data) {
		card.data("cardfront").initializeFromData(data.data);
		if (card.data("cardfront").data("monster_color") == "Token") {
			card.data("cardfront").find('.image').attr("src", TOKEN_START + player.token_id + '.jpg');
		}
		TweenMax.to(card, 0, {rotationY:0});
	}
	card.onRotate(true);
	card.data("owner").all_cards_arr.push(card);
}

function initField(player) {
	var xPoints = [player.m1X, player.m2X, player.m3X, player.s1X, player.s2X];
	var yPoints = [player.m1Y, player.m2Y, player.m3Y, player.s1Y, player.s2Y];
	player.m1 = player.field_arr[0];
	player.m2 = player.field_arr[1];
	player.m3 = player.field_arr[2];
	player.s1 = player.field_arr[3];
	player.s2 = player.field_arr[4];
	for (var i = 0; i < player.field_arr.length; i++) {
		if (player.field_arr[i]) {
			TweenMax.to(player.field_arr[i], 0, {rotation:player.rot});
			player.field_arr[i].css("left", xPoints[i]);
			player.field_arr[i].css("top", yPoints[i]);
			$('#field').append(player.field_arr[i]);
		}
	}
	updateCounters();
	updateStats();
}

function initDuel(data) {
	player1.deck_face_up = data.player1.deck_face_up;
	player2.deck_face_up = data.player2.deck_face_up;
	initCards(player1, player1.main_arr, data.player1.main, false);
	initCards(player1, player1.grave_arr, data.player1.grave, false);
	initCards(player1, player1.hand_arr, data.player1.hand);
	initCards(player1, player1.field_arr, data.player1.field);
	initCards(player2, player2.main_arr, data.player2.main, false);
	initCards(player2, player2.grave_arr, data.player2.grave, false);
	initCards(player2, player2.hand_arr, data.player2.hand);
	initCards(player2, player2.field_arr, data.player2.field);
	shiftDecks();
	initHand(Player1(), true);
	initHand(Player2(), true);
	initField(player1);
	initField(player2);
	updateLifePointsNow(player1, data.player1);
	updateLifePointsNow(player2, data.player2);
	updatePhase(data.phase);
	if (data.player1.viewing) {
		$('#avatar1 .status_txt').text("Viewing " + data.player1.viewing);
	}
	if (data.player2.viewing) {
		$('#avatar2 .status_txt').text("Viewing " + data.player2.viewing);
	}
	$('#cig2_txt').show();
	$('#cib2_txt').show();
	$('#cig1_txt').show();
	$('#cib1_txt').show();
	stopQueue = false;
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

function admitDefeatE() {
	getConfirmation("Admit Defeat", "Are you sure you want to admit defeat?", admitDefeat);
}

function admitDefeat() {
	showDim();
	$('#defeat_btn').disable(true);
	if (!awaiting_defeat) {
		Send({"action":"Duel", "play":"Admit defeat"});
		awaiting_defeat = true;
	}
}

function drawE() {
	switch ($('#draw_btn').val()) {
		case "Offer Draw":
			getConfirmation("Offer Draw","Are you sure you want to make a draw offer?", offerDraw);
			break;
		case "Accept Draw":
			getConfirmation("Accept Draw Offer", "Are you sure you want to accept?", acceptDrawE);
			break;
		case "Revoke Draw":
			Send({"action":"Duel", "play":"Revoke draw"});
			break;
		case "View Replay":
			viewReplay();
			break;
	}
}

function offerDraw() {
	Send({"action":"Duel", "play":"Offer draw"});
}

function acceptDrawE() {
	Send({"action":"Duel", "play":"Accept draw"});
}

function rematchE() {
	var message = "";
	switch ($('#rematch_btn').val()) {
		case "Offer Rematch":
			if (rated && used_allotted_rematch) {
				errorE("You are only permitted to rematch this opponent once");
				return;
			}
			getConfirmation("Offer Rematch", "Are you sure you want to make a rematch offer?" + message, offerRematchE);
			break;
		case "Revoke Rematch":
			Send({"action":"Duel", "play":"Revoke rematch"});
			break;
		case "Accept Rematch":
			getConfirmation("Accept Rematch Offer", "Are you sure you want to accept?" + message, acceptRematchE);
			break;
	}
}

function offerRematchE() {
	Send({"action":"Duel", "play":"Offer rematch"});
	$('#rematch_btn').val("Revoke Rematch")
}

function acceptRematchE() {
	Send({"action":"Duel", "play":"Accept rematch"});
}

function endTurnOver() {
	$('#end_turn .green').show();
}

function endTurnOut() {
	$('#end_turn .green').hide();
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

function showHandE() {
	if (solo) {
		return;
	}
	getConfirmation("Show Hand", "Are you sure you want to show your opponent your hand?", showHand);
}

function showHand() {
	Send({"action":"Duel", "play":"Show hand"});
}

function coinE() {
	Send({"action":"Duel", "play":"Coin"});
}

function counterE(e) {
	e.preventDefault();
	removedCounterCardId = 0;
	var cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2];
	for (var i = 0; i < counters.length; i++) {
		if (this == counters[i][0]) {
			if (cards[i].data("controller") != Player1() || player1 != Player1()) {
				return;
			}
			cards[i].data("counters", ~~cards[i].data("counters") - 1);
			removedCounterCardId = cards[i].data("id");
			updateCounters();
		}
	}
	$('#viewing').append(counter);
	$('body').mouseup(counterDrop);
	$('body').mousemove(moveCounter);
	moveCounter(e);
}

function moveCounter(e) {
	updateMouse(e);
	var scl = getScale($('#content')[0]);
	var zoom = parseFloat($('#content')[0].style.zoom) * scl;
	var mX = mouseX / scl - marginLeft / scl;
	var mY = mouseY / scl - marginTop / scl;
	TweenMax.to(counter, 0, {"left":mX, "top":mY});
}

function counterDrop() {
	var addingCounter = false;
	$('body').off("mouseup", counterDrop);
	$('body').off("mousemove", moveCounter);
	counter.detach();
	var cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2];
	for (var i = 0; i < cards.length; i++) {
		if (cards[i]) {
			if (cards[i].data("controller") == Player1() && !cards[i].data("face_down")) {
				if (inBounds(cards[i].find('.content:first'))) {
					if (removedCounterCardId == cards[i].data("id")) {
						cards[i].data("counters", ~~cards[i].data("counters") + 1);
						updateCounters();
						removedCounterCardId = 0;
						return;
					}
					addingCounter = true;
					break;
				}
			}
		}
	}
	if (removedCounterCardId > 0) {
		Send({"action":"Duel", "play":"Remove counter", "card":removedCounterCardId});
	}
	if (addingCounter) {
		Send({"action":"Duel", "play":"Add counter", "card":cards[i].data("id")});
	}
}

function shuffleHandE() {
	Send({"action":"Duel", "play":"Shuffle hand"});
}

function endTurnE() {
	Send({"action":"Duel", "play":"End turn"});
}

function startTurnE() {
	if (awaiting_start_turn) {
		return;
	}
	Send({"action":"Duel", "play":"Start turn", "draw":$('#auto_draw_cb').is(":checked")});
}

function showPlus() {
	$('#minus_btn').hide();
	$('#plus_btn').show();
	$('#life_txt').focus();
}

function showMinus() {
	$('#minus_btn').show();
	$('#plus_btn').hide();
	$('#life_txt').focus();
}

function lifeEnterHandler() {
	if ($('#life_txt').val() == "") {
		return;
	}
	var amount;
	if ($('#plus_btn').is(":visible")) {
		amount = ~~$('#life_txt').val();
	}
	else {
		amount = -~~$('#life_txt').val();
	}
	$('#life_txt').val("");
	if (amount == 0) {
		return;
	}
	Send({"action":"Duel", "play":"Life points", "amount":amount});
	
}

function showDeck() {
	Send({"action":"Duel", "play":"Show deck"});
}

function resetMenu() {
	menu_card = null;
}

function drawCardE() {
	Send({"action":"Duel", "play":"Draw card"});
}

function showDeckMenu() {
	if (viewing) {
		return;
	}
	if (!Duelist()) {
		return;
	}
	if (player1.main_arr.length == 0) {
		return;
	}
	var menu = [];
	menu.push({label:"Draw",data:"Draw card"});
	menu.push({label:"Shuffle",data:"Shuffle deck"});
	menu.push({label:"Mill",data:"Mill"});
	menu.push({label:"View",data:"View deck"});
	if (!solo) {
		menu.push({label:"Show",data:"Show deck"});
	}
	showMenu(player1.main_arr[0], menu);
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

function hasAvailableSTZones(player) {
	if (player.s1 == null || player.s2 == null) {
		return true;
	}
	return false;
}

function hasAvailableMonsterZones(player) {
	if (player.m1 == null || player.m2 == null || player.m3 == null) {
		return true;
	}
	return false;
}

function startChooseOverlayZones() {
	if (player1.m1) {
		if (player1.m1.data("cardfront").data("monster_color") != "Token" && !player1.m1.data("face_down") && player1.m1 != overlaying_card) {
			$('#m1_select').show();
			m1_select.play();
		}
	}
	if (player1.m2) {
		if (player1.m2.data("cardfront").data("monster_color") != "Token" && !player1.m2.data("face_down") && player1.m2 != overlaying_card) {
			$('#m2_select').show();
			m2_select.play();
		}
	}
	if (player1.m3) {
		if (player1.m3.data("cardfront").data("monster_color") != "Token" && !player1.m3.data("face_down") && player1.m3 != overlaying_card) {
			$('#m3_select').show();
			m3_select.play();
		}
	}
}

function startChooseMonsterZones() {
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
}
		
function hideSelectZones() {
	$('#m1_select').hide();
	m1_select.stop();
	$('#m2_select').hide();
	m2_select.stop();
	$('#m3_select').hide();
	m3_select.stop();
	$('#s1_select').hide();
	s1_select.stop();
	$('#s2_select').hide();
	s2_select.stop();
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
		case $('#s1_select')[0]:
			zone = "S-1";
			break;
		case $('#s2_select')[0]:
			zone = "S-2";
			break;
	}
	if (getZoneByName(player1, zone)) {
		return;
	}
	hideSelectZones();
	Send({"action":"Duel", "play":summoning_play, "card":summoning_card.data("id"), "zone":zone});
}

function getZoneByName(player, str) {
	if (str == "M-1") {
		return player.m1;
	}
	if (str == "M-2") {
		return player.m2;
	}
	if (str == "M-3") {
		return player.m3;
	}
	if (str == "S-1") {
		return player.s1;
	}
	if (str == "S-2") {
		return player.s2;
	}
	return null;
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
	return total;
}

function countOverlayOptions(player) {
	var total = 0;
	if (player.m1) {
		if (player.m1.data("cardfront").data("monster_color") != "Token" && !player.m1.data("face_down")) {
			total++;	
		}
	}
	if (player.m2) {
		if (player.m2.data("cardfront").data("monster_color") != "Token" && !player.m2.data("face_down")) {
			total++;	
		}
	}
	if (player.m3) {
		if (player.m3.data("cardfront").data("monster_color") != "Token" && !player.m3.data("face_down")) {
			total++;	
		}
	}
	return total;
}

function getOnlyOverlayId(player) {
	var card_id = 0;
	if (player.m1) {
		if (player.m1.data("cardfront").data("monster_color") != "Token" && !player.m1.data("face_down") && player.m1[0] != overlaying_card[0]) {
			return player.m1.data("id");
		}
	}
	if (player.m2) {
		if (player.m2.data("cardfront").data("monster_color") != "Token" && !player.m2.data("face_down") && player.m2[0] != overlaying_card[0]) {
			return player.m2.data("id");
		}
	}
	if (player.m3) {
		if (player.m3.data("cardfront").data("monster_color") != "Token" && !player.m3.data("face_down") && player.m3[0] != overlaying_card[0]) {
			return player.m3.data("id");
		}
	}
	return 0;
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

function startOverlay(e) {
	updateMouse(e);
	$('#overlay').show();
	$('body').mousemove(moveXyzTargetE);
	moveXyzTargetE(e);
	e.stopPropagation();
	$('body').click(checkOverlay);
}

function checkOverlay(e) {
	updateMouse(e);
	$('body').off("click", checkOverlay);
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
	overlaying_card = null;
}

function checkAttack(e) {
	updateMouse(e);
	$('body').off("click", checkAttack);
	$('body').off("mousemove", moveSword);
	$('#sword').hide();
	if (player2.m1) {
		if (inBounds($('#opp_m1_hidden'))) {
			attackCard(player2.m1);
			return;
		}
	}
	if (player2.m2) {
		if (inBounds($('#opp_m2_hidden'))) {
			attackCard(player2.m2);
			return;
		}
	}
	if (player2.m3) {
		if (inBounds($('#opp_m3_hidden'))) {
			attackCard(player2.m3);
			return;
		}
	}
}

function overlayCard(dest_card) {
	if (dest_card.data("cardfront").data("monster_color") == "Token") {
		overlaying_card = null;
		return;
	}
	Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":dest_card.data("id")});
	overlaying_card = null;
}

function attackCard(attacked_card) {
	Send({"action":"Duel", "play":"Attack", "attacking_card":attacking_card.data("id"), "attacked_card":attacked_card.data("id")});
	attacking_card = null;
}

function moveSword(e) {
	updateMouse(e);
	var n1 = mouseYScaled - parseInt($('#sword').css("top"));
	var n3 = mouseXScaled - parseInt($('#sword').css("left"));
	TweenMax.to($('#sword'), 0, {rotation:Math.atan2(n1,n3) * 180 / Math.PI});
}

function moveXyzTargetE(e) {
	if (!overlaying_card) {
		return;
	}
	updateMouse(e);
	var scl = getScale($('#content')[0]);
	var mX = mouseX / scl - marginLeft / scl;
	var mY = mouseY / scl - marginTop / scl;
	var rotation = Math.atan2(mY - parseInt(overlaying_card.css("top")), mX - parseInt(overlaying_card.css("left"))) * 180 / Math.PI;
	TweenMax.to($('#overlay'), 0, {"left":mX, "top":mY, "rotation":rotation});
}

function isMonster(player, card) {
	if (player1.m1 && player1.m1[0] == card[0]) {
		return true;
	}
	if (player1.m2 && player1.m2[0] == card[0]) {
		return true;
	}
	if (player1.m3 && player1.m3[0] == card[0]) {
		return true;
	}
	return false;
}

function isST(player, card) {
	if (player1.s1 && player1.s1[0] == card[0]) {
		return true;
	}
	if (player1.s2 && player1.s2[0] == card[0]) {
		return true;
	}
	return false;
}

function isExtraDeckCard(card) {
	if (card.hasClass("card")) {
		if (card.data("cardfront").data("monster_color") == "Fusion" || card.data("cardfront").data("monster_color") == "Link" || card.data("cardfront").data("monster_color") == "Synchro" || card.data("cardfront").data("monster_color") == "Xyz") {
			return true;
		}
	}
	else {
		if (card.data("monster_color") == "Fusion" || card.data("monster_color") == "Link" || card.data("monster_color") == "Synchro" || card.data("monster_color") == "Xyz") {
			return true;
		}
	}
	return false;
}

function resetGameE() {
	if (viewing || resetting) {
		return;
	}
	Send({"action":"Duel", "play":"Reset game"});
}

function updatePhase(str) {
	currentPhase = str;
	$('#turn .red').hide();
	if (isPlayer1(turn_player.username)) {
		$('#turn .red').show();
	}
	switch (currentPhase) {
		case "DP":
			enterDP();
			break;
		case "SP":
			enterSP();
			break;
		case "M1":
			enterM1();
			break;
		case "BP":
			enterBP();
			break;
		case "M2":
			enterM2();
			break;
		case "EP":
			enterEP();
			break;
		default:
			if (currentLabel.indexOf("duel") == 0) {
				players.push(players.splice(0, 1)[0]);
			}
			break;
	}
}

function updateLifePointsNow(player, data) {
	var wid = 0;
	var life_tween;

	player.lifepoints = data.lifepoints;
	if (player.lifepoints < 0) {
		player.lifepoints = 0;
	}
	wid = 154 - player.lifepoints / lifepointMax * 154;
	if (player.lifepoints >= lifepointMax) {
		wid = 0;
	}
	if (player == Player1()) {
		$('#lifepoints1 .black_bar').css("width", wid);
		$('#lifepoints1 .life_txt').text(player.lifepoints);
	}
	else {
		$('#lifepoints2 .black_bar').css("width", wid);
		$('#lifepoints2 .life_txt').text(player.lifepoints);
	}
}

function moveDuelFocus(e) {
	if (e.which >= 65 && e.which <= 90) {
		$('#duel .cin_txt').focus();
	}
	else if ((e.which >= 49 && e.which <= 57) || (e.which >= 97 && e.which <= 105)) {
		$('#duel #life_txt').focus();
	}
}

function setDuelFocus() {
	duelFocus = $(this);
	console.log('duelFocus = ' + duelFocus);
}

function resetDuelFocus() {
	if (duelist) {
		if (duelFocus) {
			if ($(':focus').length == 0 || $(':focus')[0] == duelFocus[0]) {
				duelFocus.focus();
			}
		}
	}
}

function resetDeckE() {
	if (viewing) {
		return;
	}
	Send({"action":"Duel", "play":"Reset game"});
}

function viewLog() {
	window.open(URL_START + 'log?id=' + duelId);
}

function viewReplay() {
	var url = URL_START + 'replay?id=' + duelId;
	window.open(url);
}

function addAllWatchers(data) {
	watchers_data = data.watchers;
	sortWatchers();
	var frag = "";
	for (var i = 0; i < watchers_data.length; i++) {
		frag += addWatcher(watchers_data[i], true);
	}
	$('#watchers .users').html(frag)
	$('#watchers .watchers_txt').text('Watchers: ' + $('#watchers .cell').length);
}

function clearLimits() {
	for (var i = 0; i < deck_arr.length; i++) {
		deck_arr[i].clearLimit();
	}
}

function setLimits() {
	for (var i = 0; i < deck_arr.length; i++) {
		deck_arr[i].setLimit();
	}
}

function gotoFrontPage() {
	goto('front_page');
	$('#front_page').css("perspective", "unset");
	if (logged_in) {
		showLoggedIn();
		return;
	}
	$('#login .username_txt').focus();
}

function mainExitE() {
	Close();
	gotoFrontPage();
}

function deckChangeE(e) {
	if (deckIndex() < 0) {
		deck = {};
		return;
	}
	deck = decks[deckIndex()];
	if (currentLabel == "deck_constructor") {
		loadDeck();
	}
}

function restrictInt(obj) {
	obj.attr("pattern", "[0-9]+");
	obj.on('input', function() {
		this.value = this.value.replace(/[^0-9]/g, '');
	});
}

function restrictIntATK(obj) {
	obj.on('input', function() {
		this.value = this.value.replace(/[^0-9\?]/g, '');
	});
}

function clearDecks() {
	for (var i = 0; i < decks.length; i++) {
		decks[i].deckData = null;
	}
}

function enablePools() {
	decklist_cb.disable(false);
	if (decks.length > 0) {
		$('.format_inner').removeClass("is_disabled");
	}
}

function disablePools() {
	$('.format_inner').addClass("is_disabled");
}

function getOnlyAttackId(player) {
	var id = 0;
	if (player.m1) {
		id = player.m1.data("id");
	}
	if (player.m2) {
		id = player.m2.data("id");
	}
	if (player.m3) {
		id = player.m3.data("id");
	}
	return id;
}

function deleteCardE() {
	getConfirmation("Delete Card", "Are you sure you want to delete " + my_card.data("name") + "?", deleteCard);
	showDim();
}

function deleteCard() {
	Send({"action":"Delete card", "id":my_card.data("id")});
	if (upload_card.data("id") == my_card.data("id")) {
		upload_card.data("pic", "0");
	}
	edit_card.data("pic", "0");
	showDim();
	searchCards();
}