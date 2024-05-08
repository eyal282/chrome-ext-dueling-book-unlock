(function (_0x43e792, _0x504c8a) {
    var _0x43c8fc = _0x2b3f
        , _0x327066 = _0x43e792();
    while (!![]) {
        try {
            var _0x3f4691 = -parseInt(_0x43c8fc(0x1dd)) / 0x1 + parseInt(_0x43c8fc(0x1d8)) / 0x2 + -parseInt(_0x43c8fc(0x1dc)) / 0x3 + parseInt(_0x43c8fc(0x1db)) / 0x4 * (-parseInt(_0x43c8fc(0x1d6)) / 0x5) + -parseInt(_0x43c8fc(0x1d7)) / 0x6 * (-parseInt(_0x43c8fc(0x1d5)) / 0x7) + -parseInt(_0x43c8fc(0x1da)) / 0x8 + -parseInt(_0x43c8fc(0x1d9)) / 0x9 * (-parseInt(_0x43c8fc(0x1d4)) / 0xa);
            if (_0x3f4691 === _0x504c8a)
                break;
            else
                _0x327066['push'](_0x327066['shift']());
        } catch (_0x497ec7) {
            _0x327066['push'](_0x327066['shift']());
        }
    }
}(_0x12a9, 0x56e0b));
var _0x4fb315 = (function () {
    var _0x34b28b = !![];
    return function (_0x228983, _0x3ab3ce) {
        var _0x1183d4 = _0x34b28b ? function () {
            if (_0x3ab3ce) {
                var _0x3cc60b = _0x3ab3ce['apply'](_0x228983, arguments);
                return _0x3ab3ce = null,
                    _0x3cc60b;
            }
        }
            : function () { }
            ;
        return _0x34b28b = ![],
            _0x1183d4;
    }
        ;
}())
    , _0x13a219 = _0x4fb315(this, function () {
        return _0x13a219['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x13a219)['search']('(((.+)+)+)+$');
    });
_0x13a219();
var spark = loadSVGAnimation(spark, 'spark', 'spark', 0x6e, 0x6e, 0x18), active_player, actionsQueue = [], allowToBottom = ![], automaticTourney = ![], awaiting_admin = ![], awaiting_defeat = ![], awaiting_start_turn = ![], awaiting_token = ![], bottomChoice, bottomChoices, currentPhase, deckData, duelHash, duelActions = 0x0, duel_active = ![], duel_links = ![], duel_log = $('#duel_log'), duel_log_vsp = 0x3e8, duel_logs = [], duel_vsp = 0x3e8, duelChatTyping = ![], duelFormat, easeSeconds = 0.3, easeSeconds2 = 0.4, easeSecondsBanish = 0.25, first, first_player, gameLossSound, games = 0x0, gameWinSound, handDestination = 0x0, lastDuelId = 0x0, life_amount, life_bar, lifepointMax = 0x0, linkLeft, linkLeftX = 426.3, linkLeftxEnd = 0x1b8, linkLeftxStart = 0x19d, linkRight, linkRightX = 0x265, linkRightxEnd = 0x272, linkRightxStart = 0x257, links = ![], linkY = 291.5, logTurnCount = 0x0, match = ![], match_type, menu_reason = '', paper1, paper2, paused = ![], pickedRPS = ![], player1 = {}, player2 = {}, player3 = {}, player4 = {}, players, prev_life, rated = ![], recycled_cards_arr = [], resetting = ![], rock1, rock2, rpsWinner = '', rush = ![], scissors1, scissors2, second, selectedToken = 0x0, show_cards = 0x0, solo = ![], speed = ![], stopQueue = !![], switched = ![], tag_duel = ![], topChoice, topChoices, turn_player = {}, turnCount = 0x0, unknown_totals = ![], used_allotted_rematch = 0x0, viewing, viewing_card_with_materials, watch_chat = $('#watch_chat'), watch_chat_limit = 0x0, watch_chat_vsp = 0x3e8, watchers_data = [], watchers_vsp = 0x0, red_stream = loadSVGAnimation(red_stream, 'red_stream', 'red_stream', 0x1f4, 0x14, 0x18), blue_stream = loadSVGAnimation(blue_stream, 'blue_stream', 'blue_stream', 0x1f4, 0x14, 0x18), bubbles1 = new MovieClip(), bubbles2 = new MovieClip(), bubbles3 = new MovieClip(), bubbles4 = new MovieClip(), Activate = 'sounds/activate.mp3', Attack = 'sounds/attack.mp3', Banish = 'sounds/banish.mp3', CoinFlip = 'sounds/coinflip.mp3', CoinStart = 'sounds/coinstart.mp3', CounterSound = 'sounds/counter.mp3', Decided = 'sounds/decided.mp3', Declare = 'sounds/declare.mp3', DiceSound = 'sounds/dice.mp3', DrawSound = 'sounds/draw.mp3', FaceDown = 'sounds/facedown.mp3', Flip = 'sounds/flip.mp3', LifePoints = 'sounds/lifepoints.mp3', LifePointsEnd = 'sounds/lifepoints_end.mp3', Move = 'sounds/move.mp3', NormalSummon = 'sounds/normal_summon.mp3', Ok = 'sounds/ok.mp3', PartnerFound = 'sounds/partner_found.mp3', Reveal = 'sounds/reveal.mp3', Shred = 'sounds/shred.mp3', SpecialSummon = 'sounds/special_summon.mp3', ShuffleHand = 'sounds/shuffle_hand.mp3', ShuffleSound = 'sounds/shuffle.mp3', Swap = 'sounds/swap.mp3', Switch = 'sounds/switch.mp3', Target = 'sounds/target.mp3', TurnChime = 'sounds/turn_chime.mp3?v=2', countdownTimer = new Timer(0x3d4);
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
        counters['forEach'](function (_0x4d1afc, _0x46960d) {
            $('#counters')['append'](_0x4d1afc);
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
        $('#watchers_btn')['mouseover'](function () {
            $('#watch_chat_tooltip')['show']();
        }),
        $('#watchers_btn')['mouseout'](function () {
            $('#watch_chat_tooltip')['hide']();
        }),
        $('#log_btn')['mouseover'](function () {
            $('#log_tooltip')['show']();
        }),
        $('#log_btn')['mouseout'](function () {
            $('#log_tooltip')['hide']();
        }),
        addDragging($('#watch_chat'), '.chat_top_bg', '.chat_background', function () {
            appendChat($('#watch_chat'));
        }, function () {
            toggleAds($('#watch_chat'));
        }),
        addDragging($('#duel_log'), '.chat_top_bg', '.chat_background', function () {
            appendChat($('#duel_log'));
        }, function () {
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
    for (var _0x4bcf89 = 0x1; _0x4bcf89 < 0x7; _0x4bcf89++) {
        getElement('side' + _0x4bcf89)['innerHTML'] = '',
            addClass(getElement('side' + _0x4bcf89), 'activate'),
            drawDice(_0x4bcf89, _0x4bcf89);
    }
    watch($('#coin\x20img'), 'transform', function () {
        var _0x2b5c93 = getRotationY(this);
        _0x2b5c93 < 0x0 ? $('#coin\x20.heads')['hide']() : $('#coin\x20.heads')['show']();
    }),
        SAFARI && $('#overlay\x20img')['attr']('src', 'images/overlay.webp');
}
function startDuel(_0x513f76) {
    console['log']('startDuel'),
        hideDim(),
        duel_active = !![],
        links = _0x513f76['links'],
        tag_duel = !!_0x513f76['tag_duel'],
        speed = _0x513f76['format'] == 'su' || _0x513f76['format'] == 'sr',
        rush = !!_0x513f76['rush'] || (_0x513f76['format'] == 'ru' || _0x513f76['format'] == 'rr'),
        solo = _0x513f76['format'] == 'so',
        rated = _0x513f76['rated'],
        match_type = _0x513f76['type'],
        duelFormat = _0x513f76['format'],
        automaticTourney = !!_0x513f76['automatic_tourney'];
    _0x513f76['type'] == 'm' && (match = !![]);
    lifepointMax = 0x1f40;
    tag_duel && duelId >= 0x97b869 && (lifepointMax = 0x3e80);
    speed && (lifepointMax = 0xfa0,
        tag_duel && (lifepointMax = 0x1770));
    duelId = _0x513f76['id'],
        lastDuelId = _0x513f76['id'],
        duelHash = _0x513f76['hash'],
        deckData = _0x513f76,
        player1 = new Player(),
        player2 = new Player(),
        players = [player1, player2],
        turn_player = player1;
    tag_duel && (player3 = new Player(),
        player4 = new Player(),
        _0x513f76['player3']['username'] == username && (switchDuelists(_0x513f76, 'player1', 'player3'),
            _0x513f76['player1']['grave'] = _0x513f76['player3']['grave'],
            _0x513f76['player1']['banished'] = _0x513f76['player3']['banished'],
            _0x513f76['player1']['field'] = _0x513f76['player3']['field'],
            turn_player = player3),
        switched && switchDuelists(_0x513f76, 'player3', 'player4'),
        player3['username'] = _0x513f76['player3']['username'],
        player4['username'] = _0x513f76['player4']['username'],
        player3['opponent'] = player2,
        player4['opponent'] = player1,
        player3['skill'] = _0x513f76['player3']['skill'],
        player4['skill'] = _0x513f76['player4']['skill'],
        player3['still_good'] = _0x513f76['player3']['still_good'],
        player4['still_good'] = _0x513f76['player4']['still_good']);
    player1['username'] = _0x513f76['player1']['username'],
        player2['username'] = _0x513f76['player2']['username'],
        player1['opponent'] = player2,
        player2['opponent'] = player1,
        player1['skill'] = _0x513f76['player1']['skill'],
        player2['skill'] = _0x513f76['player2']['skill'],
        player1['start'] = _0x513f76['player1']['start'],
        player2['start'] = _0x513f76['player2']['start'],
        player1['still_good'] = _0x513f76['player1']['still_good'],
        player2['still_good'] = _0x513f76['player2']['still_good'];
    if (zooming) { }
    turnCount = ~~_0x513f76['turnCount'];
}
function gotoDuel(_0x59df68) {
    goto('duel'),
        $('.duel_frame')['hide'](),
        $('#' + _0x59df68)['show'](),
        currentLabel = _0x59df68,
        $('#duel_content')['show']();
    switch (_0x59df68) {
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
        $('#field_stats\x20>\x20span')['css']('pointer-events', 'none'),
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
    var _0x35a9c9 = $('#duel_log\x20.log_txt')['scrollMax']();
    $('#duel_log\x20.log_txt')['data']('maxVPS', duel_log_vsp >= _0x35a9c9);
}
function restoreDuelLogVSP() {
    if ($('#duel_log\x20.log_txt')['data']('maxVPS')) {
        $('#duel_log\x20.log_txt')['scrollTop'](duel_log_vsp + 0x3e8);
        return;
    }
    var _0x3eed1b = duel_log_vsp;
    setTimeout(function () {
        $('#duel_log\x20.log_txt')['scrollTop'](_0x3eed1b);
    }, 0x14);
}
function duelLogPrint(_0x93a6c3) {
    if (!_0x93a6c3)
        return;
    if (_0x93a6c3 instanceof Array)
        _0x93a6c3['forEach'](function (_0x3981d1, _0x5d7ba8) {
            duel_logs['push'](_0x3981d1);
        }),
            updateDuelLog();
    else {
        duel_logs['push'](_0x93a6c3);
        var _0x404684 = '#0000FF'
            , _0x231f41 = _0x93a6c3['public_log']
            , _0x39ca8b = ''
            , _0x257691 = ''
            , _0x5d9cb2 = getTimestamp(_0x93a6c3['seconds']);
        !_0x93a6c3['seconds'] && _0x93a6c3['timestamp'] && (_0x5d9cb2 = _0x93a6c3['timestamp']);
        $('#duel_log\x20.private_cb')['is'](':checked') && (_0x93a6c3['private_log'] && (_0x231f41 = _0x93a6c3['private_log']));
        if ($('#duel_log\x20.search_txt')['val']() != '') {
            if (_0x231f41['toLowerCase']()['indexOf']($('#duel_log\x20.search_txt')['val']()['toLowerCase']()) < 0x0)
                return;
        }
        if (!_0x93a6c3['username'])
            _0x404684 = '#777777';
        else {
            if (player1['username'] == _0x93a6c3['username'] || tag_duel && player3['username'] == _0x93a6c3['username'])
                _0x404684 = '#FF0000';
            else
                player2['username'] == _0x93a6c3['username'] || tag_duel && player4['username'] == _0x93a6c3['username'] ? _0x404684 = '#0000FF' : _0x404684 = '#000000';
        }
        if ($('#duel_log\x20.usernames_cb')['is'](':checked')) {
            if (conceal && isPlayer1(_0x93a6c3['username']))
                _0x39ca8b = '\x20Red:';
            else
                conceal && isPlayer2(_0x93a6c3['username']) ? _0x39ca8b = '\x20Blue:' : _0x39ca8b = '\x20' + _0x93a6c3['username'] + ':';
        }
        if (_0x93a6c3['type'] == 'chat')
            $('#duel_log\x20.chat_cb')['is'](':checked') && (_0x257691 += '<font\x20color=\x22' + _0x404684 + '\x22>' + _0x5d9cb2 + escapeHTML(_0x39ca8b) + '\x20<i>' + escapeHTML(_0x231f41) + '</i></font><br>');
        else
            _0x93a6c3['type'] == 'duel' ? $('#duel_log\x20.duel_cb')['is'](':checked') && (_0x231f41 == 'Entered\x20Draw\x20Phase' && (logTurnCount++,
                _0x257691 += '<font\x20color=\x22' + _0x404684 + '\x22>----------------(Turn\x20' + logTurnCount + ')',
                logTurnCount < 0xa && (_0x257691 += '-'),
                _0x257691 += '----------------</font><br>'),
                _0x257691 += '<font\x20color=\x22' + _0x404684 + '\x22>' + _0x5d9cb2 + escapeHTML(_0x39ca8b) + '\x20' + escapeHTML(_0x231f41) + '</font><br>') : $('#duel_log\x20.game_cb')['is'](':checked') && (_0x257691 += '<font\x20color=\x22' + _0x404684 + '\x22>' + _0x5d9cb2 + escapeHTML(_0x39ca8b) + '\x20' + escapeHTML(_0x231f41) + '</font><br>');
        saveDuelLogVSP(),
            $('#duel_log\x20.log_txt')['append'](_0x257691),
            restoreDuelLogVSP();
    }
}
function updateDuelLog() {
    var _0x13a442 = '';
    logTurnCount = 0x0;
    for (var _0x5de5e6 = 0x0; _0x5de5e6 < duel_logs['length']; _0x5de5e6++) {
        var _0x2400c2 = '#0000FF'
            , _0x4ced89 = duel_logs[_0x5de5e6]['public_log']
            , _0x3d5312 = ''
            , _0x54b56d = getTimestamp(duel_logs[_0x5de5e6]['seconds']);
        !duel_logs[_0x5de5e6]['seconds'] && duel_logs[_0x5de5e6]['timestamp'] && (_0x54b56d = duel_logs[_0x5de5e6]['timestamp']);
        $('#duel_log\x20.private_cb')['is'](':checked') && (duel_logs[_0x5de5e6]['private_log'] && (_0x4ced89 = duel_logs[_0x5de5e6]['private_log']));
        if ($('#duel_log\x20.search_txt')['val']() != '') {
            if (_0x4ced89['toLowerCase']()['indexOf']($('#duel_log\x20.search_txt')['val']()['toLowerCase']()) < 0x0)
                continue;
        }
        if (!duel_logs[_0x5de5e6]['username'])
            _0x2400c2 = '#777777';
        else {
            if (player1['username'] == duel_logs[_0x5de5e6]['username'] || tag_duel && player3['username'] == duel_logs[_0x5de5e6]['username'])
                _0x2400c2 = '#FF0000';
            else
                player2['username'] == duel_logs[_0x5de5e6]['username'] || tag_duel && player4['username'] == duel_logs[_0x5de5e6]['username'] ? _0x2400c2 = '#0000FF' : _0x2400c2 = '#000000';
        }
        $('#duel_log\x20.usernames_cb')['is'](':checked') && (_0x3d5312 = '\x20' + duel_logs[_0x5de5e6]['username'] + ':');
        if (duel_logs[_0x5de5e6]['type'] == 'chat')
            $('#duel_log\x20.chat_cb')['is'](':checked') && (_0x13a442 += '<font\x20color=\x22' + _0x2400c2 + '\x22>' + _0x54b56d + escapeHTML(_0x3d5312) + '\x20<i>' + escapeHTML(_0x4ced89) + '</i></font><br>');
        else
            duel_logs[_0x5de5e6]['type'] == 'duel' ? $('#duel_log\x20.duel_cb')['is'](':checked') && (_0x4ced89 == 'Entered\x20Draw\x20Phase' && (logTurnCount++,
                _0x13a442 += '<font\x20color=\x22' + _0x2400c2 + '\x22>----------------(Turn\x20' + logTurnCount + ')',
                logTurnCount < 0xa && (_0x13a442 += '-'),
                _0x13a442 += '----------------</font><br>'),
                _0x13a442 += '<font\x20color=\x22' + _0x2400c2 + '\x22>' + _0x54b56d + escapeHTML(_0x3d5312) + '\x20' + escapeHTML(_0x4ced89) + '</font><br>') : $('#duel_log\x20.game_cb')['is'](':checked') && (_0x13a442 += '<font\x20color=\x22' + _0x2400c2 + '\x22>' + _0x54b56d + escapeHTML(_0x3d5312) + '\x20' + escapeHTML(_0x4ced89) + '</font><br>');
    }
    $('#duel_log\x20.log_txt')['html'](_0x13a442),
        console['log']('doing\x20here'),
        $('#duel_log\x20.log_txt')['scrollTop'](duel_log_vsp);
}
function getTimestamp(_0x17f19d) {
    var _0x55e9a4 = Math['floor'](_0x17f19d / 0x3c)
        , _0x54bcd9 = (_0x17f19d % 0x3c)['toString']();
    return _0x54bcd9['length'] < 0x2 && (_0x54bcd9 = '0' + _0x54bcd9),
        '[' + _0x55e9a4 + ':' + _0x54bcd9 + ']';
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
    var _0x29b402 = {
        'name': 'Rock',
        'treated_as': 'Rock',
        'effect': 'Rock\x20beats\x20scissors\x20but\x20loses\x20to\x20paper',
        'card_type': 'Monster',
        'monster_color': 'Ritual',
        'type': 'Rock',
        'attribute': 'EARTH',
        'pic': IMAGES_START + 'card/rock.jpg'
    };
    rock1['data']('cardfront')['initializeFromData'](_0x29b402),
        rock2['data']('cardfront')['initializeFromData'](_0x29b402),
        _0x29b402 = {
            'name': 'Paper',
            'effect': 'Paper\x20beats\x20rock\x20but\x20loses\x20to\x20scissors',
            'card_type': 'Monster',
            'monster_color': 'Normal',
            'type': 'Winged\x20Beast',
            'attribute': 'WIND',
            'pic': IMAGES_START + 'card/paper.jpg'
        },
        paper1['data']('cardfront')['initializeFromData'](_0x29b402),
        paper2['data']('cardfront')['initializeFromData'](_0x29b402),
        _0x29b402 = {
            'name': 'Scissors',
            'effect': 'Scissors\x20beats\x20paper\x20but\x20loses\x20to\x20rock',
            'card_type': 'Monster',
            'monster_color': 'Fusion',
            'type': 'Machine',
            'attribute': 'LIGHT',
            'pic': IMAGES_START + 'card/scissors.jpg'
        },
        scissors1['data']('cardfront')['initializeFromData'](_0x29b402),
        scissors2['data']('cardfront')['initializeFromData'](_0x29b402),
        bottomChoices = [rock1, paper1, scissors1],
        topChoices = [rock2, paper2, scissors2],
        TweenMax['fromTo']([rock1, paper1, scissors1], 0.5, {
            'top': 726.8
        }, {
            'top': 478.1,
            'delay': 0.3,
            'ease': Expo['easeInOut'],
            'onStart': function () {
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
            'onComplete': function () {
                duelist && Player1()['username'] == username && (rock1['click'](chooseRPS),
                    paper1['click'](chooseRPS),
                    scissors1['click'](chooseRPS));
            }
        });
}
function determineWinner(_0x117b6c) {
    pickedRPS = !![],
        console['log']('determineWinner');
    if (_0x117b6c['player2'] == username || tag_duel && _0x117b6c['player2'] == player1['partner']['username']) {
        _0x117b6c['player1'] = username,
            _0x117b6c['player2'] = player2['username'];
        var _0x2372c7 = _0x117b6c['player1_choice']
            , _0x412238 = _0x117b6c['player2_choice'];
        _0x117b6c['player1_choice'] = _0x412238,
            _0x117b6c['player2_choice'] = _0x2372c7;
    }
    rpsWinner = _0x117b6c['winner'];
    if (_0x117b6c['player1_choice'] == 'Rock')
        bottomChoice = rock1;
    else
        _0x117b6c['player1_choice'] == 'Paper' ? bottomChoice = paper1 : bottomChoice = scissors1;
    if (_0x117b6c['player2_choice'] == 'Rock')
        topChoice = rock2;
    else
        _0x117b6c['player2_choice'] == 'Paper' ? topChoice = paper2 : topChoice = scissors2;
    var _0x2f6a34 = 0xb4 + ABOUT_ZERO;
    duelist && (_0x2f6a34 = ABOUT_ZERO);
    if (Player1()['username'] != username || !duelist)
        for (_0x3eacb9 = 0x0; _0x3eacb9 < bottomChoices['length']; _0x3eacb9++) {
            bottomChoice[0x0] != bottomChoices[_0x3eacb9][0x0] ? TweenMax['fromTo'](bottomChoices[_0x3eacb9], 0.5, {
                'top': 0x1de
            }, {
                'top': 0x31a,
                'rotationY': getRotationY(bottomChoices[_0x3eacb9][0x0]) + 0x168 + ABOUT_ZERO
            }) : TweenMax['fromTo'](bottomChoices[_0x3eacb9], 0.5, {
                'left': parseInt(bottomChoices[_0x3eacb9]['css']('left'))
            }, {
                'left': 0x20b,
                'rotationY': 0x168 + ABOUT_ZERO
            });
        }
    for (var _0x3eacb9 = 0x0; _0x3eacb9 < topChoices['length']; _0x3eacb9++) {
        topChoice[0x0] != topChoices[_0x3eacb9][0x0] ? TweenMax['fromTo'](topChoices[_0x3eacb9], 0.5, {
            'top': 0xa2,
            'rotationY': -0xb4 + ABOUT_ZERO
        }, {
            'top': -0x71,
            'rotationY': 0xb4 + ABOUT_ZERO
        }) : ($('#rps_start')['append'](topChoice),
            TweenMax['fromTo'](topChoices[_0x3eacb9], 0.5, {
                'left': parseInt(topChoices[_0x3eacb9]['css']('left'))
            }, {
                'left': 0x20b,
                'rotationY': 0x168 + ABOUT_ZERO,
                'onComplete': function () {
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
                            'onComplete': function () {
                                if (_0x117b6c['winner'] == Player2()['username'])
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
                                    _0x117b6c['winner'] == Player1()['username'] || _0x117b6c['winner'] != '' ? (TweenMax['fromTo'](bottomChoice, 0.2, {
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
                                            console['log']('data.winner\x20=\x20' + _0x117b6c['winner']),
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
                                                'onComplete': function () {
                                                    TweenMax['to'](rock1, 0.5, {
                                                        'top': 0x1de,
                                                        'left': 0x13f,
                                                        'rotationY': _0x2f6a34,
                                                        'ease': Linear['easeNone']
                                                    }),
                                                        TweenMax['to'](paper1, 0.5, {
                                                            'top': 0x1de,
                                                            'left': 0x20b,
                                                            'rotationY': _0x2f6a34,
                                                            'ease': Linear['easeNone']
                                                        }),
                                                        TweenMax['to'](scissors1, 0.5, {
                                                            'top': 0x1de,
                                                            'left': 0x2d7,
                                                            'rotationY': _0x2f6a34,
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
                                                            'onComplete': function () {
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
    var _0x528a04 = {
        'name': 'First',
        'effect': 'The\x20player\x20who\x20picks\x20this\x20card\x20will\x20go\x20first',
        'card_type': 'Monster',
        'monster_color': 'Effect',
        'type': 'Spellcaster',
        'attribute': 'LIGHT',
        'pic': IMAGES_START + 'card/first.jpg'
    };
    first['data']('cardfront')['initializeFromData'](_0x528a04),
        first['insertBefore']($('#over')),
        second = new Card(),
        _0x528a04 = {
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
        second['data']('cardfront')['initializeFromData'](_0x528a04),
        !solo && $('.field_decks')['css']('opacity', 0x0),
        $('#field')['css']('pointer-events', 'none'),
        TweenMax['fromTo'](first, 0.5, {
            'top': -0xc7
        }, {
            'top': 0x140,
            'onComplete': function () {
                currentLabel['indexOf']('tp_start') >= 0x0 && (duelist && rpsWinner == username && (first['find']('.content')['click'](pickFirst),
                    first['addClass']('tp_card'),
                    second['find']('.content')['click'](pickFirst),
                    second['addClass']('tp_card')),
                    TweenMax['to']($('#' + currentLabel + '\x20.field_decks'), 0x1, {
                        'alpha': 0x1,
                        'onComplete': function () {
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
function getDuelCard(_0x5200e7) {
    var _0x1a4f4a = player1['all_cards_arr']['concat'](player2['all_cards_arr']);
    for (var _0xd3b70 = 0x0; _0xd3b70 < _0x1a4f4a['length']; _0xd3b70++) {
        if (_0x1a4f4a[_0xd3b70]['data']('id') == _0x5200e7)
            return _0x1a4f4a[_0xd3b70];
    }
    return null;
}
function duelResponse(_0x9da6f6) {
    SOFT_PLAYS['indexOf'](_0x9da6f6['play']) < 0x0 && ($('.red_target')['hide'](),
        $('.blue_target')['hide'](),
        $('.green_target')['hide']());
    var _0x4505d5;
    if (_0x9da6f6['username'] == player1['username'])
        _0x4505d5 = player1;
    else {
        if (_0x9da6f6['username'] == player2['username'])
            _0x4505d5 = player2;
        else {
            if (tag_duel && _0x9da6f6['username'] == player3['username'])
                _0x4505d5 = player3;
            else
                tag_duel && _0x9da6f6['username'] == player4['username'] && (_0x4505d5 = player4);
        }
    }
    if (actionsQueue['length'] > 0x0)
        for (var _0x418c4a = 0x0; _0x418c4a < actionsQueue['length']; _0x418c4a++) { }
    _0x9da6f6['owner'] && _0x9da6f6['id'] && actionsQueue['push'](function () {
        updateOwner(getCurrentOwner(_0x9da6f6['owner']), getDuelCard(_0x9da6f6['id'])),
            endAction();
    });
    switch (_0x9da6f6['play']) {
        case 'Rejoin\x20duel':
            rejoinDuel(_0x4505d5, _0x9da6f6);
            break;
        case 'Add\x20watcher':
            addWatcher(_0x9da6f6);
            break;
        case 'Remove\x20watcher':
            removeWatcher(_0x9da6f6),
                enableAdminE();
            break;
        case 'Watcher\x20message':
            watchChatPrint(_0x9da6f6);
            break;
        case 'Siding':
            initSiding(_0x9da6f6),
                addLine(escapeHTML(_0x9da6f6['message']));
            break;
        case 'Siding\x20with\x20cards':
            initSiding(_0x9da6f6),
                addLine(escapeHTML(_0x9da6f6['message'])),
                createSidingHoles(_0x9da6f6),
                initSideCardFromData(_0x9da6f6);
            break;
        case 'Begin\x20next\x20duel':
            beginNextDuel(_0x9da6f6);
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
                tag_duel ? switchDuelists(_0x9da6f6, 'player1', 'player2', 'player3', 'player4') : switchDuelists(_0x9da6f6, 'player1', 'player2');
            else
                tag_duel && _0x9da6f6['player3']['username'] == username && switchDuelists(_0x9da6f6, 'player1', 'player3');
            deckData = _0x9da6f6;
            if (_0x9da6f6['starting']) {
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
                admittedDefeat(_0x4505d5, _0x9da6f6);
            break;
        case 'Left\x20duel':
            leftDuel(_0x4505d5, _0x9da6f6);
            break;
        case 'Quit\x20duel':
            quitDuel(_0x4505d5, _0x9da6f6);
            break;
        case 'Game\x20loss':
        case 'Match\x20loss':
            gamelossed(_0x4505d5, _0x9da6f6);
            break;
        case 'Loss':
            loss(_0x4505d5, _0x9da6f6);
            break;
        case 'Cancel\x20game':
            gameCanceled(_0x9da6f6);
            break;
        case 'Frozen':
            _0x9da6f6['targeted_username'] ? addLine(_0x9da6f6['targeted_username'] + '\x20has\x20been\x20frozen') : addLine(_0x9da6f6['username'] + '\x20has\x20been\x20frozen');
            break;
        case 'Beginner':
            _0x9da6f6['targeted_username'] ? addLine(_0x9da6f6['targeted_username'] + '\x20has\x20been\x20set\x20as\x20a\x20beginner') : addLine(_0x9da6f6['username'] + '\x20has\x20been\x20set\x20as\x20a\x20beginner');
            break;
        case 'RPS':
            determineWinner(_0x9da6f6);
            break;
        case 'Typing':
            typingE(_0x4505d5);
            break;
        case 'Duel\x20message':
            duelChatPrint(_0x9da6f6);
            _0x4505d5 && _0x4505d5['stopTyping']();
            duelist && _0x9da6f6['username'] == username && duelChatTimerE();
            break;
        case 'Reset\x20deck':
        case 'Swap\x20cards':
            hideDim(),
                $('#reset_btn')['disable'](![]),
                updateSideCards(_0x9da6f6),
                checkSidingCards();
            break;
        case 'Pause\x20game':
            pauseGame(_0x4505d5, _0x9da6f6);
            break;
        case 'Resume\x20game':
            resumeGame(_0x9da6f6);
            break;
        case 'Reset\x20game':
            actionsQueue['push'](function () {
                resetGame(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Call\x20admin':
            addLine(escapeHTML(_0x4505d5['username']) + '\x20has\x20called\x20a\x20judge'),
                $('#call_admin_btn')['disable'](!![]),
                awaiting_admin = !![];
            duelist && _0x4505d5['username'] == username && ($('#call_admin_btn')['disable'](![]),
                $('#call_admin_btn')['val']('Cancel\x20Call'));
            break;
        case 'Cancel\x20call':
            addLine(escapeHTML(_0x4505d5['username']) + '\x20cancelled\x20the\x20call'),
                awaiting_admin = ![];
            duelist && ($('#call_admin_btn')['disable'](![]),
                $('#call_admin_btn')['val']('Call\x20Judge'));
            break;
        case 'Offer\x20draw':
            addLine(escapeHTML(_0x4505d5['username']) + '\x20has\x20made\x20a\x20draw\x20offer');
            if (isPlayer2(_0x4505d5['username'])) {
                $('#draw_btn')['val']('Accept\x20Draw');
                return;
            }
            $('#draw_btn')['val']('Revoke\x20Draw');
            break;
        case 'Revoke\x20draw':
            addLine(escapeHTML(_0x4505d5['username']) + '\x20has\x20revoked\x20the\x20draw\x20offer'),
                $('#draw_btn')['val']('Offer\x20Draw');
            break;
        case 'Accept\x20draw':
            acceptDraw(_0x4505d5, _0x9da6f6);
            break;
        case 'Offer\x20rematch':
            addLine(escapeHTML(_0x4505d5['username']) + '\x20offered\x20a\x20rematch');
            if (isPlayer2(_0x4505d5['username'])) {
                $('#rematch_btn')['val']('Accept\x20Rematch');
                return;
            }
            $('#rematch_btn')['val']('Revoke\x20Rematch');
            break;
        case 'Revoke\x20rematch':
            addLine(escapeHTML(_0x4505d5['username']) + '\x20has\x20revoked\x20the\x20rematch\x20offer'),
                $('#rematch_btn')['val']('Offer\x20Rematch');
            break;
        case 'Accept\x20rematch':
            used_allotted_rematch = 0x1,
                $('#rematch_btn')['val']('Offer\x20Rematch');
            break;
        case 'Done\x20siding':
            if (!duelist && _0x4505d5 == Player1())
                $('#done_siding1')['show']();
            else {
                if (duelist && _0x4505d5['username'] == username)
                    clearHoles(),
                        $('#done_siding_btn')['hide'](),
                        $('#done_siding1')['show']();
                else
                    _0x4505d5 == Player2() && $('#done_siding2')['show']();
            }
            break;
        case 'Pick\x20first':
            pickFirstResponse(_0x9da6f6);
            break;
        case 'Target\x20card':
            actionsQueue['push'](function () {
                targetCardResponse(_0x4505d5, _0x9da6f6);
            });
            break;
            break;
        case 'Stop\x20viewing':
            stopViewing(_0x9da6f6);
            break;
        case 'Shuffle\x20deck':
            actionsQueue['push'](function () {
                shuffleDeck(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Shuffle\x20hand':
            actionsQueue['push'](function () {
                shuffleHand2(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Permission\x20event':
            actionsQueue['push'](function () {
                permissionEvent(_0x9da6f6),
                    endAction();
            });
            break;
        case 'Permission\x20granted':
            actionsQueue['push'](function () {
                removePermission(),
                    endAction();
            });
            break;
        case 'Permission\x20denied':
            actionsQueue['push'](function () {
                addLine(escapeHTML(_0x9da6f6['username']) + '\x20denied\x20permission');
                if (isPlayer1(_0x9da6f6['username']))
                    $('#status1\x20.status_txt')['text']() == 'Waiting\x20for\x20permission' && $('#status1\x20.status_txt')['text']('');
                else
                    isPlayer2(_0x9da6f6['username']) && ($('#status2\x20.status_txt')['text']() == 'Waiting\x20for\x20permission' && $('#status2\x20.status_txt')['text'](''));
                endAction();
            });
            break;
        case 'Start\x20turn':
            actionsQueue['push'](function () {
                turn_player = getPlayer(_0x9da6f6['username']),
                    startTurn();
            });
            break;
        case 'Enter\x20DP':
            actionsQueue['push'](function () {
                enterDP();
            });
            break;
        case 'Enter\x20SP':
            actionsQueue['push'](function () {
                enterSP();
            });
            break;
        case 'Enter\x20M1':
            actionsQueue['push'](function () {
                enterM1();
            });
            break;
        case 'Enter\x20BP':
            actionsQueue['push'](function () {
                enterBP();
            });
            break;
        case 'Enter\x20M2':
            actionsQueue['push'](function () {
                enterM2();
            });
            break;
        case 'Enter\x20EP':
            actionsQueue['push'](function () {
                enterEP();
            });
            break;
        case 'End\x20turn':
            actionsQueue['push'](function () {
                endTurn(_0x9da6f6);
            });
            break;
        case 'Add\x20counter':
            actionsQueue['push'](function () {
                addCounter(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Remove\x20counter':
            actionsQueue['push'](function () {
                removeCounter(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Die':
            actionsQueue['push'](function () {
                dieRoll(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Coin':
            actionsQueue['push'](function () {
                coinFlip(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Life\x20points':
            actionsQueue['push'](function () {
                updateLifePoints(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'View\x20deck':
            duelist && _0x4505d5['username'] == username && (seen_deck == ![] && viewingE(_0x9da6f6['viewing'], _0x9da6f6));
            showViewing(_0x9da6f6);
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
            showViewing(_0x9da6f6);
            break;
        case 'View\x20ED':
            duelist && _0x4505d5['username'] == username && (seen_extra == ![] && (seen_extra = !![],
                viewingE('Extra\x20Deck', _0x9da6f6)));
            showViewing(_0x9da6f6);
            break;
        case 'Show\x20deck':
        case 'Show\x20hand':
        case 'Show\x20ED':
        case 'Show\x20Extra\x20Deck':
            actionsQueue['push'](function () {
                showE(_0x9da6f6['viewing'], _0x9da6f6);
            });
            break;
        case 'Reveal':
        case 'Reveal\x20card\x20from\x20hand':
        case 'Reveal\x20card\x20from\x20deck':
        case 'Reveal\x20from\x20Extra':
            actionsQueue['push'](function () {
                reveal(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Move':
            actionsQueue['push'](function () {
                move(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Overlay':
            actionsQueue['push'](function () {
                overlay(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Attach':
            actionsQueue['push'](function () {
                attach(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Detach':
            actionsQueue['push'](function () {
                detach(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Attack':
            actionsQueue['push'](function () {
                attack(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Attack\x20directly':
            actionsQueue['push'](function () {
                attackDirectly(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Draw\x20card':
            actionsQueue['push'](function () {
                drawCard(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'To\x20hand':
        case 'To\x20hand\x202':
        case 'To\x20hand\x20from\x20deck':
        case 'To\x20hand\x20from\x20field':
        case 'To\x20hand\x20from\x20grave':
        case 'To\x20hand\x20from\x20Extra':
        case 'To\x20hand\x20from\x20banished':
            actionsQueue['push'](function () {
                toHand(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'To\x20B\x20Deck':
        case 'To\x20B\x20Deck\x202':
        case 'To\x20T\x20Deck':
        case 'To\x20T\x20Deck\x202':
        case 'To\x20T\x20Deck\x20FU':
        case 'To\x20T\x20Deck\x202\x20FU':
            actionsQueue['push'](function () {
                toDeck(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'To\x20GY':
        case 'To\x20grave\x20from\x20deck':
        case 'To\x20grave\x20from\x20field':
        case 'To\x20grave\x20from\x20hand':
        case 'To\x20Grave\x20from\x20Extra':
        case 'To\x20grave\x20from\x20banished':
        case 'To\x20grave\x20from\x20opponent\x27s\x20banished':
            actionsQueue['push'](function () {
                toGY(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Mill':
            actionsQueue['push'](function () {
                mill(_0x4505d5, _0x9da6f6);
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
            actionsQueue['push'](function () {
                banish(_0x4505d5, _0x9da6f6);
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
            actionsQueue['push'](function () {
                toED(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Normal\x20Summon':
            actionsQueue['push'](function () {
                normalSummon(_0x4505d5, _0x9da6f6);
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
            actionsQueue['push'](function () {
                specialSummon(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'OL\x20ATK':
        case 'OL\x20DEF':
        case 'OL\x20ATK\x20from\x20Extra':
        case 'OL\x20DEF\x20from\x20Extra':
            actionsQueue['push'](function () {
                olSummon(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Summon\x20token':
        case 'Summon\x20Token':
            actionsQueue['push'](function () {
                summonToken(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Remove\x20Token':
            actionsQueue['push'](function () {
                removeToken(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Flip':
        case 'Flip\x20monster':
            actionsQueue['push'](function () {
                flip(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Flip\x20Summon':
            actionsQueue['push'](function () {
                flipSummon(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'To\x20ATK':
            actionsQueue['push'](function () {
                toATK(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'To\x20DEF':
            actionsQueue['push'](function () {
                toDEF(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Activate\x20ST':
        case 'Activate\x20Spell':
        case 'Activate\x20Spell\x20from\x20hand':
            actionsQueue['push'](function () {
                activateST(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'To\x20ST':
        case 'To\x20ST\x20from\x20deck':
        case 'To\x20ST\x20from\x20hand':
        case 'To\x20ST\x20from\x20grave':
            actionsQueue['push'](function () {
                toST(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Set\x20monster':
        case 'Set\x20monster\x20from\x20hand':
            actionsQueue['push'](function () {
                setMonster(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Set\x20ST':
        case 'Set\x20ST\x20from\x20deck':
        case 'Set\x20ST\x20from\x20hand':
        case 'Set\x20monster\x20to\x20ST\x20from\x20hand':
            actionsQueue['push'](function () {
                setST(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Activate\x20Field\x20Spell':
        case 'Activate\x20Field\x20Spell\x20from\x20hand':
            actionsQueue['push'](function () {
                activateFieldSpell(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Activate\x20Field\x20Spell\x202':
            actionsQueue['push'](function () {
                activateFieldSpell2(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Set\x20Field\x20Spell':
        case 'Set\x20Field\x20Spell\x20from\x20hand':
        case 'Set\x20Field\x20Spell\x20from\x20deck':
            actionsQueue['push'](function () {
                setFieldSpell(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Set\x20Field\x20Spell\x202':
        case 'Set\x20Field\x20Spell\x20from\x20deck\x20to\x20opponent\x27s\x20field':
            actionsQueue['push'](function () {
                setFieldSpell2(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Activate\x20Pendulum\x20Left':
        case 'Activate\x20Pendulum\x20Left\x20from\x20field':
        case 'Activate\x20Pendulum\x20Left\x20from\x20hand':
            actionsQueue['push'](function () {
                activatePendulumLeft(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Activate\x20Pendulum\x20Right':
        case 'Activate\x20Pendulum\x20Right\x20from\x20field':
        case 'Activate\x20Pendulum\x20Right\x20from\x20hand':
            actionsQueue['push'](function () {
                activatePendulumRight(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Activate\x20Skill':
            actionsQueue['push'](function () {
                activateSkill(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Set\x20Skill':
            actionsQueue['push'](function () {
                setSkill(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Change\x20control':
            actionsQueue['push'](function () {
                changeControl(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Add\x20random\x20card\x20from\x20deck\x20to\x20hand':
            actionsQueue['push'](function () {
                addRandomCardFromDeckToHand(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Turn\x20top\x20card\x20face-up':
        case 'Turn\x20top\x20card\x20of\x20deck\x20face-up':
            actionsQueue['push'](function () {
                turnTopCardOfDeckFU(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Flip\x20deck':
        case 'Flip\x20deck\x20back':
            actionsQueue['push'](function () {
                flipDeck(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Pick\x202\x20cards':
        case 'Pick\x203\x20cards':
        case 'Pick\x204\x20cards':
            duelist && _0x4505d5['username'] == username && (viewingE(_0x9da6f6['viewing'], _0x9da6f6),
                next_callback = _0x9da6f6['callback']);
            showViewing(_0x9da6f6);
            break;
        case 'Cynet\x20Storm':
            actionsQueue['push'](function () {
                cynetStorm(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Exchange\x20cards':
            actionsQueue['push'](function () {
                exchangeCards(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Attach\x20top\x20card\x20from\x20Deck\x202':
            actionsQueue['push'](function () {
                attachTopCardFromDeck2(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Swap':
            swap(_0x4505d5, _0x9da6f6);
            return;
        case 'New\x20card':
            actionsQueue['push'](function () {
                newCard(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Initialize\x20cards':
            initalizeCards(_0x4505d5, _0x9da6f6);
            break;
        case 'Flip\x20decks':
            actionsQueue['push'](function () {
                flipDecks(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Flip\x20decks\x20back':
            actionsQueue['push'](function () {
                flipDecksBack(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Turn\x20face-down':
            actionsQueue['push'](function () {
                turnFaceDown(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Add\x20proxy':
            actionsQueue['push'](function () {
                addProxy(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Declare':
            actionsQueue['push'](function () {
                declare(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Stay\x20revealed':
            actionsQueue['push'](function () {
                stayRevealed(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Stop\x20revealing':
            actionsQueue['push'](function () {
                stopRevealing(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Good':
            actionsQueue['push'](function () {
                allGood(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Stop\x20good':
            actionsQueue['push'](function () {
                stopGood(_0x4505d5, _0x9da6f6);
            });
            break;
        case 'Thinking':
            thinking(_0x4505d5, _0x9da6f6),
                typingE(_0x4505d5);
            break;
        case 'Countdown':
            updateCountdown(_0x4505d5, _0x9da6f6);
            break;
        case 'Message':
            break;
        case 'Edit\x20stats':
            actionsQueue['push'](function () {
                editStats(_0x4505d5, _0x9da6f6);
            });
            break;
    }
    _0x9da6f6['line'] && addLine(escapeHTML(_0x9da6f6['line']));
    if (_0x9da6f6['log']) {
        if (_0x9da6f6['log'] instanceof Array)
            for (_0x418c4a = 0x0; _0x418c4a < _0x9da6f6['log']['length']; _0x418c4a++) {
                _0x9da6f6['log'][_0x418c4a]['seconds'] = _0x9da6f6['seconds'];
            }
        else
            _0x9da6f6['log']['seconds'] = _0x9da6f6['seconds'];
        duelLogPrint(_0x9da6f6['log']);
    }
    performNextAction();
}
function beginNextDuel(_0x3b998d) {
    rpsWinner = _0x3b998d['username'];
    if (switched)
        tag_duel ? switchDuelists(_0x3b998d, 'player1', 'player2', 'player3', 'player4') : switchDuelists(_0x3b998d, 'player1', 'player2');
    else
        tag_duel && _0x3b998d['player3']['username'] == username && switchDuelists(_0x3b998d, 'player1', 'player3');
    deckData = _0x3b998d,
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
function pickFirstResponse(_0x408838) {
    console['log']('pickFirstResponse');
    if (solo) {
        duelStart(_0x408838),
            $('#cid2_txt')['hide'](),
            $('#cie2_txt')['hide'](),
            initSoloModeButtons();
        return;
    }
    first['css']('pointer-events', 'none'),
        second['css']('pointer-events', 'none'),
        players = [];
    if (_0x408838['order'])
        for (var _0x3030cd = 0x0; _0x3030cd < _0x408838['order']['length']; _0x3030cd++) {
            players['push'](getPlayer(_0x408838['order'][_0x3030cd]));
        }
    else
        players = [getPlayer(_0x408838['username']), getPlayer(_0x408838['username'])['opponent']];
    first_player = _0x408838['username'],
        turn_player = getPlayer(_0x408838['username']),
        turn_player['opponent'] = players[players['length'] - 0x1],
        turn_player['opponent']['opponent'] = turn_player;
    var _0x4c6a53 = 0x0;
    isPlayer1(_0x408838['username']) ? (TweenMax['fromTo'](first, 0.5, {
        'alpha': 0x1
    }, {
        'alpha': 0x1,
        'ease': Linear['easeNone'],
        'onUpdate': function () {
            _0x4c6a53 += 0x4,
                first['find']('.content')['css']('box-shadow', '0px\x200px\x20' + _0x4c6a53 + 'px\x20#FF0000,\x200px\x200px\x20' + _0x4c6a53 + 'px\x20#FF0000'),
                second['find']('.content')['css']('box-shadow', '0px\x200px\x20' + _0x4c6a53 + 'px\x20#0000FF,\x200px\x200px\x20' + _0x4c6a53 + 'px\x20#0000FF');
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
            'onStart': function () {
                playSound(Reveal);
            },
            'onComplete': function () {
                currentLabel['indexOf']('tp_start') >= 0x0 && duelStart(_0x408838);
            }
        })) : (TweenMax['fromTo'](second, 0.5, {
            'alpha': 0x1
        }, {
            'alpha': 0x1,
            'ease': Linear['easeNone'],
            'onUpdate': function () {
                _0x4c6a53 += 0x4,
                    second['find']('.content')['css']('box-shadow', '0px\x200px\x20' + _0x4c6a53 + 'px\x20#FF0000,\x200px\x200px\x20' + _0x4c6a53 + 'px\x20#FF0000'),
                    first['find']('.content')['css']('box-shadow', '0px\x200px\x20' + _0x4c6a53 + 'px\x20#0000FF,\x200px\x200px\x20' + _0x4c6a53 + 'px\x20#0000FF');
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
                'onStart': function () {
                    playSound(Reveal);
                },
                'onComplete': function () {
                    currentLabel['indexOf']('tp_start') >= 0x0 && duelStart(_0x408838),
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
function loadSleeves(_0x668b73) {
    if (currentLabel == 'rps_start' && !solo) {
        if (_0x668b73 == Player1())
            rock1['setSleeve'](_0x668b73['sleeve']),
                paper1['setSleeve'](_0x668b73['sleeve']),
                scissors1['setSleeve'](_0x668b73['sleeve']);
        else
            _0x668b73 == Player2() && (rock2['setSleeve'](_0x668b73['sleeve']),
                paper2['setSleeve'](_0x668b73['sleeve']),
                scissors2['setSleeve'](_0x668b73['sleeve']));
    } else {
        if (currentLabel['indexOf']('tp_start') >= 0x0 || currentLabel['indexOf']('duel_start') >= 0x0 || solo)
            for (var _0x5c45f0 = 0x0; _0x5c45f0 < _0x668b73['all_cards_arr']['length']; _0x5c45f0++) {
                if (!tag_duel || _0x668b73['main_arr']['indexOf'](_0x668b73['all_cards_arr'][_0x5c45f0]) >= 0x0 || _0x668b73['extra_arr']['indexOf'](_0x668b73['all_cards_arr'][_0x5c45f0]) >= 0x0 || _0x668b73['hand_arr']['indexOf'](_0x668b73['all_cards_arr'][_0x5c45f0]) >= 0x0)
                    _0x668b73['all_cards_arr'][_0x5c45f0]['setSleeve'](_0x668b73['sleeve']);
                else
                    tag_duel && (_0x668b73 == turn_player || _0x668b73 == turn_player['opponent']) && _0x668b73['partner']['main_arr']['indexOf'](_0x668b73['all_cards_arr'][_0x5c45f0]) < 0x0 && _0x668b73['partner']['extra_arr']['indexOf'](_0x668b73['all_cards_arr'][_0x5c45f0]) < 0x0 && _0x668b73['partner']['hand_arr']['indexOf'](_0x668b73['all_cards_arr'][_0x5c45f0]) < 0x0 && _0x668b73['all_cards_arr'][_0x5c45f0]['setSleeve'](_0x668b73['sleeve']);
            }
    }
}
function initDecks(_0x15ec78) {
    console['log']('initDecks'),
        console['time']('initDecks'),
        player1['resetDeck'](),
        player2['resetDeck']();
    for (var _0x5fad7e = 0x0; _0x5fad7e < _0x15ec78['player1']['main_total']; _0x5fad7e++) {
        var _0x3c0d66 = newDuelCard(player1);
        _0x3c0d66['data']('id', _0x15ec78['player1']['start'] + _0x5fad7e),
            player1['main_arr']['push'](_0x3c0d66),
            player1['all_cards_arr']['push'](_0x3c0d66);
    }
    for (_0x5fad7e = 0x0; _0x5fad7e < _0x15ec78['player1']['extra_total']; _0x5fad7e++) {
        _0x3c0d66 = newDuelCard(player1),
            _0x3c0d66['data']('id', _0x15ec78['player1']['start'] + _0x5fad7e + _0x15ec78['player1']['main_total']),
            _0x3c0d66['data']('face_down', !![]),
            player1['extra_arr']['push'](_0x3c0d66),
            player1['all_cards_arr']['push'](_0x3c0d66);
    }
    for (_0x5fad7e = 0x0; _0x5fad7e < _0x15ec78['player2']['main_total']; _0x5fad7e++) {
        _0x3c0d66 = newDuelCard(player2),
            _0x3c0d66['data']('id', _0x15ec78['player2']['start'] + _0x5fad7e),
            player1['username'] == username && !automatic && _0x3c0d66['addClass']('target'),
            player2['main_arr']['push'](_0x3c0d66),
            player2['all_cards_arr']['push'](_0x3c0d66);
    }
    for (_0x5fad7e = 0x0; _0x5fad7e < _0x15ec78['player2']['extra_total']; _0x5fad7e++) {
        _0x3c0d66 = newDuelCard(player2),
            _0x3c0d66['data']('id', _0x15ec78['player2']['start'] + _0x5fad7e + _0x15ec78['player2']['main_total']),
            _0x3c0d66['data']('face_down', !![]),
            player1['username'] == username && !automatic && _0x3c0d66['addClass']('target'),
            player2['extra_arr']['push'](_0x3c0d66),
            player2['all_cards_arr']['push'](_0x3c0d66);
    }
    if (tag_duel) {
        player3['resetDeck'](),
            player4['resetDeck']();
        for (_0x5fad7e = 0x0; _0x5fad7e < _0x15ec78['player3']['main_total']; _0x5fad7e++) {
            _0x3c0d66 = newDuelCard(player3),
                _0x3c0d66['data']('id', _0x15ec78['player3']['start'] + _0x5fad7e),
                player3['main_arr']['push'](_0x3c0d66),
                player3['all_cards_arr']['push'](_0x3c0d66);
        }
        for (_0x5fad7e = 0x0; _0x5fad7e < _0x15ec78['player3']['extra_total']; _0x5fad7e++) {
            _0x3c0d66 = newDuelCard(player3),
                _0x3c0d66['data']('id', _0x15ec78['player3']['start'] + _0x5fad7e + _0x15ec78['player3']['main_total']),
                _0x3c0d66['data']('face_down', !![]),
                player3['extra_arr']['push'](_0x3c0d66),
                player3['all_cards_arr']['push'](_0x3c0d66);
        }
        for (_0x5fad7e = 0x0; _0x5fad7e < _0x15ec78['player4']['main_total']; _0x5fad7e++) {
            _0x3c0d66 = newDuelCard(player4),
                _0x3c0d66['data']('id', _0x15ec78['player4']['start'] + _0x5fad7e),
                player1['username'] == username && !automatic && _0x3c0d66['addClass']('target'),
                player4['main_arr']['push'](_0x3c0d66),
                player4['all_cards_arr']['push'](_0x3c0d66);
        }
        for (_0x5fad7e = 0x0; _0x5fad7e < _0x15ec78['player4']['extra_total']; _0x5fad7e++) {
            _0x3c0d66 = newDuelCard(player4),
                _0x3c0d66['data']('id', _0x15ec78['player4']['start'] + _0x5fad7e + _0x15ec78['player4']['main_total']),
                _0x3c0d66['data']('face_down', !![]),
                player1['username'] == username && !automatic && _0x3c0d66['addClass']('target'),
                player4['extra_arr']['push'](_0x3c0d66),
                player4['all_cards_arr']['push'](_0x3c0d66);
        }
    }
    console['timeEnd']('initDecks');
}
function removeDeck(_0x42f026) {
    for (var _0x2c5a31 = 0x0; _0x2c5a31 < _0x42f026['main_arr']['length']; _0x2c5a31++) {
        _0x42f026['main_arr'][_0x2c5a31]['detach']();
    }
}
function removeExtra(_0x42fe16) {
    for (var _0x53341f = 0x0; _0x53341f < _0x42fe16['extra_arr']['length']; _0x53341f++) {
        _0x42fe16['extra_arr'][_0x53341f]['detach']();
    }
}
function removeHand(_0x329ee8) {
    for (var _0x3520ac = 0x0; _0x3520ac < _0x329ee8['hand_arr']['length']; _0x3520ac++) {
        _0x329ee8['hand_arr'][_0x3520ac]['detach']();
    }
}
function shiftDeck(_0x376f9e) {
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
        var _0x467198 = 0x0
            , _0x51f7d4 = 0x0;
        for (var _0x1d94a7 = _0x376f9e['main_arr']['length'] - 0x1; _0x1d94a7 > -0x1; _0x1d94a7--) {
            var _0xeb84c4 = 0xb4 + ABOUT_ZERO;
            (_0x376f9e['main_arr'][_0x1d94a7]['data']('face_up') || _0x376f9e['deck_face_up']) && (_0xeb84c4 = ABOUT_ZERO),
                _0x376f9e['main_arr'][_0x1d94a7]['css']('left', _0x376f9e['deckX'] + _0x467198),
                _0x376f9e['main_arr'][_0x1d94a7]['css']('top', _0x376f9e['deckY'] + _0x51f7d4),
                TweenMax['to'](_0x376f9e['main_arr'][_0x1d94a7], 0x0, {
                    'scale': 0.1485,
                    'rotation': _0x376f9e['rot'],
                    'rotationY': _0xeb84c4,
                    'z': _0x376f9e['main_arr']['length'] - _0x1d94a7,
                    'alpha': 0x1
                }),
                _0x467198 += _0x376f9e['mX'],
                _0x51f7d4 += _0x376f9e['mY'],
                $('#field')['append'](_0x376f9e['main_arr'][_0x1d94a7]),
                !_0x376f9e['main_arr'][_0x1d94a7]['data']('face_up') && _0x376f9e['main_arr'][_0x1d94a7]['onRotate']();
        }
        $('#cid1_txt')['text'](Player1()['main_arr']['length']),
            $('#cid2_txt')['text'](Player2()['main_arr']['length']);
    } catch (_0x409344) {
        Send({
            'action': 'Error\x20report',
            'line': '1948',
            'message': _0x409344['message']
        });
    }
}
function shiftGrave(_0x21f19c) {
    if (viewing['indexOf']('Graveyard') >= 0x0) {
        viewingE(viewing);
        return;
    }
    var _0x12bc1f = 0x0
        , _0x2acccd = 0x0;
    for (var _0x1863df = _0x21f19c['grave_arr']['length'] - 0x1; _0x1863df > -0x1; _0x1863df--) {
        TweenMax['to'](_0x21f19c['grave_arr'][_0x1863df], 0x0, {
            'rotationY': ABOUT_ZERO
        }),
            _0x21f19c['grave_arr'][_0x1863df]['css']('left', _0x21f19c['graveX'] + _0x12bc1f),
            _0x21f19c['grave_arr'][_0x1863df]['css']('top', _0x21f19c['graveY'] + _0x2acccd),
            TweenMax['to'](_0x21f19c['grave_arr'][_0x1863df], 0x0, {
                'scale': 0.1485,
                'rotation': _0x21f19c['rot'],
                'alpha': 0x1,
                'z': _0x21f19c['grave_arr']['length'] - _0x1863df
            }),
            _0x12bc1f += _0x21f19c['gX'],
            _0x2acccd += _0x21f19c['gY'],
            $('#field')['append'](_0x21f19c['grave_arr'][_0x1863df]);
        if (_0x1863df == 0x0) { }
    }
    $('#cig1_txt')['text'](Player1()['grave_arr']['length']),
        $('#cig2_txt')['text'](Player2()['grave_arr']['length']);
}
function shiftBanished(_0x301dad) {
    if (viewing == 'Banished' || viewing == 'Opponent\x27s\x20Banished') {
        viewingE(viewing);
        return;
    }
    var _0x5d6d1c = 0x0;
    for (var _0x2d1959 = _0x301dad['banished_arr']['length'] - 0x1; _0x2d1959 > -0x1; _0x2d1959--) {
        !_0x301dad['banished_arr'][_0x2d1959]['data']('face_down') ? TweenMax['to'](_0x301dad['banished_arr'][_0x2d1959], 0x0, {
            'rotationY': ABOUT_ZERO
        }) : TweenMax['to'](_0x301dad['banished_arr'][_0x2d1959], 0x0, {
            'rotationY': 0xb4 + ABOUT_ZERO
        }),
            _0x301dad['banished_arr'][_0x2d1959]['css']('left', _0x301dad['banishedX'] + _0x5d6d1c),
            _0x301dad['banished_arr'][_0x2d1959]['css']('top', _0x301dad['banishedY']),
            TweenMax['to'](_0x301dad['banished_arr'][_0x2d1959], 0x0, {
                'scale': 0.1485,
                'rotation': _0x301dad['rot'],
                'z': _0x301dad['banished_arr']['length'] - _0x2d1959,
                'alpha': 0x1
            }),
            _0x5d6d1c += _0x301dad['bX'],
            $('#field')['append'](_0x301dad['banished_arr'][_0x2d1959]);
    }
    $('#cib1_txt')['text'](Player1()['banished_arr']['length']),
        $('#cib2_txt')['text'](Player2()['banished_arr']['length']);
}
function shiftExtra(_0x40df71) {
    if (currentLabel == 'rps_start' || currentLabel == 'siding')
        return;
    if (viewing == 'Extra\x20Deck' || viewing == 'Opponent\x27s\x20Extra\x20Deck' || viewing == 'Opponent\x27s\x20Public\x20Extra\x20Deck' || viewing == 'Host\x27s\x20Public\x20Extra\x20Deck') {
        viewingE(viewing);
        return;
    }
    var _0x49f2c7 = 0x0
        , _0x439ee5 = 0x0;
    for (var _0xfb299 = _0x40df71['extra_arr']['length'] - 0x1; _0xfb299 > -0x1; _0xfb299--) {
        !_0x40df71['extra_arr'][_0xfb299]['data']('face_down') ? (TweenMax['to'](_0x40df71['extra_arr'][_0xfb299], 0x0, {
            'rotationY': ABOUT_ZERO
        }),
            _0x40df71['extra_arr'][_0xfb299]['find']('.cardfront')['show']()) : (TweenMax['to'](_0x40df71['extra_arr'][_0xfb299], 0x0, {
                'rotationY': 0xb4 + ABOUT_ZERO
            }),
                _0x40df71['extra_arr'][_0xfb299]['find']('.cardback')['show'](),
                _0x40df71['extra_arr'][_0xfb299]['find']('.cardfront')['hide']()),
            _0x40df71['extra_arr'][_0xfb299]['css']('left', _0x40df71['extraX'] + _0x49f2c7),
            _0x40df71['extra_arr'][_0xfb299]['css']('top', _0x40df71['extraY'] + _0x439ee5),
            TweenMax['to'](_0x40df71['extra_arr'][_0xfb299], 0x0, {
                'scale': 0.1485,
                'rotation': _0x40df71['rot'],
                'z': _0x40df71['extra_arr']['length'] - _0xfb299
            }),
            _0x49f2c7 += _0x40df71['eX'],
            _0x439ee5 += _0x40df71['eY'],
            $('#field')['append'](_0x40df71['extra_arr'][_0xfb299]);
    }
    $('#cie1_txt')['text'](Player1()['extra_arr']['length']),
        $('#cie2_txt')['text'](Player2()['extra_arr']['length']);
}
function addDeckChildren(_0x1e3ece) {
    for (var _0x5a6580 = _0x1e3ece['main_arr']['length'] - 0x1; _0x5a6580 > -0x1; _0x5a6580--) {
        $('#field')['append'](_0x1e3ece['main_arr'][_0x5a6580]);
    }
}
function addExtraChildren(_0x1eeff5) {
    if (_0x1eeff5 == Player1() && viewing == 'Extra\x20Deck' || _0x1eeff5 != Player1() && viewing == 'Opponent\x27s\x20Extra\x20Deck')
        return;
    for (var _0x2530fb = _0x1eeff5['extra_arr']['length'] - 0x1; _0x2530fb > -0x1; _0x2530fb--) {
        $('#field')['append'](_0x1eeff5['extra_arr'][_0x2530fb]);
    }
}
function removeTopCardFromDeck(_0x144131) {
    var _0x774fdd = _0x144131['main_arr']['splice'](0x0, 0x1)[0x0];
    return _0x774fdd['data']('face_up', ![]),
        $('#cid1_txt')['text'](Player1()['main_arr']['length']),
        $('#cid2_txt')['text'](Player2()['main_arr']['length']),
        updateViewing(),
        _0x774fdd;
}
function determineHandPosition(_0x4b311e) {
    switch (_0x4b311e['hand_arr']['length']) {
        case 0x1:
            handDestination = _0x4b311e['hand_position_arr'][0x0];
            break;
        case 0x2:
            handDestination = _0x4b311e['hand_position_arr'][0x1];
            break;
        case 0x3:
            handDestination = _0x4b311e['hand_position_arr'][0x2];
            break;
        case 0x4:
            handDestination = _0x4b311e['hand_position_arr'][0x3];
            break;
        case 0x5:
            handDestination = _0x4b311e['hand_position_arr'][0x4];
            break;
        default:
            handDestination = _0x4b311e['hand_position_arr'][0x5];
            break;
    }
}
function initHand(_0x173aac, _0x4d48f3) {
    for (var _0xfce144 = 0x0; _0xfce144 < _0x173aac['hand_arr']['length']; _0xfce144++) {
        TweenMax['to'](_0x173aac['hand_arr'][_0xfce144], 0x0, {
            'scale': 0.25,
            'rotation': _0x173aac['rot'],
            'top': _0x173aac['handY']
        }),
            _0x4d48f3 && _0x173aac['hand_arr'][_0xfce144]['removeSleeve']();
    }
    organizeHand(_0x173aac, ![], !![]);
}
function organizeHand(_0x3903c1, _0x31d325, _0x5807f3) {
    _0x31d325 !== !![] && (_0x31d325 = ![]);
    _0x5807f3 !== !![] && (_0x5807f3 = ![]);
    if (currentLabel['indexOf']('duel_start') < 0x0)
        return;
    if (viewing == 'Opponent\x27s\x20Hand' && _0x3903c1 == Player2())
        return;
    var _0x4d1d23 = easeSeconds;
    if (_0x31d325)
        _0x4d1d23 = 0.25;
    else
        _0x5807f3 && (_0x4d1d23 = 0x0);
    if (_0x3903c1 == Player1())
        switch (_0x3903c1['hand_arr']['length']) {
            case 0x0:
                break;
            case 0x1:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x1e5,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                });
                break;
            case 0x2:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x1b3,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x1], _0x4d1d23, {
                        'left': 0x217,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                break;
            case 0x3:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x181,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x1], _0x4d1d23, {
                        'left': 0x1e5,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x2], _0x4d1d23, {
                        'left': 0x249,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                break;
            case 0x4:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x14f,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x1], _0x4d1d23, {
                        'left': 0x1b3,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x2], _0x4d1d23, {
                        'left': 0x217,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x3], _0x4d1d23, {
                        'left': 0x27b,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                break;
            case 0x5:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x11d,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x1], _0x4d1d23, {
                        'left': 0x181,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x2], _0x4d1d23, {
                        'left': 0x1e5,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x3], _0x4d1d23, {
                        'left': 0x249,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x4], _0x4d1d23, {
                        'left': 0x2ad,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                break;
            default:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x110,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                });
                for (var _0x1531f2 = 0x1; _0x1531f2 < _0x3903c1['hand_arr']['length']; _0x1531f2++) {
                    TweenMax['to'](_0x3903c1['hand_arr'][_0x1531f2], _0x4d1d23, {
                        'left': 0x1b0 / (_0x3903c1['hand_arr']['length'] - 0x1) * _0x1531f2 + 0x110,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                }
        }
    else
        switch (_0x3903c1['hand_arr']['length']) {
            case 0x0:
                break;
            case 0x1:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x1e5,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                });
                break;
            case 0x2:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x217,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x1], _0x4d1d23, {
                        'left': 0x1b3,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                break;
            case 0x3:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x249,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x1], _0x4d1d23, {
                        'left': 0x1e5,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x2], _0x4d1d23, {
                        'left': 0x181,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                break;
            case 0x4:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x27b,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x1], _0x4d1d23, {
                        'left': 0x217,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x2], _0x4d1d23, {
                        'left': 0x1b3,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x3], _0x4d1d23, {
                        'left': 0x14f,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                break;
            case 0x5:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x2ad,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x1], _0x4d1d23, {
                        'left': 0x249,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x2], _0x4d1d23, {
                        'left': 0x1e5,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x3], _0x4d1d23, {
                        'left': 0x181,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    }),
                    TweenMax['to'](_0x3903c1['hand_arr'][0x4], _0x4d1d23, {
                        'left': 0x11d,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                break;
            default:
                TweenMax['to'](_0x3903c1['hand_arr'][0x0], _0x4d1d23, {
                    'left': 0x2c0,
                    'ease': Linear['easeNone'],
                    'immediateRender': _0x5807f3
                });
                for (var _0x1531f2 = 0x1; _0x1531f2 < _0x3903c1['hand_arr']['length']; _0x1531f2++) {
                    TweenMax['to'](_0x3903c1['hand_arr'][_0x1531f2], _0x4d1d23, {
                        'left': 0x2c0 - 0x1b0 / (_0x3903c1['hand_arr']['length'] - 0x1) * _0x1531f2,
                        'ease': Linear['easeNone'],
                        'immediateRender': _0x5807f3
                    });
                }
        }
    for (var _0x1531f2 = 0x0; _0x1531f2 < _0x3903c1['hand_arr']['length']; _0x1531f2++) {
        $('#duel\x20.cards')['append'](_0x3903c1['hand_arr'][_0x1531f2]),
            TweenMax['to'](_0x3903c1['hand_arr'][_0x1531f2], 0x0, {
                'z': _0x1531f2
            });
    }
}
function updateController(_0x5ba13a, _0x4cad34) {
    _0x4cad34['data']('controller', _0x5ba13a);
    if (automatic)
        return;
    if (duelist && _0x4cad34['data']('controller') == Player1())
        _0x4cad34['removeClass']('target');
    else
        (duelist || admin || adjudicator) && _0x4cad34['addClass']('target');
}
function updateOwner(_0x5f5947, _0x207575) {
    _0x207575['data']('owner', _0x5f5947);
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
function getPlayer(_0x41ee8d) {
    if (_0x41ee8d == player1['username'])
        return player1;
    if (_0x41ee8d == player2['username'])
        return player2;
    if (tag_duel) {
        if (_0x41ee8d == player3['username'])
            return player3;
        if (_0x41ee8d == player4['username'])
            return player4;
    }
    return null;
}
function getController(_0x1cdd51, _0x2db8c1) {
    if (!_0x1cdd51)
        return _0x2db8c1;
    if (_0x1cdd51 == player1['username'])
        return player1;
    else {
        if (_0x1cdd51 == player2['username'])
            return player2;
    }
    if (tag_duel) {
        if (_0x1cdd51 == player3['username'])
            return player3;
        if (_0x1cdd51 == player4['username'])
            return player4;
    }
    return errorE('Card\x20controller\x20error'),
        null;
}
function getCurrentOwner(_0x3070af, _0x3a106b) {
    if (!_0x3070af)
        return _0x3a106b;
    if (_0x3070af == player1['username'])
        return Player1();
    else {
        if (_0x3070af == player2['username'])
            return Player2();
    }
    if (tag_duel) {
        if (_0x3070af == player3['username'])
            return Player1();
        if (_0x3070af == player4['username'])
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
function editStats(_0xfb40a6, _0x2a842b) {
    var _0x5894a4 = getFieldCard(_0xfb40a6, _0x2a842b);
    if (_0x5894a4 == null) {
        _0x5894a4 = getFieldCard(_0xfb40a6['opponent'], _0x2a842b);
        if (_0x5894a4 == null)
            return;
    }
    var _0x3f24bb = _0x5894a4['data']('new_atk') ?? _0x5894a4['data']('cardfront')['data']('atk')
        , _0x515b6c = _0x5894a4['data']('new_def') ?? _0x5894a4['data']('cardfront')['data']('def')
        , _0x46b8d9 = ~~_0x2a842b['atk'] - ~~_0x3f24bb
        , _0x5829b9 = ~~_0x2a842b['def'] - ~~_0x515b6c
        , _0x4da919 = getStatsTextByCard(_0x5894a4);
    if (_0x2a842b['atk'] != '?' || _0x2a842b['def'] != '?') {
        if (!_0x4da919['text']()['startsWith'](_0x2a842b['atk']) || _0x5894a4['data']('cardfront')['data']('monster_color') != 'Link' && !_0x4da919['text']()['endsWith']('/' + _0x2a842b['def'])) {
            var _0x539ddd = TweenMax['to']({}, 0x1, {
                'ease': Expo['easeOut'],
                'onUpdate': function () {
                    _0x4da919['html'](getATKColor(_0x5894a4, _0x2a842b['atk'] == '?' ? _0x2a842b['atk'] : ~~_0x3f24bb + Math['floor'](_0x539ddd['progress']() * _0x46b8d9), _0x2a842b['def'] == '?' ? _0x2a842b['def'] : ~~_0x515b6c + Math['floor'](_0x539ddd['progress']() * _0x5829b9)));
                },
                'onComplete': function () {
                    _0x5894a4['data']('new_atk', _0x2a842b['atk']),
                        _0x5894a4['data']('new_def', _0x2a842b['def']),
                        endAction();
                }
            });
            playSound(LifePoints);
            return;
        }
    }
    _0x5894a4['data']('new_atk', _0x2a842b['atk']),
        _0x5894a4['data']('new_def', _0x2a842b['def']),
        endAction();
}
function getStatsTextByCard(_0x163b13) {
    var _0x4c0480 = null;
    switch (_0x163b13) {
        case player1['m1']:
            _0x4c0480 = hm1_txt;
            break;
        case player1['m2']:
            _0x4c0480 = hm2_txt;
            break;
        case player1['m3']:
            _0x4c0480 = hm3_txt;
            break;
        case player1['m4']:
            _0x4c0480 = hm4_txt;
            break;
        case player1['m5']:
            _0x4c0480 = hm5_txt;
            break;
        case player2['m1']:
            _0x4c0480 = om1_txt;
            break;
        case player2['m2']:
            _0x4c0480 = om2_txt;
            break;
        case player2['m3']:
            _0x4c0480 = om3_txt;
            break;
        case player2['m4']:
            _0x4c0480 = om4_txt;
            break;
        case player2['m5']:
            _0x4c0480 = om5_txt;
            break;
        case linkRight:
            _0x4c0480 = hl_txt;
            break;
        case linkLeft:
            _0x4c0480 = ol_txt;
            break;
    }
    return $(_0x4c0480);
}
function updateStats() {
    var _0x180180 = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5']]
        , _0x3fcd0f = [player1['m1_txt'], player1['m2_txt'], player1['m3_txt'], player1['m4_txt'], player1['m5_txt'], player2['m1_txt'], player2['m2_txt'], player2['m3_txt'], player2['m4_txt'], player2['m5_txt']];
    links && (_0x180180['push'](linkLeft),
        _0x180180['push'](linkRight),
        _0x3fcd0f['push']($('#ol_txt')),
        _0x3fcd0f['push']($('#hl_txt')));
    for (var _0x2be74f = 0x0; _0x2be74f < _0x180180['length']; _0x2be74f++) {
        _0x180180[_0x2be74f] && (_0x180180[_0x2be74f]['data']('cardfront')['data']('atk') && (_0x180180[_0x2be74f]['data']('face_down') && !show_cards && !duelist || duelist && _0x180180[_0x2be74f]['data']('face_down') && !isPlayer1(_0x180180[_0x2be74f]['data']('controller')['username']) || TweenMax['isTweening'](_0x180180[_0x2be74f]) ? _0x3fcd0f[_0x2be74f]['hide']() : (_0x3fcd0f[_0x2be74f]['html'](getATKColor(_0x180180[_0x2be74f], _0x180180[_0x2be74f]['data']('new_atk'), _0x180180[_0x2be74f]['data']('new_def'))),
            _0x3fcd0f[_0x2be74f]['show'](),
            (_0x3fcd0f[_0x2be74f][0x0] == $('#ol_txt')[0x0] || _0x3fcd0f[_0x2be74f][0x0] == $('#hl_txt')[0x0]) && (isPlayer1(_0x180180[_0x2be74f]['data']('controller')['username']) ? _0x3fcd0f[_0x2be74f]['css']('top', 0x139) : _0x3fcd0f[_0x2be74f]['css']('top', 0xf7)))));
    }
}
function getATKColor(_0x1b99a3, _0x75a16f, _0x30ebc9) {
    var _0x296d5f = '';
    return !_0x75a16f || _0x75a16f == _0x1b99a3['data']('cardfront')['data']('atk') ? _0x296d5f += _0x1b99a3['data']('cardfront')['data']('atk') : _0x296d5f += '<font\x20color=\x22#' + (~~_0x75a16f > ~~_0x1b99a3['data']('cardfront')['data']('atk') ? '33FFFF' : 'FF3300') + '\x22>' + _0x75a16f + '</font>',
        _0x1b99a3['data']('cardfront')['data']('monster_color') != 'Link' && (!_0x30ebc9 || _0x30ebc9 == _0x1b99a3['data']('cardfront')['data']('def') ? _0x296d5f += '/' + _0x1b99a3['data']('cardfront')['data']('def') : _0x296d5f += '<font\x20color=\x22#' + (~~_0x30ebc9 > ~~_0x1b99a3['data']('cardfront')['data']('def') ? '33FFFF' : 'FF3300') + '\x22>/' + _0x30ebc9 + '</font>'),
        _0x296d5f;
}
function updateCounters() {
    var _0x56edd1;
    if (rush)
        _0x56edd1 = [player1['m1'], player1['m2'], player1['m3'], player1['s1'], player1['s2'], player1['s3'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['s1'], player2['s2'], player2['s3'], player2['fieldSpell']];
    else {
        if (speed)
            _0x56edd1 = [player1['m1'], player1['m2'], player1['m3'], player1['s1'], player1['s2'], player1['s3'], player1['fieldSpell'], player1['skillCard'], player2['m1'], player2['m2'], player2['m3'], player2['s1'], player2['s2'], player2['s3'], player2['fieldSpell'], player2['skillCard']];
        else
            links ? _0x56edd1 = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player1['s1'], player1['s2'], player1['s3'], player1['s4'], player1['s5'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], player2['s1'], player2['s2'], player2['s3'], player2['s4'], player2['s5'], player2['fieldSpell'], linkLeft, linkRight] : _0x56edd1 = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player1['s1'], player1['s2'], player1['s3'], player1['s4'], player1['s5'], player1['pendulumLeft'], player1['pendulumRight'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], player2['s1'], player2['s2'], player2['s3'], player2['s4'], player2['s5'], player2['pendulumLeft'], player2['pendulumRight'], player2['fieldSpell']];
    }
    for (var _0x47aef5 = 0x0; _0x47aef5 < counters['length']; _0x47aef5++) {
        if (_0x56edd1[_0x47aef5]) {
            if (~~_0x56edd1[_0x47aef5]['data']('counters') > 0x0 && !TweenMax['isTweening'](_0x56edd1[_0x47aef5])) {
                counters[_0x47aef5]['show'](),
                    counters[_0x47aef5]['find']('.total_txt')['text'](_0x56edd1[_0x47aef5]['data']('counters'));
                if (linkLeft && _0x56edd1[_0x47aef5][0x0] == linkLeft[0x0])
                    _0x56edd1[_0x47aef5]['data']('controller') == player1 || _0x56edd1[_0x47aef5]['data']('controller') == player3 ? (counters[_0x47aef5]['css']('left', 440.45),
                        counters[_0x47aef5]['css']('top', 315.5)) : (counters[_0x47aef5]['css']('left', 414.8),
                            counters[_0x47aef5]['css']('top', 272.9));
                else
                    linkRight && _0x56edd1[_0x47aef5][0x0] == linkRight[0x0] && (_0x56edd1[_0x47aef5]['data']('controller') == player1 || _0x56edd1[_0x47aef5]['data']('controller') == player3 ? (counters[_0x47aef5]['css']('left', 626.45),
                        counters[_0x47aef5]['css']('top', 315.5)) : (counters[_0x47aef5]['css']('left', 600.8),
                            counters[_0x47aef5]['css']('top', 272.9)));
            } else
                counters[_0x47aef5]['hide']();
        } else
            counters[_0x47aef5]['hide']();
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
            'onComplete': function () {
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
            'onComplete': function () {
                playCircles();
            }
        });
}
function Player() {
    var _0xf48bfc = {};
    return _0xf48bfc['stopTyping'] = function () {
        _0xf48bfc['typing_timer']['reset'](),
            _0xf48bfc['bubbles']['hide'](),
            _0xf48bfc['bubbles']['data']('cycle')['stop'](),
            _0xf48bfc['stopThinking']();
    }
        ,
        _0xf48bfc['typingE'] = function () {
            _0xf48bfc['typing_timer']['start'](),
                _0xf48bfc['bubbles']['show'](),
                _0xf48bfc['bubbles']['data']('cycle')['play']();
        }
        ,
        _0xf48bfc['stopThinking'] = function () {
            TweenMax['to'](_0xf48bfc['thinking'], 0.3, {
                'scale': 0.7,
                'alpha': 0x0,
                'ease': Expo['easeIn'],
                'onComplete': function () {
                    _0xf48bfc['thinking']['hide']();
                }
            });
        }
        ,
        _0xf48bfc['username'] = '',
        _0xf48bfc['main_arr'] = [],
        _0xf48bfc['grave_arr'] = [],
        _0xf48bfc['extra_arr'] = [],
        _0xf48bfc['hand_arr'] = [],
        _0xf48bfc['banished_arr'] = [],
        _0xf48bfc['field_arr'] = [],
        _0xf48bfc['all_cards_arr'] = [],
        _0xf48bfc['temp_arr'] = [],
        _0xf48bfc['handY'] = 0x0,
        _0xf48bfc['deckX'] = 0x0,
        _0xf48bfc['deckY'] = 0x0,
        _0xf48bfc['graveX'] = 0x0,
        _0xf48bfc['graveY'] = 0x0,
        _0xf48bfc['banishedX'] = 0x0,
        _0xf48bfc['banishedY'] = 0x0,
        _0xf48bfc['extraX'] = 0x0,
        _0xf48bfc['extraY'] = 0x0,
        _0xf48bfc['fieldSpellX'] = 0x0,
        _0xf48bfc['fieldSpellY'] = 0x0,
        _0xf48bfc['pendulumLeftX'] = 0x0,
        _0xf48bfc['pendulumRightX'] = 0x0,
        _0xf48bfc['pendulumY'] = 0x0,
        _0xf48bfc['monsterY'] = 0x0,
        _0xf48bfc['spellY'] = 0x0,
        _0xf48bfc['mX'] = 0x0,
        _0xf48bfc['mY'] = 0x0,
        _0xf48bfc['gX'] = 0x0,
        _0xf48bfc['gY'] = 0x0,
        _0xf48bfc['bX'] = 0x0,
        _0xf48bfc['eX'] = 0x0,
        _0xf48bfc['eY'] = 0x0,
        _0xf48bfc['rot'] = 0x0,
        _0xf48bfc['rotY'] = 0x0,
        _0xf48bfc['defRot'] = 0x0,
        _0xf48bfc['hand_position_arr'] = [],
        _0xf48bfc['m1X'] = 0x0,
        _0xf48bfc['m2X'] = 0x0,
        _0xf48bfc['m3X'] = 0x0,
        _0xf48bfc['m4X'] = 0x0,
        _0xf48bfc['m5X'] = 0x0,
        _0xf48bfc['s1X'] = 0x0,
        _0xf48bfc['s2X'] = 0x0,
        _0xf48bfc['s3X'] = 0x0,
        _0xf48bfc['s4X'] = 0x0,
        _0xf48bfc['s5X'] = 0x0,
        _0xf48bfc['m1Y'] = 0x0,
        _0xf48bfc['m2Y'] = 0x0,
        _0xf48bfc['m3Y'] = 0x0,
        _0xf48bfc['m4Y'] = 0x0,
        _0xf48bfc['m5Y'] = 0x0,
        _0xf48bfc['s1Y'] = 0x0,
        _0xf48bfc['s2Y'] = 0x0,
        _0xf48bfc['s3Y'] = 0x0,
        _0xf48bfc['s4Y'] = 0x0,
        _0xf48bfc['s5Y'] = 0x0,
        _0xf48bfc['m1xStart'] = 0x0,
        _0xf48bfc['m1xEnd'] = 0x0,
        _0xf48bfc['m2xStart'] = 0x0,
        _0xf48bfc['m2xEnd'] = 0x0,
        _0xf48bfc['m3xStart'] = 0x0,
        _0xf48bfc['m3xEnd'] = 0x0,
        _0xf48bfc['m4xStart'] = 0x0,
        _0xf48bfc['m4xEnd'] = 0x0,
        _0xf48bfc['m5xStart'] = 0x0,
        _0xf48bfc['m5xEnd'] = 0x0,
        _0xf48bfc['m1'],
        _0xf48bfc['m2'],
        _0xf48bfc['m3'],
        _0xf48bfc['m4'],
        _0xf48bfc['m5'],
        _0xf48bfc['s1'],
        _0xf48bfc['s2'],
        _0xf48bfc['s3'],
        _0xf48bfc['s4'],
        _0xf48bfc['s5'],
        _0xf48bfc['fieldSpell'],
        _0xf48bfc['pendulumLeft'],
        _0xf48bfc['pendulumRight'],
        _0xf48bfc['opponent'],
        _0xf48bfc['lifepoints'] = 0x1f40,
        _0xf48bfc['m1_txt'],
        _0xf48bfc['m2_txt'],
        _0xf48bfc['m3_txt'],
        _0xf48bfc['m4_txt'],
        _0xf48bfc['m5_txt'],
        _0xf48bfc['deck_face_up'] = ![],
        _0xf48bfc['rating_rep_txt'],
        _0xf48bfc['pronoun'] = 'his',
        _0xf48bfc['token'] = 0x1,
        _0xf48bfc['linkCard'],
        _0xf48bfc['leftLinkX'] = 0x0,
        _0xf48bfc['leftLinkY'] = 0x0,
        _0xf48bfc['rightLinkX'] = 0x0,
        _0xf48bfc['rightLinkY'] = 0x0,
        _0xf48bfc['skillCardX'] = 0x0,
        _0xf48bfc['skillCardY'] = 0x0,
        _0xf48bfc['link_txt'],
        _0xf48bfc['typing_timer'] = new Timer(0x1388),
        _0xf48bfc['typing_timer']['callback'] = _0xf48bfc['stopTyping'],
        _0xf48bfc['bubbles'],
        _0xf48bfc['countdown'],
        _0xf48bfc['all_good'],
        _0xf48bfc['skillCard'],
        _0xf48bfc['skill'] = '',
        _0xf48bfc['partner'],
        _0xf48bfc['sleeve'],
        _0xf48bfc['seconds'],
        _0xf48bfc['start'],
        _0xf48bfc['still_good'],
        _0xf48bfc['initPlayer1'] = function () {
            _0xf48bfc['handY'] = 0x25b,
                _0xf48bfc['deckX'] = 0x321,
                _0xf48bfc['deckY'] = 531.5,
                _0xf48bfc['graveX'] = 0x321,
                _0xf48bfc['graveY'] = 338.5,
                _0xf48bfc['banishedX'] = 0x2de,
                _0xf48bfc['banishedY'] = 291.5,
                _0xf48bfc['extraX'] = 0xef,
                _0xf48bfc['extraY'] = 531.5,
                _0xf48bfc['fieldSpellX'] = 0xef,
                _0xf48bfc['fieldSpellY'] = 338.5,
                _0xf48bfc['pendulumLeftX'] = 0xfe,
                _0xf48bfc['pendulumRightX'] = 0x311,
                _0xf48bfc['pendulumY'] = 431.5,
                _0xf48bfc['monsterY'] = 384.5,
                _0xf48bfc['spellY'] = 476.5,
                _0xf48bfc['mX'] = 0.2925,
                _0xf48bfc['mY'] = 0.1025,
                _0xf48bfc['eX'] = -0.2925,
                _0xf48bfc['eY'] = 0.1025,
                _0xf48bfc['bX'] = 0.283,
                _0xf48bfc['gX'] = 0.283,
                _0xf48bfc['gY'] = 0.067,
                _0xf48bfc['rot'] = 0x0,
                _0xf48bfc['rotY'] = 0x0,
                _0xf48bfc['defRot'] = -0x5a,
                _0xf48bfc['hand_position_arr'] = [0x1e5, 0x217, 0x249, 0x27b, 0x2ad, 0x2c0],
                _0xf48bfc['m1X'] = 332.7,
                _0xf48bfc['m2X'] = 426.3,
                _0xf48bfc['m3X'] = 519.9,
                _0xf48bfc['m4X'] = 0x265,
                _0xf48bfc['m5X'] = 0x2c1,
                _0xf48bfc['s1X'] = 332.7,
                _0xf48bfc['s2X'] = 426.3,
                _0xf48bfc['s3X'] = 519.9,
                _0xf48bfc['s4X'] = 0x265,
                _0xf48bfc['s5X'] = 0x2c1,
                _0xf48bfc['m1Y'] = 384.5,
                _0xf48bfc['m2Y'] = 384.5,
                _0xf48bfc['m3Y'] = 384.5,
                _0xf48bfc['m4Y'] = 384.5,
                _0xf48bfc['m5Y'] = 384.5,
                _0xf48bfc['s1Y'] = 477.5,
                _0xf48bfc['s2Y'] = 477.5,
                _0xf48bfc['s3Y'] = 477.5,
                _0xf48bfc['s4Y'] = 477.5,
                _0xf48bfc['s5Y'] = 477.5,
                _0xf48bfc['m1xStart'] = 0x140,
                _0xf48bfc['m1xEnd'] = 0x15b,
                _0xf48bfc['m2xStart'] = 0x19d,
                _0xf48bfc['m2xEnd'] = 0x1b8,
                _0xf48bfc['m3xStart'] = 0x1fa,
                _0xf48bfc['m3xEnd'] = 0x215,
                _0xf48bfc['m4xStart'] = 0x257,
                _0xf48bfc['m4xEnd'] = 0x272,
                _0xf48bfc['m5xStart'] = 0x2b4,
                _0xf48bfc['m5xEnd'] = 0x2cf;
        }
        ,
        _0xf48bfc['initPlayer2'] = function () {
            _0xf48bfc['handY'] = -0x15,
                _0xf48bfc['deckX'] = 0xef,
                _0xf48bfc['deckY'] = 52.5,
                _0xf48bfc['graveX'] = 0xef,
                _0xf48bfc['graveY'] = 244.5,
                _0xf48bfc['banishedX'] = 0x132,
                _0xf48bfc['banishedY'] = 291.5,
                _0xf48bfc['extraX'] = 0x321,
                _0xf48bfc['extraY'] = 52.5,
                _0xf48bfc['fieldSpellX'] = 0x321,
                _0xf48bfc['fieldSpellY'] = 244.5,
                _0xf48bfc['pendulumLeftX'] = 0x311,
                _0xf48bfc['pendulumRightX'] = 0xfe,
                _0xf48bfc['pendulumY'] = 151.5,
                _0xf48bfc['monsterY'] = 198.5,
                _0xf48bfc['spellY'] = 105.5,
                _0xf48bfc['mX'] = -0.2925,
                _0xf48bfc['mY'] = -0.1025,
                _0xf48bfc['eX'] = 0.2925,
                _0xf48bfc['eY'] = -0.1025,
                _0xf48bfc['bX'] = -0.283,
                _0xf48bfc['gX'] = -0.283,
                _0xf48bfc['gY'] = -0.067,
                _0xf48bfc['rot'] = 0xb4,
                _0xf48bfc['rotY'] = 0xb4,
                _0xf48bfc['defRot'] = 0x5a,
                _0xf48bfc['hand_position_arr'] = [0x1e5, 0x1b3, 0x181, 0x14f, 0x11d, 0x11d],
                _0xf48bfc['m1X'] = 0x2c1,
                _0xf48bfc['m2X'] = 0x265,
                _0xf48bfc['m3X'] = 519.9,
                _0xf48bfc['m4X'] = 426.3,
                _0xf48bfc['m5X'] = 332.7,
                _0xf48bfc['s1X'] = 0x2c1,
                _0xf48bfc['s2X'] = 0x265,
                _0xf48bfc['s3X'] = 519.9,
                _0xf48bfc['s4X'] = 426.3,
                _0xf48bfc['s5X'] = 332.7,
                _0xf48bfc['m1Y'] = 199.5,
                _0xf48bfc['m2Y'] = 199.5,
                _0xf48bfc['m3Y'] = 199.5,
                _0xf48bfc['m4Y'] = 199.5,
                _0xf48bfc['m5Y'] = 199.5,
                _0xf48bfc['s1Y'] = 105.5,
                _0xf48bfc['s2Y'] = 105.5,
                _0xf48bfc['s3Y'] = 105.5,
                _0xf48bfc['s4Y'] = 105.5,
                _0xf48bfc['s5Y'] = 105.5,
                _0xf48bfc['m1xStart'] = 0x2cf,
                _0xf48bfc['m1xEnd'] = 0x2b4,
                _0xf48bfc['m2xStart'] = 0x272,
                _0xf48bfc['m2xEnd'] = 0x257,
                _0xf48bfc['m3xStart'] = 0x215,
                _0xf48bfc['m3xEnd'] = 0x1fa,
                _0xf48bfc['m4xStart'] = 0x1b8,
                _0xf48bfc['m4xEnd'] = 0x19d,
                _0xf48bfc['m5xStart'] = 0x15b,
                _0xf48bfc['m5xEnd'] = 0x140;
        }
        ,
        _0xf48bfc['initPlayer1Links'] = function () {
            _0xf48bfc['deckY'] = 0x1fc,
                _0xf48bfc['graveX'] = 0x311,
                _0xf48bfc['graveY'] = 384.5,
                _0xf48bfc['banishedX'] = 0x321,
                _0xf48bfc['extraY'] = 0x1fc,
                _0xf48bfc['fieldSpellX'] = 0xfe,
                _0xf48bfc['fieldSpellY'] = 384.5,
                _0xf48bfc['pendulumLeft'] = _0xf48bfc['s1'],
                _0xf48bfc['pendulumRight'] = _0xf48bfc['s5'],
                _0xf48bfc['s1'] = _0xf48bfc['pendulumLeft'],
                _0xf48bfc['s5'] = _0xf48bfc['pendulumRight'],
                _0xf48bfc['pendulumLeftX'] = 332.7,
                _0xf48bfc['pendulumRightX'] = 0x2c1,
                _0xf48bfc['pendulumY'] = 477.5;
        }
        ,
        _0xf48bfc['initPlayer2Links'] = function () {
            _0xf48bfc['deckY'] = 0x49,
                _0xf48bfc['graveX'] = 253.5,
                _0xf48bfc['graveY'] = 199.5,
                _0xf48bfc['banishedX'] = 0xef,
                _0xf48bfc['extraY'] = 0x49,
                _0xf48bfc['fieldSpellX'] = 0x311,
                _0xf48bfc['fieldSpellY'] = 199.5,
                _0xf48bfc['pendulumLeft'] = _0xf48bfc['s1'],
                _0xf48bfc['pendulumRight'] = _0xf48bfc['s5'],
                _0xf48bfc['s1'] = _0xf48bfc['pendulumLeft'],
                _0xf48bfc['s5'] = _0xf48bfc['pendulumRight'],
                _0xf48bfc['pendulumLeftX'] = 0x2c1,
                _0xf48bfc['pendulumRightX'] = 332.7,
                _0xf48bfc['pendulumY'] = 105.5;
        }
        ,
        _0xf48bfc['initPlayer1Speed'] = function () {
            _0xf48bfc['m1X'] = 0x172,
                _0xf48bfc['m2X'] = 0x208,
                _0xf48bfc['m3X'] = 0x29e,
                _0xf48bfc['s1X'] = 0x172,
                _0xf48bfc['s2X'] = 0x208,
                _0xf48bfc['s3X'] = 0x29e,
                _0xf48bfc['m1xStart'] = 0x165,
                _0xf48bfc['m1xEnd'] = 0x180,
                _0xf48bfc['m2xStart'] = 0x1fb,
                _0xf48bfc['m2xEnd'] = 0x216,
                _0xf48bfc['m3xStart'] = 0x291,
                _0xf48bfc['m3xEnd'] = 0x2ac,
                _0xf48bfc['deckX'] = 0x321,
                _0xf48bfc['deckY'] = 0x1fc,
                _0xf48bfc['extraX'] = 0xef,
                _0xf48bfc['extraY'] = 0x1fc,
                _0xf48bfc['graveX'] = 0x321,
                _0xf48bfc['graveY'] = 384.5,
                _0xf48bfc['fieldSpellX'] = 0xef,
                _0xf48bfc['fieldSpellY'] = 384.5,
                _0xf48bfc['skillCardX'] = 0x2de,
                _0xf48bfc['skillCardY'] = 291.5,
                _0xf48bfc['banishedX'] = 0x321,
                _0xf48bfc['banishedY'] = 291.5;
        }
        ,
        _0xf48bfc['initPlayer2Speed'] = function () {
            _0xf48bfc['m1X'] = 0x29e,
                _0xf48bfc['m2X'] = 0x208,
                _0xf48bfc['m3X'] = 0x172,
                _0xf48bfc['s1X'] = 0x29e,
                _0xf48bfc['s2X'] = 0x208,
                _0xf48bfc['s3X'] = 0x172,
                _0xf48bfc['m1xStart'] = 0x2ab,
                _0xf48bfc['m1xEnd'] = 0x290,
                _0xf48bfc['m2xStart'] = 0x215,
                _0xf48bfc['m2xEnd'] = 0x1fa,
                _0xf48bfc['m3xStart'] = 0x180,
                _0xf48bfc['m3xEnd'] = 0x165,
                _0xf48bfc['deckX'] = 0xef,
                _0xf48bfc['deckY'] = 0x49,
                _0xf48bfc['extraX'] = 0x321,
                _0xf48bfc['extraY'] = 0x49,
                _0xf48bfc['graveX'] = 0xef,
                _0xf48bfc['graveY'] = 199.5,
                _0xf48bfc['fieldSpellX'] = 0x321,
                _0xf48bfc['fieldSpellY'] = 199.5,
                _0xf48bfc['skillCardX'] = 0x132,
                _0xf48bfc['skillCardY'] = 291.5,
                _0xf48bfc['banishedX'] = 0xef,
                _0xf48bfc['banishedY'] = 291.5;
        }
        ,
        _0xf48bfc['resetDeck'] = function () {
            _0xf48bfc['main_arr'] = [],
                _0xf48bfc['grave_arr'] = [],
                _0xf48bfc['banished_arr'] = [],
                _0xf48bfc['extra_arr'] = [],
                _0xf48bfc['hand_arr'] = [],
                _0xf48bfc['main_arr'] = [],
                _0xf48bfc['all_cards_arr'] = [],
                _0xf48bfc['m1'] = null,
                _0xf48bfc['m2'] = null,
                _0xf48bfc['m3'] = null,
                _0xf48bfc['m4'] = null,
                _0xf48bfc['m5'] = null,
                _0xf48bfc['s1'] = null,
                _0xf48bfc['s2'] = null,
                _0xf48bfc['s3'] = null,
                _0xf48bfc['s4'] = null,
                _0xf48bfc['s5'] = null,
                _0xf48bfc['fieldSpell'] = null,
                _0xf48bfc['pendulumLeft'] = null,
                _0xf48bfc['pendulumRight'] = null,
                _0xf48bfc['skillCard'] = null,
                _0xf48bfc['lifepoints'] = 0x1f40,
                _0xf48bfc['deck_face_up'] = ![],
                _0xf48bfc['still_good'] = ![];
        }
        ,
        _0xf48bfc;
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
function pauseGame(_0x13ca35, _0x28dd02) {
    _0x13ca35 ? (_0x28dd02['viewing'] = 'Paused\x20Game',
        showViewing(_0x28dd02),
        addLine(escapeHTML(_0x28dd02['username']) + '\x20paused\x20the\x20game')) : addLine('A\x20judge\x20paused\x20the\x20game'),
        paused = !![],
        paused ? $('#pause_btn')['val']('Resume\x20Game') : $('#pause_btn')['val']('Pause\x20Game'),
        username == _0x28dd02['username'] && duelist && (viewing = 'Paused\x20Game'),
        playSound(PartnerFound);
}
function resumeGame(_0x5749e0) {
    addLine('The\x20game\x20can\x20now\x20resume'),
        paused = ![],
        $('#pause_btn')['val']('Pause\x20Game'),
        viewing == 'Paused\x20Game' && (viewing = ''),
        _0x5749e0 && stopViewing(_0x5749e0),
        playSound(PartnerFound);
}
function resetGame(_0x1c72f9, _0x52e69e) {
    if (resetting)
        return;
    resetting = !![];
    var _0x2035d2 = 0x0
        , _0x25ff84 = 0x0;
    _0x140d83: for (var _0x2519f9 = 0x0; _0x2519f9 < _0x1c72f9['all_cards_arr']['length']; _0x2519f9++) {
        for (var _0x51fc94 = 0x0; _0x51fc94 < _0x1c72f9['extra_arr']['length']; _0x51fc94++) {
            if (_0x1c72f9['extra_arr'][_0x51fc94]['data']('id') == _0x1c72f9['all_cards_arr'][_0x2519f9]['data']('id')) {
                if (!_0x1c72f9['extra_arr'][_0x51fc94]['data']('cardfront')['data']('initialized') || isExtraDeckCard(_0x1c72f9['extra_arr'][_0x51fc94])) {
                    _0x1c72f9['all_cards_arr'][_0x2519f9]['data']('face_down', !![]),
                        _0x1c72f9['all_cards_arr'][_0x2519f9]['data']('face_up', ![]);
                    continue _0x140d83;
                }
            }
        }
        for (_0x51fc94 = 0x0; _0x51fc94 < _0x1c72f9['main_arr']['length']; _0x51fc94++) {
            if (_0x1c72f9['main_arr'][_0x51fc94]['data']('id') == _0x1c72f9['all_cards_arr'][_0x2519f9]['data']('id')) {
                _0x1c72f9['all_cards_arr'][_0x2519f9]['data']('face_down', ![]),
                    _0x1c72f9['all_cards_arr'][_0x2519f9]['data']('face_up', ![]);
                continue _0x140d83;
            }
        }
        var _0x37e303 = removeCard(_0x1c72f9, {
            'id': _0x1c72f9['all_cards_arr'][_0x2519f9]['data']('id')
        });
        if (!_0x37e303) {
            _0x37e303 = removeCard(_0x1c72f9['opponent'], {
                'id': _0x1c72f9['all_cards_arr'][_0x2519f9]['data']('id')
            });
            if (!_0x37e303) {
                console['log']('problem\x20finding\x20' + _0x1c72f9['all_cards_arr'][_0x2519f9]['data']('id'));
                continue;
            }
            updateController(_0x1c72f9, _0x37e303);
        }
        if (_0x37e303['data']('cardfront')['data']('monster_color') == 'Token' || _0x37e303['data']('cardfront')['data']('card_type') == 'Skill') {
            _0x1c72f9['all_cards_arr']['splice'](_0x2519f9, 0x1),
                _0x37e303['remove'](),
                _0x37e303 = null,
                _0x2519f9--;
            continue;
        }
        var _0x363685 = _0x37e303['data']('owner')['deckX']
            , _0x529557 = _0x37e303['data']('owner')['deckY'];
        isExtraDeckCard(_0x37e303) ? (_0x37e303['data']('face_down', !![]),
            _0x363685 = _0x37e303['data']('owner')['extraX'],
            _0x529557 = _0x37e303['data']('owner')['extraY'],
            _0x1c72f9['extra_arr']['push'](_0x37e303)) : _0x1c72f9['main_arr']['push'](_0x37e303),
            _0x2035d2++,
            $('#field')['append'](_0x37e303),
            TweenMax['killTweensOf'](_0x37e303),
            TweenMax['to'](_0x37e303, easeSeconds, {
                'left': _0x363685,
                'top': _0x529557,
                'scale': 0.1485,
                'rotation': _0x37e303['data']('owner')['rot'],
                'rotationY': 0xb4 + ABOUT_ZERO,
                'delay': _0x2035d2 * 0.25,
                'ease': Linear['easeNone'],
                'onComplete': function () {
                    _0x25ff84++,
                        _0x2035d2 == _0x25ff84 && (resetting = ![],
                            shiftExtra(_0x1c72f9),
                            shuffleDeck(_0x1c72f9, _0x52e69e));
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
function _0x2b3f(_0xe3749, _0x41f522) {
    var _0x61484d = _0x12a9();
    return _0x2b3f = function (_0x13a219, _0x4fb315) {
        _0x13a219 = _0x13a219 - 0x1d4;
        var _0x12a9ac = _0x61484d[_0x13a219];
        return _0x12a9ac;
    }
        ,
        _0x2b3f(_0xe3749, _0x41f522);
}
function initPlayers(_0x3526dd) {
    console['log']('initPlayers'),
        $('#avatar1\x20.rating_txt')['text'](_0x3526dd['player1']['rating'] + '/' + _0x3526dd['player1']['experience']),
        $('#avatar1\x20.image')['attr']('src', getAvatarStart(_0x3526dd['player1']['pic'])),
        $('#avatar2\x20.rating_txt')['text'](_0x3526dd['player2']['rating'] + '/' + _0x3526dd['player2']['experience']),
        _0x3526dd['player2']['pic'] ? $('#avatar2\x20.image')['attr']('src', getAvatarStart(_0x3526dd['player2']['pic'])) : $('#avatar2\x20.image')['attr']('src', IMAGES_START + 'black.jpg'),
        duelist && (selectedToken = _0x3526dd['player1']['token']),
        player1['token'] = _0x3526dd['player1']['token'],
        player1['token'] == 0x0 && (player1['token'] = 0x1),
        player2['token'] = _0x3526dd['player2']['token'],
        player2['token'] == 0x0 && (player2['token'] = 0x1),
        player1['sleeve'] = _0x3526dd['player1']['sleeve'],
        player2['sleeve'] = _0x3526dd['player2']['sleeve'],
        tag_duel ? ($('#avatar3\x20.rating_txt')['text'](_0x3526dd['player3']['rating'] + '/' + _0x3526dd['player3']['experience']),
            $('#avatar3\x20.image')['attr']('src', getAvatarStart(_0x3526dd['player3']['pic'])),
            $('#avatar4\x20.rating_txt')['text'](_0x3526dd['player4']['rating'] + '/' + _0x3526dd['player4']['experience']),
            $('#avatar4\x20.image')['attr']('src', getAvatarStart(_0x3526dd['player4']['pic'])),
            expandAvatar($('#avatar1\x20.username_txt'), _0x3526dd['player1']['username'], _0x3526dd['player3']['username']),
            expandAvatar($('#avatar2\x20.username_txt'), _0x3526dd['player2']['username'], _0x3526dd['player4']['username']),
            expandAvatar($('#avatar3\x20.username_txt'), _0x3526dd['player3']['username'], _0x3526dd['player1']['username']),
            expandAvatar($('#avatar4\x20.username_txt'), _0x3526dd['player4']['username'], _0x3526dd['player2']['username']),
            player3['token'] = _0x3526dd['player3']['token'],
            player3['token'] == 0x0 && (player3['token'] = 0x1),
            player4['token'] = _0x3526dd['player4']['token'],
            player4['token'] == 0x0 && (player4['token'] = 0x1),
            player3['sleeve'] = _0x3526dd['player3']['sleeve'],
            player4['sleeve'] = _0x3526dd['player4']['sleeve'],
            !always_show_nsfw && (_0x3526dd['player3']['nsfw'] && ($('#avatar3\x20.nsfw')['css']('opacity', 0x1),
                $('#avatar3\x20.nsfw')['show'](),
                $('#avatar3\x20.nsfw_btn')['show']()),
                _0x3526dd['player4']['nsfw'] && ($('#avatar4\x20.nsfw')['css']('opacity', 0x1),
                    $('#avatar4\x20.nsfw')['show'](),
                    $('#avatar4\x20.nsfw_btn')['show']()))) : (expandAvatar($('#avatar1\x20.username_txt'), _0x3526dd['player1']['username']),
                        expandAvatar($('#avatar2\x20.username_txt'), _0x3526dd['player2']['username'])),
        !always_show_nsfw && (_0x3526dd['player1']['nsfw'] && ($('#avatar1\x20.nsfw')['css']('opacity', 0x1),
            $('#avatar1\x20.nsfw')['show'](),
            $('#avatar1\x20.nsfw_btn')['show']()),
            _0x3526dd['player2']['nsfw'] && ($('#avatar2\x20.nsfw')['css']('opacity', 0x1),
                $('#avatar2\x20.nsfw')['show'](),
                $('#avatar2\x20.nsfw_btn')['show']())),
        stillGood(Player1(), !![]),
        stillGood(Player2(), !![]),
        streaming && ($('#avatar1\x20.username_txt')['text'](censor($('#avatar1\x20.username_txt')['text']())),
            $('#avatar2\x20.username_txt')['text'](censor($('#avatar2\x20.username_txt')['text']())),
            $('#avatar3\x20.username_txt')['text'](censor($('#avatar3\x20.username_txt')['text']())),
            $('#avatar4\x20.username_txt')['text'](censor($('#avatar4\x20.username_txt')['text']())));
}
function expandAvatar(_0x105c3d, _0x220af2, _0x52c6e2) {
    var _0x3478de = _0x105c3d['parent']()[0x0]['style']['display'];
    _0x105c3d['text'](_0x220af2),
        _0x105c3d['css']('left', _0x52c6e2 ? 0x3 : 0x7),
        _0x105c3d['css']('width', 0x8e);
    if (_0x52c6e2) {
        _0x105c3d['html'](escapeHTML(_0x220af2) + '<br><font\x20style=\x22font-size:\x2012px;\x22>&\x20' + escapeHTML(_0x52c6e2) + '</font>'),
            _0x105c3d['css']('white-space', 'nowrap'),
            _0x105c3d['parent']()['show'](),
            _0x105c3d['css']('width', _0x105c3d[0x0]['scrollWidth']),
            _0x105c3d['css']('transform', 'scaleX(1)');
        _0x105c3d[0x0]['scrollWidth'] > 0x8e && (_0x105c3d['css']('transform', 'scaleX(' + 0x8e / _0x105c3d[0x0]['scrollWidth'] + ')'),
            _0x105c3d['css']('transform-origin', 'top\x20left'));
        _0x105c3d['parent']()[0x0]['style']['display'] = _0x3478de,
            _0x57a2cd();
        return;
    }
    setText(_0x105c3d),
        _0x57a2cd();
    function _0x57a2cd() {
        TweenMax['to'](_0x105c3d, 0x0, {
            'scaleX': getScale(_0x105c3d[0x0]),
            'rotation': -0x5a
        });
    }
}
function shiftPlayersE(_0x52d3f1) {
    if (!tag_duel)
        return;
    turnCount < 0x2 && (_0x52d3f1 = ![]),
        _0x52d3f1 ? moveDecks(turn_player['partner'], turn_player) : (removeDeck(turn_player['partner']),
            removeExtra(turn_player['partner']),
            removeHand(turn_player['partner']),
            shiftDeck(turn_player),
            shiftExtra(turn_player),
            initHand(turn_player),
            shiftPlayer(turn_player));
}
function shiftPlayer(_0x4bf4b2) {
    console['log']('shiftPlayer'),
        console['log']('turn_player\x20=\x20' + turn_player['username']),
        console['log']('turn_player.opponent\x20=\x20' + turn_player['opponent']['username']);
    switch (_0x4bf4b2) {
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
    var _0x32038c = Math['ceil'](Math['random']() * 0xe);
    return gameLossSound = new Audio('sounds/lose' + _0x32038c + '.mp3'),
        gameLossSound;
}
function getGameWinSound() {
    console['log']('getGameWinSound');
    var _0x467f87 = Math['ceil'](Math['random']() * 0xe);
    return gameWinSound = new Audio('sounds/win' + _0x467f87 + '.mp3'),
        gameWinSound;
}
function recycleCards() {
    for (var _0x28fe11 = 0x0; _0x28fe11 < player1['all_cards_arr']['length']; _0x28fe11++) {
        addRecycledCard(player1['all_cards_arr'][_0x28fe11]);
    }
    for (_0x28fe11 = 0x0; _0x28fe11 < player2['all_cards_arr']['length']; _0x28fe11++) {
        addRecycledCard(player2['all_cards_arr'][_0x28fe11]);
    }
}
function duelCardDownE(_0x4859c6) {
    $('html')['contextmenu'](function () {
        return ![];
    });
    if ($(this)['parents']('#duelmessage:first')['length'] > 0x0)
        return;
    removeCardMenu(),
        showMenu($(this), [{
            'label': 'Why\x20don\x27t\x20I\x20have\x20more\x20options?',
            'data': 'Trace\x20menu'
        }]),
        setTimeout(function () {
            $('html')['off']('contextmenu');
        }, 0x5);
}
function newDuelCard(_0x46c7be) {
    var _0x3ff1d9 = getRecycledCard();
    return !_0x3ff1d9 && (_0x3ff1d9 = new Card()),
        automatic && _0x3ff1d9['contextmenu'](duelCardDownE),
        _0x3ff1d9['off']('mouseenter\x20click'),
        _0x3ff1d9['on']('mouseenter\x20click', previewE),
        duelist && _0x3ff1d9['find']('.content:first')['mouseover'](cardMenuE),
        _0x3ff1d9['find']('.content:first')['mouseleave'](menuOutE),
        _0x3ff1d9['find']('.cardfront')['hide'](),
        (admin || adjudicator) && (!automatic && _0x3ff1d9['addClass']('target')),
        _0x3ff1d9['click'](targetCard),
        _0x3ff1d9['data']('controller', _0x46c7be),
        _0x3ff1d9['data']('owner', _0x46c7be),
        TweenMax['to'](_0x3ff1d9, 0x0, {
            'rotationY': 0xb4 + ABOUT_ZERO,
            'scale': 0.1485
        }),
        _0x3ff1d9;
}
function getRecycledCard() {
    if (recycled_cards_arr['length'] > 0x0) {
        var _0x9692be = recycled_cards_arr['splice'](0x0, 0x1)[0x0];
        return _0x9692be['data']('cardfront') && (_0x9692be['data']('cardfront')['reset'](),
            _0x9692be['data']('cardfront')[0x0]['style']['display'] = 'none'),
            _0x9692be['reset'](),
            console['log']('recycled\x20card'),
            _0x9692be;
    }
    return null;
}
function addRecycledCard(_0x4e3984) {
    _0x4e3984['removeClass']('xyzmaterial'),
        _0x4e3984['removeSleeve'](),
        _0x4e3984['find']('.content:first')['off']('mouseover', cardMenuE),
        _0x4e3984['find']('.content:first')['off']('mouseleave', menuOutE),
        _0x4e3984['off']('click', targetCard),
        _0x4e3984['find']('.cardfront')['hide'](),
        _0x4e3984['find']('.skillback')['remove'](),
        _0x4e3984['find']('.sleeve')['remove'](),
        _0x4e3984['data']('textSet', ![]),
        _0x4e3984['detach']();
    if (recycled_cards_arr['indexOf'](_0x4e3984) >= 0x0)
        return;
    recycled_cards_arr['push'](_0x4e3984);
}
function showRating(_0x43d082) {
    var _0x22224e = $(this);
    _0x22224e[0x0] == $('#pause_btn,\x20#next_game_btn')[0x0] && ($('#avatar1\x20.rating')['is'](':visible') ? _0x22224e = $('#avatar1\x20.rating') : _0x22224e = $('#avatar2\x20.rating'));
    if (_0x22224e[0x0] == $('#avatar2\x20.rating')[0x0] && solo)
        return;
    _0x22224e['find']('.rating_txt')['show'](),
        TweenMax['to'](_0x22224e['find']('.rating_txt'), 0.25, {
            'alpha': 0x1
        }),
        $('#pause_btn,\x20#next_game_btn')['length'] > 0x0 && ((replay || admin || adjudicator || duelist && (!viewing && !paused || viewing == 'Paused\x20Game') && currentLabel['indexOf']('duel_start') == 0x0) && ($('#pause_btn,\x20#next_game_btn')['show'](),
            TweenMax['to']($('#pause_btn,\x20#next_game_btn')['data']('proxy'), 0.25, {
                'alpha': 0x1
            })));
}
function hideRating() {
    var _0x48ae7a = $(this);
    _0x48ae7a[0x0] == $('#pause_btn,\x20#next_game_btn')[0x0] && ($('#avatar1\x20.rating')['is'](':visible') ? _0x48ae7a = $('#avatar1\x20.rating') : _0x48ae7a = $('#avatar2\x20.rating')),
        TweenMax['to'](_0x48ae7a['find']('.rating_txt'), 0.25, {
            'alpha': 0x0,
            'onComplete': function () {
                _0x48ae7a['find']('.rating_txt')['hide']();
            }
        }),
        $('#pause_btn,\x20#next_game_btn')['length'] > 0x0 && !admin && !adjudicator && TweenMax['to']($('#pause_btn,\x20#next_game_btn')['data']('proxy'), 0.25, {
            'alpha': 0x0,
            'onComplete': function () {
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
function duelChatPrint(_0x4dfae2) {
    saveDuelVSP();
    var _0x31ce50 = '#0000FF';
    _0x4dfae2['color'] && (_0x31ce50 = '#' + _0x4dfae2['color']);
    (player1['username'] == _0x4dfae2['username'] || player3 && player3['username'] == _0x4dfae2['username']) && (_0x31ce50 == '#0000FF' && (_0x31ce50 = '#FF0000'));
    !_0x4dfae2['html'] && (_0x4dfae2['message'] = escapeHTMLWithLinks(_0x4dfae2['message']));
    if (conceal) {
        switch (_0x4dfae2['username']) {
            case player1['username']:
                _0x4dfae2['username'] = 'Red';
                break;
            case player2['username']:
                _0x4dfae2['username'] = 'Blue';
                break;
            case player3['username']:
            case player4['username']:
                _0x4dfae2['username'] = 'Partner';
                break;
        }
        switch (_0x4dfae2['color']) {
            case '009900':
            case '707070':
            case 'CC9900':
            case '660099':
                _0x4dfae2['username'] = 'Admin';
                break;
        }
    } else
        streaming && (_0x4dfae2['username'] = censor(_0x4dfae2['username']),
            _0x4dfae2['message'] = censor(_0x4dfae2['message']));
    $('#duel\x20.cout_txt')['append']('<span><b><font\x20color=\x22' + _0x31ce50 + '\x22>' + escapeHTML(_0x4dfae2['username']) + ':\x20</font></b><font>' + _0x4dfae2['message'] + '</font></span><br>'),
        restoreDuelVSP();
}
function addLine(_0x1d6e3d) {
    if (conceal)
        return;
    saveDuelVSP(),
        $('#duel\x20.cout_txt')['append']('<b>' + escapeHTML(_0x1d6e3d) + '</b><br>'),
        restoreDuelVSP();
}
function saveDuelVSP(_0x271473) {
    duel_vsp = $('#duel\x20.cout_txt')['scrollTop']();
    var _0x4232ac = $('#duel\x20.cout_txt')['scrollMax']();
    duel_vsp >= _0x4232ac - 0x50 && (duel_vsp += 0x270f);
}
function restoreDuelVSP() {
    if (duel_vsp >= $('#duel\x20.cout_txt')['scrollMax']()) {
        var _0x310fea = duel_vsp + 0x270f;
        setTimeout(function () {
            $('#duel\x20.cout_txt')['scrollTop'](_0x310fea);
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
function addCounter(_0x3a06a4, _0x2b65ad) {
    console['time']('addCounter');
    var _0x2f77de = getFieldCard(_0x3a06a4, _0x2b65ad);
    _0x2f77de['data']('counters', _0x2b65ad['total']),
        updateCounters(),
        playSound(CounterSound),
        addLine(escapeHTML(_0x3a06a4['username']) + '\x20placed\x20a\x20counter\x20on\x20\x22' + _0x2f77de['data']('cardfront')['data']('name') + '\x22\x20(now\x20' + _0x2b65ad['total'] + ')'),
        endAction(),
        console['timeEnd']('addCounter');
}
function removeCounter(_0x9b5b4b, _0x144bef) {
    var _0x4a30d8 = getFieldCard(_0x9b5b4b, _0x144bef);
    _0x4a30d8['data']('counters', _0x144bef['total']),
        updateCounters(),
        addLine(escapeHTML(_0x9b5b4b['username']) + '\x20removed\x20a\x20counter\x20from\x20\x22' + _0x4a30d8['data']('cardfront')['data']('name') + '\x22\x20(now\x20' + _0x144bef['total'] + ')'),
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
function viewingE(_0x177a9d, _0x48b73a) {
    if (!_0x177a9d || _0x177a9d == 'Paused\x20Game')
        return;
    var _0x3922e3 = [];
    switch (_0x177a9d) {
        case 'Deck':
        case 'Deck\x20(Picking\x20Card)':
        case 'Deck\x20(Picking\x202\x20Cards)':
        case 'Deck\x20(Picking\x203\x20Cards)':
        case 'Deck\x20(Picking\x204\x20Cards)':
            _0x3922e3 = Player1()['main_arr'];
            break;
        case 'Graveyard':
            _0x3922e3 = player1['grave_arr'];
            break;
        case 'Banished':
            _0x3922e3 = player1['banished_arr'];
            break;
        case 'Extra\x20Deck':
            _0x3922e3 = Player1()['extra_arr'];
            break;
        case 'Host\x27s\x20Public\x20Extra\x20Deck':
            _0x3922e3 = Player1()['extra_arr'];
            break;
        case 'Opponent\x27s\x20Banished':
            _0x3922e3 = player1['opponent']['banished_arr'];
            break;
        case 'Opponent\x27s\x20Graveyard':
            _0x3922e3 = player1['opponent']['grave_arr'];
            break;
        case 'Opponent\x27s\x20Extra\x20Deck':
        case 'Opponent\x27s\x20Public\x20Extra\x20Deck':
            _0x3922e3 = Player1()['opponent']['extra_arr'];
            break;
        case 'Opponent\x27s\x20Hand':
            _0x3922e3 = Player1()['opponent']['hand_arr'];
            break;
        case 'Opponent\x27s\x20Deck':
            _0x3922e3 = Player1()['opponent']['main_arr'];
            break;
        case 'Opponent\x27s\x20Deck\x20(partial)':
        case 'Opponent\x27s\x20Deck\x20(Top\x203\x20Cards)':
            for (var _0x2e3f4e = 0x0; _0x2e3f4e < 0x3; _0x2e3f4e++) {
                _0x3922e3['push'](Player1()['opponent']['main_arr'][_0x2e3f4e]);
            }
            break;
        case 'Opponent\x27s\x20Deck\x20(Top\x205\x20Cards)':
            for (_0x2e3f4e = 0x0; _0x2e3f4e < 0x5; _0x2e3f4e++) {
                _0x3922e3['push'](Player1()['opponent']['main_arr'][_0x2e3f4e]);
            }
            break;
        case 'Opponent\x27s\x20Deck\x20(Top\x201\x20Cards)':
            for (_0x2e3f4e = 0x0; _0x2e3f4e < 0x1; _0x2e3f4e++) {
                _0x3922e3['push'](Player1()['opponent']['main_arr'][_0x2e3f4e]);
            }
            break;
        case 'Xyz\x20Materials':
            _0x3922e3 = viewing_card_with_materials['data']('xyz_arr');
            break;
    }
    viewing = _0x177a9d,
        $('#view\x20.title_txt')['text']('Viewing\x20' + _0x177a9d),
        Duelist() && $('#status1\x20.status_txt')['text']('Viewing\x20' + _0x177a9d),
        viewCards(_0x3922e3, _0x48b73a);
}
function showViewing(_0x4a1468) {
    var _0x52de0b = 'Viewing\x20' + _0x4a1468['viewing'];
    _0x4a1468['viewing'] == 'Paused\x20Game' && (_0x52de0b = 'Paused\x20Game');
    if (duelist && _0x4a1468['username'] == Player1()['username'] || !duelist && _0x4a1468['username'] == Player1()['username'])
        $('#status1\x20.status_txt')['text'](_0x52de0b);
    else
        _0x4a1468['username'] == Player2()['username'] && $('#status2\x20.status_txt')['text'](_0x52de0b);
    _0x4a1468['deck'] && (_0x4a1468['deck'] = undefined);
}
function permissionEvent(_0x332091) {
    duelist && _0x332091['username'] != username && player1 == Player1() && getConfirmation(_0x332091['title'], _0x332091['message'], function () {
        permissionCallback(_0x332091['callback']);
    }, permissionDeniedE);
    if (_0x332091['username'] != Player1()['username'])
        $('#status1\x20.status_txt')['text']('Waiting\x20for\x20permission');
    else
        _0x332091['username'] != Player2()['username'] && $('#status2\x20.status_txt')['text']('Waiting\x20for\x20permission');
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
function moveDecks(_0x52bc35, _0x1ded76) {
    var _0x46d610 = 0xc8;
    (_0x52bc35 == player2 || _0x52bc35 == player4) && (_0x46d610 = -0xc8),
        TweenMax['to'](_0x52bc35['main_arr'], 0.35, {
            'top': _0x52bc35['deckY'] + _0x46d610,
            'ease': Circ['easeInOut']
        }),
        TweenMax['to'](_0x52bc35['extra_arr'], 0.35, {
            'top': _0x52bc35['extraY'] + _0x46d610,
            'ease': Circ['easeInOut']
        }),
        TweenMax['to'](_0x52bc35['hand_arr'], 0.35, {
            'top': _0x52bc35['handY'] + _0x46d610,
            'ease': Circ['easeInOut'],
            'onComplete': function () {
                shiftPlayer(turn_player),
                    removeDeck(_0x52bc35),
                    removeExtra(_0x52bc35),
                    removeHand(_0x52bc35),
                    shiftDeck(_0x1ded76),
                    shiftExtra(_0x1ded76),
                    initHand(_0x1ded76),
                    TweenMax['fromTo'](_0x1ded76['main_arr'], 0.35, {
                        'top': _0x1ded76['deckY'] + _0x46d610
                    }, {
                        'top': _0x1ded76['deckY'],
                        'ease': Circ['easeInOut']
                    }),
                    TweenMax['fromTo'](_0x1ded76['extra_arr'], 0.35, {
                        'top': _0x1ded76['extraY'] + _0x46d610
                    }, {
                        'top': _0x1ded76['extraY'],
                        'ease': Circ['easeInOut']
                    }),
                    TweenMax['fromTo'](_0x1ded76['hand_arr'], 0.35, {
                        'top': _0x1ded76['handY'] + _0x46d610
                    }, {
                        'top': _0x1ded76['handY'],
                        'ease': Circ['easeInOut'],
                        'onComplete': function () {
                            shiftDecks(),
                                enterDP();
                        }
                    });
            }
        });
}
function removeCard(_0x2d361c, _0x5ed28e) {
    var _0x136c26 = removeFromHand(_0x2d361c, _0x5ed28e);
    return !_0x136c26 && (_0x136c26 = removeFromDeck(_0x2d361c, _0x5ed28e)),
        !_0x136c26 && (_0x136c26 = removeFromGY(_0x2d361c, _0x5ed28e)),
        !_0x136c26 && (_0x136c26 = removeFromBanished(_0x2d361c, _0x5ed28e)),
        !_0x136c26 && (_0x136c26 = removeFromExtra(_0x2d361c, _0x5ed28e)),
        !_0x136c26 && (_0x136c26 = removeFromField(_0x2d361c, _0x5ed28e)),
        !_0x136c26 && (_0x136c26 = removeXyzMaterial(_0x2d361c, _0x5ed28e, ![])),
        _0x136c26;
}
function removeFromHand(_0x38bd5d, _0x1beeb8) {
    for (var _0x130aba = 0x0; _0x130aba < _0x38bd5d['hand_arr']['length']; _0x130aba++) {
        if (_0x38bd5d['hand_arr'][_0x130aba]['data']('id') == _0x1beeb8['id']) {
            var _0x5f6f57 = _0x38bd5d['hand_arr']['splice'](_0x130aba, 0x1)[0x0];
            return _0x5f6f57['data']('face_up', ![]),
                _0x5f6f57['detach'](),
                updateViewing(),
                organizeHand(_0x38bd5d),
                _0x5f6f57;
        }
    }
    return null;
}
function removeFromDeck(_0x2b98b8, _0x1a68dd) {
    for (var _0x22fd66 = 0x0; _0x22fd66 < _0x2b98b8['main_arr']['length']; _0x22fd66++) {
        if (_0x2b98b8['main_arr'][_0x22fd66]['data']('id') == _0x1a68dd['id']) {
            var _0x290529 = _0x2b98b8['main_arr']['splice'](_0x22fd66, 0x1)[0x0];
            return _0x290529['detach'](),
                _0x290529['data']('face_up', ![]),
                $('#cid1_txt')['text'](Player1()['main_arr']['length']),
                $('#cid2_txt')['text'](Player2()['main_arr']['length']),
                updateViewing(),
                _0x290529;
        }
    }
    return null;
}
function removeFromGY(_0x1f48cb, _0x1d4ac1) {
    for (var _0x3d9a10 = 0x0; _0x3d9a10 < _0x1f48cb['grave_arr']['length']; _0x3d9a10++) {
        if (_0x1f48cb['grave_arr'][_0x3d9a10]['data']('id') == _0x1d4ac1['id']) {
            var _0x3f8439 = _0x1f48cb['grave_arr']['splice'](_0x3d9a10, 0x1)[0x0];
            return _0x3f8439['detach'](),
                shiftGrave(_0x3f8439['data']('owner')),
                updateViewing(),
                _0x3f8439;
        }
    }
    return null;
}
function removeFromBanished(_0x117de1, _0x48e482, _0x51cfc8) {
    _0x51cfc8 !== ![] && (_0x51cfc8 = !![]);
    for (var _0x442a43 = 0x0; _0x442a43 < _0x117de1['banished_arr']['length']; _0x442a43++) {
        if (_0x117de1['banished_arr'][_0x442a43]['data']('id') == _0x48e482['id']) {
            var _0x1cf9e5 = _0x117de1['banished_arr']['splice'](_0x442a43, 0x1)[0x0];
            return _0x1cf9e5['detach'](),
                _0x51cfc8 && _0x1cf9e5['data']('face_down', ![]),
                shiftBanished(_0x1cf9e5['data']('owner')),
                updateViewing(),
                _0x1cf9e5;
        }
    }
    return null;
}
function removeFromExtra(_0x1c514e, _0x569594) {
    for (var _0x101005 = 0x0; _0x101005 < _0x1c514e['extra_arr']['length']; _0x101005++) {
        if (_0x1c514e['extra_arr'][_0x101005]['data']('id') == _0x569594['id']) {
            var _0x46b920 = _0x1c514e['extra_arr']['splice'](_0x101005, 0x1)[0x0];
            return _0x46b920['detach'](),
                _0x46b920['data']('cardfront')['show'](),
                addExtraChildren(_0x46b920['data']('owner')),
                $('#cie1_txt')['text'](Player1()['extra_arr']['length']),
                $('#cie2_txt')['text'](Player2()['extra_arr']['length']),
                updateViewing(),
                _0x46b920;
        }
    }
    if (unknown_totals)
        for (_0x101005 = 0x0; _0x101005 < _0x1c514e['extra_arr']['length']; _0x101005++) {
            return _0x1c514e['extra_arr'][_0x101005]['data']('id', _0x1c514e['extra_arr'][_0x101005]['data']('id') - 0x1),
                removeFromExtra(_0x1c514e, _0x569594);
        }
    return null;
}
function removeFromField(_0x557fb0, _0x55b502, _0x496bbd) {
    _0x496bbd !== !![] && (_0x496bbd = ![]);
    var _0x461fbc;
    _0x557fb0['m3'] && (_0x557fb0['m3']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['m3'],
        _0x557fb0['m3'] = null,
        tag_duel && (_0x557fb0['partner']['m3'] = null),
        _0x557fb0['m3_txt']['text']('')));
    _0x557fb0['m4'] && (_0x557fb0['m4']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['m4'],
        _0x557fb0['m4'] = null,
        tag_duel && (_0x557fb0['partner']['m4'] = null),
        _0x557fb0['m4_txt']['text']('')));
    _0x557fb0['m2'] && (_0x557fb0['m2']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['m2'],
        _0x557fb0['m2'] = null,
        tag_duel && (_0x557fb0['partner']['m2'] = null),
        _0x557fb0['m2_txt']['text']('')));
    _0x557fb0['m5'] && (_0x557fb0['m5']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['m5'],
        _0x557fb0['m5'] = null,
        tag_duel && (_0x557fb0['partner']['m5'] = null),
        _0x557fb0['m5_txt']['text']('')));
    _0x557fb0['m1'] && (_0x557fb0['m1']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['m1'],
        _0x557fb0['m1'] = null,
        tag_duel && (_0x557fb0['partner']['m1'] = null),
        _0x557fb0['m1_txt']['text']('')));
    _0x557fb0['s3'] && (_0x557fb0['s3']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['s3'],
        _0x557fb0['s3'] = null,
        tag_duel && (_0x557fb0['partner']['s3'] = null)));
    _0x557fb0['s4'] && (_0x557fb0['s4']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['s4'],
        _0x557fb0['s4'] = null,
        tag_duel && (_0x557fb0['partner']['s4'] = null)));
    _0x557fb0['s2'] && (_0x557fb0['s2']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['s2'],
        _0x557fb0['s2'] = null,
        tag_duel && (_0x557fb0['partner']['s2'] = null)));
    _0x557fb0['s5'] && (_0x557fb0['s5']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['s5'],
        _0x557fb0['s5'] = null,
        tag_duel && (_0x557fb0['partner']['s5'] = null)));
    _0x557fb0['s1'] && (_0x557fb0['s1']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['s1'],
        _0x557fb0['s1'] = null,
        tag_duel && (_0x557fb0['partner']['s1'] = null)));
    _0x557fb0['fieldSpell'] && (_0x557fb0['fieldSpell']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['fieldSpell'],
        _0x557fb0['fieldSpell'] = null,
        tag_duel && (_0x557fb0['partner']['fieldSpell'] = null),
        removeFieldSpellPic(_0x557fb0)));
    _0x557fb0['pendulumLeft'] && (_0x557fb0['pendulumLeft']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['pendulumLeft'],
        _0x557fb0['pendulumLeft'] = null,
        tag_duel && (_0x557fb0['partner']['pendulumLeft'] = null)));
    _0x557fb0['pendulumRight'] && (_0x557fb0['pendulumRight']['data']('id') == _0x55b502['id'] && (_0x461fbc = _0x557fb0['pendulumRight'],
        _0x557fb0['pendulumRight'] = null,
        tag_duel && (_0x557fb0['partner']['pendulumRight'] = null)));
    linkLeft && (linkLeft['data']('id') == _0x55b502['id'] && (_0x461fbc = linkLeft,
        linkLeft = null,
        $('#ol_txt')['text']('')));
    linkRight && (linkRight['data']('id') == _0x55b502['id'] && (_0x461fbc = linkRight,
        linkRight = null,
        $('#hl_txt')['text']('')));
    if (!_0x461fbc)
        return null;
    return _0x461fbc['data']('controller') != _0x461fbc['data']('owner') && (_0x461fbc['data']('controller', _0x461fbc['data']('owner')),
        _0x461fbc['removeClass']('target'),
        !isPlayer1(_0x461fbc['data']('owner')['username']) && _0x461fbc['addClass']('target')),
        _0x496bbd == ![] && (_0x461fbc['data']('inATK', ![]),
            _0x461fbc['data']('inDEF', ![]),
            _0x461fbc['data']('face_down', ![]),
            _0x461fbc['data']('counters', 0x0),
            _0x461fbc['data']('new_atk', null),
            _0x461fbc['data']('new_def', null),
            detachAllMaterials(_0x461fbc)),
        updateCounters(),
        updateViewing(),
        _0x461fbc['data']('cardfront')['data']('name') == 'Question' && unquestionE(_0x461fbc),
        _0x461fbc;
}
function restoreHandCards() {
    for (var _0xd610c2 = 0x0; _0xd610c2 < Player1()['hand_arr']['length']; _0xd610c2++) {
        !TweenMax['isTweening'](Player1()['hand_arr']) && (Player1()['hand_arr'][_0xd610c2]['data']('face_up') && duelist ? Player1()['hand_arr'][_0xd610c2]['css']('top', Player1()['handY'] - 0x1e) : Player1()['hand_arr'][_0xd610c2]['css']('top', Player1()['handY']));
    }
}
function getPointsByZone(_0x2eeb2e, _0x5ba483) {
    switch (_0x5ba483) {
        case 'M-1':
            return [_0x2eeb2e['m1X'], _0x2eeb2e['m1Y']];
        case 'M-2':
            return [_0x2eeb2e['m2X'], _0x2eeb2e['m2Y']];
        case 'M-3':
            return [_0x2eeb2e['m3X'], _0x2eeb2e['m3Y']];
        case 'M-4':
            return [_0x2eeb2e['m4X'], _0x2eeb2e['m4Y']];
        case 'M-5':
            return [_0x2eeb2e['m5X'], _0x2eeb2e['m5Y']];
        case 'M2-1':
            return [_0x2eeb2e['opponent']['m1X'], _0x2eeb2e['opponent']['m1Y']];
        case 'M2-2':
            return [_0x2eeb2e['opponent']['m2X'], _0x2eeb2e['opponent']['m2Y']];
        case 'M2-3':
            return [_0x2eeb2e['opponent']['m3X'], _0x2eeb2e['opponent']['m3Y']];
        case 'M2-4':
            return [_0x2eeb2e['opponent']['m4X'], _0x2eeb2e['opponent']['m4Y']];
        case 'M2-5':
            return [_0x2eeb2e['opponent']['m5X'], _0x2eeb2e['opponent']['m5Y']];
        case 'S-1':
            return [_0x2eeb2e['s1X'], _0x2eeb2e['s1Y']];
        case 'S-2':
            return [_0x2eeb2e['s2X'], _0x2eeb2e['s2Y']];
        case 'S-3':
            return [_0x2eeb2e['s3X'], _0x2eeb2e['s3Y']];
        case 'S-4':
            return [_0x2eeb2e['s4X'], _0x2eeb2e['s4Y']];
        case 'S-5':
            return [_0x2eeb2e['s5X'], _0x2eeb2e['s5Y']];
        case 'F-1':
            return [_0x2eeb2e['fieldSpellX'], _0x2eeb2e['fieldSpellY']];
        case 'F-2':
            return [_0x2eeb2e['opponent']['fieldSpellX'], _0x2eeb2e['opponent']['fieldSpellY']];
        case 'Left\x20Extra\x20Monster\x20Zone':
            return _0x2eeb2e == player1 || _0x2eeb2e == player3 ? [linkLeftX, linkY] : [linkRightX, linkY];
        case 'Right\x20Extra\x20Monster\x20Zone':
            return _0x2eeb2e == player1 || _0x2eeb2e == player3 ? [linkRightX, linkY] : [linkLeftX, linkY];
    }
    return null;
}
function getNextMonsterZone(_0x5ec662, _0x3621f5, _0x367bb1) {
    var _0x2261fe = [];
    if (_0x367bb1['zone']) {
        switch (_0x367bb1['zone']) {
            case 'M-1':
                _0x5ec662['m1'] = _0x3621f5;
                tag_duel && (_0x5ec662['partner']['m1'] = _0x3621f5);
                break;
            case 'M-2':
                _0x5ec662['m2'] = _0x3621f5;
                tag_duel && (_0x5ec662['partner']['m2'] = _0x3621f5);
                break;
            case 'M-3':
                _0x5ec662['m3'] = _0x3621f5;
                tag_duel && (_0x5ec662['partner']['m3'] = _0x3621f5);
                break;
            case 'M-4':
                _0x5ec662['m4'] = _0x3621f5;
                tag_duel && (_0x5ec662['partner']['m4'] = _0x3621f5);
                break;
            case 'M-5':
                _0x5ec662['m5'] = _0x3621f5;
                tag_duel && (_0x5ec662['partner']['m5'] = _0x3621f5);
                break;
            case 'M2-1':
                _0x5ec662['opponent']['m1'] = _0x3621f5;
                tag_duel && (_0x5ec662['opponent']['partner']['m1'] = _0x3621f5);
                break;
            case 'M2-2':
                _0x5ec662['opponent']['m2'] = _0x3621f5;
                tag_duel && (_0x5ec662['opponent']['partner']['m2'] = _0x3621f5);
                break;
            case 'M2-3':
                _0x5ec662['opponent']['m3'] = _0x3621f5;
                tag_duel && (_0x5ec662['opponent']['partner']['m3'] = _0x3621f5);
                break;
            case 'M2-4':
                _0x5ec662['opponent']['m4'] = _0x3621f5;
                tag_duel && (_0x5ec662['opponent']['partner']['m4'] = _0x3621f5);
                break;
            case 'M2-5':
                _0x5ec662['opponent']['m5'] = _0x3621f5;
                tag_duel && (_0x5ec662['opponent']['partner']['m5'] = _0x3621f5);
                break;
            case 'Left\x20Extra\x20Monster\x20Zone':
                _0x5ec662 == player1 || _0x5ec662 == player3 ? linkLeft = _0x3621f5 : linkRight = _0x3621f5;
                break;
            case 'Right\x20Extra\x20Monster\x20Zone':
                _0x5ec662 == player1 || _0x5ec662 == player3 ? linkRight = _0x3621f5 : linkLeft = _0x3621f5;
                break;
        }
        return _0x2261fe = getPointsByZone(_0x5ec662, _0x367bb1['zone']),
            _0x367bb1['zone']['indexOf']('2-') >= 0x0 ? updateController(_0x5ec662['opponent'], _0x3621f5) : updateController(_0x5ec662, _0x3621f5),
            _0x2261fe;
    }
    if (duel_links || speed || rush) {
        if (_0x5ec662['m2'] == null)
            _0x5ec662['m2'] = _0x3621f5,
                tag_duel && (_0x5ec662['partner']['m2'] = _0x3621f5),
                _0x2261fe = [_0x5ec662['m2X'], _0x5ec662['m2Y']];
        else {
            if (_0x5ec662['m3'] == null)
                _0x5ec662['m3'] = _0x3621f5,
                    tag_duel && (_0x5ec662['partner']['m3'] = _0x3621f5),
                    _0x2261fe = [_0x5ec662['m3X'], _0x5ec662['m3Y']];
            else {
                if (_0x5ec662['m1'] == null)
                    _0x5ec662['m1'] = _0x3621f5,
                        tag_duel && (_0x5ec662['partner']['m1'] = _0x3621f5),
                        _0x2261fe = [_0x5ec662['m1X'], _0x5ec662['m1Y']];
                else
                    return endAction(),
                        null;
            }
        }
    } else {
        if (_0x5ec662['m3'] == null)
            _0x5ec662['m3'] = _0x3621f5,
                tag_duel && (_0x5ec662['partner']['m3'] = _0x3621f5),
                _0x2261fe = [_0x5ec662['m3X'], _0x5ec662['m3Y']];
        else {
            if (_0x5ec662['m4'] == null)
                _0x5ec662['m4'] = _0x3621f5,
                    tag_duel && (_0x5ec662['partner']['m4'] = _0x3621f5),
                    _0x2261fe = [_0x5ec662['m4X'], _0x5ec662['m4Y']];
            else {
                if (_0x5ec662['m2'] == null)
                    _0x5ec662['m2'] = _0x3621f5,
                        tag_duel && (_0x5ec662['partner']['m2'] = _0x3621f5),
                        _0x2261fe = [_0x5ec662['m2X'], _0x5ec662['m2Y']];
                else {
                    if (_0x5ec662['m5'] == null)
                        _0x5ec662['m5'] = _0x3621f5,
                            tag_duel && (_0x5ec662['partner']['m5'] = _0x3621f5),
                            _0x2261fe = [_0x5ec662['m5X'], _0x5ec662['m5Y']];
                    else {
                        if (_0x5ec662['m1'] == null)
                            _0x5ec662['m1'] = _0x3621f5,
                                tag_duel && (_0x5ec662['partner']['m1'] = _0x3621f5),
                                _0x2261fe = [_0x5ec662['m1X'], _0x5ec662['m1Y']];
                        else
                            return endAction(),
                                null;
                    }
                }
            }
        }
    }
    return updateController(_0x5ec662, _0x3621f5),
        _0x2261fe;
}
function getNextSTZone(_0x2e68cd, _0x1102aa, _0x5ec318) {
    var _0x3a8ab4 = [];
    if (_0x5ec318['zone']) {
        switch (_0x5ec318['zone']) {
            case 'S-1':
                _0x2e68cd['s1'] = _0x1102aa;
                tag_duel && (_0x2e68cd['partner']['s1'] = _0x1102aa);
                break;
            case 'S-2':
                _0x2e68cd['s2'] = _0x1102aa;
                tag_duel && (_0x2e68cd['partner']['s2'] = _0x1102aa);
                break;
            case 'S-3':
                _0x2e68cd['s3'] = _0x1102aa;
                tag_duel && (_0x2e68cd['partner']['s3'] = _0x1102aa);
                break;
            case 'S-4':
                _0x2e68cd['s4'] = _0x1102aa;
                tag_duel && (_0x2e68cd['partner']['s4'] = _0x1102aa);
                break;
            case 'S-5':
                _0x2e68cd['s5'] = _0x1102aa;
                tag_duel && (_0x2e68cd['partner']['s5'] = _0x1102aa);
                break;
            case 'F-1':
                _0x2e68cd['fieldSpell'] = _0x1102aa;
                tag_duel && (_0x2e68cd['partner']['fieldSpell'] = _0x1102aa);
                setFieldSpellPic(_0x2e68cd, _0x1102aa);
                break;
            case 'F-2':
                _0x2e68cd['opponent']['fieldSpell'] = _0x1102aa;
                tag_duel && (_0x2e68cd['opponent']['partner']['fieldSpell'] = _0x1102aa);
                setFieldSpellPic(_0x2e68cd['opponent'], _0x1102aa),
                    updateController(_0x2e68cd['opponent'], _0x1102aa);
                break;
        }
        return _0x5ec318['zone'] == 'F-2' ? updateController(_0x2e68cd['opponent'], _0x1102aa) : updateController(_0x2e68cd, _0x1102aa),
            _0x3a8ab4 = getPointsByZone(_0x2e68cd, _0x5ec318['zone']),
            _0x3a8ab4;
    }
    if (speed || rush) {
        if (_0x2e68cd['s2'] == null)
            _0x2e68cd['s2'] = _0x1102aa,
                tag_duel && (_0x2e68cd['partner']['s2'] = _0x1102aa),
                _0x3a8ab4 = [_0x2e68cd['s2X'], _0x2e68cd['s2Y']];
        else {
            if (_0x2e68cd['s3'] == null)
                _0x2e68cd['s3'] = _0x1102aa,
                    tag_duel && (_0x2e68cd['partner']['s3'] = _0x1102aa),
                    _0x3a8ab4 = [_0x2e68cd['s3X'], _0x2e68cd['s3Y']];
            else {
                if (_0x2e68cd['s1'] == null)
                    _0x2e68cd['s1'] = _0x1102aa,
                        tag_duel && (_0x2e68cd['partner']['s1'] = _0x1102aa),
                        _0x3a8ab4 = [_0x2e68cd['s1X'], _0x2e68cd['s1Y']];
                else
                    return endAction(),
                        null;
            }
        }
    } else {
        if (_0x2e68cd['s3'] == null)
            _0x2e68cd['s3'] = _0x1102aa,
                tag_duel && (_0x2e68cd['partner']['s3'] = _0x1102aa),
                _0x3a8ab4 = [_0x2e68cd['s3X'], _0x2e68cd['s3Y']];
        else {
            if (_0x2e68cd['s4'] == null && !duel_links && !speed && !rush)
                _0x2e68cd['s4'] = _0x1102aa,
                    tag_duel && (_0x2e68cd['partner']['s4'] = _0x1102aa),
                    _0x3a8ab4 = [_0x2e68cd['s4X'], _0x2e68cd['s4Y']];
            else {
                if (_0x2e68cd['s2'] == null)
                    _0x2e68cd['s2'] = _0x1102aa,
                        tag_duel && (_0x2e68cd['partner']['s2'] = _0x1102aa),
                        _0x3a8ab4 = [_0x2e68cd['s2X'], _0x2e68cd['s2Y']];
                else {
                    if (_0x2e68cd['s5'] == null && !duel_links && !speed && !rush)
                        _0x2e68cd['s5'] = _0x1102aa,
                            tag_duel && (_0x2e68cd['partner']['s5'] = _0x1102aa),
                            _0x3a8ab4 = [_0x2e68cd['s5X'], _0x2e68cd['s5Y']];
                    else {
                        if (_0x2e68cd['s1'] == null)
                            _0x2e68cd['s1'] = _0x1102aa,
                                tag_duel && (_0x2e68cd['partner']['s1'] = _0x1102aa),
                                _0x3a8ab4 = [_0x2e68cd['s1X'], _0x2e68cd['s1Y']];
                        else
                            return endAction(),
                                null;
                    }
                }
            }
        }
    }
    return updateController(_0x2e68cd, _0x1102aa),
        _0x3a8ab4;
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
function targetCardResponse(_0x5a5ae3, _0x56b5c7) {
    var _0x556477 = getDuelCard(_0x56b5c7['id'])
        , _0x14ff9b = _0x556477['parent']()[0x0] == $('#view\x20>\x20.content')[0x0]
        , _0x568047 = null
        , _0x22b7c7 = null;
    !_0x14ff9b && (_0x556477['data']('controller')['grave_arr']['indexOf'](_0x556477) >= 0x0 && (_0x568047 = _0x556477['data']('controller')['grave_arr']['indexOf'](_0x556477),
        _0x556477['data']('controller')['grave_arr']['splice'](_0x568047, 0x1),
        _0x556477['data']('controller')['grave_arr']['unshift'](_0x556477),
        shiftGrave(_0x556477['data']('controller'))),
        _0x556477['data']('controller')['banished_arr']['indexOf'](_0x556477) >= 0x0 && (_0x22b7c7 = _0x556477['data']('controller')['banished_arr']['indexOf'](_0x556477),
            _0x556477['data']('controller')['banished_arr']['splice'](_0x22b7c7, 0x1),
            _0x556477['data']('controller')['banished_arr']['unshift'](_0x556477),
            shiftBanished(_0x556477['data']('controller'))));
    var _0x35f6b6, _0x487a58;
    if (_0x56b5c7['username'] == Player1()['username'])
        _0x35f6b6 = $('.red_target'),
            _0x487a58 = Player2();
    else
        _0x56b5c7['username'] == Player2()['username'] ? (_0x35f6b6 = $('.blue_target'),
            _0x487a58 = Player1()) : (_0x35f6b6 = $('.green_target'),
                _0x487a58 = Player1());
    var _0x3db351 = ~~_0x35f6b6['data']('num') + 0x1;
    _0x35f6b6['data']('num', _0x3db351),
        playSound(Target);
    var _0x189f2b = 0x0;
    _0x556477 && (_0x35f6b6['css']('left', parseInt(_0x556477['css']('left'))),
        _0x35f6b6['css']('top', parseInt(_0x556477['css']('top'))),
        TweenMax['to'](_0x35f6b6, 0x0, {
            'rotation': getRotation(_0x556477[0x0]),
            'scale': getScale(_0x556477[0x0])
        }),
        _0x35f6b6['show'](),
        _0x556477['parent']()['append'](_0x35f6b6)),
        setTimeout(function () {
            _0x35f6b6['hide']();
        }, 0x64),
        setTimeout(function () {
            _0x35f6b6['show']();
        }, 0xc8),
        setTimeout(function () {
            _0x35f6b6['hide']();
        }, 0x12c),
        setTimeout(function () {
            _0x35f6b6['show']();
        }, 0x190),
        setTimeout(function () {
            _0x189f2b = 0.2,
                (_0x568047 || _0x22b7c7) && (_0x189f2b = 0.3),
                setTimeout(function () {
                    _0x568047 != null && (_0x556477['data']('controller')['grave_arr']['splice'](0x0, 0x1),
                        _0x556477['data']('controller')['grave_arr']['splice'](_0x568047, 0x0, _0x556477),
                        shiftGrave(_0x556477['data']('controller')),
                        ~~_0x35f6b6['data']('num') == _0x3db351 && _0x35f6b6['hide']()),
                        _0x22b7c7 != null && (_0x556477['data']('controller')['banished_arr']['splice'](0x0, 0x1),
                            _0x556477['data']('controller')['banished_arr']['splice'](_0x22b7c7, 0x0, _0x556477),
                            shiftBanished(_0x556477['data']('controller')),
                            ~~_0x35f6b6['data']('num') == _0x3db351 && _0x35f6b6['hide']()),
                        setTimeout(function () {
                            endAction();
                        }, automatic ? 0x12c : 0x0);
                }, 0x12c + _0x189f2b * 1.5 * 0x3e8);
        }, _0x189f2b * 0x3e8);
}
function shuffleHand(_0x523657, _0x2ecf27) {
    restoreHandCards();
    if (_0x523657 == Player1()['opponent'] && viewing == 'Opponent\x27s\x20Hand' || _0x523657['hand_arr']['length'] < 0x2) {
        _0x337a51();
        return;
    }
    TweenMax['to'](_0x523657['hand_arr'], 0.25, {
        'left': 0x1e5,
        'ease': Linear['easeNone'],
        'onComplete': _0x337a51
    });
    _0x523657['hand_arr']['length'] > 0x1 && playSound(ShuffleHand);
    function _0x337a51() {
        updateIDs(_0x523657['hand_arr'], _0x2ecf27['hand'], _0x2ecf27['prev']),
            _0x523657['hand_arr'] = shuffle(_0x523657, _0x523657['hand_arr'], _0x2ecf27['hand']),
            organizeHand(_0x523657, !![]),
            endAction();
    }
}
function updateIDs(_0x279c46, _0x555e25, _0x375231) {
    var _0x425fb0 = []
        , _0x1fa857 = JSON['parse'](JSON['stringify'](_0x555e25));
    if (_0x375231) {
        var _0x5cc50a = JSON['parse'](JSON['stringify'](_0x375231));
        _0x5c3364: for (var _0x2323d7 = 0x0; _0x2323d7 < _0x279c46['length']; _0x2323d7++) {
            for (var _0x458f67 = 0x0; _0x458f67 < _0x5cc50a['length']; _0x458f67++) {
                if (_0x279c46[_0x2323d7]['data']('id') == _0x5cc50a[_0x458f67]) {
                    _0x279c46[_0x2323d7]['data']('id', _0x1fa857[_0x458f67]),
                        _0x5cc50a['splice'](_0x458f67, 0x1),
                        _0x1fa857['splice'](_0x458f67, 0x1);
                    continue _0x5c3364;
                }
            }
            _0x425fb0['push'](_0x279c46[_0x2323d7]);
        }
        for (_0x2323d7 = 0x0; _0x2323d7 < _0x425fb0['length']; _0x2323d7++) {
            _0x1fa857[_0x2323d7] ? (addLine('fixing\x20' + _0x425fb0[_0x2323d7]['data']('cardfront')['data']('name') + 's\x20id\x20from\x20' + _0x425fb0[_0x2323d7]['data']('id') + '\x20to\x20' + _0x1fa857[_0x2323d7]),
                _0x425fb0[_0x2323d7]['data']('id', _0x1fa857[_0x2323d7])) : addLine('could\x20not\x20account\x20for\x20' + _0x425fb0[_0x2323d7]['data']('cardfront')['data']('name'));
        }
        return;
    }
    if (version < 0xd)
        return;
    for (var _0x2323d7 = 0x0; _0x2323d7 < _0x279c46['length']; _0x2323d7++) {
        _0x279c46[_0x2323d7]['data']('id', _0x1fa857[_0x2323d7]);
    }
}
function updateIDs0(_0x380e65, _0x349f54, _0x12c0a4) {
    if (_0x12c0a4) {
        for (var _0x580b05 = 0x0; _0x580b05 < _0x380e65['length']; _0x580b05++) {
            for (var _0x49fbc6 = 0x0; _0x49fbc6 < _0x12c0a4['length']; _0x49fbc6++) {
                _0x380e65[_0x580b05]['data']('id') == _0x12c0a4[_0x49fbc6] && (log('setting\x20' + _0x380e65[_0x580b05]['data']('cardfront')['data']('name') + 's\x20id\x20from\x20' + _0x380e65[_0x580b05]['data']('id') + '\x20to\x20' + _0x349f54[_0x49fbc6]),
                    _0x380e65[_0x580b05]['data']('id', _0x349f54[_0x49fbc6]));
            }
        }
        return;
    }
    if (version < 0xd)
        return;
    for (var _0x580b05 = 0x0; _0x580b05 < _0x380e65['length']; _0x580b05++) {
        _0x380e65[_0x580b05]['data']('id', _0x349f54[_0x580b05]);
    }
}
function shuffleHand2(_0x1b5328, _0x185aa0) {
    restoreHandCards(),
        TweenMax['to'](_0x1b5328['hand_arr'], 0.25, {
            'left': 0x1e5,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                updateIDs(_0x1b5328['hand_arr'], _0x185aa0['hand'], _0x185aa0['prev']),
                    _0x1b5328['hand_arr'] = shuffle(_0x1b5328, _0x1b5328['hand_arr'], _0x185aa0['hand']),
                    organizeHand(_0x1b5328, !![]),
                    setTimeout(function () {
                        endAction();
                    }, 0xfa);
            }
        }),
        _0x1b5328['hand_arr']['length'] > 0x1 && playSound(ShuffleHand);
}
function shuffle(_0x9602f0, _0x4bd18c, _0x18e37e) {
    try {
        var _0xee0257 = _0x18e37e['slice']();
        if (_0x9602f0 == Player1()['opponent'] && viewing == 'Opponent\x27s\x20Hand')
            return _0x4bd18c;
        var _0x4e55b6 = []
            , _0x37c756 = _0x4bd18c['length'];
        while (_0x4bd18c['length'] > 0x0) {
            _0x4bd18c[0x0]['data']('sleeve') != _0x9602f0['sleeve'] && _0x4bd18c[0x0]['setSleeve'](_0x9602f0['sleeve']),
                _0x4e55b6['push'](_0x4bd18c[0x0]),
                _0x4bd18c['splice'](0x0, 0x1);
        }
        _0x211fea: while (_0x4bd18c['length'] < _0x37c756) {
            for (var _0x4f18c3 = 0x0; _0x4f18c3 < _0x4e55b6['length']; _0x4f18c3++) {
                if (_0x4e55b6[_0x4f18c3]['data']('id') == _0xee0257[0x0]) {
                    _0x4bd18c['push'](_0x4e55b6[_0x4f18c3]),
                        _0xee0257['splice'](0x0, 0x1);
                    continue _0x211fea;
                }
            }
            console['log']('NOT\x20FOUND\x20' + _0xee0257[0x0]),
                console['log']('first,\x20arr.length\x20=\x20' + _0x4bd18c['length']),
                _0x4bd18c['push'](removeCard(_0x9602f0, {
                    'id': _0xee0257[0x0]
                })),
                console['log']('then,\x20arr.length\x20=\x20' + _0x4bd18c['length']),
                _0xee0257['splice'](0x0, 0x1);
            continue _0x211fea;
        }
        return _0x4bd18c;
    } catch (_0x586b74) {
        console['log'](_0x586b74['message']);
    }
    if (unknown_totals && _0x4bd18c['length'] < _0x37c756)
        for (_0x4f18c3 = 0x0; _0x4f18c3 < _0x9602f0['extra_arr']['length']; _0x4f18c3++) {
            _0x9602f0['extra_arr'][_0x4f18c3]['data']('id', _0x9602f0['extra_arr'][_0x4f18c3]['data']('id') - (original_length - _0x4bd18c['length']));
        }
    return _0x4bd18c;
}
function viewCards(_0x753881, _0x27c852) {
    console['log']('viewCards'),
        console['time']('viewCards');
    var _0x453f31 = ![];
    _0x27c852 && (_0x27c852['permission'] && (_0x453f31 = !![]));
    var _0xdbd455 = 0x2b
        , _0x2b2aa4 = 0x38;
    menu_card && (menu_card['parent']()[0x0] == $('#view\x20>\x20.content')[0x0] && removeCardMenu(),
        setTimeout(function () {
            TweenMax['isTweening'](menu_card) && removeCardMenu();
        }, 0x5));
    !$('#view')['is'](':visible') && $('#view\x20>\x20.content')['addClass']('unscrollable');
    for (var _0x213507 = 0x0; _0x213507 < _0x753881['length']; _0x213507++) {
        _0x753881[_0x213507]['hasClass']('xyzmaterial') && (console['log']('killing\x20tweens'),
            TweenMax['killTweensOf'](_0x753881[_0x213507]));
        _0x213507 == 0x10 && $('#view\x20>\x20.content')['removeClass']('unscrollable');
        _0x27c852 && _0x27c852['deck'] && _0x27c852['deck'][_0x213507] && _0x753881[_0x213507]['data']('cardfront')['reinitialize'](_0x27c852['deck'][_0x213507]);
        _0x753881[_0x213507]['css']('left', _0xdbd455),
            _0x753881[_0x213507]['css']('top', _0x2b2aa4),
            TweenMax['to'](_0x753881[_0x213507], 0x0, {
                'rotation': 0x0,
                'scale': 0.1485,
                'rotationY': ABOUT_ZERO
            });
        if (duelist && _0x753881[_0x213507]['data']('face_down') && player1['banished_arr']['indexOf'](_0x753881[_0x213507]) >= 0x0 && !simple)
            _0x753881[_0x213507]['showFaceDown']();
        else {
            if (!_0x453f31 && _0x753881[_0x213507]['data']('face_down') && viewing != 'Extra\x20Deck')
                _0x753881[_0x213507]['showFaceDown']();
            else {
                if (viewing['indexOf']('Public\x20Extra') >= 0x0 && (_0x753881[_0x213507]['data']('face_down') || !_0x753881[_0x213507]['data']('cardfront')['data']('pendulum')))
                    _0x753881[_0x213507]['showFaceDown']();
                else
                    _0x753881[_0x213507]['data']('cardfront') && !_0x753881[_0x213507]['data']('cardfront')['data']('initialized') && _0x753881[_0x213507]['showFaceDown']();
            }
        }
        if (viewing == 'Deck' || viewing == 'Extra\x20Deck') { } else
            _0x453f31 && _0x753881[_0x213507]['onRotate']();
        viewing == 'Opponent\x27s\x20Extra\x20Deck' && _0x753881[_0x213507]['data']('cardfront')['show'](),
            _0xdbd455 += 70.5,
            _0xdbd455 > 536.5 && (_0xdbd455 = 0x2b,
                _0x2b2aa4 += 0x61),
            $('#view\x20>\x20.content')['append'](_0x753881[_0x213507]);
    }
    viewing == 'Extra\x20Deck' && (duelFormat == 'gr' || duelFormat == 'gu') ? $('#view\x20.expand_btn')['show']() : $('#view\x20.expand_btn')['hide'](),
        $('#view')['show'](),
        console['timeEnd']('viewCards');
}
function exitViewing(_0x4fdeb0, _0x2408b2) {
    _0x4fdeb0 && duelist && viewing == 'Deck\x20(Picking\x204\x20Cards)' && player1['temp_arr']['length'] > 0x0 && Send({
        'action': 'Duel',
        'play': next_callback,
        'cards': player1['temp_arr']
    }),
        duelist && viewing && (Send({
            'action': 'Duel',
            'play': _0x2408b2 ? 'Stop\x20viewing\x202' : 'Stop\x20viewing',
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
        _0x4fdeb0 && (_0x4fdeb0['preventDefault'](),
            _0x4fdeb0['stopPropagation']());
}
function updateAllXyzMaterials() {
    var _0x5eb79d = player1['all_cards_arr']['concat'](player2['all_cards_arr']);
    _0x5eb79d['forEach'](function (_0x5e0e3d, _0x19de58) {
        _0x5e0e3d['data']('xyz_arr')['length'] > 0x0 && updateXyzMaterials(_0x5e0e3d['data']('controller'), _0x5e0e3d, null, !![]);
    });
}
function reveal(_0x1af728, _0x5aefa2) {
    var _0x4120af = revealFromHand(_0x1af728, _0x5aefa2);
    !_0x4120af && (_0x4120af = revealFromExtra(_0x1af728, _0x5aefa2)),
        !_0x4120af && (_0x4120af = revealFromDeck(_0x1af728, _0x5aefa2));
}
function revealFromHand(_0x482e0b, _0x4e6f1a) {
    for (var _0x5953c1 = 0x0; _0x5953c1 < _0x482e0b['hand_arr']['length']; _0x5953c1++) {
        if (_0x482e0b['hand_arr'][_0x5953c1]['data']('id') == _0x4e6f1a['id']) {
            var _0x3ecdd2 = _0x482e0b['hand_arr'][_0x5953c1];
            return removeFromHand(_0x482e0b, _0x4e6f1a),
                organizeHand(_0x482e0b),
                revealAndToHand(_0x482e0b, _0x3ecdd2, _0x4e6f1a),
                _0x3ecdd2;
        }
    }
    return null;
}
function revealFromDeck(_0x10ed12, _0x35d579) {
    var _0x2ab663 = removeFromDeck(_0x10ed12, _0x35d579);
    if (!_0x2ab663)
        return null;
    return revealAndToTopOfDeck(_0x2ab663['data']('controller'), _0x2ab663, _0x35d579),
        _0x2ab663;
}
function revealFromExtra(_0xdaebb6, _0x2f8965) {
    var _0x3466f1 = removeFromExtra(_0xdaebb6, _0x2f8965);
    if (!_0x3466f1)
        return null;
    return !_0x3466f1['data']('face_down') ? revealAndToExtraFU(_0x3466f1['data']('controller'), _0x3466f1, _0x2f8965) : revealAndToExtra(_0x3466f1['data']('controller'), _0x3466f1, _0x2f8965),
        _0x3466f1;
}
function revealAndToHand(_0x1dcd9f, _0x37a506, _0x42633b) {
    viewing && removeCardMenu();
    _0x42633b['play'] == 'To\x20hand\x202' && (_0x1dcd9f = _0x1dcd9f['opponent'],
        updateController(_0x1dcd9f, _0x37a506));
    $('#duel\x20.cards')['append'](_0x37a506),
        _0x37a506['data']('cardfront')['reinitialize'](_0x42633b['card']);
    if (_0x42633b['discreet']) {
        toHandFromDeckDiscreet(_0x1dcd9f, _0x37a506, _0x42633b);
        return;
    }
    TweenMax['to'](_0x37a506, easeSeconds2, {
        'left': 0x200,
        'top': 0x118,
        'scale': 0.5,
        'rotation': 0x0,
        'rotationY': ABOUT_ZERO,
        'onComplete': function () {
            previewCard(_0x37a506),
                determineHandPosition(_0x1dcd9f);
            var _0x4fc2aa = 0xb4 + ABOUT_ZERO;
            (isPlayer1(_0x1dcd9f['username']) && show_cards || show_cards == 0x2) && (_0x4fc2aa = ABOUT_ZERO),
                TweenMax['to'](_0x37a506, easeSeconds2, {
                    'left': handDestination,
                    'top': _0x1dcd9f['handY'],
                    'scale': 0.25,
                    'rotation': _0x1dcd9f['rot'],
                    'rotationY': _0x4fc2aa,
                    'delay': 0.5,
                    'onStart': function () {
                        _0x1dcd9f['hand_arr']['push'](_0x37a506),
                            organizeHand(_0x1dcd9f);
                    },
                    'onComplete': function () {
                        if (automatic)
                            endAction();
                        else
                            _0x42633b['shuffle'] !== ![] ? shuffleHand(_0x1dcd9f, _0x42633b) : endAction();
                    }
                });
        }
    }),
        playSound(Reveal);
}
function revealAndToTopOfDeck(_0x1cf972, _0x4319e6, _0xca0bcd) {
    $('#duel\x20.cards')['append'](_0x4319e6),
        TweenMax['set'](_0x4319e6, {
            'z': _0x4319e6['getDeckZ']()
        }),
        _0x4319e6['data']('cardfront')['reinitialize'](_0xca0bcd['card']),
        TweenMax['to'](_0x4319e6, easeSeconds, {
            'left': 0x200,
            'top': 0x118,
            'scale': 0.5,
            'rotation': 0x0,
            'rotationY': ABOUT_ZERO,
            'onComplete': function () {
                previewCard(_0x4319e6),
                    TweenMax['to'](_0x4319e6, easeSeconds, {
                        'left': _0x1cf972['deckX'],
                        'top': _0x1cf972['deckY'],
                        'scale': 0.1485,
                        'rotation': _0x1cf972['rot'],
                        'rotationY': 0xb4 + ABOUT_ZERO,
                        'delay': 0.5,
                        'onStart': function () {
                            _0x1cf972['main_arr']['unshift'](_0x4319e6);
                        },
                        'onComplete': function () {
                            shiftDeck(_0x1cf972),
                                endAction();
                        }
                    });
            }
        }),
        playSound(Reveal);
}
function revealAndToBottomOfDeck(_0x2aa4ae, _0x198966, _0x514a02) {
    $('#field')['append'](_0x198966),
        TweenMax['set'](_0x198966, {
            'z': 0x0
        }),
        _0x198966['data']('cardfront')['reinitialize'](_0x514a02['card']),
        TweenMax['to'](_0x198966, easeSeconds, {
            'left': 0x200,
            'top': 0x118,
            'scale': 0.5,
            'rotation': 0x0,
            'rotationY': ABOUT_ZERO,
            'onComplete': function () {
                previewCard(_0x198966),
                    TweenMax['to'](_0x198966, easeSeconds, {
                        'left': _0x2aa4ae['deckX'],
                        'top': _0x2aa4ae['deckY'],
                        'scale': 0.1485,
                        'rotation': _0x2aa4ae['rot'],
                        'rotationY': 0xb4 + ABOUT_ZERO,
                        'delay': 0.5,
                        'onStart': function () {
                            _0x2aa4ae['main_arr']['push'](_0x198966),
                                addDeckChildren(_0x2aa4ae);
                        },
                        'onComplete': function () {
                            shiftDeck(_0x2aa4ae),
                                endAction();
                        }
                    });
            }
        }),
        playSound(Reveal);
}
function revealAndToExtra(_0x30523d, _0x58890b, _0x274603) {
    $('#duel\x20.cards')['append'](_0x58890b),
        TweenMax['set'](_0x58890b, {
            'z': 0x0
        }),
        _0x58890b['data']('cardfront')['reinitialize'](_0x274603['card']),
        TweenMax['to'](_0x58890b, easeSeconds, {
            'left': 0x200,
            'top': 0x118,
            'scale': 0.5,
            'rotation': 0x0,
            'rotationY': ABOUT_ZERO,
            'onComplete': function () {
                previewCard(_0x58890b),
                    _0x58890b['data']('face_down', !![]),
                    TweenMax['to'](_0x58890b, easeSeconds, {
                        'left': _0x58890b['data']('owner')['extraX'],
                        'top': _0x58890b['data']('owner')['extraY'],
                        'scale': 0.1485,
                        'rotation': _0x58890b['data']('owner')['rot'],
                        'rotationY': 0xb4 + ABOUT_ZERO,
                        'delay': 0.5,
                        'onStart': function () {
                            _0x58890b['data']('owner')['extra_arr']['push'](_0x58890b),
                                addExtraChildren(_0x58890b['data']('owner'));
                        },
                        'onComplete': function () {
                            shiftExtra(_0x58890b['data']('owner')),
                                endAction();
                        }
                    });
            }
        }),
        playSound(Reveal);
}
function revealAndToExtraFU(_0x585791, _0x4eaf8a, _0x477bc6) {
    $('#duel\x20.cards')['append'](_0x4eaf8a),
        TweenMax['set'](_0x4eaf8a, {
            'z': _0x4eaf8a['getExtraZ']()
        }),
        _0x4eaf8a['data']('cardfront')['reinitialize'](_0x477bc6['card']),
        TweenMax['to'](_0x4eaf8a, easeSeconds, {
            'left': 0x200,
            'top': 0x118,
            'scale': 0.5,
            'rotation': 0x0,
            'rotationY': ABOUT_ZERO,
            'onComplete': function () {
                previewCard(_0x4eaf8a),
                    _0x4eaf8a['data']('face_down', ![]),
                    TweenMax['to'](_0x4eaf8a, easeSeconds, {
                        'left': _0x4eaf8a['data']('owner')['extraX'],
                        'top': _0x4eaf8a['data']('owner')['extraY'],
                        'scale': 0.1485,
                        'rotation': _0x4eaf8a['data']('owner')['rot'],
                        'rotationY': ABOUT_ZERO,
                        'delay': 0.5,
                        'onStart': function () {
                            _0x4eaf8a['data']('owner')['extra_arr']['unshift'](_0x4eaf8a);
                        },
                        'onComplete': function () {
                            shiftExtra(_0x4eaf8a['data']('owner')),
                                endAction();
                        }
                    });
            }
        }),
        playSound(Reveal);
}
function move(_0x16bab2, _0x1f93eb) {
    var _0x505281 = removeFromField(_0x16bab2, _0x1f93eb, !![]), _0x9ed93e, _0x4a4ad6;
    _0x1f93eb['zone']['indexOf']('M') == 0x0 || _0x1f93eb['zone'] == 'Left\x20Extra\x20Monster\x20Zone' || _0x1f93eb['zone'] == 'Right\x20Extra\x20Monster\x20Zone' ? (_0x9ed93e = getNextMonsterZone(_0x16bab2, _0x505281, _0x1f93eb),
        _0x4a4ad6 = _0x505281['data']('controller')['rot'],
        _0x505281['data']('face_down') && (_0x505281['data']('inATK', ![]),
            _0x505281['data']('inDEF', !![])),
        _0x505281['data']('inDEF') && (_0x4a4ad6 = _0x505281['data']('controller')['defRot'])) : (_0x505281['data']('inATK', !![]),
            _0x505281['data']('inDEF', ![]),
            _0x505281['data']('new_atk', null),
            _0x505281['data']('new_def', null),
            _0x9ed93e = getNextSTZone(_0x16bab2, _0x505281, _0x1f93eb),
            detachAllMaterials(_0x505281),
            _0x4a4ad6 = _0x505281['data']('controller')['rot']);
    getRotation(_0x505281[0x0]) == 0x0 && _0x505281['data']('inATK', !![]);
    $('#field')['append'](_0x505281),
        _0x505281['data']('cardfront')['reinitialize'](_0x1f93eb['card']);
    var _0x44bad9 = !![];
    (_0x1f93eb['zone']['indexOf']('M') == 0x0 || _0x1f93eb['zone'] == 'Left\x20Extra\x20Monster\x20Zone' || _0x1f93eb['zone'] == 'Right\x20Extra\x20Monster\x20Zone') && (_0x44bad9 = ![]),
        TweenMax['to'](_0x505281, easeSeconds, {
            'left': _0x9ed93e[0x0],
            'top': _0x9ed93e[0x1],
            'rotation': _0x4a4ad6,
            'scale': 0.1485,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                _0x44bad9 && endAction();
            }
        }),
        !_0x44bad9 && updateXyzMaterials(_0x505281['data']('controller'), _0x505281);
}
function overlay(_0x2da542, _0x5c6768) {
    console['log']('overlay\x20entered');
    var _0x4d84aa = getFieldCard(_0x2da542, {
        'id': _0x5c6768['start_id']
    })
        , _0x21ed7b = getFieldCard(_0x2da542, {
            'id': _0x5c6768['end_id']
        });
    _0x4d84aa['data']('xyz_arr')['push'](_0x21ed7b);
    while (_0x21ed7b['data']('xyz_arr')['length'] > 0x0) {
        _0x4d84aa['data']('xyz_arr')['push'](_0x21ed7b['data']('xyz_arr')[0x0]),
            _0x21ed7b['data']('xyz_arr')['splice'](0x0, 0x1);
    }
    removeFromField(_0x2da542, {
        'id': _0x5c6768['start_id']
    }, !![]),
        replaceCard(_0x2da542, _0x4d84aa, _0x21ed7b),
        updateXyzMaterials(_0x2da542, _0x4d84aa),
        console['log']('overlay\x20ended');
}
function attach(_0x1663c0, _0x19d7d8) {
    console['log']('attach\x20entered');
    var _0x3f6dae = removeCard(_0x1663c0, {
        'id': _0x19d7d8['start_id']
    });
    !_0x3f6dae && (_0x3f6dae = removeCard(_0x1663c0['opponent'], {
        'id': _0x19d7d8['start_id']
    }));
    if (!_0x3f6dae)
        return;
    _0x19d7d8['card'] && _0x3f6dae['data']('cardfront')['reinitialize'](_0x19d7d8['card']);
    _0x3f6dae['data']('face_down', ![]);
    var _0x5709ce = getFieldCard(_0x1663c0, {
        'id': _0x19d7d8['end_id']
    });
    _0x5709ce['data']('xyz_arr')['push'](_0x3f6dae),
        updateXyzMaterials(_0x1663c0, _0x5709ce),
        console['log']('attach\x20ended');
}
function detach(_0x541ac7, _0x424df4) {
    var _0x435b47 = removeXyzMaterial(_0x541ac7, _0x424df4, !![]);
    _0x435b47['data']('owner')['grave_arr']['unshift'](_0x435b47),
        updateController(_0x435b47['data']('owner'), _0x435b47),
        $('#field')['append'](_0x435b47),
        TweenMax['to'](_0x435b47, easeSeconds, {
            'left': _0x435b47['data']('owner')['graveX'],
            'top': _0x435b47['data']('owner')['graveY'],
            'rotation': _0x435b47['data']('owner')['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                shiftGrave(_0x541ac7),
                    shiftGrave(_0x541ac7['opponent']);
            }
        }),
        playSound(Move),
        updateViewing();
}
function attack(_0x552cee, _0x5e6b4f) {
    var _0x3335d2 = {};
    _0x3335d2['id'] = _0x5e6b4f['attacking_id'];
    var _0x3df8d9 = getFieldCard(_0x552cee, _0x3335d2);
    _0x3335d2['id'] = _0x5e6b4f['attacked_id'];
    var _0x3d675c = getFieldCard(_0x552cee['opponent'], _0x3335d2)
        , _0x344808 = $('.red_target');
    _0x552cee == Player2() && (_0x344808 = $('.blue_target'));
    TweenMax['to'](_0x344808, 0x0, {
        'left': parseInt(_0x3d675c['css']('left')),
        'top': parseInt(_0x3d675c['css']('top')),
        'scale': getScale(_0x3d675c[0x0]),
        'rotation': getRotation(_0x3d675c[0x0])
    }),
        _0x344808['show'](),
        _0x3d675c['parent']()['append'](_0x344808);
    var _0x15600a = red_stream
        , _0xcd9a66 = $('#red_stream');
    _0x552cee == Player2() && (_0x15600a = blue_stream,
        _0xcd9a66 = $('#blue_stream'));
    var _0x3dc0b3 = parseInt(_0x3d675c['css']('left'))
        , _0x240de5 = parseInt(_0x3d675c['css']('top'))
        , _0x4a03a8 = _0x3dc0b3 - parseInt(_0x3df8d9['css']('left'))
        , _0x50a744 = _0x240de5 - parseInt(_0x3df8d9['css']('top'))
        , _0x55791c = Math['sqrt'](_0x4a03a8 * _0x4a03a8 + _0x50a744 * _0x50a744);
    TweenMax['to'](_0xcd9a66, 0x0, {
        'left': parseInt(_0x3df8d9['css']('left')),
        'top': parseInt(_0x3df8d9['css']('top')),
        'rotation': Math['atan2'](_0x50a744, _0x4a03a8) * 0xb4 / Math['PI']
    }),
        _0xcd9a66['show'](),
        _0x15600a['play'](),
        TweenMax['fromTo'](_0xcd9a66, easeSeconds, {
            'scaleX': 0x0
        }, {
            'scaleX': _0x55791c / 0x1f4
        }),
        TweenMax['fromTo'](_0x15600a, 1.5, {
            'alpha': 0x1
        }, {
            'alpha': 0x1,
            'onComplete': function () {
                $('#sword')['hide'](),
                    _0xcd9a66['hide'](),
                    _0x15600a['stop'](),
                    endAction();
            }
        });
    var _0x496450 = parseInt(_0x3df8d9['css']('left'))
        , _0x1ce0f8 = parseInt(_0x3df8d9['css']('top'));
    $('#sword')['css']('left', _0x496450),
        $('#sword')['css']('top', _0x1ce0f8),
        $('#sword')['show']();
    var _0x4c308d = _0x1ce0f8 - parseInt($('#sword')['css']('top'))
        , _0x17c6da = _0x496450 - parseInt($('#sword')['css']('left'));
    TweenMax['to']($('#sword'), 0x0, {
        'rotation': Math['atan2'](_0x240de5 - parseInt($('#sword')['css']('top')), _0x3dc0b3 - parseInt($('#sword')['css']('left'))) * 0xb4 / Math['PI']
    }),
        TweenMax['fromTo']($('#sword'), easeSeconds, {
            'left': _0x496450,
            'top': _0x1ce0f8
        }, {
            'left': parseInt(_0x3d675c['css']('left')),
            'top': parseInt(_0x3d675c['css']('top')),
            'ease': Circ['easeInOut']
        }),
        playSound(Attack);
}
function getSwordYPercent(_0x2fee12) {
    var _0x403864 = 0x0;
    return _0x2fee12 < -0x5a ? _0x403864 = 0xa * _0x2fee12 / (-0x9a / 0x2) - 0xa : _0x403864 = (-0xa + -_0x2fee12 / 0x1a * 0x3) * 1.4,
        console['log']('xPercent\x20=\x20' + _0x403864),
        _0x403864;
}
function attackDirectly(_0x235ed2, _0x2bb5fa) {
    var _0xc2206d = getFieldCard(_0x235ed2, _0x2bb5fa);
    $('#sword')['show'](),
        TweenMax['to']($('#sword'), 0x0, {
            'left': parseInt(_0xc2206d['css']('left')),
            'top': parseInt(_0xc2206d['css']('top')),
            'rotation': _0x235ed2['rot'] - 0x5a
        });
    var _0x1e4949 = 0x206
        , _0x53520a = 0x32;
    _0x235ed2 == Player2() && (_0x53520a = 0x24e);
    var _0x544df6 = red_stream
        , _0x2037cb = $('#red_stream');
    _0x235ed2 == Player2() && (_0x544df6 = blue_stream,
        _0x2037cb = $('#blue_stream'));
    var _0x5b03c8 = _0x1e4949 - parseInt(_0xc2206d['css']('left'))
        , _0x5ecfcd = _0x53520a - parseInt(_0xc2206d['css']('top'))
        , _0x166d1b = Math['sqrt'](_0x5b03c8 * _0x5b03c8 + _0x5ecfcd * _0x5ecfcd);
    TweenMax['to'](_0x2037cb, 0x0, {
        'left': parseInt(_0xc2206d['css']('left')),
        'top': parseInt(_0xc2206d['css']('top')),
        'rotation': Math['atan2'](_0x5ecfcd, _0x5b03c8) * 0xb4 / Math['PI']
    }),
        _0x2037cb['show'](),
        _0x544df6['play'](),
        TweenMax['fromTo'](_0x2037cb, easeSeconds, {
            'scaleX': 0x0
        }, {
            'scaleX': _0x166d1b / 0x1f4
        }),
        TweenMax['fromTo'](_0x544df6, 1.5, {
            'alpha': 0x1
        }, {
            'alpha': 0x1,
            'onComplete': function () {
                $('#sword')['hide'](),
                    _0x2037cb['hide'](),
                    _0x544df6['stop'](),
                    endAction();
            }
        }),
        TweenMax['to']($('#sword'), 0x0, {
            'rotation': Math['atan2'](_0x53520a - parseInt($('#sword')['css']('top')), _0x1e4949 - parseInt($('#sword')['css']('left'))) * 0xb4 / Math['PI']
        }),
        TweenMax['fromTo']($('#sword'), easeSeconds, {
            'left': parseInt(_0xc2206d['css']('left')),
            'top': parseInt(_0xc2206d['css']('top'))
        }, {
            'left': _0x1e4949,
            'top': _0x53520a,
            'ease': Circ['easeInOut']
        }),
        playSound(Attack);
}
function drawCard(_0x2fcd1d, _0x36b8eb) {
    _0x36b8eb['username'] == username && $('#mulligan_btn')['length'] == 0x1 && ($('#mulligan_btn')['hide'](),
        $('#draw_btn')['show']());
    var _0x4d04a0 = removeTopCardFromDeck(_0x2fcd1d);
    _0x2fcd1d['hand_arr']['push'](_0x4d04a0),
        determineHandPosition(_0x2fcd1d),
        organizeHand(_0x2fcd1d),
        _0x4d04a0['data']('cardfront')['reinitialize'](_0x36b8eb['card']);
    _0x36b8eb['deck'] && (_0x2fcd1d['main_arr'][0x0]['data']('cardfront')['reinitialize'](_0x36b8eb['deck'][0x0]),
        _0x2fcd1d['main_arr'][0x0]['data']('face_up', !![]),
        shiftDeck(_0x2fcd1d));
    var _0x418819 = 0xb4 + ABOUT_ZERO;
    (show_cards && _0x2fcd1d == Player1() || show_cards == 0x2) && (_0x418819 = ABOUT_ZERO),
        TweenMax['to'](_0x4d04a0, easeSeconds, {
            'left': handDestination,
            'top': _0x2fcd1d['handY'],
            'scale': 0.25,
            'rotation': _0x2fcd1d['rot'],
            'rotationY': _0x418819,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        }),
        $('#duel\x20.cards')['append'](_0x4d04a0),
        playSound(DrawSound);
}
function toHand(_0x2ba060, _0x2b2ea5) {
    var _0x151c5c = removeFromDeck(_0x2ba060, _0x2b2ea5);
    !_0x151c5c && (_0x151c5c = removeFromGY(_0x2ba060, _0x2b2ea5));
    !_0x151c5c && (_0x151c5c = removeFromExtra(_0x2ba060, _0x2b2ea5));
    if (!_0x151c5c) {
        _0x151c5c = removeFromHand(_0x2ba060, _0x2b2ea5);
        if (_0x2b2ea5['play'] == 'To\x20hand\x202') {
            !_0x151c5c && (_0x151c5c = removeCard(_0x2ba060, _0x2b2ea5));
            !_0x151c5c && (_0x151c5c = removeCard(_0x2ba060['opponent'], _0x2b2ea5));
            revealAndToHand(_0x2ba060, _0x151c5c, _0x2b2ea5);
            return;
        }
    }
    if (_0x151c5c) {
        revealAndToHand(_0x2ba060, _0x151c5c, _0x2b2ea5);
        return;
    }
    toHandFromBanished(_0x2ba060, _0x2b2ea5),
        toHandFromField(_0x2ba060, _0x2b2ea5);
}
function toHandFromField(_0x24cea0, _0x9ec10e) {
    var _0x474bf0 = removeFromField(_0x24cea0, _0x9ec10e);
    !_0x474bf0 && (_0x474bf0 = removeFromField(_0x24cea0['opponent'], _0x9ec10e));
    if (!_0x474bf0)
        return;
    var _0xd81f85 = _0x474bf0['data']('owner');
    _0x9ec10e['play'] == 'To\x20hand\x202' && (_0xd81f85 = _0x24cea0['opponent']);
    updateController(_0xd81f85, _0x474bf0),
        _0xd81f85['hand_arr']['push'](_0x474bf0),
        determineHandPosition(_0xd81f85),
        organizeHand(_0xd81f85);
    var _0x359f9f = 0xb4 + ABOUT_ZERO;
    (isPlayer1(_0xd81f85['username']) && show_cards || show_cards == 0x2) && (_0x359f9f = ABOUT_ZERO),
        TweenMax['to'](_0x474bf0, easeSeconds, {
            'left': handDestination,
            'top': _0xd81f85['handY'],
            'scale': 0.25,
            'rotation': _0xd81f85['rot'],
            'rotationY': _0x359f9f,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                if (automatic)
                    endAction();
                else
                    _0x9ec10e['shuffle'] !== ![] ? shuffleHand(_0xd81f85, _0x9ec10e) : endAction();
            }
        });
}
function toHandFromBanished(_0x17f9dc, _0x21f839) {
    var _0x4bd8ec = removeFromBanished(_0x17f9dc, _0x21f839, ![]);
    if (!_0x4bd8ec)
        return;
    if (!_0x4bd8ec['data']('face_down'))
        revealAndToHand(_0x17f9dc, _0x4bd8ec, _0x21f839);
    else {
        $('#duel\x20.cards')['append'](_0x4bd8ec),
            determineHandPosition(_0x17f9dc);
        var _0x28dfc6 = 0xb4 + ABOUT_ZERO;
        (isPlayer1(_0x17f9dc['username']) && show_cards || show_cards == 0x2) && (_0x28dfc6 = ABOUT_ZERO,
            _0x4bd8ec['data']('cardfront')['show']()),
            TweenMax['to'](_0x4bd8ec, 0.7, {
                'left': handDestination,
                'top': _0x17f9dc['handY'],
                'scale': 0.25,
                'rotation': _0x17f9dc['rot'],
                'rotationY': _0x28dfc6,
                'delay': 0.5,
                'onStart': function () {
                    _0x17f9dc['hand_arr']['push'](_0x4bd8ec),
                        organizeHand(_0x17f9dc);
                },
                'onComplete': function () {
                    _0x4bd8ec['data']('face_down', ![]),
                        shuffleHand(_0x17f9dc, _0x21f839);
                }
            });
    }
}
function toHandFromDeckDiscreet(_0x4f7542, _0x115163, _0x57af63) {
    determineHandPosition(_0x4f7542);
    var _0x1af406 = 0xb4 + ABOUT_ZERO;
    (isPlayer1(_0x4f7542['username']) && show_cards || show_cards == 0x2) && (_0x1af406 = ABOUT_ZERO,
        _0x115163['data']('cardfront')['show']());
    var _0x204508 = TweenMax['to'](_0x115163, 0.7, {
        'left': handDestination,
        'top': _0x4f7542['handY'],
        'scale': 0.25,
        'rotation': _0x4f7542['rot'],
        'rotationY': _0x1af406,
        'onStart': function () {
            _0x4f7542['hand_arr']['push'](_0x115163),
                organizeHand(_0x4f7542),
                $('#field')['prepend'](_0x115163);
        },
        'onUpdate': function () {
            _0x204508['progress']() > 0.2 && _0x204508['progress']() < 0.23 && $('#duel\x20.cards')['append'](_0x115163),
                _0x204508['progress']() < 0.03 && TweenMax['set'](_0x115163, {
                    'left': _0x4f7542['deckX']
                });
        },
        'onComplete': function () {
            _0x57af63['shuffle'] !== ![] ? shuffleHand(_0x4f7542, _0x57af63) : endAction();
        }
    });
}
function toDeck(_0x57273f, _0x524925) {
    var _0xf7c456 = 0xb4 + ABOUT_ZERO
        , _0x38f724 = !![]
        , _0x3eaee2 = getFieldCard(_0x57273f, _0x524925);
    _0x3eaee2 ? (_0x38f724 = ![],
        _0x3eaee2 = removeCard(_0x57273f, _0x524925)) : (_0x3eaee2 = removeFromHand(_0x57273f, _0x524925),
            _0x3eaee2 && (_0x38f724 = ![]));
    !_0x3eaee2 && (_0x3eaee2 = removeFromBanished(_0x57273f, _0x524925, ![]));
    !_0x3eaee2 && (_0x3eaee2 = removeCard(_0x57273f, _0x524925));
    !_0x3eaee2 && (_0x3eaee2 = removeFromDeck(_0x57273f['opponent'], _0x524925));
    _0x3eaee2['data']('face_down') && (_0x38f724 = ![],
        _0x3eaee2['data']('face_down', ![]));
    _0x524925['discreet'] && (_0x38f724 = ![]);
    updateController(_0x3eaee2['data']('owner'), _0x3eaee2),
        $('#field')['append'](_0x3eaee2);
    _0x524925['play']['indexOf']('FU') >= 0x0 && (_0x3eaee2['data']('face_up', !![]),
        _0xf7c456 = ABOUT_ZERO);
    if (_0x524925['play'] == 'To\x20B\x20Deck') {
        if (_0x38f724) {
            revealAndToBottomOfDeck(_0x3eaee2['data']('controller'), _0x3eaee2, _0x524925);
            return;
        } else
            _0x3eaee2['data']('owner')['main_arr']['push'](_0x3eaee2),
                addDeckChildren(_0x57273f);
    } else {
        if (_0x524925['play'] == 'To\x20B\x20Deck\x202')
            _0x57273f['opponent']['main_arr']['push'](_0x3eaee2),
                updateController(_0x57273f['opponent'], _0x3eaee2);
        else {
            if (_0x524925['play']['indexOf']('To\x20T\x20Deck\x202') == 0x0)
                _0x57273f['opponent']['main_arr']['unshift'](_0x3eaee2),
                    updateController(_0x57273f['opponent'], _0x3eaee2),
                    TweenMax['set'](_0x3eaee2, {
                        'z': _0x57273f['opponent']['main_arr']['length'] + 0x1e
                    });
            else {
                if (_0x38f724) {
                    revealAndToTopOfDeck(_0x3eaee2['data']('controller'), _0x3eaee2, _0x524925);
                    return;
                } else
                    _0x3eaee2['data']('owner')['main_arr']['unshift'](_0x3eaee2),
                        TweenMax['set'](_0x3eaee2, {
                            'z': _0x3eaee2['getDeckZ']()
                        });
            }
        }
    }
    TweenMax['to'](_0x3eaee2, easeSeconds, {
        'left': _0x3eaee2['data']('controller')['deckX'],
        'top': _0x3eaee2['data']('controller')['deckY'],
        'scale': 0.1485,
        'rotation': _0x3eaee2['data']('controller')['rot'],
        'rotationY': _0xf7c456,
        'ease': Linear['easeNone'],
        'onComplete': function () {
            shiftDeck(_0x3eaee2['data']('controller')),
                endAction();
        }
    });
}
function toGY(_0x414b77, _0x18a1bf) {
    var _0x3c14c9 = removeCard(_0x414b77, _0x18a1bf);
    !_0x3c14c9 && (_0x3c14c9 = removeFromBanished(_0x414b77['opponent'], _0x18a1bf)),
        updateController(_0x3c14c9['data']('owner'), _0x3c14c9),
        _0x3c14c9['data']('cardfront')['reinitialize'](_0x18a1bf['card']),
        _0x3c14c9['data']('face_down', ![]),
        $('#field')['append'](_0x3c14c9),
        TweenMax['set'](_0x3c14c9, {
            'z': _0x3c14c9['getGraveZ']()
        }),
        _0x3c14c9['data']('owner')['grave_arr']['unshift'](_0x3c14c9),
        TweenMax['to'](_0x3c14c9, easeSeconds, {
            'left': _0x3c14c9['data']('owner')['graveX'],
            'top': _0x3c14c9['data']('owner')['graveY'],
            'scale': 0.1485,
            'rotation': _0x3c14c9['data']('owner')['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                shiftGrave(_0x3c14c9['data']('owner')),
                    endAction();
            }
        }),
        playSound(Move);
}
function mill(_0x3794c7, _0x5ca647) {
    var _0x3e21da = removeTopCardFromDeck(_0x3794c7);
    updateController(_0x3e21da['data']('owner'), _0x3e21da),
        _0x3e21da['data']('cardfront')['reinitialize'](_0x5ca647['card']),
        _0x5ca647['deck'] && (_0x3794c7['main_arr'][0x0]['data']('cardfront')['reinitialize'](_0x5ca647['deck'][0x0]),
            _0x3794c7['main_arr'][0x0]['data']('face_up', !![]),
            shiftDeck(_0x3794c7)),
        $('#field')['append'](_0x3e21da),
        TweenMax['set'](_0x3e21da, {
            'z': _0x3e21da['getGraveZ']()
        }),
        _0x3e21da['data']('owner')['grave_arr']['unshift'](_0x3e21da),
        TweenMax['to'](_0x3e21da, easeSecondsBanish, {
            'left': _0x3e21da['data']('owner')['graveX'],
            'top': _0x3e21da['data']('owner')['graveY'],
            'rotation': _0x3e21da['data']('owner')['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                shiftGrave(_0x3e21da['data']('owner')),
                    endAction();
            }
        }),
        playSound(Move);
}
function banish(_0x12599d, _0x3f3a1a) {
    var _0x1d86f2 = ABOUT_ZERO
        , _0x254dac = getDuelCard(_0x3f3a1a['id']);
    if (!_0x254dac)
        return;
    var _0x2174f5 = _0x254dac['hasClass']('xyzmaterial') ? getXyzHost(_0x254dac['data']('id')) : null
        , _0x254dac = removeCard(_0x12599d, _0x3f3a1a);
    _0x254dac && _0x254dac['data']('face_down', ![]),
        !_0x254dac && (_0x254dac = removeFromGY(_0x12599d['opponent'], _0x3f3a1a)),
        _0x3f3a1a['play']['indexOf']('FD') >= 0x0 && (_0x254dac['data']('face_down', !![]),
            _0x1d86f2 = 0xb4 + ABOUT_ZERO),
        _0x254dac['data']('cardfront')['reinitialize'](_0x3f3a1a['card']),
        _0x3f3a1a['deck'] && (_0x12599d['main_arr'][0x0]['data']('cardfront')['reinitialize'](_0x3f3a1a['deck'][0x0]),
            _0x12599d['main_arr'][0x0]['data']('face_up', !![]),
            shiftDeck(_0x12599d)),
        $('#field')['append'](_0x254dac),
        TweenMax['set'](_0x254dac, {
            'z': _0x254dac['getBanishedZ']()
        }),
        _0x254dac['data']('owner')['banished_arr']['unshift'](_0x254dac),
        updateController(_0x254dac['data']('owner'), _0x254dac),
        TweenMax['to'](_0x254dac, easeSeconds, {
            'left': _0x254dac['data']('owner')['banishedX'],
            'top': _0x254dac['data']('owner')['banishedY'],
            'scale': 0.1485,
            'rotation': _0x254dac['data']('owner')['rot'],
            'rotationY': _0x1d86f2,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                shiftBanished(_0x254dac['data']('owner')),
                    !_0x2174f5 && endAction();
            }
        }),
        playSound(Banish),
        _0x2174f5 && updateXyzMaterials(_0x2174f5['data']('controller'), _0x2174f5),
        updateViewing();
}
function toED(_0x1763de, _0x592da2) {
    var _0x56d937 = !![]
        , _0x339089 = getFieldCard(_0x1763de, _0x592da2);
    _0x339089 && (_0x56d937 = ![]);
    for (var _0x250927 = 0x0; _0x250927 < _0x1763de['banished_arr']['length']; _0x250927++) {
        if (_0x1763de['banished_arr'][_0x250927]['data']('id') == _0x592da2['id']) {
            _0x1763de['banished_arr'][_0x250927]['data']('face_down') && (_0x56d937 = ![]);
            break;
        }
    }
    _0x339089 = removeCard(_0x1763de, _0x592da2),
        _0x339089['data']('cardfront')['reinitialize'](_0x592da2['card']);
    if (!_0x339089['data']('face_down') && _0x56d937) {
        _0x592da2['play']['indexOf']('FU') >= 0x0 ? revealAndToExtraFU(_0x1763de, _0x339089, _0x592da2) : revealAndToExtra(_0x1763de, _0x339089, _0x592da2);
        return;
    }
    _0x339089['data']('face_down', !![]);
    var _0x5358dc = 0xb4 + ABOUT_ZERO;
    _0x592da2['play']['indexOf']('FU') >= 0x0 ? (_0x339089['data']('face_down', ![]),
        _0x5358dc = ABOUT_ZERO,
        _0x339089['data']('owner')['extra_arr']['unshift'](_0x339089),
        TweenMax['set'](_0x339089, {
            'z': _0x339089['getExtraZ']()
        })) : (_0x339089['data']('owner')['extra_arr']['push'](_0x339089),
            addExtraChildren(_0x339089['data']('owner'))),
        TweenMax['to'](_0x339089, easeSeconds, {
            'left': _0x339089['data']('owner')['extraX'],
            'top': _0x339089['data']('owner')['extraY'],
            'scale': 0.1485,
            'rotation': _0x339089['data']('owner')['rot'],
            'rotationY': _0x5358dc,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                shiftExtra(_0x339089['data']('owner')),
                    endAction();
            }
        });
}
function normalSummon(_0x24ad4e, _0x48ac1f) {
    var _0x1adcb0 = removeFromHand(_0x24ad4e, _0x48ac1f)
        , _0x16c6ce = getNextMonsterZone(_0x24ad4e, _0x1adcb0, _0x48ac1f);
    _0x1adcb0['data']('inATK', !![]),
        _0x1adcb0['data']('inDEF', ![]),
        _0x1adcb0['data']('face_down', ![]),
        $('#field')['append'](_0x1adcb0),
        _0x1adcb0['data']('cardfront')['reinitialize'](_0x48ac1f['card']),
        TweenMax['to'](_0x1adcb0, easeSeconds, {
            'left': _0x16c6ce[0x0],
            'top': _0x16c6ce[0x1],
            'scale': 0.1485,
            'rotation': _0x24ad4e['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        }),
        playSound(NormalSummon);
}
function specialSummon(_0x509284, _0x5d9f1a, _0x3ce4ff, _0x45818a, _0x26d8c1) {
    _0x26d8c1 !== ![] && (_0x26d8c1 = !![]);
    !_0x45818a && (_0x45818a = removeCard(_0x509284, _0x5d9f1a));
    !_0x45818a && (_0x45818a = removeCard(_0x509284['opponent'], _0x5d9f1a));
    !_0x3ce4ff && (_0x3ce4ff = getNextMonsterZone(_0x509284, _0x45818a, _0x5d9f1a));
    var _0x339104 = _0x509284['rot'];
    _0x45818a['data']('cardfront')['reinitialize'](_0x5d9f1a['card']);
    _0x5d9f1a['play']['indexOf']('ATK') >= 0x0 || _0x5d9f1a['position'] == 'Attack' ? (_0x45818a['data']('inATK', !![]),
        _0x45818a['data']('inDEF', ![])) : (_0x45818a['data']('inATK', ![]),
            _0x45818a['data']('inDEF', !![]),
            _0x339104 = _0x509284['defRot']);
    var _0x5efab4 = ABOUT_ZERO;
    _0x45818a['data']('face_down', ![]),
        (_0x5d9f1a['position'] == 'Set' || _0x5d9f1a['position'] == 'FD\x20Defense') && (_0x5efab4 = 0xb4,
            _0x45818a['data']('face_down', !![])),
        $('#field')['append'](_0x45818a),
        TweenMax['to'](_0x45818a, easeSeconds, {
            'left': _0x3ce4ff[0x0],
            'top': _0x3ce4ff[0x1],
            'scale': 0.1485,
            'rotation': _0x339104,
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                $('#ss_glow')['show'](),
                    $('#ss_spiral')['show'](),
                    TweenMax['to']($('#ss_glow'), 0x0, {
                        'left': _0x3ce4ff[0x0],
                        'top': _0x3ce4ff[0x1]
                    }),
                    TweenMax['to']($('#ss_glow'), 0.7, {
                        'scale': 0x6,
                        'rotation': -0xfa
                    }),
                    TweenMax['to']($('#ss_glow'), 0x1, {
                        'alpha': 0x0
                    }),
                    TweenMax['to']($('#ss_spiral'), 0x0, {
                        'left': _0x3ce4ff[0x0],
                        'top': _0x3ce4ff[0x1]
                    }),
                    TweenMax['to']($('#ss_spiral'), 0.7, {
                        'scale': 0x6,
                        'rotation': 0xfa
                    }),
                    TweenMax['to']($('#ss_spiral'), 0x1, {
                        'alpha': 0x0,
                        'onComplete': function () {
                            resetSpecialSummon();
                        }
                    }),
                    playSound(SpecialSummon),
                    _0x26d8c1 && endAction();
            }
        });
}
function olSummon(_0xdff62a, _0x5466c6) {
    var _0x192253 = removeFromExtra(_0xdff62a, {
        'id': _0x5466c6['start_id']
    })
        , _0x238d48 = getFieldCard(_0xdff62a, {
            'id': _0x5466c6['end_id']
        })
        , _0x2d23db = [parseInt(_0x238d48['css']('left')), parseInt(_0x238d48['css']('top'))];
    _0x192253['data']('xyz_arr')['push'](_0x238d48);
    while (_0x238d48['data']('xyz_arr')['length'] > 0x0) {
        _0x192253['data']('xyz_arr')['push'](_0x238d48['data']('xyz_arr')[0x0]),
            _0x238d48['data']('xyz_arr')['splice'](0x0, 0x1);
    }
    _0x192253['data']('face_down', ![]),
        _0x192253['data']('cardfront')['reinitialize'](_0x5466c6['card']),
        replaceCard(_0xdff62a, _0x192253, _0x238d48),
        specialSummon(_0xdff62a, _0x5466c6, _0x2d23db, _0x192253, ![]),
        updateXyzMaterials(_0xdff62a, _0x192253, !![]),
        viewing['indexOf']('Extra') >= 0x0 && _0xdff62a['username'] == username && viewCards(_0xdff62a['extra_arr']);
}
function summonToken(_0x3111ac, _0x5e7592) {
    awaiting_token = ![];
    var _0x2dfe2f = _0x5e7592['token'] ? _0x5e7592['token'] : _0x3111ac['token']
        , _0x2ae32f = newDuelCard(_0x3111ac);
    _0x2ae32f['data']('id', _0x5e7592['id']),
        _0x2ae32f['data']('inATK', ![]),
        _0x2ae32f['data']('inDEF', !![]),
        _0x2ae32f['data']('face_down', ![]),
        _0x2ae32f['data']('cardfront')['initializeFromData']({
            'name': 'Token',
            'treated_as': 'Token',
            'effect': 'This\x20card\x20can\x20be\x20used\x20as\x20any\x20Token',
            'card_type': 'Monster',
            'monster_color': 'Token',
            'pic': (TOKEN_IDS['includes'](_0x2dfe2f) ? CARD_TOKENS_START : TOKEN_START) + _0x2dfe2f + '.jpg',
            'atk': rated ? null : '0',
            'def': rated ? null : '0'
        }),
        _0x3111ac['all_cards_arr']['push'](_0x2ae32f);
    var _0x39fc8b = getNextMonsterZone(_0x3111ac, _0x2ae32f, _0x5e7592);
    TweenMax['to'](_0x2ae32f, 0x0, {
        'left': _0x39fc8b[0x0],
        'top': _0x39fc8b[0x1],
        'rotationY': ABOUT_ZERO,
        'rotation': _0x3111ac['defRot'],
        'scale': 0.1485
    }),
        $('#field')['append'](_0x2ae32f),
        _0x2ae32f['onRotate'](!![]),
        playSound(SpecialSummon),
        $('#ss_glow')['show'](),
        $('#ss_spiral')['show'](),
        TweenMax['to']($('#ss_glow'), 0x0, {
            'left': _0x39fc8b[0x0],
            'top': _0x39fc8b[0x1]
        }),
        TweenMax['to']($('#ss_glow'), 0.7, {
            'scale': 0x6,
            'rotation': -0xfa
        }),
        TweenMax['to']($('#ss_glow'), 0x1, {
            'alpha': 0x0
        }),
        TweenMax['to']($('#ss_spiral'), 0x0, {
            'left': _0x39fc8b[0x0],
            'top': _0x39fc8b[0x1]
        }),
        TweenMax['to']($('#ss_spiral'), 0.7, {
            'scale': 0x6,
            'rotation': 0xfa
        }),
        TweenMax['to']($('#ss_spiral'), 0x1, {
            'alpha': 0x0,
            'onComplete': function () {
                resetSpecialSummon(),
                    duelist && _0x3111ac != Player1() && _0x2ae32f['addClass']('target'),
                    endAction();
            }
        });
}
function removeToken(_0x133bb1, _0x4d392c) {
    var _0xf74734 = removeFromField(_0x133bb1, _0x4d392c);
    _0xf74734['data']('owner')['all_cards_arr']['splice'](_0xf74734['data']('owner')['all_cards_arr']['indexOf'](_0xf74734), 0x1),
        _0xf74734['remove'](),
        _0xf74734 = null,
        endAction();
}
function flip(_0x24fb9a, _0x3fbcbe) {
    var _0x384332 = getFieldCard(_0x24fb9a, _0x3fbcbe);
    _0x384332['data']('inATK', ![]),
        _0x384332['data']('inDEF', !![]),
        _0x384332['data']('face_down', ![]),
        $('#field')['append'](_0x384332),
        _0x384332['data']('cardfront')['reinitialize'](_0x3fbcbe['card']),
        TweenMax['to'](_0x384332, easeSeconds, {
            'rotation': _0x24fb9a['defRot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        }),
        playSound(Flip);
}
function flipSummon(_0x233e06, _0x1e708f) {
    var _0x4081f4 = getFieldCard(_0x233e06, _0x1e708f);
    _0x4081f4['data']('inATK', !![]),
        _0x4081f4['data']('inDEF', ![]),
        _0x4081f4['data']('face_down', ![]),
        $('#field')['append'](_0x4081f4),
        _0x4081f4['data']('cardfront')['reinitialize'](_0x1e708f['card']),
        TweenMax['to'](_0x4081f4, easeSeconds, {
            'rotation': _0x233e06['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () { }
        }),
        updateXyzMaterials(_0x233e06, _0x4081f4),
        playSound(Flip);
}
function toATK(_0x4d6476, _0x10eeb8) {
    var _0x3f7d89 = getFieldCard(_0x4d6476, _0x10eeb8);
    _0x3f7d89['data']('inATK', !![]),
        _0x3f7d89['data']('inDEF', ![]),
        _0x3f7d89['data']('face_down', ![]),
        $('#field')['append'](_0x3f7d89),
        _0x3f7d89['data']('cardfront')['reinitialize'](_0x10eeb8['card']),
        TweenMax['to'](_0x3f7d89, easeSeconds, {
            'rotation': _0x4d6476['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () { }
        }),
        updateXyzMaterials(_0x4d6476, _0x3f7d89),
        playSound(Swap);
}
function toDEF(_0x220467, _0x2a9cf9) {
    var _0x2dae71 = getFieldCard(_0x220467, _0x2a9cf9);
    _0x2dae71['data']('inATK', ![]),
        _0x2dae71['data']('inDEF', !![]),
        _0x2dae71['data']('face_down', !!_0x2a9cf9['face_down']),
        $('#field')['append'](_0x2dae71),
        _0x2dae71['data']('cardfront')['reinitialize'](_0x2a9cf9['card']);
    var _0x6a86be = ABOUT_ZERO;
    _0x2a9cf9['face_down'] ? (playSound(Flip),
        _0x6a86be = 0xb4 + ABOUT_ZERO) : playSound(Swap),
        TweenMax['to'](_0x2dae71, easeSeconds, {
            'rotation': _0x220467['defRot'],
            'rotationY': _0x6a86be,
            'ease': Linear['easeNone'],
            'onComplete': function () { }
        }),
        setTimeout(function () {
            updateXyzMaterials(_0x220467, _0x2dae71);
        }, automatic ? 0x0 : 0x0);
}
function activateST(_0x14dd51, _0xd5cb1f) {
    var _0x277f48, _0x23473d = getFieldCard(_0x14dd51, _0xd5cb1f);
    !_0x23473d ? (_0x23473d = removeCard(_0x14dd51, _0xd5cb1f),
        _0x277f48 = getNextSTZone(_0x14dd51, _0x23473d, _0xd5cb1f)) : _0x277f48 = [parseInt(_0x23473d['css']('left')), parseInt(_0x23473d['css']('top'))],
        _0x23473d['data']('cardfront')['reinitialize'](_0xd5cb1f['card']),
        _0x23473d['data']('inATK', !![]),
        _0x23473d['data']('inDEF', ![]),
        _0x23473d['data']('face_down', ![]),
        $('#field')['append'](_0x23473d),
        TweenMax['to'](_0x23473d, easeSeconds, {
            'left': _0x277f48[0x0],
            'top': _0x277f48[0x1],
            'scale': 0.1485,
            'rotation': _0x14dd51['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        }),
        playSound(Activate),
        questionE(_0x23473d);
}
function toST(_0x50147a, _0x467126) {
    var _0x2775eb = getFieldCard(_0x50147a, _0x467126);
    !_0x2775eb && (_0x2775eb = removeCard(_0x50147a, _0x467126),
        !_0x2775eb && (_0x2775eb = removeFromGY(_0x50147a['opponent'], _0x467126),
            !_0x2775eb && (_0x2775eb = removeFromBanished(_0x50147a['opponent'], _0x467126))));
    _0x2775eb['data']('cardfront')['reinitialize'](_0x467126['card']),
        _0x2775eb['data']('inATK', !![]),
        _0x2775eb['data']('inDEF', ![]),
        _0x2775eb['data']('face_down', ![]);
    var _0x4a8969 = getNextSTZone(_0x50147a, _0x2775eb, _0x467126);
    $('#field')['append'](_0x2775eb),
        TweenMax['to'](_0x2775eb, easeSeconds, {
            'left': _0x4a8969[0x0],
            'top': _0x4a8969[0x1],
            'scale': 0.1485,
            'rotation': _0x50147a['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        });
}
function setMonster(_0x3af24c, _0xb1bbf9) {
    var _0xf6e752, _0x8c1452 = getFieldCard(_0x3af24c, _0xb1bbf9);
    !_0x8c1452 ? (_0x8c1452 = removeCard(_0x3af24c, _0xb1bbf9),
        _0xf6e752 = getNextMonsterZone(_0x3af24c, _0x8c1452, _0xb1bbf9),
        playSound(FaceDown)) : (_0xf6e752 = [parseInt(_0x8c1452['css']('left')), parseInt(_0x8c1452['css']('top'))],
            playSound(Flip)),
        _0x8c1452['data']('inDEF', !![]),
        _0x8c1452['data']('face_down', !![]),
        _0x8c1452['data']('counters', 0x0),
        _0x8c1452['data']('cardfront')['reinitialize'](_0xb1bbf9['card']),
        _0x8c1452['data']('new_atk', null),
        _0x8c1452['data']('new_def', null),
        $('#field')['append'](_0x8c1452),
        TweenMax['to'](_0x8c1452, easeSeconds, {
            'left': _0xf6e752[0x0],
            'top': _0xf6e752[0x1],
            'scale': 0.1485,
            'rotation': _0x3af24c['defRot'],
            'rotationY': 0xb4 + ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () { }
        }),
        updateXyzMaterials(_0x3af24c, _0x8c1452);
}
function setST(_0x1e6b9a, _0x3fa6f5) {
    if (_0x3fa6f5['zone'] == 'F-1') {
        setFieldSpell(_0x1e6b9a, _0x3fa6f5);
        return;
    }
    var _0x328519, _0x3681ad = getFieldCard(_0x1e6b9a, _0x3fa6f5);
    !_0x3681ad ? (_0x3681ad = removeCard(_0x1e6b9a, _0x3fa6f5),
        _0x328519 = getNextSTZone(_0x1e6b9a, _0x3681ad, _0x3fa6f5),
        playSound(FaceDown)) : (_0x328519 = [parseInt(_0x3681ad['css']('left')), parseInt(_0x3681ad['css']('top'))],
            playSound(Flip)),
        _0x3681ad['data']('face_down', !![]),
        _0x3681ad['data']('cardfront')['reinitialize'](_0x3fa6f5['card']),
        $('#field')['append'](_0x3681ad),
        TweenMax['to'](_0x3681ad, easeSeconds, {
            'left': _0x328519[0x0],
            'top': _0x328519[0x1],
            'scale': 0.1485,
            'rotation': _0x1e6b9a['rot'],
            'rotationY': 0xb4 + ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        });
}
function activateFieldSpell(_0x190971, _0x527992) {
    var _0x4b9efa = getFieldCard(_0x190971, _0x527992);
    !_0x4b9efa && (_0x4b9efa = removeCard(_0x190971, _0x527992),
        !_0x4b9efa && (_0x4b9efa = removeCard(_0x190971['opponent'], _0x527992))),
        _0x4b9efa['data']('cardfront')['reinitialize'](_0x527992['card']),
        _0x4b9efa['data']('face_down', ![]),
        _0x190971['fieldSpell'] = _0x4b9efa,
        tag_duel && (_0x190971['partner']['fieldSpell'] = _0x4b9efa),
        updateController(_0x190971, _0x4b9efa),
        $('#field')['append'](_0x4b9efa),
        TweenMax['to'](_0x4b9efa, easeSecondsBanish, {
            'left': _0x190971['fieldSpellX'],
            'top': _0x190971['fieldSpellY'],
            'scale': 0.1485,
            'rotation': _0x190971['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                setFieldSpellPic(_0x190971, _0x4b9efa),
                    endAction();
            }
        }),
        playSound(Activate);
}
function activateFieldSpell2(_0x193339, _0x3052ab) {
    var _0x750036 = getFieldCard(_0x193339, _0x3052ab);
    !_0x750036 && (_0x750036 = removeCard(_0x193339, _0x3052ab)),
        _0x750036['data']('cardfront')['reinitialize'](_0x3052ab['card']),
        _0x750036['data']('face_down', ![]),
        _0x193339['opponent']['fieldSpell'] = _0x750036,
        tag_duel && (_0x193339['opponent']['partner']['fieldSpell'] = _0x750036),
        updateController(_0x193339['opponent'], _0x750036),
        $('#field')['append'](_0x750036),
        TweenMax['to'](_0x750036, easeSecondsBanish, {
            'left': _0x193339['opponent']['fieldSpellX'],
            'top': _0x193339['opponent']['fieldSpellY'],
            'scale': 0.1485,
            'rotation': _0x193339['opponent']['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                setFieldSpellPic(_0x193339['opponent'], _0x750036),
                    endAction();
            }
        }),
        playSound(Activate);
}
function setFieldSpell(_0x430e42, _0x42222b) {
    var _0xb65820 = getFieldCard(_0x430e42, _0x42222b);
    !_0xb65820 ? (_0xb65820 = removeCard(_0x430e42, _0x42222b),
        playSound(FaceDown)) : playSound(Flip),
        _0xb65820['data']('face_down', !![]),
        _0x430e42['fieldSpell'] = _0xb65820,
        tag_duel && (_0x430e42['partner']['fieldSpell'] = _0xb65820),
        $('#field')['append'](_0xb65820),
        TweenMax['to'](_0xb65820, easeSeconds, {
            'left': _0x430e42['fieldSpellX'],
            'top': _0x430e42['fieldSpellY'],
            'scale': 0.1485,
            'rotation': _0x430e42['rot'],
            'rotationY': 0xb4 + ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                updateController(_0x430e42, _0xb65820),
                    endAction();
            }
        }),
        removeFieldSpellPic();
}
function setFieldSpell2(_0x178c29, _0x659dcb) {
    var _0x2e5e59 = removeCard(_0x178c29, _0x659dcb);
    _0x2e5e59['data']('cardfront')['reinitialize'](_0x659dcb['card']),
        _0x2e5e59['data']('face_down', !![]),
        _0x178c29['opponent']['fieldSpell'] = _0x2e5e59,
        tag_duel && (_0x178c29['opponent']['partner']['fieldSpell'] = _0x2e5e59),
        updateController(_0x178c29['opponent'], _0x2e5e59),
        $('#field')['append'](_0x2e5e59),
        TweenMax['to'](_0x2e5e59, easeSecondsBanish, {
            'left': _0x178c29['opponent']['fieldSpellX'],
            'top': _0x178c29['opponent']['fieldSpellY'],
            'scale': 0.1485,
            'rotation': _0x178c29['opponent']['rot'],
            'rotationY': 0xb4 + ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                _0x178c29['opponent']['username'] == username && updateController(_0x178c29['opponent'], _0x2e5e59),
                    endAction();
            }
        }),
        playSound(FaceDown);
}
function setFieldSpellPic(_0x5930cf, _0x1347cd) {
    if (_0x1347cd['data']('face_down'))
        return;
    var _0x47e148 = _0x5930cf['fieldSpell']['data']('cardfront')['data']('id')
        , _0x1ed68b = CARD_IMAGES_START + _0x47e148 + '.jpg';
    _0x1ed68b = _0x1ed68b['replace']('/low-res/', '/card-pics/')['replace']('/small/', '/card-pics/'),
        $('#field_spell_pic')['attr']('src', _0x1ed68b);
}
function setFieldSpellPic(_0x568af6, _0x1676cd) {
    var _0x22efdc = _0x568af6['fieldSpell']['data']('cardfront')['find']('.pic')['attr']('src');
    $('#field_spell_pic')['attr']('src', _0x22efdc),
        $('#field_spell_pic')['attr']('src', _0x22efdc['replace']('/low-res/', '/card-pics/')['replace']('/small/', '/card-pics/'));
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
    $('#field_spell_pic')['attr']('src', IMAGES_START + 'blank.webp');
}
function activatePendulumLeft(_0x52d069, _0x3135e1) {
    var _0x2801b1 = getFieldCard(_0x52d069, _0x3135e1);
    !_0x2801b1 && playSound(Activate),
        _0x2801b1 = removeCard(_0x52d069, _0x3135e1),
        _0x2801b1['data']('cardfront')['reinitialize'](_0x3135e1['card']),
        links ? (_0x52d069['s1'] = _0x2801b1,
            tag_duel && (_0x52d069['partner']['s1'] = _0x2801b1)) : (_0x52d069['pendulumLeft'] = _0x2801b1,
                tag_duel && (_0x52d069['partner']['pendulumLeft'] = _0x2801b1)),
        $('#field')['append'](_0x2801b1),
        TweenMax['to'](_0x2801b1, easeSeconds, {
            'left': _0x52d069['pendulumLeftX'],
            'top': _0x52d069['pendulumY'],
            'scale': 0.1485,
            'rotation': _0x52d069['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        });
}
function activatePendulumRight(_0x1af19c, _0x4b30fd) {
    var _0x595d49 = getFieldCard(_0x1af19c, _0x4b30fd);
    !_0x595d49 && playSound(Activate),
        _0x595d49 = removeCard(_0x1af19c, _0x4b30fd),
        _0x595d49['data']('cardfront')['reinitialize'](_0x4b30fd['card']),
        links ? (_0x1af19c['s5'] = _0x595d49,
            tag_duel && (_0x1af19c['partner']['s5'] = _0x595d49)) : (_0x1af19c['pendulumRight'] = _0x595d49,
                tag_duel && (_0x1af19c['partner']['pendulumRight'] = _0x595d49)),
        $('#field')['append'](_0x595d49),
        TweenMax['to'](_0x595d49, easeSeconds, {
            'left': _0x1af19c['pendulumRightX'],
            'top': _0x1af19c['pendulumY'],
            'scale': 0.1485,
            'rotation': _0x1af19c['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        });
}
function changeControl(_0x2f7693, _0x47a96e) {
    var _0x1c5582 = removeFromField(_0x2f7693, _0x47a96e, !![]);
    !_0x1c5582 && automatic && (_0x1c5582 = removeFromField(_0x2f7693['opponent'], _0x47a96e, !![]));
    _0x1c5582['data']('cardfront')['reinitialize'](_0x47a96e['card']),
        $('#field')['append'](_0x1c5582);
    var _0x5efb8d;
    _0x47a96e['zone'] && _0x47a96e['zone']['indexOf']('2-') >= 0x0 ? _0x5efb8d = getNextMonsterZone(_0x2f7693, _0x1c5582, _0x47a96e) : _0x5efb8d = getNextMonsterZone(_0x2f7693['opponent'], _0x1c5582, _0x47a96e);
    var _0x2affb6 = _0x1c5582['data']('controller')['rot'];
    _0x1c5582['data']('inDEF') && (_0x2affb6 = _0x1c5582['data']('controller')['defRot']),
        TweenMax['to'](_0x1c5582, easeSeconds, {
            'left': _0x5efb8d[0x0],
            'top': _0x5efb8d[0x1],
            'rotation': _0x2affb6,
            'ease': Linear['easeNone'],
            'onComplete': function () { }
        }),
        updateXyzMaterials(_0x1c5582['data']('controller'), _0x1c5582);
}
function addRandomCardFromDeckToHand(_0x16cbb8, _0x4654b9) {
    var _0x3f5bea = removeFromDeck(_0x16cbb8, _0x4654b9);
    _0x3f5bea['data']('cardfront')['reinitialize'](_0x4654b9['card']),
        determineHandPosition(_0x16cbb8);
    var _0x47bcb1 = 0xb4 + ABOUT_ZERO;
    (isPlayer1(_0x16cbb8['username']) && show_cards || show_cards == 0x2) && (_0x47bcb1 = ABOUT_ZERO),
        _0x16cbb8['hand_arr']['push'](_0x3f5bea),
        organizeHand(_0x16cbb8),
        TweenMax['to'](_0x3f5bea, easeSeconds2, {
            'left': handDestination,
            'top': _0x16cbb8['handY'],
            'scale': 0.25,
            'rotation': _0x16cbb8['rot'],
            'rotationY': _0x47bcb1,
            'onComplete': function () {
                shuffleHand(_0x16cbb8, _0x4654b9);
            }
        });
}
function turnTopCardOfDeckFU(_0x7f056e, _0x3dd519) {
    var _0x1130e0 = _0x7f056e['main_arr'][0x0];
    _0x1130e0['data']('face_up', !![]),
        _0x1130e0['data']('cardfront')['reinitialize'](_0x3dd519['card']),
        TweenMax['to'](_0x1130e0, easeSeconds, {
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        });
}
function flipDeck(_0x21f821, _0x140232) {
    _0x21f821['deck_face_up'] = !_0x21f821['deck_face_up'],
        _0x21f821['main_arr'] = shuffle(_0x21f821, _0x21f821['main_arr'], _0x140232['ids']),
        _0x140232['deck'] && _0x21f821['main_arr'][0x0]['data']('cardfront')['reinitialize'](_0x140232['deck'][0x0]),
        shiftDeck(_0x21f821),
        endAction();
}
function cynetStorm(_0x12d1e1, _0x1fc3c1) {
    var _0x1b93bf = removeFromExtra(_0x12d1e1, _0x1fc3c1);
    _0x1b93bf['data']('face_down', ![]),
        _0x1b93bf['data']('cardfront')['reinitialize'](_0x1fc3c1['card']),
        _0x12d1e1['extra_arr'] = shuffle(_0x12d1e1, _0x12d1e1['extra_arr'], _0x1fc3c1['deck']),
        shiftExtra(_0x12d1e1),
        addExtraChildren(_0x1b93bf['data']('owner')),
        $('#field')['append'](_0x1b93bf),
        _0x1b93bf['data']('owner')['banished_arr']['unshift'](_0x1b93bf),
        TweenMax['to'](_0x1b93bf, easeSeconds, {
            'left': _0x1b93bf['data']('owner')['banishedX'],
            'top': _0x1b93bf['data']('owner')['banishedY'],
            'rotation': _0x1b93bf['data']('owner')['rot'],
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                shiftBanished(_0x1b93bf['data']('owner')),
                    endAction();
            }
        }),
        addLine(_0x1fc3c1['username'] + '\x20resolved\x20Cynet\x20Storm'),
        playSound(Banish);
}
function exchangeCards(_0x127106, _0x3bbcc4) {
    duelist && _0x3bbcc4['username'] == username && exitViewing();
    var _0x118384 = removeFromHand(_0x127106['opponent'], _0x3bbcc4);
    $('#duel\x20.cards')['append'](_0x118384),
        updateController(_0x127106, _0x118384),
        _0x127106['hand_arr']['push'](_0x118384);
    var _0x4bdc45 = 0xb4 + ABOUT_ZERO;
    (isPlayer1(_0x127106['username']) && show_cards || show_cards == 0x2) && (_0x4bdc45 = ABOUT_ZERO);
    determineHandPosition(_0x127106);
    if (!duelist)
        organizeHand(_0x127106),
            organizeHand(_0x127106['opponent']);
    else {
        if (viewing == '') {
            for (var _0x4fef09 = 0x0; _0x4fef09 < Player1()['opponent']['hand_arr']['length']; _0x4fef09++) {
                TweenMax['to'](Player1()['opponent']['hand_arr'][_0x4fef09], 0x0, {
                    'top': Player1()['opponent']['handY'],
                    'scale': 0.25,
                    'rotation': Player1()['opponent']['rot'],
                    'rotationY': 0xb4 + ABOUT_ZERO
                }),
                    Player1()['opponent']['hand_arr'][_0x4fef09]['onRotate']();
            }
            organizeHand(Player1()['opponent']);
        }
    }
    TweenMax['to'](_0x118384, easeSeconds, {
        'left': handDestination,
        'top': _0x118384['data']('controller')['handY'],
        'scale': 0.25,
        'rotation': _0x118384['data']('controller')['rot'],
        'rotationY': _0x4bdc45,
        'ease': Linear['easeNone'],
        'onComplete': function () {
            (!duelist || viewing == '') && shuffleHand(_0x127106, _0x3bbcc4),
                endAction();
        }
    });
}
function attachTopCardFromDeck2(_0x595892, _0x5354d3) {
    var _0x3f718d = getFieldCard(_0x595892['opponent'], {
        'id': _0x5354d3['start_id']
    })
        , _0x21da32 = removeFromDeck(_0x595892, {
            'id': _0x5354d3['end_id']
        });
    _0x21da32['data']('face_up', ![]),
        _0x21da32['data']('cardfront')['reinitialize'](_0x5354d3['card']),
        _0x3f718d['data']('xyz_arr')['push'](_0x21da32),
        updateXyzMaterials(_0x595892['opponent'], _0x3f718d);
}
function detachAllMaterials(_0x42f618) {
    while (array(_0x42f618['data']('xyz_arr'))['length'] > 0x0) {
        var _0x2ed5e2 = _0x42f618['data']('xyz_arr')['splice'](0x0, 0x1)[0x0];
        _0x2ed5e2['data']('owner')['grave_arr']['unshift'](_0x2ed5e2),
            _0x2ed5e2['removeClass']('xyzmaterial'),
            updateController(_0x2ed5e2['data']('owner'), _0x2ed5e2),
            $('#field')['append'](_0x2ed5e2),
            TweenMax['to'](_0x2ed5e2, easeSeconds, {
                'left': _0x2ed5e2['data']('owner')['graveX'],
                'top': _0x2ed5e2['data']('owner')['graveY'],
                'scale': 0.1485,
                'rotation': _0x2ed5e2['data']('owner')['rot'],
                'rotationY': ABOUT_ZERO,
                'onComplete': function () {
                    shiftGrave(Player1()),
                        shiftGrave(Player1()['opponent']);
                }
            });
    }
}
function getFieldCard(_0x82b585, _0x487e53) {
    var _0x2b0f72 = [_0x82b585['m1'], _0x82b585['m2'], _0x82b585['m3'], _0x82b585['m4'], _0x82b585['m5'], _0x82b585['s1'], _0x82b585['s2'], _0x82b585['s3'], _0x82b585['s4'], _0x82b585['s5'], _0x82b585['fieldSpell'], _0x82b585['pendulumLeft'], _0x82b585['pendulumRight'], linkLeft, linkRight, _0x82b585['skillCard']];
    for (var _0x8c2e31 of _0x2b0f72) {
        if (_0x8c2e31 == null)
            continue;
        if (_0x8c2e31['data']('id') == _0x487e53['id'])
            return _0x8c2e31;
    }
    return null;
}
function replaceCard(_0x5c6abf, _0x2dcec7, _0x5e7d8e) {
    var _0x3f5af0 = [_0x5c6abf['m1'], _0x5c6abf['m2'], _0x5c6abf['m3'], _0x5c6abf['m4'], _0x5c6abf['m5'], linkLeft, linkRight];
    for (var _0x456f00 of _0x3f5af0) {
        if (_0x456f00 == _0x5e7d8e)
            continue;
        var _0x5138b1 = getZoneByCard(_0x5c6abf, _0x5e7d8e);
        removeFromField(_0x5c6abf, {
            'id': _0x5e7d8e['data']('id')
        }),
            getNextMonsterZone(_0x5c6abf, _0x2dcec7, {
                'zone': _0x5138b1
            }),
            updateController(_0x5c6abf, _0x2dcec7);
        return;
    }
}
function updateXyzMaterials(_0x5b5a1c, _0x63a646, _0x17a989, _0x353caf) {
    console['log']('updateXyzMaterials');
    _0x17a989 !== ![] && (_0x17a989 = !![]);
    var _0x20f32f = easeSeconds;
    _0x353caf && (_0x20f32f = 0x0);
    var _0x25ceed = 0x0
        , _0x4963a4 = 0x0
        , _0xc5934b = 0x0
        , _0x1b8e9b = 0x0
        , _0x458f00 = 0x0
        , _0x4e2a46 = 0x0
        , _0x37f289 = _0x5b5a1c['monsterY']
        , _0x4457a2 = ![]
        , _0x576e54 = ![];
    switch (_0x63a646) {
        case _0x5b5a1c['m1']:
            _0x25ceed = _0x5b5a1c['m1xStart'],
                _0x4963a4 = _0x5b5a1c['m1xEnd'];
            break;
        case _0x5b5a1c['m2']:
            _0x25ceed = _0x5b5a1c['m2xStart'],
                _0x4963a4 = _0x5b5a1c['m2xEnd'];
            break;
        case _0x5b5a1c['m3']:
            _0x25ceed = _0x5b5a1c['m3xStart'],
                _0x4963a4 = _0x5b5a1c['m3xEnd'];
            break;
        case _0x5b5a1c['m4']:
            _0x25ceed = _0x5b5a1c['m4xStart'],
                _0x4963a4 = _0x5b5a1c['m4xEnd'];
            break;
        case _0x5b5a1c['m5']:
            _0x25ceed = _0x5b5a1c['m5xStart'],
                _0x4963a4 = _0x5b5a1c['m5xEnd'];
            break;
        case linkLeft:
            _0x576e54 = !![],
                _0x25ceed = linkLeftxStart,
                _0x4963a4 = linkLeftxEnd,
                _0x37f289 = linkY;
            _0x5b5a1c != Player1() && _0x63a646['data']('xyz_arr')['length'] > 0x0 && _0x63a646['data']('inDEF') == !![] && (_0x25ceed += 0x1b,
                _0x4963a4 += 0x1b,
                _0x4457a2 = !![]);
            break;
        case linkRight:
            _0x576e54 = !![],
                _0x25ceed = linkRightxStart,
                _0x4963a4 = linkRightxEnd,
                _0x37f289 = linkY;
            _0x5b5a1c != Player1() && _0x63a646['data']('xyz_arr')['length'] > 0x0 && _0x63a646['data']('inDEF') == !![] && (_0x25ceed += 0x1b,
                _0x4963a4 += 0x1b,
                _0x4457a2 = !![]);
            break;
    }
    _0x63a646['data']('inDEF') != 0x1 ? _0xc5934b = _0x25ceed : (_0xc5934b = (_0x4963a4 + _0x25ceed) / 0x2,
        _0x458f00 = 0x1,
        _0x63a646['data']('xyz_arr')['length'] == 0x1 && (_0x4e2a46 = 13.5,
            _0x458f00 = 0x0));
    _0x63a646['data']('xyz_arr')['length'] == 0x0 && (_0xc5934b = (_0x4963a4 + _0x25ceed) / 0x2,
        _0x4e2a46 = 0x0);
    if (_0x4457a2)
        _0xc5934b -= 0x1b;
    else
        _0x576e54 && _0x5b5a1c != Player1() && _0x63a646['data']('xyz_arr')['length'] > 0x0 && (_0xc5934b += 0x1b,
            _0x25ceed += 0x1b,
            _0x4963a4 += 0x1b);
    for (var _0x3ac321 = _0x63a646['data']('xyz_arr')['length'] - 0x1; _0x3ac321 > -0x1; _0x3ac321--) {
        var _0x4bd987 = _0x63a646['data']('xyz_arr')[_0x3ac321];
        _0x4bd987['addClass']('xyzmaterial'),
            _0x4bd987['removeClass']('target'),
            updateController(_0x5b5a1c, _0x4bd987),
            $('#field')['append'](_0x4bd987);
        var _0xeac7ff = 0x1b / (_0x63a646['data']('xyz_arr')['length'] - _0x458f00) * (_0x3ac321 + 0x1 - _0x458f00) - _0x4e2a46;
        !isPlayer1(_0x5b5a1c['username']) && (_0xeac7ff = -_0xeac7ff),
            TweenMax['to'](_0x4bd987, _0x20f32f, {
                'left': _0x25ceed + _0xeac7ff,
                'top': _0x37f289,
                'scale': 0.1485,
                'rotation': _0x5b5a1c['rot'],
                'rotationY': ABOUT_ZERO,
                'z': _0x63a646['data']('xyz_arr')['length'] - _0x3ac321,
                'ease': Linear['easeNone']
            });
    }
    $('#field')['append'](_0x63a646),
        TweenMax['set'](_0x63a646, {
            'z': _0x63a646['data']('xyz_arr')['length'] + 0x1
        }),
        TweenMax['to'](_0x63a646, _0x20f32f, {
            'left': _0xc5934b,
            'top': _0x37f289,
            'scale': 0.1485,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                _0x17a989 && (console['log']('endAction'),
                    endAction());
            }
        }),
        !_0x353caf && updateViewing();
}
function removeXyzMaterial(_0x46723f, _0x4c3d43, _0x5cf87a) {
    var _0x211f50 = [_0x46723f['m1'], _0x46723f['m2'], _0x46723f['m3'], _0x46723f['m4'], _0x46723f['m5'], linkLeft, linkRight];
    for (var _0x5866b9 = 0x0; _0x5866b9 < _0x211f50['length']; _0x5866b9++) {
        if (!_0x211f50[_0x5866b9])
            continue;
        for (var _0x534b07 = 0x0; _0x534b07 < _0x211f50[_0x5866b9]['data']('xyz_arr')['length']; _0x534b07++) {
            if (_0x211f50[_0x5866b9]['data']('xyz_arr')[_0x534b07]['data']('id') == _0x4c3d43['id']) {
                var _0x5c7388 = _0x211f50[_0x5866b9]['data']('xyz_arr')['splice'](_0x534b07, 0x1)[0x0];
                return _0x5c7388['removeClass']('xyzmaterial'),
                    _0x5c7388['detach'](),
                    _0x5cf87a && updateXyzMaterials(_0x46723f, _0x211f50[_0x5866b9]),
                    _0x5c7388;
            }
        }
    }
    return null;
}
function shuffleDeck(_0x374864, _0x3ad5c1) {
    if (_0x374864['main_arr']['length'] == 0x0)
        return;
    var _0x45651e = 0x0
        , _0x1babce = parseInt(_0x374864['main_arr'][0x0]['css']('left'))
        , _0xe740ec = setInterval(function () {
            for (var _0x4bcc62 = 0x0; _0x4bcc62 < _0x374864['main_arr']['length']; _0x4bcc62++) {
                var _0x2e2bb2 = random(0x18)
                    , _0x2b0f8b = -random(0x18);
                _0x374864['main_arr'][_0x4bcc62]['css']('left', _0x1babce + (_0x2e2bb2 + _0x2b0f8b));
            }
            _0x45651e++;
            if (_0x45651e > 0xa) {
                clearInterval(_0xe740ec),
                    updateIDs(_0x374864['main_arr'], _0x3ad5c1['deck'], _0x3ad5c1['prev']),
                    _0x374864['main_arr'] = shuffle(_0x374864, _0x374864['main_arr'], _0x3ad5c1['deck']);
                for (var _0x4bcc62 = 0x0; _0x4bcc62 < _0x374864['main_arr']['length']; _0x4bcc62++) {
                    _0x374864['main_arr'][_0x4bcc62]['data']('face_up', ![]);
                }
                _0x3ad5c1['card'] && (_0x374864['main_arr'][0x0]['data']('cardfront')['reinitialize'](_0x3ad5c1['card']),
                    _0x374864['main_arr'][0x0]['data']('face_up', !![]),
                    shiftDeck(_0x374864)),
                    shiftDeck(_0x374864),
                    endAction();
            }
        }, 0x2a);
    playSound(ShuffleSound);
}
function leftDuel(_0x3f6b15, _0x877e6c) {
    addLine(escapeHTML(_0x3f6b15['username']) + '\x20has\x20left\x20the\x20duel');
    if (_0x3f6b15 == Player1())
        $('#gone1')['show']();
    else
        _0x3f6b15 == Player2() && $('#gone2')['show']();
    $('#rematch_btn')['disable'](!![]);
}
function quitDuel(_0x4c79ad, _0x172fe7) {
    var _0x421650 = ''
        , _0x17dfc0 = 'duel';
    match && (_0x17dfc0 = 'match');
    stopCountdown();
    if (duel_active) {
        if (duelist)
            !isPlayer1(_0x172fe7['username']) ? (_0x421650 = 'Your\x20opponent\x20quit\x20the\x20duel.\x20You\x20win\x20the\x20' + _0x17dfc0 + '!',
                rated && (_0x421650 += '\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0x172fe7['player1']['points'],
                    total_wins++),
                displayBox('Opponent\x20Quit', _0x421650)) : (_0x421650 = 'Your\x20partner\x20quit\x20the\x20duel.\x20You\x20lose\x20the\x20' + _0x17dfc0 + '!',
                    displayBox('Partner\x20Quit', _0x421650));
        else {
            if (solo)
                return;
            $('#over')['show'](),
                $('#over\x20.body_txt')['html']('The\x20duel\x20has\x20ended\x20because\x20' + escapeHTML(_0x4c79ad['username']) + '\x20has\x20quit.<br><br><br><br>' + escapeHTML(_0x4c79ad['opponent']['username']) + '\x20wins\x20the\x20' + _0x17dfc0 + '!');
        }
        duelOver(_0x172fe7);
    }
    $('#rematch_btn')['disable'](!![]);
}
function acceptDraw(_0x56b23e, _0x1401a2) {
    var _0x59179a = '';
    addLine('The\x20players\x20have\x20agreed\x20on\x20a\x20draw');
    if (rated && _0x1401a2['over']) {
        if (_0x1401a2['player1']['points'] > 0x0)
            _0x59179a = '\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0x1401a2['player1']['points'] + '.';
        else
            _0x1401a2['player1']['points'] < 0x0 ? _0x59179a = '\x20Your\x20rating\x20has\x20decreased\x20by\x20' + -_0x1401a2['player1']['points'] + '.' : _0x59179a = '\x20Your\x20rating\x20has\x20remained\x20unchanged.';
    }
    duelist ? (!isPlayer1(_0x1401a2['username']) ? displayBox('Draw\x20Accepted', 'Your\x20opponent\x20accepted\x20your\x20draw\x20offer.' + _0x59179a) : displayBox('Draw\x20Accepted', 'You\x20accepted\x20your\x20opponent\x27s\x20draw\x20offer.' + _0x59179a),
        $('#draw_btn')['val']('Offer\x20Draw')) : ($('#over')['show'](),
            $('#over\x20.body_txt')['text']('The\x20players\x20have\x20agreed\x20on\x20a\x20draw.')),
        duelOver(_0x1401a2);
}
function admittedDefeat(_0x28cd67, _0x4ff590) {
    awaiting_defeat = ![];
    var _0x18c964 = ''
        , _0x1c7c73 = 'duel';
    match && (_0x1c7c73 = 'match');
    addLine(escapeHTML(_0x28cd67['username']) + '\x20admitted\x20defeat');
    if (_0x4ff590['over']) {
        if (duelist) {
            if (isPlayer2(_0x4ff590['username']))
                _0x18c964 = 'Your\x20opponent\x20admitted\x20defeat.\x20You\x20win\x20the\x20' + _0x1c7c73 + '!',
                    rated && (_0x18c964 += '\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0x4ff590['player1']['points'],
                        total_wins++),
                    displayBox('You\x20Win!', _0x18c964);
            else
                _0x4ff590['username'] == username ? (_0x18c964 = 'You\x20admitted\x20defeat.\x20You\x20lose\x20the\x20' + _0x1c7c73 + '!',
                    rated && (_0x18c964 += '\x20Your\x20rating\x20has\x20decreased\x20by\x20' + -_0x4ff590['player1']['points']),
                    displayBox('You\x20Lose!', _0x18c964)) : (_0x18c964 = 'Your\x20partner\x20admitted\x20defeat.\x20You\x20lose\x20the\x20' + _0x1c7c73 + '!',
                        displayBox('You\x20Lose!', _0x18c964));
        } else {
            var _0x52e099 = 'The\x20duel\x20has\x20ended\x20because\x20' + escapeHTML(_0x28cd67['username']) + '\x20admitted\x20defeat.';
            _0x4ff590['over'] && (_0x52e099 += '<br><br><br><br>' + escapeHTML(_0x28cd67['opponent']['username']),
                _0x28cd67['opponent']['partner'] ? _0x52e099 += '\x20&\x20' + escapeHTML(_0x28cd67['opponent']['partner']['username']) + '\x20win\x20the\x20' + _0x1c7c73 + '!' : _0x52e099 += '\x20wins\x20the\x20' + _0x1c7c73 + '!'),
                $('#over\x20.body_txt')['html'](_0x52e099),
                $('#over')['show']();
        }
    }
    duelOver(_0x4ff590);
}
function gamelossed(_0x29f4af, _0x2e6c92) {
    hideDim();
    if (_0x2e6c92['id']) {
        if (_0x2e6c92['id'] != duelId)
            return;
    }
    var _0x4c4b30 = ''
        , _0x377f59 = 'duel';
    match && (_0x377f59 = 'match');
    if (duelist)
        isPlayer1(_0x29f4af['username']) ? (_0x4c4b30 = 'A\x20judge\x20gave\x20you\x20a\x20' + _0x2e6c92['type'] + '\x20loss.',
            rated && _0x2e6c92['over'] && (_0x4c4b30 += '\x20You\x20lose\x20the\x20' + _0x377f59 + '!\x20Your\x20rating\x20has\x20decreased\x20by\x20' + -_0x2e6c92['player1']['points']),
            lastJudge = '') : (_0x4c4b30 = 'A\x20judge\x20gave\x20your\x20opponent\x20a\x20' + _0x2e6c92['type'] + '\x20loss.',
                rated && _0x2e6c92['over'] && (_0x4c4b30 += '\x20You\x20win\x20the\x20' + _0x377f59 + '!\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0x2e6c92['player1']['points'],
                    total_wins++)),
            messageE(_0x4c4b30);
    else {
        var _0x442008 = 'The\x20duel\x20has\x20ended\x20because\x20a\x20judge\x20gave\x20' + escapeHTML(_0x29f4af['username']) + '\x20a\x20' + _0x2e6c92['type'] + '\x20loss.';
        _0x2e6c92['over'] && (_0x442008 += '<br><br><br><br>' + escapeHTML(_0x29f4af['opponent']['username']),
            _0x29f4af['opponent']['partner'] ? _0x442008 += '\x20&\x20' + escapeHTML(_0x29f4af['opponent']['partner']['username']) + '\x20win\x20the\x20' + _0x2e6c92['type'] + '!' : _0x442008 += '\x20wins\x20the\x20' + _0x2e6c92['type'] + '!'),
            $('#over\x20.body_txt')['html'](_0x442008),
            $('#over')['show']();
    }
    addLine('A\x20judge\x20gave\x20' + _0x29f4af['username'] + '\x20a\x20' + _0x2e6c92['type'] + '\x20loss'),
        duelOver(_0x2e6c92);
}
function loss(_0x7cc7af, _0x4969d5) {
    hideDim();
    var _0x545e2a = '';
    if (duelist)
        isPlayer1(_0x7cc7af['username']) ? _0x545e2a = 'You\x20received\x20a\x20' + _0x4969d5['type'] + '\x20loss\x20for\x20' + _0x4969d5['reason'] : _0x545e2a = 'Your\x20opponent\x20received\x20a\x20' + _0x4969d5['type'] + '\x20loss\x20for\x20' + _0x4969d5['reason'],
            rated && (_0x7cc7af['username'] == player1['username'] ? _0x545e2a += '\x20Your\x20rating\x20has\x20decreased\x20by\x20' + -_0x4969d5['player1']['points'] + '.' : _0x545e2a += '\x20Your\x20rating\x20has\x20increased\x20by\x20' + _0x4969d5['player1']['points'] + '.'),
            messageE(_0x545e2a);
    else {
        var _0x3fa0d1 = 'The\x20duel\x20has\x20ended\x20because\x20' + escapeHTML(_0x7cc7af['username']) + '\x20received\x20a\x20' + _0x4969d5['type'] + '\x20loss\x20for\x20' + _0x4969d5['reason'] + '.';
        _0x4969d5['over'] && (_0x3fa0d1 += '<br><br><br><br>' + escapeHTML(_0x7cc7af['opponent']['username']),
            _0x7cc7af['opponent']['partner'] ? _0x3fa0d1 += '\x20&\x20' + escapeHTML(_0x7cc7af['opponent']['partner']['username']) + '\x20win\x20the\x20' + _0x4969d5['type'] + '!' : _0x3fa0d1 += '\x20wins\x20the\x20' + _0x4969d5['type'] + '!'),
            $('#over\x20.body_txt')['html'](_0x3fa0d1),
            $('#over')['show']();
    }
    addLine(_0x7cc7af['username'] + '\x20received\x20a\x20' + _0x4969d5['type'] + '\x20loss\x20for\x20' + _0x4969d5['reason']),
        duelOver(_0x4969d5);
}
function gameCanceled(_0xaecb4c) {
    hideDim();
    if (_0xaecb4c['id'] != duelId)
        return;
    var _0x286d7d = 'Game\x20Canceled';
    _0xaecb4c['type'] == 'match' && (_0x286d7d = 'Match\x20Canceled');
    var _0x1d5eea = 'The\x20' + _0xaecb4c['type'] + '\x20has\x20been\x20canceled\x20by\x20a\x20judge.';
    duelist ? (rated && _0xaecb4c['over'] && (_0x1d5eea += '\x20Ratings\x20and\x20experiences\x20are\x20unaffected.'),
        displayBox(_0x286d7d, _0x1d5eea),
        playSound(gameLossSound)) : ($('#over\x20.body_txt')['text']('The\x20' + _0xaecb4c['type'] + '\x20has\x20been\x20canceled\x20by\x20a\x20judge.'),
            $('#over')['show']()),
        addLine('The\x20' + _0xaecb4c['type'] + '\x20has\x20been\x20canceled\x20by\x20a\x20judge'),
        duelOver(_0xaecb4c),
        duelist ? ($('#draw_btn')['val']('Offer\x20Draw'),
            $('#draw_btn')['disable'](!![])) : $('#mulligan_btn')['hide']();
}
function duelOver(_0x12727c) {
    _0x12727c['username'] == username ? playSound(gameLossSound) : playSound(gameWinSound),
        switched && switchDuelists(_0x12727c, 'player1', 'player2'),
        $('#avatar1\x20.rating_txt')['text'](_0x12727c['player1']['rating'] + '/' + _0x12727c['player1']['experience']),
        $('#avatar2\x20.rating_txt')['text'](_0x12727c['player2']['rating'] + '/' + _0x12727c['player2']['experience']),
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
function newCard(_0x2830f6, _0x2e66b8) {
    var _0x21aff7 = newDuelCard(_0x2830f6);
    _0x2830f6 == player1 && _0x21aff7['onRotate'](!![]);
    _0x21aff7['data']('id', _0x2e66b8['id']);
    _0x2e66b8['card'] && _0x21aff7['data']('cardfront')['initializeFromData'](_0x2e66b8['card']);
    _0x2830f6['main_arr']['push'](_0x21aff7),
        _0x2830f6['all_cards_arr']['push'](_0x21aff7),
        shiftDeck(_0x2830f6);
    switch (_0x2e66b8['zone']) {
        case 'Field\x20Spell':
            activateFieldSpell(_0x2830f6, _0x2e66b8);
            break;
        case 'S-2':
            _0x2e66b8['face_down'] ? setST(_0x2830f6, _0x2e66b8) : activateST(_0x2830f6, _0x2e66b8);
            break;
        default:
            placeSkillCard(_0x2830f6, _0x2e66b8);
            break;
    }
    loadSleeves(_0x2830f6);
    if (_0x2e66b8['back']) {
        var _0x1cb916 = getSkillBack(SKILL_BACKS_START + _0x2e66b8['back'] + '.jpg', _0x2e66b8['activation']);
        _0x21aff7['find']('.cardback')['append'](_0x1cb916),
            _0x21aff7['data']('isSkill', !![]);
    }
}
function getSkillBack(_0x1b2a2b, _0x54c020) {
    var _0x133130 = $('<div\x20class=\x22skillback\x22></div>')
        , _0x1ad1f4 = $('<img\x20src=\x22' + _0x1b2a2b + '\x22\x20width=\x22400\x22\x20height=\x22580\x22\x20/>')
        , _0x190926 = $('<span\x20class=\x22skill_txt\x22></span>');
    return _0x190926['text'](_0x54c020),
        _0x133130['append'](_0x1ad1f4),
        _0x133130['append'](_0x190926),
        _0x133130;
}
function placeSkillCard(_0x2baf56, _0x1d869b) {
    var _0x347f40 = [_0x2baf56['skillCardX'], _0x2baf56['skillCardY']]
        , _0xc0ca33 = removeCard(_0x2baf56, _0x1d869b);
    _0xc0ca33['data']('cardfront')['reinitialize'](_0x1d869b['card']),
        _0xc0ca33['data']('face_down', !![]),
        _0x2baf56['skillCard'] = _0xc0ca33;
    tag_duel && (_0x2baf56['partner']['skillCard'] = _0xc0ca33);
    var _0x4fb842 = 0xb4 + ABOUT_ZERO;
    _0x1d869b['face_up'] && (_0xc0ca33['data']('face_down', ![]),
        _0x4fb842 = ABOUT_ZERO),
        $('#field')['append'](_0xc0ca33),
        TweenMax['to'](_0xc0ca33, easeSeconds, {
            'left': _0x347f40[0x0],
            'top': _0x347f40[0x1],
            'scale': 0.1485,
            'rotation': _0x2baf56['rot'],
            'rotationY': _0x4fb842,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        });
}
function activateSkill(_0x2dde3b, _0x271e77) {
    var _0x20e105 = _0x2dde3b['skillCard'];
    _0x20e105['data']('cardfront')['reinitialize'](_0x271e77['card']),
        _0x20e105['data']('face_down', ![]),
        $('#field')['append'](_0x20e105),
        TweenMax['to'](_0x20e105, easeSeconds, {
            'rotationY': ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        }),
        playSound(Activate);
}
function setSkill(_0x1620d6, _0x37bc56) {
    var _0x53708b = _0x1620d6['skillCard'];
    _0x53708b['data']('cardfront')['reinitialize'](_0x37bc56['card']),
        _0x53708b['data']('face_down', !![]),
        $('#field')['append'](_0x53708b),
        TweenMax['to'](_0x53708b, easeSeconds, {
            'rotationY': 0xb4 + ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                endAction();
            }
        }),
        playSound(Flip);
}
function addProxy(_0x263ee6, _0x1ace58) {
    console['log']('addProxy');
    var _0x2674b6 = newDuelCard();
    _0x263ee6 == player1 && _0x2674b6['onRotate'](!![]),
        _0x2674b6['data']('controller', _0x263ee6),
        _0x2674b6['data']('face_down', !![]),
        updateController(_0x263ee6, _0x2674b6),
        _0x2674b6['data']('owner', _0x263ee6),
        _0x2674b6['data']('id', _0x1ace58['id']),
        _0x1ace58['card'] && _0x2674b6['data']('cardfront')['initializeFromData'](_0x1ace58['card']),
        _0x263ee6['extra_arr']['push'](_0x2674b6),
        _0x263ee6['all_cards_arr']['push'](_0x2674b6),
        shiftExtra(_0x263ee6),
        loadSleeves(_0x263ee6),
        endAction();
}
function declare(_0x207f21, _0x5b7146) {
    var _0x446662 = createSVGAnimation(spark, 'spark', 0x6e, 0x6e, 0x18, spark['json'])
        , _0x141483 = getDuelCard(_0x5b7146['id']);
    _0x141483['data']('cardfront')['reinitialize'](_0x5b7146['card']);
    var _0x43d5f3 = _0x141483['parent']()[0x0] == $('#view\x20>\x20.content')[0x0]
        , _0x3a16f9 = null
        , _0x4af8d = null;
    _0x43d5f3 ? $('#spark')['css']('z-index', 0x10) : (_0x141483['data']('controller')['grave_arr']['indexOf'](_0x141483) >= 0x0 && (_0x3a16f9 = _0x141483['data']('controller')['grave_arr']['indexOf'](_0x141483),
        _0x141483['data']('controller')['grave_arr']['splice'](_0x3a16f9, 0x1),
        _0x141483['data']('controller')['grave_arr']['unshift'](_0x141483),
        shiftGrave(_0x141483['data']('controller'))),
        _0x141483['data']('controller')['banished_arr']['indexOf'](_0x141483) >= 0x0 && (_0x4af8d = _0x141483['data']('controller')['banished_arr']['indexOf'](_0x141483),
            _0x141483['data']('controller')['banished_arr']['splice'](_0x4af8d, 0x1),
            _0x141483['data']('controller')['banished_arr']['unshift'](_0x141483),
            shiftBanished(_0x141483['data']('controller'))));
    _0x141483['data']('cardfront')['data']('name')['includes']('Tearlament') && (allowToBottom = !![]);
    var _0x43146f = 0x0
        , _0x1235d0 = $('#' + _0x446662['mc']['id']);
    _0x141483['data']('controller')['hand_arr']['includes'](_0x141483) && !(duelist && isPlayer1(_0x207f21['username'])) && ($('#duel\x20.cards')['append'](_0x141483),
        TweenMax['to'](_0x141483, 0.5, {
            'rotationY': ABOUT_ZERO
        }),
        _0x43146f = 0.4);
    TweenMax['set'](_0x1235d0, {
        'left': parseInt(_0x141483['css']('left')),
        'top': parseInt(_0x141483['css']('top'))
    });
    _0x43d5f3 && TweenMax['set'](_0x1235d0, {
        'left': parseInt(_0x141483['css']('left')) + 0xdb + 0x5,
        'top': parseInt(_0x141483['css']('top')) + 0x3a + 0x20 - $('#view\x20>\x20.content')['scrollTop']()
    });
    setTimeout(function () {
        TweenMax['to'](_0x1235d0, 0.95, {
            'onComplete': function () {
                _0x446662['stop'](),
                    _0x1235d0['remove']();
            }
        }),
            _0x446662['play'](),
            playSound(Declare),
            _0x43146f = 0.2;
        if (_0x141483['data']('controller')['hand_arr']['includes'](_0x141483)) {
            _0x43146f = 0.4,
                previewCard(_0x141483);
            var _0x47cfda = 0xb4 + ABOUT_ZERO;
            (show_cards && _0x207f21 == Player1() || show_cards == 0x2) && (_0x47cfda = ABOUT_ZERO),
                TweenMax['to'](_0x141483, 0.5, {
                    'rotationY': _0x47cfda,
                    'delay': 0.6
                });
        }
        (_0x3a16f9 || _0x4af8d) && (_0x43146f = 0.6),
            setTimeout(function () {
                _0x3a16f9 != null && (_0x141483['data']('controller')['grave_arr']['splice'](0x0, 0x1),
                    _0x141483['data']('controller')['grave_arr']['splice'](_0x3a16f9, 0x0, _0x141483),
                    shiftGrave(_0x141483['data']('controller'))),
                    _0x4af8d != null && (_0x141483['data']('controller')['banished_arr']['splice'](0x0, 0x1),
                        _0x141483['data']('controller')['banished_arr']['splice'](_0x4af8d, 0x0, _0x141483),
                        shiftBanished(_0x141483['data']('controller'))),
                    $('#spark')['css']('z-index', 0x0),
                    setTimeout(function () {
                        endAction();
                    }, automatic ? 0x12c : 0x0);
            }, 0x12c + _0x43146f * 1.5 * 0x3e8);
    }, _0x43146f * 0x3e8);
    if (_0x5b7146['name'])
        addLine(_0x5b7146['username'] + '\x20declared\x20effect\x20of\x20' + quote(_0x5b7146['name']));
    else {
        if (_0x5b7146['log']) {
            var _0x2cfabd = _0x5b7146['username'] + '\x20' + _0x5b7146['log']['public_log']['replace']('Declared', 'declared');
            _0x2cfabd['indexOf']('\x20in\x20') >= 0x0 && (_0x2cfabd = _0x2cfabd['substring'](0x0, _0x2cfabd['indexOf']('\x20in\x20'))),
                addLine(_0x2cfabd);
        }
    }
}
function stayRevealed(_0x4a8c0c, _0x1f05c2) {
    var _0x3dda13 = 0x0
        , _0x25a7ee = getDuelCard(_0x1f05c2['id']);
    _0x25a7ee['data']('face_up', !![]),
        _0x25a7ee['data']('cardfront')['reinitialize'](_0x1f05c2['card']),
        $('#duel\x20.cards')['append'](_0x25a7ee),
        restoreHandCards(),
        TweenMax['fromTo'](_0x25a7ee, 0.5, {
            'rotationY': 0xb4
        }, {
            'rotationY': ABOUT_ZERO
        }),
        setTimeout(function () {
            organizeHand(_0x25a7ee['data']('controller'), ![], !![]);
        }, 0xfa),
        setTimeout(function () {
            previewCard(_0x25a7ee),
                setTimeout(function () {
                    endAction();
                }, 0x12c + _0x3dda13 * 1.5 * 0x3e8);
        }, _0x3dda13 * 0x3e8);
}
function stopRevealing(_0x451270, _0x21c725) {
    var _0x379317 = getDuelCard(_0x21c725['id']);
    _0x379317['data']('face_up', ![]),
        _0x379317['data']('cardfront')['reinitialize'](_0x21c725['card']);
    var _0x4ee206 = 0.4
        , _0x3d2cce = 0xb4 + ABOUT_ZERO;
    (show_cards && _0x451270 == Player1() || show_cards == 0x2) && (_0x3d2cce = ABOUT_ZERO),
        restoreHandCards(),
        TweenMax['to'](_0x379317, 0.5, {
            'rotationY': _0x3d2cce
        }),
        setTimeout(function () {
            endAction();
        }, 0x12c + _0x4ee206 * 1.5 * 0x3e8);
}
function allGood(_0x394e89, _0x107f82) {
    _0x394e89['stopTyping'](),
        _0x394e89['thinking']['hide'](),
        TweenMax['killTweensOf'](_0x394e89['all_good']),
        _0x394e89['all_good']['show'](),
        _0x394e89['all_good']['find']('span')['hide'](),
        _0x394e89['all_good']['css']('left', 0x30),
        _0x394e89['all_good']['css']('top', 0x1a),
        TweenMax['fromTo'](_0x394e89['all_good'], 0x2, {
            'scale': 0x1,
            'alpha': 0x1
        }, {
            'scale': 1.3,
            'ease': Elastic['easeOut']['config'](0x3, 0.2)
        }),
        _0x107f82['long'] ? (_0x394e89['still_good'] = !![],
            TweenMax['to'](_0x394e89['all_good'], 0x1, {
                'scale': 0.72,
                'left': 0x53,
                'top': 0x3f,
                'delay': 0.9,
                'ease': Circ['easeInOut'],
                'onComplete': function () {
                    stillGood(_0x394e89, !![]);
                }
            })) : TweenMax['fromTo'](_0x394e89['all_good'], 0x1, {
                'alpha': 0x1
            }, {
                'alpha': 0x0,
                'delay': 0x1,
                'onComplete': function () {
                    _0x394e89['all_good']['hide']();
                }
            }),
        setTimeout(function () {
            endAction();
        }, 0x96),
        playSound(Ok);
}
function stillGood(_0x479008, _0x379b7c) {
    if (!$('#duel')['is'](':visible'))
        return;
    if (!_0x479008['still_good'])
        return;
    if (!_0x379b7c && !_0x479008['all_good']['is'](':visible'))
        return;
    _0x479008['all_good']['show'](),
        _0x479008['all_good']['find']('span')['show'](),
        _0x479008['all_good']['css']('opacity', 0x1),
        TweenMax['set'](_0x479008['all_good'], {
            'scale': 0.72
        }),
        TweenMax['set'](_0x479008['all_good'], {
            'left': 0x53,
            'top': 0x3f
        }),
        TweenMax['fromTo'](_0x479008['all_good'], 1.6, {
            'scale': 0.72
        }, {
            'scale': 0.8,
            'ease': Expo['easeInOut'],
            'onComplete': function () {
                TweenMax['fromTo'](_0x479008['all_good'], 1.6, {
                    'scale': 0.8
                }, {
                    'scale': 0.72,
                    'ease': Expo['easeInOut'],
                    'onComplete': function () {
                        stillGood(_0x479008);
                    }
                });
            }
        });
}
function stopGood(_0x21db0a) {
    _0x21db0a['still_good'] = ![],
        TweenMax['killTweensOf'](_0x21db0a['all_good']),
        TweenMax['set'](_0x21db0a['all_good'], {
            'scale': 0.8
        }),
        TweenMax['to'](_0x21db0a['all_good'], 0.2, {
            'scale': 0x1,
            'ease': Expo['easeInOut'],
            'onComplete': function () {
                TweenMax['to'](_0x21db0a['all_good'], 0.3, {
                    'scale': 0.3,
                    'alpha': 0x0,
                    'ease': Expo['easeInOut']
                }),
                    endAction();
            }
        });
}
function typingE(_0x31fa47) {
    _0x31fa47['typingE'](),
        TweenMax['fromTo'](_0x31fa47['bubbles'], 0.25, {
            'scale': 0.45,
            'alpha': 0.75
        }, {
            'scale': 0x1,
            'alpha': 0x1
        });
}
function thinking(_0x3a7ec0, _0x1b36d4) {
    _0x3a7ec0['still_good'] = ![],
        _0x3a7ec0['all_good']['hide'](),
        TweenMax['killTweensOf'](_0x3a7ec0['thinking']),
        _0x3a7ec0['thinking']['show'](),
        TweenMax['fromTo'](_0x3a7ec0['thinking'], 0x1, {
            'scale': 0x1,
            'alpha': 0x1
        }, {
            'scale': 1.3,
            'ease': Elastic['easeOut']['config'](1.2, 0.3)
        }),
        setTimeout(function () { }, 0x96);
}
function initalizeCards(_0x3ea235, _0x12bce9) {
    for (var _0x3aea5e = 0x0; _0x3aea5e < _0x12bce9['deck']['length']; _0x3aea5e++) {
        for (var _0x4a3034 = 0x0; _0x4a3034 < player1['all_cards_arr']['length']; _0x4a3034++) {
            player1['all_cards_arr'][_0x4a3034]['data']('id') == _0x12bce9['deck'][_0x3aea5e]['id'] && (!player1['all_cards_arr'][_0x4a3034]['data']('cardfront')['initialized'] && player1['all_cards_arr'][_0x4a3034]['data']('cardfront')['initializeFromData'](_0x12bce9['deck'][_0x3aea5e]['data']));
        }
        for (_0x4a3034 = 0x0; _0x4a3034 < player2['all_cards_arr']['length']; _0x4a3034++) {
            player2['all_cards_arr'][_0x4a3034]['data']('id') == _0x12bce9['deck'][_0x3aea5e]['id'] && (!player2['all_cards_arr'][_0x4a3034]['data']('cardfront')['initialized'] && player2['all_cards_arr'][_0x4a3034]['data']('cardfront')['initializeFromData'](_0x12bce9['deck'][_0x3aea5e]['data']));
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
        for (var _0x377d8d = 0x0; _0x377d8d < turn_player['all_cards_arr']['length']; _0x377d8d++) {
            updateOwner(turn_player, turn_player['all_cards_arr'][_0x377d8d]);
        }
        for (var _0x377d8d = 0x0; _0x377d8d < turn_player['opponent']['all_cards_arr']['length']; _0x377d8d++) {
            turn_player['opponent']['all_cards_arr'][_0x377d8d]['data']('controller') == turn_player['partner'] && updateController(turn_player, turn_player['opponent']['all_cards_arr'][_0x377d8d]);
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
                'onComplete': function () {
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
function endTurn(_0x166f7b) {
    duelist && _0x166f7b['username'] == username && ($('#dp')['off']('click', enterDPE),
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
function changeLight(_0x1a4d6e) {
    turn_player == Player1() ? _0x1a4d6e['find']('.phase_red')['show']() : _0x1a4d6e['find']('.phase_blue')['show'](),
        _0x1a4d6e['find']('.white_txt')['show'](),
        _0x1a4d6e['addClass']('active'),
        !duelist && $('#turn')['show'](),
        currentPhase != 'DP' && playSound(Switch);
}
function updateLifePoints(_0x224b31, _0x57acb5) {
    var _0x26630b = 0x0;
    prev_life = _0x224b31['lifepoints'],
        life_amount = _0x57acb5['amount'],
        _0x224b31['lifepoints'] = _0x57acb5['life'];
    _0x224b31['lifepoints'] < 0x0 && (_0x224b31['lifepoints'] = 0x0);
    _0x26630b = 0x9a - _0x224b31['lifepoints'] / lifepointMax * 0x9a;
    _0x224b31['lifepoints'] >= lifepointMax && (_0x26630b = 0x0);
    var _0x3bb62b = '\x20lost\x20'
        , _0x213ccb = -_0x57acb5['amount'];
    _0x57acb5['amount'] > 0x0 && (_0x3bb62b = '\x20gained\x20',
        _0x213ccb = _0x57acb5['amount']);
    var _0x5df4ff, _0xbafb0d = isPlayer2(_0x224b31['username']) ? $('#lifepoints2') : $('#lifepoints1'), _0x1a6d7a = TweenMax['to'](_0xbafb0d['find']('.black_bar'), 0x1, {
        'width': _0x26630b,
        'ease': Expo['easeOut'],
        'onComplete': function () {
            clearInterval(_0x5df4ff),
                _0xbafb0d['find']('.life_txt')['text'](_0x224b31['lifepoints']),
                addLine(escapeHTML(_0x224b31['username']) + _0x3bb62b + _0x213ccb + '\x20LP'),
                _0x224b31['lifepoints'] <= 0x0 && playSound(LifePointsEnd),
                endAction();
        }
    });
    _0x5df4ff = setInterval(function () {
        _0xbafb0d['find']('.life_txt')['text'](prev_life + Math['floor'](_0x1a6d7a['progress']() * life_amount));
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
function _0x12a9() {
    var _0x535a2c = ['5NKMOwi', '176154jZYEZe', '577554aLTdrc', '3537DUAiiJ', '349016PzTghl', '2721648fwrDXS', '598287umPRlF', '481958OERxDh', '34480raaLlV', '28JcmYVR'];
    _0x12a9 = function () {
        return _0x535a2c;
    }
        ;
    return _0x12a9();
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
function setPartner(_0x58f2e1, _0x47641a) {
    _0x58f2e1['grave_arr'] = _0x47641a['grave_arr'],
        _0x58f2e1['banished_arr'] = _0x47641a['banished_arr'],
        _0x58f2e1['field_arr'] = _0x47641a['field_arr'],
        _0x47641a['all_cards_arr'] = _0x47641a['all_cards_arr']['concat'](_0x58f2e1['all_cards_arr']),
        _0x58f2e1['all_cards_arr'] = _0x47641a['all_cards_arr'],
        _0x58f2e1['m1_txt'] = _0x47641a['m1_txt'],
        _0x58f2e1['m2_txt'] = _0x47641a['m2_txt'],
        _0x58f2e1['m3_txt'] = _0x47641a['m3_txt'],
        _0x58f2e1['m4_txt'] = _0x47641a['m4_txt'],
        _0x58f2e1['m5_txt'] = _0x47641a['m5_txt'];
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
function isPlayer1(_0x25fd54) {
    if (_0x25fd54 == player1['username'] || tag_duel && _0x25fd54 == player3['username'])
        return !![];
    return ![];
}
function isPlayer2(_0x16cf26) {
    if (_0x16cf26 == player2['username'] || tag_duel && _0x16cf26 == player4['username'])
        return !![];
    return ![];
}
function Duelist() {
    if (duelist && (player1 == turn_player || player1 == turn_player['opponent']))
        return !![];
    return ![];
}
function getElement(_0x38e3fb) {
    return document['getElementById'](_0x38e3fb);
}
function drawDice(_0x533faa, _0x18943e) {
    var _0x408f5d = document['createElement']('canvas');
    _0x408f5d['id'] = 'mycanvas' + _0x533faa,
        _0x408f5d['width'] = 0x64,
        _0x408f5d['height'] = 0x64,
        getElement('side' + _0x533faa)['appendChild'](_0x408f5d);
    var _0x53bbab = getElement('mycanvas' + _0x533faa)['getContext']('2d');
    _0x53bbab['strokeStyle'] = '#000000',
        _0x53bbab['fillStyle'] = '#000000',
        0x1 != _0x18943e && 0x3 != _0x18943e && 0x5 != _0x18943e || (_0x53bbab['beginPath'](),
            _0x53bbab['arc'](0x32, 0x32, 0x8, 0x0, 0x2 * Math['PI']),
            _0x53bbab['stroke'](),
            _0x53bbab['fill']()),
        0x2 != _0x18943e && 0x3 != _0x18943e && 0x4 != _0x18943e && 0x5 != _0x18943e && 0x6 != _0x18943e || (_0x53bbab['beginPath'](),
            _0x53bbab['arc'](0x19, 0x4b, 0x8, 0x0, 0x2 * Math['PI']),
            _0x53bbab['stroke'](),
            _0x53bbab['fill'](),
            _0x53bbab['beginPath'](),
            _0x53bbab['arc'](0x4b, 0x19, 0x8, 0x0, 0x2 * Math['PI']),
            _0x53bbab['stroke'](),
            _0x53bbab['fill']()),
        0x4 != _0x18943e && 0x5 != _0x18943e && 0x6 != _0x18943e || (_0x53bbab['beginPath'](),
            _0x53bbab['arc'](0x19, 0x19, 0x8, 0x0, 0x2 * Math['PI']),
            _0x53bbab['stroke'](),
            _0x53bbab['fill'](),
            _0x53bbab['beginPath'](),
            _0x53bbab['arc'](0x4b, 0x4b, 0x8, 0x0, 0x2 * Math['PI']),
            _0x53bbab['stroke'](),
            _0x53bbab['fill']()),
        0x6 == _0x18943e && (_0x53bbab['beginPath'](),
            _0x53bbab['arc'](0x19, 0x32, 0x8, 0x0, 0x2 * Math['PI']),
            _0x53bbab['stroke'](),
            _0x53bbab['fill'](),
            _0x53bbab['beginPath'](),
            _0x53bbab['arc'](0x4b, 0x32, 0x8, 0x0, 0x2 * Math['PI']),
            _0x53bbab['stroke'](),
            _0x53bbab['fill']());
}
function shuffleDice(_0x2ef82e) {
    var _0x3cf8c9 = 0x3, _0x2e410d, _0x28dcb5, _0x37887d = _0x2ef82e['length'];
    if (_0x37887d) {
        for (; --_0x37887d;)
            _0x2e410d = _0x2ef82e[_0x28dcb5 = Math['floor'](Math['random']() * (_0x37887d + 0x1))],
                _0x2ef82e[_0x28dcb5] = _0x2ef82e[_0x37887d],
                _0x2ef82e[_0x37887d] = _0x2e410d;
    }
    return _0x2ef82e;
}
function dieRoll(_0x21812b, _0xb2115) {
    $('#die')['show'](),
        removeClass(getElement('die'), 'reset');
    var _0x6cee51 = 0x6;
    ((_0x6cee51 = isNaN(parseInt(_0x6cee51)) ? 0x6 : parseInt(_0x6cee51)) < 0x2 || _0x6cee51 > 0x64) && (_0x6cee51 = 0x6);
    for (var _0x27aed8 = [], _0x2c9662 = 0x0; _0x2c9662 < _0x6cee51; ++_0x2c9662)
        _0x27aed8[_0x2c9662] = _0x2c9662 + 0x1;
    var _0x50884f = shuffleDice(_0x27aed8);
    while (_0x50884f[0x0] != _0xb2115['result']) {
        _0x50884f = shuffleDice(_0x27aed8);
    }
    ; addClass(getElement('die'), 'activate'),
        addClass(getElement('die'), 'opacity'),
        setTimeout(function () {
            for (var _0xf8900c = 0x1; _0xf8900c < 0x7; ++_0xf8900c)
                void 0x0 !== _0x27aed8[_0xf8900c - 0x1] ? _0x6cee51 > 0x6 ? (getElement('side' + _0xf8900c)['innerHTML'] = '<h3>' + _0x27aed8[_0xf8900c - 0x1] + '</h3>',
                    addClass(getElement('side' + _0xf8900c), 'activate')) : (getElement('side' + _0xf8900c)['innerHTML'] = '',
                        addClass(getElement('side' + _0xf8900c), 'activate'),
                        drawDice(_0xf8900c, _0x27aed8[_0xf8900c - 0x1])) : (getElement('side' + _0xf8900c)['innerHTML'] = '',
                            addClass(getElement('side' + _0xf8900c), 'activate'));
        }, 0x3e8),
        setTimeout(function () {
            removeClass(getElement('die'), 'activate'),
                addClass(getElement('die'), 'reset'),
                addLine(escapeHTML(_0x21812b['username']) + '\x27s\x20die\x20landed\x20on\x20' + _0xb2115['result']),
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
function coinFlip(_0x51073f, _0x27ba72) {
    var _0x127a70 = 0x2e9
        , _0x52e89d = 0x17c
        , _0x2bfde8 = 0x1d2
        , _0x4aab7f = 0x0
        , _0x40fb6c = 0x276
        , _0x4dc482 = _0x127a70 - _0x52e89d / 0x2;
    _0x27ba72['result'] == 'tails' && (_0x4aab7f = 0xb4,
        _0x40fb6c = 0x32a),
        isPlayer2(_0x51073f['username']) && (_0x127a70 = -0x6e,
            _0x52e89d = 0x65,
            _0x4dc482 = _0x127a70 + _0x52e89d / 0x2),
        console['log']('mid\x20=\x20' + _0x4dc482),
        $('#coin')['show'](),
        TweenMax['fromTo']($('#coin'), 1.3, {
            'left': _0x2bfde8,
            'top': _0x127a70,
            'scale': 0.5
        }, {
            'left': 0x208,
            'top': _0x4dc482,
            'scale': 0x1,
            'ease': Linear['easeNone']
        }),
        TweenMax['fromTo']($('#coin\x20img'), 1.3, {
            'rotationX': _0x4aab7f
        }, {
            'rotationX': _0x40fb6c,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                TweenMax['fromTo']($('#coin'), 1.3, {
                    'left': 0x208,
                    'top': _0x4dc482,
                    'scale': 0x1
                }, {
                    'left': _0x2bfde8,
                    'top': _0x52e89d,
                    'scale': 0.5,
                    'ease': Linear['easeNone']
                }),
                    TweenMax['fromTo']($('#coin\x20img'), 1.3, {
                        'rotationX': _0x40fb6c
                    }, {
                        'rotationX': _0x4aab7f,
                        'ease': Linear['easeNone'],
                        'onComplete': function () {
                            addLine(escapeHTML(_0x51073f['username']) + '\x27s\x20coin\x20landed\x20on\x20' + _0x27ba72['result']),
                                TweenMax['to']($('#coin\x20img'), 0.7, {
                                    'onComplete': function () {
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
    watchers_data['sort'](function (_0x4e5a21, _0x3bae53) {
        if (~~_0x4e5a21['donator'] > ~~_0x3bae53['donator'])
            return -0x1;
        if (~~_0x4e5a21['donator'] < ~~_0x3bae53['donator'])
            return 0x1;
        if (~~!!_0x4e5a21['admin'] > ~~!!_0x3bae53['admin'])
            return -0x1;
        if (~~!!_0x4e5a21['admin'] < ~~!!_0x3bae53['admin'])
            return 0x1;
        if (~~!!_0x4e5a21['adjudicator'] > ~~!!_0x3bae53['adjudicator'])
            return -0x1;
        if (~~!!_0x4e5a21['adjudicator'] < ~~!!_0x3bae53['adjudicator'])
            return 0x1;
        if (_0x4e5a21['username']['toLowerCase']() < _0x3bae53['username']['toLowerCase']())
            return -0x1;
        if (_0x4e5a21['username']['toLowerCase']() > _0x3bae53['username']['toLowerCase']())
            return 0x1;
        return 0x0;
    });
}
function isWatching(_0x4a9b0b) {
    var _0x814c4 = $('#watchers\x20.cell');
    for (var _0x17d8cd = 0x0; _0x17d8cd < _0x814c4['length']; _0x17d8cd++) {
        if (_0x814c4['eq'](_0x17d8cd)[0x0]['textContent'] == _0x4a9b0b)
            return !![];
    }
    return ![];
}
function addWatcher(_0x2d9d83, _0x3fed64) {
    if (!_0x3fed64)
        for (var _0x8d5414 = 0x0; _0x8d5414 < watchers_data['length']; _0x8d5414++) {
            if (watchers_data[_0x8d5414]['username'] == _0x2d9d83['username'])
                return;
        }
    var _0x440e75 = new Cell(_0x2d9d83['username']);
    _0x2d9d83['admin'] > 0x0 && (addClass(_0x440e75, 'isAdmin'),
        addClass(_0x440e75, 'admin' + _0x2d9d83['admin']));
    _0x2d9d83['adjudicator'] && addClass(_0x440e75, 'adjudicator');
    _0x2d9d83['donator'] && (addClass(_0x440e75, 'donator'),
        $(_0x440e75)['find']('span')['html'](colorize(_0x2d9d83['username'])));
    if (_0x3fed64)
        return _0x440e75['outerHTML'];
    _0x2d9d83['u'] = _0x2d9d83['username'],
        watchers_data['push'](_0x2d9d83),
        sortWatchers(),
        insertAt(watchers_data['indexOf'](_0x2d9d83), _0x440e75, $('#watchers\x20.users')),
        $('#watchers\x20.watchers_txt')['text']('Watchers:\x20' + $('#watchers\x20.cell')['length']);
}
function removeWatcher(_0xf495ee) {
    var _0x34054c = $('#watchers\x20.cell');
    for (var _0x8137ed = 0x0; _0x8137ed < _0x34054c['length']; _0x8137ed++) {
        if (_0x34054c['eq'](_0x8137ed)[0x0]['textContent'] == _0xf495ee['username']) {
            _0x34054c['eq'](_0x8137ed)['remove']();
            break;
        }
    }
    $('#watchers\x20.watchers_txt')['text']('Watchers:\x20' + $('#watchers\x20.cell')['length']);
    for (_0x8137ed = 0x0; _0x8137ed < watchers_data['length']; _0x8137ed++) {
        if (watchers_data[_0x8137ed]['username'] == _0xf495ee['username']) {
            watchers_data['splice'](_0x8137ed, 0x1);
            break;
        }
    }
}
function saveWatchChatVSP() {
    watch_chat_vsp = $('#watch_chat\x20.cout_txt')['scrollTop']();
    var _0x8ee83 = $('#watch_chat\x20.cout_txt')['scrollMax']();
    (watch_chat_vsp >= _0x8ee83 - 0x50 || _0x8ee83 < 0x0) && (watch_chat_vsp += 0x3e8);
}
function restoreWatchChatVSP() {
    $('#watch_chat\x20.cout_txt')['scrollTop'](watch_chat_vsp);
}
function watchChatPrint(_0x10be29) {
    if (blocked_arr['indexOf'](_0x10be29['username']) >= 0x0)
        return;
    saveWatchChatVSP();
    var _0x21e909 = '#0000FF';
    _0x10be29['color'] && (_0x21e909 = '#' + _0x10be29['color']),
        username == _0x10be29['username'] && (_0x21e909 == '#0000FF' && (_0x21e909 = '#FF0000')),
        !_0x10be29['html'] && (_0x10be29['message'] = escapeHTMLWithLinks(_0x10be29['message'])),
        $('#watch_chat\x20.cout_txt')['append']('<span><b><font\x20color=\x22' + _0x21e909 + '\x22>' + escapeHTML(_0x10be29['username']) + ':\x20</font></b><font>' + _0x10be29['message'] + '</font></span><br>'),
        restoreWatchChatVSP(),
        watch_chat_limit++;
}
function watchChatLoaded(_0x4e8bf8) {
    var _0x42c77b = '';
    saveWatchChatVSP(),
        stopChatCycle($('#watch_chat_cycle'));
    for (var _0x381634 = 0x0; _0x381634 < _0x4e8bf8['messages']['length']; _0x381634++) {
        if (blocked_arr['indexOf'](_0x4e8bf8['messages'][_0x381634]['username']) >= 0x0)
            continue;
        _0x4e8bf8['messages'][_0x381634]['username'] == username && _0x4e8bf8['messages'][_0x381634]['color'] == '0000FF' && (_0x4e8bf8['messages'][_0x381634]['color'] = 'FF0000'),
            !_0x4e8bf8['messages'][_0x381634]['hidden'] && (!_0x4e8bf8['messages'][_0x381634]['html'] && (_0x4e8bf8['messages'][_0x381634]['message'] = escapeHTMLWithLinks(_0x4e8bf8['messages'][_0x381634]['message'])),
                _0x42c77b += '<span><font\x20color=\x22#' + _0x4e8bf8['messages'][_0x381634]['color'] + '\x22><b>' + escapeHTML(_0x4e8bf8['messages'][_0x381634]['username']) + ':\x20</b></font><font>' + _0x4e8bf8['messages'][_0x381634]['message'] + '</font></span><br>');
    }
    $('#watch_chat\x20.cout_txt')['html'](_0x42c77b),
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
function initSiding(_0x4dde38) {
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
function Phase(_0x3e74c7) {
    var _0x2c7350 = $('<div\x20id=\x22' + _0x3e74c7 + '\x22\x20class=\x22phase\x22></div>')
        , _0x4dc11b = $('<img\x20class=\x22background\x22\x20src=\x22' + IMAGES_START + 'svg/phase_background.svg\x22\x20/>')
        , _0x5ef75f = $('<img\x20class=\x22phase_dark_blue\x22\x20src=\x22' + IMAGES_START + 'svg/phase_dark_blue.svg\x22\x20/>')
        , _0x180065 = $('<img\x20class=\x22phase_dark_red\x22\x20src=\x22' + IMAGES_START + 'svg/phase_dark_red.svg\x22\x20/>')
        , _0x2e4d08 = $('<img\x20class=\x22phase_blue\x20phase_lit\x22\x20src=\x22' + IMAGES_START + 'svg/phase_blue.svg\x22\x20/>')
        , _0x2b3640 = $('<img\x20class=\x22phase_red\x20phase_lit\x22\x20src=\x22' + IMAGES_START + 'svg/phase_red.svg\x22\x20/>')
        , _0x1b4594 = $('<span\x20class=\x22gray_txt\x20arial_rounded25\x22>' + _0x3e74c7['toUpperCase']() + '</span>')
        , _0x2b33bb = $('<span\x20class=\x22white_txt\x20arial_rounded25\x22>' + _0x3e74c7['toUpperCase']() + '</span>');
    return _0x2c7350['append'](_0x4dc11b),
        _0x2c7350['append'](_0x5ef75f),
        _0x2c7350['append'](_0x180065),
        _0x2c7350['append'](_0x2e4d08),
        _0x2c7350['append'](_0x2b3640),
        _0x2c7350['append'](_0x1b4594),
        _0x2c7350['append'](_0x2b33bb),
        _0x2c7350;
}
function Counter(_0x25d942) {
    var _0x1e9e51 = $('<div\x20class=\x22counter\x22></div>');
    _0x25d942 && _0x1e9e51['attr']('id', _0x25d942);
    var _0x1ac5de = $('<div\x20class=\x22content\x22></div>')
        , _0x1c0381 = $('<img\x20class=\x22background\x22\x20src=\x22' + IMAGES_START + 'svg/counter.svg\x22\x20/>')
        , _0x1a0bbf = $('<img\x20class=\x22glow\x22\x20src=\x22' + IMAGES_START + 'svg/counter_glow.svg\x22\x20/>');
    _0x1a0bbf['hide']();
    var _0x52dde0 = $('<span\x20class=\x22total_txt\x22>1</span>');
    return _0x1ac5de['append'](_0x1c0381),
        _0x1ac5de['append'](_0x1a0bbf),
        _0x1e9e51['append'](_0x1ac5de),
        _0x1e9e51['append'](_0x52dde0),
        _0x1e9e51['mouseover'](function () {
            _0x1a0bbf['show']();
        }),
        _0x1e9e51['mouseout'](function () {
            _0x1a0bbf['hide']();
        }),
        _0x1e9e51;
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
function questionE(_0x5de437) {
    _0x5de437['data']('cardfront')['data']('name') == 'Question' && (duel_log['is'](':visible') && toggleDuelLog(),
        $('#log_btn')['hide'](),
        watch_chat['is'](':visible') && toggleWatchersChat(),
        $('#watchers_btn')['hide']());
}
function unquestionE(_0x269148) {
    _0x269148['data']('cardfront')['data']('name') == 'Question' && (duelist && $('#log_btn')['show'](),
        $('#watchers_btn')['show']());
}
function stopViewing(_0x294564) {
    if (duelist && _0x294564['username'] == username)
        switch (_0x294564['viewing']) {
            case 'Deck\x20(Picking\x20Card)':
            case 'Deck\x20(Picking\x202\x20Cards)':
            case 'Deck\x20(Picking\x203\x20Cards)':
            case 'Deck\x20(Picking\x204\x20Cards)':
                if (next_callback == 'Place\x20cards\x20on\x20top\x20of\x20deck\x20randomly')
                    break;
            case 'Deck':
                break;
            case 'Opponent\x27s\x20Hand':
                for (var _0x2a30f9 = 0x0; _0x2a30f9 < Player2()['hand_arr']['length']; _0x2a30f9++) {
                    TweenMax['to'](Player2()['hand_arr'][_0x2a30f9], 0x0, {
                        'rotationY': 0xb4 + ABOUT_ZERO
                    }),
                        Player2()['hand_arr'][_0x2a30f9]['onRotate']();
                }
                initHand(Player2());
                break;
        }
    else {
        if (duelist) {
            if (_0x294564['viewing'] == 'Opponent\x27s\x20Deck')
                Send({
                    'action': 'Duel',
                    'play': 'Shuffle\x20deck'
                }),
                    shiftDeck(Player2());
            else
                _0x294564['viewing'] == 'Opponent\x27s\x20Hand' && Send({
                    'action': 'Duel',
                    'play': 'Shuffle\x20hand'
                });
        }
    }
    if (_0x294564['username'] == Player1()['username'] || _0x294564['username'] == username)
        $('#status1\x20.status_txt')['text']('');
    else
        _0x294564['username'] == Player2()['username'] && $('#status2\x20.status_txt')['text']('');
}
function maximizeWatchers() {
    var _0x1f4b49 = $('#watchers\x20.cell')['length'] * 0x14;
    _0x1f4b49 > 0xac && (_0x1f4b49 = 0xac),
        $('#watchers\x20.cell')['length'] > 0x2 && ($('#watchers\x20.users')['css']('height', _0x1f4b49),
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
    var _0x4257c4 = $('#watchers\x20.users')['scrollMax']();
    watchers_vsp >= _0x4257c4 && (watchers_vsp += 0x3e8);
}
function watchersMoveE(_0x4bb2d1) {
    updateMouse(_0x4bb2d1),
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
function findCard(_0x23d9cd, _0x22dfe0, _0x2bda1e, _0x1a537e) {
    var _0x22ac10 = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player1['s1'], player1['s2'], player1['s3'], player1['s4'], player1['s5'], player1['pendulumLeft'], player1['pendulumRight'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], player2['s1'], player2['s2'], player2['s3'], player2['s4'], player2['s5'], player2['pendulumLeft'], player2['pendulumRight'], player2['fieldSpell'], linkLeft, linkRight, player1['skillCard'], player2['skillCard']];
    if (_0x22dfe0)
        for (var _0x28fe05 = 0x0; _0x28fe05 < player1['hand_arr']['length']; _0x28fe05++) {
            _0x22ac10['push'](player1['hand_arr'][_0x28fe05]);
        }
    if (_0x2bda1e)
        for (_0x28fe05 = 0x0; _0x28fe05 < player1['grave_arr']['length']; _0x28fe05++) {
            _0x22ac10['push'](player1['grave_arr'][_0x28fe05]);
        }
    for (var _0x3051fe = 0x0; _0x3051fe < _0x23d9cd['length']; _0x3051fe++) {
        for (var _0x4dd085 = 0x0; _0x4dd085 < _0x22ac10['length']; _0x4dd085++) {
            if (_0x22ac10[_0x4dd085]) {
                if (_0x22ac10[_0x4dd085]['data']('face_down'))
                    continue;
                if (_0x22ac10[_0x4dd085]['data']('cardfront')['data']('treated_as') == _0x23d9cd[_0x3051fe] || _0x1a537e && _0x22ac10[_0x4dd085]['data']('cardfront')['data']('treated_as') && _0x22ac10[_0x4dd085]['data']('cardfront')['data']('treated_as')['indexOf'](_0x23d9cd[_0x3051fe]) >= 0x0)
                    return !![];
            }
        }
    }
    return ![];
}
function findEffect(_0x271b0b) {
    var _0x1ff1cd = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player1['s1'], player1['s2'], player1['s3'], player1['s4'], player1['s5'], player1['pendulumLeft'], player1['pendulumRight'], player1['fieldSpell'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], player2['s1'], player2['s2'], player2['s3'], player2['s4'], player2['s5'], player2['pendulumLeft'], player2['pendulumRight'], player2['fieldSpell'], linkLeft, linkRight, player1['skillCard'], player2['skillCard']]
        , _0x2c3fd9 = [player1['hand_arr'], player1['grave_arr'], player1['banished_arr'], player1['opponent']['grave_arr'], player1['opponent']['banished_arr']];
    for (var _0x55bd23 = 0x0; _0x55bd23 < _0x2c3fd9['length']; _0x55bd23++) {
        for (var _0x41d16f = 0x0; _0x41d16f < _0x2c3fd9[_0x55bd23]['length']; _0x41d16f++) {
            _0x1ff1cd['push'](_0x2c3fd9[_0x55bd23][_0x41d16f]);
        }
    }
    for (_0x55bd23 = 0x0; _0x55bd23 < _0x1ff1cd['length']; _0x55bd23++) {
        if (_0x1ff1cd[_0x55bd23]) {
            if (str(_0x1ff1cd[_0x55bd23]['data']('cardfront')['data']('effect'))['indexOf'](_0x271b0b) >= 0x0)
                return !![];
        }
    }
    return ![];
}
function showE(_0x1803e3, _0x432392) {
    var _0x59e826 = [];
    switch (_0x1803e3) {
        case 'Opponent\x27s\x20Deck':
            _0x59e826 = Player1()['opponent']['main_arr'];
            break;
        case 'Opponent\x27s\x20Deck\x20(partial)':
        case 'Opponent\x27s\x20Deck\x20(Top\x203\x20Cards)':
            removePermission();
            for (var _0x2fa9e3 = 0x0; _0x2fa9e3 < _0x49b446(0x3, _0x432392); _0x2fa9e3++) {
                _0x59e826['push'](Player1()['opponent']['main_arr'][_0x2fa9e3]);
            }
            break;
        case 'Opponent\x27s\x20Deck\x20(Top\x205\x20Cards)':
            removePermission();
            for (_0x2fa9e3 = 0x0; _0x2fa9e3 < _0x49b446(0x5, _0x432392); _0x2fa9e3++) {
                _0x59e826['push'](Player1()['opponent']['main_arr'][_0x2fa9e3]);
            }
            break;
        case 'Opponent\x27s\x20Deck\x20(Top\x201\x20Cards)':
            removePermission();
            for (_0x2fa9e3 = 0x0; _0x2fa9e3 < _0x49b446(0x1, _0x432392); _0x2fa9e3++) {
                _0x59e826['push'](Player1()['opponent']['main_arr'][_0x2fa9e3]);
            }
            break;
        case 'Opponent\x27s\x20Hand':
            _0x59e826 = Player1()['opponent']['hand_arr'];
            break;
        case 'Opponent\x27s\x20Extra\x20Deck':
            _0x59e826 = Player1()['opponent']['extra_arr'];
            break;
    }
    duelist && _0x432392['username'] != username && player1 == Player1() && (viewing = _0x1803e3,
        $('#view\x20.title_txt')['text']('Viewing\x20' + _0x1803e3),
        viewCards(_0x59e826, _0x432392));
    if (_0x432392['username'] == Player2()['username'])
        $('#status1\x20.status_txt')['text']('Viewing\x20' + _0x1803e3);
    else
        _0x432392['username'] == Player1()['username'] && $('#status2\x20.status_txt')['text']('Viewing\x20' + _0x1803e3);
    endAction();
    function _0x49b446(_0x17822e, _0x201083) {
        if (!_0x201083 || !_0x201083['deck'])
            return _0x17822e;
        return ~~_0x201083['deck']['length'];
    }
}
function duelStart(_0x3e8381) {
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
            'onComplete': function () {
                duelist && (firstCards = _0x3e8381['cards']),
                    shiftDecks(),
                    solo && (turn_player = getPlayer(username)),
                    actionsQueue['push'](simultaneousDraw),
                    actionsQueue['push'](simultaneousDraw),
                    actionsQueue['push'](simultaneousDraw),
                    !speed && !rush && (actionsQueue['push'](simultaneousDraw),
                        actionsQueue['push'](simultaneousDraw)),
                    rush && actionsQueue['push'](simultaneousDraw),
                    actionsQueue['push'](function () {
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
    var _0x182d3e;
    if (Player1()['main_arr']['length'] > 0x0) {
        var _0x454c7f = removeTopCardFromDeck(Player1());
        _0x182d3e = _0x454c7f,
            Player1()['hand_arr']['push'](_0x454c7f),
            determineHandPosition(Player1()),
            organizeHand(Player1());
        var _0x4b592d = 0xb4 + ABOUT_ZERO;
        player1['username'] == username && (_0x4b592d = ABOUT_ZERO,
            _0x454c7f['data']('cardfront')['reinitialize'](firstCards[0x0])),
            console['log']('rotY\x20=\x20' + _0x4b592d),
            TweenMax['to'](_0x454c7f, easeSeconds, {
                'left': handDestination,
                'top': player1['handY'],
                'scale': 0.25,
                'rotation': player1['rot'],
                'rotationY': _0x4b592d,
                'ease': Linear['easeNone'],
                'onComplete': function () {
                    duelist && firstCards['splice'](0x0, 0x1);
                }
            }),
            $('#duel\x20.cards')['append'](_0x454c7f);
    }
    if (Player2()['main_arr']['length'] > 0x0) {
        var _0x3ca6ce = removeTopCardFromDeck(Player2());
        _0x182d3e = _0x3ca6ce,
            Player2()['hand_arr']['push'](_0x3ca6ce),
            determineHandPosition(Player2()),
            organizeHand(Player2()),
            TweenMax['to'](_0x3ca6ce, easeSeconds, {
                'left': handDestination,
                'top': player2['handY'],
                'scale': 0.25,
                'rotation': player2['rot'],
                'rotationY': 0xb4 + ABOUT_ZERO,
                'ease': Linear['easeNone']
            }),
            $('#duel\x20.cards')['append'](_0x3ca6ce);
    }
    if (!_0x182d3e) {
        endAction();
        return;
    }
    TweenMax['to'](_0x182d3e, easeSeconds, {
        'alpha': 0x1,
        'onComplete': function () {
            endAction(),
                actionsQueue['length'] == 0x0 && (shiftDeck(Player1()),
                    shiftDeck(Player2()));
        }
    }),
        playSound(DrawSound);
}
function switchDuelists(_0x4bc1a6, _0x42e684, _0x59b9ca, _0x162e1e, _0x344049) {
    var _0x4b16ba = JSON['parse'](JSON['stringify'](_0x4bc1a6[_0x42e684]))
        , _0x4d4dff = JSON['parse'](JSON['stringify'](_0x4bc1a6[_0x59b9ca]));
    _0x4bc1a6[_0x59b9ca] = _0x4b16ba,
        _0x4bc1a6[_0x42e684] = _0x4d4dff;
    if (_0x162e1e) {
        var _0x18a59a = JSON['parse'](JSON['stringify'](_0x4bc1a6[_0x162e1e]))
            , _0x4f74ec = JSON['parse'](JSON['stringify'](_0x4bc1a6[_0x344049]));
        _0x4bc1a6[_0x344049] = _0x18a59a,
            _0x4bc1a6[_0x162e1e] = _0x4f74ec;
    }
}
function showFaceDownCards() {
    $('#view\x20.card')['each'](function () {
        (duelist || admin || show_cards) && viewing == 'Banished' && $(this)['data']('face_down') && $(this)['data']('cardfront')['data']('initialized') && $(this)['data']('cardfront')['show']();
    });
}
function hideFaceDownCards(_0x5901e2) {
    updateMouse(_0x5901e2);
    if (inBounds($(this)))
        return;
    $('#view\x20.card')['each'](function () {
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
function flipDecks(_0x2b7430, _0x145b59) {
    removePermission(),
        player1['deck_face_up'] = !![],
        player2['deck_face_up'] = !![],
        player1['main_arr'] = shuffle(player1, player1['main_arr'], _0x145b59['player1_ids']),
        player2['main_arr'] = shuffle(player2, player2['main_arr'], _0x145b59['player2_ids']),
        shiftDeck(player1),
        shiftDeck(player2);
    for (var _0x162700 = 0x0; _0x162700 < player1['main_arr']['length']; _0x162700++) {
        !player1['main_arr'][_0x162700]['data']('cardfront')['data']('initialized') && player1['main_arr'][_0x162700]['data']('cardfront')['initializeFromData'](_0x145b59['player1_deck'][_0x162700]);
    }
    for (_0x162700 = 0x0; _0x162700 < player2['main_arr']['length']; _0x162700++) {
        !player2['main_arr'][_0x162700]['data']('cardfront')['data']('initialized') && player2['main_arr'][_0x162700]['data']('cardfront')['initializeFromData'](_0x145b59['player2_deck'][_0x162700]);
    }
    shiftDeck(player1),
        shiftDeck(player2),
        endAction();
}
function flipDecksBack(_0x44bfc9, _0x229351) {
    player1['deck_face_up'] = ![],
        player2['deck_face_up'] = ![],
        player1['main_arr'] = shuffle(player1, player1['main_arr'], _0x229351['player1_ids']),
        player2['main_arr'] = shuffle(player2, player2['main_arr'], _0x229351['player2_ids']),
        shiftDeck(player1),
        shiftDeck(player2),
        endAction();
}
function turnFaceDown(_0x4a05c7, _0x32d6b1) {
    var _0x3204c6 = getFieldCard(_0x4a05c7, _0x32d6b1);
    _0x3204c6['data']('face_down', !![]),
        _0x3204c6['data']('counters', 0x0),
        $('#field')['append'](_0x3204c6),
        TweenMax['to'](_0x3204c6, easeSeconds, {
            'rotation': _0x4a05c7['rot'],
            'rotationY': 0xb4 + ABOUT_ZERO,
            'ease': Linear['easeNone'],
            'onComplete': function () { }
        }),
        updateXyzMaterials(_0x4a05c7, _0x3204c6),
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
    var _0x355818 = $(this)['parent']();
    automatic && showEquips(_0x355818);
    _0x355818['data']('controller') != player1 && (_0x355818['data']('controller') == player3 && (updateController(player1, _0x355818),
        updateOwner(player1, _0x355818)));
    if (_0x355818 == menu_card) {
        menu_reason = 'card\x20is\x20menu_card';
        return;
    }
    if (!viewing) {
        if (!isPlayer1(_0x355818['data']('controller')['username'])) {
            menu_reason = 'You\x20don\x27t\x20control\x20this\x20card';
            return;
        }
        if (isIn(_0x355818, player1['main_arr']) >= 0x0) {
            menu_reason = 'Card\x20is\x20in\x20the\x20Deck';
            return;
        }
        if (isIn(_0x355818, player1['extra_arr']) >= 0x0) {
            menu_reason = 'Card\x20is\x20in\x20the\x20Extra\x20Deck';
            return;
        }
    }
    if (automatic) {
        cardMenuE2(_0x355818);
        return;
    }
    var _0x2344f1 = [];
    if (_0x355818['data']('controller') != player1) {
        if (isIn(_0x355818, player1['opponent']['grave_arr']) >= 0x0 || isIn(_0x355818, player1['opponent']['banished_arr']) >= 0x0) {
            _0x355818['data']('cardfront')['data']('card_type') == 'Monster' && !_0x355818['data']('face_down') && (hasAvailableMonsterZones(player1) && (_0x2344f1['push']({
                'label': 'SS\x20ATK',
                'data': 'SS\x20ATK'
            }),
                _0x355818['data']('cardfront')['data']('monster_color') != 'Link' && _0x2344f1['push']({
                    'label': 'SS\x20DEF',
                    'data': 'SS\x20DEF'
                })));
            if (isIn(_0x355818, player1['opponent']['grave_arr']) >= 0x0)
                _0x2344f1['push']({
                    'label': 'Banish',
                    'data': 'Banish'
                });
            else
                !_0x355818['data']('face_down') && _0x2344f1['push']({
                    'label': 'To\x20Grave',
                    'data': 'To\x20GY'
                });
            _0x2344f1['push']({
                'label': 'Target',
                'data': 'Target'
            });
            if (findCard(['Toadally\x20Awesome'], !![], !![], !![])) {
                if (_0x355818['data']('cardfront')['data']('card_type') != 'Monster') {
                    if (hasAvailableSTZones(player1) && _0x355818['data']('cardfront')['data']('type') != 'Field')
                        _0x2344f1['push']({
                            'label': 'To\x20S/T',
                            'data': 'To\x20ST'
                        });
                    else
                        player1['fieldSpell'] == null && _0x355818['data']('cardfront')['data']('type') == 'Field' && _0x2344f1['push']({
                            'label': 'Activate',
                            'data': 'Activate\x20Field\x20Spell'
                        });
                }
            }
            hasXyzMonster(player1) && _0x2344f1['push']({
                'label': 'Attach',
                'data': 'Attach'
            });
        }
        (viewing == 'Opponent\x27s\x20Deck\x20(partial)' || viewing == 'Opponent\x27s\x20Deck\x20(Top\x203\x20Cards)' || viewing == 'Opponent\x27s\x20Deck\x20(Top\x205\x20Cards)') && isIn(_0x355818, player1['opponent']['main_arr']) >= 0x0 && (findCard(['Destiny\x20HERO\x20-\x20Dominance', 'Flower\x20Cardian\x20Peony\x20with\x20Butterfly', 'Goddess\x20Skuld\x27s\x20Oracle', 'Millennium\x20Necklace', 'SPYRAL\x20GEAR\x20-\x20Drone']) && _0x2344f1['push']({
            'label': 'To\x20Top\x20of\x20Deck',
            'data': 'To\x20T\x20Deck\x202'
        }),
            findCard(['Flower\x20Cardian\x20Peony\x20with\x20Butterfly']) && _0x2344f1['push']({
                'label': 'To\x20Bottom\x20of\x20Deck',
                'data': 'To\x20B\x20Deck\x202'
            }),
            findCard(['Fairy\x20Tail\x20-\x20Rochka']) && _0x2344f1['push']({
                'label': 'To\x20Opponent\x27s\x20Hand',
                'data': 'To\x20hand\x202'
            }));
    } else {
        if (currentPhase == 'BP' && turn_player['username'] == username && !_0x355818['data']('face_down') && isMonster(player1, _0x355818)) {
            if (_0x355818['data']('inATK'))
                countMonsters(player2) > 0x0 && _0x2344f1['push']({
                    'label': 'Attack',
                    'data': 'Attack'
                }),
                    _0x2344f1['push']({
                        'label': 'Attack\x20Directly',
                        'data': 'Attack\x20directly'
                    });
            else
                switch (_0x355818['data']('cardfront')['data']('name')) {
                    default:
                        if (_0x355818['data']('cardfront')['data']('effect')['indexOf']('This\x20card\x20can\x20attack\x20while\x20in\x20face-up\x20Defense\x20Position') < 0x0)
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
                        countMonsters(player2) > 0x0 && _0x2344f1['push']({
                            'label': 'Attack',
                            'data': 'Attack'
                        });
                        _0x2344f1['push']({
                            'label': 'Attack\x20Directly',
                            'data': 'Attack\x20directly'
                        });
                }
        }
        if (isIn(_0x355818, player1['hand_arr']) >= 0x0) {
            hasAvailableSTZones(player1) && _0x355818['data']('cardfront')['data']('effect')['indexOf']('You\x20can\x20Set\x20this\x20card\x20from\x20your\x20hand\x20to\x20your\x20Spell') >= 0x0 && _0x2344f1['push']({
                'label': 'Set\x20(To\x20S/T)',
                'data': 'Set\x20ST'
            });
            if (_0x355818['data']('cardfront')['data']('pendulum')) {
                if (links && (!player1['s1'] || !player1['s5']))
                    _0x2344f1['push']({
                        'label': 'Activate',
                        'data': player1['s1'] && !player1['s5'] ? 'Activate\x20Pendulum\x20Right' : !player1['s1'] && player1['s5'] ? 'Activate\x20Pendulum\x20Left' : 'Activate\x20Pendulum'
                    });
                else
                    !links && (!player1['pendulumLeft'] && _0x2344f1['push']({
                        'label': 'Activate\x20Left',
                        'data': 'Activate\x20Pendulum\x20Left'
                    }),
                        !player1['pendulumRight'] && _0x2344f1['push']({
                            'label': 'Activate\x20Right',
                            'data': 'Activate\x20Pendulum\x20Right'
                        }));
            }
            _0x355818['data']('cardfront')['data']('type') != 'Field' && _0x355818['data']('cardfront')['data']('card_type') != 'Monster' && hasAvailableSTZones(player1) && (_0x355818['data']('cardfront')['data']('card_type') == 'Spell' && _0x2344f1['push']({
                'label': 'Activate',
                'data': 'Activate\x20ST'
            }),
                _0x2344f1['push']({
                    'label': 'Set',
                    'data': 'Set\x20ST'
                }));
            _0x355818['data']('cardfront')['data']('type') == 'Field' && !player1['fieldSpell'] && (_0x2344f1['push']({
                'label': 'Activate',
                'data': 'Activate\x20Field\x20Spell'
            }),
                _0x2344f1['push']({
                    'label': 'Set',
                    'data': 'Set\x20Field\x20Spell'
                }));
            if (hasAvailableMonsterZones(player1)) {
                if (_0x355818['data']('cardfront')['data']('card_type') == 'Monster')
                    _0x2344f1['push']({
                        'label': 'Normal\x20Summon',
                        'data': 'Normal\x20Summon'
                    }),
                        _0x2344f1['push']({
                            'label': 'Set',
                            'data': 'Set\x20monster'
                        });
                else
                    findCard(['Magical\x20Hats']) && _0x2344f1['push']({
                        'label': 'Set\x20to\x20Monster\x20Zone',
                        'data': 'Set\x20monster'
                    });
            }
        }
        _0x355818['data']('cardfront')['data']('monster_color') == 'Xyz' && isIn(_0x355818, player1['extra_arr']) >= 0x0 && countOverlayOptions(player1) >= 0x1 && (_0x2344f1['push']({
            'label': 'OL\x20ATK',
            'data': 'OL\x20ATK'
        }),
            _0x2344f1['push']({
                'label': 'OL\x20DEF',
                'data': 'OL\x20DEF'
            }));
        (hasAvailableMonsterZones(player1) || links && (!linkLeft || !linkRight) && isIn(_0x355818, player1['extra_arr']) >= 0x0) && _0x355818['data']('cardfront')['data']('card_type') == 'Monster' && !_0x355818['hasClass']('xyzmaterial') && !isMonster(player1, _0x355818) && !isST(player1, _0x355818) && (_0x2344f1['push']({
            'label': 'S.\x20Summon\x20ATK',
            'data': 'SS\x20ATK'
        }),
            _0x355818['data']('cardfront')['data']('monster_color') != 'Link' && _0x2344f1['push']({
                'label': 'S.\x20Summon\x20DEF',
                'data': 'SS\x20DEF'
            }));
        if (isIn(_0x355818, player1['grave_arr']) >= 0x0 && hasAvailableMonsterZones(player1))
            switch (_0x355818['data']('cardfront')['data']('name')) {
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
                    _0x2344f1['push']({
                        'label': 'SS\x20ATK',
                        'data': 'SS\x20ATK'
                    }),
                        _0x2344f1['push']({
                            'label': 'SS\x20DEF',
                            'data': 'SS\x20DEF'
                        });
                    break;
            }
        if (_0x355818['data']('cardfront')['data']('monster_color') == 'Token') {
            _0x2344f1['push']({
                'label': 'Remove',
                'data': 'Remove\x20Token'
            });
            if (isMonster(player1, _0x355818)) {
                if (_0x355818['data']('inDEF'))
                    _0x2344f1['push']({
                        'label': 'To\x20ATK',
                        'data': 'To\x20ATK'
                    });
                else
                    _0x355818['data']('cardfront')['data']('monster_color') != 'Link' && _0x2344f1['push']({
                        'label': 'To\x20DEF',
                        'data': 'To\x20DEF'
                    });
            }
            _0x2344f1['push']({
                'label': 'Move',
                'data': 'Move'
            });
        } else {
            isST(player1, _0x355818) && _0x355818['data']('face_down') && _0x2344f1['push']({
                'label': 'Activate',
                'data': 'Activate\x20ST'
            });
            player1['fieldSpell'] && _0x355818[0x0] == player1['fieldSpell'][0x0] && _0x355818['data']('face_down') && _0x2344f1['push']({
                'label': 'Activate',
                'data': 'Activate\x20Field\x20Spell'
            });
            isIn(_0x355818, player1['main_arr']) >= 0x0 && (_0x2344f1['push']({
                'label': 'To\x20Hand',
                'data': 'To\x20hand'
            }),
                !player1['fieldSpell'] && _0x355818['data']('cardfront')['data']('type') == 'Field' && _0x2344f1['push']({
                    'label': 'Activate',
                    'data': 'Activate\x20Field\x20Spell'
                }));
            isIn(_0x355818, player1['grave_arr']) < 0x0 && !_0x355818['hasClass']('xyzmaterial') && _0x2344f1['push']({
                'label': 'To\x20Graveyard',
                'data': 'To\x20GY'
            });
            !_0x355818['data']('face_down') && ((isMonster(player1, _0x355818) || isST(player1, _0x355818) || player1['fieldSpell'] && _0x355818[0x0] == player1['fieldSpell'][0x0] || player1['pendulumLeft'] && _0x355818[0x0] == player1['pendulumLeft'][0x0] || player1['pendulumRight'] && _0x355818[0x0] == player1['pendulumRight'][0x0] || isIn(_0x355818, player1['grave_arr']) >= 0x0 || isIn(_0x355818, player1['banished_arr']) >= 0x0) && _0x2344f1['push']({
                'label': 'Declare',
                'data': 'Declare'
            }));
            !links && _0x355818['data']('cardfront')['data']('pendulum') && isIn(_0x355818, player1['hand_arr']) < 0x0 && (!player1['pendulumLeft'] && _0x2344f1['push']({
                'label': 'Activate\x20Left',
                'data': 'Activate\x20Pendulum\x20Left'
            }),
                !player1['pendulumRight'] && _0x2344f1['push']({
                    'label': 'Activate\x20Right',
                    'data': 'Activate\x20Pendulum\x20Right'
                }));
            if (isMonster(player1, _0x355818)) {
                if (_0x355818['data']('inDEF'))
                    _0x355818['data']('face_down') ? (_0x2344f1['push']({
                        'label': 'Flip\x20Summon',
                        'data': 'Flip\x20Summon'
                    }),
                        _0x2344f1['push']({
                            'label': 'Flip',
                            'data': 'Flip'
                        })) : _0x2344f1['push']({
                            'label': 'To\x20ATK',
                            'data': 'To\x20ATK'
                        });
                else
                    _0x355818['data']('cardfront')['data']('monster_color') != 'Link' && _0x2344f1['push']({
                        'label': 'To\x20DEF',
                        'data': 'To\x20DEF'
                    });
                !_0x355818['data']('face_down') && _0x355818['data']('cardfront')['data']('monster_color') != 'Link' && _0x2344f1['push']({
                    'label': 'Set',
                    'data': 'Set\x20monster'
                });
            }
            isST(player1, _0x355818) && !_0x355818['data']('face_down') && _0x2344f1['push']({
                'label': 'Set',
                'data': 'Set\x20ST'
            });
            player1['fieldSpell'] && _0x355818[0x0] == player1['fieldSpell'][0x0] && !_0x355818['data']('face_down') && _0x2344f1['push']({
                'label': 'Set',
                'data': 'Set\x20Field\x20Spell'
            });
            isIn(_0x355818, player1['hand_arr']) < 0x0 && isIn(_0x355818, player1['main_arr']) < 0x0 && !isExtraDeckCard(_0x355818) && _0x355818['data']('cardfront')['data']('monster_color') != 'Token' && !_0x355818['hasClass']('xyzmaterial') && _0x2344f1['push']({
                'label': 'To\x20Hand',
                'data': 'To\x20hand'
            });
            isIn(_0x355818, player1['banished_arr']) < 0x0 && (_0x2344f1['push']({
                'label': 'Banish',
                'data': 'Banish'
            }),
                _0x2344f1['push']({
                    'label': 'Banish\x20FD',
                    'data': 'Banish\x20FD'
                }));
            player1['opponent'] == null && (player1['opponent'] = player2);
            if (isMonster(player1, _0x355818) && hasAvailableMonsterZones(player1['opponent'])) { }
            isExtraDeckCard(_0x355818) && isIn(_0x355818, player1['extra_arr']) < 0x0 && _0x2344f1['push']({
                'label': 'To\x20Extra\x20Deck',
                'data': 'To\x20ED'
            });
            _0x355818['data']('cardfront')['data']('pendulum') && isIn(_0x355818, player1['main_arr']) < 0x0 && isIn(_0x355818, player1['hand_arr']) < 0x0 && isIn(_0x355818, player1['extra_arr']) < 0x0 && _0x2344f1['push']({
                'label': 'To\x20Extra\x20Deck\x20FU',
                'data': 'To\x20ED\x20FU'
            });
            !isExtraDeckCard(_0x355818) && isIn(_0x355818, player1['main_arr']) < 0x0 && !_0x355818['hasClass']('xyzmaterial') && (_0x2344f1['push']({
                'label': 'To\x20Top\x20of\x20Deck',
                'data': 'To\x20T\x20Deck'
            }),
                (allowToBottom || findEffect('bottom') || findCard(['Tearlament'], !![], !![], !![]) && isIn(_0x355818, player1['extra_arr']) < 0x0 || solo) && _0x2344f1['push']({
                    'label': 'To\x20Bottom\x20of\x20Deck',
                    'data': 'To\x20B\x20Deck'
                }));
            isIn(_0x355818, player1['main_arr']) >= 0x0 && findCard(['The\x20Great\x20Noodle\x20Inversion']) && _0x2344f1['push']({
                'label': 'To\x20Bottom\x20of\x20Deck',
                'data': 'Upside\x20Down\x20effect\x202'
            });
            isIn(_0x355818, player1['hand_arr']) < 0x0 && isIn(_0x355818, player1['main_arr']) < 0x0 && isIn(_0x355818, player1['extra_arr']) < 0x0 && _0x2344f1['push']({
                'label': 'Target',
                'data': 'Target'
            });
            (isMonster(player1, _0x355818) || isST(player1, _0x355818) || player1['fieldSpell'] && _0x355818[0x0] == player1['fieldSpell'][0x0] && !_0x355818['data']('face_down')) && _0x2344f1['push']({
                'label': 'Move',
                'data': 'Move'
            });
            isMonster(player1, _0x355818) && countOverlayOptions(player1) > 0x1 && !_0x355818['data']('face_down') && _0x2344f1['push']({
                'label': 'Overlay',
                'data': 'Overlay'
            });
            if (_0x355818['data']('xyz_arr')['length'] > 0x0) { }
            (isIn(_0x355818, player1['hand_arr']) >= 0x0 && _0x355818['data']('cardfront')['data']('card_type') != 'Spell' || isIn(_0x355818, player1['main_arr']) >= 0x0 || isIn(_0x355818, player1['grave_arr']) >= 0x0) && (hasAvailableSTZones(player1) && _0x2344f1['push']({
                'label': 'To\x20S/T',
                'data': 'To\x20ST'
            }));
            isIn(_0x355818, player1['hand_arr']) >= 0x0 && _0x2344f1['push']({
                'label': 'Declare',
                'data': 'Declare'
            });
            if (isIn(_0x355818, player1['hand_arr']) >= 0x0 || isIn(_0x355818, player1['extra_arr']) >= 0x0 || isIn(_0x355818, player1['main_arr']) >= 0x0 && findCard(['Small\x20World'])) {
                _0x2344f1['push']({
                    'label': 'Reveal',
                    'data': 'Reveal'
                });
                if (_0x355818['data']('face_up'))
                    _0x2344f1['push']({
                        'label': 'Stop\x20Revealing',
                        'data': 'Stop\x20revealing'
                    });
                else
                    (_0x355818['data']('cardfront')['data']('effect')['includes']('becomes\x20revealed') || _0x355818['data']('cardfront')['data']('effect')['includes']('remain\x20revealed') || findCard(['Contract\x20with\x20Don\x20Thousand'])) && _0x2344f1['push']({
                        'label': 'Stay\x20Revealed',
                        'data': 'Stay\x20revealed'
                    });
            }
            if (!_0x355818['data']('face_down')) {
                if (isMonster(player1, _0x355818)) {
                    switch (_0x355818['data']('cardfront')['data']('name')) {
                        case 'Parasite\x20Paracide':
                            _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'To\x20T\x20Deck\x202\x20FU'
                            });
                            break;
                        case 'SPYRAL\x20GEAR\x20-\x20Drone':
                            player1['opponent']['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                                'label': 'Look\x20at\x20cards',
                                'data': 'Spyral\x20event'
                            });
                            break;
                        case 'Fairy\x20Tail\x20-\x20Rochka':
                            player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Show\x20top\x203\x20cards'
                            });
                            break;
                        case 'Destiny\x20HERO\x20-\x20Dominance':
                            player1['opponent']['main_arr']['length'] >= 0x5 && _0x2344f1['push']({
                                'label': 'Look\x20at\x20opponent\x20cards',
                                'data': 'Dominance\x20event'
                            });
                            break;
                        case 'Zolga\x20the\x20Prophet':
                            player1['opponent']['main_arr']['length'] >= 0x1 && _0x2344f1['push']({
                                'label': 'Look\x20at\x20opponent\x20cards',
                                'data': 'Zolga\x20event'
                            });
                            break;
                        case 'Flower\x20Cardian\x20Peony\x20with\x20Butterfly':
                            player1['opponent']['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                                'label': 'Look\x20at\x20cards',
                                'data': 'Peony\x20event'
                            });
                            break;
                        case 'Aegaion\x20the\x20Sea\x20Castrum':
                            player1['opponent']['extra_arr']['length'] > 0x0 && _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Random\x20extra\x20event'
                            });
                            break;
                        case 'Number\x2078:\x20Number\x20Archive':
                            player1['extra_arr']['length'] > 0x0 && _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Banish\x20random\x20ED\x20card'
                            });
                            break;
                        case 'Kozmo\x20Tincan':
                        case 'Noble\x20Knight\x20Borz':
                            player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Tincan\x20effect'
                            });
                            break;
                        case 'Hi-Speedroid\x20Rubber\x20Band\x20Shooter':
                            player1['main_arr']['length'] >= 0x2 && _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Rubber\x20Band\x20effect'
                            });
                            break;
                        case 'Rescue-ACE\x20Turbulence':
                            player1['main_arr']['length'] >= 0x1 && _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Turbulence\x20effect'
                            });
                            break;
                        case 'Crowley,\x20the\x20First\x20Propheseer':
                        case 'Power\x20Tool\x20Dragon':
                        case 'Machina\x20Metalcruncher':
                            player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Crescent\x20effect'
                            });
                            break;
                        case 'Salamangreat\x20Foxy':
                            player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                                'label': 'Banish\x203\x20Cards',
                                'data': 'Banish\x20top\x203\x20cards'
                            });
                            break;
                        case 'Time\x20Thief\x20Redoer':
                            player1['opponent']['main_arr']['length'] >= 0x1 && _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Redoer\x20event'
                            });
                            break;
                        case 'Necroface':
                            (player1['opponent']['banished_arr']['length'] >= 0x1 || player2['opponent']['banished_arr']['length'] >= 0x1) && _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Necroface\x20event'
                            });
                            break;
                        case 'Fiber\x20Jar':
                            _0x2344f1['push']({
                                'label': 'Resolve\x20Effect',
                                'data': 'Fiber\x20effect'
                            });
                            break;
                    }
                    _0x355818['data']('cardfront')['data']('id') == 0x27ce && (player1['extra_arr']['length'] >= 0x1 && _0x2344f1['push']({
                        'label': 'Banish\x20Random\x20Card',
                        'data': 'Banish\x20random\x20ED\x20card\x202'
                    }));
                }
                if (isST(player1, _0x355818)) {
                    _0x355818['data']('cardfront')['data']('name') == 'Pot\x20of\x20Desires' && player1['main_arr']['length'] >= 0xc && _0x2344f1['push']({
                        'label': 'Banish\x2010\x20Cards\x20FD',
                        'data': 'Banish\x20top\x2010\x20cards\x20FD'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Pot\x20of\x20Extravagance' && countFaceDownExtraDeckCards(player1) >= 0x3 && _0x2344f1['push']({
                        'label': 'Banish\x203\x20ED\x20Cards\x20FD',
                        'data': 'Banish\x203\x20random\x20ED\x20cards\x20FD'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Pot\x20of\x20Extravagance' && countFaceDownExtraDeckCards(player1) >= 0x6 && _0x2344f1['push']({
                        'label': 'Banish\x206\x20ED\x20Cards\x20FD',
                        'data': 'Banish\x206\x20random\x20ED\x20cards\x20FD'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Pot\x20of\x20Duality' && player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                        'label': 'Banish\x203\x20Cards',
                        'data': 'Banish\x20top\x203\x20cards'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'That\x20Grass\x20Looks\x20Greener' && player1['main_arr']['length'] > player1['opponent']['main_arr']['length'] && _0x2344f1['push']({
                        'label': 'Mill\x20' + String(player1['main_arr']['length'] - player1['opponent']['main_arr']['length']),
                        'data': 'Mill\x20difference'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Pharaoh\x27s\x20Treasure' && _0x2344f1['push']({
                        'label': 'To\x20Top\x20of\x20Deck\x20face-up',
                        'data': 'To\x20T\x20Deck\x20FU'
                    });
                    if (_0x355818['data']('cardfront')['data']('id') == 0x2b67 && player1['main_arr']['length'] >= 0x3) { }
                    _0x355818['data']('cardfront')['data']('name') == 'Spellbook\x20Library\x20of\x20the\x20Crescent' && player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Crescent\x20effect'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Bingo\x20Machine,\x20Go!!!' && player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Crescent\x20effect'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'My\x20Friend\x20Purrely' && player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Crescent\x20effect'
                    });
                    if (_0x355818['data']('cardfront')['data']('name') == 'Exchange') { }
                    _0x355818['data']('cardfront')['data']('name') == 'Goddess\x20Skuld\x27s\x20Oracle' && player2['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                        'label': 'Look\x20at\x20cards',
                        'data': 'Oracle\x20event'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'You\x27re\x20in\x20Danger!' && player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Page-Flip\x20effect'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Toon\x20Page-Flip' && player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Page-Flip\x20effect'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Gold\x20Pride\x20-\x20Start\x20Your\x20Engines!' && player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Page-Flip\x20effect'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Ancient\x20Telescope' && player2['main_arr']['length'] >= 0x1 && _0x2344f1['push']({
                        'label': 'Look\x20at\x20cards',
                        'data': 'Telescope\x20event'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Senri\x20Eye' && _0x2344f1['push']({
                        'label': 'Look\x20at\x20cards',
                        'data': 'Senri\x20event'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Draw\x20of\x20Fate' && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Fate\x20effect'
                    });
                    _0x355818['data']('cardfront')['data']('name') == 'Old\x20Mind' && _0x2344f1['push']({
                        'label': 'To\x20Opponent\x27s\x20Hand',
                        'data': 'To\x20hand\x202'
                    });
                    if (_0x355818['data']('cardfront')['data']('name') == 'Transmission\x20Gear' && moderator >= 0x2) { }
                    _0x355818['data']('cardfront')['data']('name') == 'Fusion\x20Guard' && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Banish\x20random\x20Fusion\x20card'
                    }),
                        (_0x355818['data']('cardfront')['data']('name') == 'The\x20Great\x20Noodle\x20Inversion' || _0x355818['data']('id') == 0x3451) && _0x2344f1['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Upside\x20Down\x20effect'
                        });
                }
                (isIn(_0x355818, player1['grave_arr']) >= 0x0 || isMonster(player1, _0x355818)) && (_0x355818['data']('cardfront')['data']('name') == 'Lilith,\x20Lady\x20of\x20Lament' && (player1['main_arr']['length'] >= 0x3 && hasAvailableSTZones(player1) && _0x2344f1['push']({
                    'label': 'Resolve\x20Effect',
                    'data': 'Lilith\x20effect'
                })),
                    _0x355818['data']('cardfront')['data']('name') == 'Super\x20Quantal\x20Fairy\x20Alphan' && (player1['main_arr']['length'] >= 0x3 && hasAvailableSTZones(player1) && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Alphan\x20effect'
                    })),
                    _0x355818['data']('cardfront')['data']('name') == 'Gizmek\x20Orochi,\x20the\x20Serpentron\x20Sky\x20Slasher' && (player1['main_arr']['length'] >= 0x8 && _0x2344f1['push']({
                        'label': 'Banish\x208\x20Cards\x20FD',
                        'data': 'Banish\x20top\x208\x20cards\x20FD'
                    }))),
                    _0x355818['data']('cardfront')['data']('name') == 'Golden\x20Castle\x20of\x20Stromberg' && player1['fieldSpell'] && _0x355818[0x0] == player1['fieldSpell'][0x0] && player1['main_arr']['length'] >= 0xa && _0x2344f1['push']({
                        'label': 'Banish\x2010\x20Cards\x20FD',
                        'data': 'Banish\x20top\x2010\x20cards\x20FD'
                    }),
                    _0x355818['data']('cardfront')['data']('name') == 'Malefic\x20World' && player1['fieldSpell'] && _0x355818[0x0] == player1['fieldSpell'][0x0] && player1['main_arr']['length'] >= 0x3 && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Crescent\x20effect'
                    }),
                    _0x355818['data']('cardfront')['data']('name') == 'Cynet\x20Storm' && player1['fieldSpell'] && _0x355818[0x0] == player1['fieldSpell'][0x0] && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'Cynet\x20Storm'
                    }),
                    _0x355818['data']('cardfront')['data']('name') == 'Prescience' && player1['opponent']['main_arr']['length'] > 0x0 && _0x2344f1['push']({
                        'label': 'Resolve\x20Effect',
                        'data': 'View\x20top\x20card\x202'
                    });
            }
            _0x355818['data']('cardfront')['data']('type') == 'Field' && isIn(_0x355818, player1['main_arr']) >= 0x0 && (findCard(['Set\x20Rotation']) && (player1['fieldSpell'] == null && _0x2344f1['push']({
                'label': 'Set',
                'data': 'Set\x20Field\x20Spell'
            }),
                player1['opponent']['fieldSpell'] == null && _0x2344f1['push']({
                    'label': 'Set\x20to\x20other\x20side',
                    'data': 'Set\x20Field\x20Spell\x202'
                })),
                findCard(['Dream\x20Mirror\x20Hypnagogia', 'Vaylantz\x20World\x20-\x20Konig\x20Wissen', 'Vaylantz\x20World\x20-\x20Shinra\x20Bansho']) && (player1['opponent']['fieldSpell'] == null && _0x2344f1['push']({
                    'label': 'Activate\x20to\x20other\x20side',
                    'data': 'Activate\x20Field\x20Spell\x202'
                }))),
                _0x355818['data']('cardfront')['data']('name') == 'Small\x20World' && _0x2344f1['push']({
                    'label': 'Check\x20Options',
                    'data': 'Resolve\x20Small\x20World'
                }),
                (isIn(_0x355818, player1['hand_arr']) >= 0x0 && findCard(['Amazoness\x20Chain\x20Master', 'Exchange', 'Graceful\x20Tear', 'Lullaby\x20of\x20Obedience', 'Gold\x20Moon\x20Coin', 'Magical\x20Contract\x20Door', 'Scrounging\x20Goblin']) || isIn(_0x355818, player1['banished_arr']) >= 0x0 && findCard(['Gift\x20Exchange'], !![], !![])) && _0x2344f1['push']({
                    'label': 'To\x20Opponent\x27s\x20Hand',
                    'data': 'To\x20hand\x202'
                }),
                findCard(['Jack-In-The-Hand']) && _0x2344f1['push']({
                    'label': 'To\x20Opponent\x27s\x20Hand',
                    'data': 'To\x20hand\x202'
                }),
                isIn(_0x355818, player1['grave_arr']) >= 0x0 && _0x355818['data']('cardfront')['data']('card_type') == 'Spell' && findCard(['Graverobber']) && _0x2344f1['push']({
                    'label': 'To\x20Opponent\x27s\x20Hand',
                    'data': 'To\x20hand\x202'
                }),
                _0x355818['hasClass']('xyzmaterial') && (_0x2344f1 = [],
                    _0x2344f1['push']({
                        'label': 'Detach',
                        'data': 'Detach'
                    }),
                    _0x2344f1['push']({
                        'label': 'Banish',
                        'data': 'Banish'
                    })),
                (viewing == 'Deck\x20(Picking\x204\x20Cards)' || viewing == 'Deck\x20(Picking\x203\x20Cards)' || viewing == 'Deck\x20(Picking\x202\x20Cards)' || viewing == 'Deck\x20(Picking\x20Card)') && (isIn(_0x355818, player1['main_arr']) >= 0x0 || isIn(_0x355818, player1['opponent']['main_arr']) >= 0x0) && (_0x2344f1 = [],
                    player1['temp_arr']['indexOf'](_0x355818['data']('id')) < 0x0 && _0x2344f1['push']({
                        'label': 'Choose',
                        'data': 'Choose\x20card'
                    })),
                player1['skillCard'] && _0x355818[0x0] == player1['skillCard'][0x0] && (_0x2344f1 = [],
                    _0x355818['data']('face_down') ? _0x2344f1['push']({
                        'label': 'Activate',
                        'data': 'Activate\x20Skill'
                    }) : (_0x2344f1['push']({
                        'label': 'Set',
                        'data': 'Set\x20Skill'
                    }),
                        _0x355818['data']('cardfront')['data']('name') == 'Millennium\x20Necklace' && _0x2344f1['push']({
                            'label': 'Look\x20at\x20cards',
                            'data': 'Necklace\x20event'
                        }),
                        _0x355818['data']('cardfront')['data']('name') == 'Cyberdark\x20Style' && _0x2344f1['push']({
                            'label': 'Resolve\x20Effect',
                            'data': 'Crescent\x20effect'
                        }))),
                moderator >= 0x2 && isIn(_0x355818, player1['hand_arr']) >= 0x0 && _0x2344f1['push']({
                    'label': 'Swap',
                    'data': 'Swap'
                });
        }
        hasXyzMonster(player1) && ((isIn(_0x355818, player1['grave_arr']) >= 0x0 || isIn(_0x355818, player1['banished_arr']) >= 0x0) && _0x2344f1['push']({
            'label': 'Attach',
            'data': 'Attach'
        }));
    }
    showMenu(_0x355818, _0x2344f1);
}
function hasXyzMonster(_0x323bad) {
    if (_0x323bad['m1'] && _0x323bad['m1']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (_0x323bad['m2'] && _0x323bad['m2']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (_0x323bad['m3'] && _0x323bad['m3']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (_0x323bad['m4'] && _0x323bad['m4']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (_0x323bad['m5'] && _0x323bad['m5']['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (linkLeft && linkLeft['data']('controller') == _0x323bad && linkLeft['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    if (linkRight && linkRight['data']('controller') == _0x323bad && linkRight['data']('cardfront')['data']('monster_color') == 'Xyz')
        return !![];
    return ![];
}
function menuOutE(_0xa39187) {
    automatic && $('#equips')['children']()['detach']();
    if (!menu_card || menu_card['parent']()[0x0] == $('#view\x20>\x20.content')[0x0])
        return;
    updateMouse(_0xa39187);
    var _0x5544bb = getScale(menu_card[0x0]) * 0x244
        , _0x53a17f = getRotation(menu_card[0x0]);
    _0x53a17f == 0xb4 && (_0x53a17f = 0x0);
    _0x53a17f != 0x0 && (_0x5544bb = getScale(menu_card[0x0]) * 0x190);
    _0x5544bb < 0x0 && (_0x5544bb = -_0x5544bb);
    var _0x11cd49 = parseInt(menu_card['css']('top')) - _0x5544bb / 0x2
        , _0x9232fe = parseFloat($('#content')[0x0]['style']['zoom'])
        , _0x2528b3 = _0xa39187['pageY'] / contentScale - marginTop / contentScale * _0x9232fe;
    if (_0x2528b3 <= _0x11cd49 + 0x5 || EDGE)
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
            'onComplete': function () {
                $('#start_turn\x20.red')['css']('opacity', 0x1),
                    $('#start_turn\x20.white_glow')['css']('opacity', 0x1),
                    TweenMax['to']($('#start_turn\x20.red'), 0.3, {
                        'onComplete': function () {
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
function countMonsters(_0x44fce6) {
    var _0xe9f63 = 0x0;
    return _0x44fce6['m1'] && _0xe9f63++,
        _0x44fce6['m2'] && _0xe9f63++,
        _0x44fce6['m3'] && _0xe9f63++,
        _0x44fce6['m4'] && _0xe9f63++,
        _0x44fce6['m5'] && _0xe9f63++,
        linkLeft && (linkLeft['data']('controller') == _0x44fce6 && _0xe9f63++),
        linkRight && (linkRight['data']('controller') == _0x44fce6 && _0xe9f63++),
        _0xe9f63;
}
function countSpells(_0x3591d2) {
    var _0x3568c6 = 0x0;
    return _0x3591d2['s1'] && _0x3568c6++,
        _0x3591d2['s2'] && _0x3568c6++,
        _0x3591d2['s3'] && _0x3568c6++,
        _0x3591d2['s4'] && _0x3568c6++,
        _0x3591d2['s5'] && _0x3568c6++,
        _0x3568c6;
}
function countFaceDownExtraDeckCards(_0x3021ea) {
    var _0x1c54b0 = 0x0;
    for (var _0x107faf = 0x0; _0x107faf < _0x3021ea['extra_arr']['length']; _0x107faf++) {
        _0x3021ea['extra_arr'][_0x107faf]['data']('face_down') == !![] && _0x1c54b0++;
    }
    return _0x1c54b0;
}
function showMenu(_0x57e5de, _0xce0883) {
    if (!_0xce0883) {
        menu_reason = 'Menu\x20has\x20no\x20data';
        return;
    }
    _0xce0883['reverse']();
    if (TweenMax['isTweening'](_0x57e5de)) {
        menu_reason = 'Card\x20is\x20currently\x20tweening';
        return;
    }
    if (menu_card && menu_card[0x0] == _0x57e5de[0x0]) {
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
    isInYourHand(player1, _0x57e5de) && (_0x57e5de['css']('top', _0x57e5de['data']('controller')['handY'] - 0x1e),
        $('#blue_target')['hide']());
    if (getScale(_0x57e5de[0x0]) < 0.2)
        for (var _0x3c9e81 = 0x0; _0x3c9e81 < _0xce0883['length']; _0x3c9e81++) {
            switch (_0xce0883[_0x3c9e81]['label']) {
                case 'S.\x20Summon\x20ATK':
                    _0xce0883[_0x3c9e81]['label'] = 'SS\x20ATK';
                    break;
                case 'S.\x20Summon\x20DEF':
                    _0xce0883[_0x3c9e81]['label'] = 'SS\x20DEF';
                    break;
                case 'To\x20Graveyard':
                    _0xce0883[_0x3c9e81]['label'] = 'To\x20Grave';
                    break;
                case 'To\x20Top\x20of\x20Deck':
                    _0xce0883[_0x3c9e81]['label'] = 'To\x20T.\x20Deck';
                    break;
                case 'To\x20Bottom\x20of\x20Deck':
                    _0xce0883[_0x3c9e81]['label'] = 'To\x20B.\x20Deck';
                    break;
            }
        }
    menu_card = _0x57e5de,
        menu['find']('#card_menu_content')['html']('');
    var _0x4d9316 = getScale(_0x57e5de[0x0]);
    _0x4d9316 < 0x0 && (_0x4d9316 = -_0x4d9316);
    var _0x327898 = 0x190
        , _0x2947a1 = 0x244
        , _0x895e40 = getRotation(_0x57e5de[0x0]);
    _0x895e40 == 0xb4 && (_0x895e40 = 0x0);
    _0x895e40 != 0x0 && (_0x327898 = 0x244,
        _0x2947a1 = 0x190);
    menu['css']('width', _0x327898 * _0x4d9316);
    if (_0x327898 * _0x4d9316 > 0x64) {
        console['log']('menu\x20is\x20too\x20wide');
        return;
    }
    var _0x58d612 = 0x0
        , _0x3c6532 = 0xe;
    for (var _0x3c9e81 = 0x0; _0x3c9e81 < _0xce0883['length']; _0x3c9e81++) {
        automatic && _0xce0883[_0x3c9e81]['label'] == 'Set\x20ST' && (_0xce0883[_0x3c9e81]['label'] = 'Set');
        var _0xb15369 = $('<div\x20class=\x22card_menu_btn\x22><div\x20class=\x22image\x22><img\x20src=\x22' + IMAGES_START + 'svg/card_menu_btn_up.svg\x22\x20/></div><span\x20class=\x22card_menu_txt\x22>' + _0xce0883[_0x3c9e81]['label'] + '</span></div>');
        _0xb15369['data']('data', _0xce0883[_0x3c9e81]['data']),
            _0xb15369['click'](cardMenuClickE),
            _0xb15369['css']('width', _0x327898 * _0x4d9316),
            _0xb15369['css']('height', _0x3c6532),
            _0xb15369['find']('.image')['css']('width', _0x327898);
        menu['hasClass']('unloaded') && (_0xb15369['find']('.image\x20img')[0x0]['onload'] = function () {
            menu['removeClass']('unloaded');
        }
        );
        var _0x55d7d8 = 0.265;
        _0x895e40 != 0x0 && (_0x55d7d8 = 0.18);
        TweenMax['to'](_0xb15369['find']('.image'), 0x0, {
            'scaleY': _0x55d7d8,
            'scaleX': _0x4d9316
        }),
            $('body')['append'](_0xb15369);
        var _0x4481e8 = 0xe;
        _0xb15369['find']('.card_menu_txt')[0x0]['scrollHeight'] > 0xf ? (_0x58d612 += _0xb15369['find']('.card_menu_txt')[0x0]['scrollHeight'] / _0x4481e8 * _0x3c6532,
            _0xb15369['css']('height', _0xb15369['find']('.card_menu_txt')[0x0]['scrollHeight'] / _0x4481e8 * _0x3c6532),
            TweenMax['to'](_0xb15369['find']('.image'), 0x0, {
                'scaleY': _0x55d7d8 * _0xb15369['find']('.card_menu_txt')[0x0]['scrollHeight'] / _0x4481e8,
                'scaleX': _0x4d9316
            })) : (_0x58d612 += _0x3c6532,
                _0xb15369['find']('.card_menu_txt')['css']('white-space', 'nowrap'));
        addButton(_0xb15369);
        switch (_0xce0883[_0x3c9e81]['label']) {
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
                _0xb15369['find']('img')['attr']('src', IMAGES_START + 'svg/card_menu_btn_up2.svg');
                break;
        }
        _0xce0883[_0x3c9e81]['label']['indexOf']('Mill\x20') >= 0x0 && _0xb15369['find']('img')['attr']('src', IMAGES_START + 'svg/card_menu_btn_up2.svg'),
            menu['find']('#card_menu_content')['append'](_0xb15369);
    }
    $('#viewing')['append'](menu),
        menu['css']('height', _0x58d612);
    var _0x39113b = parseInt(_0x57e5de['css']('left')) - _0x4d9316 * _0x327898 / 0x2
        , _0x38f8b2 = parseInt(_0x57e5de['css']('top')) - _0x2947a1 * _0x4d9316 / 0x2 - _0x58d612;
    menu_card['parent']()[0x0] == $('#view\x20>\x20.content')[0x0] && (_0x38f8b2 += 0x3a + 0x20 - $('#view\x20>\x20.content')['scrollTop'](),
        _0x39113b += 0xdb + 0x5);
    var _0x1d7100 = _0x38f8b2 + menu[0x0]['scrollHeight'];
    menu[0x0]['scrollHeight'] > parseInt(_0x57e5de['css']('height')) * _0x4d9316 && (_0x1d7100 = _0x38f8b2 + parseInt(_0x57e5de['css']('height')) * _0x4d9316),
        menu['css']('top', _0x38f8b2 + 0x1),
        menu['data']('top', _0x38f8b2 + 0x1),
        menu['css']('left', _0x39113b),
        TweenMax['set'](menu, {
            'scaleY': 0x1
        }),
        TweenMax['fromTo'](menu['find']('#card_menu_content'), 0.03 * _0xce0883['length'], {
            'top': _0x58d612
        }, {
            'top': 0x0,
            'ease': Linear['easeNone'],
            'onComplete': function () {
                var _0x249424 = 0x1;
                menu[0x0]['getBoundingClientRect']()['y'] < -marginTop && (_0x249424 = (menu[0x0]['scrollHeight'] + menu[0x0]['getBoundingClientRect']()['y']) / menu[0x0]['scrollHeight'],
                    menu['css']('top', _0x38f8b2 - menu[0x0]['getBoundingClientRect']()['y']),
                    TweenMax['set'](menu, {
                        'scaleY': _0x249424
                    }));
            }
        });
}
function isInYourHand(_0xe30d2f, _0x443d6a) {
    for (var _0x5a3749 = 0x0; _0x5a3749 < _0xe30d2f['hand_arr']['length']; _0x5a3749++) {
        if (!_0xe30d2f['hand_arr'][_0x5a3749])
            return addLine(_0xe30d2f['username'] + '\x27s\x20card\x20at\x20' + _0x5a3749 + '\x20is\x20null'),
                ![];
        if (_0xe30d2f['hand_arr'][_0x5a3749][0x0] == _0x443d6a[0x0])
            return !![];
    }
    return ![];
}
function cardMenuClickE(_0x14fa29) {
    _0x14fa29['stopPropagation'](),
        _0x14fa29['preventDefault'](),
        cardMenuClicked(menu_card, $(this)['data']('data'), _0x14fa29);
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
    var _0x252b28 = [];
    _0x252b28['push']({
        'label': 'Draw',
        'data': 'Draw\x20card'
    }),
        _0x252b28['push']({
            'label': 'Shuffle',
            'data': 'Shuffle\x20deck'
        }),
        _0x252b28['push']({
            'label': 'Mill',
            'data': 'Mill'
        }),
        _0x252b28['push']({
            'label': 'Banish\x20T.',
            'data': 'Banish'
        }),
        _0x252b28['push']({
            'label': 'Banish\x20FD',
            'data': 'Banish\x20FD'
        }),
        _0x252b28['push']({
            'label': 'View',
            'data': 'View\x20deck'
        }),
        !solo && _0x252b28['push']({
            'label': 'Show',
            'data': 'Show\x20deck'
        }),
        (findCard(['Convulsion\x20of\x20Nature']) || player1['deck_face_up']) && _0x252b28['push']({
            'label': 'Flip\x20Deck',
            'data': 'Flip\x20deck'
        }),
        findCard(['Grave\x20Lure']) && _0x252b28['push']({
            'label': 'Turn\x20Top\x20Card\x20FU',
            'data': 'Turn\x20top\x20card\x20face-up'
        }),
        findCard(['Card\x20of\x20Fate']) && _0x252b28['push']({
            'label': 'Card\x20of\x20Fate\x20Effect',
            'data': 'Card\x20of\x20Fate\x20effect'
        }),
        showMenu(player1['main_arr'][0x0], _0x252b28),
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
    var _0x52e179;
    switch (this) {
        case $('#m1_select')[0x0]:
            _0x52e179 = 'M-1';
            break;
        case $('#m2_select')[0x0]:
            _0x52e179 = 'M-2';
            break;
        case $('#m3_select')[0x0]:
            _0x52e179 = 'M-3';
            break;
        case $('#m4_select')[0x0]:
            _0x52e179 = 'M-4';
            break;
        case $('#m5_select')[0x0]:
            _0x52e179 = 'M-5';
            break;
        case $('#m1_select2')[0x0]:
            _0x52e179 = 'M2-1';
            break;
        case $('#m2_select2')[0x0]:
            _0x52e179 = 'M2-2';
            break;
        case $('#m3_select2')[0x0]:
            _0x52e179 = 'M2-3';
            break;
        case $('#m4_select2')[0x0]:
            _0x52e179 = 'M2-4';
            break;
        case $('#m5_select2')[0x0]:
            _0x52e179 = 'M2-5';
            break;
        case $('#s1_select')[0x0]:
            _0x52e179 = 'S-1';
            break;
        case $('#s2_select')[0x0]:
            _0x52e179 = 'S-2';
            break;
        case $('#s3_select')[0x0]:
            _0x52e179 = 'S-3';
            break;
        case $('#s4_select')[0x0]:
            _0x52e179 = 'S-4';
            break;
        case $('#s5_select')[0x0]:
            _0x52e179 = 'S-5';
            break;
        case $('#field_spell1_select')[0x0]:
            _0x52e179 = 'F-1';
            break;
        case $('#field_spell2_select')[0x0]:
            _0x52e179 = 'F-2';
            break;
        case $('#link_left_select')[0x0]:
            _0x52e179 = 'Left\x20Extra\x20Monster\x20Zone';
            break;
        case $('#link_right_select')[0x0]:
            _0x52e179 = 'Right\x20Extra\x20Monster\x20Zone';
            break;
    }
    if (getCardByZone(player1, _0x52e179))
        return;
    hideSelectZones(),
        Send({
            'action': 'Duel',
            'play': summoning_play,
            'card': summoning_card['data']('id'),
            'zone': _0x52e179
        });
    if (automatic && $('#duelmessage')['is'](':visible'))
        hideDuelMessage();
    else
        automatic && $('#duel\x20.cancel_btn')['hide']();
    removeMenuData();
}
function getCardByZone(_0x3f60e9, _0x5e4628) {
    switch (_0x5e4628) {
        case 'M-1':
            return _0x3f60e9['m1'];
        case 'M-2':
            return _0x3f60e9['m2'];
        case 'M-3':
            return _0x3f60e9['m3'];
        case 'M-4':
            return _0x3f60e9['m4'];
        case 'M-5':
            return _0x3f60e9['m5'];
        case 'M2-1':
            return _0x3f60e9['opponent']['m1'];
        case 'M2-2':
            return _0x3f60e9['opponent']['m2'];
        case 'M2-3':
            return _0x3f60e9['opponent']['m3'];
        case 'M2-4':
            return _0x3f60e9['opponent']['m4'];
        case 'M2-5':
            return _0x3f60e9['opponent']['m5'];
        case 'S-1':
            return _0x3f60e9['s1'];
        case 'S-2':
            return _0x3f60e9['s2'];
        case 'S-3':
            return _0x3f60e9['s3'];
        case 'S-4':
            return _0x3f60e9['s4'];
        case 'S-5':
            return _0x3f60e9['s5'];
        case 'F-1':
            return _0x3f60e9['fieldSpell'];
        case 'F-2':
            return _0x3f60e9['opponent']['fieldSpell'];
        case 'Left\x20Extra\x20Monster\x20Zone':
            return isPlayer1(_0x3f60e9['username']) ? linkLeft : linkRight;
        case 'Right\x20Extra\x20Monster\x20Zone':
            return isPlayer1(_0x3f60e9['username']) ? linkRight : linkLeft;
    }
    return null;
}
function getZoneByCard(_0x2bb617, _0x14ecab) {
    switch (_0x14ecab) {
        case _0x2bb617['m1']:
            return 'M-1';
        case _0x2bb617['m2']:
            return 'M-2';
        case _0x2bb617['m3']:
            return 'M-3';
        case _0x2bb617['m4']:
            return 'M-4';
        case _0x2bb617['m5']:
            return 'M-5';
        case _0x2bb617['opponent']['m1']:
            return 'M2-1';
        case _0x2bb617['opponent']['m2']:
            return 'M2-2';
        case _0x2bb617['opponent']['m3']:
            return 'M2-3';
        case _0x2bb617['opponent']['m4']:
            return 'M2-4';
        case _0x2bb617['opponent']['m5']:
            return 'M2-5';
        case _0x2bb617['s1']:
            return 'S-1';
        case _0x2bb617['s2']:
            return 'S-2';
        case _0x2bb617['s3']:
            return 'S-3';
        case _0x2bb617['s4']:
            return 'S-4';
        case _0x2bb617['s5']:
            return 'S-5';
        case _0x2bb617['fieldSpell']:
            return 'F-1';
        case _0x2bb617['opponent']['fieldSpell']:
            return 'F-2';
        case linkLeft:
            return isPlayer1(_0x2bb617['username']) ? 'Left\x20Extra\x20Monster\x20Zone' : 'Right\x20Extra\x20Monster\x20Zone';
        case linkRight:
            return isPlayer1(_0x2bb617['username']) ? 'Right\x20Extra\x20Monster\x20Zone' : 'Left\x20Extra\x20Monster\x20Zone';
    }
    return null;
}
function hasAvailableSTZones(_0x360958) {
    if (_0x360958['s1'] == null || _0x360958['s2'] == null || _0x360958['s3'] == null)
        return !![];
    if (!speed && !rush) {
        if (_0x360958['s4'] == null || _0x360958['s5'] == null)
            return !![];
    }
    return ![];
}
function startAttack(_0x406ce1) {
    updateMouse(_0x406ce1),
        TweenMax['to']($('#sword'), 0x0, {
            'left': parseInt(attacking_card['css']('left')),
            'top': parseInt(attacking_card['css']('top')),
            'rotation': -0x5a
        }),
        $('#sword')['show'](),
        $('body')['mousemove'](moveSword),
        moveSword(_0x406ce1),
        _0x406ce1['stopPropagation'](),
        $('body')['click'](checkAttack);
}
function moveSword(_0x464960) {
    updateMouse(_0x464960);
    var _0x188988 = mouseYScaled - parseInt($('#sword')['css']('top'))
        , _0x4e6fbb = mouseXScaled - parseInt($('#sword')['css']('left'));
    TweenMax['to']($('#sword'), 0x0, {
        'rotation': Math['atan2'](_0x188988, _0x4e6fbb) * 0xb4 / Math['PI']
    });
}
function removeMenuData() { }
function stopCountdown() {
    countdownTimer['stop'](),
        hideCountdown();
}
function hideCountdown() {
    $('#countdown1')['text'](''),
        $('#countdown1')['hide'](),
        $('#countdown2')['text'](''),
        $('#countdown2')['hide']();
}
function updateCountdown(_0x533ca3, _0x4366cd) {
    _0x533ca3['seconds'] = _0x4366cd['countdown'],
        countdownE(),
        countdownTimer['start'](),
        addLine('Waiting\x20for\x20' + escapeHTML(_0x4366cd['username']) + '...');
}
function countdownE() {
    players['forEach'](function (_0x3acb0c, _0x4f5bf4) {
        if (isOnline(_0x3acb0c['username']) || !_0x3acb0c['seconds'])
            return;
        _0x3acb0c['countdown']['text'](_0x3acb0c['seconds']),
            _0x3acb0c['countdown']['show'](),
            _0x3acb0c['seconds']--,
            _0x3acb0c['seconds'] < 0x0 && (_0x3acb0c['seconds'] = 0x0);
    });
}
function rejoinDuel(_0xe98c84, _0x318302) {
    addLine(escapeHTML(_0x318302['username']) + '\x20is\x20back.');
    if (_0xe98c84 == Player1())
        $('#gone1')['hide'](),
            $('#status1\x20.status_txt')['text']('');
    else
        _0xe98c84 == Player2() && ($('#gone2')['hide'](),
            $('#status2\x20.status_txt')['text'](''));
    if (replay && (!$('#gone1')['is'](':visible') || !$('#gone2')['is'](':visible')) || !replay && isOnline(_0xe98c84['opponent']['username'])) {
        stopCountdown();
        return;
    }
    _0xe98c84['countdown']['text'](''),
        _0xe98c84['countdown']['hide']();
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
    var _0x34c635 = [];
    _0x34c635['push']({
        'label': 'View',
        'data': 'View\x20ED'
    }),
        !solo && !automatic && _0x34c635['push']({
            'label': 'Show',
            'data': 'Show\x20ED'
        }),
        findCard(['Banquet\x20of\x20Millions']) && countFaceDownExtraDeckCards(player1) >= 0x1 && _0x34c635['push']({
            'label': 'Banish\x20random\x20ED\x20Card',
            'data': 'Banish\x20random\x20ED\x20card'
        }),
        showMenu(player1['extra_arr'][0x0], _0x34c635);
}
function viewMaterials(_0x5a930f) {
    removeCardMenu(),
        viewing_card_with_materials = getXyzHost(_0x5a930f['data']('id')),
        viewingE('Xyz\x20Materials'),
        Duelist() && Send({
            'action': 'Duel',
            'play': 'View\x20materials',
            'card': $(this)['data']('id')
        });
}
function getXyzHost(_0x2fe8c5) {
    var _0x272af3 = [player1['m1'], player1['m2'], player1['m3'], player1['m4'], player1['m5'], player2['m1'], player2['m2'], player2['m3'], player2['m4'], player2['m5'], linkLeft, linkRight];
    for (var _0x254491 of _0x272af3) {
        if (_0x254491 == null)
            continue;
        if (_0x254491['data']('id') == _0x2fe8c5)
            return _0x254491;
        for (var _0x473702 of _0x254491['data']('xyz_arr')) {
            if (_0x473702['data']('id') == _0x2fe8c5)
                return _0x254491;
        }
    }
    return null;
}
function targetCard() {
    var _0xdd7325 = $(this);
    if (_0xdd7325['hasClass']('xyzmaterial')) {
        viewMaterials(_0xdd7325);
        return;
    }
}
