'use strict';
(function(_0x561e33, _0x4558a9) {
    var _0x19e575 = _0x1b54
      , _0x36137a = _0x561e33();
    while (!![]) {
        try {
            var _0xe2d2ed = parseInt(_0x19e575(0x12e)) / 0x1 + -parseInt(_0x19e575(0x127)) / 0x2 * (parseInt(_0x19e575(0x12a)) / 0x3) + -parseInt(_0x19e575(0x129)) / 0x4 + -parseInt(_0x19e575(0x12c)) / 0x5 * (-parseInt(_0x19e575(0x125)) / 0x6) + -parseInt(_0x19e575(0x126)) / 0x7 * (-parseInt(_0x19e575(0x12d)) / 0x8) + -parseInt(_0x19e575(0x128)) / 0x9 + parseInt(_0x19e575(0x12b)) / 0xa;
            if (_0xe2d2ed === _0x4558a9)
                break;
            else
                _0x36137a['push'](_0x36137a['shift']());
        } catch (_0x2d59cf) {
            _0x36137a['push'](_0x36137a['shift']());
        }
    }
}(_0x5801, 0x973dd));
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
var jello = ![] || window['location']['href']['indexOf']('jello=true') >= 0x0, mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i['test'](navigator['userAgent']), swfHeight = 0x280, swfWidth = 0x400, dim = loadSVGAnimation(dim, 'dim', 'dim', 0xbb8, 0x7d0, 0x18, !![]), URL_START = 'https://www.duelingbook.com/', IMAGES_START = 'https://images.duelingbook.com/', SOUND_START = 'https://sounds.duelingbook.com/', AVATAR_START = IMAGES_START + 'thumbnails/', CARD_START = IMAGES_START + 'card/', CARDS_START = IMAGES_START + 'cards/', CARD_IMAGES_START = IMAGES_START + 'low-res/', CUSTOM_PICS_START = IMAGES_START + 'custom-pics/', PROFILE_PIC_START = IMAGES_START + 'profile-pics/', SKILL_BACKS_START = IMAGES_START + 'skill-backs/', SLEEVE_START = IMAGES_START + 'sleeves/', TOKEN_START = IMAGES_START + 'tokens/', SOFT_PLAYS = ['Target\x20card', 'Permission\x20event', 'Permission\x20denied', 'Pause\x20game', 'Resume\x20game', 'Add\x20watcher', 'Remove\x20watcher', 'Duel\x20message', 'Watcher\x20message', 'Call\x20admin', 'Cancel\x20call', 'Offer\x20draw', 'Revoke\x20draw', 'Offer\x20rematch', 'Revoke\x20rematch', 'Typing'], SnapShot = 'sounds/snapshot.mp3', ABOUT_ZERO = 0.1, action_list = $('#action_list'), active = ![], active_scrollpane, adjudicator = 0x0, admin = 0x0, admin_status = 0x0, alignLeft = window['location']['href']['toLowerCase']()['indexOf']('align=l') >= 0x0, alignRight = window['location']['href']['toLowerCase']()['indexOf']('align=r') >= 0x0, always_show_nsfw = 0x0, audio_arr = [], banner_ad = '', blocked_arr = [], cards_created = ![], changing_components = !![], combo_callback, conceal = ![], contentScale = 0x1, controlDown = ![], controlFocus, currentLabel = '', data_arr = [], db_id = '', dragXOffset, dragYOffset, duelId = 0x0, duelist = ![], fancy_scrollbars = !![], flat = ![], html = 0x0, image_url, images = [], input_callback, cancel_callback, lastAction, marginLeft = 0x0, marginTop = 0x0, menu = $('<div\x20id=\x22card_menu\x22\x20class=\x22unloaded\x22><div\x20id=\x22card_menu_content\x22></div></div>'), menu_card, mes1 = $('#mes1'), mes3 = $('#mes3'), mes4 = $('#mes4'), mes2 = $('#mes2'), moderator = 0x0, mouseX = 0x0, mouseXScaled = 0x0, mouseY = 0x0, mouseYScaled = 0x0, msg_callback, no_callback, notification_tweening = ![], password, prevFocus, preview, preview_vsp = 0x0, preview_txt = $('#preview_txt'), recycled_cardfronts_arr = [], regular = ![], remember_me = 0x0, remote = window['location']['href']['indexOf']('http') == 0x0, screenshotStyle = {
    'transform': 'scale(1)',
    'margin': '0px',
    'zoom': '1'
}, shiftDown = ![], showMes = 0x1, skinny_ad = '', slur_arr = ['asshole', 'ass\x20', 'bastard', 'beaner', 'bitch', 'cracker', '\x20cock\x20', 'coon', 'cunt', 'dick', 'dildo', 'faggot', 'fag', 'fuck', 'futa', 'hentai', 'hitler', 'horny', 'islam', 'muslim', 'nazi', 'nig', 'nigga', 'nigger', 'queer', 'slave', 'spick', 'pussy', '\x20rape', 'raping', '\x20shit', 'shit\x20', 'vagina'], statuses_data, streaming = ![], taking_screenshot = ![], testing1 = window['location']['href']['includes']('testing1=true'), testing2 = window['location']['href']['includes']('testing2=true'), TOUCHEND = ![], tourneys_data, userId = 0x0, usecardimages = ![], username, VERSION = 0x2c9, version = 0xd, yes_callback, viewing_card = ![], zooming = ![], Zoom = getZoom(), adjustTimer = new Timer(0x3e8);
adjustTimer['callback'] = adjustScreen;
var resizeETimer = new Timer(0x32);
resizeETimer['callback'] = function() {
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
    'selectedIndex': function(_0x56c1ab) {
        return this['each'](function() {
            $(this)['prop']('selectedIndex', _0x56c1ab),
            $(this)['data']('proxy') && ($(this)['data']('proxy')['text']($(this)['find']('option:selected')['first']()['text']()),
            $(this)['data']('proxy')['append']($(this)['data']('proxy')['data']('line')),
            $(this)['data']('proxy')['append']($(this)['data']('proxy')['data']('arrow')));
        }),
        this;
    },
    'checked': function(_0x24d242) {
        return this['each'](function() {
            $(this)['prop']('checked', _0x24d242);
            if ($(this)['data']('proxy')) {
                var _0x46eb12 = $(this)['data']('proxy')['find']('.check');
                _0x24d242 ? _0x46eb12['show']() : _0x46eb12['hide']();
            }
        }),
        this;
    },
    'disable': function(_0x200dcd) {
        return this['each'](function() {
            $(this)['prop']('disabled', _0x200dcd);
            var _0x138cf2 = $(this)['data']('proxy');
            if (!_0x138cf2)
                return console['log']($(this)['attr']('class') + '\x20does\x20not\x20have\x20a\x20proxy\x20to\x20disable'),
                !![];
            _0x200dcd == !![] ? (_0x138cf2['addClass']('disabled'),
            _0x138cf2['css']('opacity', 0.5)) : (_0x138cf2['removeClass']('disabled'),
            _0x138cf2['css']('opacity', 0x1)),
            !_0x138cf2['hasClass']('checkbox') && !_0x138cf2['hasClass']('radiobutton') && !_0x138cf2['hasClass']('combobox') && _0x138cf2['text']($(this)['val']());
        }),
        this;
    },
    'visible': function(_0x3f7674) {
        return this['each'](function() {
            var _0xfcfcd = 'hidden';
            _0x3f7674 && (_0xfcfcd = 'visible'),
            $(this)['css']('visibility', _0xfcfcd),
            $(this)['data']('proxy') && $(this)['data']('proxy')['css']('visibility', _0xfcfcd);
        }),
        this;
    },
    'setWidth': function(_0x587f4b) {
        return this['each'](function() {
            $(this)['css']('width', _0x587f4b + 'px'),
            resizeComponent($(this), ![]);
            var _0x22f7d8 = $(this)['data']('proxy');
            this instanceof HTMLInputElement && this['type'] == 'text' ? _0x22f7d8['css']('width', parseInt($(this)['css']('width')) + 'px') : _0x22f7d8['css']('width', parseInt($(this)['css']('width')) + 'px');
        }),
        this;
    },
    'setPosition': function(_0x3495c0, _0x5c0b35) {
        return this['each'](function() {
            $(this)['css']('left', _0x3495c0 + 'px'),
            $(this)['css']('top', _0x5c0b35 + 'px'),
            $(this)['data']('proxy') && ($(this)['data']('proxy')['css']('left', _0x3495c0 + 'px'),
            $(this)['data']('proxy')['css']('top', _0x5c0b35 + 'px'),
            $(this)['data']('proxy')['insertAfter']($(this)));
        }),
        this;
    },
    'setHTML': function(_0x24fc85) {
        return this['each'](function() {
            !$(this)['html']() && $(this)['html'](_0x24fc85);
        }),
        this;
    },
    'scrollMax': function() {
        var _0x26f562 = $(this)[0x0]['scrollHeight'] - $(this)['outerHeight']();
        return this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0 && (_0x26f562 = this['find']('*[data-overlayscrollbars-viewport]:first')[0x0]['scrollHeight'] - this['find']('*[data-overlayscrollbars-viewport]:first')['outerHeight']()),
        _0x26f562;
    },
    'scrollLeftMax': function() {
        var _0x4ac0fc = $(this)[0x0]['scrollWidth'] - $(this)['outerWidth']();
        return this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0 && (_0x4ac0fc = this['find']('*[data-overlayscrollbars-viewport]:first')[0x0]['scrollWidth'] - this['find']('*[data-overlayscrollbars-viewport]:first')['outerWidth']()),
        _0x4ac0fc;
    },
    'scrollHeight': function() {
        if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
            return this['find']('*[data-overlayscrollbars-viewport]:first')[0x0]['scrollHeight'];
        return this[0x0]['scrollHeight'];
    }
}),
function(_0x23e362) {
    var _0x4a1ebd = _0x23e362['fn']['val'];
    _0x23e362['fn']['val'] = function(_0x4f2a17) {
        if (arguments['length'] >= 0x1)
            return this['data']('proxy') && (this['hasClass']('comboboxlike') ? (this['data']('proxy')['find']('span')['detach'](),
            this['data']('proxy')['prepend']('<span>' + escapeHTML(_0x4f2a17) + '</span>')) : this['data']('proxy')['text'](_0x4f2a17)),
            _0x4a1ebd['call'](this, _0x4f2a17);
        return _0x4a1ebd['call'](this);
    }
    ;
}(jQuery),
function(_0x45c240) {
    var _0x2e2a03 = _0x45c240['fn']['focus'];
    _0x45c240['fn']['focus'] = function() {
        if (mobile)
            return this;
        return _0x45c240(this)['attr']('type') != 'radio' && (prevFocus = this),
        _0x2e2a03['call'](this);
    }
    ;
}(jQuery),
function(_0x284719) {
    var _0x2b3d0d = _0x284719['fn']['select'];
    _0x284719['fn']['select'] = function() {
        if (mobile)
            return this;
        return _0x2b3d0d['call'](this);
    }
    ;
}(jQuery),
function(_0x561a0e) {
    jQuery['fn']['extend']({
        'prependClass': function(_0x1e1f7e) {
            return this['each'](function() {
                var _0xea8144 = _0x561a0e(this)['prop']('class');
                _0x561a0e(this)['removeClass'](_0xea8144)['addClass'](_0x1e1f7e + '\x20' + _0xea8144);
            });
        }
    });
}(jQuery),
jQuery['fn']['sortElements'] = (function() {
    var _0x5173e3 = []['sort'];
    return function(_0x3e00a2, _0x34e43f) {
        _0x34e43f = _0x34e43f || function() {
            return this;
        }
        ;
        var _0x57918f = this['map'](function() {
            var _0x393f2d = _0x34e43f['call'](this)
              , _0x2cbaf8 = _0x393f2d['parentNode']
              , _0x3f3fcb = _0x2cbaf8['insertBefore'](document['createTextNode'](''), _0x393f2d['nextSibling']);
            return function() {
                if (_0x2cbaf8 === this)
                    throw new Error('You\x20can\x27t\x20sort\x20elements\x20if\x20any\x20one\x20is\x20a\x20descendant\x20of\x20another.');
                _0x2cbaf8['insertBefore'](this, _0x3f3fcb),
                _0x2cbaf8['removeChild'](_0x3f3fcb);
            }
            ;
        });
        return _0x5173e3['call'](this, _0x3e00a2)['each'](function(_0x125d12) {
            _0x57918f[_0x125d12]['call'](_0x34e43f['call'](this));
        });
    }
    ;
}());
function addScrollBars() {
    if (!fancy_scrollbars)
        return;
    var {OverlayScrollbars: _0x48086a, ScrollbarsHidingPlugin: _0x358a60, SizeObserverPlugin: _0x4c0e26, ClickScrollPlugin: _0x56cdff} = OverlayScrollbarsGlobal;
    _0x48086a['plugin']([_0x358a60, _0x4c0e26, _0x56cdff]),
    function(_0x4a4445) {
        var _0x10f1d2 = _0x4a4445['fn']['parent'];
        _0x4a4445['fn']['parent'] = function() {
            var _0x1671dd = _0x10f1d2['call'](this);
            if (_0x1671dd['is']('[data-overlayscrollbars-viewport]'))
                return _0x1671dd['parents']('.scrollpane:first');
            return _0x1671dd;
        }
        ;
    }(jQuery),
    function(_0xdbca55) {
        var _0x3c7c45 = _0xdbca55['fn']['append'];
        _0xdbca55['fn']['append'] = function(_0x142b42) {
            if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                return _0x3c7c45['call'](this['find']('*[data-overlayscrollbars-viewport]:first'), _0x142b42);
            return _0x3c7c45['call'](this, _0x142b42);
        }
        ;
    }(jQuery),
    function(_0x1ef0db) {
        var _0x3805eb = _0x1ef0db['fn']['prepend'];
        _0x1ef0db['fn']['prepend'] = function(_0x1efe2d) {
            if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                return _0x3805eb['call'](this['find']('*[data-overlayscrollbars-viewport]:first'), _0x1efe2d);
            return _0x3805eb['call'](this, _0x1efe2d);
        }
        ;
    }(jQuery),
    function(_0x50347e) {
        var _0x3d9c0c = _0x50347e['fn']['html'];
        _0x50347e['fn']['html'] = function(_0x20c53d) {
            if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0) {
                if (arguments['length'] >= 0x1)
                    return _0x3d9c0c['call'](this['find']('*[data-overlayscrollbars-viewport]:first'), _0x20c53d);
                return _0x3d9c0c['call'](this['find']('*[data-overlayscrollbars-viewport]:first'));
            }
            if (arguments['length'] >= 0x1)
                return _0x3d9c0c['call'](this, _0x20c53d);
            return _0x3d9c0c['call'](this);
        }
        ;
    }(jQuery),
    function(_0xbfcab8) {
        var _0x2dc070 = _0xbfcab8['fn']['text'];
        _0xbfcab8['fn']['text'] = function(_0xe6cc6) {
            if (arguments['length'] >= 0x1) {
                if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                    return _0x2dc070['call'](this['find']('*[data-overlayscrollbars-viewport]:first'), _0xe6cc6);
                return _0x2dc070['call'](this, _0xe6cc6);
            }
            return _0x2dc070['call'](this);
        }
        ;
    }(jQuery),
    function(_0x5b212a) {
        var _0xc5b5ce = _0x5b212a['fn']['scrollTop'];
        _0x5b212a['fn']['scrollTop'] = function(_0x3b9a4f) {
            if (arguments['length'] >= 0x1) {
                if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                    return this['data']('scrollpane')['elements']()['viewport']['scrollTo']({
                        'top': _0x3b9a4f
                    });
                return _0xc5b5ce['call'](this, _0x3b9a4f);
            }
            if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                return this['data']('scrollpane')['elements']()['viewport']['scrollTop'];
            return _0xc5b5ce['call'](this);
        }
        ;
    }(jQuery),
    function(_0x524220) {
        var _0x45fb8d = _0x524220['fn']['scrollLeft'];
        _0x524220['fn']['scrollLeft'] = function(_0x3e7e0b) {
            if (arguments['length'] >= 0x1) {
                if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                    return this['data']('scrollpane')['elements']()['viewport']['scrollLeft']({
                        'left': _0x3e7e0b
                    });
                return _0x45fb8d['call'](this, _0x3e7e0b);
            }
            if (this['hasClass']('scrollpane') && this['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0)
                return this['data']('scrollpane')['elements']()['viewport']['scrollLeft'];
            return _0x45fb8d['call'](this);
        }
        ;
    }(jQuery),
    $('#widget\x20.body')['removeClass']('scrollpane'),
    $('.scrollpane')['each'](function(_0x4dd729, _0x5e922d) {
        var _0x2f4968 = _0x48086a(_0x5e922d, {
            'scrollbars': {
                'clickScroll': !![]
            },
            'overflow': {
                'x': $(_0x5e922d)['css']('overflow-x'),
                'y': $(_0x5e922d)['css']('overflow-y')
            }
        }, {
            'scroll': function(_0x132642, _0x44d7d6) {
                $(_0x5e922d)['trigger']('scroll');
            }
        });
        $(_0x5e922d)['data']('scrollpane', _0x2f4968),
        $(_0x5e922d)['css']('overflow', 'hidden');
    });
}
(function(_0xd3434c) {
    _0xd3434c['fn']['innerText'] = function(_0x52166b) {
        if (_0x52166b) {
            if (document['body']['innerText'])
                for (var _0x29cd82 in this) {
                    this[_0x29cd82]['innerText'] = _0x52166b;
                }
            else
                for (var _0x29cd82 in this) {
                    this[_0x29cd82]['innerHTML']['replace'](/&amp;lt;br&amp;gt;/gi, 'n')['replace'](/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, '');
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
    var _0x5c4b4e = getHeight() - getScaledHeight();
    _0x5c4b4e > 0x0 ? contentScale = getScaledHeight() / swfHeight : contentScale = getScaledWidth() / swfWidth,
    zooming ? $('#content')[0x0]['style']['zoom'] = contentScale : $('#content')['css']('transform', 'scale(' + contentScale + ')'),
    marginTop = 0x0,
    _0x5c4b4e > 0x0 ? marginLeft = 0x0 : marginLeft = (window['innerWidth'] - getScaledWidth()) / 0x2,
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
    var _0x48c515 = getWidth()
      , _0x469ab6 = swfHeight / swfWidth * _0x48c515;
    return _0x469ab6;
}
function getScaledWidth() {
    var _0x15ba45 = getHeight()
      , _0x70932 = swfWidth / swfHeight * _0x15ba45;
    return _0x70932;
}
function changeInputs(_0x51f734) {
    var _0x478e48 = 'input[type=text],\x20input[type=password],\x20input[type=date]';
    _0x51f734 && (_0x478e48 = '#' + currentLabel + '\x20input[type=text],\x20#' + currentLabel + '\x20input[type=password]'),
    $(_0x478e48)['each'](function(_0xbdb31c, _0x46a2cd) {
        var _0x457d2b = $(this)
          , _0x27e469 = $('<div></div>');
        if (!changing_components)
            return _0x457d2b['data']('proxy', _0x27e469),
            !![];
        _0x27e469['addClass']('textinput'),
        _0x27e469['addClass']('proxy'),
        _0x27e469['css']('left', _0x457d2b['css']('left')),
        _0x27e469['css']('top', _0x457d2b['css']('top')),
        _0x27e469['css']('width', parseInt(_0x457d2b['css']('width')) - 0x6),
        _0x27e469['css']('height', parseInt(_0x457d2b['css']('height')) - 0x3 + 'px'),
        _0x27e469['css']('display', _0x457d2b['css']('display')),
        _0x27e469['css']('opacity', _0x457d2b['css']('opacity')),
        _0x27e469['data']('proxy', _0x457d2b),
        _0x27e469['insertAfter'](_0x457d2b),
        _0x457d2b['data']('proxy', _0x27e469),
        _0x457d2b['css']('opacity', 0x0),
        _0x457d2b['on']('input\x20blur', function() {
            _0x457d2b['attr']('type') == 'password' ? _0x457d2b['data']('proxy')['text'](toPassword(_0x457d2b['val']())) : _0x457d2b['data']('proxy')['text'](_0x457d2b['val']());
        }),
        _0x457d2b['on']('focus\x20keydown', function() {
            _0x27e469['hide'](),
            _0x27e469['css']('opacity', 0x0),
            _0x457d2b['css']('opacity', 0x1);
        }),
        _0x457d2b['on']('focusout', function() {
            _0x27e469['show'](),
            _0x27e469['css']('opacity', 0x1),
            _0x457d2b['css']('opacity', 0x0);
        }),
        _0x457d2b['prop']('disabled') == !![] && _0x27e469['css']('opacity', 0.5),
        watchComponent(_0x457d2b);
    });
}
function resizeComponents() {
    $('input[type=text],\x20input[type=password]')['each'](function(_0x4fbe11, _0x337fb9) {
        resizeComponent($(this));
    }),
    $('textarea')['each'](function(_0x59d294, _0xc8a7cb) {
        resizeComponent($(this));
    });
}
function resizeComponent(_0x4cabd8, _0x4ac8ce) {
    _0x4ac8ce !== ![] && (_0x4ac8ce = !![]);
    if (_0x4cabd8[0x0]['classList']['contains']('no_resize'))
        return;
    if (_0x4cabd8[0x0]instanceof HTMLInputElement && (_0x4cabd8[0x0]['type'] == 'text' || _0x4cabd8[0x0]['type'] == 'password')) {
        if (FIREFOX)
            PC ? (_0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0x7 + 'px'),
            _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0x5 + 'px')) : (_0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0x9 + 'px'),
            _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0x9 + 'px'));
        else {
            if (EDGE)
                _0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0x7 + 'px'),
                _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0x5 + 'px');
            else {
                if (IE)
                    _0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0x7 + 'px'),
                    _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0x5 + 'px');
                else {
                    if (CHROME)
                        _0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0x7 + 'px'),
                        PC ? _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0x4 + 'px') : _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0x6 + 'px');
                    else
                        SAFARI ? mobile ? (_0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0x8 + 'px'),
                        _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0xe + 'px')) : (_0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0x7 + 'px'),
                        _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0x7 + 'px')) : (_0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0x9 + 'px'),
                        _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0x9 + 'px'));
                }
            }
        }
    } else {
        if (_0x4cabd8[0x0]instanceof HTMLTextAreaElement) {
            if (FIREFOX)
                _0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0xb + 'px'),
                _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0xa + 'px');
            else
                IE ? (_0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0xa + 'px'),
                _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0xa + 0x10 + 'px')) : (_0x4ac8ce && _0x4cabd8['css']('height', parseInt(_0x4cabd8['css']('height')) - 0xa + 'px'),
                _0x4cabd8['css']('width', parseInt(_0x4cabd8['css']('width')) - 0xa + 'px'));
        }
    }
}
function changeSelects(_0xc2f13f) {
    var _0x1d33e7 = 'select';
    _0xc2f13f && (_0x1d33e7 = '#' + currentLabel + '\x20select'),
    $(_0x1d33e7 + ',\x20.comboboxlike')['each'](function(_0x59a80e, _0x26c5de) {
        var _0x438873 = $(this)
          , _0x585291 = $('<div\x20class=\x22combobox\x22></div>');
        if (!changing_components)
            return _0x438873['data']('proxy', _0x585291),
            !![];
        _0x585291['addClass']('proxy\x20unselectable'),
        _0x585291['css']('left', _0x438873['css']('left')),
        _0x585291['css']('top', _0x438873['css']('top')),
        _0x585291['css']('width', parseInt(_0x438873['css']('width')) - 0x7),
        _0x585291['data']('proxy', _0x438873),
        _0x585291['insertAfter'](_0x438873),
        _0x585291['text'](_0x438873['find']('option:selected')['text']());
        var _0x14518f = $('<div\x20class=\x22combobox_line\x22></div>');
        _0x585291['data']('line', _0x14518f),
        _0x585291['append'](_0x14518f);
        var _0x592dcf = $('<div\x20class=\x22combobox_arrow\x22><img\x20src=\x22' + IMAGES_START + 'svg/combobox_arrow.svg\x22\x20/></div>');
        _0x585291['data']('arrow', _0x592dcf),
        _0x585291['append'](_0x592dcf),
        _0x438873['data']('proxy', _0x585291),
        _0x438873['css']('opacity', 0x0),
        _0x585291['css']('display', _0x438873['css']('display')),
        _0x438873['change'](function() {
            _0x585291['text'](_0x438873['find']('option:selected')['text']()),
            _0x585291['append'](_0x14518f),
            _0x585291['append'](_0x592dcf);
        }),
        _0x438873['on']('mouseenter\x20focus', function() {
            _0x585291['addClass']('combobox_selected');
        }),
        _0x438873['on']('mouseout\x20focusout', function() {
            _0x585291['removeClass']('combobox_selected');
        }),
        _0x438873['prop']('disabled') == !![] && _0x585291['addClass']('disabled'),
        watchComponent(_0x438873);
    });
}
function changeButtons(_0x27792b) {
    var _0x55c8cf = 'input[type=submit],\x20input[type=file]';
    _0x27792b && (_0x55c8cf = '#' + currentLabel + '\x20input[type=submit],\x20#' + currentLabel + '\x20input[type=file]'),
    $(_0x55c8cf)['each'](function(_0x9df8fb, _0x37e7a1) {
        changeButton($(this));
    });
}
function changeButton(_0x11e2ce) {
    if (_0x11e2ce['data']('proxy'))
        return;
    _0x11e2ce['parent']()['length'] > 0x0 && _0x11e2ce['css']('width')['indexOf']('.9') >= 0x0 && parseInt(_0x11e2ce['css']('width')) > 0x64 && _0x11e2ce['css']('width', parseInt(_0x11e2ce['css']('width')) - 0x10);
    var _0x25f78e = $('<div\x20class=\x22button\x22></div>');
    if (!changing_components)
        return _0x11e2ce['data']('proxy', _0x25f78e),
        !![];
    _0x25f78e['addClass']('proxy'),
    _0x25f78e['addClass']('unselectable'),
    _0x11e2ce['hasClass']('button2') && _0x25f78e['addClass']('button2'),
    _0x25f78e['css']('left', _0x11e2ce['css']('left')),
    _0x25f78e['css']('top', _0x11e2ce['css']('top')),
    _0x25f78e['css']('right', _0x11e2ce['css']('right')),
    _0x25f78e['css']('width', parseInt(_0x11e2ce['css']('width')) - 0x2),
    _0x25f78e['css']('height', '17px'),
    _0x25f78e['css']('color', _0x11e2ce['css']('color')),
    _0x25f78e['text'](_0x11e2ce['val']()),
    _0x25f78e['data']('proxy', _0x11e2ce),
    _0x25f78e['insertAfter'](_0x11e2ce),
    _0x11e2ce['data']('proxy', _0x25f78e),
    _0x11e2ce['css']('opacity', 0x0),
    _0x25f78e['css']('display', _0x11e2ce['css']('display')),
    _0x11e2ce['on']('mouseover\x20focus', function() {
        _0x25f78e['addClass']('button_selected');
    }),
    _0x11e2ce['on']('mouseout\x20focusout', function() {
        _0x25f78e['removeClass']('button_selected'),
        _0x25f78e['removeClass']('button_down');
    }),
    _0x11e2ce['on']('mousedown', function() {
        _0x25f78e['addClass']('button_down');
    }),
    _0x11e2ce['on']('mouseup', function() {
        _0x25f78e['removeClass']('button_down');
    }),
    _0x11e2ce['prop']('disabled') == !![] && _0x25f78e['addClass']('disabled'),
    watchComponent(_0x11e2ce);
}
function changeCheckboxes(_0x136346) {
    var _0x188434 = 'input[type=checkbox]';
    _0x136346 && (_0x188434 = '#' + currentLabel + '\x20input[type=checkbox]'),
    $(_0x188434)['each'](function(_0x58b57a, _0x4e7ec8) {
        var _0x5a2232 = $(this)
          , _0x1ab31f = $('<div\x20class=\x22checkbox\x22></div>');
        if (!changing_components)
            return _0x5a2232['data']('proxy', _0x1ab31f),
            !![];
        _0x1ab31f['data']('proxy', _0x5a2232),
        _0x1ab31f['css']('left', parseInt(_0x5a2232['css']('left')) + 0x2),
        _0x1ab31f['css']('top', parseInt(_0x5a2232['css']('top')) + 0x2),
        _0x1ab31f['css']('display', _0x5a2232['css']('display'));
        var _0x289824 = $('<img\x20class=\x22check\x22\x20src=\x22' + IMAGES_START + 'svg/check.svg\x22>');
        _0x1ab31f['append'](_0x289824),
        _0x1ab31f['insertAfter'](_0x5a2232),
        _0x5a2232['data']('proxy', _0x1ab31f),
        _0x5a2232['css']('opacity', 0x0),
        _0x5a2232['on']('mouseenter\x20focus', function() {
            _0x1ab31f['addClass']('checkbox_selected');
        }),
        _0x5a2232['on']('mouseout\x20focusout', function() {
            _0x1ab31f['removeClass']('checkbox_selected'),
            _0x1ab31f['removeClass']('checkbox_down');
        }),
        _0x5a2232['on']('mousedown', function() {
            _0x1ab31f['addClass']('checkbox_down');
        }),
        _0x5a2232['on']('mouseup', function() {
            _0x1ab31f['removeClass']('checkbox_down');
        }),
        _0x5a2232['change'](function() {
            _0x5a2232['is'](':checked') ? _0x289824['show']() : _0x289824['hide']();
        }),
        _0x5a2232['is'](':checked') ? _0x289824['show']() : _0x289824['hide'](),
        _0x5a2232['prop']('disabled') == !![] && _0x1ab31f['addClass']('disabled'),
        watchComponent(_0x5a2232);
    });
}
function changeRadios(_0x441652) {
    var _0x226608 = 'input[type=radio]';
    _0x441652 && (_0x226608 = '#' + currentLabel + '\x20input[type=radio]'),
    $(_0x226608)['each'](function(_0x5f4d38, _0x2ea737) {
        var _0x97c94a = $(this)
          , _0x4811b6 = $('<div\x20class=\x22radiobutton\x22></div>');
        if (!changing_components)
            return _0x97c94a['data']('proxy', _0x4811b6),
            !![];
        _0x4811b6['data']('proxy', _0x97c94a),
        _0x4811b6['css']('left', parseInt(_0x97c94a['css']('left')) + 0x2),
        _0x4811b6['css']('top', parseInt(_0x97c94a['css']('top')) + 0x2),
        _0x4811b6['attr']('name', _0x97c94a['attr']('name')),
        _0x4811b6['attr']('id', 'radiobutton' + (_0x5f4d38 + 0x1));
        var _0x52eddb = $('<img\x20class=\x22check\x22\x20src=\x22' + IMAGES_START + 'svg/radio.svg\x22>');
        _0x4811b6['append'](_0x52eddb),
        _0x4811b6['insertAfter'](_0x97c94a),
        _0x97c94a['data']('proxy', _0x4811b6),
        _0x97c94a['css']('opacity', 0x0),
        _0x97c94a['on']('mouseenter\x20focus', function() {
            _0x4811b6['addClass']('radiobutton_selected');
        }),
        _0x97c94a['on']('mouseout\x20focusout', function() {
            _0x4811b6['removeClass']('radiobutton_selected'),
            _0x4811b6['removeClass']('radiobutton_down');
        }),
        _0x97c94a['on']('mousedown', function() {
            _0x4811b6['addClass']('radiobutton_down');
        }),
        _0x97c94a['on']('mouseup', function() {
            _0x4811b6['removeClass']('radiobutton_down');
        }),
        _0x97c94a['change'](function() {
            _0x97c94a['is'](':checked') ? (_0x52eddb['show'](),
            _0x97c94a['attr']('checked', 'checked')) : _0x52eddb['hide'](),
            $('input[type=radio][name=\x22' + _0x97c94a['attr']('name') + '\x22]')['not'](_0x97c94a)['removeAttr']('checked'),
            $('.radiobutton[name=' + _0x4811b6['attr']('name') + ']')['each'](function() {
                $(this)['attr']('id') != _0x4811b6['attr']('id') && $(this)['find']('.check')['hide']();
            });
        }),
        _0x97c94a['is'](':checked') ? _0x52eddb['show']() : _0x52eddb['hide'](),
        _0x97c94a['prop']('disabled') == !![] && _0x4811b6['addClass']('disabled'),
        watchComponent(_0x97c94a);
    });
}
function addButton(_0x79ac37, _0x132513) {
    var _0x3ad646 = _0x79ac37['attr']('class');
    !_0x3ad646 ? _0x3ad646 = _0x79ac37['attr']('id') : (_0x3ad646['indexOf']('\x20') >= 0x0 && (_0x3ad646 = _0x3ad646['substring'](0x0, _0x3ad646['indexOf']('\x20'))),
    _0x3ad646['indexOf']('btn') < 0x0 && (_0x3ad646 = _0x79ac37['attr']('id')));
    var _0x513948 = _0x79ac37['find']('img')['last']();
    _0x79ac37['css']('cursor', 'pointer');
    var _0x4bef1d = IMAGES_START + 'svg/'
      , _0x8638fc = '.svg'
      , _0x58c43f = _0x513948['attr']('src');
    _0x513948['attr']('data-src') && (_0x58c43f = _0x513948['attr']('data-src')),
    _0x513948['length'] > 0x0 && _0x58c43f['indexOf']('.svg') < 0x0 && (_0x4bef1d = IMAGES_START,
    _0x8638fc = _0x58c43f['substring'](_0x58c43f['length'] - 0x4, _0x58c43f['length'])),
    _0x513948['length'] > 0x0 && _0x58c43f['indexOf']('_up.') >= 0x0 && (_0x79ac37['on']('touchend\x20mouseout', function() {
        $(this)['find']('img')['last']()['attr']('src', _0x4bef1d + _0x3ad646 + '_up' + _0x8638fc);
    }),
    _0x79ac37['on']('touchstart\x20mouseenter', function() {
        _0x513948['attr']('src', _0x4bef1d + _0x3ad646 + '_over' + _0x8638fc);
    }),
    mobile ? _0x79ac37['on']('touchend\x20mouseup', function() {
        _0x513948['attr']('src', _0x4bef1d + _0x3ad646 + '_up' + _0x8638fc);
    }) : _0x79ac37['on']('touchend\x20mouseup', function() {
        _0x513948['attr']('src', _0x4bef1d + _0x3ad646 + '_over' + _0x8638fc);
    }),
    _0x79ac37['on']('touchstart\x20mousedown', function(_0x25ef99) {
        _0x513948['attr']('src', _0x4bef1d + _0x3ad646 + '_down' + _0x8638fc);
    })),
    _0x132513 && _0x79ac37['click'](_0x132513);
}
function removeButton(_0x77060) {
    _0x77060['off']('mouseout'),
    _0x77060['off']('mouseenter'),
    _0x77060['off']('mouseup'),
    _0x77060['off']('mousedown'),
    _0x77060['off']('click');
}
function toPassword(_0x419370) {
    var _0x22def5 = '';
    for (var _0x83d64b = 0x0; _0x83d64b < _0x419370['length']; _0x83d64b++) {
        _0x22def5 += '●';
    }
    return _0x22def5;
}
function CardFront() {
    var _0x2d4bbb = $('<div\x20class=\x22cardfront\x20unselectable\x22></div>')
      , _0x3ff368 = $('<div\x20class=\x22cardfront_content\x22></div>');
    _0x2d4bbb['append'](_0x3ff368);
    var _0x15d525, _0x8c64ed, _0x29846b, _0x1d2c77, _0x1f9160, _0x4484eb, _0x2fa23f, _0x1880b6;
    _0x2d4bbb['extend'](_0x2d4bbb, {
        'reset': function() {
            _0x2d4bbb['removeData'](),
            _0x2d4bbb['clearLimit']();
        },
        'reinitialize': function(_0x3defc0) {
            if (!_0x3defc0)
                return;
            (!_0x2d4bbb['data']('initialized') || _0x2d4bbb['data']('id') != _0x3defc0['id']) && _0x2d4bbb['initializeFromData'](_0x3defc0);
        },
        'initializeFromData': function(_0x3af39e) {
            !_0x3af39e['passcode'] && (_0x3af39e['passcode'] = _0x3af39e['serial_number']),
            !_0x3af39e['scale'] && _0x3af39e['scale_left'] && (_0x3af39e['scale'] = ~~_0x3af39e['scale_left']),
            _0x2d4bbb['removeData'](),
            _0x2d4bbb['data'](_0x3af39e),
            _0x2d4bbb['initialize'](_0x3af39e['id'], _0x3af39e['name'], _0x3af39e['treated_as'], _0x3af39e['effect'], _0x3af39e['pendulum_effect'], _0x3af39e['card_type'], _0x3af39e['monster_color'], _0x3af39e['is_effect'], _0x3af39e['type'], _0x3af39e['attribute'], _0x3af39e['level'], _0x3af39e['ability'], _0x3af39e['flip'], _0x3af39e['pendulum'], _0x3af39e['scale'], _0x3af39e['arrows'], _0x3af39e['atk'], _0x3af39e['def'], _0x3af39e['tcg_limit'], _0x3af39e['ocg_limit'], _0x3af39e['passcode'], _0x3af39e['tcg'], _0x3af39e['ocg'], _0x3af39e['pic'], _0x3af39e['custom'], _0x3af39e['username'], _0x3af39e['rush']);
        },
        'initializeAndLimit': function(_0x53cea8, _0x547d04) {
            _0x2d4bbb['initializeFromData'](_0x53cea8),
            _0x2d4bbb['setLimit'](_0x547d04);
        },
        'initialize': function(_0x2c0720, _0x5a7756, _0x77e6c7, _0x3b0116, _0x59baef, _0x2f31ee, _0x2a4a54, _0x17953d, _0x25257c, _0x1c9428, _0x10f894, _0x3f6579, _0xfa27c3, _0x35bcc4, _0x46be4f, _0x43306e, _0x36b0f9, _0x588e3a, _0x13aebf, _0x1238fc, _0x4895c8, _0x127686, _0x456152, _0x54b1a1, _0x5c735a, _0x4f064d, _0x41a52d) {
            !_0x2c0720 && (_0x2c0720 = 0x0);
            !_0x5a7756 && (_0x5a7756 = '');
            !_0x77e6c7 && (_0x77e6c7 = '');
            !_0x3b0116 && (_0x3b0116 = '');
            !_0x59baef && (_0x59baef = '');
            !_0x2f31ee && (_0x2f31ee = '');
            !_0x2a4a54 && (_0x2a4a54 = '');
            !_0x17953d && (_0x17953d = 0x0);
            !_0x25257c && (_0x25257c = '');
            !_0x1c9428 && (_0x1c9428 = '');
            !_0x10f894 && (_0x10f894 = 0x0);
            !_0x3f6579 && (_0x3f6579 = '');
            !_0xfa27c3 && (_0xfa27c3 = 0x0);
            !_0x35bcc4 && (_0x35bcc4 = 0x0);
            !_0x46be4f && (_0x46be4f = 0x0);
            !_0x43306e && (_0x43306e = '');
            _0x36b0f9 == null && (_0x36b0f9 = '');
            _0x588e3a == null && (_0x588e3a = '');
            !_0x13aebf && (_0x13aebf = 0x0);
            !_0x1238fc && (_0x1238fc = 0x0);
            !_0x4895c8 && (_0x4895c8 = '0');
            !_0x127686 && (_0x127686 = 0x0);
            !_0x456152 && (_0x456152 = 0x0);
            !_0x54b1a1 && (_0x54b1a1 = '');
            !_0x5c735a && (_0x5c735a = 0x0);
            !_0x4f064d && (_0x4f064d = '');
            !_0x41a52d && (_0x41a52d = 0x0);
            (_0x35bcc4 || _0x2a4a54 == 'Link') && (_0x41a52d = 0x0);
            _0x4a3931['style']['display'] = 'block',
            _0xcb059['style']['display'] = 'none',
            _0xf8fc99['style']['display'] = 'none',
            _0x69618e['style']['display'] = 'none',
            _0x4a3931['style']['left'] = '67px',
            _0x4a3931['style']['top'] = '48px',
            _0x4114e8['style']['left'] = '680px',
            _0x4114e8['style']['top'] = '56px',
            _0x4114e8['style']['width'] = '75px',
            _0x4114e8['style']['height'] = '77px',
            _0x422dff['style']['left'] = '671px',
            _0x422dff['style']['top'] = '151px',
            _0x422dff['style']['width'] = '42px',
            _0x422dff['style']['height'] = '43px',
            _0x2d4bbb['find']('.level')['hide'](),
            _0x2d4bbb['find']('.rank')['hide'](),
            _0x28cd08['style']['display'] = 'none',
            _0x422dff['style']['display'] = 'none',
            _0x2d4bbb['find']('.black_arrow')['hide'](),
            _0x2d4bbb['find']('.red_arrow')['hide'](),
            _0x4c71e6['style']['display'] = 'none',
            _0x4496db['style']['display'] = 'none',
            _0x4114e8['style']['display'] = 'none',
            _0x5dae34['style']['display'] = 'none',
            _0x494d6e['style']['display'] = 'none',
            _0x1b4c27['style']['display'] = 'none',
            _0x41eb02['style']['display'] = 'none',
            _0x452e43['style']['display'] = 'none',
            _0x115185['style']['color'] = 'black',
            _0x115185['style']['display'] = 'none',
            _0x115185['style']['left'] = '37px',
            _0x115185['style']['top'] = '1124px',
            _0x5a883d['style']['left'] = '100px',
            _0x5a883d['style']['top'] = '217px',
            _0x5a883d['style']['width'] = '614px',
            _0x5a883d['style']['height'] = '614px',
            _0x4496db['style']['top'] = '884px',
            _0x4d3a67['style']['display'] = 'none',
            _0x45ea1c['style']['display'] = 'none',
            _0x375afa['style']['fontStyle'] = 'normal',
            _0x285b78['style']['display'] = 'none',
            _0x2d4bbb['data']('is_link', ![]);
            _0x11a7d6 && (_0x11a7d6['style']['display'] = 'none');
            _0x1d236f['style']['display'] = 'none',
            _0x3f96e4['style']['display'] = 'none',
            _0x36fd8b['style']['display'] = 'none',
            _0x43cbad['style']['display'] = 'none',
            _0x2e9706['style']['display'] = 'none',
            _0x553d50['style']['display'] = 'none',
            _0x59083a['style']['display'] = 'none',
            _0xf8fc99['style']['display'] = 'none',
            this['pendulum'] = _0x35bcc4,
            _0x4a3931['innerHTML'] = correctText(_0x5a7756),
            _0x375afa['innerHTML'] = correctEffect(escapeHTML(_0x3b0116), _0x41a52d);
            if (_0x2f31ee == 'Spell' || _0x2f31ee == 'Trap') {
                _0x4a3931['style']['color'] = 'white',
                _0x4114e8['setAttribute']('src', CARD_START + _0x2f31ee['toLowerCase']() + '_attribute.png'),
                _0x4114e8['style']['display'] = 'block',
                _0x4e4b7a['setAttribute']('src', CARD_START + _0x2f31ee['toLowerCase']() + '_front2.jpg');
                var _0x1e5f73 = '<font\x20class=\x22spell_type_large\x22>[</font>\x20<font\x20class=\x22spell_type_medium\x22>' + _0x2f31ee['substring'](0x0, 0x1) + '</font>' + _0x2f31ee['substring'](0x1, _0x2f31ee['length'])['toUpperCase']() + '\x20<font\x20class=\x22spell_type_medium\x22>C</font>ARD';
                !_0x25257c && (_0x25257c = 'Normal'),
                _0x25257c != 'Normal' && (_0x1e5f73 += '<font\x20style=\x22font-size:\x2026px;\x22>&nbsp;&nbsp;&nbsp;</font>',
                SAFARI && (_0x1e5f73 += '&nbsp;&nbsp;')),
                _0x1e5f73 += '</font>',
                _0x1e5f73 += '\x20<font\x20class=\x22spell_type_large\x22>]</font>',
                _0x28cd08['innerHTML'] = _0x1e5f73,
                _0x28cd08['style']['display'] = 'block',
                _0x25257c != 'Normal' && (_0x422dff['setAttribute']('src', CARD_START + _0x25257c['toLowerCase']() + '.png'),
                _0x422dff['style']['display'] = 'block'),
                _0x375afa['style']['top'] = '890px',
                _0x375afa['style']['height'] = '226px';
            } else {
                if (_0x2f31ee == 'Monster') {
                    _0x2a4a54 == 'Normal' && (_0x375afa['style']['fontStyle'] = 'italic');
                    _0x4a3931['style']['color'] = 'white',
                    _0x375afa['style']['top'] = '919px',
                    _0x375afa['style']['height'] = '154px';
                    !_0x2a4a54 && (_0x2a4a54 = 'Effect');
                    _0x4e4b7a['setAttribute']('src', CARD_START + _0x2a4a54['toLowerCase']() + '_front2.jpg');
                    if (_0x25257c) {
                        var _0x45c4cc = '';
                        _0x45c4cc = '<font\x20class=\x22type_large\x22>[</font>\x20' + getType(_0x25257c);
                        _0xfa27c3 == 0x1 && (_0x45c4cc += '\x20/\x20' + getType('Flip'));
                        _0x3f6579 && (_0x45c4cc += '\x20/\x20' + getType(_0x3f6579));
                        (_0x2a4a54 == 'Ritual' || _0x2a4a54 == 'Fusion' || _0x2a4a54 == 'Synchro' || _0x2a4a54 == 'Xyz' || _0x2a4a54 == 'Link') && (_0x45c4cc += '\x20/\x20' + getType(_0x2a4a54));
                        _0x35bcc4 == 0x1 && (_0x45c4cc += '\x20/\x20' + getType('Pendulum'));
                        if (_0x17953d == 0x1 && _0x2a4a54 == 'Normal')
                            _0x45c4cc += '\x20/\x20' + getType('Normal');
                        else
                            _0x17953d == 0x1 && _0x2a4a54 != 'Token' && (_0x45c4cc += '\x20/\x20' + getType('Effect'));
                        _0x2a4a54 == 'Token' && _0x25257c != '' && (_0x45c4cc += '\x20/\x20' + getType('Token')),
                        _0x45c4cc += '\x20<font\x20class=\x22type_large\x22>]</font>',
                        _0x4496db['innerHTML'] = _0x45c4cc,
                        _0x4496db['style']['display'] = 'block',
                        setText(_0x4496db);
                    }
                    _0x2a4a54 != 'Token' ? (_0x2a4a54 != 'Link' && (_0x4c71e6['style']['display'] = 'block',
                    _0x1b4c27['style']['display'] = 'block',
                    _0x41eb02['style']['display'] = 'block',
                    _0x41eb02['textContent'] = _0x588e3a),
                    _0x5dae34['style']['display'] = 'block',
                    _0x494d6e['style']['display'] = 'block',
                    _0x494d6e['textContent'] = _0x36b0f9) : (_0x2d4bbb['data']('atk', '0'),
                    _0x2d4bbb['data']('def', '0'));
                    if (_0x2a4a54 != 'Xyz' && _0x2a4a54 != 'Link') {
                        _0x4a3931['style']['color'] = 'black';
                        for (_0x538cfe = 0x0; _0x538cfe < _0x10f894; _0x538cfe++) {
                            if (_0x538cfe >= 0xd)
                                break;
                            _0x2d4bbb['find']('.level')['eq'](_0x538cfe)['length'] == 0x0 && _0x2d4bbb['addLevel'](_0x538cfe),
                            _0x2d4bbb['find']('.level')['eq'](_0x538cfe)[0x0]['style']['display'] = 'block';
                        }
                        _0x10f894 >= 0xd && !_0x2d4bbb['hasClass']('level13') && (_0x2d4bbb['addClass']('level13'),
                        _0x2d4bbb['find']('.level')['each'](function(_0x3cf705, _0x400788) {
                            $(this)['css']('left', 0x2a5 - 0x36 * _0x3cf705 + 0x1b);
                        })),
                        _0x10f894 < 0xd && _0x2d4bbb['hasClass']('level13') && (_0x2d4bbb['removeClass']('level13'),
                        _0x2d4bbb['find']('.level')['each'](function(_0x340f3b, _0x258878) {
                            $(this)['css']('left', 0x2a5 - 0x36 * _0x340f3b);
                        }));
                    } else {
                        if (_0x2a4a54 == 'Xyz') {
                            _0x115185['style']['color'] = 'white';
                            for (_0x538cfe = 0x0; _0x538cfe < _0x10f894; _0x538cfe++) {
                                if (_0x538cfe >= 0xd)
                                    break;
                                _0x2d4bbb['find']('.rank')['eq'](_0x538cfe)['length'] == 0x0 && _0x2d4bbb['addRank'](_0x538cfe),
                                _0x2d4bbb['find']('.rank')['eq'](_0x538cfe)[0x0]['style']['display'] = 'block';
                            }
                            _0x10f894 >= 0xd && !_0x2d4bbb['hasClass']('rank13') && (_0x2d4bbb['addClass']('rank13'),
                            _0x2d4bbb['find']('.rank')['each'](function(_0x5a76bc, _0x1f8f90) {
                                $(this)['css']('left', 0x53 + 0x36 * _0x5a76bc - 0x1b);
                            })),
                            _0x10f894 < 0xd && _0x2d4bbb['hasClass']('rank13') && (_0x2d4bbb['removeClass']('rank13'),
                            _0x2d4bbb['find']('.rank')['each'](function(_0x73be7f, _0x1ce371) {
                                $(this)['css']('left', 0x53 + 0x36 * _0x73be7f);
                            }));
                        }
                    }
                    if (_0x2a4a54 == 'Link') {
                        _0x2d4bbb['data']('is_link', !![]);
                        if (_0x43306e['length'] == 0x8) {
                            if (_0x2d4bbb['find']('.black_arrow')['length'] == 0x0) {
                                for (var _0x538cfe = 0x0; _0x538cfe < 0x8; _0x538cfe++) {
                                    _0x2d4bbb['addBlackArrow'](_0x538cfe);
                                }
                                for (_0x538cfe = 0x0; _0x538cfe < 0x8; _0x538cfe++) {
                                    _0x2d4bbb['addRedArrow'](_0x538cfe);
                                }
                            }
                            _0x2d4bbb['find']('.black_arrow')['show']();
                            for (_0x538cfe = 0x0; _0x538cfe < 0x8; _0x538cfe++) {
                                _0x43306e['substring'](_0x538cfe, _0x538cfe + 0x1) == '1' && _0x2d4bbb['find']('.red_arrow')['eq'](_0x538cfe)['show']();
                            }
                        }
                        _0x10f894 > 0x0 && (_0x452e43['textContent'] = _0x10f894,
                        _0x452e43['style']['display'] = 'block');
                    }
                    _0x35bcc4 == 0x1 && (_0x115185['style']['color'] = 'black',
                    _0x69618e['style']['display'] = 'block',
                    _0x285b78['innerHTML'] = escapeHTML(_0x59baef),
                    _0x285b78['style']['display'] = 'block',
                    _0x4d3a67['textContent'] = _0x46be4f,
                    _0x4d3a67['style']['display'] = 'block',
                    _0x45ea1c['textContent'] = _0x46be4f,
                    _0x45ea1c['style']['display'] = 'block',
                    _0x2d4bbb['setPendulumText']()),
                    _0x1c9428 && (_0x4114e8['setAttribute']('src', CARD_START + _0x1c9428['toLowerCase']() + '_attribute.png'),
                    _0x4114e8['style']['display'] = 'block');
                } else
                    _0x2f31ee == 'Skill' ? (_0x4e4b7a['setAttribute']('src', CARD_START + 'skill_front2.jpg'),
                    _0x4a3931['style']['display'] = 'none',
                    _0xcb059['style']['display'] = 'block',
                    _0xcb059['textContent'] = _0x5a7756,
                    _0x25257c['includes']('\x20(') && (_0x25257c = _0x25257c['substring'](0x0, _0x25257c['indexOf']('\x20('))),
                    _0x45c4cc = '[\x20' + getType(_0x25257c) + '\x20/\x20' + getType('Skill'),
                    _0x3f6579 && (_0x45c4cc += '\x20/\x20' + getType(_0x3f6579)),
                    _0x45c4cc += '\x20]',
                    _0x4496db['innerHTML'] = _0x45c4cc,
                    _0x4496db['style']['display'] = 'block',
                    setText(_0x4496db),
                    _0x375afa['style']['top'] = '919px',
                    _0x375afa['style']['height'] = '154px') : (_0x4e4b7a['setAttribute']('src', CARD_START + 'effect_front2.jpg'),
                    _0x4a3931['style']['color'] = 'black');
            }
            _0x2d4bbb['setCardName']();
            if (_0x4895c8 != '0') {
                while (_0x4895c8['length'] < 0x8) {
                    _0x4895c8 = '0' + _0x4895c8;
                }
                _0x115185['textContent'] = _0x4895c8,
                _0x115185['style']['display'] = 'block';
            }
            switch (_0x4895c8) {
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
                _0x115185['textContent'] = '';
                break;
            }
            _0x4f064d && (_0x115185['textContent'] = _0x4f064d,
            _0x115185['style']['display'] = 'block');
            ~~_0x54b1a1 || _0x2f31ee == 'Skill' || _0x54b1a1 && _0x54b1a1['indexOf']('http') == 0x0 || _0x54b1a1['indexOf']('.gif') >= 0x0 ? _0x2d4bbb['loadImage']() : _0x2d4bbb['removeImage']();
            if (_0x41a52d) {
                _0x41a52d > 0x1 && (_0x59083a['style']['display'] = 'block');
                _0x4a3931['style']['color'] = 'black',
                _0x4a3931['style']['left'] = '42px',
                _0x4a3931['style']['top'] = '31px',
                _0x553d50['style']['color'] = 'black',
                _0xf8fc99['style']['display'] = 'block';
                var _0x4e31a4 = 'effect';
                _0x2f31ee == 'Monster' ? (_0x4e31a4 = _0x2a4a54['toLowerCase'](),
                _0x36fd8b['style']['display'] = 'block',
                _0x43cbad['style']['display'] = 'block',
                _0x43cbad['textContent'] = _0x36b0f9,
                _0x2e9706['style']['display'] = 'block',
                _0x2e9706['textContent'] = _0x588e3a,
                _0x2a4a54 == 'Xyz' ? (_0x1d236f['setAttribute']('src', CARD_START + 'rush_rank.png'),
                _0x3f96e4['style']['color'] = '3px\x20#2f3334',
                _0x3f96e4['style']['webkitTextStroke'] = '3px\x20#2f3334',
                _0x4a3931['style']['color'] = 'white',
                _0x553d50['style']['color'] = 'white') : (_0x1d236f['setAttribute']('src', CARD_START + 'rush_level.png'),
                _0x3f96e4['style']['color'] = '3px\x20#de3f2e',
                _0x3f96e4['style']['webkitTextStroke'] = '3px\x20#de3f2e'),
                _0x1d236f['style']['display'] = 'block',
                _0x3f96e4['style']['display'] = 'block',
                _0x3f96e4['textContent'] = _0x10f894,
                _0x2d4bbb['find']('.level')['hide'](),
                _0x2d4bbb['find']('.rank')['hide'](),
                _0x553d50['innerHTML'] = _0x4496db['innerHTML']) : (_0x4e31a4 = _0x2f31ee['toLowerCase'](),
                _0x553d50['innerHTML'] = _0x28cd08['innerHTML']['replace']('&nbsp;&nbsp;', '&nbsp;'),
                _0x28cd08['style']['display'] = 'none',
                _0x2f31ee == 'Trap' ? (_0x422dff['style']['left'] = '239px',
                _0x553d50['style']['letterSpacing'] = '0px') : (_0x422dff['style']['left'] = '245px',
                _0x553d50['style']['letterSpacing'] = '0.25px'),
                _0x422dff['style']['top'] = '861px',
                _0x422dff['style']['width'] = '30px',
                _0x422dff['style']['height'] = '30px'),
                _0xf8fc99['setAttribute']('src', CARD_START + 'rush_' + _0x4e31a4 + '_front.png'),
                _0x553d50['style']['display'] = 'block',
                _0x5a883d['style']['left'] = '43px',
                _0x5a883d['style']['top'] = '118px',
                _0x5a883d['style']['width'] = '726px',
                _0x5a883d['style']['height'] = '733px',
                _0x4114e8['style']['left'] = '671px',
                _0x4114e8['style']['top'] = '46px',
                _0x4114e8['style']['width'] = '97px',
                _0x4114e8['style']['height'] = '96px',
                _0x4496db['style']['display'] = 'none',
                _0x375afa['style']['top'] = '903px',
                _0x375afa['style']['height'] = '195px',
                _0x5dae34['style']['display'] = 'none',
                _0x494d6e['style']['display'] = 'none',
                _0x1b4c27['style']['display'] = 'none',
                _0x41eb02['style']['display'] = 'none',
                _0x4c71e6['style']['display'] = 'none',
                _0x115185['style']['color'] = 'white',
                _0x115185['style']['left'] = '68px',
                _0x115185['style']['top'] = '1109px';
            }
            setCardText(_0x375afa),
            _0x2d4bbb['data']('initialized', !![]);
        },
        'loadImage': function() {
            var _0x1a0ca2 = _0x2d4bbb['data']('id')
              , _0x56f231 = _0x2d4bbb['data']('pic')
              , _0x75d10d = _0x2d4bbb['data']('custom')
              , _0x1e4791 = _0x2d4bbb['data']('monster_color')
              , _0x2e228f = _0x2d4bbb['data']('rush');
            if (_0x56f231 == '0')
                return;
            var _0x388738 = CARD_IMAGES_START + _0x1a0ca2 + '.jpg';
            _0x75d10d > 0x0 && (_0x388738 = CUSTOM_PICS_START + getCustomFolder(_0x1a0ca2) + '/' + _0x1a0ca2 + '.jpg');
            if (_0x1e4791 == 'Token')
                _0x388738 = _0x56f231;
            else {
                if (_0x56f231['indexOf']('http') == 0x0)
                    _0x388738 = _0x56f231;
                else
                    _0x56f231 != '1' && (_0x388738 += '?version=' + _0x56f231);
            }
            _0x2d4bbb['find']('.pic')['attr']('src', IMAGES_START + 'loading.gif'),
            _0x2d4bbb['find']('.pic')['attr']('src', _0x388738),
            _0x5a883d['onload'] = null,
            _0x5a883d['complete'] ? this['resizePendulumPic']() : _0x5a883d['onload'] = this['resizePendulumPic'];
        },
        'removeImage': function() {
            _0x2d4bbb['find']('.pic')['attr']('src', IMAGES_START + 'black.jpg');
        },
        'setPendulumText': function() {
            _0x5a883d['style']['left'] = '53px',
            _0x5a883d['style']['top'] = '212px',
            _0x5a883d['style']['width'] = '707px',
            _0x5a883d['style']['height'] = '569px',
            _0x4d3a67['style']['top'] = '820px',
            _0x45ea1c['style']['top'] = '820px',
            _0x285b78['style']['top'] = '792px',
            _0x285b78['style']['height'] = '93px',
            _0x285b78['style']['fontSize'] = '25px',
            _0x285b78['style']['lineHeight'] = '26px';
            !_0x26b74d && (_0x26b74d = document['createElement']('img'),
            _0x26b74d['setAttribute']('src', CARD_START + 'pendulum_front_small2.png'),
            _0x26b74d['setAttribute']('width', '758'),
            _0x26b74d['setAttribute']('height', '1160'),
            _0x69618e['appendChild'](_0x26b74d));
            _0x26b74d['setAttribute']('src', CARD_START + 'pendulum_front_small2.png');
            _0x285b78['scrollHeight'] > _0x285b78['clientHeight'] && (_0x5a883d['style']['height'] = '528px',
            _0x4d3a67['style']['top'] = '802px',
            _0x45ea1c['style']['top'] = '802px',
            _0x285b78['style']['top'] = '752px',
            _0x285b78['style']['height'] = '126px',
            _0x285b78['style']['fontSize'] = '22px',
            _0x285b78['style']['lineHeight'] = '25px',
            _0x26b74d['setAttribute']('src', CARD_START + 'pendulum_front_medium2.png'));
            _0x285b78['scrollHeight'] > _0x285b78['clientHeight'] && (_0x4496db['style']['top'] = '919px',
            _0x375afa['style']['top'] = '952px',
            _0x375afa['style']['height'] = '122px',
            _0x4d3a67['style']['top'] = '815px',
            _0x45ea1c['style']['top'] = '815px',
            _0x285b78['style']['height'] = '153px',
            _0x285b78['style']['fontSize'] = '22.5px',
            _0x285b78['style']['lineHeight'] = '22px',
            _0x26b74d['setAttribute']('src', CARD_START + 'pendulum_front_large2.png'));
            while (_0x285b78['scrollHeight'] > _0x285b78['clientHeight']) {
                var _0x3e3e62 = parseInt(_0x285b78['style']['fontSize']);
                _0x285b78['style']['lineHeight'] = _0x3e3e62 + 0x1 + 'px',
                _0x285b78['style']['fontSize'] = --_0x3e3e62 + 'px';
            }
        },
        'resizePendulumPic': function() {
            this['pendulum'] && (_0x5a883d['naturalHeight'] > _0x5a883d['naturalWidth'] && _0x5a883d['naturalHeight'] / _0x5a883d['naturalWidth'] < 1.3295 && (_0x5a883d['style']['height'] = _0x5a883d['naturalHeight'] / _0x5a883d['naturalWidth'] * 0x2c3 + 'px'));
            if (viewing_card) {
                if (_0x5a883d['currentSrc']['indexOf']('loading.gif') >= 0x0)
                    return;
                $('.dimensions_txt')['text'](_0x5a883d['naturalWidth'] + '\x20x\x20' + _0x5a883d['naturalHeight']);
            }
        },
        'copyCard': function(_0x485a61) {
            _0x2d4bbb['initializeFromData'](_0x485a61['data']());
        },
        'setLimit': function(_0x2727ba) {
            _0x2d4bbb['clearLimit']();
            _0x2d4bbb['data']('custom') && (!_0x2fa23f && (_0x2fa23f = document['createElement']('img'),
            _0x2fa23f['className'] = 'custom',
            _0x2fa23f['setAttribute']('src', IMAGES_START + 'svg/custom.svg'),
            $(_0x2fa23f)['insertAfter'](_0x3ff368)),
            _0x2fa23f['style']['display'] = 'block');
            var _0x414afe = _0x2727ba ? _0x2d4bbb['data']('ocg_limit') : _0x2d4bbb['data']('tcg_limit');
            switch (_0x414afe) {
            case 0x0:
                !_0x15d525 && (_0x15d525 = document['createElement']('img'),
                _0x15d525['className'] = 'forbidden',
                _0x15d525['setAttribute']('src', IMAGES_START + 'svg/forbidden.svg'),
                _0x2d4bbb[0x0]['appendChild'](_0x15d525));
                _0x15d525['style']['display'] = 'block';
                break;
            case 0x1:
                !_0x8c64ed && (_0x8c64ed = document['createElement']('img'),
                _0x8c64ed['className'] = 'limited',
                _0x8c64ed['setAttribute']('src', IMAGES_START + 'svg/limited.svg'),
                _0x2d4bbb[0x0]['appendChild'](_0x8c64ed));
                _0x8c64ed['style']['display'] = 'block';
                break;
            case 0x2:
                !_0x29846b && (_0x29846b = document['createElement']('img'),
                _0x29846b['className'] = 'semi_limited',
                _0x29846b['setAttribute']('src', IMAGES_START + 'svg/semi_limited.svg'),
                _0x2d4bbb[0x0]['appendChild'](_0x29846b));
                _0x29846b['style']['display'] = 'block';
                break;
            }
            _0x2d4bbb['data']('tcg') && !_0x2d4bbb['data']('ocg') && (!_0x1d2c77 && (_0x1d2c77 = document['createElement']('img'),
            _0x1d2c77['className'] = 'tcg',
            _0x1d2c77['setAttribute']('src', IMAGES_START + 'svg/tcg.svg'),
            _0x2d4bbb[0x0]['appendChild'](_0x1d2c77)),
            _0x1d2c77['style']['display'] = 'block'),
            !_0x2d4bbb['data']('tcg') && _0x2d4bbb['data']('ocg') && (!_0x1f9160 && (_0x1f9160 = document['createElement']('img'),
            _0x1f9160['className'] = 'ocg',
            _0x1f9160['setAttribute']('src', IMAGES_START + 'svg/ocg.svg'),
            _0x2d4bbb[0x0]['appendChild'](_0x1f9160)),
            _0x1f9160['style']['display'] = 'block'),
            !_0x2d4bbb['data']('tcg') && !_0x2d4bbb['data']('ocg') && !_0x2d4bbb['data']('custom') && (!_0x4484eb && (_0x4484eb = document['createElement']('img'),
            _0x4484eb['className'] = 'illegal',
            _0x4484eb['setAttribute']('src', IMAGES_START + 'svg/illegal.svg'),
            _0x2d4bbb[0x0]['appendChild'](_0x4484eb)),
            _0x4484eb['style']['display'] = 'block');
        },
        'clearLimit': function() {
            _0x15d525 && (_0x15d525['style']['display'] = 'none'),
            _0x8c64ed && (_0x8c64ed['style']['display'] = 'none'),
            _0x29846b && (_0x29846b['style']['display'] = 'none'),
            _0x1d2c77 && (_0x1d2c77['style']['display'] = 'none'),
            _0x1f9160 && (_0x1f9160['style']['display'] = 'none'),
            _0x4484eb && (_0x4484eb['style']['display'] = 'none'),
            _0x2fa23f && (_0x2fa23f['style']['display'] = 'none');
        },
        'setCardName': function() {
            if (_0x2d4bbb['parent']()['hasClass']('content') || _0x2d4bbb[0x0]['style']['display'] == 'block') {
                setTimeout(function() {
                    setText(_0x4a3931),
                    setText(_0xcb059);
                }, 0xc8);
                return;
            }
            setText(_0x4a3931),
            setText(_0xcb059);
        },
        'addLevel': function(_0x259270) {
            var _0x21fa9f = document['createElement']('img');
            _0x21fa9f['className'] = 'level\x20level' + (_0x259270 + 0x1),
            _0x21fa9f['setAttribute']('src', CARD_START + 'level.png'),
            _0x21fa9f['style']['left'] = 0x2a5 - 0x36 * _0x259270 + 'px',
            _0x422dff['parentNode'] ? _0x422dff['parentNode']['insertBefore'](_0x21fa9f, _0x422dff) : _0x3ff368[0x0]['appendChild'](_0x21fa9f);
        },
        'addRank': function(_0x209af9) {
            var _0x5a970f = document['createElement']('img');
            _0x5a970f['className'] = 'rank\x20rank' + (_0x209af9 + 0x1),
            _0x5a970f['setAttribute']('src', CARD_START + 'rank.png'),
            _0x5a970f['style']['left'] = 0x53 + 0x36 * _0x209af9 + 'px',
            _0x422dff['parentNode'] ? _0x422dff['parentNode']['insertBefore'](_0x5a970f, _0x422dff) : _0x3ff368[0x0]['appendChild'](_0x5a970f);
        },
        'addBlackArrow': function(_0x4ed2ec) {
            var _0x5d63bb = document['createElement']('img');
            _0x5d63bb['className'] = 'black_arrow\x20black_arrow' + (_0x4ed2ec + 0x1);
            if (_0x4ed2ec % 0x2 == 0x0)
                _0x5d63bb['setAttribute']('src', IMAGES_START + 'card/black_arrow_corner.png');
            else
                return;
            _0x422dff['parentNode'] ? _0x422dff['parentNode']['insertBefore'](_0x5d63bb, _0x422dff) : _0x3ff368[0x0]['appendChild'](_0x5d63bb);
        },
        'addRedArrow': function(_0x3c8372) {
            var _0x2f13d7 = document['createElement']('img');
            _0x2f13d7['className'] = 'red_arrow\x20red_arrow' + (_0x3c8372 + 0x1),
            _0x3c8372 % 0x2 == 0x0 ? _0x2f13d7['setAttribute']('src', IMAGES_START + 'card/red_arrow_corner.png') : _0x2f13d7['setAttribute']('src', IMAGES_START + 'card/red_arrow_side.png'),
            _0x2f13d7['style']['display'] = 'none',
            _0x422dff['parentNode'] ? _0x422dff['parentNode']['insertBefore'](_0x2f13d7, _0x422dff) : _0x3ff368[0x0]['appendChild'](_0x2f13d7);
        }
    }),
    _0x2d4bbb['reset']();
    var _0x11a7d6, _0x2581f8 = document['createElement']('img');
    _0x2581f8['className'] = 'card_border',
    _0x2581f8['setAttribute']('src', CARD_START + 'card_border.jpg');
    var _0x4e4b7a = document['createElement']('img');
    _0x4e4b7a['className'] = 'card_color',
    _0x4e4b7a['setAttribute']('src', CARD_START + 'effect_front2.jpg');
    var _0x26b74d, _0x69618e = document['createElement']('div');
    _0x69618e['className'] = 'pendulum_front';
    var _0xf8fc99 = document['createElement']('img');
    _0xf8fc99['className'] = 'rush_front',
    _0xf8fc99['setAttribute']('src', CARD_START + 'rush_effect_front.png');
    var _0x36fd8b = document['createElement']('img');
    _0x36fd8b['className'] = 'rush_stats',
    _0x36fd8b['setAttribute']('src', CARD_START + 'rush_stats.png');
    var _0x43cbad = document['createElement']('span');
    _0x43cbad['className'] = 'rush_atk_txt';
    var _0x2e9706 = document['createElement']('span');
    _0x2e9706['className'] = 'rush_def_txt';
    var _0x59083a = document['createElement']('img');
    _0x59083a['className'] = 'legend',
    _0x59083a['setAttribute']('src', CARD_START + 'legend.png');
    var _0x1d236f = document['createElement']('img');
    _0x1d236f['className'] = 'rush_level',
    _0x1d236f['setAttribute']('src', CARD_START + 'rush_level.png');
    var _0x3f96e4 = document['createElement']('span');
    _0x3f96e4['className'] = 'rush_level_txt',
    _0x3f96e4['innerHTML'] = '4';
    var _0x553d50 = document['createElement']('span');
    _0x553d50['className'] = 'rush_type_txt';
    var _0x5a883d = document['createElement']('img');
    _0x5a883d['className'] = 'pic',
    _0x5a883d['setAttribute']('src', IMAGES_START + 'loading.gif');
    var _0x4a3931 = document['createElement']('span');
    _0x4a3931['className'] = 'name_txt';
    var _0xcb059 = document['createElement']('span');
    _0xcb059['className'] = 'name2_txt';
    var _0x4114e8 = document['createElement']('img');
    _0x4114e8['className'] = 'attribute',
    _0x4114e8['setAttribute']('src', CARD_START + 'dark_attribute.png'),
    _0x3ff368[0x0]['appendChild'](_0x2581f8),
    _0x3ff368[0x0]['appendChild'](_0x4e4b7a),
    _0x3ff368[0x0]['appendChild'](_0x5a883d),
    _0x3ff368[0x0]['appendChild'](_0xf8fc99),
    _0x3ff368[0x0]['appendChild'](_0x59083a),
    _0x3ff368[0x0]['appendChild'](_0x36fd8b),
    _0x3ff368[0x0]['appendChild'](_0x43cbad),
    _0x3ff368[0x0]['appendChild'](_0x2e9706),
    _0x3ff368[0x0]['appendChild'](_0x1d236f),
    _0x3ff368[0x0]['appendChild'](_0x3f96e4),
    _0x3ff368[0x0]['appendChild'](_0x553d50),
    _0x3ff368[0x0]['appendChild'](_0x69618e),
    _0x3ff368[0x0]['appendChild'](_0x4114e8);
    var _0x422dff = document['createElement']('img');
    _0x422dff['className'] = 'type_icon',
    _0x422dff['setAttribute']('src', CARD_START + 'continuous.png'),
    _0x3ff368[0x0]['appendChild'](_0x422dff);
    var _0x4c71e6 = document['createElement']('div');
    _0x4c71e6['className'] = 'monster_line',
    _0x3ff368[0x0]['appendChild'](_0x4c71e6);
    var _0x28cd08 = document['createElement']('span');
    _0x28cd08['className'] = 'spell_type_txt';
    var _0x4496db = document['createElement']('span');
    _0x4496db['className'] = 'type_txt';
    var _0x375afa = document['createElement']('span');
    _0x375afa['className'] = 'effect_txt';
    var _0x285b78 = document['createElement']('span');
    _0x285b78['className'] = 'card_pendulum_effect_txt';
    var _0x4d3a67 = document['createElement']('span');
    _0x4d3a67['className'] = 'scale_left_txt';
    var _0x45ea1c = document['createElement']('span');
    _0x45ea1c['className'] = 'scale_right_txt';
    var _0x5dae34 = document['createElement']('span');
    _0x5dae34['className'] = 'atk_lbl',
    _0x5dae34['innerHTML'] = 'ATK<font\x20style=\x22font-size:\x2026px;\x22>\x20</font>/';
    var _0x494d6e = document['createElement']('span');
    _0x494d6e['className'] = 'card_atk_txt';
    var _0x1b4c27 = document['createElement']('span');
    _0x1b4c27['className'] = 'def_lbl',
    _0x1b4c27['innerHTML'] = 'DEF<font\x20style=\x22font-size:\x2026px;\x22>\x20</font>/';
    var _0x41eb02 = document['createElement']('span');
    _0x41eb02['className'] = 'card_def_txt';
    var _0x452e43 = document['createElement']('span');
    _0x452e43['className'] = 'link_txt',
    _0x452e43['innerHTML'] = 'LINK\x20-\x200';
    var _0x115185 = document['createElement']('span');
    return _0x115185['className'] = 'passcode_txt\x20selectable',
    _0x3ff368[0x0]['appendChild'](_0x4a3931),
    _0x3ff368[0x0]['appendChild'](_0xcb059),
    _0x3ff368[0x0]['appendChild'](_0x28cd08),
    _0x3ff368[0x0]['appendChild'](_0x4496db),
    _0x3ff368[0x0]['appendChild'](_0x375afa),
    _0x3ff368[0x0]['appendChild'](_0x285b78),
    _0x3ff368[0x0]['appendChild'](_0x4d3a67),
    _0x3ff368[0x0]['appendChild'](_0x45ea1c),
    _0x3ff368[0x0]['appendChild'](_0x5dae34),
    _0x3ff368[0x0]['appendChild'](_0x494d6e),
    _0x3ff368[0x0]['appendChild'](_0x1b4c27),
    _0x3ff368[0x0]['appendChild'](_0x41eb02),
    _0x3ff368[0x0]['appendChild'](_0x452e43),
    _0x3ff368[0x0]['appendChild'](_0x115185),
    _0x2d4bbb['clearLimit'](),
    _0x2d4bbb;
}
function getCustomFolder(_0x26e61f) {
    if (_0x26e61f < 0x186a0)
        return '0';
    return Math['floor'](_0x26e61f / 0x186a0) + '00000';
}
function correctText(_0x19a23f) {
    _0x19a23f = _0x19a23f['replace'](/&/g, '&amp;'),
    _0x19a23f = _0x19a23f['replace'](/%/g, '&percnt;'),
    _0x19a23f = _0x19a23f['replace'](/=/g, '&equals;'),
    _0x19a23f = _0x19a23f['replace'](/</g, '&lt;'),
    _0x19a23f = _0x19a23f['replace'](/>/g, '&gt;');
    var _0x55bf86 = ['#', '&percnt;', '\x5c*', '\x5c+', '&lt;', '&equals;', '&gt;', '@', '\x5c[', ']', '\x5c^', '{', '\x5c|', '}', '∞', 'Ü', 'Ω', 'É', '×', '☆', '★'];
    _0x55bf86['forEach'](function(_0x5defbf, _0x228afe) {
        _0x19a23f = _0x19a23f['replace'](new RegExp(_0x5defbf,'g'), '<font\x20style=\x22font-family:\x20Arial;\x20font-size:\x2080%;\x22>' + _0x5defbf['replace'](/\\/g, '') + '</font>');
    });
    if (isNonLatin(_0x19a23f))
        for (var _0x24fbd9 = 0x0; _0x24fbd9 < _0x19a23f['length']; _0x24fbd9++) {
            if (isNonLatin(_0x19a23f[_0x24fbd9])) {
                switch (_0x19a23f[_0x24fbd9]) {
                case 'Ɐ':
                    var _0x40e26c = '<span\x20style=\x22position:\x20relative;\x20display:\x20inline-block;\x20transform:\x20rotate(180deg);\x20top:\x20-4px;\x22>A</span>'
                      , _0x575764 = _0x19a23f['substring'](_0x24fbd9, _0x19a23f['length']);
                    _0x19a23f = _0x19a23f['substring'](0x0, _0x24fbd9) + _0x575764['replace'](_0x19a23f[_0x24fbd9], _0x40e26c),
                    _0x24fbd9 += _0x40e26c['length'] - 0x1;
                    continue;
                case '★':
                    continue;
                }
                var _0x40e26c = '<font\x20style=\x22font-family:\x20Arial;\x20font-size:\x2080%;\x22>' + _0x19a23f[_0x24fbd9] + '</font>'
                  , _0x575764 = _0x19a23f['substring'](_0x24fbd9, _0x19a23f['length']);
                _0x19a23f = _0x19a23f['substring'](0x0, _0x24fbd9) + _0x575764['replace'](_0x19a23f[_0x24fbd9], _0x40e26c),
                _0x24fbd9 += _0x40e26c['length'] - 0x1;
            }
        }
    return _0x19a23f;
}
function isNonLatin(_0x155ccc) {
    if (/[^ -~●\r\n,\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]/g['test'](_0x155ccc))
        return !![];
    return ![];
}
function correctEffect(_0x4e6af6, _0x40b54c) {
    return _0x4e6af6 = _0x4e6af6['replace'](/∞/g, '<font\x20style=\x22font-family:\x20Arial;\x22>∞</font>'),
    _0x4e6af6 = _0x4e6af6['replace'](/Ω/g, '<font\x20style=\x22font-family:\x20Arial;\x20font-size:\x2080%;\x22>Ω</font>'),
    _0x4e6af6 = _0x4e6af6['replace'](/Ɐ/g, '<span\x20style=\x22position:\x20relative;\x20display:\x20inline-block;\x20transform:\x20rotate(180deg);\x20top:\x202px;\x22>A</span>'),
    _0x40b54c && (_0x4e6af6 = _0x4e6af6['replace']('[Requirement]', '<b>[Requirement]</b>'),
    _0x4e6af6 = _0x4e6af6['replace']('[REQUIREMENT]', '<b>[REQUIREMENT]</b>'),
    _0x4e6af6 = _0x4e6af6['replace']('<br>[Effect]', '<br><b>[Effect]</b>'),
    _0x4e6af6 = _0x4e6af6['replace']('<br>[EFFECT]', '<br><b>[EFFECT]</b>'),
    _0x4e6af6 = _0x4e6af6['replace']('<br>[Continuous\x20Effect]', '<br><b>[Continuous\x20Effect]</b>'),
    _0x4e6af6 = _0x4e6af6['replace']('<br>[CONTINUOUS\x20EFFECT]', '<br><b>[CONTINUOUS\x20EFFECT]</b>'),
    _0x4e6af6 = _0x4e6af6['replace']('<br>[Multi-Choice\x20Effect]', '<br><b>[Multi-Choice\x20Effect]</b>'),
    _0x4e6af6 = _0x4e6af6['replace']('<br>[MULTI-CHOICE\x20EFFECT]', '<br><b>[MULTI-CHOICE\x20EFFECT]</b>')),
    _0x4e6af6;
}
function getType(_0x4d8f7a) {
    var _0x2f9d8a = '';
    for (var _0x161798 = 0x0; _0x161798 < _0x4d8f7a['length']; _0x161798++) {
        _0x161798 == 0x0 || _0x4d8f7a[_0x161798 - 0x1] == '\x20' || _0x4d8f7a[_0x161798 - 0x1] == '-' ? _0x2f9d8a += '<font\x20class=\x22type_medium\x22>' + _0x4d8f7a[_0x161798]['toUpperCase']() + '</font>' : _0x2f9d8a += _0x4d8f7a[_0x161798]['toUpperCase']();
    }
    return _0x2f9d8a;
}
function setCardText(_0x25f4a2) {
    _0x25f4a2['style']['fontSize'] = '29px',
    _0x25f4a2['style']['lineHeight'] = '1';
    _0x25f4a2['scrollHeight'] > _0x25f4a2['clientHeight'] && (_0x25f4a2['style']['fontSize'] = '24px');
    _0x25f4a2['scrollHeight'] > _0x25f4a2['clientHeight'] && (_0x25f4a2['style']['fontSize'] = '21px');
    _0x25f4a2['scrollHeight'] > _0x25f4a2['clientHeight'] && (_0x25f4a2['style']['fontSize'] = '19px');
    _0x25f4a2['scrollHeight'] > _0x25f4a2['clientHeight'] && (_0x25f4a2['style']['fontSize'] = '16.5px');
    while (_0x25f4a2['scrollHeight'] > _0x25f4a2['clientHeight']) {
        var _0x59a48a = parseInt(_0x25f4a2['style']['fontSize']);
        _0x25f4a2['style']['fontSize'] = _0x59a48a - 0x1 + 'px';
    }
}
function Card() {
    var _0x1ce246 = $('<div\x20class=\x22card\x22></div>')
      , _0x533a1b = $('<img\x20src=\x22' + CARD_START + 'cardback.jpg\x22\x20width=\x22400\x22\x20height=\x22580\x22\x20/>')
      , _0x29028a = $('<div\x20class=\x22cardback\x22></div>');
    _0x29028a['append'](_0x533a1b);
    var _0x1f14a6 = newCardFront()
      , _0x1e843f = $('<div\x20class=\x22content\x22></div>');
    _0x1ce246['append'](_0x1e843f);
    var _0x689715 = $('<div\x20class=\x22white\x22></div>');
    return _0x1e843f['append'](_0x29028a),
    _0x1e843f['append'](_0x1f14a6),
    _0x1e843f['append'](_0x689715),
    _0x1ce246['extend'](_0x1ce246, {
        'reset': function() {
            _0x1ce246['removeData'](),
            _0x1ce246['data']('cardfront', _0x1f14a6),
            _0x1ce246['data']('xyz_arr', []),
            _0x1ce246['css']('opacity', 0x1);
        },
        'onRotate': function(_0x47a2aa) {
            var _0x16d513 = getRotationY(_0x1ce246[0x0]);
            _0x16d513 > 0x5a && (_0x16d513 = -_0x16d513);
            var _0x18cf6a = 0x5a - _0x16d513;
            _0x16d513 < 0x0 && (_0x18cf6a = 0x5a + _0x16d513);
            _0x18cf6a < 0x0 && (_0x18cf6a = -_0x18cf6a);
            _0x18cf6a = 0x5a - _0x18cf6a,
            _0x16d513 -= 0x2d * _0x18cf6a / 0x5a;
            (getRotationY(_0x1e843f[0x0]) != -_0x16d513 || _0x47a2aa === !![]) && TweenMax['to'](_0x1e843f, 0x0, {
                'rotationY': -_0x16d513,
                'xPercent': -0x32,
                'yPercent': -0x32
            });
            if (_0x16d513 >= 0x0 && _0x16d513 < 0x5a)
                _0x1f14a6[0x0]['style']['display'] != 'block' && (_0x1f14a6[0x0]['style']['display'] = 'block');
            else
                (_0x16d513 > 0x5a || _0x16d513 < 0x0) && (_0x1f14a6[0x0]['style']['display'] != 'none' && (_0x1f14a6[0x0]['style']['display'] = 'none'));
            if (_0x16d513 == 0x0 && _0x1f14a6[0x0]['style']['transformStyle'] != 'flat' || flat)
                _0x1f14a6[0x0]['style']['transformStyle'] = 'flat';
            else {
                if (_0x16d513 != 0x0 && _0x1f14a6[0x0]['style']['transformStyle'] != 'preserve-3d') {}
            }
        },
        'setSleeve': function(_0x4af858) {
            !_0x4af858 && (_0x4af858 = '1.jpg');
            if (_0x1ce246['data']('isSkill'))
                return;
            _0x533a1b['attr']('src', SLEEVE_START + _0x4af858),
            _0x1ce246['data']('sleeve', _0x4af858);
        },
        'removeSleeve': function() {
            _0x533a1b['attr']('src', SLEEVE_START + '1.jpg');
        },
        'startGlow': function() {
            _0x689715['show'](),
            TweenMax['killTweensOf'](_0x689715),
            TweenMax['fromTo'](_0x689715, 0.7, {
                'opacity': 0x0
            }, {
                'opacity': 0.3,
                'onComplete': function() {
                    TweenMax['fromTo'](_0x689715, 0.7, {
                        'opacity': 0.3
                    }, {
                        'opacity': 0x0,
                        'onComplete': function() {
                            _0x1ce246['startGlow']();
                        }
                    });
                }
            });
        },
        'stopGlow': function() {
            console['log']('stopGlow'),
            _0x689715['hide'](),
            TweenMax['killTweensOf'](_0x689715);
        },
        'showFaceDown': function() {
            TweenMax['to'](_0x1ce246, 0x0, {
                'rotationY': 0xb4
            });
        },
        'getDeckZ': function() {
            return _0x1ce246['data']('owner')['main_arr']['length'] + 0x1e;
        },
        'getGraveZ': function() {
            return _0x1ce246['data']('owner')['grave_arr']['length'] + 0x1e;
        },
        'getBanishedZ': function() {
            return _0x1ce246['data']('owner')['grave_arr']['length'] + _0x1ce246['data']('owner')['banished_arr']['length'] + 0x1e;
        },
        'getExtraZ': function() {
            return _0x1ce246['data']('owner')['extra_arr']['length'] + 0x1e;
        }
    }),
    _0x1ce246['reset'](),
    watch(_0x1ce246, 'transform', _0x1ce246['onRotate']),
    SAFARI && _0x1ce246['css']('perspective-origin', 'unset'),
    TweenMax['set'](_0x1e843f, {
        'transformPerspective': 0x2bc
    }),
    _0x1ce246;
}
function getRotation(_0x35c4e) {
    var _0x3fbed2 = window['getComputedStyle'](_0x35c4e, null)
      , _0x28078c = _0x3fbed2['getPropertyValue']('-webkit-transform') || _0x3fbed2['getPropertyValue']('-moz-transform') || _0x3fbed2['getPropertyValue']('-ms-transform') || _0x3fbed2['getPropertyValue']('-o-transform') || _0x3fbed2['getPropertyValue']('transform') || 'none';
    if (_0x28078c == 'none')
        return console['log']('none'),
        0x0;
    var _0x3e762a = _0x28078c['split']('(')[0x1]['split'](')')[0x0]['split'](',')
      , _0x2393b8 = _0x3e762a[0x0]
      , _0x4982c8 = _0x3e762a[0x1]
      , _0x399458 = _0x3e762a[0x2]
      , _0x1cad78 = _0x3e762a[0x3]
      , _0x32662c = Math['sqrt'](_0x2393b8 * _0x2393b8 + _0x4982c8 * _0x4982c8)
      , _0x3d7bd8 = _0x4982c8 / _0x32662c
      , _0x1736bf = Math['round'](Math['atan2'](_0x4982c8, _0x2393b8) * (0xb4 / Math['PI']));
    return _0x1736bf;
}
function getRotationY(_0x538b66) {
    var _0x5be41b = window['getComputedStyle'](_0x538b66, null)
      , _0x1efdb8 = _0x5be41b['getPropertyValue']('-webkit-transform') || _0x5be41b['getPropertyValue']('-moz-transform') || _0x5be41b['getPropertyValue']('-ms-transform') || _0x5be41b['getPropertyValue']('-o-transform') || _0x5be41b['getPropertyValue']('transform') || 'none';
    if (_0x1efdb8 == 'none')
        return 0x0;
    var _0x31a4d4 = _0x1efdb8['split']('(')[0x1]['split'](')')[0x0]['split'](',')
      , _0xcb0746 = parseFloat(_0x31a4d4[0xa]);
    if (!_0xcb0746)
        return 0x0;
    return -((_0xcb0746 * 0x168 - 0x168) / 0x4);
}
function resetRotationY(_0x4cd43c) {
    var _0x444bad = window['getComputedStyle'](_0x4cd43c[0x0], null)
      , _0x17f304 = _0x444bad['getPropertyValue']('-webkit-transform') || _0x444bad['getPropertyValue']('-moz-transform') || _0x444bad['getPropertyValue']('-ms-transform') || _0x444bad['getPropertyValue']('-o-transform') || _0x444bad['getPropertyValue']('transform') || 'none'
      , _0x4e25a0 = _0x17f304['split']('(')[0x1]['split'](')')[0x0]['split'](',');
    _0x4cd43c['css']('transform', 'matrix3d(' + _0x4e25a0[0x0] + ',\x20' + _0x4e25a0[0x1] + ',\x20' + _0x4e25a0[0x2] + ',\x20' + _0x4e25a0[0x3] + ',\x20' + _0x4e25a0[0x4] + ',\x201,\x20' + _0x4e25a0[0x6] + ',\x20' + _0x4e25a0[0x7] + ',\x20' + _0x4e25a0[0x8] + ',\x20' + _0x4e25a0[0x9] + ',\x201,\x20' + _0x4e25a0[0xb] + ',\x20' + _0x4e25a0[0xc] + ',\x20' + _0x4e25a0[0xd] + ',\x20' + _0x4e25a0[0xe] + ',\x20' + _0x4e25a0[0xf] + ')');
}
function getScale(_0x56d5af) {
    var _0x39bee8 = window['getComputedStyle'](_0x56d5af, null)
      , _0x4679be = _0x39bee8['getPropertyValue']('-webkit-transform') || _0x39bee8['getPropertyValue']('-moz-transform') || _0x39bee8['getPropertyValue']('-ms-transform') || _0x39bee8['getPropertyValue']('-o-transform') || _0x39bee8['getPropertyValue']('transform') || 'none';
    if (_0x4679be == 'none')
        return 0x1;
    var _0x5a6b42 = _0x4679be['split']('(')[0x1]['split'](')')[0x0]['split'](',')
      , _0x269a61 = parseFloat(_0x5a6b42[0x0]);
    return !_0x269a61 && (_0x269a61 = parseFloat(_0x5a6b42[0x1])),
    _0x269a61;
}
function isExtraDeckCard(_0x1ed260) {
    if (_0x1ed260['hasClass']('card')) {
        if (_0x1ed260['data']('cardfront')['data']('monster_color') == 'Fusion' || _0x1ed260['data']('cardfront')['data']('monster_color') == 'Link' || _0x1ed260['data']('cardfront')['data']('monster_color') == 'Synchro' || _0x1ed260['data']('cardfront')['data']('monster_color') == 'Xyz')
            return !![];
    } else {
        if (_0x1ed260['data']('monster_color') == 'Fusion' || _0x1ed260['data']('monster_color') == 'Link' || _0x1ed260['data']('monster_color') == 'Synchro' || _0x1ed260['data']('monster_color') == 'Xyz')
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
        for (var _0x53e7a6 = 0x0; _0x53e7a6 < logins['length']; _0x53e7a6++) {
            (!logins[_0x53e7a6] || !logins[_0x53e7a6]['username']) && (logins['splice'](0x0, 0x1),
            _0x53e7a6--);
        }
    } catch (_0x1f4134) {}
    return logins;
}
function random(_0x3fd73c) {
    return Math['floor'](Math['random']() * _0x3fd73c);
}
function randomHex() {
    var _0x1f5b26 = ''
      , _0x2ea7b4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (var _0x329a61 = 0x0; _0x329a61 < 0x20; _0x329a61++) {
        _0x1f5b26 += _0x2ea7b4[Math['floor'](Math['random']() * _0x2ea7b4['length'])];
    }
    return _0x1f5b26;
}
function messageE(_0x444987, _0x352970) {
    displayBox('Message', _0x444987, _0x352970);
}
function errorE(_0x3362a1, _0x3e5c00) {
    displayBox('Error', _0x3362a1, _0x3e5c00);
}
function displayBox(_0x39a335, _0x2f1657, _0x1fb310, _0x1ecea9) {
    hideDisplayBoxes(),
    $(':focus')['blur'](),
    $('#msg\x20.ok_btn')['focus'](),
    $('#msg\x20.title_txt')['text'](_0x39a335),
    _0x1ecea9 ? $('#msg\x20.body_txt')['html'](_0x2f1657) : $('#msg\x20.body_txt')['text'](_0x2f1657),
    $('#msg')['show'](),
    msg_callback = _0x1fb310;
}
function msgOK() {
    hideDisplayBoxes(),
    msg_callback && msg_callback();
}
function getLink(_0x8e18cc, _0x4d7a89, _0x36cd54, _0x1fbcb6) {
    hideDisplayBoxes(),
    $('#link')['show'](),
    $('#link\x20.title_txt')['text'](_0x8e18cc),
    _0x1fbcb6 ? $('#link\x20.body_txt')['html'](_0x4d7a89) : $('#link\x20.body_txt')['text'](_0x4d7a89),
    $('#link\x20.input_txt')['val'](_0x36cd54),
    $('#link\x20.input_txt')[0x0]['setSelectionRange'](0x0, 0x0),
    $('#link\x20.input_txt')['focus']();
}
function copyText(_0x37f22f, _0x2542bd) {
    if (!navigator['clipboard']) {
        document['execCommand']('copy') && _0x43800d();
        return;
    }
    navigator['clipboard']['writeText'](_0x37f22f)['then'](_0x43800d);
    function _0x43800d() {
        _0x2542bd && _0x2542bd();
    }
}
function getInput(_0x28e4d4, _0x23a2f8, _0x4d0a42, _0x5aaa6b, _0x3109d3, _0x77db1c, _0x4b9719, _0x2dffbf, _0x31d4a4) {
    hideDisplayBoxes(),
    $('#input')['show'](),
    $('#input\x20.title_txt')['text'](_0x28e4d4),
    $('#input\x20.body_txt')['text'](_0x23a2f8),
    $('#input\x20.input_txt')['val'](_0x4d0a42),
    ~~_0x5aaa6b > 0x0 ? $('#input\x20.input_txt')['attr']('maxlength', _0x5aaa6b) : $('#input\x20.input_txt')['removeAttr']('maxlength'),
    $('#input\x20.input_txt')['attr']('type', _0x4b9719 ? 'password' : 'text'),
    $('#input\x20.input_txt')['data']('regex', _0x77db1c ? _0x77db1c : null),
    $('#input\x20.body_txt')['css']('top', 81.5),
    $('#input\x20.body_txt')['css']('font-size', 0x19),
    $('#input\x20.input_txt')['css']('top', 0x8e),
    _0x31d4a4 && ($('#input\x20.body_txt')['css']('top', 0x4a),
    $('#input\x20.body_txt')['css']('font-size', 0x16),
    $('#input\x20.input_txt')['css']('top', 0xa2)),
    $('#input\x20.input_txt')['focus'](),
    $('#input\x20.input_txt')['select'](),
    input_callback = _0x3109d3,
    _0x2dffbf = _0x2dffbf;
}
function fillCombobox(_0xf75880, _0x5be749) {
    _0xf75880['html'](''),
    _0x5be749['forEach'](function(_0x13bec7, _0x252f19) {
        _0xf75880['append']('<option\x20value=\x22' + escapeHTML(_0x13bec7) + '\x22>' + upperCamelCase(escapeHTML(_0x13bec7)) + '</option>');
    });
}
function upperCamelCase(_0xcb20c6) {
    var _0x2579a2 = _0xcb20c6['split']('\x20');
    for (var _0xa34c65 = 0x0; _0xa34c65 < _0x2579a2['length']; _0xa34c65++) {
        _0x2579a2[_0xa34c65] = _0x2579a2[_0xa34c65]['substring'](0x0, 0x1)['toUpperCase']() + _0x2579a2[_0xa34c65]['substring'](0x1, _0x2579a2[_0xa34c65]['length']);
    }
    return _0x2579a2['join']('\x20');
}
function inputOK() {
    hideDisplayBoxes(),
    input_callback && input_callback();
}
function getComboBox(_0x486065, _0x848368, _0x2a1edc, _0x17f355, _0x5472b1, _0x1abfad) {
    hideDisplayBoxes(),
    $('#combo')['show'](),
    $('#combo\x20.title_txt')['text'](_0x486065),
    _0x1abfad ? $('#combo\x20.body_txt')['html'](_0x848368) : $('#combo\x20.body_txt')['text'](_0x848368),
    _0x2a1edc instanceof Array ? fillCombobox($('#combo\x20.combo_cb'), _0x2a1edc) : $('#combo\x20.combo_cb')['html'](_0x2a1edc),
    $('#combo\x20.combo_cb')['selectedIndex'](_0x17f355),
    $('#combo\x20.combo_cb')['focus'](),
    combo_callback = _0x5472b1;
}
function comboOK() {
    hideDisplayBoxes(),
    combo_callback && combo_callback();
}
function getConfirmation(_0x16bc4a, _0x4962c4, _0x2e5cab, _0x4ce30a, _0x36d8d6) {
    hideDisplayBoxes(),
    $(':focus')[0x0] != $('#duel\x20.cin_txt')[0x0] && $(':focus')['blur'](),
    $('#confirm')['show'](),
    $('#confirm\x20.title_txt')['text'](_0x16bc4a),
    setText($('#confirm\x20.title_txt')),
    _0x36d8d6 ? $('#confirm\x20.body_txt')['html'](_0x4962c4) : $('#confirm\x20.body_txt')['text'](_0x4962c4),
    yes_callback = _0x2e5cab,
    no_callback = _0x4ce30a;
}
function getConfirmation2(_0x14308e, _0xc3f618, _0x281072, _0x4af156, _0x18e822, _0x525ebb) {
    hideDisplayBoxes(),
    $(':focus')[0x0] != $('#duel\x20.cin_txt')[0x0] && $(':focus')['blur'](),
    $('#confirm2')['show'](),
    $('#confirm2\x20.title_txt')['text'](_0x14308e),
    setText($('#confirm2\x20.title_txt')),
    _0x525ebb ? $('#confirm2\x20.body_txt')['html'](_0xc3f618) : $('#confirm2\x20.body_txt')['text'](_0xc3f618),
    yes_callback = _0x281072,
    no_callback = _0x4af156,
    cancel_callback = _0x18e822;
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
function removeMouseMove() {
    mouseMoveTimer['reset'](),
    $('body')['off']('mousemove', updateMouse);
}
function previewE(_0x3dd1ed) {
    updateMouse(_0x3dd1ed);
    var _0x33b73a = $(this)
      , _0x568a5f = new Timer(0x32);
    if (_0x33b73a['attr']('class')['indexOf']('cardfront') < 0x0) {
        if ($('#view')['is'](':visible')) {
            previewCard(_0x33b73a);
            return;
        } else
            _0x568a5f['callback'] = function() {
                _0x568a5f['reset'](),
                (_0x3dd1ed['type'] == 'mousedown' || _0x3dd1ed['type'] == 'click' || inBounds(_0x33b73a['find']('.content'))) && previewCard(_0x33b73a);
            }
            ;
    } else
        _0x568a5f['callback'] = function() {
            _0x568a5f['reset'](),
            (_0x3dd1ed['type'] == 'mousedown' || _0x3dd1ed['type'] == 'click' || inBounds(_0x33b73a)) && previewFront(_0x33b73a);
        }
        ;
    _0x568a5f['start'](),
    addMouseMove();
}
function previewCard(_0x38854d) {
    if (_0x38854d['data']('face_down') && (!duelist && !_0x38854d['data']('isSkill'))) {
        if (!replay && !admin)
            return;
    }
    if (_0x38854d['data']('isSkill') && Math['round'](getRotationY(_0x38854d[0x0])) == 0xb4 && _0x38854d['data']('controller')['username'] != username) {
        preview['find']('.skillback')['detach'](),
        preview_txt['text'](_0x38854d['find']('.skillback')['text']());
        var _0x49fcaf = getSkillBack(_0x38854d['find']('.skillback\x20img')['attr']('src'), _0x38854d['find']('.skillback')['text']());
        TweenMax['to'](_0x49fcaf, 0x0, {
            'scaleX': 2.0325,
            'scaleY': 2.0431
        }),
        preview['append'](_0x49fcaf),
        showPreview();
        return;
    }
    if (!_0x38854d['data']('cardfront')['data']('initialized'))
        return;
    if (!replay && (_0x38854d['data']('controller') != player1 && (tag_duel == ![] || _0x38854d['data']('controller') != player1['partner'])) && (_0x38854d['data']('face_down') && getRotationY(_0x38854d[0x0]) > 0.5 || Math['round'](getRotationY(_0x38854d[0x0])) == 0xb4) && viewing != 'Opponent\x27s\x20Extra\x20Deck')
        return;
    if (!show_cards && isIn(_0x38854d, player1['hand_arr']) >= 0x0 && !duelist && !_0x38854d['data']('face_up'))
        return;
    if (inBounds(preview_txt))
        return;
    previewFront(_0x38854d['data']('cardfront'));
}
function previewFront(_0xcc29f4) {
    preview['data']('id') == 0x0 && preview['data']('id', -0x1);
    if (preview['data']('id') == _0xcc29f4['data']('id') && preview['is'](':visible') && preview['find']('.pic')['attr']('scr') != _0xcc29f4['find']('.pic')['attr']('scr'))
        return;
    preview['find']('.skillback')['detach'](),
    showPreview(),
    preview['copyCard'](_0xcc29f4);
    if (_0xcc29f4['data']('pendulum'))
        preview_txt['html']('<b>Pendulum\x20Effect:</b><br>' + escapeHTML(_0xcc29f4['data']('pendulum_effect')) + '<br><br>' + '<b>Monster\x20Effect:</b><br>'),
        _0xcc29f4['data']('monster_color') == 'Normal' ? preview_txt['append']('<i>' + escapeHTML(_0xcc29f4['data']('effect')) + '</i>') : preview_txt['append'](escapeHTML(_0xcc29f4['data']('effect')));
    else {
        if (_0xcc29f4['data']('rush') && _0xcc29f4['data']('monster_color') != 'Normal')
            preview_txt['html'](escapeHTML(_0xcc29f4['data']('effect'))['replace']('[Requirement]', '<b>[Requirement]</b>')['replace']('<br>[Effect]', '<br><b>[Effect]</b>')['replace']('<br>[Continuous\x20Effect]', '<br><b>[Continuous\x20Effect]</b>')['replace']('<br>[Multi-Choice\x20Effect]', '<br><b>[Multi-Choice\x20Effect]</b>')['replace']('[REQUIREMENT]', '<b>[REQUIREMENT]</b>')['replace']('<br>[EFFECT]', '<br><b>[EFFECT]</b>')['replace']('<br>[CONTINUOUS\x20EFFECT]', '<br><b>[CONTINUOUS\x20EFFECT]</b>')['replace']('<br>[MULTI-CHOICE\x20EFFECT]', '<br><b>[MULTI-CHOICE\x20EFFECT]</b>'));
        else {
            if (_0xcc29f4['data']('monster_color') == 'Normal')
                preview_txt['html']('<i>' + escapeHTML(_0xcc29f4['data']('effect')) + '</i>');
            else
                _0xcc29f4['data']('card_type') == 'Skill' ? preview_txt['html'](escapeHTML(_0xcc29f4['data']('pendulum_effect')) + '<br><br>' + escapeHTML(_0xcc29f4['data']('effect'))) : preview_txt['html'](escapeHTML(_0xcc29f4['data']('effect')));
        }
    }
}
function showPreview() {
    currentLabel == 'deck_constructor' ? preview_txt['css']('height', 0x7f) : preview_txt['css']('height', 0x98),
    preview_txt['show'](),
    preview_txt['scrollTop'](0x0),
    preview['show'](),
    parseInt(preview_txt['css']('height')) == 0xe3 && currentLabel != 'custom_cards' && minimizePreview();
}
function previewScrollE(_0x3deb66) {
    preview_vsp = preview_txt['scrollTop']();
    var _0x52fe29 = preview_txt['scrollMax']();
    preview_txt['scrollTop']() >= _0x52fe29 && (preview_vsp += 0x3e8);
}
function previewMoveE(_0x2198ae) {
    updateMouse(_0x2198ae),
    parseInt(preview_txt['css']('height')) > 0xa2 && (preview_vsp = mouseYScaled - 0x12c,
    preview_vsp -= 0x96);
}
function minimizePreview(_0x4615a3) {
    updateMouse(_0x4615a3),
    $('#watchers')['show'](),
    $('#watchers_btn')['show']();
    duelist && $('#log_btn')['show']();
    if (parseInt(preview_txt['css']('height')) == 0x98) {}
    if (_0x4615a3 != null) {
        var _0x21d87a = preview_txt['scrollMax']();
        preview_txt['scrollTop']() > 0x1 && preview_txt['scrollTop']() < _0x21d87a && (preview_vsp = preview_txt['scrollTop']());
    }
    currentLabel == 'deck_constructor' ? preview_txt['css']('height', 0x7f) : preview_txt['css']('height', 0x98),
    setTimeout(function() {
        preview_txt['scrollTop'](preview_vsp);
    }, 0x5);
}
function Timer(_0x194da4, _0x25d32a) {
    var _0x56cbf3 = {};
    return _0x56cbf3['active'] = ![],
    _0x56cbf3['millis'] = _0x194da4,
    _0x56cbf3['callback'] = _0x25d32a,
    _0x56cbf3['start'] = function() {
        _0x56cbf3['reset'](),
        _0x56cbf3['active'] = !![],
        _0x56cbf3['task'] = setInterval(function() {
            _0x56cbf3['active'] && _0x56cbf3['callback']();
        }, _0x56cbf3['millis']);
    }
    ,
    _0x56cbf3['stop'] = function() {
        _0x56cbf3['active'] = ![],
        clearInterval(_0x56cbf3['task']);
    }
    ,
    _0x56cbf3['reset'] = function() {
        _0x56cbf3['stop']();
    }
    ,
    _0x56cbf3['destroy'] = function() {
        _0x56cbf3['reset'](),
        _0x56cbf3['start'] = function() {}
        ;
    }
    ,
    _0x56cbf3;
}
function setText(_0x23f5ad) {
    if (!_0x23f5ad)
        return;
    if (_0x23f5ad instanceof jQuery) {
        if (!_0x23f5ad[0x0])
            return;
        _0x23f5ad['css']('white-space', 'nowrap'),
        _0x23f5ad['css']('transform', 'scaleX(1)');
        _0x23f5ad[0x0]['scrollWidth'] > _0x23f5ad['width']() && (_0x23f5ad['css']('transform', 'scaleX(' + _0x23f5ad['width']() / _0x23f5ad[0x0]['scrollWidth'] + ')'),
        _0x23f5ad['css']('transform-origin', 'top\x20left'));
        return;
    }
    _0x23f5ad['style']['whiteSpace'] = 'nowrap',
    _0x23f5ad['style']['transform'] = 'scaleX(1)',
    _0x23f5ad['scrollWidth'] > _0x23f5ad['clientWidth'] && (_0x23f5ad['style']['transform'] = 'scaleX(' + _0x23f5ad['clientWidth'] / _0x23f5ad['scrollWidth'] + ')',
    _0x23f5ad['style']['transformOrigin'] = 'top\x20left');
}
function setCellText(_0x40b5ad) {
    _0x40b5ad['find']('span')['css']('white-space', 'nowrap'),
    _0x40b5ad['find']('span')['css']('transform', 'scaleX(1)'),
    _0x40b5ad['find']('span')[0x0]['scrollWidth'] > _0x40b5ad['width']() && (_0x40b5ad['find']('span')['css']('transform', 'scaleX(' + _0x40b5ad['width']() / (_0x40b5ad['find']('span')[0x0]['scrollWidth'] + 0x8) + ')'),
    _0x40b5ad['find']('span')['css']('transform-origin', 'top\x20left'));
}
function randomize(_0x74bf4c) {
    var _0x11a803 = []
      , _0x336616 = 0x0;
    while (_0x74bf4c['length'] > 0x0) {
        _0x336616 = Math['floor'](Math['random']() * _0x74bf4c['length']),
        _0x11a803['push'](_0x74bf4c[_0x336616]),
        _0x74bf4c['splice'](_0x336616, 0x1);
    }
    for (var _0x585ca8 = 0x0; _0x585ca8 < _0x11a803['length']; _0x585ca8++) {
        _0x74bf4c['push'](_0x11a803[_0x585ca8]);
    }
}
function changeComponents(_0x341996) {
    console['time']('changeComponents');
    if (GET('nocomps')) {
        $('input,\x20select')['each'](function() {
            var _0x3e1c64 = $('<div></div>');
            _0x3e1c64['data']('proxy', $(this)),
            $(this)['data']('proxy', _0x3e1c64);
        });
        return;
    }
    changeInputs(_0x341996),
    changeSelects(_0x341996),
    console['time']('changeButtons'),
    changeButtons(_0x341996),
    console['timeEnd']('changeButtons'),
    changeCheckboxes(_0x341996),
    changeRadios(_0x341996),
    resizeComponents(_0x341996),
    console['timeEnd']('changeComponents');
}
function loadSVGAnimation(_0x5deefd, _0x581d61, _0x472960, _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e20e9) {
    var _0xd0559d = (function() {
        var _0x2dcab3 = !![];
        return function(_0x373811, _0x6551bb) {
            var _0x198e08 = _0x2dcab3 ? function() {
                if (_0x6551bb) {
                    var _0x3c6093 = _0x6551bb['apply'](_0x373811, arguments);
                    return _0x6551bb = null,
                    _0x3c6093;
                }
            }
            : function() {}
            ;
            return _0x2dcab3 = ![],
            _0x198e08;
        }
        ;
    }())
      , _0x310e6b = _0xd0559d(this, function() {
        return _0x310e6b['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x310e6b)['search']('(((.+)+)+)+$');
    });
    return _0x310e6b(),
    _0x5deefd = new MovieClip(_0x4e20e9),
    $['getJSON']('https://static.duelingbook.com/' + _0x472960 + '.json', function(_0x4e7393) {
        _0x5deefd = createSVGAnimation(_0x5deefd, _0x581d61, _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393);
        switch (_0x581d61) {
        case 'dim':
            dim = _0x5deefd;
            break;
        case 'private_chat_cycle':
            private_chat_cycle = _0x5deefd,
            public_chat_cycle = createSVGAnimation(public_chat_cycle, 'public_chat_cycle', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            watch_chat_cycle = createSVGAnimation(watch_chat_cycle, 'watch_chat_cycle', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            log_cycle = createSVGAnimation(log_cycle, 'log_cycle', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393);
            break;
        case 'red_stream':
            red_stream = _0x5deefd;
            break;
        case 'blue_stream':
            blue_stream = _0x5deefd;
            break;
        case 'bubbles1':
            bubbles1 = _0x5deefd,
            bubbles2 = createSVGAnimation(bubbles2, 'bubbles2', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            bubbles3 = createSVGAnimation(bubbles3, 'bubbles3', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            bubbles4 = createSVGAnimation(bubbles4, 'bubbles4', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393);
            break;
        case 'm1_select':
            m1_select = _0x5deefd,
            m2_select = createSVGAnimation(m2_select, 'm2_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            m3_select = createSVGAnimation(m3_select, 'm3_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            m4_select = createSVGAnimation(m4_select, 'm4_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            m5_select = createSVGAnimation(m5_select, 'm5_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            s1_select = createSVGAnimation(s1_select, 's1_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            s2_select = createSVGAnimation(s2_select, 's2_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            s3_select = createSVGAnimation(s3_select, 's3_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            s4_select = createSVGAnimation(s4_select, 's4_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            s5_select = createSVGAnimation(s5_select, 's5_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            link_left_select = createSVGAnimation(link_left_select, 'link_left_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            link_right_select = createSVGAnimation(link_right_select, 'link_right_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            m1_select2 = createSVGAnimation(m1_select2, 'm1_select2', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            m2_select2 = createSVGAnimation(m2_select2, 'm2_select2', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            m3_select2 = createSVGAnimation(m3_select2, 'm3_select2', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            m4_select2 = createSVGAnimation(m4_select2, 'm4_select2', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            m5_select2 = createSVGAnimation(m5_select2, 'm5_select2', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393),
            $('#select_zones')['removeClass']('glowing');
            break;
        case 'field_spell1_select':
            field_spell1_select = _0x5deefd,
            field_spell2_select = createSVGAnimation(field_spell2_select, 'field_spell2_select', _0x5be251, _0x3fc6ee, _0x4d6200, _0x4e7393);
            break;
        case 'spark':
            spark = _0x5deefd,
            spark['json'] = _0x4e7393;
            break;
        case 'shine':
            shine = _0x5deefd,
            shine['json'] = _0x4e7393;
            break;
        case 'yugioh_logo':
            yugioh_logo = _0x5deefd;
            break;
        case 'targets':
            target_select = _0x5deefd,
            target_select['json'] = _0x4e7393,
            target_select['width'] = _0x5be251,
            $('#targets')['children']()['detach']();
            break;
        }
    }),
    _0x5deefd;
}
function createSVGAnimation(_0x5cca3f, _0x27e834, _0x3bb48e, _0x49a9d5, _0x155c46, _0x47d84f) {
    !_0x5cca3f && (_0x5cca3f = new MovieClip());
    var _0x2de969 = _0x5cca3f['playing'];
    return _0x5cca3f = new SVGAnim(_0x47d84f,_0x3bb48e,_0x49a9d5,_0x155c46),
    $('#' + _0x27e834)['append']($(_0x5cca3f['s']['node'])),
    $('#' + _0x27e834)['data']('cycle', _0x5cca3f),
    !_0x2de969 && _0x5cca3f['stop'](),
    _0x5cca3f;
}
function MovieClip(_0x49ce59) {
    var _0x1df823 = {};
    return _0x1df823['play'] = function() {}
    ,
    _0x1df823['stop'] = function() {}
    ,
    _0x1df823['playing'] = _0x49ce59,
    _0x1df823;
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
function log(_0x43180b) {
    console['log'](_0x43180b),
    mobile && moderator && $('#duel\x20.cout_txt')['append'](_0x43180b + '<br>');
}
function replaceAll(_0x490db7, _0x537b61, _0xa5a50d) {
    return _0x490db7['split'](_0x537b61)['join'](_0xa5a50d);
}
function escapeHTML0(_0x31c099) {
    return _0x31c099 = replaceAll(_0x31c099, '&', '&amp;'),
    _0x31c099 = replaceAll(_0x31c099, '<', '&lt;'),
    _0x31c099;
}
function escapeHTML(_0x24e421) {
    if (!_0x24e421)
        return Str(_0x24e421);
    return _0x24e421 = replaceAll(_0x24e421, '&', '&amp;'),
    _0x24e421 = replaceAll(_0x24e421, '<', '&lt;'),
    _0x24e421 = replaceAll(_0x24e421, '>', '&gt;'),
    _0x24e421 = replaceAll(_0x24e421, '\x22', '&quot;'),
    _0x24e421 = replaceAll(_0x24e421, '\x27', '&#39;'),
    _0x24e421 = addBreaks(_0x24e421),
    _0x24e421;
}
function escapeHTMLWithLinks(_0x2ce819, _0x50aa63) {
    return _0x2ce819 = escapeHTML(_0x2ce819),
    _0x2ce819 = addLinks(_0x2ce819, _0x50aa63),
    _0x2ce819;
}
function addBreaks(_0x5ecdf9) {
    return _0x5ecdf9 = replaceAll(_0x5ecdf9, '\x0a', '<br>'),
    _0x5ecdf9 = replaceAll(_0x5ecdf9, '\x0d', '<br>'),
    _0x5ecdf9;
}
function _0x5801() {
    var _0x25b342 = ['19302gcLcSk', '411313JMuKfN', '2rzdToP', '1030059bomurJ', '4363440vAzubt', '2596452nBUAtj', '12054560GutApF', '965vKkZgO', '112ryWTBi', '41317xnxBKY'];
    _0x5801 = function() {
        return _0x25b342;
    }
    ;
    return _0x5801();
}
function addLinks(_0x5ac285, _0xf901df) {
    if (isMalicious(_0x5ac285['toLowerCase']()))
        return _0x5ac285;
    var _0x27aaec = ''
      , _0x5b287b = 0x0;
    while (!![]) {
        _0x5b287b = _0x5ac285['search']('http://[!-~]|https://[!-~]|ftp://[!-~]|www\x5c.[!-~]');
        if (_0x5b287b < 0x0)
            return _0x27aaec += _0x5ac285,
            _0x27aaec;
        _0x27aaec += _0x5ac285['substring'](0x0, _0x5b287b),
        _0x5ac285 = _0x5ac285['substring'](_0x5b287b, _0x5ac285['length']);
        for (var _0x107e07 = 0x0; _0x107e07 < _0x5ac285['length']; _0x107e07++) {
            if (_0x5ac285['charAt'](_0x107e07) == '\x20' || _0x5ac285['charAt'](_0x107e07) == '\x0a' || _0x5ac285['substring'](_0x107e07)['indexOf']('<br>') == 0x0 || _0x5ac285['substring'](_0x107e07)['indexOf']('\x22') == 0x0) {
                _0x27aaec += urlToLink(_0x5ac285['substring'](0x0, _0x107e07), _0xf901df),
                _0x5ac285 = _0x5ac285['substring'](_0x107e07, _0x5ac285['length']);
                break;
            } else {
                if (_0x107e07 == _0x5ac285['length'] - 0x1)
                    return _0x27aaec += urlToLink(_0x5ac285, _0xf901df),
                    _0x27aaec;
            }
        }
    }
    return null;
}
function isHREF(_0x139a9e) {
    for (var _0x38e635 = 0x1; _0x38e635 < _0x139a9e['length']; _0x38e635++) {
        if (_0x139a9e['charAt'](_0x38e635) == '\x22')
            return !![];
        if (_0x139a9e['charAt'](_0x38e635) == '\x20' || _0x139a9e['charAt'](_0x38e635) == '\x0a' || _0x139a9e['charAt'](_0x38e635) == '\x0a' || _0x139a9e['charAt'](_0x38e635))
            return ![];
    }
    return ![];
}
function isMalicious(_0x4b2972) {
    var _0x1bbb44 = _0x4b2972['toLowerCase']();
    if (_0x1bbb44['indexOf']('src=\x22') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('gyazoo') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('bit.ly') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('goo.gl') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('imgvr.cf') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('bfy.ty') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('grabify') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('missingdrivers') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('hurr-durr') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('gfycat') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('liveleak') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('ouo.io') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('segue.se') >= 0x0)
        return !![];
    if (_0x1bbb44['indexOf']('tinyurl.com') >= 0x0)
        return !![];
    return ![];
}
function urlToLink(_0x27d4ed, _0x18f41d) {
    if (_0x27d4ed['indexOf']('<') >= 0x0 || _0x27d4ed['indexOf']('>') >= 0x0)
        return _0x27d4ed;
    var _0x2d3198;
    if (_0x27d4ed['substring'](0x0, 0x7) == 'http://')
        _0x2d3198 = '';
    else
        _0x27d4ed['substring'](0x0, 0x8) == 'https://' ? _0x2d3198 = '' : _0x2d3198 = 'http://';
    var _0x3d05cd = _0x2d3198 + replaceAll(_0x27d4ed, '\x22', '&quot;')
      , _0x2da49e = URL_START + 'tourney?id=';
    if (_0x3d05cd['indexOf'](_0x2da49e) >= 0x0) {
        var _0x3a64c9 = _0x3d05cd['substring'](_0x2da49e['length'], _0x3d05cd['length']);
        if (_0x2da49e + _0x3a64c9 == _0x3d05cd && _0x3a64c9 == parseInt(_0x3a64c9)) {
            if (_0x18f41d)
                return '</span><span\x20class=\x22link\x22><a\x20onclick=\x22gotoPairings({id:' + _0x3a64c9 + '})\x22\x22><u>' + _0x27d4ed + '</u></a></span><span\x20class=\x22not_link\x22>';
            return '<a\x20onclick=\x22gotoPairings({id:' + _0x3a64c9 + '})\x22><u>' + _0x27d4ed + '</u></a>';
        }
    }
    var _0x2fd50c = URL_START + 'status?id=';
    if (_0x3d05cd['indexOf'](_0x2fd50c) >= 0x0) {
        var _0x3a64c9 = _0x3d05cd['substring'](_0x2fd50c['length'], _0x3d05cd['length']);
        if (_0x2fd50c + _0x3a64c9 == _0x3d05cd && _0x3a64c9 == parseInt(_0x3a64c9) && foundStatus(_0x3a64c9)) {
            if (_0x18f41d)
                return '</span><span\x20class=\x22link\x22><a\x20onclick=\x22findStatus({id:' + _0x3a64c9 + ',link:true})\x22\x22><u>' + _0x27d4ed + '</u></a></span><span\x20class=\x22not_link\x22>';
            return '<a\x20onclick=\x22findStatus({id:' + _0x3a64c9 + ',link:true})\x22><u>' + _0x27d4ed + '</u></a>';
        }
    }
    if (_0x18f41d)
        return '</span><span\x20class=\x22link\x22><a\x20href=\x22' + _0x3d05cd + '\x22\x20target=\x22_blank\x22><u>' + _0x27d4ed + '</u></a></span><span\x20class=\x22not_link\x22>';
    return '<a\x20href=\x22' + _0x3d05cd + '\x22\x20target=\x22_blank\x22><u>' + _0x27d4ed + '</u></a>';
}
function stripSpaces(_0x4b521d) {
    while (_0x4b521d['indexOf']('\x0d\x0d\x0d') >= 0x0) {
        _0x4b521d = _0x4b521d['replace']('\x0d\x0d\x0d', '\x0d\x0d');
    }
    while (_0x4b521d['indexOf']('\x20\x20') >= 0x0) {
        _0x4b521d = _0x4b521d['replace']('\x20\x20', '\x20');
    }
    return _0x4b521d;
}
function replaceReturns(_0x2af6d6) {
    return _0x2af6d6['replace'](/\r/g, '\x0a');
}
function newCardFront() {
    if (recycled_cardfronts_arr['length'] > 0x0) {
        var _0x64248c = recycled_cardfronts_arr['splice'](0x0, 0x1)[0x0];
        return _0x64248c['reset'](),
        _0x64248c;
    }
    return new CardFront();
}
function recycleCardFronts() {
    if (currentLabel == 'siding')
        return;
    for (var _0x2bf9ef = 0x0; _0x2bf9ef < deck_filled_arr['length']; _0x2bf9ef++) {
        recycled_cardfronts_arr['push'](deck_filled_arr[_0x2bf9ef]);
    }
    for (_0x2bf9ef = 0x0; _0x2bf9ef < side_filled_arr['length']; _0x2bf9ef++) {
        recycled_cardfronts_arr['push'](side_filled_arr[_0x2bf9ef]);
    }
    for (_0x2bf9ef = 0x0; _0x2bf9ef < extra_filled_arr['length']; _0x2bf9ef++) {
        recycled_cardfronts_arr['push'](extra_filled_arr[_0x2bf9ef]);
    }
}
function inBounds(_0x37f989, _0x30ef15, _0x968333) {
    !_0x30ef15 && (_0x30ef15 = 0x0);
    if (mouseX > _0x37f989['offset']()['left'] - _0x30ef15 && mouseX < _0x37f989['offset']()['left'] + _0x37f989[0x0]['getBoundingClientRect']()['width'] + _0x30ef15 && mouseY > _0x37f989['offset']()['top'] - _0x30ef15 && mouseY < _0x37f989['offset']()['top'] + _0x37f989[0x0]['getBoundingClientRect']()['height'] + _0x30ef15)
        return !![];
    return _0x968333 && (addLine3('X\x20=\x20' + mouseX + ',\x20L\x20=\x20' + _0x37f989['offset']()['left']),
    addLine3('W\x20=\x20' + _0x37f989[0x0]['getBoundingClientRect']()['width']),
    addLine3('Y\x20=\x20' + mouseY + ',\x20T\x20=\x20' + _0x37f989['offset']()['top']),
    addLine3('H\x20=\x20' + _0x37f989[0x0]['getBoundingClientRect']()['height'])),
    ![];
}
function inBounds2(_0x4eb290, _0x1159c0, _0x41aebb) {
    !_0x1159c0 && (_0x1159c0 = 0x0);
    if (mouseX > _0x4eb290['offset']()['left'] - _0x1159c0 && mouseX < _0x4eb290['offset']()['left'] + _0x4eb290[0x0]['getBoundingClientRect']()['width'] + _0x1159c0 && mouseY > _0x4eb290['offset']()['top'] - _0x1159c0 && mouseY < _0x4eb290['offset']()['top'] + _0x4eb290[0x0]['scrollHeight'] + _0x1159c0)
        return !![];
    return _0x41aebb && (addLine3('X\x20=\x20' + mouseX + ',\x20L\x20=\x20' + _0x4eb290['offset']()['left']),
    addLine3('W\x20=\x20' + _0x4eb290[0x0]['getBoundingClientRect']()['width']),
    addLine3('Y\x20=\x20' + mouseY + ',\x20T\x20=\x20' + _0x4eb290['offset']()['top']),
    addLine3('H\x20=\x20' + _0x4eb290[0x0]['scrollHeight'])),
    ![];
}
function onScreen(_0xa8596e) {
    var _0x3d309d = $('#content')[0x0]['style']['zoom']
      , _0x27134a = _0xa8596e['getBoundingClientRect']();
    if (_0x27134a['left'] >= 0x0 && _0x27134a['top'] >= 0x0 && _0x27134a['right'] * _0x3d309d <= window['innerWidth'] && _0x27134a['bottom'] * _0x3d309d <= window['innerHeight'])
        return console['log']('IS\x20ON\x20SCREEN'),
        !![];
    return console['log']('IS\x20NOT\x20SCREEN'),
    ![];
}
function updateMouse(_0x408b94, _0x1a7900) {
    _0x408b94['pageX'] && (mouseX = _0x408b94['pageX'],
    mouseY = _0x408b94['pageY']),
    mouseXScaled = mouseX / contentScale - marginLeft / contentScale,
    mouseYScaled = mouseY / contentScale - marginTop / contentScale,
    zooming && (mouseX = mouseXScaled + $('#content')['offset']()['left'],
    mouseY = mouseYScaled + $('#content')['offset']()['top']);
}
function takeScreenshot(_0x410f28, _0x17edfb) {
    if (taking_screenshot)
        return;
    var _0x5ca032 = Date['now']();
    if (SAFARI) {
        if ($('span:contains(\u00a0)')['length'] > 0x0) {
            $('span:contains(\u00a0)')['each'](function(_0x128089, _0xf0f2) {
                var _0x4000e2 = $(this)['html']();
                _0x4000e2 = _0x4000e2['replace'](/&nbsp;/g, '<font\x20style=\x22opacity:\x200;\x22>.</font>'),
                $(this)['html'](_0x4000e2);
            }),
            setTimeout(function() {
                takeScreenshot(_0x410f28, _0x17edfb);
            }, 0x32);
            return;
        }
    }
    !active && ($('html')['css']('pointer-events', 'none'),
    setTimeout(function() {
        $('html')['css']('pointer-events', 'auto');
    }, 0x1388));
    console['time']('dom-to-image'),
    taking_screenshot = !![],
    $(':focus')['blur']();
    var _0x1d9076 = $('#content')[0x0]['style']['zoom']
      , _0x5c2f59 = []
      , _0x22126f = []
      , _0x1136e6 = [];
    console['time']('each');
    var _0x36669f = $('#content');
    _0x36669f['find']('.os-scrollbar')['each'](function() {
        var _0x7a1f95 = $(this)
          , _0x2cda75 = _0x7a1f95['clone']();
        _0x2cda75['insertAfter'](_0x7a1f95),
        _0x7a1f95['detach'](),
        _0x1136e6['push'](function() {
            _0x7a1f95['insertAfter'](_0x2cda75),
            _0x2cda75['detach']();
        });
    }),
    $('*[data-overlayscrollbars-viewport]')['addClass']('unscrollable'),
    _0x36669f['find']('*')['each'](function(_0x3eaf49, _0xa6fc43) {
        var _0x17947a = ![]
          , _0x4f9057 = ![];
        if (_0xa6fc43['parentNode']['className']['indexOf'] && _0xa6fc43['parentNode']['className']['indexOf']('textarea') >= 0x0) {}
        if (_0xa6fc43['className']['indexOf'] && _0xa6fc43['className'] == 'card' && (_0xa6fc43['style']['top'] == '-21px' || _0xa6fc43['style']['top'] == '603px'))
            return !![];
        if (_0xa6fc43['parentNode']['classList']['contains']('cell')) {}
        if (_0xa6fc43['hasAttribute']('data-overlayscrollbars-viewport')) {}
        _0xa6fc43 instanceof HTMLSelectElement && (_0x17947a = !![]);
        if (_0xa6fc43 instanceof HTMLBRElement) {}
        if (_0xa6fc43 instanceof HTMLFontElement) {}
        (_0xa6fc43['style']['display'] === 'none' || _0xa6fc43['className']['indexOf'] && _0xa6fc43['className']['indexOf']('cardfront') == 0x0 && getRotationY(_0xa6fc43['parentNode']) > 0x5a) && (_0x17947a = !![]);
        if (!_0x17947a) {
            var _0x2a84c3 = _0xa6fc43['classList']['contains']('cell')
              , _0x4583de = _0xa6fc43['getBoundingClientRect']();
            if (_0x4583de['width'] == 0x0 || _0x4583de['height'] == 0x0) {}
            (_0x4583de['top'] + _0x4583de['height'] < 0x0 && !_0x2a84c3 || _0x4583de['left'] + _0x4583de['width'] < 0x0 || _0x4583de['bottom'] * _0x1d9076 - _0x4583de['height'] > window['innerHeight'] || _0x4583de['right'] * _0x1d9076 - _0x4583de['width'] > window['innerWidth']) && (_0x17947a = !![]);
        }
        if (!document['body']['contains'](_0xa6fc43))
            return !![];
        if (_0x17947a) {
            var _0x659f43 = _0xa6fc43['parentNode']
              , _0x41bf37 = _0xa6fc43['nextElementSibling'];
            _0x5c2f59['push'](function() {
                try {
                    _0x659f43['insertBefore'](_0xa6fc43, _0x41bf37);
                } catch (_0x2b5046) {
                    _0x659f43['appendChild'](_0xa6fc43);
                }
            }),
            _0x659f43['removeChild'](_0xa6fc43);
        }
    });
    EDGE && !_0x17edfb && !FIREFOX && _0x36669f['find']('*')['each'](function(_0x5c796e, _0x5af645) {
        if ($(this)['css']('overflow-y')['indexOf']('scroll') >= 0x0 || _0x5af645 instanceof HTMLTextAreaElement && $(this)[0x0]['scrollHeight'] > ceil($(this)['innerHeight']())) {
            var _0x3300fa = $(this)
              , _0x13fa26 = parseInt(_0x3300fa['css']('width'));
            _0x3300fa['css']('width', _0x13fa26 + 0x20),
            _0x5c2f59['push'](function() {
                _0x3300fa['css']('width', _0x13fa26 + 0x10);
            });
        }
    });
    fancy_scrollbars ? _0x36669f['find']('.scrollpane')['each'](function(_0x2533a3, _0x3dee58) {
        var _0x38ad4b = $(this)
          , _0x51d498 = $(this)['find']('*[data-overlayscrollbars-viewport]:first')
          , _0xf590dc = _0x38ad4b['scrollTop']()
          , _0x3b8e9b = _0xf590dc
          , _0x529014 = parseFloat(_0x38ad4b['css']('height'))
          , _0x2c8997 = _0x38ad4b['scrollHeight']();
        _0x2c8997 - _0xf590dc < _0x529014 && (_0x3b8e9b = _0x2c8997 - _0x529014);
        var _0x12d336 = _0x38ad4b['scrollLeft']();
        _0x51d498['css']('top', -_0x3b8e9b),
        _0x51d498['css']('left', -_0x12d336),
        _0x38ad4b['find']('.os-scrollbar-vertical')['css']('max-height', _0x529014),
        _0x38ad4b['css']('height', _0x529014 + _0xf590dc),
        _0x38ad4b['hasClass']('list') && _0x38ad4b['css']('clip-path', 'inset(0px\x200px\x20' + (_0x529014 + _0xf590dc - _0x529014) + 'px\x200px)'),
        _0x22126f['push'](function() {
            _0x51d498['css']('top', 0x0),
            _0x51d498['css']('left', 0x0),
            _0x51d498['css']('height', _0x529014),
            _0x38ad4b['find']('.os-scrollbar-vertical')['css']('max-height', 'unset'),
            _0x38ad4b['css']('height', _0x529014),
            _0x38ad4b['css']('clip-path', 'unset'),
            _0x38ad4b['scrollTop'](_0xf590dc);
        });
    }) : _0x36669f['find']('.scrollpane')['each'](function(_0x4e347f, _0x41fe98) {
        var _0x389a30 = $(this)
          , _0x192684 = $(this)['clone']()
          , _0x527f16 = _0x389a30['scrollTop']()
          , _0x4fe526 = $('<div\x20class=\x22scrollpane_proxy\x22><div>');
        _0x4fe526['css']('top', -_0x527f16),
        _0x4fe526['html'](_0x192684[0x0]['innerHTML']),
        _0x192684['html'](_0x4fe526),
        _0x192684['insertAfter'](_0x389a30),
        _0x389a30['detach'](),
        _0x22126f['push'](function() {
            _0x192684['replaceWith'](_0x389a30),
            _0x41fe98['scrollTop'] = _0x527f16;
        });
    });
    console['timeEnd']('each'),
    console['log'](_0x36669f['html']());
    var _0x34e589 = $['Deferred'](), _0xfa1f1b;
    EDGE || IE || mobile && SAFARI ? (_0xfa1f1b = _0x34e589['then'](function(_0x1a51c6) {
        return domtoimage['toSvg'](_0x36669f[0x0], {
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
    _0xfa1f1b['done'](function(_0x5f39a1) {
        console['timeEnd']('dom-to-image');
        var _0x38d3a8 = $(_0x5f39a1['substring'](0x21, _0x5f39a1['length']));
        _0x38d3a8['find']('img[src^=\x22data:image\x22]')['each'](function(_0x9fddee, _0x2a3a17) {
            var _0x29776a = _0x2a3a17['getAttribute']('src');
            _0x29776a['indexOf']('./images/') == 0x0 && (_0x29776a = _0x29776a['replace']('./images/', 'images/')),
            _0x29776a['indexOf']('images/') == 0x0 && (_0x29776a = _0x29776a['replace']('images/', 'https://images.duelingbook.com/')),
            $(_0x2a3a17)['attr']('src', _0x29776a);
        }),
        _0x38d3a8['find']('style:last')['html']('@font-face\x20{\x20font-family:\x20\x22Arial\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/Arial.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/Arial.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/Arial.svg#Arial\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/Arial.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/Arial.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/Arial.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Arial\x20Black2\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.svg#ArialBlack\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialBlack2.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Arial\x20Rounded\x20MT\x20Bold\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.svg#ArialRoundedMTBold\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/ArialRoundedMTBold.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22EssayCaps\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.svg#EssayCaps\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/EssayCaps.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Kristen\x20ITC\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.svg#KristenITC\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/KristenITC.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22MatrixRegularSmallCaps\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.svg#MatrixRegularSmallCaps\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Stone\x20Serif\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.svg#StoneSerif\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerif.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Stone\x20Serif\x20Bold\x22;\x20font-weight:\x20bold;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.svg#StoneSerifBold\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifBold.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22Stone\x20Serif\x20Italic\x22;\x20font-style:\x20italic;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.svg#StoneSerifItalic\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/StoneSerifItalic.woff2\x22)\x20format(\x22woff2\x22);\x20}\x20@font-face\x20{\x20font-family:\x20\x22MatrixBook\x22;\x20src:\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.eot\x22);\x20src:\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.eot?#iefix\x22)\x20format(\x22embedded-opentype\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.svg#MatrixBook\x22)\x20format(\x22svg\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.ttf\x22)\x20format(\x22truetype\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.woff\x22)\x20format(\x22woff\x22),\x20url(\x22https://static.duelingbook.com/fonts/MatrixBook.woff2\x22)\x20format(\x22woff2\x22);\x20}'),
        _0x38d3a8['find']('.cardfront')['each'](function(_0x24cc91, _0x3ea6f) {
            if ($(this)['data']('custom') || $(this)['data']('id') > 0x4e20)
                return !![];
            var _0x47da6b = $(this)['find']('.pic')['attr']('src');
            _0x47da6b = _0x47da6b['substring'](_0x47da6b['lastIndexOf']('/') + 0x1, _0x47da6b['length']);
            if (_0x47da6b['indexOf']('.jpg') < 0x0 && _0x47da6b['indexOf']('.gif') < 0x0)
                return !![];
            var _0x204ffc = $('<img\x20class=\x22cardimage\x22\x20src=\x22https://images.duelingbook.com/cards-small/' + _0x47da6b + '\x22\x20/>');
            $(_0x3ea6f)['html'](_0x204ffc);
        });
        var _0x4f5416 = _0x38d3a8[0x0]['outerHTML'];
        _0x4f5416 = _0x4f5416['replace'](/%0A/g, '');
        var _0x32beb8 = new FormData();
        _0x32beb8['append']('user_id', userId),
        _0x32beb8['append']('username', str(username)),
        _0x32beb8['append']('password', password),
        _0x32beb8['append']('browser', getBrowser()),
        _0x32beb8['append']('platform', getPlatform()),
        _0x32beb8['append']('svg', _0x4f5416);
        var _0x524045 = new XMLHttpRequest();
        _0x524045['open']('POST', URL_START + 'php-scripts/upload-svg.php', !![]),
        _0x524045['onreadystatechange'] = function() {
            if (_0x524045['readyState'] == 0x4 && _0x524045['status'] == 0xc8) {
                console['log'](_0x524045['responseText']);
                if (_0x524045['responseText']['indexOf']('http') != 0x0)
                    return;
                _0x17edfb ? Send({
                    'action': 'Send\x20screenshot',
                    'username': _0x17edfb,
                    'link': _0x524045['responseText']
                }) : (window['open'](_0x524045['responseText']),
                setTimeout(function() {
                    activated && showAnnouncement('Your\x20Screenshot:', '<a\x20href=\x22' + _0x524045['responseText'] + '\x22\x20target=\x22_blank\x22><font\x20color=\x22#00CCFF\x22><u>' + _0x524045['responseText'] + '</u></font></a>');
                }, 0x3e8));
            }
        }
        ,
        _0x524045['send'](_0x32beb8),
        _0x3c70f8(),
        console['log']('c');
    })) : (_0xfa1f1b = _0x34e589['then'](function(_0x5cb7de) {
        if (CHROME) {
            if (PC && getChromeVersion() >= 0x57 && isBadChrome() || getChromeVersion() >= 0x57 && getPlatform() != 'PC')
                $('#content')['css']('margin-left', 0x0),
                $('#content')['css']('margin-top', 0x0),
                $('#content')['css']('margin', 0x0);
            else {
                if (isMediumVersion() || PC && getChromeVersion() >= 0x57 && !isBadChrome()) {
                    screenshotStyle['left'] = parseInt(-marginLeft) + 'px';
                    if (!MAC) {}
                }
            }
            PC && (!zooming && (alignRight && (screenshotStyle['left'] = parseInt(-marginLeft * 0x2) + 'px')));
        }
        return domtoimage['toPng'](_0x36669f[0x0], {
            'bgcolor': '#000000',
            'width': 0x400,
            'height': 0x280,
            'style': screenshotStyle,
            'imagePlaceholder': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        });
    }),
    _0xfa1f1b['done'](function(_0x4eff6e) {
        console['timeEnd']('dom-to-image'),
        console['log'](_0x4eff6e),
        _0x5ca032 = Date['now']() - _0x5ca032,
        uploadImage(_0x4eff6e['substring'](0x16, _0x4eff6e['length']), 'Duelingbook\x20Screenshot', getImageDescription(_0x5ca032), 'Client-Id\x20577062908ebfbf6', _0x17edfb),
        _0x3c70f8();
    }));
    _0x34e589['resolve'](),
    _0xfa1f1b['fail'](function(_0x3159f7) {
        console['log']('fail'),
        _0x3c70f8(),
        _0x17edfb ? Send({
            'action': 'Screenshot\x20fail',
            'username': _0x17edfb
        }) : errorE('Failed\x20to\x20take\x20screenshot'),
        console['error']('oops,\x20something\x20went\x20wrong!', _0x3159f7),
        !SAFARI && console['log'](_0x3159f7['srcElement']['currentSrc']);
    });
    !_0x17edfb && playSound(SnapShot);
    function _0x3c70f8() {
        taking_screenshot = ![],
        $('html')['css']('pointer-events', 'auto'),
        _0x5c2f59['reverse']();
        for (var _0x5c515d = 0x0; _0x5c515d < _0x5c2f59['length']; _0x5c515d++) {
            _0x5c2f59[_0x5c515d]();
        }
        for (var _0x5c515d = 0x0; _0x5c515d < _0x1136e6['length']; _0x5c515d++) {
            _0x1136e6[_0x5c515d]();
        }
        for (var _0x5c515d = 0x0; _0x5c515d < _0x22126f['length']; _0x5c515d++) {
            _0x22126f[_0x5c515d]();
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
function applyComputedStyles(_0x5a9d0a, _0x3a7e8a) {
    console['log'](_0x3a7e8a);
    for (var _0x130227 in _0x3a7e8a) {
        if (_0x3a7e8a['hasOwnProperty'](_0x130227)) {
            var _0x2fcbc0 = 'element.style.' + _0x3a7e8a[_0x130227] + '\x20=\x20' + _0x130227;
            console['log'](_0x2fcbc0),
            eval(_0x2fcbc0);
        }
    }
}
function applyComputedStyles(_0x5363aa, _0x5c2a96) {
    Array['from'](_0x5c2a96)['forEach'](function(_0x143c8b) {
        return _0x5363aa['style']['setProperty'](_0x143c8b, _0x5c2a96['getPropertyValue'](_0x143c8b), _0x5c2a96['getPropertyPriority'](_0x143c8b));
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
function getImageDescription(_0x30b143) {
    var _0x4b09e9 = '';
    return username && !replay && (_0x4b09e9 += username + '\x0a'),
    _0x4b09e9 += getBrowser(),
    CHROME && (_0x4b09e9 += '\x20v' + getChromeVersion()),
    _0x4b09e9 += ',\x20' + getPlatform() + '\x0a',
    _0x4b09e9 += 'Version\x20' + VERSION + '\x0a',
    _0x4b09e9 += _0x30b143 + '\x20millis\x0a',
    _0x4b09e9 += image_url,
    _0x4b09e9;
}
function isTainted(_0x149644) {
    if (_0x149644 instanceof HTMLImageElement) {
        if (_0x149644['src']['toLowerCase']()['indexOf']('duelingbook.com') >= 0x0)
            return !![];
        if ($('#profile_body\x20.profile_txt')[0x0]['contains'](_0x149644))
            return ![];
    }
    return !![];
}
function cssPath(_0x77f087) {
    var _0x4c7a34 = '';
    while (!![]) {
        if (_0x77f087['id'])
            return '#' + _0x77f087['id'] + _0x4c7a34;
        var _0x4b4ad7 = 0x1
          , _0x55ceee = $(_0x77f087);
        while (!![]) {
            _0x55ceee = $(_0x55ceee)['prev']();
            if (_0x55ceee['length'] == 0x0)
                break;
            _0x4b4ad7++;
        }
        _0x4c7a34 = ':nth-child(' + _0x4b4ad7 + ')' + _0x4c7a34;
        _0x77f087['classList'] && Array['from'](_0x77f087['classList'])['length'] > 0x0 ? _0x4c7a34 = '\x20>\x20.' + Array['from'](_0x77f087['classList'])[0x0] + _0x4c7a34 : _0x4c7a34 = '\x20>\x20*' + _0x4c7a34;
        if (_0x77f087['parentNode'])
            _0x77f087 = _0x77f087['parentNode'];
        else
            break;
    }
    return _0x4c7a34['substring'](0x1, _0x4c7a34['length']) + ':first';
}
function cssImagePath(_0x408e38) {
    var _0x4d06fc = 'img:first'
      , _0xd8c0d0 = _0x408e38;
    while (!![]) {
        if (_0xd8c0d0['id']) {
            _0x4d06fc = '\x20#' + _0xd8c0d0['id'] + _0x4d06fc;
            break;
        }
        Array['from'](_0xd8c0d0['classList'])['length'] > 0x0 && (_0x4d06fc = '\x20.' + Array['from'](_0xd8c0d0['classList'])['join']('.') + _0x4d06fc);
        if (_0xd8c0d0['parentNode'])
            _0xd8c0d0 = _0xd8c0d0['parentNode'];
        else
            break;
    }
    return _0x4d06fc['substring'](0x1, _0x4d06fc['length']);
}
function resizeImage(_0x59914a) {
    var _0x530d64 = new Image();
    _0x530d64['onload'] = function() {
        var _0x249a7f, _0x3a64b6 = this['naturalWidth'], _0x369060 = this['naturalHeight'], _0x4559c8 = document['createElement']('canvas');
        _0x4559c8['width'] = _0x3a64b6,
        _0x4559c8['height'] = _0x369060;
        var _0x3a69e6 = _0x4559c8['getContext']('2d');
        if (_0x369060 > 0x280 && _0x3a64b6 > 0x400 && _0x369060 / _0x3a64b6 < 0.625)
            _0x3a64b6 = Math['round'](_0x3a64b6 * 0x280 / _0x369060),
            Math['abs'](_0x3a64b6 % 0x2) == 0x1 && _0x3a64b6++,
            _0x369060 = 0x280,
            _0x4559c8['width'] = _0x3a64b6,
            _0x4559c8['height'] = _0x369060;
        else
            _0x3a64b6 > 0x400 && _0x369060 > 0x280 && _0x3a64b6 / _0x369060 > 0.625 && (_0x369060 = Math['round'](_0x369060 * 0x400 / _0x3a64b6),
            Math['abs'](_0x369060 % 0x2) == 0x1 && _0x369060++,
            _0x3a64b6 = 0x400,
            _0x4559c8['width'] = _0x3a64b6,
            _0x4559c8['height'] = _0x369060);
        _0x3a69e6['drawImage'](this, 0x0, 0x0, _0x3a64b6, _0x369060);
        if (_0x369060 / _0x3a64b6 < 0.625) {
            var _0x5d23e4 = (_0x3a64b6 - _0x369060 / 0.625) / 0x2;
            _0x4559c8['width'] = _0x3a64b6 - _0x5d23e4 * 0x2,
            _0x3a69e6['drawImage'](_0x530d64, -_0x5d23e4, 0x0, _0x3a64b6, _0x369060);
        } else {
            if (_0x369060 / _0x3a64b6 > 0.625) {
                var _0x49b12b = (_0x369060 - _0x3a64b6 * 0.625) / 0x2;
                _0x4559c8['height'] = _0x3a64b6 * 0.625,
                _0x3a69e6['drawImage'](_0x530d64, 0x0, -_0x49b12b, _0x3a64b6, _0x369060);
            }
        }
        try {
            _0x249a7f = _0x4559c8['toDataURL'](),
            window['open'](_0x249a7f);
        } catch (_0x4d7074) {
            console['log'](_0x4d7074),
            errorE('Failed\x20to\x20take\x20screenshot');
        }
        _0x4559c8['remove']();
    }
    ,
    _0x530d64['setAttribute']('src', _0x59914a);
}
function uploadImage(_0x3dfd29, _0x4c57eb, _0x1216f8, _0x4a51da, _0x338637) {
    console['time']('uploadImage');
    var _0x38d902 = new FormData();
    _0x38d902['append']('image', _0x3dfd29),
    _0x38d902['append']('type', 'base64'),
    _0x38d902['append']('title', _0x4c57eb),
    _0x38d902['append']('description', _0x1216f8);
    var _0x4d209c = new XMLHttpRequest();
    _0x4d209c['open']('POST', 'https://api.imgur.com/3/image', !![]),
    _0x4d209c['setRequestHeader']('Authorization', _0x4a51da),
    _0x4d209c['onreadystatechange'] = function() {
        _0x4d209c['readyState'] == 0x4 && _0x4d209c['status'] == 0xc8 && (console['timeEnd']('uploadImage'),
        console['log'](_0x4d209c['responseText']),
        openScreenshot(_0x4d209c['responseText'], _0x338637));
    }
    ,
    _0x4d209c['send'](_0x38d902);
}
function openScreenshot(_0x42aaa4, _0x3a728d) {
    var _0x4c63fd = JSON['parse'](_0x42aaa4);
    _0x3a728d ? Send({
        'action': 'Send\x20screenshot',
        'username': _0x3a728d,
        'link': _0x4c63fd['data']['link']
    }) : (window['open'](_0x4c63fd['data']['link']),
    setTimeout(function() {
        activated && showAnnouncement('Your\x20Screenshot:', '<a\x20href=\x22' + _0x4c63fd['data']['link'] + '\x22\x20target=\x22_blank\x22><font\x20color=\x22#00CCFF\x22><u>' + _0x4c63fd['data']['link'] + '</u></font></a>');
    }, 0x3e8));
    var _0x1813d9 = new FormData();
    _0x1813d9['append']('user_id', userId),
    _0x1813d9['append']('username', username),
    _0x1813d9['append']('password', password),
    _0x1813d9['append']('result', _0x42aaa4),
    _0x1813d9['append']('version', VERSION);
    var _0x46a180 = new XMLHttpRequest();
    _0x46a180['open']('POST', URL_START + 'php-scripts/upload-screenshot.php', !![]),
    _0x46a180['send'](_0x1813d9);
}
function playSound(_0x14dcaa, _0x3427bc) {
    _0x3427bc !== ![] && (_0x3427bc = !![]);
    try {
        if (typeof _0x14dcaa == 'string') {
            for (var _0x455a63 = 0x0; _0x455a63 < audio_arr['length']; _0x455a63++) {
                if (audio_arr[_0x455a63]['getAttribute']('src') == _0x14dcaa) {
                    _0x14dcaa = audio_arr[_0x455a63];
                    break;
                }
            }
            _0x455a63 == audio_arr['length'] && (_0x14dcaa = new Audio(_0x14dcaa));
        }
        var _0x12bcf9 = _0x14dcaa;
        !_0x14dcaa['paused'] && (_0x12bcf9 = _0x14dcaa['cloneNode']());
        $('#cross')['is'](':visible') ? _0x12bcf9['volume'] = 0x0 : _0x12bcf9['volume'] = 0.35;
        if (_0x3427bc)
            _0x12bcf9['currentTime'] = 0x0;
        else {
            _0x14dcaa['play']();
            return;
        }
        _0x12bcf9['play'](),
        audio_arr['push'](_0x12bcf9);
    } catch (_0x3319dd) {
        console['error'](_0x3319dd);
    }
}
function stopSounds() {
    while (audio_arr['length'] > 0x0) {
        audio_arr[0x0]['pause'](),
        audio_arr['splice'](0x0, 0x1);
    }
}
audio_arr;
function selectText(_0x3370dd) {
    _0x3370dd instanceof HTMLFontElement && (_0x3370dd = _0x3370dd['parentNode']);
    if (!$(_0x3370dd)['hasClass']('selectable') && !$(_0x3370dd)['parent']()['hasClass']('selectable'))
        return;
    if (document['selection']) {
        var _0x2c8ce5 = document['body']['createTextRange']();
        _0x2c8ce5['moveToElementText'](_0x3370dd),
        _0x2c8ce5['select']();
    } else {
        var _0x2c8ce5 = document['createRange']();
        _0x2c8ce5['setStartBefore'](_0x3370dd),
        _0x2c8ce5['setEndAfter'](_0x3370dd),
        window['getSelection']()['addRange'](_0x2c8ce5);
    }
}
function clearSelection() {
    var _0x50a401;
    if ((_0x50a401 = document['selection']) && _0x50a401['empty'])
        _0x50a401['empty']();
    else {
        window['getSelection'] && window['getSelection']()['removeAllRanges']();
        var _0x5b2c00 = document['activeElement'];
        if (_0x5b2c00) {
            var _0x30f2fe = _0x5b2c00['nodeName']['toLowerCase']();
            (_0x30f2fe == 'textarea' || _0x30f2fe == 'input' && _0x5b2c00['type'] == 'text') && (_0x5b2c00['selectionStart'] = _0x5b2c00['selectionEnd']);
        }
    }
}
function onKeyUp(_0x58ee3d) {
    shiftDown = ![],
    controlDown = ![],
    $('html')['off']('keyup', onKeyUp);
    return;
}
function goto(_0x3c927b) {
    changing_components = !![],
    $('#frames')['children']()['hide'](),
    $('#' + _0x3c927b)['show'](),
    currentLabel = _0x3c927b,
    $('#' + currentLabel + '\x20img')['each'](function(_0x13eb03, _0x502a61) {
        $(this)['attr']('data-src') && ($(this)['attr']('src', $(this)['attr']('data-src')),
        $(this)['removeAttr']('data-src'));
    });
}
function watchComponent(_0x405e7a) {
    var _0x4938b0 = _0x405e7a['data']('proxy');
    watch(_0x405e7a, 'display', function() {
        _0x4938b0['css']('display', _0x405e7a['css']('display'));
    }),
    watch(_0x405e7a, 'left', function() {
        var _0x4d4420 = parseFloat(_0x405e7a['css']('left'));
        (_0x4938b0['hasClass']('checkbox') || _0x4938b0['hasClass']('radiobutton')) && (_0x4d4420 += 0x2),
        _0x4938b0['css']('left', _0x4d4420);
    }),
    watch(_0x405e7a, 'top', function() {
        var _0x52cdb5 = parseFloat(_0x405e7a['css']('top'));
        (_0x4938b0['hasClass']('checkbox') || _0x4938b0['hasClass']('radiobutton')) && (_0x52cdb5 += 0x2),
        _0x4938b0['css']('top', _0x52cdb5);
    }),
    watch(_0x405e7a, 'color', function() {
        _0x4938b0['css']('color', _0x405e7a['css']('color'));
    });
}
function getAvatarStart(_0x56ed31) {
    if (_0x56ed31['indexOf']('http') == 0x0)
        return _0x56ed31;
    return parseInt(_0x56ed31['substring'](0x0, _0x56ed31['indexOf']('.'))) < 0x36b0 ? CARD_IMAGES_START + _0x56ed31 : (_0x56ed31 = PROFILE_PIC_START + _0x56ed31,
    _0x56ed31['includes']('.gif') && (_0x56ed31 = _0x56ed31['replace']('images.duelingbook.com', 'www.duelingbook.com/images')),
    _0x56ed31);
}
function Cell(_0xbdc29d) {
    var _0xbc4fd5 = document['createElement']('div');
    _0xbc4fd5['className'] = 'cell\x20cell1';
    var _0x35da87 = document['createElement']('span');
    return _0x35da87['textContent'] = _0xbdc29d,
    _0xbc4fd5['appendChild'](_0x35da87),
    streaming && isOffensive(_0xbdc29d) && $(_0x35da87)['css']('opacity', 0x0),
    _0xbc4fd5;
}
function Cell2(_0x28405c) {
    var _0xb05fb4 = new Cell(_0x28405c);
    return removeClass(_0xb05fb4, 'cell1'),
    addClass(_0xb05fb4, 'cell2'),
    _0xb05fb4;
}
function cellClickE(_0x5b7c41) {
    $(_0x5b7c41['currentTarget'])['find']('.cell.selected,\x20.cell2.selected')['removeClass']('selected'),
    $(_0x5b7c41['target'])['filter']('.cell')['addClass']('selected');
}
function updateCardLimits() {
    var _0xfeb7b = $('#' + currentLabel + '\x20.ocg_limit_rb')['is'](':checked');
    for (var _0x574edb = 0x0; _0x574edb < deck_arr['length']; _0x574edb++) {
        deck_arr[_0x574edb]['setLimit'](_0xfeb7b);
    }
    for (_0x574edb = 0x0; _0x574edb < side_arr['length']; _0x574edb++) {
        side_arr[_0x574edb]['setLimit'](_0xfeb7b);
    }
    for (_0x574edb = 0x0; _0x574edb < extra_arr['length']; _0x574edb++) {
        extra_arr[_0x574edb]['setLimit'](_0xfeb7b);
    }
    for (_0x574edb = 0x0; _0x574edb < search_arr['length']; _0x574edb++) {
        search_arr[_0x574edb]['setLimit'](_0xfeb7b);
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
function sortCards2(_0x2e7567, _0x3d4991) {
    if (_0x2e7567['data']('card_type') > _0x3d4991['data']('card_type'))
        return 0x1;
    if (_0x2e7567['data']('card_type') < _0x3d4991['data']('card_type'))
        return -0x1;
    if (_0x2e7567['data']('pendulum') < _0x3d4991['data']('pendulum'))
        return -0x1;
    if (_0x2e7567['data']('pendulum') > _0x3d4991['data']('pendulum'))
        return 0x1;
    if (_0x2e7567['data']('is_link') > _0x3d4991['data']('is_link'))
        return 0x1;
    if (_0x2e7567['data']('is_link') < _0x3d4991['data']('is_link'))
        return -0x1;
    if (_0x2e7567['data']('monster_color') > _0x3d4991['data']('monster_color'))
        return 0x1;
    if (_0x2e7567['data']('monster_color') < _0x3d4991['data']('monster_color'))
        return -0x1;
    if (_0x2e7567['data']('name')['toLowerCase']() > _0x3d4991['data']('name')['toLowerCase']())
        return 0x1;
    if (_0x2e7567['data']('name')['toLowerCase']() < _0x3d4991['data']('name')['toLowerCase']())
        return -0x1;
    if (_0x2e7567['data']('id') > _0x3d4991['data']('id'))
        return 0x1;
    if (_0x2e7567['data']('id') < _0x3d4991['data']('id'))
        return -0x1;
}
function clearDeck(_0x311fd9) {
    _0x311fd9 != !![] && recycleCardFronts(),
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
function addCardToMain(_0x17a6b1, _0x43ffd9) {
    _0x43ffd9 == undefined && (_0x43ffd9 = -0x1),
    cardsInMain < 0x3c && (cardsInMain++,
    _0x43ffd9 >= 0x0 ? deck_filled_arr['splice'](_0x43ffd9, 0x0, _0x17a6b1) : deck_filled_arr['push'](_0x17a6b1),
    !loading_deck && (initializeDeckCards(),
    setUnsavedChanges())),
    searching = !![];
}
function addCardToSide(_0x4daaa9, _0xa38f17) {
    _0xa38f17 == undefined && (_0xa38f17 = -0x1),
    cardsInSide < 0xf && (cardsInSide++,
    _0xa38f17 >= 0x0 ? side_filled_arr['splice'](_0xa38f17, 0x0, _0x4daaa9) : side_filled_arr['push'](_0x4daaa9),
    !loading_deck && (initializeDeckCards(),
    setUnsavedChanges())),
    searching = !![];
}
function addCardToExtra(_0x28211e, _0x17b3e9) {
    _0x17b3e9 == undefined && (_0x17b3e9 = -0x1),
    cardsInExtra < 0xf && (cardsInExtra++,
    _0x17b3e9 >= 0x0 ? extra_filled_arr['splice'](_0x17b3e9, 0x0, _0x28211e) : extra_filled_arr['push'](_0x28211e),
    !loading_deck && (initializeDeckCards(),
    setUnsavedChanges())),
    searching = !![];
}
function DeckCard(_0x197981) {
    var _0xe5b817 = newCardFront();
    return _0xe5b817['attr']('id', 'deck_card' + (_0x197981 + 0x1)),
    _0xe5b817['addClass']('deck_card'),
    _0xe5b817['css']('left', mainXArray[_0x197981]),
    _0xe5b817['css']('top', mainYArray[_0x197981]),
    addCardDragging(_0xe5b817, removeCardFromMain, deckCardDrop),
    _0xe5b817;
}
function SideCard(_0x4a02bd) {
    var _0x4c143e = newCardFront();
    return _0x4c143e['attr']('id', 'side_card' + (_0x4a02bd + 0x1)),
    _0x4c143e['addClass']('side_card'),
    _0x4c143e['css']('left', sideXArray[_0x4a02bd]),
    _0x4c143e['css']('top', 489.1),
    addCardDragging(_0x4c143e, removeCardFromSide, sideCardDrop),
    _0x4c143e;
}
function ExtraCard(_0x4fd272) {
    var _0x370eca = newCardFront();
    return _0x370eca['attr']('id', 'extra_card' + (_0x4fd272 + 0x1)),
    _0x370eca['addClass']('extra_card'),
    _0x370eca['css']('left', sideXArray[_0x4fd272]),
    _0x370eca['css']('top', 571.6),
    addCardDragging(_0x370eca, removeCardFromExtra, extraCardDrop),
    _0x370eca;
}
function SearchCard(_0x3b1e76) {
    var _0x2c14c8 = newCardFront();
    return _0x2c14c8['attr']('id', 'search_card' + (_0x3b1e76 + 0x1)),
    _0x2c14c8['addClass']('search_card'),
    _0x2c14c8['css']('left', searchXArray[_0x3b1e76]),
    _0x2c14c8['css']('top', searchYArray[_0x3b1e76]),
    addCardDragging(_0x2c14c8, null, searchCardDrop),
    _0x2c14c8;
}
function initializeDeckCards() {
    var _0x4a6ea4 = $('#' + currentLabel + '\x20.ocg_limit_rb')['is'](':checked');
    for (var _0x440f40 = 0x0; _0x440f40 < deck_filled_arr['length']; _0x440f40++) {
        deck_arr['length'] < _0x440f40 + 0x1 && deck_arr['push'](new DeckCard(_0x440f40)),
        deck_arr[_0x440f40]['data']('id') != deck_filled_arr[_0x440f40]['data']('id') && (deck_arr[_0x440f40]['copyCard'](deck_filled_arr[_0x440f40]),
        currentLabel == 'deck_constructor' && deck_arr[_0x440f40]['setLimit'](_0x4a6ea4));
    }
    for (_0x440f40 = 0x0; _0x440f40 < side_filled_arr['length']; _0x440f40++) {
        side_arr['length'] < _0x440f40 + 0x1 && side_arr['push'](new SideCard(_0x440f40)),
        side_arr[_0x440f40]['data']('id') != side_filled_arr[_0x440f40]['data']('id') && (side_arr[_0x440f40]['copyCard'](side_filled_arr[_0x440f40]),
        currentLabel == 'deck_constructor' && side_arr[_0x440f40]['setLimit'](_0x4a6ea4));
    }
    for (_0x440f40 = 0x0; _0x440f40 < extra_filled_arr['length']; _0x440f40++) {
        extra_arr['length'] < _0x440f40 + 0x1 && extra_arr['push'](new ExtraCard(_0x440f40)),
        extra_arr[_0x440f40]['data']('id') != extra_filled_arr[_0x440f40]['data']('id') && (extra_arr[_0x440f40]['copyCard'](extra_filled_arr[_0x440f40]),
        currentLabel == 'deck_constructor' && extra_arr[_0x440f40]['setLimit'](_0x4a6ea4));
    }
    cardsInMain = deck_filled_arr['length'],
    cardsInSide = side_filled_arr['length'],
    cardsInExtra = extra_filled_arr['length'],
    countMain(),
    countSide(),
    countExtra();
}
function countMain() {
    for (var _0x2946b9 = 0x0; _0x2946b9 < deck_arr['length']; _0x2946b9++) {
        cardsInMain > _0x2946b9 ? ((deck_arr[_0x2946b9]['parent']()['length'] == 0x0 || !deck_arr[_0x2946b9]['parent']()['is'](':visible')) && (currentLabel == 'deck_constructor' ? $('#deck_constructor\x20.cards')['append'](deck_arr[_0x2946b9]) : $('#siding')['append'](deck_arr[_0x2946b9])),
        deck_arr[_0x2946b9][0x0]['style']['display'] != 'block' && (deck_arr[_0x2946b9][0x0]['style']['display'] = 'block',
        deck_arr[_0x2946b9]['setCardName']())) : deck_arr[_0x2946b9][0x0]['style']['display'] = 'none';
    }
    var _0x5990d8 = 0x0
      , _0x21c737 = 0x0
      , _0x162c66 = 0x0
      , _0x25ce5a = 0x0
      , _0x336d99 = 0x0
      , _0x37d67d = 0x0;
    for (_0x2946b9 = 0x0; _0x2946b9 < deck_filled_arr['length']; _0x2946b9++) {
        if (deck_filled_arr[_0x2946b9]['data']('card_type') == 'Spell')
            _0x336d99++;
        else {
            if (deck_filled_arr[_0x2946b9]['data']('card_type') == 'Trap')
                _0x37d67d++;
            else {
                if (deck_filled_arr[_0x2946b9]['data']('pendulum') == 0x1)
                    _0x25ce5a++;
                else {
                    if (deck_filled_arr[_0x2946b9]['data']('monster_color') == 'Normal')
                        _0x5990d8++;
                    else {
                        if (deck_filled_arr[_0x2946b9]['data']('monster_color') == 'Effect')
                            _0x21c737++;
                        else
                            deck_filled_arr[_0x2946b9]['data']('monster_color') == 'Ritual' && _0x162c66++;
                    }
                }
            }
        }
    }
    $('#deck_constructor\x20.total_txt')['text'](deck_filled_arr['length']),
    $('.total_normal_txt')['text'](_0x5990d8),
    $('.total_effect_txt')['text'](_0x21c737),
    $('.total_ritual_txt')['text'](_0x162c66),
    $('.total_pendulum_txt')['text'](_0x25ce5a),
    $('.total_spell_txt')['text'](_0x336d99),
    $('.total_trap_txt')['text'](_0x37d67d);
}
function countSide() {
    for (var _0x17d43d = 0x0; _0x17d43d < side_arr['length']; _0x17d43d++) {
        cardsInSide > _0x17d43d ? ((side_arr[_0x17d43d]['parent']()['length'] == 0x0 || !side_arr[_0x17d43d]['parent']()['is'](':visible')) && (currentLabel == 'deck_constructor' ? $('#deck_constructor\x20.cards')['append'](side_arr[_0x17d43d]) : $('#siding')['append'](side_arr[_0x17d43d])),
        side_arr[_0x17d43d][0x0]['style']['display'] != 'block' && (side_arr[_0x17d43d][0x0]['style']['display'] = 'block',
        side_arr[_0x17d43d]['setCardName']())) : side_arr[_0x17d43d][0x0]['style']['display'] = 'none';
    }
}
function countExtra() {
    for (var _0x20c93f = 0x0; _0x20c93f < extra_arr['length']; _0x20c93f++) {
        cardsInExtra > _0x20c93f ? ((extra_arr[_0x20c93f]['parent']()['length'] == 0x0 || !extra_arr[_0x20c93f]['parent']()['is'](':visible')) && (currentLabel == 'deck_constructor' ? $('#deck_constructor\x20.cards')['append'](extra_arr[_0x20c93f]) : $('#siding')['append'](extra_arr[_0x20c93f])),
        extra_arr[_0x20c93f][0x0]['style']['display'] != 'block' && (extra_arr[_0x20c93f][0x0]['style']['display'] = 'block',
        extra_arr[_0x20c93f]['setCardName']())) : extra_arr[_0x20c93f][0x0]['style']['display'] = 'none';
    }
}
function getUnderlyingDeckCard() {
    for (var _0x3573d4 = 0x0; _0x3573d4 < deck_arr['length']; _0x3573d4++) {
        if (inBounds(deck_arr[_0x3573d4], 0x5))
            return _0x3573d4;
    }
    return -0x1;
}
function getUnderlyingSideCard() {
    for (var _0x4cd078 = 0x0; _0x4cd078 < side_arr['length']; _0x4cd078++) {
        if (inBounds(side_arr[_0x4cd078], 0x4))
            return _0x4cd078;
    }
    return -0x1;
}
function getUnderlyingExtraCard() {
    for (var _0x4070a8 = 0x0; _0x4070a8 < extra_arr['length']; _0x4070a8++) {
        if (inBounds(extra_arr[_0x4070a8], 0x4))
            return _0x4070a8;
    }
    return -0x1;
}
function exportDeckYDK() {
    var _0x2ee8f6 = '';
    _0x2ee8f6 += '#created\x20by\x20...' + '\x0a',
    _0x2ee8f6 += '#main' + '\x0a';
    for (var _0x13d6a9 = 0x0; _0x13d6a9 < deck_filled_arr['length']; _0x13d6a9++) {
        ~~deck_filled_arr[_0x13d6a9]['data']('serial_number') > 0x0 && (_0x2ee8f6 += deck_filled_arr[_0x13d6a9]['data']('serial_number') + '\x0a');
    }
    _0x2ee8f6 += '#extra' + '\x0a';
    for (_0x13d6a9 = 0x0; _0x13d6a9 < extra_filled_arr['length']; _0x13d6a9++) {
        ~~extra_filled_arr[_0x13d6a9]['data']('serial_number') > 0x0 && (_0x2ee8f6 += extra_filled_arr[_0x13d6a9]['data']('serial_number') + '\x0a');
    }
    _0x2ee8f6 += '!side' + '\x0a';
    for (_0x13d6a9 = 0x0; _0x13d6a9 < side_filled_arr['length']; _0x13d6a9++) {
        ~~side_filled_arr[_0x13d6a9]['data']('serial_number') > 0x0 && (_0x2ee8f6 += side_filled_arr[_0x13d6a9]['data']('serial_number') + '\x0a');
    }
    while (_0x2ee8f6['indexOf']('\x0a\x0a') >= 0x0) {
        _0x2ee8f6 = _0x2ee8f6['replace']('\x0a\x0a', '\x0a');
    }
    var _0x5f1241 = deck['data'];
    _0x5f1241 = replaceSpecialCharacters(_0x5f1241),
    download(_0x2ee8f6, _0x5f1241 + '.ydk', 'text/plain');
}
function exportDeckYDKE() {
    var _0x444569 = []
      , _0x2fc31c = []
      , _0x4cc922 = [];
    for (var _0x2cd680 = 0x0; _0x2cd680 < deck_filled_arr['length']; _0x2cd680++) {
        ~~deck_filled_arr[_0x2cd680]['data']('serial_number') > 0x0 && _0x444569['push'](~~deck_filled_arr[_0x2cd680]['data']('serial_number'));
    }
    for (_0x2cd680 = 0x0; _0x2cd680 < side_filled_arr['length']; _0x2cd680++) {
        ~~side_filled_arr[_0x2cd680]['data']('serial_number') > 0x0 && _0x2fc31c['push'](~~side_filled_arr[_0x2cd680]['data']('serial_number'));
    }
    for (_0x2cd680 = 0x0; _0x2cd680 < extra_filled_arr['length']; _0x2cd680++) {
        ~~extra_filled_arr[_0x2cd680]['data']('serial_number') > 0x0 && _0x4cc922['push'](~~extra_filled_arr[_0x2cd680]['data']('serial_number'));
    }
    var _0x397d66 = {
        'main': Uint32Array['from'](_0x444569),
        'side': Uint32Array['from'](_0x2fc31c),
        'extra': Uint32Array['from'](_0x4cc922)
    }
      , _0x1da849 = toURL(_0x397d66);
    getLink('YDKe\x20Code', 'Here\x20is\x20the\x20code\x20for\x20this\x20decklist.\x20<font\x20color=\x22#0077FF\x22><a\x20href=\x22' + URL_START + 'welcome#importing\x22\x20target=\x22_blank\x22><u>Click\x20Here</u></a></font>\x20to\x20learn\x20how\x20to\x20use\x20it.', _0x1da849, !![]),
    copyText(_0x1da849, function() {
        if (!username)
            return;
        var _0x3efd02 = new Notification();
        _0x3efd02['setupCopied']('Successfully\x20copied\x20YDKe\x20code\x20to\x20clipboard.'),
        _0x3efd02['data']('fast', !![]),
        addToNotifications(_0x3efd02, !![]);
    });
}
function toURL(_0xbc38b0) {
    return 'ydke://' + passcodesToBase64(_0xbc38b0['main']) + '!' + passcodesToBase64(_0xbc38b0['extra']) + '!' + passcodesToBase64(_0xbc38b0['side']) + '!';
}
function passcodesToBase64(_0x41801d) {
    var _0x1a7a98 = new Uint8Array(_0x41801d['length'] * 0x4)
      , _0xa140ef = new DataView(_0x1a7a98['buffer']);
    for (var _0x56b9d7 = 0x0; _0x56b9d7 < _0x41801d['length']; _0x56b9d7++) {
        _0xa140ef['setUint32'](_0x56b9d7 * 0x4, _0x41801d[_0x56b9d7], !![]);
    }
    var _0x7df329 = btoa(String['fromCharCode']['apply'](null, _0x1a7a98));
    return _0x7df329;
}
function isYDKE(_0x3233b4, _0x74e6c4) {
    if (!_0x3233b4['startsWith']('ydke://'))
        return _0x74e6c4 && errorE('YDKe\x20codes\x20must\x20start\x20with\x20ydke://'),
        ![];
    var _0x2c836f = _0x3233b4['slice']('ydke://'['length'])['split']('!');
    if (_0x2c836f['length'] < 0x3)
        return errorE('Invalid\x20YDKe\x20code'),
        ![];
    return !![];
}
function base64ToPasscodes(_0x4e36ee) {
    var _0x170724 = atob(_0x4e36ee)
      , _0x5735e5 = new Uint8Array(_0x170724['length']);
    for (var _0x36578b = 0x0; _0x36578b < _0x170724['length']; _0x36578b++) {
        _0x5735e5[_0x36578b] = _0x170724['charCodeAt'](_0x36578b);
    }
    var _0x5593df = new Uint32Array(_0x5735e5['buffer'])
      , _0x38198f = [];
    for (var _0x36578b = 0x0; _0x36578b < _0x5593df['length']; _0x36578b++) {
        _0x38198f['push'](_0x5593df[_0x36578b]);
    }
    return _0x38198f;
}
function exportDeckXML() {
    var _0x3a455f = deck['data']
      , _0x296249 = '<?xml\x20version=\x221.0\x22\x20encoding=\x22utf-8\x22\x20?>\x0a<deck\x20name=\x22' + escapeHTML(_0x3a455f) + '\x22>\x0a\x20<main>\x0a';
    for (var _0x4b2b5f = 0x0; _0x4b2b5f < deck_filled_arr['length']; _0x4b2b5f++) {
        _0x296249 += '\x20\x20<card\x20id=\x22' + deck_filled_arr[_0x4b2b5f]['data']('id') + '\x22\x20passcode=\x22' + deck_filled_arr[_0x4b2b5f]['data']('serial_number') + '\x22>' + escapeHTML(deck_filled_arr[_0x4b2b5f]['data']('name')) + '</card>\x0a';
    }
    _0x296249 += '\x20</main>\x0a\x20<side>\x0a';
    for (_0x4b2b5f = 0x0; _0x4b2b5f < side_filled_arr['length']; _0x4b2b5f++) {
        _0x296249 += '\x20\x20<card\x20id=\x22' + side_filled_arr[_0x4b2b5f]['data']('id') + '\x22\x20passcode=\x22' + side_filled_arr[_0x4b2b5f]['data']('serial_number') + '\x22>' + escapeHTML(side_filled_arr[_0x4b2b5f]['data']('name')) + '</card>\x0a';
    }
    _0x296249 += '\x20</side>\x0a\x20<extra>\x0a';
    for (_0x4b2b5f = 0x0; _0x4b2b5f < extra_filled_arr['length']; _0x4b2b5f++) {
        _0x296249 += '\x20\x20<card\x20id=\x22' + extra_filled_arr[_0x4b2b5f]['data']('id') + '\x22\x20passcode=\x22' + extra_filled_arr[_0x4b2b5f]['data']('serial_number') + '\x22>' + escapeHTML(extra_filled_arr[_0x4b2b5f]['data']('name')) + '</card>\x0a';
    }
    _0x296249 += '\x20</extra>\x0a</deck>',
    _0x3a455f = replaceSpecialCharacters(_0x3a455f),
    download(_0x296249, _0x3a455f + '.xml', 'text/plain');
}
function replaceSpecialCharacters(_0x409399) {
    if (_0x409399 == null)
        return 'Untitled';
    return _0x409399 = _0x409399['replace'](/"/g, ''),
    _0x409399 = _0x409399['replace'](/\\/g, ''),
    _0x409399 = _0x409399['replace'](/\//g, ''),
    _0x409399 = _0x409399['replace'](/\?/g, ''),
    _0x409399 = _0x409399['replace'](/:/g, ''),
    _0x409399 = _0x409399['replace'](/</g, ''),
    _0x409399 = _0x409399['replace'](/>/g, ''),
    _0x409399 = _0x409399['replace'](/\|/g, ''),
    _0x409399 = _0x409399['replace'](/\./g, ''),
    _0x409399;
}
function download(_0x4ce907, _0x5241fe, _0xcb3ee0) {
    var _0x3ad235 = new Blob([_0x4ce907],{
        'type': _0xcb3ee0
    });
    if (window['navigator']['msSaveOrOpenBlob']) {
        window['navigator']['msSaveOrOpenBlob'](_0x3ad235, _0x5241fe);
        return;
    }
    var _0x472e73 = document['createElement']('a')
      , _0x8de4c5 = URL['createObjectURL'](_0x3ad235);
    _0x472e73['href'] = _0x8de4c5,
    _0x472e73['download'] = _0x5241fe,
    document['body']['appendChild'](_0x472e73),
    _0x472e73['click'](),
    setTimeout(function() {
        document['body']['removeChild'](_0x472e73),
        window['URL']['revokeObjectURL'](_0x8de4c5);
    }, 0x0);
}
function downloadZip(_0x48efeb, _0xaafa25) {
    var _0x44326a = atob(_0x48efeb)
      , _0x5265f4 = new Uint8Array(_0x44326a['length']);
    for (var _0x23c49f = 0x0; _0x23c49f < _0x44326a['length']; _0x23c49f++) {
        _0x5265f4[_0x23c49f] = _0x44326a['charCodeAt'](_0x23c49f);
    }
    download(_0x5265f4, _0xaafa25);
}
function array(_0x202d6d) {
    if (_0x202d6d instanceof Array)
        return _0x202d6d;
    return [];
}
function Str(_0x5e6978) {
    return str(_0x5e6978);
}
function str(_0x14a09f) {
    if (!_0x14a09f)
        return '';
    return _0x14a09f;
}
function quote(_0x4b8e7a) {
    return '\x22' + _0x4b8e7a + '\x22';
}
function updateActive(_0x25ad49) {
    active = _0x25ad49;
}
function muteE() {
    var _0x183a25 = 0.35;
    $('#cross')['is'](':visible') ? ($('#cross')['hide'](),
    window['localStorage']['setItem']('sound', 'on')) : (_0x183a25 = 0x0,
    $('#cross')['show'](),
    window['localStorage']['setItem']('sound', 'off')),
    audio_arr['forEach'](function(_0x22ee87, _0x30f7c2) {
        _0x22ee87['volume'] = _0x183a25;
    });
}
function addClass(_0xdb7b83, _0x4a45eb) {
    var _0x193deb = _0xdb7b83['className']['split']('\x20');
    _0x193deb['indexOf'](_0x4a45eb) == -0x1 && (_0xdb7b83['className'] += '\x20' + _0x4a45eb);
}
function _0x1b54(_0x3c7b15, _0xc62bc8) {
    var _0x1d30e2 = _0x5801();
    return _0x1b54 = function(_0x2e32e3, _0x2f8999) {
        _0x2e32e3 = _0x2e32e3 - 0x125;
        var _0x58013a = _0x1d30e2[_0x2e32e3];
        return _0x58013a;
    }
    ,
    _0x1b54(_0x3c7b15, _0xc62bc8);
}
function removeClass(_0x884b18, _0x5b4c43) {
    var _0x3e7c15 = _0x884b18['className']['split']('\x20');
    _0x3e7c15['indexOf'](_0x5b4c43) >= 0x0 && _0x3e7c15['splice'](_0x3e7c15['indexOf'](_0x5b4c43), 0x1),
    _0x884b18['className'] = _0x3e7c15['join']('\x20');
}
function determineChatX(_0x49b24b) {
    var _0x30f161 = ceil(_0x49b24b['css']('left'))
      , _0x24c3b6 = ceil(_0x49b24b['css']('top'));
    (_0x30f161 < 0x0 || _0x30f161 > 0x400) && (_0x30f161 = 0x3);
    (_0x24c3b6 < 0x0 || _0x24c3b6 > 0x280 - ceil(_0x49b24b['css']('height'))) && _0x49b24b['css']('top', 0x3);
    var _0x8fd042 = [0x3, 0xce, 0x199, 0x264, 0x32f];
    if (_0x8fd042['indexOf'](_0x30f161) < 0x0)
        return;
    var _0x57411b = [$('#online_users'), $('#calls'), $('#public_chat'), $('#private_chat'), $('#watch_chat'), $('#duel_log')];
    _0x29b7e5: for (var _0x344a74 = _0x8fd042['length'] - 0x1; _0x344a74 >= 0x0; _0x344a74--) {
        for (var _0x2009fa = _0x57411b['length'] - 0x1; _0x2009fa >= 0x0; _0x2009fa--) {
            if (_0x57411b[_0x2009fa]['is'](':visible') && ceil(_0x57411b[_0x2009fa]['css']('left')) == _0x8fd042[_0x344a74])
                continue _0x29b7e5;
        }
        _0x30f161 = _0x8fd042[_0x344a74];
    }
    _0x49b24b['css']('left', _0x30f161),
    !mobile && setTimeout(function() {
        $('html')['scrollTop'](0x0),
        $('html')['scrollLeft'](0x0);
    }, 0x5);
}
function insertAt0(_0x23662a, _0x5d1e7c, _0xd798c2) {
    _0xd798c2['hasClass']('scrollpane') && _0xd798c2['find']('.os-content')['length'] > 0x0 && (_0xd798c2 = _0xd798c2['find']('.os-content'),
    _0xd798c2['find']('>\x20.os-resize-observer-host')['length'] > 0x0 && _0x23662a++,
    _0xd798c2['find']('>\x20.os-scrollbar-corner')['length'] > 0x0 && _0x23662a++);
    if (_0x23662a == 0x0) {
        _0xd798c2['prepend'](_0x5d1e7c);
        return;
    }
    var _0x213ad4 = _0xd798c2['children']();
    _0x213ad4['length'] == 0x0 || _0x23662a >= _0x213ad4['length'] ? _0xd798c2['append'](_0x5d1e7c) : $(_0x5d1e7c)['insertBefore'](_0x213ad4['eq'](_0x23662a));
}
function insertAt(_0x49e45f, _0x49efe8, _0x1747a9) {
    _0x1747a9['hasClass']('scrollpane') && _0x1747a9['find']('*[data-overlayscrollbars-viewport]:first')['length'] > 0x0 && (_0x1747a9 = _0x1747a9['find']('*[data-overlayscrollbars-viewport]:first'));
    if (_0x49e45f == 0x0) {
        _0x1747a9['prepend'](_0x49efe8);
        return;
    }
    var _0x255e49 = _0x1747a9['children']();
    _0x255e49['length'] == 0x0 || _0x49e45f >= _0x255e49['length'] ? _0x1747a9['append'](_0x49efe8) : $(_0x49efe8)['insertBefore'](_0x255e49['eq'](_0x49e45f));
}
function addDragging0(_0x1dcdcc, _0x162078, _0x195fb5, _0x3031bf) {
    !_0x162078 && (_0x162078 = _0x1dcdcc),
    _0x1dcdcc['mousedown'](function _0x196a5e(_0x26a278) {
        _0x26a278['preventDefault'](),
        updateMouse(_0x26a278);
        _0x195fb5 && _0x195fb5();
        var _0xe1d717 = mouseXScaled - parseInt(_0x162078['css']('left'))
          , _0x4852d1 = mouseYScaled - parseInt(_0x162078['css']('top'));
        $('html')['mousemove'](function(_0x5a56f1) {
            updateMouse(_0x5a56f1),
            TweenMax['to'](_0x162078, 0x0, {
                'left': mouseXScaled - _0xe1d717,
                'top': mouseYScaled - _0x4852d1
            });
        }),
        $('html')['mouseup'](function(_0x3355d5) {
            $('html')['off']('mousemove'),
            $('html')['off']('mouseup'),
            _0x3031bf && _0x3031bf();
        });
    });
}
function addDragging(_0x1124ad, _0x5883fa, _0x517caa, _0x5a026f, _0x460fe9) {
    if (mobile) {
        addDraggingMobile(_0x1124ad, _0x5883fa, _0x517caa, _0x5a026f, _0x460fe9);
        return;
    }
    _0x1124ad['draggable']({
        'scroll': ![],
        'cancel': _0x517caa,
        'start': function(_0x17a24b, _0x5efbef) {
            _0x5a026f && _0x5a026f(_0x17a24b, $(_0x5efbef)),
            updateMouse(_0x17a24b),
            dragXOffset = mouseXScaled - parseInt($(this)['css']('left')),
            dragYOffset = mouseYScaled - parseInt($(this)['css']('top'));
        },
        'drag': function(_0x2a7015, _0x4dd428) {
            !jello && (updateMouse(_0x2a7015),
            _0x4dd428['position'] = {
                'left': mouseXScaled - dragXOffset,
                'top': mouseYScaled - dragYOffset
            });
        },
        'stop': function(_0x376960, _0x221398) {
            _0x460fe9 && _0x460fe9(_0x376960, $(_0x221398));
        }
    });
}
function addDraggingMobile(_0x4e2dd7, _0x2b2aa6, _0x414067, _0x473326, _0x25072b) {
    _0x4e2dd7['draggable']({
        'scroll': ![],
        'handle': _0x2b2aa6,
        'start': function(_0x57dea0, _0x1da090) {
            _0x473326 && _0x473326(_0x57dea0, $(_0x1da090)),
            updateMouse(_0x57dea0),
            dragXOffset = mouseXScaled - parseInt($(this)['css']('left')),
            dragYOffset = mouseYScaled - parseInt($(this)['css']('top'));
        },
        'drag': function(_0x24a355, _0x4e8189) {
            !jello && (updateMouse(_0x24a355),
            _0x4e8189['position'] = {
                'left': mouseXScaled - dragXOffset,
                'top': mouseYScaled - dragYOffset
            });
        },
        'stop': function(_0x373c5f, _0x519be0) {
            _0x25072b && _0x25072b(_0x373c5f, $(_0x519be0));
        }
    });
}
function appendChat(_0x130cd0) {
    var _0xffe53c = window['getSelection']();
    if (_0xffe53c['toString']() != '')
        return;
    var _0x281f44 = _0x130cd0['find']('.scrollpane:visible')['scrollTop']()
      , _0x34bd8d = $(':focus');
    $('#chats')['append'](_0x130cd0),
    _0x34bd8d['focus'](),
    _0x130cd0['find']('.scrollpane:visible')['scrollTop'](_0x281f44);
}
function setupInput(_0x3c5400, _0x471239) {}
function clearInput(_0x2ec818) {
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
function enterHandler(_0x528978) {
    switch (_0x528978['which']) {
    case 0x11:
    case 0x5b:
    case 0xe0:
        controlDown = !![],
        $('html')['keyup'](onKeyUp);
        break;
    case 0x41:
        controlDown && setTimeout(function() {
            (controlFocus[0x0]instanceof HTMLSpanElement || controlFocus[0x0]instanceof HTMLDivElement || controlFocus[0x0]instanceof HTMLFontElement) && (($(':focus')['length'] == 0x0 || $(':focus')['attr']('tabindex') == '0') && (clearSelection(),
            selectText(controlFocus[0x0])));
        }, 0x5);
        break;
    case 0x25:
    case 0x26:
    case 0x27:
    case 0x28:
        arrowKeyE(_0x528978);
        break;
    case 0x21:
    case 0x22:
        _0x528978['preventDefault'](),
        $('html')['trigger']({
            'type': 'keydown',
            'which': _0x528978['which'] == 0x21 ? 0x26 : 0x28
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
function arrowKeyE(_0x2fc2c3) {
    if (!active_scrollpane)
        return;
    if ($(':focus')['length'] == 0x0 || !$(':focus')['is'](':visible') || $(':focus')[0x0] == active_scrollpane[0x0] || inBounds(active_scrollpane) || active_scrollpane['is'](':visible') && onScreen(active_scrollpane[0x0])) {
        var _0x1d67eb = _0x2fc2c3['which'] == 0x28 ? 0x1e : -0x1e;
        switch (_0x2fc2c3['which']) {
        case 0x25:
        case 0x27:
            _0x1d67eb = _0x2fc2c3['which'] == 0x27 ? 0x1e : -0x1e;
            if (fancy_scrollbars) {
                if (active_scrollpane['find']('.os-scrollbar-horizontal')['hasClass']('os-scrollbar-unusable'))
                    return;
                tweenScrollbar(active_scrollpane, 0.08333, {
                    'scrollLeft': active_scrollpane['scrollLeft']() + _0x1d67eb,
                    'ease': Linear['easeNone']
                });
                return;
            }
            if (active_scrollpane['css']('overflow-x') != 'scroll')
                return;
            tweenScrollbar(active_scrollpane, 0.08333, {
                'scrollLeft': active_scrollpane[0x0]['scrollLeft'] + _0x1d67eb,
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
                'scrollTop': active_scrollpane['scrollTop']() + _0x1d67eb,
                'ease': Linear['easeNone']
            });
            break;
        }
    }
}
function loadMessage() {
    if (!showMes)
        return;
    var _0x430250 = getWidth()
      , _0x1cb00c = getHeight()
      , _0x55c175 = _0x1cb00c - getScaledHeight();
    if (_0x55c175 > (mes1['height']() + 0xb) * 0x2)
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
    _0x55c175 = _0x430250 - getScaledWidth(),
    _0x55c175 > (mes2['width']() + 0xb) * 0x2 && getHeight() >= mes2['height']() ? (mes2['show'](),
    mes2['setHTML'](skinny_ad)) : mes2['hide']();
}
function initDuelJS() {}
function initDB() {
    initUtils(),
    initDuelJS();
    localStorage['getItem']('sound') == 'off' && muteE();
    db_id = getDbId(),
    $('*')['each'](function(_0x89a0a8, _0x12cf09) {
        _0x12cf09 instanceof HTMLDivElement && (($(this)['css']('overflow')['indexOf']('scroll') >= 0x0 || $(this)['css']('overflow-y')['indexOf']('scroll') >= 0x0 || $(this)['css']('overflow-x')['indexOf']('scroll') >= 0x0) && ($(this)['addClass']('scrollpane'),
        $(this)['mouseenter'](function() {
            active_scrollpane = $(this);
        })));
    });
    window['location']['toString']()['indexOf']('duelingbook.com') < 0x0 && $('.vm-placement')['detach']();
    $('.list')['click'](cellClickE),
    $('textarea')['on']('input\x20blur', function() {
        $(this)['text']($(this)['val']());
    }),
    $('.textarea')['addClass']('selectable'),
    $('input[type=radio]')['click'](function() {
        prevFocus && prevFocus['focus']();
    }),
    $('#content')['show'](),
    $('#content')[0x0]['style']['zoom'] = 0x1;
    mobile && $('#content')['css']('overflow', 'hidden');
    !SAFARI && $('#greenlines')['show']();
    mobile && (jello = !![]);
    (mobile || EDGE) && (fancy_scrollbars = ![]);
    if (CHROME && !mobile) {}
    GET('scrollbars') == 'false' && (fancy_scrollbars = ![]);
    GET('scrollbars') == 'true' && (fancy_scrollbars = !![]);
    var _0x10277a = new Date()['getTime']();
    addScrollBars();
    var _0x1f8e19 = new Date()['getTime']();
    console['log']('millis\x20=\x20' + (_0x1f8e19 - _0x10277a)),
    document['body']['style']['zoom'] = 0x1,
    window['onresize'] = resizeE,
    window['onscroll'] = resizeE,
    window['onorientationchange'] = orientationE;
    if (SAFARI) {}
    (alignLeft || alignRight) && (zooming = ![]);
    !zooming && $(window)['off']('smartresize');
    resizeE(),
    orientationE(),
    $('body')['css']('overflow-y', 'scroll'),
    $('html')['scrollTop'](0x0),
    $('body')['css']('overflow-y', 'hidden'),
    $('html')['keydown'](enterHandler),
    $('html')['on']('input', function(_0x11b2a9) {
        if ($(_0x11b2a9['target'])['data']('regex')) {
            _0x11b2a9['target']['value'] = _0x11b2a9['target']['value']['replace']($(_0x11b2a9['target'])['data']('regex'), '');
            return;
        }
    }),
    $('html')['mousedown'](function(_0x1a179b) {
        controlFocus = $(_0x1a179b['target']);
    });
    jello && jelloE();
    var _0x21ffdb = new Date()['getTime']();
    changeComponents();
    var _0x3a5c7e = new Date()['getTime']();
    console['log']('millis\x20=\x20' + (_0x3a5c7e - _0x21ffdb)),
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
    document['cookie'] = '_gat=2;expires=Thu,\x2001\x20Jan\x202022\x2000:00:00\x20GMT;path=/;domain=.duelingbook.com',
    document['cookie'] = '_gat=;expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT;path=/;domain=.duelingbook.com';
}
function checkLoggedIn() {
    var _0x5f56b3 = new FormData();
    _0x5f56b3['append']('db_id', db_id),
    _0x5f56b3['append']('version', VERSION);
    var _0x38f922 = new XMLHttpRequest();
    _0x38f922['open']('POST', URL_START + 'logged-in.php', !![]),
    _0x38f922['onreadystatechange'] = function() {
        _0x38f922['readyState'] == 0x4 && _0x38f922['status'] == 0xc8 && checkLoggedInResponse(_0x38f922['responseText']);
    }
    ,
    _0x38f922['send'](_0x5f56b3);
}
function unsetWidthAndHeight(_0x1c4fd0) {
    _0x1c4fd0['css']('width', 'auto'),
    _0x1c4fd0['css']('height', 'auto');
}
function GET(_0x4ae424) {
    var _0x30b8e4 = window['location']['search']['substring'](0x1)
      , _0x39f48b = _0x30b8e4['split']('&');
    for (var _0x42d90c = 0x0; _0x42d90c < _0x39f48b['length']; _0x42d90c++) {
        var _0x3dea83 = _0x39f48b[_0x42d90c]['split']('=');
        if (_0x3dea83[0x0] == _0x4ae424)
            return _0x3dea83[0x1];
    }
    return ![];
}
var clicked_obj = $('<div></div>')
  , clicked_millis = 0x0;
function initTouchEvents() {
    return;
    $('html')['on']('touchstart', function(_0x518a4b) {
        var _0xc79c04 = ![];
        $('html')['off']('touchend'),
        $('html')['on']('touchend', _0x537a6c),
        $('html')['off']('touchmove'),
        $('html')['on']('touchmove', function(_0x1f3bb1) {
            _0xc79c04 = !![];
        }),
        $(_0x518a4b['target'])['mouseover'](),
        $(_0x518a4b['target'])['mousedown']();
        function _0x537a6c(_0x3eebc5) {
            $('#tooltips\x20>\x20*')['hide']();
            menu['is'](':visible') && !$(_0x3eebc5['target'])['hasClass']('cardfront') && $(_0x3eebc5['target'])['parents']('.cardfront')['length'] == 0x0 && !$(_0x3eebc5['target'])['hasClass']('cardback') && $(_0x3eebc5['target'])['parents']('.card')['length'] == 0x0 && $(_0x3eebc5['target'])[0x0]['id'] != 'card_menu' && $(_0x3eebc5['target'])['parents']('#card_menu')['length'] == 0x0 && $(_0x3eebc5['target'])[0x0]['id'] != 'deck_hidden' && $(_0x3eebc5['target'])[0x0]['id'] != 'extra_hidden' && removeCardMenu();
            action_list['is'](':visible') && $(_0x3eebc5['target'])[0x0]['id'] != 'action_list' && $(_0x3eebc5['target'])['parents']('#action_list')['length'] == 0x0 && hideActionList();
            if (_0xc79c04)
                return;
            switch ($(_0x3eebc5['target'])[0x0]['tagName']) {
            case 'INPUT':
            case 'A':
            case 'SELECT':
            case 'TEXTAREA':
                $(_0x3eebc5['target'])['mouseleave']();
                return;
            default:
                _0x3eebc5['preventDefault']();
                break;
            }
            setTimeout(function() {
                Date['now']() - clicked_millis < 0x1f4 && $(_0x3eebc5['target'])[0x0] == clicked_obj[0x0] ? $(_0x3eebc5['target'])['dblclick']() : $(_0x3eebc5['target'])['click'](),
                clicked_obj = $(_0x3eebc5['target']),
                clicked_millis = Date['now']();
            }, 0x64);
        }
    });
}
function orientationE() {
    if (!mobile)
        return;
    var _0x357cfe = 0x0;
    SAFARI ? _0x357cfe = window['orientation'] : _0x357cfe = ScreenOrientation['angle'],
    _0x357cfe == 0x0 || _0x357cfe == 0xb4 ? $('meta[name=viewport]')['attr']('content', 'width=1024') : $('meta[name=viewport]')['attr']('content', 'height=640');
}
function ioError(_0x2295fb) {
    errorE('IO\x20Error'),
    console['log'](_0x2295fb),
    console['log'](_0x2295fb['message']);
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
$(document)['unbind']('keydown')['bind']('keydown', function(_0x55a633) {
    if (_0x55a633['keyCode'] === 0x8) {
        var _0x2b4ff5 = !![]
          , _0xb56401 = ['text', 'password', 'file', 'search', 'email', 'number', 'date', 'color', 'datetime', 'datetime-local', 'month', 'range', 'search', 'tel', 'time', 'url', 'week']
          , _0x2a1d49 = $(_0x55a633['srcElement'] || _0x55a633['target'])
          , _0x51fac2 = _0x2a1d49['prop']('readonly') || _0x2a1d49['prop']('disabled');
        if (!_0x51fac2) {
            if (_0x2a1d49[0x0]['isContentEditable'])
                _0x2b4ff5 = ![];
            else {
                if (_0x2a1d49['is']('input')) {
                    var _0x128b19 = _0x2a1d49['attr']('type');
                    _0x128b19 && (_0x128b19 = _0x128b19['toLowerCase']()),
                    _0xb56401['indexOf'](_0x128b19) > -0x1 && (_0x2b4ff5 = ![]);
                } else
                    _0x2a1d49['is']('textarea') && (_0x2b4ff5 = ![]);
            }
        }
        if (_0x2b4ff5)
            return _0x55a633['preventDefault'](),
            ![];
    }
});
function ceil(_0x3821c8) {
    return Math['ceil'](parseFloat(_0x3821c8));
}
function tweenScrollbar0(_0x5bc8c0, _0x4c0c56, _0x19cefe) {
    var _0xbbe432 = {};
    _0xbbe432['x'] = _0x5bc8c0['scrollLeft'](),
    _0xbbe432['y'] = _0x5bc8c0['scrollTop']();
    var _0x3137bb = ~~_0x19cefe['scrollLeft'] != _0x5bc8c0['scrollLeft']()
      , _0x1daa1e = ~~_0x19cefe['scrollTop'] != _0x5bc8c0['scrollTop']();
    TweenMax['to'](_0xbbe432, _0x4c0c56, {
        'x': ~~_0x19cefe['scrollLeft'],
        'y': ~~_0x19cefe['scrollTop'],
        'ease': Expo['easeInOut'],
        'onUpdate': function() {
            _0x3137bb && (fancy_scrollbars && _0x5bc8c0['overlayScrollbars']() && _0x5bc8c0['overlayScrollbars']()['scroll'] ? _0x5bc8c0['overlayScrollbars']()['scroll']({
                'x': _0xbbe432['x']
            }) : _0x5bc8c0['scrollLeft'](_0xbbe432['x'])),
            _0x1daa1e && _0x5bc8c0['scrollTop'](_0xbbe432['y']);
        }
    }),
    TweenMax['to'](_0x5bc8c0, _0x4c0c56, _0x19cefe);
}
function tweenScrollbar(_0xf9c3c6, _0x4642bb, _0x344bfc) {
    if (fancy_scrollbars) {
        TweenMax['to'](_0xf9c3c6['data']('scrollpane')['elements']()['viewport'], _0x4642bb, _0x344bfc);
        return;
    }
    TweenMax['to'](active_scrollpane[0x0], _0x4642bb, _0x344bfc);
}
function tweenScrollbar(_0x554538, _0xaf40fb, _0x20d3fc) {
    TweenMax['to'](fancy_scrollbars ? _0x554538['data']('scrollpane')['elements']()['viewport'] : active_scrollpane[0x0], _0xaf40fb, _0x20d3fc);
}
function isTextSelected(_0x7b1f26) {
    if (typeof _0x7b1f26['selectionStart'] == 'number')
        return _0x7b1f26['selectionStart'] == 0x0 && _0x7b1f26['selectionEnd'] == _0x7b1f26['value']['length'];
    else {
        if (typeof document['selection'] != 'undefined')
            return _0x7b1f26['focus'](),
            document['selection']['createRange']()['text'] == _0x7b1f26['value'];
    }
}
function isOffensive(_0xf5a5f8) {
    if (!_0xf5a5f8)
        return ![];
    _0xf5a5f8 = _0xf5a5f8['toLowerCase']();
    for (var _0x288b8b = 0x0; _0x288b8b < slur_arr['length']; _0x288b8b++) {
        if (_0xf5a5f8['indexOf'](slur_arr[_0x288b8b]) >= 0x0)
            return !![];
    }
    return ![];
}
function censor(_0xe9858c) {
    if (!streaming)
        return _0xe9858c;
    for (var _0x4f35a4 = 0x0; _0x4f35a4 < slur_arr['length']; _0x4f35a4++) {
        if (_0xe9858c['toLowerCase']()['indexOf'](slur_arr[_0x4f35a4]) >= 0x0) {
            var _0xd017ab = _0xe9858c['toLowerCase']()['indexOf'](slur_arr[_0x4f35a4]);
            _0xe9858c = _0xe9858c['substring'](0x0, _0xd017ab) + '[censored]' + _0xe9858c['substring'](_0xd017ab + slur_arr[_0x4f35a4]['length'], _0xe9858c['length']),
            _0x4f35a4--;
        }
    }
    return _0xe9858c;
}
function adjustScreen() {
    window['onscroll'] = null,
    resizeETimer['start']();
    var _0x44ca38 = $('html')['scrollLeft']()
      , _0x1ff1c2 = $('html')['scrollTop']();
    $('html')['scrollLeft'](_0x44ca38 - 0x1),
    $('html')['scrollTop'](_0x1ff1c2 - 0x1),
    $('html')['scrollLeft'](_0x44ca38),
    $('html')['scrollTop'](_0x1ff1c2);
    if (username == 'n****r') {}
}
function addLine3(_0x332a46) {
    if (!moderator)
        return;
    addLine(_0x332a46),
    console['log'](_0x332a46);
}
function toggleAds(_0x198bbf) {
    loadMessage();
    var _0x29c226 = _0x198bbf[0x0]['getBoundingClientRect']()
      , _0x3b8e2b = mes2[0x0]['getBoundingClientRect']()
      , _0x69f212 = mes3[0x0]['getBoundingClientRect']();
    _0x29c226['left'] + _0x29c226['width'] >= _0x3b8e2b['left'] && $('#mes2')['hide'](),
    _0x29c226['left'] <= _0x69f212['left'] + _0x69f212['width'] && $('#mes4')['hide']();
}
function onScreen(_0x17e362) {
    var _0x306aff = $('#content')[0x0]['style']['zoom']
      , _0x5bec60 = _0x17e362['getBoundingClientRect']();
    if (_0x5bec60['left'] >= 0x0 && _0x5bec60['top'] >= 0x0 && _0x5bec60['right'] * _0x306aff <= window['innerWidth'] && _0x5bec60['bottom'] * _0x306aff <= window['innerHeight'])
        return console['log']('IS\x20ON\x20SCREEN'),
        !![];
    return console['log']('IS\x20NOT\x20SCREEN'),
    ![];
}
function getChromeVersion() {
    var _0x167a17 = navigator['userAgent']['match'](/Chrom(e|ium)\/([0-9]+)\./);
    return _0x167a17 ? parseInt(_0x167a17[0x2], 0xa) : ![];
}
function FriendItem(_0x57bda0) {
    var _0x3e3391 = $('<div\x20class=\x22friend_item\x22></div>')
      , _0x3bbd7f = new Avatar(_0x57bda0)
      , _0x56cd0f = $('<span\x20class=\x22username_txt\x20bisque\x20selectable\x22></span>');
    return _0x56cd0f['text'](_0x57bda0['username']),
    _0x3e3391['append'](_0x3bbd7f),
    _0x3e3391['append'](_0x56cd0f),
    _0x3e3391;
}
function Avatar(_0x19277b) {
    _0x19277b['p'] && (_0x19277b['pic'] = _0x19277b['p']);
    _0x19277b['u'] && (_0x19277b['username'] = _0x19277b['u']);
    var _0x3c2c84 = $('<div\x20class=\x22avatar\x22></div>');
    _0x19277b['pic'] && _0x3c2c84['data']('pic', getAvatarStart(_0x19277b['pic']));
    _0x3c2c84['click'](function() {
        loadProfile(_0x19277b['username']);
    });
    var _0x5c2903 = $('<img\x20class=\x22avatar_frame\x22\x20src=\x22' + IMAGES_START + 'svg/avatar_red.svg\x22\x20/>');
    _0x19277b['username'] == username && _0x5c2903['attr']('src', IMAGES_START + 'svg/avatar_teal.svg');
    var _0x35fb50 = $('<img\x20class=\x22image\x22\x20width=\x22256\x22\x20height=\x22256\x22\x20/>');
    _0x35fb50[0x0]['onload'] = function() {
        _0x49c8df(_0x35fb50[0x0]);
    }
    ;
    _0x19277b['delay'] || !_0x19277b['pic'] ? (_0x35fb50['attr']('src', IMAGES_START + 'loading.gif'),
    _0x3c2c84['data']('started', ![])) : (_0x35fb50['attr']('src', getAvatarStart(_0x19277b['pic'])),
    _0x3c2c84['data']('started', !![]));
    _0x3c2c84['append'](_0x5c2903),
    _0x3c2c84['append'](_0x35fb50);
    if (_0x19277b['nsfw'] && !always_show_nsfw) {
        _0x3c2c84['data']('nsfw', !![]);
        var _0x32ffa5 = $('<img\x20class=\x22nsfw\x22\x20src=\x22' + IMAGES_START + 'svg/avatar_nsfw.svg\x22\x20/>');
        _0x3c2c84['append'](_0x32ffa5);
    }
    _0x35fb50[0x0]['complete'] && _0x49c8df(_0x35fb50[0x0]);
    return _0x3c2c84;
    function _0x49c8df(_0x14c9ec) {
        _0x14c9ec['style']['height'] = '83.25%',
        _0x14c9ec['style']['clipPath'] = 'unset',
        _0x14c9ec['naturalHeight'] > _0x14c9ec['naturalWidth'] && _0x14c9ec['src']['indexOf']('.gif') < 0x0 && (_0x14c9ec['style']['height'] = _0x14c9ec['naturalHeight'] / _0x14c9ec['naturalWidth'] * 0x100 / 0x100 * 83.25 + '%',
        _0x14c9ec['style']['clipPath'] = 'inset(0px\x200px\x20' + ((0x1 - _0x14c9ec['naturalWidth'] / _0x14c9ec['naturalHeight']) * 0x64 - 0.01) + '%\x200px\x20round\x205.85%)');
    }
}
function getTimeAgo(_0x44a251) {
    var _0x541209 = 0x0;
    typeof _0x44a251 == 'string' ? _0x541209 = new Date()['getTime']() - new Date(_0x44a251)['getTime']() : _0x541209 = new Date()['getTime']() - _0x44a251;
    var _0x24e6a9 = '';
    if (_0x541209 < 0xea60) {
        var _0x56a3ee = Math['floor'](_0x541209 / 0x3e8);
        _0x56a3ee == 0x1 ? _0x24e6a9 = _0x56a3ee + '\x20second\x20ago' : _0x56a3ee <= 0x0 ? _0x24e6a9 = 'Just\x20now' : _0x24e6a9 = _0x56a3ee + '\x20seconds\x20ago';
    } else {
        if (_0x541209 < 0x36ee80) {
            var _0x59ed4c = Math['floor'](_0x541209 / 0xea60);
            _0x59ed4c == 0x1 ? _0x24e6a9 = _0x59ed4c + '\x20minute\x20ago' : _0x24e6a9 = _0x59ed4c + '\x20minutes\x20ago';
        } else {
            if (_0x541209 < 0x5265c00) {
                var _0xd0d60 = Math['floor'](_0x541209 / 0x36ee80);
                _0xd0d60 == 0x1 ? _0x24e6a9 = _0xd0d60 + '\x20hour\x20ago' : _0x24e6a9 = _0xd0d60 + '\x20hours\x20ago';
            } else {
                if (_0x541209 < 0x240c8400) {
                    var _0x59ab06 = Math['floor'](_0x541209 / 0x5265c00);
                    _0x59ab06 == 0x1 ? _0x24e6a9 += _0x59ab06 + '\x20day\x20ago' : _0x24e6a9 += _0x59ab06 + '\x20days\x20ago';
                } else {
                    if (_0x541209 < 0x9a7ec800) {
                        var _0x4d541 = Math['floor'](_0x541209 / 0x240c8400);
                        _0x4d541 == 0x1 ? _0x24e6a9 += _0x4d541 + '\x20week\x20ago' : _0x24e6a9 += _0x4d541 + '\x20weeks\x20ago';
                    } else {
                        if (_0x541209 < 0x757b12c00) {
                            var _0x1bc848 = Math['floor'](_0x541209 / 0x9a7ec800);
                            _0x1bc848 == 0x1 ? _0x24e6a9 += _0x1bc848 + '\x20month\x20ago' : _0x24e6a9 += _0x1bc848 + '\x20months\x20ago';
                        } else {
                            var _0x5bdcc7 = Math['floor'](_0x541209 / 0x757b12c00);
                            _0x5bdcc7 == 0x1 ? _0x24e6a9 += _0x5bdcc7 + '\x20year\x20ago' : _0x24e6a9 += _0x5bdcc7 + '\x20years\x20ago';
                        }
                    }
                }
            }
        }
    }
    return _0x24e6a9;
}
function loadProfile() {}
function watchDuelE() {}
function dropPlayerE() {}
function Bracket(_0x363d66) {
    var _0x1ffc18 = $('<div\x20class=\x22bracket\x20bracket' + _0x363d66['id'] + '\x22></div>');
    _0x1ffc18['data']('id', _0x363d66['id']),
    _0x1ffc18['data']('round', _0x363d66['round']),
    _0x1ffc18['contextmenu'](dropPlayerE);
    var _0x34feb6 = $('<img\x20class=\x22bracket_lines\x22\x20src=\x22' + IMAGES_START + 'svg/bracket0.svg\x22\x20width=\x22260\x22\x20height=\x2261\x22\x20/>');
    _0x1ffc18['append'](_0x34feb6);
    if (_0x363d66['player1']['username']) {
        var _0x1f63bd = new FriendItem(_0x363d66['player1']);
        _0x1f63bd['addClass']('player' + _0x363d66['player1_id']),
        _0x1f63bd['addClass']('player1'),
        _0x363d66['player1']['dropped'] && _0x1f63bd['find']('.username_txt')['css']('text-decoration', 'line-through'),
        _0x1ffc18['append'](_0x1f63bd);
    }
    if (_0x363d66['player2']['username']) {
        var _0x1f63bd = new FriendItem(_0x363d66['player2']);
        _0x1f63bd['addClass']('player' + _0x363d66['player2_id']),
        _0x1f63bd['addClass']('player2'),
        _0x1f63bd['css']('top', 0x32),
        _0x363d66['player2']['dropped'] && _0x1f63bd['find']('.username_txt')['css']('text-decoration', 'line-through'),
        _0x1ffc18['append'](_0x1f63bd);
    }
    if (tourney_data['adjudicator'] || moderator >= 0x2) {
        var _0x1a8c33 = $('<img\x20class=\x22checkmark\x20checkmark1\x22\x20src=\x22' + IMAGES_START + 'checkmark.png\x22\x20alt=\x22Winner\x22\x20/>')
          , _0x5725d8 = _0x1a8c33['clone']()['removeClass']('checkmark1')['addClass']('checkmark2');
        _0x5725d8['css']('top', 0x2b),
        _0x1a8c33['mouseenter'](checkmarkE),
        _0x5725d8['mouseenter'](checkmarkE),
        $(_0x1ffc18)['mouseout'](function() {
            _0x1a8c33['css']('opacity', 0x0),
            _0x5725d8['css']('opacity', 0x0),
            _0x1ffc18['find']('.winner,\x20.loser')['show']();
        }),
        _0x1ffc18['append'](_0x1a8c33),
        _0x1ffc18['append'](_0x5725d8);
    }
    var _0x386c01 = $('<span\x20class=\x22match_id_txt\x20selectable\x22>' + _0x363d66['id'] + '</span>');
    _0x1ffc18['append'](_0x386c01);
    var _0x28fff9 = $('<span\x20class=\x22watch_duel_btn\x22>Watch\x20Duel</span>');
    username ? _0x28fff9['click'](watchDuelE) : (_0x28fff9['text']('Duel\x20in\x20progress...'),
    _0x28fff9['css']('left', 0x6d));
    var _0x2ce4b3 = $('<span\x20class=\x22replay_btn\x20cyan\x22><a\x20href=\x22#\x22\x20target=\x22_blank\x22>Replay</a></span>');
    return _0x1ffc18['append'](_0x28fff9),
    _0x1ffc18['append'](_0x2ce4b3),
    _0x363d66['duel'] && (_0x28fff9['data']('id', _0x363d66['duel']),
    _0x2ce4b3['find']('a')['attr']('href', URL_START + 'replay?id=' + _0x363d66['duel']),
    _0x2ce4b3['css']('display', 'block')),
    _0x363d66['active'] && (_0x28fff9['css']('display', 'block'),
    _0x2ce4b3['css']('display', 'none')),
    _0x1ffc18;
}
function checkmarkE() {
    if (!tourney_data['adjudicator'])
        return;
    var _0x5c7064 = $(this)['parents']('.bracket:first');
    if (_0x5c7064['find']('.player1')['length'] == 0x0 || _0x5c7064['find']('.player2')['length'] == 0x0) {
        $(this)['css']('cursor', 'auto');
        return;
    }
    _0x5c7064['find']('.checkmark1,\x20.checkmark2')['css']('opacity', 0x0),
    _0x5c7064['find']('.winner,\x20.loser')['hide'](),
    $(this)['css']('cursor', 'pointer'),
    $(this)['css']('opacity', 0x1);
}
function getBracketUsername(_0x1031e2) {
    for (var _0x54c04a = 0x0; _0x54c04a < tourney_data['participants']['length']; _0x54c04a++) {
        if (tourney_data['participants'][_0x54c04a]['id'] == _0x1031e2)
            return tourney_data['participants'][_0x54c04a]['username'];
    }
    return '';
}
function getPlayerID(_0x1ece7f) {
    for (var _0x20358e = 0x0; _0x20358e < tourney_data['participants']['length']; _0x20358e++) {
        if (tourney_data['participants'][_0x20358e]['username'] == _0x1ece7f)
            return tourney_data['participants'][_0x20358e]['id'];
    }
}
function fillBrackets() {
    if (tourney_data['matches']['length'] == 0x0)
        return;
    var _0x30426d, _0x17f9da = tourney_data['matches'][0x0]['round'], _0x5923cd = 0x0, _0x189680 = 0x96, _0x39df9e = 0x4b, _0x19c280 = 0x1, _0xb0df0 = 0x0, _0x45d93e = 0x0;
    for (var _0x4375f3 = 0x0; _0x4375f3 < tourney_data['matches']['length']; _0x4375f3++) {
        if (tourney_data['matches'][_0x4375f3]['round'] == 0x1)
            _0xb0df0++;
        else
            tourney_data['matches'][_0x4375f3]['round'] == 0x2 && _0x45d93e++;
    }
    _0x45d93e > _0xb0df0 && (_0x19c280 = 0x2);
    for (var _0x4375f3 = 0x0; _0x4375f3 < tourney_data['matches']['length']; _0x4375f3++) {
        (_0x17f9da < tourney_data['matches'][_0x4375f3]['round'] || !_0x30426d) && (_0x5923cd = 0x0,
        _0x17f9da = tourney_data['matches'][_0x4375f3]['round'],
        _0x30426d = $('<div\x20class=\x22round\x22></div>'),
        _0x30426d['css']('left', _0x17f9da * 0x17c - 0x17c),
        $('.round:last')['length'] > 0x0 && (_0x17f9da > _0x19c280 && tourney_data['format'] != 'swiss' && (_0x30426d['css']('top', parseInt($('.round:last')['css']('top')) + _0x39df9e),
        (_0xb0df0 % 0x2 == 0x0 && _0x19c280 == 0x1 || _0x45d93e % 0x2 == 0x0 && _0x19c280 == 0x2) && (tourney_data['format'] != 'swiss' && (_0x39df9e *= 0x2,
        _0x189680 *= 0x2)))),
        $('#pairings')['append'](_0x30426d));
        var _0x4e906a = new Bracket(tourney_data['matches'][_0x4375f3]);
        _0x4e906a['addClass']('match' + tourney_data['matches'][_0x4375f3]['id']),
        _0x4e906a['addClass']('round' + _0x17f9da),
        _0x4e906a['css']('top', _0x5923cd),
        _0x30426d['append'](_0x4e906a),
        showWinner(tourney_data['matches'][_0x4375f3]),
        _0x19c280 == 0x2 && tourney_data['matches'][_0x4375f3]['player2_prereq_match_id'] && $('.round1.match' + tourney_data['matches'][_0x4375f3]['player2_prereq_match_id'])['css']('top', parseInt(_0x4e906a['css']('top')) + 0x4b),
        _0x5923cd += _0x189680;
    }
}
function showWinner(_0x243c3b) {
    var _0x4e9286 = $('.match' + _0x243c3b['id']);
    _0x4e9286['find']('.winner')['detach'](),
    _0x4e9286['find']('.loser')['detach']();
    if (_0x243c3b['winner']) {
        var _0x31768b = $('<img\x20class=\x22checkmark\x20winner\x22\x20src=\x22' + IMAGES_START + 'checkmark.png\x22\x20alt=\x22Winner\x22\x20/>')
          , _0x10a57b = $('<img\x20class=\x22xmark\x20loser\x22\x20src=\x22' + IMAGES_START + 'xmark.png\x22\x20alt=\x22Loser\x22\x20/>');
        _0x243c3b['winner'] == _0x4e9286['find']('.player1\x20.username_txt')['text']() ? (_0x31768b['css']('top', -0x7),
        _0x10a57b['css']('top', 0x39)) : (_0x31768b['css']('top', 0x2b),
        _0x10a57b['css']('top', 0x7)),
        _0x4e9286['append'](_0x31768b),
        _0x4e9286['append'](_0x10a57b);
    }
}
function updateWinnerResponse(_0x286e5c) {
    if (!selectedTourney || selectedTourney['data']('id') != _0x286e5c['id'] || currentLabel != 'tournaments')
        return;
    hideDim();
    for (var _0x259a48 = 0x0; _0x259a48 < tourney_data['matches']['length']; _0x259a48++) {
        if (tourney_data['matches'][_0x259a48]['id'] == _0x286e5c['match']) {
            tourney_data['matches'][_0x259a48]['winner'] = null;
            _0x286e5c['action'] == 'Mark\x20winner' && (tourney_data['matches'][_0x259a48]['winner'] = _0x286e5c['username']);
            showWinner(tourney_data['matches'][_0x259a48]);
            var _0x298f5d = 0x0
              , _0x4c1048 = 0x0;
            for (var _0x25e9c2 = 0x0; _0x25e9c2 < tourney_data['matches']['length']; _0x25e9c2++) {
                var _0x34384a = tourney_data['matches'][_0x25e9c2];
                if (_0x34384a['player1_prereq_match_id'] == _0x286e5c['match']) {
                    _0x298f5d = _0x34384a['id'];
                    break;
                } else {
                    if (_0x34384a['player2_prereq_match_id'] == _0x286e5c['match']) {
                        _0x298f5d = _0x34384a['id'],
                        _0x4c1048 = 0x1;
                        break;
                    }
                }
            }
            if (_0x298f5d) {
                var _0x1a133c = $('.bracket' + _0x286e5c['match'] + '\x20.player' + getPlayerID(_0x286e5c['username']))['clone'](!![]);
                _0x1a133c['removeClass']('player1'),
                _0x1a133c['removeClass']('player2'),
                _0x1a133c['addClass']('player' + (_0x4c1048 + 0x1)),
                _0x1a133c['css']('top', 0x32 * _0x4c1048),
                $('.bracket' + _0x298f5d + '\x20.player' + (_0x4c1048 + 0x1))['detach']();
                if (_0x286e5c['local'] || _0x286e5c['action'] != 'Mark\x20winner')
                    return;
                $('.bracket' + _0x298f5d)['append'](_0x1a133c),
                TweenMax['fromTo'](_0x1a133c, 0x1, {
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
function viewTourneyResponse(_0x36d4bd) {
    if (duelId) {}
    if (!selectedTourney || selectedTourney['data']('id') != _0x36d4bd['id'])
        return;
    currentLabel != 'tournaments' ? (goto('tournaments'),
    $('#tournaments\x20.back_btn')['hide']()) : $('#tournaments\x20.back_btn')['show']();
    if (moderator) {}
    $('#tournaments\x20.subtitle')['text'](''),
    $('#tournaments\x20.create_tourney_btn')['hide'](),
    selectedTourney = new Tournament(_0x36d4bd),
    selectedTourney['data']('id', _0x36d4bd['id']),
    hideCreateTourney(),
    $('.adjudicators_list:visible\x20.friend_item')['each'](function(_0x481483, _0x5cd6f3) {
        $(this)['text']() == username && (_0x481483 == 0x0 ? _0x36d4bd['adjudicator'] = 0x2 : _0x36d4bd['adjudicator'] = 0x1);
    }),
    tourney_data = _0x36d4bd,
    showTournament();
}
function showTournament() {
    if (!tourney_ready || !tourney_data)
        return;
    hideDim(),
    $('#tournaments\x20.period_sel')['hide']();
    var _0x356004 = 0x28;
    selectedTourney['css']('top', _0x356004),
    selectedTourney['detach'](),
    accept_members['detach'](),
    $('#tournaments\x20.content:first')['html'](''),
    $('#tournaments\x20.content:first')['append'](selectedTourney),
    selectedTourney['find']('.name_txt')['text'](tourney_data['name']),
    selectedTourney['find']('.desc_txt')['html'](escapeHTMLWithLinks(tourney_data['description'], !![])),
    _0x356004 += selectedTourney[0x0]['scrollHeight'] + 0x14,
    selectedTourney['find']('.desc_txt')['append']('<br><br>'),
    selectedTourney['find']('.desc_txt')['append']('<font\x20color=\x22#777777\x22>Format:\x20</font>' + upperCamelCase(tourney_data['format'])),
    selectedTourney['find']('.desc_txt')['append']('<br>'),
    selectedTourney['find']('.desc_txt')['append']('<font\x20color=\x22#777777\x22>Match\x20Type:\x20</font>' + spellFormat(tourney_data['match_type'])),
    _0x356004 += 0x36;
    tourney_data['banlist'] && (selectedTourney['find']('.desc_txt')['append']('<br>'),
    selectedTourney['find']('.desc_txt')['append']('<font\x20color=\x22#777777\x22>Banlist:\x20</font>' + escapeHTMLWithLinks(URL_START + 'banlist?id=' + tourney_data['banlist'])),
    _0x356004 += 0x1b);
    setText(selectedTourney['find']('.progress_txt')),
    selectedTourney['find']('.members_txt')['show']();
    var _0x5ca831 = $('<input\x20type=\x22submit\x22\x20class=\x22join_tourney_btn\x22\x20value=\x22Join\x20Tournament\x22\x20/>');
    _0x5ca831['click'](joinTourneyE),
    _0x5ca831['css']('left', 0x37),
    _0x5ca831['css']('top', _0x356004);
    username && ($('#tournaments\x20.content:first')['append'](_0x5ca831),
    changeButton(_0x5ca831),
    _0x5ca831['disable'](tourney_data['started']));
    tourney_data['joined'] && _0x5ca831['val']('Leave\x20Tournament');
    if (tourney_data['adjudicator'] == 0x2) {
        _0x5ca831['hide']();
        var _0x242ffe = $('<input\x20type=\x22submit\x22\x20class=\x22start_tourney_btn\x22\x20value=\x22Start\x20Tourney\x22\x20/>');
        _0x242ffe['click'](startTourneyE),
        _0x242ffe['css']('left', 0x37),
        _0x242ffe['css']('top', _0x356004),
        $('#tournaments\x20.content:first')['append'](_0x242ffe),
        changeButton(_0x242ffe),
        _0x242ffe['setWidth'](0x64),
        _0x242ffe['disable'](tourney_data['started']);
        var _0x5e49c6 = $('<input\x20type=\x22submit\x22\x20class=\x22edit_tourney_btn\x22\x20value=\x22Edit\x20Tourney\x22\x20/>');
        _0x5e49c6['click'](editTourneyE),
        _0x5e49c6['css']('left', 0xa5),
        _0x5e49c6['css']('top', _0x356004),
        $('#tournaments\x20.content:first')['append'](_0x5e49c6),
        changeButton(_0x5e49c6);
        var _0x461589 = $('<input\x20type=\x22submit\x22\x20class=\x22reset_tourney_btn\x22\x20value=\x22Suspend\x20Tourney\x22\x20/>');
        _0x461589['click'](resetTourneyE),
        _0x461589['css']('left', 0x21b),
        _0x461589['css']('top', _0x356004),
        $('#tournaments\x20.content:first')['append'](_0x461589),
        changeButton(_0x461589),
        _0x461589['setWidth'](0x6c);
        var _0x91d583 = $('<input\x20type=\x22submit\x22\x20class=\x22end_tourney_btn\x22\x20value=\x22End\x20Tourney\x22\x20/>');
        _0x91d583['click'](endTourneyE),
        _0x91d583['css']('left', 0x37),
        _0x91d583['css']('top', _0x356004),
        $('#tournaments\x20.content:first')['append'](_0x91d583),
        changeButton(_0x91d583),
        tourney_data['started'] ? _0x242ffe['hide']() : _0x91d583['hide'](),
        (tourney_data['ended'] || !tourney_data['started']) && _0x91d583['disable'](!![]);
    }
    var _0x3f93f5 = $('<div\x20class=\x22tourney_link\x20size18\x20cyan\x22></div>');
    _0x3f93f5['css']('left', 0x37),
    $('#tournaments\x20.content:first')['append'](_0x3f93f5);
    username ? (_0x356004 += 0x28,
    _0x3f93f5['append'](escapeHTMLWithLinks(URL_START + 'tourney?id=' + tourney_data['id'], !![]))) : !tourney_data['started'] ? (_0x356004 += 0x41,
    selectedTourney['find']('.desc_txt')['append']('<br><br><font\x20style=\x22font-family:\x20Arial;\x20font-style:\x20italic;\x22>To\x20join\x20this\x20tourney,\x20click\x20the\x20<font\x20style=\x22font-family:\x20Arial\x20Black;\x20font-style:\x20normal;\x22>Tournaments</font>\x20button\x20on\x20<u><a\x20href=\x22https://www.duelingbook.com/\x22\x20target=\x22_blank\x22>duelingbook.com</a></u><br>\x20and\x20find\x20the\x20tourney\x20there\x20with\x20the\x20same\x20name.</font>')) : (_0x3f93f5['append'](escapeHTMLWithLinks('https://challonge.com/' + tourney_data['url'])),
    _0x3f93f5['css']('font-size', 0xe));
    _0x3f93f5['css']('top', _0x356004),
    $('#tournaments\x20.content:first')['append'](accept_members),
    accept_members['find']('.joinlist\x20.cell')['detach'](),
    accept_members['css']('top', _0x356004 + 0x37),
    accept_members['find']('.accept_btn')['disable'](!![]),
    accept_members['find']('.reject_btn')['disable'](!![]),
    accept_members['find']('.check_btn')['disable'](!![]),
    $('#tournaments\x20.content:first')['append'](tourney_members),
    tourney_members['css']('top', _0x356004 - 0xa),
    tourney_members['find']('.members_list')['find']('.friend_item')['detach'](),
    tourney_members['find']('.adjudicators_list')['find']('.friend_item')['detach'](),
    tourney_members['find']('.expand_btn')['hide']();
    for (var _0x2829a4 = 0x0; _0x2829a4 < tourney_data['adjudicators']['length']; _0x2829a4++) {
        var _0x2fa894 = new FriendItem(tourney_data['adjudicators'][_0x2829a4]);
        _0x2fa894['contextmenu'](removePlayerE),
        tourney_members['find']('.adjudicators_list')['append'](_0x2fa894),
        setText(_0x2fa894['find']('.username_txt'));
    }
    tourney_members['show'](),
    tourney_members['find']('.title_txt')['hide']();
    if (!tourney_data['started']) {
        tourney_members['find']('.title_txt')['show']();
        for (var _0x2829a4 = 0x0; _0x2829a4 < tourney_data['participants']['length']; _0x2829a4++) {
            var _0x2fa894 = new FriendItem(tourney_data['participants'][_0x2829a4]);
            _0x2fa894['contextmenu'](removePlayerE),
            tourney_members['find']('.members_list')['append'](_0x2fa894),
            setText(_0x2fa894['find']('.username_txt'));
        }
    }
    tourney_members['off']('contextmenu'),
    tourney_members['find']('.adjudicators_txt')['css']('transform', 'scaleX(0.9)'),
    _0x356004 += tourney_members[0x0]['scrollHeight'];
    tourney_data['adjudicator'] == 0x2 && (tourney_members['find']('.adjudicators_txt')['css']('transform', 'scaleX(0.8)'),
    tourney_members['find']('.adjudicators_list')['find']('.expand_btn')['show'](),
    addButton(tourney_members['find']('.adjudicators_list')['find']('.expand_btn'), addAdjudicatorE),
    !tourney_data['started'] && (tourney_members['find']('.members_list')['find']('.expand_btn')['show'](),
    addButton(tourney_members['find']('.members_list')['find']('.expand_btn'), addPlayerE)));
    accept_members['hide']();
    if (tourney_data['adjudicator'] && !tourney_data['started']) {
        accept_members['show']();
        for (var _0x2829a4 = 0x0; _0x2829a4 < tourney_data['joiners']['length']; _0x2829a4++) {
            addMemberCell(tourney_data['joiners'][_0x2829a4]['username']);
        }
    }
    (tourney_data['started'] || !username) && $('#tournaments\x20.subtitle')['text'](tourney_data['name']);
    if (tourney_data['started']) {
        pairings['html'](''),
        pairings['css']('top', _0x356004),
        pairings['css']('height', 0x0),
        $('#tournaments\x20.content:first')['append'](pairings),
        fillBrackets(),
        $('.checkmark1,\x20.checkmark2')['click'](updateWinnerE),
        pairings['css']('transform', 'none'),
        pairings['css']('height', pairings[0x0]['scrollHeight']);
        var _0x64961 = pairings['width']() / (pairings[0x0]['scrollWidth'] + 0xf);
        pairings['css']('transform', 'scale(' + _0x64961 + ')'),
        _0x356004 += pairings[0x0]['scrollHeight'] * _0x64961 + 0x14,
        standings['css']('top', _0x356004),
        $('#tournaments\x20.content:first')['append'](standings),
        standings['find']('.standing')['detach'](),
        updateScores(),
        setTimeout(function() {
            var _0x59099a = parseInt($('#pairings')['css']('top')) - 0x17;
            tweenScrollbar($('#tournaments\x20.content:first'), 0.3, {
                'scrollTop': _0x59099a,
                'ease': Expo['easeInOut']
            });
        }, 0x5);
    }
    setTimeout(function() {
        $('.friend_item\x20.username_txt')['each'](function() {
            setText($(this));
        });
    }, 0xa),
    updateTourneySeconds();
}
function updateScores() {
    tourney_data['participants']['sort'](sortScore);
    for (var _0x53081a = 0x0; _0x53081a < tourney_data['participants']['length']; _0x53081a++) {
        var _0x326622 = new Standing(tourney_data['participants'][_0x53081a],_0x53081a + 0x1);
        _0x326622['css']('top', _0x53081a * 0x32),
        standings['find']('.players')['append'](_0x326622),
        setText(_0x326622['find']('.username_txt'));
    }
    standings['css']('height', 0x0),
    standings['css']('height', standings[0x0]['scrollHeight']);
}
function Tournament(_0x135633) {
    var _0x4a28c1 = $('<div\x20class=\x22tourney\x22></div>');
    _0x4a28c1['data']('id', _0x135633['id']),
    _0x4a28c1['data']('priority', _0x135633['priority']);
    var _0x56f055 = new Avatar(_0x135633);
    _0x56f055['off']('click'),
    _0x56f055['click'](tourneyClickE),
    _0x56f055['find']('.avatar_frame')['css']('filter', 'saturate(0)'),
    _0x56f055['find']('.nsfw')['detach']();
    if (_0x135633['image'])
        _0x56f055['find']('.image')['attr']('src', IMAGES_START + 'tourneys/' + _0x135633['id'] + '.jpg?v=' + _0x135633['image']);
    else
        !_0x135633['automatic'] && _0x56f055['find']('.image')['attr']('src', IMAGES_START + 'swords.jpg');
    _0x56f055['contextmenu'](rankTourneyE);
    var _0xfd4734 = $('<span\x20class=\x22name_txt\x20selectable\x20size24\x22></span>');
    _0xfd4734['text'](_0x135633['name']),
    _0xfd4734['click'](tourneyClickE);
    var _0x25496a = $('<div\x20class=\x22hosted_by_txt\x20arial_rounded18\x22></div>');
    _0x25496a['html']('by\x20<font\x20color=\x22#FFFFCC\x22>' + escapeHTML(_0x135633['username']) + '</font>');
    var _0x521f19 = $('<div\x20class=\x22date_txt\x20arial_rounded18\x22></div>');
    if (_0x135633['started']) {
        var _0x5e73ad = new Date();
        _0x5e73ad['setSeconds'](_0x5e73ad['getSeconds']() - ~~_0x135633['started_at']),
        _0x4a28c1['data']('started_timestamp', _0x5e73ad);
    } else {
        if (_0x135633['starts_at']) {
            var _0x5e73ad = new Date();
            _0x5e73ad['setSeconds'](_0x5e73ad['getSeconds']() - ~~_0x135633['starts_at']),
            _0x4a28c1['data']('starts_at_timestamp', _0x5e73ad);
        } else {
            if (_0x135633['signups_at']) {
                var _0x5e73ad = new Date();
                _0x5e73ad['setSeconds'](_0x5e73ad['getSeconds']() - ~~_0x135633['signups_at']),
                _0x4a28c1['data']('starts_at_timestamp', _0x5e73ad);
            } else
                _0x521f19['text']('Created\x20' + _0x135633['date']);
        }
    }
    var _0x41239a = $('<div\x20class=\x22members_txt\x20arial_rounded18\x22></div>');
    updateMemberTotal(_0x135633, _0x41239a);
    var _0x43c820 = $('<div\x20class=\x22progress_txt\x20arial_rounded18\x22></div>');
    if (_0x135633['ended']) {
        _0x43c820['css']('color', '#777777');
        var _0x5e73ad = new Date();
        _0x5e73ad['setSeconds'](_0x5e73ad['getSeconds']() - ~~_0x135633['ended_at']),
        _0x4a28c1['data']('ended_timestamp', _0x5e73ad);
    } else {
        if (_0x135633['started'])
            _0x43c820['text']('In\x20progress...'),
            _0x43c820['css']('color', '#00BB00');
        else {
            if (_0x135633['signups_at']) {
                _0x43c820['text']('\x20'),
                _0x43c820['css']('color', '#777777'),
                _0x41239a['hide']();
                var _0x5e73ad = new Date();
                _0x5e73ad['setSeconds'](_0x5e73ad['getSeconds']() - ~~_0x135633['signups_at']),
                _0x4a28c1['data']('signups_at_timestamp', _0x5e73ad);
            } else
                _0x41239a['css']('top', 0x37);
        }
    }
    var _0x503f10 = $('<div\x20class=\x22desc_txt\x20size18\x20cyan\x20selectable\x22></div>');
    return _0x503f10['html'](escapeHTMLWithLinks(_0x135633['desc'], !![])),
    _0x4a28c1['append'](_0x56f055),
    _0x4a28c1['append'](_0xfd4734),
    _0x4a28c1['append'](_0x25496a),
    _0x4a28c1['append'](_0x521f19),
    _0x4a28c1['append'](_0x43c820),
    _0x4a28c1['append'](_0x503f10),
    _0x4a28c1['append'](_0x41239a),
    _0x4a28c1;
}
function updateTourneySeconds() {
    $('.tourney')['each'](function(_0x2a58cc, _0x4c8fdc) {
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
function Standing(_0x487f2f, _0x147cde) {
    var _0x49b3e1 = $('<div\x20class=\x22standing\x22></div>');
    _0x49b3e1['data']('wins', _0x487f2f['wins']),
    _0x49b3e1['data']('losses', _0x487f2f['losses']);
    var _0x37ea52 = $('<span\x20class=\x22rank_txt\x22></span>');
    _0x37ea52['text'](_0x147cde);
    var _0x5466bb = new Avatar(_0x487f2f)
      , _0x1ff141 = $('<span\x20class=\x22username_txt\x20bisque\x20selectable\x22></span>');
    _0x1ff141['text'](_0x487f2f['username']);
    _0x487f2f['dropped'] && _0x1ff141['css']('text-decoration', 'line-through');
    var _0x568e4e = $('<span\x20class=\x22score_txt\x22></span>');
    return _0x568e4e['text'](_0x487f2f['wins'] + '-' + _0x487f2f['losses']),
    _0x49b3e1['append'](_0x37ea52),
    _0x49b3e1['append'](_0x5466bb),
    _0x49b3e1['append'](_0x1ff141),
    _0x49b3e1['append'](_0x568e4e),
    _0x49b3e1;
}
function sortScore(_0x1e818e, _0x59ae60) {
    if (_0x1e818e['wins'] > _0x59ae60['wins'])
        return -0x1;
    if (_0x1e818e['wins'] < _0x59ae60['wins'])
        return 0x1;
    if (_0x1e818e['losses'] < _0x59ae60['losses'])
        return -0x1;
    if (_0x1e818e['losses'] > _0x59ae60['losses'])
        return 0x1;
    if (_0x1e818e['points'] > _0x59ae60['points'])
        return -0x1;
    if (_0x1e818e['points'] < _0x59ae60['points'])
        return 0x1;
    return 0x0;
}
function rankTourneyE() {
    if (!moderator)
        return !![];
    var _0x3d1796 = $(this)['parent']()
      , _0x1cac85 = ['3', '2', '1', '0'];
    return getComboBox('Rank\x20Tourney', 'Select\x20the\x20priority\x20for\x20this\x20tourney:\x20', _0x1cac85, _0x1cac85['indexOf'](_0x3d1796['data']('priority')['toString']()), function() {
        Send({
            'action': 'Rank\x20tourney',
            'tourney': ~~_0x3d1796['data']('id'),
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
    for (var _0x9bacee = 0x0; _0x9bacee < tourney_data['matches']['length']; _0x9bacee++) {
        if (tourney_data['matches'][_0x9bacee]['winner'] == null)
            return ![];
    }
    return !![];
}
function addAdjudicatorE() {}
function addPlayerE() {}
function removePlayerE() {}
function startTourneyDuelResponse(_0x1baa9d) {
    duelist && _0x1baa9d['duel'] == duelId && _0x1baa9d['automatic'] && (automaticTourney = !![],
    $('#call_admin_btn')['disable'](![]));
    if (!selectedTourney || selectedTourney['data']('id') != _0x1baa9d['id'])
        return;
    $('.bracket' + _0x1baa9d['match'])['find']('.replay_btn')['hide'](),
    $('.bracket' + _0x1baa9d['match'])['find']('.watch_duel_btn')['data']('id', _0x1baa9d['duel']),
    $('.bracket' + _0x1baa9d['match'])['find']('.watch_duel_btn')['show']();
}
function endTourneyDuelResponse(_0x4f3fc) {
    if (!selectedTourney || selectedTourney['data']('id') != _0x4f3fc['id'])
        return;
    $('.bracket' + _0x4f3fc['match'])['find']('.replay_btn\x20a')['attr']('href', URL_START + 'replay?id=' + _0x4f3fc['duel']),
    $('.bracket' + _0x4f3fc['match'])['find']('.replay_btn')['show'](),
    $('.bracket' + _0x4f3fc['match'])['find']('.watch_duel_btn')['hide']();
}
function leaveTourneyResponse(_0x3378e8) {
    updateMemberTotal(_0x3378e8);
    if (!selectedTourney || selectedTourney['data']('id') != _0x3378e8['id'] || currentLabel != 'tournaments')
        return;
    $('#accept_members\x20.joinlist\x20.cell2')['filter'](function() {
        return $(this)['text']() === _0x3378e8['username'];
    })['detach'](),
    $('#tourney_members\x20.friend_item')['filter'](function() {
        return $(this)['text']() === _0x3378e8['username'];
    })['each'](function() {
        var _0x369641 = $(this);
        TweenMax['to'](_0x369641, 0.5, {
            'opacity': 0x0,
            'onComplete': function() {
                _0x369641['detach']();
            }
        }),
        tourney_data['total']--;
    });
}
function acceptMemberResponse(_0x2582c2) {
    if (_0x2582c2['username'] == username && _0x2582c2['approved']) {
        var _0x1fbbd5 = new Notification();
        _0x1fbbd5['data']('callback', function() {
            gotoPairings(_0x2582c2);
        }),
        _0x1fbbd5['setupAccepted'](_0x2582c2['name']),
        addToNotifications(_0x1fbbd5, !![]);
    }
    tourneys_data = null,
    updateMemberTotal(_0x2582c2);
    if (!selectedTourney || selectedTourney['data']('id') != _0x2582c2['id'] || currentLabel != 'tournaments')
        return;
    $('#accept_members\x20.joinlist\x20.cell2')['filter'](function() {
        return $(this)['text']() === _0x2582c2['username'];
    })['detach']();
    if (tourney_members['find']('.friend_item')['filter'](function() {
        return $(this)['text']() === _0x2582c2['username'];
    })['length'] > 0x0)
        return;
    _0x2582c2['username'] == username && $('#tournaments\x20.join_tourney_btn')['val']('Leave\x20Tournament');
    var _0x5afd00 = new FriendItem(_0x2582c2);
    _0x5afd00['contextmenu'](removePlayerE),
    tourney_members['find']('.members_list')['append'](_0x5afd00),
    setText(_0x5afd00['find']('.username_txt')),
    TweenMax['fromTo'](_0x5afd00, 0x1, {
        'left': 0x258,
        'alpha': 0x0
    }, {
        'left': 0x0,
        'alpha': 0x1,
        'ease': Expo['easeInOut']
    }),
    tourney_data['total']++;
}
function addAdjudicatorResponse(_0x472bbe) {
    if (!selectedTourney || selectedTourney['data']('id') != _0x472bbe['id'] || currentLabel != 'tournaments')
        return;
    if (tourney_members['find']('.friend_item')['filter'](function() {
        return $(this)['text']() === _0x472bbe['username'];
    })['length'] > 0x0)
        return;
    var _0x30ffe0 = new FriendItem(_0x472bbe);
    _0x30ffe0['contextmenu'](removePlayerE),
    tourney_members['find']('.adjudicators_list')['append'](_0x30ffe0),
    setText(_0x30ffe0['find']('.username_txt')),
    TweenMax['fromTo'](_0x30ffe0, 0x1, {
        'left': 0x258,
        'alpha': 0x0
    }, {
        'left': 0x0,
        'alpha': 0x1,
        'ease': Expo['easeInOut']
    });
}
function removePlayerResponse(_0x5cf017) {
    if (_0x5cf017['username'] == username && !_0x5cf017['adjudicator']) {
        var _0x4f5f1a = new Notification();
        _0x4f5f1a['data']('callback', function() {
            gotoPairings(_0x5cf017);
        }),
        _0x4f5f1a['setupRemoved'](_0x5cf017['name']),
        addToNotifications(_0x4f5f1a, !![]);
    }
    tourneys_data = null,
    updateMemberTotal(_0x5cf017);
    if (!selectedTourney || selectedTourney['data']('id') != _0x5cf017['id'] || currentLabel != 'tournaments')
        return;
    _0x5cf017['username'] == username && $('#tournaments\x20.join_tourney_btn')['val']('Join\x20Tournament'),
    tourneys_data = null,
    hideDim(),
    $('#tourney_members\x20.friend_item')['filter'](function() {
        return $(this)['text']() === _0x5cf017['username'];
    })['each'](function() {
        var _0x2d8cff = $(this);
        TweenMax['to'](_0x2d8cff, 0.5, {
            'opacity': 0x0,
            'onComplete': function() {
                _0x2d8cff['detach']();
            }
        }),
        $(this)['parents']('.adjudicators_list')['length'] == 0x0 && tourney_data['total']--;
    }),
    pairings['find']('.username_txt')['filter'](function() {
        return $(this)['text']() === _0x5cf017['username'];
    })['each'](function() {
        $(this)['css']('text-decoration', 'line-through');
    });
}
function updateMemberTotal(_0x55031c, _0x5e7531) {
    !_0x5e7531 && (_0x5e7531 = $('.tourney')['filter'](function() {
        return $(this)['data']('id') === _0x55031c['id'];
    })['find']('.members_txt'));
    var _0x346fed = _0x55031c['total'];
    _0x55031c['max'] && (_0x346fed += '/' + _0x55031c['max']),
    _0x346fed += '\x20players',
    _0x5e7531['text'](_0x346fed),
    _0x5e7531['css']('color', '#FF8800'),
    _0x55031c['total'] >= _0x55031c['max'] && _0x55031c['max'] && _0x5e7531['css']('color', '#00CC00');
}
function gotoPairings(_0x2144c6) {
    window['open'](URL_START + 'tourney?id=' + _0x2144c6['id']);
}
function spellFormat(_0x4f113a) {
    switch (_0x4f113a) {
    case 'm':
        return 'Matches';
    default:
        return 'Singles';
    }
}
function fixCardData(_0x296974) {
    _0x296974['n'] && (_0x296974['name'] = _0x296974['n'],
    _0x296974['ta'] ? _0x296974['treated_as'] = _0x296974['ta'] : _0x296974['treated_as'] = _0x296974['n'],
    _0x296974['e'] && (_0x296974['effect'] = _0x296974['e']),
    _0x296974['c'] && (_0x296974['card_type'] = _0x296974['c']),
    _0x296974['mc'] ? (_0x296974['monster_color'] = _0x296974['mc'],
    _0x296974['ie'] == null && (_0x296974['is_effect'] = 0x1),
    _0x296974['attribute'] = _0x296974['att'],
    _0x296974['level'] = _0x296974['lvl'],
    _0x296974['abi'] && (_0x296974['ability'] = _0x296974['abi']),
    _0x296974['flip'] = parseInt(_0x296974['flp']),
    _0x296974['pendulum'] = parseInt(_0x296974['p']),
    _0x296974['pef'] && (_0x296974['pendulum_effect'] = _0x296974['pef'],
    _0x296974['pendulum_effect_lowercase'] = normalize(_0x296974['pef'])),
    _0x296974['scale'] = parseInt(_0x296974['scl']),
    _0x296974['arr'] && (_0x296974['arrows'] = _0x296974['arr'])) : _0x296974['monster_color'] = '',
    _0x296974['typ'] && (_0x296974['type'] = _0x296974['typ']),
    _0x296974['tcgl'] != null && (_0x296974['tcg_limit'] = _0x296974['tcgl']),
    _0x296974['ocgl'] != null && (_0x296974['ocg_limit'] = _0x296974['ocgl']),
    _0x296974['tcg_limit'] == null && _0x296974['tcgl'] == null && (_0x296974['tcg_limit'] = 0x3),
    _0x296974['ocg_limit'] == null && _0x296974['ocgl'] == null && (_0x296974['ocg_limit'] = 0x3),
    _0x296974['s'] && (_0x296974['serial_number'] = String(_0x296974['s'])),
    _0x296974['tcg'] == null && (_0x296974['tcg'] = 0x1),
    _0x296974['ocg'] == null && (_0x296974['ocg'] = 0x1),
    _0x296974['pic'] == null && (_0x296974['pic'] = '1'),
    _0x296974['h'] != null && (_0x296974['hidden'] = 0x1),
    _0x296974['d'] && (_0x296974['date'] = _0x296974['d']),
    _0x296974['u'] && (_0x296974['updated'] = _0x296974['u']),
    delete _0x296974['n'],
    delete _0x296974['ta'],
    delete _0x296974['e'],
    delete _0x296974['c'],
    delete _0x296974['mc'],
    delete _0x296974['ie'],
    delete _0x296974['att'],
    delete _0x296974['lvl'],
    delete _0x296974['abi'],
    delete _0x296974['flp'],
    delete _0x296974['p'],
    delete _0x296974['pef'],
    delete _0x296974['scl'],
    delete _0x296974['arr'],
    delete _0x296974['typ'],
    delete _0x296974['tcgl'],
    delete _0x296974['ocgl'],
    delete _0x296974['s'],
    delete _0x296974['d'],
    delete _0x296974['u']),
    _0x296974['name_lowercase'] = normalize(_0x296974['name']),
    _0x296974['effect_lowercase'] = normalize(_0x296974['effect']);
}
function normalize(_0x4cadb8) {
    if (_0x4cadb8['normalize'])
        return _0x4cadb8['normalize']('NFD')['replace'](/[\u0300-\u036f]/g, '')['toLowerCase']();
    return _0x4cadb8['toLowerCase']();
}
function isIn(_0x43629f, _0x40e40c) {
    for (var _0xf5fee7 = 0x0; _0xf5fee7 < _0x40e40c['length']; _0xf5fee7++) {
        if (_0x40e40c[_0xf5fee7][0x0] == _0x43629f[0x0] || _0x40e40c[_0xf5fee7]['data']('id') == _0x43629f['data']('id'))
            return _0xf5fee7;
    }
    return -0x1;
}
function restrictInt(_0x28829d) {
    _0x28829d['attr']('pattern', '[0-9]+'),
    _0x28829d['on']('input', function() {
        this['value'] = this['value']['replace'](/[^0-9]/g, '');
    });
}
function getCookie(_0x4d69f2) {
    var _0x4c756d = document['cookie']['match'](new RegExp('(^|\x20)' + _0x4d69f2 + '=([^;]+)'));
    if (_0x4c756d)
        return unescape(_0x4c756d[0x2]);
}
function removeCardMenu() {}
function addIfNotExists(_0x51e264, _0x430cef) {
    !_0x51e264['includes'](_0x430cef) && _0x51e264['push'](_0x430cef);
}
function stopGif(_0x36c65e) {
    if (!remote || _0x36c65e['getAttribute']('src')['indexOf']('.gif') < 0x0)
        return;
    if (_0x36c65e['src']['includes']('loading.gif'))
        return;
    var _0x27dc3d = setInterval(function() {
        if (_0x36c65e['complete']) {
            clearInterval(_0x27dc3d);
            var _0x505087 = document['createElement']('canvas')
              , _0x1a7c54 = _0x505087['width'] = _0x36c65e['width']
              , _0x508e3e = _0x505087['height'] = _0x36c65e['height'];
            _0x505087['getContext']('2d')['drawImage'](_0x36c65e, 0x0, 0x0, _0x1a7c54, _0x508e3e);
            try {
                _0x36c65e['src'] = _0x505087['toDataURL']('image/gif');
            } catch (_0x5e60fc) {
                console['log'](_0x5e60fc),
                console['log']('Culprit:\x20' + _0x36c65e['src']);
            }
        }
    }, 0x64);
}
function foundStatus(_0x56892b) {
    for (var _0x3ddf26 = 0x0; _0x3ddf26 < statuses_data['length']; _0x3ddf26++) {
        if (statuses_data[_0x3ddf26]['id'] == _0x56892b)
            return !![];
    }
    return ![];
}
function getZoom() {
    var _0x3610bc = window['outerWidth'] * window['devicePixelRatio'] / window['outerWidth'];
    if (SAFARI)
        _0x3610bc = window['outerWidth'] / window['visualViewport']['width'];
    else
        MAC && (_0x3610bc = window['outerWidth'] * (window['devicePixelRatio'] / 0x2) / window['outerWidth']);
    return _0x3610bc = Math['round'](_0x3610bc * 0x64),
    console['log']('Zoom\x20=\x20' + _0x3610bc),
    ~~_0x3610bc;
}
function parse(_0x51141e) {
    try {
        return JSON['parse'](_0x51141e);
    } catch (_0x3288a3) {
        return {
            'action': 'Error',
            'message': 'Malformed\x20response'
        };
    }
}
function get_cookie(_0x540510) {
    return document['cookie']['split'](';')['some'](_0x53d9b1=>{
        return _0x53d9b1['trim']()['startsWith'](_0x540510 + '=');
    }
    );
}
function delete_cookie(_0x5dbdac, _0x11833b, _0x213c83) {
    get_cookie(_0x5dbdac) && (document['cookie'] = _0x5dbdac + '=' + (_0x11833b ? ';path=' + _0x11833b : '') + (_0x213c83 ? ';domain=' + _0x213c83 : '') + ';expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT');
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
