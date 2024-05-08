'use strict';
(function (_0x5fc5f3, _0x14b9d4) {
    var _0x4452f4 = _0x16cc
        , _0xbb3456 = _0x5fc5f3();
    while (!![]) {
        try {
            var _0x207914 = parseInt(_0x4452f4(0x1c9)) / 0x1 + parseInt(_0x4452f4(0x1c7)) / 0x2 + parseInt(_0x4452f4(0x1ce)) / 0x3 + parseInt(_0x4452f4(0x1cd)) / 0x4 * (parseInt(_0x4452f4(0x1c6)) / 0x5) + parseInt(_0x4452f4(0x1cb)) / 0x6 + -parseInt(_0x4452f4(0x1ca)) / 0x7 * (parseInt(_0x4452f4(0x1cc)) / 0x8) + -parseInt(_0x4452f4(0x1c8)) / 0x9 * (parseInt(_0x4452f4(0x1c5)) / 0xa);
            if (_0x207914 === _0x14b9d4)
                break;
            else
                _0xbb3456['push'](_0xbb3456['shift']());
        } catch (_0x43fbe5) {
            _0xbb3456['push'](_0xbb3456['shift']());
        }
    }
}(_0x154f, 0x5bb76));
var MAC = window['navigator']['platform']['indexOf']('Mac') >= 0x0
    , PC = window['navigator']['platform']['indexOf']('Win') >= 0x0
    , OPERA = !!window['opr'] && !!opr['addons'] || !!window['opera'] || navigator['userAgent']['indexOf']('\x20OPR/') >= 0x0
    , FIREFOX = typeof InstallTrigger !== 'undefined'
    , SAFARI = !!(navigator['userAgent']['indexOf']('Safari') >= 0x0)
    , IE = ![] || !!document['documentMode']
    , EDGE = ![]
    , CHROME = !!(navigator['userAgent']['indexOf']('Chrome') >= 0x0)
    , BLINK = (CHROME || OPERA) && !!window['CSS']
    , TOR = !!(navigator['userAgent']['indexOf']('Firefox') >= 0x0) && navigator['plugins']['length'] == 0x0 && new Date()['getTimezoneOffset']() == 0x0 && screen['height'] == window['innerHeight'] && window['innerHeight'] == 0x320;
CHROME && (SAFARI = ![]);
EDGE && (CHROME = ![]);
TOR && (FIREFOX = ![]);
var jello = ![] || window['location']['href']['indexOf']('jello=true') >= 0x0, mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i['test'](navigator['userAgent']), swfHeight = 0x280, swfWidth = 0x400, dim = loadSVGAnimation(dim, 'dim', 'dim', 0xbb8, 0x7d0, 0x18, !![]), URL_START = 'https://www.duelingbook.com/', IMAGES_START = 'https://images.duelingbook.com/', SOUND_START = 'https://sounds.duelingbook.com/', AVATAR_START = IMAGES_START + 'thumbnails/', CARD_START = IMAGES_START + 'card/', CARDS_START = IMAGES_START + 'cards/', CARD_IMAGES_START = IMAGES_START + 'low-res/', CUSTOM_PICS_START = IMAGES_START + 'custom-pics/', PROFILE_PIC_START = IMAGES_START + 'profile-pics/', SKILL_BACKS_START = IMAGES_START + 'skill-backs/', SLEEVE_START = IMAGES_START + 'sleeves/', TOKEN_START = IMAGES_START + 'tokens/', CARD_TOKENS_START = IMAGES_START + 'card-tokens/', SOFT_PLAYS = ['Target\x20card', 'Permission\x20event', 'Permission\x20denied', 'Pause\x20game', 'Resume\x20game', 'Add\x20watcher', 'Remove\x20watcher', 'Duel\x20message', 'Watcher\x20message', 'Call\x20admin', 'Cancel\x20call', 'Offer\x20draw', 'Revoke\x20draw', 'Offer\x20rematch', 'Revoke\x20rematch', 'Typing'], TOKEN_IDS = ['1', '1-2', '1-3', '1-4', '2', '2-2', '3', '4', '5', '6', '7', '7-2', '7-3', '7-4', '7-5', '8', '9', '9-2', '10', '11', '12', '13', '14', '14-2', '15', '16', '16-2', '17', '18', '19', '20', '21', '22', '23', '24', '24-2', '24-3', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '42-2', '43', '43-2', '43-3', '44', '45', '46', '46-2', '46-3', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '57-2', '58', '58-2', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '72-2', '72-3', '72-4', '73', '74', '75', '76', '77', '78', '79', '79-2', '80', '81', '81-2', '81-3', '81-4', '82', '83', '84', '85', '86', '87', '88', '88-2', '88-3', '88-4', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169'], SnapShot = 'sounds/snapshot.mp3', ABOUT_ZERO = 0.1, action_list = $('#action_list'), active = ![], active_scrollpane, adjudicator = 0x0, admin = 0x0, admin_status = 0x0, alignLeft = window['location']['href']['toLowerCase']()['indexOf']('align=l') >= 0x0, alignRight = window['location']['href']['toLowerCase']()['indexOf']('align=r') >= 0x0, always_show_nsfw = 0x0, audio_arr = [], banner_ad = '', blocked_arr = [], cards_created = ![], FP1, FP2, FP3, FP4, changing_components = !![], combo_callback, conceal = ![], contentScale = 0x1, controlDown = ![], controlFocus, currentLabel = '', data_arr = [], db_id = '', dragXOffset, dragYOffset, duelId = 0x0, duelist = ![], fancy_scrollbars = !![], flat = ![], html = 0x0, image_url, images = [], input_callback, cancel_callback, lastAction, marginLeft = 0x0, marginTop = 0x0, menu = $('<div\x20id=\x22card_menu\x22\x20class=\x22unloaded\x22><div\x20id=\x22card_menu_content\x22></div></div>'), menu_card, mes1 = $('#mes1'), mes3 = $('#mes3'), mes4 = $('#mes4'), mes2 = $('#mes2'), moderator = 0x0, mouseX = 0x0, mouseXScaled = 0x0, mouseY = 0x0, mouseYScaled = 0x0, msg_callback, no_callback, notification_tweening = ![], password, prevFocus, preview, preview_vsp = 0x0, preview_txt = $('#preview_txt'), recycled_cardfronts_arr = [], regular = ![], remember_me = 0x0, remote = window['location']['href']['indexOf']('http') == 0x0, screenshotStyle = {
    'transform': 'scale(1)',
    'margin': '0px',
    'zoom': '1'
}, shiftDown = ![], showMes = 0x1, skinny_ad = '', slur_arr = ['asshole', 'ass\x20', 'bastard', 'beaner', 'bitch', 'cracker', '\x20cock\x20', 'coon', 'cunt', 'dick', 'dildo', 'faggot', 'fag', 'fuck', 'futa', 'hentai', 'hitler', 'horny', 'islam', 'muslim', 'nazi', 'nig', 'nigga', 'nigger', 'queer', 'slave', 'spick', 'pussy', '\x20rape', 'raping', '\x20shit', 'shit\x20', 'vagina'], statuses_data, streaming = ![], taking_screenshot = ![], testing1 = window['location']['href']['includes']('testing1=true'), testing2 = window['location']['href']['includes']('testing2=true'), TOUCHEND = ![], tourneys_data, userId = 0x0, usecardimages = ![], username, VERSION = 0x2c9, version = 0xd, yes_callback, viewing_card = ![], zooming = ![], Zoom = getZoom(), adjustTimer = new Timer(0x3e8);
adjustTimer['callback'] = adjustScreen;
var resizeETimer = new Timer(0x32);
resizeETimer['callback'] = function () {
    window['onscroll'] = resizeE;
}
    ;
var dimTimer = new Timer(0xfa0);
dimTimer['callback'] = abortDim;
var mouseMoveTimer = new Timer(0x2a);
mouseMoveTimer['callback'] = removeMouseMove;
var awaiting_cards = ![]
    , cardsInExtra = 0x0
    , cardsInMain = 0x0
    , cardsInSide = 0x0
    , deck_arr = []
    , deck_filled_arr = []
    , deckCardX = 0x0
    , deckCardY = 0x0
    , draggedCard = new CardFront()
    , extra_arr = []
    , extra_filled_arr = []
    , mainHeight = 72.5
    , mainWidth = 47.85
    , mainXArray = [247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5]
    , mainYArray = [0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 0x7, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 0xa2, 0xa2, 0xa2, 0xa2, 0xa2, 0xa2, 0xa2, 0xa2, 0xa2, 0xa2, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 0x13d, 0x13d, 0x13d, 0x13d, 0x13d, 0x13d, 0x13d, 0x13d, 0x13d, 0x13d, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5]
    , replay = ![]
    , search_arr = []
    , searching = ![]
    , searchXArray = [802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5]
    , searchYArray = [249.5, 249.5, 249.5, 249.5, 0x147, 0x147, 0x147, 0x147, 404.5, 404.5, 404.5, 404.5, 0x1e2, 0x1e2, 0x1e2, 0x1e2, 559.5, 559.5, 559.5, 559.5]
    , side_arr = []
    , side_filled_arr = []
    , sideHeight = 72.5 * 0.666
    , sideWidth = 47.85 * 0.666
    , sideXArray = [246.35, 0x11b, 319.65, 356.25, 392.9, 429.55, 466.2, 502.85, 539.5, 576.15, 612.8, 649.4, 686.05, 722.7, 759.35]
    , standings = $('#standings');
function initUtils() {
    standings['detach'](),
        addButton($('#msg\x20.ok_btn'), msgOK),
        addButton($('#link\x20.ok_btn'), hideDisplayBoxes),
        addButton($('#input\x20.ok_btn'), inputOK),
        addButton($('#input\x20.cancel_btn'), cancelCallback),
        addButton($('#combo\x20.ok_btn'), comboOK),
        addButton($('#combo\x20.cancel_btn'), hideDisplayBoxes),
        addButton($('#confirm\x20.yes_btn'), confirmYes),
        addButton($('#confirm\x20.no_btn'), confirmNo),
        addButton($('#confirm2\x20.yes_btn'), confirmYes),
        addButton($('#confirm2\x20.no_btn'), confirmNo),
        addButton($('#confirm2\x20.cancel_btn'), cancelCallback),
        addButton($('#recaptcha_box\x20.cancel_btn'), cancelCallback),
        addButton($('#screenshot_btn'), takeScreenshot),
        addButton($('#mute_btn'), muteE),
        preview = newCardFront(),
        preview['attr']('id', 'preview'),
        preview['css']('transform', 'scale(0.2460024600246,\x200.245991561181435)'),
        preview['data']('name', 'preview'),
        preview['find']('.name_txt')['addClass']('selectable'),
        preview['find']('.name2_txt')['addClass']('selectable'),
        preview['hide'](),
        preview_txt['mouseenter'](maximizePreview),
        preview_txt['mouseleave'](minimizePreview),
        preview_txt['scroll'](previewScrollE),
        preview_txt['mousemove'](previewMoveE),
        preview_txt['hide']();
}
jQuery['fn']['extend']({
    'selectedIndex': function (_0x4d338d) {
        return this['each'](function () {
            $(this)['prop']('selectedIndex', _0x4d338d),
                $(this)['data']('proxy') && ($(this)['data']('proxy')['text']($(this)['find']('option:selected')['first']()['text']()),
                    $(this)['data']('proxy')['append']($(this)['data']('proxy')['data']('line')),
                    $(this)['data']('proxy')['append']($(this)['data']('proxy')['data']('arrow')));
        }),
            this;
    },
    'checked': function (_0x5e104f) {
        return this['each'](function () {
            $(this)['prop']('checked', _0x5e104f);
            if ($(this)['data']('proxy')) {
                var _0x15a699 = $(this)['data']('proxy')['find']('.check');
                _0x5e104f ? _0x15a699['show']() : _0x15a699['hide']();
            }
        }),
            this;
    },
    'disable': function (_0x4d0d05) {
        return this['each'](function () {
            $(this)['prop']('disabled', _0x4d0d05);
            var _0xb11af6 = $(this)['data']('proxy');
            if (!_0xb11af6)
                return console['log']($(this)['attr']('class') + '\x20does\x20not\x20have\x20a\x20proxy\x20to\x20disable'),
                    !![];
            _0x4d0d05 == !![] ? (_0xb11af6['addClass']('disabled'),
                _0xb11af6['css']('opacity', 0.5)) : (_0xb11af6['removeClass']('disabled'),
                    _0xb11af6['css']('opacity', 0x1)),
                !_0xb11af6['hasClass']('checkbox') && !_0xb11af6['hasClass']('radiobutton') && !_0xb11af6['hasClass']('combobox') && _0xb11af6['text']($(this)['val']());
        }),
            this;
    },
    'visible': function (_0xd6e68d) {
        return this['each'](function () {
            var _0x17f1dc = 'hidden';
            _0xd6e68d && (_0x17f1dc = 'visible'),
                $(this)['css']('visibility', _0x17f1dc),
                $(this)['data']('proxy') && $(this)['data']('proxy')['css']('visibility', _0x17f1dc);
        }),
            this;
    },
    'setWidth': function (_0x218c69) {
        return this['each'](function () {
            $(this)['css']('width', _0x218c69 + 'px'),
                resizeComponent($(this), ![]);
            var _0x12499b = $(this)['data']('proxy');
            this instanceof HTMLInputElement && this['type'] == 'text' ? _0x12499b['css']('width', parseInt($(this)['css']('width')) + 'px') : _0x12499b['css']('width', parseInt($(this)['css']('width')) + 'px');
        }),
            this;
    },
    'setPosition': function (_0xad22fb, _0x1cf223) {
        return this['each'](function () {
            $(this)['css']('left', _0xad22fb + 'px'),
                $(this)['css']('top', _0x1cf223 + 'px'),
                $(this)['data']('proxy') && ($(this)['data']('proxy')['css']('left', _0xad22fb + 'px'),
                    $(this)['data']('proxy')['css']('top', _0x1cf223 + 'px'),
                    $(this)['data']('proxy')['insertAfter']($(this)));
        }),
            this;
    },
    'setHTML': function (_0x2d1940) {
        return this['each'](function () {
            !$(this)['html']() && $(this)['html'](_0x2d1940);
        }),
            this;
    },
    'scrollMax': function () {
        var _0x2bad1d = $(this)[0x0]['scrollHeight'] - $(this)['outerHeight']();
        return this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0 && (_0x2bad1d = this['find']('*[data-overlayscrollbars-viewport]:first')[0x0]['scrollHeight'] - this['find']('*[data-overlayscrollbars-viewport]:first')['outerHeight']()),
            _0x2bad1d;
    },
    'scrollLeftMax': function () {
        var _0x164f79 = $(this)[0x0]['scrollWidth'] - $(this)['outerWidth']();
        return this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0 && (_0x164f79 = this['find']('*[data-overlayscrollbars-viewport]:first')[0x0]['scrollWidth'] - this['find']('*[data-overlayscrollbars-viewport]:first')['outerWidth']()),
            _0x164f79;
    },
    'scrollHeight': function () {
        if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
            return this['find']('*[data-overlayscrollbars-viewport]:first')[0x0]['scrollHeight'];
        return this[0x0]['scrollHeight'];
    }
}),
    function (_0x41160e) {
        var _0x25d236 = _0x41160e['fn']['val'];
        _0x41160e['fn']['val'] = function (_0x1d3fb8) {
            if (arguments['length'] >= 0x1)
                return this['data']('proxy') && (this['hasClass']('comboboxlike') ? (this['data']('proxy')['find']('span')['detach'](),
                    this['data']('proxy')['prepend']('<span>' + escapeHTML(_0x1d3fb8) + '</span>')) : this['data']('proxy')['text'](_0x1d3fb8)),
                    _0x25d236['call'](this, _0x1d3fb8);
            return _0x25d236['call'](this);
        }
            ;
    }(jQuery),
    function (_0x57f577) {
        var _0x1647e9 = _0x57f577['fn']['focus'];
        _0x57f577['fn']['focus'] = function () {
            if (mobile)
                return this;
            return _0x57f577(this)['attr']('type') != 'radio' && (prevFocus = this),
                _0x1647e9['call'](this);
        }
            ;
    }(jQuery),
    function (_0x4b9368) {
        var _0x14283f = _0x4b9368['fn']['select'];
        _0x4b9368['fn']['select'] = function () {
            if (mobile)
                return this;
            return _0x14283f['call'](this);
        }
            ;
    }(jQuery),
    function (_0x134e21) {
        jQuery['fn']['extend']({
            'prependClass': function (_0x70fbd7) {
                return this['each'](function () {
                    var _0x451837 = _0x134e21(this)['prop']('class');
                    _0x134e21(this)['removeClass'](_0x451837)['addClass'](_0x70fbd7 + '\x20' + _0x451837);
                });
            }
        });
    }(jQuery),
    jQuery['fn']['sortElements'] = (function () {
        var _0x8abe6b = []['sort'];
        return function (_0x96daeb, _0x27d09d) {
            _0x27d09d = _0x27d09d || function () {
                return this;
            }
                ;
            var _0x25e740 = this['map'](function () {
                var _0x4714f9 = _0x27d09d['call'](this)
                    , _0x632be = _0x4714f9['parentNode']
                    , _0x2a7556 = _0x632be['insertBefore'](document['createTextNode'](''), _0x4714f9['nextSibling']);
                return function () {
                    if (_0x632be === this)
                        throw new Error('You\x20can\x27t\x20sort\x20elements\x20if\x20any\x20one\x20is\x20a\x20descendant\x20of\x20another.');
                    _0x632be['insertBefore'](this, _0x2a7556),
                        _0x632be['removeChild'](_0x2a7556);
                }
                    ;
            });
            return _0x8abe6b['call'](this, _0x96daeb)['each'](function (_0x18358a) {
                _0x25e740[_0x18358a]['call'](_0x27d09d['call'](this));
            });
        }
            ;
    }());
function addScrollBars() {
    if (!fancy_scrollbars)
        return;
    var { OverlayScrollbars: _0xb6807c, ScrollbarsHidingPlugin: _0x340f10, SizeObserverPlugin: _0x1eb9f5, ClickScrollPlugin: _0x31cf59 } = OverlayScrollbarsGlobal;
    _0xb6807c['plugin']([_0x340f10, _0x1eb9f5, _0x31cf59]),
        function (_0x50be2b) {
            var _0x4d0978 = _0x50be2b['fn']['parent'];
            _0x50be2b['fn']['parent'] = function () {
                var _0x63b10 = _0x4d0978['call'](this);
                if (_0x63b10['is']('[data-overlayscrollbars-viewport]'))
                    return _0x63b10['parents']('.scrollpane:first');
                return _0x63b10;
            }
                ;
        }(jQuery),
        function (_0x2b78ef) {
            var _0x558ac5 = _0x2b78ef['fn']['append'];
            _0x2b78ef['fn']['append'] = function (_0x2db825) {
                if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                    return _0x558ac5['call'](this['find']('*[data-overlayscrollbars-viewport]:first'), _0x2db825);
                return _0x558ac5['call'](this, _0x2db825);
            }
                ;
        }(jQuery),
        function (_0x3bc83d) {
            var _0x269f46 = _0x3bc83d['fn']['prepend'];
            _0x3bc83d['fn']['prepend'] = function (_0x5badec) {
                if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                    return _0x269f46['call'](this['find']('*[data-overlayscrollbars-viewport]:first'), _0x5badec);
                return _0x269f46['call'](this, _0x5badec);
            }
                ;
        }(jQuery),
        function (_0x546659) {
            var _0x2bff40 = _0x546659['fn']['html'];
            _0x546659['fn']['html'] = function (_0x38c00a) {
                if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0) {
                    if (arguments['length'] >= 0x1)
                        return _0x2bff40['call'](this['find']('*[data-overlayscrollbars-viewport]:first'), _0x38c00a);
                    return _0x2bff40['call'](this['find']('*[data-overlayscrollbars-viewport]:first'));
                }
                if (arguments['length'] >= 0x1)
                    return _0x2bff40['call'](this, _0x38c00a);
                return _0x2bff40['call'](this);
            }
                ;
        }(jQuery),
        function (_0x412021) {
            var _0x360eb3 = _0x412021['fn']['text'];
            _0x412021['fn']['text'] = function (_0x3f0f03) {
                if (arguments['length'] >= 0x1) {
                    if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                        return _0x360eb3['call'](this['find']('*[data-overlayscrollbars-viewport]:first'), _0x3f0f03);
                    return _0x360eb3['call'](this, _0x3f0f03);
                }
                return _0x360eb3['call'](this);
            }
                ;
        }(jQuery),
        function (_0x2f6a34) {
            var _0x3505ec = _0x2f6a34['fn']['scrollTop'];
            _0x2f6a34['fn']['scrollTop'] = function (_0x14f6b8) {
                if (arguments['length'] >= 0x1) {
                    if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                        return this['data']('scrollpane')['elements']()['viewport']['scrollTo']({
                            'top': _0x14f6b8
                        });
                    return _0x3505ec['call'](this, _0x14f6b8);
                }
                if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                    return this['data']('scrollpane')['elements']()['viewport']['scrollTop'];
                return _0x3505ec['call'](this);
            }
                ;
        }(jQuery),
        function (_0x5d939c) {
            var _0x3aa88a = _0x5d939c['fn']['scrollLeft'];
            _0x5d939c['fn']['scrollLeft'] = function (_0x23e087) {
                if (arguments['length'] >= 0x1) {
                    if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                        return this['data']('scrollpane')['elements']()['viewport']['scrollLeft']({
                            'left': _0x23e087
                        });
                    return _0x3aa88a['call'](this, _0x23e087);
                }
                if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                    return this['data']('scrollpane')['elements']()['viewport']['scrollLeft'];
                return _0x3aa88a['call'](this);
            }
                ;
        }(jQuery),
        $('#widget\x20.body')['removeClass']('scrollpane'),
        $('.scrollpane')['each'](function (_0x1b9643, _0x20e3c6) {
            var _0x5cb2c9 = _0xb6807c(_0x20e3c6, {
                'scrollbars': {
                    'clickScroll': !![]
                },
                'overflow': {
                    'x': $(_0x20e3c6)['css']('overflow-x'),
                    'y': $(_0x20e3c6)['css']('overflow-y')
                }
            }, {
                'scroll': function (_0x109a57, _0x21787e) {
                    $(_0x20e3c6)['trigger']('scroll');
                }
            });
            $(_0x20e3c6)['data']('scrollpane', _0x5cb2c9),
                $(_0x20e3c6)['css']('overflow', 'hidden');
        });
}
(function (_0x28b052) {
    _0x28b052['fn']['innerText'] = function (_0x377375) {
        if (_0x377375) {
            if (document['body']['innerText'])
                for (var _0x1e22b8 in this) {
                    this[_0x1e22b8]['innerText'] = _0x377375;
                }
            else
                for (var _0x1e22b8 in this) {
                    this[_0x1e22b8]['innerHTML']['replace'](/&amp;lt;br&amp;gt;/gi, 'n')['replace'](/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, '');
                }
            return this;
        } else
            return document['body']['innerText'] ? this[0x0]['innerText'] : this[0x0]['innerHTML']['replace'](/&amp;lt;br&amp;gt;/gi, 'n')['replace'](/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, '');
    }
        ;
}(jQuery));
function resizeE() {
    loadMessage();
    if (mobile) {
        console['log']('returning\x20because\x20mobile');
        return;
    }
    if (jello) {
        if (document['body']['clientHeight'] >= 0x280) {
            $('#content')['css']('height', '100%');
            return;
        }
        jelloE(),
            console['log']('returning\x20because\x20jello');
        return;
    }
    var _0x51a495 = getHeight() - getScaledHeight();
    _0x51a495 > 0x0 ? contentScale = getScaledHeight() / swfHeight : contentScale = getScaledWidth() / swfWidth,
        zooming ? $('#content')[0x0]['style']['zoom'] = contentScale : $('#content')['css']('transform', 'scale(' + contentScale + ')'),
        marginTop = 0x0,
        _0x51a495 > 0x0 ? marginLeft = 0x0 : marginLeft = (window['innerWidth'] - getScaledWidth()) / 0x2,
        alignLeft && (marginLeft = 0x0),
        !zooming && (alignRight ? $('#content')['css']('margin-left', marginLeft * 0x2 + 'px') : $('#content')['css']('margin-left', marginLeft + 'px')),
        window['innerHeight'] / window['innerWidth'] > 0.625 && (marginTop = window['innerHeight'] / 0x2 - window['innerWidth'] * 0.625 / 0x2),
        $('#content')['css']('margin-top', marginTop / parseFloat($('#content')[0x0]['style']['zoom']) + 'px'),
        $('select,\x20option')['css']('font-size', 0xc * contentScale + 'px'),
        $('#combo\x20select')['css']('font-size', 18.6 * contentScale + 'px'),
        EDGE && (contentScale = 0x1);
}
function jelloE() {
    jello = !![],
        console['log']('jelloE'),
        $('body')['css']('overflow-x', 'hidden'),
        $('#content')['css']('transform', 'unset'),
        $('#content')['css']('margin-top', 'auto'),
        $('#content')['css']('margin-left', 'auto'),
        $('option')['css']('font-size', '12px'),
        $('#combo\x20option')['css']('font-size', '25px');
}
function unjelloE() {
    console['log']('unjelloE'),
        jello = ![],
        $('html')['scrollTop'](0x0),
        resizeE();
}
function getWidth() {
    return window['innerWidth'];
}
function getHeight() {
    return window['innerHeight'];
}
function getScaledHeight() {
    var _0x15c1f6 = getWidth()
        , _0x577c95 = swfHeight / swfWidth * _0x15c1f6;
    return _0x577c95;
}
function getScaledWidth() {
    var _0x5c8a23 = getHeight()
        , _0x946e12 = swfWidth / swfHeight * _0x5c8a23;
    return _0x946e12;
}
function changeInputs(_0x44cac9) {
    var _0x10d1e2 = 'input[type=text],\x20input[type=password],\x20input[type=date]';
    _0x44cac9 && (_0x10d1e2 = '#' + currentLabel + '\x20input[type=text],\x20#' + currentLabel + '\x20input[type=password]'),
        $(_0x10d1e2)['each'](function (_0x50f4f0, _0x3213b0) {
            var _0x140cb2 = $(this)
                , _0x4c7275 = $('<div></div>');
            if (!changing_components)
                return _0x140cb2['data']('proxy', _0x4c7275),
                    !![];
            _0x4c7275['addClass']('textinput'),
                _0x4c7275['addClass']('proxy'),
                _0x4c7275['css']('left', _0x140cb2['css']('left')),
                _0x4c7275['css']('top', _0x140cb2['css']('top')),
                _0x4c7275['css']('width', parseInt(_0x140cb2['css']('width')) - 0x6),
                _0x4c7275['css']('height', parseInt(_0x140cb2['css']('height')) - 0x3 + 'px'),
                _0x4c7275['css']('display', _0x140cb2['css']('display')),
                _0x4c7275['css']('opacity', _0x140cb2['css']('opacity')),
                _0x4c7275['data']('proxy', _0x140cb2),
                _0x4c7275['insertAfter'](_0x140cb2),
                _0x140cb2['data']('proxy', _0x4c7275),
                _0x140cb2['css']('opacity', 0x0),
                _0x140cb2['on']('input\x20blur', function () {
                    _0x140cb2['attr']('type') == 'password' ? _0x140cb2['data']('proxy')['text'](toPassword(_0x140cb2['val']())) : _0x140cb2['data']('proxy')['text'](_0x140cb2['val']());
                }),
                _0x140cb2['on']('focus\x20keydown', function () {
                    _0x4c7275['hide'](),
                        _0x4c7275['css']('opacity', 0x0),
                        _0x140cb2['css']('opacity', 0x1);
                }),
                _0x140cb2['on']('focusout', function () {
                    _0x4c7275['show'](),
                        _0x4c7275['css']('opacity', _0x140cb2['css']('opacity')),
                        _0x140cb2['css']('opacity', 0x0);
                }),
                _0x140cb2['prop']('disabled') == !![] && _0x4c7275['css']('opacity', 0.5),
                watchComponent(_0x140cb2);
        });
}
function resizeComponents() {
    $('input[type=text],\x20input[type=password]')['each'](function (_0x43d103, _0x1fbafb) {
        resizeComponent($(this));
    }),
        $('textarea')['each'](function (_0x36a540, _0x398a07) {
            resizeComponent($(this));
        });
}
function resizeComponents() {
    $('input[type=text],\x20input[type=password],\x20textarea')['each'](function (_0x9561f3, _0x3549c9) {
        resizeComponent($(this));
    });
}
function resizeComponent(_0x3a4971, _0x1cc489) {
    _0x1cc489 !== ![] && (_0x1cc489 = !![]);
    if (_0x3a4971[0x0] instanceof HTMLInputElement && (_0x3a4971[0x0]['type'] == 'text' || _0x3a4971[0x0]['type'] == 'password')) {
        if (FIREFOX)
            PC ? (_0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0x7 + 'px'),
                _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0x5 + 'px')) : (_0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0x9 + 'px'),
                    _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0x9 + 'px'));
        else {
            if (EDGE)
                _0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0x7 + 'px'),
                    _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0x5 + 'px');
            else {
                if (IE)
                    _0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0x7 + 'px'),
                        _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0x5 + 'px');
                else {
                    if (CHROME)
                        _0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0x7 + 'px'),
                            PC ? _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0x4 + 'px') : _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0x6 + 'px');
                    else
                        SAFARI ? mobile ? (_0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0x8 + 'px'),
                            _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0xe + 'px')) : (_0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0x7 + 'px'),
                                _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0x7 + 'px')) : (_0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0x9 + 'px'),
                                    _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0x9 + 'px'));
                }
            }
        }
    } else {
        if (_0x3a4971[0x0] instanceof HTMLTextAreaElement) {
            if (FIREFOX)
                _0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0xb + 'px'),
                    _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0xa + 'px');
            else
                IE ? (_0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0xa + 'px'),
                    _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0xa + 0x10 + 'px')) : (_0x1cc489 && _0x3a4971['css']('height', parseInt(_0x3a4971['css']('height')) - 0xa + 'px'),
                        _0x3a4971['css']('width', parseInt(_0x3a4971['css']('width')) - 0xa + 'px'));
        }
    }
}
function changeSelects(_0x4ad537) {
    var _0x107390 = 'select';
    _0x4ad537 && (_0x107390 = '#' + currentLabel + '\x20select'),
        $(_0x107390 + ',\x20.comboboxlike')['each'](function (_0x5de760, _0x33f8b2) {
            var _0x5da5da = $(this)
                , _0x4917e4 = $('<div\x20class=\x22combobox\x22></div>');
            if (!changing_components)
                return _0x5da5da['data']('proxy', _0x4917e4),
                    !![];
            _0x4917e4['addClass']('proxy\x20unselectable'),
                _0x4917e4['css']('left', _0x5da5da['css']('left')),
                _0x4917e4['css']('top', _0x5da5da['css']('top')),
                _0x4917e4['css']('width', parseInt(_0x5da5da['css']('width')) - 0x7),
                _0x4917e4['data']('proxy', _0x5da5da),
                _0x4917e4['insertAfter'](_0x5da5da),
                _0x4917e4['text'](_0x5da5da['find']('option:selected')['text']());
            var _0x277b3d = $('<div\x20class=\x22combobox_line\x22></div>');
            _0x4917e4['data']('line', _0x277b3d),
                _0x4917e4['append'](_0x277b3d);
            var _0x4e8ea0 = $('<div\x20class=\x22combobox_arrow\x22><img\x20src=\x22' + IMAGES_START + 'svg/combobox_arrow.svg\x22\x20/></div>');
            _0x4917e4['data']('arrow', _0x4e8ea0),
                _0x4917e4['append'](_0x4e8ea0),
                _0x5da5da['data']('proxy', _0x4917e4),
                _0x5da5da['css']('opacity', 0x0),
                _0x4917e4['css']('display', _0x5da5da['css']('display')),
                _0x5da5da['change'](function () {
                    _0x4917e4['text'](_0x5da5da['find']('option:selected')['text']()),
                        _0x4917e4['append'](_0x277b3d),
                        _0x4917e4['append'](_0x4e8ea0);
                }),
                _0x5da5da['on']('mouseenter\x20focus', function () {
                    _0x4917e4['addClass']('combobox_selected');
                }),
                _0x5da5da['on']('mouseout\x20focusout', function () {
                    _0x4917e4['removeClass']('combobox_selected');
                }),
                _0x5da5da['prop']('disabled') == !![] && _0x4917e4['addClass']('disabled'),
                watchComponent(_0x5da5da);
        });
}
function changeButtons(_0x2722aa) {
    var _0x3f232f = 'input[type=submit],\x20input[type=file]';
    _0x2722aa && (_0x3f232f = '#' + currentLabel + '\x20input[type=submit],\x20#' + currentLabel + '\x20input[type=file]'),
        $(_0x3f232f)['each'](function (_0x2de800, _0x4c0b08) {
            changeButton($(this));
        });
}
function changeButton(_0xa3ff4) {
    if (_0xa3ff4['data']('proxy'))
        return;
    _0xa3ff4['parent']()['length'] > 0x0 && _0xa3ff4['css']('width')['indexOf']('.9') >= 0x0 && parseInt(_0xa3ff4['css']('width')) > 0x64 && _0xa3ff4['css']('width', parseInt(_0xa3ff4['css']('width')) - 0x10);
    var _0x133b05 = $('<div\x20class=\x22button\x22></div>');
    if (!changing_components)
        return _0xa3ff4['data']('proxy', _0x133b05),
            !![];
    _0x133b05['addClass']('proxy'),
        _0x133b05['addClass']('unselectable'),
        _0xa3ff4['hasClass']('button2') && _0x133b05['addClass']('button2'),
        _0x133b05['css']('left', _0xa3ff4['css']('left')),
        _0x133b05['css']('top', _0xa3ff4['css']('top')),
        _0x133b05['css']('right', _0xa3ff4['css']('right')),
        _0x133b05['css']('width', parseInt(_0xa3ff4['css']('width')) - 0x2),
        _0x133b05['css']('height', '17px'),
        _0x133b05['css']('color', _0xa3ff4['css']('color')),
        _0x133b05['text'](_0xa3ff4['val']()),
        _0x133b05['data']('proxy', _0xa3ff4),
        _0x133b05['insertAfter'](_0xa3ff4),
        _0xa3ff4['data']('proxy', _0x133b05),
        _0xa3ff4['css']('opacity', 0x0),
        _0x133b05['css']('display', _0xa3ff4['css']('display')),
        _0xa3ff4['on']('mouseover\x20focus', function () {
            _0x133b05['addClass']('button_selected');
        }),
        _0xa3ff4['on']('mouseout\x20focusout', function () {
            _0x133b05['removeClass']('button_selected'),
                _0x133b05['removeClass']('button_down');
        }),
        _0xa3ff4['on']('mousedown', function () {
            _0x133b05['addClass']('button_down');
        }),
        _0xa3ff4['on']('mouseup', function () {
            _0x133b05['removeClass']('button_down');
        }),
        _0xa3ff4['prop']('disabled') == !![] && _0x133b05['addClass']('disabled'),
        watchComponent(_0xa3ff4);
}
function changeCheckboxes(_0x3c625e) {
    var _0x342210 = 'input[type=checkbox]';
    _0x3c625e && (_0x342210 = '#' + currentLabel + '\x20input[type=checkbox]'),
        $(_0x342210)['each'](function (_0x82f973, _0x1db92f) {
            var _0x24df93 = $(this)
                , _0x318b78 = $('<div\x20class=\x22checkbox\x22></div>');
            if (!changing_components)
                return _0x24df93['data']('proxy', _0x318b78),
                    !![];
            _0x318b78['data']('proxy', _0x24df93),
                _0x318b78['css']('left', parseInt(_0x24df93['css']('left')) + 0x2),
                _0x318b78['css']('top', parseInt(_0x24df93['css']('top')) + 0x2),
                _0x318b78['css']('display', _0x24df93['css']('display'));
            var _0x378267 = $('<img\x20class=\x22check\x22\x20src=\x22' + IMAGES_START + 'svg/check.svg\x22>');
            _0x318b78['append'](_0x378267),
                _0x318b78['insertAfter'](_0x24df93),
                _0x24df93['data']('proxy', _0x318b78),
                _0x24df93['css']('opacity', 0x0),
                _0x24df93['on']('mouseenter\x20focus', function () {
                    _0x318b78['addClass']('checkbox_selected');
                }),
                _0x24df93['on']('mouseout\x20focusout', function () {
                    _0x318b78['removeClass']('checkbox_selected'),
                        _0x318b78['removeClass']('checkbox_down');
                }),
                _0x24df93['on']('mousedown', function () {
                    _0x318b78['addClass']('checkbox_down');
                }),
                _0x24df93['on']('mouseup', function () {
                    _0x318b78['removeClass']('checkbox_down');
                }),
                _0x24df93['change'](function () {
                    _0x24df93['is'](':checked') ? _0x378267['show']() : _0x378267['hide']();
                }),
                _0x24df93['is'](':checked') ? _0x378267['show']() : _0x378267['hide'](),
                _0x24df93['prop']('disabled') == !![] && _0x318b78['addClass']('disabled'),
                watchComponent(_0x24df93);
        });
}
function changeRadios(_0x1c5f1a) {
    var _0x3c96d2 = 'input[type=radio]';
    _0x1c5f1a && (_0x3c96d2 = '#' + currentLabel + '\x20input[type=radio]'),
        $(_0x3c96d2)['each'](function (_0x48bd36, _0x15fdf2) {
            var _0x3d721 = $(this)
                , _0x70f72c = $('<div\x20class=\x22radiobutton\x22></div>');
            if (!changing_components)
                return _0x3d721['data']('proxy', _0x70f72c),
                    !![];
            _0x70f72c['data']('proxy', _0x3d721),
                _0x70f72c['css']('left', parseInt(_0x3d721['css']('left')) + 0x2),
                _0x70f72c['css']('top', parseInt(_0x3d721['css']('top')) + 0x2),
                _0x70f72c['attr']('name', _0x3d721['attr']('name')),
                _0x70f72c['attr']('id', 'radiobutton' + (_0x48bd36 + 0x1));
            var _0x43f22c = $('<img\x20class=\x22check\x22\x20src=\x22' + IMAGES_START + 'svg/radio.svg\x22>');
            _0x70f72c['append'](_0x43f22c),
                _0x70f72c['insertAfter'](_0x3d721),
                _0x3d721['data']('proxy', _0x70f72c),
                _0x3d721['css']('opacity', 0x0),
                _0x3d721['on']('mouseenter\x20focus', function () {
                    _0x70f72c['addClass']('radiobutton_selected');
                }),
                _0x3d721['on']('mouseout\x20focusout', function () {
                    _0x70f72c['removeClass']('radiobutton_selected'),
                        _0x70f72c['removeClass']('radiobutton_down');
                }),
                _0x3d721['on']('mousedown', function () {
                    _0x70f72c['addClass']('radiobutton_down');
                }),
                _0x3d721['on']('mouseup', function () {
                    _0x70f72c['removeClass']('radiobutton_down');
                }),
                _0x3d721['change'](function () {
                    _0x3d721['is'](':checked') ? (_0x43f22c['show'](),
                        _0x3d721['attr']('checked', 'checked')) : _0x43f22c['hide'](),
                        $('input[type=radio][name=\x22' + _0x3d721['attr']('name') + '\x22]')['not'](_0x3d721)['removeAttr']('checked'),
                        $('.radiobutton[name=' + _0x70f72c['attr']('name') + ']')['each'](function () {
                            $(this)['attr']('id') != _0x70f72c['attr']('id') && $(this)['find']('.check')['hide']();
                        });
                }),
                _0x3d721['is'](':checked') ? _0x43f22c['show']() : _0x43f22c['hide'](),
                _0x3d721['prop']('disabled') == !![] && _0x70f72c['addClass']('disabled'),
                watchComponent(_0x3d721);
        });
}
function addButton(_0x2504e5, _0x2b0936) {
    var _0x5c5342 = _0x2504e5['attr']('class');
    !_0x5c5342 ? _0x5c5342 = _0x2504e5['attr']('id') : (_0x5c5342['indexOf']('\x20') >= 0x0 && (_0x5c5342 = _0x5c5342['substring'](0x0, _0x5c5342['indexOf']('\x20'))),
        _0x5c5342['indexOf']('btn') < 0x0 && (_0x5c5342 = _0x2504e5['attr']('id')));
    var _0x3e2753 = _0x2504e5['find']('img')['last']();
    _0x2504e5['css']('cursor', 'pointer');
    var _0x29afd1 = IMAGES_START + 'svg/'
        , _0x2d8c96 = '.svg'
        , _0x5d92cc = _0x3e2753['attr']('src');
    _0x3e2753['attr']('data-src') && (_0x5d92cc = _0x3e2753['attr']('data-src')),
        _0x3e2753['length'] > 0x0 && _0x5d92cc['indexOf']('.svg') < 0x0 && (_0x29afd1 = IMAGES_START,
            _0x2d8c96 = _0x5d92cc['substring'](_0x5d92cc['lastIndexOf']('.'), _0x5d92cc['length'])),
        _0x3e2753['length'] > 0x0 && _0x5d92cc['indexOf']('_up.') >= 0x0 && (_0x2504e5['on']('touchend\x20mouseout', function () {
            $(this)['find']('img')['last']()['attr']('src', _0x29afd1 + _0x5c5342 + '_up' + _0x2d8c96);
        }),
            _0x2504e5['on']('touchstart\x20mouseenter', function () {
                _0x3e2753['attr']('src', _0x29afd1 + _0x5c5342 + '_over' + _0x2d8c96);
            }),
            mobile ? _0x2504e5['on']('touchend\x20mouseup', function () {
                _0x3e2753['attr']('src', _0x29afd1 + _0x5c5342 + '_up' + _0x2d8c96);
            }) : _0x2504e5['on']('touchend\x20mouseup', function () {
                _0x3e2753['attr']('src', _0x29afd1 + _0x5c5342 + '_over' + _0x2d8c96);
            }),
            _0x2504e5['on']('touchstart\x20mousedown', function (_0x5e6aca) {
                _0x3e2753['attr']('src', _0x29afd1 + _0x5c5342 + '_down' + _0x2d8c96);
            })),
        _0x2b0936 && _0x2504e5['click'](_0x2b0936);
}
function removeButton(_0xf9a140) {
    _0xf9a140['off']('mouseout'),
        _0xf9a140['off']('mouseenter'),
        _0xf9a140['off']('mouseup'),
        _0xf9a140['off']('mousedown'),
        _0xf9a140['off']('click');
}
function toPassword(_0x439975) {
    var _0x28a0e8 = '';
    for (var _0x59067f = 0x0; _0x59067f < _0x439975['length']; _0x59067f++) {
        _0x28a0e8 += '●';
    }
    return _0x28a0e8;
}
function CardFront() {
    var _0x5c73aa = $('<div\x20class=\x22cardfront\x20unselectable\x22></div>')
        , _0x4e323b = $('<div\x20class=\x22cardfront_content\x22></div>');
    _0x5c73aa['append'](_0x4e323b);
    var _0x4a33cf, _0x5a9816, _0x3a5a56, _0x52bdf7, _0x4b4d2a, _0x32369b, _0x567f80;
    let _0x35df9b;
    _0x5c73aa['extend'](_0x5c73aa, {
        'reset': function () {
            _0x5c73aa['removeData'](),
                _0x5c73aa['clearLimit']();
        },
        'reinitialize': function (_0x4a417e) {
            if (!_0x4a417e)
                return;
            (!_0x5c73aa['data']('initialized') || _0x5c73aa['data']('id') != _0x4a417e['id']) && _0x5c73aa['initializeFromData'](_0x4a417e);
        },
        'initializeFromData': function (_0x318bac) {
            !_0x318bac['passcode'] && (_0x318bac['passcode'] = _0x318bac['serial_number']),
                !_0x318bac['scale'] && _0x318bac['scale_left'] && (_0x318bac['scale'] = ~~_0x318bac['scale_left']),
                _0x5c73aa['removeData'](),
                _0x5c73aa['data'](_0x318bac),
                _0x5c73aa['initialize'](_0x318bac['id'], _0x318bac['name'], _0x318bac['treated_as'], _0x318bac['effect'], _0x318bac['pendulum_effect'], _0x318bac['card_type'], _0x318bac['monster_color'], _0x318bac['is_effect'], _0x318bac['type'], _0x318bac['attribute'], _0x318bac['level'], _0x318bac['ability'], _0x318bac['flip'], _0x318bac['pendulum'], _0x318bac['scale'], _0x318bac['arrows'], _0x318bac['atk'], _0x318bac['def'], _0x318bac['tcg_limit'], _0x318bac['ocg_limit'], _0x318bac['passcode'], _0x318bac['tcg'], _0x318bac['ocg'], _0x318bac['pic'], _0x318bac['custom'], _0x318bac['username'], _0x318bac['rush']);
        },
        'initializeAndLimit': function (_0x4034f8, _0x17596e) {
            _0x5c73aa['initializeFromData'](_0x4034f8),
                _0x5c73aa['setLimit'](_0x17596e);
        },
        'initialize': function (_0x20e2a5, _0x25bab7, _0x48319c, _0x2a4050, _0x812e69, _0x5958ca, _0x2ece8b, _0x53106f, _0x78d493, _0x55babf, _0x5e29e4, _0x54342a, _0x144a4d, _0x49b45b, _0x11433d, _0x414c90, _0x38decf, _0x56bc84, _0x5329d3, _0x5e931c, _0x4deda0, _0x1bbca7, _0x367d44, _0x408aa2, _0x5ec7dc, _0x2280f1, _0x1b958c) {
            !_0x20e2a5 && (_0x20e2a5 = 0x0);
            !_0x25bab7 && (_0x25bab7 = '');
            !_0x48319c && (_0x48319c = '');
            !_0x2a4050 && (_0x2a4050 = '');
            !_0x812e69 && (_0x812e69 = '');
            !_0x5958ca && (_0x5958ca = '');
            !_0x2ece8b && (_0x2ece8b = '');
            !_0x53106f && (_0x53106f = 0x0);
            !_0x78d493 && (_0x78d493 = '');
            !_0x55babf && (_0x55babf = '');
            !_0x5e29e4 && (_0x5e29e4 = 0x0);
            !_0x54342a && (_0x54342a = '');
            !_0x144a4d && (_0x144a4d = 0x0);
            !_0x49b45b && (_0x49b45b = 0x0);
            !_0x11433d && (_0x11433d = 0x0);
            !_0x414c90 && (_0x414c90 = '');
            _0x38decf == null && (_0x38decf = '');
            _0x56bc84 == null && (_0x56bc84 = '');
            !_0x5329d3 && (_0x5329d3 = 0x0);
            !_0x5e931c && (_0x5e931c = 0x0);
            !_0x4deda0 && (_0x4deda0 = '0');
            !_0x1bbca7 && (_0x1bbca7 = 0x0);
            !_0x367d44 && (_0x367d44 = 0x0);
            !_0x408aa2 && (_0x408aa2 = '');
            !_0x5ec7dc && (_0x5ec7dc = 0x0);
            !_0x2280f1 && (_0x2280f1 = '');
            !_0x1b958c && (_0x1b958c = 0x0);
            (_0x49b45b || _0x2ece8b == 'Link') && (_0x1b958c = 0x0);
            _0xbdc561['style']['display'] = 'block',
                _0x5b8233['style']['display'] = 'none',
                _0x19f058['style']['display'] = 'none',
                _0x7681ac['style']['display'] = 'none',
                _0xbdc561['style']['left'] = '67px',
                _0xbdc561['style']['top'] = '48px',
                _0x2c8bc6['style']['left'] = '680px',
                _0x2c8bc6['style']['top'] = '56px',
                _0x2c8bc6['style']['width'] = '75px',
                _0x2c8bc6['style']['height'] = '77px',
                _0x4ed4b1['style']['left'] = '671px',
                _0x4ed4b1['style']['top'] = '151px',
                _0x4ed4b1['style']['width'] = '42px',
                _0x4ed4b1['style']['height'] = '43px',
                _0x5c73aa['find']('.level')['hide'](),
                _0x5c73aa['find']('.rank')['hide'](),
                _0x56d402['style']['display'] = 'none',
                _0x4ed4b1['style']['display'] = 'none',
                _0x5c73aa['find']('.black_arrow')['hide'](),
                _0x5c73aa['find']('.red_arrow')['hide'](),
                _0x9d3a5c['style']['display'] = 'none',
                _0x647611['style']['display'] = 'none',
                _0x2c8bc6['style']['display'] = 'none',
                _0x313cb1['style']['display'] = 'none',
                _0x4b46ab['style']['display'] = 'none',
                _0x3c8cdc['style']['display'] = 'none',
                _0x450b2a['style']['display'] = 'none',
                _0x40b0bb['style']['display'] = 'none',
                _0x4c296b['style']['color'] = 'black',
                _0x4c296b['style']['display'] = 'none',
                _0x4c296b['style']['left'] = '37px',
                _0x4c296b['style']['top'] = '1124px',
                _0x5bf288['style']['left'] = '100px',
                _0x5bf288['style']['top'] = '217px',
                _0x5bf288['style']['width'] = '614px',
                _0x5bf288['style']['height'] = '614px',
                _0x647611['style']['top'] = '884px',
                _0xb744a5['style']['display'] = 'none',
                _0x2c7f48['style']['display'] = 'none',
                _0x2ef96a['style']['fontStyle'] = 'normal',
                _0x211940['style']['display'] = 'none',
                _0x5c73aa['data']('is_link', ![]);
            _0x5922d1 && (_0x5922d1['style']['display'] = 'none');
            _0x39bc20['style']['display'] = 'none',
                _0x15d613['style']['display'] = 'none',
                _0x36bd18['style']['display'] = 'none',
                _0x474556['style']['display'] = 'none',
                _0x24f78b['style']['display'] = 'none',
                _0x531c3d['style']['display'] = 'none',
                _0x42e5dc['style']['display'] = 'none',
                _0x19f058['style']['display'] = 'none',
                this['pendulum'] = _0x49b45b,
                _0xbdc561['innerHTML'] = correctText(_0x25bab7),
                _0x2ef96a['innerHTML'] = correctEffect(escapeHTML(_0x2a4050), _0x1b958c);
            if (_0x5958ca == 'Spell' || _0x5958ca == 'Trap') {
                _0xbdc561['style']['color'] = 'white',
                    _0x2c8bc6['setAttribute']('src', CARD_START + _0x5958ca['toLowerCase']() + '_attribute.webp'),
                    _0x2c8bc6['style']['display'] = 'block',
                    _0x4f05e5['setAttribute']('src', CARD_START + _0x5958ca['toLowerCase']() + '_front2.jpg');
                var _0x3be3d5 = '<font\x20class=\x22spell_type_large\x22>[</font>\x20<font\x20class=\x22spell_type_medium\x22>' + _0x5958ca['substring'](0x0, 0x1) + '</font>' + _0x5958ca['substring'](0x1, _0x5958ca['length'])['toUpperCase']() + '\x20<font\x20class=\x22spell_type_medium\x22>C</font>ARD';
                !_0x78d493 && (_0x78d493 = 'Normal'),
                    _0x78d493 != 'Normal' && (_0x3be3d5 += '<font\x20style=\x22font-size:\x2026px;\x22>&nbsp;&nbsp;&nbsp;</font>',
                        SAFARI && (_0x3be3d5 += '&nbsp;&nbsp;')),
                    _0x3be3d5 += '</font>',
                    _0x3be3d5 += '\x20<font\x20class=\x22spell_type_large\x22>]</font>',
                    _0x56d402['innerHTML'] = _0x3be3d5,
                    _0x56d402['style']['display'] = 'block',
                    _0x78d493 != 'Normal' && (_0x4ed4b1['setAttribute']('src', CARD_START + _0x78d493['toLowerCase']() + '.webp'),
                        _0x4ed4b1['style']['display'] = 'block'),
                    _0x2ef96a['style']['top'] = '890px',
                    _0x2ef96a['style']['height'] = '226px';
            } else {
                if (_0x5958ca == 'Monster') {
                    _0x2ece8b == 'Normal' && (_0x2ef96a['style']['fontStyle'] = 'italic');
                    _0xbdc561['style']['color'] = 'white',
                        _0x2ef96a['style']['top'] = '919px',
                        _0x2ef96a['style']['height'] = '154px';
                    !_0x2ece8b && (_0x2ece8b = 'Effect');
                    _0x4f05e5['setAttribute']('src', CARD_START + _0x2ece8b['toLowerCase']() + '_front2.jpg');
                    if (_0x78d493) {
                        var _0x28eee4 = '';
                        _0x28eee4 = '<font\x20class=\x22type_large\x22>[</font>\x20' + getType(_0x78d493);
                        _0x144a4d == 0x1 && (_0x28eee4 += '\x20/\x20' + getType('Flip'));
                        _0x54342a && (_0x28eee4 += '\x20/\x20' + getType(_0x54342a));
                        (_0x2ece8b == 'Ritual' || _0x2ece8b == 'Fusion' || _0x2ece8b == 'Synchro' || _0x2ece8b == 'Xyz' || _0x2ece8b == 'Link') && (_0x28eee4 += '\x20/\x20' + getType(_0x2ece8b));
                        _0x49b45b >= 0x1 && (_0x28eee4 += '\x20/\x20' + getType('Pendulum'));
                        if (_0x53106f == 0x1 && _0x2ece8b == 'Normal')
                            _0x28eee4 += '\x20/\x20' + getType('Normal');
                        else
                            _0x53106f == 0x1 && _0x2ece8b != 'Token' && (_0x28eee4 += '\x20/\x20' + getType('Effect'));
                        _0x2ece8b == 'Token' && _0x78d493 != '' && (_0x28eee4 += '\x20/\x20' + getType('Token')),
                            _0x28eee4 += '\x20<font\x20class=\x22type_large\x22>]</font>',
                            _0x647611['innerHTML'] = _0x28eee4,
                            _0x647611['style']['display'] = 'block',
                            setText(_0x647611);
                    }
                    _0x2ece8b != 'Token' ? (_0x2ece8b != 'Link' && (_0x9d3a5c['style']['display'] = 'block',
                        _0x3c8cdc['style']['display'] = 'block',
                        _0x450b2a['style']['display'] = 'block',
                        _0x450b2a['textContent'] = _0x56bc84),
                        _0x313cb1['style']['display'] = 'block',
                        _0x4b46ab['style']['display'] = 'block',
                        _0x4b46ab['textContent'] = _0x38decf) : (_0x5c73aa['data']('atk', '0'),
                            _0x5c73aa['data']('def', '0'));
                    if (_0x2ece8b != 'Xyz' && _0x2ece8b != 'Link') {
                        _0xbdc561['style']['color'] = 'black';
                        for (_0x5d2261 = 0x0; _0x5d2261 < _0x5e29e4; _0x5d2261++) {
                            if (_0x5d2261 >= 0xd)
                                break;
                            _0x5c73aa['find']('.level')['eq'](_0x5d2261)['length'] == 0x0 && _0x5c73aa['addLevel'](_0x5d2261),
                                _0x5c73aa['find']('.level')['eq'](_0x5d2261)[0x0]['style']['display'] = 'block';
                        }
                        _0x5e29e4 >= 0xd && !_0x5c73aa['hasClass']('level13') && (_0x5c73aa['addClass']('level13'),
                            _0x5c73aa['find']('.level')['each'](function (_0x5ba778, _0x4a3673) {
                                $(this)['css']('left', 0x2a5 - 0x36 * _0x5ba778 + 0x1b);
                            })),
                            _0x5e29e4 < 0xd && _0x5c73aa['hasClass']('level13') && (_0x5c73aa['removeClass']('level13'),
                                _0x5c73aa['find']('.level')['each'](function (_0x3c04b1, _0x270ba9) {
                                    $(this)['css']('left', 0x2a5 - 0x36 * _0x3c04b1);
                                }));
                    } else {
                        if (_0x2ece8b == 'Xyz') {
                            _0x4c296b['style']['color'] = 'white';
                            for (_0x5d2261 = 0x0; _0x5d2261 < _0x5e29e4; _0x5d2261++) {
                                if (_0x5d2261 >= 0xd)
                                    break;
                                _0x5c73aa['find']('.rank')['eq'](_0x5d2261)['length'] == 0x0 && _0x5c73aa['addRank'](_0x5d2261),
                                    _0x5c73aa['find']('.rank')['eq'](_0x5d2261)[0x0]['style']['display'] = 'block';
                            }
                            _0x5e29e4 >= 0xd && !_0x5c73aa['hasClass']('rank13') && (_0x5c73aa['addClass']('rank13'),
                                _0x5c73aa['find']('.rank')['each'](function (_0x510a38, _0x520cad) {
                                    $(this)['css']('left', 0x53 + 0x36 * _0x510a38 - 0x1b);
                                })),
                                _0x5e29e4 < 0xd && _0x5c73aa['hasClass']('rank13') && (_0x5c73aa['removeClass']('rank13'),
                                    _0x5c73aa['find']('.rank')['each'](function (_0xca35c7, _0x564267) {
                                        $(this)['css']('left', 0x53 + 0x36 * _0xca35c7);
                                    }));
                        }
                    }
                    if (_0x2ece8b == 'Link') {
                        _0x5c73aa['data']('is_link', !![]);
                        if (_0x414c90['length'] == 0x8) {
                            if (_0x5c73aa['find']('.black_arrow')['length'] == 0x0) {
                                for (var _0x5d2261 = 0x0; _0x5d2261 < 0x8; _0x5d2261++) {
                                    _0x5c73aa['addBlackArrow'](_0x5d2261);
                                }
                                for (_0x5d2261 = 0x0; _0x5d2261 < 0x8; _0x5d2261++) {
                                    _0x5c73aa['addRedArrow'](_0x5d2261);
                                }
                            }
                            _0x5c73aa['find']('.black_arrow')['show']();
                            for (_0x5d2261 = 0x0; _0x5d2261 < 0x8; _0x5d2261++) {
                                _0x414c90['substring'](_0x5d2261, _0x5d2261 + 0x1) == '1' && _0x5c73aa['find']('.red_arrow')['eq'](_0x5d2261)['show']();
                            }
                        }
                        _0x5e29e4 > 0x0 && (_0x40b0bb['textContent'] = _0x5e29e4,
                            _0x40b0bb['style']['display'] = 'block');
                    }
                    _0x49b45b >= 0x1 && (_0x4c296b['style']['color'] = 'black',
                        _0x7681ac['style']['display'] = 'block',
                        _0x211940['innerHTML'] = escapeHTML(_0x812e69),
                        _0x211940['style']['display'] = 'block',
                        _0xb744a5['textContent'] = _0x11433d,
                        _0xb744a5['style']['display'] = 'block',
                        _0x2c7f48['textContent'] = _0x11433d,
                        _0x2c7f48['style']['display'] = 'block',
                        _0x5c73aa['setPendulumText']()),
                        _0x55babf && (_0x2c8bc6['setAttribute']('src', CARD_START + _0x55babf['toLowerCase']() + '_attribute.webp'),
                            _0x2c8bc6['style']['display'] = 'block');
                } else
                    _0x5958ca == 'Skill' ? (_0x4f05e5['setAttribute']('src', CARD_START + 'skill_front2.jpg'),
                        _0xbdc561['style']['display'] = 'none',
                        _0x5b8233['style']['display'] = 'block',
                        _0x5b8233['textContent'] = _0x25bab7,
                        _0x78d493['includes']('\x20(') && (_0x78d493 = _0x78d493['substring'](0x0, _0x78d493['indexOf']('\x20('))),
                        _0x28eee4 = '[\x20' + getType(_0x78d493) + '\x20/\x20' + getType('Skill'),
                        _0x54342a && (_0x28eee4 += '\x20/\x20' + getType(_0x54342a)),
                        _0x28eee4 += '\x20]',
                        _0x647611['innerHTML'] = _0x28eee4,
                        _0x647611['style']['display'] = 'block',
                        setText(_0x647611),
                        _0x2ef96a['style']['top'] = '919px',
                        _0x2ef96a['style']['height'] = '154px') : (_0x4f05e5['setAttribute']('src', CARD_START + 'effect_front2.jpg'),
                            _0xbdc561['style']['color'] = 'black');
            }
            _0x5c73aa['setCardName']();
            if (_0x4deda0 != '0') {
                while (_0x4deda0['length'] < 0x8) {
                    _0x4deda0 = '0' + _0x4deda0;
                }
                _0x4c296b['textContent'] = _0x4deda0,
                    _0x4c296b['style']['display'] = 'block';
            }
            switch (_0x4deda0) {
                case '10000000':
                case '10000001':
                case '10000002':
                case '10000003':
                case '10000010':
                case '10000011':
                case '10000012':
                case '10000020':
                case '10000021':
                case '10000022':
                case '10000023':
                case '10000030':
                case '10000040':
                case '10000080':
                case '10000090':
                    _0x4c296b['textContent'] = '';
                    break;
            }
            _0x2280f1 && (_0x4c296b['textContent'] = _0x2280f1,
                _0x4c296b['style']['display'] = 'block');
            ~~_0x408aa2 || _0x5958ca == 'Skill' || _0x408aa2 && _0x408aa2['indexOf']('http') == 0x0 || _0x408aa2['indexOf']('.gif') >= 0x0 ? _0x5c73aa['loadImage']() : _0x5c73aa['removeImage']();
            if (_0x1b958c) {
                _0x1b958c > 0x1 && (_0x42e5dc['style']['display'] = 'block');
                _0xbdc561['style']['color'] = 'black',
                    _0xbdc561['style']['left'] = '42px',
                    _0xbdc561['style']['top'] = '31px',
                    _0x531c3d['style']['color'] = 'black',
                    _0x19f058['style']['display'] = 'block';
                var _0x22ba07 = 'effect';
                _0x5958ca == 'Monster' ? (_0x22ba07 = _0x2ece8b['toLowerCase'](),
                    _0x36bd18['style']['display'] = 'block',
                    _0x474556['style']['display'] = 'block',
                    _0x474556['textContent'] = _0x38decf,
                    _0x24f78b['style']['display'] = 'block',
                    _0x24f78b['textContent'] = _0x56bc84,
                    _0x2ece8b == 'Xyz' ? (_0x39bc20['setAttribute']('src', CARD_START + 'rush_rank.webp'),
                        _0x15d613['style']['color'] = '3px\x20#2f3334',
                        _0x15d613['style']['webkitTextStroke'] = '3px\x20#2f3334',
                        _0xbdc561['style']['color'] = 'white',
                        _0x531c3d['style']['color'] = 'white') : (_0x39bc20['setAttribute']('src', CARD_START + 'rush_level.webp'),
                            _0x15d613['style']['color'] = '3px\x20#de3f2e',
                            _0x15d613['style']['webkitTextStroke'] = '3px\x20#de3f2e'),
                    _0x39bc20['style']['display'] = 'block',
                    _0x15d613['style']['display'] = 'block',
                    _0x15d613['textContent'] = _0x5e29e4,
                    _0x5c73aa['find']('.level')['hide'](),
                    _0x5c73aa['find']('.rank')['hide'](),
                    _0x531c3d['innerHTML'] = _0x647611['innerHTML']) : (_0x22ba07 = _0x5958ca['toLowerCase'](),
                        _0x531c3d['innerHTML'] = _0x56d402['innerHTML']['replace']('&nbsp;&nbsp;', '&nbsp;'),
                        _0x56d402['style']['display'] = 'none',
                        _0x5958ca == 'Trap' ? (_0x4ed4b1['style']['left'] = '239px',
                            _0x531c3d['style']['letterSpacing'] = '0px') : (_0x4ed4b1['style']['left'] = '245px',
                                _0x531c3d['style']['letterSpacing'] = '0.25px'),
                        _0x4ed4b1['style']['top'] = '861px',
                        _0x4ed4b1['style']['width'] = '30px',
                        _0x4ed4b1['style']['height'] = '30px'),
                    _0x19f058['setAttribute']('src', CARD_START + 'rush_' + _0x22ba07 + '_front.webp'),
                    _0x531c3d['style']['display'] = 'block',
                    _0x5bf288['style']['left'] = '43px',
                    _0x5bf288['style']['top'] = '118px',
                    _0x5bf288['style']['width'] = '726px',
                    _0x5bf288['style']['height'] = '733px',
                    _0x2c8bc6['style']['left'] = '671px',
                    _0x2c8bc6['style']['top'] = '46px',
                    _0x2c8bc6['style']['width'] = '97px',
                    _0x2c8bc6['style']['height'] = '96px',
                    _0x647611['style']['display'] = 'none',
                    _0x2ef96a['style']['top'] = '903px',
                    _0x2ef96a['style']['height'] = '195px',
                    _0x313cb1['style']['display'] = 'none',
                    _0x4b46ab['style']['display'] = 'none',
                    _0x3c8cdc['style']['display'] = 'none',
                    _0x450b2a['style']['display'] = 'none',
                    _0x9d3a5c['style']['display'] = 'none',
                    _0x4c296b['style']['color'] = 'white',
                    _0x4c296b['style']['left'] = '68px',
                    _0x4c296b['style']['top'] = '1109px';
            }
            setCardText(_0x2ef96a),
                _0x5c73aa['data']('initialized', !![]);
        },
        'loadImage': function () {
            var _0x3c310e = _0x5c73aa['data']('id')
                , _0x177efa = _0x5c73aa['data']('pic')
                , _0x111cac = _0x5c73aa['data']('custom')
                , _0x3a7c43 = _0x5c73aa['data']('monster_color')
                , _0x12af4a = _0x5c73aa['data']('rush');
            if (_0x177efa == '0')
                return;
            var _0x94c118 = CARD_IMAGES_START + _0x3c310e + '.jpg';
            _0x111cac > 0x0 && (_0x94c118 = CUSTOM_PICS_START + getCustomFolder(_0x3c310e) + '/' + _0x3c310e + '.jpg');
            if (_0x3a7c43 == 'Token')
                _0x94c118 = _0x177efa;
            else {
                if (_0x177efa['indexOf']('http') == 0x0)
                    _0x94c118 = _0x177efa;
                else
                    _0x177efa != '1' && (_0x94c118 += '?version=' + _0x177efa);
            }
            _0x5c73aa['find']('.pic')['attr']('src', IMAGES_START + 'loading.gif'),
                _0x5c73aa['find']('.pic')['attr']('src', _0x94c118),
                _0x5bf288['onload'] = null,
                _0x5bf288['complete'] ? this['resizePendulumPic']() : _0x5bf288['onload'] = this['resizePendulumPic'];
        },
        'removeImage': function () {
            _0x5c73aa['find']('.pic')['attr']('src', IMAGES_START + 'black.jpg');
        },
        'setPendulumText': function () {
            _0x5bf288['style']['left'] = '53px',
                _0x5bf288['style']['top'] = '210px',
                _0x5bf288['style']['width'] = '707px',
                _0x5bf288['style']['height'] = '571px',
                _0xb744a5['style']['top'] = '820px',
                _0x2c7f48['style']['top'] = '820px',
                _0x211940['style']['top'] = '792px',
                _0x211940['style']['height'] = '93px',
                _0x211940['style']['fontSize'] = '25px',
                _0x211940['style']['lineHeight'] = '26px';
            !_0x2f312b && (_0x2f312b = document['createElement']('img'),
                _0x2f312b['setAttribute']('src', CARD_START + 'pendulum_front_small.webp'),
                _0x2f312b['setAttribute']('width', '758'),
                _0x2f312b['setAttribute']('height', '1160'),
                _0x7681ac['appendChild'](_0x2f312b));
            _0x2f312b['setAttribute']('src', CARD_START + 'pendulum_front_small.webp');
            (this['pendulum'] == 0x3 || this['pendulum'] == 0x1 && _0x211940['scrollHeight'] > _0x211940['clientHeight']) && (_0x5bf288['style']['height'] = '528px',
                _0xb744a5['style']['top'] = '802px',
                _0x2c7f48['style']['top'] = '802px',
                _0x211940['style']['top'] = '752px',
                _0x211940['style']['height'] = '126px',
                _0x211940['style']['fontSize'] = '22px',
                _0x211940['style']['lineHeight'] = '25px',
                _0x2f312b['setAttribute']('src', CARD_START + 'pendulum_front_medium.webp'));
            (this['pendulum'] == 0x4 || this['pendulum'] == 0x1 && _0x211940['scrollHeight'] > _0x211940['clientHeight']) && (_0x647611['style']['top'] = '919px',
                _0x2ef96a['style']['top'] = '952px',
                _0x2ef96a['style']['height'] = '122px',
                _0xb744a5['style']['top'] = '815px',
                _0x2c7f48['style']['top'] = '815px',
                _0x211940['style']['top'] = '752px',
                _0x211940['style']['height'] = '153px',
                _0x211940['style']['fontSize'] = '22.5px',
                _0x211940['style']['lineHeight'] = '22px',
                _0x2f312b['setAttribute']('src', CARD_START + 'pendulum_front_large.webp'));
            while (_0x211940['scrollHeight'] > _0x211940['clientHeight']) {
                var _0x2da493 = parseInt(_0x211940['style']['fontSize']);
                _0x211940['style']['lineHeight'] = _0x2da493 + 0x1 + 'px',
                    _0x211940['style']['fontSize'] = --_0x2da493 + 'px';
            }
        },
        'resizePendulumPic': function () {
            if (_0x5c73aa['data']('pendulum')) {
                if (!![]) {
                    var _0x4edad1 = _0x5bf288['naturalHeight'] / _0x5bf288['naturalWidth'] * 0x2c3
                        , _0x1697fd = _0x5c73aa['find']('.pendulum_front\x20img[src*=\x22pendulum_front_small\x22]')['length'] > 0x0 ? 0x23a : 0x212;
                    _0x5bf288['style']['height'] = (_0x4edad1 >= _0x1697fd ? _0x4edad1 : _0x1697fd) + 'px';
                }
            }
            if (viewing_card) {
                if (_0x5bf288['currentSrc']['indexOf']('loading.gif') >= 0x0)
                    return;
                $('.dimensions_txt')['text'](_0x5bf288['naturalWidth'] + '\x20x\x20' + _0x5bf288['naturalHeight']);
            }
        },
        'copyCard': function (_0x68c77b) {
            _0x5c73aa['initializeFromData'](_0x68c77b['data']());
        },
        'setLimit': function (_0x4a2dc1) {
            _0x5c73aa['clearLimit']();
            _0x5c73aa['data']('custom') && (!_0x567f80 && (_0x567f80 = document['createElement']('img'),
                _0x567f80['className'] = 'custom',
                _0x567f80['setAttribute']('src', IMAGES_START + 'svg/custom.svg'),
                $(_0x567f80)['insertAfter'](_0x4e323b)),
                _0x567f80['style']['display'] = 'block');
            var _0x14748b = _0x4a2dc1 ? _0x5c73aa['data']('ocg_limit') : _0x5c73aa['data']('tcg_limit');
            switch (_0x14748b) {
                case 0x0:
                    !_0x4a33cf && (_0x4a33cf = document['createElement']('img'),
                        _0x4a33cf['className'] = 'forbidden',
                        _0x4a33cf['setAttribute']('src', IMAGES_START + 'svg/forbidden.svg'),
                        _0x5c73aa[0x0]['appendChild'](_0x4a33cf));
                    _0x4a33cf['style']['display'] = 'block';
                    break;
                case 0x1:
                    !_0x5a9816 && (_0x5a9816 = document['createElement']('img'),
                        _0x5a9816['className'] = 'limited',
                        _0x5a9816['setAttribute']('src', IMAGES_START + 'svg/limited.svg'),
                        _0x5c73aa[0x0]['appendChild'](_0x5a9816));
                    _0x5a9816['style']['display'] = 'block';
                    break;
                case 0x2:
                    !_0x3a5a56 && (_0x3a5a56 = document['createElement']('img'),
                        _0x3a5a56['className'] = 'semi_limited',
                        _0x3a5a56['setAttribute']('src', IMAGES_START + 'svg/semi_limited.svg'),
                        _0x5c73aa[0x0]['appendChild'](_0x3a5a56));
                    _0x3a5a56['style']['display'] = 'block';
                    break;
            }
            _0x5c73aa['data']('tcg') && !_0x5c73aa['data']('ocg') && (!_0x52bdf7 && (_0x52bdf7 = document['createElement']('img'),
                _0x52bdf7['className'] = 'tcg',
                _0x52bdf7['setAttribute']('src', IMAGES_START + 'svg/tcg.svg'),
                _0x5c73aa[0x0]['appendChild'](_0x52bdf7)),
                _0x52bdf7['style']['display'] = 'block'),
                !_0x5c73aa['data']('tcg') && _0x5c73aa['data']('ocg') && (!_0x4b4d2a && (_0x4b4d2a = document['createElement']('img'),
                    _0x4b4d2a['className'] = 'ocg',
                    _0x4b4d2a['setAttribute']('src', IMAGES_START + 'svg/ocg.svg'),
                    _0x5c73aa[0x0]['appendChild'](_0x4b4d2a)),
                    _0x4b4d2a['style']['display'] = 'block'),
                !_0x5c73aa['data']('tcg') && !_0x5c73aa['data']('ocg') && !_0x5c73aa['data']('custom') && (!_0x32369b && (_0x32369b = document['createElement']('img'),
                    _0x32369b['className'] = 'illegal',
                    _0x32369b['setAttribute']('src', IMAGES_START + 'svg/illegal.svg'),
                    _0x5c73aa[0x0]['appendChild'](_0x32369b)),
                    _0x32369b['style']['display'] = 'block');
        },
        'clearLimit': function () {
            _0x4a33cf && (_0x4a33cf['style']['display'] = 'none'),
                _0x5a9816 && (_0x5a9816['style']['display'] = 'none'),
                _0x3a5a56 && (_0x3a5a56['style']['display'] = 'none'),
                _0x52bdf7 && (_0x52bdf7['style']['display'] = 'none'),
                _0x4b4d2a && (_0x4b4d2a['style']['display'] = 'none'),
                _0x32369b && (_0x32369b['style']['display'] = 'none'),
                _0x567f80 && (_0x567f80['style']['display'] = 'none');
        },
        'setCardName': function () {
            if (_0x5c73aa['parent']()['hasClass']('content') || _0x5c73aa[0x0]['style']['display'] == 'block') {
                setTimeout(function () {
                    setText(_0xbdc561),
                        setText(_0x5b8233);
                }, 0xc8);
                return;
            }
            setText(_0xbdc561),
                setText(_0x5b8233);
        },
        'addLevel': function (_0x42ee74) {
            var _0x30644b = document['createElement']('img');
            _0x30644b['className'] = 'level\x20level' + (_0x42ee74 + 0x1),
                _0x30644b['setAttribute']('src', CARD_START + 'level.webp'),
                _0x30644b['style']['left'] = 0x2a5 - 0x36 * _0x42ee74 + 'px',
                _0x4ed4b1['parentNode'] ? _0x4ed4b1['parentNode']['insertBefore'](_0x30644b, _0x4ed4b1) : _0x4e323b[0x0]['appendChild'](_0x30644b);
        },
        'addRank': function (_0x5ef871) {
            var _0x475c7d = document['createElement']('img');
            _0x475c7d['className'] = 'rank\x20rank' + (_0x5ef871 + 0x1),
                _0x475c7d['setAttribute']('src', CARD_START + 'rank.webp'),
                _0x475c7d['style']['left'] = 0x53 + 0x36 * _0x5ef871 + 'px',
                _0x4ed4b1['parentNode'] ? _0x4ed4b1['parentNode']['insertBefore'](_0x475c7d, _0x4ed4b1) : _0x4e323b[0x0]['appendChild'](_0x475c7d);
        },
        'addBlackArrow': function (_0x3c03fd) {
            var _0x44a45c = document['createElement']('img');
            _0x44a45c['className'] = 'black_arrow\x20black_arrow' + (_0x3c03fd + 0x1);
            if (_0x3c03fd % 0x2 == 0x0)
                _0x44a45c['setAttribute']('src', IMAGES_START + 'card/black_arrow_corner.webp');
            else
                return;
            _0x4ed4b1['parentNode'] ? _0x4ed4b1['parentNode']['insertBefore'](_0x44a45c, _0x4ed4b1) : _0x4e323b[0x0]['appendChild'](_0x44a45c);
        },
        'addRedArrow': function (_0xaf4d7d) {
            var _0x3952f4 = document['createElement']('img');
            _0x3952f4['className'] = 'red_arrow\x20red_arrow' + (_0xaf4d7d + 0x1),
                _0xaf4d7d % 0x2 == 0x0 ? _0x3952f4['setAttribute']('src', IMAGES_START + 'card/red_arrow_corner.webp') : _0x3952f4['setAttribute']('src', IMAGES_START + 'card/red_arrow_side.webp'),
                _0x3952f4['style']['display'] = 'none',
                _0x4ed4b1['parentNode'] ? _0x4ed4b1['parentNode']['insertBefore'](_0x3952f4, _0x4ed4b1) : _0x4e323b[0x0]['appendChild'](_0x3952f4);
        }
    }),
        _0x5c73aa['reset']();
    var _0x5922d1, _0x5cdb0b = document['createElement']('img');
    _0x5cdb0b['className'] = 'card_border',
        _0x5cdb0b['setAttribute']('src', CARD_START + 'card_border.jpg');
    var _0x4f05e5 = document['createElement']('img');
    _0x4f05e5['className'] = 'card_color',
        _0x4f05e5['setAttribute']('src', CARD_START + 'effect_front2.jpg');
    var _0x2f312b, _0x7681ac = document['createElement']('div');
    _0x7681ac['className'] = 'pendulum_front';
    var _0x19f058 = document['createElement']('img');
    _0x19f058['className'] = 'rush_front',
        _0x19f058['setAttribute']('src', CARD_START + 'rush_effect_front.webp');
    var _0x36bd18 = document['createElement']('img');
    _0x36bd18['className'] = 'rush_stats',
        _0x36bd18['setAttribute']('src', CARD_START + 'rush_stats.webp');
    var _0x474556 = document['createElement']('span');
    _0x474556['className'] = 'rush_atk_txt';
    var _0x24f78b = document['createElement']('span');
    _0x24f78b['className'] = 'rush_def_txt';
    var _0x42e5dc = document['createElement']('img');
    _0x42e5dc['className'] = 'legend',
        _0x42e5dc['setAttribute']('src', CARD_START + 'legend.webp');
    var _0x39bc20 = document['createElement']('img');
    _0x39bc20['className'] = 'rush_level',
        _0x39bc20['setAttribute']('src', CARD_START + 'rush_level.webp');
    var _0x15d613 = document['createElement']('span');
    _0x15d613['className'] = 'rush_level_txt',
        _0x15d613['innerHTML'] = '4';
    var _0x531c3d = document['createElement']('span');
    _0x531c3d['className'] = 'rush_type_txt';
    var _0x5bf288 = document['createElement']('img');
    _0x5bf288['className'] = 'pic',
        _0x5bf288['setAttribute']('src', IMAGES_START + 'loading.gif');
    var _0xbdc561 = document['createElement']('span');
    _0xbdc561['className'] = 'name_txt';
    var _0x5b8233 = document['createElement']('span');
    _0x5b8233['className'] = 'name2_txt';
    var _0x2c8bc6 = document['createElement']('img');
    _0x2c8bc6['className'] = 'attribute',
        _0x2c8bc6['setAttribute']('src', CARD_START + 'dark_attribute.webp'),
        _0x4e323b[0x0]['appendChild'](_0x5cdb0b),
        _0x4e323b[0x0]['appendChild'](_0x4f05e5),
        _0x4e323b[0x0]['appendChild'](_0x5bf288),
        _0x4e323b[0x0]['appendChild'](_0x19f058),
        _0x4e323b[0x0]['appendChild'](_0x42e5dc),
        _0x4e323b[0x0]['appendChild'](_0x36bd18),
        _0x4e323b[0x0]['appendChild'](_0x474556),
        _0x4e323b[0x0]['appendChild'](_0x24f78b),
        _0x4e323b[0x0]['appendChild'](_0x39bc20),
        _0x4e323b[0x0]['appendChild'](_0x15d613),
        _0x4e323b[0x0]['appendChild'](_0x531c3d),
        _0x4e323b[0x0]['appendChild'](_0x7681ac),
        _0x4e323b[0x0]['appendChild'](_0x2c8bc6);
    var _0x4ed4b1 = document['createElement']('img');
    _0x4ed4b1['className'] = 'type_icon',
        _0x4ed4b1['setAttribute']('src', CARD_START + 'continuous.webp'),
        _0x4e323b[0x0]['appendChild'](_0x4ed4b1);
    var _0x9d3a5c = document['createElement']('div');
    _0x9d3a5c['className'] = 'monster_line',
        _0x4e323b[0x0]['appendChild'](_0x9d3a5c);
    var _0x56d402 = document['createElement']('span');
    _0x56d402['className'] = 'spell_type_txt';
    var _0x647611 = document['createElement']('span');
    _0x647611['className'] = 'type_txt';
    var _0x2ef96a = document['createElement']('span');
    _0x2ef96a['className'] = 'effect_txt';
    var _0x211940 = document['createElement']('span');
    _0x211940['className'] = 'card_pendulum_effect_txt';
    var _0xb744a5 = document['createElement']('span');
    _0xb744a5['className'] = 'scale_left_txt';
    var _0x2c7f48 = document['createElement']('span');
    _0x2c7f48['className'] = 'scale_right_txt';
    var _0x313cb1 = document['createElement']('span');
    _0x313cb1['className'] = 'atk_lbl',
        _0x313cb1['innerHTML'] = 'ATK<font\x20style=\x22font-size:\x2026px;\x22>\x20</font>/';
    var _0x4b46ab = document['createElement']('span');
    _0x4b46ab['className'] = 'card_atk_txt';
    var _0x3c8cdc = document['createElement']('span');
    _0x3c8cdc['className'] = 'def_lbl',
        _0x3c8cdc['innerHTML'] = 'DEF<font\x20style=\x22font-size:\x2026px;\x22>\x20</font>/';
    var _0x450b2a = document['createElement']('span');
    _0x450b2a['className'] = 'card_def_txt';
    var _0x40b0bb = document['createElement']('span');
    _0x40b0bb['className'] = 'link_txt',
        _0x40b0bb['innerHTML'] = 'LINK\x20-\x200';
    var _0x4c296b = document['createElement']('span');
    return _0x4c296b['className'] = 'passcode_txt\x20selectable',
        _0x4e323b[0x0]['appendChild'](_0xbdc561),
        _0x4e323b[0x0]['appendChild'](_0x5b8233),
        _0x4e323b[0x0]['appendChild'](_0x56d402),
        _0x4e323b[0x0]['appendChild'](_0x647611),
        _0x4e323b[0x0]['appendChild'](_0x2ef96a),
        _0x4e323b[0x0]['appendChild'](_0x211940),
        _0x4e323b[0x0]['appendChild'](_0xb744a5),
        _0x4e323b[0x0]['appendChild'](_0x2c7f48),
        _0x4e323b[0x0]['appendChild'](_0x313cb1),
        _0x4e323b[0x0]['appendChild'](_0x4b46ab),
        _0x4e323b[0x0]['appendChild'](_0x3c8cdc),
        _0x4e323b[0x0]['appendChild'](_0x450b2a),
        _0x4e323b[0x0]['appendChild'](_0x40b0bb),
        _0x4e323b[0x0]['appendChild'](_0x4c296b),
        _0x5c73aa['clearLimit'](),
        _0x5c73aa;
}
function getCustomFolder(_0x321e0c) {
    if (_0x321e0c < 0x186a0)
        return '0';
    return Math['floor'](_0x321e0c / 0x186a0) + '00000';
}
function correctText(_0x98328e) {
    _0x98328e = _0x98328e['replace'](/&/g, '&amp;'),
        _0x98328e = _0x98328e['replace'](/%/g, '&percnt;'),
        _0x98328e = _0x98328e['replace'](/=/g, '&equals;'),
        _0x98328e = _0x98328e['replace'](/</g, '&lt;'),
        _0x98328e = _0x98328e['replace'](/>/g, '&gt;');
    var _0x1d0f1a = ['#', '&percnt;', '\x5c*', '\x5c+', '&lt;', '&equals;', '&gt;', '@', '\x5c[', ']', '\x5c^', '{', '\x5c|', '}', '∞', 'Ü', 'Ω', 'É', '×', '☆', '★'];
    _0x1d0f1a['forEach'](function (_0x5cb41a, _0x47ead9) {
        _0x98328e = _0x98328e['replace'](new RegExp(_0x5cb41a, 'g'), '<font\x20style=\x22font-family:\x20Arial;\x20font-size:\x2080%;\x22>' + _0x5cb41a['replace'](/\\/g, '') + '</font>');
    });
    if (isNonLatin(_0x98328e))
        for (var _0x210db5 = 0x0; _0x210db5 < _0x98328e['length']; _0x210db5++) {
            if (isNonLatin(_0x98328e[_0x210db5])) {
                switch (_0x98328e[_0x210db5]) {
                    case 'Ɐ':
                        var _0x594d5e = '<span\x20style=\x22position:\x20relative;\x20display:\x20inline-block;\x20transform:\x20rotate(180deg);\x20top:\x20-4px;\x22>A</span>'
                            , _0x31479f = _0x98328e['substring'](_0x210db5, _0x98328e['length']);
                        _0x98328e = _0x98328e['substring'](0x0, _0x210db5) + _0x31479f['replace'](_0x98328e[_0x210db5], _0x594d5e),
                            _0x210db5 += _0x594d5e['length'] - 0x1;
                        continue;
                    case '★':
                        continue;
                }
                var _0x594d5e = '<font\x20style=\x22font-family:\x20Arial;\x20font-size:\x2080%;\x22>' + _0x98328e[_0x210db5] + '</font>'
                    , _0x31479f = _0x98328e['substring'](_0x210db5, _0x98328e['length']);
                _0x98328e = _0x98328e['substring'](0x0, _0x210db5) + _0x31479f['replace'](_0x98328e[_0x210db5], _0x594d5e),
                    _0x210db5 += _0x594d5e['length'] - 0x1;
            }
        }
    return _0x98328e;
}
function isNonLatin(_0x4d5626) {
    if (/[^ -~●\r\n,\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]/g['test'](_0x4d5626))
        return !![];
    return ![];
}
function correctEffect(_0x4b57e6, _0x81f86e) {
    return _0x4b57e6 = _0x4b57e6['replace'](/∞/g, '<font\x20style=\x22font-family:\x20Arial;\x22>∞</font>'),
        _0x4b57e6 = _0x4b57e6['replace'](/Ω/g, '<font\x20style=\x22font-family:\x20Arial;\x20font-size:\x2080%;\x22>Ω</font>'),
        _0x4b57e6 = _0x4b57e6['replace'](/Ɐ/g, '<span\x20style=\x22position:\x20relative;\x20display:\x20inline-block;\x20transform:\x20rotate(180deg);\x20top:\x202px;\x22>A</span>'),
        _0x81f86e && (_0x4b57e6 = _0x4b57e6['replace']('[Requirement]', '<b>[Requirement]</b>'),
            _0x4b57e6 = _0x4b57e6['replace']('[REQUIREMENT]', '<b>[REQUIREMENT]</b>'),
            _0x4b57e6 = _0x4b57e6['replace']('<br>[Effect]', '<br><b>[Effect]</b>'),
            _0x4b57e6 = _0x4b57e6['replace']('<br>[EFFECT]', '<br><b>[EFFECT]</b>'),
            _0x4b57e6 = _0x4b57e6['replace']('<br>[Continuous\x20Effect]', '<br><b>[Continuous\x20Effect]</b>'),
            _0x4b57e6 = _0x4b57e6['replace']('<br>[CONTINUOUS\x20EFFECT]', '<br><b>[CONTINUOUS\x20EFFECT]</b>'),
            _0x4b57e6 = _0x4b57e6['replace']('<br>[Multi-Choice\x20Effect]', '<br><b>[Multi-Choice\x20Effect]</b>'),
            _0x4b57e6 = _0x4b57e6['replace']('<br>[MULTI-CHOICE\x20EFFECT]', '<br><b>[MULTI-CHOICE\x20EFFECT]</b>')),
        _0x4b57e6;
}
function getType(_0x104a21) {
    var _0x3e6532 = '';
    for (var _0x1002ab = 0x0; _0x1002ab < _0x104a21['length']; _0x1002ab++) {
        _0x1002ab == 0x0 || _0x104a21[_0x1002ab - 0x1] == '\x20' || _0x104a21[_0x1002ab - 0x1] == '-' ? _0x3e6532 += '<font\x20class=\x22type_medium\x22>' + _0x104a21[_0x1002ab]['toUpperCase']() + '</font>' : _0x3e6532 += _0x104a21[_0x1002ab]['toUpperCase']();
    }
    return _0x3e6532;
}
function setCardText(_0x4bd450) {
    _0x4bd450['style']['fontSize'] = '29px',
        _0x4bd450['style']['lineHeight'] = '1';
    _0x4bd450['scrollHeight'] > _0x4bd450['clientHeight'] && (_0x4bd450['style']['fontSize'] = '24px');
    _0x4bd450['scrollHeight'] > _0x4bd450['clientHeight'] && (_0x4bd450['style']['fontSize'] = '21px');
    _0x4bd450['scrollHeight'] > _0x4bd450['clientHeight'] && (_0x4bd450['style']['fontSize'] = '19px');
    _0x4bd450['scrollHeight'] > _0x4bd450['clientHeight'] && (_0x4bd450['style']['fontSize'] = '16.5px');
    while (_0x4bd450['scrollHeight'] > _0x4bd450['clientHeight']) {
        var _0x298112 = parseInt(_0x4bd450['style']['fontSize']);
        _0x4bd450['style']['fontSize'] = _0x298112 - 0x1 + 'px';
    }
}
function Card() {
    var _0xf5373 = $('<div\x20class=\x22card\x22></div>')
        , _0x2c8a41 = $('<img\x20src=\x22' + CARD_START + 'cardback.jpg\x22\x20width=\x22400\x22\x20height=\x22580\x22\x20/>')
        , _0x2043ab = $('<div\x20class=\x22cardback\x22></div>');
    _0x2043ab['append'](_0x2c8a41);
    var _0x5169e9 = newCardFront()
        , _0x5689ae = $('<div\x20class=\x22content\x22></div>');
    _0xf5373['append'](_0x5689ae);
    var _0xc3c244 = $('<div\x20class=\x22white\x22></div>');
    return _0x5689ae['append'](_0x2043ab),
        _0x5689ae['append'](_0x5169e9),
        _0x5689ae['append'](_0xc3c244),
        _0xf5373['extend'](_0xf5373, {
            'reset': function () {
                _0xf5373['removeData'](),
                    _0xf5373['data']('cardfront', _0x5169e9),
                    _0xf5373['data']('xyz_arr', []),
                    _0xf5373['css']('opacity', 0x1);
            },
            'onRotate': function (_0x5e8d71) {
                var _0x2cfc96 = getRotationY(_0xf5373[0x0]);
                _0x2cfc96 > 0x5a && (_0x2cfc96 = -_0x2cfc96);
                var _0x35e7ea = 0x5a - _0x2cfc96;
                _0x2cfc96 < 0x0 && (_0x35e7ea = 0x5a + _0x2cfc96);
                _0x35e7ea < 0x0 && (_0x35e7ea = -_0x35e7ea);
                _0x35e7ea = 0x5a - _0x35e7ea,
                    _0x2cfc96 -= 0x2d * _0x35e7ea / 0x5a;
                (getRotationY(_0x5689ae[0x0]) != -_0x2cfc96 || _0x5e8d71 === !![]) && TweenMax['to'](_0x5689ae, 0x0, {
                    'rotationY': -_0x2cfc96,
                    'xPercent': -0x32,
                    'yPercent': -0x32
                });
                if (_0x2cfc96 >= 0x0 && _0x2cfc96 < 0x5a)
                    _0x5169e9[0x0]['style']['display'] != 'block' && (_0x5169e9[0x0]['style']['display'] = 'block',
                        !_0xf5373['data']('textSet') && (_0x5169e9['setCardName'](),
                            setCardText(_0x5169e9['find']('.effect_txt')[0x0]),
                            _0xf5373['data']('textSet', !![])));
                else
                    (_0x2cfc96 > 0x5a || _0x2cfc96 < 0x0) && (_0x5169e9[0x0]['style']['display'] != 'none' && (_0x5169e9[0x0]['style']['display'] = 'none'));
                if (_0x2cfc96 == 0x0 && _0x5169e9[0x0]['style']['transformStyle'] != 'flat' || flat)
                    _0x5169e9[0x0]['style']['transformStyle'] = 'flat';
                else {
                    if (_0x2cfc96 != 0x0 && _0x5169e9[0x0]['style']['transformStyle'] != 'preserve-3d') { }
                }
            },
            'setSleeve': function (_0x6d13eb) {
                !_0x6d13eb && (_0x6d13eb = '1.jpg');
                if (_0xf5373['data']('isSkill'))
                    return;
                _0x2c8a41['attr']('src', SLEEVE_START + _0x6d13eb),
                    _0xf5373['data']('sleeve', _0x6d13eb);
            },
            'removeSleeve': function () {
                _0x2c8a41['attr']('src', SLEEVE_START + '1.jpg');
            },
            'startGlow': function () {
                _0xc3c244['show'](),
                    TweenMax['killTweensOf'](_0xc3c244),
                    TweenMax['fromTo'](_0xc3c244, 0.7, {
                        'opacity': 0x0
                    }, {
                        'opacity': 0.3,
                        'onComplete': function () {
                            TweenMax['fromTo'](_0xc3c244, 0.7, {
                                'opacity': 0.3
                            }, {
                                'opacity': 0x0,
                                'onComplete': function () {
                                    _0xf5373['startGlow']();
                                }
                            });
                        }
                    });
            },
            'stopGlow': function () {
                console['log']('stopGlow'),
                    _0xc3c244['hide'](),
                    TweenMax['killTweensOf'](_0xc3c244);
            },
            'showFaceDown': function () {
                TweenMax['to'](_0xf5373, 0x0, {
                    'rotationY': 0xb4
                });
            },
            'getDeckZ': function () {
                return _0xf5373['data']('owner')['main_arr']['length'] + 0x1e;
            },
            'getGraveZ': function () {
                return _0xf5373['data']('owner')['grave_arr']['length'] + 0x1e;
            },
            'getBanishedZ': function () {
                return _0xf5373['data']('owner')['grave_arr']['length'] + _0xf5373['data']('owner')['banished_arr']['length'] + 0x1e;
            },
            'getExtraZ': function () {
                return _0xf5373['data']('owner')['extra_arr']['length'] + 0x1e;
            }
        }),
        _0xf5373['reset'](),
        watch(_0xf5373, 'transform', _0xf5373['onRotate']),
        SAFARI && _0xf5373['css']('perspective-origin', 'unset'),
        TweenMax['set'](_0x5689ae, {
            'transformPerspective': 0x2bc
        }),
        _0xf5373;
}
function getRotation(_0x4abce4) {
    var _0x5dd76c = window['getComputedStyle'](_0x4abce4, null)
        , _0x4100dd = _0x5dd76c['getPropertyValue']('-webkit-transform') || _0x5dd76c['getPropertyValue']('-moz-transform') || _0x5dd76c['getPropertyValue']('-ms-transform') || _0x5dd76c['getPropertyValue']('-o-transform') || _0x5dd76c['getPropertyValue']('transform') || 'none';
    if (_0x4100dd == 'none')
        return console['log']('none'),
            0x0;
    var _0x2fce4f = _0x4100dd['split']('(')[0x1]['split'](')')[0x0]['split'](',')
        , _0x44c11d = _0x2fce4f[0x0]
        , _0x156400 = _0x2fce4f[0x1]
        , _0x392821 = _0x2fce4f[0x2]
        , _0x35bffd = _0x2fce4f[0x3]
        , _0xdfe989 = Math['sqrt'](_0x44c11d * _0x44c11d + _0x156400 * _0x156400)
        , _0x1c8884 = _0x156400 / _0xdfe989
        , _0x414168 = Math['round'](Math['atan2'](_0x156400, _0x44c11d) * (0xb4 / Math['PI']));
    return _0x414168;
}
function getRotationY(_0x38e07b) {
    var _0x11910d = window['getComputedStyle'](_0x38e07b, null)
        , _0x1b8dcb = _0x11910d['getPropertyValue']('-webkit-transform') || _0x11910d['getPropertyValue']('-moz-transform') || _0x11910d['getPropertyValue']('-ms-transform') || _0x11910d['getPropertyValue']('-o-transform') || _0x11910d['getPropertyValue']('transform') || 'none';
    if (_0x1b8dcb == 'none')
        return 0x0;
    var _0x329a5d = _0x1b8dcb['split']('(')[0x1]['split'](')')[0x0]['split'](',')
        , _0xe507f5 = parseFloat(_0x329a5d[0xa]);
    if (!_0xe507f5)
        return 0x0;
    return -((_0xe507f5 * 0x168 - 0x168) / 0x4);
}
function resetRotationY(_0x8c96de) {
    var _0x3a76ae = window['getComputedStyle'](_0x8c96de[0x0], null)
        , _0x55c197 = _0x3a76ae['getPropertyValue']('-webkit-transform') || _0x3a76ae['getPropertyValue']('-moz-transform') || _0x3a76ae['getPropertyValue']('-ms-transform') || _0x3a76ae['getPropertyValue']('-o-transform') || _0x3a76ae['getPropertyValue']('transform') || 'none'
        , _0x418db8 = _0x55c197['split']('(')[0x1]['split'](')')[0x0]['split'](',');
    _0x8c96de['css']('transform', 'matrix3d(' + _0x418db8[0x0] + ',\x20' + _0x418db8[0x1] + ',\x20' + _0x418db8[0x2] + ',\x20' + _0x418db8[0x3] + ',\x20' + _0x418db8[0x4] + ',\x201,\x20' + _0x418db8[0x6] + ',\x20' + _0x418db8[0x7] + ',\x20' + _0x418db8[0x8] + ',\x20' + _0x418db8[0x9] + ',\x201,\x20' + _0x418db8[0xb] + ',\x20' + _0x418db8[0xc] + ',\x20' + _0x418db8[0xd] + ',\x20' + _0x418db8[0xe] + ',\x20' + _0x418db8[0xf] + ')');
}
function getScale(_0x1e6099) {
    var _0x2e5761 = window['getComputedStyle'](_0x1e6099, null)
        , _0x266b78 = _0x2e5761['getPropertyValue']('-webkit-transform') || _0x2e5761['getPropertyValue']('-moz-transform') || _0x2e5761['getPropertyValue']('-ms-transform') || _0x2e5761['getPropertyValue']('-o-transform') || _0x2e5761['getPropertyValue']('transform') || 'none';
    if (_0x266b78 == 'none')
        return 0x1;
    var _0x3be7fb = _0x266b78['split']('(')[0x1]['split'](')')[0x0]['split'](',')
        , _0x25c07b = parseFloat(_0x3be7fb[0x0]);
    return !_0x25c07b && (_0x25c07b = parseFloat(_0x3be7fb[0x1])),
        _0x25c07b;
}
function isExtraDeckCard(_0x152a83) {
    if (_0x152a83['hasClass']('card')) {
        if (_0x152a83['data']('cardfront')['data']('monster_color') == 'Fusion' || _0x152a83['data']('cardfront')['data']('monster_color') == 'Link' || _0x152a83['data']('cardfront')['data']('monster_color') == 'Synchro' || _0x152a83['data']('cardfront')['data']('monster_color') == 'Xyz')
            return !![];
    } else {
        if (_0x152a83['data']('monster_color') == 'Fusion' || _0x152a83['data']('monster_color') == 'Link' || _0x152a83['data']('monster_color') == 'Synchro' || _0x152a83['data']('monster_color') == 'Xyz')
            return !![];
    }
    return ![];
}
function getDbId() {
    return localStorage['getItem']('db_id') && (db_id = localStorage['getItem']('db_id')),
        db_id;
}
function getLogins() {
    logins = [];
    try {
        localStorage['getItem']('logins') && (logins = JSON['parse'](localStorage['getItem']('logins')));
        for (var _0x35547b = 0x0; _0x35547b < logins['length']; _0x35547b++) {
            (!logins[_0x35547b] || !logins[_0x35547b]['username']) && (logins['splice'](0x0, 0x1),
                _0x35547b--);
        }
    } catch (_0x3d2870) { }
    return logins;
}
function random(_0x16e591) {
    return Math['floor'](Math['random']() * _0x16e591);
}
function randomHex() {
    var _0x4e63ab = ''
        , _0x2f681f = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (var _0x5adcc3 = 0x0; _0x5adcc3 < 0x20; _0x5adcc3++) {
        _0x4e63ab += _0x2f681f[Math['floor'](Math['random']() * _0x2f681f['length'])];
    }
    return _0x4e63ab;
}
function messageE(_0x3ad1cc, _0x21b98a) {
    displayBox('Message', _0x3ad1cc, _0x21b98a);
}
function errorE(_0x5cd0eb, _0x4f4512) {
    displayBox('Error', _0x5cd0eb, _0x4f4512);
}
function displayBox(_0x218ea6, _0x404672, _0x556b09, _0x492ea0) {
    hideDisplayBoxes(),
        $(':focus')['blur'](),
        $('#msg\x20.ok_btn')['focus'](),
        $('#msg\x20.title_txt')['text'](_0x218ea6),
        _0x492ea0 ? $('#msg\x20.body_txt')['html'](_0x404672) : $('#msg\x20.body_txt')['text'](_0x404672),
        $('#msg')['show'](),
        msg_callback = _0x556b09;
}
function msgOK() {
    hideDisplayBoxes(),
        msg_callback && msg_callback();
}
function getLink(_0x13c536, _0x475a51, _0x373e50, _0x95e539) {
    hideDisplayBoxes(),
        $('#link')['show'](),
        $('#link\x20.title_txt')['text'](_0x13c536),
        _0x95e539 ? $('#link\x20.body_txt')['html'](_0x475a51) : $('#link\x20.body_txt')['text'](_0x475a51),
        $('#link\x20.input_txt')['val'](_0x373e50),
        $('#link\x20.input_txt')[0x0]['setSelectionRange'](0x0, 0x0),
        $('#link\x20.input_txt')['focus']();
}
function copyText(_0x558a0b, _0x275f7c) {
    if (!navigator['clipboard']) {
        document['execCommand']('copy') && _0x3fd4f5();
        return;
    }
    navigator['clipboard']['writeText'](_0x558a0b)['then'](_0x3fd4f5);
    function _0x3fd4f5() {
        _0x275f7c && _0x275f7c();
    }
}
function getInput(_0x310e2f, _0x27c225, _0x2ae644, _0x331130, _0x56bc57, _0x291300, _0x2ee745, _0x81f2b2, _0x55077b) {
    hideDisplayBoxes(),
        $('#input')['show'](),
        $('#input\x20.title_txt')['text'](_0x310e2f),
        $('#input\x20.body_txt')['text'](_0x27c225),
        $('#input\x20.input_txt')['val'](_0x2ae644),
        ~~_0x331130 > 0x0 ? $('#input\x20.input_txt')['attr']('maxlength', _0x331130) : $('#input\x20.input_txt')['removeAttr']('maxlength'),
        $('#input\x20.input_txt')['attr']('type', _0x2ee745 ? 'password' : 'text'),
        $('#input\x20.input_txt')['data']('regex', _0x291300 ? _0x291300 : null),
        $('#input\x20.body_txt')['css']('top', 81.5),
        $('#input\x20.body_txt')['css']('font-size', 0x19),
        $('#input\x20.input_txt')['css']('top', 0x8e),
        _0x55077b && ($('#input\x20.body_txt')['css']('top', 0x4a),
            $('#input\x20.body_txt')['css']('font-size', 0x16),
            $('#input\x20.input_txt')['css']('top', 0xa2)),
        $('#input\x20.input_txt')['focus'](),
        $('#input\x20.input_txt')['select'](),
        input_callback = _0x56bc57,
        _0x81f2b2 = _0x81f2b2;
}
function fillCombobox(_0xa7e84f, _0xb99ce1) {
    _0xa7e84f['html'](''),
        _0xb99ce1['forEach'](function (_0x533b32, _0x1b6379) {
            _0xa7e84f['append']('<option\x20value=\x22' + escapeHTML(_0x533b32) + '\x22>' + upperCamelCase(escapeHTML(_0x533b32)) + '</option>');
        });
}
function upperCamelCase(_0x47ceb2) {
    var _0x2fdacb = _0x47ceb2['split']('\x20');
    for (var _0x350ed9 = 0x0; _0x350ed9 < _0x2fdacb['length']; _0x350ed9++) {
        _0x2fdacb[_0x350ed9] = _0x2fdacb[_0x350ed9]['substring'](0x0, 0x1)['toUpperCase']() + _0x2fdacb[_0x350ed9]['substring'](0x1, _0x2fdacb[_0x350ed9]['length']);
    }
    return _0x2fdacb['join']('\x20');
}
function inputOK() {
    hideDisplayBoxes(),
        input_callback && input_callback();
}
function getComboBox(_0x1dfecd, _0x19fcb4, _0x43b4ac, _0x11bcc7, _0x45effa, _0xe3488a) {
    hideDisplayBoxes(),
        $('#combo')['show'](),
        $('#combo\x20.title_txt')['text'](_0x1dfecd),
        _0xe3488a ? $('#combo\x20.body_txt')['html'](_0x19fcb4) : $('#combo\x20.body_txt')['text'](_0x19fcb4),
        _0x43b4ac instanceof Array ? fillCombobox($('#combo\x20.combo_cb'), _0x43b4ac) : $('#combo\x20.combo_cb')['html'](_0x43b4ac),
        $('#combo\x20.combo_cb')['selectedIndex'](_0x11bcc7),
        $('#combo\x20.combo_cb')['focus'](),
        combo_callback = _0x45effa;
}
function comboOK() {
    hideDisplayBoxes(),
        combo_callback && combo_callback();
}
function getConfirmation(_0x53dae3, _0x5992e6, _0x3fbf1a, _0xb58084, _0x57732a) {
    hideDisplayBoxes(),
        $(':focus')[0x0] != $('#duel\x20.cin_txt')[0x0] && $(':focus')['blur'](),
        $('#confirm')['show'](),
        $('#confirm\x20.title_txt')['text'](_0x53dae3),
        setText($('#confirm\x20.title_txt')),
        _0x57732a ? $('#confirm\x20.body_txt')['html'](_0x5992e6) : $('#confirm\x20.body_txt')['text'](_0x5992e6),
        yes_callback = _0x3fbf1a,
        no_callback = _0xb58084;
}
function getConfirmation2(_0xbd9a32, _0x1dd10a, _0x1c5436, _0x1468bc, _0x170a8f, _0x404121) {
    hideDisplayBoxes(),
        $(':focus')[0x0] != $('#duel\x20.cin_txt')[0x0] && $(':focus')['blur'](),
        $('#confirm2')['show'](),
        $('#confirm2\x20.title_txt')['text'](_0xbd9a32),
        setText($('#confirm2\x20.title_txt')),
        _0x404121 ? $('#confirm2\x20.body_txt')['html'](_0x1dd10a) : $('#confirm2\x20.body_txt')['text'](_0x1dd10a),
        yes_callback = _0x1c5436,
        no_callback = _0x1468bc,
        cancel_callback = _0x170a8f;
}
function confirmYes() {
    hideDisplayBoxes(),
        yes_callback && yes_callback();
}
function confirmNo() {
    hideDisplayBoxes(),
        no_callback && no_callback();
}
function cancelCallback() {
    hideDisplayBoxes(),
        cancel_callback && cancel_callback();
}
function hideDisplayBoxes() {
    $('#msg')['hide'](),
        $('#link')['hide'](),
        $('#confirm')['hide'](),
        $('#confirm2')['hide'](),
        $('#input')['hide'](),
        $('#input\x20.autocomplete')['hide'](),
        $('#input2')['hide'](),
        $('#combo')['hide'](),
        $('#recaptcha_box')['hide'](),
        hideDim();
}
function killAllTweens() {
    !notification_tweening && TweenMax['killAll'](!![]);
}
function addMouseMove() {
    mouseMoveTimer['reset'](),
        mouseMoveTimer['start'](),
        $('body')['mousemove'](updateMouse);
}
function _0x154f() {
    var _0x5b4a6f = ['1304sOvDKc', '2581316LryDnn', '1252677ZBQqWc', '22295110PKihMR', '5SKGePz', '1276040bpiXfS', '9YlTixF', '363334qVJHAE', '2275LZhLcZ', '3563484kTqpVK'];
    _0x154f = function () {
        return _0x5b4a6f;
    }
        ;
    return _0x154f();
}
function removeMouseMove() {
    mouseMoveTimer['reset'](),
        $('body')['off']('mousemove', updateMouse);
}
function previewE(_0x3c37b7) {
    updateMouse(_0x3c37b7);
    var _0x410221 = $(this)
        , _0xdb0f97 = new Timer(0x32);
    if (_0x410221['attr']('class')['indexOf']('cardfront') < 0x0) {
        if ($('#view')['is'](':visible')) {
            previewCard(_0x410221);
            return;
        } else
            _0xdb0f97['callback'] = function () {
                _0xdb0f97['reset'](),
                    (_0x3c37b7['type'] == 'mousedown' || _0x3c37b7['type'] == 'click' || inBounds(_0x410221['find']('.content'))) && previewCard(_0x410221);
            }
                ;
    } else
        _0xdb0f97['callback'] = function () {
            _0xdb0f97['reset'](),
                (_0x3c37b7['type'] == 'mousedown' || _0x3c37b7['type'] == 'click' || inBounds(_0x410221)) && previewFront(_0x410221);
        }
            ;
    _0xdb0f97['start'](),
        addMouseMove();
}
function previewCard(_0x5dcebc) {
    if (_0x5dcebc['data']('face_down') && (!duelist && !_0x5dcebc['data']('isSkill'))) {
        if (!replay && !admin)
            return;
    }
    if (_0x5dcebc['data']('isSkill') && Math['round'](getRotationY(_0x5dcebc[0x0])) == 0xb4 && _0x5dcebc['data']('controller')['username'] != username) {
        preview['find']('.skillback')['detach'](),
            preview_txt['text'](_0x5dcebc['find']('.skillback')['text']());
        var _0x1e42bf = getSkillBack(_0x5dcebc['find']('.skillback\x20img')['attr']('src'), _0x5dcebc['find']('.skillback')['text']());
        TweenMax['to'](_0x1e42bf, 0x0, {
            'scaleX': 2.0325,
            'scaleY': 2.0431
        }),
            preview['append'](_0x1e42bf),
            showPreview();
        return;
    }
    if (!_0x5dcebc['data']('cardfront')['data']('initialized'))
        return;
    if (!replay && (_0x5dcebc['data']('controller') != player1 && (tag_duel == ![] || _0x5dcebc['data']('controller') != player1['partner'])) && (_0x5dcebc['data']('face_down') && getRotationY(_0x5dcebc[0x0]) > 0.5 || Math['round'](getRotationY(_0x5dcebc[0x0])) == 0xb4) && viewing != 'Opponent\x27s\x20Extra\x20Deck')
        return;
    if (!show_cards && isIn(_0x5dcebc, player1['hand_arr']) >= 0x0 && !duelist && !_0x5dcebc['data']('face_up'))
        return;
    if (inBounds(preview_txt))
        return;
    previewFront(_0x5dcebc['data']('cardfront'));
}
function previewFront(_0x2661c1) {
    preview['data']('id') == 0x0 && preview['data']('id', -0x1);
    if (preview['data']('id') == _0x2661c1['data']('id') && preview['is'](':visible') && preview['find']('.pic')['attr']('scr') != _0x2661c1['find']('.pic')['attr']('scr'))
        return;
    preview['find']('.skillback')['detach'](),
        showPreview(),
        preview['copyCard'](_0x2661c1);
    if (_0x2661c1['data']('pendulum'))
        preview_txt['html']('<span><b>Pendulum\x20Effect:</b><br>' + escapeHTML(_0x2661c1['data']('pendulum_effect')) + '<br><br>' + '<b>Monster\x20Effect:</b><br>'),
            _0x2661c1['data']('monster_color') == 'Normal' ? preview_txt['append']('<i>' + escapeHTML(_0x2661c1['data']('effect')) + '</i>') : preview_txt['append'](escapeHTML(_0x2661c1['data']('effect'))),
            preview_txt['append']('</span>');
    else {
        if (_0x2661c1['data']('rush') && _0x2661c1['data']('monster_color') != 'Normal')
            preview_txt['html']('<span>' + escapeHTML(_0x2661c1['data']('effect'))['replace']('[Requirement]', '<b>[Requirement]</b>')['replace']('<br>[Effect]', '<br><b>[Effect]</b>')['replace']('<br>[Continuous\x20Effect]', '<br><b>[Continuous\x20Effect]</b>')['replace']('<br>[Multi-Choice\x20Effect]', '<br><b>[Multi-Choice\x20Effect]</b>')['replace']('[REQUIREMENT]', '<b>[REQUIREMENT]</b>')['replace']('<br>[EFFECT]', '<br><b>[EFFECT]</b>')['replace']('<br>[CONTINUOUS\x20EFFECT]', '<br><b>[CONTINUOUS\x20EFFECT]</b>')['replace']('<br>[MULTI-CHOICE\x20EFFECT]', '<br><b>[MULTI-CHOICE\x20EFFECT]</b>') + '</span>');
        else {
            if (_0x2661c1['data']('monster_color') == 'Normal')
                preview_txt['html']('<span><i>' + escapeHTML(_0x2661c1['data']('effect')) + '</i></span>');
            else
                _0x2661c1['data']('card_type') == 'Skill' ? preview_txt['html']('<span>' + escapeHTML(_0x2661c1['data']('pendulum_effect')) + '<br><br>' + escapeHTML(_0x2661c1['data']('effect')) + '</span>') : preview_txt['html']('<span>' + escapeHTML(_0x2661c1['data']('effect')) + '</span>');
        }
    }
}
function showPreview() {
    preview_txt['css']('height', currentLabel == 'deck_constructor' ? 0x7f : 0x98),
        preview_txt['show'](),
        preview_txt['scrollTop'](0x0),
        preview['show'](),
        parseInt(preview_txt['css']('height')) == 0xe3 && currentLabel != 'custom_cards' && minimizePreview();
}
function previewScrollE(_0x19b471) {
    preview_vsp = preview_txt['scrollTop']();
    var _0x7be37f = preview_txt['scrollMax']();
    preview_txt['scrollTop']() >= _0x7be37f && (preview_vsp += 0x3e8);
}
function previewMoveE(_0x5d5933) {
    updateMouse(_0x5d5933),
        parseInt(preview_txt['css']('height')) > 0xa2 && (preview_vsp = mouseYScaled - 0x12c,
            preview_vsp -= 0x96);
}
function minimizePreview(_0x3dc338) {
    updateMouse(_0x3dc338),
        $('#watchers')['show'](),
        $('#watchers_btn')['show']();
    duelist && $('#log_btn')['show']();
    if (parseInt(preview_txt['css']('height')) == 0x98) { }
    if (_0x3dc338 != null) {
        var _0x1cb08b = preview_txt['scrollMax']();
        preview_txt['scrollTop']() > 0x1 && preview_txt['scrollTop']() < _0x1cb08b && (preview_vsp = preview_txt['scrollTop']());
    }
    currentLabel == 'deck_constructor' ? preview_txt['css']('height', 0x7f) : preview_txt['css']('height', 0x98),
        setTimeout(function () {
            preview_txt['scrollTop'](preview_vsp);
        }, 0x5);
}
function Timer(_0x4ace43, _0x1ab3f8) {
    var _0x494e6d = {};
    return _0x494e6d['active'] = ![],
        _0x494e6d['millis'] = _0x4ace43,
        _0x494e6d['callback'] = _0x1ab3f8,
        _0x494e6d['start'] = function () {
            _0x494e6d['reset'](),
                _0x494e6d['active'] = !![],
                _0x494e6d['task'] = setInterval(function () {
                    _0x494e6d['active'] && _0x494e6d['callback']();
                }, _0x494e6d['millis']);
        }
        ,
        _0x494e6d['stop'] = function () {
            _0x494e6d['active'] = ![],
                clearInterval(_0x494e6d['task']);
        }
        ,
        _0x494e6d['reset'] = function () {
            _0x494e6d['stop']();
        }
        ,
        _0x494e6d['destroy'] = function () {
            _0x494e6d['reset'](),
                _0x494e6d['start'] = function () { }
                ;
        }
        ,
        _0x494e6d;
}
function setText(_0x1a9adf) {
    if (!_0x1a9adf)
        return;
    if (_0x1a9adf instanceof jQuery) {
        if (!_0x1a9adf[0x0])
            return;
        _0x1a9adf['css']('white-space', 'nowrap'),
            _0x1a9adf['css']('transform', 'scaleX(1)');
        _0x1a9adf[0x0]['scrollWidth'] > _0x1a9adf['width']() && (_0x1a9adf['css']('transform', 'scaleX(' + _0x1a9adf['width']() / _0x1a9adf[0x0]['scrollWidth'] + ')'),
            _0x1a9adf['css']('transform-origin', 'top\x20left'));
        return;
    }
    _0x1a9adf['style']['whiteSpace'] = 'nowrap',
        _0x1a9adf['style']['transform'] = 'scaleX(1)',
        _0x1a9adf['scrollWidth'] > _0x1a9adf['clientWidth'] && (_0x1a9adf['style']['transform'] = 'scaleX(' + _0x1a9adf['clientWidth'] / _0x1a9adf['scrollWidth'] + ')',
            _0x1a9adf['style']['transformOrigin'] = 'top\x20left');
}
function setCellText(_0xc58be7) {
    _0xc58be7['find']('span')['css']('white-space', 'nowrap'),
        _0xc58be7['find']('span')['css']('transform', 'scaleX(1)'),
        _0xc58be7['find']('span')[0x0]['scrollWidth'] > _0xc58be7['width']() && (_0xc58be7['find']('span')['css']('transform', 'scaleX(' + _0xc58be7['width']() / (_0xc58be7['find']('span')[0x0]['scrollWidth'] + 0x8) + ')'),
            _0xc58be7['find']('span')['css']('transform-origin', 'top\x20left'));
}
function randomize(_0x1b4784) {
    var _0x5072f9 = []
        , _0x3c0b8f = 0x0;
    while (_0x1b4784['length'] > 0x0) {
        _0x3c0b8f = Math['floor'](Math['random']() * _0x1b4784['length']),
            _0x5072f9['push'](_0x1b4784[_0x3c0b8f]),
            _0x1b4784['splice'](_0x3c0b8f, 0x1);
    }
    for (var _0x3a66f5 = 0x0; _0x3a66f5 < _0x5072f9['length']; _0x3a66f5++) {
        _0x1b4784['push'](_0x5072f9[_0x3a66f5]);
    }
}
function changeComponents(_0x3d79cc) {
    console['time']('changeComponents');
    if (GET('nocomps')) {
        $('input,\x20select')['each'](function () {
            var _0x64167a = $('<div></div>');
            _0x64167a['data']('proxy', $(this)),
                $(this)['data']('proxy', _0x64167a);
        });
        return;
    }
    changeInputs(_0x3d79cc),
        changeSelects(_0x3d79cc),
        console['time']('changeButtons'),
        changeButtons(_0x3d79cc),
        console['timeEnd']('changeButtons'),
        changeCheckboxes(_0x3d79cc),
        changeRadios(_0x3d79cc),
        resizeComponents(_0x3d79cc),
        console['timeEnd']('changeComponents');
}
function loadSVGAnimation(_0xc9b246, _0x253b4d, _0x19d8e6, _0x5eeae3, _0x15f303, _0x4ca37c, _0x17acfb) {
    var _0x5a8963 = (function () {
        var _0x22310a = !![];
        return function (_0x15b33d, _0x2f26a6) {
            var _0x3402ae = _0x22310a ? function () {
                if (_0x2f26a6) {
                    var _0x1e7bbe = _0x2f26a6['apply'](_0x15b33d, arguments);
                    return _0x2f26a6 = null,
                        _0x1e7bbe;
                }
            }
                : function () { }
                ;
            return _0x22310a = ![],
                _0x3402ae;
        }
            ;
    }())
        , _0x24c19 = _0x5a8963(this, function () {
            return _0x24c19['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x24c19)['search']('(((.+)+)+)+$');
        });
    return _0x24c19(),
        _0xc9b246 = new MovieClip(_0x17acfb),
        $['getJSON']('https://static.duelingbook.com/' + _0x19d8e6 + '.json', function (_0xc9f558) {
            _0xc9b246 = createSVGAnimation(_0xc9b246, _0x253b4d, _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558);
            switch (_0x253b4d) {
                case 'dim':
                    dim = _0xc9b246;
                    break;
                case 'private_chat_cycle':
                    private_chat_cycle = _0xc9b246,
                        public_chat_cycle = createSVGAnimation(public_chat_cycle, 'public_chat_cycle', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        watch_chat_cycle = createSVGAnimation(watch_chat_cycle, 'watch_chat_cycle', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        log_cycle = createSVGAnimation(log_cycle, 'log_cycle', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558);
                    break;
                case 'red_stream':
                    red_stream = _0xc9b246;
                    break;
                case 'blue_stream':
                    blue_stream = _0xc9b246;
                    break;
                case 'bubbles1':
                    bubbles1 = _0xc9b246,
                        bubbles2 = createSVGAnimation(bubbles2, 'bubbles2', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        bubbles3 = createSVGAnimation(bubbles3, 'bubbles3', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        bubbles4 = createSVGAnimation(bubbles4, 'bubbles4', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558);
                    break;
                case 'm1_select':
                    m1_select = _0xc9b246,
                        m2_select = createSVGAnimation(m2_select, 'm2_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        m3_select = createSVGAnimation(m3_select, 'm3_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        m4_select = createSVGAnimation(m4_select, 'm4_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        m5_select = createSVGAnimation(m5_select, 'm5_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        s1_select = createSVGAnimation(s1_select, 's1_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        s2_select = createSVGAnimation(s2_select, 's2_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        s3_select = createSVGAnimation(s3_select, 's3_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        s4_select = createSVGAnimation(s4_select, 's4_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        s5_select = createSVGAnimation(s5_select, 's5_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        link_left_select = createSVGAnimation(link_left_select, 'link_left_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        link_right_select = createSVGAnimation(link_right_select, 'link_right_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        m1_select2 = createSVGAnimation(m1_select2, 'm1_select2', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        m2_select2 = createSVGAnimation(m2_select2, 'm2_select2', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        m3_select2 = createSVGAnimation(m3_select2, 'm3_select2', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        m4_select2 = createSVGAnimation(m4_select2, 'm4_select2', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        m5_select2 = createSVGAnimation(m5_select2, 'm5_select2', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558),
                        $('#select_zones')['removeClass']('glowing');
                    break;
                case 'field_spell1_select':
                    field_spell1_select = _0xc9b246,
                        field_spell2_select = createSVGAnimation(field_spell2_select, 'field_spell2_select', _0x5eeae3, _0x15f303, _0x4ca37c, _0xc9f558);
                    break;
                case 'spark':
                    spark = _0xc9b246,
                        spark['json'] = _0xc9f558;
                    break;
                case 'shine':
                    shine = _0xc9b246,
                        shine['json'] = _0xc9f558;
                    break;
                case 'yugioh_logo':
                    yugioh_logo = _0xc9b246;
                    break;
                case 'targets':
                    target_select = _0xc9b246,
                        target_select['json'] = _0xc9f558,
                        target_select['width'] = _0x5eeae3,
                        $('#targets')['children']()['detach']();
                    break;
            }
        }),
        _0xc9b246;
}
function createSVGAnimation(_0x5ec382, _0x42d785, _0xf7ac86, _0x6ad8bd, _0x4fe68a, _0x485cc1) {
    !_0x5ec382 && (_0x5ec382 = new MovieClip());
    var _0x124b4d = _0x5ec382['playing'];
    return _0x5ec382 = new SVGAnim(_0x485cc1, _0xf7ac86, _0x6ad8bd, _0x4fe68a),
        $('#' + _0x42d785)['append']($(_0x5ec382['s']['node'])),
        $('#' + _0x42d785)['data']('cycle', _0x5ec382),
        !_0x124b4d && _0x5ec382['stop'](),
        _0x5ec382;
}
function MovieClip(_0x4f9d0a) {
    var _0x5cca5b = {};
    return _0x5cca5b['play'] = function () { }
        ,
        _0x5cca5b['stop'] = function () { }
        ,
        _0x5cca5b['playing'] = _0x4f9d0a,
        _0x5cca5b;
}
function showDim() {
    $('#dim')['show'](),
        dim['play'](),
        $('#dim')['css']('pointer-events', 'auto'),
        dimTimer['start']();
}
function hideDim() {
    $('#dim')['hide'](),
        dim['stop']();
}
function abortDim() {
    dimTimer['reset'](),
        awaiting_cards = ![],
        !messageShowing() && $('#dim')['css']('pointer-events', 'none');
}
function messageShowing() {
    if ($('#msg')['is'](':visible'))
        return !![];
    if ($('#link')['is'](':visible'))
        return !![];
    if ($('#input')['is'](':visible'))
        return !![];
    if ($('#confirm')['is'](':visible'))
        return !![];
    if ($('#confirm2')['is'](':visible'))
        return !![];
    if ($('#combo')['is'](':visible'))
        return !![];
    if ($('#recaptcha_box')['is'](':visible'))
        return !![];
    return ![];
}
function log(_0x340ef0) {
    console['log'](_0x340ef0),
        mobile && moderator && $('#duel\x20.cout_txt')['append'](_0x340ef0 + '<br>');
}
function replaceAll(_0x3912c3, _0x1204a3, _0xc95931) {
    return _0x3912c3['split'](_0x1204a3)['join'](_0xc95931);
}
function escapeHTML0(_0x48e335) {
    return _0x48e335 = replaceAll(_0x48e335, '&', '&amp;'),
        _0x48e335 = replaceAll(_0x48e335, '<', '&lt;'),
        _0x48e335;
}
function escapeHTML(_0x2d5020) {
    if (!_0x2d5020)
        return Str(_0x2d5020);
    return _0x2d5020 = replaceAll(_0x2d5020, '&', '&amp;'),
        _0x2d5020 = replaceAll(_0x2d5020, '<', '&lt;'),
        _0x2d5020 = replaceAll(_0x2d5020, '>', '&gt;'),
        _0x2d5020 = replaceAll(_0x2d5020, '\x22', '&quot;'),
        _0x2d5020 = replaceAll(_0x2d5020, '\x27', '&#39;'),
        _0x2d5020 = addBreaks(_0x2d5020),
        _0x2d5020;
}
function escapeHTMLWithLinks(_0x3e5b36, _0x38d818) {
    return _0x3e5b36 = escapeHTML(_0x3e5b36),
        _0x3e5b36 = addLinks(_0x3e5b36, _0x38d818),
        _0x3e5b36;
}
function addBreaks(_0x2a4cbf) {
    return _0x2a4cbf = replaceAll(_0x2a4cbf, '\x0a', '<br>'),
        _0x2a4cbf = replaceAll(_0x2a4cbf, '\x0d', '<br>'),
        _0x2a4cbf;
}
function addLinks(_0x1b548d, _0x247145) {
    if (isMalicious(_0x1b548d['toLowerCase']()))
        return _0x1b548d;
    var _0x43a054 = ''
        , _0x3989ea = 0x0;
    while (!![]) {
        _0x3989ea = _0x1b548d['search']('http://[!-~]|https://[!-~]|ftp://[!-~]|www\x5c.[!-~]');
        if (_0x3989ea < 0x0)
            return _0x43a054 += _0x1b548d,
                _0x43a054;
        _0x43a054 += _0x1b548d['substring'](0x0, _0x3989ea),
            _0x1b548d = _0x1b548d['substring'](_0x3989ea, _0x1b548d['length']);
        for (var _0x2f7219 = 0x0; _0x2f7219 < _0x1b548d['length']; _0x2f7219++) {
            if (_0x1b548d['charAt'](_0x2f7219) == '\x20' || _0x1b548d['charAt'](_0x2f7219) == '\x0a' || _0x1b548d['substring'](_0x2f7219)['indexOf']('<br>') == 0x0 || _0x1b548d['substring'](_0x2f7219)['indexOf']('\x22') == 0x0) {
                _0x43a054 += urlToLink(_0x1b548d['substring'](0x0, _0x2f7219), _0x247145),
                    _0x1b548d = _0x1b548d['substring'](_0x2f7219, _0x1b548d['length']);
                break;
            } else {
                if (_0x2f7219 == _0x1b548d['length'] - 0x1)
                    return _0x43a054 += urlToLink(_0x1b548d, _0x247145),
                        _0x43a054;
            }
        }
    }
    return null;
}
function isHREF(_0x2ae158) {
    for (var _0x3c8df5 = 0x1; _0x3c8df5 < _0x2ae158['length']; _0x3c8df5++) {
        if (_0x2ae158['charAt'](_0x3c8df5) == '\x22')
            return !![];
        if (_0x2ae158['charAt'](_0x3c8df5) == '\x20' || _0x2ae158['charAt'](_0x3c8df5) == '\x0a' || _0x2ae158['charAt'](_0x3c8df5) == '\x0a' || _0x2ae158['charAt'](_0x3c8df5))
            return ![];
    }
    return ![];
}
function _0x16cc(_0x9012ba, _0x1318c4) {
    var _0x332260 = _0x154f();
    return _0x16cc = function (_0xca1de0, _0xdbe43b) {
        _0xca1de0 = _0xca1de0 - 0x1c5;
        var _0x154fed = _0x332260[_0xca1de0];
        return _0x154fed;
    }
        ,
        _0x16cc(_0x9012ba, _0x1318c4);
}
function isMalicious(_0x286043) {
    var _0x15d657 = _0x286043['toLowerCase']();
    if (_0x15d657['indexOf']('src=\x22') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('gyazoo') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('bit.ly') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('goo.gl') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('imgvr.cf') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('bfy.ty') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('grabify') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('missingdrivers') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('hurr-durr') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('gfycat') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('liveleak') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('ouo.io') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('segue.se') >= 0x0)
        return !![];
    if (_0x15d657['indexOf']('tinyurl.com') >= 0x0)
        return !![];
    return ![];
}
function urlToLink(_0x4a15c1, _0x45aa1d) {
    if (_0x4a15c1['indexOf']('<') >= 0x0 || _0x4a15c1['indexOf']('>') >= 0x0)
        return _0x4a15c1;
    var _0x3a97ef;
    if (_0x4a15c1['substring'](0x0, 0x7) == 'http://')
        _0x3a97ef = '';
    else
        _0x4a15c1['substring'](0x0, 0x8) == 'https://' ? _0x3a97ef = '' : _0x3a97ef = 'http://';
    var _0x21fd49 = _0x3a97ef + replaceAll(_0x4a15c1, '\x22', '&quot;')
        , _0x392376 = URL_START + 'tourney?id=';
    if (_0x21fd49['indexOf'](_0x392376) >= 0x0) {
        var _0x123432 = _0x21fd49['substring'](_0x392376['length'], _0x21fd49['length']);
        if (_0x392376 + _0x123432 == _0x21fd49 && _0x123432 == parseInt(_0x123432)) {
            if (_0x45aa1d)
                return '</span><span\x20class=\x22link\x22><a\x20onclick=\x22gotoPairings({id:' + _0x123432 + '})\x22\x22><u>' + _0x4a15c1 + '</u></a></span><span\x20class=\x22not_link\x22>';
            return '<a\x20onclick=\x22gotoPairings({id:' + _0x123432 + '})\x22><u>' + _0x4a15c1 + '</u></a>';
        }
    }
    var _0x487c58 = URL_START + 'status?id=';
    if (_0x21fd49['indexOf'](_0x487c58) >= 0x0) {
        var _0x123432 = _0x21fd49['substring'](_0x487c58['length'], _0x21fd49['length']);
        if (_0x487c58 + _0x123432 == _0x21fd49 && _0x123432 == parseInt(_0x123432) && foundStatus(_0x123432)) {
            if (_0x45aa1d)
                return '</span><span\x20class=\x22link\x22><a\x20onclick=\x22findStatus({id:' + _0x123432 + ',link:true})\x22\x22><u>' + _0x4a15c1 + '</u></a></span><span\x20class=\x22not_link\x22>';
            return '<a\x20onclick=\x22findStatus({id:' + _0x123432 + ',link:true})\x22><u>' + _0x4a15c1 + '</u></a>';
        }
    }
    if (_0x45aa1d)
        return '</span><span\x20class=\x22link\x22><a\x20href=\x22' + _0x21fd49 + '\x22\x20target=\x22_blank\x22><u>' + _0x4a15c1 + '</u></a></span><span\x20class=\x22not_link\x22>';
    return '<a\x20href=\x22' + _0x21fd49 + '\x22\x20target=\x22_blank\x22><u>' + _0x4a15c1 + '</u></a>';
}
function stripSpaces(_0x38237a) {
    while (_0x38237a['indexOf']('\x0d\x0d\x0d') >= 0x0) {
        _0x38237a = _0x38237a['replace']('\x0d\x0d\x0d', '\x0d\x0d');
    }
    while (_0x38237a['indexOf']('\x20\x20') >= 0x0) {
        _0x38237a = _0x38237a['replace']('\x20\x20', '\x20');
    }
    return _0x38237a;
}
function replaceReturns(_0x503229) {
    return _0x503229['replace'](/\r/g, '\x0a');
}
function newCardFront() {
    if (recycled_cardfronts_arr['length'] > 0x0) {
        var _0x38c329 = recycled_cardfronts_arr['splice'](0x0, 0x1)[0x0];
        return _0x38c329['reset'](),
            _0x38c329;
    }
    return new CardFront();
}
function recycleCardFronts() {
    if (currentLabel == 'siding')
        return;
    for (var _0x245708 = 0x0; _0x245708 < deck_filled_arr['length']; _0x245708++) {
        recycled_cardfronts_arr['push'](deck_filled_arr[_0x245708]);
    }
    for (_0x245708 = 0x0; _0x245708 < side_filled_arr['length']; _0x245708++) {
        recycled_cardfronts_arr['push'](side_filled_arr[_0x245708]);
    }
    for (_0x245708 = 0x0; _0x245708 < extra_filled_arr['length']; _0x245708++) {
        recycled_cardfronts_arr['push'](extra_filled_arr[_0x245708]);
    }
}
function inBounds(_0x1da9fe, _0x50924c, _0x114ef5) {
    !_0x50924c && (_0x50924c = 0x0);
    _0x114ef5 && (addLine3('X\x20=\x20' + mouseX + ',\x20L\x20=\x20' + _0x1da9fe['offset']()['left']),
        addLine3('W\x20=\x20' + _0x1da9fe[0x0]['getBoundingClientRect']()['width']),
        addLine3('Y\x20=\x20' + mouseY + ',\x20T\x20=\x20' + _0x1da9fe['offset']()['top']),
        addLine3('H\x20=\x20' + _0x1da9fe[0x0]['getBoundingClientRect']()['height']));
    if (mouseX > _0x1da9fe['offset']()['left'] - _0x50924c && mouseX < _0x1da9fe['offset']()['left'] + _0x1da9fe[0x0]['getBoundingClientRect']()['width'] + _0x50924c && mouseY > _0x1da9fe['offset']()['top'] - _0x50924c && mouseY < _0x1da9fe['offset']()['top'] + _0x1da9fe[0x0]['getBoundingClientRect']()['height'] + _0x50924c)
        return !![];
    return ![];
}
function inBounds2(_0x2680fa, _0x236baa, _0x21ecfb) {
    !_0x236baa && (_0x236baa = 0x0);
    if (mouseX > _0x2680fa['offset']()['left'] - _0x236baa && mouseX < _0x2680fa['offset']()['left'] + _0x2680fa[0x0]['getBoundingClientRect']()['width'] + _0x236baa && mouseY > _0x2680fa['offset']()['top'] - _0x236baa && mouseY < _0x2680fa['offset']()['top'] + _0x2680fa[0x0]['scrollHeight'] + _0x236baa)
        return !![];
    return _0x21ecfb && (addLine3('X\x20=\x20' + mouseX + ',\x20L\x20=\x20' + _0x2680fa['offset']()['left']),
        addLine3('W\x20=\x20' + _0x2680fa[0x0]['getBoundingClientRect']()['width']),
        addLine3('Y\x20=\x20' + mouseY + ',\x20T\x20=\x20' + _0x2680fa['offset']()['top']),
        addLine3('H\x20=\x20' + _0x2680fa[0x0]['scrollHeight'])),
        ![];
}
function onScreen(_0x5056c5) {
    var _0x26973b = $('#content')[0x0]['style']['zoom']
        , _0x3824f1 = _0x5056c5['getBoundingClientRect']();
    if (_0x3824f1['left'] >= 0x0 && _0x3824f1['top'] >= 0x0 && _0x3824f1['right'] * _0x26973b <= window['innerWidth'] && _0x3824f1['bottom'] * _0x26973b <= window['innerHeight'])
        return console['log']('IS\x20ON\x20SCREEN'),
            !![];
    return console['log']('IS\x20NOT\x20SCREEN'),
        ![];
}
function updateMouse(_0x5403bc, _0x5ad583) {
    _0x5403bc['pageX'] && (mouseX = _0x5403bc['pageX'],
        mouseY = _0x5403bc['pageY']),
        mouseXScaled = mouseX / contentScale - marginLeft / contentScale,
        mouseYScaled = mouseY / contentScale - marginTop / contentScale,
        zooming && (mouseX = mouseXScaled + $('#content')['offset']()['left'],
            mouseY = mouseYScaled + $('#content')['offset']()['top']);
}
function takeScreenshot(_0x460e45, _0x174a4f) {
    if (taking_screenshot)
        return;
    var _0x2a41e8 = Date['now']();
    if (SAFARI) {
        if ($('span:contains(\u00a0)')['length'] > 0x0) {
            $('span:contains(\u00a0)')['each'](function (_0x252d67, _0x139438) {
                var _0x34fc22 = $(this)['html']();
                _0x34fc22 = _0x34fc22['replace'](/&nbsp;/g, '<font\x20style=\x22opacity:\x200;\x22>.</font>'),
                    $(this)['html'](_0x34fc22);
            }),
                setTimeout(function () {
                    takeScreenshot(_0x460e45, _0x174a4f);
                }, 0x32);
            return;
        }
    }
    !active && ($('html')['css']('pointer-events', 'none'),
        setTimeout(function () {
            $('html')['css']('pointer-events', 'auto');
        }, 0x1388));
    console['time']('dom-to-image'),
        taking_screenshot = !![],
        $(':focus')['blur']();
    var _0x2d0956 = $('#content')[0x0]['style']['zoom']
        , _0x57c1f3 = []
        , _0x484948 = []
        , _0x1efd42 = [];
    console['time']('each');
    var _0x3e76b9 = $('#content');
    _0x3e76b9['find']('.os-scrollbar')['each'](function () {
        var _0x38fcea = $(this)
            , _0x3f6e74 = _0x38fcea['clone']();
        _0x3f6e74['insertAfter'](_0x38fcea),
            _0x38fcea['detach'](),
            _0x1efd42['push'](function () {
                _0x38fcea['insertAfter'](_0x3f6e74),
                    _0x3f6e74['detach']();
            });
    }),
        $('*[data-overlayscrollbars-viewport]')['addClass']('unscrollable'),
        _0x3e76b9['find']('*')['each'](function (_0x433bcc, _0x48606f) {
            var _0x2f17a7 = ![]
                , _0x5b12cd = ![];
            if (_0x48606f['parentNode']['className']['indexOf'] && _0x48606f['parentNode']['className']['indexOf']('textarea') >= 0x0) { }
            if (_0x48606f['className']['indexOf'] && _0x48606f['className'] == 'card' && (_0x48606f['style']['top'] == '-21px' || _0x48606f['style']['top'] == '603px'))
                return !![];
            if (_0x48606f['parentNode']['classList']['contains']('cell')) { }
            if (_0x48606f['hasAttribute']('data-overlayscrollbars-viewport')) { }
            _0x48606f instanceof HTMLSelectElement && (_0x2f17a7 = !![]);
            if (_0x48606f instanceof HTMLBRElement) { }
            if (_0x48606f instanceof HTMLFontElement) { }
            (_0x48606f['style']['display'] === 'none' || _0x48606f['className']['indexOf'] && _0x48606f['className']['indexOf']('cardfront') == 0x0 && getRotationY(_0x48606f['parentNode']) > 0x5a) && (_0x2f17a7 = !![]);
            if (!_0x2f17a7) {
                var _0x2422da = _0x48606f['classList']['contains']('cell')
                    , _0x5ec587 = _0x48606f['getBoundingClientRect']();
                if (_0x5ec587['width'] == 0x0 || _0x5ec587['height'] == 0x0) { }
                (_0x5ec587['top'] + _0x5ec587['height'] < 0x0 && !_0x2422da || _0x5ec587['left'] + _0x5ec587['width'] < 0x0 || _0x5ec587['bottom'] * _0x2d0956 - _0x5ec587['height'] > window['innerHeight'] || _0x5ec587['right'] * _0x2d0956 - _0x5ec587['width'] > window['innerWidth']) && (_0x2f17a7 = !![]);
            }
            if (!document['body']['contains'](_0x48606f))
                return !![];
            if (_0x2f17a7) {
                var _0x3a817a = _0x48606f['parentNode']
                    , _0x4b1fa4 = _0x48606f['nextElementSibling'];
                _0x57c1f3['push'](function () {
                    try {
                        _0x3a817a['insertBefore'](_0x48606f, _0x4b1fa4);
                    } catch (_0x95d18d) {
                        _0x3a817a['appendChild'](_0x48606f);
                    }
                }),
                    _0x3a817a['removeChild'](_0x48606f);
            }
        });
    EDGE && !_0x174a4f && !FIREFOX && _0x3e76b9['find']('*')['each'](function (_0x52e3cb, _0xf46986) {
        if ($(this)['css']('overflow-y')['indexOf']('scroll') >= 0x0 || _0xf46986 instanceof HTMLTextAreaElement && $(this)[0x0]['scrollHeight'] > ceil($(this)['innerHeight']())) {
            var _0x516ace = $(this)
                , _0x23205d = parseInt(_0x516ace['css']('width'));
            _0x516ace['css']('width', _0x23205d + 0x20),
                _0x57c1f3['push'](function () {
                    _0x516ace['css']('width', _0x23205d + 0x10);
                });
        }
    });
    fancy_scrollbars ? _0x3e76b9['find']('.scrollpane')['each'](function (_0x26cb62, _0x5469d3) {
        var _0x21d7af = $(this)
            , _0x120a2b = $(this)['find']('*[data-overlayscrollbars-viewport]:first')
            , _0x1992f1 = _0x21d7af['scrollTop']()
            , _0x2df39e = _0x1992f1
            , _0x4bd6d9 = parseFloat(_0x21d7af['css']('height'))
            , _0x5f1397 = _0x21d7af['scrollHeight']();
        _0x5f1397 - _0x1992f1 < _0x4bd6d9 && (_0x2df39e = _0x5f1397 - _0x4bd6d9);
        var _0xa50f73 = _0x21d7af['scrollLeft']();
        _0x120a2b['css']('top', -_0x2df39e),
            _0x120a2b['css']('left', -_0xa50f73),
            _0x21d7af['find']('.os-scrollbar-vertical')['css']('max-height', _0x4bd6d9),
            _0x21d7af['css']('height', _0x4bd6d9 + _0x1992f1),
            _0x21d7af['hasClass']('list') && _0x21d7af['css']('clip-path', 'inset(0px\x200px\x20' + (_0x4bd6d9 + _0x1992f1 - _0x4bd6d9) + 'px\x200px)'),
            _0x484948['push'](function () {
                _0x120a2b['css']('top', 0x0),
                    _0x120a2b['css']('left', 0x0),
                    _0x120a2b['css']('height', _0x4bd6d9),
                    _0x21d7af['find']('.os-scrollbar-vertical')['css']('max-height', 'unset'),
                    _0x21d7af['css']('height', _0x4bd6d9),
                    _0x21d7af['css']('clip-path', 'unset'),
                    _0x21d7af['scrollTop'](_0x1992f1);
            });
    }) : _0x3e76b9['find']('.scrollpane')['each'](function (_0x4eb54a, _0xac5f37) {
        var _0x2c45af = $(this)
            , _0x15859e = $(this)['clone']()
            , _0x10addd = _0x2c45af['scrollTop']()
            , _0x3b0f10 = $('<div\x20class=\x22scrollpane_proxy\x22><div>');
        _0x3b0f10['css']('top', -_0x10addd),
            _0x3b0f10['html'](_0x15859e[0x0]['innerHTML']),
            _0x15859e['html'](_0x3b0f10),
            _0x15859e['insertAfter'](_0x2c45af),
            _0x2c45af['detach'](),
            _0x484948['push'](function () {
                _0x15859e['replaceWith'](_0x2c45af),
                    _0xac5f37['scrollTop'] = _0x10addd;
            });
    });
    console['timeEnd']('each'),
        console['log'](_0x3e76b9['html']());
    var _0x5d3c14 = $['Deferred'](), _0x4f4eac;
    EDGE || IE || mobile && SAFARI ? (_0x4f4eac = _0x5d3c14['then'](function (_0x168d6c) {
        return domtoimage['toSvg'](_0x3e76b9[0x0], {
            'bgcolor': '#000000',
            'width': 0x400,
            'height': 0x280,
            'style': {
                'transform': 'scale(1)',
                'margin': '0px',
                'zoom': '1'
            },
            'imagePlaceholder': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        });
    }),
        _0x4f4eac['done'](function (_0x3a04a4) {
            console['timeEnd']('dom-to-image');
            var _0x4afa52 = $(_0x3a04a4['substring'](0x21, _0x3a04a4['length']));
            _0x4afa52['find']('img[src^=\x22data:image\x22]')['each'](function (_0x29572d, _0xfa5360) {
                var _0x1e277f = _0xfa5360['getAttribute']('src');
                _0x1e277f['indexOf']('./images/') == 0x0 && (_0x1e277f = _0x1e277f['replace']('./images/', 'images/')),
                    _0x1e277f['indexOf']('images/') == 0x0 && (_0x1e277f = _0x1e277f['replace']('images/', 'https://images.duelingbook.com/')),
                    $(_0xfa5360)['attr']('src', _0x1e277f);
            }),
                _0x4afa52['find']('style:last')['html']('@font-face\x20{\x20font-family:\x20\x22Arial\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/Arial.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/Arial.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/Arial.svg#Arial\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/Arial.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/Arial.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/Arial.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Arial\x20Black2\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.svg#ArialBlack\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Arial\x20Rounded\x20MT\x20Bold\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.svg#ArialRoundedMTBold\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22EssayCaps\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.svg#EssayCaps\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Kristen\x20ITC\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.svg#KristenITC\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22MatrixRegularSmallCaps\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.svg#MatrixRegularSmallCaps\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Stone\x20Serif\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.svg#StoneSerif\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Stone\x20Serif\x20Bold\x22;\x20font-weight:\x20bold;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.svg#StoneSerifBold\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Stone\x20Serif\x20Italic\x22;\x20font-style:\x20italic;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.svg#StoneSerifItalic\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22MatrixBook\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.svg#MatrixBook\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.woff2\x22)\x20format(\x22woff2\x22);\x20}'),
                _0x4afa52['find']('.cardfront')['each'](function (_0x2159f7, _0x8589c9) {
                    if ($(this)['data']('custom') || $(this)['data']('id') > 0x4e20)
                        return !![];
                    var _0x33c8f2 = $(this)['find']('.pic')['attr']('src');
                    _0x33c8f2 = _0x33c8f2['substring'](_0x33c8f2['lastIndexOf']('/') + 0x1, _0x33c8f2['length']);
                    if (_0x33c8f2['indexOf']('.jpg') < 0x0 && _0x33c8f2['indexOf']('.gif') < 0x0)
                        return !![];
                    var _0x1c4634 = $('<img\x20class=\x22cardimage\x22\x20src=\x22https://images.duelingbook.com/cards-small/' + _0x33c8f2 + '\x22\x20/>');
                    $(_0x8589c9)['html'](_0x1c4634);
                });
            var _0x405785 = _0x4afa52[0x0]['outerHTML'];
            _0x405785 = _0x405785['replace'](/%0A/g, '');
            var _0x40a811 = new FormData();
            _0x40a811['append']('user_id', userId),
                _0x40a811['append']('username', str(username)),
                _0x40a811['append']('password', password),
                _0x40a811['append']('browser', getBrowser()),
                _0x40a811['append']('platform', getPlatform()),
                _0x40a811['append']('svg', _0x405785);
            var _0xfda2a1 = new XMLHttpRequest();
            _0xfda2a1['open']('POST', URL_START + 'php-scripts/upload-svg.php', !![]),
                _0xfda2a1['onreadystatechange'] = function () {
                    if (_0xfda2a1['readyState'] == 0x4 && _0xfda2a1['status'] == 0xc8) {
                        console['log'](_0xfda2a1['responseText']);
                        if (_0xfda2a1['responseText']['indexOf']('http') != 0x0)
                            return;
                        _0x174a4f ? Send({
                            'action': 'Send\x20screenshot',
                            'username': _0x174a4f,
                            'link': _0xfda2a1['responseText']
                        }) : (window['open'](_0xfda2a1['responseText']),
                            setTimeout(function () {
                                activated && showAnnouncement('Your\x20Screenshot:', '<a\x20href=\x22' + _0xfda2a1['responseText'] + '\x22\x20target=\x22_blank\x22><font\x20color=\x22#00CCFF\x22><u>' + _0xfda2a1['responseText'] + '</u></font></a>');
                            }, 0x3e8));
                    }
                }
                ,
                _0xfda2a1['send'](_0x40a811),
                _0xe9e3fb(),
                console['log']('c');
        })) : (_0x4f4eac = _0x5d3c14['then'](function (_0xa7769c) {
            if (CHROME) {
                if (PC && getChromeVersion() >= 0x57 && isBadChrome() || getChromeVersion() >= 0x57 && getPlatform() != 'PC')
                    $('#content')['css']('margin-left', 0x0),
                        $('#content')['css']('margin-top', 0x0),
                        $('#content')['css']('margin', 0x0);
                else {
                    if (isMediumVersion() || PC && getChromeVersion() >= 0x57 && !isBadChrome()) {
                        screenshotStyle['left'] = parseInt(-marginLeft) + 'px';
                        if (!MAC) { }
                    }
                }
                PC && (!zooming && (alignRight && (screenshotStyle['left'] = parseInt(-marginLeft * 0x2) + 'px')));
            }
            return domtoimage['toPng'](_0x3e76b9[0x0], {
                'bgcolor': '#000000',
                'width': 0x400,
                'height': 0x280,
                'style': screenshotStyle,
                'imagePlaceholder': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            });
        }),
            _0x4f4eac['done'](function (_0x59d4ce) {
                console['timeEnd']('dom-to-image'),
                    console['log'](_0x59d4ce),
                    _0x2a41e8 = Date['now']() - _0x2a41e8,
                    uploadImage(_0x59d4ce['substring'](0x16, _0x59d4ce['length']), 'Duelingbook\x20Screenshot', getImageDescription(_0x2a41e8), 'Client-Id\x20577062908ebfbf6', _0x174a4f),
                    _0xe9e3fb();
            }));
    _0x5d3c14['resolve'](),
        _0x4f4eac['fail'](function (_0x5bcc69) {
            console['log']('fail'),
                _0xe9e3fb(),
                _0x174a4f ? Send({
                    'action': 'Screenshot\x20fail',
                    'username': _0x174a4f
                }) : errorE('Failed\x20to\x20take\x20screenshot'),
                console['error']('oops,\x20something\x20went\x20wrong!', _0x5bcc69),
                !SAFARI && console['log'](_0x5bcc69['srcElement']['currentSrc']);
        });
    !_0x174a4f && playSound(SnapShot);
    function _0xe9e3fb() {
        taking_screenshot = ![],
            $('html')['css']('pointer-events', 'auto'),
            _0x57c1f3['reverse']();
        for (var _0x341614 = 0x0; _0x341614 < _0x57c1f3['length']; _0x341614++) {
            _0x57c1f3[_0x341614]();
        }
        for (var _0x341614 = 0x0; _0x341614 < _0x1efd42['length']; _0x341614++) {
            _0x1efd42[_0x341614]();
        }
        for (var _0x341614 = 0x0; _0x341614 < _0x484948['length']; _0x341614++) {
            _0x484948[_0x341614]();
        }
        while (data_arr['length'] > 0x0) {
            handleData(data_arr[0x0]),
                data_arr['splice'](0x0, 0x1);
        }
        $('*[data-overlayscrollbars-viewport]')['removeClass']('unscrollable'),
            $('#content')['css']('margin', '0\x20auto'),
            resizeE();
    }
}
function applyComputedStyles(_0x176588, _0x2d0aeb) {
    console['log'](_0x2d0aeb);
    for (var _0x35fc96 in _0x2d0aeb) {
        if (_0x2d0aeb['hasOwnProperty'](_0x35fc96)) {
            var _0x5cb9c0 = 'element.style.' + _0x2d0aeb[_0x35fc96] + '\x20=\x20' + _0x35fc96;
            console['log'](_0x5cb9c0),
                eval(_0x5cb9c0);
        }
    }
}
function applyComputedStyles(_0x458741, _0x5e8532) {
    Array['from'](_0x5e8532)['forEach'](function (_0x438e1b) {
        return _0x458741['style']['setProperty'](_0x438e1b, _0x5e8532['getPropertyValue'](_0x438e1b), _0x5e8532['getPropertyPriority'](_0x438e1b));
    });
}
function isMediumVersion() {
    if (getChromeVersion() == 0x51)
        return ![];
    if (getChromeVersion() <= 0x56 && getChromeVersion() > 0x41)
        return !![];
    return ![];
}
function isBadChrome() {
    if (navigator['userAgent']['indexOf']('NT\x2010.0') >= 0x0)
        return !![];
    if (navigator['userAgent']['indexOf']('NT\x206.3') >= 0x0)
        return !![];
    if (navigator['userAgent']['indexOf']('NT\x206.1') >= 0x0)
        return !![];
    return ![];
}
function getImageDescription(_0x58c8ba) {
    var _0x18a19a = '';
    return username && !replay && (_0x18a19a += username + '\x0a'),
        _0x18a19a += getBrowser(),
        CHROME && (_0x18a19a += '\x20v' + getChromeVersion()),
        _0x18a19a += ',\x20' + getPlatform() + '\x0a',
        _0x18a19a += 'Version\x20' + VERSION + '\x0a',
        _0x18a19a += _0x58c8ba + '\x20millis\x0a',
        _0x18a19a += image_url,
        _0x18a19a;
}
function isTainted(_0x4a9a6f) {
    if (_0x4a9a6f instanceof HTMLImageElement) {
        if (_0x4a9a6f['src']['toLowerCase']()['indexOf']('duelingbook.com') >= 0x0)
            return !![];
        if ($('#profile_body\x20.profile_txt')[0x0]['contains'](_0x4a9a6f))
            return ![];
    }
    return !![];
}
function cssPath(_0x2062c1) {
    var _0x15dca1 = '';
    while (!![]) {
        if (_0x2062c1['id'])
            return '#' + _0x2062c1['id'] + _0x15dca1;
        var _0x576cb2 = 0x1
            , _0x147f88 = $(_0x2062c1);
        while (!![]) {
            _0x147f88 = $(_0x147f88)['prev']();
            if (_0x147f88['length'] == 0x0)
                break;
            _0x576cb2++;
        }
        _0x15dca1 = ':nth-child(' + _0x576cb2 + ')' + _0x15dca1;
        _0x2062c1['classList'] && Array['from'](_0x2062c1['classList'])['length'] > 0x0 ? _0x15dca1 = '\x20>\x20.' + Array['from'](_0x2062c1['classList'])[0x0] + _0x15dca1 : _0x15dca1 = '\x20>\x20*' + _0x15dca1;
        if (_0x2062c1['parentNode'])
            _0x2062c1 = _0x2062c1['parentNode'];
        else
            break;
    }
    return _0x15dca1['substring'](0x1, _0x15dca1['length']) + ':first';
}
function cssImagePath(_0x4004c5) {
    var _0x23171c = 'img:first'
        , _0x470904 = _0x4004c5;
    while (!![]) {
        if (_0x470904['id']) {
            _0x23171c = '\x20#' + _0x470904['id'] + _0x23171c;
            break;
        }
        Array['from'](_0x470904['classList'])['length'] > 0x0 && (_0x23171c = '\x20.' + Array['from'](_0x470904['classList'])['join']('.') + _0x23171c);
        if (_0x470904['parentNode'])
            _0x470904 = _0x470904['parentNode'];
        else
            break;
    }
    return _0x23171c['substring'](0x1, _0x23171c['length']);
}
function resizeImage(_0x5125a7) {
    var _0xe86ff2 = new Image();
    _0xe86ff2['onload'] = function () {
        var _0x335318, _0x523214 = this['naturalWidth'], _0x27e190 = this['naturalHeight'], _0x15a184 = document['createElement']('canvas');
        _0x15a184['width'] = _0x523214,
            _0x15a184['height'] = _0x27e190;
        var _0x3c98ff = _0x15a184['getContext']('2d');
        if (_0x27e190 > 0x280 && _0x523214 > 0x400 && _0x27e190 / _0x523214 < 0.625)
            _0x523214 = Math['round'](_0x523214 * 0x280 / _0x27e190),
                Math['abs'](_0x523214 % 0x2) == 0x1 && _0x523214++,
                _0x27e190 = 0x280,
                _0x15a184['width'] = _0x523214,
                _0x15a184['height'] = _0x27e190;
        else
            _0x523214 > 0x400 && _0x27e190 > 0x280 && _0x523214 / _0x27e190 > 0.625 && (_0x27e190 = Math['round'](_0x27e190 * 0x400 / _0x523214),
                Math['abs'](_0x27e190 % 0x2) == 0x1 && _0x27e190++,
                _0x523214 = 0x400,
                _0x15a184['width'] = _0x523214,
                _0x15a184['height'] = _0x27e190);
        _0x3c98ff['drawImage'](this, 0x0, 0x0, _0x523214, _0x27e190);
        if (_0x27e190 / _0x523214 < 0.625) {
            var _0x726139 = (_0x523214 - _0x27e190 / 0.625) / 0x2;
            _0x15a184['width'] = _0x523214 - _0x726139 * 0x2,
                _0x3c98ff['drawImage'](_0xe86ff2, -_0x726139, 0x0, _0x523214, _0x27e190);
        } else {
            if (_0x27e190 / _0x523214 > 0.625) {
                var _0xbdd1ff = (_0x27e190 - _0x523214 * 0.625) / 0x2;
                _0x15a184['height'] = _0x523214 * 0.625,
                    _0x3c98ff['drawImage'](_0xe86ff2, 0x0, -_0xbdd1ff, _0x523214, _0x27e190);
            }
        }
        try {
            _0x335318 = _0x15a184['toDataURL'](),
                window['open'](_0x335318);
        } catch (_0x47e20f) {
            console['log'](_0x47e20f),
                errorE('Failed\x20to\x20take\x20screenshot');
        }
        _0x15a184['remove']();
    }
        ,
        _0xe86ff2['setAttribute']('src', _0x5125a7);
}
function uploadImage(_0x393c3f, _0x957fc5, _0x3cddfd, _0x52ae68, _0xcba421) {
    console['time']('uploadImage');
    var _0x6c1d68 = new FormData();
    _0x6c1d68['append']('image', _0x393c3f),
        _0x6c1d68['append']('type', 'base64'),
        _0x6c1d68['append']('title', _0x957fc5),
        _0x6c1d68['append']('description', _0x3cddfd);
    var _0x3354ce = new XMLHttpRequest();
    _0x3354ce['open']('POST', 'https://api.imgur.com/3/image', !![]),
        _0x3354ce['setRequestHeader']('Authorization', _0x52ae68),
        _0x3354ce['onreadystatechange'] = function () {
            _0x3354ce['readyState'] == 0x4 && _0x3354ce['status'] == 0xc8 && (console['timeEnd']('uploadImage'),
                console['log'](_0x3354ce['responseText']),
                openScreenshot(_0x3354ce['responseText'], _0xcba421));
        }
        ,
        _0x3354ce['send'](_0x6c1d68);
}
function openScreenshot(_0x50fb40, _0x2bccd6) {
    var _0x666665 = JSON['parse'](_0x50fb40);
    _0x2bccd6 ? Send({
        'action': 'Send\x20screenshot',
        'username': _0x2bccd6,
        'link': _0x666665['data']['link']
    }) : (window['open'](_0x666665['data']['link']),
        setTimeout(function () {
            activated && showAnnouncement('Your\x20Screenshot:', '<a\x20href=\x22' + _0x666665['data']['link'] + '\x22\x20target=\x22_blank\x22><font\x20color=\x22#00CCFF\x22><u>' + _0x666665['data']['link'] + '</u></font></a>');
        }, 0x3e8));
    var _0x5bc6b1 = new FormData();
    _0x5bc6b1['append']('user_id', userId),
        _0x5bc6b1['append']('username', username),
        _0x5bc6b1['append']('password', password),
        _0x5bc6b1['append']('result', _0x50fb40),
        _0x5bc6b1['append']('version', VERSION);
    var _0xaa6248 = new XMLHttpRequest();
    _0xaa6248['open']('POST', URL_START + 'php-scripts/upload-screenshot.php', !![]),
        _0xaa6248['send'](_0x5bc6b1);
}
function playSound(_0x1f3d9c, _0x51c3a5) {
    _0x51c3a5 !== ![] && (_0x51c3a5 = !![]);
    try {
        if (typeof _0x1f3d9c == 'string') {
            for (var _0x9cc302 = 0x0; _0x9cc302 < audio_arr['length']; _0x9cc302++) {
                if (audio_arr[_0x9cc302]['getAttribute']('src') == _0x1f3d9c) {
                    _0x1f3d9c = audio_arr[_0x9cc302];
                    break;
                }
            }
            _0x9cc302 == audio_arr['length'] && (_0x1f3d9c = new Audio(_0x1f3d9c));
        }
        var _0x14095a = _0x1f3d9c;
        !_0x1f3d9c['paused'] && (_0x14095a = _0x1f3d9c['cloneNode']());
        $('#cross')['is'](':visible') ? _0x14095a['volume'] = 0x0 : _0x14095a['volume'] = 0.35;
        if (_0x51c3a5)
            _0x14095a['currentTime'] = 0x0;
        else {
            _0x1f3d9c['play']();
            return;
        }
        _0x14095a['play'](),
            audio_arr['push'](_0x14095a);
    } catch (_0x725328) {
        console['error'](_0x725328);
    }
}
function stopSounds() {
    while (audio_arr['length'] > 0x0) {
        audio_arr[0x0]['pause'](),
            audio_arr['splice'](0x0, 0x1);
    }
}
function selectText(_0xb392f8) {
    console['log']('selectText'),
        console['log'](_0xb392f8);
    _0xb392f8 instanceof HTMLFontElement && (_0xb392f8 = $(_0xb392f8)['parents']('.cout_txt')['length'] > 0x0 ? $(_0xb392f8)['parents']('.cout_txt:first')[0x0] : _0xb392f8['parentNode']);
    if (!$(_0xb392f8)['hasClass']('selectable') && !$(_0xb392f8)['parent']()['hasClass']('selectable'))
        return;
    if (document['selection']) {
        var _0x565648 = document['body']['createTextRange']();
        _0x565648['moveToElementText'](_0xb392f8),
            _0x565648['select']();
    } else {
        var _0x565648 = document['createRange']();
        _0x565648['setStartBefore'](_0xb392f8),
            _0x565648['setEndAfter'](_0xb392f8),
            window['getSelection']()['addRange'](_0x565648);
    }
}
function clearSelection() {
    var _0x5e762a;
    if ((_0x5e762a = document['selection']) && _0x5e762a['empty'])
        _0x5e762a['empty']();
    else {
        window['getSelection'] && window['getSelection']()['removeAllRanges']();
        var _0x555916 = document['activeElement'];
        if (_0x555916) {
            var _0x475aec = _0x555916['nodeName']['toLowerCase']();
            (_0x475aec == 'textarea' || _0x475aec == 'input' && _0x555916['type'] == 'text') && (_0x555916['selectionStart'] = _0x555916['selectionEnd']);
        }
    }
}
function onKeyUp(_0x2960ec) {
    shiftDown = ![],
        controlDown = ![],
        $('html')['off']('keyup', onKeyUp);
    return;
}
function goto(_0x11f8c2) {
    changing_components = !![],
        $('#frames')['children']()['hide'](),
        $('#' + _0x11f8c2)['show'](),
        currentLabel = _0x11f8c2,
        $('#' + currentLabel + '\x20img')['each'](function (_0x4b178c, _0xcd40bf) {
            $(this)['attr']('data-src') && ($(this)['attr']('src', $(this)['attr']('data-src')),
                $(this)['removeAttr']('data-src'));
        });
}
function watchComponent(_0x11ae06) {
    var _0x240fc5 = _0x11ae06['data']('proxy');
    watch(_0x11ae06, 'display', function () {
        _0x240fc5['css']('display', _0x11ae06['css']('display'));
    }),
        watch(_0x11ae06, 'left', function () {
            var _0x540259 = parseFloat(_0x11ae06['css']('left'));
            (_0x240fc5['hasClass']('checkbox') || _0x240fc5['hasClass']('radiobutton')) && (_0x540259 += 0x2),
                _0x240fc5['css']('left', _0x540259);
        }),
        watch(_0x11ae06, 'top', function () {
            var _0x1d69c6 = parseFloat(_0x11ae06['css']('top'));
            (_0x240fc5['hasClass']('checkbox') || _0x240fc5['hasClass']('radiobutton')) && (_0x1d69c6 += 0x2),
                _0x240fc5['css']('top', _0x1d69c6);
        }),
        watch(_0x11ae06, 'color', function () {
            _0x240fc5['css']('color', _0x11ae06['css']('color'));
        });
}
function getAvatarStart(_0x2ab12c) {
    if (_0x2ab12c['indexOf']('http') == 0x0)
        return _0x2ab12c;
    return parseInt(_0x2ab12c['substring'](0x0, _0x2ab12c['indexOf']('.'))) < 0x36b0 ? CARD_IMAGES_START + _0x2ab12c : (_0x2ab12c = PROFILE_PIC_START + _0x2ab12c,
        _0x2ab12c['includes']('.gif') && (_0x2ab12c = _0x2ab12c['replace']('images.duelingbook.com', 'www.duelingbook.com/images')),
        _0x2ab12c);
}
function Cell(_0x3b6dde) {
    var _0x4a0fef = document['createElement']('div');
    _0x4a0fef['className'] = 'cell\x20cell1';
    var _0x5d3a18 = document['createElement']('span');
    return _0x5d3a18['textContent'] = _0x3b6dde,
        _0x4a0fef['appendChild'](_0x5d3a18),
        streaming && isOffensive(_0x3b6dde) && $(_0x5d3a18)['css']('opacity', 0x0),
        _0x4a0fef;
}
function Cell2(_0x53a987) {
    var _0x42cfab = new Cell(_0x53a987);
    return removeClass(_0x42cfab, 'cell1'),
        addClass(_0x42cfab, 'cell2'),
        _0x42cfab;
}
function cellClickE(_0x3b5bf9) {
    $(_0x3b5bf9['currentTarget'])['find']('.cell.selected,\x20.cell2.selected')['removeClass']('selected'),
        $(_0x3b5bf9['target'])['filter']('.cell')['addClass']('selected');
}
function updateCardLimits() {
    var _0x164b59 = $('#' + currentLabel + '\x20.ocg_limit_rb')['is'](':checked');
    for (var _0x1be8eb = 0x0; _0x1be8eb < deck_arr['length']; _0x1be8eb++) {
        deck_arr[_0x1be8eb]['setLimit'](_0x164b59);
    }
    for (_0x1be8eb = 0x0; _0x1be8eb < side_arr['length']; _0x1be8eb++) {
        side_arr[_0x1be8eb]['setLimit'](_0x164b59);
    }
    for (_0x1be8eb = 0x0; _0x1be8eb < extra_arr['length']; _0x1be8eb++) {
        extra_arr[_0x1be8eb]['setLimit'](_0x164b59);
    }
    for (_0x1be8eb = 0x0; _0x1be8eb < search_arr['length']; _0x1be8eb++) {
        search_arr[_0x1be8eb]['setLimit'](_0x164b59);
    }
}
function randomizeDeck() {
    randomize(deck_filled_arr),
        initializeDeckCards(),
        setUnsavedChanges();
}
function sortDeck() {
    deck_filled_arr['sort'](sortCards2),
        side_filled_arr['sort'](sortCards2),
        extra_filled_arr['sort'](sortCards2),
        console['time']('initializeDeckCards'),
        initializeDeckCards(),
        console['timeEnd']('initializeDeckCards');
}
function sortCards2(_0x47e9a2, _0x5d3079) {
    if (_0x47e9a2['data']('card_type') > _0x5d3079['data']('card_type'))
        return 0x1;
    if (_0x47e9a2['data']('card_type') < _0x5d3079['data']('card_type'))
        return -0x1;
    if (_0x47e9a2['data']('pendulum') < _0x5d3079['data']('pendulum'))
        return -0x1;
    if (_0x47e9a2['data']('pendulum') > _0x5d3079['data']('pendulum'))
        return 0x1;
    if (_0x47e9a2['data']('is_link') > _0x5d3079['data']('is_link'))
        return 0x1;
    if (_0x47e9a2['data']('is_link') < _0x5d3079['data']('is_link'))
        return -0x1;
    if (_0x47e9a2['data']('monster_color') > _0x5d3079['data']('monster_color'))
        return 0x1;
    if (_0x47e9a2['data']('monster_color') < _0x5d3079['data']('monster_color'))
        return -0x1;
    if (_0x47e9a2['data']('name')['toLowerCase']() > _0x5d3079['data']('name')['toLowerCase']())
        return 0x1;
    if (_0x47e9a2['data']('name')['toLowerCase']() < _0x5d3079['data']('name')['toLowerCase']())
        return -0x1;
    if (_0x47e9a2['data']('id') > _0x5d3079['data']('id'))
        return 0x1;
    if (_0x47e9a2['data']('id') < _0x5d3079['data']('id'))
        return -0x1;
}
function clearDeck(_0x5b63f4) {
    _0x5b63f4 != !![] && recycleCardFronts(),
        deck_filled_arr = [],
        side_filled_arr = [],
        extra_filled_arr = [],
        cardsInMain = 0x0,
        cardsInSide = 0x0,
        cardsInExtra = 0x0,
        countMain(),
        countSide(),
        countExtra();
}
function addCardToMain(_0x45ca0c, _0x139d36) {
    _0x139d36 == undefined && (_0x139d36 = -0x1),
        cardsInMain < 0x3c && (cardsInMain++,
            _0x139d36 >= 0x0 ? deck_filled_arr['splice'](_0x139d36, 0x0, _0x45ca0c) : deck_filled_arr['push'](_0x45ca0c),
            !loading_deck && (initializeDeckCards(),
                setUnsavedChanges())),
        searching = !![];
}
function addCardToSide(_0x26ac52, _0x5447b3) {
    _0x5447b3 == undefined && (_0x5447b3 = -0x1),
        cardsInSide < 0xf && (cardsInSide++,
            _0x5447b3 >= 0x0 ? side_filled_arr['splice'](_0x5447b3, 0x0, _0x26ac52) : side_filled_arr['push'](_0x26ac52),
            !loading_deck && (initializeDeckCards(),
                setUnsavedChanges())),
        searching = !![];
}
function addCardToExtra(_0x1fbfe2, _0x3bd364) {
    _0x3bd364 == undefined && (_0x3bd364 = -0x1),
        cardsInExtra < 0xf && (cardsInExtra++,
            _0x3bd364 >= 0x0 ? extra_filled_arr['splice'](_0x3bd364, 0x0, _0x1fbfe2) : extra_filled_arr['push'](_0x1fbfe2),
            !loading_deck && (initializeDeckCards(),
                setUnsavedChanges())),
        searching = !![];
}
function DeckCard(_0x5ca57b) {
    var _0x297509 = newCardFront();
    return _0x297509['attr']('id', 'deck_card' + (_0x5ca57b + 0x1)),
        _0x297509['addClass']('deck_card'),
        _0x297509['css']('left', mainXArray[_0x5ca57b]),
        _0x297509['css']('top', mainYArray[_0x5ca57b]),
        addCardDragging(_0x297509, removeCardFromMain, deckCardDrop),
        _0x297509;
}
function SideCard(_0x1df4ba) {
    var _0x42d119 = newCardFront();
    return _0x42d119['attr']('id', 'side_card' + (_0x1df4ba + 0x1)),
        _0x42d119['addClass']('side_card'),
        _0x42d119['css']('left', sideXArray[_0x1df4ba]),
        _0x42d119['css']('top', 489.1),
        addCardDragging(_0x42d119, removeCardFromSide, sideCardDrop),
        _0x42d119;
}
function ExtraCard(_0x2b034a) {
    var _0x2bc7b1 = newCardFront();
    return _0x2bc7b1['attr']('id', 'extra_card' + (_0x2b034a + 0x1)),
        _0x2bc7b1['addClass']('extra_card'),
        _0x2bc7b1['css']('left', sideXArray[_0x2b034a]),
        _0x2bc7b1['css']('top', 571.6),
        addCardDragging(_0x2bc7b1, removeCardFromExtra, extraCardDrop),
        _0x2bc7b1;
}
function SearchCard(_0x11f746) {
    var _0x1866f8 = newCardFront();
    return _0x1866f8['attr']('id', 'search_card' + (_0x11f746 + 0x1)),
        _0x1866f8['addClass']('search_card'),
        _0x1866f8['css']('left', searchXArray[_0x11f746]),
        _0x1866f8['css']('top', searchYArray[_0x11f746]),
        addCardDragging(_0x1866f8, null, searchCardDrop),
        _0x1866f8;
}
function initializeDeckCards() {
    var _0x2e933c = $('#' + currentLabel + '\x20.ocg_limit_rb')['is'](':checked');
    for (var _0x2b8251 = 0x0; _0x2b8251 < deck_filled_arr['length']; _0x2b8251++) {
        deck_arr['length'] < _0x2b8251 + 0x1 && deck_arr['push'](new DeckCard(_0x2b8251)),
            deck_arr[_0x2b8251]['data']('id') != deck_filled_arr[_0x2b8251]['data']('id') && (deck_arr[_0x2b8251]['copyCard'](deck_filled_arr[_0x2b8251]),
                currentLabel == 'deck_constructor' && deck_arr[_0x2b8251]['setLimit'](_0x2e933c));
    }
    for (_0x2b8251 = 0x0; _0x2b8251 < side_filled_arr['length']; _0x2b8251++) {
        side_arr['length'] < _0x2b8251 + 0x1 && side_arr['push'](new SideCard(_0x2b8251)),
            side_arr[_0x2b8251]['data']('id') != side_filled_arr[_0x2b8251]['data']('id') && (side_arr[_0x2b8251]['copyCard'](side_filled_arr[_0x2b8251]),
                currentLabel == 'deck_constructor' && side_arr[_0x2b8251]['setLimit'](_0x2e933c));
    }
    for (_0x2b8251 = 0x0; _0x2b8251 < extra_filled_arr['length']; _0x2b8251++) {
        extra_arr['length'] < _0x2b8251 + 0x1 && extra_arr['push'](new ExtraCard(_0x2b8251)),
            extra_arr[_0x2b8251]['data']('id') != extra_filled_arr[_0x2b8251]['data']('id') && (extra_arr[_0x2b8251]['copyCard'](extra_filled_arr[_0x2b8251]),
                currentLabel == 'deck_constructor' && extra_arr[_0x2b8251]['setLimit'](_0x2e933c));
    }
    cardsInMain = deck_filled_arr['length'],
        cardsInSide = side_filled_arr['length'],
        cardsInExtra = extra_filled_arr['length'],
        countMain(),
        countSide(),
        countExtra();
}
function countMain() {
    for (var _0x2355ff = 0x0; _0x2355ff < deck_arr['length']; _0x2355ff++) {
        cardsInMain > _0x2355ff ? ((deck_arr[_0x2355ff]['parent']()['length'] == 0x0 || !deck_arr[_0x2355ff]['parent']()['is'](':visible')) && (currentLabel == 'deck_constructor' ? $('#deck_constructor\x20.cards')['append'](deck_arr[_0x2355ff]) : $('#siding')['append'](deck_arr[_0x2355ff])),
            deck_arr[_0x2355ff][0x0]['style']['display'] != 'block' && (deck_arr[_0x2355ff][0x0]['style']['display'] = 'block',
                deck_arr[_0x2355ff]['setCardName']())) : deck_arr[_0x2355ff][0x0]['style']['display'] = 'none';
    }
    var _0x493d85 = 0x0
        , _0x2724bc = 0x0
        , _0x554fc9 = 0x0
        , _0x30833d = 0x0
        , _0xd5adfa = 0x0
        , _0xd871f = 0x0;
    for (_0x2355ff = 0x0; _0x2355ff < deck_filled_arr['length']; _0x2355ff++) {
        if (deck_filled_arr[_0x2355ff]['data']('card_type') == 'Spell')
            _0xd5adfa++;
        else {
            if (deck_filled_arr[_0x2355ff]['data']('card_type') == 'Trap')
                _0xd871f++;
            else {
                if (deck_filled_arr[_0x2355ff]['data']('pendulum') == 0x1)
                    _0x30833d++;
                else {
                    if (deck_filled_arr[_0x2355ff]['data']('monster_color') == 'Normal')
                        _0x493d85++;
                    else {
                        if (deck_filled_arr[_0x2355ff]['data']('monster_color') == 'Effect')
                            _0x2724bc++;
                        else
                            deck_filled_arr[_0x2355ff]['data']('monster_color') == 'Ritual' && _0x554fc9++;
                    }
                }
            }
        }
    }
    $('#deck_constructor\x20.total_txt')['text'](deck_filled_arr['length']),
        $('.total_normal_txt')['text'](_0x493d85),
        $('.total_effect_txt')['text'](_0x2724bc),
        $('.total_ritual_txt')['text'](_0x554fc9),
        $('.total_pendulum_txt')['text'](_0x30833d),
        $('.total_spell_txt')['text'](_0xd5adfa),
        $('.total_trap_txt')['text'](_0xd871f);
}
function countSide() {
    for (var _0x5f19a8 = 0x0; _0x5f19a8 < side_arr['length']; _0x5f19a8++) {
        cardsInSide > _0x5f19a8 ? ((side_arr[_0x5f19a8]['parent']()['length'] == 0x0 || !side_arr[_0x5f19a8]['parent']()['is'](':visible')) && (currentLabel == 'deck_constructor' ? $('#deck_constructor\x20.cards')['append'](side_arr[_0x5f19a8]) : $('#siding')['append'](side_arr[_0x5f19a8])),
            side_arr[_0x5f19a8][0x0]['style']['display'] != 'block' && (side_arr[_0x5f19a8][0x0]['style']['display'] = 'block',
                side_arr[_0x5f19a8]['setCardName']())) : side_arr[_0x5f19a8][0x0]['style']['display'] = 'none';
    }
}
function countExtra() {
    for (var _0x46b492 = 0x0; _0x46b492 < extra_arr['length']; _0x46b492++) {
        cardsInExtra > _0x46b492 ? ((extra_arr[_0x46b492]['parent']()['length'] == 0x0 || !extra_arr[_0x46b492]['parent']()['is'](':visible')) && (currentLabel == 'deck_constructor' ? $('#deck_constructor\x20.cards')['append'](extra_arr[_0x46b492]) : $('#siding')['append'](extra_arr[_0x46b492])),
            extra_arr[_0x46b492][0x0]['style']['display'] != 'block' && (extra_arr[_0x46b492][0x0]['style']['display'] = 'block',
                extra_arr[_0x46b492]['setCardName']())) : extra_arr[_0x46b492][0x0]['style']['display'] = 'none';
    }
}
function getUnderlyingDeckCard() {
    for (var _0x123f51 = 0x0; _0x123f51 < deck_arr['length']; _0x123f51++) {
        if (inBounds(deck_arr[_0x123f51], 0x5))
            return _0x123f51;
    }
    return -0x1;
}
function getUnderlyingSideCard() {
    for (var _0x31015d = 0x0; _0x31015d < side_arr['length']; _0x31015d++) {
        if (inBounds(side_arr[_0x31015d], 0x4))
            return _0x31015d;
    }
    return -0x1;
}
function getUnderlyingExtraCard() {
    for (var _0x517598 = 0x0; _0x517598 < extra_arr['length']; _0x517598++) {
        if (inBounds(extra_arr[_0x517598], 0x4))
            return _0x517598;
    }
    return -0x1;
}
function exportDeckYDK() {
    var _0x560544 = '';
    _0x560544 += '#created\x20by\x20...' + '\x0a',
        _0x560544 += '#main' + '\x0a';
    for (var _0x22d220 = 0x0; _0x22d220 < deck_filled_arr['length']; _0x22d220++) {
        ~~deck_filled_arr[_0x22d220]['data']('serial_number') > 0x0 && (_0x560544 += deck_filled_arr[_0x22d220]['data']('serial_number') + '\x0a');
    }
    _0x560544 += '#extra' + '\x0a';
    for (_0x22d220 = 0x0; _0x22d220 < extra_filled_arr['length']; _0x22d220++) {
        ~~extra_filled_arr[_0x22d220]['data']('serial_number') > 0x0 && (_0x560544 += extra_filled_arr[_0x22d220]['data']('serial_number') + '\x0a');
    }
    _0x560544 += '!side' + '\x0a';
    for (_0x22d220 = 0x0; _0x22d220 < side_filled_arr['length']; _0x22d220++) {
        ~~side_filled_arr[_0x22d220]['data']('serial_number') > 0x0 && (_0x560544 += side_filled_arr[_0x22d220]['data']('serial_number') + '\x0a');
    }
    while (_0x560544['indexOf']('\x0a\x0a') >= 0x0) {
        _0x560544 = _0x560544['replace']('\x0a\x0a', '\x0a');
    }
    var _0x3fdd71 = deck['data'];
    _0x3fdd71 = replaceSpecialCharacters(_0x3fdd71),
        download(_0x560544, _0x3fdd71 + '.ydk', 'text/plain');
}
function exportDeckYDKE() {
    var _0xc763c4 = []
        , _0x2f03df = []
        , _0x387fb2 = [];
    for (var _0x1d84eb = 0x0; _0x1d84eb < deck_filled_arr['length']; _0x1d84eb++) {
        ~~deck_filled_arr[_0x1d84eb]['data']('serial_number') > 0x0 && _0xc763c4['push'](~~deck_filled_arr[_0x1d84eb]['data']('serial_number'));
    }
    for (_0x1d84eb = 0x0; _0x1d84eb < side_filled_arr['length']; _0x1d84eb++) {
        ~~side_filled_arr[_0x1d84eb]['data']('serial_number') > 0x0 && _0x2f03df['push'](~~side_filled_arr[_0x1d84eb]['data']('serial_number'));
    }
    for (_0x1d84eb = 0x0; _0x1d84eb < extra_filled_arr['length']; _0x1d84eb++) {
        ~~extra_filled_arr[_0x1d84eb]['data']('serial_number') > 0x0 && _0x387fb2['push'](~~extra_filled_arr[_0x1d84eb]['data']('serial_number'));
    }
    var _0x4f6bd6 = {
        'main': Uint32Array['from'](_0xc763c4),
        'side': Uint32Array['from'](_0x2f03df),
        'extra': Uint32Array['from'](_0x387fb2)
    }
        , _0x11dd1a = toURL(_0x4f6bd6);
    getLink('YDKe\x20Code', 'Here\x20is\x20the\x20code\x20for\x20this\x20decklist.\x20<font\x20color=\x22#0077FF\x22><a\x20href=\x22' + URL_START + 'welcome#importing\x22\x20target=\x22_blank\x22><u>Click\x20Here</u></a></font>\x20to\x20learn\x20how\x20to\x20use\x20it.', _0x11dd1a, !![]),
        copyText(_0x11dd1a, function () {
            if (!username)
                return;
            var _0x3cf1c5 = new Notification();
            _0x3cf1c5['setupCopied']('Successfully\x20copied\x20YDKe\x20code\x20to\x20clipboard.'),
                _0x3cf1c5['data']('fast', !![]),
                addToNotifications(_0x3cf1c5, !![]);
        });
}
function toURL(_0x2921fb) {
    return 'ydke://' + passcodesToBase64(_0x2921fb['main']) + '!' + passcodesToBase64(_0x2921fb['extra']) + '!' + passcodesToBase64(_0x2921fb['side']) + '!';
}
function passcodesToBase64(_0x36cdbe) {
    var _0x3243fd = new Uint8Array(_0x36cdbe['length'] * 0x4)
        , _0x2ed331 = new DataView(_0x3243fd['buffer']);
    for (var _0x5de735 = 0x0; _0x5de735 < _0x36cdbe['length']; _0x5de735++) {
        _0x2ed331['setUint32'](_0x5de735 * 0x4, _0x36cdbe[_0x5de735], !![]);
    }
    var _0x1bd9c1 = btoa(String['fromCharCode']['apply'](null, _0x3243fd));
    return _0x1bd9c1;
}
function isYDKE(_0x44e2f3, _0x23db27) {
    if (!_0x44e2f3['startsWith']('ydke://'))
        return _0x23db27 && errorE('YDKe\x20codes\x20must\x20start\x20with\x20ydke://'),
            ![];
    var _0x5bf753 = _0x44e2f3['slice']('ydke://'['length'])['split']('!');
    if (_0x5bf753['length'] < 0x3)
        return errorE('Invalid\x20YDKe\x20code'),
            ![];
    return !![];
}
function base64ToPasscodes(_0x37d858) {
    var _0x23a86c = atob(_0x37d858)
        , _0x32925b = new Uint8Array(_0x23a86c['length']);
    for (var _0x25995a = 0x0; _0x25995a < _0x23a86c['length']; _0x25995a++) {
        _0x32925b[_0x25995a] = _0x23a86c['charCodeAt'](_0x25995a);
    }
    var _0x590f85 = new Uint32Array(_0x32925b['buffer'])
        , _0x3b4558 = [];
    for (var _0x25995a = 0x0; _0x25995a < _0x590f85['length']; _0x25995a++) {
        _0x3b4558['push'](_0x590f85[_0x25995a]);
    }
    return _0x3b4558;
}
function exportDeckXML() {
    var _0x441726 = deck['data']
        , _0x4a85f9 = '<?xml\x20version=\x221.0\x22\x20encoding=\x22utf-8\x22\x20?>\x0a<deck\x20name=\x22' + escapeHTML(_0x441726) + '\x22>\x0a\x20<main>\x0a';
    for (var _0x365e78 = 0x0; _0x365e78 < deck_filled_arr['length']; _0x365e78++) {
        _0x4a85f9 += '\x20\x20<card\x20id=\x22' + deck_filled_arr[_0x365e78]['data']('id') + '\x22\x20passcode=\x22' + deck_filled_arr[_0x365e78]['data']('serial_number') + '\x22>' + escapeHTML(deck_filled_arr[_0x365e78]['data']('name')) + '</card>\x0a';
    }
    _0x4a85f9 += '\x20</main>\x0a\x20<side>\x0a';
    for (_0x365e78 = 0x0; _0x365e78 < side_filled_arr['length']; _0x365e78++) {
        _0x4a85f9 += '\x20\x20<card\x20id=\x22' + side_filled_arr[_0x365e78]['data']('id') + '\x22\x20passcode=\x22' + side_filled_arr[_0x365e78]['data']('serial_number') + '\x22>' + escapeHTML(side_filled_arr[_0x365e78]['data']('name')) + '</card>\x0a';
    }
    _0x4a85f9 += '\x20</side>\x0a\x20<extra>\x0a';
    for (_0x365e78 = 0x0; _0x365e78 < extra_filled_arr['length']; _0x365e78++) {
        _0x4a85f9 += '\x20\x20<card\x20id=\x22' + extra_filled_arr[_0x365e78]['data']('id') + '\x22\x20passcode=\x22' + extra_filled_arr[_0x365e78]['data']('serial_number') + '\x22>' + escapeHTML(extra_filled_arr[_0x365e78]['data']('name')) + '</card>\x0a';
    }
    _0x4a85f9 += '\x20</extra>\x0a</deck>',
        _0x441726 = replaceSpecialCharacters(_0x441726),
        download(_0x4a85f9, _0x441726 + '.xml', 'text/plain');
}
function replaceSpecialCharacters(_0x594223) {
    if (_0x594223 == null)
        return 'Untitled';
    return _0x594223 = _0x594223['replace'](/"/g, ''),
        _0x594223 = _0x594223['replace'](/\\/g, ''),
        _0x594223 = _0x594223['replace'](/\//g, ''),
        _0x594223 = _0x594223['replace'](/\?/g, ''),
        _0x594223 = _0x594223['replace'](/:/g, ''),
        _0x594223 = _0x594223['replace'](/</g, ''),
        _0x594223 = _0x594223['replace'](/>/g, ''),
        _0x594223 = _0x594223['replace'](/\|/g, ''),
        _0x594223 = _0x594223['replace'](/\./g, ''),
        _0x594223;
}
function download(_0x131994, _0x56177f, _0x18f45c) {
    var _0x19a2f8 = new Blob([_0x131994], {
        'type': _0x18f45c
    });
    if (window['navigator']['msSaveOrOpenBlob']) {
        window['navigator']['msSaveOrOpenBlob'](_0x19a2f8, _0x56177f);
        return;
    }
    var _0x530d80 = document['createElement']('a')
        , _0x3cd099 = URL['createObjectURL'](_0x19a2f8);
    _0x530d80['href'] = _0x3cd099,
        _0x530d80['download'] = _0x56177f,
        document['body']['appendChild'](_0x530d80),
        _0x530d80['click'](),
        setTimeout(function () {
            document['body']['removeChild'](_0x530d80),
                window['URL']['revokeObjectURL'](_0x3cd099);
        }, 0x0);
}
function downloadZip(_0x7d24f, _0x272c29) {
    var _0x4bf030 = atob(_0x7d24f)
        , _0x31692e = new Uint8Array(_0x4bf030['length']);
    for (var _0x5ee17e = 0x0; _0x5ee17e < _0x4bf030['length']; _0x5ee17e++) {
        _0x31692e[_0x5ee17e] = _0x4bf030['charCodeAt'](_0x5ee17e);
    }
    download(_0x31692e, _0x272c29);
}
function array(_0x1f0a43) {
    if (_0x1f0a43 instanceof Array)
        return _0x1f0a43;
    return [];
}
function asArray(_0x2f1f98) {
    if (_0x2f1f98 instanceof Array)
        return _0x2f1f98;
    if (_0x2f1f98 == undefined)
        return [];
    return [_0x2f1f98];
}
function Str(_0x54c186) {
    return str(_0x54c186);
}
function str(_0x44f6d5) {
    if (!_0x44f6d5)
        return '';
    return _0x44f6d5;
}
function quote(_0x4d9334) {
    return '\x22' + _0x4d9334 + '\x22';
}
function updateActive(_0x22cbf0) {
    active = _0x22cbf0;
}
function muteE() {
    var _0x1c9b82 = 0.35;
    $('#cross')['is'](':visible') ? ($('#cross')['hide'](),
        window['localStorage']['setItem']('sound', 'on')) : (_0x1c9b82 = 0x0,
            $('#cross')['show'](),
            window['localStorage']['setItem']('sound', 'off')),
        audio_arr['forEach'](function (_0x31f525, _0x33679f) {
            _0x31f525['volume'] = _0x1c9b82;
        });
}
function addClass(_0x490513, _0x27656b) {
    var _0x2fa9dd = _0x490513['className']['split']('\x20');
    _0x2fa9dd['indexOf'](_0x27656b) == -0x1 && (_0x490513['className'] += '\x20' + _0x27656b);
}
function removeClass(_0x561b32, _0x379ea2) {
    var _0xc8b78c = _0x561b32['className']['split']('\x20');
    _0xc8b78c['indexOf'](_0x379ea2) >= 0x0 && _0xc8b78c['splice'](_0xc8b78c['indexOf'](_0x379ea2), 0x1),
        _0x561b32['className'] = _0xc8b78c['join']('\x20');
}
function determineChatX(_0x240ca1) {
    var _0x26131a = ceil(_0x240ca1['css']('left'))
        , _0x1f0518 = ceil(_0x240ca1['css']('top'));
    (_0x26131a < 0x0 || _0x26131a > 0x400) && (_0x26131a = 0x3);
    (_0x1f0518 < 0x0 || _0x1f0518 > 0x280 - ceil(_0x240ca1['css']('height'))) && _0x240ca1['css']('top', 0x3);
    var _0x218a62 = [0x3, 0xce, 0x199, 0x264, 0x32f];
    if (_0x218a62['indexOf'](_0x26131a) < 0x0)
        return;
    var _0x1875b1 = [$('#online_users'), $('#calls'), $('#public_chat'), $('#private_chat'), $('#watch_chat'), $('#duel_log')];
    _0x21604a: for (var _0x59ce4f = _0x218a62['length'] - 0x1; _0x59ce4f >= 0x0; _0x59ce4f--) {
        for (var _0x36dc7f = _0x1875b1['length'] - 0x1; _0x36dc7f >= 0x0; _0x36dc7f--) {
            if (_0x1875b1[_0x36dc7f]['is'](':visible') && ceil(_0x1875b1[_0x36dc7f]['css']('left')) == _0x218a62[_0x59ce4f])
                continue _0x21604a;
        }
        _0x26131a = _0x218a62[_0x59ce4f];
    }
    _0x240ca1['css']('left', _0x26131a),
        !mobile && setTimeout(function () {
            $('html')['scrollTop'](0x0),
                $('html')['scrollLeft'](0x0);
        }, 0x5);
}
function insertAt0(_0x298de7, _0x2260cc, _0x2f0bf5) {
    _0x2f0bf5['hasClass']('scrollpane') && _0x2f0bf5['find']('.os-content')['length'] > 0x0 && (_0x2f0bf5 = _0x2f0bf5['find']('.os-content'),
        _0x2f0bf5['find']('>\x20.os-resize-observer-host')['length'] > 0x0 && _0x298de7++,
        _0x2f0bf5['find']('>\x20.os-scrollbar-corner')['length'] > 0x0 && _0x298de7++);
    if (_0x298de7 == 0x0) {
        _0x2f0bf5['prepend'](_0x2260cc);
        return;
    }
    var _0xc3e912 = _0x2f0bf5['children']();
    _0xc3e912['length'] == 0x0 || _0x298de7 >= _0xc3e912['length'] ? _0x2f0bf5['append'](_0x2260cc) : $(_0x2260cc)['insertBefore'](_0xc3e912['eq'](_0x298de7));
}
function insertAt(_0x364a01, _0x4f054f, _0x9be862) {
    _0x9be862['hasClass']('scrollpane') && _0x9be862['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0 && (_0x9be862 = _0x9be862['find']('*[data-overlayscrollbars-viewport]:first'));
    if (_0x364a01 == 0x0) {
        _0x9be862['prepend'](_0x4f054f);
        return;
    }
    var _0x320756 = _0x9be862['children']();
    _0x320756['length'] == 0x0 || _0x364a01 >= _0x320756['length'] ? _0x9be862['append'](_0x4f054f) : $(_0x4f054f)['insertBefore'](_0x320756['eq'](_0x364a01));
}
function addDragging0(_0x162e8d, _0x1e4d64, _0x9fa578, _0x148e8a) {
    !_0x1e4d64 && (_0x1e4d64 = _0x162e8d),
        _0x162e8d['mousedown'](function _0x3c6d44(_0x3b3bf7) {
            _0x3b3bf7['preventDefault'](),
                updateMouse(_0x3b3bf7);
            _0x9fa578 && _0x9fa578();
            var _0x3e9821 = mouseXScaled - parseInt(_0x1e4d64['css']('left'))
                , _0x1fe13 = mouseYScaled - parseInt(_0x1e4d64['css']('top'));
            $('html')['mousemove'](function (_0x4b6007) {
                updateMouse(_0x4b6007),
                    TweenMax['to'](_0x1e4d64, 0x0, {
                        'left': mouseXScaled - _0x3e9821,
                        'top': mouseYScaled - _0x1fe13
                    });
            }),
                $('html')['mouseup'](function (_0x109d9f) {
                    $('html')['off']('mousemove'),
                        $('html')['off']('mouseup'),
                        _0x148e8a && _0x148e8a();
                });
        });
}
function addDragging(_0x81b169, _0x7bf51c, _0x5c78b1, _0x18a013, _0x54a5b2) {
    if (mobile) {
        addDraggingMobile(_0x81b169, _0x7bf51c, _0x5c78b1, _0x18a013, _0x54a5b2);
        return;
    }
    _0x81b169['draggable']({
        'scroll': ![],
        'cancel': _0x5c78b1,
        'start': function (_0x51bf9b, _0xa181f6) {
            _0x18a013 && _0x18a013(_0x51bf9b, $(_0xa181f6)),
                updateMouse(_0x51bf9b),
                dragXOffset = mouseXScaled - parseInt($(this)['css']('left')),
                dragYOffset = mouseYScaled - parseInt($(this)['css']('top'));
        },
        'drag': function (_0x1c8000, _0x1c4935) {
            !jello && (updateMouse(_0x1c8000),
                _0x1c4935['position'] = {
                    'left': mouseXScaled - dragXOffset,
                    'top': mouseYScaled - dragYOffset
                });
        },
        'stop': function (_0x4b7d11, _0x136c62) {
            _0x54a5b2 && _0x54a5b2(_0x4b7d11, $(_0x136c62));
        }
    });
}
function addDraggingMobile(_0x12c34b, _0x3294e7, _0x56db8e, _0x2ef38d, _0x51cf3a) {
    _0x12c34b['draggable']({
        'scroll': ![],
        'handle': _0x3294e7,
        'start': function (_0x43747e, _0x5d9935) {
            _0x2ef38d && _0x2ef38d(_0x43747e, $(_0x5d9935)),
                updateMouse(_0x43747e),
                dragXOffset = mouseXScaled - parseInt($(this)['css']('left')),
                dragYOffset = mouseYScaled - parseInt($(this)['css']('top'));
        },
        'drag': function (_0x249740, _0x3cc876) {
            !jello && (updateMouse(_0x249740),
                _0x3cc876['position'] = {
                    'left': mouseXScaled - dragXOffset,
                    'top': mouseYScaled - dragYOffset
                });
        },
        'stop': function (_0x19fb3d, _0x3f7ff4) {
            _0x51cf3a && _0x51cf3a(_0x19fb3d, $(_0x3f7ff4));
        }
    });
}
function appendChat(_0xae4529) {
    var _0x2f5f4b = window['getSelection']();
    if (_0x2f5f4b['toString']() != '')
        return;
    var _0x4141d3 = _0xae4529['find']('.scrollpane:visible')['scrollTop']()
        , _0x42c401 = $(':focus');
    $('#chats')['append'](_0xae4529),
        _0x42c401['focus'](),
        _0xae4529['find']('.scrollpane:visible')['scrollTop'](_0x4141d3);
}
function setupInput(_0x4fd632, _0x45f1ed) { }
function clearInput(_0x5b0d87) {
    $(this)['off']('click\x20input', clearInput),
        $(this)['val'](''),
        $(this)['css']('color', 'black');
}
function maximizePreview() {
    parseInt(preview_txt['css']('height')) == 0x98 && (preview_txt['scrollHeight']() >= 0x9f && ($('#watchers')['hide'](),
        $('#watchers_btn')['hide'](),
        $('#log_btn')['hide'](),
        preview_txt['css']('height', 0xe3)));
}
function enterHandler(_0x48b1d0) {
    switch (_0x48b1d0['which']) {
        case 0x11:
        case 0x5b:
        case 0xe0:
            controlDown = !![],
                $('html')['keyup'](onKeyUp);
            break;
        case 0x41:
            controlDown && setTimeout(function () {
                (controlFocus[0x0] instanceof HTMLSpanElement || controlFocus[0x0] instanceof HTMLDivElement || controlFocus[0x0] instanceof HTMLFontElement) && (($(':focus')['length'] == 0x0 || $(':focus')['attr']('tabindex') == '0') && (clearSelection(),
                    selectText(controlFocus[0x0])));
            }, 0x5);
            break;
        case 0x25:
        case 0x26:
        case 0x27:
        case 0x28:
            arrowKeyE(_0x48b1d0);
            break;
        case 0x21:
        case 0x22:
            _0x48b1d0['preventDefault'](),
                $('html')['trigger']({
                    'type': 'keydown',
                    'which': _0x48b1d0['which'] == 0x21 ? 0x26 : 0x28
                });
            break;
        case 0xd:
            if (!$(':focus')[0x0]) {
                $('#msg')['is'](':visible') && msgOK();
                $('#link')['is'](':visible') && msgOK();
                $('#input')['is'](':visible') && inputOK();
                $('#confirm')['is'](':visible') && confirmYes();
                $('#confirm2')['is'](':visible') && confirmYes();
                $('#combo')['is'](':visible') && comboOK();
                $('#recaptcha_box')['is'](':visible') && cancelCallback();
                return;
            }
            switch (document['activeElement']) {
                case $('#combo\x20.combo_cb')[0x0]:
                    comboOK();
                    break;
                case $('#input\x20.input_txt')[0x0]:
                    inputOK();
                    break;
            }
            break;
    }
}
function arrowKeyE(_0x5561e4) {
    if (!active_scrollpane)
        return;
    if ($(':focus')['length'] == 0x0 || !$(':focus')['is'](':visible') || $(':focus')[0x0] == active_scrollpane[0x0] || inBounds(active_scrollpane) || active_scrollpane['is'](':visible') && onScreen(active_scrollpane[0x0])) {
        var _0x346e71 = _0x5561e4['which'] == 0x28 ? 0x1e : -0x1e;
        switch (_0x5561e4['which']) {
            case 0x25:
            case 0x27:
                _0x346e71 = _0x5561e4['which'] == 0x27 ? 0x1e : -0x1e;
                if (fancy_scrollbars) {
                    if (active_scrollpane['find']('.os-scrollbar-horizontal')['hasClass']('os-scrollbar-unusable'))
                        return;
                    tweenScrollbar(active_scrollpane, 0.08333, {
                        'scrollLeft': active_scrollpane['scrollLeft']() + _0x346e71,
                        'ease': Linear['easeNone']
                    });
                    return;
                }
                if (active_scrollpane['css']('overflow-x') != 'scroll')
                    return;
                tweenScrollbar(active_scrollpane, 0.08333, {
                    'scrollLeft': active_scrollpane[0x0]['scrollLeft'] + _0x346e71,
                    'ease': Linear['easeNone']
                });
                break;
            case 0x26:
            case 0x28:
                if (fancy_scrollbars) {
                    if (active_scrollpane['find']('.os-scrollbar-vertical')['hasClass']('os-scrollbar-unusable'))
                        return;
                } else {
                    if (active_scrollpane['css']('overflow-y') != 'scroll')
                        return;
                }
                tweenScrollbar(active_scrollpane, 0.08333, {
                    'scrollTop': active_scrollpane['scrollTop']() + _0x346e71,
                    'ease': Linear['easeNone']
                });
                break;
        }
    }
}
function loadMessage() {
    if (!showMes)
        return;
    var _0x4df0a7 = getWidth()
        , _0x1a3301 = getHeight()
        , _0x48eff6 = _0x1a3301 - getScaledHeight();
    if (_0x48eff6 > (mes1['height']() + 0xb) * 0x2)
        !mobile && (mes1['show'](),
            mes1['setHTML'](banner_ad),
            mes3['show'](),
            mes3['setHTML'](banner_ad));
    else {
        switch (currentLabel) {
            case 'front_page':
            case 'start':
                break;
            default:
                mes1['hide']();
                break;
        }
        mes3['hide']();
    }
    _0x48eff6 = _0x4df0a7 - getScaledWidth(),
        _0x48eff6 > (mes2['width']() + 0xb) * 0x2 && getHeight() >= mes2['height']() ? (mes2['show'](),
            mes2['setHTML'](skinny_ad)) : mes2['hide']();
}
function initDuelJS() { }
function initDB() {
    console['log']('initDB'),
        initUtils(),
        initDuelJS();
    localStorage['getItem']('sound') == 'off' && muteE();
    db_id = getDbId(),
        $('*')['each'](function (_0x40b997, _0x1e5203) {
            _0x1e5203 instanceof HTMLDivElement && (($(this)['css']('overflow')['indexOf']('scroll') >= 0x0 || $(this)['css']('overflow-y')['indexOf']('scroll') >= 0x0 || $(this)['css']('overflow-x')['indexOf']('scroll') >= 0x0) && ($(this)['addClass']('scrollpane'),
                $(this)['mouseenter'](function () {
                    active_scrollpane = $(this);
                })));
        });
    window['location']['toString']()['indexOf']('duelingbook.com') < 0x0 && $('.vm-placement')['detach']();
    $('.list')['click'](cellClickE),
        $('textarea')['on']('input\x20blur', function () {
            $(this)['text']($(this)['val']());
        }),
        $('.textarea')['addClass']('selectable'),
        $('input[type=radio]')['click'](function () {
            prevFocus && prevFocus['focus']();
        }),
        $('#content')['show'](),
        $('#content')[0x0]['style']['zoom'] = 0x1;
    mobile && $('#content')['css']('overflow', 'hidden');
    !SAFARI && $('#greenlines')['show']();
    mobile && (jello = !![]);
    (mobile || EDGE) && (fancy_scrollbars = ![]);
    if (CHROME && !mobile) { }
    GET('scrollbars') == 'false' && (fancy_scrollbars = ![]);
    GET('scrollbars') == 'true' && (fancy_scrollbars = !![]);
    var _0x399780 = new Date()['getTime']();
    addScrollBars();
    var _0x221a55 = new Date()['getTime']();
    console['log']('millis\x20=\x20' + (_0x221a55 - _0x399780)),
        document['body']['style']['zoom'] = 0x1,
        window['onresize'] = resizeE,
        window['onscroll'] = resizeE,
        window['onorientationchange'] = orientationE;
    if (SAFARI) { }
    (alignLeft || alignRight) && (zooming = ![]);
    !zooming && $(window)['off']('smartresize');
    resizeE(),
        orientationE(),
        $('body')['css']('overflow-y', 'scroll'),
        $('html')['scrollTop'](0x0),
        $('body')['css']('overflow-y', 'hidden'),
        $('html')['keydown'](enterHandler),
        $('html')['on']('input', function (_0x1ceece) {
            if ($(_0x1ceece['target'])['data']('regex')) {
                _0x1ceece['target']['value'] = _0x1ceece['target']['value']['replace']($(_0x1ceece['target'])['data']('regex'), '');
                return;
            }
        }),
        $('html')['mousedown'](function (_0xc4be2a) {
            controlFocus = $(_0xc4be2a['target']);
            (controlFocus['prop']('tagName') == 'B' || controlFocus['prop']('nodeName') == 'B') && (controlFocus = controlFocus['parents']('font,\x20span,\x20div')['eq'](0x0));
            if (_0xc4be2a['which'] == 0x3 && _0xc4be2a['shiftKey'])
                return _0xc4be2a['preventDefault'](),
                    ![];
        });
    jello && jelloE();
    var _0x1baf1b = new Date()['getTime']();
    changeComponents();
    var _0x232bd1 = new Date()['getTime']();
    console['log']('millis\x20=\x20' + (_0x232bd1 - _0x1baf1b)),
        hideDisplayBoxes(),
        initTouchEvents(),
        TweenMax['ticker']['useRAF'](![]);
    mobile && SAFARI && (TweenMax['ticker']['fps'](0xa),
        username == 'n****r' && alert('yeet'));
    TweenMax['lagSmoothing'](0x0);
    (EDGE || IE) && ($('#dark')['css']('opacity', '0.5'),
        ABOUT_ZERO = 2.5);
    SAFARI && ($('body')['addClass']('safari'),
        ABOUT_ZERO = 0x0);
    CHROME && ($('body')['addClass']('chrome'),
        ABOUT_ZERO = 0.1,
        ABOUT_ZERO = 2.5);
    FIREFOX && $('body')['addClass']('firefox');
    GET('flat') == 'true' && (flat = !![],
        $('body')['addClass']('flat'));
    $('#black')['hide'](),
        streaming = GET('censoring') == 'true';
    if (alignRight)
        mes2['detach']();
    else
        alignLeft && mes4['detach']();
    GET('still') != 'true' && adjustTimer['start'](),
        GET('usecardimages') == 'true' && (usecardimages = !![]),
        FP1 = getFP1(),
        FP2 = getFP2(),
        FP3 = getFP3(),
        FP4 = getFP4(),
        console['log'](FP1),
        console['log'](FP2),
        console['log'](FP3),
        console['log'](FP4),
        document['cookie'] = '_gat=2;expires=Thu,\x2001\x20Jan\x202022\x2000:00:00\x20GMT;path=/;domain=.duelingbook.com',
        document['cookie'] = '_gat=;expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT;path=/;domain=.duelingbook.com';
}
function getFP1() {
    var _0x2f308d = document['createElement']('canvas')
        , _0x4d83bd = _0x2f308d['getContext']('2d');
    return _0x4d83bd['fillStyle'] = '#f00',
        _0x4d83bd['fillRect'](0x0, 0x0, _0x2f308d['width'], _0x2f308d['height']),
        murmurhash3_32_gc(_0x2f308d['toDataURL'](), 0x1f);
}
function getFP2() {
    var _0x31a5ee = document['createElement']('canvas')
        , _0x32231a = _0x31a5ee['getContext']('2d')
        , _0x200633 = 'i9asdm..$#po((^@KbXrww!~cz';
    return _0x32231a['textBaseline'] = 'top',
        _0x32231a['font'] = '16px\x20\x27Arial\x27',
        _0x32231a['textBaseline'] = 'alphabetic',
        _0x32231a['rotate'](0.05),
        _0x32231a['fillStyle'] = '#f60',
        _0x32231a['fillRect'](0x7d, 0x1, 0x3e, 0x14),
        _0x32231a['fillStyle'] = '#069',
        _0x32231a['fillText'](_0x200633, 0x2, 0xf),
        _0x32231a['fillStyle'] = 'rgba(102,\x20200,\x200,\x200.7)',
        _0x32231a['fillText'](_0x200633, 0x4, 0x11),
        _0x32231a['shadowBlur'] = 0xa,
        _0x32231a['shadowColor'] = 'blue',
        _0x32231a['fillRect'](-0x14, 0xa, 0xea, 0x5),
        murmurhash3_32_gc(_0x31a5ee['toDataURL'](), 0x1f);
}
function getFP3() {
    return new Fingerprint({
        'canvas': ![]
    })['get']();
}
function getFP4() {
    return new Fingerprint({
        'canvas': !![]
    })['get']();
}
var Fingerprint = function (_0x2c01fd) {
    var _0x31205d, _0x5435ae;
    _0x31205d = Array['prototype']['forEach'],
        _0x5435ae = Array['prototype']['map'],
        this['each'] = function (_0x32719d, _0x5394c6, _0x15d6a2) {
            if (_0x32719d === null)
                return;
            if (_0x31205d && _0x32719d['forEach'] === _0x31205d)
                _0x32719d['forEach'](_0x5394c6, _0x15d6a2);
            else {
                if (_0x32719d['length'] === +_0x32719d['length'])
                    for (var _0x6dc46e = 0x0, _0x10d75c = _0x32719d['length']; _0x6dc46e < _0x10d75c; _0x6dc46e++) {
                        if (_0x5394c6['call'](_0x15d6a2, _0x32719d[_0x6dc46e], _0x6dc46e, _0x32719d) === {})
                            return;
                    }
                else
                    for (var _0x3f9949 in _0x32719d) {
                        if (_0x32719d['hasOwnProperty'](_0x3f9949)) {
                            if (_0x5394c6['call'](_0x15d6a2, _0x32719d[_0x3f9949], _0x3f9949, _0x32719d) === {})
                                return;
                        }
                    }
            }
        }
        ,
        this['map'] = function (_0x1ee1a4, _0x333c90, _0x46a5fc) {
            var _0x4c1803 = [];
            if (_0x1ee1a4 == null)
                return _0x4c1803;
            if (_0x5435ae && _0x1ee1a4['map'] === _0x5435ae)
                return _0x1ee1a4['map'](_0x333c90, _0x46a5fc);
            return this['each'](_0x1ee1a4, function (_0x4f1933, _0xdc0cba, _0x519aa6) {
                _0x4c1803[_0x4c1803['length']] = _0x333c90['call'](_0x46a5fc, _0x4f1933, _0xdc0cba, _0x519aa6);
            }),
                _0x4c1803;
        }
        ;
    if (typeof _0x2c01fd == 'object')
        this['hasher'] = _0x2c01fd['hasher'],
            this['canvas'] = _0x2c01fd['canvas'];
    else
        typeof _0x2c01fd == 'function' && (this['hasher'] = _0x2c01fd);
};
Fingerprint['prototype'] = {
    'get': function () {
        var _0x4a0d7f = [];
        return _0x4a0d7f['push'](navigator['userAgent']),
            _0x4a0d7f['push'](navigator['language']),
            _0x4a0d7f['push'](screen['colorDepth']),
            _0x4a0d7f['push'](this['getScreenResolution']()['join']('x')),
            _0x4a0d7f['push'](new Date()['getTimezoneOffset']()),
            _0x4a0d7f['push'](this['hasSessionStorage']()),
            _0x4a0d7f['push'](this['hasLocalStorage']()),
            _0x4a0d7f['push'](this['hasIndexDb']()),
            document['body'] ? _0x4a0d7f['push'](typeof document['body']['addBehavior']) : _0x4a0d7f['push'](typeof undefined),
            _0x4a0d7f['push'](typeof window['openDatabase']),
            _0x4a0d7f['push'](navigator['cpuClass']),
            _0x4a0d7f['push'](navigator['platform']),
            _0x4a0d7f['push'](navigator['doNotTrack']),
            _0x4a0d7f['push'](this['getPluginsString']()),
            this['canvas'] && this['isCanvasSupported']() && _0x4a0d7f['push'](this['getCanvasFingerprint']()),
            this['hasher'] ? this['hasher'](_0x4a0d7f['join']('###'), 0x1f) : murmurhash3_32_gc(_0x4a0d7f['join']('###'), 0x1f);
    },
    'hasLocalStorage': function () {
        try {
            return !!window['localStorage'];
        } catch (_0x257a6c) {
            return !![];
        }
    },
    'hasSessionStorage': function () {
        try {
            return !!window['sessionStorage'];
        } catch (_0x18a8a2) {
            return !![];
        }
    },
    'hasIndexDb': function () {
        try {
            return !!window['indexedDB'];
        } catch (_0x3d4bd4) {
            return !![];
        }
    },
    'isCanvasSupported': function () {
        var _0x472cd1 = document['createElement']('canvas');
        return !!(_0x472cd1['getContext'] && _0x472cd1['getContext']('2d'));
    },
    'isIE': function () {
        if (navigator['appName'] === 'Microsoft\x20Internet\x20Explorer')
            return !![];
        else {
            if (navigator['appName'] === 'Netscape' && /Trident/['test'](navigator['userAgent']))
                return !![];
        }
        return ![];
    },
    'getPluginsString': function () {
        return this['isIE']() ? this['getIEPluginsString']() : this['getRegularPluginsString']();
    },
    'getRegularPluginsString': function () {
        return this['map'](navigator['plugins'], function (_0x3b49dd) {
            var _0x7d42c8 = this['map'](_0x3b49dd, function (_0x6fff15) {
                return [_0x6fff15['type'], _0x6fff15['suffixes']]['join']('~');
            })['join'](',');
            return [_0x3b49dd['name'], _0x3b49dd['description'], _0x7d42c8]['join']('::');
        }, this)['join'](';');
    },
    'getIEPluginsString': function () {
        if (window['ActiveXObject']) {
            var _0x3d621c = ['ShockwaveFlash.ShockwaveFlash', 'AcroPDF.PDF', 'PDF.PdfCtrl', 'QuickTime.QuickTime', 'rmocx.RealPlayer\x20G2\x20Control', 'rmocx.RealPlayer\x20G2\x20Control.1', 'RealPlayer.RealPlayer(tm)\x20ActiveX\x20Control\x20(32-bit)', 'RealVideo.RealVideo(tm)\x20ActiveX\x20Control\x20(32-bit)', 'RealPlayer', 'SWCtl.SWCtl', 'WMPlayer.OCX', 'AgControl.AgControl', 'Skype.Detection'];
            return this['map'](_0x3d621c, function (_0x27dcad) {
                try {
                    return new ActiveXObject(_0x27dcad),
                        _0x27dcad;
                } catch (_0x54ed60) {
                    return null;
                }
            })['join'](';');
        } else
            return '';
    },
    'getScreenResolution': function () {
        return screen['height'] > screen['width'] ? [screen['height'], screen['width']] : [screen['width'], screen['height']];
    },
    'getCanvasFingerprint': function () {
        var _0x4e0457 = document['createElement']('canvas')
            , _0x33ae38 = _0x4e0457['getContext']('2d')
            , _0x519147 = 'CANVAS_FINGERPRINT';
        return _0x33ae38['textBaseline'] = 'top',
            _0x33ae38['font'] = '14px\x20\x27Arial\x27',
            _0x33ae38['textBaseline'] = 'alphabetic',
            _0x33ae38['fillStyle'] = '#f60',
            _0x33ae38['fillRect'](0x7d, 0x1, 0x3e, 0x14),
            _0x33ae38['fillStyle'] = '#069',
            _0x33ae38['fillText'](_0x519147, 0x2, 0xf),
            _0x33ae38['fillStyle'] = 'rgba(102,\x20204,\x200,\x200.7)',
            _0x33ae38['fillText'](_0x519147, 0x4, 0x11),
            _0x4e0457['toDataURL']();
    }
};
function murmurhash3_32_gc(_0x4c2da5, _0x3ca246) {
    var _0x389d69, _0x3da683, _0x32216e, _0x2728e9, _0x487a97, _0x1d0eab, _0x3bc1f0, _0x2d4377;
    _0x389d69 = _0x4c2da5['length'] & 0x3,
        _0x3da683 = _0x4c2da5['length'] - _0x389d69,
        _0x32216e = _0x3ca246,
        _0x487a97 = 0xcc9e2d51,
        _0x1d0eab = 0x1b873593,
        _0x2d4377 = 0x0;
    while (_0x2d4377 < _0x3da683) {
        _0x3bc1f0 = _0x4c2da5['charCodeAt'](_0x2d4377) & 0xff | (_0x4c2da5['charCodeAt'](++_0x2d4377) & 0xff) << 0x8 | (_0x4c2da5['charCodeAt'](++_0x2d4377) & 0xff) << 0x10 | (_0x4c2da5['charCodeAt'](++_0x2d4377) & 0xff) << 0x18,
            ++_0x2d4377,
            _0x3bc1f0 = (_0x3bc1f0 & 0xffff) * _0x487a97 + (((_0x3bc1f0 >>> 0x10) * _0x487a97 & 0xffff) << 0x10) & 0xffffffff,
            _0x3bc1f0 = _0x3bc1f0 << 0xf | _0x3bc1f0 >>> 0x11,
            _0x3bc1f0 = (_0x3bc1f0 & 0xffff) * _0x1d0eab + (((_0x3bc1f0 >>> 0x10) * _0x1d0eab & 0xffff) << 0x10) & 0xffffffff,
            _0x32216e ^= _0x3bc1f0,
            _0x32216e = _0x32216e << 0xd | _0x32216e >>> 0x13,
            _0x2728e9 = (_0x32216e & 0xffff) * 0x5 + (((_0x32216e >>> 0x10) * 0x5 & 0xffff) << 0x10) & 0xffffffff,
            _0x32216e = (_0x2728e9 & 0xffff) + 0x6b64 + (((_0x2728e9 >>> 0x10) + 0xe654 & 0xffff) << 0x10);
    }
    _0x3bc1f0 = 0x0;
    switch (_0x389d69) {
        case 0x3:
            _0x3bc1f0 ^= (_0x4c2da5['charCodeAt'](_0x2d4377 + 0x2) & 0xff) << 0x10;
        case 0x2:
            _0x3bc1f0 ^= (_0x4c2da5['charCodeAt'](_0x2d4377 + 0x1) & 0xff) << 0x8;
        case 0x1:
            _0x3bc1f0 ^= _0x4c2da5['charCodeAt'](_0x2d4377) & 0xff,
                _0x3bc1f0 = (_0x3bc1f0 & 0xffff) * _0x487a97 + (((_0x3bc1f0 >>> 0x10) * _0x487a97 & 0xffff) << 0x10) & 0xffffffff,
                _0x3bc1f0 = _0x3bc1f0 << 0xf | _0x3bc1f0 >>> 0x11,
                _0x3bc1f0 = (_0x3bc1f0 & 0xffff) * _0x1d0eab + (((_0x3bc1f0 >>> 0x10) * _0x1d0eab & 0xffff) << 0x10) & 0xffffffff,
                _0x32216e ^= _0x3bc1f0;
    }
    return _0x32216e ^= _0x4c2da5['length'],
        _0x32216e ^= _0x32216e >>> 0x10,
        _0x32216e = (_0x32216e & 0xffff) * 0x85ebca6b + (((_0x32216e >>> 0x10) * 0x85ebca6b & 0xffff) << 0x10) & 0xffffffff,
        _0x32216e ^= _0x32216e >>> 0xd,
        _0x32216e = (_0x32216e & 0xffff) * 0xc2b2ae35 + (((_0x32216e >>> 0x10) * 0xc2b2ae35 & 0xffff) << 0x10) & 0xffffffff,
        _0x32216e ^= _0x32216e >>> 0x10,
        _0x32216e >>> 0x0;
}
function javaHashCode(_0x5ad9b2, _0x427756) {
    var _0x42fec9 = 0x0;
    if (_0x5ad9b2['length'] === 0x0)
        return _0x42fec9;
    for (var _0x5b8257 = 0x0; _0x5b8257 < _0x5ad9b2['length']; _0x5b8257++) {
        var _0xe1179b = _0x5ad9b2['charCodeAt'](_0x5b8257);
        _0x42fec9 = _0x427756 * ((_0x42fec9 << 0x5) - _0x42fec9) + _0xe1179b,
            _0x42fec9 = _0x42fec9 & _0x42fec9;
    }
    return _0x42fec9;
}
function checkLoggedIn() {
    var _0x4fdfa3 = new FormData();
    _0x4fdfa3['append']('db_id', db_id),
        _0x4fdfa3['append']('version', VERSION);
    var _0x567073 = new XMLHttpRequest();
    _0x567073['open']('POST', URL_START + 'logged-in.php', !![]),
        _0x567073['onreadystatechange'] = function () {
            _0x567073['readyState'] == 0x4 && _0x567073['status'] == 0xc8 && checkLoggedInResponse(_0x567073['responseText']);
        }
        ,
        _0x567073['send'](_0x4fdfa3);
}
function unsetWidthAndHeight(_0x5732d1) {
    _0x5732d1['css']('width', 'auto'),
        _0x5732d1['css']('height', 'auto');
}
function GET(_0x1698d0) {
    var _0x461a9a = window['location']['search']['substring'](0x1)
        , _0x312e25 = _0x461a9a['split']('&');
    for (var _0x220293 = 0x0; _0x220293 < _0x312e25['length']; _0x220293++) {
        var _0x12a5ad = _0x312e25[_0x220293]['split']('=');
        if (_0x12a5ad[0x0] == _0x1698d0)
            return _0x12a5ad[0x1];
    }
    return ![];
}
var clicked_obj = $('<div></div>')
    , clicked_millis = 0x0;
function initTouchEvents() {
    return;
    $('html')['on']('touchstart', function (_0x52e07b) {
        var _0x4ad555 = ![];
        $('html')['off']('touchend'),
            $('html')['on']('touchend', _0x5ba259),
            $('html')['off']('touchmove'),
            $('html')['on']('touchmove', function (_0x4d0f5d) {
                _0x4ad555 = !![];
            }),
            $(_0x52e07b['target'])['mouseover'](),
            $(_0x52e07b['target'])['mousedown']();
        function _0x5ba259(_0x428889) {
            $('#tooltips\x20>\x20*')['hide']();
            menu['is'](':visible') && !$(_0x428889['target'])['hasClass']('cardfront') && $(_0x428889['target'])['parents']('.cardfront')['length'] == 0x0 && !$(_0x428889['target'])['hasClass']('cardback') && $(_0x428889['target'])['parents']('.card')['length'] == 0x0 && $(_0x428889['target'])[0x0]['id'] != 'card_menu' && $(_0x428889['target'])['parents']('#card_menu')['length'] == 0x0 && $(_0x428889['target'])[0x0]['id'] != 'deck_hidden' && $(_0x428889['target'])[0x0]['id'] != 'extra_hidden' && removeCardMenu();
            action_list['is'](':visible') && $(_0x428889['target'])[0x0]['id'] != 'action_list' && $(_0x428889['target'])['parents']('#action_list')['length'] == 0x0 && hideActionList();
            if (_0x4ad555)
                return;
            switch ($(_0x428889['target'])[0x0]['tagName']) {
                case 'INPUT':
                case 'A':
                case 'SELECT':
                case 'TEXTAREA':
                    $(_0x428889['target'])['mouseleave']();
                    return;
                default:
                    _0x428889['preventDefault']();
                    break;
            }
            setTimeout(function () {
                Date['now']() - clicked_millis < 0x1f4 && $(_0x428889['target'])[0x0] == clicked_obj[0x0] ? $(_0x428889['target'])['dblclick']() : $(_0x428889['target'])['click'](),
                    clicked_obj = $(_0x428889['target']),
                    clicked_millis = Date['now']();
            }, 0x64);
        }
    });
}
function orientationE() {
    if (!mobile)
        return;
    var _0x4ec7a3 = 0x0;
    SAFARI ? _0x4ec7a3 = window['orientation'] : _0x4ec7a3 = ScreenOrientation['angle'],
        _0x4ec7a3 == 0x0 || _0x4ec7a3 == 0xb4 ? $('meta[name=viewport]')['attr']('content', 'width=1024') : $('meta[name=viewport]')['attr']('content', 'height=640');
}
function ioError(_0xddaa51) {
    errorE('IO\x20Error'),
        console['log'](_0xddaa51),
        console['log'](_0xddaa51['message']);
}
function getBrowser() {
    if (!!(navigator['userAgentData'] && JSON['stringify'](navigator['userAgentData']['brands'])['includes']('Microsoft\x20Edge')))
        return 'Edge';
    if (OPERA)
        return 'Opera';
    if (FIREFOX)
        return 'Firefox';
    if (CHROME)
        return 'Chrome';
    if (SAFARI)
        return 'Safari';
    if (IE)
        return 'Internet\x20Explorer';
    if (EDGE)
        return 'Edge';
    if (TOR)
        return 'Tor';
    if (BLINK)
        return 'Blink';
    return 'Unknown';
}
function getPlatform() {
    if (window['navigator']['platform']['indexOf']('Win') == 0x0)
        return 'PC';
    if (window['navigator']['platform']['indexOf']('Mac') == 0x0)
        return 'Mac';
    if (window['navigator']['platform']['indexOf']('Lin') == 0x0)
        return 'Linux';
    if (window['navigator']['platform']['indexOf']('And') == 0x0)
        return 'Android';
    return window['navigator']['platform'];
}
$(document)['unbind']('keydown')['bind']('keydown', function (_0x15b234) {
    if (_0x15b234['keyCode'] === 0x8) {
        var _0x359105 = !![]
            , _0x10f09f = ['text', 'password', 'file', 'search', 'email', 'number', 'date', 'color', 'datetime', 'datetime-local', 'month', 'range', 'search', 'tel', 'time', 'url', 'week']
            , _0x534c88 = $(_0x15b234['srcElement'] || _0x15b234['target'])
            , _0x4a634c = _0x534c88['prop']('readonly') || _0x534c88['prop']('disabled');
        if (!_0x4a634c) {
            if (_0x534c88[0x0]['isContentEditable'])
                _0x359105 = ![];
            else {
                if (_0x534c88['is']('input')) {
                    var _0x154e5b = _0x534c88['attr']('type');
                    _0x154e5b && (_0x154e5b = _0x154e5b['toLowerCase']()),
                        _0x10f09f['indexOf'](_0x154e5b) > -0x1 && (_0x359105 = ![]);
                } else
                    _0x534c88['is']('textarea') && (_0x359105 = ![]);
            }
        }
        if (_0x359105)
            return _0x15b234['preventDefault'](),
                ![];
    }
});
function ceil(_0x434c04) {
    return Math['ceil'](parseFloat(_0x434c04));
}
function tweenScrollbar0(_0x26f569, _0x1ff492, _0x3682f8) {
    var _0x10309d = {};
    _0x10309d['x'] = _0x26f569['scrollLeft'](),
        _0x10309d['y'] = _0x26f569['scrollTop']();
    var _0x5b2df9 = ~~_0x3682f8['scrollLeft'] != _0x26f569['scrollLeft']()
        , _0x15b496 = ~~_0x3682f8['scrollTop'] != _0x26f569['scrollTop']();
    TweenMax['to'](_0x10309d, _0x1ff492, {
        'x': ~~_0x3682f8['scrollLeft'],
        'y': ~~_0x3682f8['scrollTop'],
        'ease': Expo['easeInOut'],
        'onUpdate': function () {
            _0x5b2df9 && (fancy_scrollbars && _0x26f569['overlayScrollbars']() && _0x26f569['overlayScrollbars']()['scroll'] ? _0x26f569['overlayScrollbars']()['scroll']({
                'x': _0x10309d['x']
            }) : _0x26f569['scrollLeft'](_0x10309d['x'])),
                _0x15b496 && _0x26f569['scrollTop'](_0x10309d['y']);
        }
    }),
        TweenMax['to'](_0x26f569, _0x1ff492, _0x3682f8);
}
function tweenScrollbar(_0x50f7dc, _0x588bf4, _0x283334) {
    if (fancy_scrollbars) {
        TweenMax['to'](_0x50f7dc['data']('scrollpane')['elements']()['viewport'], _0x588bf4, _0x283334);
        return;
    }
    TweenMax['to'](active_scrollpane[0x0], _0x588bf4, _0x283334);
}
function tweenScrollbar(_0x353ebc, _0x3c060a, _0x3ce6fc) {
    TweenMax['to'](fancy_scrollbars ? _0x353ebc['data']('scrollpane')['elements']()['viewport'] : active_scrollpane[0x0], _0x3c060a, _0x3ce6fc);
}
function isTextSelected(_0x5c5fda) {
    if (typeof _0x5c5fda['selectionStart'] == 'number')
        return _0x5c5fda['selectionStart'] == 0x0 && _0x5c5fda['selectionEnd'] == _0x5c5fda['value']['length'];
    else {
        if (typeof document['selection'] != 'undefined')
            return _0x5c5fda['focus'](),
                document['selection']['createRange']()['text'] == _0x5c5fda['value'];
    }
}
function isOffensive(_0x5a428b) {
    if (!_0x5a428b)
        return ![];
    _0x5a428b = _0x5a428b['toLowerCase']();
    for (var _0x2a0eca = 0x0; _0x2a0eca < slur_arr['length']; _0x2a0eca++) {
        if (_0x5a428b['indexOf'](slur_arr[_0x2a0eca]) >= 0x0)
            return !![];
    }
    return ![];
}
function censor(_0x35b734) {
    if (!streaming)
        return _0x35b734;
    for (var _0x4852cc = 0x0; _0x4852cc < slur_arr['length']; _0x4852cc++) {
        if (_0x35b734['toLowerCase']()['indexOf'](slur_arr[_0x4852cc]) >= 0x0) {
            var _0x56a6b6 = _0x35b734['toLowerCase']()['indexOf'](slur_arr[_0x4852cc]);
            _0x35b734 = _0x35b734['substring'](0x0, _0x56a6b6) + '[censored]' + _0x35b734['substring'](_0x56a6b6 + slur_arr[_0x4852cc]['length'], _0x35b734['length']),
                _0x4852cc--;
        }
    }
    return _0x35b734;
}
function adjustScreen() {
    window['onscroll'] = null,
        resizeETimer['start']();
    var _0x40ea74 = $('html')['scrollLeft']()
        , _0x2f183e = $('html')['scrollTop']();
    $('html')['scrollLeft'](_0x40ea74 - 0x1),
        $('html')['scrollTop'](_0x2f183e - 0x1),
        $('html')['scrollLeft'](_0x40ea74),
        $('html')['scrollTop'](_0x2f183e);
    if (username == 'n****r') { }
}
function addLine3(_0x400c96) {
    if (!moderator)
        return;
    addLine(_0x400c96),
        console['log'](_0x400c96);
}
function toggleAds(_0x589af5) {
    loadMessage();
    var _0x59c847 = _0x589af5[0x0]['getBoundingClientRect']()
        , _0x3ce4fd = mes2[0x0]['getBoundingClientRect']()
        , _0x3c4762 = mes3[0x0]['getBoundingClientRect']();
    _0x59c847['left'] + _0x59c847['width'] >= _0x3ce4fd['left'] && $('#mes2')['hide'](),
        _0x59c847['left'] <= _0x3c4762['left'] + _0x3c4762['width'] && $('#mes4')['hide']();
}
function onScreen(_0x2330a5) {
    var _0x1e0a65 = $('#content')[0x0]['style']['zoom']
        , _0x5ae2d5 = _0x2330a5['getBoundingClientRect']();
    if (_0x5ae2d5['left'] >= 0x0 && _0x5ae2d5['top'] >= 0x0 && _0x5ae2d5['right'] * _0x1e0a65 <= window['innerWidth'] && _0x5ae2d5['bottom'] * _0x1e0a65 <= window['innerHeight'])
        return console['log']('IS\x20ON\x20SCREEN'),
            !![];
    return console['log']('IS\x20NOT\x20SCREEN'),
        ![];
}
function getChromeVersion() {
    var _0x53f700 = navigator['userAgent']['match'](/Chrom(e|ium)\/([0-9]+)\./);
    return _0x53f700 ? parseInt(_0x53f700[0x2], 0xa) : ![];
}
function FriendItem(_0x57016d) {
    var _0x4d6d27 = $('<div\x20class=\x22friend_item\x22></div>')
        , _0x1bc8e6 = new Avatar(_0x57016d)
        , _0x3ff84b = $('<span\x20class=\x22username_txt\x20bisque\x20selectable\x22></span>');
    return _0x3ff84b['text'](_0x57016d['username']),
        _0x4d6d27['append'](_0x1bc8e6),
        _0x4d6d27['append'](_0x3ff84b),
        _0x4d6d27;
}
function Avatar(_0x598ff3) {
    _0x598ff3['p'] && (_0x598ff3['pic'] = _0x598ff3['p']);
    _0x598ff3['u'] && (_0x598ff3['username'] = _0x598ff3['u']);
    var _0x50ed42 = $('<div\x20class=\x22avatar\x22></div>');
    _0x598ff3['pic'] && _0x50ed42['data']('pic', getAvatarStart(_0x598ff3['pic']));
    _0x50ed42['click'](function () {
        loadProfile(_0x598ff3['username']);
    });
    var _0x386b6d = $('<img\x20class=\x22avatar_frame\x22\x20src=\x22' + IMAGES_START + 'svg/avatar_red.svg\x22\x20/>');
    _0x598ff3['username'] == username && _0x386b6d['attr']('src', IMAGES_START + 'svg/avatar_teal.svg');
    var _0x212628 = $('<img\x20class=\x22image\x22\x20width=\x22256\x22\x20height=\x22256\x22\x20/>');
    _0x212628[0x0]['onload'] = function () {
        _0x765c8a(_0x212628[0x0]);
    }
        ;
    _0x598ff3['delay'] || !_0x598ff3['pic'] ? (_0x212628['attr']('src', IMAGES_START + 'loading.gif'),
        _0x50ed42['data']('started', ![])) : (_0x212628['attr']('src', getAvatarStart(_0x598ff3['pic'])),
            _0x50ed42['data']('started', !![]));
    _0x50ed42['append'](_0x386b6d),
        _0x50ed42['append'](_0x212628);
    if (_0x598ff3['nsfw'] && !always_show_nsfw) {
        _0x50ed42['data']('nsfw', !![]);
        var _0x4025a8 = $('<img\x20class=\x22nsfw\x22\x20src=\x22' + IMAGES_START + 'svg/avatar_nsfw.svg\x22\x20/>');
        _0x50ed42['append'](_0x4025a8);
    }
    _0x212628[0x0]['complete'] && _0x765c8a(_0x212628[0x0]);
    return _0x50ed42;
    function _0x765c8a(_0x8c2e1) {
        _0x8c2e1['style']['height'] = '83.25%',
            _0x8c2e1['style']['clipPath'] = 'unset',
            _0x8c2e1['naturalHeight'] > _0x8c2e1['naturalWidth'] && _0x8c2e1['src']['indexOf']('.gif') < 0x0 && (_0x8c2e1['style']['height'] = _0x8c2e1['naturalHeight'] / _0x8c2e1['naturalWidth'] * 0x100 / 0x100 * 83.25 + '%',
                _0x8c2e1['style']['clipPath'] = 'inset(0px\x200px\x20' + ((0x1 - _0x8c2e1['naturalWidth'] / _0x8c2e1['naturalHeight']) * 0x64 - 0.01) + '%\x200px\x20round\x205.85%)');
    }
}
function getTimeAgo(_0x265874) {
    var _0x299fb4 = 0x0;
    typeof _0x265874 == 'string' ? _0x299fb4 = new Date()['getTime']() - new Date(_0x265874)['getTime']() : _0x299fb4 = new Date()['getTime']() - _0x265874;
    var _0x3696b5 = '';
    if (_0x299fb4 < 0xea60) {
        var _0x5280f2 = Math['floor'](_0x299fb4 / 0x3e8);
        _0x5280f2 == 0x1 ? _0x3696b5 = _0x5280f2 + '\x20second\x20ago' : _0x5280f2 <= 0x0 ? _0x3696b5 = 'Just\x20now' : _0x3696b5 = _0x5280f2 + '\x20seconds\x20ago';
    } else {
        if (_0x299fb4 < 0x36ee80) {
            var _0x459081 = Math['floor'](_0x299fb4 / 0xea60);
            _0x459081 == 0x1 ? _0x3696b5 = _0x459081 + '\x20minute\x20ago' : _0x3696b5 = _0x459081 + '\x20minutes\x20ago';
        } else {
            if (_0x299fb4 < 0x5265c00) {
                var _0x5b198a = Math['floor'](_0x299fb4 / 0x36ee80);
                _0x5b198a == 0x1 ? _0x3696b5 = _0x5b198a + '\x20hour\x20ago' : _0x3696b5 = _0x5b198a + '\x20hours\x20ago';
            } else {
                if (_0x299fb4 < 0x240c8400) {
                    var _0x24d4b2 = Math['floor'](_0x299fb4 / 0x5265c00);
                    _0x24d4b2 == 0x1 ? _0x3696b5 += _0x24d4b2 + '\x20day\x20ago' : _0x3696b5 += _0x24d4b2 + '\x20days\x20ago';
                } else {
                    if (_0x299fb4 < 0x9a7ec800) {
                        var _0x5d2644 = Math['floor'](_0x299fb4 / 0x240c8400);
                        _0x5d2644 == 0x1 ? _0x3696b5 += _0x5d2644 + '\x20week\x20ago' : _0x3696b5 += _0x5d2644 + '\x20weeks\x20ago';
                    } else {
                        if (_0x299fb4 < 0x757b12c00) {
                            var _0x29b32c = Math['floor'](_0x299fb4 / 0x9a7ec800);
                            _0x29b32c == 0x1 ? _0x3696b5 += _0x29b32c + '\x20month\x20ago' : _0x3696b5 += _0x29b32c + '\x20months\x20ago';
                        } else {
                            var _0x8b5294 = Math['floor'](_0x299fb4 / 0x757b12c00);
                            _0x8b5294 == 0x1 ? _0x3696b5 += _0x8b5294 + '\x20year\x20ago' : _0x3696b5 += _0x8b5294 + '\x20years\x20ago';
                        }
                    }
                }
            }
        }
    }
    return _0x3696b5;
}
function loadProfile() { }
function watchDuelE() { }
function dropPlayerE() { }
function Bracket(_0x4602b0) {
    var _0x1d9040 = $('<div\x20class=\x22bracket\x20bracket' + _0x4602b0['id'] + '\x22></div>');
    _0x1d9040['data']('id', _0x4602b0['id']),
        _0x1d9040['data']('round', _0x4602b0['round']),
        _0x1d9040['contextmenu'](dropPlayerE);
    var _0x2d79db = $('<img\x20class=\x22bracket_lines\x22\x20src=\x22' + IMAGES_START + 'svg/bracket0.svg\x22\x20width=\x22260\x22\x20height=\x2261\x22\x20/>');
    _0x1d9040['append'](_0x2d79db);
    if (_0x4602b0['player1']['username']) {
        var _0x1c0561 = new FriendItem(_0x4602b0['player1']);
        _0x1c0561['addClass']('player' + _0x4602b0['player1_id']),
            _0x1c0561['addClass']('player1'),
            _0x4602b0['player1']['dropped'] && _0x1c0561['find']('.username_txt')['css']('text-decoration', 'line-through'),
            _0x1d9040['append'](_0x1c0561);
    }
    if (_0x4602b0['player2']['username']) {
        var _0x1c0561 = new FriendItem(_0x4602b0['player2']);
        _0x1c0561['addClass']('player' + _0x4602b0['player2_id']),
            _0x1c0561['addClass']('player2'),
            _0x1c0561['css']('top', 0x32),
            _0x4602b0['player2']['dropped'] && _0x1c0561['find']('.username_txt')['css']('text-decoration', 'line-through'),
            _0x1d9040['append'](_0x1c0561);
    }
    if (tourney_data['adjudicator'] || moderator >= 0x2) {
        var _0x4769f4 = $('<img\x20class=\x22checkmark\x20checkmark1\x22\x20src=\x22' + IMAGES_START + 'checkmark.webp\x22\x20alt=\x22Winner\x22\x20/>')
            , _0x471d20 = _0x4769f4['clone']()['removeClass']('checkmark1')['addClass']('checkmark2');
        _0x471d20['css']('top', 0x2b),
            _0x4769f4['mouseenter'](checkmarkE),
            _0x471d20['mouseenter'](checkmarkE),
            $(_0x1d9040)['mouseout'](function () {
                _0x4769f4['css']('opacity', 0x0),
                    _0x471d20['css']('opacity', 0x0),
                    _0x1d9040['find']('.winner,\x20.loser')['show']();
            }),
            _0x1d9040['append'](_0x4769f4),
            _0x1d9040['append'](_0x471d20);
    }
    var _0x57ad61 = $('<span\x20class=\x22match_id_txt\x20selectable\x22>' + _0x4602b0['id'] + '</span>');
    _0x1d9040['append'](_0x57ad61);
    var _0x3abd08 = $('<span\x20class=\x22watch_duel_btn\x22>Watch\x20Duel</span>');
    username ? _0x3abd08['click'](watchDuelE) : (_0x3abd08['text']('Duel\x20in\x20progress...'),
        _0x3abd08['css']('left', 0x6d));
    var _0x2819f9 = $('<span\x20class=\x22replay_btn\x20cyan\x22><a\x20href=\x22#\x22\x20target=\x22_blank\x22>Replay</a></span>');
    return _0x1d9040['append'](_0x3abd08),
        _0x1d9040['append'](_0x2819f9),
        _0x4602b0['duel'] && (_0x3abd08['data']('id', _0x4602b0['duel']),
            _0x2819f9['find']('a')['attr']('href', URL_START + 'replay?id=' + _0x4602b0['duel']),
            _0x2819f9['css']('display', 'block')),
        _0x4602b0['active'] && (_0x3abd08['css']('display', 'block'),
            _0x2819f9['css']('display', 'none')),
        _0x1d9040;
}
function checkmarkE() {
    if (!tourney_data['adjudicator'])
        return;
    var _0x5491a1 = $(this)['parents']('.bracket:first');
    if (_0x5491a1['find']('.player1')['length'] == 0x0 || _0x5491a1['find']('.player2')['length'] == 0x0) {
        $(this)['css']('cursor', 'auto');
        return;
    }
    _0x5491a1['find']('.checkmark1,\x20.checkmark2')['css']('opacity', 0x0),
        _0x5491a1['find']('.winner,\x20.loser')['hide'](),
        $(this)['css']('cursor', 'pointer'),
        $(this)['css']('opacity', 0x1);
}
function getBracketUsername(_0x259490) {
    for (var _0xe1cff1 = 0x0; _0xe1cff1 < tourney_data['participants']['length']; _0xe1cff1++) {
        if (tourney_data['participants'][_0xe1cff1]['id'] == _0x259490)
            return tourney_data['participants'][_0xe1cff1]['username'];
    }
    return '';
}
function getPlayerID(_0x4ba343) {
    for (var _0x22600f = 0x0; _0x22600f < tourney_data['participants']['length']; _0x22600f++) {
        if (tourney_data['participants'][_0x22600f]['username'] == _0x4ba343)
            return tourney_data['participants'][_0x22600f]['id'];
    }
}
function fillBrackets() {
    if (tourney_data['matches']['length'] == 0x0)
        return;
    var _0x795fad, _0x3795b0 = tourney_data['matches'][0x0]['round'], _0x149990 = 0x0, _0x3f135d = 0x96, _0x390f83 = 0x4b, _0x299ae8 = 0x1, _0x298aba = 0x0, _0x2ee1ec = 0x0;
    for (var _0x39beda = 0x0; _0x39beda < tourney_data['matches']['length']; _0x39beda++) {
        if (tourney_data['matches'][_0x39beda]['round'] == 0x1)
            _0x298aba++;
        else
            tourney_data['matches'][_0x39beda]['round'] == 0x2 && _0x2ee1ec++;
    }
    _0x2ee1ec > _0x298aba && (_0x299ae8 = 0x2);
    for (var _0x39beda = 0x0; _0x39beda < tourney_data['matches']['length']; _0x39beda++) {
        (_0x3795b0 < tourney_data['matches'][_0x39beda]['round'] || !_0x795fad) && (_0x149990 = 0x0,
            _0x3795b0 = tourney_data['matches'][_0x39beda]['round'],
            _0x795fad = $('<div\x20class=\x22round\x22></div>'),
            _0x795fad['css']('left', _0x3795b0 * 0x17c - 0x17c),
            $('.round:last')['length'] > 0x0 && (_0x3795b0 > _0x299ae8 && tourney_data['format'] != 'swiss' && (_0x795fad['css']('top', parseInt($('.round:last')['css']('top')) + _0x390f83),
                (_0x298aba % 0x2 == 0x0 && _0x299ae8 == 0x1 || _0x2ee1ec % 0x2 == 0x0 && _0x299ae8 == 0x2) && (tourney_data['format'] != 'swiss' && (_0x390f83 *= 0x2,
                    _0x3f135d *= 0x2)))),
            $('#pairings')['append'](_0x795fad));
        var _0x9f5b1f = new Bracket(tourney_data['matches'][_0x39beda]);
        _0x9f5b1f['addClass']('match' + tourney_data['matches'][_0x39beda]['id']),
            _0x9f5b1f['addClass']('round' + _0x3795b0),
            _0x9f5b1f['css']('top', _0x149990),
            _0x795fad['append'](_0x9f5b1f),
            showWinner(tourney_data['matches'][_0x39beda]),
            _0x299ae8 == 0x2 && tourney_data['matches'][_0x39beda]['player2_prereq_match_id'] && $('.round1.match' + tourney_data['matches'][_0x39beda]['player2_prereq_match_id'])['css']('top', parseInt(_0x9f5b1f['css']('top')) + 0x4b),
            _0x149990 += _0x3f135d;
    }
}
function showWinner(_0x3defd8) {
    var _0x513e08 = $('.match' + _0x3defd8['id']);
    _0x513e08['find']('.winner')['detach'](),
        _0x513e08['find']('.loser')['detach']();
    if (_0x3defd8['winner']) {
        var _0x11fc39 = $('<img\x20class=\x22checkmark\x20winner\x22\x20src=\x22' + IMAGES_START + 'checkmark.webp\x22\x20alt=\x22Winner\x22\x20/>')
            , _0x1a8f43 = $('<img\x20class=\x22xmark\x20loser\x22\x20src=\x22' + IMAGES_START + 'xmark.webp\x22\x20alt=\x22Loser\x22\x20/>');
        _0x3defd8['winner'] == _0x513e08['find']('.player1\x20.username_txt')['text']() ? (_0x11fc39['css']('top', -0x7),
            _0x1a8f43['css']('top', 0x39)) : (_0x11fc39['css']('top', 0x2b),
                _0x1a8f43['css']('top', 0x7)),
            _0x513e08['append'](_0x11fc39),
            _0x513e08['append'](_0x1a8f43);
    }
}
function updateWinnerResponse(_0x10e250) {
    if (!selectedTourney || selectedTourney['data']('id') != _0x10e250['id'] || currentLabel != 'tournaments')
        return;
    hideDim();
    for (var _0x4cc789 = 0x0; _0x4cc789 < tourney_data['matches']['length']; _0x4cc789++) {
        if (tourney_data['matches'][_0x4cc789]['id'] == _0x10e250['match']) {
            tourney_data['matches'][_0x4cc789]['winner'] = null;
            _0x10e250['action'] == 'Mark\x20winner' && (tourney_data['matches'][_0x4cc789]['winner'] = _0x10e250['username']);
            showWinner(tourney_data['matches'][_0x4cc789]);
            var _0x363ee6 = 0x0
                , _0x105abb = 0x0;
            for (var _0x1312c6 = 0x0; _0x1312c6 < tourney_data['matches']['length']; _0x1312c6++) {
                var _0x44bb79 = tourney_data['matches'][_0x1312c6];
                if (_0x44bb79['player1_prereq_match_id'] == _0x10e250['match']) {
                    _0x363ee6 = _0x44bb79['id'];
                    break;
                } else {
                    if (_0x44bb79['player2_prereq_match_id'] == _0x10e250['match']) {
                        _0x363ee6 = _0x44bb79['id'],
                            _0x105abb = 0x1;
                        break;
                    }
                }
            }
            if (_0x363ee6) {
                var _0x5b544e = $('.bracket' + _0x10e250['match'] + '\x20.player' + getPlayerID(_0x10e250['username']))['clone'](!![]);
                _0x5b544e['removeClass']('player1'),
                    _0x5b544e['removeClass']('player2'),
                    _0x5b544e['addClass']('player' + (_0x105abb + 0x1)),
                    _0x5b544e['css']('top', 0x32 * _0x105abb),
                    $('.bracket' + _0x363ee6 + '\x20.player' + (_0x105abb + 0x1))['detach']();
                if (_0x10e250['local'] || _0x10e250['action'] != 'Mark\x20winner')
                    return;
                $('.bracket' + _0x363ee6)['append'](_0x5b544e),
                    TweenMax['fromTo'](_0x5b544e, 0x1, {
                        'left': 0x258,
                        'alpha': 0x0
                    }, {
                        'left': 0x0,
                        'alpha': 0x1,
                        'ease': Expo['easeInOut']
                    });
            }
            break;
        }
    }
}
function hideCreateTourney() {
    $('#tournaments\x20#create_tourney')['hide']();
}
function viewTourneyResponse(_0x2fcbef) {
    if (duelId) { }
    if (!selectedTourney || selectedTourney['data']('id') != _0x2fcbef['id'])
        return;
    currentLabel != 'tournaments' ? (goto('tournaments'),
        $('#tournaments\x20.back_btn')['hide']()) : $('#tournaments\x20.back_btn')['show']();
    if (moderator) { }
    $('#tournaments\x20.subtitle')['text'](''),
        $('#tournaments\x20.create_tourney_btn')['hide'](),
        selectedTourney = new Tournament(_0x2fcbef),
        selectedTourney['data']('id', _0x2fcbef['id']),
        hideCreateTourney(),
        $('.adjudicators_list:visible\x20.friend_item')['each'](function (_0x3a7ca6, _0x2a8f6e) {
            $(this)['text']() == username && (_0x3a7ca6 == 0x0 ? _0x2fcbef['adjudicator'] = 0x2 : _0x2fcbef['adjudicator'] = 0x1);
        }),
        tourney_data = _0x2fcbef,
        showTournament();
}
function showTournament() {
    if (!tourney_ready || !tourney_data)
        return;
    hideDim(),
        $('#tournaments\x20.period_sel')['hide']();
    var _0x45dec3 = 0x28;
    selectedTourney['css']('top', _0x45dec3),
        selectedTourney['detach'](),
        accept_members['detach'](),
        $('#tournaments\x20.content:first')['html'](''),
        $('#tournaments\x20.content:first')['append'](selectedTourney),
        selectedTourney['find']('.name_txt')['text'](tourney_data['name']),
        selectedTourney['find']('.desc_txt')['html'](escapeHTMLWithLinks(tourney_data['description'], !![])),
        _0x45dec3 += selectedTourney[0x0]['scrollHeight'] + 0x14,
        selectedTourney['find']('.desc_txt')['append']('<br><br>'),
        selectedTourney['find']('.desc_txt')['append']('<font\x20color=\x22#777777\x22>Format:\x20</font>' + upperCamelCase(tourney_data['format'])),
        selectedTourney['find']('.desc_txt')['append']('<br>'),
        selectedTourney['find']('.desc_txt')['append']('<font\x20color=\x22#777777\x22>Match\x20Type:\x20</font>' + spellFormat(tourney_data['match_type'])),
        _0x45dec3 += 0x36;
    tourney_data['banlist'] && (selectedTourney['find']('.desc_txt')['append']('<br>'),
        selectedTourney['find']('.desc_txt')['append']('<font\x20color=\x22#777777\x22>Banlist:\x20</font>' + escapeHTMLWithLinks(URL_START + 'banlist?id=' + tourney_data['banlist'])),
        _0x45dec3 += 0x1b);
    setText(selectedTourney['find']('.progress_txt')),
        selectedTourney['find']('.members_txt')['show']();
    var _0x1a1d2d = $('<input\x20type=\x22submit\x22\x20class=\x22join_tourney_btn\x22\x20value=\x22Join\x20Tournament\x22\x20/>');
    _0x1a1d2d['click'](joinTourneyE),
        _0x1a1d2d['css']('left', 0x37),
        _0x1a1d2d['css']('top', _0x45dec3);
    username && ($('#tournaments\x20.content:first')['append'](_0x1a1d2d),
        changeButton(_0x1a1d2d),
        _0x1a1d2d['disable'](tourney_data['started']));
    tourney_data['joined'] && _0x1a1d2d['val']('Leave\x20Tournament');
    if (tourney_data['adjudicator'] == 0x2) {
        _0x1a1d2d['hide']();
        var _0x2bb481 = $('<input\x20type=\x22submit\x22\x20class=\x22start_tourney_btn\x22\x20value=\x22Start\x20Tourney\x22\x20/>');
        _0x2bb481['click'](startTourneyE),
            _0x2bb481['css']('left', 0x37),
            _0x2bb481['css']('top', _0x45dec3),
            $('#tournaments\x20.content:first')['append'](_0x2bb481),
            changeButton(_0x2bb481),
            _0x2bb481['setWidth'](0x64),
            _0x2bb481['disable'](tourney_data['started']);
        var _0x5516cf = $('<input\x20type=\x22submit\x22\x20class=\x22edit_tourney_btn\x22\x20value=\x22Edit\x20Tourney\x22\x20/>');
        _0x5516cf['click'](editTourneyE),
            _0x5516cf['css']('left', 0xa5),
            _0x5516cf['css']('top', _0x45dec3),
            $('#tournaments\x20.content:first')['append'](_0x5516cf),
            changeButton(_0x5516cf);
        var _0x1516f9 = $('<input\x20type=\x22submit\x22\x20class=\x22reset_tourney_btn\x22\x20value=\x22Suspend\x20Tourney\x22\x20/>');
        _0x1516f9['click'](resetTourneyE),
            _0x1516f9['css']('left', 0x21b),
            _0x1516f9['css']('top', _0x45dec3),
            $('#tournaments\x20.content:first')['append'](_0x1516f9),
            changeButton(_0x1516f9),
            _0x1516f9['setWidth'](0x6c);
        var _0x116cf6 = $('<input\x20type=\x22submit\x22\x20class=\x22end_tourney_btn\x22\x20value=\x22End\x20Tourney\x22\x20/>');
        _0x116cf6['click'](endTourneyE),
            _0x116cf6['css']('left', 0x37),
            _0x116cf6['css']('top', _0x45dec3),
            $('#tournaments\x20.content:first')['append'](_0x116cf6),
            changeButton(_0x116cf6),
            tourney_data['started'] ? _0x2bb481['hide']() : _0x116cf6['hide'](),
            (tourney_data['ended'] || !tourney_data['started']) && _0x116cf6['disable'](!![]);
    }
    var _0x1de304 = $('<div\x20class=\x22tourney_link\x20size18\x20cyan\x22></div>');
    _0x1de304['css']('left', 0x37),
        $('#tournaments\x20.content:first')['append'](_0x1de304);
    username ? (_0x45dec3 += 0x28,
        _0x1de304['append'](escapeHTMLWithLinks(URL_START + 'tourney?id=' + tourney_data['id'], !![]))) : !tourney_data['started'] ? (_0x45dec3 += 0x41,
            selectedTourney['find']('.desc_txt')['append']('<br><br><font\x20style=\x22font-family:\x20Arial;\x20font-style:\x20italic;\x22>To\x20join\x20this\x20tourney,\x20click\x20the\x20<font\x20style=\x22font-family:\x20Arial\x20Black;\x20font-style:\x20normal;\x22>Tournaments</font>\x20button\x20on\x20<u><a\x20href=\x22https://www.duelingbook.com/\x22\x20target=\x22_blank\x22>duelingbook.com</a></u><br>\x20and\x20find\x20the\x20tourney\x20there\x20with\x20the\x20same\x20name.</font>')) : (_0x1de304['append'](escapeHTMLWithLinks('https://challonge.com/' + tourney_data['url'])),
                _0x1de304['css']('font-size', 0xe));
    _0x1de304['css']('top', _0x45dec3),
        $('#tournaments\x20.content:first')['append'](accept_members),
        accept_members['find']('.joinlist\x20.cell')['detach'](),
        accept_members['css']('top', _0x45dec3 + 0x37),
        accept_members['find']('.accept_btn')['disable'](!![]),
        accept_members['find']('.reject_btn')['disable'](!![]),
        accept_members['find']('.check_btn')['disable'](!![]),
        $('#tournaments\x20.content:first')['append'](tourney_members),
        tourney_members['css']('top', _0x45dec3 - 0xa),
        tourney_members['find']('.members_list')['find']('.friend_item')['detach'](),
        tourney_members['find']('.adjudicators_list')['find']('.friend_item')['detach'](),
        tourney_members['find']('.expand_btn')['hide']();
    for (var _0x15a48f = 0x0; _0x15a48f < tourney_data['adjudicators']['length']; _0x15a48f++) {
        var _0x5beb65 = new FriendItem(tourney_data['adjudicators'][_0x15a48f]);
        _0x5beb65['contextmenu'](removePlayerE),
            tourney_members['find']('.adjudicators_list')['append'](_0x5beb65),
            setText(_0x5beb65['find']('.username_txt'));
    }
    tourney_members['show'](),
        tourney_members['find']('.title_txt')['hide']();
    if (!tourney_data['started']) {
        tourney_members['find']('.title_txt')['show']();
        for (var _0x15a48f = 0x0; _0x15a48f < tourney_data['participants']['length']; _0x15a48f++) {
            var _0x5beb65 = new FriendItem(tourney_data['participants'][_0x15a48f]);
            _0x5beb65['contextmenu'](removePlayerE),
                tourney_members['find']('.members_list')['append'](_0x5beb65),
                setText(_0x5beb65['find']('.username_txt'));
        }
    }
    tourney_members['off']('contextmenu'),
        tourney_members['find']('.adjudicators_txt')['css']('transform', 'scaleX(0.9)'),
        _0x45dec3 += tourney_members[0x0]['scrollHeight'];
    tourney_data['adjudicator'] == 0x2 && (tourney_members['find']('.adjudicators_txt')['css']('transform', 'scaleX(0.8)'),
        tourney_members['find']('.adjudicators_list')['find']('.expand_btn')['show'](),
        addButton(tourney_members['find']('.adjudicators_list')['find']('.expand_btn'), addAdjudicatorE),
        !tourney_data['started'] && (tourney_members['find']('.members_list')['find']('.expand_btn')['show'](),
            addButton(tourney_members['find']('.members_list')['find']('.expand_btn'), addPlayerE)));
    accept_members['hide']();
    if (tourney_data['adjudicator'] && !tourney_data['started']) {
        accept_members['show']();
        for (var _0x15a48f = 0x0; _0x15a48f < tourney_data['joiners']['length']; _0x15a48f++) {
            addMemberCell(tourney_data['joiners'][_0x15a48f]['username']);
        }
    }
    (tourney_data['started'] || !username) && $('#tournaments\x20.subtitle')['text'](tourney_data['name']);
    if (tourney_data['started']) {
        pairings['html'](''),
            pairings['css']('top', _0x45dec3),
            pairings['css']('height', 0x0),
            $('#tournaments\x20.content:first')['append'](pairings),
            fillBrackets(),
            $('.checkmark1,\x20.checkmark2')['click'](updateWinnerE),
            pairings['css']('transform', 'none'),
            pairings['css']('height', pairings[0x0]['scrollHeight']);
        var _0x1d740b = pairings['width']() / (pairings[0x0]['scrollWidth'] + 0xf);
        pairings['css']('transform', 'scale(' + _0x1d740b + ')'),
            _0x45dec3 += pairings[0x0]['scrollHeight'] * _0x1d740b + 0x14,
            standings['css']('top', _0x45dec3),
            $('#tournaments\x20.content:first')['append'](standings),
            standings['find']('.standing')['detach'](),
            updateScores(),
            setTimeout(function () {
                var _0x54abbf = parseInt($('#pairings')['css']('top')) - 0x17;
                tweenScrollbar($('#tournaments\x20.content:first'), 0.3, {
                    'scrollTop': _0x54abbf,
                    'ease': Expo['easeInOut']
                });
            }, 0x5);
    }
    setTimeout(function () {
        $('.friend_item\x20.username_txt')['each'](function () {
            setText($(this));
        });
    }, 0xa),
        updateTourneySeconds();
}
function updateScores() {
    tourney_data['participants']['sort'](sortScore);
    for (var _0x1425dc = 0x0; _0x1425dc < tourney_data['participants']['length']; _0x1425dc++) {
        var _0xf32979 = new Standing(tourney_data['participants'][_0x1425dc], _0x1425dc + 0x1);
        _0xf32979['css']('top', _0x1425dc * 0x32),
            standings['find']('.players')['append'](_0xf32979),
            setText(_0xf32979['find']('.username_txt'));
    }
    standings['css']('height', 0x0),
        standings['css']('height', standings[0x0]['scrollHeight']);
}
function Tournament(_0x5ed25a) {
    var _0xe925df = $('<div\x20class=\x22tourney\x22></div>');
    _0xe925df['data']('id', _0x5ed25a['id']),
        _0xe925df['data']('priority', _0x5ed25a['priority']);
    var _0x527fb1 = new Avatar(_0x5ed25a);
    _0x527fb1['off']('click'),
        _0x527fb1['click'](tourneyClickE),
        _0x527fb1['find']('.avatar_frame')['css']('filter', 'saturate(0)'),
        _0x527fb1['find']('.nsfw')['detach']();
    if (_0x5ed25a['image'])
        _0x527fb1['find']('.image')['attr']('src', IMAGES_START + 'tourneys/' + _0x5ed25a['id'] + '.jpg?v=' + _0x5ed25a['image']);
    else
        !_0x5ed25a['automatic'] && _0x527fb1['find']('.image')['attr']('src', IMAGES_START + 'swords.jpg');
    _0x527fb1['contextmenu'](rankTourneyE);
    var _0x2ffdc4 = $('<span\x20class=\x22name_txt\x20selectable\x20size24\x22></span>');
    _0x2ffdc4['text'](_0x5ed25a['name']),
        _0x2ffdc4['click'](tourneyClickE);
    var _0x54dd8c = $('<div\x20class=\x22hosted_by_txt\x20arial_rounded18\x22></div>');
    _0x54dd8c['html']('by\x20<font\x20color=\x22#FFFFCC\x22>' + escapeHTML(_0x5ed25a['username']) + '</font>');
    var _0x1d4ade = $('<div\x20class=\x22date_txt\x20arial_rounded18\x22></div>');
    if (_0x5ed25a['started']) {
        var _0x387219 = new Date();
        _0x387219['setSeconds'](_0x387219['getSeconds']() - ~~_0x5ed25a['started_at']),
            _0xe925df['data']('started_timestamp', _0x387219);
    } else {
        if (_0x5ed25a['starts_at']) {
            var _0x387219 = new Date();
            _0x387219['setSeconds'](_0x387219['getSeconds']() - ~~_0x5ed25a['starts_at']),
                _0xe925df['data']('starts_at_timestamp', _0x387219);
        } else {
            if (_0x5ed25a['signups_at']) {
                var _0x387219 = new Date();
                _0x387219['setSeconds'](_0x387219['getSeconds']() - ~~_0x5ed25a['signups_at']),
                    _0xe925df['data']('starts_at_timestamp', _0x387219);
            } else
                _0x1d4ade['text']('Created\x20' + _0x5ed25a['date']);
        }
    }
    var _0xcfc15f = $('<div\x20class=\x22members_txt\x20arial_rounded18\x22></div>');
    updateMemberTotal(_0x5ed25a, _0xcfc15f);
    var _0x255af6 = $('<div\x20class=\x22progress_txt\x20arial_rounded18\x22></div>');
    if (_0x5ed25a['ended']) {
        _0x255af6['css']('color', '#777777');
        var _0x387219 = new Date();
        _0x387219['setSeconds'](_0x387219['getSeconds']() - ~~_0x5ed25a['ended_at']),
            _0xe925df['data']('ended_timestamp', _0x387219);
    } else {
        if (_0x5ed25a['started'])
            _0x255af6['text']('In\x20progress...'),
                _0x255af6['css']('color', '#00BB00');
        else {
            if (_0x5ed25a['signups_at']) {
                _0x255af6['text']('\x20'),
                    _0x255af6['css']('color', '#777777'),
                    _0xcfc15f['hide']();
                var _0x387219 = new Date();
                _0x387219['setSeconds'](_0x387219['getSeconds']() - ~~_0x5ed25a['signups_at']),
                    _0xe925df['data']('signups_at_timestamp', _0x387219);
            } else
                _0xcfc15f['css']('top', 0x37);
        }
    }
    var _0x2f1b91 = $('<div\x20class=\x22desc_txt\x20size18\x20cyan\x20selectable\x22></div>');
    return _0x2f1b91['html'](escapeHTMLWithLinks(_0x5ed25a['desc'], !![])),
        _0xe925df['append'](_0x527fb1),
        _0xe925df['append'](_0x2ffdc4),
        _0xe925df['append'](_0x54dd8c),
        _0xe925df['append'](_0x1d4ade),
        _0xe925df['append'](_0x255af6),
        _0xe925df['append'](_0x2f1b91),
        _0xe925df['append'](_0xcfc15f),
        _0xe925df;
}
function updateTourneySeconds() {
    $('.tourney')['each'](function (_0x353a78, _0x358ff1) {
        if ($(this)['data']('started_timestamp'))
            $(this)['find']('.date_txt')['text']('Started\x20' + getTimeAgo($(this)['data']('started_timestamp')['getTime']()));
        else
            $(this)['data']('starts_at_timestamp') && ($(this)['find']('.date_txt')['text']('Starts\x20in\x20' + getTimeAgo($(this)['data']('starts_at_timestamp')['getTime']())['replace']('\x20ago', '')),
                (parseInt($(this)['find']('.date_txt')['text']()) <= 0x5 && $(this)['find']('.date_txt')['text']()['includes']('minute') || $(this)['find']('.date_txt')['text']()['includes']('second')) && date_txt['css']('color', 'yellow'));
        if ($(this)['data']('ended_timestamp'))
            $(this)['find']('.progress_txt')['text']('Ended\x20' + getTimeAgo($(this)['data']('ended_timestamp')['getTime']()));
        else
            $(this)['data']('signups_at_timestamp') && $(this)['find']('.progress_txt')['text']('Signups\x20start\x20in\x20' + getTimeAgo($(this)['data']('signups_at_timestamp')['getTime']())['replace']('\x20ago', ''));
    });
}
function Standing(_0xd69cda, _0x4ea60d) {
    var _0x11b7e2 = $('<div\x20class=\x22standing\x22></div>');
    _0x11b7e2['data']('wins', _0xd69cda['wins']),
        _0x11b7e2['data']('losses', _0xd69cda['losses']);
    var _0x11e65a = $('<span\x20class=\x22rank_txt\x22></span>');
    _0x11e65a['text'](_0x4ea60d);
    var _0x5d8217 = new Avatar(_0xd69cda)
        , _0x3258e7 = $('<span\x20class=\x22username_txt\x20bisque\x20selectable\x22></span>');
    _0x3258e7['text'](_0xd69cda['username']);
    _0xd69cda['dropped'] && _0x3258e7['css']('text-decoration', 'line-through');
    var _0xe56cf7 = $('<span\x20class=\x22score_txt\x22></span>');
    return _0xe56cf7['text'](_0xd69cda['wins'] + '-' + _0xd69cda['losses']),
        _0x11b7e2['append'](_0x11e65a),
        _0x11b7e2['append'](_0x5d8217),
        _0x11b7e2['append'](_0x3258e7),
        _0x11b7e2['append'](_0xe56cf7),
        _0x11b7e2;
}
function sortScore(_0x5bb7e2, _0x1afdd8) {
    if (_0x5bb7e2['wins'] > _0x1afdd8['wins'])
        return -0x1;
    if (_0x5bb7e2['wins'] < _0x1afdd8['wins'])
        return 0x1;
    if (_0x5bb7e2['losses'] < _0x1afdd8['losses'])
        return -0x1;
    if (_0x5bb7e2['losses'] > _0x1afdd8['losses'])
        return 0x1;
    if (_0x5bb7e2['points'] > _0x1afdd8['points'])
        return -0x1;
    if (_0x5bb7e2['points'] < _0x1afdd8['points'])
        return 0x1;
    return 0x0;
}
function rankTourneyE() {
    if (!moderator)
        return !![];
    var _0x239201 = $(this)['parent']()
        , _0x2273bc = ['3', '2', '1', '0'];
    return getComboBox('Rank\x20Tourney', 'Select\x20the\x20priority\x20for\x20this\x20tourney:\x20', _0x2273bc, _0x2273bc['indexOf'](_0x239201['data']('priority')['toString']()), function () {
        Send({
            'action': 'Rank\x20tourney',
            'tourney': ~~_0x239201['data']('id'),
            'rank': ~~$('#combo\x20.combo_cb')['val']()
        }),
            showDim();
    }),
        showDim(),
        ![];
}
function canEndTourney() {
    if (tourney_data['ended'])
        return ![];
    if (!tourney_data['started'])
        return ![];
    if (tourney_data['matches']['length'] == 0x0)
        return ![];
    for (var _0x3f4efe = 0x0; _0x3f4efe < tourney_data['matches']['length']; _0x3f4efe++) {
        if (tourney_data['matches'][_0x3f4efe]['winner'] == null)
            return ![];
    }
    return !![];
}
function addAdjudicatorE() { }
function addPlayerE() { }
function removePlayerE() { }
function startTourneyDuelResponse(_0x3eae2e) {
    duelist && _0x3eae2e['duel'] == duelId && _0x3eae2e['automatic'] && (automaticTourney = !![],
        $('#call_admin_btn')['disable'](![]));
    if (!selectedTourney || selectedTourney['data']('id') != _0x3eae2e['id'])
        return;
    $('.bracket' + _0x3eae2e['match'])['find']('.replay_btn')['hide'](),
        $('.bracket' + _0x3eae2e['match'])['find']('.watch_duel_btn')['data']('id', _0x3eae2e['duel']),
        $('.bracket' + _0x3eae2e['match'])['find']('.watch_duel_btn')['show']();
}
function endTourneyDuelResponse(_0x2bb547) {
    if (!selectedTourney || selectedTourney['data']('id') != _0x2bb547['id'])
        return;
    $('.bracket' + _0x2bb547['match'])['find']('.replay_btn\x20a')['attr']('href', URL_START + 'replay?id=' + _0x2bb547['duel']),
        $('.bracket' + _0x2bb547['match'])['find']('.replay_btn')['show'](),
        $('.bracket' + _0x2bb547['match'])['find']('.watch_duel_btn')['hide']();
}
function leaveTourneyResponse(_0x4682f9) {
    updateMemberTotal(_0x4682f9);
    if (!selectedTourney || selectedTourney['data']('id') != _0x4682f9['id'] || currentLabel != 'tournaments')
        return;
    $('#accept_members\x20.joinlist\x20.cell2')['filter'](function () {
        return $(this)['text']() === _0x4682f9['username'];
    })['detach'](),
        $('#tourney_members\x20.friend_item')['filter'](function () {
            return $(this)['text']() === _0x4682f9['username'];
        })['each'](function () {
            var _0x54ecd9 = $(this);
            TweenMax['to'](_0x54ecd9, 0.5, {
                'opacity': 0x0,
                'onComplete': function () {
                    _0x54ecd9['detach']();
                }
            }),
                tourney_data['total']--;
        });
}
function acceptMemberResponse(_0x4b0358) {
    if (_0x4b0358['username'] == username && _0x4b0358['approved']) {
        var _0xbf2a82 = new Notification();
        _0xbf2a82['data']('callback', function () {
            gotoPairings(_0x4b0358);
        }),
            _0xbf2a82['setupAccepted'](_0x4b0358['name']),
            addToNotifications(_0xbf2a82, !![]);
    }
    tourneys_data = null,
        updateMemberTotal(_0x4b0358);
    if (!selectedTourney || selectedTourney['data']('id') != _0x4b0358['id'] || currentLabel != 'tournaments')
        return;
    $('#accept_members\x20.joinlist\x20.cell2')['filter'](function () {
        return $(this)['text']() === _0x4b0358['username'];
    })['detach']();
    if (tourney_members['find']('.friend_item')['filter'](function () {
        return $(this)['text']() === _0x4b0358['username'];
    })['length'] > 0x0)
        return;
    _0x4b0358['username'] == username && $('#tournaments\x20.join_tourney_btn')['val']('Leave\x20Tournament');
    var _0x4b8f95 = new FriendItem(_0x4b0358);
    _0x4b8f95['contextmenu'](removePlayerE),
        tourney_members['find']('.members_list')['append'](_0x4b8f95),
        setText(_0x4b8f95['find']('.username_txt')),
        TweenMax['fromTo'](_0x4b8f95, 0x1, {
            'left': 0x258,
            'alpha': 0x0
        }, {
            'left': 0x0,
            'alpha': 0x1,
            'ease': Expo['easeInOut']
        }),
        tourney_data['total']++;
}
function addAdjudicatorResponse(_0x341944) {
    if (!selectedTourney || selectedTourney['data']('id') != _0x341944['id'] || currentLabel != 'tournaments')
        return;
    if (tourney_members['find']('.friend_item')['filter'](function () {
        return $(this)['text']() === _0x341944['username'];
    })['length'] > 0x0)
        return;
    var _0x4916c9 = new FriendItem(_0x341944);
    _0x4916c9['contextmenu'](removePlayerE),
        tourney_members['find']('.adjudicators_list')['append'](_0x4916c9),
        setText(_0x4916c9['find']('.username_txt')),
        TweenMax['fromTo'](_0x4916c9, 0x1, {
            'left': 0x258,
            'alpha': 0x0
        }, {
            'left': 0x0,
            'alpha': 0x1,
            'ease': Expo['easeInOut']
        });
}
function removePlayerResponse(_0x5a0706) {
    if (_0x5a0706['username'] == username && !_0x5a0706['adjudicator']) {
        var _0x50e939 = new Notification();
        _0x50e939['data']('callback', function () {
            gotoPairings(_0x5a0706);
        }),
            _0x50e939['setupRemoved'](_0x5a0706['name']),
            addToNotifications(_0x50e939, !![]);
    }
    tourneys_data = null,
        updateMemberTotal(_0x5a0706);
    if (!selectedTourney || selectedTourney['data']('id') != _0x5a0706['id'] || currentLabel != 'tournaments')
        return;
    _0x5a0706['username'] == username && $('#tournaments\x20.join_tourney_btn')['val']('Join\x20Tournament'),
        tourneys_data = null,
        hideDim(),
        $('#tourney_members\x20.friend_item')['filter'](function () {
            return $(this)['text']() === _0x5a0706['username'];
        })['each'](function () {
            var _0x221237 = $(this);
            TweenMax['to'](_0x221237, 0.5, {
                'opacity': 0x0,
                'onComplete': function () {
                    _0x221237['detach']();
                }
            }),
                $(this)['parents']('.adjudicators_list')['length'] == 0x0 && tourney_data['total']--;
        }),
        pairings['find']('.username_txt')['filter'](function () {
            return $(this)['text']() === _0x5a0706['username'];
        })['each'](function () {
            $(this)['css']('text-decoration', 'line-through');
        });
}
function updateMemberTotal(_0x554f59, _0x4ef6f4) {
    !_0x4ef6f4 && (_0x4ef6f4 = $('.tourney')['filter'](function () {
        return $(this)['data']('id') === _0x554f59['id'];
    })['find']('.members_txt'));
    var _0x50cc67 = _0x554f59['total'];
    _0x554f59['max'] && (_0x50cc67 += '/' + _0x554f59['max']),
        _0x50cc67 += '\x20players',
        _0x4ef6f4['text'](_0x50cc67),
        _0x4ef6f4['css']('color', '#FF8800'),
        _0x554f59['total'] >= _0x554f59['max'] && _0x554f59['max'] && _0x4ef6f4['css']('color', '#00CC00');
}
function gotoPairings(_0x55b97b) {
    window['open'](URL_START + 'tourney?id=' + _0x55b97b['id']);
}
function spellFormat(_0x1880db) {
    switch (_0x1880db) {
        case 'm':
            return 'Matches';
        default:
            return 'Singles';
    }
}
function fixCardData(_0x801241) {
    _0x801241['n'] && (_0x801241['name'] = _0x801241['n'],
        _0x801241['ta'] ? _0x801241['treated_as'] = _0x801241['ta'] : _0x801241['treated_as'] = _0x801241['n'],
        _0x801241['e'] && (_0x801241['effect'] = _0x801241['e']),
        _0x801241['c'] && (_0x801241['card_type'] = _0x801241['c']),
        _0x801241['mc'] ? (_0x801241['monster_color'] = _0x801241['mc'],
            _0x801241['ie'] == null && (_0x801241['is_effect'] = 0x1),
            _0x801241['attribute'] = _0x801241['att'],
            _0x801241['level'] = _0x801241['lvl'],
            _0x801241['abi'] && (_0x801241['ability'] = _0x801241['abi']),
            _0x801241['flip'] = parseInt(_0x801241['flp']),
            _0x801241['pendulum'] = parseInt(_0x801241['p']),
            _0x801241['pef'] && (_0x801241['pendulum_effect'] = _0x801241['pef'],
                _0x801241['pendulum_effect_lowercase'] = normalize(_0x801241['pef'])),
            _0x801241['scale'] = parseInt(_0x801241['scl']),
            _0x801241['arr'] && (_0x801241['arrows'] = _0x801241['arr'])) : _0x801241['monster_color'] = '',
        _0x801241['typ'] && (_0x801241['type'] = _0x801241['typ']),
        _0x801241['tcgl'] != null && (_0x801241['tcg_limit'] = _0x801241['tcgl']),
        _0x801241['ocgl'] != null && (_0x801241['ocg_limit'] = _0x801241['ocgl']),
        _0x801241['tcg_limit'] == null && _0x801241['tcgl'] == null && (_0x801241['tcg_limit'] = 0x3),
        _0x801241['ocg_limit'] == null && _0x801241['ocgl'] == null && (_0x801241['ocg_limit'] = 0x3),
        _0x801241['s'] && (_0x801241['serial_number'] = String(_0x801241['s'])),
        _0x801241['tcg'] == null && (_0x801241['tcg'] = 0x1),
        _0x801241['ocg'] == null && (_0x801241['ocg'] = 0x1),
        _0x801241['pic'] == null && (_0x801241['pic'] = '1'),
        _0x801241['h'] != null && (_0x801241['hidden'] = 0x1),
        _0x801241['d'] && (_0x801241['date'] = _0x801241['d']),
        _0x801241['u'] && (_0x801241['updated'] = _0x801241['u']),
        delete _0x801241['n'],
        delete _0x801241['ta'],
        delete _0x801241['e'],
        delete _0x801241['c'],
        delete _0x801241['mc'],
        delete _0x801241['ie'],
        delete _0x801241['att'],
        delete _0x801241['lvl'],
        delete _0x801241['abi'],
        delete _0x801241['flp'],
        delete _0x801241['p'],
        delete _0x801241['pef'],
        delete _0x801241['scl'],
        delete _0x801241['arr'],
        delete _0x801241['typ'],
        delete _0x801241['tcgl'],
        delete _0x801241['ocgl'],
        delete _0x801241['s'],
        delete _0x801241['d'],
        delete _0x801241['u']),
        _0x801241['name_lowercase'] = normalize(_0x801241['name']),
        _0x801241['effect_lowercase'] = normalize(_0x801241['effect']);
}
function normalize(_0x11438e) {
    if (_0x11438e['normalize'])
        return _0x11438e['normalize']('NFD')['replace'](/[\u0300-\u036f]/g, '')['toLowerCase']();
    return _0x11438e['toLowerCase']();
}
function isIn(_0x37ae06, _0x2f1a0b) {
    for (var _0x3af838 = 0x0; _0x3af838 < _0x2f1a0b['length']; _0x3af838++) {
        if (_0x2f1a0b[_0x3af838][0x0] == _0x37ae06[0x0] || _0x2f1a0b[_0x3af838]['data']('id') == _0x37ae06['data']('id'))
            return _0x3af838;
    }
    return -0x1;
}
function restrictInt(_0x282e23) {
    _0x282e23['attr']('pattern', '[0-9]+'),
        _0x282e23['on']('input', function () {
            this['value'] = this['value']['replace'](/[^0-9]/g, '');
        });
}
function getCookie(_0x3c0c76) {
    var _0x446065 = document['cookie']['match'](new RegExp('(^|\x20)' + _0x3c0c76 + '=([^;]+)'));
    if (_0x446065)
        return unescape(_0x446065[0x2]);
}
function removeCardMenu() { }
function addIfNotExists(_0x3ad86c, _0x409e63) {
    !_0x3ad86c['includes'](_0x409e63) && _0x3ad86c['push'](_0x409e63);
}
function stopGif(_0x5438de) {
    if (!remote || _0x5438de['getAttribute']('src')['indexOf']('.gif') < 0x0)
        return;
    if (_0x5438de['src']['includes']('loading.gif'))
        return;
    var _0x813582 = setInterval(function () {
        if (_0x5438de['complete']) {
            clearInterval(_0x813582);
            var _0x48f9ce = document['createElement']('canvas')
                , _0x30f14f = _0x48f9ce['width'] = _0x5438de['width']
                , _0x5e4c99 = _0x48f9ce['height'] = _0x5438de['height'];
            _0x48f9ce['getContext']('2d')['drawImage'](_0x5438de, 0x0, 0x0, _0x30f14f, _0x5e4c99);
            try {
                _0x5438de['src'] = _0x48f9ce['toDataURL']('image/gif');
            } catch (_0x2f6a5f) {
                console['log'](_0x2f6a5f),
                    console['log']('Culprit:\x20' + _0x5438de['src']);
            }
        }
    }, 0x64);
}
function foundStatus(_0x220799) {
    for (var _0x25ceff = 0x0; _0x25ceff < statuses_data['length']; _0x25ceff++) {
        if (statuses_data[_0x25ceff]['id'] == _0x220799)
            return !![];
    }
    return ![];
}
function getZoom() {
    var _0x2ca68f = window['outerWidth'] * window['devicePixelRatio'] / window['outerWidth'];
    if (SAFARI)
        _0x2ca68f = window['outerWidth'] / window['visualViewport']['width'];
    else
        MAC && (_0x2ca68f = window['outerWidth'] * (window['devicePixelRatio'] / 0x2) / window['outerWidth']);
    return _0x2ca68f = Math['round'](_0x2ca68f * 0x64),
        console['log']('Zoom\x20=\x20' + _0x2ca68f),
        ~~_0x2ca68f;
}
function parse(_0x5b907f) {
    try {
        return JSON['parse'](_0x5b907f);
    } catch (_0x210270) {
        return {
            'action': 'Error',
            'message': 'Malformed\x20response'
        };
    }
}
function get_cookie(_0x1ac82e) {
    return document['cookie']['split'](';')['some'](_0x1dd6cc => {
        return _0x1dd6cc['trim']()['startsWith'](_0x1ac82e + '=');
    }
    );
}
function delete_cookie(_0xb2f6d, _0xfe4396, _0x104fe6) {
    get_cookie(_0xb2f6d) && (document['cookie'] = _0xb2f6d + '=' + (_0xfe4396 ? ';path=' + _0xfe4396 : '') + (_0x104fe6 ? ';domain=' + _0x104fe6 : '') + ';expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT');
}
delete_cookie('_gat', '/', '.duelingbook.com'),
    delete_cookie('_gat', '/', 'duelingbook.com'),
    delete_cookie('__gpi', '/', '.duelingbook.com'),
    delete_cookie('__gpi', '/', 'duelingbook.com'),
    delete_cookie('__qca', '/', '.duelingbook.com'),
    delete_cookie('__qca', '/', 'duelingbook.com'),
    delete_cookie('_pubcid', '/', '.duelingbook.com'),
    delete_cookie('_pubcid', '/', 'duelingbook.com'),
    delete_cookie('cto_bidid', '/', '.duelingbook.com'),
    delete_cookie('cto_bidid', '/', 'duelingbook.com'),
    delete_cookie('cto_bundle', '/', '.duelingbook.com'),
    delete_cookie('cto_bundle', '/', 'duelingbook.com');
