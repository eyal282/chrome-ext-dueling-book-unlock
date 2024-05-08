(function(_0x4514cb, _0xa9f8ee) {
    var _0x40fe7e = _0x2320
      , _0x22476 = _0x4514cb();
    while (!![]) {
        try {
            var _0x4c302f = parseInt(_0x40fe7e(0x9a)) / 0x1 + parseInt(_0x40fe7e(0x9f)) / 0x2 * (-parseInt(_0x40fe7e(0xa3)) / 0x3) + -parseInt(_0x40fe7e(0xa2)) / 0x4 * (parseInt(_0x40fe7e(0x9e)) / 0x5) + parseInt(_0x40fe7e(0xa0)) / 0x6 * (-parseInt(_0x40fe7e(0x9b)) / 0x7) + parseInt(_0x40fe7e(0x9c)) / 0x8 * (parseInt(_0x40fe7e(0x9d)) / 0x9) + -parseInt(_0x40fe7e(0xa1)) / 0xa + parseInt(_0x40fe7e(0x99)) / 0xb;
            if (_0x4c302f === _0xa9f8ee)
                break;
            else
                _0x22476['push'](_0x22476['shift']());
        } catch (_0x4e2a60) {
            _0x22476['push'](_0x22476['shift']());
        }
    }
}(_0x17d7, 0x88a64));
var _0x2b8b80 = (function() {
    var _0x6dc67c = !![];
    return function(_0x577dce, _0x40e538) {
        var _0x4143e3 = _0x6dc67c ? function() {
            if (_0x40e538) {
                var _0x20d9cc = _0x40e538['apply'](_0x577dce, arguments);
                return _0x40e538 = null,
                _0x20d9cc;
            }
        }
        : function() {}
        ;
        return _0x6dc67c = ![],
        _0x4143e3;
    }
    ;
}())
  , _0xaac404 = _0x2b8b80(this, function() {
    return _0xaac404['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0xaac404)['search']('(((.+)+)+)+$');
});
_0xaac404();
'use strict';
var spark = loadSVGAnimation(spark, 'spark', 'spark', 0x6e, 0x6e, 0x18), active_player, actionsQueue = [], allowToBottom = ![], automaticTourney = ![], awaiting_admin = ![], awaiting_defeat = ![], awaiting_start_turn = ![], awaiting_token = ![], bottomChoice, bottomChoices, currentPhase, deckData, duelHash, duelActions = 0x0, duel_active = ![], duel_links = ![], duel_log = $('#duel_log'), duel_log_vsp = 0x3e8, duel_logs = [], duel_vsp = 0x3e8, duelChatTyping = ![], duelFormat, easeSeconds = 0.3, easeSeconds2 = 0.4, easeSecondsBanish = 0.25, first, first_player, gameLossSound, games = 0x0, gameWinSound, handDestination = 0x0, lastDuelId = 0x0, life_amount, life_bar, lifepointMax = 0x0, linkLeft, linkLeftX = 426.3, linkLeftxEnd = 0x1b8, linkLeftxStart = 0x19d, linkRight, linkRightX = 0x265, linkRightxEnd = 0x272, linkRightxStart = 0x257, links = ![], linkY = 291.5, logTurnCount = 0x0, match = ![], match_type, menu_reason = '', paper1, paper2, paused = ![], pickedRPS = ![], player1 = {}, player2 = {}, player3 = {}, player4 = {}, players, prev_life, rated = ![], recycled_cards_arr = [], resetting = ![], rock1, rock2, rpsWinner = '', rush = ![], scissors1, scissors2, second, selectedToken = 0x0, show_cards = 0x0, solo = ![], speed = ![], stopQueue = !![], switched = ![], tag_duel = ![], topChoice, topChoices, turn_player = {}, turnCount = 0x0, unknown_totals = ![], used_allotted_rematch = 0x0, viewing, viewing_card_with_materials, watch_chat = $('#watch_chat'), watch_chat_limit = 0x0, watch_chat_vsp = 0x3e8, watchers_data = [], watchers_vsp = 0x0, red_stream = loadSVGAnimation(red_stream, 'red_stream', 'red_stream', 0x1f4, 0x14, 0x18), blue_stream = loadSVGAnimation(blue_stream, 'blue_stream', 'blue_stream', 0x1f4, 0x14, 0x18), bubbles1 = new MovieClip(), bubbles2 = new MovieClip(), bubbles3 = new MovieClip(), bubbles4 = new MovieClip(), Activate = 'sounds/activate.mp3', Attack = 'sounds/attack.mp3', Banish = 'sounds/banish.mp3', CoinFlip = 'sounds/coinflip.mp3', CoinStart = 'sounds/coinstart.mp3', CounterSound = 'sounds/counter.mp3', Decided = 'sounds/decided.mp3', Declare = 'sounds/declare.mp3', DiceSound = 'sounds/dice.mp3', DrawSound = 'sounds/draw.mp3', FaceDown = 'sounds/facedown.mp3', Flip = 'sounds/flip.mp3', LifePoints = 'sounds/lifepoints.mp3', LifePointsEnd = 'sounds/lifepoints_end.mp3', Move = 'sounds/move.mp3', NormalSummon = 'sounds/normal_summon.mp3', Ok = 'sounds/ok.mp3', PartnerFound = 'sounds/partner_found.mp3', Reveal = 'sounds/reveal.mp3', Shred = 'sounds/shred.mp3', SpecialSummon = 'sounds/special_summon.mp3', ShuffleHand = 'sounds/shuffle_hand.mp3', ShuffleSound = 'sounds/shuffle.mp3', Swap = 'sounds/swap.mp3', Switch = 'sounds/switch.mp3', Target = 'sounds/target.mp3', TurnChime = 'sounds/turn_chime.mp3', countdownTimer = new Timer(0x3d4);
countdownTimer['callback'] = countdownE;
var duelChatTimer = new Timer(0x1388);
duelChatTimer['callback'] = duelChatTimerE;
var rpsTimer = new Timer(0xbb8);
rpsTimer['callback'] = rpsNext;
var dp_btn = new Phase('dp'), sp_btn = new Phase('sp'), m1_btn = new Phase('m1'), bp_btn = new Phase('bp'), m2_btn = new Phase('m2'), ep_btn = new Phase('ep'), counter_btn = new Counter(), m1_counter = new Counter('m1_counter'), m2_counter = new Counter('m2_counter'), m3_counter = new Counter('m3_counter'), m4_counter = new Counter('m4_counter'), m5_counter = new Counter('m5_counter'), s1_counter = new Counter('s1_counter'), s2_counter = new Counter('s2_counter'), s3_counter = new Counter('s3_counter'), s4_counter = new Counter('s4_counter'), s5_counter = new Counter('s5_counter'), field_spell_counter = new Counter('field_spell_counter'), pendulum_left_counter = new Counter('pendulum_left_counter'), pendulum_right_counter = new Counter('pendulum_right_counter'), opp_m1_counter = new Counter('opp_m1_counter'), opp_m2_counter = new Counter('opp_m2_counter'), opp_m3_counter = new Counter('opp_m3_counter'), opp_m4_counter = new Counter('opp_m4_counter'), opp_m5_counter = new Counter('opp_m5_counter'), opp_s1_counter = new Counter('opp_s1_counter'), opp_s2_counter = new Counter('opp_s2_counter'), opp_s3_counter = new Counter('opp_s3_counter'), opp_s4_counter = new Counter('opp_s4_counter'), opp_s5_counter = new Counter('opp_s5_counter'), opp_field_spell_counter = new Counter('opp_field_spell_counter'), opp_pendulum_left_counter = new Counter('opp_pendulum_left_counter'), opp_pendulum_right_counter = new Counter('opp_pendulum_right_counter'), left_link_counter = new Counter('left_link_counter'), right_link_counter = new Counter('right_link_counter'), skill_card_counter = new Counter('skill_card_counter'), opp_skill_card_counter = new Counter('opp_skill_card_counter'), counters = [m1_counter, m2_counter, m3_counter, m4_counter, m5_counter, s1_counter, s2_counter, s3_counter, s4_counter, s5_counter, pendulum_left_counter, pendulum_right_counter, field_spell_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_m4_counter, opp_m5_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_s4_counter, opp_s5_counter, opp_pendulum_left_counter, opp_pendulum_right_counter, opp_field_spell_counter, left_link_counter, right_link_counter, skill_card_counter, opp_skill_card_counter], automatic = ![], seen_deck = ![], seen_extra = ![], duelFocus;
function initDuelJS() {
    $('#bubbles1')['data']('cycle', new MovieClip()),
    $('#bubbles2')['data']('cycle', new MovieClip()),
    $('#bubbles3')['data']('cycle', new MovieClip()),
    $('#bubbles4')['data']('cycle', new MovieClip()),
    $('#duel\x20#field_content')['prepend'](ep_btn),
    $('#duel\x20#field_content')['prepend'](m2_btn),
    $('#duel\x20#field_content')['prepend'](bp_btn),
    $('#duel\x20#field_content')['prepend'](m1_btn),
    $('#duel\x20#field_content')['prepend'](sp_btn),
    $('#duel\x20#field_content')['prepend'](dp_btn),
    counter_btn['attr']('id', 'counter_btn'),
    counter_btn['find']('.total_txt')['hide'](),
    counter_btn['insertAfter']($('#minus_btn')),
    counters['forEach'](function(_0x3161a3, _0x2ae5e5) {
        $('#counters')['append'](_0x3161a3);
    }),
    $('#view\x20.content:first')['mouseenter'](showFaceDownCards),
    $('#view\x20.content:first')['mouseleave'](hideFaceDownCards),
    $('#duel\x20.cout_txt')['scroll'](saveDuelVSP),
    $('#duel\x20.cout_txt')['blur'](restoreDuelVSP),
    $('#grave_hidden')['mouseover'](graveOver),
    $('#banished_hidden')['mouseover'](banishedOver),
    $('#extra_hidden')['mouseover'](extraOver),
    $('#extra_hidden')['mouseenter'](showExtraDeckMenu),
    $('#deck_hidden')['mouseover'](deckOver),
    $('#opp_deck_hidden')['mouseover'](oppDeckOver),
    $('#opp_grave_hidden')['mouseover'](oppGraveOver),
    $('#opp_banished_hidden')['mouseover'](oppBanishedOver),
    $('#opp_extra_hidden')['mouseover'](oppExtraOver),
    $('#grave_hidden')['click'](viewGY),
    $('#banished_hidden')['click'](viewBanished),
    $('#opp_grave_hidden')['click'](viewGY2),
    $('#opp_banished_hidden')['click'](viewBanished2),
    $('#opp_extra_hidden')['click'](viewED2),
    $('#extra_hidden')['click'](viewED),
    $('#watchers')['mouseover'](maximizeWatchers),
    $('#watchers')['mouseleave'](minimizeWatchers),
    $('#watchers')['scroll'](watchersScrollE),
    $('#watchers')['mousemove'](watchersMoveE),
    $('.duel_avatar\x20.rating')['mouseover'](showRating),
    $('.duel_avatar\x20.rating')['mouseleave'](hideRating),
    $('#pause_btn')['mouseenter'](showRating),
    $('#pause_btn')['mouseout'](showRating),
    $('#avatar1\x20.nsfw_btn')['click'](showDuelNSFW),
    $('#avatar2\x20.nsfw_btn')['click'](showDuelNSFW),
    $('#avatar3\x20.nsfw_btn')['click'](showDuelNSFW),
    $('#avatar4\x20.nsfw_btn')['click'](showDuelNSFW),
    $('#avatar1\x20.rating')['click'](hideDuelNSFW),
    $('#avatar2\x20.rating')['click'](hideDuelNSFW),
    $('#avatar3\x20.rating')['click'](hideDuelNSFW),
    $('#avatar4\x20.rating')['click'](hideDuelNSFW),
    $('#duel_log\x20.log_txt')['scroll'](saveDuelLogVSP),
    $('#duel_log\x20.log_txt')['blur'](restoreDuelLogVSP),
    $('#duel_log\x20.search_txt')['on']('input', updateDuelLog),
    $('#duel_log\x20.chat_cb')['change'](updateDuelLog),
    $('#duel_log\x20.duel_cb')['change'](updateDuelLog),
    $('#duel_log\x20.game_cb')['change'](updateDuelLog),
    $('#duel_log\x20.private_cb')['change'](updateDuelLog),
    $('#duel_log\x20.usernames_cb')['change'](updateDuelLog),
    $('#watchers_btn')['mouseover'](function() {
        $('#watch_chat_tooltip')['show']();
    }),
    $('#watchers_btn')['mouseout'](function() {
        $('#watch_chat_tooltip')['hide']();
    }),
    $('#log_btn')['mouseover'](function() {
        $('#log_tooltip')['show']();
    }),
    $('#log_btn')['mouseout'](function() {
        $('#log_tooltip')['hide']();
    }),
    addDragging($('#watch_chat'), '.chat_top_bg', '.chat_background', function() {
        appendChat($('#watch_chat'));
    }, function() {
        toggleAds($('#watch_chat'));
    }),
    addDragging($('#duel_log'), '.chat_top_bg', '.chat_background', function() {
        appendChat($('#duel_log'));
    }, function() {
        toggleAds($('#duel_log'));
    }),
    $('#watch_chat\x20.cout_txt')['scroll'](saveWatchChatVSP),
    $('#watch_chat\x20.cout_txt')['blur'](restoreWatchChatVSP),
    addButton($('#watch_chat\x20.minimize_btn'), toggleWatchersChat),
    addButton($('#duel_log\x20.minimize_btn'), toggleDuelLog),
    addButton($('#over\x20.ok_btn'), hideDuelOver),
    addButton($('#log_btn'), toggleDuelLog),
    addButton($('#watchers_btn'), toggleWatchersChat),
    addButton($('#view\x20.exit_btn'), exitViewing);
    for (var _0xd06a5c = 0x1; _0xd06a5c < 0x7; _0xd06a5c++) {
        getElement('side' + _0xd06a5c)['innerHTML'] = '',
        addClass(getElement('side' + _0xd06a5c), 'activate'),
        drawDice(_0xd06a5c, _0xd06a5c);
    }
    watch($('#coin\x20img'), 'transform', function() {
        var _0x41657a = getRotationY(this);
        _0x41657a < 0x0 ? $('#coin\x20.heads')['hide']() : $('#coin\x20.heads')['show']();
    }),
    SAFARI && $('#overlay\x20img')['attr']('src', 'images/overlay.png');
}
function startDuel(_0x2164c9) {
    console['log']('startDuel'),
    hideDim(),
    duel_active = !![],
    links = _0x2164c9['links'],
    tag_duel = !!_0x2164c9['tag_duel'],
    speed = _0x2164c9['format'] == 'su' || _0x2164c9['format'] == 'sr',
    rush = !!_0x2164c9['rush'] || (_0x2164c9['format'] == 'ru' || _0x2164c9['format'] == 'rr'),
    solo = _0x2164c9['format'] == 'so',
    rated = _0x2164c9['rated'],
    match_type = _0x2164c9['type'],
    duelFormat = _0x2164c9['format'],
    automaticTourney = !!_0x2164c9['automatic_tourney'];
    _0x2164c9['type'] == 'm' && (match = !![]);
    lifepointMax = 0x1f40;
    tag_duel && duelId >= 0x97b869 && (lifepointMax = 0x3e80);
    speed && (lifepointMax = 0xfa0,
    tag_duel && (lifepointMax = 0x1770));
    duelId = _0x2164c9['id'],
    lastDuelId = _0x2164c9['id'],
    duelHash = _0x2164c9['hash'],
    deckData = _0x2164c9,
    player1 = new Player(),
    player2 = new Player(),
    players = [player1, player2],
    turn_player = player1;
    tag_duel && (player3 = new Player(),
    player4 = new Player(),
    _0x2164c9['player3']['username'] == username && (switchDuelists(_0x2164c9, 'player1', 'player3'),
    _0x2164c9['player1']['grave'] = _0x2164c9['player3']['grave'],
    _0x2164c9['player1']['banished'] = _0x2164c9['player3']['banished'],
    _0x2164c9['player1']['field'] = _0x2164c9['player3']['field'],
    turn_player = player3),
    switched && switchDuelists(_0x2164c9, 'player3', 'player4'),
    player3['username'] = _0x2164c9['player3']['username'],
    player4['username'] = _0x2164c9['player4']['username'],
    player3['opponent'] = player2,
    player4['opponent'] = player1,
    player3['skill'] = _0x2164c9['player3']['skill'],
    player4['skill'] = _0x2164c9['player4']['skill'],
    player3['still_good'] = _0x2164c9['player3']['still_good'],
    player4['still_good'] = _0x2164c9['player4']['still_good']);
    player1['username'] = _0x2164c9['player1']['username'],
    player2['username'] = _0x2164c9['player2']['username'],
    player1['opponent'] = player2,
    player2['opponent'] = player1,
    player1['skill'] = _0x2164c9['player1']['skill'],
    player2['skill'] = _0x2164c9['player2']['skill'],
    player1['start'] = _0x2164c9['player1']['start'],
    player2['start'] = _0x2164c9['player2']['start'],
    player1['still_good'] = _0x2164c9['player1']['still_good'],
    player2['still_good'] = _0x2164c9['player2']['still_good'];
    if (zooming) {}
    turnCount = ~~_0x2164c9['turnCount'];
}
function gotoDuel(_0x448f48) {
    goto('duel'),
    $('.duel_frame')['hide'](),
    $('#' + _0x448f48)['show'](),
    currentLabel = _0x448f48,
    $('#duel_content')['show']();
    switch (_0x448f48) {
    case 'duel_start':
        $('#tp_start')['show']();
        break;
    case 'duel_start2':
    case 'duel_start3':
    case 'duel_start4':
        $('#tp_start2')['show']();
        break;
    default:
        $('#numbers\x20span')['text'](''),
        $('#duel_content')['hide']();
        break;
    }
}
function initWatcher() {
    console['log']('initWatcher'),
    player1['initPlayer1'](),
    player2['initPlayer2'](),
    tag_duel && (player1['partner'] = player3,
    player2['partner'] = player4,
    player3['partner'] = player1,
    player4['partner'] = player2,
    player3['initPlayer1'](),
    player4['initPlayer2']()),
    links && (player1['initPlayer1Links'](),
    player2['initPlayer2Links'](),
    tag_duel && (player3['initPlayer1Links'](),
    player4['initPlayer2Links']())),
    (speed || rush) && (player1['initPlayer1Speed'](),
    player2['initPlayer2Speed'](),
    tag_duel && (player3['initPlayer1Speed'](),
    player4['initPlayer2Speed']())),
    player1['bubbles'] = $('#bubbles1'),
    player1['all_good'] = $('#avatar1\x20.all_good'),
    player1['thinking'] = $('#avatar1\x20.think'),
    player1['countdown'] = $('#countdown1'),
    player2['bubbles'] = $('#bubbles2'),
    player2['all_good'] = $('#avatar2\x20.all_good'),
    player2['thinking'] = $('#avatar2\x20.think'),
    player2['countdown'] = $('#countdown2'),
    tag_duel && (player3['bubbles'] = $('#bubbles3'),
    player3['all_good'] = $('#avatar3\x20.all_good'),
    player3['thinking'] = $('#avatar3\x20.think'),
    player3['countdown'] = $('#avatar3\x20.countdown'),
    player4['bubbles'] = $('#bubbles4'),
    player4['all_good'] = $('#avatar4\x20.all_good'),
    player4['thinking'] = $('#avatar4\x20.think'),
    player4['countdown'] = $('#avatar4\x20.countdown')),
    preview['hide'](),
    $('#duel\x20.preview')['append'](preview),
    preview_txt['hide'](),
    preview_txt['insertAfter'](preview),
    $('#over')['hide'](),
    $('#log_btn')['hide'](),
    $('#log_tooltip')['hide'](),
    $('#watchers_tooltip')['hide'](),
    $('.duel_avatar\x20.rating_txt')['hide'](),
    $('.duel_avatar\x20.rating_txt')['css']('opacity', 0x0),
    $('.duel_status\x20.status_txt')['text'](''),
    $('.duel_avatar\x20.aura')['hide'](),
    $('#duel\x20.cin_txt')['setWidth'](0xb5),
    $('#duel\x20.cin_txt')['hide'](),
    $('#duel\x20.html_cb')['hide'](),
    $('#duel\x20.cout_txt')['css']('height', 0xf6),
    watch_chat['find']('.cout_txt')['html'](''),
    watch_chat['find']('.cin_txt')['val'](''),
    $('#bubbles1')['hide'](),
    $('#bubbles2')['hide'](),
    $('#bubbles3')['hide'](),
    $('#bubbles4')['hide'](),
    $('#bubbles1')['data']('cycle')['stop'](),
    $('#bubbles2')['data']('cycle')['stop'](),
    $('#bubbles3')['data']('cycle')['stop'](),
    $('#bubbles4')['data']('cycle')['stop'](),
    $('.duel_avatar\x20.gone')['hide'](),
    $('.duel_avatar\x20.nsfw')['css']('opacity', 0x0),
    $('.duel_avatar\x20.nsfw')['hide'](),
    $('.duel_avatar\x20.nsfw_btn')['hide'](),
    $('#avatar1')['show'](),
    $('#avatar2')['show'](),
    $('#avatar3')['hide'](),
    $('#avatar4')['hide'](),
    $('#rematch_btn')['hide'](),
    $('#call_admin_btn')['disable'](!![]),
    $('#call_admin_btn')['hide'](),
    $('#draw_btn')['hide'](),
    $('#mulligan_btn')['hide'](),
    $('#defeat_btn')['hide'](),
    $('#cancel_duel_btn')['hide'](),
    $('#host_loss_btn')['hide'](),
    $('#opponent_loss_btn')['hide'](),
    $('#reset_btn')['hide'](),
    $('#duel\x20#swap_btn')['hide'](),
    $('#siding_btn')['hide'](),
    $('#pause_btn')['hide'](),
    $('#ss_glow')['hide'](),
    $('#ss_spiral')['hide'](),
    $('.all_good')['hide'](),
    gameLossSound = getGameLossSound(),
    gameWinSound = getGameWinSound(),
    player1['rating_rep_txt'] = $('#avatar1\x20.rating_txt'),
    player2['rating_rep_txt'] = $('#avatar2\x20.rating_txt'),
    tag_duel && (player3['rating_rep_txt'] = $('#avatar3\x20.rating_txt'),
    player4['rating_rep_txt'] = $('#avatar4\x20.rating_txt')),
    duel_log['find']('.log_txt')['html'](''),
    $('#duel\x20.refresh_btn')['hide'](),
    $('#duel\x20.refresh_btn')['show'](),
    shiftPlayersE(),
    $('.gone')['hide'](),
    $('#duel\x20.cout_txt')['html'](''),
    $('#duel_content')['append']($('#field_content')),
    $('#card_menu')['hide'](),
    watch_chat_limit = 0x0,
    $('#watch_chat\x20.html_cb')['hide'](),
    html && $('#watch_chat\x20.html_cb')['show'](),
    $('#done_siding_btn')['hide'](),
    $('#done_siding1')['hide'](),
    $('#done_siding2')['hide'](),
    $('#overlay')['hide'](),
    $('.counter')['css']('pointer-events', duelist ? 'auto' : 'none'),
    removeFieldSpellPic(),
    $('#watchers\x20.cell')['detach'](),
    $('#watchers\x20.watchers_txt')['text']('Watchers:\x200'),
    watchers_data = [],
    duel_vsp = 0x3e8,
    logTurnCount = 0x0,
    $('#think_btn')['hide'](),
    hideCountdown(),
    duelist && initDuelist();
}
function rpsNext() {
    console['log']('rpsNext\x20entered');
    if (!pickedRPS && player1 == Player1() && duelist)
        return;
    currentLabel == 'rps_start' && (initTPStart(),
    exitRPS()),
    rpsTimer['reset']();
}
function exitRPS() {
    rock1 && (rock1['detach'](),
    paper1['detach'](),
    scissors1['detach'](),
    rock2['detach'](),
    paper2['detach'](),
    scissors2['detach']());
}
function exitTP() {
    first && (first['detach'](),
    second['detach']());
}
function saveDuelLogVSP() {
    duel_log_vsp = $('#duel_log\x20.log_txt')['scrollTop']();
    var _0x3d01cd = $('#duel_log\x20.log_txt')['scrollMax']();
    $('#duel_log\x20.log_txt')['data']('maxVPS', duel_log_vsp >= _0x3d01cd);
}
function restoreDuelLogVSP() {
    if ($('#duel_log\x20.log_txt')['data']('maxVPS')) {
        $('#duel_log\x20.log_txt')['scrollTop'](duel_log_vsp + 0x3e8);
        return;
    }
    var _0x1dbefd = duel_log_vsp;
    setTimeout(function() {
        $('#duel_log\x20.log_txt')['scrollTop'](_0x1dbefd);
    }, 0x14);
}
function duelLogPrint(_0x29cc6c) {
    if (!_0x29cc6c)
        return;
    if (_0x29cc6c instanceof Array)
        _0x29cc6c['forEach'](function(_0x339cd3, _0x1e89d0) {
            duel_logs['push'](_0x339cd3);
        }),
        updateDuelLog();
    else {
        duel_logs['push'](_0x29cc6c);
        var _0xc7783c = '#0000FF'
          , _0x172289 = _0x29cc6c['public_log']
          , _0x585f89 = ''
          , _0x347db7 = ''
          , _0x408385 = getTimestamp(_0x29cc6c['seconds']);
        !_0x29cc6c['seconds'] && _0x29cc6c['timestamp'] && (_0x408385 = _0x29cc6c['timestamp']);
        $('#duel_log\x20.private_cb')['is'](':checked') && (_0x29cc6c['private_log'] && (_0x172289 = _0x29cc6c['private_log']));
        if ($('#duel_log\x20.search_txt')['val']() != '') {
            if (_0x172289['toLowerCase']()['indexOf']($('#duel_log\x20.search_txt')['val']()['toLowerCase']()) < 0x0)
                return;
        }
        if (!_0x29cc6c['username'])
            _0xc7783c = '#777777';
        else {
            if (player1['username'] == _0x29cc6c['username'] || tag_duel && player3['username'] == _0x29cc6c['username'])
                _0xc7783c = '#FF0000';
            else
                player2['username'] == _0x29cc6c['username'] || tag_duel && player4['username'] == _0x29cc6c['username'] ? _0xc7783c = '#0000FF' : _0xc7783c = '#000000';
        }
        if ($('#duel_log\x20.usernames_cb')['is'](':checked')) {
            if (conceal && isPlayer1(_0x29cc6c['username']))
                _0x585f89 = '\x20Red:';
            else
                conceal && isPlayer2(_0x29cc6c['username']) ? _0x585f89 = '\x20Blue:' : _0x585f89 = '\x20' + _0x29cc6c['username'] + ':';
        }
        if (_0x29cc6c['type'] == 'chat')
            $('#duel_log\x20.chat_cb')['is'](':checked') && (_0x347db7 += '<font\x20color=\x22' + _0xc7783c + '\x22>' + _0x408385 + escapeHTML(_0x585f89) + '\x20<i>' + escapeHTML(_0x172289) + '</i></font><br>');
        else
            _0x29cc6c['type'] == 'duel' ? $('#duel_log\x20.duel_cb')['is'](':checked') && (_0x172289 == 'Entered\x20Draw\x20Phase' && (logTurnCount++,
            _0x347db7 += '<font\x20color=\x22' + _0xc7783c + '\x22>----------------(Turn\x20' + logTurnCount + ')',
            logTurnCount < 0xa && (_0x347db7 += '-'),
            _0x347db7 += '----------------</font><br>'),
            _0x347db7 += '<font\x20color=\x22' + _0xc7783c + '\x22>' + _0x408385 + escapeHTML(_0x585f89) + '\x20' + escapeHTML(_0x172289) + '</font><br>') : $('#duel_log\x20.game_cb')['is'](':checked') && (_0x347db7 += '<font\x20color=\x22' + _0xc7783c + '\x22>' + _0x408385 + escapeHTML(_0x585f89) + '\x20' + escapeHTML(_0x172289) + '</font><br>');
        saveDuelLogVSP(),
        $('#duel_log\x20.log_txt')['append'](_0x347db7),
        restoreDuelLogVSP();
    }
}
function updateDuelLog() {
    var _0x2e3324 = '';
    logTurnCount = 0x0;
    for (var _0x139d1d = 0x0; _0x139d1d < duel_logs['length']; _0x139d1d++) {
        var _0x22fbd4 = '#0000FF'
          , _0x3ba6d9 = duel_logs[_0x139d1d]['public_log']
          , _0x471192 = ''
          , _0x22a626 = getTimestamp(duel_logs[_0x139d1d]['seconds']);
        !duel_logs[_0x139d1d]['seconds'] && duel_logs[_0x139d1d]['timestamp'] && (_0x22a626 = duel_logs[_0x139d1d]['timestamp']);
        $('#duel_log\x20.private_cb')['is'](':checked') && (duel_logs[_0x139d1d]['private_log'] && (_0x3ba6d9 = duel_logs[_0x139d1d]['private_log']));
        if ($('#duel_log\x20.search_txt')['val']() != '') {
            if (_0x3ba6d9['toLowerCase']()['indexOf']($('#duel_log\x20.search_txt')['val']()['toLowerCase']()) < 0x0)
                continue;
        }
        if (!duel_logs[_0x139d1d]['username'])
            _0x22fbd4 = '#777777';
        else {
            if (player1['username'] == duel_logs[_0x139d1d]['username'] || tag_duel && player3['username'] == duel_logs[_0x139d1d]['username'])
                _0x22fbd4 = '#FF0000';
            else
                player2['username'] == duel_logs[_0x139d1d]['username'] || tag_duel && player4['username'] == duel_logs[_0x139d1d]['username'] ? _0x22fbd4 = '#0000FF' : _0x22fbd4 = '#000000';
        }
        $('#duel_log\x20.usernames_cb')['is'](':checked') && (_0x471192 = '\x20' + duel_logs[_0x139d1d]['username'] + ':');
        if (duel_logs[_0x139d1d]['type'] == 'chat')
            $('#duel_log\x20.chat_cb')['is'](':checked') && (_0x2e3324 += '<font\x20color=\x22' + _0x22fbd4 + '\x22>' + _0x22a626 + escapeHTML(_0x471192) + '\x20<i>' + escapeHTML(_0x3ba6d9) + '</i></font><br>');
        else
            duel_logs[_0x139d1d]['type'] == 'duel' ? $('#duel_log\x20.duel_cb')['is'](':checked') && (_0x3ba6d9 == 'Entered\x20Draw\x20Phase' && (logTurnCount++,
            _0x2e3324 += '<font\x20color=\x22' + _0x22fbd4 + '\x22>----------------(Turn\x20' + logTurnCount + ')',
            logTurnCount < 0xa && (_0x2e3324 += '-'),
            _0x2e3324 += '----------------</font><br>'),
            _0x2e3324 += '<font\x20color=\x22' + _0x22fbd4 + '\x22>' + _0x22a626 + escapeHTML(_0x471192) + '\x20' + escapeHTML(_0x3ba6d9) + '</font><br>') : $('#duel_log\x20.game_cb')['is'](':checked') && (_0x2e3324 += '<font\x20color=\x22' + _0x22fbd4 + '\x22>' + _0x22a626 + escapeHTML(_0x471192) + '\x20' + escapeHTML(_0x3ba6d9) + '</font><br>');
    }
    $('#duel_log\x20.log_txt')['html'](_0x2e3324),
    console['log']('doing\x20here'),
    $('#duel_log\x20.log_txt')['scrollTop'](duel_log_vsp);
}
function getTimestamp(_0xa9bfde) {
    var _0x48aeac = Math['floor'](_0xa9bfde / 0x3c)
      , _0x340f8d = (_0xa9bfde % 0x3c)['toString']();
    return _0x340f8d['length'] < 0x2 && (_0x340f8d = '0' + _0x340f8d),
    '[' + _0x48aeac + ':' + _0x340f8d + ']';
}
function initRPSStart() {
    console['log']('initRPSStart'),
    gotoDuel('rps_start');
    if (solo) {
        $('.field_decks')['css']('opacity', 0x1),
        addCards();
        return;
    }
    $('#over')['hide'](),
    $('#preview')['hide'](),
    $('#preview_txt')['hide']();
    !duelist && ($('#duel\x20#draw_btn')['hide'](),
    $('#duel\x20#mulligan_btn')['hide']());
    resetLifepoints(),
    resetDuelButtons(),
    rpsWinner = '',
    pickedRPS = ![],
    rock1 = new Card(),
    rock1['css']('left', 0x13f),
    rock1['css']('top', 0x1de),
    rock1['onRotate'](!![]),
    $('#rps_start')['append'](rock1),
    paper1 = new Card(),
    paper1['css']('left', 0x20b),
    paper1['css']('top', 0x1de),
    paper1['onRotate'](!![]),
    $('#rps_start')['append'](paper1),
    scissors1 = new Card(),
    scissors1['css']('left', 0x2d7),
    scissors1['css']('top', 0x1de),
    scissors1['onRotate'](!![]),
    $('#rps_start')['append'](scissors1),
    rock2 = new Card(),
    rock2['css']('left', 0x2d7),
    rock2['css']('top', 0xa2),
    $('#rps_start')['append'](rock2),
    paper2 = new Card(),
    paper2['css']('left', 0x20b),
    paper2['css']('top', 0xa2),
    $('#rps_start')['append'](paper2),
    scissors2 = new Card(),
    scissors2['css']('left', 0x13f),
    scissors2['css']('top', 0xa2),
    $('#rps_start')['append'](scissors2),
    TweenMax['set']($('#rps_start\x20.card'), {
        'scale': 0.4375
    }),
    TweenMax['set']([rock2, paper2, scissors2], {
        'rotation': 0xb4
    }),
    TweenMax['to']($('#rps_start\x20.card'), 0x0, {
        'rotationY': 0xb4 + ABOUT_ZERO
    });
    duelist && ($('#duel\x20.cin_txt')['focus'](),
    player1 == Player1() && (rock1['addClass']('rps_card'),
    paper1['addClass']('rps_card'),
    scissors1['addClass']('rps_card'),
    TweenMax['to']($('.rps_card'), 0x0, {
        'rotationY': ABOUT_ZERO
    })));
    var _0x4e50a6 = {
        'name': 'Rock',
        'treated_as': 'Rock',
        'effect': 'Rock\x20beats\x20scissors\x20but\x20loses\x20to\x20paper',
        'card_type': 'Monster',
        'monster_color': 'Ritual',
        'type': 'Rock',
        'attribute': 'EARTH',
        'pic': IMAGES_START + 'card/rock.jpg'
    };
    rock1['data']('cardfront')['initializeFromData'](_0x4e50a6),
    rock2['data']('cardfront')['initializeFromData'](_0x4e50a6),
    _0x4e50a6 = {
        'name': 'Paper',
        'effect': 'Paper\x20beats\x20rock\x20but\x20loses\x20to\x20scissors',
        'card_type': 'Monster',
        'monster_color': 'Normal',
        'type': 'Winged\x20Beast',
        'attribute': 'WIND',
        'pic': IMAGES_START + 'card/paper.jpg'
    },
    paper1['data']('cardfront')['initializeFromData'](_0x4e50a6),
    paper2['data']('cardfront')['initializeFromData'](_0x4e50a6),
    _0x4e50a6 = {
        'name': 'Scissors',
        'effect': 'Scissors\x20beats\x20paper\x20but\x20loses\x20to\x20rock',
        'card_type': 'Monster',
        'monster_color': 'Fusion',
        'type': 'Machine',
        'attribute': 'LIGHT',
        'pic': IMAGES_START + 'card/scissors.jpg'
    },
    scissors1['data']('cardfront')['initializeFromData'](_0x4e50a6),
    scissors2['data']('cardfront')['initializeFromData'](_0x4e50a6),
    bottomChoices = [rock1, paper1, scissors1],
    topChoices = [rock2, paper2, scissors2],
    TweenMax['fromTo']([rock1, paper1, scissors1], 0.5, {
        'top': 726.8
    }, {
        'top': 478.1,
        'delay': 0.3,
        'ease': Expo['easeInOut'],
        'onStart': function() {
            playSound(Reveal);
        }
    }),
    TweenMax['fromTo'](rock2, 0.5, {
        'top': -113.15
    }, {
        'top': 161.8,
        'delay': 0.3,
        'ease': Expo['easeInOut']
    }),
    TweenMax['fromTo'](paper2, 0.5, {
        'top': -113.15
    }, {
        'top': 161.8,
        'delay': 0.3,
        'ease': Expo['easeInOut']
    }),
    TweenMax['fromTo'](scissors2, 0.5, {
        'top': -113.15
    }, {
        'top': 161.8,
        'delay': 0.3,
        'ease': Expo['easeInOut'],
        'onComplete': function() {
            duelist && Player1()['username'] == username && (rock1['click'](chooseRPS),
            paper1['click'](chooseRPS),
            scissors1['click'](chooseRPS));
        }
    });
}
function determineWinner(_0x133f54) {
    pickedRPS = !![],
    console['log']('determineWinner');
    if (_0x133f54['player2'] == username || tag_duel && _0x133f54['player2'] == player1['partner']['username']) {
        _0x133f54['player1'] = username,
        _0x133f54['player2'] = player2['username'];
        var _0x137e3c = _0x133f54['player1_choice']
          , _0x5e804c = _0x133f54['player2_choice'];
        _0x133f54['player1_choice'] = _0x5e804c,
        _0x133f54['player2_choice'] = _0x137e3c;
    }
    rpsWinner = _0x133f54['winner'];
    if (_0x133f54['player1_choice'] == 'Rock')
        bottomChoice = rock1;
    else
        _0x133f54['player1_choice'] == 'Paper' ? bottomChoice = paper1 : bottomChoice = scissors1;
    if (_0x133f54['player2_choice'] == 'Rock')
        topChoice = rock2;
    else
        _0x133f54['player2_choice'] == 'Paper' ? topChoice = paper2 : topChoice = scissors2;
    var _0xcb6502 = 0xb4 + ABOUT_ZERO;
    duelist && (_0xcb6502 = ABOUT_ZERO);
    if (Player1()['username'] != username || !duelist)
        for (_0x2505e4 = 0x0; _0x2505e4 < bottomChoices['length']; _0x2505e4++) {
            bottomChoice[0x0] != bottomChoices[_0x2505e4][0x0] ? TweenMax['fromTo'](bottomChoices[_0x2505e4], 0.5, {
                'top': 0x1de
            }, {
                'top': 0x31a,
                'rotationY': getRotationY(bottomChoices[_0x2505e4][0x0]) + 0x168 + ABOUT_ZERO
            }) : TweenMax['fromTo'](bottomChoices[_0x2505e4], 0.5, {
                'left': parseInt(bottomChoices[_0x2505e4]['css']('left'))
            }, {
                'left': 0x20b,
                'rotationY': 0x168 + ABOUT_ZERO
            });
        }
    for (var _0x2505e4 = 0x0; _0x2505e4 < topChoices['length']; _0x2505e4++) {
        topChoice[0x0] != topChoices[_0x2505e4][0x0] ? TweenMax['fromTo'](topChoices[_0x2505e4], 0.5, {
            'top': 0xa2,
            'rotationY': -0xb4 + ABOUT_ZERO
        }, {
            'top': -0x71,
            'rotationY': 0xb4 + ABOUT_ZERO
        }) : ($('#rps_start')['append'](topChoice),
        TweenMax['fromTo'](topChoices[_0x2505e4], 0.5, {
            'left': parseInt(topChoices[_0x2505e4]['css']('left'))
        }, {
            'left': 0x20b,
            'rotationY': 0x168 + ABOUT_ZERO,
            'onComplete': function() {
                TweenMax['fromTo'](bottomChoice, 0.2, {
                    'top': parseInt(bottomChoice['css']('top'))
                }, {
                    'top': 0x1bf,
                    'ease': Linear['easeNone']
                }),
                TweenMax['fromTo'](topChoice, 0.2, {
                    'top': parseInt(topChoice['css']('top'))
                }, {
                    'top': 0xc1,
                    'ease': Linear['easeNone'],
                    'onComplete': function() {
                        if (_0x133f54['winner'] == Player2()['username'])
                            TweenMax['fromTo'](bottomChoice, 0.5, {
                                'top': 0x1bf
                            }, {
                                'top': 0x31a,
                                'ease': Linear['easeNone']
                            }),
                            TweenMax['fromTo'](topChoice, 0.2, {
                                'top': 0xc1
                            }, {
                                'top': 0x140,
                                'ease': Linear['easeNone']
                            }),
                            rpsTimer['start'](),
                            playSound(Shred);
                        else
                            _0x133f54['winner'] == Player1()['username'] || _0x133f54['winner'] != '' ? (TweenMax['fromTo'](bottomChoice, 0.2, {
                                'top': 0x1bf
                            }, {
                                'top': 0x140,
                                'ease': Linear['easeNone']
                            }),
                            TweenMax['fromTo'](topChoice, 0.5, {
                                'top': 0xc1
                            }, {
                                'top': -0x9b,
                                'ease': Linear['easeNone']
                            }),
                            rpsTimer['start'](),
                            playSound(Shred)) : (pickedRPS = ![],
                            console['log']('data.winner\x20=\x20' + _0x133f54['winner']),
                            console['log']('Player1().username\x20=\x20' + Player1()['username']),
                            console['log']('Player2().username\x20=\x20' + Player2()['username']),
                            TweenMax['fromTo'](bottomChoice, 0.2, {
                                'top': 0x1bf
                            }, {
                                'top': 0x1de,
                                'ease': Linear['easeNone']
                            }),
                            TweenMax['fromTo'](topChoice, 0.2, {
                                'top': 0xc1
                            }, {
                                'top': 0xa2,
                                'ease': Linear['easeNone'],
                                'onComplete': function() {
                                    TweenMax['to'](rock1, 0.5, {
                                        'top': 0x1de,
                                        'left': 0x13f,
                                        'rotationY': _0xcb6502,
                                        'ease': Linear['easeNone']
                                    }),
                                    TweenMax['to'](paper1, 0.5, {
                                        'top': 0x1de,
                                        'left': 0x20b,
                                        'rotationY': _0xcb6502,
                                        'ease': Linear['easeNone']
                                    }),
                                    TweenMax['to'](scissors1, 0.5, {
                                        'top': 0x1de,
                                        'left': 0x2d7,
                                        'rotationY': _0xcb6502,
                                        'ease': Linear['easeNone']
                                    }),
                                    TweenMax['to'](rock2, 0.5, {
                                        'top': 0xa2,
                                        'left': 0x2d7,
                                        'rotationY': 0xb4 + ABOUT_ZERO,
                                        'ease': Linear['easeNone']
                                    }),
                                    TweenMax['to'](paper2, 0.5, {
                                        'top': 0xa2,
                                        'left': 0x20b,
                                        'rotationY': 0xb4 + ABOUT_ZERO,
                                        'ease': Linear['easeNone']
                                    }),
                                    TweenMax['to'](scissors2, 0.5, {
                                        'top': 0xa2,
                                        'left': 0x13f,
                                        'rotationY': 0xb4 + ABOUT_ZERO,
                                        'ease': Linear['easeNone'],
                                        'onComplete': function() {
                                            Player1()['username'] == username && duelist && (rock1['click'](chooseRPS),
                                            paper1['click'](chooseRPS),
                                            scissors1['click'](chooseRPS),
                                            rock1['css']('pointer-events', 'auto'),
                                            paper1['css']('pointer-events', 'auto'),
                                            scissors1['css']('pointer-events', 'auto'),
                                            rock1['find']('.content:first')['css']('pointer-events', 'auto'),
                                            paper1['find']('.content:first')['css']('pointer-events', 'auto'),
                                            scissors1['find']('.content:first')['css']('pointer-events', 'auto'));
                                        }
                                    });
                                }
                            }));
                    }
                });
            }
        }));
    }
}
function initTPStart() {
    console['log']('initTPStart');
    links || speed || rush ? gotoDuel('tp_start2') : gotoDuel('tp_start');
    duelist && Send({
        'action': 'Duel',
        'play': 'Ready',
        'status': 'Pick\x20first'
    });
    rpsTimer['reset'](),
    preview['hide'](),
    preview_txt['hide']();
    duel_active && resetDuelButtons();
    $('#over')['hide'](),
    resetLifepoints(),
    $('#field')['show'](),
    $('#field_content')['hide'](),
    $('#cid2_txt')['show'](),
    $('#cie2_txt')['show']();
    duelFormat == 'gr' || duelFormat == 'gu' ? ($('#cie2_txt')['hide'](),
    $('#cie1_txt')['hide']()) : ($('#cie2_txt')['show'](),
    $('#cie1_txt')['show']());
    $('#cid1_txt')['text'](''),
    $('#cid2_txt')['text'](''),
    $('#cie1_txt')['text'](''),
    $('#cie2_txt')['text'](''),
    $('#cie1_txt')['css']('top', 0x203),
    first = new Card(),
    first['css']('left', 370.5),
    first['css']('top', 0x140),
    first['css']('transform', 'scale(0.6875)'),
    first['css']('pointer-events', 'none'),
    first['find']('.content')['css']('pointer-events', 'auto'),
    first['onRotate'](!![]);
    var _0x2a431e = {
        'name': 'First',
        'effect': 'The\x20player\x20who\x20picks\x20this\x20card\x20will\x20go\x20first',
        'card_type': 'Monster',
        'monster_color': 'Effect',
        'type': 'Spellcaster',
        'attribute': 'LIGHT',
        'pic': IMAGES_START + 'card/first.jpg'
    };
    first['data']('cardfront')['initializeFromData'](_0x2a431e),
    first['insertBefore']($('#over')),
    second = new Card(),
    _0x2a431e = {
        'name': 'Second',
        'effect': 'The\x20player\x20who\x20picks\x20this\x20card\x20will\x20go\x20second',
        'card_type': 'Monster',
        'monster_color': 'Ritual',
        'type': 'Spellcaster',
        'attribute': 'DARK',
        'pic': IMAGES_START + 'card/second.jpg'
    },
    second['insertBefore']($('#over')),
    second['css']('left', 675.5),
    second['css']('top', 0x140),
    second['css']('transform', 'scale(0.6875)'),
    second['css']('pointer-events', 'none'),
    second['find']('.content')['css']('pointer-events', 'auto'),
    second['onRotate'](!![]),
    second['data']('cardfront')['initializeFromData'](_0x2a431e),
    !solo && $('.field_decks')['css']('opacity', 0x0),
    $('#field')['css']('pointer-events', 'none'),
    TweenMax['fromTo'](first, 0.5, {
        'top': -0xc7
    }, {
        'top': 0x140,
        'onComplete': function() {
            currentLabel['indexOf']('tp_start') >= 0x0 && (duelist && rpsWinner == username && (first['find']('.content')['click'](pickFirst),
            first['addClass']('tp_card'),
            second['find']('.content')['click'](pickFirst),
            second['addClass']('tp_card')),
            TweenMax['to']($('#' + currentLabel + '\x20.field_decks'), 0x1, {
                'alpha': 0x1,
                'onComplete': function() {
                    $('#numbers')['insertBefore']($('#over')),
                    setupNumbers(),
                    !solo && addCards();
                }
            }));
        }
    }),
    TweenMax['fromTo'](second, 0.5, {
        'top': 0x347
    }, {
        'top': 0x140
    });
}
function getDuelCard(_0x5127ab) {
    var _0x4b17d2 = player1['all_cards_arr']['concat'](player2['all_cards_arr']);
    for (var _0x283cd8 = 0x0; _0x283cd8 < _0x4b17d2['length']; _0x283cd8++) {
        if (_0x4b17d2[_0x283cd8]['data']('id') == _0x5127ab)
            return _0x4b17d2[_0x283cd8];
    }
    return null;
}
function duelResponse(_0x42493a) {
    SOFT_PLAYS['indexOf'](_0x42493a['play']) < 0x0 && ($('.red_target')['hide'](),
    $('.blue_target')['hide'](),
    $('.green_target')['hide']());
    var _0x4851b3;
    if (_0x42493a['username'] == player1['username'])
        _0x4851b3 = player1;
    else {
        if (_0x42493a['username'] == player2['username'])
            _0x4851b3 = player2;
        else {
            if (tag_duel && _0x42493a['username'] == player3['username'])
                _0x4851b3 = player3;
            else
                tag_duel && _0x42493a['username'] == player4['username'] && (_0x4851b3 = player4);
        }
    }
    if (actionsQueue['length'] > 0x0)
        for (var _0x215bd3 = 0x0; _0x215bd3 < actionsQueue['length']; _0x215bd3++) {}
    _0x42493a['owner'] && _0x42493a['id'] && actionsQueue['push'](function() {
        updateOwner(getCurrentOwner(_0x42493a['owner']), getDuelCard(_0x42493a['id'])),
        endAction();
    });
    switch (_0x42493a['play']) {
    case 'Rejoin\x20duel':
        rejoinDuel(_0x4851b3, _0x42493a);
        break;
    case 'Add\x20watcher':
        addWatcher(_0x42493a);
        break;
    case 'Remove\x20watcher':
        removeWatcher(_0x42493a),
        enableAdminE();
        break;
    case 'Watcher\x20message':
        watchChatPrint(_0x42493a);
        break;
    case 'Siding':
        initSiding(_0x42493a),
        addLine(escapeHTML(_0x42493a['message']));
        break;
    case 'Siding\x20with\x20cards':
        initSiding(_0x42493a),
        addLine(escapeHTML(_0x42493a['message'])),
        createSidingHoles(_0x42493a),
        initSideCardFromData(_0x42493a);
        break;
    case 'Begin\x20next\x20duel':
        beginNextDuel(_0x42493a);
        break;
    case 'Back\x20to\x20RPS':
        exitRPS(),
        exitTP(),
        exitDueling(),
        exitSiding(),
        duel_active = !![];
        duelist ? updateActive(!![]) : ($('#draw_btn')['hide'](),
        $('#mulligan_btn')['hide']());
        initRPSStart(),
        gameLossSound = getGameLossSound(),
        gameWinSound = getGameWinSound();
        if (switched)
            tag_duel ? switchDuelists(_0x42493a, 'player1', 'player2', 'player3', 'player4') : switchDuelists(_0x42493a, 'player1', 'player2');
        else
            tag_duel && _0x42493a['player3']['username'] == username && switchDuelists(_0x42493a, 'player1', 'player3');
        deckData = _0x42493a;
        if (_0x42493a['starting']) {
            if (match_type == 'm')
                addLine('Starting\x20new\x20match');
            else
                match_type == 'n' && addLine('Starting\x20new\x20single');
        }
        $('#draw_btn')['val']('Offer\x20Draw'),
        initSleeves(),
        $('.all_good')['hide']();
        break;
    case 'Admit\x20defeat':
        hideDim(),
        admittedDefeat(_0x4851b3, _0x42493a);
        break;
    case 'Left\x20duel':
        leftDuel(_0x4851b3, _0x42493a);
        break;
    case 'Quit\x20duel':
        quitDuel(_0x4851b3, _0x42493a);
        break;
    case 'Game\x20loss':
    case 'Match\x20loss':
        gamelossed(_0x4851b3, _0x42493a);
        break;
    case 'Loss':
        loss(_0x4851b3, _0x42493a);
        break;
    case 'Cancel\x20game':
        gameCanceled(_0x42493a);
        break;
    case 'Frozen':
        _0x42493a['targeted_username'] ? addLine(_0x42493a['targeted_username'] + '\x20has\x20been\x20frozen') : addLine(_0x42493a['username'] + '\x20has\x20been\x20frozen');
        break;
    case 'Beginner':
        _0x42493a['targeted_username'] ? addLine(_0x42493a['targeted_username'] + '\x20has\x20been\x20set\x20as\x20a\x20beginner') : addLine(_0x42493a['username'] + '\x20has\x20been\x20set\x20as\x20a\x20beginner');
        break;
    case 'RPS':
        determineWinner(_0x42493a);
        break;
    case 'Typing':
        typingE(_0x4851b3);
        break;
    case 'Duel\x20message':
        duelChatPrint(_0x42493a);
        _0x4851b3 && _0x4851b3['stopTyping']();
        duelist && _0x42493a['username'] == username && duelChatTimerE();
        break;
    case 'Reset\x20deck':
    case 'Swap\x20cards':
        hideDim(),
        $('#reset_btn')['disable'](![]),
        updateSideCards(_0x42493a),
        checkSidingCards();
        break;
    case 'Pause\x20game':
        pauseGame(_0x4851b3, _0x42493a);
        break;
    case 'Resume\x20game':
        resumeGame(_0x42493a);
        break;
    case 'Reset\x20game':
        actionsQueue['push'](function() {
            resetGame(_0x4851b3, _0x42493a);
        });
        break;
    case 'Call\x20admin':
        addLine(escapeHTML(_0x4851b3['username']) + '\x20has\x20called\x20a\x20judge'),
        $('#call_admin_btn')['disable'](!![]),
        awaiting_admin = !![];
        duelist && _0x4851b3['username'] == username && ($('#call_admin_btn')['disable'](![]),
        $('#call_admin_btn')['val']('Cancel\x20Call'));
        break;
    case 'Cancel\x20call':
        addLine(escapeHTML(_0x4851b3['username']) + '\x20cancelled\x20the\x20call'),
        awaiting_admin = ![];
        duelist && ($('#call_admin_btn')['disable'](![]),
        $('#call_admin_btn')['val']('Call\x20Judge'));
        break;
    case 'Offer\x20draw':
        addLine(escapeHTML(_0x4851b3['username']) + '\x20has\x20made\x20a\x20draw\x20offer');
        if (isPlayer2(_0x4851b3['username'])) {
            $('#draw_btn')['val']('Accept\x20Draw');
            return;
        }
        $('#draw_btn')['val']('Revoke\x20Draw');
        break;
    case 'Revoke\x20draw':
        addLine(escapeHTML(_0x4851b3['username']) + '\x20has\x20revoked\x20the\x20draw\x20offer'),
        $('#draw_btn')['val']('Offer\x20Draw');
        break;
    case 'Accept\x20draw':
        acceptDraw(_0x4851b3, _0x42493a);
        break;
    case 'Offer\x20rematch':
        addLine(escapeHTML(_0x4851b3['username']) + '\x20offered\x20a\x20rematch');
        if (isPlayer2(_0x4851b3['username'])) {
            $('#rematch_btn')['val']('Accept\x20Rematch');
            return;
        }
        $('#rematch_btn')['val']('Revoke\x20Rematch');
        break;
    case 'Revoke\x20rematch':
        addLine(escapeHTML(_0x4851b3['username']) + '\x20has\x20revoked\x20the\x20rematch\x20offer'),
        $('#rematch_btn')['val']('Offer\x20Rematch');
        break;
    case 'Accept\x20rematch':
        used_allotted_rematch = 0x1,
        $('#rematch_btn')['val']('Offer\x20Rematch');
        break;
    case 'Done\x20siding':
        if (!duelist && _0x4851b3 == Player1())
            $('#done_siding1')['show']();
        else {
            if (duelist && _0x4851b3['username'] == username)
                clearHoles(),
                $('#done_siding_btn')['hide'](),
                $('#done_siding1')['show']();
            else
                _0x4851b3 == Player2() && $('#done_siding2')['show']();
        }
        break;
    case 'Pick\x20first':
        pickFirstResponse(_0x42493a);
        break;
    case 'Target\x20card':
        actionsQueue['push'](function() {
            targetCardResponse(_0x4851b3, _0x42493a);
        });
        break;
        break;
    case 'Stop\x20viewing':
        stopViewing(_0x42493a);
        break;
    case 'Shuffle\x20deck':
        actionsQueue['push'](function() {
            shuffleDeck(_0x4851b3, _0x42493a);
        });
        break;
    case 'Shuffle\x20hand':
        actionsQueue['push'](function() {
            shuffleHand2(_0x4851b3, _0x42493a);
        });
        break;
    case 'Permission\x20event':
        actionsQueue['push'](function() {
            permissionEvent(_0x42493a),
            endAction();
        });
        break;
    case 'Permission\x20granted':
        actionsQueue['push'](function() {
            removePermission(),
            endAction();
        });
        break;
    case 'Permission\x20denied':
        actionsQueue['push'](function() {
            addLine(escapeHTML(_0x42493a['username']) + '\x20denied\x20permission');
            if (isPlayer1(_0x42493a['username']))
                $('#status1\x20.status_txt')['text']() == 'Waiting\x20for\x20permission' && $('#status1\x20.status_txt')['text']('');
            else
                isPlayer2(_0x42493a['username']) && ($('#status2\x20.status_txt')['text']() == 'Waiting\x20for\x20permission' && $('#status2\x20.status_txt')['text'](''));
            endAction();
        });
        break;
    case 'Start\x20turn':
        actionsQueue['push'](function() {
            turn_player = getPlayer(_0x42493a['username']),
            startTurn();
        });
        break;
    case 'Enter\x20DP':
        actionsQueue['push'](function() {
            enterDP();
        });
        break;
    case 'Enter\x20SP':
        actionsQueue['push'](function() {
            enterSP();
        });
        break;
    case 'Enter\x20M1':
        actionsQueue['push'](function() {
            enterM1();
        });
        break;
    case 'Enter\x20BP':
        actionsQueue['push'](function() {
            enterBP();
        });
        break;
    case 'Enter\x20M2':
        actionsQueue['push'](function() {
            enterM2();
        });
        break;
    case 'Enter\x20EP':
        actionsQueue['push'](function() {
            enterEP();
        });
        break;
    case 'End\x20turn':
        actionsQueue['push'](function() {
            endTurn(_0x42493a);
        });
        break;
    case 'Add\x20counter':
        actionsQueue['push'](function() {
            addCounter(_0x4851b3, _0x42493a);
        });
        break;
    case 'Remove\x20counter':
        actionsQueue['push'](function() {
            removeCounter(_0x4851b3, _0x42493a);
        });
        break;
    case 'Die':
        actionsQueue['push'](function() {
            dieRoll(_0x4851b3, _0x42493a);
        });
        break;
    case 'Coin':
        actionsQueue['push'](function() {
            coinFlip(_0x4851b3, _0x42493a);
        });
        break;
    case 'Life\x20points':
        actionsQueue['push'](function() {
            updateLifePoints(_0x4851b3, _0x42493a);
        });
        break;
    case 'View\x20deck':
        duelist && _0x4851b3['username'] == username && (seen_deck == ![] && viewingE(_0x42493a['viewing'], _0x42493a));
        showViewing(_0x42493a);
        break;
    case 'View\x20GY':
    case 'View\x20GY\x202':
    case 'View\x20Banished':
    case 'View\x20Banished\x202':
    case 'View\x20ED\x202':
    case 'View\x20Graveyard':
    case 'View\x20Extra\x20Deck':
    case 'View\x20Opponent\x27s\x20Banished':
    case 'View\x20Opponent\x27s\x20Graveyard':
    case 'View\x20Opponent\x27s\x20Public\x20Extra\x20Deck':
    case 'View\x20materials':
        showViewing(_0x42493a);
        break;
    case 'View\x20ED':
        duelist && _0x4851b3['username'] == username && (seen_extra == ![] && (seen_extra = !![],
        viewingE('Extra\x20Deck', _0x42493a)));
        showViewing(_0x42493a);
        break;
    case 'Show\x20deck':
    case 'Show\x20hand':
    case 'Show\x20ED':
    case 'Show\x20Extra\x20Deck':
        actionsQueue['push'](function() {
            showE(_0x42493a['viewing'], _0x42493a);
        });
        break;
    case 'Reveal':
    case 'Reveal\x20card\x20from\x20hand':
    case 'Reveal\x20card\x20from\x20deck':
    case 'Reveal\x20from\x20Extra':
        actionsQueue['push'](function() {
            reveal(_0x4851b3, _0x42493a);
        });
        break;
    case 'Move':
        actionsQueue['push'](function() {
            move(_0x4851b3, _0x42493a);
        });
        break;
    case 'Overlay':
        actionsQueue['push'](function() {
            overlay(_0x4851b3, _0x42493a);
        });
        break;
    case 'Attach':
        actionsQueue['push'](function() {
            attach(_0x4851b3, _0x42493a);
        });
        break;
    case 'Detach':
        actionsQueue['push'](function() {
            detach(_0x4851b3, _0x42493a);
        });
        break;
    case 'Attack':
        actionsQueue['push'](function() {
            attack(_0x4851b3, _0x42493a);
        });
        break;
    case 'Attack\x20directly':
        actionsQueue['push'](function() {
            attackDirectly(_0x4851b3, _0x42493a);
        });
        break;
    case 'Draw\x20card':
        actionsQueue['push'](function() {
            drawCard(_0x4851b3, _0x42493a);
        });
        break;
    case 'To\x20hand':
    case 'To\x20hand\x202':
    case 'To\x20hand\x20from\x20deck':
    case 'To\x20hand\x20from\x20field':
    case 'To\x20hand\x20from\x20grave':
    case 'To\x20hand\x20from\x20Extra':
    case 'To\x20hand\x20from\x20banished':
        actionsQueue['push'](function() {
            toHand(_0x4851b3, _0x42493a);
        });
        break;
    case 'To\x20B\x20Deck':
    case 'To\x20B\x20Deck\x202':
    case 'To\x20T\x20Deck':
    case 'To\x20T\x20Deck\x202':
    case 'To\x20T\x20Deck\x20FU':
    case 'To\x20T\x20Deck\x202\x20FU':
        actionsQueue['push'](function() {
            toDeck(_0x4851b3, _0x42493a);
        });
        break;
    case 'To\x20GY':
    case 'To\x20grave\x20from\x20deck':
    case 'To\x20grave\x20from\x20field':
    case 'To\x20grave\x20from\x20hand':
    case 'To\x20Grave\x20from\x20Extra':
    case 'To\x20grave\x20from\x20banished':
    case 'To\x20grave\x20from\x20opponent\x27s\x20banished':
        actionsQueue['push'](function() {
            toGY(_0x4851b3, _0x42493a);
        });
        break;
    case 'Mill':
        actionsQueue['push'](function() {
            mill(_0x4851b3, _0x42493a);
        });
        break;
    case 'Banish':
    case 'Banish\x20FD':
    case 'Banish\x20from\x20deck':
    case 'Banish\x20top\x20card\x20of\x20deck':
    case 'Banish\x20top\x20card\x20of\x20deck\x20FD':
    case 'Banish\x20FD\x20from\x20deck':
    case 'Banish\x20from\x20field':
    case 'Banish\x20from\x20field\x20FD':
    case 'Banish\x20from\x20hand':
    case 'Banish\x20from\x20hand\x20FD':
    case 'Banish\x20Xyz\x20Material':
    case 'Banish\x20from\x20Extra':
    case 'Banish\x20from\x20Extra\x20FD':
    case 'Banish\x20from\x20grave':
    case 'Banish\x20from\x20grave\x20FD':
    case 'Banish\x20from\x20opponent\x27s\x20grave':
        actionsQueue['push'](function() {
            banish(_0x4851b3, _0x42493a);
        });
        break;
    case 'To\x20ED':
    case 'To\x20ED\x20FU':
    case 'To\x20Extra\x20from\x20field':
    case 'To\x20Extra\x20FU\x20from\x20field':
    case 'To\x20Extra\x20from\x20grave':
    case 'To\x20Extra\x20FU\x20from\x20grave':
    case 'To\x20Extra\x20from\x20banished':
    case 'To\x20Extra\x20FU\x20from\x20banished':
        actionsQueue['push'](function() {
            toED(_0x4851b3, _0x42493a);
        });
        break;
    case 'Normal\x20Summon':
        actionsQueue['push'](function() {
            normalSummon(_0x4851b3, _0x42493a);
        });
        break;
    case 'SS\x20ATK':
    case 'SS\x20DEF':
    case 'SS\x20ATK\x20from\x20hand':
    case 'SS\x20ATK\x20from\x20deck':
    case 'SS\x20ATK\x20from\x20Extra':
    case 'SS\x20ATK\x20from\x20grave':
    case 'SS\x20ATK\x20from\x20banished':
    case 'SS\x20ATK\x20from\x20opponent\x27s\x20grave':
    case 'SS\x20ATK\x20from\x20opponent\x27s\x20banished':
    case 'SS\x20DEF\x20from\x20hand':
    case 'SS\x20DEF\x20from\x20deck':
    case 'SS\x20DEF\x20from\x20Extra':
    case 'SS\x20DEF\x20from\x20grave':
    case 'SS\x20DEF\x20from\x20banished':
    case 'SS\x20DEF\x20from\x20opponent\x27s\x20grave':
    case 'SS\x20DEF\x20from\x20opponent\x27s\x20banished':
        actionsQueue['push'](function() {
            specialSummon(_0x4851b3, _0x42493a);
        });
        break;
    case 'OL\x20ATK':
    case 'OL\x20DEF':
    case 'OL\x20ATK\x20from\x20Extra':
    case 'OL\x20DEF\x20from\x20Extra':
        actionsQueue['push'](function() {
            olSummon(_0x4851b3, _0x42493a);
        });
        break;
    case 'Summon\x20token':
    case 'Summon\x20Token':
        actionsQueue['push'](function() {
            summonToken(_0x4851b3, _0x42493a);
        });
        break;
    case 'Remove\x20Token':
        actionsQueue['push'](function() {
            removeToken(_0x4851b3, _0x42493a);
        });
        break;
    case 'Flip':
    case 'Flip\x20monster':
        actionsQueue['push'](function() {
            flip(_0x4851b3, _0x42493a);
        });
        break;
    case 'Flip\x20Summon':
        actionsQueue['push'](function() {
            flipSummon(_0x4851b3, _0x42493a);
        });
        break;
    case 'To\x20ATK':
        actionsQueue['push'](function() {
            toATK(_0x4851b3, _0x42493a);
        });
        break;
    case 'To\x20DEF':
        actionsQueue['push'](function() {
            toDEF(_0x4851b3, _0x42493a);
        });
        break;
    case 'Activate\x20ST':
    case 'Activate\x20Spell':
    case 'Activate\x20Spell\x20from\x20hand':
        actionsQueue['push'](function() {
            activateST(_0x4851b3, _0x42493a);
        });
        break;
    case 'To\x20ST':
    case 'To\x20ST\x20from\x20deck':
    case 'To\x20ST\x20from\x20hand':
    case 'To\x20ST\x20from\x20grave':
        actionsQueue['push'](function() {
            toST(_0x4851b3, _0x42493a);
        });
        break;
    case 'Set\x20monster':
    case 'Set\x20monster\x20from\x20hand':
        actionsQueue['push'](function() {
            setMonster(_0x4851b3, _0x42493a);
        });
        break;
    case 'Set\x20ST':
    case 'Set\x20ST\x20from\x20deck':
    case 'Set\x20ST\x20from\x20hand':
    case 'Set\x20monster\x20to\x20ST\x20from\x20hand':
        actionsQueue['push'](function() {
            setST(_0x4851b3, _0x42493a);
        });
        break;
    case 'Activate\x20Field\x20Spell':
    case 'Activate\x20Field\x20Spell\x20from\x20hand':
        actionsQueue['push'](function() {
            activateFieldSpell(_0x4851b3, _0x42493a);
        });
        break;
    case 'Activate\x20Field\x20Spell\x202':
        actionsQueue['push'](function() {
            activateFieldSpell2(_0x4851b3, _0x42493a);
        });
        break;
    case 'Set\x20Field\x20Spell':
    case 'Set\x20Field\x20Spell\x20from\x20hand':
    case 'Set\x20Field\x20Spell\x20from\x20deck':
        actionsQueue['push'](function() {
            setFieldSpell(_0x4851b3, _0x42493a);
        });
        break;
    case 'Set\x20Field\x20Spell\x202':
    case 'Set\x20Field\x20Spell\x20from\x20deck\x20to\x20opponent\x27s\x20field':
        actionsQueue['push'](function() {
            setFieldSpell2(_0x4851b3, _0x42493a);
        });
        break;
    case 'Activate\x20Pendulum\x20Left':
    case 'Activate\x20Pendulum\x20Left\x20from\x20field':
    case 'Activate\x20Pendulum\x20Left\x20from\x20hand':
        actionsQueue['push'](function() {
            activatePendulumLeft(_0x4851b3, _0x42493a);
        });
        break;
    case 'Activate\x20Pendulum\x20Right':
    case 'Activate\x20Pendulum\x20Right\x20from\x20field':
    case 'Activate\x20Pendulum\x20Right\x20from\x20hand':
        actionsQueue['push'](function() {
            activatePendulumRight(_0x4851b3, _0x42493a);
        });
        break;
    case 'Activate\x20Skill':
        actionsQueue['push'](function() {
            activateSkill(_0x4851b3, _0x42493a);
        });
        break;
    case 'Set\x20Skill':
        actionsQueue['push'](function() {
            setSkill(_0x4851b3, _0x42493a);
        });
        break;
    case 'Change\x20control':
        actionsQueue['push'](function() {
            changeControl(_0x4851b3, _0x42493a);
        });
        break;
    case 'Add\x20random\x20card\x20from\x20deck\x20to\x20hand':
        actionsQueue['push'](function() {
            addRandomCardFromDeckToHand(_0x4851b3, _0x42493a);
        });
        break;
    case 'Turn\x20top\x20card\x20face-up':
    case 'Turn\x20top\x20card\x20of\x20deck\x20face-up':
        actionsQueue['push'](function() {
            turnTopCardOfDeckFU(_0x4851b3, _0x42493a);
        });
        break;
    case 'Flip\x20deck':
    case 'Flip\x20deck\x20back':
        actionsQueue['push'](function() {
            flipDeck(_0x4851b3, _0x42493a);
        });
        break;
    case 'Pick\x202\x20cards':
    case 'Pick\x203\x20cards':
    case 'Pick\x204\x20cards':
        duelist && _0x4851b3['username'] == username && (viewingE(_0x42493a['viewing'], _0x42493a),
        next_callback = _0x42493a['callback']);
        showViewing(_0x42493a);
        break;
    case 'Cynet\x20Storm':
        actionsQueue['push'](function() {
            cynetStorm(_0x4851b3, _0x42493a);
        });
        break;
    case 'Exchange\x20cards':
        actionsQueue['push'](function() {
            exchangeCards(_0x4851b3, _0x42493a);
        });
        break;
    case 'Attach\x20top\x20card\x20from\x20Deck\x202':
        actionsQueue['push'](function() {
            attachTopCardFromDeck2(_0x4851b3, _0x42493a);
        });
        break;
    case 'Swap':
        swap(_0x4851b3, _0x42493a);
        return;
    case 'New\x20card':
        actionsQueue['push'](function() {
            newCard(_0x4851b3, _0x42493a);
        });
        break;
    case 'Initialize\x20cards':
        initalizeCards(_0x4851b3, _0x42493a);
        break;
    case 'Flip\x20decks':
        actionsQueue['push'](function() {
            flipDecks(_0x4851b3, _0x42493a);
        });
        break;
    case 'Flip\x20decks\x20back':
        actionsQueue['push'](function() {
            flipDecksBack(_0x4851b3, _0x42493a);
        });
        break;
    case 'Turn\x20face-down':
        actionsQueue['push'](function() {
            turnFaceDown(_0x4851b3, _0x42493a);
        });
        break;
    case 'Add\x20proxy':
        actionsQueue['push'](function() {
            addProxy(_0x4851b3, _0x42493a);
        });
        break;
    case 'Declare':
        actionsQueue['push'](function() {
            declare(_0x4851b3, _0x42493a);
        });
        break;
    case 'Stay\x20revealed':
        actionsQueue['push'](function() {
            stayRevealed(_0x4851b3, _0x42493a);
        });
        break;
    case 'Stop\x20revealing':
        actionsQueue['push'](function() {
            stopRevealing(_0x4851b3, _0x42493a);
        });
        break;
    case 'Good':
        actionsQueue['push'](function() {
            allGood(_0x4851b3, _0x42493a);
        });
        break;
    case 'Stop\x20good':
        actionsQueue['push'](function() {
            stopGood(_0x4851b3, _0x42493a);
        });
        break;
    case 'Thinking':
        thinking(_0x4851b3, _0x42493a),
        typingE(_0x4851b3);
        break;
    case 'Countdown':
        updateCountdown(_0x4851b3, _0x42493a);
        break;
    case 'Message':
        break;
    case 'Edit\x20stats':
        actionsQueue['push'](function() {
            editStats(_0x4851b3, _0x42493a);
        });
        break;
    }
    _0x42493a['line'] && addLine(escapeHTML(_0x42493a['line']));
    if (_0x42493a['log']) {
        if (_0x42493a['log']instanceof Array)
            for (_0x215bd3 = 0x0; _0x215bd3 < _0x42493a['log']['length']; _0x215bd3++) {
                _0x42493a['log'][_0x215bd3]['seconds'] = _0x42493a['seconds'];
            }
        else
            _0x42493a['log']['seconds'] = _0x42493a['seconds'];
        duelLogPrint(_0x42493a['log']);
    }
    performNextAction();
}
function beginNextDuel(_0x45d989) {
    rpsWinner = _0x45d989['username'];
    if (switched)
        tag_duel ? switchDuelists(_0x45d989, 'player1', 'player2', 'player3', 'player4') : switchDuelists(_0x45d989, 'player1', 'player2');
    else
        tag_duel && _0x45d989['player3']['username'] == username && switchDuelists(_0x45d989, 'player1', 'player3');
    deckData = _0x45d989,
    initTPStart(),
    gameLossSound = getGameLossSound(),
    gameWinSound = getGameWinSound(),
    !duelist && ($('#draw_btn')['hide'](),
    $('#mulligan_btn')['hide']()),
    exitSiding(),
    solo && (addCards(),
    $('.field_decks')['css']('opacity', 0x1)),
    $('.all_good')['hide']();
}
function exitSiding() {
    $('#done_siding1')['hide'](),
    $('#done_siding2')['hide'](),
    $('#lifepoints1')['show'](),
    $('#lifepoints2')['show'](),
    $('#viewing')['children']()['detach'](),
    $('#siding\x20.cardfront')['detach']();
}
function initSoloModeButtons() {
    $('#defeat_btn')['hide'](),
    $('#draw_btn')['val']('View\x20Replay'),
    $('#draw_btn')['css']('top', 0x24e),
    $('#call_admin_btn')['hide'](),
    $('#reset_btn')['show'](),
    $('#siding_btn')['show'](),
    $('#draw_btn')['show'](),
    $('#mulligan_btn')['hide']();
}
function pickFirstResponse(_0xf4cda0) {
    console['log']('pickFirstResponse');
    if (solo) {
        duelStart(_0xf4cda0),
        $('#cid2_txt')['hide'](),
        $('#cie2_txt')['hide'](),
        initSoloModeButtons();
        return;
    }
    first['css']('pointer-events', 'none'),
    second['css']('pointer-events', 'none'),
    players = [];
    if (_0xf4cda0['order'])
        for (var _0x48bfca = 0x0; _0x48bfca < _0xf4cda0['order']['length']; _0x48bfca++) {
            players['push'](getPlayer(_0xf4cda0['order'][_0x48bfca]));
        }
    else
        players = [getPlayer(_0xf4cda0['username']), getPlayer(_0xf4cda0['username'])['opponent']];
    first_player = _0xf4cda0['username'],
    turn_player = getPlayer(_0xf4cda0['username']),
    turn_player['opponent'] = players[players['length'] - 0x1],
    turn_player['opponent']['opponent'] = turn_player;
    var _0x5be8e7 = 0x0;
    isPlayer1(_0xf4cda0['username']) ? (TweenMax['fromTo'](first, 0.5, {
        'alpha': 0x1
    }, {
        'alpha': 0x1,
        'ease': Linear['easeNone'],
        'onUpdate': function() {
            _0x5be8e7 += 0x4,
            first['find']('.content')['css']('box-shadow', '0px\x200px\x20' + _0x5be8e7 + 'px\x20#FF0000,\x200px\x200px\x20' + _0x5be8e7 + 'px\x20#FF0000'),
            second['find']('.content')['css']('box-shadow', '0px\x200px\x20' + _0x5be8e7 + 'px\x20#0000FF,\x200px\x200px\x20' + _0x5be8e7 + 'px\x20#0000FF');
        }
    }),
    TweenMax['fromTo'](first, 0.5, {
        'top': 0x140
    }, {
        'top': 0x347,
        'delay': 0x2,
        'ease': Linear['easeNone']
    }),
    TweenMax['fromTo'](second, 0.5, {
        'top': 0x140
    }, {
        'top': -0xc7,
        'delay': 0x2,
        'ease': Linear['easeNone'],
        'onStart': function() {
            playSound(Reveal);
        },
        'onComplete': function() {
            currentLabel['indexOf']('tp_start') >= 0x0 && duelStart(_0xf4cda0);
        }
    })) : (TweenMax['fromTo'](second, 0.5, {
        'alpha': 0x1
    }, {
        'alpha': 0x1,
        'ease': Linear['easeNone'],
        'onUpdate': function() {
            _0x5be8e7 += 0x4,
            second['find']('.content')['css']('box-shadow', '0px\x200px\x20' + _0x5be8e7 + 'px\x20#FF0000,\x200px\x200px\x20' + _0x5be8e7 + 'px\x20#FF0000'),
            first['find']('.content')['css']('box-shadow', '0px\x200px\x20' + _0x5be8e7 + 'px\x20#0000FF,\x200px\x200px\x20' + _0x5be8e7 + 'px\x20#0000FF');
        }
    }),
    TweenMax['fromTo'](second, 0.5, {
        'top': 0x140
    }, {
        'top': 0x347,
        'delay': 0x2,
        'ease': Linear['easeNone']
    }),
    TweenMax['fromTo'](first, 0.5, {
        'top': 0x140
    }, {
        'top': -0xc7,
        'delay': 0x2,
        'ease': Linear['easeNone'],
        'onStart': function() {
            playSound(Reveal);
        },
        'onComplete': function() {
            currentLabel['indexOf']('tp_start') >= 0x0 && duelStart(_0xf4cda0),
            playSound(Reveal);
        }
    })),
    playSound(Decided),
    shiftPlayersE();
}
function addCards() {
    console['time']('addCards'),
    initDecks(deckData),
    shiftDeck(Player1()),
    shiftDeck(Player2()),
    shiftExtra(Player1()),
    shiftExtra(Player2()),
    deckData = null,
    tag_duel && (shiftDeck(Player1()['partner']),
    shiftDeck(Player2()['partner']),
    shiftExtra(Player1()['partner']),
    shiftExtra(Player2()['partner']),
    removeDeck(Player1()['partner']),
    removeDeck(Player2()['partner']),
    removeExtra(Player1()['partner']),
    removeExtra(Player2()['partner'])),
    initSleeves(),
    shiftPlayersE(),
    console['timeEnd']('addCards');
}
function loadSleeves(_0x3d3d7e) {
    if (currentLabel == 'rps_start' && !solo) {
        if (_0x3d3d7e == Player1())
            rock1['setSleeve'](_0x3d3d7e['sleeve']),
            paper1['setSleeve'](_0x3d3d7e['sleeve']),
            scissors1['setSleeve'](_0x3d3d7e['sleeve']);
        else
            _0x3d3d7e == Player2() && (rock2['setSleeve'](_0x3d3d7e['sleeve']),
            paper2['setSleeve'](_0x3d3d7e['sleeve']),
            scissors2['setSleeve'](_0x3d3d7e['sleeve']));
    } else {
        if (currentLabel['indexOf']('tp_start') >= 0x0 || currentLabel['indexOf']('duel_start') >= 0x0 || solo)
            for (var _0x440730 = 0x0; _0x440730 < _0x3d3d7e['all_cards_arr']['length']; _0x440730++) {
                if (!tag_duel || _0x3d3d7e['main_arr']['indexOf'](_0x3d3d7e['all_cards_arr'][_0x440730]) >= 0x0 || _0x3d3d7e['extra_arr']['indexOf'](_0x3d3d7e['all_cards_arr'][_0x440730]) >= 0x0 || _0x3d3d7e['hand_arr']['indexOf'](_0x3d3d7e['all_cards_arr'][_0x440730]) >= 0x0)
                    _0x3d3d7e['all_cards_arr'][_0x440730]['setSleeve'](_0x3d3d7e['sleeve']);
                else
                    tag_duel && (_0x3d3d7e == turn_player || _0x3d3d7e == turn_player['opponent']) && _0x3d3d7e['partner']['main_arr']['indexOf'](_0x3d3d7e['all_cards_arr'][_0x440730]) < 0x0 && _0x3d3d7e['partner']['extra_arr']['indexOf'](_0x3d3d7e['all_cards_arr'][_0x440730]) < 0x0 && _0x3d3d7e['partner']['hand_arr']['indexOf'](_0x3d3d7e['all_cards_arr'][_0x440730]) < 0x0 && _0x3d3d7e['all_cards_arr'][_0x440730]['setSleeve'](_0x3d3d7e['sleeve']);
            }
    }
}
function initDecks(_0x3e4642) {
    console['log']('initDecks'),
    console['time']('initDecks'),
    player1['resetDeck'](),
    player2['resetDeck']();
    for (var _0xf055ce = 0x0; _0xf055ce < _0x3e4642['player1']['main_total']; _0xf055ce++) {
        var _0x3d5c07 = newDuelCard(player1);
        _0x3d5c07['data']('id', _0x3e4642['player1']['start'] + _0xf055ce),
        player1['main_arr']['push'](_0x3d5c07),
        player1['all_cards_arr']['push'](_0x3d5c07);
    }
    for (_0xf055ce = 0x0; _0xf055ce < _0x3e4642['player1']['extra_total']; _0xf055ce++) {
        _0x3d5c07 = newDuelCard(player1),
        _0x3d5c07['data']('id', _0x3e4642['player1']['start'] + _0xf055ce + _0x3e4642['player1']['main_total']),
        _0x3d5c07['data']('face_down', !![]),
        player1['extra_arr']['push'](_0x3d5c07),
        player1['all_cards_arr']['push'](_0x3d5c07);
    }
    for (_0xf055ce = 0x0; _0xf055ce < _0x3e4642['player2']['main_total']; _0xf055ce++) {
        _0x3d5c07 = newDuelCard(player2),
        _0x3d5c07['data']('id', _0x3e4642['player2']['start'] + _0xf055ce),
        player1['username'] == username && !automatic && _0x3d5c07['addClass']('target'),
        player2['main_arr']['push'](_0x3d5c07),
        player2['all_cards_arr']['push'](_0x3d5c07);
    }
    for (_0xf055ce = 0x0; _0xf055ce < _0x3e4642['player2']['extra_total']; _0xf055ce++) {
        _0x3d5c07 = newDuelCard(player2),
        _0x3d5c07['data']('id', _0x3e4642['player2']['start'] + _0xf055ce + _0x3e4642['player2']['main_total']),
        _0x3d5c07['data']('face_down', !![]),
        player1['username'] == username && !automatic && _0x3d5c07['addClass']('target'),
        player2['extra_arr']['push'](_0x3d5c07),
        player2['all_cards_arr']['push'](_0x3d5c07);
    }
    if (tag_duel) {
        player3['resetDeck'](),
        player4['resetDeck']();
        for (_0xf055ce = 0x0; _0xf055ce < _0x3e4642['player3']['main_total']; _0xf055ce++) {
            _0x3d5c07 = newDuelCard(player3),
            _0x3d5c07['data']('id', _0x3e4642['player3']['start'] + _0xf055ce),
            player3['main_arr']['push'](_0x3d5c07),
            player3['all_cards_arr']['push'](_0x3d5c07);
        }
        for (_0xf055ce = 0x0; _0xf055ce < _0x3e4642['player3']['extra_total']; _0xf055ce++) {
            _0x3d5c07 = newDuelCard(player3),
            _0x3d5c07['data']('id', _0x3e4642['player3']['start'] + _0xf055ce + _0x3e4642['player3']['main_total']),
            _0x3d5c07['data']('face_down', !![]),
            player3['extra_arr']['push'](_0x3d5c07),
            player3['all_cards_arr']['push'](_0x3d5c07);
        }
        for (_0xf055ce = 0x0; _0xf055ce < _0x3e4642['player4']['main_total']; _0xf055ce++) {
            _0x3d5c07 = newDuelCard(player4),
            _0x3d5c07['data']('id', _0x3e4642['player4']['start'] + _0xf055ce),
            player1['username'] == username && !automatic && _0x3d5c07['addClass']('target'),
            player4['main_arr']['push'](_0x3d5c07),
            player4['all_cards_arr']['push'](_0x3d5c07);
        }
        for (_0xf055ce = 0x0; _0xf055ce < _0x3e4642['player4']['extra_total']; _0xf055ce++) {
            _0x3d5c07 = newDuelCard(player4),
            _0x3d5c07['data']('id', _0x3e4642['player4']['start'] + _0xf055ce + _0x3e4642['player4']['main_total']),
            _0x3d5c07['data']('face_down', !![]),
            player1['username'] == username && !automatic && _0x3d5c07['addClass']('target'),
            player4['extra_arr']['push'](_0x3d5c07),
            player4['all_cards_arr']['push'](_0x3d5c07);
        }
    }
    console['timeEnd']('initDecks');
}
function removeDeck(_0x45ed1b) {
    for (var _0x180766 = 0x0; _0x180766 < _0x45ed1b['main_arr']['length']; _0x180766++) {
        _0x45ed1b['main_arr'][_0x180766]['detach']();
    }
}
function removeExtra(_0x11dc2c) {
    for (var _0xee1bab = 0x0; _0xee1bab < _0x11dc2c['extra_arr']['length']; _0xee1bab++) {
        _0x11dc2c['extra_arr'][_0xee1bab]['detach']();
    }
}
function removeHand(_0x1c7a89) {
    for (var _0x3a2048 = 0x0; _0x3a2048 < _0x1c7a89['hand_arr']['length']; _0x3a2048++) {
        _0x1c7a89['hand_arr'][_0x3a2048]['detach']();
    }
}
function shiftDeck(_0x37b88a) {
    try {
        if (currentLabel == 'rps_start')
            return;
        switch (viewing) {
        case 'Opponent\x27s\x20Deck\x20(partial)':
        case 'Opponent\x27s\x20Deck\x20(Top\x201\x20Cards)':
        case 'Opponent\x27s\x20Deck\x20(Top\x203\x20Cards)':
        case 'Opponent\x27s\x20Deck\x20(Top\x205\x20Cards)':
            return;
        case 'Deck':
        case 'Opponent\x27s\x20Deck':
            viewingE(viewing);
            return;
        }
        var _0x8cd1af = 0x0
          , _0x2d794d = 0x0;
        for (var _0x17f8c7 = _0x37b88a['main_arr']['length'] - 0x1; _0x17f8c7 > -0x1; _0x17f8c7--) {
            var _0x4b7d73 = 0xb4 + ABOUT_ZERO;
            (_0x37b88a['main_arr'][_0x17f8c7]['data']('face_up') || _0x37b88a['deck_face_up']) && (_0x37b88a['main_arr'][_0x17f8c7]['data']('cardfront')['data']('initialized') && (_0x4b7d73 = ABOUT_ZERO)),
            _0x37b88a['main_arr'][_0x17f8c7]['css']('left', _0x37b88a['deckX'] + _0x8cd1af),
            _0x37b88a['main_arr'][_0x17f8c7]['css']('top', _0x37b88a['deckY'] + _0x2d794d),
            TweenMax['to'](_0x37b88a['main_arr'][_0x17f8c7], 0x0, {
                'scale': 0.1485,
                'rotation': _0x37b88a['rot'],
                'rotationY': _0x4b7d73,
                'z': _0x37b88a['main_arr']['length'] - _0x17f8c7,
                'alpha': 0x1
            }),
            _0x8cd1af += _0x37b88a['mX'],
            _0x2d794d += _0x37b88a['mY'],
            $('#field')['append'](_0x37b88a['main_arr'][_0x17f8c7]),
            !_0x37b88a['main_arr'][_0x17f8c7]['data']('face_up') && _0x37b88a['main_arr'][_0x17f8c7]['onRotate']();
        }
        $('#cid1_txt')['text'](Player1()['main_arr']['length']),
        $('#cid2_txt')['text'](Player2()['main_arr']['length']);
    } catch (_0x4af376) {
        Send({
            'action': 'Error\x20report',
            'line': '1948',
            'message': _0x4af376['message']
        });
    }
}
function shiftGrave(_0x3cc6e3) {
    if (viewing['indexOf']('Graveyard') >= 0x0) {
        viewingE(viewing);
        return;
    }
    var _0x1e2305 = 0x0
      , _0x2ad2b6 = 0x0;
    for (var _0x3a59db = _0x3cc6e3['grave_arr']['length'] - 0x1; _0x3a59db > -0x1; _0x3a59db--) {
        TweenMax['to'](_0x3cc6e3['grave_arr'][_0x3a59db], 0x0, {
            'rotationY': ABOUT_ZERO
        }),
        _0x3cc6e3['grave_arr'][_0x3a59db]['css']('left', _0x3cc6e3['graveX'] + _0x1e2305),
        _0x3cc6e3['grave_arr'][_0x3a59db]['css']('top', _0x3cc6e3['graveY'] + _0x2ad2b6),
        TweenMax['to'](_0x3cc6e3['grave_arr'][_0x3a59db], 0x0, {
            'scale': 0.1485,
            'rotation': _0x3cc6e3['rot'],
            'alpha': 0x1,
            'z': _0x3cc6e3['grave_arr']['length'] - _0x3a59db
        }),
        _0x1e2305 += _0x3cc6e3['gX'],
        _0x2ad2b6 += _0x3cc6e3['gY'],
        $('#field')['append'](_0x3cc6e3['grave_arr'][_0x3a59db]);
        if (_0x3a59db == 0x0) {}
    }
    $('#cig1_txt')['text'](Player1()['grave_arr']['length']),
    $('#cig2_txt')['text'](Player2()['grave_arr']['length']);
}
function shiftBanished(_0x54c5d9) {
    if (viewing == 'Banished' || viewing == 'Opponent\x27s\x20Banished') {
        viewingE(viewing);
        return;
    }
    var _0x1a7225 = 0x0;
    for (var _0x25d7e0 = _0x54c5d9['banished_arr']['length'] - 0x1; _0x25d7e0 > -0x1; _0x25d7e0--) {
        !_0x54c5d9['banished_arr'][_0x25d7e0]['data']('face_down') ? TweenMax['to'](_0x54c5d9['banished_arr'][_0x25d7e0], 0x0, {
            'rotationY': ABOUT_ZERO
        }) : TweenMax['to'](_0x54c5d9['banished_arr'][_0x25d7e0], 0x0, {
            'rotationY': 0xb4 + ABOUT_ZERO
        }),
        _0x54c5d9['banished_arr'][_0x25d7e0]['css']('left', _0x54c5d9['banishedX'] + _0x1a7225),
        _0x54c5d9['banished_arr'][_0x25d7e0]['css']('top', _0x54c5d9['banishedY']),
        TweenMax['to'](_0x54c5d9['banished_arr'][_0x25d7e0], 0x0, {
            'scale': 0.1485,
            'rotation': _0x54c5d9['rot'],
            'z': _0x54c5d9['banished_arr']['length'] - _0x25d7e0,
            'alpha': 0x1
        }),
        _0x1a7225 += _0x54c5d9['bX'],
        $('#field')['append'](_0x54c5d9['banished_arr'][_0x25d7e0]);
    }
    $('#cib1_txt')['text'](Player1()['banished_arr']['length']),
    $('#cib2_txt')['text'](Player2()['banished_arr']['length']);
}
function shiftExtra(_0x564f22) {
    if (currentLabel == 'rps_start' || currentLabel == 'siding')
        return;
    if (viewing == 'Extra\x20Deck' || viewing == 'Opponent\x27s\x20Extra\x20Deck' || viewing == 'Opponent\x27s\x20Public\x20Extra\x20Deck' || viewing == 'Host\x27s\x20Public\x20Extra\x20Deck') {
        viewingE(viewing);
        return;
    }
    var _0x72942c = 0x0
      , _0x1602ac = 0x0;
    for (var _0x39d1ce = _0x564f22['extra_arr']['length'] - 0x1; _0x39d1ce > -0x1; _0x39d1ce--) {
        !_0x564f22['extra_arr'][_0x39d1ce]['data']('face_down') ? (TweenMax['to'](_0x564f22['extra_arr'][_0x39d1ce], 0x0, {
            'rotationY': ABOUT_ZERO
        }),
        _0x564f22['extra_arr'][_0x39d1ce]['find']('.cardfront')['show']()) : (TweenMax['to'](_0x564f22['extra_arr'][_0x39d1ce], 0x0, {
            'rotationY': 0xb4 + ABOUT_ZERO
        }),
        _0x564f22['extra_arr'][_0x39d1ce]['find']('.cardback')['show'](),
        _0x564f22['extra_arr'][_0x39d1ce]['find']('.cardfront')['hide']()),
        _0x564f22['extra_arr'][_0x39d1ce]['css']('left', _0x564f22['extraX'] + _0x72942c),
        _0x564f22['extra_arr'][_0x39d1ce]['css']('top', _0x564f22['extraY'] + _0x1602ac),
        TweenMax['to'](_0x564f22['extra_arr'][_0x39d1ce], 0x0, {
            'scale': 0.1485,
            'rotation': _0x564f22['rot'],
            'z': _0x564f22['extra_arr']['length'] - _0x39d1ce
        }),
        _0x72942c += _0x564f22['eX'],
        _0x1602ac += _0x564f22['eY'],
        $('#field')['append'](_0x564f22['extra_arr'][_0x39d1ce]);
    }
    $('#cie1_txt')['text'](Player1()['extra_arr']['length']),
    $('#cie2_txt')['text'](Player2()['extra_arr']['length']);
}
function addDeckChildren(_0x10ffe5) {
    for (var _0x4a98f9 = _0x10ffe5['main_arr']['length'] - 0x1; _0x4a98f9 > -0x1; _0x4a98f9--) {
        $('#field')['append'](_0x10ffe5['main_arr'][_0x4a98f9]);
    }
}
function addExtraChildren(_0x319c88) {
    if (_0x319c88 == Player1() && viewing == 'Extra\x20Deck' || _0x319c88 != Player1() && viewing == 'Opponent\x27s\x20Extra\x20Deck')
        return;
    for (var _0xef4ab8 = _0x319c88['extra_arr']['length'] - 0x1; _0xef4ab8 > -0x1; _0xef4ab8--) {
        $('#field')['append'](_0x319c88['extra_arr'][_0xef4ab8]);
    }
}
function removeTopCardFromDeck(_0xee221c) {
    var _0x19cb75 = _0xee221c['main_arr']['splice'](0x0, 0x1)[0x0];
    return _0x19cb75['data']('face_up', ![]),
    $('#cid1_txt')['text'](Player1()['main_arr']['length']),
    $('#cid2_txt')['text'](Player2()['main_arr']['length']),
    updateViewing(),
    _0x19cb75;
}
function determineHandPosition(_0x45e4a5) {
    switch (_0x45e4a5['hand_arr']['length']) {
    case 0x1:
        handDestination = _0x45e4a5['hand_position_arr'][0x0];
        break;
    case 0x2:
        handDestination = _0x45e4a5['hand_position_arr'][0x1];
        break;
    case 0x3:
        handDestination = _0x45e4a5['hand_position_arr'][0x2];
        break;
    case 0x4:
        handDestination = _0x45e4a5['hand_position_arr'][0x3];
        break;
    case 0x5:
        handDestination = _0x45e4a5['hand_position_arr'][0x4];
        break;
    default:
        handDestination = _0x45e4a5['hand_position_arr'][0x5];
        break;
    }
}
function initHand(_0x527b7c, _0x22efd5) {
    for (var _0x5c24c3 = 0x0; _0x5c24c3 < _0x527b7c['hand_arr']['length']; _0x5c24c3++) {
        TweenMax['to'](_0x527b7c['hand_arr'][_0x5c24c3], 0x0, {
            'scale': 0.25,
            'rotation': _0x527b7c['rot'],
            'top': _0x527b7c['handY']
        }),
        _0x22efd5 && _0x527b7c['hand_arr'][_0x5c24c3]['removeSleeve']();
    }
    organizeHand(_0x527b7c, ![], !![]);
}
function organizeHand(_0x364c56, _0x3a452e, _0x3ed9fa) {
    _0x3a452e !== !![] && (_0x3a452e = ![]);
    _0x3ed9fa !== !![] && (_0x3ed9fa = ![]);
    if (currentLabel['indexOf']('duel_start') < 0x0)
        return;
    if (viewing == 'Opponent\x27s\x20Hand' && _0x364c56 == Player2())
        return;
    var _0x1c8dd2 = easeSeconds;
    if (_0x3a452e)
        _0x1c8dd2 = 0.25;
    else
        _0x3ed9fa && (_0x1c8dd2 = 0x0);
    if (_0x364c56 == Player1())
        switch (_0x364c56['hand_arr']['length']) {
        case 0x0:
            break;
        case 0x1:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x1e5,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        case 0x2:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x1b3,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x1], _0x1c8dd2, {
                'left': 0x217,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        case 0x3:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x181,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x1], _0x1c8dd2, {
                'left': 0x1e5,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x2], _0x1c8dd2, {
                'left': 0x249,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        case 0x4:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x14f,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x1], _0x1c8dd2, {
                'left': 0x1b3,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x2], _0x1c8dd2, {
                'left': 0x217,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x3], _0x1c8dd2, {
                'left': 0x27b,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        case 0x5:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x11d,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x1], _0x1c8dd2, {
                'left': 0x181,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x2], _0x1c8dd2, {
                'left': 0x1e5,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x3], _0x1c8dd2, {
                'left': 0x249,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x4], _0x1c8dd2, {
                'left': 0x2ad,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        default:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x110,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            for (var _0x5a0c91 = 0x1; _0x5a0c91 < _0x364c56['hand_arr']['length']; _0x5a0c91++) {
                TweenMax['to'](_0x364c56['hand_arr'][_0x5a0c91], _0x1c8dd2, {
                    'left': 0x1b0 / (_0x364c56['hand_arr']['length'] - 0x1) * _0x5a0c91 + 0x110,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x3ed9fa
                });
            }
        }
    else
        switch (_0x364c56['hand_arr']['length']) {
        case 0x0:
            break;
        case 0x1:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x1e5,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        case 0x2:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x217,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x1], _0x1c8dd2, {
                'left': 0x1b3,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        case 0x3:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x249,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x1], _0x1c8dd2, {
                'left': 0x1e5,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x2], _0x1c8dd2, {
                'left': 0x181,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        case 0x4:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x27b,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x1], _0x1c8dd2, {
                'left': 0x217,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x2], _0x1c8dd2, {
                'left': 0x1b3,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x3], _0x1c8dd2, {
                'left': 0x14f,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        case 0x5:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x2ad,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x1], _0x1c8dd2, {
                'left': 0x249,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x2], _0x1c8dd2, {
                'left': 0x1e5,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x3], _0x1c8dd2, {
                'left': 0x181,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            }),
            TweenMax['to'](_0x364c56['hand_arr'][0x4], _0x1c8dd2, {
                'left': 0x11d,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            break;
        default:
            TweenMax['to'](_0x364c56['hand_arr'][0x0], _0x1c8dd2, {
                'left': 0x2c0,
                'ease': Linear['easeNone'],
                'immediateRender': _0x3ed9fa
            });
            for (var _0x5a0c91 = 0x1; _0x5a0c91 < _0x364c56['hand_arr']['length']; _0x5a0c91++) {
                TweenMax['to'](_0x364c56['hand_arr'][_0x5a0c91], _0x1c8dd2, {
                    'left': 0x2c0 - 0x1b0 / (_0x364c56['hand_arr']['length'] - 0x1) * _0x5a0c91,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x3ed9fa
                });
            }
        }
    for (var _0x5a0c91 = 0x0; _0x5a0c91 < _0x364c56['hand_arr']['length']; _0x5a0c91++) {
        $('#duel\x20.cards')['append'](_0x364c56['hand_arr'][_0x5a0c91]),
        TweenMax['to'](_0x364c56['hand_arr'][_0x5a0c91], 0x0, {
            'z': _0x5a0c91
        });
    }
}
function updateController(_0x401cdb, _0x495a56) {
    _0x495a56['data']('controller', _0x401cdb);
    if (automatic)
        return;
    if (duelist && _0x495a56['data']('controller') == Player1())
        _0x495a56['removeClass']('target');
    else
        (duelist || admin || adjudicator) && _0x495a56['addClass']('target');
}
function updateOwner(_0x2eba51, _0x20471d) {
    _0x20471d['data']('owner', _0x2eba51);
}
function gotoDueling() {
    $('#sp')['show']();
    if (rush)
        gotoDuel('duel_start4'),
        setupDuelField(),
        setupDuelFieldSpeed(),
        setupDuelFieldRush();
    else {
        if (speed)
            gotoDuel('duel_start3'),
            setupDuelField(),
            setupDuelFieldSpeed();
        else
            links ? (gotoDuel('duel_start2'),
            setupDuelFieldLinks()) : (gotoDuel('duel_start'),
            setupDuelField());
    }
    initUserDuelStart(),
    duelist ? initDuelistDuelStart() : initWatcherDuelStart(),
    (admin || adjudicator) && !duelist && initAdminDuelStart();
}
function getPlayer(_0x338f64) {
    if (_0x338f64 == player1['username'])
        return player1;
    if (_0x338f64 == player2['username'])
        return player2;
    if (tag_duel) {
        if (_0x338f64 == player3['username'])
            return player3;
        if (_0x338f64 == player4['username'])
            return player4;
    }
    return null;
}
function getController(_0xf96b4b, _0x25ec8b) {
    if (!_0xf96b4b)
        return _0x25ec8b;
    if (_0xf96b4b == player1['username'])
        return player1;
    else {
        if (_0xf96b4b == player2['username'])
            return player2;
    }
    if (tag_duel) {
        if (_0xf96b4b == player3['username'])
            return player3;
        if (_0xf96b4b == player4['username'])
            return player4;
    }
    return errorE('Card\x20controller\x20error'),
    null;
}
function getCurrentOwner(_0x4258d6, _0x3b03b1) {
    if (!_0x4258d6)
        return _0x3b03b1;
    if (_0x4258d6 == player1['username'])
        return Player1();
    else {
        if (_0x4258d6 == player2['username'])
            return Player2();
    }
    if (tag_duel) {
        if (_0x4258d6 == player3['username'])
            return Player1();
        if (_0x4258d6 == player4['username'])
            return Player2();
    }
    return null;
}
function performNextAction() {
    if (currentLabel['indexOf']('duel_start') < 0x0)
        return;
    if (stopQueue)
        return;
    actionsQueue['length'] > 0x0 && (stopQueue = !![],
    actionsQueue[0x0](),
    updateCounters());
}
function endAction() {
    if (resetting)
        return;
    updateCounters(),
    actionsQueue['length'] > 0x0 && actionsQueue['splice'](0x0, 0x1),
    stopQueue = ![],
    actionsQueue['length'] > 0x0 && performNextAction();
}
function editStats(_0x3b26a7, _0x460ad8) {
    var _0x42d856 = getFieldCard(_0x3b26a7, _0x460ad8);
    if (_0x42d856 == null) {
        _0x42d856 = getFieldCard(_0x3b26a7['opponent'], _0x460ad8);
        if (_0x42d856 == null)
            return;
    }
    var _0x2efdb9 = _0x42d856['data']('new_atk') ?? _0x42d856['data']('cardfront')['data']('atk')
      , _0xdcd24 = _0x42d856['data']('new_def') ?? _0x42d856['data']('cardfront')['data']('def')
      , _0x4080f7 = ~~_0x460ad8['atk'] - ~~_0x2efdb9
      , _0x6c176b = ~~_0x460ad8['def'] - ~~_0xdcd24
      , _0x27aaa5 = getStatsTextByCard(_0x42d856);
    if (_0x460ad8['atk'] != '?' || _0x460ad8['def'] != '?') {
        if (!_0x27aaa5['text']()['startsWith'](_0x460ad8['atk']) || _0x42d856['data']('cardfront')['data']('monster_color') != 'Link' && !_0x27aaa5['text']()['endsWith']('/' + _0x460ad8['def'])) {
            var _0x4238ed = TweenMax['to']({}, 0x1, {
                'ease': Expo['easeOut'],
                'onUpdate': function() {
                    _0x27aaa5['html'](getATKColor(_0x42d856, _0x460ad8['atk'] == '?' ? _0x460ad8['atk'] : ~~_0x2efdb9 + Math['floor'](_0x4238ed['progress']() * _0x4080f7), _0x460ad8['def'] == '?' ? _0x460ad8['def'] : ~~_0xdcd24 + Math['floor'](_0x4238ed['progress']() * _0x6c176b)));
                },
                'onComplete': function() {
                    _0x42d856['data']('new_atk', _0x460ad8['atk']),
                    _0x42d856['data']('new_def', _0x460ad8['def']),
                    endAction();
                }
            });
            playSound(LifePoints);
            return;
        }
    }
    _0x42d856['data']('new_atk', _0x460ad8['atk']),
    _0x42d856['data']('new_def', _0x460ad8['def']),
    endAction();
}
function getStatsTextByCard(_0x12f9db) {
    var _0x46ca83 = null;
    switch (_0x12f9db) {
    case player1['m1']:
        _0x46ca83 = hm1_txt;
        break;
    case player1['m2']:
        _0x46ca83 = hm2_txt;
        break;
    case player1['m3']:
        _0x46ca83 = hm3_txt;
        break;
    case player1['m4']:
        _0x46ca83 = hm4_txt;
        break;
    case player1['m5']:
        _0x46ca83 = hm5_txt;
        break;
    case player2['m1']:
        _0x46ca83 = om1_txt;
        break;
    case player2['m2']:
        _0x46ca83 = om2_txt;
        break;
    case player2['m3']:
        _0x46ca83 = om3_txt;
        break;
    case player2['m4']:
        _0x46ca83 = om4_txt;
        break;
    case player2['m5']:
        _0x46ca83 = om5_txt;
        break;
    case linkRight:
        _0x46ca83 = hl_txt;
        break;
    case linkLeft:
        _0x46ca83 = ol_txt;
        break;
    }
    return $(_0x46ca83);
}
function updateStats() {
    var _0x2dfb1c = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5']]
      , _0x75ea41 = [player1['m1_txt'], player1['m2_txt'], player1['m3_txt'], player1['m4_txt'], player1['m5_txt'], player2['m1_txt'], player2['m2_txt'], player2['m3_txt'], player2['m4_txt'], player2['m5_txt']];
    links && (_0x2dfb1c['push'](linkLeft),
    _0x2dfb1c['push'](linkRight),
    _0x75ea41['push']($('#ol_txt')),
    _0x75ea41['push']($('#hl_txt')));
    for (var _0x8eb783 = 0x0; _0x8eb783 < _0x2dfb1c['length']; _0x8eb783++) {
        _0x2dfb1c[_0x8eb783] && (_0x2dfb1c[_0x8eb783]['data']('cardfront')['data']('atk') && (_0x2dfb1c[_0x8eb783]['data']('face_down') && !show_cards && !duelist || duelist && _0x2dfb1c[_0x8eb783]['data']('face_down') && !isPlayer1(_0x2dfb1c[_0x8eb783]['data']('controller')['username']) || TweenMax['isTweening'](_0x2dfb1c[_0x8eb783]) ? _0x75ea41[_0x8eb783]['hide']() : (_0x75ea41[_0x8eb783]['html'](getATKColor(_0x2dfb1c[_0x8eb783], _0x2dfb1c[_0x8eb783]['data']('new_atk'), _0x2dfb1c[_0x8eb783]['data']('new_def'))),
        _0x75ea41[_0x8eb783]['show'](),
        (_0x75ea41[_0x8eb783][0x0] == $('#ol_txt')[0x0] || _0x75ea41[_0x8eb783][0x0] == $('#hl_txt')[0x0]) && (isPlayer1(_0x2dfb1c[_0x8eb783]['data']('controller')['username']) ? _0x75ea41[_0x8eb783]['css']('top', 0x139) : _0x75ea41[_0x8eb783]['css']('top', 0xf7)))));
    }
}
function getATKColor(_0x1f722d, _0x21c344, _0x21f8c1) {
    var _0x364edd = '';
    return !_0x21c344 || _0x21c344 == _0x1f722d['data']('cardfront')['data']('atk') ? _0x364edd += _0x1f722d['data']('cardfront')['data']('atk') : _0x364edd += '<font\x20color=\x22#' + (~~_0x21c344 > ~~_0x1f722d['data']('cardfront')['data']('atk') ? '33FFFF' : 'FF3300') + '\x22>' + _0x21c344 + '</font>',
    _0x1f722d['data']('cardfront')['data']('monster_color') != 'Link' && (!_0x21f8c1 || _0x21f8c1 == _0x1f722d['data']('cardfront')['data']('def') ? _0x364edd += '/' + _0x1f722d['data']('cardfront')['data']('def') : _0x364edd += '<font\x20color=\x22#' + (~~_0x21f8c1 > ~~_0x1f722d['data']('cardfront')['data']('def') ? '33FFFF' : 'FF3300') + '\x22>/' + _0x21f8c1 + '</font>'),
    _0x364edd;
}
function updateCounters() {
    var _0xb01ff5;
    if (rush)
        _0xb01ff5 = [player1['m1'], player1['m2'], player1['m3'], player1['s1'], player1['s2'], player1['s3'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['s1'], player2['s2'], player2['s3'], player2['fieldSpell']];
    else {
        if (speed)
            _0xb01ff5 = [player1['m1'], player1['m2'], player1['m3'], player1['s1'], player1['s2'], player1['s3'], player1['fieldSpell'], player1['skillCard'], player2['m1'], player2['m2'], player2['m3'], player2['s1'], player2['s2'], player2['s3'], player2['fieldSpell'], player2['skillCard']];
        else
            links ? _0xb01ff5 = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player1['s1'], player1['s2'], player1['s3'], player1['s4'], player1['s5'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], player2['s1'], player2['s2'], player2['s3'], player2['s4'], player2['s5'], player2['fieldSpell'], linkLeft, linkRight] : _0xb01ff5 = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player1['s1'], player1['s2'], player1['s3'], player1['s4'], player1['s5'], player1['pendulumLeft'], player1['pendulumRight'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], player2['s1'], player2['s2'], player2['s3'], player2['s4'], player2['s5'], player2['pendulumLeft'], player2['pendulumRight'], player2['fieldSpell']];
    }
    for (var _0x47dc80 = 0x0; _0x47dc80 < counters['length']; _0x47dc80++) {
        if (_0xb01ff5[_0x47dc80]) {
            if (~~_0xb01ff5[_0x47dc80]['data']('counters') > 0x0 && !TweenMax['isTweening'](_0xb01ff5[_0x47dc80])) {
                counters[_0x47dc80]['show'](),
                counters[_0x47dc80]['find']('.total_txt')['text'](_0xb01ff5[_0x47dc80]['data']('counters'));
                if (linkLeft && _0xb01ff5[_0x47dc80][0x0] == linkLeft[0x0])
                    _0xb01ff5[_0x47dc80]['data']('controller') == player1 || _0xb01ff5[_0x47dc80]['data']('controller') == player3 ? (counters[_0x47dc80]['css']('left', 440.45),
                    counters[_0x47dc80]['css']('top', 315.5)) : (counters[_0x47dc80]['css']('left', 414.8),
                    counters[_0x47dc80]['css']('top', 272.9));
                else
                    linkRight && _0xb01ff5[_0x47dc80][0x0] == linkRight[0x0] && (_0xb01ff5[_0x47dc80]['data']('controller') == player1 || _0xb01ff5[_0x47dc80]['data']('controller') == player3 ? (counters[_0x47dc80]['css']('left', 626.45),
                    counters[_0x47dc80]['css']('top', 315.5)) : (counters[_0x47dc80]['css']('left', 600.8),
                    counters[_0x47dc80]['css']('top', 272.9)));
            } else
                counters[_0x47dc80]['hide']();
        } else
            counters[_0x47dc80]['hide']();
    }
    updateStats();
}
function playCircles() {
    TweenMax['to'](player1['circles']['find']('.circle1'), 0x0, {
        'display': 'block'
    }),
    TweenMax['to'](player1['circles']['find']('.circle2'), 0x0, {
        'display': 'block',
        'delay': 0.5
    }),
    TweenMax['to'](player1['circles']['find']('.circle3'), 0x0, {
        'display': 'block',
        'delay': 0x1
    }),
    TweenMax['to'](player1['circles']['find']('.circle1,\x20.circle2,\x20.circle3'), 0x0, {
        'display': 'none',
        'delay': 1.5,
        'onComplete': function() {
            playCircles();
        }
    });
}
function playCircles() {
    TweenMax['to'](player1['circles']['find']('.circle1'), 0x0, {
        'display': 'block'
    }),
    TweenMax['to'](player1['circles']['find']('.circle2'), 0x0, {
        'display': 'block',
        'delay': 0.5
    }),
    TweenMax['to'](player1['circles']['find']('.circle3'), 0x0, {
        'display': 'block',
        'delay': 0x1
    }),
    TweenMax['to'](player1['circles']['find']('.circle1,\x20.circle2,\x20.circle3'), 0x0, {
        'display': 'none',
        'delay': 1.5
    }),
    TweenMax['to'](player1['circles']['find']('.circle1'), 0x0, {
        'delay': 0x2,
        'onComplete': function() {
            playCircles();
        }
    });
}
function Player() {
    var _0x53a0f1 = {};
    return _0x53a0f1['stopTyping'] = function() {
        _0x53a0f1['typing_timer']['reset'](),
        _0x53a0f1['bubbles']['hide'](),
        _0x53a0f1['bubbles']['data']('cycle')['stop'](),
        _0x53a0f1['stopThinking']();
    }
    ,
    _0x53a0f1['typingE'] = function() {
        _0x53a0f1['typing_timer']['start'](),
        _0x53a0f1['bubbles']['show'](),
        _0x53a0f1['bubbles']['data']('cycle')['play']();
    }
    ,
    _0x53a0f1['stopThinking'] = function() {
        TweenMax['to'](_0x53a0f1['thinking'], 0.3, {
            'scale': 0.7,
            'alpha': 0x0,
            'ease': Expo['easeIn'],
            'onComplete': function() {
                _0x53a0f1['thinking']['hide']();
            }
        });
    }
    ,
    _0x53a0f1['username'] = '',
    _0x53a0f1['main_arr'] = [],
    _0x53a0f1['grave_arr'] = [],
    _0x53a0f1['extra_arr'] = [],
    _0x53a0f1['hand_arr'] = [],
    _0x53a0f1['banished_arr'] = [],
    _0x53a0f1['field_arr'] = [],
    _0x53a0f1['all_cards_arr'] = [],
    _0x53a0f1['temp_arr'] = [],
    _0x53a0f1['handY'] = 0x0,
    _0x53a0f1['deckX'] = 0x0,
    _0x53a0f1['deckY'] = 0x0,
    _0x53a0f1['graveX'] = 0x0,
    _0x53a0f1['graveY'] = 0x0,
    _0x53a0f1['banishedX'] = 0x0,
    _0x53a0f1['banishedY'] = 0x0,
    _0x53a0f1['extraX'] = 0x0,
    _0x53a0f1['extraY'] = 0x0,
    _0x53a0f1['fieldSpellX'] = 0x0,
    _0x53a0f1['fieldSpellY'] = 0x0,
    _0x53a0f1['pendulumLeftX'] = 0x0,
    _0x53a0f1['pendulumRightX'] = 0x0,
    _0x53a0f1['pendulumY'] = 0x0,
    _0x53a0f1['monsterY'] = 0x0,
    _0x53a0f1['spellY'] = 0x0,
    _0x53a0f1['mX'] = 0x0,
    _0x53a0f1['mY'] = 0x0,
    _0x53a0f1['gX'] = 0x0,
    _0x53a0f1['gY'] = 0x0,
    _0x53a0f1['bX'] = 0x0,
    _0x53a0f1['eX'] = 0x0,
    _0x53a0f1['eY'] = 0x0,
    _0x53a0f1['rot'] = 0x0,
    _0x53a0f1['rotY'] = 0x0,
    _0x53a0f1['defRot'] = 0x0,
    _0x53a0f1['hand_position_arr'] = [],
    _0x53a0f1['m1X'] = 0x0,
    _0x53a0f1['m2X'] = 0x0,
    _0x53a0f1['m3X'] = 0x0,
    _0x53a0f1['m4X'] = 0x0,
    _0x53a0f1['m5X'] = 0x0,
    _0x53a0f1['s1X'] = 0x0,
    _0x53a0f1['s2X'] = 0x0,
    _0x53a0f1['s3X'] = 0x0,
    _0x53a0f1['s4X'] = 0x0,
    _0x53a0f1['s5X'] = 0x0,
    _0x53a0f1['m1Y'] = 0x0,
    _0x53a0f1['m2Y'] = 0x0,
    _0x53a0f1['m3Y'] = 0x0,
    _0x53a0f1['m4Y'] = 0x0,
    _0x53a0f1['m5Y'] = 0x0,
    _0x53a0f1['s1Y'] = 0x0,
    _0x53a0f1['s2Y'] = 0x0,
    _0x53a0f1['s3Y'] = 0x0,
    _0x53a0f1['s4Y'] = 0x0,
    _0x53a0f1['s5Y'] = 0x0,
    _0x53a0f1['m1xStart'] = 0x0,
    _0x53a0f1['m1xEnd'] = 0x0,
    _0x53a0f1['m2xStart'] = 0x0,
    _0x53a0f1['m2xEnd'] = 0x0,
    _0x53a0f1['m3xStart'] = 0x0,
    _0x53a0f1['m3xEnd'] = 0x0,
    _0x53a0f1['m4xStart'] = 0x0,
    _0x53a0f1['m4xEnd'] = 0x0,
    _0x53a0f1['m5xStart'] = 0x0,
    _0x53a0f1['m5xEnd'] = 0x0,
    _0x53a0f1['m1'],
    _0x53a0f1['m2'],
    _0x53a0f1['m3'],
    _0x53a0f1['m4'],
    _0x53a0f1['m5'],
    _0x53a0f1['s1'],
    _0x53a0f1['s2'],
    _0x53a0f1['s3'],
    _0x53a0f1['s4'],
    _0x53a0f1['s5'],
    _0x53a0f1['fieldSpell'],
    _0x53a0f1['pendulumLeft'],
    _0x53a0f1['pendulumRight'],
    _0x53a0f1['opponent'],
    _0x53a0f1['lifepoints'] = 0x1f40,
    _0x53a0f1['m1_txt'],
    _0x53a0f1['m2_txt'],
    _0x53a0f1['m3_txt'],
    _0x53a0f1['m4_txt'],
    _0x53a0f1['m5_txt'],
    _0x53a0f1['deck_face_up'] = ![],
    _0x53a0f1['rating_rep_txt'],
    _0x53a0f1['pronoun'] = 'his',
    _0x53a0f1['token'] = 0x1,
    _0x53a0f1['linkCard'],
    _0x53a0f1['leftLinkX'] = 0x0,
    _0x53a0f1['leftLinkY'] = 0x0,
    _0x53a0f1['rightLinkX'] = 0x0,
    _0x53a0f1['rightLinkY'] = 0x0,
    _0x53a0f1['skillCardX'] = 0x0,
    _0x53a0f1['skillCardY'] = 0x0,
    _0x53a0f1['link_txt'],
    _0x53a0f1['typing_timer'] = new Timer(0x1388),
    _0x53a0f1['typing_timer']['callback'] = _0x53a0f1['stopTyping'],
    _0x53a0f1['bubbles'],
    _0x53a0f1['countdown'],
    _0x53a0f1['all_good'],
    _0x53a0f1['skillCard'],
    _0x53a0f1['skill'] = '',
    _0x53a0f1['partner'],
    _0x53a0f1['sleeve'],
    _0x53a0f1['seconds'],
    _0x53a0f1['start'],
    _0x53a0f1['still_good'],
    _0x53a0f1['initPlayer1'] = function() {
        _0x53a0f1['handY'] = 0x25b,
        _0x53a0f1['deckX'] = 0x321,
        _0x53a0f1['deckY'] = 531.5,
        _0x53a0f1['graveX'] = 0x321,
        _0x53a0f1['graveY'] = 338.5,
        _0x53a0f1['banishedX'] = 0x2de,
        _0x53a0f1['banishedY'] = 291.5,
        _0x53a0f1['extraX'] = 0xef,
        _0x53a0f1['extraY'] = 531.5,
        _0x53a0f1['fieldSpellX'] = 0xef,
        _0x53a0f1['fieldSpellY'] = 338.5,
        _0x53a0f1['pendulumLeftX'] = 0xfe,
        _0x53a0f1['pendulumRightX'] = 0x311,
        _0x53a0f1['pendulumY'] = 431.5,
        _0x53a0f1['monsterY'] = 384.5,
        _0x53a0f1['spellY'] = 476.5,
        _0x53a0f1['mX'] = 0.2925,
        _0x53a0f1['mY'] = 0.1025,
        _0x53a0f1['eX'] = -0.2925,
        _0x53a0f1['eY'] = 0.1025,
        _0x53a0f1['bX'] = 0.283,
        _0x53a0f1['gX'] = 0.283,
        _0x53a0f1['gY'] = 0.067,
        _0x53a0f1['rot'] = 0x0,
        _0x53a0f1['rotY'] = 0x0,
        _0x53a0f1['defRot'] = -0x5a,
        _0x53a0f1['hand_position_arr'] = [0x1e5, 0x217, 0x249, 0x27b, 0x2ad, 0x2c0],
        _0x53a0f1['m1X'] = 332.7,
        _0x53a0f1['m2X'] = 426.3,
        _0x53a0f1['m3X'] = 519.9,
        _0x53a0f1['m4X'] = 0x265,
        _0x53a0f1['m5X'] = 0x2c1,
        _0x53a0f1['s1X'] = 332.7,
        _0x53a0f1['s2X'] = 426.3,
        _0x53a0f1['s3X'] = 519.9,
        _0x53a0f1['s4X'] = 0x265,
        _0x53a0f1['s5X'] = 0x2c1,
        _0x53a0f1['m1Y'] = 384.5,
        _0x53a0f1['m2Y'] = 384.5,
        _0x53a0f1['m3Y'] = 384.5,
        _0x53a0f1['m4Y'] = 384.5,
        _0x53a0f1['m5Y'] = 384.5,
        _0x53a0f1['s1Y'] = 477.5,
        _0x53a0f1['s2Y'] = 477.5,
        _0x53a0f1['s3Y'] = 477.5,
        _0x53a0f1['s4Y'] = 477.5,
        _0x53a0f1['s5Y'] = 477.5,
        _0x53a0f1['m1xStart'] = 0x140,
        _0x53a0f1['m1xEnd'] = 0x15b,
        _0x53a0f1['m2xStart'] = 0x19d,
        _0x53a0f1['m2xEnd'] = 0x1b8,
        _0x53a0f1['m3xStart'] = 0x1fa,
        _0x53a0f1['m3xEnd'] = 0x215,
        _0x53a0f1['m4xStart'] = 0x257,
        _0x53a0f1['m4xEnd'] = 0x272,
        _0x53a0f1['m5xStart'] = 0x2b4,
        _0x53a0f1['m5xEnd'] = 0x2cf;
    }
    ,
    _0x53a0f1['initPlayer2'] = function() {
        _0x53a0f1['handY'] = -0x15,
        _0x53a0f1['deckX'] = 0xef,
        _0x53a0f1['deckY'] = 52.5,
        _0x53a0f1['graveX'] = 0xef,
        _0x53a0f1['graveY'] = 244.5,
        _0x53a0f1['banishedX'] = 0x132,
        _0x53a0f1['banishedY'] = 291.5,
        _0x53a0f1['extraX'] = 0x321,
        _0x53a0f1['extraY'] = 52.5,
        _0x53a0f1['fieldSpellX'] = 0x321,
        _0x53a0f1['fieldSpellY'] = 244.5,
        _0x53a0f1['pendulumLeftX'] = 0x311,
        _0x53a0f1['pendulumRightX'] = 0xfe,
        _0x53a0f1['pendulumY'] = 151.5,
        _0x53a0f1['monsterY'] = 198.5,
        _0x53a0f1['spellY'] = 105.5,
        _0x53a0f1['mX'] = -0.2925,
        _0x53a0f1['mY'] = -0.1025,
        _0x53a0f1['eX'] = 0.2925,
        _0x53a0f1['eY'] = -0.1025,
        _0x53a0f1['bX'] = -0.283,
        _0x53a0f1['gX'] = -0.283,
        _0x53a0f1['gY'] = -0.067,
        _0x53a0f1['rot'] = 0xb4,
        _0x53a0f1['rotY'] = 0xb4,
        _0x53a0f1['defRot'] = 0x5a,
        _0x53a0f1['hand_position_arr'] = [0x1e5, 0x1b3, 0x181, 0x14f, 0x11d, 0x11d],
        _0x53a0f1['m1X'] = 0x2c1,
        _0x53a0f1['m2X'] = 0x265,
        _0x53a0f1['m3X'] = 519.9,
        _0x53a0f1['m4X'] = 426.3,
        _0x53a0f1['m5X'] = 332.7,
        _0x53a0f1['s1X'] = 0x2c1,
        _0x53a0f1['s2X'] = 0x265,
        _0x53a0f1['s3X'] = 519.9,
        _0x53a0f1['s4X'] = 426.3,
        _0x53a0f1['s5X'] = 332.7,
        _0x53a0f1['m1Y'] = 199.5,
        _0x53a0f1['m2Y'] = 199.5,
        _0x53a0f1['m3Y'] = 199.5,
        _0x53a0f1['m4Y'] = 199.5,
        _0x53a0f1['m5Y'] = 199.5,
        _0x53a0f1['s1Y'] = 105.5,
        _0x53a0f1['s2Y'] = 105.5,
        _0x53a0f1['s3Y'] = 105.5,
        _0x53a0f1['s4Y'] = 105.5,
        _0x53a0f1['s5Y'] = 105.5,
        _0x53a0f1['m1xStart'] = 0x2cf,
        _0x53a0f1['m1xEnd'] = 0x2b4,
        _0x53a0f1['m2xStart'] = 0x272,
        _0x53a0f1['m2xEnd'] = 0x257,
        _0x53a0f1['m3xStart'] = 0x215,
        _0x53a0f1['m3xEnd'] = 0x1fa,
        _0x53a0f1['m4xStart'] = 0x1b8,
        _0x53a0f1['m4xEnd'] = 0x19d,
        _0x53a0f1['m5xStart'] = 0x15b,
        _0x53a0f1['m5xEnd'] = 0x140;
    }
    ,
    _0x53a0f1['initPlayer1Links'] = function() {
        _0x53a0f1['deckY'] = 0x1fc,
        _0x53a0f1['graveX'] = 0x311,
        _0x53a0f1['graveY'] = 384.5,
        _0x53a0f1['banishedX'] = 0x321,
        _0x53a0f1['extraY'] = 0x1fc,
        _0x53a0f1['fieldSpellX'] = 0xfe,
        _0x53a0f1['fieldSpellY'] = 384.5,
        _0x53a0f1['pendulumLeft'] = _0x53a0f1['s1'],
        _0x53a0f1['pendulumRight'] = _0x53a0f1['s5'],
        _0x53a0f1['s1'] = _0x53a0f1['pendulumLeft'],
        _0x53a0f1['s5'] = _0x53a0f1['pendulumRight'],
        _0x53a0f1['pendulumLeftX'] = 332.7,
        _0x53a0f1['pendulumRightX'] = 0x2c1,
        _0x53a0f1['pendulumY'] = 477.5;
    }
    ,
    _0x53a0f1['initPlayer2Links'] = function() {
        _0x53a0f1['deckY'] = 0x49,
        _0x53a0f1['graveX'] = 253.5,
        _0x53a0f1['graveY'] = 199.5,
        _0x53a0f1['banishedX'] = 0xef,
        _0x53a0f1['extraY'] = 0x49,
        _0x53a0f1['fieldSpellX'] = 0x311,
        _0x53a0f1['fieldSpellY'] = 199.5,
        _0x53a0f1['pendulumLeft'] = _0x53a0f1['s1'],
        _0x53a0f1['pendulumRight'] = _0x53a0f1['s5'],
        _0x53a0f1['s1'] = _0x53a0f1['pendulumLeft'],
        _0x53a0f1['s5'] = _0x53a0f1['pendulumRight'],
        _0x53a0f1['pendulumLeftX'] = 0x2c1,
        _0x53a0f1['pendulumRightX'] = 332.7,
        _0x53a0f1['pendulumY'] = 105.5;
    }
    ,
    _0x53a0f1['initPlayer1Speed'] = function() {
        _0x53a0f1['m1X'] = 0x172,
        _0x53a0f1['m2X'] = 0x208,
        _0x53a0f1['m3X'] = 0x29e,
        _0x53a0f1['s1X'] = 0x172,
        _0x53a0f1['s2X'] = 0x208,
        _0x53a0f1['s3X'] = 0x29e,
        _0x53a0f1['m1xStart'] = 0x165,
        _0x53a0f1['m1xEnd'] = 0x180,
        _0x53a0f1['m2xStart'] = 0x1fb,
        _0x53a0f1['m2xEnd'] = 0x216,
        _0x53a0f1['m3xStart'] = 0x291,
        _0x53a0f1['m3xEnd'] = 0x2ac,
        _0x53a0f1['deckX'] = 0x321,
        _0x53a0f1['deckY'] = 0x1fc,
        _0x53a0f1['extraX'] = 0xef,
        _0x53a0f1['extraY'] = 0x1fc,
        _0x53a0f1['graveX'] = 0x321,
        _0x53a0f1['graveY'] = 384.5,
        _0x53a0f1['fieldSpellX'] = 0xef,
        _0x53a0f1['fieldSpellY'] = 384.5,
        _0x53a0f1['skillCardX'] = 0x2de,
        _0x53a0f1['skillCardY'] = 291.5,
        _0x53a0f1['banishedX'] = 0x321,
        _0x53a0f1['banishedY'] = 291.5;
    }
    ,
    _0x53a0f1['initPlayer2Speed'] = function() {
        _0x53a0f1['m1X'] = 0x29e,
        _0x53a0f1['m2X'] = 0x208,
        _0x53a0f1['m3X'] = 0x172,
        _0x53a0f1['s1X'] = 0x29e,
        _0x53a0f1['s2X'] = 0x208,
        _0x53a0f1['s3X'] = 0x172,
        _0x53a0f1['m1xStart'] = 0x2ab,
        _0x53a0f1['m1xEnd'] = 0x290,
        _0x53a0f1['m2xStart'] = 0x215,
        _0x53a0f1['m2xEnd'] = 0x1fa,
        _0x53a0f1['m3xStart'] = 0x180,
        _0x53a0f1['m3xEnd'] = 0x165,
        _0x53a0f1['deckX'] = 0xef,
        _0x53a0f1['deckY'] = 0x49,
        _0x53a0f1['extraX'] = 0x321,
        _0x53a0f1['extraY'] = 0x49,
        _0x53a0f1['graveX'] = 0xef,
        _0x53a0f1['graveY'] = 199.5,
        _0x53a0f1['fieldSpellX'] = 0x321,
        _0x53a0f1['fieldSpellY'] = 199.5,
        _0x53a0f1['skillCardX'] = 0x132,
        _0x53a0f1['skillCardY'] = 291.5,
        _0x53a0f1['banishedX'] = 0xef,
        _0x53a0f1['banishedY'] = 291.5;
    }
    ,
    _0x53a0f1['resetDeck'] = function() {
        _0x53a0f1['main_arr'] = [],
        _0x53a0f1['grave_arr'] = [],
        _0x53a0f1['banished_arr'] = [],
        _0x53a0f1['extra_arr'] = [],
        _0x53a0f1['hand_arr'] = [],
        _0x53a0f1['main_arr'] = [],
        _0x53a0f1['all_cards_arr'] = [],
        _0x53a0f1['m1'] = null,
        _0x53a0f1['m2'] = null,
        _0x53a0f1['m3'] = null,
        _0x53a0f1['m4'] = null,
        _0x53a0f1['m5'] = null,
        _0x53a0f1['s1'] = null,
        _0x53a0f1['s2'] = null,
        _0x53a0f1['s3'] = null,
        _0x53a0f1['s4'] = null,
        _0x53a0f1['s5'] = null,
        _0x53a0f1['fieldSpell'] = null,
        _0x53a0f1['pendulumLeft'] = null,
        _0x53a0f1['pendulumRight'] = null,
        _0x53a0f1['skillCard'] = null,
        _0x53a0f1['lifepoints'] = 0x1f40,
        _0x53a0f1['deck_face_up'] = ![],
        _0x53a0f1['still_good'] = ![];
    }
    ,
    _0x53a0f1;
}
function initUserDuelStart() {
    console['log']('initUserDuelStart'),
    viewing = '',
    currentPhase = '',
    $('#field')['show'](),
    $('#field_content')['show'](),
    $('#numbers')['insertBefore']($('#red_stream')),
    $('#coin')['hide'](),
    $('#die')['hide'](),
    $('#red_stream')['hide'](),
    $('#blue_stream')['hide'](),
    red_stream['stop'](),
    blue_stream['stop'](),
    $('#counters\x20.counter')['hide'](),
    resetLifepoints(),
    actionsQueue = [],
    awaiting_defeat = ![],
    awaiting_start_turn = ![],
    awaiting_token = ![],
    hideSelectZones(),
    $('.red_target')['hide'](),
    $('.blue_target')['hide'](),
    $('.green_target')['hide'](),
    $('#sword')['hide'](),
    $('#overlay')['hide'](),
    $('#view')['hide'](),
    $('#end_turn')['hide'](),
    $('#cig2_txt')['hide'](),
    $('#cib2_txt')['hide'](),
    $('#cig1_txt')['hide'](),
    $('#cib1_txt')['hide'](),
    player1['m1_txt'] = $('#hm1_txt'),
    player1['m2_txt'] = $('#hm2_txt'),
    player1['m3_txt'] = $('#hm3_txt'),
    player2['m1_txt'] = $('#om1_txt'),
    player2['m2_txt'] = $('#om2_txt'),
    player2['m3_txt'] = $('#om3_txt'),
    !speed && !rush && (player1['m4_txt'] = $('#hm4_txt'),
    player1['m5_txt'] = $('#hm5_txt'),
    player2['m4_txt'] = $('#om4_txt'),
    player2['m5_txt'] = $('#om5_txt')),
    links && (player1['link_txt'] = $('#hl_txt'),
    player2['link_txt'] = $('#ol_txt'),
    linkLeft = null,
    linkRight = null),
    $('#start_turn')['hide'](),
    $('#duel\x20#field_content')['css']('opacity', 0x0),
    changeDarks(),
    $('#field')['prepend']($('#field_content')),
    unknown_totals && ($('#cid1_txt')['hide'](),
    $('#cie1_txt')['hide'](),
    $('#cib1_txt')['hide'](),
    $('#cig1_txt')['hide'](),
    $('#cid2_txt')['hide'](),
    $('#cie2_txt')['hide'](),
    $('#cib2_txt')['hide'](),
    $('#cig2_txt')['hide']()),
    tag_duel && (setPartner(player3, player1),
    setPartner(player4, player2)),
    hidePhases(),
    $('#field_stats\x20>\x20span')['text'](''),
    $('#field_stats\x20>\x20span')['hide'](),
    $('#view')['css']('left', 0xdb),
    $('#view')['css']('top', 0x3a);
}
function initWatcherDuelStart() {
    console['log']('initWatcherDuelStart'),
    $('#good_btn')['hide'](),
    $('#shuffle_btn')['hide'](),
    $('#show_hand_btn')['hide'](),
    $('#auto_draw_cb')['hide'](),
    $('#auto_draw_lbl')['hide'](),
    $('#choose_zones')['hide'](),
    counter_btn['hide'](),
    $('#duel\x20.token_btn')['hide'](),
    $('#coin_btn')['hide'](),
    $('#die_btn')['hide'](),
    $('#lp_txt')['hide'](),
    $('#life_txt')['hide'](),
    $('#plus_btn')['hide'](),
    $('#minus_btn')['hide'](),
    $('#turn')['hide']();
}
function pauseGame(_0x10094c, _0x224124) {
    _0x10094c ? (_0x224124['viewing'] = 'Paused\x20Game',
    showViewing(_0x224124),
    addLine(escapeHTML(_0x224124['username']) + '\x20paused\x20the\x20game')) : addLine('A\x20judge\x20paused\x20the\x20game'),
    paused = !![],
    paused ? $('#pause_btn')['val']('Resume\x20Game') : $('#pause_btn')['val']('Pause\x20Game'),
    username == _0x224124['username'] && duelist && (viewing = 'Paused\x20Game'),
    playSound(PartnerFound);
}
function resumeGame(_0x2e8b38) {
    addLine('The\x20game\x20can\x20now\x20resume'),
    paused = ![],
    $('#pause_btn')['val']('Pause\x20Game'),
    viewing == 'Paused\x20Game' && (viewing = ''),
    _0x2e8b38 && stopViewing(_0x2e8b38),
    playSound(PartnerFound);
}
function resetGame(_0x33b121, _0x3c9334) {
    if (resetting)
        return;
    resetting = !![];
    var _0x502e9f = 0x0
      , _0x50aa55 = 0x0;
    _0x2f0b3f: for (var _0x1f0e93 = 0x0; _0x1f0e93 < _0x33b121['all_cards_arr']['length']; _0x1f0e93++) {
        for (var _0x1a7fe8 = 0x0; _0x1a7fe8 < _0x33b121['extra_arr']['length']; _0x1a7fe8++) {
            if (_0x33b121['extra_arr'][_0x1a7fe8]['data']('id') == _0x33b121['all_cards_arr'][_0x1f0e93]['data']('id')) {
                if (!_0x33b121['extra_arr'][_0x1a7fe8]['data']('cardfront')['data']('initialized') || isExtraDeckCard(_0x33b121['extra_arr'][_0x1a7fe8])) {
                    _0x33b121['all_cards_arr'][_0x1f0e93]['data']('face_down', !![]),
                    _0x33b121['all_cards_arr'][_0x1f0e93]['data']('face_up', ![]);
                    continue _0x2f0b3f;
                }
            }
        }
        for (_0x1a7fe8 = 0x0; _0x1a7fe8 < _0x33b121['main_arr']['length']; _0x1a7fe8++) {
            if (_0x33b121['main_arr'][_0x1a7fe8]['data']('id') == _0x33b121['all_cards_arr'][_0x1f0e93]['data']('id')) {
                _0x33b121['all_cards_arr'][_0x1f0e93]['data']('face_down', ![]),
                _0x33b121['all_cards_arr'][_0x1f0e93]['data']('face_up', ![]);
                continue _0x2f0b3f;
            }
        }
        var _0x517d65 = removeCard(_0x33b121, {
            'id': _0x33b121['all_cards_arr'][_0x1f0e93]['data']('id')
        });
        if (!_0x517d65) {
            _0x517d65 = removeCard(_0x33b121['opponent'], {
                'id': _0x33b121['all_cards_arr'][_0x1f0e93]['data']('id')
            });
            if (!_0x517d65) {
                console['log']('problem\x20finding\x20' + _0x33b121['all_cards_arr'][_0x1f0e93]['data']('id'));
                continue;
            }
            updateController(_0x33b121, _0x517d65);
        }
        if (_0x517d65['data']('cardfront')['data']('monster_color') == 'Token' || _0x517d65['data']('cardfront')['data']('card_type') == 'Skill') {
            _0x33b121['all_cards_arr']['splice'](_0x1f0e93, 0x1),
            _0x517d65['remove'](),
            _0x517d65 = null,
            _0x1f0e93--;
            continue;
        }
        var _0x2a52f0 = _0x517d65['data']('owner')['deckX']
          , _0x2b85ec = _0x517d65['data']('owner')['deckY'];
        isExtraDeckCard(_0x517d65) ? (_0x517d65['data']('face_down', !![]),
        _0x2a52f0 = _0x517d65['data']('owner')['extraX'],
        _0x2b85ec = _0x517d65['data']('owner')['extraY'],
        _0x33b121['extra_arr']['push'](_0x517d65)) : _0x33b121['main_arr']['push'](_0x517d65),
        _0x502e9f++,
        $('#field')['append'](_0x517d65),
        TweenMax['killTweensOf'](_0x517d65),
        TweenMax['to'](_0x517d65, easeSeconds, {
            'left': _0x2a52f0,
            'top': _0x2b85ec,
            'scale': 0.1485,
            'rotation': _0x517d65['data']('owner')['rot'],
            'rotationY': 0xb4 + ABOUT_ZERO,
            'delay': _0x502e9f * 0.25,
            'ease': Linear['easeNone'],
            'onComplete': function() {
                _0x50aa55++,
                _0x502e9f == _0x50aa55 && (resetting = ![],
                shiftExtra(_0x33b121),
                shuffleDeck(_0x33b121, _0x3c9334));
            }
        });
    }
}
function initSleeves() {
    loadSleeves(player1),
    loadSleeves(player2),
    tag_duel && (loadSleeves(player3),
    loadSleeves(player4));
}
function initPlayers(_0xe757b9) {
    console['log']('initPlayers'),
    $('#avatar1\x20.rating_txt')['text'](_0xe757b9['player1']['rating'] + '/' + _0xe757b9['player1']['experience']),
    $('#avatar1\x20.image')['attr']('src', getAvatarStart(_0xe757b9['player1']['pic'])),
    $('#avatar2\x20.rating_txt')['text'](_0xe757b9['player2']['rating'] + '/' + _0xe757b9['player2']['experience']),
    _0xe757b9['player2']['pic'] ? $('#avatar2\x20.image')['attr']('src', getAvatarStart(_0xe757b9['player2']['pic'])) : $('#avatar2\x20.image')['attr']('src', IMAGES_START + 'black.jpg'),
    duelist && (selectedToken = _0xe757b9['player1']['token']),
    player1['token'] = _0xe757b9['player1']['token'],
    player1['token'] == 0x0 && (player1['token'] = 0x1),
    player2['token'] = _0xe757b9['player2']['token'],
    player2['token'] == 0x0 && (player2['token'] = 0x1),
    player1['sleeve'] = _0xe757b9['player1']['sleeve'],
    player2['sleeve'] = _0xe757b9['player2']['sleeve'],
    tag_duel ? ($('#avatar3\x20.rating_txt')['text'](_0xe757b9['player3']['rating'] + '/' + _0xe757b9['player3']['experience']),
    $('#avatar3\x20.image')['attr']('src', getAvatarStart(_0xe757b9['player3']['pic'])),
    $('#avatar4\x20.rating_txt')['text'](_0xe757b9['player4']['rating'] + '/' + _0xe757b9['player4']['experience']),
    $('#avatar4\x20.image')['attr']('src', getAvatarStart(_0xe757b9['player4']['pic'])),
    expandAvatar($('#avatar1\x20.username_txt'), _0xe757b9['player1']['username'], _0xe757b9['player3']['username']),
    expandAvatar($('#avatar2\x20.username_txt'), _0xe757b9['player2']['username'], _0xe757b9['player4']['username']),
    expandAvatar($('#avatar3\x20.username_txt'), _0xe757b9['player3']['username'], _0xe757b9['player1']['username']),
    expandAvatar($('#avatar4\x20.username_txt'), _0xe757b9['player4']['username'], _0xe757b9['player2']['username']),
    player3['token'] = _0xe757b9['player3']['token'],
    player3['token'] == 0x0 && (player3['token'] = 0x1),
    player4['token'] = _0xe757b9['player4']['token'],
    player4['token'] == 0x0 && (player4['token'] = 0x1),
    player3['sleeve'] = _0xe757b9['player3']['sleeve'],
    player4['sleeve'] = _0xe757b9['player4']['sleeve'],
    !always_show_nsfw && (_0xe757b9['player3']['nsfw'] && ($('#avatar3\x20.nsfw')['css']('opacity', 0x1),
    $('#avatar3\x20.nsfw')['show'](),
    $('#avatar3\x20.nsfw_btn')['show']()),
    _0xe757b9['player4']['nsfw'] && ($('#avatar4\x20.nsfw')['css']('opacity', 0x1),
    $('#avatar4\x20.nsfw')['show'](),
    $('#avatar4\x20.nsfw_btn')['show']()))) : (expandAvatar($('#avatar1\x20.username_txt'), _0xe757b9['player1']['username']),
    expandAvatar($('#avatar2\x20.username_txt'), _0xe757b9['player2']['username'])),
    !always_show_nsfw && (_0xe757b9['player1']['nsfw'] && ($('#avatar1\x20.nsfw')['css']('opacity', 0x1),
    $('#avatar1\x20.nsfw')['show'](),
    $('#avatar1\x20.nsfw_btn')['show']()),
    _0xe757b9['player2']['nsfw'] && ($('#avatar2\x20.nsfw')['css']('opacity', 0x1),
    $('#avatar2\x20.nsfw')['show'](),
    $('#avatar2\x20.nsfw_btn')['show']())),
    stillGood(Player1(), !![]),
    stillGood(Player2(), !![]),
    streaming && ($('#avatar1\x20.username_txt')['text'](censor($('#avatar1\x20.username_txt')['text']())),
    $('#avatar2\x20.username_txt')['text'](censor($('#avatar2\x20.username_txt')['text']())),
    $('#avatar3\x20.username_txt')['text'](censor($('#avatar3\x20.username_txt')['text']())),
    $('#avatar4\x20.username_txt')['text'](censor($('#avatar4\x20.username_txt')['text']())));
}
function expandAvatar(_0x3d38a3, _0x55b6b6, _0xf6445d) {
    var _0x8c4e1b = _0x3d38a3['parent']()[0x0]['style']['display'];
    _0x3d38a3['text'](_0x55b6b6),
    _0x3d38a3['css']('left', _0xf6445d ? 0x3 : 0x7),
    _0x3d38a3['css']('width', 0x8e);
    if (_0xf6445d) {
        _0x3d38a3['html'](escapeHTML(_0x55b6b6) + '<br><font\x20style=\x22font-size:\x2012px;\x22>&\x20' + escapeHTML(_0xf6445d) + '</font>'),
        _0x3d38a3['css']('white-space', 'nowrap'),
        _0x3d38a3['parent']()['show'](),
        _0x3d38a3['css']('width', _0x3d38a3[0x0]['scrollWidth']),
        _0x3d38a3['css']('transform', 'scaleX(1)');
        _0x3d38a3[0x0]['scrollWidth'] > 0x8e && (_0x3d38a3['css']('transform', 'scaleX(' + 0x8e / _0x3d38a3[0x0]['scrollWidth'] + ')'),
        _0x3d38a3['css']('transform-origin', 'top\x20left'));
        _0x3d38a3['parent']()[0x0]['style']['display'] = _0x8c4e1b,
        _0x57838a();
        return;
    }
    setText(_0x3d38a3),
    _0x57838a();
    function _0x57838a() {
        TweenMax['to'](_0x3d38a3, 0x0, {
            'scaleX': getScale(_0x3d38a3[0x0]),
            'rotation': -0x5a
        });
    }
}
function shiftPlayersE(_0xea7b64) {
    if (!tag_duel)
        return;
    turnCount < 0x2 && (_0xea7b64 = ![]),
    _0xea7b64 ? moveDecks(turn_player['partner'], turn_player) : (removeDeck(turn_player['partner']),
    removeExtra(turn_player['partner']),
    removeHand(turn_player['partner']),
    shiftDeck(turn_player),
    shiftExtra(turn_player),
    initHand(turn_player),
    shiftPlayer(turn_player));
}
function shiftPlayer(_0xc463de) {
    console['log']('shiftPlayer'),
    console['log']('turn_player\x20=\x20' + turn_player['username']),
    console['log']('turn_player.opponent\x20=\x20' + turn_player['opponent']['username']);
    switch (_0xc463de) {
    case player1:
        ~~$('#avatar1\x20.nsfw')['css']('opacity') == 0x1 ? ($('#avatar1\x20.nsfw_btn')['show'](),
        $('#avatar1\x20.nsfw')['show']()) : ($('#avatar1\x20.nsfw_btn')['hide'](),
        $('#avatar1\x20.nsfw')['hide']());
        $('#avatar1')['show'](),
        $('#avatar3')['hide']();
        break;
    case player2:
        ~~$('#avatar2\x20.nsfw')['css']('opacity') == 0x1 ? ($('#avatar2\x20.nsfw_btn')['show'](),
        $('#avatar2\x20.nsfw')['show']()) : ($('#avatar2\x20.nsfw_btn')['hide'](),
        $('#avatar2\x20.nsfw')['hide']());
        $('#avatar2')['show'](),
        $('#avatar4')['hide']();
        break;
    case player3:
        ~~$('#avatar3\x20.nsfw')['css']('opacity') == 0x1 ? ($('#avatar3\x20.nsfw_btn')['show'](),
        $('#avatar3\x20.nsfw')['show']()) : ($('#avatar3\x20.nsfw_btn')['hide'](),
        $('#avatar3\x20.nsfw')['hide']());
        $('#avatar3')['show'](),
        $('#avatar1')['hide']();
        break;
    case player4:
        ~~$('#avatar4\x20.nsfw')['css']('opacity') == 0x1 ? ($('#avatar4\x20.nsfw_btn')['show'](),
        $('#avatar4\x20.nsfw')['show']()) : ($('#avatar4\x20.nsfw_btn')['hide'](),
        $('#avatar4\x20.nsfw')['hide']());
        $('#avatar4')['show'](),
        $('#avatar2')['hide']();
        break;
    }
}
function getGameLossSound() {
    console['log']('getGameLossSound');
    var _0x46f36e = Math['ceil'](Math['random']() * 0xe);
    return gameLossSound = new Audio('sounds/lose' + _0x46f36e + '.mp3'),
    gameLossSound;
}
function getGameWinSound() {
    console['log']('getGameWinSound');
    var _0x42cd5e = Math['ceil'](Math['random']() * 0xe);
    return gameWinSound = new Audio('sounds/win' + _0x42cd5e + '.mp3'),
    gameWinSound;
}
function recycleCards() {
    for (var _0x296770 = 0x0; _0x296770 < player1['all_cards_arr']['length']; _0x296770++) {
        addRecycledCard(player1['all_cards_arr'][_0x296770]);
    }
    for (_0x296770 = 0x0; _0x296770 < player2['all_cards_arr']['length']; _0x296770++) {
        addRecycledCard(player2['all_cards_arr'][_0x296770]);
    }
}
function duelCardDownE(_0x25a775) {
    $('html')['contextmenu'](function() {
        return ![];
    });
    if ($(this)['parents']('#duelmessage:first')['length'] > 0x0)
        return;
    removeCardMenu(),
    showMenu($(this), [{
        'label': 'Why\x20don\x27t\x20I\x20have\x20more\x20options?',
        'data': 'Trace\x20menu'
    }]),
    setTimeout(function() {
        $('html')['off']('contextmenu');
    }, 0x5);
}
function newDuelCard(_0x4ee6ca) {
    var _0x2e8c20 = getRecycledCard();
    return !_0x2e8c20 && (_0x2e8c20 = new Card()),
    automatic && _0x2e8c20['contextmenu'](duelCardDownE),
    _0x2e8c20['off']('mouseenter\x20click'),
    _0x2e8c20['on']('mouseenter\x20click', previewE),
    duelist && _0x2e8c20['find']('.content:first')['mouseover'](cardMenuE),
    _0x2e8c20['find']('.content:first')['mouseleave'](menuOutE),
    _0x2e8c20['find']('.cardfront')['hide'](),
    (admin || adjudicator) && (!automatic && _0x2e8c20['addClass']('target')),
    _0x2e8c20['click'](targetCard),
    _0x2e8c20['data']('controller', _0x4ee6ca),
    _0x2e8c20['data']('owner', _0x4ee6ca),
    TweenMax['to'](_0x2e8c20, 0x0, {
        'rotationY': 0xb4 + ABOUT_ZERO,
        'scale': 0.1485
    }),
    _0x2e8c20;
}
function getRecycledCard() {
    if (recycled_cards_arr['length'] > 0x0) {
        var _0x31173a = recycled_cards_arr['splice'](0x0, 0x1)[0x0];
        return _0x31173a['data']('cardfront') && (_0x31173a['data']('cardfront')['reset'](),
        _0x31173a['data']('cardfront')[0x0]['style']['display'] = 'none'),
        _0x31173a['reset'](),
        console['log']('recycled\x20card'),
        _0x31173a;
    }
    return null;
}
function addRecycledCard(_0x56c4bd) {
    _0x56c4bd['removeClass']('xyzmaterial'),
    _0x56c4bd['removeSleeve'](),
    _0x56c4bd['find']('.content:first')['off']('mouseover', cardMenuE),
    _0x56c4bd['find']('.content:first')['off']('mouseleave', menuOutE),
    _0x56c4bd['off']('click', targetCard),
    _0x56c4bd['find']('.cardfront')['hide'](),
    _0x56c4bd['find']('.skillback')['remove'](),
    _0x56c4bd['find']('.sleeve')['remove'](),
    _0x56c4bd['detach']();
    if (recycled_cards_arr['indexOf'](_0x56c4bd) >= 0x0)
        return;
    recycled_cards_arr['push'](_0x56c4bd);
}
function showRating(_0x2d93da) {
    var _0x5a7ba6 = $(this);
    _0x5a7ba6[0x0] == $('#pause_btn,\x20#next_game_btn')[0x0] && ($('#avatar1\x20.rating')['is'](':visible') ? _0x5a7ba6 = $('#avatar1\x20.rating') : _0x5a7ba6 = $('#avatar2\x20.rating'));
    if (_0x5a7ba6[0x0] == $('#avatar2\x20.rating')[0x0] && solo)
        return;
    _0x5a7ba6['find']('.rating_txt')['show'](),
    TweenMax['to'](_0x5a7ba6['find']('.rating_txt'), 0.25, {
        'alpha': 0x1
    }),
    $('#pause_btn,\x20#next_game_btn')['length'] > 0x0 && ((replay || admin || adjudicator || duelist && (!viewing && !paused || viewing == 'Paused\x20Game') && currentLabel['indexOf']('duel_start') == 0x0) && ($('#pause_btn,\x20#next_game_btn')['show'](),
    TweenMax['to']($('#pause_btn,\x20#next_game_btn')['data']('proxy'), 0.25, {
        'alpha': 0x1
    })));
}
function hideRating() {
    var _0x4f540c = $(this);
    _0x4f540c[0x0] == $('#pause_btn,\x20#next_game_btn')[0x0] && ($('#avatar1\x20.rating')['is'](':visible') ? _0x4f540c = $('#avatar1\x20.rating') : _0x4f540c = $('#avatar2\x20.rating')),
    TweenMax['to'](_0x4f540c['find']('.rating_txt'), 0.25, {
        'alpha': 0x0,
        'onComplete': function() {
            _0x4f540c['find']('.rating_txt')['hide']();
        }
    }),
    $('#pause_btn,\x20#next_game_btn')['length'] > 0x0 && !admin && !adjudicator && TweenMax['to']($('#pause_btn,\x20#next_game_btn')['data']('proxy'), 0.25, {
        'alpha': 0x0,
        'onComplete': function() {
            $('#pause_btn,\x20#next_game_btn')['hide']();
        }
    });
}
function resetLifepoints() {
    player1['lifepoints'] = lifepointMax,
    player2['lifepoints'] = lifepointMax,
    tag_duel && (player3['lifepoints'] = lifepointMax,
    player4['lifepoints'] = lifepointMax),
    $('.lifepoints\x20.black_bar')['css']('width', 0x0),
    $('.lifepoints\x20.life_txt')['text'](lifepointMax);
}
function duelChatPrint(_0x174cab) {
    saveDuelVSP();
    var _0x230949 = '#0000FF';
    _0x174cab['color'] && (_0x230949 = '#' + _0x174cab['color']);
    (player1['username'] == _0x174cab['username'] || player3 && player3['username'] == _0x174cab['username']) && (_0x230949 == '#0000FF' && (_0x230949 = '#FF0000'));
    !_0x174cab['html'] && (_0x174cab['message'] = escapeHTMLWithLinks(_0x174cab['message']));
    if (conceal) {
        switch (_0x174cab['username']) {
        case player1['username']:
            _0x174cab['username'] = 'Red';
            break;
        case player2['username']:
            _0x174cab['username'] = 'Blue';
            break;
        case player3['username']:
        case player4['username']:
            _0x174cab['username'] = 'Partner';
            break;
        }
        switch (_0x174cab['color']) {
        case '009900':
        case '707070':
        case 'CC9900':
        case '660099':
            _0x174cab['username'] = 'Admin';
            break;
        }
    } else
        streaming && (_0x174cab['username'] = censor(_0x174cab['username']),
        _0x174cab['message'] = censor(_0x174cab['message']));
    $('#duel\x20.cout_txt')['append']('<b><font\x20color=\x22' + _0x230949 + '\x22>' + escapeHTML(_0x174cab['username']) + ':\x20</font></b><font>' + _0x174cab['message'] + '</font><br>'),
    restoreDuelVSP();
}
function addLine(_0x37edcb) {
    if (conceal)
        return;
    saveDuelVSP(),
    $('#duel\x20.cout_txt')['append']('<b>' + escapeHTML(_0x37edcb) + '</b><br>'),
    restoreDuelVSP();
}
function saveDuelVSP(_0x4ed5d4) {
    duel_vsp = $('#duel\x20.cout_txt')['scrollTop']();
    var _0x342d9a = $('#duel\x20.cout_txt')['scrollMax']();
    duel_vsp >= _0x342d9a - 0x50 && (duel_vsp += 0x270f);
}
function restoreDuelVSP() {
    if (duel_vsp >= $('#duel\x20.cout_txt')['scrollMax']()) {
        var _0x3c2fd2 = duel_vsp + 0x270f;
        setTimeout(function() {
            $('#duel\x20.cout_txt')['scrollTop'](_0x3c2fd2);
        }, 0x32);
    }
    $('#duel\x20.cout_txt')['scrollTop'](duel_vsp);
}
function graveOver() {
    player1['grave_arr']['length'] > 0x0 ? (previewCard(player1['grave_arr'][0x0]),
    $('#grave_hidden')['css']('cursor', 'pointer')) : $('#grave_hidden')['css']('cursor', 'auto');
}
function banishedOver() {
    if (player1['banished_arr']['length'] > 0x0) {
        if (player1['banished_arr'][0x0]['data']('face_down') && findCard(['Pot\x20of\x20Extravagance']))
            return;
        previewCard(player1['banished_arr'][0x0]),
        $('#banished_hidden')['css']('cursor', 'pointer');
    } else
        $('#banished_hidden')['css']('cursor', 'auto');
}
function oppGraveOver() {
    player2['grave_arr']['length'] > 0x0 ? (previewCard(player2['grave_arr'][0x0]),
    $('#opp_grave_hidden')['css']('cursor', 'pointer')) : $('#opp_grave_hidden')['css']('cursor', 'auto');
}
function oppBanishedOver() {
    player2['banished_arr']['length'] > 0x0 ? (previewCard(player2['banished_arr'][0x0]),
    $('#opp_banished_hidden')['css']('cursor', 'pointer')) : $('#opp_banished_hidden')['css']('cursor', 'auto');
}
function extraOver() {
    Player1()['extra_arr']['length'] > 0x0 ? (!Player1()['extra_arr'][0x0]['data']('face_down') && Player1()['extra_arr'][0x0]['data']('cardfront')['data']('pendulum') && previewCard(Player1()['extra_arr'][0x0]),
    !Duelist() ? $('#extra_hidden')['css']('cursor', 'pointer') : $('#extra_hidden')['css']('cursor', 'auto')) : $('#extra_hidden')['css']('cursor', 'auto');
}
function oppExtraOver() {
    Player2()['extra_arr']['length'] > 0x0 ? (!Player2()['extra_arr'][0x0]['data']('face_down') && previewCard(Player2()['extra_arr'][0x0]),
    $('#opp_extra_hidden')['css']('cursor', 'pointer')) : $('#opp_extra_hidden')['css']('cursor', 'auto');
}
function deckOver() {
    if (Player1()['main_arr']['length'] < 0x1)
        return;
    if (TweenMax['isTweening'](Player1()['main_arr'][0x0]))
        return;
    (Player1()['deck_face_up'] || Player1()['main_arr'][0x0]['data']('face_up')) && previewFront(Player1()['main_arr'][0x0]['data']('cardfront'));
}
function oppDeckOver() {
    if (Player2()['main_arr']['length'] < 0x1)
        return;
    (Player2()['main_arr'][0x0]['data']('face_up') || Player2()['deck_face_up'] || duelist && player1['skill'] == 'Prescience' && findCard(['Prescience']) && player2['lifepoints'] > player1['lifepoints'] * 0x2) && previewFront(Player2()['main_arr'][0x0]['data']('cardfront'));
}
function addCounter(_0x4bb2ce, _0x514b67) {
    console['time']('addCounter');
    var _0x4414ee = getFieldCard(_0x4bb2ce, _0x514b67);
    _0x4414ee['data']('counters', _0x514b67['total']),
    updateCounters(),
    playSound(CounterSound),
    addLine(escapeHTML(_0x4bb2ce['username']) + '\x20placed\x20a\x20counter\x20on\x20\x22' + _0x4414ee['data']('cardfront')['data']('name') + '\x22\x20(now\x20' + _0x514b67['total'] + ')'),
    endAction(),
    console['timeEnd']('addCounter');
}
function removeCounter(_0x11de08, _0x152c8b) {
    var _0x256171 = getFieldCard(_0x11de08, _0x152c8b);
    _0x256171['data']('counters', _0x152c8b['total']),
    updateCounters(),
    addLine(escapeHTML(_0x11de08['username']) + '\x20removed\x20a\x20counter\x20from\x20\x22' + _0x256171['data']('cardfront')['data']('name') + '\x22\x20(now\x20' + _0x152c8b['total'] + ')'),
    endAction();
}
function viewED() {
    if (viewing != '')
        return;
    if (Duelist())
        return;
    Player1()['extra_arr']['length'] > 0x0 && viewingE('Host\x27s\x20Public\x20Extra\x20Deck');
}
function viewED2() {
    if (viewing != '')
        return;
    Player2()['extra_arr']['length'] > 0x0 && (Duelist() && Send({
        'action': 'Duel',
        'play': 'View\x20ED\x202'
    }),
    viewingE('Opponent\x27s\x20Public\x20Extra\x20Deck'));
}
function viewGY() {
    if (viewing != '')
        return;
    if (findCard(['Question']))
        return;
    player1['grave_arr']['length'] > 0x0 && (Duelist() && Send({
        'action': 'Duel',
        'play': 'View\x20GY'
    }),
    viewingE('Graveyard'));
}
function viewBanished() {
    if (viewing != '')
        return;
    player1['banished_arr']['length'] > 0x0 && (Duelist() && Send({
        'action': 'Duel',
        'play': 'View\x20Banished'
    }),
    viewingE('Banished')),
    endAction();
}
function viewGY2() {
    if (viewing != '')
        return;
    if (findCard(['Question']))
        return;
    player2['grave_arr']['length'] > 0x0 && (Duelist() && Send({
        'action': 'Duel',
        'play': 'View\x20GY\x202'
    }),
    viewingE('Opponent\x27s\x20Graveyard')),
    endAction();
}
function viewBanished2() {
    if (viewing != '')
        return;
    player2['banished_arr']['length'] > 0x0 && (Duelist() && Send({
        'action': 'Duel',
        'play': 'View\x20Banished\x202'
    }),
    viewingE('Opponent\x27s\x20Banished')),
    endAction();
}
function viewingE(_0x4b60f0, _0x8d7391) {
    if (!_0x4b60f0 || _0x4b60f0 == 'Paused\x20Game')
        return;
    var _0x30a8ba = [];
    switch (_0x4b60f0) {
    case 'Deck':
    case 'Deck\x20(Picking\x20Card)':
    case 'Deck\x20(Picking\x202\x20Cards)':
    case 'Deck\x20(Picking\x203\x20Cards)':
    case 'Deck\x20(Picking\x204\x20Cards)':
        _0x30a8ba = Player1()['main_arr'];
        break;
    case 'Graveyard':
        _0x30a8ba = player1['grave_arr'];
        break;
    case 'Banished':
        _0x30a8ba = player1['banished_arr'];
        break;
    case 'Extra\x20Deck':
        _0x30a8ba = Player1()['extra_arr'];
        break;
    case 'Host\x27s\x20Public\x20Extra\x20Deck':
        _0x30a8ba = Player1()['extra_arr'];
        break;
    case 'Opponent\x27s\x20Banished':
        _0x30a8ba = player1['opponent']['banished_arr'];
        break;
    case 'Opponent\x27s\x20Graveyard':
        _0x30a8ba = player1['opponent']['grave_arr'];
        break;
    case 'Opponent\x27s\x20Extra\x20Deck':
    case 'Opponent\x27s\x20Public\x20Extra\x20Deck':
        _0x30a8ba = Player1()['opponent']['extra_arr'];
        break;
    case 'Opponent\x27s\x20Hand':
        _0x30a8ba = Player1()['opponent']['hand_arr'];
        break;
    case 'Opponent\x27s\x20Deck':
        _0x30a8ba = Player1()['opponent']['main_arr'];
        break;
    case 'Opponent\x27s\x20Deck\x20(partial)':
    case 'Opponent\x27s\x20Deck\x20(Top\x203\x20Cards)':
        for (var _0xad4ad8 = 0x0; _0xad4ad8 < 0x3; _0xad4ad8++) {
            _0x30a8ba['push'](Player1()['opponent']['main_arr'][_0xad4ad8]);
        }
        break;
    case 'Opponent\x27s\x20Deck\x20(Top\x205\x20Cards)':
        for (_0xad4ad8 = 0x0; _0xad4ad8 < 0x5; _0xad4ad8++) {
            _0x30a8ba['push'](Player1()['opponent']['main_arr'][_0xad4ad8]);
        }
        break;
    case 'Opponent\x27s\x20Deck\x20(Top\x201\x20Cards)':
        for (_0xad4ad8 = 0x0; _0xad4ad8 < 0x1; _0xad4ad8++) {
            _0x30a8ba['push'](Player1()['opponent']['main_arr'][_0xad4ad8]);
        }
        break;
    case 'Xyz\x20Materials':
        _0x30a8ba = viewing_card_with_materials['data']('xyz_arr');
        break;
    }
    viewing = _0x4b60f0,
    $('#view\x20.title_txt')['text']('Viewing\x20' + _0x4b60f0),
    Duelist() && $('#status1\x20.status_txt')['text']('Viewing\x20' + _0x4b60f0),
    viewCards(_0x30a8ba, _0x8d7391);
}
function showViewing(_0x53eb25) {
    var _0x3632bd = 'Viewing\x20' + _0x53eb25['viewing'];
    _0x53eb25['viewing'] == 'Paused\x20Game' && (_0x3632bd = 'Paused\x20Game');
    if (duelist && _0x53eb25['username'] == Player1()['username'] || !duelist && _0x53eb25['username'] == Player1()['username'])
        $('#status1\x20.status_txt')['text'](_0x3632bd);
    else
        _0x53eb25['username'] == Player2()['username'] && $('#status2\x20.status_txt')['text'](_0x3632bd);
    _0x53eb25['deck'] && (_0x53eb25['deck'] = undefined);
}
function permissionEvent(_0x98962c) {
    duelist && _0x98962c['username'] != username && player1 == Player1() && getConfirmation(_0x98962c['title'], _0x98962c['message'], function() {
        permissionCallback(_0x98962c['callback']);
    }, permissionDeniedE);
    if (_0x98962c['username'] != Player1()['username'])
        $('#status1\x20.status_txt')['text']('Waiting\x20for\x20permission');
    else
        _0x98962c['username'] != Player2()['username'] && $('#status2\x20.status_txt')['text']('Waiting\x20for\x20permission');
}
function shiftDecks() {
    shiftDeck(Player1()),
    shiftDeck(Player2()),
    shiftGrave(Player1()),
    shiftGrave(Player2()),
    shiftBanished(Player1()),
    shiftBanished(Player2()),
    shiftExtra(Player1()),
    shiftExtra(Player2());
}
function moveDecks(_0x2ac325, _0xddc422) {
    var _0x2c0bde = 0xc8;
    (_0x2ac325 == player2 || _0x2ac325 == player4) && (_0x2c0bde = -0xc8),
    TweenMax['to'](_0x2ac325['main_arr'], 0.35, {
        'top': _0x2ac325['deckY'] + _0x2c0bde,
        'ease': Circ['easeInOut']
    }),
    TweenMax['to'](_0x2ac325['extra_arr'], 0.35, {
        'top': _0x2ac325['extraY'] + _0x2c0bde,
        'ease': Circ['easeInOut']
    }),
    TweenMax['to'](_0x2ac325['hand_arr'], 0.35, {
        'top': _0x2ac325['handY'] + _0x2c0bde,
        'ease': Circ['easeInOut'],
        'onComplete': function() {
            shiftPlayer(turn_player),
            removeDeck(_0x2ac325),
            removeExtra(_0x2ac325),
            removeHand(_0x2ac325),
            shiftDeck(_0xddc422),
            shiftExtra(_0xddc422),
            initHand(_0xddc422),
            TweenMax['fromTo'](_0xddc422['main_arr'], 0.35, {
                'top': _0xddc422['deckY'] + _0x2c0bde
            }, {
                'top': _0xddc422['deckY'],
                'ease': Circ['easeInOut']
            }),
            TweenMax['fromTo'](_0xddc422['extra_arr'], 0.35, {
                'top': _0xddc422['extraY'] + _0x2c0bde
            }, {
                'top': _0xddc422['extraY'],
                'ease': Circ['easeInOut']
            }),
            TweenMax['fromTo'](_0xddc422['hand_arr'], 0.35, {
                'top': _0xddc422['handY'] + _0x2c0bde
            }, {
                'top': _0xddc422['handY'],
                'ease': Circ['easeInOut'],
                'onComplete': function() {
                    shiftDecks(),
                    enterDP();
                }
            });
        }
    });
}
function removeCard(_0x1ba114, _0x3b2e94) {
    var _0x5150ec = removeFromHand(_0x1ba114, _0x3b2e94);
    return !_0x5150ec && (_0x5150ec = removeFromDeck(_0x1ba114, _0x3b2e94)),
    !_0x5150ec && (_0x5150ec = removeFromGY(_0x1ba114, _0x3b2e94)),
    !_0x5150ec && (_0x5150ec = removeFromBanished(_0x1ba114, _0x3b2e94)),
    !_0x5150ec && (_0x5150ec = removeFromExtra(_0x1ba114, _0x3b2e94)),
    !_0x5150ec && (_0x5150ec = removeFromField(_0x1ba114, _0x3b2e94)),
    !_0x5150ec && (_0x5150ec = removeXyzMaterial(_0x1ba114, _0x3b2e94, ![])),
    _0x5150ec;
}
function removeFromHand(_0x4c9634, _0x1b8f0e) {
    for (var _0x12c667 = 0x0; _0x12c667 < _0x4c9634['hand_arr']['length']; _0x12c667++) {
        if (_0x4c9634['hand_arr'][_0x12c667]['data']('id') == _0x1b8f0e['id']) {
            var _0x30dafa = _0x4c9634['hand_arr']['splice'](_0x12c667, 0x1)[0x0];
            return _0x30dafa['data']('face_up', ![]),
            _0x30dafa['detach'](),
            updateViewing(),
            organizeHand(_0x4c9634),
            _0x30dafa;
        }
    }
    return null;
}
function removeFromDeck(_0x2c8a8e, _0x37159c) {
    for (var _0x520649 = 0x0; _0x520649 < _0x2c8a8e['main_arr']['length']; _0x520649++) {
        if (_0x2c8a8e['main_arr'][_0x520649]['data']('id') == _0x37159c['id']) {
            var _0x3bdcf5 = _0x2c8a8e['main_arr']['splice'](_0x520649, 0x1)[0x0];
            return _0x3bdcf5['detach'](),
            _0x3bdcf5['data']('face_up', ![]),
            $('#cid1_txt')['text'](Player1()['main_arr']['length']),
            $('#cid2_txt')['text'](Player2()['main_arr']['length']),
            updateViewing(),
            _0x3bdcf5;
        }
    }
    return null;
}
function removeFromGY(_0x24e755, _0x3e4735) {
    for (var _0x10a693 = 0x0; _0x10a693 < _0x24e755['grave_arr']['length']; _0x10a693++) {
        if (_0x24e755['grave_arr'][_0x10a693]['data']('id') == _0x3e4735['id']) {
            var _0x5b0605 = _0x24e755['grave_arr']['splice'](_0x10a693, 0x1)[0x0];
            return _0x5b0605['detach'](),
            shiftGrave(_0x5b0605['data']('owner')),
            updateViewing(),
            _0x5b0605;
        }
    }
    return null;
}
function removeFromBanished(_0x261795, _0x5a3045, _0x15424a) {
    _0x15424a !== ![] && (_0x15424a = !![]);
    for (var _0x2f347d = 0x0; _0x2f347d < _0x261795['banished_arr']['length']; _0x2f347d++) {
        if (_0x261795['banished_arr'][_0x2f347d]['data']('id') == _0x5a3045['id']) {
            var _0x5aa743 = _0x261795['banished_arr']['splice'](_0x2f347d, 0x1)[0x0];
            return _0x5aa743['detach'](),
            _0x15424a && _0x5aa743['data']('face_down', ![]),
            shiftBanished(_0x5aa743['data']('owner')),
            updateViewing(),
            _0x5aa743;
        }
    }
    return null;
}
function removeFromExtra(_0x54bbca, _0xf70fe9) {
    for (var _0x270cac = 0x0; _0x270cac < _0x54bbca['extra_arr']['length']; _0x270cac++) {
        if (_0x54bbca['extra_arr'][_0x270cac]['data']('id') == _0xf70fe9['id']) {
            var _0x1c9fee = _0x54bbca['extra_arr']['splice'](_0x270cac, 0x1)[0x0];
            return _0x1c9fee['detach'](),
            _0x1c9fee['data']('cardfront')['show'](),
            addExtraChildren(_0x1c9fee['data']('owner')),
            $('#cie1_txt')['text'](Player1()['extra_arr']['length']),
            $('#cie2_txt')['text'](Player2()['extra_arr']['length']),
            updateViewing(),
            _0x1c9fee;
        }
    }
    if (unknown_totals)
        for (_0x270cac = 0x0; _0x270cac < _0x54bbca['extra_arr']['length']; _0x270cac++) {
            return _0x54bbca['extra_arr'][_0x270cac]['data']('id', _0x54bbca['extra_arr'][_0x270cac]['data']('id') - 0x1),
            removeFromExtra(_0x54bbca, _0xf70fe9);
        }
    return null;
}
function removeFromField(_0x4af68a, _0x509b73, _0x13d5b4) {
    _0x13d5b4 !== !![] && (_0x13d5b4 = ![]);
    var _0x1ef6a6;
    _0x4af68a['m3'] && (_0x4af68a['m3']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['m3'],
    _0x4af68a['m3'] = null,
    tag_duel && (_0x4af68a['partner']['m3'] = null),
    _0x4af68a['m3_txt']['text']('')));
    _0x4af68a['m4'] && (_0x4af68a['m4']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['m4'],
    _0x4af68a['m4'] = null,
    tag_duel && (_0x4af68a['partner']['m4'] = null),
    _0x4af68a['m4_txt']['text']('')));
    _0x4af68a['m2'] && (_0x4af68a['m2']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['m2'],
    _0x4af68a['m2'] = null,
    tag_duel && (_0x4af68a['partner']['m2'] = null),
    _0x4af68a['m2_txt']['text']('')));
    _0x4af68a['m5'] && (_0x4af68a['m5']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['m5'],
    _0x4af68a['m5'] = null,
    tag_duel && (_0x4af68a['partner']['m5'] = null),
    _0x4af68a['m5_txt']['text']('')));
    _0x4af68a['m1'] && (_0x4af68a['m1']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['m1'],
    _0x4af68a['m1'] = null,
    tag_duel && (_0x4af68a['partner']['m1'] = null),
    _0x4af68a['m1_txt']['text']('')));
    _0x4af68a['s3'] && (_0x4af68a['s3']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['s3'],
    _0x4af68a['s3'] = null,
    tag_duel && (_0x4af68a['partner']['s3'] = null)));
    _0x4af68a['s4'] && (_0x4af68a['s4']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['s4'],
    _0x4af68a['s4'] = null,
    tag_duel && (_0x4af68a['partner']['s4'] = null)));
    _0x4af68a['s2'] && (_0x4af68a['s2']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['s2'],
    _0x4af68a['s2'] = null,
    tag_duel && (_0x4af68a['partner']['s2'] = null)));
    _0x4af68a['s5'] && (_0x4af68a['s5']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['s5'],
    _0x4af68a['s5'] = null,
    tag_duel && (_0x4af68a['partner']['s5'] = null)));
    _0x4af68a['s1'] && (_0x4af68a['s1']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['s1'],
    _0x4af68a['s1'] = null,
    tag_duel && (_0x4af68a['partner']['s1'] = null)));
    _0x4af68a['fieldSpell'] && (_0x4af68a['fieldSpell']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['fieldSpell'],
    _0x4af68a['fieldSpell'] = null,
    tag_duel && (_0x4af68a['partner']['fieldSpell'] = null),
    removeFieldSpellPic(_0x4af68a)));
    _0x4af68a['pendulumLeft'] && (_0x4af68a['pendulumLeft']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['pendulumLeft'],
    _0x4af68a['pendulumLeft'] = null,
    tag_duel && (_0x4af68a['partner']['pendulumLeft'] = null)));
    _0x4af68a['pendulumRight'] && (_0x4af68a['pendulumRight']['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = _0x4af68a['pendulumRight'],
    _0x4af68a['pendulumRight'] = null,
    tag_duel && (_0x4af68a['partner']['pendulumRight'] = null)));
    linkLeft && (linkLeft['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = linkLeft,
    linkLeft = null,
    $('#ol_txt')['text']('')));
    linkRight && (linkRight['data']('id') == _0x509b73['id'] && (_0x1ef6a6 = linkRight,
    linkRight = null,
    $('#hl_txt')['text']('')));
    if (!_0x1ef6a6)
        return null;
    return _0x1ef6a6['data']('controller') != _0x1ef6a6['data']('owner') && (_0x1ef6a6['data']('controller', _0x1ef6a6['data']('owner')),
    _0x1ef6a6['removeClass']('target'),
    !isPlayer1(_0x1ef6a6['data']('owner')['username']) && _0x1ef6a6['addClass']('target')),
    _0x13d5b4 == ![] && (_0x1ef6a6['data']('inATK', ![]),
    _0x1ef6a6['data']('inDEF', ![]),
    _0x1ef6a6['data']('face_down', ![]),
    _0x1ef6a6['data']('counters', 0x0),
    _0x1ef6a6['data']('new_atk', null),
    _0x1ef6a6['data']('new_def', null),
    detachAllMaterials(_0x1ef6a6)),
    updateCounters(),
    updateViewing(),
    _0x1ef6a6['data']('cardfront')['data']('name') == 'Question' && unquestionE(_0x1ef6a6),
    _0x1ef6a6;
}
function restoreHandCards() {
    for (var _0x350250 = 0x0; _0x350250 < Player1()['hand_arr']['length']; _0x350250++) {
        !TweenMax['isTweening'](Player1()['hand_arr']) && (Player1()['hand_arr'][_0x350250]['data']('face_up') && duelist ? Player1()['hand_arr'][_0x350250]['css']('top', Player1()['handY'] - 0x1e) : Player1()['hand_arr'][_0x350250]['css']('top', Player1()['handY']));
    }
}
function getPointsByZone(_0x1a0ddc, _0x1ae44f) {
    switch (_0x1ae44f) {
    case 'M-1':
        return [_0x1a0ddc['m1X'], _0x1a0ddc['m1Y']];
    case 'M-2':
        return [_0x1a0ddc['m2X'], _0x1a0ddc['m2Y']];
    case 'M-3':
        return [_0x1a0ddc['m3X'], _0x1a0ddc['m3Y']];
    case 'M-4':
        return [_0x1a0ddc['m4X'], _0x1a0ddc['m4Y']];
    case 'M-5':
        return [_0x1a0ddc['m5X'], _0x1a0ddc['m5Y']];
    case 'M2-1':
        return [_0x1a0ddc['opponent']['m1X'], _0x1a0ddc['opponent']['m1Y']];
    case 'M2-2':
        return [_0x1a0ddc['opponent']['m2X'], _0x1a0ddc['opponent']['m2Y']];
    case 'M2-3':
        return [_0x1a0ddc['opponent']['m3X'], _0x1a0ddc['opponent']['m3Y']];
    case 'M2-4':
        return [_0x1a0ddc['opponent']['m4X'], _0x1a0ddc['opponent']['m4Y']];
    case 'M2-5':
        return [_0x1a0ddc['opponent']['m5X'], _0x1a0ddc['opponent']['m5Y']];
    case 'S-1':
        return [_0x1a0ddc['s1X'], _0x1a0ddc['s1Y']];
    case 'S-2':
        return [_0x1a0ddc['s2X'], _0x1a0ddc['s2Y']];
    case 'S-3':
        return [_0x1a0ddc['s3X'], _0x1a0ddc['s3Y']];
    case 'S-4':
        return [_0x1a0ddc['s4X'], _0x1a0ddc['s4Y']];
    case 'S-5':
        return [_0x1a0ddc['s5X'], _0x1a0ddc['s5Y']];
    case 'F-1':
        return [_0x1a0ddc['fieldSpellX'], _0x1a0ddc['fieldSpellY']];
    case 'F-2':
        return [_0x1a0ddc['opponent']['fieldSpellX'], _0x1a0ddc['opponent']['fieldSpellY']];
    case 'Left\x20Extra\x20Monster\x20Zone':
        return _0x1a0ddc == player1 || _0x1a0ddc == player3 ? [linkLeftX, linkY] : [linkRightX, linkY];
    case 'Right\x20Extra\x20Monster\x20Zone':
        return _0x1a0ddc == player1 || _0x1a0ddc == player3 ? [linkRightX, linkY] : [linkLeftX, linkY];
    }
    return null;
}
function getNextMonsterZone(_0x10ee64, _0x4e630f, _0x507f22) {
    var _0x5828b5 = [];
    if (_0x507f22['zone']) {
        switch (_0x507f22['zone']) {
        case 'M-1':
            _0x10ee64['m1'] = _0x4e630f;
            tag_duel && (_0x10ee64['partner']['m1'] = _0x4e630f);
            break;
        case 'M-2':
            _0x10ee64['m2'] = _0x4e630f;
            tag_duel && (_0x10ee64['partner']['m2'] = _0x4e630f);
            break;
        case 'M-3':
            _0x10ee64['m3'] = _0x4e630f;
            tag_duel && (_0x10ee64['partner']['m3'] = _0x4e630f);
            break;
        case 'M-4':
            _0x10ee64['m4'] = _0x4e630f;
            tag_duel && (_0x10ee64['partner']['m4'] = _0x4e630f);
            break;
        case 'M-5':
            _0x10ee64['m5'] = _0x4e630f;
            tag_duel && (_0x10ee64['partner']['m5'] = _0x4e630f);
            break;
        case 'M2-1':
            _0x10ee64['opponent']['m1'] = _0x4e630f;
            tag_duel && (_0x10ee64['opponent']['partner']['m1'] = _0x4e630f);
            break;
        case 'M2-2':
            _0x10ee64['opponent']['m2'] = _0x4e630f;
            tag_duel && (_0x10ee64['opponent']['partner']['m2'] = _0x4e630f);
            break;
        case 'M2-3':
            _0x10ee64['opponent']['m3'] = _0x4e630f;
            tag_duel && (_0x10ee64['opponent']['partner']['m3'] = _0x4e630f);
            break;
        case 'M2-4':
            _0x10ee64['opponent']['m4'] = _0x4e630f;
            tag_duel && (_0x10ee64['opponent']['partner']['m4'] = _0x4e630f);
            break;
        case 'M2-5':
            _0x10ee64['opponent']['m5'] = _0x4e630f;
            tag_duel && (_0x10ee64['opponent']['partner']['m5'] = _0x4e630f);
            break;
        case 'Left\x20Extra\x20Monster\x20Zone':
            _0x10ee64 == player1 || _0x10ee64 == player3 ? linkLeft = _0x4e630f : linkRight = _0x4e630f;
            break;
        case 'Right\x20Extra\x20Monster\x20Zone':
            _0x10ee64 == player1 || _0x10ee64 == player3 ? linkRight = _0x4e630f : linkLeft = _0x4e630f;
            break;
        }
        return _0x5828b5 = getPointsByZone(_0x10ee64, _0x507f22['zone']),
        _0x507f22['zone']['indexOf']('2-') >= 0x0 ? updateController(_0x10ee64['opponent'], _0x4e630f) : updateController(_0x10ee64, _0x4e630f),
        _0x5828b5;
    }
    if (duel_links || speed || rush) {
        if (_0x10ee64['m2'] == null)
            _0x10ee64['m2'] = _0x4e630f,
            tag_duel && (_0x10ee64['partner']['m2'] = _0x4e630f),
            _0x5828b5 = [_0x10ee64['m2X'], _0x10ee64['m2Y']];
        else {
            if (_0x10ee64['m3'] == null)
                _0x10ee64['m3'] = _0x4e630f,
                tag_duel && (_0x10ee64['partner']['m3'] = _0x4e630f),
                _0x5828b5 = [_0x10ee64['m3X'], _0x10ee64['m3Y']];
            else {
                if (_0x10ee64['m1'] == null)
                    _0x10ee64['m1'] = _0x4e630f,
                    tag_duel && (_0x10ee64['partner']['m1'] = _0x4e630f),
                    _0x5828b5 = [_0x10ee64['m1X'], _0x10ee64['m1Y']];
                else
                    return endAction(),
                    null;
            }
        }
    } else {
        if (_0x10ee64['m3'] == null)
            _0x10ee64['m3'] = _0x4e630f,
            tag_duel && (_0x10ee64['partner']['m3'] = _0x4e630f),
            _0x5828b5 = [_0x10ee64['m3X'], _0x10ee64['m3Y']];
        else {
            if (_0x10ee64['m4'] == null)
                _0x10ee64['m4'] = _0x4e630f,
                tag_duel && (_0x10ee64['partner']['m4'] = _0x4e630f),
                _0x5828b5 = [_0x10ee64['m4X'], _0x10ee64['m4Y']];
            else {
                if (_0x10ee64['m2'] == null)
                    _0x10ee64['m2'] = _0x4e630f,
                    tag_duel && (_0x10ee64['partner']['m2'] = _0x4e630f),
                    _0x5828b5 = [_0x10ee64['m2X'], _0x10ee64['m2Y']];
                else {
                    if (_0x10ee64['m5'] == null)
                        _0x10ee64['m5'] = _0x4e630f,
                        tag_duel && (_0x10ee64['partner']['m5'] = _0x4e630f),
                        _0x5828b5 = [_0x10ee64['m5X'], _0x10ee64['m5Y']];
                    else {
                        if (_0x10ee64['m1'] == null)
                            _0x10ee64['m1'] = _0x4e630f,
                            tag_duel && (_0x10ee64['partner']['m1'] = _0x4e630f),
                            _0x5828b5 = [_0x10ee64['m1X'], _0x10ee64['m1Y']];
                        else
                            return endAction(),
                            null;
                    }
                }
            }
        }
    }
    return updateController(_0x10ee64, _0x4e630f),
    _0x5828b5;
}
function getNextSTZone(_0x3dc2fc, _0x2bcb48, _0x31d114) {
    var _0x5c9b2c = [];
    if (_0x31d114['zone']) {
        switch (_0x31d114['zone']) {
        case 'S-1':
            _0x3dc2fc['s1'] = _0x2bcb48;
            tag_duel && (_0x3dc2fc['partner']['s1'] = _0x2bcb48);
            break;
        case 'S-2':
            _0x3dc2fc['s2'] = _0x2bcb48;
            tag_duel && (_0x3dc2fc['partner']['s2'] = _0x2bcb48);
            break;
        case 'S-3':
            _0x3dc2fc['s3'] = _0x2bcb48;
            tag_duel && (_0x3dc2fc['partner']['s3'] = _0x2bcb48);
            break;
        case 'S-4':
            _0x3dc2fc['s4'] = _0x2bcb48;
            tag_duel && (_0x3dc2fc['partner']['s4'] = _0x2bcb48);
            break;
        case 'S-5':
            _0x3dc2fc['s5'] = _0x2bcb48;
            tag_duel && (_0x3dc2fc['partner']['s5'] = _0x2bcb48);
            break;
        case 'F-1':
            _0x3dc2fc['fieldSpell'] = _0x2bcb48;
            tag_duel && (_0x3dc2fc['partner']['fieldSpell'] = _0x2bcb48);
            setFieldSpellPic(_0x3dc2fc, _0x2bcb48);
            break;
        case 'F-2':
            _0x3dc2fc['opponent']['fieldSpell'] = _0x2bcb48;
            tag_duel && (_0x3dc2fc['opponent']['partner']['fieldSpell'] = _0x2bcb48);
            setFieldSpellPic(_0x3dc2fc['opponent'], _0x2bcb48),
            updateController(_0x3dc2fc['opponent'], _0x2bcb48);
            break;
        }
        return _0x31d114['zone'] == 'F-2' ? updateController(_0x3dc2fc['opponent'], _0x2bcb48) : updateController(_0x3dc2fc, _0x2bcb48),
        _0x5c9b2c = getPointsByZone(_0x3dc2fc, _0x31d114['zone']),
        _0x5c9b2c;
    }
    if (speed || rush) {
        if (_0x3dc2fc['s2'] == null)
            _0x3dc2fc['s2'] = _0x2bcb48,
            tag_duel && (_0x3dc2fc['partner']['s2'] = _0x2bcb48),
            _0x5c9b2c = [_0x3dc2fc['s2X'], _0x3dc2fc['s2Y']];
        else {
            if (_0x3dc2fc['s3'] == null)
                _0x3dc2fc['s3'] = _0x2bcb48,
                tag_duel && (_0x3dc2fc['partner']['s3'] = _0x2bcb48),
                _0x5c9b2c = [_0x3dc2fc['s3X'], _0x3dc2fc['s3Y']];
            else {
                if (_0x3dc2fc['s1'] == null)
                    _0x3dc2fc['s1'] = _0x2bcb48,
                    tag_duel && (_0x3dc2fc['partner']['s1'] = _0x2bcb48),
                    _0x5c9b2c = [_0x3dc2fc['s1X'], _0x3dc2fc['s1Y']];
                else
                    return endAction(),
                    null;
            }
        }
    } else {
        if (_0x3dc2fc['s3'] == null)
            _0x3dc2fc['s3'] = _0x2bcb48,
            tag_duel && (_0x3dc2fc['partner']['s3'] = _0x2bcb48),
            _0x5c9b2c = [_0x3dc2fc['s3X'], _0x3dc2fc['s3Y']];
        else {
            if (_0x3dc2fc['s4'] == null && !duel_links && !speed && !rush)
                _0x3dc2fc['s4'] = _0x2bcb48,
                tag_duel && (_0x3dc2fc['partner']['s4'] = _0x2bcb48),
                _0x5c9b2c = [_0x3dc2fc['s4X'], _0x3dc2fc['s4Y']];
            else {
                if (_0x3dc2fc['s2'] == null)
                    _0x3dc2fc['s2'] = _0x2bcb48,
                    tag_duel && (_0x3dc2fc['partner']['s2'] = _0x2bcb48),
                    _0x5c9b2c = [_0x3dc2fc['s2X'], _0x3dc2fc['s2Y']];
                else {
                    if (_0x3dc2fc['s5'] == null && !duel_links && !speed && !rush)
                        _0x3dc2fc['s5'] = _0x2bcb48,
                        tag_duel && (_0x3dc2fc['partner']['s5'] = _0x2bcb48),
                        _0x5c9b2c = [_0x3dc2fc['s5X'], _0x3dc2fc['s5Y']];
                    else {
                        if (_0x3dc2fc['s1'] == null)
                            _0x3dc2fc['s1'] = _0x2bcb48,
                            tag_duel && (_0x3dc2fc['partner']['s1'] = _0x2bcb48),
                            _0x5c9b2c = [_0x3dc2fc['s1X'], _0x3dc2fc['s1Y']];
                        else
                            return endAction(),
                            null;
                    }
                }
            }
        }
    }
    return updateController(_0x3dc2fc, _0x2bcb48),
    _0x5c9b2c;
}
function resetSpecialSummon() {
    TweenMax['to']($('#ss_glow'), 0x0, {
        'rotation': 0x0,
        'scale': 0.1
    }),
    $('#ss_glow')['css']('opacity', 0x1),
    $('#ss_glow')['hide'](),
    TweenMax['to']($('#ss_spiral'), 0x0, {
        'rotation': 0x0,
        'scale': 0.1
    }),
    $('#ss_spiral')['css']('opacity', 0x1),
    $('#ss_spiral')['hide']();
}
function targetCardResponse(_0x31f48c, _0x312404) {
    var _0x4e104a = getDuelCard(_0x312404['id'])
      , _0x3294f6 = _0x4e104a['parent']()[0x0] == $('#view\x20>\x20.content')[0x0]
      , _0x2ae0a8 = null
      , _0x3734f0 = null;
    !_0x3294f6 && (_0x4e104a['data']('controller')['grave_arr']['indexOf'](_0x4e104a) >= 0x0 && (_0x2ae0a8 = _0x4e104a['data']('controller')['grave_arr']['indexOf'](_0x4e104a),
    _0x4e104a['data']('controller')['grave_arr']['splice'](_0x2ae0a8, 0x1),
    _0x4e104a['data']('controller')['grave_arr']['unshift'](_0x4e104a),
    shiftGrave(_0x4e104a['data']('controller'))),
    _0x4e104a['data']('controller')['banished_arr']['indexOf'](_0x4e104a) >= 0x0 && (_0x3734f0 = _0x4e104a['data']('controller')['banished_arr']['indexOf'](_0x4e104a),
    _0x4e104a['data']('controller')['banished_arr']['splice'](_0x3734f0, 0x1),
    _0x4e104a['data']('controller')['banished_arr']['unshift'](_0x4e104a),
    shiftBanished(_0x4e104a['data']('controller'))));
    var _0x3f501e, _0x3c124b;
    if (_0x312404['username'] == Player1()['username'])
        _0x3f501e = $('.red_target'),
        _0x3c124b = Player2();
    else
        _0x312404['username'] == Player2()['username'] ? (_0x3f501e = $('.blue_target'),
        _0x3c124b = Player1()) : (_0x3f501e = $('.green_target'),
        _0x3c124b = Player1());
    var _0x77e4c8 = ~~_0x3f501e['data']('num') + 0x1;
    _0x3f501e['data']('num', _0x77e4c8),
    playSound(Target);
    var _0x46ed4d = 0x0;
    _0x4e104a && (_0x3f501e['css']('left', parseInt(_0x4e104a['css']('left'))),
    _0x3f501e['css']('top', parseInt(_0x4e104a['css']('top'))),
    TweenMax['to'](_0x3f501e, 0x0, {
        'rotation': getRotation(_0x4e104a[0x0]),
        'scale': getScale(_0x4e104a[0x0])
    }),
    _0x3f501e['show'](),
    _0x4e104a['parent']()['append'](_0x3f501e)),
    setTimeout(function() {
        _0x3f501e['hide']();
    }, 0x64),
    setTimeout(function() {
        _0x3f501e['show']();
    }, 0xc8),
    setTimeout(function() {
        _0x3f501e['hide']();
    }, 0x12c),
    setTimeout(function() {
        _0x3f501e['show']();
    }, 0x190),
    setTimeout(function() {
        _0x46ed4d = 0.2,
        (_0x2ae0a8 || _0x3734f0) && (_0x46ed4d = 0.3),
        setTimeout(function() {
            _0x2ae0a8 != null && (_0x4e104a['data']('controller')['grave_arr']['splice'](0x0, 0x1),
            _0x4e104a['data']('controller')['grave_arr']['splice'](_0x2ae0a8, 0x0, _0x4e104a),
            shiftGrave(_0x4e104a['data']('controller')),
            ~~_0x3f501e['data']('num') == _0x77e4c8 && _0x3f501e['hide']()),
            _0x3734f0 != null && (_0x4e104a['data']('controller')['banished_arr']['splice'](0x0, 0x1),
            _0x4e104a['data']('controller')['banished_arr']['splice'](_0x3734f0, 0x0, _0x4e104a),
            shiftBanished(_0x4e104a['data']('controller')),
            ~~_0x3f501e['data']('num') == _0x77e4c8 && _0x3f501e['hide']()),
            setTimeout(function() {
                endAction();
            }, automatic ? 0x12c : 0x0);
        }, 0x12c + _0x46ed4d * 1.5 * 0x3e8);
    }, _0x46ed4d * 0x3e8);
}
function shuffleHand(_0x4cd79e, _0x320a8f) {
    restoreHandCards();
    if (_0x4cd79e == Player1()['opponent'] && viewing == 'Opponent\x27s\x20Hand' || _0x4cd79e['hand_arr']['length'] < 0x2) {
        _0x39d936();
        return;
    }
    TweenMax['to'](_0x4cd79e['hand_arr'], 0.25, {
        'left': 0x1e5,
        'ease': Linear['easeNone'],
        'onComplete': _0x39d936
    });
    _0x4cd79e['hand_arr']['length'] > 0x1 && playSound(ShuffleHand);
    function _0x39d936() {
        updateIDs(_0x4cd79e['hand_arr'], _0x320a8f['hand'], _0x320a8f['prev']),
        _0x4cd79e['hand_arr'] = shuffle(_0x4cd79e, _0x4cd79e['hand_arr'], _0x320a8f['hand']),
        organizeHand(_0x4cd79e, !![]),
        endAction();
    }
}
function updateIDs(_0x12c6dc, _0x517cc0, _0x2de60f) {
    var _0x16f1f8 = []
      , _0x1fc2d3 = JSON['parse'](JSON['stringify'](_0x517cc0));
    if (_0x2de60f) {
        var _0x3a499e = JSON['parse'](JSON['stringify'](_0x2de60f));
        _0x50e9e0: for (var _0x40a2e4 = 0x0; _0x40a2e4 < _0x12c6dc['length']; _0x40a2e4++) {
            for (var _0x3d0b6f = 0x0; _0x3d0b6f < _0x3a499e['length']; _0x3d0b6f++) {
                if (_0x12c6dc[_0x40a2e4]['data']('id') == _0x3a499e[_0x3d0b6f]) {
                    _0x12c6dc[_0x40a2e4]['data']('id', _0x1fc2d3[_0x3d0b6f]),
                    _0x3a499e['splice'](_0x3d0b6f, 0x1),
                    _0x1fc2d3['splice'](_0x3d0b6f, 0x1);
                    continue _0x50e9e0;
                }
            }
            _0x16f1f8['push'](_0x12c6dc[_0x40a2e4]);
        }
        for (_0x40a2e4 = 0x0; _0x40a2e4 < _0x16f1f8['length']; _0x40a2e4++) {
            _0x1fc2d3[_0x40a2e4] ? (addLine('fixing\x20' + _0x16f1f8[_0x40a2e4]['data']('cardfront')['data']('name') + 's\x20id\x20from\x20' + _0x16f1f8[_0x40a2e4]['data']('id') + '\x20to\x20' + _0x1fc2d3[_0x40a2e4]),
            _0x16f1f8[_0x40a2e4]['data']('id', _0x1fc2d3[_0x40a2e4])) : addLine('could\x20not\x20account\x20for\x20' + _0x16f1f8[_0x40a2e4]['data']('cardfront')['data']('name'));
        }
        return;
    }
    if (version < 0xd)
        return;
    for (var _0x40a2e4 = 0x0; _0x40a2e4 < _0x12c6dc['length']; _0x40a2e4++) {
        _0x12c6dc[_0x40a2e4]['data']('id', _0x1fc2d3[_0x40a2e4]);
    }
}
function updateIDs0(_0x2dafa2, _0x53fd65, _0x3ec193) {
    if (_0x3ec193) {
        for (var _0x5adfd8 = 0x0; _0x5adfd8 < _0x2dafa2['length']; _0x5adfd8++) {
            for (var _0x3ab8b5 = 0x0; _0x3ab8b5 < _0x3ec193['length']; _0x3ab8b5++) {
                _0x2dafa2[_0x5adfd8]['data']('id') == _0x3ec193[_0x3ab8b5] && (log('setting\x20' + _0x2dafa2[_0x5adfd8]['data']('cardfront')['data']('name') + 's\x20id\x20from\x20' + _0x2dafa2[_0x5adfd8]['data']('id') + '\x20to\x20' + _0x53fd65[_0x3ab8b5]),
                _0x2dafa2[_0x5adfd8]['data']('id', _0x53fd65[_0x3ab8b5]));
            }
        }
        return;
    }
    if (version < 0xd)
        return;
    for (var _0x5adfd8 = 0x0; _0x5adfd8 < _0x2dafa2['length']; _0x5adfd8++) {
        _0x2dafa2[_0x5adfd8]['data']('id', _0x53fd65[_0x5adfd8]);
    }
}
function shuffleHand2(_0x1ae0e8, _0x341702) {
    restoreHandCards(),
    TweenMax['to'](_0x1ae0e8['hand_arr'], 0.25, {
        'left': 0x1e5,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            updateIDs(_0x1ae0e8['hand_arr'], _0x341702['hand'], _0x341702['prev']),
            _0x1ae0e8['hand_arr'] = shuffle(_0x1ae0e8, _0x1ae0e8['hand_arr'], _0x341702['hand']),
            organizeHand(_0x1ae0e8, !![]),
            setTimeout(function() {
                endAction();
            }, 0xfa);
        }
    }),
    _0x1ae0e8['hand_arr']['length'] > 0x1 && playSound(ShuffleHand);
}
function shuffle(_0x15c591, _0x1a7d4a, _0x14eef6) {
    try {
        var _0xe0585b = _0x14eef6['slice']();
        if (_0x15c591 == Player1()['opponent'] && viewing == 'Opponent\x27s\x20Hand')
            return _0x1a7d4a;
        var _0x4c448d = []
          , _0x5ba001 = _0x1a7d4a['length'];
        while (_0x1a7d4a['length'] > 0x0) {
            _0x1a7d4a[0x0]['data']('sleeve') != _0x15c591['sleeve'] && _0x1a7d4a[0x0]['setSleeve'](_0x15c591['sleeve']),
            _0x4c448d['push'](_0x1a7d4a[0x0]),
            _0x1a7d4a['splice'](0x0, 0x1);
        }
        _0x158f64: while (_0x1a7d4a['length'] < _0x5ba001) {
            for (var _0x461c9a = 0x0; _0x461c9a < _0x4c448d['length']; _0x461c9a++) {
                if (_0x4c448d[_0x461c9a]['data']('id') == _0xe0585b[0x0]) {
                    _0x1a7d4a['push'](_0x4c448d[_0x461c9a]),
                    _0xe0585b['splice'](0x0, 0x1);
                    continue _0x158f64;
                }
            }
            console['log']('NOT\x20FOUND\x20' + _0xe0585b[0x0]),
            console['log']('first,\x20arr.length\x20=\x20' + _0x1a7d4a['length']),
            _0x1a7d4a['push'](removeCard(_0x15c591, {
                'id': _0xe0585b[0x0]
            })),
            console['log']('then,\x20arr.length\x20=\x20' + _0x1a7d4a['length']),
            _0xe0585b['splice'](0x0, 0x1);
            continue _0x158f64;
        }
        return _0x1a7d4a;
    } catch (_0xf73201) {
        console['log'](_0xf73201['message']);
    }
    if (unknown_totals && _0x1a7d4a['length'] < _0x5ba001)
        for (_0x461c9a = 0x0; _0x461c9a < _0x15c591['extra_arr']['length']; _0x461c9a++) {
            _0x15c591['extra_arr'][_0x461c9a]['data']('id', _0x15c591['extra_arr'][_0x461c9a]['data']('id') - (original_length - _0x1a7d4a['length']));
        }
    return _0x1a7d4a;
}
function viewCards(_0x442712, _0x598f94) {
    console['log']('viewCards'),
    console['time']('viewCards');
    var _0xa728a4 = ![];
    _0x598f94 && (_0x598f94['permission'] && (_0xa728a4 = !![]));
    var _0x3fdf2d = 0x2b
      , _0x55527a = 0x38;
    menu_card && (menu_card['parent']()[0x0] == $('#view\x20>\x20.content')[0x0] && removeCardMenu(),
    setTimeout(function() {
        TweenMax['isTweening'](menu_card) && removeCardMenu();
    }, 0x5));
    !$('#view')['is'](':visible') && $('#view\x20>\x20.content')['addClass']('unscrollable');
    for (var _0x34d797 = 0x0; _0x34d797 < _0x442712['length']; _0x34d797++) {
        _0x442712[_0x34d797]['hasClass']('xyzmaterial') && (console['log']('killing\x20tweens'),
        TweenMax['killTweensOf'](_0x442712[_0x34d797]));
        _0x34d797 == 0x10 && $('#view\x20>\x20.content')['removeClass']('unscrollable');
        _0x598f94 && _0x598f94['deck'] && _0x598f94['deck'][_0x34d797] && _0x442712[_0x34d797]['data']('cardfront')['reinitialize'](_0x598f94['deck'][_0x34d797]);
        _0x442712[_0x34d797]['css']('left', _0x3fdf2d),
        _0x442712[_0x34d797]['css']('top', _0x55527a),
        TweenMax['to'](_0x442712[_0x34d797], 0x0, {
            'rotation': 0x0,
            'scale': 0.1485,
            'rotationY': ABOUT_ZERO
        });
        if (duelist && _0x442712[_0x34d797]['data']('face_down') && player1['banished_arr']['indexOf'](_0x442712[_0x34d797]) >= 0x0 && !simple)
            _0x442712[_0x34d797]['showFaceDown']();
        else {
            if (!_0xa728a4 && _0x442712[_0x34d797]['data']('face_down') && viewing != 'Extra\x20Deck')
                _0x442712[_0x34d797]['showFaceDown']();
            else {
                if (viewing['indexOf']('Public\x20Extra') >= 0x0 && (_0x442712[_0x34d797]['data']('face_down') || !_0x442712[_0x34d797]['data']('cardfront')['data']('pendulum')))
                    _0x442712[_0x34d797]['showFaceDown']();
                else
                    _0x442712[_0x34d797]['data']('cardfront') && !_0x442712[_0x34d797]['data']('cardfront')['data']('initialized') && _0x442712[_0x34d797]['showFaceDown']();
            }
        }
        if (viewing == 'Deck' || viewing == 'Extra\x20Deck') {} else
            _0xa728a4 && _0x442712[_0x34d797]['onRotate']();
        viewing == 'Opponent\x27s\x20Extra\x20Deck' && _0x442712[_0x34d797]['data']('cardfront')['show'](),
        _0x3fdf2d += 70.5,
        _0x3fdf2d > 536.5 && (_0x3fdf2d = 0x2b,
        _0x55527a += 0x61),
        $('#view\x20>\x20.content')['append'](_0x442712[_0x34d797]);
    }
    viewing == 'Extra\x20Deck' && (duelFormat == 'gr' || duelFormat == 'gu') ? $('#view\x20.expand_btn')['show']() : $('#view\x20.expand_btn')['hide'](),
    $('#view')['show'](),
    console['timeEnd']('viewCards');
}
function exitViewing(_0xac234c, _0x215adc) {
    _0xac234c && duelist && viewing == 'Deck\x20(Picking\x204\x20Cards)' && player1['temp_arr']['length'] > 0x0 && Send({
        'action': 'Duel',
        'play': next_callback,
        'cards': player1['temp_arr']
    }),
    duelist && viewing && (Send({
        'action': 'Duel',
        'play': _0x215adc ? 'Stop\x20viewing\x202' : 'Stop\x20viewing',
        'viewing': viewing
    }),
    player1['temp_arr'] = []),
    viewing == 'Xyz\x20Materials' && updateAllXyzMaterials(),
    removeCardMenu(),
    viewing = '',
    $('#view\x20.title_txt')['text'](''),
    $('#view\x20>\x20.content')['scrollTop'](0x0),
    $('#view')['hide'](),
    shiftDecks(),
    _0xac234c && (_0xac234c['preventDefault'](),
    _0xac234c['stopPropagation']());
}
function updateAllXyzMaterials() {
    var _0x41699a = player1['all_cards_arr']['concat'](player2['all_cards_arr']);
    _0x41699a['forEach'](function(_0x37278b, _0x3a8e35) {
        _0x37278b['data']('xyz_arr')['length'] > 0x0 && updateXyzMaterials(_0x37278b['data']('controller'), _0x37278b, null, !![]);
    });
}
function reveal(_0x1031f4, _0x3b1fe4) {
    var _0x174ea0 = revealFromHand(_0x1031f4, _0x3b1fe4);
    !_0x174ea0 && (_0x174ea0 = revealFromExtra(_0x1031f4, _0x3b1fe4)),
    !_0x174ea0 && (_0x174ea0 = revealFromDeck(_0x1031f4, _0x3b1fe4));
}
function revealFromHand(_0x1f2ec9, _0x1ab7ba) {
    for (var _0x5109da = 0x0; _0x5109da < _0x1f2ec9['hand_arr']['length']; _0x5109da++) {
        if (_0x1f2ec9['hand_arr'][_0x5109da]['data']('id') == _0x1ab7ba['id']) {
            var _0x3342f6 = _0x1f2ec9['hand_arr'][_0x5109da];
            return removeFromHand(_0x1f2ec9, _0x1ab7ba),
            organizeHand(_0x1f2ec9),
            revealAndToHand(_0x1f2ec9, _0x3342f6, _0x1ab7ba),
            _0x3342f6;
        }
    }
    return null;
}
function revealFromDeck(_0x378b0b, _0x62e11e) {
    var _0xd77eeb = removeFromDeck(_0x378b0b, _0x62e11e);
    if (!_0xd77eeb)
        return null;
    return revealAndToTopOfDeck(_0xd77eeb['data']('controller'), _0xd77eeb, _0x62e11e),
    _0xd77eeb;
}
function revealFromExtra(_0x13b793, _0x4ff906) {
    var _0x4f9ee7 = removeFromExtra(_0x13b793, _0x4ff906);
    if (!_0x4f9ee7)
        return null;
    return !_0x4f9ee7['data']('face_down') ? revealAndToExtraFU(_0x4f9ee7['data']('controller'), _0x4f9ee7, _0x4ff906) : revealAndToExtra(_0x4f9ee7['data']('controller'), _0x4f9ee7, _0x4ff906),
    _0x4f9ee7;
}
function revealAndToHand(_0x3942bc, _0x2ae587, _0x1bb37d) {
    viewing && removeCardMenu();
    _0x1bb37d['play'] == 'To\x20hand\x202' && (_0x3942bc = _0x3942bc['opponent'],
    updateController(_0x3942bc, _0x2ae587));
    $('#duel\x20.cards')['append'](_0x2ae587),
    _0x2ae587['data']('cardfront')['reinitialize'](_0x1bb37d['card']);
    if (_0x1bb37d['discreet']) {
        toHandFromDeckDiscreet(_0x3942bc, _0x2ae587, _0x1bb37d);
        return;
    }
    TweenMax['to'](_0x2ae587, easeSeconds2, {
        'left': 0x200,
        'top': 0x118,
        'scale': 0.5,
        'rotation': 0x0,
        'rotationY': ABOUT_ZERO,
        'onComplete': function() {
            previewCard(_0x2ae587),
            determineHandPosition(_0x3942bc);
            var _0x220038 = 0xb4 + ABOUT_ZERO;
            (isPlayer1(_0x3942bc['username']) && show_cards || show_cards == 0x2) && (_0x220038 = ABOUT_ZERO),
            TweenMax['to'](_0x2ae587, easeSeconds2, {
                'left': handDestination,
                'top': _0x3942bc['handY'],
                'scale': 0.25,
                'rotation': _0x3942bc['rot'],
                'rotationY': _0x220038,
                'delay': 0.5,
                'onStart': function() {
                    _0x3942bc['hand_arr']['push'](_0x2ae587),
                    organizeHand(_0x3942bc);
                },
                'onComplete': function() {
                    if (automatic)
                        endAction();
                    else
                        _0x1bb37d['shuffle'] !== ![] ? shuffleHand(_0x3942bc, _0x1bb37d) : endAction();
                }
            });
        }
    }),
    playSound(Reveal);
}
function revealAndToTopOfDeck(_0x1074fe, _0x54b408, _0x103892) {
    $('#duel\x20.cards')['append'](_0x54b408),
    TweenMax['set'](_0x54b408, {
        'z': _0x54b408['getDeckZ']()
    }),
    _0x54b408['data']('cardfront')['reinitialize'](_0x103892['card']),
    TweenMax['to'](_0x54b408, easeSeconds, {
        'left': 0x200,
        'top': 0x118,
        'scale': 0.5,
        'rotation': 0x0,
        'rotationY': ABOUT_ZERO,
        'onComplete': function() {
            previewCard(_0x54b408),
            TweenMax['to'](_0x54b408, easeSeconds, {
                'left': _0x1074fe['deckX'],
                'top': _0x1074fe['deckY'],
                'scale': 0.1485,
                'rotation': _0x1074fe['rot'],
                'rotationY': 0xb4 + ABOUT_ZERO,
                'delay': 0.5,
                'onStart': function() {
                    _0x1074fe['main_arr']['unshift'](_0x54b408);
                },
                'onComplete': function() {
                    shiftDeck(_0x1074fe),
                    endAction();
                }
            });
        }
    }),
    playSound(Reveal);
}
function revealAndToBottomOfDeck(_0x1a5ee6, _0x812ae, _0x402c29) {
    $('#field')['append'](_0x812ae),
    TweenMax['set'](_0x812ae, {
        'z': 0x0
    }),
    _0x812ae['data']('cardfront')['reinitialize'](_0x402c29['card']),
    TweenMax['to'](_0x812ae, easeSeconds, {
        'left': 0x200,
        'top': 0x118,
        'scale': 0.5,
        'rotation': 0x0,
        'rotationY': ABOUT_ZERO,
        'onComplete': function() {
            previewCard(_0x812ae),
            TweenMax['to'](_0x812ae, easeSeconds, {
                'left': _0x1a5ee6['deckX'],
                'top': _0x1a5ee6['deckY'],
                'scale': 0.1485,
                'rotation': _0x1a5ee6['rot'],
                'rotationY': 0xb4 + ABOUT_ZERO,
                'delay': 0.5,
                'onStart': function() {
                    _0x1a5ee6['main_arr']['push'](_0x812ae),
                    addDeckChildren(_0x1a5ee6);
                },
                'onComplete': function() {
                    shiftDeck(_0x1a5ee6),
                    endAction();
                }
            });
        }
    }),
    playSound(Reveal);
}
function revealAndToExtra(_0x29e542, _0x13f54d, _0xf2d592) {
    $('#duel\x20.cards')['append'](_0x13f54d),
    TweenMax['set'](_0x13f54d, {
        'z': 0x0
    }),
    _0x13f54d['data']('cardfront')['reinitialize'](_0xf2d592['card']),
    TweenMax['to'](_0x13f54d, easeSeconds, {
        'left': 0x200,
        'top': 0x118,
        'scale': 0.5,
        'rotation': 0x0,
        'rotationY': ABOUT_ZERO,
        'onComplete': function() {
            previewCard(_0x13f54d),
            _0x13f54d['data']('face_down', !![]),
            TweenMax['to'](_0x13f54d, easeSeconds, {
                'left': _0x13f54d['data']('owner')['extraX'],
                'top': _0x13f54d['data']('owner')['extraY'],
                'scale': 0.1485,
                'rotation': _0x13f54d['data']('owner')['rot'],
                'rotationY': 0xb4 + ABOUT_ZERO,
                'delay': 0.5,
                'onStart': function() {
                    _0x13f54d['data']('owner')['extra_arr']['push'](_0x13f54d),
                    addExtraChildren(_0x13f54d['data']('owner'));
                },
                'onComplete': function() {
                    shiftExtra(_0x13f54d['data']('owner')),
                    endAction();
                }
            });
        }
    }),
    playSound(Reveal);
}
function revealAndToExtraFU(_0x5e18a6, _0x5eceb4, _0x159951) {
    $('#duel\x20.cards')['append'](_0x5eceb4),
    TweenMax['set'](_0x5eceb4, {
        'z': _0x5eceb4['getExtraZ']()
    }),
    _0x5eceb4['data']('cardfront')['reinitialize'](_0x159951['card']),
    TweenMax['to'](_0x5eceb4, easeSeconds, {
        'left': 0x200,
        'top': 0x118,
        'scale': 0.5,
        'rotation': 0x0,
        'rotationY': ABOUT_ZERO,
        'onComplete': function() {
            previewCard(_0x5eceb4),
            _0x5eceb4['data']('face_down', ![]),
            TweenMax['to'](_0x5eceb4, easeSeconds, {
                'left': _0x5eceb4['data']('owner')['extraX'],
                'top': _0x5eceb4['data']('owner')['extraY'],
                'scale': 0.1485,
                'rotation': _0x5eceb4['data']('owner')['rot'],
                'rotationY': ABOUT_ZERO,
                'delay': 0.5,
                'onStart': function() {
                    _0x5eceb4['data']('owner')['extra_arr']['unshift'](_0x5eceb4);
                },
                'onComplete': function() {
                    shiftExtra(_0x5eceb4['data']('owner')),
                    endAction();
                }
            });
        }
    }),
    playSound(Reveal);
}
function move(_0x3b3e03, _0x2a533d) {
    var _0x419d10 = removeFromField(_0x3b3e03, _0x2a533d, !![]), _0x23d57f, _0x45bc82;
    _0x2a533d['zone']['indexOf']('M') == 0x0 || _0x2a533d['zone'] == 'Left\x20Extra\x20Monster\x20Zone' || _0x2a533d['zone'] == 'Right\x20Extra\x20Monster\x20Zone' ? (_0x23d57f = getNextMonsterZone(_0x3b3e03, _0x419d10, _0x2a533d),
    _0x45bc82 = _0x419d10['data']('controller')['rot'],
    _0x419d10['data']('face_down') && (_0x419d10['data']('inATK', ![]),
    _0x419d10['data']('inDEF', !![])),
    _0x419d10['data']('inDEF') && (_0x45bc82 = _0x419d10['data']('controller')['defRot'])) : (_0x419d10['data']('inATK', !![]),
    _0x419d10['data']('inDEF', ![]),
    _0x419d10['data']('new_atk', null),
    _0x419d10['data']('new_def', null),
    _0x23d57f = getNextSTZone(_0x3b3e03, _0x419d10, _0x2a533d),
    detachAllMaterials(_0x419d10),
    _0x45bc82 = _0x419d10['data']('controller')['rot']);
    getRotation(_0x419d10[0x0]) == 0x0 && _0x419d10['data']('inATK', !![]);
    $('#field')['append'](_0x419d10),
    _0x419d10['data']('cardfront')['reinitialize'](_0x2a533d['card']);
    var _0x725102 = !![];
    (_0x2a533d['zone']['indexOf']('M') == 0x0 || _0x2a533d['zone'] == 'Left\x20Extra\x20Monster\x20Zone' || _0x2a533d['zone'] == 'Right\x20Extra\x20Monster\x20Zone') && (_0x725102 = ![]),
    TweenMax['to'](_0x419d10, easeSeconds, {
        'left': _0x23d57f[0x0],
        'top': _0x23d57f[0x1],
        'rotation': _0x45bc82,
        'scale': 0.1485,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            _0x725102 && endAction();
        }
    }),
    !_0x725102 && updateXyzMaterials(_0x419d10['data']('controller'), _0x419d10);
}
function overlay(_0x123cfa, _0x222038) {
    console['log']('overlay\x20entered');
    var _0x2c68f3 = getFieldCard(_0x123cfa, {
        'id': _0x222038['start_id']
    })
      , _0x2e48b5 = getFieldCard(_0x123cfa, {
        'id': _0x222038['end_id']
    });
    _0x2c68f3['data']('xyz_arr')['push'](_0x2e48b5);
    while (_0x2e48b5['data']('xyz_arr')['length'] > 0x0) {
        _0x2c68f3['data']('xyz_arr')['push'](_0x2e48b5['data']('xyz_arr')[0x0]),
        _0x2e48b5['data']('xyz_arr')['splice'](0x0, 0x1);
    }
    removeFromField(_0x123cfa, {
        'id': _0x222038['start_id']
    }, !![]),
    replaceCard(_0x123cfa, _0x2c68f3, _0x2e48b5),
    updateXyzMaterials(_0x123cfa, _0x2c68f3),
    console['log']('overlay\x20ended');
}
function _0x2320(_0x113068, _0x1c4866) {
    var _0x1798ad = _0x17d7();
    return _0x2320 = function(_0xaac404, _0x2b8b80) {
        _0xaac404 = _0xaac404 - 0x99;
        var _0x17d75b = _0x1798ad[_0xaac404];
        return _0x17d75b;
    }
    ,
    _0x2320(_0x113068, _0x1c4866);
}
function attach(_0x5dbc03, _0x2fe47c) {
    console['log']('attach\x20entered');
    var _0x72c56a = removeCard(_0x5dbc03, {
        'id': _0x2fe47c['start_id']
    });
    !_0x72c56a && (_0x72c56a = removeCard(_0x5dbc03['opponent'], {
        'id': _0x2fe47c['start_id']
    }));
    if (!_0x72c56a)
        return;
    _0x2fe47c['card'] && _0x72c56a['data']('cardfront')['reinitialize'](_0x2fe47c['card']);
    _0x72c56a['data']('face_down', ![]);
    var _0x5b530b = getFieldCard(_0x5dbc03, {
        'id': _0x2fe47c['end_id']
    });
    _0x5b530b['data']('xyz_arr')['push'](_0x72c56a),
    updateXyzMaterials(_0x5dbc03, _0x5b530b),
    console['log']('attach\x20ended');
}
function detach(_0x2460d8, _0x47de3f) {
    var _0x521185 = removeXyzMaterial(_0x2460d8, _0x47de3f, !![]);
    _0x521185['data']('owner')['grave_arr']['unshift'](_0x521185),
    updateController(_0x521185['data']('owner'), _0x521185),
    $('#field')['append'](_0x521185),
    TweenMax['to'](_0x521185, easeSeconds, {
        'left': _0x521185['data']('owner')['graveX'],
        'top': _0x521185['data']('owner')['graveY'],
        'rotation': _0x521185['data']('owner')['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            shiftGrave(_0x2460d8),
            shiftGrave(_0x2460d8['opponent']);
        }
    }),
    playSound(Move),
    updateViewing();
}
function attack(_0x5a944f, _0x29185d) {
    var _0x2123eb = {};
    _0x2123eb['id'] = _0x29185d['attacking_id'];
    var _0x50d934 = getFieldCard(_0x5a944f, _0x2123eb);
    _0x2123eb['id'] = _0x29185d['attacked_id'];
    var _0x3f1a58 = getFieldCard(_0x5a944f['opponent'], _0x2123eb)
      , _0x474d38 = $('.red_target');
    _0x5a944f == Player2() && (_0x474d38 = $('.blue_target'));
    TweenMax['to'](_0x474d38, 0x0, {
        'left': parseInt(_0x3f1a58['css']('left')),
        'top': parseInt(_0x3f1a58['css']('top')),
        'scale': getScale(_0x3f1a58[0x0]),
        'rotation': getRotation(_0x3f1a58[0x0])
    }),
    _0x474d38['show'](),
    _0x3f1a58['parent']()['append'](_0x474d38);
    var _0x4372fa = red_stream
      , _0x3de552 = $('#red_stream');
    _0x5a944f == Player2() && (_0x4372fa = blue_stream,
    _0x3de552 = $('#blue_stream'));
    var _0xe80367 = parseInt(_0x3f1a58['css']('left'))
      , _0x57bea7 = parseInt(_0x3f1a58['css']('top'))
      , _0xb6c2b9 = _0xe80367 - parseInt(_0x50d934['css']('left'))
      , _0x1ba8ba = _0x57bea7 - parseInt(_0x50d934['css']('top'))
      , _0x1be08d = Math['sqrt'](_0xb6c2b9 * _0xb6c2b9 + _0x1ba8ba * _0x1ba8ba);
    TweenMax['to'](_0x3de552, 0x0, {
        'left': parseInt(_0x50d934['css']('left')),
        'top': parseInt(_0x50d934['css']('top')),
        'rotation': Math['atan2'](_0x1ba8ba, _0xb6c2b9) * 0xb4 / Math['PI']
    }),
    _0x3de552['show'](),
    _0x4372fa['play'](),
    TweenMax['fromTo'](_0x3de552, easeSeconds, {
        'scaleX': 0x0
    }, {
        'scaleX': _0x1be08d / 0x1f4
    }),
    TweenMax['fromTo'](_0x4372fa, 1.5, {
        'alpha': 0x1
    }, {
        'alpha': 0x1,
        'onComplete': function() {
            $('#sword')['hide'](),
            _0x3de552['hide'](),
            _0x4372fa['stop'](),
            endAction();
        }
    });
    var _0x100111 = parseInt(_0x50d934['css']('left'))
      , _0x34ae60 = parseInt(_0x50d934['css']('top'));
    $('#sword')['css']('left', _0x100111),
    $('#sword')['css']('top', _0x34ae60),
    $('#sword')['show']();
    var _0xf5412c = _0x34ae60 - parseInt($('#sword')['css']('top'))
      , _0x4ae414 = _0x100111 - parseInt($('#sword')['css']('left'));
    TweenMax['to']($('#sword'), 0x0, {
        'rotation': Math['atan2'](_0x57bea7 - parseInt($('#sword')['css']('top')), _0xe80367 - parseInt($('#sword')['css']('left'))) * 0xb4 / Math['PI']
    }),
    TweenMax['fromTo']($('#sword'), easeSeconds, {
        'left': _0x100111,
        'top': _0x34ae60
    }, {
        'left': parseInt(_0x3f1a58['css']('left')),
        'top': parseInt(_0x3f1a58['css']('top')),
        'ease': Circ['easeInOut']
    }),
    playSound(Attack);
}
function getSwordYPercent(_0x1ae761) {
    var _0x3ddf1a = 0x0;
    return _0x1ae761 < -0x5a ? _0x3ddf1a = 0xa * _0x1ae761 / (-0x9a / 0x2) - 0xa : _0x3ddf1a = (-0xa + -_0x1ae761 / 0x1a * 0x3) * 1.4,
    console['log']('xPercent\x20=\x20' + _0x3ddf1a),
    _0x3ddf1a;
}
function attackDirectly(_0x3a3767, _0x53b22e) {
    var _0x25eba0 = getFieldCard(_0x3a3767, _0x53b22e);
    $('#sword')['show'](),
    TweenMax['to']($('#sword'), 0x0, {
        'left': parseInt(_0x25eba0['css']('left')),
        'top': parseInt(_0x25eba0['css']('top')),
        'rotation': _0x3a3767['rot'] - 0x5a
    });
    var _0x4abc58 = 0x206
      , _0x2736bf = 0x32;
    _0x3a3767 == Player2() && (_0x2736bf = 0x24e);
    var _0x5a0057 = red_stream
      , _0x2883af = $('#red_stream');
    _0x3a3767 == Player2() && (_0x5a0057 = blue_stream,
    _0x2883af = $('#blue_stream'));
    var _0x8aacc6 = _0x4abc58 - parseInt(_0x25eba0['css']('left'))
      , _0x1967a1 = _0x2736bf - parseInt(_0x25eba0['css']('top'))
      , _0x1ecb6a = Math['sqrt'](_0x8aacc6 * _0x8aacc6 + _0x1967a1 * _0x1967a1);
    TweenMax['to'](_0x2883af, 0x0, {
        'left': parseInt(_0x25eba0['css']('left')),
        'top': parseInt(_0x25eba0['css']('top')),
        'rotation': Math['atan2'](_0x1967a1, _0x8aacc6) * 0xb4 / Math['PI']
    }),
    _0x2883af['show'](),
    _0x5a0057['play'](),
    TweenMax['fromTo'](_0x2883af, easeSeconds, {
        'scaleX': 0x0
    }, {
        'scaleX': _0x1ecb6a / 0x1f4
    }),
    TweenMax['fromTo'](_0x5a0057, 1.5, {
        'alpha': 0x1
    }, {
        'alpha': 0x1,
        'onComplete': function() {
            $('#sword')['hide'](),
            _0x2883af['hide'](),
            _0x5a0057['stop'](),
            endAction();
        }
    }),
    TweenMax['to']($('#sword'), 0x0, {
        'rotation': Math['atan2'](_0x2736bf - parseInt($('#sword')['css']('top')), _0x4abc58 - parseInt($('#sword')['css']('left'))) * 0xb4 / Math['PI']
    }),
    TweenMax['fromTo']($('#sword'), easeSeconds, {
        'left': parseInt(_0x25eba0['css']('left')),
        'top': parseInt(_0x25eba0['css']('top'))
    }, {
        'left': _0x4abc58,
        'top': _0x2736bf,
        'ease': Circ['easeInOut']
    }),
    playSound(Attack);
}
function drawCard(_0x419cd5, _0x2f4630) {
    _0x2f4630['username'] == username && $('#mulligan_btn')['length'] == 0x1 && ($('#mulligan_btn')['hide'](),
    $('#draw_btn')['show']());
    var _0x1296c9 = removeTopCardFromDeck(_0x419cd5);
    _0x419cd5['hand_arr']['push'](_0x1296c9),
    determineHandPosition(_0x419cd5),
    organizeHand(_0x419cd5),
    _0x1296c9['data']('cardfront')['reinitialize'](_0x2f4630['card']);
    var _0x27fca1 = 0xb4 + ABOUT_ZERO;
    (show_cards && _0x419cd5 == Player1() || show_cards == 0x2) && (_0x27fca1 = ABOUT_ZERO),
    TweenMax['to'](_0x1296c9, easeSeconds, {
        'left': handDestination,
        'top': _0x419cd5['handY'],
        'scale': 0.25,
        'rotation': _0x419cd5['rot'],
        'rotationY': _0x27fca1,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    }),
    $('#duel\x20.cards')['append'](_0x1296c9),
    playSound(DrawSound);
}
function toHand(_0x4f1e0c, _0x3f1529) {
    var _0x3de4e2 = removeFromDeck(_0x4f1e0c, _0x3f1529);
    !_0x3de4e2 && (_0x3de4e2 = removeFromGY(_0x4f1e0c, _0x3f1529));
    !_0x3de4e2 && (_0x3de4e2 = removeFromExtra(_0x4f1e0c, _0x3f1529));
    if (!_0x3de4e2) {
        _0x3de4e2 = removeFromHand(_0x4f1e0c, _0x3f1529);
        if (_0x3f1529['play'] == 'To\x20hand\x202') {
            !_0x3de4e2 && (_0x3de4e2 = removeCard(_0x4f1e0c, _0x3f1529));
            !_0x3de4e2 && (_0x3de4e2 = removeCard(_0x4f1e0c['opponent'], _0x3f1529));
            revealAndToHand(_0x4f1e0c, _0x3de4e2, _0x3f1529);
            return;
        }
    }
    if (_0x3de4e2) {
        revealAndToHand(_0x4f1e0c, _0x3de4e2, _0x3f1529);
        return;
    }
    toHandFromBanished(_0x4f1e0c, _0x3f1529),
    toHandFromField(_0x4f1e0c, _0x3f1529);
}
function toHandFromField(_0x4c9189, _0x56b94c) {
    var _0x113877 = removeFromField(_0x4c9189, _0x56b94c);
    !_0x113877 && (_0x113877 = removeFromField(_0x4c9189['opponent'], _0x56b94c));
    if (!_0x113877)
        return;
    var _0x19c9fa = _0x113877['data']('owner');
    _0x56b94c['play'] == 'To\x20hand\x202' && (_0x19c9fa = _0x4c9189['opponent']);
    updateController(_0x19c9fa, _0x113877),
    _0x19c9fa['hand_arr']['push'](_0x113877),
    determineHandPosition(_0x19c9fa),
    organizeHand(_0x19c9fa);
    var _0x5bcb63 = 0xb4 + ABOUT_ZERO;
    (isPlayer1(_0x19c9fa['username']) && show_cards || show_cards == 0x2) && (_0x5bcb63 = ABOUT_ZERO),
    TweenMax['to'](_0x113877, easeSeconds, {
        'left': handDestination,
        'top': _0x19c9fa['handY'],
        'scale': 0.25,
        'rotation': _0x19c9fa['rot'],
        'rotationY': _0x5bcb63,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            if (automatic)
                endAction();
            else
                _0x56b94c['shuffle'] !== ![] ? shuffleHand(_0x19c9fa, _0x56b94c) : endAction();
        }
    });
}
function toHandFromBanished(_0x2c9123, _0xae2848) {
    var _0x168375 = removeFromBanished(_0x2c9123, _0xae2848, ![]);
    if (!_0x168375)
        return;
    if (!_0x168375['data']('face_down'))
        revealAndToHand(_0x2c9123, _0x168375, _0xae2848);
    else {
        $('#duel\x20.cards')['append'](_0x168375),
        determineHandPosition(_0x2c9123);
        var _0x635ff6 = 0xb4 + ABOUT_ZERO;
        (isPlayer1(_0x2c9123['username']) && show_cards || show_cards == 0x2) && (_0x635ff6 = ABOUT_ZERO,
        _0x168375['data']('cardfront')['show']()),
        TweenMax['to'](_0x168375, 0.7, {
            'left': handDestination,
            'top': _0x2c9123['handY'],
            'scale': 0.25,
            'rotation': _0x2c9123['rot'],
            'rotationY': _0x635ff6,
            'delay': 0.5,
            'onStart': function() {
                _0x2c9123['hand_arr']['push'](_0x168375),
                organizeHand(_0x2c9123);
            },
            'onComplete': function() {
                _0x168375['data']('face_down', ![]),
                shuffleHand(_0x2c9123, _0xae2848);
            }
        });
    }
}
function toHandFromDeckDiscreet(_0x17a710, _0x4a499e, _0x200e30) {
    determineHandPosition(_0x17a710);
    var _0x572f53 = 0xb4 + ABOUT_ZERO;
    (isPlayer1(_0x17a710['username']) && show_cards || show_cards == 0x2) && (_0x572f53 = ABOUT_ZERO,
    _0x4a499e['data']('cardfront')['show']());
    var _0xf8eb38 = TweenMax['to'](_0x4a499e, 0.7, {
        'left': handDestination,
        'top': _0x17a710['handY'],
        'scale': 0.25,
        'rotation': _0x17a710['rot'],
        'rotationY': _0x572f53,
        'onStart': function() {
            _0x17a710['hand_arr']['push'](_0x4a499e),
            organizeHand(_0x17a710),
            $('#field')['prepend'](_0x4a499e);
        },
        'onUpdate': function() {
            _0xf8eb38['progress']() > 0.2 && _0xf8eb38['progress']() < 0.23 && $('#duel\x20.cards')['append'](_0x4a499e),
            _0xf8eb38['progress']() < 0.03 && TweenMax['set'](_0x4a499e, {
                'left': _0x17a710['deckX']
            });
        },
        'onComplete': function() {
            _0x200e30['shuffle'] !== ![] ? shuffleHand(_0x17a710, _0x200e30) : endAction();
        }
    });
}
function toDeck(_0x1bd1a0, _0x5ba673) {
    var _0x4d727b = 0xb4 + ABOUT_ZERO
      , _0x5ed834 = !![]
      , _0x215380 = getFieldCard(_0x1bd1a0, _0x5ba673);
    _0x215380 ? (_0x5ed834 = ![],
    _0x215380 = removeCard(_0x1bd1a0, _0x5ba673)) : (_0x215380 = removeFromHand(_0x1bd1a0, _0x5ba673),
    _0x215380 && (_0x5ed834 = ![]));
    !_0x215380 && (_0x215380 = removeFromBanished(_0x1bd1a0, _0x5ba673, ![]));
    !_0x215380 && (_0x215380 = removeCard(_0x1bd1a0, _0x5ba673));
    !_0x215380 && (_0x215380 = removeFromDeck(_0x1bd1a0['opponent'], _0x5ba673));
    _0x215380['data']('face_down') && (_0x5ed834 = ![],
    _0x215380['data']('face_down', ![]));
    _0x5ba673['discreet'] && (_0x5ed834 = ![]);
    updateController(_0x215380['data']('owner'), _0x215380),
    $('#field')['append'](_0x215380);
    _0x5ba673['play']['indexOf']('FU') >= 0x0 && (_0x215380['data']('face_up', !![]),
    _0x4d727b = ABOUT_ZERO);
    if (_0x5ba673['play'] == 'To\x20B\x20Deck') {
        if (_0x5ed834) {
            revealAndToBottomOfDeck(_0x215380['data']('controller'), _0x215380, _0x5ba673);
            return;
        } else
            _0x215380['data']('owner')['main_arr']['push'](_0x215380),
            addDeckChildren(_0x1bd1a0);
    } else {
        if (_0x5ba673['play'] == 'To\x20B\x20Deck\x202')
            _0x1bd1a0['opponent']['main_arr']['push'](_0x215380),
            updateController(_0x1bd1a0['opponent'], _0x215380);
        else {
            if (_0x5ba673['play']['indexOf']('To\x20T\x20Deck\x202') == 0x0)
                _0x1bd1a0['opponent']['main_arr']['unshift'](_0x215380),
                updateController(_0x1bd1a0['opponent'], _0x215380),
                TweenMax['set'](_0x215380, {
                    'z': _0x1bd1a0['opponent']['main_arr']['length'] + 0x1e
                });
            else {
                if (_0x5ed834) {
                    revealAndToTopOfDeck(_0x215380['data']('controller'), _0x215380, _0x5ba673);
                    return;
                } else
                    _0x215380['data']('owner')['main_arr']['unshift'](_0x215380),
                    TweenMax['set'](_0x215380, {
                        'z': _0x215380['getDeckZ']()
                    });
            }
        }
    }
    TweenMax['to'](_0x215380, easeSeconds, {
        'left': _0x215380['data']('controller')['deckX'],
        'top': _0x215380['data']('controller')['deckY'],
        'scale': 0.1485,
        'rotation': _0x215380['data']('controller')['rot'],
        'rotationY': _0x4d727b,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            shiftDeck(_0x215380['data']('controller')),
            endAction();
        }
    });
}
function toGY(_0x196994, _0x1fd81a) {
    var _0x3c04a9 = removeCard(_0x196994, _0x1fd81a);
    !_0x3c04a9 && (_0x3c04a9 = removeFromBanished(_0x196994['opponent'], _0x1fd81a)),
    updateController(_0x3c04a9['data']('owner'), _0x3c04a9),
    _0x3c04a9['data']('cardfront')['reinitialize'](_0x1fd81a['card']),
    _0x3c04a9['data']('face_down', ![]),
    $('#field')['append'](_0x3c04a9),
    TweenMax['set'](_0x3c04a9, {
        'z': _0x3c04a9['getGraveZ']()
    }),
    _0x3c04a9['data']('owner')['grave_arr']['unshift'](_0x3c04a9),
    TweenMax['to'](_0x3c04a9, easeSeconds, {
        'left': _0x3c04a9['data']('owner')['graveX'],
        'top': _0x3c04a9['data']('owner')['graveY'],
        'scale': 0.1485,
        'rotation': _0x3c04a9['data']('owner')['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            shiftGrave(_0x3c04a9['data']('owner')),
            endAction();
        }
    }),
    playSound(Move);
}
function mill(_0x278b05, _0x1fc506) {
    var _0x1e81ed = removeTopCardFromDeck(_0x278b05);
    updateController(_0x1e81ed['data']('owner'), _0x1e81ed),
    _0x1e81ed['data']('cardfront')['reinitialize'](_0x1fc506['card']),
    $('#field')['append'](_0x1e81ed),
    TweenMax['set'](_0x1e81ed, {
        'z': _0x1e81ed['getGraveZ']()
    }),
    _0x1e81ed['data']('owner')['grave_arr']['unshift'](_0x1e81ed),
    TweenMax['to'](_0x1e81ed, easeSecondsBanish, {
        'left': _0x1e81ed['data']('owner')['graveX'],
        'top': _0x1e81ed['data']('owner')['graveY'],
        'rotation': _0x1e81ed['data']('owner')['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            shiftGrave(_0x1e81ed['data']('owner')),
            endAction();
        }
    }),
    playSound(Move);
}
function banish(_0xe8c47e, _0x493279) {
    var _0x3283b9 = ABOUT_ZERO
      , _0x406ebf = getDuelCard(_0x493279['id']);
    if (!_0x406ebf)
        return;
    var _0x40269a = _0x406ebf['hasClass']('xyzmaterial') ? getXyzHost(_0x406ebf['data']('id')) : null
      , _0x406ebf = removeCard(_0xe8c47e, _0x493279);
    _0x406ebf && _0x406ebf['data']('face_down', ![]),
    !_0x406ebf && (_0x406ebf = removeFromGY(_0xe8c47e['opponent'], _0x493279)),
    _0x493279['play']['indexOf']('FD') >= 0x0 && (_0x406ebf['data']('face_down', !![]),
    _0x3283b9 = 0xb4 + ABOUT_ZERO),
    _0x406ebf['data']('cardfront')['reinitialize'](_0x493279['card']),
    $('#field')['append'](_0x406ebf),
    TweenMax['set'](_0x406ebf, {
        'z': _0x406ebf['getBanishedZ']()
    }),
    _0x406ebf['data']('owner')['banished_arr']['unshift'](_0x406ebf),
    updateController(_0x406ebf['data']('owner'), _0x406ebf),
    TweenMax['to'](_0x406ebf, easeSeconds, {
        'left': _0x406ebf['data']('owner')['banishedX'],
        'top': _0x406ebf['data']('owner')['banishedY'],
        'scale': 0.1485,
        'rotation': _0x406ebf['data']('owner')['rot'],
        'rotationY': _0x3283b9,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            shiftBanished(_0x406ebf['data']('owner')),
            !_0x40269a && endAction();
        }
    }),
    playSound(Banish),
    _0x40269a && updateXyzMaterials(_0x40269a['data']('controller'), _0x40269a),
    updateViewing();
}
function toED(_0x3248cc, _0x1bb87d) {
    var _0x357a3d = !![]
      , _0x29032b = getFieldCard(_0x3248cc, _0x1bb87d);
    _0x29032b && (_0x357a3d = ![]);
    for (var _0x4dea6c = 0x0; _0x4dea6c < _0x3248cc['banished_arr']['length']; _0x4dea6c++) {
        if (_0x3248cc['banished_arr'][_0x4dea6c]['data']('id') == _0x1bb87d['id']) {
            _0x3248cc['banished_arr'][_0x4dea6c]['data']('face_down') && (_0x357a3d = ![]);
            break;
        }
    }
    _0x29032b = removeCard(_0x3248cc, _0x1bb87d),
    _0x29032b['data']('cardfront')['reinitialize'](_0x1bb87d['card']);
    if (!_0x29032b['data']('face_down') && _0x357a3d) {
        _0x1bb87d['play']['indexOf']('FU') >= 0x0 ? revealAndToExtraFU(_0x3248cc, _0x29032b, _0x1bb87d) : revealAndToExtra(_0x3248cc, _0x29032b, _0x1bb87d);
        return;
    }
    _0x29032b['data']('face_down', !![]);
    var _0x599aec = 0xb4 + ABOUT_ZERO;
    _0x1bb87d['play']['indexOf']('FU') >= 0x0 ? (_0x29032b['data']('face_down', ![]),
    _0x599aec = ABOUT_ZERO,
    _0x29032b['data']('owner')['extra_arr']['unshift'](_0x29032b),
    TweenMax['set'](_0x29032b, {
        'z': _0x29032b['getExtraZ']()
    })) : (_0x29032b['data']('owner')['extra_arr']['push'](_0x29032b),
    addExtraChildren(_0x29032b['data']('owner'))),
    TweenMax['to'](_0x29032b, easeSeconds, {
        'left': _0x29032b['data']('owner')['extraX'],
        'top': _0x29032b['data']('owner')['extraY'],
        'scale': 0.1485,
        'rotation': _0x29032b['data']('owner')['rot'],
        'rotationY': _0x599aec,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            shiftExtra(_0x29032b['data']('owner')),
            endAction();
        }
    });
}
function normalSummon(_0x2c020f, _0x5e52e8) {
    var _0x5adbb7 = removeFromHand(_0x2c020f, _0x5e52e8)
      , _0x2abe8e = getNextMonsterZone(_0x2c020f, _0x5adbb7, _0x5e52e8);
    _0x5adbb7['data']('inATK', !![]),
    _0x5adbb7['data']('inDEF', ![]),
    _0x5adbb7['data']('face_down', ![]),
    $('#field')['append'](_0x5adbb7),
    _0x5adbb7['data']('cardfront')['reinitialize'](_0x5e52e8['card']),
    TweenMax['to'](_0x5adbb7, easeSeconds, {
        'left': _0x2abe8e[0x0],
        'top': _0x2abe8e[0x1],
        'scale': 0.1485,
        'rotation': _0x2c020f['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    }),
    playSound(NormalSummon);
}
function specialSummon(_0x4c0161, _0x349af4, _0x5ac316, _0x20cfed, _0x2f5472) {
    _0x2f5472 !== ![] && (_0x2f5472 = !![]);
    !_0x20cfed && (_0x20cfed = removeCard(_0x4c0161, _0x349af4));
    !_0x20cfed && (_0x20cfed = removeCard(_0x4c0161['opponent'], _0x349af4));
    !_0x5ac316 && (_0x5ac316 = getNextMonsterZone(_0x4c0161, _0x20cfed, _0x349af4));
    var _0x3bc591 = _0x4c0161['rot'];
    _0x20cfed['data']('cardfront')['reinitialize'](_0x349af4['card']);
    _0x349af4['play']['indexOf']('ATK') >= 0x0 || _0x349af4['position'] == 'Attack' ? (_0x20cfed['data']('inATK', !![]),
    _0x20cfed['data']('inDEF', ![])) : (_0x20cfed['data']('inATK', ![]),
    _0x20cfed['data']('inDEF', !![]),
    _0x3bc591 = _0x4c0161['defRot']);
    var _0x13cad6 = ABOUT_ZERO;
    _0x20cfed['data']('face_down', ![]),
    (_0x349af4['position'] == 'Set' || _0x349af4['position'] == 'FD\x20Defense') && (_0x13cad6 = 0xb4,
    _0x20cfed['data']('face_down', !![])),
    $('#field')['append'](_0x20cfed),
    TweenMax['to'](_0x20cfed, easeSeconds, {
        'left': _0x5ac316[0x0],
        'top': _0x5ac316[0x1],
        'scale': 0.1485,
        'rotation': _0x3bc591,
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            $('#ss_glow')['show'](),
            $('#ss_spiral')['show'](),
            TweenMax['to']($('#ss_glow'), 0x0, {
                'left': _0x5ac316[0x0],
                'top': _0x5ac316[0x1]
            }),
            TweenMax['to']($('#ss_glow'), 0.7, {
                'scale': 0x6,
                'rotation': -0xfa
            }),
            TweenMax['to']($('#ss_glow'), 0x1, {
                'alpha': 0x0
            }),
            TweenMax['to']($('#ss_spiral'), 0x0, {
                'left': _0x5ac316[0x0],
                'top': _0x5ac316[0x1]
            }),
            TweenMax['to']($('#ss_spiral'), 0.7, {
                'scale': 0x6,
                'rotation': 0xfa
            }),
            TweenMax['to']($('#ss_spiral'), 0x1, {
                'alpha': 0x0,
                'onComplete': function() {
                    resetSpecialSummon();
                }
            }),
            playSound(SpecialSummon),
            _0x2f5472 && endAction();
        }
    });
}
function olSummon(_0x4ef16a, _0x4979c5) {
    var _0x50e65f = removeFromExtra(_0x4ef16a, {
        'id': _0x4979c5['start_id']
    })
      , _0x2afea8 = getFieldCard(_0x4ef16a, {
        'id': _0x4979c5['end_id']
    })
      , _0x28c1be = [parseInt(_0x2afea8['css']('left')), parseInt(_0x2afea8['css']('top'))];
    _0x50e65f['data']('xyz_arr')['push'](_0x2afea8);
    while (_0x2afea8['data']('xyz_arr')['length'] > 0x0) {
        _0x50e65f['data']('xyz_arr')['push'](_0x2afea8['data']('xyz_arr')[0x0]),
        _0x2afea8['data']('xyz_arr')['splice'](0x0, 0x1);
    }
    _0x50e65f['data']('face_down', ![]),
    _0x50e65f['data']('cardfront')['reinitialize'](_0x4979c5['card']),
    replaceCard(_0x4ef16a, _0x50e65f, _0x2afea8),
    specialSummon(_0x4ef16a, _0x4979c5, _0x28c1be, _0x50e65f, ![]),
    updateXyzMaterials(_0x4ef16a, _0x50e65f, !![]),
    viewing['indexOf']('Extra') >= 0x0 && _0x4ef16a['username'] == username && viewCards(_0x4ef16a['extra_arr']);
}
function summonToken(_0x15236d, _0x16bed9) {
    awaiting_token = ![];
    var _0x40e099 = _0x16bed9['token'] ? _0x16bed9['token'] : _0x15236d['token']
      , _0x4db004 = newDuelCard(_0x15236d);
    _0x4db004['data']('id', _0x16bed9['id']),
    _0x4db004['data']('inATK', ![]),
    _0x4db004['data']('inDEF', !![]),
    _0x4db004['data']('face_down', ![]),
    _0x4db004['data']('cardfront')['initializeFromData']({
        'name': 'Token',
        'treated_as': 'Token',
        'effect': 'This\x20card\x20can\x20be\x20used\x20as\x20any\x20Token',
        'card_type': 'Monster',
        'monster_color': 'Token',
        'pic': TOKEN_START + _0x40e099 + '.jpg',
        'atk': rated ? null : '0',
        'def': rated ? null : '0'
    }),
    _0x15236d['all_cards_arr']['push'](_0x4db004);
    var _0x4b9167 = getNextMonsterZone(_0x15236d, _0x4db004, _0x16bed9);
    TweenMax['to'](_0x4db004, 0x0, {
        'left': _0x4b9167[0x0],
        'top': _0x4b9167[0x1],
        'rotationY': ABOUT_ZERO,
        'rotation': _0x15236d['defRot'],
        'scale': 0.1485
    }),
    $('#field')['append'](_0x4db004),
    _0x4db004['onRotate'](!![]),
    playSound(SpecialSummon),
    $('#ss_glow')['show'](),
    $('#ss_spiral')['show'](),
    TweenMax['to']($('#ss_glow'), 0x0, {
        'left': _0x4b9167[0x0],
        'top': _0x4b9167[0x1]
    }),
    TweenMax['to']($('#ss_glow'), 0.7, {
        'scale': 0x6,
        'rotation': -0xfa
    }),
    TweenMax['to']($('#ss_glow'), 0x1, {
        'alpha': 0x0
    }),
    TweenMax['to']($('#ss_spiral'), 0x0, {
        'left': _0x4b9167[0x0],
        'top': _0x4b9167[0x1]
    }),
    TweenMax['to']($('#ss_spiral'), 0.7, {
        'scale': 0x6,
        'rotation': 0xfa
    }),
    TweenMax['to']($('#ss_spiral'), 0x1, {
        'alpha': 0x0,
        'onComplete': function() {
            resetSpecialSummon(),
            duelist && _0x15236d != Player1() && _0x4db004['addClass']('target'),
            endAction();
        }
    });
}
function removeToken(_0x44819d, _0x3e34ef) {
    var _0x42af1b = removeFromField(_0x44819d, _0x3e34ef);
    _0x42af1b['data']('owner')['all_cards_arr']['splice'](_0x42af1b['data']('owner')['all_cards_arr']['indexOf'](_0x42af1b), 0x1),
    _0x42af1b['remove'](),
    _0x42af1b = null,
    endAction();
}
function flip(_0x2e0615, _0x290f85) {
    var _0x2c979d = getFieldCard(_0x2e0615, _0x290f85);
    _0x2c979d['data']('inATK', ![]),
    _0x2c979d['data']('inDEF', !![]),
    _0x2c979d['data']('face_down', ![]),
    $('#field')['append'](_0x2c979d),
    _0x2c979d['data']('cardfront')['reinitialize'](_0x290f85['card']),
    TweenMax['to'](_0x2c979d, easeSeconds, {
        'rotation': _0x2e0615['defRot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    }),
    playSound(Flip);
}
function flipSummon(_0x30a722, _0x3b330d) {
    var _0x112958 = getFieldCard(_0x30a722, _0x3b330d);
    _0x112958['data']('inATK', !![]),
    _0x112958['data']('inDEF', ![]),
    _0x112958['data']('face_down', ![]),
    $('#field')['append'](_0x112958),
    _0x112958['data']('cardfront')['reinitialize'](_0x3b330d['card']),
    TweenMax['to'](_0x112958, easeSeconds, {
        'rotation': _0x30a722['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {}
    }),
    updateXyzMaterials(_0x30a722, _0x112958),
    playSound(Flip);
}
function toATK(_0x505cc3, _0x2f031d) {
    var _0x257371 = getFieldCard(_0x505cc3, _0x2f031d);
    _0x257371['data']('inATK', !![]),
    _0x257371['data']('inDEF', ![]),
    _0x257371['data']('face_down', ![]),
    $('#field')['append'](_0x257371),
    _0x257371['data']('cardfront')['reinitialize'](_0x2f031d['card']),
    TweenMax['to'](_0x257371, easeSeconds, {
        'rotation': _0x505cc3['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {}
    }),
    updateXyzMaterials(_0x505cc3, _0x257371),
    playSound(Swap);
}
function toDEF(_0x24ab86, _0x4bfa2e) {
    var _0x6b6104 = getFieldCard(_0x24ab86, _0x4bfa2e);
    _0x6b6104['data']('inATK', ![]),
    _0x6b6104['data']('inDEF', !![]),
    _0x6b6104['data']('face_down', !!_0x4bfa2e['face_down']),
    $('#field')['append'](_0x6b6104),
    _0x6b6104['data']('cardfront')['reinitialize'](_0x4bfa2e['card']);
    var _0xa4bba = ABOUT_ZERO;
    _0x4bfa2e['face_down'] ? (playSound(Flip),
    _0xa4bba = 0xb4 + ABOUT_ZERO) : playSound(Swap),
    TweenMax['to'](_0x6b6104, easeSeconds, {
        'rotation': _0x24ab86['defRot'],
        'rotationY': _0xa4bba,
        'ease': Linear['easeNone'],
        'onComplete': function() {}
    }),
    setTimeout(function() {
        updateXyzMaterials(_0x24ab86, _0x6b6104);
    }, automatic ? 0x0 : 0x0);
}
function activateST(_0x422e97, _0xabbca1) {
    var _0x32dd3e, _0x49e066 = getFieldCard(_0x422e97, _0xabbca1);
    !_0x49e066 ? (_0x49e066 = removeCard(_0x422e97, _0xabbca1),
    _0x32dd3e = getNextSTZone(_0x422e97, _0x49e066, _0xabbca1)) : _0x32dd3e = [parseInt(_0x49e066['css']('left')), parseInt(_0x49e066['css']('top'))],
    _0x49e066['data']('cardfront')['reinitialize'](_0xabbca1['card']),
    _0x49e066['data']('inATK', !![]),
    _0x49e066['data']('inDEF', ![]),
    _0x49e066['data']('face_down', ![]),
    $('#field')['append'](_0x49e066),
    TweenMax['to'](_0x49e066, easeSeconds, {
        'left': _0x32dd3e[0x0],
        'top': _0x32dd3e[0x1],
        'scale': 0.1485,
        'rotation': _0x422e97['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    }),
    playSound(Activate),
    questionE(_0x49e066);
}
function toST(_0x1fda14, _0x58fb59) {
    var _0xc72038 = getFieldCard(_0x1fda14, _0x58fb59);
    !_0xc72038 && (_0xc72038 = removeCard(_0x1fda14, _0x58fb59),
    !_0xc72038 && (_0xc72038 = removeFromGY(_0x1fda14['opponent'], _0x58fb59),
    !_0xc72038 && (_0xc72038 = removeFromBanished(_0x1fda14['opponent'], _0x58fb59))));
    _0xc72038['data']('cardfront')['reinitialize'](_0x58fb59['card']),
    _0xc72038['data']('inATK', !![]),
    _0xc72038['data']('inDEF', ![]),
    _0xc72038['data']('face_down', ![]);
    var _0x5995b1 = getNextSTZone(_0x1fda14, _0xc72038, _0x58fb59);
    $('#field')['append'](_0xc72038),
    TweenMax['to'](_0xc72038, easeSeconds, {
        'left': _0x5995b1[0x0],
        'top': _0x5995b1[0x1],
        'scale': 0.1485,
        'rotation': _0x1fda14['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    });
}
function setMonster(_0x3234b5, _0x171ff5) {
    var _0x5afd45, _0x4b8d8d = getFieldCard(_0x3234b5, _0x171ff5);
    !_0x4b8d8d ? (_0x4b8d8d = removeCard(_0x3234b5, _0x171ff5),
    _0x5afd45 = getNextMonsterZone(_0x3234b5, _0x4b8d8d, _0x171ff5),
    playSound(FaceDown)) : (_0x5afd45 = [parseInt(_0x4b8d8d['css']('left')), parseInt(_0x4b8d8d['css']('top'))],
    playSound(Flip)),
    _0x4b8d8d['data']('inDEF', !![]),
    _0x4b8d8d['data']('face_down', !![]),
    _0x4b8d8d['data']('counters', 0x0),
    _0x4b8d8d['data']('cardfront')['reinitialize'](_0x171ff5['card']),
    _0x4b8d8d['data']('new_atk', null),
    _0x4b8d8d['data']('new_def', null),
    $('#field')['append'](_0x4b8d8d),
    TweenMax['to'](_0x4b8d8d, easeSeconds, {
        'left': _0x5afd45[0x0],
        'top': _0x5afd45[0x1],
        'scale': 0.1485,
        'rotation': _0x3234b5['defRot'],
        'rotationY': 0xb4 + ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {}
    }),
    updateXyzMaterials(_0x3234b5, _0x4b8d8d);
}
function setST(_0x560b00, _0x1f1ec0) {
    if (_0x1f1ec0['zone'] == 'F-1') {
        setFieldSpell(_0x560b00, _0x1f1ec0);
        return;
    }
    var _0x4c7e25, _0x1649e9 = getFieldCard(_0x560b00, _0x1f1ec0);
    !_0x1649e9 ? (_0x1649e9 = removeCard(_0x560b00, _0x1f1ec0),
    _0x4c7e25 = getNextSTZone(_0x560b00, _0x1649e9, _0x1f1ec0),
    playSound(FaceDown)) : (_0x4c7e25 = [parseInt(_0x1649e9['css']('left')), parseInt(_0x1649e9['css']('top'))],
    playSound(Flip)),
    _0x1649e9['data']('face_down', !![]),
    _0x1649e9['data']('cardfront')['reinitialize'](_0x1f1ec0['card']),
    $('#field')['append'](_0x1649e9),
    TweenMax['to'](_0x1649e9, easeSeconds, {
        'left': _0x4c7e25[0x0],
        'top': _0x4c7e25[0x1],
        'scale': 0.1485,
        'rotation': _0x560b00['rot'],
        'rotationY': 0xb4 + ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    });
}
function activateFieldSpell(_0x4a4661, _0x56a343) {
    var _0x2327d8 = getFieldCard(_0x4a4661, _0x56a343);
    !_0x2327d8 && (_0x2327d8 = removeCard(_0x4a4661, _0x56a343),
    !_0x2327d8 && (_0x2327d8 = removeCard(_0x4a4661['opponent'], _0x56a343))),
    _0x2327d8['data']('cardfront')['reinitialize'](_0x56a343['card']),
    _0x2327d8['data']('face_down', ![]),
    _0x4a4661['fieldSpell'] = _0x2327d8,
    tag_duel && (_0x4a4661['partner']['fieldSpell'] = _0x2327d8),
    updateController(_0x4a4661, _0x2327d8),
    $('#field')['append'](_0x2327d8),
    TweenMax['to'](_0x2327d8, easeSecondsBanish, {
        'left': _0x4a4661['fieldSpellX'],
        'top': _0x4a4661['fieldSpellY'],
        'scale': 0.1485,
        'rotation': _0x4a4661['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            setFieldSpellPic(_0x4a4661, _0x2327d8),
            endAction();
        }
    }),
    playSound(Activate);
}
function activateFieldSpell2(_0x2e6f9a, _0x379dcd) {
    var _0x4f5ebe = getFieldCard(_0x2e6f9a, _0x379dcd);
    !_0x4f5ebe && (_0x4f5ebe = removeCard(_0x2e6f9a, _0x379dcd)),
    _0x4f5ebe['data']('cardfront')['reinitialize'](_0x379dcd['card']),
    _0x4f5ebe['data']('face_down', ![]),
    _0x2e6f9a['opponent']['fieldSpell'] = _0x4f5ebe,
    tag_duel && (_0x2e6f9a['opponent']['partner']['fieldSpell'] = _0x4f5ebe),
    updateController(_0x2e6f9a['opponent'], _0x4f5ebe),
    $('#field')['append'](_0x4f5ebe),
    TweenMax['to'](_0x4f5ebe, easeSecondsBanish, {
        'left': _0x2e6f9a['opponent']['fieldSpellX'],
        'top': _0x2e6f9a['opponent']['fieldSpellY'],
        'scale': 0.1485,
        'rotation': _0x2e6f9a['opponent']['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            setFieldSpellPic(_0x2e6f9a['opponent'], _0x4f5ebe),
            endAction();
        }
    }),
    playSound(Activate);
}
function setFieldSpell(_0xb710ac, _0x19a55a) {
    var _0x5e32ac = getFieldCard(_0xb710ac, _0x19a55a);
    !_0x5e32ac ? (_0x5e32ac = removeCard(_0xb710ac, _0x19a55a),
    playSound(FaceDown)) : playSound(Flip),
    _0x5e32ac['data']('face_down', !![]),
    _0xb710ac['fieldSpell'] = _0x5e32ac,
    tag_duel && (_0xb710ac['partner']['fieldSpell'] = _0x5e32ac),
    $('#field')['append'](_0x5e32ac),
    TweenMax['to'](_0x5e32ac, easeSeconds, {
        'left': _0xb710ac['fieldSpellX'],
        'top': _0xb710ac['fieldSpellY'],
        'scale': 0.1485,
        'rotation': _0xb710ac['rot'],
        'rotationY': 0xb4 + ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            updateController(_0xb710ac, _0x5e32ac),
            endAction();
        }
    }),
    removeFieldSpellPic();
}
function setFieldSpell2(_0x20c7d1, _0x2f3049) {
    var _0x5bc3eb = removeCard(_0x20c7d1, _0x2f3049);
    _0x5bc3eb['data']('cardfront')['reinitialize'](_0x2f3049['card']),
    _0x5bc3eb['data']('face_down', !![]),
    _0x20c7d1['opponent']['fieldSpell'] = _0x5bc3eb,
    tag_duel && (_0x20c7d1['opponent']['partner']['fieldSpell'] = _0x5bc3eb),
    updateController(_0x20c7d1['opponent'], _0x5bc3eb),
    $('#field')['append'](_0x5bc3eb),
    TweenMax['to'](_0x5bc3eb, easeSecondsBanish, {
        'left': _0x20c7d1['opponent']['fieldSpellX'],
        'top': _0x20c7d1['opponent']['fieldSpellY'],
        'scale': 0.1485,
        'rotation': _0x20c7d1['opponent']['rot'],
        'rotationY': 0xb4 + ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            _0x20c7d1['opponent']['username'] == username && updateController(_0x20c7d1['opponent'], _0x5bc3eb),
            endAction();
        }
    }),
    playSound(FaceDown);
}
function setFieldSpellPic(_0x2bd4e8, _0x138f1e) {
    if (_0x138f1e['data']('face_down'))
        return;
    var _0x5524c2 = _0x2bd4e8['fieldSpell']['data']('cardfront')['data']('id')
      , _0x579df2 = CARD_IMAGES_START + _0x5524c2 + '.jpg';
    _0x579df2 = _0x579df2['replace']('/low-res/', '/card-pics/')['replace']('/small/', '/card-pics/'),
    $('#field_spell_pic')['attr']('src', _0x579df2);
}
function setFieldSpellPic(_0x15f562, _0x58dded) {
    var _0x19c2fc = _0x15f562['fieldSpell']['data']('cardfront')['find']('.pic')['attr']('src');
    $('#field_spell_pic')['attr']('src', _0x19c2fc),
    $('#field_spell_pic')['attr']('src', _0x19c2fc['replace']('/low-res/', '/card-pics/')['replace']('/small/', '/card-pics/'));
}
function removeFieldSpellPic() {
    if ($('#field')['is'](':visible')) {
        if (player1['fieldSpell'] && !player1['fieldSpell']['data']('face_down')) {
            setFieldSpellPic(player1, player1['fieldSpell']);
            return;
        }
        if (player2['fieldSpell'] && !player2['fieldSpell']['data']('face_down')) {
            setFieldSpellPic(player2, player2['fieldSpell']);
            return;
        }
    }
    $('#field_spell_pic')['attr']('src', IMAGES_START + 'blank.png');
}
function activatePendulumLeft(_0x2e1495, _0x2f6287) {
    var _0x34c66a = getFieldCard(_0x2e1495, _0x2f6287);
    !_0x34c66a && playSound(Activate),
    _0x34c66a = removeCard(_0x2e1495, _0x2f6287),
    _0x34c66a['data']('cardfront')['reinitialize'](_0x2f6287['card']),
    links ? (_0x2e1495['s1'] = _0x34c66a,
    tag_duel && (_0x2e1495['partner']['s1'] = _0x34c66a)) : (_0x2e1495['pendulumLeft'] = _0x34c66a,
    tag_duel && (_0x2e1495['partner']['pendulumLeft'] = _0x34c66a)),
    $('#field')['append'](_0x34c66a),
    TweenMax['to'](_0x34c66a, easeSeconds, {
        'left': _0x2e1495['pendulumLeftX'],
        'top': _0x2e1495['pendulumY'],
        'scale': 0.1485,
        'rotation': _0x2e1495['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    });
}
function activatePendulumRight(_0x1ede17, _0x253d17) {
    var _0x5ad4d9 = getFieldCard(_0x1ede17, _0x253d17);
    !_0x5ad4d9 && playSound(Activate),
    _0x5ad4d9 = removeCard(_0x1ede17, _0x253d17),
    _0x5ad4d9['data']('cardfront')['reinitialize'](_0x253d17['card']),
    links ? (_0x1ede17['s5'] = _0x5ad4d9,
    tag_duel && (_0x1ede17['partner']['s5'] = _0x5ad4d9)) : (_0x1ede17['pendulumRight'] = _0x5ad4d9,
    tag_duel && (_0x1ede17['partner']['pendulumRight'] = _0x5ad4d9)),
    $('#field')['append'](_0x5ad4d9),
    TweenMax['to'](_0x5ad4d9, easeSeconds, {
        'left': _0x1ede17['pendulumRightX'],
        'top': _0x1ede17['pendulumY'],
        'scale': 0.1485,
        'rotation': _0x1ede17['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    });
}
function changeControl(_0x90521d, _0x43ba98) {
    var _0x3808d5 = removeFromField(_0x90521d, _0x43ba98, !![]);
    !_0x3808d5 && automatic && (_0x3808d5 = removeFromField(_0x90521d['opponent'], _0x43ba98, !![]));
    _0x3808d5['data']('cardfront')['reinitialize'](_0x43ba98['card']),
    $('#field')['append'](_0x3808d5);
    var _0x22dbde;
    _0x43ba98['zone'] && _0x43ba98['zone']['indexOf']('2-') >= 0x0 ? _0x22dbde = getNextMonsterZone(_0x90521d, _0x3808d5, _0x43ba98) : _0x22dbde = getNextMonsterZone(_0x90521d['opponent'], _0x3808d5, _0x43ba98);
    var _0x2fae01 = _0x3808d5['data']('controller')['rot'];
    _0x3808d5['data']('inDEF') && (_0x2fae01 = _0x3808d5['data']('controller')['defRot']),
    TweenMax['to'](_0x3808d5, easeSeconds, {
        'left': _0x22dbde[0x0],
        'top': _0x22dbde[0x1],
        'rotation': _0x2fae01,
        'ease': Linear['easeNone'],
        'onComplete': function() {}
    }),
    updateXyzMaterials(_0x3808d5['data']('controller'), _0x3808d5);
}
function addRandomCardFromDeckToHand(_0x223f26, _0x4b0428) {
    var _0x50fb45 = removeFromDeck(_0x223f26, _0x4b0428);
    _0x50fb45['data']('cardfront')['reinitialize'](_0x4b0428['card']),
    determineHandPosition(_0x223f26);
    var _0x50a66a = 0xb4 + ABOUT_ZERO;
    (isPlayer1(_0x223f26['username']) && show_cards || show_cards == 0x2) && (_0x50a66a = ABOUT_ZERO),
    _0x223f26['hand_arr']['push'](_0x50fb45),
    organizeHand(_0x223f26),
    TweenMax['to'](_0x50fb45, easeSeconds2, {
        'left': handDestination,
        'top': _0x223f26['handY'],
        'scale': 0.25,
        'rotation': _0x223f26['rot'],
        'rotationY': _0x50a66a,
        'onComplete': function() {
            shuffleHand(_0x223f26, _0x4b0428);
        }
    });
}
function turnTopCardOfDeckFU(_0x2ece7e, _0x289d0c) {
    var _0x32add2 = _0x2ece7e['main_arr'][0x0];
    _0x32add2['data']('face_up', !![]),
    _0x32add2['data']('cardfront')['reinitialize'](_0x289d0c['card']),
    TweenMax['to'](_0x32add2, easeSeconds, {
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    });
}
function flipDeck(_0x19eef9, _0x5ea3db) {
    _0x19eef9['deck_face_up'] = !_0x19eef9['deck_face_up'],
    _0x19eef9['main_arr'] = shuffle(_0x19eef9, _0x19eef9['main_arr'], _0x5ea3db['ids']);
    for (var _0x473be0 = 0x0; _0x473be0 < _0x19eef9['main_arr']['length']; _0x473be0++) {
        _0x5ea3db['deck'] && _0x19eef9['main_arr'][_0x473be0]['data']('cardfront')['reinitialize'](_0x5ea3db['deck'][_0x473be0]);
    }
    shiftDeck(_0x19eef9),
    endAction();
}
function cynetStorm(_0x357c3d, _0x4275ad) {
    var _0x4437ff = removeFromExtra(_0x357c3d, _0x4275ad);
    _0x4437ff['data']('face_down', ![]),
    _0x4437ff['data']('cardfront')['reinitialize'](_0x4275ad['card']),
    _0x357c3d['extra_arr'] = shuffle(_0x357c3d, _0x357c3d['extra_arr'], _0x4275ad['deck']),
    shiftExtra(_0x357c3d),
    addExtraChildren(_0x4437ff['data']('owner')),
    $('#field')['append'](_0x4437ff),
    _0x4437ff['data']('owner')['banished_arr']['unshift'](_0x4437ff),
    TweenMax['to'](_0x4437ff, easeSeconds, {
        'left': _0x4437ff['data']('owner')['banishedX'],
        'top': _0x4437ff['data']('owner')['banishedY'],
        'rotation': _0x4437ff['data']('owner')['rot'],
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            shiftBanished(_0x4437ff['data']('owner')),
            endAction();
        }
    }),
    addLine(_0x4275ad['username'] + '\x20resolved\x20Cynet\x20Storm'),
    playSound(Banish);
}
function exchangeCards(_0x199310, _0x161b2c) {
    duelist && _0x161b2c['username'] == username && exitViewing();
    var _0x591cc7 = removeFromHand(_0x199310['opponent'], _0x161b2c);
    $('#duel\x20.cards')['append'](_0x591cc7),
    updateController(_0x199310, _0x591cc7),
    _0x199310['hand_arr']['push'](_0x591cc7);
    var _0x1ff063 = 0xb4 + ABOUT_ZERO;
    (isPlayer1(_0x199310['username']) && show_cards || show_cards == 0x2) && (_0x1ff063 = ABOUT_ZERO);
    determineHandPosition(_0x199310);
    if (!duelist)
        organizeHand(_0x199310),
        organizeHand(_0x199310['opponent']);
    else {
        if (viewing == '') {
            for (var _0x545914 = 0x0; _0x545914 < Player1()['opponent']['hand_arr']['length']; _0x545914++) {
                TweenMax['to'](Player1()['opponent']['hand_arr'][_0x545914], 0x0, {
                    'top': Player1()['opponent']['handY'],
                    'scale': 0.25,
                    'rotation': Player1()['opponent']['rot'],
                    'rotationY': 0xb4 + ABOUT_ZERO
                }),
                Player1()['opponent']['hand_arr'][_0x545914]['onRotate']();
            }
            organizeHand(Player1()['opponent']);
        }
    }
    TweenMax['to'](_0x591cc7, easeSeconds, {
        'left': handDestination,
        'top': _0x591cc7['data']('controller')['handY'],
        'scale': 0.25,
        'rotation': _0x591cc7['data']('controller')['rot'],
        'rotationY': _0x1ff063,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            (!duelist || viewing == '') && shuffleHand(_0x199310, _0x161b2c),
            endAction();
        }
    });
}
function attachTopCardFromDeck2(_0x3f5211, _0x53f93f) {
    var _0xebfd00 = getFieldCard(_0x3f5211['opponent'], {
        'id': _0x53f93f['start_id']
    })
      , _0x11abd4 = removeFromDeck(_0x3f5211, {
        'id': _0x53f93f['end_id']
    });
    _0x11abd4['data']('face_up', ![]),
    _0x11abd4['data']('cardfront')['reinitialize'](_0x53f93f['card']),
    _0xebfd00['data']('xyz_arr')['push'](_0x11abd4),
    updateXyzMaterials(_0x3f5211['opponent'], _0xebfd00);
}
function detachAllMaterials(_0x2e3791) {
    while (array(_0x2e3791['data']('xyz_arr'))['length'] > 0x0) {
        var _0x215ec5 = _0x2e3791['data']('xyz_arr')['splice'](0x0, 0x1)[0x0];
        _0x215ec5['data']('owner')['grave_arr']['unshift'](_0x215ec5),
        _0x215ec5['removeClass']('xyzmaterial'),
        updateController(_0x215ec5['data']('owner'), _0x215ec5),
        $('#field')['append'](_0x215ec5),
        TweenMax['to'](_0x215ec5, easeSeconds, {
            'left': _0x215ec5['data']('owner')['graveX'],
            'top': _0x215ec5['data']('owner')['graveY'],
            'scale': 0.1485,
            'rotation': _0x215ec5['data']('owner')['rot'],
            'rotationY': ABOUT_ZERO,
            'onComplete': function() {
                shiftGrave(Player1()),
                shiftGrave(Player1()['opponent']);
            }
        });
    }
}
function getFieldCard(_0x496c3d, _0x548684) {
    var _0x4a5270 = [_0x496c3d['m1'], _0x496c3d['m2'], _0x496c3d['m3'], _0x496c3d['m4'], _0x496c3d['m5'], _0x496c3d['s1'], _0x496c3d['s2'], _0x496c3d['s3'], _0x496c3d['s4'], _0x496c3d['s5'], _0x496c3d['fieldSpell'], _0x496c3d['pendulumLeft'], _0x496c3d['pendulumRight'], linkLeft, linkRight, _0x496c3d['skillCard']];
    for (var _0x2ba4f2 of _0x4a5270) {
        if (_0x2ba4f2 == null)
            continue;
        if (_0x2ba4f2['data']('id') == _0x548684['id'])
            return _0x2ba4f2;
    }
    return null;
}
function replaceCard(_0x425acf, _0x445e0c, _0x1ce2ba) {
    var _0x435fa9 = [_0x425acf['m1'], _0x425acf['m2'], _0x425acf['m3'], _0x425acf['m4'], _0x425acf['m5'], linkLeft, linkRight];
    for (var _0x3086f6 of _0x435fa9) {
        if (_0x3086f6 == _0x1ce2ba)
            continue;
        var _0x437e65 = getZoneByCard(_0x425acf, _0x1ce2ba);
        removeFromField(_0x425acf, {
            'id': _0x1ce2ba['data']('id')
        }),
        getNextMonsterZone(_0x425acf, _0x445e0c, {
            'zone': _0x437e65
        }),
        updateController(_0x425acf, _0x445e0c);
        return;
    }
}
function updateXyzMaterials(_0x52a77e, _0x3e5efb, _0x3f793f, _0x23b7d8) {
    _0x3f793f !== ![] && (_0x3f793f = !![]);
    var _0x2e9036 = easeSeconds;
    _0x23b7d8 && (_0x2e9036 = 0x0);
    var _0xe7dd40 = 0x0
      , _0x358f48 = 0x0
      , _0x1aa3f8 = 0x0
      , _0x1084c9 = 0x0
      , _0x5b85b0 = 0x0
      , _0x509c7c = 0x0
      , _0x51e509 = _0x52a77e['monsterY']
      , _0x3d8415 = ![]
      , _0xb8ed04 = ![];
    switch (_0x3e5efb) {
    case _0x52a77e['m1']:
        _0xe7dd40 = _0x52a77e['m1xStart'],
        _0x358f48 = _0x52a77e['m1xEnd'];
        break;
    case _0x52a77e['m2']:
        _0xe7dd40 = _0x52a77e['m2xStart'],
        _0x358f48 = _0x52a77e['m2xEnd'];
        break;
    case _0x52a77e['m3']:
        _0xe7dd40 = _0x52a77e['m3xStart'],
        _0x358f48 = _0x52a77e['m3xEnd'];
        break;
    case _0x52a77e['m4']:
        _0xe7dd40 = _0x52a77e['m4xStart'],
        _0x358f48 = _0x52a77e['m4xEnd'];
        break;
    case _0x52a77e['m5']:
        _0xe7dd40 = _0x52a77e['m5xStart'],
        _0x358f48 = _0x52a77e['m5xEnd'];
        break;
    case linkLeft:
        _0xb8ed04 = !![],
        _0xe7dd40 = linkLeftxStart,
        _0x358f48 = linkLeftxEnd,
        _0x51e509 = linkY;
        _0x52a77e != Player1() && _0x3e5efb['data']('xyz_arr')['length'] > 0x0 && _0x3e5efb['data']('inDEF') == !![] && (_0xe7dd40 += 0x1b,
        _0x358f48 += 0x1b,
        _0x3d8415 = !![]);
        break;
    case linkRight:
        _0xb8ed04 = !![],
        _0xe7dd40 = linkRightxStart,
        _0x358f48 = linkRightxEnd,
        _0x51e509 = linkY;
        _0x52a77e != Player1() && _0x3e5efb['data']('xyz_arr')['length'] > 0x0 && _0x3e5efb['data']('inDEF') == !![] && (_0xe7dd40 += 0x1b,
        _0x358f48 += 0x1b,
        _0x3d8415 = !![]);
        break;
    }
    _0x3e5efb['data']('inDEF') != 0x1 ? _0x1aa3f8 = _0xe7dd40 : (_0x1aa3f8 = (_0x358f48 + _0xe7dd40) / 0x2,
    _0x5b85b0 = 0x1,
    _0x3e5efb['data']('xyz_arr')['length'] == 0x1 && (_0x509c7c = 13.5,
    _0x5b85b0 = 0x0));
    _0x3e5efb['data']('xyz_arr')['length'] == 0x0 && (_0x1aa3f8 = (_0x358f48 + _0xe7dd40) / 0x2,
    _0x509c7c = 0x0);
    if (_0x3d8415)
        _0x1aa3f8 -= 0x1b;
    else
        _0xb8ed04 && _0x52a77e != Player1() && _0x3e5efb['data']('xyz_arr')['length'] > 0x0 && (_0x1aa3f8 += 0x1b,
        _0xe7dd40 += 0x1b,
        _0x358f48 += 0x1b);
    for (var _0x59ee66 = _0x3e5efb['data']('xyz_arr')['length'] - 0x1; _0x59ee66 > -0x1; _0x59ee66--) {
        var _0x5ce9f0 = _0x3e5efb['data']('xyz_arr')[_0x59ee66];
        _0x5ce9f0['addClass']('xyzmaterial'),
        _0x5ce9f0['removeClass']('target'),
        updateController(_0x52a77e, _0x5ce9f0),
        $('#field')['append'](_0x5ce9f0),
        _0x52a77e == player1 || _0x52a77e == player3 ? TweenMax['to'](_0x5ce9f0, _0x2e9036, {
            'left': _0xe7dd40 + (0x1b / (_0x3e5efb['data']('xyz_arr')['length'] - _0x5b85b0) * (_0x59ee66 + 0x1 - _0x5b85b0) - _0x509c7c),
            'top': _0x51e509,
            'scale': 0.1485,
            'rotation': _0x52a77e['rot'],
            'rotationY': ABOUT_ZERO,
            'z': _0x3e5efb['data']('xyz_arr')['length'] - _0x59ee66,
            'ease': Linear['easeNone']
        }) : TweenMax['to'](_0x5ce9f0, _0x2e9036, {
            'left': _0xe7dd40 - (0x1b / (_0x3e5efb['data']('xyz_arr')['length'] - _0x5b85b0) * (_0x59ee66 + 0x1 - _0x5b85b0) - _0x509c7c),
            'top': _0x51e509,
            'scale': 0.1485,
            'rotation': _0x52a77e['rot'],
            'rotationY': ABOUT_ZERO,
            'z': _0x3e5efb['data']('xyz_arr')['length'] - _0x59ee66,
            'ease': Linear['easeNone']
        });
    }
    $('#field')['append'](_0x3e5efb),
    TweenMax['set'](_0x3e5efb, {
        'z': _0x3e5efb['data']('xyz_arr')['length'] + 0x1
    }),
    TweenMax['to'](_0x3e5efb, _0x2e9036, {
        'left': _0x1aa3f8,
        'top': _0x51e509,
        'scale': 0.1485,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            _0x3f793f && endAction();
        }
    });
}
function removeXyzMaterial(_0x2f4685, _0x565deb, _0x5d1a9c) {
    var _0x14d44c = [_0x2f4685['m1'], _0x2f4685['m2'], _0x2f4685['m3'], _0x2f4685['m4'], _0x2f4685['m5'], linkLeft, linkRight];
    for (var _0x51de34 = 0x0; _0x51de34 < _0x14d44c['length']; _0x51de34++) {
        if (!_0x14d44c[_0x51de34])
            continue;
        for (var _0xdffda6 = 0x0; _0xdffda6 < _0x14d44c[_0x51de34]['data']('xyz_arr')['length']; _0xdffda6++) {
            if (_0x14d44c[_0x51de34]['data']('xyz_arr')[_0xdffda6]['data']('id') == _0x565deb['id']) {
                var _0x2378af = _0x14d44c[_0x51de34]['data']('xyz_arr')['splice'](_0xdffda6, 0x1)[0x0];
                return _0x2378af['removeClass']('xyzmaterial'),
                _0x2378af['detach'](),
                _0x5d1a9c && updateXyzMaterials(_0x2f4685, _0x14d44c[_0x51de34]),
                _0x2378af;
            }
        }
    }
    return null;
}
function shuffleDeck(_0x22f4d3, _0x597132) {
    if (_0x22f4d3['main_arr']['length'] == 0x0)
        return;
    var _0x7ff337 = 0x0
      , _0x2f0386 = parseInt(_0x22f4d3['main_arr'][0x0]['css']('left'))
      , _0x23b342 = setInterval(function() {
        for (var _0x4875f1 = 0x0; _0x4875f1 < _0x22f4d3['main_arr']['length']; _0x4875f1++) {
            var _0x1da3bb = random(0x18)
              , _0x5e027b = -random(0x18);
            _0x22f4d3['main_arr'][_0x4875f1]['css']('left', _0x2f0386 + (_0x1da3bb + _0x5e027b));
        }
        _0x7ff337++,
        _0x7ff337 > 0xa && (clearInterval(_0x23b342),
        updateIDs(_0x22f4d3['main_arr'], _0x597132['deck'], _0x597132['prev']),
        _0x22f4d3['main_arr'] = shuffle(_0x22f4d3, _0x22f4d3['main_arr'], _0x597132['deck']),
        shiftDeck(_0x22f4d3),
        endAction());
    }, 0x2a);
    playSound(ShuffleSound);
}
function leftDuel(_0x3f3d79, _0x177da1) {
    addLine(escapeHTML(_0x3f3d79['username']) + '\x20has\x20left\x20the\x20duel');
    if (_0x3f3d79 == Player1())
        $('#gone1')['show']();
    else
        _0x3f3d79 == Player2() && $('#gone2')['show']();
    $('#rematch_btn')['disable'](!![]);
}
function quitDuel(_0x2aea22, _0x1bd9f8) {
    var _0x45d3a3 = ''
      , _0x2dda3e = 'duel';
    match && (_0x2dda3e = 'match');
    stopCountdown();
    if (duel_active) {
        if (duelist)
            !isPlayer1(_0x1bd9f8['username']) ? (_0x45d3a3 = 'Your\x20opponent\x20quit\x20the\x20duel.\x20You\x20win\x20the\x20' + _0x2dda3e + '!',
            rated && (_0x45d3a3 += '\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0x1bd9f8['player1']['points'],
            total_wins++),
            displayBox('Opponent\x20Quit', _0x45d3a3)) : (_0x45d3a3 = 'Your\x20partner\x20quit\x20the\x20duel.\x20You\x20lose\x20the\x20' + _0x2dda3e + '!',
            displayBox('Partner\x20Quit', _0x45d3a3));
        else {
            if (solo)
                return;
            $('#over')['show'](),
            $('#over\x20.body_txt')['html']('The\x20duel\x20has\x20ended\x20because\x20' + escapeHTML(_0x2aea22['username']) + '\x20has\x20quit.<br><br><br><br>' + escapeHTML(_0x2aea22['opponent']['username']) + '\x20wins\x20the\x20' + _0x2dda3e + '!');
        }
        duelOver(_0x1bd9f8);
    }
    $('#rematch_btn')['disable'](!![]);
}
function acceptDraw(_0x2dc1c2, _0x4bd811) {
    var _0x41bffc = '';
    addLine('The\x20players\x20have\x20agreed\x20on\x20a\x20draw');
    if (rated && _0x4bd811['over']) {
        if (_0x4bd811['player1']['points'] > 0x0)
            _0x41bffc = '\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0x4bd811['player1']['points'] + '.';
        else
            _0x4bd811['player1']['points'] < 0x0 ? _0x41bffc = '\x20Your\x20rating\x20has\x20decreased\x20by\x20' + -_0x4bd811['player1']['points'] + '.' : _0x41bffc = '\x20Your\x20rating\x20has\x20remained\x20unchanged.';
    }
    duelist ? (!isPlayer1(_0x4bd811['username']) ? displayBox('Draw\x20Accepted', 'Your\x20opponent\x20accepted\x20your\x20draw\x20offer.' + _0x41bffc) : displayBox('Draw\x20Accepted', 'You\x20accepted\x20your\x20opponent\x27s\x20draw\x20offer.' + _0x41bffc),
    $('#draw_btn')['val']('Offer\x20Draw')) : ($('#over')['show'](),
    $('#over\x20.body_txt')['text']('The\x20players\x20have\x20agreed\x20on\x20a\x20draw.')),
    duelOver(_0x4bd811);
}
function admittedDefeat(_0x13ae11, _0x4f43d0) {
    awaiting_defeat = ![];
    var _0x25172d = ''
      , _0x47942f = 'duel';
    match && (_0x47942f = 'match');
    addLine(escapeHTML(_0x13ae11['username']) + '\x20admitted\x20defeat');
    if (_0x4f43d0['over']) {
        if (duelist) {
            if (isPlayer2(_0x4f43d0['username']))
                _0x25172d = 'Your\x20opponent\x20admitted\x20defeat.\x20You\x20win\x20the\x20' + _0x47942f + '!',
                rated && (_0x25172d += '\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0x4f43d0['player1']['points'],
                total_wins++),
                displayBox('You\x20Win!', _0x25172d);
            else
                _0x4f43d0['username'] == username ? (_0x25172d = 'You\x20admitted\x20defeat.\x20You\x20lose\x20the\x20' + _0x47942f + '!',
                rated && (_0x25172d += '\x20Your\x20rating\x20has\x20decreased\x20by\x20' + -_0x4f43d0['player1']['points']),
                displayBox('You\x20Lose!', _0x25172d)) : (_0x25172d = 'Your\x20partner\x20admitted\x20defeat.\x20You\x20lose\x20the\x20' + _0x47942f + '!',
                displayBox('You\x20Lose!', _0x25172d));
        } else {
            var _0x3a362a = 'The\x20duel\x20has\x20ended\x20because\x20' + escapeHTML(_0x13ae11['username']) + '\x20admitted\x20defeat.';
            _0x4f43d0['over'] && (_0x3a362a += '<br><br><br><br>' + escapeHTML(_0x13ae11['opponent']['username']),
            _0x13ae11['opponent']['partner'] ? _0x3a362a += '\x20&\x20' + escapeHTML(_0x13ae11['opponent']['partner']['username']) + '\x20win\x20the\x20' + _0x47942f + '!' : _0x3a362a += '\x20wins\x20the\x20' + _0x47942f + '!'),
            $('#over\x20.body_txt')['html'](_0x3a362a),
            $('#over')['show']();
        }
    }
    duelOver(_0x4f43d0);
}
function gamelossed(_0x3b9952, _0xdd586d) {
    hideDim();
    if (_0xdd586d['id']) {
        if (_0xdd586d['id'] != duelId)
            return;
    }
    var _0x25d0a0 = ''
      , _0x8a63c6 = 'duel';
    match && (_0x8a63c6 = 'match');
    if (duelist)
        isPlayer1(_0x3b9952['username']) ? (_0x25d0a0 = 'A\x20judge\x20gave\x20you\x20a\x20' + _0xdd586d['type'] + '\x20loss.',
        rated && _0xdd586d['over'] && (_0x25d0a0 += '\x20You\x20lose\x20the\x20' + _0x8a63c6 + '!\x20Your\x20rating\x20has\x20decreased\x20by\x20' + -_0xdd586d['player1']['points']),
        lastJudge = '') : (_0x25d0a0 = 'A\x20judge\x20gave\x20your\x20opponent\x20a\x20' + _0xdd586d['type'] + '\x20loss.',
        rated && _0xdd586d['over'] && (_0x25d0a0 += '\x20You\x20win\x20the\x20' + _0x8a63c6 + '!\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0xdd586d['player1']['points'],
        total_wins++)),
        messageE(_0x25d0a0);
    else {
        var _0x5bb780 = 'The\x20duel\x20has\x20ended\x20because\x20a\x20judge\x20gave\x20' + escapeHTML(_0x3b9952['username']) + '\x20a\x20' + _0xdd586d['type'] + '\x20loss.';
        _0xdd586d['over'] && (_0x5bb780 += '<br><br><br><br>' + escapeHTML(_0x3b9952['opponent']['username']),
        _0x3b9952['opponent']['partner'] ? _0x5bb780 += '\x20&\x20' + escapeHTML(_0x3b9952['opponent']['partner']['username']) + '\x20win\x20the\x20' + _0xdd586d['type'] + '!' : _0x5bb780 += '\x20wins\x20the\x20' + _0xdd586d['type'] + '!'),
        $('#over\x20.body_txt')['html'](_0x5bb780),
        $('#over')['show']();
    }
    addLine('A\x20judge\x20gave\x20' + _0x3b9952['username'] + '\x20a\x20' + _0xdd586d['type'] + '\x20loss'),
    duelOver(_0xdd586d);
}
function loss(_0x4c41a5, _0x1d3cf0) {
    hideDim();
    var _0x56997c = '';
    if (duelist)
        isPlayer1(_0x4c41a5['username']) ? _0x56997c = 'You\x20received\x20a\x20' + _0x1d3cf0['type'] + '\x20loss\x20for\x20' + _0x1d3cf0['reason'] : _0x56997c = 'Your\x20opponent\x20received\x20a\x20' + _0x1d3cf0['type'] + '\x20loss\x20for\x20' + _0x1d3cf0['reason'],
        rated && (_0x4c41a5['username'] == player1['username'] ? _0x56997c += '\x20Your\x20rating\x20has\x20decreased\x20by\x20' + -_0x1d3cf0['player1']['points'] + '.' : _0x56997c += '\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0x1d3cf0['player1']['points'] + '.'),
        messageE(_0x56997c);
    else {
        var _0x11696a = 'The\x20duel\x20has\x20ended\x20because\x20' + escapeHTML(_0x4c41a5['username']) + '\x20received\x20a\x20' + _0x1d3cf0['type'] + '\x20loss\x20for\x20' + _0x1d3cf0['reason'] + '.';
        _0x1d3cf0['over'] && (_0x11696a += '<br><br><br><br>' + escapeHTML(_0x4c41a5['opponent']['username']),
        _0x4c41a5['opponent']['partner'] ? _0x11696a += '\x20&\x20' + escapeHTML(_0x4c41a5['opponent']['partner']['username']) + '\x20win\x20the\x20' + _0x1d3cf0['type'] + '!' : _0x11696a += '\x20wins\x20the\x20' + _0x1d3cf0['type'] + '!'),
        $('#over\x20.body_txt')['html'](_0x11696a),
        $('#over')['show']();
    }
    addLine(_0x4c41a5['username'] + '\x20received\x20a\x20' + _0x1d3cf0['type'] + '\x20loss\x20for\x20' + _0x1d3cf0['reason']),
    duelOver(_0x1d3cf0);
}
function gameCanceled(_0x64681e) {
    hideDim();
    if (_0x64681e['id'] != duelId)
        return;
    var _0x169bc3 = 'Game\x20Canceled';
    _0x64681e['type'] == 'match' && (_0x169bc3 = 'Match\x20Canceled');
    var _0x303d8c = 'The\x20' + _0x64681e['type'] + '\x20has\x20been\x20canceled\x20by\x20a\x20judge.';
    duelist ? (rated && _0x64681e['over'] && (_0x303d8c += '\x20Ratings\x20and\x20experiences\x20are\x20unaffected.'),
    displayBox(_0x169bc3, _0x303d8c),
    playSound(gameLossSound)) : ($('#over\x20.body_txt')['text']('The\x20' + _0x64681e['type'] + '\x20has\x20been\x20canceled\x20by\x20a\x20judge.'),
    $('#over')['show']()),
    addLine('The\x20' + _0x64681e['type'] + '\x20has\x20been\x20canceled\x20by\x20a\x20judge'),
    duelOver(_0x64681e),
    duelist ? ($('#draw_btn')['val']('Offer\x20Draw'),
    $('#draw_btn')['disable'](!![])) : $('#mulligan_btn')['hide']();
}
function duelOver(_0x5aecf8) {
    _0x5aecf8['username'] == username ? playSound(gameLossSound) : playSound(gameWinSound),
    switched && switchDuelists(_0x5aecf8, 'player1', 'player2'),
    $('#avatar1\x20.rating_txt')['text'](_0x5aecf8['player1']['rating'] + '/' + _0x5aecf8['player1']['experience']),
    $('#avatar2\x20.rating_txt')['text'](_0x5aecf8['player2']['rating'] + '/' + _0x5aecf8['player2']['experience']),
    duel_active = ![],
    updateActive(![]),
    $('#defeat_btn')['disable'](!![]),
    $('#host_loss_btn')['disable'](!![]),
    $('#opponent_loss_btn')['disable'](!![]),
    $('#mulligan_btn')['hide'](),
    $('#reset_btn')['hide'](),
    $('#draw_btn')['disable'](![]),
    $('#draw_btn')['val']('View\x20Replay'),
    !duelist && $('#draw_btn')['css']('top', 0x24e),
    $('#draw_btn')['show'](),
    $('#cancel_duel_btn')['disable'](!![]),
    $('#cancel_duel_btn')['hide'](),
    $('#call_admin_btn')['disable'](!![]),
    $('#call_admin_btn')['hide'](),
    $('#rematch_btn')['disable'](![]),
    rated && used_allotted_rematch && $('#rematch_btn')['disable'](!![]),
    duelist && $('#rematch_btn')['show'](),
    awaiting_admin = ![],
    paused = ![],
    $('#pause_btn')['val']('Pause\x20Game'),
    $('#done_siding_btn')['disable'](!![]),
    $('.all_good')['hide'](),
    automatic && removeMenuData();
}
function hideDuelOver() {
    $('#over')['hide']();
}
function showDuelNSFW() {
    $(this)['siblings']('.nsfw')['css']('opacity', 0x0),
    $(this)['siblings']('.nsfw')['hide'](),
    $(this)['hide']();
}
function hideDuelNSFW() {
    if (solo && this == $('#avatar2\x20.rating')[0x0])
        return;
    $(this)['siblings']('.nsfw')['css']('opacity', 0x1),
    $(this)['siblings']('.nsfw')['show'](),
    $(this)['siblings']('.nsfw_btn')['show'](),
    $(this)['siblings']('.nsfw_btn')['val']('Show\x20Image');
}
function newCard(_0x85e1d8, _0x1139db) {
    var _0x2992f4 = newDuelCard(_0x85e1d8);
    _0x85e1d8 == player1 && _0x2992f4['onRotate'](!![]);
    _0x2992f4['data']('controller', null),
    _0x2992f4['data']('id', _0x1139db['id']);
    _0x1139db['card'] && _0x2992f4['data']('cardfront')['initializeFromData'](_0x1139db['card']);
    _0x85e1d8['main_arr']['push'](_0x2992f4),
    _0x85e1d8['all_cards_arr']['push'](_0x2992f4),
    shiftDeck(_0x85e1d8);
    switch (_0x1139db['zone']) {
    case 'Field\x20Spell':
        activateFieldSpell(_0x85e1d8, _0x1139db);
        break;
    case 'S-2':
        _0x1139db['face_down'] ? setST(_0x85e1d8, _0x1139db) : activateST(_0x85e1d8, _0x1139db);
        break;
    default:
        placeSkillCard(_0x85e1d8, _0x1139db);
        break;
    }
    loadSleeves(_0x85e1d8);
    if (_0x1139db['back']) {
        var _0x237b7c = getSkillBack(SKILL_BACKS_START + _0x1139db['back'] + '.jpg', _0x1139db['activation']);
        _0x2992f4['find']('.cardback')['append'](_0x237b7c),
        _0x2992f4['data']('isSkill', !![]);
    }
}
function getSkillBack(_0x3225c0, _0x4fae0d) {
    var _0xc2ae81 = $('<div\x20class=\x22skillback\x22></div>')
      , _0xc67384 = $('<img\x20src=\x22' + _0x3225c0 + '\x22\x20width=\x22400\x22\x20height=\x22580\x22\x20/>')
      , _0x467c66 = $('<span\x20class=\x22skill_txt\x22></span>');
    return _0x467c66['text'](_0x4fae0d),
    _0xc2ae81['append'](_0xc67384),
    _0xc2ae81['append'](_0x467c66),
    _0xc2ae81;
}
function placeSkillCard(_0x19ec39, _0x5de468) {
    var _0x3ae29b = [_0x19ec39['skillCardX'], _0x19ec39['skillCardY']]
      , _0xd6789d = removeCard(_0x19ec39, _0x5de468);
    _0xd6789d['data']('cardfront')['reinitialize'](_0x5de468['card']),
    _0xd6789d['data']('face_down', !![]),
    _0x19ec39['skillCard'] = _0xd6789d;
    tag_duel && (_0x19ec39['partner']['skillCard'] = _0xd6789d);
    var _0x2df72a = 0xb4 + ABOUT_ZERO;
    _0x5de468['face_up'] && (_0xd6789d['data']('face_down', ![]),
    _0x2df72a = ABOUT_ZERO),
    $('#field')['append'](_0xd6789d),
    TweenMax['to'](_0xd6789d, easeSeconds, {
        'left': _0x3ae29b[0x0],
        'top': _0x3ae29b[0x1],
        'scale': 0.1485,
        'rotation': _0x19ec39['rot'],
        'rotationY': _0x2df72a,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    });
}
function activateSkill(_0x29f2d6, _0x2378a5) {
    var _0x5d40b9 = _0x29f2d6['skillCard'];
    _0x5d40b9['data']('cardfront')['reinitialize'](_0x2378a5['card']),
    _0x5d40b9['data']('face_down', ![]),
    $('#field')['append'](_0x5d40b9),
    TweenMax['to'](_0x5d40b9, easeSeconds, {
        'rotationY': ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    }),
    playSound(Activate);
}
function setSkill(_0x2467a3, _0x385d84) {
    var _0x2259d2 = _0x2467a3['skillCard'];
    _0x2259d2['data']('cardfront')['reinitialize'](_0x385d84['card']),
    _0x2259d2['data']('face_down', !![]),
    $('#field')['append'](_0x2259d2),
    TweenMax['to'](_0x2259d2, easeSeconds, {
        'rotationY': 0xb4 + ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            endAction();
        }
    }),
    playSound(Flip);
}
function addProxy(_0x573636, _0x419507) {
    console['log']('addProxy');
    var _0x542bad = newDuelCard();
    _0x573636 == player1 && _0x542bad['onRotate'](!![]),
    _0x542bad['data']('controller', _0x573636),
    _0x542bad['data']('face_down', !![]),
    updateController(_0x573636, _0x542bad),
    _0x542bad['data']('owner', _0x573636),
    _0x542bad['data']('id', _0x419507['id']),
    _0x419507['card'] && _0x542bad['data']('cardfront')['initializeFromData'](_0x419507['card']),
    _0x573636['extra_arr']['push'](_0x542bad),
    _0x573636['all_cards_arr']['push'](_0x542bad),
    shiftExtra(_0x573636),
    loadSleeves(_0x573636),
    endAction();
}
function declare(_0x57943f, _0x27619b) {
    var _0x50e40f = createSVGAnimation(spark, 'spark', 0x6e, 0x6e, 0x18, spark['json'])
      , _0x159c49 = getDuelCard(_0x27619b['id']);
    _0x159c49['data']('cardfront')['reinitialize'](_0x27619b['card']);
    var _0x1df178 = _0x159c49['parent']()[0x0] == $('#view\x20>\x20.content')[0x0]
      , _0x4c8f3e = null
      , _0x57a31e = null;
    _0x1df178 ? $('#spark')['css']('z-index', 0x10) : (_0x159c49['data']('controller')['grave_arr']['indexOf'](_0x159c49) >= 0x0 && (_0x4c8f3e = _0x159c49['data']('controller')['grave_arr']['indexOf'](_0x159c49),
    _0x159c49['data']('controller')['grave_arr']['splice'](_0x4c8f3e, 0x1),
    _0x159c49['data']('controller')['grave_arr']['unshift'](_0x159c49),
    shiftGrave(_0x159c49['data']('controller'))),
    _0x159c49['data']('controller')['banished_arr']['indexOf'](_0x159c49) >= 0x0 && (_0x57a31e = _0x159c49['data']('controller')['banished_arr']['indexOf'](_0x159c49),
    _0x159c49['data']('controller')['banished_arr']['splice'](_0x57a31e, 0x1),
    _0x159c49['data']('controller')['banished_arr']['unshift'](_0x159c49),
    shiftBanished(_0x159c49['data']('controller'))));
    _0x159c49['data']('cardfront')['data']('name')['includes']('Tearlament') && (allowToBottom = !![]);
    var _0x5d0011 = 0x0
      , _0x209ebe = $('#' + _0x50e40f['mc']['id']);
    _0x159c49['data']('controller')['hand_arr']['includes'](_0x159c49) && !(duelist && isPlayer1(_0x57943f['username'])) && ($('#duel\x20.cards')['append'](_0x159c49),
    TweenMax['to'](_0x159c49, 0.5, {
        'rotationY': ABOUT_ZERO
    }),
    _0x5d0011 = 0.4);
    TweenMax['set'](_0x209ebe, {
        'left': parseInt(_0x159c49['css']('left')),
        'top': parseInt(_0x159c49['css']('top'))
    });
    _0x1df178 && TweenMax['set'](_0x209ebe, {
        'left': parseInt(_0x159c49['css']('left')) + 0xdb + 0x5,
        'top': parseInt(_0x159c49['css']('top')) + 0x3a + 0x20 - $('#view\x20>\x20.content')['scrollTop']()
    });
    setTimeout(function() {
        TweenMax['to'](_0x209ebe, 0.95, {
            'onComplete': function() {
                _0x50e40f['stop'](),
                _0x209ebe['remove']();
            }
        }),
        _0x50e40f['play'](),
        playSound(Declare),
        _0x5d0011 = 0.2;
        if (_0x159c49['data']('controller')['hand_arr']['includes'](_0x159c49)) {
            _0x5d0011 = 0.4,
            previewCard(_0x159c49);
            var _0x39f07b = 0xb4 + ABOUT_ZERO;
            (show_cards && _0x57943f == Player1() || show_cards == 0x2) && (_0x39f07b = ABOUT_ZERO),
            TweenMax['to'](_0x159c49, 0.5, {
                'rotationY': _0x39f07b,
                'delay': 0.6
            });
        }
        (_0x4c8f3e || _0x57a31e) && (_0x5d0011 = 0.6),
        setTimeout(function() {
            _0x4c8f3e != null && (_0x159c49['data']('controller')['grave_arr']['splice'](0x0, 0x1),
            _0x159c49['data']('controller')['grave_arr']['splice'](_0x4c8f3e, 0x0, _0x159c49),
            shiftGrave(_0x159c49['data']('controller'))),
            _0x57a31e != null && (_0x159c49['data']('controller')['banished_arr']['splice'](0x0, 0x1),
            _0x159c49['data']('controller')['banished_arr']['splice'](_0x57a31e, 0x0, _0x159c49),
            shiftBanished(_0x159c49['data']('controller'))),
            $('#spark')['css']('z-index', 0x0),
            setTimeout(function() {
                endAction();
            }, automatic ? 0x12c : 0x0);
        }, 0x12c + _0x5d0011 * 1.5 * 0x3e8);
    }, _0x5d0011 * 0x3e8);
    if (_0x27619b['name'])
        addLine(_0x27619b['username'] + '\x20declared\x20effect\x20of\x20' + quote(_0x27619b['name']));
    else {
        if (_0x27619b['log']) {
            var _0x273846 = _0x27619b['username'] + '\x20' + _0x27619b['log']['public_log']['replace']('Declared', 'declared');
            _0x273846['indexOf']('\x20in\x20') >= 0x0 && (_0x273846 = _0x273846['substring'](0x0, _0x273846['indexOf']('\x20in\x20'))),
            addLine(_0x273846);
        }
    }
}
function stayRevealed(_0x40c3f7, _0x133be3) {
    var _0x41c5c0 = 0x0
      , _0x50061e = getDuelCard(_0x133be3['id']);
    _0x50061e['data']('face_up', !![]),
    _0x50061e['data']('cardfront')['reinitialize'](_0x133be3['card']),
    $('#duel\x20.cards')['append'](_0x50061e),
    restoreHandCards(),
    TweenMax['fromTo'](_0x50061e, 0.5, {
        'rotationY': 0xb4
    }, {
        'rotationY': ABOUT_ZERO
    }),
    setTimeout(function() {
        organizeHand(_0x50061e['data']('controller'), ![], !![]);
    }, 0xfa),
    setTimeout(function() {
        previewCard(_0x50061e),
        setTimeout(function() {
            endAction();
        }, 0x12c + _0x41c5c0 * 1.5 * 0x3e8);
    }, _0x41c5c0 * 0x3e8);
}
function stopRevealing(_0x2b8dfb, _0x4cd6d7) {
    var _0x362e41 = getDuelCard(_0x4cd6d7['id']);
    _0x362e41['data']('face_up', ![]),
    _0x362e41['data']('cardfront')['reinitialize'](_0x4cd6d7['card']);
    var _0x33e3df = 0.4
      , _0x4aa49d = 0xb4 + ABOUT_ZERO;
    (show_cards && _0x2b8dfb == Player1() || show_cards == 0x2) && (_0x4aa49d = ABOUT_ZERO),
    restoreHandCards(),
    TweenMax['to'](_0x362e41, 0.5, {
        'rotationY': _0x4aa49d
    }),
    setTimeout(function() {
        endAction();
    }, 0x12c + _0x33e3df * 1.5 * 0x3e8);
}
function allGood(_0x5b5a9e, _0xc59888) {
    _0x5b5a9e['stopTyping'](),
    _0x5b5a9e['thinking']['hide'](),
    TweenMax['killTweensOf'](_0x5b5a9e['all_good']),
    _0x5b5a9e['all_good']['show'](),
    _0x5b5a9e['all_good']['find']('span')['hide'](),
    _0x5b5a9e['all_good']['css']('left', 0x30),
    _0x5b5a9e['all_good']['css']('top', 0x1a),
    TweenMax['fromTo'](_0x5b5a9e['all_good'], 0x2, {
        'scale': 0x1,
        'alpha': 0x1
    }, {
        'scale': 1.3,
        'ease': Elastic['easeOut']['config'](0x3, 0.2)
    }),
    _0xc59888['long'] ? (_0x5b5a9e['still_good'] = !![],
    TweenMax['to'](_0x5b5a9e['all_good'], 0x1, {
        'scale': 0.72,
        'left': 0x53,
        'top': 0x3f,
        'delay': 0.9,
        'ease': Circ['easeInOut'],
        'onComplete': function() {
            stillGood(_0x5b5a9e, !![]);
        }
    })) : TweenMax['fromTo'](_0x5b5a9e['all_good'], 0x1, {
        'alpha': 0x1
    }, {
        'alpha': 0x0,
        'delay': 0x1,
        'onComplete': function() {
            _0x5b5a9e['all_good']['hide']();
        }
    }),
    setTimeout(function() {
        endAction();
    }, 0x96),
    playSound(Ok);
}
function stillGood(_0x33b772, _0x5accb7) {
    if (!$('#duel')['is'](':visible'))
        return;
    if (!_0x33b772['still_good'])
        return;
    if (!_0x5accb7 && !_0x33b772['all_good']['is'](':visible'))
        return;
    _0x33b772['all_good']['show'](),
    _0x33b772['all_good']['find']('span')['show'](),
    _0x33b772['all_good']['css']('opacity', 0x1),
    TweenMax['set'](_0x33b772['all_good'], {
        'scale': 0.72
    }),
    TweenMax['set'](_0x33b772['all_good'], {
        'left': 0x53,
        'top': 0x3f
    }),
    TweenMax['fromTo'](_0x33b772['all_good'], 1.6, {
        'scale': 0.72
    }, {
        'scale': 0.8,
        'ease': Expo['easeInOut'],
        'onComplete': function() {
            TweenMax['fromTo'](_0x33b772['all_good'], 1.6, {
                'scale': 0.8
            }, {
                'scale': 0.72,
                'ease': Expo['easeInOut'],
                'onComplete': function() {
                    stillGood(_0x33b772);
                }
            });
        }
    });
}
function stopGood(_0x38410f) {
    _0x38410f['still_good'] = ![],
    TweenMax['killTweensOf'](_0x38410f['all_good']),
    TweenMax['set'](_0x38410f['all_good'], {
        'scale': 0.8
    }),
    TweenMax['to'](_0x38410f['all_good'], 0.2, {
        'scale': 0x1,
        'ease': Expo['easeInOut'],
        'onComplete': function() {
            TweenMax['to'](_0x38410f['all_good'], 0.3, {
                'scale': 0.3,
                'alpha': 0x0,
                'ease': Expo['easeInOut']
            }),
            endAction();
        }
    });
}
function typingE(_0x4fcffa) {
    _0x4fcffa['typingE'](),
    TweenMax['fromTo'](_0x4fcffa['bubbles'], 0.25, {
        'scale': 0.45,
        'alpha': 0.75
    }, {
        'scale': 0x1,
        'alpha': 0x1
    });
}
function thinking(_0x2cbad2, _0x859a86) {
    _0x2cbad2['still_good'] = ![],
    _0x2cbad2['all_good']['hide'](),
    TweenMax['killTweensOf'](_0x2cbad2['thinking']),
    _0x2cbad2['thinking']['show'](),
    TweenMax['fromTo'](_0x2cbad2['thinking'], 0x1, {
        'scale': 0x1,
        'alpha': 0x1
    }, {
        'scale': 1.3,
        'ease': Elastic['easeOut']['config'](1.2, 0.3)
    }),
    setTimeout(function() {}, 0x96);
}
function initalizeCards(_0x1c82b2, _0x440031) {
    for (var _0x33ddd8 = 0x0; _0x33ddd8 < _0x440031['deck']['length']; _0x33ddd8++) {
        for (var _0xc3c4c1 = 0x0; _0xc3c4c1 < player1['all_cards_arr']['length']; _0xc3c4c1++) {
            player1['all_cards_arr'][_0xc3c4c1]['data']('id') == _0x440031['deck'][_0x33ddd8]['id'] && (!player1['all_cards_arr'][_0xc3c4c1]['data']('cardfront')['initialized'] && player1['all_cards_arr'][_0xc3c4c1]['data']('cardfront')['initializeFromData'](_0x440031['deck'][_0x33ddd8]['data']));
        }
        for (_0xc3c4c1 = 0x0; _0xc3c4c1 < player2['all_cards_arr']['length']; _0xc3c4c1++) {
            player2['all_cards_arr'][_0xc3c4c1]['data']('id') == _0x440031['deck'][_0x33ddd8]['id'] && (!player2['all_cards_arr'][_0xc3c4c1]['data']('cardfront')['initialized'] && player2['all_cards_arr'][_0xc3c4c1]['data']('cardfront')['initializeFromData'](_0x440031['deck'][_0x33ddd8]['data']));
        }
    }
}
function hidePhases() {
    $('#dp\x20.phase_red')['hide'](),
    $('#sp\x20.phase_red')['hide'](),
    $('#m1\x20.phase_red')['hide'](),
    $('#bp\x20.phase_red')['hide'](),
    $('#m2\x20.phase_red')['hide'](),
    $('#ep\x20.phase_red')['hide'](),
    $('#dp\x20.phase_blue')['hide'](),
    $('#sp\x20.phase_blue')['hide'](),
    $('#m1\x20.phase_blue')['hide'](),
    $('#bp\x20.phase_blue')['hide'](),
    $('#m2\x20.phase_blue')['hide'](),
    $('#ep\x20.phase_blue')['hide'](),
    $('#dp\x20.white_txt')['hide'](),
    $('#sp\x20.white_txt')['hide'](),
    $('#m1\x20.white_txt')['hide'](),
    $('#bp\x20.white_txt')['hide'](),
    $('#m2\x20.white_txt')['hide'](),
    $('#ep\x20.white_txt')['hide']();
}
function changeDarks() {
    turn_player == Player1() ? ($('#dp\x20.phase_dark_red')['show'](),
    $('#sp\x20.phase_dark_red')['show'](),
    $('#m1\x20.phase_dark_red')['show'](),
    $('#bp\x20.phase_dark_red')['show'](),
    $('#m2\x20.phase_dark_red')['show'](),
    $('#ep\x20.phase_dark_red')['show'](),
    $('#dp\x20.phase_dark_blue')['hide'](),
    $('#sp\x20.phase_dark_blue')['hide'](),
    $('#m1\x20.phase_dark_blue')['hide'](),
    $('#bp\x20.phase_dark_blue')['hide'](),
    $('#m2\x20.phase_dark_blue')['hide'](),
    $('#ep\x20.phase_dark_blue')['hide']()) : ($('#dp\x20.phase_dark_red')['hide'](),
    $('#sp\x20.phase_dark_red')['hide'](),
    $('#m1\x20.phase_dark_red')['hide'](),
    $('#bp\x20.phase_dark_red')['hide'](),
    $('#m2\x20.phase_dark_red')['hide'](),
    $('#ep\x20.phase_dark_red')['hide'](),
    $('#dp\x20.phase_dark_blue')['show'](),
    $('#sp\x20.phase_dark_blue')['show'](),
    $('#m1\x20.phase_dark_blue')['show'](),
    $('#bp\x20.phase_dark_blue')['show'](),
    $('#m2\x20.phase_dark_blue')['show'](),
    $('#ep\x20.phase_dark_blue')['show']());
}
function startTurn() {
    console['log']('startTurn'),
    awaiting_start_turn = ![],
    turn_player['opponent'] = players[players['length'] - 0x1],
    turn_player['opponent']['opponent'] = turn_player,
    turnCount++,
    changeDarks();
    !duelist && ($('#turn')['show'](),
    $('#turn\x20.red')['hide'](),
    isPlayer1(turn_player['username']) && $('#turn\x20.red')['show']());
    initPhases();
    if (tag_duel && turnCount > 0x1) {
        shiftPlayersE(!![]);
        for (var _0x4be924 = 0x0; _0x4be924 < turn_player['all_cards_arr']['length']; _0x4be924++) {
            updateOwner(turn_player, turn_player['all_cards_arr'][_0x4be924]);
        }
        for (var _0x4be924 = 0x0; _0x4be924 < turn_player['opponent']['all_cards_arr']['length']; _0x4be924++) {
            turn_player['opponent']['all_cards_arr'][_0x4be924]['data']('controller') == turn_player['partner'] && updateController(turn_player, turn_player['opponent']['all_cards_arr'][_0x4be924]);
        }
    } else
        automatic ? endAction() : enterDP();
}
function initPhases() {
    $('#end_turn')['hide'](),
    duelist && turn_player['username'] == username ? ($('#dp')['click'](enterDPE),
    $('#sp')['click'](enterSPE),
    $('#m1')['click'](enterM1E),
    $('#bp')['click'](enterBPE),
    $('#m2')['click'](enterM2E),
    $('#ep')['click'](enterEPE),
    !automatic && ($('.phase')['css']('pointer-events', 'auto'),
    $('#end_turn')['css']('pointer-events', 'auto')),
    $('#end_turn\x20.green')['hide'](),
    $('#end_turn\x20.yellow')['hide'](),
    $('#end_turn\x20.white_glow')['hide'](),
    $('#start_turn')['hide'](),
    stopStartTurn(),
    duelFormat != 'so' && ($('#auto_draw_cb')['is'](':checked') ? TweenMax['to']($('#end_turn'), easeSeconds, {
        'onComplete': function() {
            $('#end_turn')['show'](),
            setText($('#end_turn\x20.end_turn_txt'));
        }
    }) : ($('#end_turn')['show'](),
    setText($('#end_turn\x20.end_turn_txt'))))) : $('.phase')['css']('pointer-events', 'none');
}
function enterDP() {
    hidePhases(),
    currentPhase = 'DP',
    changeLight($('#dp')),
    endAction();
}
function enterSP() {
    hidePhases(),
    currentPhase = 'SP',
    changeLight($('#sp')),
    endAction();
}
function enterM1() {
    hidePhases(),
    currentPhase = 'M1',
    changeLight($('#m1')),
    endAction();
}
function enterBP() {
    hidePhases(),
    currentPhase = 'BP',
    changeLight($('#bp')),
    endAction();
}
function enterM2() {
    hidePhases(),
    currentPhase = 'M2',
    changeLight($('#m2')),
    endAction();
}
function enterEP() {
    hidePhases(),
    currentPhase = 'EP',
    changeLight($('#ep')),
    endAction();
}
function endTurn(_0x52979b) {
    duelist && _0x52979b['username'] == username && ($('#dp')['off']('click', enterDPE),
    $('#sp')['off']('click', enterSPE),
    $('#m1')['off']('click', enterM1E),
    $('#bp')['off']('click', enterBPE),
    $('#m2')['off']('click', enterM2E),
    $('#ep')['off']('click', enterEPE),
    $('.phase')['css']('pointer-events', 'none'),
    $('#end_turn')['css']('pointer-events', 'none'),
    $('#end_turn\x20.yellow')['show'](),
    $('#end_turn\x20.white_glow')['show']()),
    hidePhases(),
    currentPhase = '',
    players['push'](players['splice'](0x0, 0x1)[0x0]),
    showStartTurn(),
    playSound(TurnChime),
    endAction();
}
function showStartTurn() {
    duelist && players[0x0]['username'] == username && !currentPhase && ($('#start_turn')['show'](),
    setText($('#start_turn\x20.start_turn_txt')),
    playStartTurn());
}
function changeLight(_0x481f0f) {
    turn_player == Player1() ? _0x481f0f['find']('.phase_red')['show']() : _0x481f0f['find']('.phase_blue')['show'](),
    _0x481f0f['find']('.white_txt')['show'](),
    _0x481f0f['addClass']('active'),
    !duelist && $('#turn')['show'](),
    currentPhase != 'DP' && playSound(Switch);
}
function updateLifePoints(_0x4eb8b9, _0x4bf30f) {
    var _0x52010a = 0x0;
    prev_life = _0x4eb8b9['lifepoints'],
    life_amount = _0x4bf30f['amount'],
    _0x4eb8b9['lifepoints'] = _0x4bf30f['life'];
    _0x4eb8b9['lifepoints'] < 0x0 && (_0x4eb8b9['lifepoints'] = 0x0);
    _0x52010a = 0x9a - _0x4eb8b9['lifepoints'] / lifepointMax * 0x9a;
    _0x4eb8b9['lifepoints'] >= lifepointMax && (_0x52010a = 0x0);
    var _0x3a4588 = '\x20lost\x20'
      , _0x23e98f = -_0x4bf30f['amount'];
    _0x4bf30f['amount'] > 0x0 && (_0x3a4588 = '\x20gained\x20',
    _0x23e98f = _0x4bf30f['amount']);
    var _0x793607, _0x18a1a7 = isPlayer2(_0x4eb8b9['username']) ? $('#lifepoints2') : $('#lifepoints1'), _0x1969c5 = TweenMax['to'](_0x18a1a7['find']('.black_bar'), 0x1, {
        'width': _0x52010a,
        'ease': Expo['easeOut'],
        'onComplete': function() {
            clearInterval(_0x793607),
            _0x18a1a7['find']('.life_txt')['text'](_0x4eb8b9['lifepoints']),
            addLine(escapeHTML(_0x4eb8b9['username']) + _0x3a4588 + _0x23e98f + '\x20LP'),
            _0x4eb8b9['lifepoints'] <= 0x0 && playSound(LifePointsEnd),
            endAction();
        }
    });
    _0x793607 = setInterval(function() {
        _0x18a1a7['find']('.life_txt')['text'](prev_life + Math['floor'](_0x1969c5['progress']() * life_amount));
    }, 0x2a),
    playSound(LifePoints);
}
function setupDuelField() {
    counters = [m1_counter, m2_counter, m3_counter, m4_counter, m5_counter, s1_counter, s2_counter, s3_counter, s4_counter, s5_counter, pendulum_left_counter, pendulum_right_counter, field_spell_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_m4_counter, opp_m5_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_s4_counter, opp_s5_counter, opp_pendulum_left_counter, opp_pendulum_right_counter, opp_field_spell_counter],
    m1_counter['css']('left', 347.5),
    m2_counter['css']('left', 440.5),
    m3_counter['css']('left', 533.5),
    s1_counter['css']('left', 347.5),
    s2_counter['css']('left', 440.5),
    s3_counter['css']('left', 533.5),
    opp_m1_counter['css']('left', 0x2b6),
    opp_m2_counter['css']('left', 0x259),
    opp_m3_counter['css']('left', 0x1fc),
    opp_s1_counter['css']('left', 0x2b6),
    opp_s2_counter['css']('left', 0x259),
    opp_s3_counter['css']('left', 0x1fc),
    $('#dp')['css']('left', 0x158),
    $('#sp')['css']('left', 0x193),
    $('#m1')['css']('left', 0x1ce),
    $('#bp')['css']('left', 0x209),
    $('#m2')['css']('left', 0x244),
    $('#m2')['show'](),
    $('#ep')['css']('left', 0x27f),
    $('#die_btn')['css']('left', 0x15f),
    $('#coin_btn')['css']('left', 0x17f),
    $('#duel\x20.token_btn')['css']('left', 0x1a0),
    counter_btn['css']('left', 467.5),
    $('#lp_txt')['css']('left', 0x1e8),
    $('#lp_txt')['css']('top', 0x135),
    $('#lp_txt')['css']('font-size', 0x14),
    $('#life_txt')['css']('left', 0x20b),
    $('#life_txt')['setWidth'](0x32),
    !CHROME && $('#life_txt')['css']('width', 0x26),
    $('#plus_btn,\x20#minus_btn')['css']('left', 576.5),
    $('#plus_btn,\x20#minus_btn')['css']('top', 0x133),
    $('#plus_btn,\x20#minus_btn')['css']('transform', 'scale(1)'),
    $('#minus_bg')['css']('left', 571.5),
    $('#turn')['css']('left', 0x267),
    $('#start_turn')['css']('left', 0x267),
    $('#end_turn')['css']('left', 0x267),
    $('#hm1_txt')['css']('left', 0x122),
    $('#hm2_txt')['css']('left', 0x17f),
    $('#hm3_txt')['css']('left', 0x1dc),
    $('#hm4_txt')['show'](),
    $('#hm5_txt')['show'](),
    $('#om1_txt')['css']('left', 0x296),
    $('#om2_txt')['css']('left', 0x239),
    $('#om3_txt')['css']('left', 0x1dc),
    $('#om4_txt')['show'](),
    $('#om5_txt')['show'](),
    setupNumbers(),
    $('#field_spell_counter')['css']('top', 362.5),
    $('#m1_hidden')['css']('left', 288.5),
    $('#m2_hidden')['css']('left', 381.5),
    $('#m3_hidden')['css']('left', 474.5),
    $('#m4_hidden')['show'](),
    $('#m5_hidden')['show'](),
    $('#opp_m1_hidden')['css']('left', 660.5),
    $('#opp_m2_hidden')['css']('left', 567.5),
    $('#opp_m3_hidden')['css']('left', 474.5),
    $('#opp_m4_hidden')['show'](),
    $('#opp_m5_hidden')['show'](),
    $('#deck_hidden')['css']('top', 486.5),
    $('#grave_hidden')['css']('left', 769.5),
    $('#grave_hidden')['css']('top', 293.5),
    $('#banished_hidden')['css']('left', 702.5),
    $('#extra_hidden')['css']('top', 486.5),
    $('#opp_deck_hidden')['css']('top', 0x0),
    $('#opp_grave_hidden')['css']('left', 207.5),
    $('#opp_grave_hidden')['css']('top', 199.5),
    $('#opp_banished_hidden')['css']('left', 274.5),
    $('#opp_extra_hidden')['css']('top', 7.5),
    $('#link_left_hidden')['hide'](),
    $('#link_right_hidden')['hide'](),
    $('#m1_select')['css']('left', 0x11f),
    $('#m2_select')['css']('left', 0x17c),
    $('#m3_select')['css']('left', 0x1d9),
    $('#m4_select')['show'](),
    $('#m5_select')['show'](),
    $('#m1_select2')['css']('left', 0x293),
    $('#m2_select2')['css']('left', 0x236),
    $('#m3_select2')['css']('left', 0x1d9),
    $('#m4_select2')['show'](),
    $('#m5_select2')['show'](),
    $('#s1_select')['css']('left', 0x11f),
    $('#s2_select')['css']('left', 0x17c),
    $('#s3_select')['css']('left', 0x1d9),
    $('#s4_select')['show'](),
    $('#s5_select')['show'](),
    $('#link_left_select')['show'](),
    $('#link_right_select')['show']();
}
function setupDuelFieldLinks() {
    counters = [m1_counter, m2_counter, m3_counter, m4_counter, m5_counter, s1_counter, s2_counter, s3_counter, s4_counter, s5_counter, field_spell_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_m4_counter, opp_m5_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_s4_counter, opp_s5_counter, opp_field_spell_counter, left_link_counter, right_link_counter],
    m1_counter['css']('left', 347.5),
    m2_counter['css']('left', 440.5),
    m3_counter['css']('left', 533.5),
    s1_counter['css']('left', 347.5),
    s2_counter['css']('left', 440.5),
    s3_counter['css']('left', 533.5),
    opp_m1_counter['css']('left', 0x2b6),
    opp_m2_counter['css']('left', 0x259),
    opp_m3_counter['css']('left', 0x1fc),
    opp_s1_counter['css']('left', 0x2b6),
    opp_s2_counter['css']('left', 0x259),
    opp_s3_counter['css']('left', 0x1fc),
    $('#dp')['css']('left', 268.5),
    $('#sp')['css']('left', 327.6),
    $('#m1')['css']('left', 463.65),
    $('#bp')['css']('left', 519.5),
    $('#m2')['css']('left', 655.5),
    $('#m2')['show'](),
    $('#ep')['css']('left', 714.6),
    $('#die_btn')['css']('left', 280.5),
    $('#coin_btn')['css']('left', 0x136),
    $('#duel\x20.token_btn')['css']('left', 345.5),
    counter_btn['css']('left', 671.85),
    $('#lp_txt')['css']('left', 0x1db),
    $('#lp_txt')['css']('top', 0x138),
    $('#lp_txt')['css']('font-size', 0x10),
    $('#life_txt')['css']('left', 0x1f5),
    $('#life_txt')['setWidth'](0x25),
    CHROME && PC && $('#life_txt')['setWidth'](0x21),
    !CHROME && $('#life_txt')['css']('width', 0x19),
    $('#plus_btn,\x20#minus_btn')['css']('left', 537.5),
    $('#plus_btn,\x20#minus_btn')['css']('top', 0x134),
    $('#plus_btn,\x20#minus_btn')['css']('transform', 'scale(0.9)'),
    $('#minus_bg')['css']('left', 0x213),
    $('#turn')['css']('left', 0x2b3),
    $('#start_turn')['css']('left', 0x2b3),
    $('#end_turn')['css']('left', 0x2b3),
    $('#hm1_txt')['css']('left', 0x122),
    $('#hm2_txt')['css']('left', 0x17f),
    $('#hm3_txt')['css']('left', 0x1dc),
    $('#hm4_txt')['show'](),
    $('#hm5_txt')['show'](),
    $('#om1_txt')['css']('left', 0x296),
    $('#om2_txt')['css']('left', 0x239),
    $('#om3_txt')['css']('left', 0x1dc),
    $('#om4_txt')['show'](),
    $('#om5_txt')['show'](),
    setupNumbers(),
    $('#field_spell_counter')['css']('top', 0x199),
    $('#m1_hidden')['css']('left', 288.5),
    $('#m2_hidden')['css']('left', 381.5),
    $('#m3_hidden')['css']('left', 474.5),
    $('#m4_hidden')['show'](),
    $('#m5_hidden')['show'](),
    $('#opp_m1_hidden')['css']('left', 660.5),
    $('#opp_m2_hidden')['css']('left', 567.5),
    $('#opp_m3_hidden')['css']('left', 474.5),
    $('#opp_m4_hidden')['show'](),
    $('#opp_m5_hidden')['show'](),
    $('#deck_hidden')['css']('top', 0x1d0),
    $('#grave_hidden')['css']('left', 0x2f2),
    $('#grave_hidden')['css']('top', 339.5),
    $('#banished_hidden')['css']('left', 768.5),
    $('#extra_hidden')['css']('top', 0x1d0),
    $('#opp_deck_hidden')['css']('top', 21.5),
    $('#opp_grave_hidden')['css']('left', 0xde),
    $('#opp_grave_hidden')['css']('top', 153.5),
    $('#opp_banished_hidden')['css']('left', 207.5),
    $('#opp_extra_hidden')['css']('top', 0x1d),
    $('#link_left_hidden')['show'](),
    $('#link_right_hidden')['show'](),
    $('#m1_select')['css']('left', 0x11f),
    $('#m2_select')['css']('left', 0x17c),
    $('#m3_select')['css']('left', 0x1d9),
    $('#m4_select')['show'](),
    $('#m5_select')['show'](),
    $('#m1_select2')['css']('left', 0x293),
    $('#m2_select2')['css']('left', 0x236),
    $('#m3_select2')['css']('left', 0x1d9),
    $('#m4_select2')['show'](),
    $('#m5_select2')['show'](),
    $('#s1_select')['css']('left', 0x11f),
    $('#s2_select')['css']('left', 0x17c),
    $('#s3_select')['css']('left', 0x1d9),
    $('#s4_select')['show'](),
    $('#s5_select')['show'](),
    $('#link_left_select')['show'](),
    $('#link_right_select')['show']();
}
function setupDuelFieldSpeed() {
    counters = [m1_counter, m2_counter, m3_counter, s1_counter, s2_counter, s3_counter, field_spell_counter, skill_card_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_field_spell_counter, opp_skill_card_counter],
    m1_counter['css']('left', 383.5),
    m2_counter['css']('left', 533.5),
    m3_counter['css']('left', 683.5),
    s1_counter['css']('left', 383.5),
    s2_counter['css']('left', 533.5),
    s3_counter['css']('left', 683.5),
    opp_m1_counter['css']('left', 0x292),
    opp_m2_counter['css']('left', 0x1fc),
    opp_m3_counter['css']('left', 0x166),
    opp_s1_counter['css']('left', 0x292),
    opp_s2_counter['css']('left', 0x1fc),
    opp_s3_counter['css']('left', 0x166),
    $('#dp')['css']('left', 0x158),
    $('#sp')['css']('left', 0x1a2),
    $('#m1')['css']('left', 0x1ec),
    $('#bp')['css']('left', 0x236),
    $('#m2')['hide'](),
    $('#ep')['css']('left', 0x27f),
    $('#die_btn')['css']('left', 0x15f),
    $('#coin_btn')['css']('left', 383.15),
    $('#duel\x20.token_btn')['css']('left', 0x1a0),
    counter_btn['css']('left', 467.5),
    $('#lp_txt')['css']('left', 0x1e8),
    $('#lp_txt')['css']('top', 0x135),
    $('#lp_txt')['css']('font-size', 0x14),
    $('#life_txt')['css']('left', 0x20b),
    $('#life_txt')['setWidth'](0x32),
    !CHROME && $('#life_txt')['css']('width', 0x26),
    $('#plus_btn,\x20#minus_btn')['css']('left', 576.5),
    $('#plus_btn,\x20#minus_btn')['css']('top', 0x133),
    $('#plus_btn,\x20#minus_btn')['css']('transform', 'scale(1)'),
    $('#minus_bg')['css']('left', 571.5),
    $('#turn')['css']('left', 0x267),
    $('#start_turn')['css']('left', 0x267),
    $('#end_turn')['css']('left', 0x267),
    $('#hm1_txt')['css']('left', 0x146),
    $('#hm2_txt')['css']('left', 0x1dc),
    $('#hm3_txt')['css']('left', 0x272),
    $('#hm4_txt')['hide'](),
    $('#hm5_txt')['hide'](),
    $('#om1_txt')['css']('left', 0x272),
    $('#om2_txt')['css']('left', 0x1dc),
    $('#om3_txt')['css']('left', 0x146),
    $('#om4_txt')['hide'](),
    $('#om5_txt')['hide'](),
    setupNumbers(),
    $('#field_spell_counter')['css']('top', 0x199),
    $('#m1_hidden')['css']('left', 324.5),
    $('#m2_hidden')['css']('left', 474.5),
    $('#m3_hidden')['css']('left', 624.5),
    $('#m4_hidden')['hide'](),
    $('#m5_hidden')['hide'](),
    $('#opp_m1_hidden')['css']('left', 624.5),
    $('#opp_m2_hidden')['css']('left', 474.5),
    $('#opp_m3_hidden')['css']('left', 324.5),
    $('#opp_m4_hidden')['hide'](),
    $('#opp_m5_hidden')['hide'](),
    $('#deck_hidden')['css']('top', 0x1d0),
    $('#grave_hidden')['css']('left', 769.5),
    $('#grave_hidden')['css']('top', 339.5),
    $('#banished_hidden')['css']('left', 769.5),
    $('#extra_hidden')['css']('top', 0x1d0),
    $('#opp_deck_hidden')['css']('top', 21.5),
    $('#opp_grave_hidden')['css']('left', 207.5),
    $('#opp_grave_hidden')['css']('top', 153.5),
    $('#opp_banished_hidden')['css']('left', 207.5),
    $('#opp_extra_hidden')['css']('top', 0x1d),
    $('#link_left_hidden')['hide'](),
    $('#link_right_hidden')['hide'](),
    $('#m1_select')['css']('left', 0x143),
    $('#m2_select')['css']('left', 0x1d9),
    $('#m3_select')['css']('left', 0x26f),
    $('#m4_select')['hide'](),
    $('#m5_select')['hide'](),
    $('#m1_select2')['css']('left', 0x26f),
    $('#m2_select2')['css']('left', 0x1d9),
    $('#m3_select2')['css']('left', 0x143),
    $('#m4_select2')['hide'](),
    $('#m5_select2')['hide'](),
    $('#s1_select')['css']('left', 0x143),
    $('#s2_select')['css']('left', 0x1d9),
    $('#s3_select')['css']('left', 0x26f),
    $('#s4_select')['hide'](),
    $('#s5_select')['hide'](),
    $('#link_left_select')['hide'](),
    $('#link_right_select')['hide']();
}
function setupDuelFieldRush() {
    counters = [m1_counter, m2_counter, m3_counter, s1_counter, s2_counter, s3_counter, field_spell_counter, opp_m1_counter, opp_m2_counter, opp_m3_counter, opp_s1_counter, opp_s2_counter, opp_s3_counter, opp_field_spell_counter],
    $('#dp')['css']('left', 0x158),
    $('#sp')['hide'](),
    $('#m1')['css']('left', 0x1ba),
    $('#bp')['css']('left', 0x21d),
    $('#m2')['hide'](),
    $('#ep')['css']('left', 0x27f);
}
function setupNumbers() {
    if (speed || rush)
        $('#cid1_txt')['css']('top', 492.5),
        $('#cid2_txt')['css']('top', 57.5),
        $('#cig1_txt')['css']('left', 771.5),
        $('#cig1_txt')['css']('top', 367.5),
        $('#cig2_txt')['css']('left', 209.5),
        $('#cig2_txt')['css']('top', 182.75),
        $('#cib1_txt')['css']('left', 771.5),
        $('#cib2_txt')['css']('left', 209.5),
        $('#cie1_txt')['css']('top', 492.5),
        $('#cie2_txt')['css']('top', 57.5);
    else
        links ? ($('#cid1_txt')['css']('left', 771.5),
        $('#cid1_txt')['css']('top', 492.5),
        $('#cig1_txt')['css']('left', 0x2f4),
        $('#cig1_txt')['css']('top', 367.5),
        $('#cib1_txt')['css']('left', 770.5),
        $('#cib1_txt')['css']('top', 275.5),
        $('#cie1_txt')['css']('left', 0xd1),
        $('#cie1_txt')['css']('top', 492.5),
        $('#cid2_txt')['css']('left', 209.5),
        $('#cid2_txt')['css']('top', 57.5),
        $('#cig2_txt')['css']('left', 0xe0),
        $('#cig2_txt')['css']('top', 182.75),
        $('#cib2_txt')['css']('left', 209.5),
        $('#cib2_txt')['css']('top', 275.5),
        $('#cie2_txt')['css']('left', 771.5),
        $('#cie2_txt')['css']('top', 57.5)) : ($('#cid1_txt')['css']('left', 771.5),
        $('#cid1_txt')['css']('top', 0x203),
        $('#cig1_txt')['css']('left', 771.5),
        $('#cig1_txt')['css']('top', 321.5),
        $('#cib1_txt')['css']('left', 704.5),
        $('#cib1_txt')['css']('top', 275.5),
        $('#cie1_txt')['css']('left', 0xd1),
        $('#cie1_txt')['css']('top', 0x1f0),
        $('#cid2_txt')['css']('left', 209.5),
        $('#cid2_txt')['css']('top', 0x24),
        $('#cig2_txt')['css']('left', 209.5),
        $('#cig2_txt')['css']('top', 0xe5),
        $('#cib2_txt')['css']('left', 276.5),
        $('#cib2_txt')['css']('top', 275.5),
        $('#cie2_txt')['css']('left', 771.5),
        $('#cie2_txt')['css']('top', 0x24));
}
function resetDuelButtons() {
    duelist && ($('#defeat_btn')['show'](),
    $('#defeat_btn')['disable'](![]),
    $('#draw_btn')['show'](),
    $('#draw_btn')['disable'](![]),
    $('#rematch_btn')['hide'](),
    $('#rematch_btn')['disable'](![]),
    !awaiting_admin && $('#call_admin_btn')['show'](),
    (rated || automaticTourney) && $('#call_admin_btn')['disable'](![]),
    $('#call_admin_btn')['val']('Call\x20Judge')),
    (admin || adjudicator) && ($('#host_loss_btn')['disable'](![]),
    $('#opponent_loss_btn')['disable'](![]),
    $('#cancel_duel_btn')['disable'](![]),
    $('#cancel_duel_btn')['show']()),
    $('#siding_btn')['hide'](),
    $('#swap_btn')['hide'](),
    $('#reset_btn')['hide'](),
    $('#rematch_btn')['val']('Offer\x20Rematch'),
    $('#draw_btn')['val']('Offer\x20Draw'),
    $('.duel_status\x20.status_txt')['text'](''),
    $('.duel_status\x20.aura')['hide'](),
    viewing = '';
}
function setPartner(_0x15ecbb, _0x227527) {
    _0x15ecbb['grave_arr'] = _0x227527['grave_arr'],
    _0x15ecbb['banished_arr'] = _0x227527['banished_arr'],
    _0x15ecbb['field_arr'] = _0x227527['field_arr'],
    _0x227527['all_cards_arr'] = _0x227527['all_cards_arr']['concat'](_0x15ecbb['all_cards_arr']),
    _0x15ecbb['all_cards_arr'] = _0x227527['all_cards_arr'],
    _0x15ecbb['m1_txt'] = _0x227527['m1_txt'],
    _0x15ecbb['m2_txt'] = _0x227527['m2_txt'],
    _0x15ecbb['m3_txt'] = _0x227527['m3_txt'],
    _0x15ecbb['m4_txt'] = _0x227527['m4_txt'],
    _0x15ecbb['m5_txt'] = _0x227527['m5_txt'];
}
function Player1() {
    if (player1 == turn_player || player1 == turn_player['opponent'])
        return player1;
    if (tag_duel) {
        if (player3 == turn_player || player3 == turn_player['opponent'])
            return player3;
    }
    return player1;
}
function Player2() {
    if (player2 == turn_player || player2 == turn_player['opponent'])
        return player2;
    if (tag_duel) {
        if (player4 == turn_player || player4 == turn_player['opponent'])
            return player4;
    }
    return player2;
}
function isPlayer1(_0x569c1c) {
    if (_0x569c1c == player1['username'] || tag_duel && _0x569c1c == player3['username'])
        return !![];
    return ![];
}
function isPlayer2(_0x3f3abc) {
    if (_0x3f3abc == player2['username'] || tag_duel && _0x3f3abc == player4['username'])
        return !![];
    return ![];
}
function Duelist() {
    if (duelist && (player1 == turn_player || player1 == turn_player['opponent']))
        return !![];
    return ![];
}
function getElement(_0x5a0dd2) {
    return document['getElementById'](_0x5a0dd2);
}
function drawDice(_0x49f2df, _0x84f9f7) {
    var _0x4d5790 = document['createElement']('canvas');
    _0x4d5790['id'] = 'mycanvas' + _0x49f2df,
    _0x4d5790['width'] = 0x64,
    _0x4d5790['height'] = 0x64,
    getElement('side' + _0x49f2df)['appendChild'](_0x4d5790);
    var _0x2fd9e2 = getElement('mycanvas' + _0x49f2df)['getContext']('2d');
    _0x2fd9e2['strokeStyle'] = '#000000',
    _0x2fd9e2['fillStyle'] = '#000000',
    0x1 != _0x84f9f7 && 0x3 != _0x84f9f7 && 0x5 != _0x84f9f7 || (_0x2fd9e2['beginPath'](),
    _0x2fd9e2['arc'](0x32, 0x32, 0x8, 0x0, 0x2 * Math['PI']),
    _0x2fd9e2['stroke'](),
    _0x2fd9e2['fill']()),
    0x2 != _0x84f9f7 && 0x3 != _0x84f9f7 && 0x4 != _0x84f9f7 && 0x5 != _0x84f9f7 && 0x6 != _0x84f9f7 || (_0x2fd9e2['beginPath'](),
    _0x2fd9e2['arc'](0x19, 0x4b, 0x8, 0x0, 0x2 * Math['PI']),
    _0x2fd9e2['stroke'](),
    _0x2fd9e2['fill'](),
    _0x2fd9e2['beginPath'](),
    _0x2fd9e2['arc'](0x4b, 0x19, 0x8, 0x0, 0x2 * Math['PI']),
    _0x2fd9e2['stroke'](),
    _0x2fd9e2['fill']()),
    0x4 != _0x84f9f7 && 0x5 != _0x84f9f7 && 0x6 != _0x84f9f7 || (_0x2fd9e2['beginPath'](),
    _0x2fd9e2['arc'](0x19, 0x19, 0x8, 0x0, 0x2 * Math['PI']),
    _0x2fd9e2['stroke'](),
    _0x2fd9e2['fill'](),
    _0x2fd9e2['beginPath'](),
    _0x2fd9e2['arc'](0x4b, 0x4b, 0x8, 0x0, 0x2 * Math['PI']),
    _0x2fd9e2['stroke'](),
    _0x2fd9e2['fill']()),
    0x6 == _0x84f9f7 && (_0x2fd9e2['beginPath'](),
    _0x2fd9e2['arc'](0x19, 0x32, 0x8, 0x0, 0x2 * Math['PI']),
    _0x2fd9e2['stroke'](),
    _0x2fd9e2['fill'](),
    _0x2fd9e2['beginPath'](),
    _0x2fd9e2['arc'](0x4b, 0x32, 0x8, 0x0, 0x2 * Math['PI']),
    _0x2fd9e2['stroke'](),
    _0x2fd9e2['fill']());
}
function shuffleDice(_0x34cf6c) {
    var _0x5927c5 = 0x3, _0x34772d, _0x4e5c25, _0x6de84e = _0x34cf6c['length'];
    if (_0x6de84e) {
        for (; --_0x6de84e; )
            _0x34772d = _0x34cf6c[_0x4e5c25 = Math['floor'](Math['random']() * (_0x6de84e + 0x1))],
            _0x34cf6c[_0x4e5c25] = _0x34cf6c[_0x6de84e],
            _0x34cf6c[_0x6de84e] = _0x34772d;
    }
    return _0x34cf6c;
}
function dieRoll(_0x5d4aac, _0x4b52db) {
    $('#die')['show'](),
    removeClass(getElement('die'), 'reset');
    var _0x3170fe = 0x6;
    ((_0x3170fe = isNaN(parseInt(_0x3170fe)) ? 0x6 : parseInt(_0x3170fe)) < 0x2 || _0x3170fe > 0x64) && (_0x3170fe = 0x6);
    for (var _0x1a46d0 = [], _0x35bc2f = 0x0; _0x35bc2f < _0x3170fe; ++_0x35bc2f)
        _0x1a46d0[_0x35bc2f] = _0x35bc2f + 0x1;
    var _0x2d83ed = shuffleDice(_0x1a46d0);
    while (_0x2d83ed[0x0] != _0x4b52db['result']) {
        _0x2d83ed = shuffleDice(_0x1a46d0);
    }
    ;addClass(getElement('die'), 'activate'),
    addClass(getElement('die'), 'opacity'),
    setTimeout(function() {
        for (var _0x45f011 = 0x1; _0x45f011 < 0x7; ++_0x45f011)
            void 0x0 !== _0x1a46d0[_0x45f011 - 0x1] ? _0x3170fe > 0x6 ? (getElement('side' + _0x45f011)['innerHTML'] = '<h3>' + _0x1a46d0[_0x45f011 - 0x1] + '</h3>',
            addClass(getElement('side' + _0x45f011), 'activate')) : (getElement('side' + _0x45f011)['innerHTML'] = '',
            addClass(getElement('side' + _0x45f011), 'activate'),
            drawDice(_0x45f011, _0x1a46d0[_0x45f011 - 0x1])) : (getElement('side' + _0x45f011)['innerHTML'] = '',
            addClass(getElement('side' + _0x45f011), 'activate'));
    }, 0x3e8),
    setTimeout(function() {
        removeClass(getElement('die'), 'activate'),
        addClass(getElement('die'), 'reset'),
        addLine(escapeHTML(_0x5d4aac['username']) + '\x27s\x20die\x20landed\x20on\x20' + _0x4b52db['result']),
        $('#die')['hide'](),
        endAction();
    }, 0xbc2),
    TweenMax['fromTo']($('#die'), 0x2, {
        'left': 0x0,
        'top': 0x0
    }, {
        'left': 0x200,
        'top': 0x140
    }),
    playSound(DiceSound);
}
function coinFlip(_0x1cf982, _0xbe838d) {
    var _0x1ed4f7 = 0x2e9
      , _0x5a3c6c = 0x17c
      , _0x279bf5 = 0x1d2
      , _0xcd9126 = 0x0
      , _0x4b1ffd = 0x276
      , _0x5bafae = _0x1ed4f7 - _0x5a3c6c / 0x2;
    _0xbe838d['result'] == 'tails' && (_0xcd9126 = 0xb4,
    _0x4b1ffd = 0x32a),
    isPlayer2(_0x1cf982['username']) && (_0x1ed4f7 = -0x6e,
    _0x5a3c6c = 0x65,
    _0x5bafae = _0x1ed4f7 + _0x5a3c6c / 0x2),
    console['log']('mid\x20=\x20' + _0x5bafae),
    $('#coin')['show'](),
    TweenMax['fromTo']($('#coin'), 1.3, {
        'left': _0x279bf5,
        'top': _0x1ed4f7,
        'scale': 0.5
    }, {
        'left': 0x208,
        'top': _0x5bafae,
        'scale': 0x1,
        'ease': Linear['easeNone']
    }),
    TweenMax['fromTo']($('#coin\x20img'), 1.3, {
        'rotationX': _0xcd9126
    }, {
        'rotationX': _0x4b1ffd,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            TweenMax['fromTo']($('#coin'), 1.3, {
                'left': 0x208,
                'top': _0x5bafae,
                'scale': 0x1
            }, {
                'left': _0x279bf5,
                'top': _0x5a3c6c,
                'scale': 0.5,
                'ease': Linear['easeNone']
            }),
            TweenMax['fromTo']($('#coin\x20img'), 1.3, {
                'rotationX': _0x4b1ffd
            }, {
                'rotationX': _0xcd9126,
                'ease': Linear['easeNone'],
                'onComplete': function() {
                    addLine(escapeHTML(_0x1cf982['username']) + '\x27s\x20coin\x20landed\x20on\x20' + _0xbe838d['result']),
                    TweenMax['to']($('#coin\x20img'), 0.7, {
                        'onComplete': function() {
                            $('#coin')['hide'](),
                            endAction();
                        }
                    });
                }
            });
        }
    }),
    playSound(CoinStart),
    playSound(CoinFlip);
}
function sortWatchers() {
    watchers_data['sort'](function(_0x24076f, _0x46f8fc) {
        if (~~_0x24076f['donator'] > ~~_0x46f8fc['donator'])
            return -0x1;
        if (~~_0x24076f['donator'] < ~~_0x46f8fc['donator'])
            return 0x1;
        if (~~!!_0x24076f['admin'] > ~~!!_0x46f8fc['admin'])
            return -0x1;
        if (~~!!_0x24076f['admin'] < ~~!!_0x46f8fc['admin'])
            return 0x1;
        if (~~!!_0x24076f['adjudicator'] > ~~!!_0x46f8fc['adjudicator'])
            return -0x1;
        if (~~!!_0x24076f['adjudicator'] < ~~!!_0x46f8fc['adjudicator'])
            return 0x1;
        if (_0x24076f['username']['toLowerCase']() < _0x46f8fc['username']['toLowerCase']())
            return -0x1;
        if (_0x24076f['username']['toLowerCase']() > _0x46f8fc['username']['toLowerCase']())
            return 0x1;
        return 0x0;
    });
}
function isWatching(_0x44ae99) {
    var _0x3ee039 = $('#watchers\x20.cell');
    for (var _0x5c531e = 0x0; _0x5c531e < _0x3ee039['length']; _0x5c531e++) {
        if (_0x3ee039['eq'](_0x5c531e)[0x0]['textContent'] == _0x44ae99)
            return !![];
    }
    return ![];
}
function addWatcher(_0x5320cb, _0x1ac1e7) {
    if (!_0x1ac1e7)
        for (var _0x311cf8 = 0x0; _0x311cf8 < watchers_data['length']; _0x311cf8++) {
            if (watchers_data[_0x311cf8]['username'] == _0x5320cb['username'])
                return;
        }
    var _0x331e6c = new Cell(_0x5320cb['username']);
    _0x5320cb['admin'] > 0x0 && (addClass(_0x331e6c, 'isAdmin'),
    addClass(_0x331e6c, 'admin' + _0x5320cb['admin']));
    _0x5320cb['adjudicator'] && addClass(_0x331e6c, 'adjudicator');
    _0x5320cb['donator'] && (addClass(_0x331e6c, 'donator'),
    $(_0x331e6c)['find']('span')['html'](colorize(_0x5320cb['username'])));
    if (_0x1ac1e7)
        return _0x331e6c['outerHTML'];
    _0x5320cb['u'] = _0x5320cb['username'],
    watchers_data['push'](_0x5320cb),
    sortWatchers(),
    insertAt(watchers_data['indexOf'](_0x5320cb), _0x331e6c, $('#watchers\x20.users')),
    $('#watchers\x20.watchers_txt')['text']('Watchers:\x20' + $('#watchers\x20.cell')['length']);
}
function removeWatcher(_0x35109b) {
    var _0x8892b2 = $('#watchers\x20.cell');
    for (var _0x12b534 = 0x0; _0x12b534 < _0x8892b2['length']; _0x12b534++) {
        if (_0x8892b2['eq'](_0x12b534)[0x0]['textContent'] == _0x35109b['username']) {
            _0x8892b2['eq'](_0x12b534)['remove']();
            break;
        }
    }
    $('#watchers\x20.watchers_txt')['text']('Watchers:\x20' + $('#watchers\x20.cell')['length']);
    for (_0x12b534 = 0x0; _0x12b534 < watchers_data['length']; _0x12b534++) {
        if (watchers_data[_0x12b534]['username'] == _0x35109b['username']) {
            watchers_data['splice'](_0x12b534, 0x1);
            break;
        }
    }
}
function saveWatchChatVSP() {
    watch_chat_vsp = $('#watch_chat\x20.cout_txt')['scrollTop']();
    var _0x611654 = $('#watch_chat\x20.cout_txt')['scrollMax']();
    (watch_chat_vsp >= _0x611654 - 0x50 || _0x611654 < 0x0) && (watch_chat_vsp += 0x3e8);
}
function restoreWatchChatVSP() {
    $('#watch_chat\x20.cout_txt')['scrollTop'](watch_chat_vsp);
}
function watchChatPrint(_0x32180f) {
    if (blocked_arr['indexOf'](_0x32180f['username']) >= 0x0)
        return;
    saveWatchChatVSP();
    var _0x27ade8 = '#0000FF';
    _0x32180f['color'] && (_0x27ade8 = '#' + _0x32180f['color']),
    username == _0x32180f['username'] && (_0x27ade8 == '#0000FF' && (_0x27ade8 = '#FF0000')),
    !_0x32180f['html'] && (_0x32180f['message'] = escapeHTMLWithLinks(_0x32180f['message'])),
    $('#watch_chat\x20.cout_txt')['append']('<b><font\x20color=\x22' + _0x27ade8 + '\x22>' + escapeHTML(_0x32180f['username']) + ':\x20</font></b><font>' + _0x32180f['message'] + '</font><br>'),
    restoreWatchChatVSP(),
    watch_chat_limit++;
}
function watchChatLoaded(_0xcb88a7) {
    var _0x249f18 = '';
    saveWatchChatVSP(),
    stopChatCycle($('#watch_chat_cycle'));
    for (var _0x74bd7c = 0x0; _0x74bd7c < _0xcb88a7['messages']['length']; _0x74bd7c++) {
        if (blocked_arr['indexOf'](_0xcb88a7['messages'][_0x74bd7c]['username']) >= 0x0)
            continue;
        _0xcb88a7['messages'][_0x74bd7c]['username'] == username && _0xcb88a7['messages'][_0x74bd7c]['color'] == '0000FF' && (_0xcb88a7['messages'][_0x74bd7c]['color'] = 'FF0000'),
        !_0xcb88a7['messages'][_0x74bd7c]['hidden'] && (!_0xcb88a7['messages'][_0x74bd7c]['html'] && (_0xcb88a7['messages'][_0x74bd7c]['message'] = escapeHTMLWithLinks(_0xcb88a7['messages'][_0x74bd7c]['message'])),
        _0x249f18 += '<font\x20color=\x22#' + _0xcb88a7['messages'][_0x74bd7c]['color'] + '\x22><b>' + escapeHTML(_0xcb88a7['messages'][_0x74bd7c]['username']) + ':\x20</b></font><font>' + _0xcb88a7['messages'][_0x74bd7c]['message'] + '</font><br>');
    }
    $('#watch_chat\x20.cout_txt')['html'](_0x249f18),
    restoreWatchChatVSP();
}
function exitDueling() {
    $('#field')['hide'](),
    $('#duel\x20.card')['detach'](),
    $('.all_good')['hide'](),
    recycleCards(),
    removeFieldSpellPic(),
    TweenMax['killAll']();
}
function initSiding(_0x4b9cc6) {
    gotoDuel('siding'),
    killAllTweens(),
    actionsQueue = [],
    duel_active = !![],
    !duelist && ($('#draw_btn')['hide'](),
    $('#mulligan_btn')['hide']()),
    hideDim(),
    hideDuelOver(),
    removeCardMenu(),
    clearDeck(),
    exitDueling(),
    $('#done_siding1')['hide'](),
    $('#done_siding2')['hide'](),
    $('#lifepoints1')['hide'](),
    $('#lifepoints2')['hide'](),
    $('#status1\x20.status_txt')['text'](''),
    $('#status2\x20.status_txt')['text'](''),
    $('#skill_bg')['hide'](),
    $('#skill_btn')['hide'](),
    games++,
    duelist ? ($('#done_siding_btn')['show'](),
    $('#done_siding_btn')['disable'](![]),
    $('#siding_btn')['hide'](),
    $('#swap_btn')['show'](),
    $('#swap_btn')['disable'](!![]),
    $('#reset_btn')['show'](),
    $('#reset_btn')['disable'](![]),
    $('#defeat_btn')['hide'](),
    $('#draw_btn')['hide'](),
    $('#mulligan_btn')['hide'](),
    $('#siding_in_progress')['hide'](),
    $('#rematch_btn')['hide'](),
    $('#call_admin_btn')['show'](),
    $('#call_admin_btn')['disable'](!rated && !automaticTourney),
    updateActive(!![]),
    deck_holes_arr = [],
    side_holes_arr = [],
    extra_holes_arr = [],
    sidingMainArr = [],
    sidingSideArr = [],
    sidingExtraArr = [],
    sidingMainTotal = 0x0,
    sidingSideTotal = 0x0,
    sidingExtraTotal = 0x0,
    speed && ($('#skill_bg')['show'](),
    $('#skill_btn')['show']())) : ($('#siding_in_progress')['show'](),
    $('#done_siding_btn')['hide']()),
    (admin || adjudicator) && ($('#host_loss_btn')['disable'](![]),
    $('#opponent_loss_btn')['disable'](![]),
    $('#cancel_duel_btn')['disable'](![]),
    $('#cancel_duel_btn')['show']());
}
function Phase(_0x376036) {
    var _0x2f41e4 = $('<div\x20id=\x22' + _0x376036 + '\x22\x20class=\x22phase\x22></div>')
      , _0x4f65e4 = $('<img\x20class=\x22background\x22\x20src=\x22' + IMAGES_START + 'svg/phase_background.svg\x22\x20/>')
      , _0x45bdb2 = $('<img\x20class=\x22phase_dark_blue\x22\x20src=\x22' + IMAGES_START + 'svg/phase_dark_blue.svg\x22\x20/>')
      , _0x28e151 = $('<img\x20class=\x22phase_dark_red\x22\x20src=\x22' + IMAGES_START + 'svg/phase_dark_red.svg\x22\x20/>')
      , _0x25b1fb = $('<img\x20class=\x22phase_blue\x20phase_lit\x22\x20src=\x22' + IMAGES_START + 'svg/phase_blue.svg\x22\x20/>')
      , _0xdc2755 = $('<img\x20class=\x22phase_red\x20phase_lit\x22\x20src=\x22' + IMAGES_START + 'svg/phase_red.svg\x22\x20/>')
      , _0xc2188e = $('<span\x20class=\x22gray_txt\x20arial_rounded25\x22>' + _0x376036['toUpperCase']() + '</span>')
      , _0x2835a6 = $('<span\x20class=\x22white_txt\x20arial_rounded25\x22>' + _0x376036['toUpperCase']() + '</span>');
    return _0x2f41e4['append'](_0x4f65e4),
    _0x2f41e4['append'](_0x45bdb2),
    _0x2f41e4['append'](_0x28e151),
    _0x2f41e4['append'](_0x25b1fb),
    _0x2f41e4['append'](_0xdc2755),
    _0x2f41e4['append'](_0xc2188e),
    _0x2f41e4['append'](_0x2835a6),
    _0x2f41e4;
}
function Counter(_0x848cc1) {
    var _0x18daab = $('<div\x20class=\x22counter\x22></div>');
    _0x848cc1 && _0x18daab['attr']('id', _0x848cc1);
    var _0x4c7d33 = $('<div\x20class=\x22content\x22></div>')
      , _0x30b0de = $('<img\x20class=\x22background\x22\x20src=\x22' + IMAGES_START + 'svg/counter.svg\x22\x20/>')
      , _0x584526 = $('<img\x20class=\x22glow\x22\x20src=\x22' + IMAGES_START + 'svg/counter_glow.svg\x22\x20/>');
    _0x584526['hide']();
    var _0x15b8d3 = $('<span\x20class=\x22total_txt\x22>1</span>');
    return _0x4c7d33['append'](_0x30b0de),
    _0x4c7d33['append'](_0x584526),
    _0x18daab['append'](_0x4c7d33),
    _0x18daab['append'](_0x15b8d3),
    _0x18daab['mouseover'](function() {
        _0x584526['show']();
    }),
    _0x18daab['mouseout'](function() {
        _0x584526['hide']();
    }),
    _0x18daab;
}
function removePermission() {
    $('#status1\x20.status_txt')['text']() == 'Waiting\x20for\x20permission' && $('#status1\x20.status_txt')['text'](''),
    $('#status2\x20.status_txt')['text']() == 'Waiting\x20for\x20permission' && $('#status2\x20.status_txt')['text']('');
}
function updateViewing() {
    switch (viewing) {
    case 'Deck':
        viewCards(Player1()['main_arr']);
        break;
    case 'Graveyard':
        viewCards(player1['grave_arr']);
        break;
    case 'Banished':
        viewCards(player1['banished_arr']);
        break;
    case 'Extra\x20Deck':
        viewCards(Player1()['extra_arr']);
        break;
    case 'Opponent\x27s\x20Public\x20Extra\x20Deck':
        viewCards(Player1()['opponent']['extra_arr']);
        break;
    case 'Opponent\x27s\x20Extra\x20Deck':
        viewCards(Player1()['opponent']['extra_arr']);
        break;
    case 'Opponent\x27s\x20Deck':
        viewCards(Player1()['opponent']['main_arr']);
        break;
    case 'Opponent\x27s\x20Graveyard':
        viewCards(player1['opponent']['grave_arr']);
        break;
    case 'Opponent\x27s\x20Banished':
        viewCards(player1['opponent']['banished_arr']);
        break;
    case 'Opponent\x27s\x20Hand':
        viewCards(Player1()['opponent']['hand_arr']);
        break;
    case 'Xyz\x20Materials':
        viewCards(viewing_card_with_materials['data']('xyz_arr'));
        break;
    }
}
function questionE(_0x3d0bde) {
    _0x3d0bde['data']('cardfront')['data']('name') == 'Question' && (duel_log['is'](':visible') && toggleDuelLog(),
    $('#log_btn')['hide'](),
    watch_chat['is'](':visible') && toggleWatchersChat(),
    $('#watchers_btn')['hide']());
}
function unquestionE(_0x17c676) {
    _0x17c676['data']('cardfront')['data']('name') == 'Question' && (duelist && $('#log_btn')['show'](),
    $('#watchers_btn')['show']());
}
function stopViewing(_0x307dae) {
    if (duelist && _0x307dae['username'] == username)
        switch (_0x307dae['viewing']) {
        case 'Deck\x20(Picking\x20Card)':
        case 'Deck\x20(Picking\x202\x20Cards)':
        case 'Deck\x20(Picking\x203\x20Cards)':
        case 'Deck\x20(Picking\x204\x20Cards)':
            if (next_callback == 'Place\x20cards\x20on\x20top\x20of\x20deck\x20randomly')
                break;
        case 'Deck':
            break;
        case 'Opponent\x27s\x20Hand':
            for (var _0x5ca183 = 0x0; _0x5ca183 < Player2()['hand_arr']['length']; _0x5ca183++) {
                TweenMax['to'](Player2()['hand_arr'][_0x5ca183], 0x0, {
                    'rotationY': 0xb4 + ABOUT_ZERO
                }),
                Player2()['hand_arr'][_0x5ca183]['onRotate']();
            }
            initHand(Player2());
            break;
        }
    else {
        if (duelist) {
            if (_0x307dae['viewing'] == 'Opponent\x27s\x20Deck')
                Send({
                    'action': 'Duel',
                    'play': 'Shuffle\x20deck'
                }),
                shiftDeck(Player2());
            else
                _0x307dae['viewing'] == 'Opponent\x27s\x20Hand' && Send({
                    'action': 'Duel',
                    'play': 'Shuffle\x20hand'
                });
        }
    }
    if (_0x307dae['username'] == Player1()['username'] || _0x307dae['username'] == username)
        $('#status1\x20.status_txt')['text']('');
    else
        _0x307dae['username'] == Player2()['username'] && $('#status2\x20.status_txt')['text']('');
}
function maximizeWatchers() {
    var _0x5ccda4 = $('#watchers\x20.cell')['length'] * 0x14;
    _0x5ccda4 > 0xac && (_0x5ccda4 = 0xac),
    $('#watchers\x20.cell')['length'] > 0x2 && ($('#watchers\x20.users')['css']('height', _0x5ccda4),
    $('#chat_buttons')['hide'](),
    $('#watchers\x20.cell')['length'] <= 0x8 && $('#watchers\x20.users')['addClass']('maximized'));
}
function minimizeWatchers() {
    $('#watchers\x20.users')['css']('height', 0x32),
    $('#watchers\x20.users')['removeClass']('maximized'),
    $('#watchers\x20.users')['scrollTop'](watchers_vsp),
    $('#chat_buttons')['show']();
}
function watchersScrollE() {
    watchers_vsp = $('#watchers\x20.users')['scrollTop']();
    var _0x280cfb = $('#watchers\x20.users')['scrollMax']();
    watchers_vsp >= _0x280cfb && (watchers_vsp += 0x3e8);
}
function watchersMoveE(_0x5da71a) {
    updateMouse(_0x5da71a),
    parseInt($('#watchers\x20.users')['css']('height')) > 0x32 && (watchers_vsp = mouseYScaled - parseInt($('#watchers')['css']('top')) + $('#watchers\x20.users')['scrollTop']() - 0xa);
}
function toggleWatchersChat() {
    determineChatX($('#watch_chat')),
    $('#watch_chat')['is'](':visible') ? $('#watch_chat')['hide']() : ($('#watch_chat')['show'](),
    $('#chats')['append']($('#watch_chat')),
    restoreWatchChatVSP(),
    $('#watch_chat\x20.cin_txt')['focus'](),
    setupInput($('#watch_chat\x20.cin_txt')));
}
function toggleDuelLog() {
    determineChatX($('#duel_log')),
    $('#duel_log')['is'](':visible') ? $('#duel_log')['hide']() : ($('#duel_log')['show'](),
    $('#chats')['append']($('#duel_log')),
    restoreDuelLogVSP(),
    $('#duel_log\x20.search_txt')['focus'](),
    $('#duel_log\x20.search_txt')['select'](),
    restoreDuelLogVSP());
}
function findCard(_0x3fa7bc, _0xefff17, _0xd57883, _0x507ca6) {
    var _0x3600fc = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player1['s1'], player1['s2'], player1['s3'], player1['s4'], player1['s5'], player1['pendulumLeft'], player1['pendulumRight'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], player2['s1'], player2['s2'], player2['s3'], player2['s4'], player2['s5'], player2['pendulumLeft'], player2['pendulumRight'], player2['fieldSpell'], linkLeft, linkRight, player1['skillCard'], player2['skillCard']];
    if (_0xefff17)
        for (var _0x2a0f54 = 0x0; _0x2a0f54 < player1['hand_arr']['length']; _0x2a0f54++) {
            _0x3600fc['push'](player1['hand_arr'][_0x2a0f54]);
        }
    if (_0xd57883)
        for (_0x2a0f54 = 0x0; _0x2a0f54 < player1['grave_arr']['length']; _0x2a0f54++) {
            _0x3600fc['push'](player1['grave_arr'][_0x2a0f54]);
        }
    for (var _0x437031 = 0x0; _0x437031 < _0x3fa7bc['length']; _0x437031++) {
        for (var _0x1a9264 = 0x0; _0x1a9264 < _0x3600fc['length']; _0x1a9264++) {
            if (_0x3600fc[_0x1a9264]) {
                if (_0x3600fc[_0x1a9264]['data']('face_down'))
                    continue;
                if (_0x3600fc[_0x1a9264]['data']('cardfront')['data']('treated_as') == _0x3fa7bc[_0x437031] || _0x507ca6 && _0x3600fc[_0x1a9264]['data']('cardfront')['data']('treated_as') && _0x3600fc[_0x1a9264]['data']('cardfront')['data']('treated_as')['indexOf'](_0x3fa7bc[_0x437031]) >= 0x0)
                    return !![];
            }
        }
    }
    return ![];
}
function findEffect(_0x303788) {
    var _0x29785b = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player1['s1'], player1['s2'], player1['s3'], player1['s4'], player1['s5'], player1['pendulumLeft'], player1['pendulumRight'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], player2['s1'], player2['s2'], player2['s3'], player2['s4'], player2['s5'], player2['pendulumLeft'], player2['pendulumRight'], player2['fieldSpell'], linkLeft, linkRight, player1['skillCard'], player2['skillCard']]
      , _0x4ee03d = [player1['hand_arr'], player1['grave_arr'], player1['banished_arr'], player1['opponent']['grave_arr'], player1['opponent']['banished_arr']];
    for (var _0x5bb7da = 0x0; _0x5bb7da < _0x4ee03d['length']; _0x5bb7da++) {
        for (var _0xbc04a8 = 0x0; _0xbc04a8 < _0x4ee03d[_0x5bb7da]['length']; _0xbc04a8++) {
            _0x29785b['push'](_0x4ee03d[_0x5bb7da][_0xbc04a8]);
        }
    }
    for (_0x5bb7da = 0x0; _0x5bb7da < _0x29785b['length']; _0x5bb7da++) {
        if (_0x29785b[_0x5bb7da]) {
            if (str(_0x29785b[_0x5bb7da]['data']('cardfront')['data']('effect'))['indexOf'](_0x303788) >= 0x0)
                return !![];
        }
    }
    return ![];
}
function showE(_0xc5a124, _0x45db61) {
    var _0x40b951 = [];
    switch (_0xc5a124) {
    case 'Opponent\x27s\x20Deck':
        _0x40b951 = Player1()['opponent']['main_arr'];
        break;
    case 'Opponent\x27s\x20Deck\x20(partial)':
    case 'Opponent\x27s\x20Deck\x20(Top\x203\x20Cards)':
        removePermission();
        for (var _0x461ce5 = 0x0; _0x461ce5 < _0x597b1d(0x3, _0x45db61); _0x461ce5++) {
            _0x40b951['push'](Player1()['opponent']['main_arr'][_0x461ce5]);
        }
        break;
    case 'Opponent\x27s\x20Deck\x20(Top\x205\x20Cards)':
        removePermission();
        for (_0x461ce5 = 0x0; _0x461ce5 < _0x597b1d(0x5, _0x45db61); _0x461ce5++) {
            _0x40b951['push'](Player1()['opponent']['main_arr'][_0x461ce5]);
        }
        break;
    case 'Opponent\x27s\x20Deck\x20(Top\x201\x20Cards)':
        removePermission();
        for (_0x461ce5 = 0x0; _0x461ce5 < _0x597b1d(0x1, _0x45db61); _0x461ce5++) {
            _0x40b951['push'](Player1()['opponent']['main_arr'][_0x461ce5]);
        }
        break;
    case 'Opponent\x27s\x20Hand':
        _0x40b951 = Player1()['opponent']['hand_arr'];
        break;
    case 'Opponent\x27s\x20Extra\x20Deck':
        _0x40b951 = Player1()['opponent']['extra_arr'];
        break;
    }
    duelist && _0x45db61['username'] != username && player1 == Player1() && (viewing = _0xc5a124,
    $('#view\x20.title_txt')['text']('Viewing\x20' + _0xc5a124),
    viewCards(_0x40b951, _0x45db61));
    if (_0x45db61['username'] == Player2()['username'])
        $('#status1\x20.status_txt')['text']('Viewing\x20' + _0xc5a124);
    else
        _0x45db61['username'] == Player1()['username'] && $('#status2\x20.status_txt')['text']('Viewing\x20' + _0xc5a124);
    endAction();
    function _0x597b1d(_0x5581bd, _0x4a82e6) {
        if (!_0x4a82e6 || !_0x4a82e6['deck'])
            return _0x5581bd;
        return ~~_0x4a82e6['deck']['length'];
    }
}
function duelStart(_0x44f8d5) {
    log('duelStart'),
    exitTP(),
    gotoDueling(),
    turnCount = 0x0,
    TweenMax['fromTo']([$('#duel\x20#field_content'), $('#' + currentLabel)], 0.75, {
        'alpha': 0x0
    }, {
        'alpha': 0x1,
        'delay': 0.5,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            duelist && (firstCards = _0x44f8d5['cards']),
            shiftDecks(),
            solo && (turn_player = getPlayer(username)),
            actionsQueue['push'](simultaneousDraw),
            actionsQueue['push'](simultaneousDraw),
            actionsQueue['push'](simultaneousDraw),
            !speed && !rush && (actionsQueue['push'](simultaneousDraw),
            actionsQueue['push'](simultaneousDraw)),
            rush && actionsQueue['push'](simultaneousDraw),
            actionsQueue['push'](function() {
                !solo && ($('#cig2_txt')['show'](),
                $('#cib2_txt')['show']()),
                $('#cig1_txt')['show'](),
                $('#cib1_txt')['show'](),
                TweenMax['fromTo']([$('#cig2_txt'), $('#cib2_txt'), $('#cig1_txt'), $('#cib1_txt')], 0x1, {
                    'alpha': 0x0
                }, {
                    'alpha': 0x1
                }),
                startTurn(),
                !$(':focus')[0x0] && (duelFocus = $('#duel\x20.cin_txt'),
                duelFocus['focus']()),
                duelist && Send({
                    'action': 'Duel',
                    'play': 'Ready',
                    'status': 'Dueling',
                    'shuffle': $('#auto_shuffle_cb')['is'](':checked') || !$('#auto_shuffle_cb')['is'](':visible')
                }),
                duelist && !solo && $('#mulligan_btn')['length'] == 0x1 && ($('#mulligan_btn')['show'](),
                $('#mulligan_btn')['disable'](![]),
                $('#draw_btn')['hide']());
            }),
            stopQueue = ![],
            performNextAction(),
            $('#field')['css']('pointer-events', 'auto');
        }
    });
}
function simultaneousDraw() {
    console['log']('simultaneousDraw');
    var _0xbf4196;
    if (Player1()['main_arr']['length'] > 0x0) {
        var _0x2455f4 = removeTopCardFromDeck(Player1());
        _0xbf4196 = _0x2455f4,
        Player1()['hand_arr']['push'](_0x2455f4),
        determineHandPosition(Player1()),
        organizeHand(Player1());
        var _0x1fefce = 0xb4 + ABOUT_ZERO;
        player1['username'] == username && (_0x1fefce = ABOUT_ZERO,
        _0x2455f4['data']('cardfront')['reinitialize'](firstCards[0x0])),
        console['log']('rotY\x20=\x20' + _0x1fefce),
        TweenMax['to'](_0x2455f4, easeSeconds, {
            'left': handDestination,
            'top': player1['handY'],
            'scale': 0.25,
            'rotation': player1['rot'],
            'rotationY': _0x1fefce,
            'ease': Linear['easeNone'],
            'onComplete': function() {
                duelist && firstCards['splice'](0x0, 0x1);
            }
        }),
        $('#duel\x20.cards')['append'](_0x2455f4);
    }
    if (Player2()['main_arr']['length'] > 0x0) {
        var _0x5dddd8 = removeTopCardFromDeck(Player2());
        _0xbf4196 = _0x5dddd8,
        Player2()['hand_arr']['push'](_0x5dddd8),
        determineHandPosition(Player2()),
        organizeHand(Player2()),
        TweenMax['to'](_0x5dddd8, easeSeconds, {
            'left': handDestination,
            'top': player2['handY'],
            'scale': 0.25,
            'rotation': player2['rot'],
            'rotationY': 0xb4 + ABOUT_ZERO,
            'ease': Linear['easeNone']
        }),
        $('#duel\x20.cards')['append'](_0x5dddd8);
    }
    if (!_0xbf4196) {
        endAction();
        return;
    }
    TweenMax['to'](_0xbf4196, easeSeconds, {
        'alpha': 0x1,
        'onComplete': function() {
            endAction(),
            actionsQueue['length'] == 0x0 && (shiftDeck(Player1()),
            shiftDeck(Player2()));
        }
    }),
    playSound(DrawSound);
}
function switchDuelists(_0x12e2ee, _0x128deb, _0x4e5045, _0x56af53, _0x5ccd02) {
    var _0x59c6d7 = JSON['parse'](JSON['stringify'](_0x12e2ee[_0x128deb]))
      , _0x35a337 = JSON['parse'](JSON['stringify'](_0x12e2ee[_0x4e5045]));
    _0x12e2ee[_0x4e5045] = _0x59c6d7,
    _0x12e2ee[_0x128deb] = _0x35a337;
    if (_0x56af53) {
        var _0xcf58df = JSON['parse'](JSON['stringify'](_0x12e2ee[_0x56af53]))
          , _0x2db7b9 = JSON['parse'](JSON['stringify'](_0x12e2ee[_0x5ccd02]));
        _0x12e2ee[_0x5ccd02] = _0xcf58df,
        _0x12e2ee[_0x56af53] = _0x2db7b9;
    }
}
function showFaceDownCards() {
    $('#view\x20.card')['each'](function() {
        (duelist || admin || show_cards) && viewing == 'Banished' && $(this)['data']('face_down') && $(this)['data']('cardfront')['data']('initialized') && $(this)['data']('cardfront')['show']();
    });
}
function hideFaceDownCards(_0x426b00) {
    updateMouse(_0x426b00);
    if (inBounds($(this)))
        return;
    $('#view\x20.card')['each'](function() {
        (duelist || admin || show_cards) && viewing == 'Banished' && $(this)['data']('face_down') && $(this)['data']('cardfront')['data']('initialized') && $(this)['data']('cardfront')['hide']();
    });
}
function hideSelectZones() {
    $('#m1_select')['hide'](),
    m1_select['stop'](),
    $('#m2_select')['hide'](),
    m2_select['stop'](),
    $('#m3_select')['hide'](),
    m3_select['stop'](),
    $('#m4_select')['hide'](),
    m4_select['stop'](),
    $('#m5_select')['hide'](),
    m5_select['stop'](),
    $('#m1_select2')['hide'](),
    m1_select2['stop'](),
    $('#m2_select2')['hide'](),
    m2_select2['stop'](),
    $('#m3_select2')['hide'](),
    m3_select2['stop'](),
    $('#m4_select2')['hide'](),
    m4_select2['stop'](),
    $('#m5_select2')['hide'](),
    m5_select2['stop'](),
    $('#s1_select')['hide'](),
    s1_select['stop'](),
    $('#s2_select')['hide'](),
    s2_select['stop'](),
    $('#s3_select')['hide'](),
    s3_select['stop'](),
    $('#s4_select')['hide'](),
    s4_select['stop'](),
    $('#s5_select')['hide'](),
    s5_select['stop'](),
    $('#field_spell1_select')['hide'](),
    field_spell1_select['stop'](),
    $('#field_spell2_select')['hide'](),
    field_spell2_select['stop'](),
    $('#link_left_select')['hide'](),
    link_left_select['stop'](),
    $('#link_right_select')['hide'](),
    link_right_select['stop']();
}
function flipDecks(_0x5efe65, _0x4ef955) {
    removePermission(),
    player1['deck_face_up'] = !![],
    player2['deck_face_up'] = !![],
    player1['main_arr'] = shuffle(player1, player1['main_arr'], _0x4ef955['player1_ids']),
    player2['main_arr'] = shuffle(player2, player2['main_arr'], _0x4ef955['player2_ids']),
    shiftDeck(player1),
    shiftDeck(player2);
    for (var _0x4c85d = 0x0; _0x4c85d < player1['main_arr']['length']; _0x4c85d++) {
        !player1['main_arr'][_0x4c85d]['data']('cardfront')['data']('initialized') && player1['main_arr'][_0x4c85d]['data']('cardfront')['initializeFromData'](_0x4ef955['player1_deck'][_0x4c85d]);
    }
    for (_0x4c85d = 0x0; _0x4c85d < player2['main_arr']['length']; _0x4c85d++) {
        !player2['main_arr'][_0x4c85d]['data']('cardfront')['data']('initialized') && player2['main_arr'][_0x4c85d]['data']('cardfront')['initializeFromData'](_0x4ef955['player2_deck'][_0x4c85d]);
    }
    shiftDeck(player1),
    shiftDeck(player2),
    endAction();
}
function flipDecksBack(_0x55af72, _0x504598) {
    player1['deck_face_up'] = ![],
    player2['deck_face_up'] = ![],
    player1['main_arr'] = shuffle(player1, player1['main_arr'], _0x504598['player1_ids']),
    player2['main_arr'] = shuffle(player2, player2['main_arr'], _0x504598['player2_ids']),
    shiftDeck(player1),
    shiftDeck(player2),
    endAction();
}
function turnFaceDown(_0x10c76c, _0x3a4e0e) {
    var _0x2259ec = getFieldCard(_0x10c76c, _0x3a4e0e);
    _0x2259ec['data']('face_down', !![]),
    _0x2259ec['data']('counters', 0x0),
    $('#field')['append'](_0x2259ec),
    TweenMax['to'](_0x2259ec, easeSeconds, {
        'rotation': _0x10c76c['rot'],
        'rotationY': 0xb4 + ABOUT_ZERO,
        'ease': Linear['easeNone'],
        'onComplete': function() {}
    }),
    updateXyzMaterials(_0x10c76c, _0x2259ec),
    playSound(Flip);
}
var summoning_card, summoning_play;
$('#deck_hidden')['mouseenter'](showDeckMenu),
$('#select_zones\x20div')['click'](chooseZone);
function cardMenuE() {
    if (!Duelist()) {
        menu_reason = 'You\x20are\x20not\x20a\x20duelist';
        return;
    }
    var _0x21712a = $(this)['parent']();
    automatic && showEquips(_0x21712a);
    _0x21712a['data']('controller') != player1 && (_0x21712a['data']('controller') == player3 && (updateController(player1, _0x21712a),
    updateOwner(player1, _0x21712a)));
    if (_0x21712a == menu_card) {
        menu_reason = 'card\x20is\x20menu_card';
        return;
    }
    if (!viewing) {
        if (!isPlayer1(_0x21712a['data']('controller')['username'])) {
            menu_reason = 'You\x20don\x27t\x20control\x20this\x20card';
            return;
        }
        if (isIn(_0x21712a, player1['main_arr']) >= 0x0) {
            menu_reason = 'Card\x20is\x20in\x20the\x20Deck';
            return;
        }
        if (isIn(_0x21712a, player1['extra_arr']) >= 0x0) {
            menu_reason = 'Card\x20is\x20in\x20the\x20Extra\x20Deck';
            return;
        }
    }
    if (automatic) {
        cardMenuE2(_0x21712a);
        return;
    }
    var _0x516940 = [];
    if (_0x21712a['data']('controller') != player1) {
        if (isIn(_0x21712a, player1['opponent']['grave_arr']) >= 0x0 || isIn(_0x21712a, player1['opponent']['banished_arr']) >= 0x0) {
            _0x21712a['data']('cardfront')['data']('card_type') == 'Monster' && !_0x21712a['data']('face_down') && (hasAvailableMonsterZones(player1) && (_0x516940['push']({
                'label': 'SS\x20ATK',
                'data': 'SS\x20ATK'
            }),
            _0x21712a['data']('cardfront')['data']('monster_color') != 'Link' && _0x516940['push']({
                'label': 'SS\x20DEF',
                'data': 'SS\x20DEF'
            })));
            if (isIn(_0x21712a, player1['opponent']['grave_arr']) >= 0x0)
                _0x516940['push']({
                    'label': 'Banish',
                    'data': 'Banish'
                });
            else
                !_0x21712a['data']('face_down') && _0x516940['push']({
                    'label': 'To\x20Grave',
                    'data': 'To\x20GY'
                });
            _0x516940['push']({
                'label': 'Target',
                'data': 'Target'
            });
            if (findCard(['Toadally\x20Awesome'], !![], !![], !![])) {
                if (_0x21712a['data']('cardfront')['data']('card_type') != 'Monster') {
                    if (hasAvailableSTZones(player1) && _0x21712a['data']('cardfront')['data']('type') != 'Field')
                        _0x516940['push']({
                            'label': 'To\x20S/T',
                            'data': 'To\x20ST'
                        });
                    else
                        player1['fieldSpell'] == null && _0x21712a['data']('cardfront')['data']('type') == 'Field' && _0x516940['push']({
                            'label': 'Activate',
                            'data': 'Activate\x20Field\x20Spell'
                        });
                }
            }
            hasXyzMonster(player1) && _0x516940['push']({
                'label': 'Attach',
                'data': 'Attach'
            });
        }
        (viewing == 'Opponent\x27s\x20Deck\x20(partial)' || viewing == 'Opponent\x27s\x20Deck\x20(Top\x203\x20Cards)' || viewing == 'Opponent\x27s\x20Deck\x20(Top\x205\x20Cards)') && isIn(_0x21712a, player1['opponent']['main_arr']) >= 0x0 && (findCard(['Destiny\x20HERO\x20-\x20Dominance', 'Flower\x20Cardian\x20Peony\x20with\x20Butterfly', 'Goddess\x20Skuld\x27s\x20Oracle', 'Millennium\x20Necklace', 'SPYRAL\x20GEAR\x20-\x20Drone']) && _0x516940['push']({
            'label': 'To\x20Top\x20of\x20Deck',
            'data': 'To\x20T\x20Deck\x202'
        }),
        findCard(['Flower\x20Cardian\x20Peony\x20with\x20Butterfly']) && _0x516940['push']({
            'label': 'To\x20Bottom\x20of\x20Deck',
            'data': 'To\x20B\x20Deck\x202'
        }),
        findCard(['Fairy\x20Tail\x20-\x20Rochka']) && _0x516940['push']({
            'label': 'To\x20Opponent\x27s\x20Hand',
            'data': 'To\x20hand\x202'
        }));
    } else {
        if (currentPhase == 'BP' && turn_player['username'] == username && !_0x21712a['data']('face_down') && isMonster(player1, _0x21712a)) {
            if (_0x21712a['data']('inATK'))
                countMonsters(player2) > 0x0 && _0x516940['push']({
                    'label': 'Attack',
                    'data': 'Attack'
                }),
                _0x516940['push']({
                    'label': 'Attack\x20Directly',
                    'data': 'Attack\x20directly'
                });
            else
                switch (_0x21712a['data']('cardfront')['data']('name')) {
                default:
                    if (_0x21712a['data']('cardfront')['data']('effect')['indexOf']('This\x20card\x20can\x20attack\x20while\x20in\x20face-up\x20Defense\x20Position') < 0x0)
                        break;
                case 'Elemental\x20HERO\x20Rampart\x20Blaster':
                case 'Invoked\x20Cocytus':
                case 'Superheavy\x20Samurai\x20Beast\x20Kyubi':
                case 'Superheavy\x20Samurai\x20Big\x20Benkei':
                case 'Superheavy\x20Samurai\x20General\x20Jade':
                case 'Superheavy\x20Samurai\x20Ninja\x20Sarutobi':
                case 'Superheavy\x20Samurai\x20Ogre\x20Shutendoji':
                case 'Superheavy\x20Samurai\x20Stealth\x20Ninja':
                case 'Superheavy\x20Samurai\x20Steam\x20Train\x20King':
                case 'Superheavy\x20Samurai\x20Swordmaster\x20Musashi':
                case 'Superheavy\x20Samurai\x20Wagon':
                case 'Superheavy\x20Samurai\x20Warlord\x20Susanowo':
                case 'Total\x20Defense\x20Shogun':
                    countMonsters(player2) > 0x0 && _0x516940['push']({
                        'label': 'Attack',
                        'data': 'Attack'
                    });
                    _0x516940['push']({
                        'label': 'Attack\x20Directly',
                        'data': 'Attack\x20directly'
                    });
                }
        }
        if (isIn(_0x21712a, player1['hand_arr']) >= 0x0) {
            hasAvailableSTZones(player1) && _0x21712a['data']('cardfront')['data']('effect')['indexOf']('You\x20can\x20Set\x20this\x20card\x20from\x20your\x20hand\x20to\x20your\x20Spell') >= 0x0 && _0x516940['push']({
                'label': 'Set\x20(To\x20S/T)',
                'data': 'Set\x20ST'
            });
            if (_0x21712a['data']('cardfront')['data']('pendulum')) {
                if (links && (!player1['s1'] || !player1['s5']))
                    _0x516940['push']({
                        'label': 'Activate',
                        'data': player1['s1'] && !player1['s5'] ? 'Activate\x20Pendulum\x20Right' : !player1['s1'] && player1['s5'] ? 'Activate\x20Pendulum\x20Left' : 'Activate\x20Pendulum'
                    });
                else
                    !links && (!player1['pendulumLeft'] && _0x516940['push']({
                        'label': 'Activate\x20Left',
                        'data': 'Activate\x20Pendulum\x20Left'
                    }),
                    !player1['pendulumRight'] && _0x516940['push']({
                        'label': 'Activate\x20Right',
                        'data': 'Activate\x20Pendulum\x20Right'
                    }));
            }
            _0x21712a['data']('cardfront')['data']('type') != 'Field' && _0x21712a['data']('cardfront')['data']('card_type') != 'Monster' && hasAvailableSTZones(player1) && (_0x21712a['data']('cardfront')['data']('card_type') == 'Spell' && _0x516940['push']({
                'label': 'Activate',
                'data': 'Activate\x20ST'
            }),
            _0x516940['push']({
                'label': 'Set',
                'data': 'Set\x20ST'
            }));
            _0x21712a['data']('cardfront')['data']('type') == 'Field' && !player1['fieldSpell'] && (_0x516940['push']({
                'label': 'Activate',
                'data': 'Activate\x20Field\x20Spell'
            }),
            _0x516940['push']({
                'label': 'Set',
                'data': 'Set\x20Field\x20Spell'
            }));
            if (hasAvailableMonsterZones(player1)) {
                if (_0x21712a['data']('cardfront')['data']('card_type') == 'Monster')
                    _0x516940['push']({
                        'label': 'Normal\x20Summon',
                        'data': 'Normal\x20Summon'
                    }),
                    _0x516940['push']({
                        'label': 'Set',
                        'data': 'Set\x20monster'
                    });
                else
                    findCard(['Magical\x20Hats']) && _0x516940['push']({
                        'label': 'Set\x20to\x20Monster\x20Zone',
                        'data': 'Set\x20monster'
                    });
            }
        }
        _0x21712a['data']('cardfront')['data']('monster_color') == 'Xyz' && isIn(_0x21712a, player1['extra_arr']) >= 0x0 && countOverlayOptions(player1) >= 0x1 && (_0x516940['push']({
            'label': 'OL\x20ATK',
            'data': 'OL\x20ATK'
        }),
        _0x516940['push']({
            'label': 'OL\x20DEF',
            'data': 'OL\x20DEF'
        }));
        (hasAvailableMonsterZones(player1) || links && (!linkLeft || !linkRight) && isIn(_0x21712a, player1['extra_arr']) >= 0x0) && _0x21712a['data']('cardfront')['data']('card_type') == 'Monster' && !_0x21712a['hasClass']('xyzmaterial') && !isMonster(player1, _0x21712a) && !isST(player1, _0x21712a) && (_0x516940['push']({
            'label': 'S.\x20Summon\x20ATK',
            'data': 'SS\x20ATK'
        }),
        _0x21712a['data']('cardfront')['data']('monster_color') != 'Link' && _0x516940['push']({
            'label': 'S.\x20Summon\x20DEF',
            'data': 'SS\x20DEF'
        }));
        if (isIn(_0x21712a, player1['grave_arr']) >= 0x0 && hasAvailableMonsterZones(player1))
            switch (_0x21712a['data']('cardfront')['data']('name')) {
            case 'First-Aid\x20Squad':
            case 'Paleozoic\x20Olenoides':
            case 'Paleozoic\x20Hallucigenia':
            case 'Paleozoic\x20Canadia':
            case 'Paleozoic\x20Pikaia':
            case 'Paleozoic\x20Eldonia':
            case 'Paleozoic\x20Dinomischus':
            case 'Paleozoic\x20Marrella':
            case 'Paleozoic\x20Leanchoilia':
            case 'The\x20Phantom\x20Knights\x20of\x20Dark\x20Gauntlets':
            case 'The\x20Phantom\x20Knights\x20of\x20Shadow\x20Veil':
            case 'The\x20Prime\x20Monarch':
                _0x516940['push']({
                    'label': 'SS\x20ATK',
                    'data': 'SS\x20ATK'
                }),
                _0x516940['push']({
                    'label': 'SS\x20DEF',
                    'data': 'SS\x20DEF'
                });
                break;
            }
        if (_0x21712a['data']('cardfront')['data']('monster_color') == 'Token') {
            _0x516940['push']({
                'label': 'Remove',
                'data': 'Remove\x20Token'
            });
            if (isMonster(player1, _0x21712a)) {
                if (_0x21712a['data']('inDEF'))
                    _0x516940['push']({
                        'label': 'To\x20ATK',
                        'data': 'To\x20ATK'
                    });
                else
                    _0x21712a['data']('cardfront')['data']('monster_color') != 'Link' && _0x516940['push']({
                        'label': 'To\x20DEF',
                        'data': 'To\x20DEF'
                    });
            }
            _0x516940['push']({
                'label': 'Move',
                'data': 'Move'
            });
        } else {
            isST(player1, _0x21712a) && _0x21712a['data']('face_down') && _0x516940['push']({
                'label': 'Activate',
                'data': 'Activate\x20ST'
            });
            player1['fieldSpell'] && _0x21712a[0x0] == player1['fieldSpell'][0x0] && _0x21712a['data']('face_down') && _0x516940['push']({
                'label': 'Activate',
                'data': 'Activate\x20Field\x20Spell'
            });
            isIn(_0x21712a, player1['main_arr']) >= 0x0 && (_0x516940['push']({
                'label': 'To\x20Hand',
                'data': 'To\x20hand'
            }),
            !player1['fieldSpell'] && _0x21712a['data']('cardfront')['data']('type') == 'Field' && _0x516940['push']({
                'label': 'Activate',
                'data': 'Activate\x20Field\x20Spell'
            }));
            isIn(_0x21712a, player1['grave_arr']) < 0x0 && !_0x21712a['hasClass']('xyzmaterial') && _0x516940['push']({
                'label': 'To\x20Graveyard',
                'data': 'To\x20GY'
            });
            !_0x21712a['data']('face_down') && ((isMonster(player1, _0x21712a) || isST(player1, _0x21712a) || player1['fieldSpell'] && _0x21712a[0x0] == player1['fieldSpell'][0x0] || player1['pendulumLeft'] && _0x21712a[0x0] == player1['pendulumLeft'][0x0] || player1['pendulumRight'] && _0x21712a[0x0] == player1['pendulumRight'][0x0] || isIn(_0x21712a, player1['grave_arr']) >= 0x0 || isIn(_0x21712a, player1['banished_arr']) >= 0x0) && _0x516940['push']({
                'label': 'Declare',
                'data': 'Declare'
            }));
            !links && _0x21712a['data']('cardfront')['data']('pendulum') && isIn(_0x21712a, player1['hand_arr']) < 0x0 && (!player1['pendulumLeft'] && _0x516940['push']({
                'label': 'Activate\x20Left',
                'data': 'Activate\x20Pendulum\x20Left'
            }),
            !player1['pendulumRight'] && _0x516940['push']({
                'label': 'Activate\x20Right',
                'data': 'Activate\x20Pendulum\x20Right'
            }));
            if (isMonster(player1, _0x21712a)) {
                if (_0x21712a['data']('inDEF'))
                    _0x21712a['data']('face_down') ? (_0x516940['push']({
                        'label': 'Flip\x20Summon',
                        'data': 'Flip\x20Summon'
                    }),
                    _0x516940['push']({
                        'label': 'Flip',
                        'data': 'Flip'
                    })) : _0x516940['push']({
                        'label': 'To\x20ATK',
                        'data': 'To\x20ATK'
                    });
                else
                    _0x21712a['data']('cardfront')['data']('monster_color') != 'Link' && _0x516940['push']({
                        'label': 'To\x20DEF',
                        'data': 'To\x20DEF'
                    });
                !_0x21712a['data']('face_down') && _0x21712a['data']('cardfront')['data']('monster_color') != 'Link' && _0x516940['push']({
                    'label': 'Set',
                    'data': 'Set\x20monster'
                });
            }
            isST(player1, _0x21712a) && !_0x21712a['data']('face_down') && _0x516940['push']({
                'label': 'Set',
                'data': 'Set\x20ST'
            });
            player1['fieldSpell'] && _0x21712a[0x0] == player1['fieldSpell'][0x0] && !_0x21712a['data']('face_down') && _0x516940['push']({
                'label': 'Set',
                'data': 'Set\x20Field\x20Spell'
            });
            isIn(_0x21712a, player1['hand_arr']) < 0x0 && isIn(_0x21712a, player1['main_arr']) < 0x0 && !isExtraDeckCard(_0x21712a) && _0x21712a['data']('cardfront')['data']('monster_color') != 'Token' && !_0x21712a['hasClass']('xyzmaterial') && _0x516940['push']({
                'label': 'To\x20Hand',
                'data': 'To\x20hand'
            });
            isIn(_0x21712a, player1['banished_arr']) < 0x0 && (_0x516940['push']({
                'label': 'Banish',
                'data': 'Banish'
            }),
            _0x516940['push']({
                'label': 'Banish\x20FD',
                'data': 'Banish\x20FD'
            }));
            player1['opponent'] == null && (player1['opponent'] = player2);
            if (isMonster(player1, _0x21712a) && hasAvailableMonsterZones(player1['opponent'])) {}
            isExtraDeckCard(_0x21712a) && isIn(_0x21712a, player1['extra_arr']) < 0x0 && _0x516940['push']({
                'label': 'To\x20Extra\x20Deck',
                'data': 'To\x20ED'
            });
            _0x21712a['data']('cardfront')['data']('pendulum') && isIn(_0x21712a, player1['main_arr']) < 0x0 && isIn(_0x21712a, player1['hand_arr']) < 0x0 && isIn(_0x21712a, player1['extra_arr']) < 0x0 && _0x516940['push']({
                'label': 'To\x20Extra\x20Deck\x20FU',
                'data': 'To\x20ED\x20FU'
            });
            !isExtraDeckCard(_0x21712a) && isIn(_0x21712a, player1['main_arr']) < 0x0 && !_0x21712a['hasClass']('xyzmaterial') && (_0x516940['push']({
                'label': 'To\x20Top\x20of\x20Deck',
                'data': 'To\x20T\x20Deck'
            }),
            (allowToBottom || findEffect('bottom') || findCard(['Tearlament'], !![], !![], !![]) && isIn(_0x21712a, player1['extra_arr']) < 0x0) && _0x516940['push']({
                'label': 'To\x20Bottom\x20of\x20Deck',
                'data': 'To\x20B\x20Deck'
            }));
            isIn(_0x21712a, player1['main_arr']) >= 0x0 && findCard(['The\x20Great\x20Noodle\x20Inversion']) && _0x516940['push']({
                'label': 'To\x20Bottom\x20of\x20Deck',
                'data': 'Upside\x20Down\x20effect\x202'
            });
            isIn(_0x21712a, player1['hand_arr']) < 0x0 && isIn(_0x21712a, player1['main_arr']) < 0x0 && isIn(_0x21712a, player1['extra_arr']) < 0x0 && _0x516940['push']({
                'label': 'Target',
                'data': 'Target'
            });
            (isMonster(player1, _0x21712a) || isST(player1, _0x21712a) || player1['fieldSpell'] && _0x21712a[0x0] == player1['fieldSpell'][0x0] && !_0x21712a['data']('face_down')) && _0x516940['push']({
                'label': 'Move',
                'data': 'Move'
            });
            isMonster(player1, _0x21712a) && countOverlayOptions(player1) > 0x1 && !_0x21712a['data']('face_down') && _0x516940['push']({
                'label': 'Overlay',
                'data': 'Overlay'
            });
            if (_0x21712a['data']('xyz_arr')['length'] > 0x0) {}
            (isIn(_0x21712a, player1['hand_arr']) >= 0x0 && _0x21712a['data']('cardfront')['data']('card_type') != 'Spell' || isIn(_0x21712a, player1['main_arr']) >= 0x0 || isIn(_0x21712a, player1['grave_arr']) >= 0x0) && (hasAvailableSTZones(player1) && _0x516940['push']({
                'label': 'To\x20S/T',
                'data': 'To\x20ST'
            }));
            isIn(_0x21712a, player1['hand_arr']) >= 0x0 && _0x516940['push']({
                'label': 'Declare',
                'data': 'Declare'
            });
            if (isIn(_0x21712a, player1['hand_arr']) >= 0x0 || isIn(_0x21712a, player1['extra_arr']) >= 0x0 || isIn(_0x21712a, player1['main_arr']) >= 0x0 && findCard(['Small\x20World'])) {
                _0x516940['push']({
                    'label': 'Reveal',
                    'data': 'Reveal'
                });
                if (_0x21712a['data']('face_up'))
                    _0x516940['push']({
                        'label': 'Stop\x20Revealing',
                        'data': 'Stop\x20revealing'
                    });
                else
                    (_0x21712a['data']('cardfront')['data']('effect')['includes']('becomes\x20revealed') || _0x21712a['data']('cardfront')['data']('effect')['includes']('remain\x20revealed') || findCard(['Contract\x20with\x20Don\x20Thousand'])) && _0x516940['push']({
                        'label': 'Stay\x20Revealed',
                        'data': 'Stay\x20revealed'
                    });
            }
            if (!_0x21712a['data']('face_down')) {
                if (isMonster(player1, _0x21712a)) {
                    switch (_0x21712a['data']('cardfront')['data']('name')) {
                    case 'Parasite\x20Paracide':
                        _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'To\x20T\x20Deck\x202\x20FU'
                        });
                        break;
                    case 'SPYRAL\x20GEAR\x20-\x20Drone':
                        player1['opponent']['main_arr']['length'] >= 0x3 && _0x516940['push']({
                            'label': 'Look\x20at\x20cards',
                            'data': 'Spyral\x20event'
                        });
                        break;
                    case 'Fairy\x20Tail\x20-\x20Rochka':
                        player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Show\x20top\x203\x20cards'
                        });
                        break;
                    case 'Destiny\x20HERO\x20-\x20Dominance':
                        player1['opponent']['main_arr']['length'] >= 0x5 && _0x516940['push']({
                            'label': 'Look\x20at\x20opponent\x20cards',
                            'data': 'Dominance\x20event'
                        });
                        break;
                    case 'Zolga\x20the\x20Prophet':
                        player1['opponent']['main_arr']['length'] >= 0x1 && _0x516940['push']({
                            'label': 'Look\x20at\x20opponent\x20cards',
                            'data': 'Zolga\x20event'
                        });
                        break;
                    case 'Flower\x20Cardian\x20Peony\x20with\x20Butterfly':
                        player1['opponent']['main_arr']['length'] >= 0x3 && _0x516940['push']({
                            'label': 'Look\x20at\x20cards',
                            'data': 'Peony\x20event'
                        });
                        break;
                    case 'Aegaion\x20the\x20Sea\x20Castrum':
                        player1['opponent']['extra_arr']['length'] > 0x0 && _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Random\x20extra\x20event'
                        });
                        break;
                    case 'Number\x2078:\x20Number\x20Archive':
                        player1['extra_arr']['length'] > 0x0 && _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Banish\x20random\x20ED\x20card'
                        });
                        break;
                    case 'Kozmo\x20Tincan':
                    case 'Noble\x20Knight\x20Borz':
                        player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Tincan\x20effect'
                        });
                        break;
                    case 'Hi-Speedroid\x20Rubber\x20Band\x20Shooter':
                        player1['main_arr']['length'] >= 0x2 && _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Rubber\x20Band\x20effect'
                        });
                        break;
                    case 'Rescue-ACE\x20Turbulence':
                        player1['main_arr']['length'] >= 0x1 && _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Turbulence\x20effect'
                        });
                        break;
                    case 'Crowley,\x20the\x20First\x20Propheseer':
                    case 'Power\x20Tool\x20Dragon':
                    case 'Machina\x20Metalcruncher':
                        player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Crescent\x20effect'
                        });
                        break;
                    case 'Salamangreat\x20Foxy':
                        player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                            'label': 'Banish\x203\x20Cards',
                            'data': 'Banish\x20top\x203\x20cards'
                        });
                        break;
                    case 'Time\x20Thief\x20Redoer':
                        player1['opponent']['main_arr']['length'] >= 0x1 && _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Redoer\x20event'
                        });
                        break;
                    case 'Necroface':
                        (player1['opponent']['banished_arr']['length'] >= 0x1 || player2['opponent']['banished_arr']['length'] >= 0x1) && _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Necroface\x20event'
                        });
                        break;
                    case 'Fiber\x20Jar':
                        _0x516940['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Fiber\x20effect'
                        });
                        break;
                    }
                    _0x21712a['data']('cardfront')['data']('id') == 0x27ce && (player1['extra_arr']['length'] >= 0x1 && _0x516940['push']({
                        'label': 'Banish\x20Random\x20Card',
                        'data': 'Banish\x20random\x20ED\x20card\x202'
                    }));
                }
                if (isST(player1, _0x21712a)) {
                    _0x21712a['data']('cardfront')['data']('name') == 'Pot\x20of\x20Desires' && player1['main_arr']['length'] >= 0xc && _0x516940['push']({
                        'label': 'Banish\x2010\x20Cards\x20FD',
                        'data': 'Banish\x20top\x2010\x20cards\x20FD'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Pot\x20of\x20Extravagance' && countFaceDownExtraDeckCards(player1) >= 0x3 && _0x516940['push']({
                        'label': 'Banish\x203\x20ED\x20Cards\x20FD',
                        'data': 'Banish\x203\x20random\x20ED\x20cards\x20FD'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Pot\x20of\x20Extravagance' && countFaceDownExtraDeckCards(player1) >= 0x6 && _0x516940['push']({
                        'label': 'Banish\x206\x20ED\x20Cards\x20FD',
                        'data': 'Banish\x206\x20random\x20ED\x20cards\x20FD'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Pot\x20of\x20Duality' && player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                        'label': 'Banish\x203\x20Cards',
                        'data': 'Banish\x20top\x203\x20cards'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'That\x20Grass\x20Looks\x20Greener' && player1['main_arr']['length'] > player1['opponent']['main_arr']['length'] && _0x516940['push']({
                        'label': 'Mill\x20' + String(player1['main_arr']['length'] - player1['opponent']['main_arr']['length']),
                        'data': 'Mill\x20difference'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Pharaoh\x27s\x20Treasure' && _0x516940['push']({
                        'label': 'To\x20Top\x20of\x20Deck\x20face-up',
                        'data': 'To\x20T\x20Deck\x20FU'
                    });
                    if (_0x21712a['data']('cardfront')['data']('id') == 0x2b67 && player1['main_arr']['length'] >= 0x3) {}
                    _0x21712a['data']('cardfront')['data']('name') == 'Spellbook\x20Library\x20of\x20the\x20Crescent' && player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Crescent\x20effect'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Bingo\x20Machine,\x20Go!!!' && player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Crescent\x20effect'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'My\x20Friend\x20Purrely' && player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Crescent\x20effect'
                    });
                    if (_0x21712a['data']('cardfront')['data']('name') == 'Exchange') {}
                    _0x21712a['data']('cardfront')['data']('name') == 'Goddess\x20Skuld\x27s\x20Oracle' && player2['main_arr']['length'] >= 0x3 && _0x516940['push']({
                        'label': 'Look\x20at\x20cards',
                        'data': 'Oracle\x20event'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'You\x27re\x20in\x20Danger!' && player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Page-Flip\x20effect'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Toon\x20Page-Flip' && player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Page-Flip\x20effect'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Gold\x20Pride\x20-\x20Start\x20Your\x20Engines!' && player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Page-Flip\x20effect'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Ancient\x20Telescope' && player2['main_arr']['length'] >= 0x1 && _0x516940['push']({
                        'label': 'Look\x20at\x20cards',
                        'data': 'Telescope\x20event'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Senri\x20Eye' && _0x516940['push']({
                        'label': 'Look\x20at\x20cards',
                        'data': 'Senri\x20event'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Draw\x20of\x20Fate' && _0x516940['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Fate\x20effect'
                    });
                    _0x21712a['data']('cardfront')['data']('name') == 'Old\x20Mind' && _0x516940['push']({
                        'label': 'To\x20Opponent\x27s\x20Hand',
                        'data': 'To\x20hand\x202'
                    });
                    if (_0x21712a['data']('cardfront')['data']('name') == 'Transmission\x20Gear' && moderator >= 0x2) {}
                    _0x21712a['data']('cardfront')['data']('name') == 'Fusion\x20Guard' && _0x516940['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Banish\x20random\x20Fusion\x20card'
                    }),
                    (_0x21712a['data']('cardfront')['data']('name') == 'The\x20Great\x20Noodle\x20Inversion' || _0x21712a['data']('id') == 0x3451) && _0x516940['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Upside\x20Down\x20effect'
                    });
                }
                (isIn(_0x21712a, player1['grave_arr']) >= 0x0 || isMonster(player1, _0x21712a)) && (_0x21712a['data']('cardfront')['data']('name') == 'Lilith,\x20Lady\x20of\x20Lament' && (player1['main_arr']['length'] >= 0x3 && hasAvailableSTZones(player1) && _0x516940['push']({
                    'label': 'Resolve\x20Effect',
                    'data': 'Lilith\x20effect'
                })),
                _0x21712a['data']('cardfront')['data']('name') == 'Super\x20Quantal\x20Fairy\x20Alphan' && (player1['main_arr']['length'] >= 0x3 && hasAvailableSTZones(player1) && _0x516940['push']({
                    'label': 'Resolve\x20Effect',
                    'data': 'Alphan\x20effect'
                })),
                _0x21712a['data']('cardfront')['data']('name') == 'Gizmek\x20Orochi,\x20the\x20Serpentron\x20Sky\x20Slasher' && (player1['main_arr']['length'] >= 0x8 && _0x516940['push']({
                    'label': 'Banish\x208\x20Cards\x20FD',
                    'data': 'Banish\x20top\x208\x20cards\x20FD'
                }))),
                _0x21712a['data']('cardfront')['data']('name') == 'Golden\x20Castle\x20of\x20Stromberg' && player1['fieldSpell'] && _0x21712a[0x0] == player1['fieldSpell'][0x0] && player1['main_arr']['length'] >= 0xa && _0x516940['push']({
                    'label': 'Banish\x2010\x20Cards\x20FD',
                    'data': 'Banish\x20top\x2010\x20cards\x20FD'
                }),
                _0x21712a['data']('cardfront')['data']('name') == 'Malefic\x20World' && player1['fieldSpell'] && _0x21712a[0x0] == player1['fieldSpell'][0x0] && player1['main_arr']['length'] >= 0x3 && _0x516940['push']({
                    'label': 'Resolve\x20Effect',
                    'data': 'Crescent\x20effect'
                }),
                _0x21712a['data']('cardfront')['data']('name') == 'Cynet\x20Storm' && player1['fieldSpell'] && _0x21712a[0x0] == player1['fieldSpell'][0x0] && _0x516940['push']({
                    'label': 'Resolve\x20Effect',
                    'data': 'Cynet\x20Storm'
                }),
                _0x21712a['data']('cardfront')['data']('name') == 'Prescience' && player1['opponent']['main_arr']['length'] > 0x0 && _0x516940['push']({
                    'label': 'Resolve\x20Effect',
                    'data': 'View\x20top\x20card\x202'
                });
            }
            _0x21712a['data']('cardfront')['data']('type') == 'Field' && isIn(_0x21712a, player1['main_arr']) >= 0x0 && (findCard(['Set\x20Rotation']) && (player1['fieldSpell'] == null && _0x516940['push']({
                'label': 'Set',
                'data': 'Set\x20Field\x20Spell'
            }),
            player1['opponent']['fieldSpell'] == null && _0x516940['push']({
                'label': 'Set\x20to\x20other\x20side',
                'data': 'Set\x20Field\x20Spell\x202'
            })),
            findCard(['Dream\x20Mirror\x20Hypnagogia', 'Vaylantz\x20World\x20-\x20Konig\x20Wissen', 'Vaylantz\x20World\x20-\x20Shinra\x20Bansho']) && (player1['opponent']['fieldSpell'] == null && _0x516940['push']({
                'label': 'Activate\x20to\x20other\x20side',
                'data': 'Activate\x20Field\x20Spell\x202'
            }))),
            _0x21712a['data']('cardfront')['data']('name') == 'Small\x20World' && _0x516940['push']({
                'label': 'Check\x20Options',
                'data': 'Resolve\x20Small\x20World'
            }),
            (isIn(_0x21712a, player1['hand_arr']) >= 0x0 && findCard(['Amazoness\x20Chain\x20Master', 'Exchange', 'Graceful\x20Tear', 'Lullaby\x20of\x20Obedience', 'Gold\x20Moon\x20Coin', 'Magical\x20Contract\x20Door', 'Scrounging\x20Goblin']) || isIn(_0x21712a, player1['banished_arr']) >= 0x0 && findCard(['Gift\x20Exchange'], !![], !![])) && _0x516940['push']({
                'label': 'To\x20Opponent\x27s\x20Hand',
                'data': 'To\x20hand\x202'
            }),
            findCard(['Jack-In-The-Hand']) && _0x516940['push']({
                'label': 'To\x20Opponent\x27s\x20Hand',
                'data': 'To\x20hand\x202'
            }),
            isIn(_0x21712a, player1['grave_arr']) >= 0x0 && _0x21712a['data']('cardfront')['data']('card_type') == 'Spell' && findCard(['Graverobber']) && _0x516940['push']({
                'label': 'To\x20Opponent\x27s\x20Hand',
                'data': 'To\x20hand\x202'
            }),
            _0x21712a['hasClass']('xyzmaterial') && (_0x516940 = [],
            _0x516940['push']({
                'label': 'Detach',
                'data': 'Detach'
            }),
            _0x516940['push']({
                'label': 'Banish',
                'data': 'Banish'
            })),
            (viewing == 'Deck\x20(Picking\x204\x20Cards)' || viewing == 'Deck\x20(Picking\x203\x20Cards)' || viewing == 'Deck\x20(Picking\x202\x20Cards)' || viewing == 'Deck\x20(Picking\x20Card)') && (isIn(_0x21712a, player1['main_arr']) >= 0x0 || isIn(_0x21712a, player1['opponent']['main_arr']) >= 0x0) && (_0x516940 = [],
            player1['temp_arr']['indexOf'](_0x21712a['data']('id')) < 0x0 && _0x516940['push']({
                'label': 'Choose',
                'data': 'Choose\x20card'
            })),
            player1['skillCard'] && _0x21712a[0x0] == player1['skillCard'][0x0] && (_0x516940 = [],
            _0x21712a['data']('face_down') ? _0x516940['push']({
                'label': 'Activate',
                'data': 'Activate\x20Skill'
            }) : (_0x516940['push']({
                'label': 'Set',
                'data': 'Set\x20Skill'
            }),
            _0x21712a['data']('cardfront')['data']('name') == 'Millennium\x20Necklace' && _0x516940['push']({
                'label': 'Look\x20at\x20cards',
                'data': 'Necklace\x20event'
            }),
            _0x21712a['data']('cardfront')['data']('name') == 'Cyberdark\x20Style' && _0x516940['push']({
                'label': 'Resolve\x20Effect',
                'data': 'Crescent\x20effect'
            }))),
            moderator >= 0x2 && isIn(_0x21712a, player1['hand_arr']) >= 0x0 && _0x516940['push']({
                'label': 'Swap',
                'data': 'Swap'
            });
        }
        hasXyzMonster(player1) && ((isIn(_0x21712a, player1['grave_arr']) >= 0x0 || isIn(_0x21712a, player1['banished_arr']) >= 0x0) && _0x516940['push']({
            'label': 'Attach',
            'data': 'Attach'
        }));
    }
    showMenu(_0x21712a, _0x516940);
}
function hasXyzMonster(_0xf47bca) {
    if (_0xf47bca['m1'] && _0xf47bca['m1']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (_0xf47bca['m2'] && _0xf47bca['m2']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (_0xf47bca['m3'] && _0xf47bca['m3']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (_0xf47bca['m4'] && _0xf47bca['m4']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (_0xf47bca['m5'] && _0xf47bca['m5']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (linkLeft && linkLeft['data']('controller') == _0xf47bca && linkLeft['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (linkRight && linkRight['data']('controller') == _0xf47bca && linkRight['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    return ![];
}
function menuOutE(_0x15b07b) {
    automatic && $('#equips')['children']()['detach']();
    if (!menu_card || menu_card['parent']()[0x0] == $('#view\x20>\x20.content')[0x0])
        return;
    updateMouse(_0x15b07b);
    var _0x4388ad = getScale(menu_card[0x0]) * 0x244
      , _0x2840f7 = getRotation(menu_card[0x0]);
    _0x2840f7 == 0xb4 && (_0x2840f7 = 0x0);
    _0x2840f7 != 0x0 && (_0x4388ad = getScale(menu_card[0x0]) * 0x190);
    _0x4388ad < 0x0 && (_0x4388ad = -_0x4388ad);
    var _0x49c41c = parseInt(menu_card['css']('top')) - _0x4388ad / 0x2
      , _0x4db3f8 = parseFloat($('#content')[0x0]['style']['zoom'])
      , _0x50b65c = _0x15b07b['pageY'] / contentScale - marginTop / contentScale * _0x4db3f8;
    if (_0x50b65c <= _0x49c41c + 0x5 || EDGE)
        return;
    removeCardMenu();
}
function initDuelistDuelStart() {
    console['log']('initDuelistDuelStart'),
    seen_deck = ![],
    seen_extra = ![],
    counter_btn['show'](),
    $('#good_btn')['show'](),
    $('#shuffle_btn')['show'](),
    $('#show_hand_btn')['show'](),
    $('#auto_draw_cb')['show'](),
    $('#auto_draw_cb')['checked'](!![]),
    $('#auto_draw_lbl')['show'](),
    $('#choose_zones')['show'](),
    $('#duel\x20.token_btn')['show'](),
    $('#coin_btn')['show'](),
    $('#die_btn')['show'](),
    $('#lp_txt')['show'](),
    $('#life_txt')['show'](),
    $('#plus_btn')['show'](),
    $('#minus_btn')['show'](),
    $('#turn')['show'](),
    $('#minus_btn')['show'](),
    $('#plus_btn')['hide'](),
    $('#turn')['hide'](),
    $('#pause_btn')['val']('Pause\x20Game'),
    $('#pause_btn')['insertBefore']($('#gone1')),
    $('#pause_btn')['data']('proxy')['insertAfter']($('#pause_btn')),
    $('#pause_btn')['hide'](),
    $('#pause_btn')['css']('left', 0x381),
    $('#pause_btn')['css']('top', 0x223),
    $('#pause_btn')['setWidth'](0x64),
    $('#choose_zones_cb')['checked'](links && !rush),
    $('#good_btn')['css']('opacity', duelist && player1['still_good'] ? 0.4 : 0x1);
}
function playStartTurn() {
    if (!$('#start_turn')['is'](':visible'))
        return;
    $('#start_turn\x20.red')['css']('opacity', 0x0),
    $('#start_turn\x20.white_glow')['css']('opacity', 0x0),
    TweenMax['to']($('#start_turn\x20.red'), 0.3, {
        'onComplete': function() {
            $('#start_turn\x20.red')['css']('opacity', 0x1),
            $('#start_turn\x20.white_glow')['css']('opacity', 0x1),
            TweenMax['to']($('#start_turn\x20.red'), 0.3, {
                'onComplete': function() {
                    playStartTurn();
                }
            });
        }
    });
}
function stopStartTurn() {
    TweenMax['killTweensOf']($('#start_turn\x20.red')),
    TweenMax['killTweensOf']($('#start_turn\x20.white_glow')),
    $('#start_turn\x20.red')['css']('opacity', '0'),
    $('#start_turn\x20.white_glow')['css']('opacity', '0');
}
function countMonsters(_0x322ad5) {
    var _0x3856cb = 0x0;
    return _0x322ad5['m1'] && _0x3856cb++,
    _0x322ad5['m2'] && _0x3856cb++,
    _0x322ad5['m3'] && _0x3856cb++,
    _0x322ad5['m4'] && _0x3856cb++,
    _0x322ad5['m5'] && _0x3856cb++,
    linkLeft && (linkLeft['data']('controller') == _0x322ad5 && _0x3856cb++),
    linkRight && (linkRight['data']('controller') == _0x322ad5 && _0x3856cb++),
    _0x3856cb;
}
function countSpells(_0x45add5) {
    var _0x477137 = 0x0;
    return _0x45add5['s1'] && _0x477137++,
    _0x45add5['s2'] && _0x477137++,
    _0x45add5['s3'] && _0x477137++,
    _0x45add5['s4'] && _0x477137++,
    _0x45add5['s5'] && _0x477137++,
    _0x477137;
}
function countFaceDownExtraDeckCards(_0x5ee3f7) {
    var _0x5ad6b9 = 0x0;
    for (var _0x437cd0 = 0x0; _0x437cd0 < _0x5ee3f7['extra_arr']['length']; _0x437cd0++) {
        _0x5ee3f7['extra_arr'][_0x437cd0]['data']('face_down') == !![] && _0x5ad6b9++;
    }
    return _0x5ad6b9;
}
function showMenu(_0x216109, _0x32db46) {
    if (!_0x32db46) {
        menu_reason = 'Menu\x20has\x20no\x20data';
        return;
    }
    _0x32db46['reverse']();
    if (TweenMax['isTweening'](_0x216109)) {
        menu_reason = 'Card\x20is\x20currently\x20tweening';
        return;
    }
    if (menu_card && menu_card[0x0] == _0x216109[0x0]) {
        menu_reason = 'Card\x20is\x20menu_card\x202';
        return;
    }
    if ($('#overlay')['is'](':visible')) {
        menu_reason = 'overlay\x20is\x20visible';
        return;
    }
    if (!$('#cig1_txt')['is'](':visible')) {
        menu_reason = 'Number\x20of\x20cards\x20in\x20GY\x20is\x20invisible';
        return;
    }
    if (menu_card) {
        if (getRotation(menu_card[0x0]) == -0x5a && inBounds(menu)) {
            menu_reason = 'Card\x20is\x20rotated';
            return;
        }
        removeCardMenu();
    }
    isInYourHand(player1, _0x216109) && (_0x216109['css']('top', _0x216109['data']('controller')['handY'] - 0x1e),
    $('#blue_target')['hide']());
    if (getScale(_0x216109[0x0]) < 0.2)
        for (var _0x48c0a4 = 0x0; _0x48c0a4 < _0x32db46['length']; _0x48c0a4++) {
            switch (_0x32db46[_0x48c0a4]['label']) {
            case 'S.\x20Summon\x20ATK':
                _0x32db46[_0x48c0a4]['label'] = 'SS\x20ATK';
                break;
            case 'S.\x20Summon\x20DEF':
                _0x32db46[_0x48c0a4]['label'] = 'SS\x20DEF';
                break;
            case 'To\x20Graveyard':
                _0x32db46[_0x48c0a4]['label'] = 'To\x20Grave';
                break;
            case 'To\x20Top\x20of\x20Deck':
                _0x32db46[_0x48c0a4]['label'] = 'To\x20T.\x20Deck';
                break;
            case 'To\x20Bottom\x20of\x20Deck':
                _0x32db46[_0x48c0a4]['label'] = 'To\x20B.\x20Deck';
                break;
            }
        }
    menu_card = _0x216109,
    menu['find']('#card_menu_content')['html']('');
    var _0x33fbb8 = getScale(_0x216109[0x0]);
    _0x33fbb8 < 0x0 && (_0x33fbb8 = -_0x33fbb8);
    var _0x2eaaaf = 0x190
      , _0x366496 = 0x244
      , _0xff0849 = getRotation(_0x216109[0x0]);
    _0xff0849 == 0xb4 && (_0xff0849 = 0x0);
    _0xff0849 != 0x0 && (_0x2eaaaf = 0x244,
    _0x366496 = 0x190);
    menu['css']('width', _0x2eaaaf * _0x33fbb8);
    if (_0x2eaaaf * _0x33fbb8 > 0x64) {
        console['log']('menu\x20is\x20too\x20wide');
        return;
    }
    var _0x5b74eb = 0x0
      , _0x317551 = 0xe;
    for (var _0x48c0a4 = 0x0; _0x48c0a4 < _0x32db46['length']; _0x48c0a4++) {
        automatic && _0x32db46[_0x48c0a4]['label'] == 'Set\x20ST' && (_0x32db46[_0x48c0a4]['label'] = 'Set');
        var _0x201b93 = $('<div\x20class=\x22card_menu_btn\x22><div\x20class=\x22image\x22><img\x20src=\x22' + IMAGES_START + 'svg/card_menu_btn_up.svg\x22\x20/></div><span\x20class=\x22card_menu_txt\x22>' + _0x32db46[_0x48c0a4]['label'] + '</span></div>');
        _0x201b93['data']('data', _0x32db46[_0x48c0a4]['data']),
        _0x201b93['click'](cardMenuClickE),
        _0x201b93['css']('width', _0x2eaaaf * _0x33fbb8),
        _0x201b93['css']('height', _0x317551),
        _0x201b93['find']('.image')['css']('width', _0x2eaaaf);
        menu['hasClass']('unloaded') && (_0x201b93['find']('.image\x20img')[0x0]['onload'] = function() {
            menu['removeClass']('unloaded');
        }
        );
        var _0x15940c = 0.265;
        _0xff0849 != 0x0 && (_0x15940c = 0.18);
        TweenMax['to'](_0x201b93['find']('.image'), 0x0, {
            'scaleY': _0x15940c,
            'scaleX': _0x33fbb8
        }),
        $('body')['append'](_0x201b93);
        var _0x4b87d3 = 0xe;
        _0x201b93['find']('.card_menu_txt')[0x0]['scrollHeight'] > 0xf ? (_0x5b74eb += _0x201b93['find']('.card_menu_txt')[0x0]['scrollHeight'] / _0x4b87d3 * _0x317551,
        _0x201b93['css']('height', _0x201b93['find']('.card_menu_txt')[0x0]['scrollHeight'] / _0x4b87d3 * _0x317551),
        TweenMax['to'](_0x201b93['find']('.image'), 0x0, {
            'scaleY': _0x15940c * _0x201b93['find']('.card_menu_txt')[0x0]['scrollHeight'] / _0x4b87d3,
            'scaleX': _0x33fbb8
        })) : (_0x5b74eb += _0x317551,
        _0x201b93['find']('.card_menu_txt')['css']('white-space', 'nowrap'));
        addButton(_0x201b93);
        switch (_0x32db46[_0x48c0a4]['label']) {
        case 'Activate\x20':
        case 'Flip\x20Deck':
        case 'Turn\x20Top\x20Card\x20FU':
        case 'Banish\x2010\x20Cards\x20FD':
        case 'Banish\x203\x20Cards':
        case 'Banish\x203\x20ED\x20Cards\x20FD':
        case 'Banish\x206\x20ED\x20Cards\x20FD':
        case 'Banish\x20random\x20ED\x20Card':
        case 'Banish\x20random\x20ED\x20Card\x20FD':
        case 'To\x20Top\x20of\x20Deck\x20face-up':
        case 'To\x20Opponent\x27s\x20Deck':
        case 'Face-Down':
        case 'Mill\x20difference':
        case 'Activate\x20to\x20other\x20side':
        case 'Set\x20to\x20your\x20side':
        case 'Set\x20to\x20other\x20side':
        case 'Resolve\x20Effect':
        case 'Look\x20at\x20cards':
        case 'Set\x20to\x20Monster\x20Zone':
        case 'Draw\x20Spell/Trap':
        case 'Draw\x20Spellcaster':
        case 'Choose':
        case 'Banish\x20ED\x20Card\x20FD':
        case 'To\x20Opponent\x27s\x20Hand':
        case 'Look\x20at\x20opponent\x20cards':
        case 'Card\x20of\x20Fate\x20Effect':
        case 'Banish\x20Random\x20Card':
        case 'Banish\x208\x20Cards\x20FD':
        case 'Stay\x20Revealed':
        case 'Stop\x20Revealing':
        case 'Check\x20Small\x20World':
        case 'Check\x20Options':
            _0x201b93['find']('img')['attr']('src', IMAGES_START + 'svg/card_menu_btn_up2.svg');
            break;
        }
        _0x32db46[_0x48c0a4]['label']['indexOf']('Mill\x20') >= 0x0 && _0x201b93['find']('img')['attr']('src', IMAGES_START + 'svg/card_menu_btn_up2.svg'),
        menu['find']('#card_menu_content')['append'](_0x201b93);
    }
    $('#viewing')['append'](menu),
    menu['css']('height', _0x5b74eb);
    var _0x1efd42 = parseInt(_0x216109['css']('left')) - _0x33fbb8 * _0x2eaaaf / 0x2
      , _0x3d405e = parseInt(_0x216109['css']('top')) - _0x366496 * _0x33fbb8 / 0x2 - _0x5b74eb;
    menu_card['parent']()[0x0] == $('#view\x20>\x20.content')[0x0] && (_0x3d405e += 0x3a + 0x20 - $('#view\x20>\x20.content')['scrollTop'](),
    _0x1efd42 += 0xdb + 0x5);
    var _0x1d22a9 = _0x3d405e + menu[0x0]['scrollHeight'];
    menu[0x0]['scrollHeight'] > parseInt(_0x216109['css']('height')) * _0x33fbb8 && (_0x1d22a9 = _0x3d405e + parseInt(_0x216109['css']('height')) * _0x33fbb8),
    menu['css']('top', _0x3d405e + 0x1),
    menu['data']('top', _0x3d405e + 0x1),
    menu['css']('left', _0x1efd42),
    TweenMax['set'](menu, {
        'scaleY': 0x1
    }),
    TweenMax['fromTo'](menu['find']('#card_menu_content'), 0.03 * _0x32db46['length'], {
        'top': _0x5b74eb
    }, {
        'top': 0x0,
        'ease': Linear['easeNone'],
        'onComplete': function() {
            var _0x3ea284 = 0x1;
            menu[0x0]['getBoundingClientRect']()['y'] < -marginTop && (_0x3ea284 = (menu[0x0]['scrollHeight'] + menu[0x0]['getBoundingClientRect']()['y']) / menu[0x0]['scrollHeight'],
            menu['css']('top', _0x3d405e - menu[0x0]['getBoundingClientRect']()['y']),
            TweenMax['set'](menu, {
                'scaleY': _0x3ea284
            }));
        }
    });
}
function isInYourHand(_0x7fda2, _0x2c540d) {
    for (var _0x81a47b = 0x0; _0x81a47b < _0x7fda2['hand_arr']['length']; _0x81a47b++) {
        if (!_0x7fda2['hand_arr'][_0x81a47b])
            return addLine(_0x7fda2['username'] + '\x27s\x20card\x20at\x20' + _0x81a47b + '\x20is\x20null'),
            ![];
        if (_0x7fda2['hand_arr'][_0x81a47b][0x0] == _0x2c540d[0x0])
            return !![];
    }
    return ![];
}
function cardMenuClickE(_0x32b278) {
    _0x32b278['stopPropagation'](),
    _0x32b278['preventDefault'](),
    cardMenuClicked(menu_card, $(this)['data']('data'), _0x32b278);
}
function removeCardMenu() {
    menu['detach'](),
    menu_card = null,
    restoreHandCards();
}
function resetDuelFocus() {
    (duelist || admin) && (duelFocus && ($(':focus')['length'] == 0x0 && duelFocus['focus']()));
}
function setDuelFocus() {
    duelFocus = $(this),
    console['log']('duelFocus\x20=\x20' + duelFocus);
}
function duelChatTimerE() {
    duelChatTyping = ![],
    duelChatTimer['reset']();
}
function duelChatTypeE() {
    if ($('#duel\x20.cin_txt')['val']() == '' || $('#duel\x20.cin_txt')['val']()['indexOf']('/') == 0x0 || duelChatTyping || !duelist)
        return;
    if (!Duelist())
        return;
    duelChatTyping = !![],
    duelChatTimer['start'](),
    Send({
        'action': 'Duel',
        'play': 'Typing'
    });
}
function showDeckMenu() {
    if (viewing)
        return;
    if (!Duelist())
        return;
    if (player1['main_arr']['length'] == 0x0)
        return;
    if (automatic) {
        showDeckMenu2();
        return;
    }
    var _0x114d64 = [];
    _0x114d64['push']({
        'label': 'Draw',
        'data': 'Draw\x20card'
    }),
    _0x114d64['push']({
        'label': 'Shuffle',
        'data': 'Shuffle\x20deck'
    }),
    _0x114d64['push']({
        'label': 'Mill',
        'data': 'Mill'
    }),
    _0x114d64['push']({
        'label': 'Banish\x20T.',
        'data': 'Banish'
    }),
    _0x114d64['push']({
        'label': 'Banish\x20FD',
        'data': 'Banish\x20FD'
    }),
    _0x114d64['push']({
        'label': 'View',
        'data': 'View\x20deck'
    }),
    !solo && _0x114d64['push']({
        'label': 'Show',
        'data': 'Show\x20deck'
    }),
    (findCard(['Convulsion\x20of\x20Nature']) || player1['deck_face_up']) && _0x114d64['push']({
        'label': 'Flip\x20Deck',
        'data': 'Flip\x20deck'
    }),
    findCard(['Grave\x20Lure']) && _0x114d64['push']({
        'label': 'Turn\x20Top\x20Card\x20FU',
        'data': 'Turn\x20top\x20card\x20face-up'
    }),
    findCard(['Card\x20of\x20Fate']) && _0x114d64['push']({
        'label': 'Card\x20of\x20Fate\x20Effect',
        'data': 'Card\x20of\x20Fate\x20effect'
    }),
    showMenu(player1['main_arr'][0x0], _0x114d64),
    (duelist && player1['skill'] == 'Aroma\x20Strategy' || duelist && player1['skill'] == 'Prescience' && findCard(['Prescience']) && player2['lifepoints'] > player1['lifepoints'] * 0x2) && previewFront(player1['main_arr'][0x0]['data']('cardfront'));
}
function startChooseMonsterZones() {
    console['log']('startChooseMonsterZones'),
    player1['m1'] == null && ($('#m1_select')['show'](),
    m1_select['play']()),
    player1['m2'] == null && ($('#m2_select')['show'](),
    m2_select['play']()),
    player1['m3'] == null && ($('#m3_select')['show'](),
    m3_select['play']()),
    !duel_links && !speed && !rush && (player1['m4'] == null && ($('#m4_select')['show'](),
    m4_select['play']()),
    player1['m5'] == null && ($('#m5_select')['show'](),
    m5_select['play']()));
}
function startChooseMonsterZones2() {
    player2['m1'] == null && ($('#m1_select2')['show'](),
    m1_select2['play']()),
    player2['m2'] == null && ($('#m2_select2')['show'](),
    m2_select2['play']()),
    player2['m3'] == null && ($('#m3_select2')['show'](),
    m3_select2['play']()),
    !duel_links && !speed && !rush && (player2['m4'] == null && ($('#m4_select2')['show'](),
    m4_select2['play']()),
    player2['m5'] == null && ($('#m5_select2')['show'](),
    m5_select2['play']()));
}
function startChooseSTZones() {
    player1['s1'] == null && ($('#s1_select')['show'](),
    s1_select['play']()),
    player1['s2'] == null && ($('#s2_select')['show'](),
    s2_select['play']()),
    player1['s3'] == null && ($('#s3_select')['show'](),
    s3_select['play']()),
    !duel_links && !speed && !rush && (player1['s4'] == null && ($('#s4_select')['show'](),
    s4_select['play']()),
    player1['s5'] == null && ($('#s5_select')['show'](),
    s5_select['play']()));
}
function startChooseFieldSpellZones() {
    player1['fieldSpell'] == null && ($('#field_spell1_select')['show'](),
    field_spell1_select['play']()),
    player2['fieldSpell'] == null && ($('#field_spell2_select')['show'](),
    field_spell2_select['play']());
}
function chooseZone() {
    var _0x21329b;
    switch (this) {
    case $('#m1_select')[0x0]:
        _0x21329b = 'M-1';
        break;
    case $('#m2_select')[0x0]:
        _0x21329b = 'M-2';
        break;
    case $('#m3_select')[0x0]:
        _0x21329b = 'M-3';
        break;
    case $('#m4_select')[0x0]:
        _0x21329b = 'M-4';
        break;
    case $('#m5_select')[0x0]:
        _0x21329b = 'M-5';
        break;
    case $('#m1_select2')[0x0]:
        _0x21329b = 'M2-1';
        break;
    case $('#m2_select2')[0x0]:
        _0x21329b = 'M2-2';
        break;
    case $('#m3_select2')[0x0]:
        _0x21329b = 'M2-3';
        break;
    case $('#m4_select2')[0x0]:
        _0x21329b = 'M2-4';
        break;
    case $('#m5_select2')[0x0]:
        _0x21329b = 'M2-5';
        break;
    case $('#s1_select')[0x0]:
        _0x21329b = 'S-1';
        break;
    case $('#s2_select')[0x0]:
        _0x21329b = 'S-2';
        break;
    case $('#s3_select')[0x0]:
        _0x21329b = 'S-3';
        break;
    case $('#s4_select')[0x0]:
        _0x21329b = 'S-4';
        break;
    case $('#s5_select')[0x0]:
        _0x21329b = 'S-5';
        break;
    case $('#field_spell1_select')[0x0]:
        _0x21329b = 'F-1';
        break;
    case $('#field_spell2_select')[0x0]:
        _0x21329b = 'F-2';
        break;
    case $('#link_left_select')[0x0]:
        _0x21329b = 'Left\x20Extra\x20Monster\x20Zone';
        break;
    case $('#link_right_select')[0x0]:
        _0x21329b = 'Right\x20Extra\x20Monster\x20Zone';
        break;
    }
    if (getCardByZone(player1, _0x21329b))
        return;
    hideSelectZones(),
    Send({
        'action': 'Duel',
        'play': summoning_play,
        'card': summoning_card['data']('id'),
        'zone': _0x21329b
    });
    if (automatic && $('#duelmessage')['is'](':visible'))
        hideDuelMessage();
    else
        automatic && $('#duel\x20.cancel_btn')['hide']();
    removeMenuData();
}
function getCardByZone(_0x341331, _0x840224) {
    switch (_0x840224) {
    case 'M-1':
        return _0x341331['m1'];
    case 'M-2':
        return _0x341331['m2'];
    case 'M-3':
        return _0x341331['m3'];
    case 'M-4':
        return _0x341331['m4'];
    case 'M-5':
        return _0x341331['m5'];
    case 'M2-1':
        return _0x341331['opponent']['m1'];
    case 'M2-2':
        return _0x341331['opponent']['m2'];
    case 'M2-3':
        return _0x341331['opponent']['m3'];
    case 'M2-4':
        return _0x341331['opponent']['m4'];
    case 'M2-5':
        return _0x341331['opponent']['m5'];
    case 'S-1':
        return _0x341331['s1'];
    case 'S-2':
        return _0x341331['s2'];
    case 'S-3':
        return _0x341331['s3'];
    case 'S-4':
        return _0x341331['s4'];
    case 'S-5':
        return _0x341331['s5'];
    case 'F-1':
        return _0x341331['fieldSpell'];
    case 'F-2':
        return _0x341331['opponent']['fieldSpell'];
    case 'Left\x20Extra\x20Monster\x20Zone':
        return isPlayer1(_0x341331['username']) ? linkLeft : linkRight;
    case 'Right\x20Extra\x20Monster\x20Zone':
        return isPlayer1(_0x341331['username']) ? linkRight : linkLeft;
    }
    return null;
}
function getZoneByCard(_0x5261d7, _0x36c25b) {
    switch (_0x36c25b) {
    case _0x5261d7['m1']:
        return 'M-1';
    case _0x5261d7['m2']:
        return 'M-2';
    case _0x5261d7['m3']:
        return 'M-3';
    case _0x5261d7['m4']:
        return 'M-4';
    case _0x5261d7['m5']:
        return 'M-5';
    case _0x5261d7['opponent']['m1']:
        return 'M2-1';
    case _0x5261d7['opponent']['m2']:
        return 'M2-2';
    case _0x5261d7['opponent']['m3']:
        return 'M2-3';
    case _0x5261d7['opponent']['m4']:
        return 'M2-4';
    case _0x5261d7['opponent']['m5']:
        return 'M2-5';
    case _0x5261d7['s1']:
        return 'S-1';
    case _0x5261d7['s2']:
        return 'S-2';
    case _0x5261d7['s3']:
        return 'S-3';
    case _0x5261d7['s4']:
        return 'S-4';
    case _0x5261d7['s5']:
        return 'S-5';
    case _0x5261d7['fieldSpell']:
        return 'F-1';
    case _0x5261d7['opponent']['fieldSpell']:
        return 'F-2';
    case linkLeft:
        return isPlayer1(_0x5261d7['username']) ? 'Left\x20Extra\x20Monster\x20Zone' : 'Right\x20Extra\x20Monster\x20Zone';
    case linkRight:
        return isPlayer1(_0x5261d7['username']) ? 'Right\x20Extra\x20Monster\x20Zone' : 'Left\x20Extra\x20Monster\x20Zone';
    }
    return null;
}
function hasAvailableSTZones(_0x358fe8) {
    if (_0x358fe8['s1'] == null || _0x358fe8['s2'] == null || _0x358fe8['s3'] == null)
        return !![];
    if (!speed && !rush) {
        if (_0x358fe8['s4'] == null || _0x358fe8['s5'] == null)
            return !![];
    }
    return ![];
}
function startAttack(_0x49110b) {
    updateMouse(_0x49110b),
    TweenMax['to']($('#sword'), 0x0, {
        'left': parseInt(attacking_card['css']('left')),
        'top': parseInt(attacking_card['css']('top')),
        'rotation': -0x5a
    }),
    $('#sword')['show'](),
    $('body')['mousemove'](moveSword),
    moveSword(_0x49110b),
    _0x49110b['stopPropagation'](),
    $('body')['click'](checkAttack);
}
function moveSword(_0x143a0a) {
    updateMouse(_0x143a0a);
    var _0x45b28f = mouseYScaled - parseInt($('#sword')['css']('top'))
      , _0x31b378 = mouseXScaled - parseInt($('#sword')['css']('left'));
    TweenMax['to']($('#sword'), 0x0, {
        'rotation': Math['atan2'](_0x45b28f, _0x31b378) * 0xb4 / Math['PI']
    });
}
function removeMenuData() {}
function stopCountdown() {
    countdownTimer['stop'](),
    hideCountdown();
}
function _0x17d7() {
    var _0x2ada00 = ['32728135RgeFXh', '8622QoxkRs', '5226697ouRnDd', '64Agpgbt', '486531CuMmsC', '715xxHikV', '2nyibIY', '6ggomwC', '3171190uwVfDh', '29608AJAkFy', '2203161ccoOxF'];
    _0x17d7 = function() {
        return _0x2ada00;
    }
    ;
    return _0x17d7();
}
function hideCountdown() {
    $('#countdown1')['text'](''),
    $('#countdown1')['hide'](),
    $('#countdown2')['text'](''),
    $('#countdown2')['hide']();
}
function updateCountdown(_0xd679d3, _0x2886b4) {
    _0xd679d3['seconds'] = _0x2886b4['countdown'],
    countdownE(),
    countdownTimer['start'](),
    addLine('Waiting\x20for\x20' + escapeHTML(_0x2886b4['username']) + '...');
}
function countdownE() {
    players['forEach'](function(_0x4820f7, _0x1983f4) {
        if (isOnline(_0x4820f7['username']) || !_0x4820f7['seconds'])
            return;
        _0x4820f7['countdown']['text'](_0x4820f7['seconds']),
        _0x4820f7['countdown']['show'](),
        _0x4820f7['seconds']--,
        _0x4820f7['seconds'] < 0x0 && (_0x4820f7['seconds'] = 0x0);
    });
}
function rejoinDuel(_0x1d5cb5, _0x4a33a8) {
    addLine(escapeHTML(_0x4a33a8['username']) + '\x20is\x20back.');
    if (_0x1d5cb5 == Player1())
        $('#gone1')['hide'](),
        $('#status1\x20.status_txt')['text']('');
    else
        _0x1d5cb5 == Player2() && ($('#gone2')['hide'](),
        $('#status2\x20.status_txt')['text'](''));
    if (replay && (!$('#gone1')['is'](':visible') || !$('#gone2')['is'](':visible')) || !replay && isOnline(_0x1d5cb5['opponent']['username'])) {
        stopCountdown();
        return;
    }
    _0x1d5cb5['countdown']['text'](''),
    _0x1d5cb5['countdown']['hide']();
}
function showExtraDeckMenu() {
    if (viewing != null && viewing != '') {
        viewingE(viewing);
        return;
    }
    if (player1['extra_arr']['length'] == 0x0)
        return;
    if (!Duelist())
        return;
    var _0x1ce250 = [];
    _0x1ce250['push']({
        'label': 'View',
        'data': 'View\x20ED'
    }),
    !solo && !automatic && _0x1ce250['push']({
        'label': 'Show',
        'data': 'Show\x20ED'
    }),
    findCard(['Banquet\x20of\x20Millions']) && countFaceDownExtraDeckCards(player1) >= 0x1 && _0x1ce250['push']({
        'label': 'Banish\x20random\x20ED\x20Card',
        'data': 'Banish\x20random\x20ED\x20card'
    }),
    showMenu(player1['extra_arr'][0x0], _0x1ce250);
}
function viewMaterials(_0x2b4998) {
    viewing_card_with_materials = getXyzHost(_0x2b4998['data']('id')),
    viewingE('Xyz\x20Materials'),
    Duelist() && Send({
        'action': 'Duel',
        'play': 'View\x20materials',
        'card': $(this)['data']('id')
    });
}
function getXyzHost(_0x475a60) {
    var _0x166587 = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], linkLeft, linkRight];
    for (var _0x4fed36 of _0x166587) {
        if (_0x4fed36 == null)
            continue;
        if (_0x4fed36['data']('id') == _0x475a60)
            return _0x4fed36;
        for (var _0x4f4c2c of _0x4fed36['data']('xyz_arr')) {
            if (_0x4f4c2c['data']('id') == _0x475a60)
                return _0x4fed36;
        }
    }
    return null;
}
function targetCard() {
    var _0x30d12f = $(this);
    if (_0x30d12f['hasClass']('xyzmaterial')) {
        viewMaterials(_0x30d12f);
        return;
    }
}
