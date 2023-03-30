"use strict";

var MAC = window.navigator.platform.indexOf("Mac") >= 0;
var PC = window.navigator.platform.indexOf("Win") >= 0;
var OPERA = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var FIREFOX = typeof InstallTrigger !== 'undefined';
//var SAFARI = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof SAFARI !== 'undefined' && safari.pushNotification));
var SAFARI = !!(navigator.userAgent.indexOf("Safari") >= 0);
var IE = /*@cc_on!@*/false || !!document.documentMode;
var EDGE = !IE && !!window.StyleMedia;
//var CHROME = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var CHROME = !!(navigator.userAgent.indexOf("Chrome") >= 0);
var BLINK = (CHROME || OPERA) && !!window.CSS;
//var TOR = navigator.plugins.length == 0 && new Date().getTimezoneOffset() == 0;
var TOR = !!(navigator.userAgent.indexOf("Firefox") >= 0) && navigator.plugins.length == 0 && new Date().getTimezoneOffset() == 0 && screen.height == window.innerHeight && window.innerHeight == 800;
if (CHROME) {
	SAFARI = false;
}
if (EDGE) {
	CHROME = false;
}
if (TOR) {
	FIREFOX = false;
}

var jello = false || window.location.href.indexOf("jello=true") >= 0;
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	//mobile = true;
var swfHeight = 640;
var swfWidth = 1024;

var dim = loadSVGAnimation(dim, "dim", "dim", 3000, 2000, 24, true);

/*var URL_START = 'https://www.duelingbook.com/';
var IMAGES_START = './images/';
var SOUND_START = './sounds/';
var AVATAR_START = URL_START + IMAGES_START + 'thumbnails/';
var CARD_START = IMAGES_START + 'card/';
var CARDS_START = IMAGES_START + 'cards/';
var CARD_IMAGES_START = URL_START + IMAGES_START + 'low-res/';
var CUSTOM_PICS_START = URL_START + IMAGES_START + 'custom-pics/';
var PROFILE_PIC_START = URL_START + IMAGES_START + 'profile-pics/';
var SKILL_BACKS_START = URL_START + IMAGES_START + 'skill-backs/';
var SLEEVE_START = URL_START + IMAGES_START + 'sleeves/';
var TOKEN_START = URL_START + IMAGES_START + 'tokens/';
var SOFT_PLAYS = ["Target card", "Permission event", "Permission denied", "Pause game", "Resume game", "Add watcher", "Remove watcher", "Duel message", "Watcher message", "Call admin", "Cancel call", "Offer draw", "Revoke draw", "Offer rematch", "Revoke rematch", "Typing"];
if (window.location.href.indexOf("http") < 0) {
	CARDS_START = URL_START + CARDS_START;
}*/

var URL_START = 'https://www.duelingbook.com/';
var IMAGES_START = "https://images.duelingbook.com/";
var SOUND_START = "https://sounds.duelingbook.com/";
var AVATAR_START = IMAGES_START + 'thumbnails/';
var CARD_START = IMAGES_START + 'card/';
var CARDS_START = IMAGES_START + 'cards/';
var CARD_IMAGES_START = IMAGES_START + 'low-res/';
var CUSTOM_PICS_START = IMAGES_START + 'custom-pics/';
var PROFILE_PIC_START = IMAGES_START + 'profile-pics/';
var SKILL_BACKS_START = IMAGES_START + 'skill-backs/';
var SLEEVE_START = IMAGES_START + 'sleeves/';
var TOKEN_START = IMAGES_START + 'tokens/';
var SOFT_PLAYS = ["Target card", "Permission event", "Permission denied", "Pause game", "Resume game", "Add watcher", "Remove watcher", "Duel message", "Watcher message", "Call admin", "Cancel call", "Offer draw", "Revoke draw", "Offer rematch", "Revoke rematch", "Typing"];

var SnapShot = 'sounds/snapshot.mp3';

var ABOUT_ZERO = 0.1;
var action_list = $('#action_list');
var active = false;
var active_scrollpane;
var adjudicator = 0;
var admin = 0;
var admin_status = 0;
var alignLeft = window.location.href.toLowerCase().indexOf("align=l") >= 0;
var alignRight = window.location.href.toLowerCase().indexOf("align=r") >= 0;
var always_show_nsfw = 0;
var audio_arr = [];
var banner_ad = "";
var blocked_arr = [];
var cards_created = false;
var changing_components = true;
var combo_callback;
var conceal = false;
var contentScale = 1;
var controlDown = false;
var controlFocus;
var currentLabel = "";
var data_arr = [];
var db_id = "";
var dragXOffset;
var dragYOffset;
var duelId = 0;
var duelist = false;
var fancy_scrollbars = true;
var flat = false;
var html = 0;
var image_url;
var images = [];
var input_callback;
var cancel_callback;
var lastAction;
var marginLeft = 0;
var marginTop = 0;
var menu = $('<div id="card_menu" class="unloaded"><div id="card_menu_content"></div></div>');
var menu_card;
var mes1 = $('#mes1');
var mes3 = $('#mes3');
var mes4 = $('#mes4');
var mes2 = $('#mes2');
var moderator = 0;
var mouseX = 0;
var mouseXScaled = 0;
var mouseY = 0;
var mouseYScaled = 0;
var msg_callback;
var no_callback;
var notification_tweening = false;
var password;
var prevFocus;
var preview;
var preview_vsp = 0;
var preview_txt = $('#preview_txt');
var recycled_cardfronts_arr = [];
var regular = false;
var remember_me = 0;
var remote = window.location.href.indexOf("http") == 0;
var screenshotStyle = {"transform":"scale(1)", "margin":"0px", "zoom":"1"};
var shiftDown = false;
var showMes = 1;
var skinny_ad = "";
var slur_arr = ["asshole", "ass ", "bastard", "beaner", "bitch", "cracker", " cock ", "coon", "cunt", "dick", "dildo", "faggot", "fag", "fuck", "futa", "hentai", "hitler", "horny", "islam", "muslim", "nazi", "nig", "nigga", "nigger", "queer", "slave", "spick", "pussy", " rape", "raping", " shit", "shit ", "vagina"];
var statuses_data;
var streaming = false;
var taking_screenshot = false;
var testing1 = window.location.href.includes("testing1=true");
var testing2 = window.location.href.includes("testing2=true");
var TOUCHEND = false;
var tourneys_data;
var userId = 0;
var usecardimages = false;
var username;
var VERSION = 679;
var version = 13;
var yes_callback;
var viewing_card = false;
var zooming = false;

//var adjustTimer = new Timer(500);
var adjustTimer = new Timer(1000);
	adjustTimer.callback = adjustScreen;
var resizeETimer = new Timer(50);
	resizeETimer.callback = function(){
		window.onscroll = resizeE;
	};
var dimTimer = new Timer(4000);
	dimTimer.callback = abortDim;
var mouseMoveTimer = new Timer(42);
	mouseMoveTimer.callback = removeMouseMove;

/* DECK */

var awaiting_cards = false;
var cardsInExtra = 0;
var cardsInMain = 0;
var cardsInSide = 0;
var deck_arr = [];
var deck_filled_arr = [];
var deckCardX = 0;
var deckCardY = 0;
var draggedCard = new CardFront();
var extra_arr = [];
var extra_filled_arr = [];
var mainHeight = 72.5;
var mainWidth = 47.85;
var mainXArray = [247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5];
var mainYArray = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 317, 317, 317, 317, 317, 317, 317, 317, 317, 317, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5];
var replay = false;
var search_arr = [];
var searching = false;
var searchXArray = [802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5];
var searchYArray = [249.5, 249.5, 249.5, 249.5, 327, 327, 327, 327, 404.5, 404.5, 404.5, 404.5, 482, 482, 482, 482, 559.5, 559.5, 559.5, 559.5];
var side_arr = [];
var side_filled_arr = [];
var sideHeight = 72.5 * 0.666;
var sideWidth = 47.85 * 0.666;
var sideXArray = [246.35, 283, 319.65, 356.25, 392.9, 429.55, 466.2, 502.85, 539.5, 576.15, 612.8, 649.4, 686.05, 722.7, 759.35];





var standings = $('#standings');
	standings.detach();





addButton($('#msg .ok_btn'), msgOK);
addButton($('#input .ok_btn'), inputOK);
addButton($('#input .cancel_btn'), cancelCallback);
addButton($('#combo .ok_btn'), comboOK);
addButton($('#combo .cancel_btn'), hideDisplayBoxes);
addButton($('#confirm .yes_btn'), confirmYes);
addButton($('#confirm .no_btn'), confirmNo);
addButton($('#confirm2 .yes_btn'), confirmYes);
addButton($('#confirm2 .no_btn'), confirmNo);
addButton($('#confirm2 .cancel_btn'), cancelCallback);
addButton($('#screenshot_btn'), takeScreenshot);
addButton($('#mute_btn'), muteE);

preview = newCardFront();
preview.attr("id", "preview");
preview.css("transform", "scale(0.2460024600246, 0.245991561181435)");
preview.data("name", "preview");
preview.find('.name_txt').addClass("selectable");
preview.find('.name2_txt').addClass("selectable");
preview.hide();

preview_txt.mouseenter(maximizePreview);
preview_txt.mouseleave(minimizePreview);
preview_txt.scroll(previewScrollE);
preview_txt.mousemove(previewMoveE);
preview_txt.hide();

jQuery.fn.extend({
	selectedIndex: function(index) {
		this.each(function(){
			$(this).prop("selectedIndex", index);
			if ($(this).data("proxy")) {
				$(this).data("proxy").text($(this).find('option:selected').first().text());
				$(this).data("proxy").append($(this).data("proxy").data("line"));
				$(this).data("proxy").append($(this).data("proxy").data("arrow"));
			}
		});
		return this;
	},
	checked: function(b) {
		this.each(function(){
			$(this).prop("checked", b);
			if ($(this).data("proxy")) {
				var check = $(this).data("proxy").find(".check");
				if (b) {
					check.show();
				}
				else {
					check.hide();
				}
			}
		});
		return this;
	},
	disable: function(b) {
		this.each(function(){
			$(this).prop("disabled", b);
			var div = $(this).data("proxy");
			if (!div) {
				console.log($(this).attr("class") + ' does not have a proxy to disable');
				return true;
			}
			if (b == true) {
				div.addClass("disabled");
				div.css("opacity", 0.5);
			}
			else {
				div.removeClass("disabled");
				div.css("opacity", 1);
			}
			if (!div.hasClass("checkbox") && !div.hasClass("radiobutton") && !div.hasClass("combobox")) { // admin_status showed the number 0
				div.text($(this).val());
			}
		});
		return this;
	},
	visible: function(b) {
		this.each(function(){
			var visibility = "hidden";
			if (b) {
				visibility = "visible";
			}
			$(this).css("visibility", visibility);
			if ($(this).data("proxy")) {
				$(this).data("proxy").css("visibility", visibility);
			}
		});
		return this;
	},
	setWidth: function(num) {
		this.each(function(){
			$(this).css("width", num + "px");
			resizeComponent($(this), false);
			var div = $(this).data("proxy");
			if (this instanceof HTMLInputElement && this.type == 'text') {
				//div.css("width", (parseInt($(this).css("width")) - 6) + "px");
				div.css("width", (parseInt($(this).css("width"))) + "px");
			}
			else {
				div.css("width", (parseInt($(this).css("width"))) + "px");
			}
		});
		return this;
	},
	setPosition: function(left, top) {
		this.each(function(){
			$(this).css("left", left + "px");
			$(this).css("top", top + "px");
			if ($(this).data("proxy")) {
				$(this).data("proxy").css("left", left + "px");
				$(this).data("proxy").css("top", top + "px");
				$(this).data("proxy").insertAfter($(this));
			}
		});
		return this;
	},
	setHTML: function(str) {
		this.each(function(){
			if (!$(this).html()) {
				$(this).html(str);
			}
		});
		return this;
	},
	scrollMax: function() {
		var maxVSP = $(this)[0].scrollHeight - $(this).outerHeight();
		if (this.hasClass("scrollpane") && this.find('.os-content').length > 0) {
			maxVSP = $(this).find('.os-content:first')[0].scrollHeight - $(this).find('.os-content:first').outerHeight();
			//maxVSP = $(this).find('.os-content:first')[0].scrollHeight - $(this).outerHeight();
		}
		return maxVSP;
	},
	scrollLeftMax: function() {
		var maxVSP = $(this)[0].scrollWidth - $(this).outerWidth();
		if (this.hasClass("scrollpane") && this.find('.os-content').length > 0) {
			maxVSP = $(this).find('.os-content:first')[0].scrollWidth - $(this).find('.os-content:first').outerWidth();
		}
		return maxVSP;
	},
	scrollHeight: function() {
		if (this.hasClass("scrollpane") && this.find('.os-content').length > 0) {
			return this.find('.os-content')[0].scrollHeight;
		}
		return this[0].scrollHeight;
	},
});

(function ($) {
	var _val = $.fn.val;
	$.fn.val = function(value) {
		if (arguments.length >= 1) {
			if (this.data("proxy")) {
				if (this.hasClass("comboboxlike")) {
					this.data("proxy").find('span').detach();
					this.data("proxy").prepend('<span>' + escapeHTML(value) + '</span>');
				}
				else {
					this.data("proxy").text(value);
				}
			}
			return _val.call(this, value); 
		}
		return _val.call(this);
	};
})(jQuery);

(function ($) {
	var _focus = $.fn.focus;
	$.fn.focus = function() {
		if (mobile) {
			return this;
		}
		if ($(this).attr("type") != "radio") {
			prevFocus = this;
		}
		return _focus.call(this);
	};
})(jQuery);

(function ($) {
	var _select = $.fn.select;
	$.fn.select = function() {
		if (mobile) {
			return this;
		}
		return _select.call(this);
	};
})(jQuery);

(function($) {
    jQuery.fn.extend({
        prependClass: function(newClasses) {
            return this.each(function() {
                var currentClasses = $(this).prop("class");
                $(this).removeClass(currentClasses).addClass(newClasses + " " + currentClasses);
            });
        }
    });
})(jQuery);

jQuery.fn.sortElements = (function(){
	var sort = [].sort;
	return function(comparator, getSortable) {
		getSortable = getSortable || function(){
			return this;
		};
		var placements = this.map(function(){
			var sortElement = getSortable.call(this),
				parentNode = sortElement.parentNode,
				nextSibling = parentNode.insertBefore(
					document.createTextNode(''),
					sortElement.nextSibling
				);
			return function() {
				if (parentNode === this) {
					throw new Error("You can't sort elements if any one is a descendant of another.");
				}
				parentNode.insertBefore(this, nextSibling);
				parentNode.removeChild(nextSibling);
			};
		});
		return sort.call(this, comparator).each(function(i){
			placements[i].call(getSortable.call(this));
		});
	};
})();

function addScrollBars() {
	if (!fancy_scrollbars) {
		return;
	}
	
	(function ($) {
		var _show = $.fn.show;
		$.fn.show = function() {
			if (this.find('.os-content').length > 0) {
				var blank = $('<div></div>')
				this.find('.os-content:first').append(blank);
				blank.remove();
				return _show.call(this); 
			}
			return _show.call(this);
		};
	})(jQuery);
	
	(function ($) {
		var _index = $.fn.index;
		$.fn.index = function() {
			var i = _index.call(this);
			if (this.siblings('.os-resize-observer-host').length > 0) {
				i--;
			}
			if (this.siblings('.os-scrollbar-corner').length > 0) {
				i--;
			}
			return i;
		};
	})(jQuery);
	
	(function ($) {
		var _parent = $.fn.parent;
		$.fn.parent = function() {
			var p = _parent.call(this);
			if (p.hasClass("os-content")) {
				return p.parents('.scrollpane:first');
			}
			return p;
		};
	})(jQuery);
	
	(function ($) {
		var _append = $.fn.append;
		$.fn.append = function(value) {
			if (this.hasClass("scrollpane") && this.find('.os-content').length > 0) {
				return _append.call(this.find('.os-content:first'), value); 
			}
			return _append.call(this, value);
		};
	})(jQuery);

	(function ($) {
		var _prepend = $.fn.prepend;
		$.fn.prepend = function(value) {
			if (this.hasClass("scrollpane") && this.find('.os-content').length > 0) {
				//value.insertAfter(this.find('.os-scrollbar-corner:first'));
				return _prepend.call(this.find('.os-content:first'), value); 
			}
			return _prepend.call(this, value);
		};
	})(jQuery);
	
	(function ($) {
		var _html = $.fn.html;
		$.fn.html = function(value) {
			if (this.hasClass("scrollpane") && this.find('.os-content').length > 0) {
				if (arguments.length >= 1) {
					return _html.call(this.find('.os-content:first'), value); 
				}
				return _html.call(this.find('.os-content:first')); 
			}
			if (arguments.length >= 1) {
				return _html.call(this, value);
			}
			return _html.call(this);
		};
	})(jQuery);
	
	/*(function ($) {
		var _html = $.fn.html;
		$.fn.html = function(value) {
			if (arguments.length >= 1) {
				if (this.hasClass("scrollpane") && this.find('.os-content').length > 0) {
					return _html.call(this.find('.os-content:first'), value); 
				}
				return _html.call(this, value);
			}
			return _html.call(this);
		};
	})(jQuery);*/

	(function ($) {
		var _text = $.fn.text;
		$.fn.text = function(value) {
			if (arguments.length >= 1) {
				if (this.hasClass("scrollpane") && this.find('.os-content').length > 0) {
					return _text.call(this.find('.os-content:first'), value); 
				}
				return _text.call(this, value);
			}
			return _text.call(this);
		};
	})(jQuery);

	(function ($) {
		var _scrollTop = $.fn.scrollTop;
		$.fn.scrollTop = function(value) {
			if (arguments.length >= 1) {
				if (this.overlayScrollbars()) {
					if (this.overlayScrollbars().scroll) {
						return this.overlayScrollbars().scroll({y:value});
					}
					return 0;
				}
				return _scrollTop.call(this, value); 
			}
			if (this.overlayScrollbars()) {
				if (this.overlayScrollbars().scroll) {
					return this.overlayScrollbars().scroll().position.y;
				}
				return 0;
			}
			return _scrollTop.call(this);
		};
	})(jQuery);

	(function ($) {
		var _scrollLeft = $.fn.scrollLeft;
		$.fn.scrollLeft = function(value) {
			if (arguments.length >= 1) {
				//if (this.overlayScrollbars()) { // causes infinite loop somehow
				//	return this.overlayScrollbars().scroll({x:value});
				//}
				return _scrollLeft.call(this, value); 
			}
			if (this.overlayScrollbars()) {
				//return this.overlayScrollbars().scroll().position.x;
				if (this.overlayScrollbars().scroll) {
					return this.overlayScrollbars().scroll().position.x;
				}
				return 0;
			}
			return _scrollLeft.call(this);
		};
	})(jQuery);

	/*(function ($) {
		var _scroll = $.fn.scroll;
		$.fn.scroll = function(value) {
			console.log('scroll');
			if (arguments.length >= 1) {
				if (this.hasClass("scrollpane") && this.find('.os-content').length > 0) {
					console.log(this.overlayScrollbars().options("callbacks.onScroll"));
					return this.overlayScrollbars().options("callbacks.onScroll", value);
				}
				return _scroll.call(this, value);
			}
			return _scroll.call(this);
		};
	})(jQuery);*/
	
	$('.scrollpane').each(function(i,e){
		if (e == $('#view .content')[0]) {
			// With overlayScrollbars, the scroll position cannot seem to be set manually, making so the card menu is out of place
			return true;
		}
		if (e == $('#widget .body')[0]) {
			$(e).removeClass("scrollpane");
			return true;
		}
		
		//let scrollpane = $(this);
		var scrollpane = $(this);
		scrollpane.overlayScrollbars({
			"className":"os-theme-dark",
			"resize":"none",
			"sizeAutoCapable":true,
			"paddingAbsolute":true,
			"overflowBehavior":{
				"x":$(this).css("overflow-x"),
				"y":$(this).css("overflow-y")
			},
			"scrollbars":{
				"clickScrolling":true,
				"visibility":"visible"
			},
			"callbacks":{
				"onScroll":function(e){
					scrollpane.trigger("scroll");
				}
			}
		});
		if (CHROME) {
			if (scrollpane.hasClass("list") || scrollpane.hasClass("textarea")) {
				scrollpane.overlayScrollbars().options("callbacks.onUpdated", function(){
					/*if (scrollpane.scrollHeight() > scrollpane.height() && !flat) {
						scrollpane.css("transform-style", "preserve-3d"); // can't see scrollbars otherwise
					}
					else {
						scrollpane.css("transform-style", "flat"); // it's blurry otherwise
					}*/
				});
			}
		}
		if ($(this).hasClass("selectable")) {
			$(this).find('.os-viewport').addClass("unselectable");
			$(this).find('.os-content').addClass("selectable");
		}
	});
	
	$('.scrollpane').mouseover(function(){
		TweenMax.to($(this).find('.os-scrollbar .os-scrollbar-track'), 0.7, {"backgroundColor":"rgb(255, 255, 255, 0.8)"});
		if ($(this).hasClass("list") || $(this).hasClass("textarea")) {
			TweenMax.to($(this).find('.os-scrollbar-handle'), 0.5, {alpha:1});
		}
	});
	$('.scrollpane').mouseout(function(){
		TweenMax.to($(this).find('.os-scrollbar .os-scrollbar-track'), 0.7, {"backgroundColor":"rgb(255, 255, 255, 0.3)"});
		if ($(this).hasClass("list") || $(this).hasClass("textarea")) {
			TweenMax.to($(this).find('.os-scrollbar-handle'), 0.8, {alpha:0});
		}
	});
	$('.textarea .os-content').addClass("os-textarea");
	$('.list .os-content').addClass("os-list");
	//TweenMax.set($('.os-scrollbar-horizontal'), {"backgroundColor":"rgb(255, 255, 255, 0)"});
}

(function($){
	$.fn.innerText = function(msg) {
		if (msg) {
			if (document.body.innerText) {
				for (var i in this) {
					this[i].innerText = msg;
				}
			}
			else {
				for (var i in this) {
					this[i].innerHTML.replace(/&amp;lt;br&amp;gt;/gi,"n").replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
				}
			}
			return this;
		}
		else {
			if (document.body.innerText) {
				return this[0].innerText;
			}
			else {
				return this[0].innerHTML.replace(/&amp;lt;br&amp;gt;/gi,"n").replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
			}
		}
	};
})(jQuery);

function resizeE() {
	loadMessage();
	//if (!adjustTimer.active) {
	//	adjustTimer.start();
	//}
	
	
	
	if (mobile) {
		console.log('returning because mobile');
		return;
	}
	if (jello) {
		if (document.body.clientHeight >= 640) {
			$("#content").css("height", "100%");
			return;
		}
		jelloE();
		console.log('returning because jello');
		return;
	}
	var delta = getHeight() - getScaledHeight();
	if (delta > 0) {
		contentScale = (getScaledHeight() / swfHeight);
	}
	else {
		contentScale = (getScaledWidth() / swfWidth);
	}
	if (zooming) {
		$('#content')[0].style.zoom = contentScale;
	}
	else {
		//TweenMax.set($("#content"), {scale:contentScale});
		$("#content").css("transform", "scale(" + contentScale + ")");
	}
	marginTop = 0;
	if (delta > 0) { // TALL
		marginLeft = 0;
	}
	else { // WIDE
		marginLeft = (window.innerWidth - getScaledWidth()) / 2;
	}
	if (alignLeft) {
		marginLeft = 0;
	}
	if (!zooming) {
		if (alignRight) {
			$("#content").css("margin-left", (marginLeft * 2) + "px");
		}
		else {
			$("#content").css("margin-left", marginLeft + "px");
		}
	}
	if ((window.innerHeight / window.innerWidth) > 0.625) {
		marginTop = (window.innerHeight / 2) - ((window.innerWidth * 0.625) / 2);
	}
	//$("#content").css("margin-top", marginTop + "px");
	$("#content").css("margin-top", (marginTop / parseFloat($('#content')[0].style.zoom)) + "px");
	/*if (CHROME) {
		$('option').css("font-size", "12px");
		$('#combo option').css("font-size", "25px");
	}
	else {
		$('option').css("font-size", (12 * contentScale) + "px");
		$('#combo option').css("font-size", (25 * contentScale) + "px");
	}*/
	$('select, option').css("font-size", (12 * contentScale) + "px");
	$('#combo select').css("font-size", (18.6 * contentScale) + "px");
	if (EDGE) {
		contentScale = 1;
	}
	
	/*
	
	//TweenMax.set($('.widget'), {"scale":1 / contentScale, "width":contentScale * 237, "height":contentScale * 448});
	//TweenMax.set($('.widget'), {"scale":1 / contentScale * 0.9, "width":contentScale * 237 / 0.9, "height":contentScale * 448 / 0.9});
	TweenMax.set($('.widget'), {"scale":1 / contentScale * 0.9, "width":262, "height":814, "top":66});
	//TweenMax.set($('.widget'), {"scale":1, "width":237, "height":448});
	
	
	TweenMax.set($('.widget'), {"scale":1});
	TweenMax.set($('.widget'), {"scale":0.665415});
	
	
	
	TweenMax.set($('.widget'), {"scale":1 / contentScale * 0.6, "width":157 / 0.6});
	TweenMax.set($('.widget'), {"scale":1 / contentScale, "width":175 / 0.6});
	
	*/
	
	
	
	
}





function jelloE() {
	jello = true;
	console.log('jelloE');
	//$("body").css("width", "640px");
	$("body").css("overflow-x", "hidden");
		//$("body").css("overflow-y", "scroll");
	//$("#content").css("overflow", "scroll");
	
	//$("#content").css("height", "100%");
	//$("#statuses").css("height", "100%");
	$("#content").css("transform", "unset");
	$("#content").css("margin-top", "auto");
	$("#content").css("margin-left", "auto");
	
	$('option').css("font-size", "12px");
	$('#combo option').css("font-size", "25px");
}

function unjelloE() {
	console.log('unjelloE');
	jello = false;
	$('html').scrollTop(0);
	resizeE();
	
	/*jello = false;
	$("body").css("overflow-y", "hidden");
	$("#content").css("height", "640px");
	$("#statuses").css("height", "545px");
	resizeE();*/
}

function getWidth() {
	return window.innerWidth;
}

function getHeight() {
	return window.innerHeight;
}

function getScaledHeight() {
	var width = getWidth();
	var height = (swfHeight / swfWidth) * width;
	return height;
}

function getScaledWidth() {
	var height = getHeight();
	var width = (swfWidth / swfHeight) * height;
	return width;
}

function changeInputs(b) {
	var str = 'input[type=text], input[type=password], input[type=date]';
	if (b) {
		str = '#' + currentLabel + ' input[type=text], #' + currentLabel + ' input[type=password]';
	}
	$(str).each(function(i,e){
		var div = $('<div></div>');
		if (!changing_components) {
			$(this).data("proxy", div);
			return true;
		}
		div.addClass("textinput");
		div.addClass("proxy");
		div.css("left", $(this).css("left"));
		div.css("top", $(this).css("top"));
		div.css("width", parseInt($(this).css("width")) - 6);
		div.css("height", (parseInt($(this).css("height")) - 3) + "px"); /* needs to be a fixed number for Safari */
		div.css("display", $(this).css("display")); // untested
		div.css("opacity", $(this).css("opacity")); // untested
		div.data("proxy", $(this));
		div.insertAfter($(this));
		$(this).data("proxy", div);
		$(this).css("opacity", 0);
		$(this).on("input blur", function(){
			if ($(this).attr("type") == "password") {
				$(this).data("proxy").text(toPassword($(this).val()));
			}
			else {
				$(this).data("proxy").text($(this).val());
			}
		});
		$(this).on('focus keydown', function(){
			div.hide();
			div.css("opacity", 0); // needed to add this too for #calls .action_cb change
			$(this).css("opacity", 1);
		});
		$(this).on('focusout', function(){
			div.show();
			div.css("opacity", 1); // needed to add this to for #calls .action_cb change
			$(this).css("opacity", 0);
			
		});
		if ($(this).prop("disabled") == true) {
			div.css("opacity", 0.5);
		}
		watchComponent($(this));
	});
}

function resizeComponents() {
	$('input[type=text], input[type=password]').each(function(i,e){
		resizeComponent($(this));
	});
	$('textarea').each(function(i,e){
		resizeComponent($(this));
	});
}

function resizeComponent(obj, h) {
	if (h !== false) {
		h = true;
	}
	if (obj[0] instanceof HTMLInputElement && (obj[0].type == 'text' || obj[0].type == 'password')) {
		if (FIREFOX) {
			if (PC) {
				if (h) {
					obj.css("height", parseInt(obj.css("height")) - 7 + "px");
				}
				obj.css("width", parseInt(obj.css("width")) - 5 + "px");
			}
			else {
				if (h) {
					obj.css("height", parseInt(obj.css("height")) - 9 + "px");
				}
				obj.css("width", parseInt(obj.css("width")) - 9 + "px");
			}
		}
		else if (EDGE) {
			if (h) {
				obj.css("height", parseInt(obj.css("height")) - 7 + "px");
			}
			obj.css("width", parseInt(obj.css("width")) - 5 + "px"); // 3 is good for login, 5 is good for other
		}
		else if (IE) {
			if (h) {
				obj.css("height", parseInt(obj.css("height")) - 7 + "px");
			}
			obj.css("width", parseInt(obj.css("width")) - 5 + "px");
		}
		else if (CHROME) {
			if (h) {
				obj.css("height", parseInt(obj.css("height")) - 7 + "px");
			}
			if (PC) {
				obj.css("width", parseInt(obj.css("width")) - 4 + "px");
			}
			else {
				obj.css("width", parseInt(obj.css("width")) - 6 + "px");
			}
		}
		else if (SAFARI) {
			if (mobile) {
				if (h) {
					obj.css("height", parseInt(obj.css("height")) - 8 + "px");
				}
				obj.css("width", parseInt(obj.css("width")) - 14 + "px");
			}
			else {
				if (h) {
					obj.css("height", parseInt(obj.css("height")) - 7 + "px");
				}
				obj.css("width", parseInt(obj.css("width")) - 7 + "px");
			}
		}
		else {
			if (h) {
				obj.css("height", parseInt(obj.css("height")) - 9 + "px");
			}
			obj.css("width", parseInt(obj.css("width")) - 9 + "px");
		}
	}
	else if (obj[0] instanceof HTMLTextAreaElement) {
		if (FIREFOX) {
			if (h) {
				obj.css("height", parseInt(obj.css("height")) - 11 + "px");
			}
			obj.css("width", parseInt(obj.css("width")) - 10 + "px");
		}
		else if (IE) {
			if (h) {
				obj.css("height", parseInt(obj.css("height")) - 10 + "px");
			}
			obj.css("width", parseInt(obj.css("width")) - 10 + 16 + "px");
		}
		else {
			if (h) {
				obj.css("height", parseInt(obj.css("height")) - 10 + "px");
			}
			obj.css("width", parseInt(obj.css("width")) - 10 + "px");
		}
	}
}

function changeSelects(b) {
	var str = 'select';
	if (b) {
		str = '#' + currentLabel + ' select';
	}
	$(str + ", .comboboxlike").each(function(i,e){
		var div = $('<div class="combobox"></div>');
		if (!changing_components) {
			$(this).data("proxy", div);
			return true;
		}
		div.addClass("proxy unselectable");
		div.css("left", $(this).css("left"));
		div.css("top", $(this).css("top"));
		div.css("width", parseInt($(this).css("width")) - 7);
		div.data("proxy", $(this));
		div.insertAfter($(this));
		div.text($(this).find('option:selected').text());
		
		var line = $('<div class="combobox_line"></div>');
		div.data("line", line);
		div.append(line);
		
		var arrow = $('<div class="combobox_arrow"><img src="' + IMAGES_START + 'svg/combobox_arrow.svg" /></div>');
		div.data("arrow", arrow);
		div.append(arrow);
		
		$(this).data("proxy", div);
		$(this).css("opacity", 0);
		
		div.css("display", $(this).css("display")); // untested
		
		$(this).change(function(){
			div.text($(this).find('option:selected').text());
			div.append(line);
			div.append(arrow);
		});
		$(this).on('mouseenter focus', function(){
			div.addClass("combobox_selected");
		});
		$(this).on('mouseout focusout', function(){
			div.removeClass("combobox_selected");
		});
		
		if ($(this).prop("disabled") == true) {
			div.addClass("disabled");
		}
		watchComponent($(this));
	});
}

function changeButtons(b) {
	var str = 'input[type=submit], input[type=file]';
	if (b) {
		str = '#' + currentLabel + ' input[type=submit], #' + currentLabel + ' input[type=file]';
	}
	$(str).each(function(i,e){
			/*if ($(this).hasClass("comboboxlike")) { // not needed when changeSelects happens before changeButtons
				return true;
			}*/
		changeButton($(this));
	});
}

function changeButton(btn) {
	if (btn.data("proxy")) {
		return;
	}
	//if (btn.parent().length > 0 && btn.css("width").length >= 20 && parseInt(btn.css("width")) > 100) { // added parent because of a problem with buttons not added to the stage for verticalScrollE // sometimes there's only like 5 decimal places
	if (btn.parent().length > 0 && btn.css("width").indexOf(".9") >= 0 && parseInt(btn.css("width")) > 100) { // added parent because of a problem with buttons not added to the stage for verticalScrollE
		btn.css("width", parseInt(btn.css("width")) - 16); // acts as a fix for users whose buttons are unexplainably too wide
	}
	
	// in chrome, 90 is way too short for width, and 91 is much larger, and the smallest without it being way small$('#deck_constructor #delete_btn').setWidth(91). ah, it must be because of the above code (it jumps by 16)
	
	
	
	var div = $('<div class="button"></div>');
	if (!changing_components) {
		btn.data("proxy", div);
		return true;
	}
	div.addClass("proxy");
	div.addClass("unselectable");
	if (btn.hasClass("button2")) {
		div.addClass("button2");
	}
	div.css("left", btn.css("left"));
	div.css("top", btn.css("top"));
	div.css("right", btn.css("right"));
	div.css("width", parseInt(btn.css("width")) - 2);
	div.css("height", "17px"); /* needs to be a fixed number for Safari */
	div.css("color", btn.css("color"));
	div.text(btn.val());
	div.data("proxy", btn);
	div.insertAfter(btn);
	btn.data("proxy", div);
	btn.css("opacity", 0);
	
	
	div.css("display", btn.css("display")); // untested
	
	
	btn.on('mouseover focus', function(){
		div.addClass("button_selected");
	});
	btn.on('mouseout focusout', function(){
		div.removeClass("button_selected");
		div.removeClass("button_down");
	});
	btn.on('mousedown', function(){
		div.addClass("button_down");
	});
	btn.on('mouseup', function(){
		div.removeClass("button_down");
	});
	if (btn.prop("disabled") == true) {
		div.addClass("disabled");
	}
	watchComponent(btn);
}

function changeCheckboxes(b) {
	var str = 'input[type=checkbox]';
	if (b) {
		str = '#' + currentLabel + ' input[type=checkbox]';
	}
	$(str).each(function(i,e){
		var div = $('<div class="checkbox"></div>');
		if (!changing_components) {
			$(this).data("proxy", div);
			return true;
		}
		div.data("proxy", $(this));
		div.css("left", parseInt($(this).css("left")) + 2);
		div.css("top", parseInt($(this).css("top")) + 2);
		div.css("display", $(this).css("display"));
		
		var check = $('<img class="check" src="' + IMAGES_START + 'svg/check.svg">');
		div.append(check);
		
		div.insertAfter($(this));
		$(this).data("proxy", div);
		$(this).css("opacity", 0);
		$(this).on('mouseenter focus', function(){
			div.addClass("checkbox_selected");
		});
		$(this).on('mouseout focusout', function(){
			div.removeClass("checkbox_selected");
			div.removeClass("checkbox_down");
		});
		$(this).on('mousedown', function(){
			div.addClass("checkbox_down");
		});
		$(this).on('mouseup', function(){
			div.removeClass("checkbox_down");
		});
		$(this).change(function(){
			if ($(this).is(":checked")) {
				check.show();
			}
			else {
				check.hide();
			}
		});
		if ($(this).is(":checked")) {
			check.show();
		}
		else {
			check.hide();
		}
		
		if ($(this).prop("disabled") == true) {
			div.addClass("disabled");
		}
		watchComponent($(this));
	});
}

function changeRadios(b) {
	var str = 'input[type=radio]';
	if (b) {
		str = '#' + currentLabel + ' input[type=radio]';
	}
	$(str).each(function(i,e){
		var div = $('<div class="radiobutton"></div>');
		if (!changing_components) {
			$(this).data("proxy", div);
			return true;
		}
		div.data("proxy", $(this));
		div.css("left", parseInt($(this).css("left")) + 2);
		div.css("top", parseInt($(this).css("top")) + 2);
		div.attr("name", $(this).attr("name"));
		div.attr("id", "radiobutton" + (i + 1));
		
		var radio = $('<img class="check" src="' + IMAGES_START + 'svg/radio.svg">');
		div.append(radio);
		
		div.insertAfter($(this));
		$(this).data("proxy", div);
		$(this).css("opacity", 0);
		$(this).on('mouseenter focus', function(){
			div.addClass("radiobutton_selected");
		});
		$(this).on('mouseout focusout', function(){
			div.removeClass("radiobutton_selected");
			div.removeClass("radiobutton_down");
		});
		$(this).on('mousedown', function(){
			div.addClass("radiobutton_down");
		});
		$(this).on('mouseup', function(){
			div.removeClass("radiobutton_down");
		});
		$(this).change(function(){
			if ($(this).is(":checked")) {
				radio.show();
			}
			else {
				radio.hide();
			}
			$('.radiobutton[name=' + div.attr("name") + ']').each(function(){
				if ($(this).attr("id") != div.attr("id")) {
					$(this).find('.check').hide();
				}
			});
		});
		if ($(this).is(":checked")) {
			radio.show();
		}
		else {
			radio.hide();
		}
		
		if ($(this).prop("disabled") == true) {
			div.addClass("disabled");
		}
		watchComponent($(this));
	});
}

/*function addButton(btn, callback) {
	var name = btn.attr('class');
	if (!name) {
		name = btn.attr('id');
	}
	else {
		if (name.indexOf(' ') >= 0) {
			name = name.substring(0, name.indexOf(' '));
		}
		if (name.indexOf('btn') < 0) {
			name = btn.attr('id');
		}
	}
	var img = btn.find('img').last();
	btn.css("cursor", "pointer");
	var path = IMAGES_START + 'svg/';
	var ext = '.svg';
	var src = img.attr('src');
	if (img.attr('data-src')) {
		src = img.attr('data-src');
	}
	if (img.length > 0 && src.indexOf('.svg') < 0) {
		path = IMAGES_START;
		ext = src.substring(src.length - 4, src.length);
	}
	if (img.length > 0 && src.indexOf('_up.') >= 0) {
		btn.mouseout(function(){
			$(this).find('img').last().attr('src', path + name + '_up' + ext);
		});
		btn.mouseenter(function(){
			img.attr('src', path + name + '_over' + ext);
		});
		if (mobile) {
			btn.mouseup(function(){
				img.attr('src', path + name + '_up' + ext);
			});
		}
		else {
			btn.mouseup(function(){
				img.attr('src', path + name + '_over' + ext);
			});
		}
		btn.mousedown(function(e){
			e.preventDefault(); // prevents unwanted text selection
			img.attr('src', path + name + '_down' + ext);
		});
	}
	if (callback) {
		btn.click(callback);
	}
}*/

function addButton(btn, callback) {
	var name = btn.attr('class');
	if (!name) {
		name = btn.attr('id');
	}
	else {
		if (name.indexOf(' ') >= 0) {
			name = name.substring(0, name.indexOf(' '));
		}
		if (name.indexOf('btn') < 0) {
			name = btn.attr('id');
		}
	}
	var img = btn.find('img').last();
	btn.css("cursor", "pointer");
	var path = IMAGES_START + 'svg/';
	var ext = '.svg';
	var src = img.attr('src');
	if (img.attr('data-src')) {
		src = img.attr('data-src');
	}
	if (img.length > 0 && src.indexOf('.svg') < 0) {
		path = IMAGES_START;
		ext = src.substring(src.length - 4, src.length);
	}
	if (img.length > 0 && src.indexOf('_up.') >= 0) {
		btn.on("touchend mouseout", function(){
			$(this).find('img').last().attr('src', path + name + '_up' + ext);
		});
		btn.on("touchstart mouseenter", function(){
			img.attr('src', path + name + '_over' + ext);
		});
		if (mobile) {
			btn.on("touchend mouseup", function(){
				img.attr('src', path + name + '_up' + ext);
			});
		}
		else {
			btn.on("touchend mouseup", function(){
				img.attr('src', path + name + '_over' + ext);
			});
		}
		btn.on("touchstart mousedown", function(e){
			//e.preventDefault(); // prevents unwanted text selection // actually, enabling this effs things up. click won't fire
			img.attr('src', path + name + '_down' + ext);
		});
	}
	if (callback) {
		btn.click(callback);
	}
}

function removeButton(btn) {
	btn.off("mouseout");
	btn.off("mouseenter");
	btn.off("mouseup");
	btn.off("mousedown");
	btn.off("click");
}

function toPassword(text) {
	var str = "";
	for (var i = 0; i < text.length; i++) {
		str += "●";
	}
	return str;
}

function CardFront() {
	//console.time("CardFront"); // 14ms
	var card = $('<div class="cardfront unselectable"></div>');
	
	var cardfront_content = $('<div class="cardfront_content"></div>');
	card.append(cardfront_content);
	
	var forbidden;
	var limited;
	var semi_limited;
	var tcg;
	var ocg;
	var illegal;
	var custom;
	var pendulum; // 1-31-23
	
	card.extend(card, {
		reset: function() {
			card.removeData();
			card.clearLimit();
		},
		
		reinitialize: function(data) {
			if (!data) {
				return;
			}
			if (!card.data("initialized") || card.data("id") != data.id) {
				card.initializeFromData(data);
			}
		},
		
		initializeFromData: function(data) {
			if (!data.passcode) {
				data.passcode = data.serial_number;
			}
			if (!data.scale && data.scale_left) {
				data.scale = ~~data.scale_left;
			}
			card.removeData(); // needed
			card.data(data);
			card.initialize(data.id, data.name, data.treated_as, data.effect, data.pendulum_effect, data.card_type, data.monster_color, data.is_effect, data.type, data.attribute, data.level, data.ability, data.flip, data.pendulum, data.scale, data.arrows, data.atk, data.def, data.tcg_limit, data.ocg_limit, data.passcode, data.tcg, data.ocg, data.pic, data.custom, data.username, data.rush);
		},
		
		initializeAndLimit: function(data, ocg) {
			card.initializeFromData(data);
			card.setLimit(ocg);
		},
		
		initialize: function(id, name, treated_as, effect, pendulum_effect, card_type, monster_color, is_effect, type, attribute, level, ability, flip, pendulum, scale, arrows, atk, def, tcg_limit, ocg_limit, passcode, tcg, ocg, pic, custom, username, rush) {
			
			if (!id) {
				id = 0;
			}
			if (!name) {
				name = "";
			}
			if (!treated_as) {
				treated_as = "";
			}
			if (!effect) {
				effect = "";
			}
			if (!pendulum_effect) {
				pendulum_effect = "";
			}
			if (!card_type) {
				card_type = "";
			}
			if (!monster_color) {
				monster_color = "";
			}
			if (!is_effect) {
				is_effect = 0;
			}
			if (!type) {
				type = "";
			}
			if (!attribute) {
				attribute = "";
			}
			if (!level) {
				level = 0;
			}
			if (!ability) {
				ability = "";
			}
			if (!flip) {
				flip = 0;
			}
			if (!pendulum) {
				pendulum = 0;
			}
			if (!scale) {
				scale = 0;
			}
			if (!arrows) {
				arrows = "";
			}
			if (atk == null) {
				atk = "";
			}
			if (def == null) {
				def = "";
			}
			if (!tcg_limit) {
				tcg_limit = 0;
			}
			if (!ocg_limit) {
				ocg_limit = 0;
			}
			if (!passcode) {
				passcode = "0";
			}
			if (!tcg) {
				tcg = 0;
			}
			if (!ocg) {
				ocg = 0;
			}
			if (!pic) {
				pic = "";
			}
			if (!custom) {
				custom = 0;
			}
			if (!username) {
				username = "";
			}
			if (!rush) {
				rush = 0;
			}
			
			
			
			
			
			if (pendulum || monster_color == "Link") {
				rush = 0;
			}
			
			
			
			
			
			
			// disabled till cards is transfered to new server
			/*if (mobile && SAFARI || usecardimages) {
				if (id > 0 && id < 20000) {
					var cardimage = $('<img class="cardimage" src="https://images.duelingbook.com/cards-small/' + id + '.jpg" width="813" height="1185" />');
					if (card.find('.cardimage').length > 0) {
						card.find('.cardimage').replaceWith(cardimage);
					}
					else {
						cardfront_content.replaceWith(cardimage);
					}
					card.data("initialized", true);
					return;
				}
				else if (card.find('.cardimage').length > 0) {
					card.find('.cardimage').replaceWith(cardfront_content);
				}
			}*/
			
			
			
			
			
			name_txt.style.display = "block";
			name2_txt.style.display = "none";
			rush_front_img.style.display = "none";
			pendulum_front.style.display = "none";
				name_txt.style.left = "67px";
				name_txt.style.top = "48px";
				attrib.style.left = "680px";
				attrib.style.top = "56px";
				attrib.style.width = "75px";
				attrib.style.height = "77px";
				type_icon.style.left = "671px";
				type_icon.style.top = "151px";
				type_icon.style.width = "42px";
				type_icon.style.height = "43px";
			card.find('.level').hide();
			card.find('.rank').hide();
			spell_type_txt.style.display = "none";
			type_icon.style.display = "none";
			card.find('.black_arrow').hide();
			card.find('.red_arrow').hide();
			monster_line.style.display = "none";
			type_txt.style.display = "none";
			attrib.style.display = "none";
			atk_lbl.style.display = "none";
			card_atk_txt.style.display = "none";
			def_lbl.style.display = "none";
			card_def_txt.style.display = "none";
			link_txt.style.display = "none";
			passcode_txt.style.color = "black";
			passcode_txt.style.display = "none";
			//passcode_txt.style.left = "30px";
			passcode_txt.style.left = "37px";
			//passcode_txt.style.top = "1129px";
			passcode_txt.style.top = "1124px";
			img.style.left = "100px";
			img.style.top = "217px";
			img.style.width = "614px";
			img.style.height = "614px";
			type_txt.style.top = "884px";
			scale_left_txt.style.display = "none";
			scale_right_txt.style.display = "none";
			effect_txt.style.fontStyle = "normal";
			card_pendulum_effect_txt.style.display = "none";
			card.data("is_link", false);
			if (full_image) {
				full_image.style.display = "none";
			}
			rush_level.style.display = "none";
			rush_level_txt.style.display = "none";
			rush_stats.style.display = "none";
			rush_atk_txt.style.display = "none";
			rush_def_txt.style.display = "none";
			rush_type_txt.style.display = "none";
			legend.style.display = "none";
			rush_front_img.style.display = "none";
			
			this.pendulum = pendulum;
			
			/*//if (mobile && SAFARI) {
			if (SAFARI) {
				card.find('.cardimage').detach();
				if (id > 0 && id < 20000) {
					$('<img class="cardimage" src="https://www.duelingbook.com/images/cards-small/' + id + '.jpg" width="813" height="1185" />').insertAfter(card.find('.passcode_txt'));
					card.data("initialized", true);
					return;
				}
			}*/
			
			
			
			
			
			
			
			
			
			/*if (id > 0 && id < 20000) {
				if (card_type == "Spell" || card_type == "Trap") {
					front.setAttribute("src", CARD_START + card_type.toLowerCase() + "_front.jpg");
				}
				else {
					front.setAttribute("src", CARD_START + monster_color.toLowerCase() + "_front.jpg");
				}
				if (!full_image) {
					full_image = document.createElement("img");
					full_image.className = "full_image";
					full_image.setAttribute("width", "813");
					full_image.setAttribute("height", "1185");
					card[0].appendChild(full_image);
				}
				full_image.setAttribute("src", IMAGES_START + "blank.png");
				
				if (id < 9) {
					full_image.setAttribute("src", "https://www.duelingbook.com/images/cards-small/" + id + ".jpg");
				}
				else {
					full_image.setAttribute("src", CARDS_START + id + ".jpg");
				}
				
				
				full_image.style.display = "block";
				card.data("initialized", true);
				return;
			}*/
			
			
			
			
			
			
			
			
			
				
			//name_txt.textContent = name;
			name_txt.innerHTML = correctText(name);
			card.setCardName();
			//effect_txt.innerHTML = escapeHTML(effect);
			effect_txt.innerHTML = correctEffect(escapeHTML(effect), rush);
			if (card_type == "Spell" || card_type == "Trap") {
				name_txt.style.color = "white";
				attrib.setAttribute("src", CARD_START + card_type.toLowerCase() + "_attribute.png");
				attrib.style.display = "block";
				front.setAttribute("src", CARD_START + card_type.toLowerCase() + "_front2.jpg");
				var card_type_str = '<font class="spell_type_large">[</font> <font class="spell_type_medium">' + card_type.substring(0, 1) + '</font>' + card_type.substring(1, card_type.length).toUpperCase() + ' <font class="spell_type_medium">C</font>ARD';
				if (!type) {
					type = "Normal";
				}
				if (type != "Normal") {
					card_type_str += '<font style="font-size: 26px;">&nbsp;&nbsp;&nbsp;</font>';
					if (SAFARI) {
						card_type_str += '&nbsp;&nbsp;';
					}
				}
				card_type_str += '</font>';
				card_type_str += ' <font class="spell_type_large">]</font>';
				spell_type_txt.innerHTML = card_type_str;
				spell_type_txt.style.display = "block";
				if (type != "Normal") {
					type_icon.setAttribute("src", CARD_START + type.toLowerCase() + ".png");
					type_icon.style.display = "block";
				}
				effect_txt.style.top = "890px";
				//effect_txt.style.height = "230px";
				effect_txt.style.height = "226px";
			}
			else if (card_type == "Monster") {
				if (monster_color == "Normal") {
					effect_txt.style.fontStyle = "italic";
				}
				name_txt.style.color = "white";
				effect_txt.style.top = "919px";
				effect_txt.style.height = "154px";
				if (!monster_color) {
					monster_color = "Effect";
				}
				front.setAttribute("src", CARD_START + monster_color.toLowerCase() + "_front2.jpg"); // causes problems with pendulums
				if (type) {
					var type_str = "";
					type_str = '<font class="type_large">[</font> ' + getType(type);
					if (flip == 1) {
						type_str += ' / ' + getType("Flip");
					}
					if (ability) {
						type_str += ' / ' + getType(ability);
					}
					if (monster_color == "Ritual" || monster_color == "Fusion" || monster_color == "Synchro" || monster_color == "Xyz" || monster_color == "Link") {
						type_str += ' / ' + getType(monster_color);
					}
					if (pendulum == 1) {
						type_str += ' / ' + getType("Pendulum");
					}
					if (is_effect == 1 && monster_color == "Normal") {
						type_str += ' / ' + getType("Normal");
					}
					else if (is_effect == 1 && monster_color != "Token") {
						type_str += ' / ' + getType("Effect");
					}
					if (monster_color == "Token" && type != "") {
						type_str += ' / ' + getType("Token");
					}
					type_str += ' <font class="type_large">]</font>';
					type_txt.innerHTML = type_str;
					type_txt.style.display = "block";
					setText(type_txt);
				}
				if (monster_color != "Token") {
					if (monster_color != "Link") {
						monster_line.style.display = "block";
						def_lbl.style.display = "block";
						card_def_txt.style.display = "block";
						card_def_txt.textContent = def;
					}
					atk_lbl.style.display = "block";
					card_atk_txt.style.display = "block";
					card_atk_txt.textContent = atk;
				}
				if (monster_color != "Xyz" && monster_color != "Link") {
					name_txt.style.color = "black";
					for (i = 0; i < level; i++) {
						if (i >= 13) {
							break;
						}
						if (card.find('.level').eq(i).length == 0) {
							card.addLevel(i);
						}
						card.find('.level').eq(i)[0].style.display = "block";
					}
					if (level >= 13 && !card.hasClass("level13")) {
						card.addClass("level13");
						card.find('.level').each(function(i,e){
							$(this).css("left", (677 - (54 * i)) + 27);
						});
					}
					if (level < 13 && card.hasClass("level13")) {
						card.removeClass("level13");
						card.find('.level').each(function(i,e){
							$(this).css("left", (677 - (54 * i)));
						});
					}
				}
				else if (monster_color == "Xyz") {
					passcode_txt.style.color = "white";
					for (i = 0; i < level; i++) {
						if (i >= 13) {
							break;
						}
						if (card.find('.rank').eq(i).length == 0) {
							card.addRank(i);
						}
						card.find('.rank').eq(i)[0].style.display = "block";
					}
					if (level >= 13 && !card.hasClass("rank13")) {
						card.addClass("rank13");
						card.find('.rank').each(function(i,e){
							$(this).css("left", (677 - (54 * i)) + 27);
						});
					}
					if (level < 13 && card.hasClass("rank13")) {
						card.removeClass("rank13");
						card.find('.rank').each(function(i,e){
							$(this).css("left", (677 - (54 * i)));
						});
					}
				}
				if (monster_color == "Link") {
					card.data("is_link", true);
					if (arrows.length == 8) {
						if (card.find('.black_arrow').length == 0) {
							for (var i = 0; i < 8; i++) {
								card.addBlackArrow(i);
							}
							for (i = 0; i < 8; i++) {
								card.addRedArrow(i);
							}
						}
						card.find('.black_arrow').show();
						for (i = 0; i < 8; i++) {
							if (arrows.substring(i, i + 1) == "1") {
								card.find('.red_arrow').eq(i).show();
							}
						}
					}
					if (level > 0) {
						link_txt.textContent = level;
						link_txt.style.display = "block";
					}
				}
				if (pendulum == 1) {
					passcode_txt.style.color = "black";
					pendulum_front.style.display = "block";
					card_pendulum_effect_txt.innerHTML = escapeHTML(pendulum_effect);
					card_pendulum_effect_txt.style.display = "block";
					scale_left_txt.textContent = scale;
					scale_left_txt.style.display = "block";
					scale_right_txt.textContent = scale;
					scale_right_txt.style.display = "block";
					card.setPendulumText();
				}
				if (attribute) {
					attrib.setAttribute("src", CARD_START + attribute.toLowerCase() + "_attribute.png");
					attrib.style.display = "block";
				}
			}
			else if (card_type == "Skill") {
				front.setAttribute("src", CARD_START + "skill_front2.jpg");
				name_txt.style.display = "none";
				name2_txt.style.display = "block";
				name2_txt.textContent = name;
				type_str = '[ ' + getType(type) + ' / ' + getType("Skill");
				if (ability) {
					type_str += ' / ' + getType(ability);
				}
				type_str += ' ]';
				type_txt.innerHTML = type_str;
				type_txt.style.display = "block";
				setText(type_txt);
				effect_txt.style.top = "919px";
				effect_txt.style.height = "154px";
			}
			else {
				front.setAttribute("src", CARD_START + "effect_front2.jpg");
				name_txt.style.color = "black";
			}
			
			
			
			
			
			
			
			
			if (passcode != "0") {
				while (passcode.length < 8) {
					passcode = "0" + passcode;
				}
				passcode_txt.textContent = passcode;
				passcode_txt.style.display = "block";
			}
			switch (passcode) {
				case "10000000":
				case "10000001":
				case "10000002":
				case "10000003":
				case "10000010":
				case "10000011":
				case "10000012":
				case "10000020":
				case "10000021":
				case "10000022":
				case "10000023":
				case "10000030":
				case "10000040":
				case "10000080":
				case "10000090":
					passcode_txt.textContent = "";
					break;
			}
			if (username) {
				passcode_txt.textContent = username;
				passcode_txt.style.display = "block";
			}
			//if (pic && id != 0 || card_type == "Skill") { // remind me why id can't be 0?
			//if (pic || card_type == "Skill") {
			//if (~~pic || card_type == "Skill" || pic && pic.indexOf("http") == 0) { // ~~http is considered 0
			if (~~pic || card_type == "Skill" || pic && pic.indexOf("http") == 0 || pic.indexOf(".gif") >= 0) { // ~~http is considered 0
				card.loadImage();
			}
			else {
				card.removeImage(); // added 7/13/19
			}
			if (rush) {
				/*cardfront_content.insertBefore(rush_front_img, pendulum_front);
				cardfront_content.insertBefore(legend, pendulum_front);
				cardfront_content.insertBefore(rush_stats, pendulum_front);
				cardfront_content.insertBefore(rush_atk_txt, pendulum_front);
				cardfront_content.insertBefore(rush_def_txt, pendulum_front);
				cardfront_content.insertBefore(rush_level, pendulum_front);
				cardfront_content.insertBefore(rush_level_txt, pendulum_front);
				cardfront_content.insertBefore(rush_type_txt, pendulum_front);*/
				if (rush > 1) {
					legend.style.display = "block";
				}
				name_txt.style.color = "black";
				name_txt.style.left = "42px";
				name_txt.style.top = "31px";
				rush_type_txt.style.color = "black";
				rush_front_img.style.display = "block";
				var front_src = "effect";
				if (card_type == "Monster") {
					front_src = monster_color.toLowerCase();
					rush_stats.style.display = "block";
					rush_atk_txt.style.display = "block";
					rush_atk_txt.textContent = atk;
					rush_def_txt.style.display = "block";
					rush_def_txt.textContent = def;
					if (monster_color == "Xyz") {
						rush_level.setAttribute("src", CARD_START + "rush_rank.png");
						rush_level_txt.style.color = "3px #2f3334";
						rush_level_txt.style.webkitTextStroke = "3px #2f3334";
						name_txt.style.color = "white";
						rush_type_txt.style.color = "white";
					}
					else {
						rush_level.setAttribute("src", CARD_START + "rush_level.png");
						rush_level_txt.style.color = "3px #de3f2e";
						rush_level_txt.style.webkitTextStroke = "3px #de3f2e";
					}
					rush_level.style.display = "block";
					rush_level_txt.style.display = "block";
					rush_level_txt.textContent = level;
					card.find('.level').hide();
					card.find('.rank').hide();
					rush_type_txt.innerHTML = type_txt.innerHTML;
				}
				else {
					front_src = card_type.toLowerCase();
					rush_type_txt.innerHTML = spell_type_txt.innerHTML.replace('&nbsp;&nbsp;', '&nbsp;');
					spell_type_txt.style.display = "none";
					if (card_type == "Trap") {
						type_icon.style.left = "239px";
						rush_type_txt.style.letterSpacing = "0px";
					}
					else {
						type_icon.style.left = "245px";
						rush_type_txt.style.letterSpacing = "0.25px";
					}
					type_icon.style.top = "861px";
					type_icon.style.width = "30px";
					type_icon.style.height = "30px";
				}
				rush_front_img.setAttribute("src", CARD_START + "rush_" + front_src + "_front.png");
				rush_type_txt.style.display = "block";
				img.style.left = "43px";
				img.style.top = "118px";
				img.style.width = "726px";
				img.style.height = "733px";
				//attrib.style.left = "670px";
				attrib.style.left = "671px";
				attrib.style.top = "46px";
				attrib.style.width = "97px";
				attrib.style.height = "96px";
				type_txt.style.display = "none";
				effect_txt.style.top = "903px";
				effect_txt.style.height = "195px";
				atk_lbl.style.display = "none";
				card_atk_txt.style.display = "none";
				def_lbl.style.display = "none";
				card_def_txt.style.display = "none";
				monster_line.style.display = "none";
				passcode_txt.style.color = "white";
				passcode_txt.style.left = "68px";
				passcode_txt.style.top = "1109px";
			}
			setCardText(effect_txt);
			card.data("initialized", true);
		},
		
		loadImage: function() {
			var id = card.data("id");
			var pic = card.data("pic");
			var custom = card.data("custom");
			var monster_color = card.data("monster_color");
			var rush = card.data("rush");
			if (pic == "0") {
				return;
			}
			var src = CARD_IMAGES_START + id + '.jpg';
			if (custom > 0) {
				src = CUSTOM_PICS_START + getCustomFolder(id) + '/' + id + '.jpg';
			}
			if (monster_color == "Token") {
				src = pic;
			}
			else if (pic.indexOf("http") == 0) {
				src = pic;
			}
			//else if (pic.indexOf(".gif") >= 0) {
			//	src = CUSTOM_PICS_START + getCustomFolder(id) + '/' + pic;
			//}
			else if (pic != "1") {
				src += '?version=' + pic;
			}
			card.find('.pic').attr("src", IMAGES_START + "loading.gif");
			card.find('.pic').attr("src", src);
			//card.data("initialized", true); // why is this here?
			
			/*img.onload = null; // added 2-10-23
			if (this.pendulum) {
				if (img.complete) {
					this.resizePendulumPic();
				}
				else {
					//img.onload = null; // disabled 2-10-23
					img.onload = this.resizePendulumPic;
				}
			}*/
			
			img.onload = null;
			if (img.complete) {
				this.resizePendulumPic();
			}
			else {
				img.onload = this.resizePendulumPic;
			}
		},
		
		removeImage: function() {
			card.find('.pic').attr("src", IMAGES_START + "black.jpg");
		},
		
		setPendulumText: function() {
			img.style.left = "53px";
			img.style.top = "212px";
			img.style.width = "707px";
			img.style.height = "569px";
			scale_left_txt.style.top = "820px";
			scale_right_txt.style.top = "820px";
			card_pendulum_effect_txt.style.top = "792px";
			card_pendulum_effect_txt.style.height = "93px";
			card_pendulum_effect_txt.style.fontSize = "25px";
			card_pendulum_effect_txt.style.lineHeight = "26px";
			if (!pendulum_img) {
				pendulum_img = document.createElement("img");
				pendulum_img.setAttribute("src", CARD_START + "pendulum_front_small2.png");
				pendulum_img.setAttribute("width", "758");
				pendulum_img.setAttribute("height", "1160");
				pendulum_front.appendChild(pendulum_img);
			}
			pendulum_img.setAttribute("src", CARD_START + "pendulum_front_small2.png");
			if (card_pendulum_effect_txt.scrollHeight > card_pendulum_effect_txt.clientHeight) {
				img.style.height = "528px";
				scale_left_txt.style.top = "802px";
				scale_right_txt.style.top = "802px";
				card_pendulum_effect_txt.style.top = "752px";
				card_pendulum_effect_txt.style.height = "126px";
				card_pendulum_effect_txt.style.fontSize = "22px";
				card_pendulum_effect_txt.style.lineHeight = "25px";
				pendulum_img.setAttribute("src", CARD_START + "pendulum_front_medium2.png");
			}
			if (card_pendulum_effect_txt.scrollHeight > card_pendulum_effect_txt.clientHeight) {
				type_txt.style.top = "919px";
				effect_txt.style.top = "952px";
				effect_txt.style.height = "122px";
				scale_left_txt.style.top = "815px";
				scale_right_txt.style.top = "815px";
				card_pendulum_effect_txt.style.height = "153px";
				card_pendulum_effect_txt.style.fontSize = "22.5px";
				card_pendulum_effect_txt.style.lineHeight = "22px";
				pendulum_img.setAttribute("src", CARD_START + "pendulum_front_large2.png");
			}
			while (card_pendulum_effect_txt.scrollHeight > card_pendulum_effect_txt.clientHeight) {
				var fontSize = parseInt(card_pendulum_effect_txt.style.fontSize);
				card_pendulum_effect_txt.style.lineHeight = (fontSize + 1) + "px";
				card_pendulum_effect_txt.style.fontSize = --fontSize + "px";
			}
		},
		
		resizePendulumPic: function() {
			if (this.pendulum) {
				//if (img.naturalHeight > img.naturalWidth) {
				if (img.naturalHeight > img.naturalWidth && img.naturalHeight / img.naturalWidth < 1.3295) {
					img.style.height = (img.naturalHeight / img.naturalWidth * 707) + "px";
				}
			}
			if (viewing_card) {
				if (img.currentSrc.indexOf("loading.gif") >= 0) {
					return;
				}
				$('.dimensions_txt').text(img.naturalWidth + " x " + img.naturalHeight);
			}
		},
		
		copyCard: function(e){
			card.initializeFromData(e.data());
		},
		
		setLimit: function(ocg_list){
			card.clearLimit();
			if (card.data("custom")) {
				if (!custom) {
					custom = document.createElement("img");
					custom.className = "custom";
					custom.setAttribute("src", IMAGES_START + "svg/custom.svg");
					//card[0].appendChild(custom);
					$(custom).insertAfter(cardfront_content);
				}
				custom.style.display = "block";
				//return;
			}
			var restriction = ocg_list ? card.data("ocg_limit") : card.data("tcg_limit");
			switch (restriction) {
				case 0:
					if (!forbidden) {
						forbidden = document.createElement("img");
						forbidden.className = "forbidden";
						forbidden.setAttribute("src", IMAGES_START + "svg/forbidden.svg");
						card[0].appendChild(forbidden);
					}
					forbidden.style.display = "block";
					break;
				case 1:
					if (!limited) {
						limited = document.createElement("img");
						limited.className = "limited";
						limited.setAttribute("src", IMAGES_START + "svg/limited.svg");
						card[0].appendChild(limited);
					}
					limited.style.display = "block";
					break;
				case 2:
					if (!semi_limited) {
						semi_limited = document.createElement("img");
						semi_limited.className = "semi_limited";
						semi_limited.setAttribute("src", IMAGES_START + "svg/semi_limited.svg");
						card[0].appendChild(semi_limited);
					}
					semi_limited.style.display = "block";
					break;
			}
			if (card.data("tcg") && !card.data("ocg")) {
				if (!tcg) {
					tcg = document.createElement("img");
					tcg.className = "tcg";
					tcg.setAttribute("src", IMAGES_START + "svg/tcg.svg");
					card[0].appendChild(tcg);
				}
				tcg.style.display = "block";
			}
			if (!card.data("tcg") && card.data("ocg")) {
				if (!ocg) {
					ocg = document.createElement("img");
					ocg.className = "ocg";
					ocg.setAttribute("src", IMAGES_START + "svg/ocg.svg");
					card[0].appendChild(ocg);
				}
				ocg.style.display = "block";
			}
			if (!card.data("tcg") && !card.data("ocg") && !card.data("custom")) {
				if (!illegal) {
					illegal = document.createElement("img");
					illegal.className = "illegal";
					illegal.setAttribute("src", IMAGES_START + "svg/illegal.svg");
					card[0].appendChild(illegal);
				}
				illegal.style.display = "block";
			}
		},
		
		clearLimit: function(){
			if (forbidden) {
				forbidden.style.display = "none";
			}
			if (limited) {
				limited.style.display = "none";
			}
			if (semi_limited) {
				semi_limited.style.display = "none";
			}
			if (tcg) {
				tcg.style.display = "none";
			}
			if (ocg) {
				ocg.style.display = "none";
			}
			if (illegal) {
				illegal.style.display = "none";
			}
			if (custom) {
				custom.style.display = "none";
			}
		},
		
		setCardName:function(){
			//if (card.parent().hasClass("content") || !card.is(":visible")) {
			if (card.parent().hasClass("content") || card[0].style.display == "block") {
				setTimeout(function(){
					setText(name_txt);
					setText(name2_txt);
				//}, 5);
				}, 200);
				return;
			}
			setText(name_txt);
			setText(name2_txt);
		},
		
		addLevel:function(i){
			var level = document.createElement("img");
			level.className = "level level" + (i + 1);
			level.setAttribute("src", CARD_START + "level.png");
			level.style.left = (677 - (54 * i)) + "px";
			if (type_icon.parentNode) {
				type_icon.parentNode.insertBefore(level, type_icon);
			}
			else {
				cardfront_content[0].appendChild(level);
			}
		},
		
		addRank:function(i){
			var rank = document.createElement("img");
			rank.className = "rank rank" + (i + 1);
			rank.setAttribute("src", CARD_START + "rank.png");
			rank.style.left = (83 + (54 * i)) + "px";
			if (type_icon.parentNode) {
				type_icon.parentNode.insertBefore(rank, type_icon);
			}
			else {
				cardfront_content[0].appendChild(rank);
			}
		},
		
		addBlackArrow:function(i){
			var black_arrow = document.createElement("img");
			black_arrow.className = "black_arrow black_arrow" + (i + 1);
			if (i % 2 == 0) {
				black_arrow.setAttribute("src", IMAGES_START + "card/black_arrow_corner.png");
			}
			else {
				return;
				//black_arrow.setAttribute("src", IMAGES_START + "card/black_arrow_side.png");
			}
			if (type_icon.parentNode) {
				type_icon.parentNode.insertBefore(black_arrow, type_icon);
			}
			else {
				cardfront_content[0].appendChild(black_arrow);
			}
		},
		
		addRedArrow:function(i){
			var red_arrow = document.createElement("img");
			red_arrow.className = "red_arrow red_arrow" + (i + 1);
			if (i % 2 == 0) {
				red_arrow.setAttribute("src", IMAGES_START + "card/red_arrow_corner.png");
			}
			else {
				red_arrow.setAttribute("src", IMAGES_START + "card/red_arrow_side.png");
			}
			red_arrow.style.display = "none";
			if (type_icon.parentNode) {
				type_icon.parentNode.insertBefore(red_arrow, type_icon);
			}
			else {
				cardfront_content[0].appendChild(red_arrow);
			}
		}
	});
	card.reset();
	
	var full_image;
	
	var border = document.createElement("img");
	border.className = "card_border";
	border.setAttribute("src", CARD_START + "card_border.jpg");
	
	var front = document.createElement("img");
	front.className = "card_color";
	front.setAttribute("src", CARD_START + "effect_front2.jpg");
	
	var pendulum_img;
	
	var pendulum_front = document.createElement("div");
	pendulum_front.className = "pendulum_front";
	
	
	
	var rush_front_img = document.createElement("img");
	rush_front_img.className = "rush_front";
	//rush_front_img.setAttribute("src", IMAGES_START + "blank.png");
	rush_front_img.setAttribute("src", CARD_START + "rush_effect_front.png");
	
	var rush_stats = document.createElement("img");
	rush_stats.className = "rush_stats";
	rush_stats.setAttribute("src", CARD_START + "rush_stats.png");
	
	var rush_atk_txt = document.createElement("span");
	rush_atk_txt.className = "rush_atk_txt";
	
	var rush_def_txt = document.createElement("span");
	rush_def_txt.className = "rush_def_txt";
	
	var legend = document.createElement("img");
	legend.className = "legend";
	legend.setAttribute("src", CARD_START + "legend.png");
	
	var rush_level = document.createElement("img");
	rush_level.className = "rush_level";
	rush_level.setAttribute("src", CARD_START + "rush_level.png");
	
	var rush_level_txt = document.createElement("span");
	rush_level_txt.className = "rush_level_txt";
	rush_level_txt.innerHTML = "4";
	
	var rush_type_txt = document.createElement("span");
	rush_type_txt.className = "rush_type_txt";
	
	
	
	
	
	var img = document.createElement("img");
	img.className = "pic";
	img.setAttribute("src", IMAGES_START + "loading.gif");
	
	var name_txt = document.createElement("span");
	name_txt.className = "name_txt";
	
	var name2_txt = document.createElement("span");
	name2_txt.className = "name2_txt";
	
	var attrib = document.createElement("img");
	attrib.className = "attribute";
	attrib.setAttribute("src", CARD_START + "dark_attribute.png");
	
	cardfront_content[0].appendChild(border);
	cardfront_content[0].appendChild(front);
	cardfront_content[0].appendChild(img);
		cardfront_content[0].appendChild(rush_front_img);
		cardfront_content[0].appendChild(legend);
		cardfront_content[0].appendChild(rush_stats);
		cardfront_content[0].appendChild(rush_atk_txt);
		cardfront_content[0].appendChild(rush_def_txt);
		cardfront_content[0].appendChild(rush_level);
		cardfront_content[0].appendChild(rush_level_txt);
		cardfront_content[0].appendChild(rush_type_txt);
	cardfront_content[0].appendChild(pendulum_front);
	cardfront_content[0].appendChild(attrib);
	
	var type_icon = document.createElement("img");
	type_icon.className = "type_icon";
	type_icon.setAttribute("src", CARD_START + "continuous.png");
	cardfront_content[0].appendChild(type_icon);
	
	var monster_line = document.createElement("div");
	monster_line.className = "monster_line";
	cardfront_content[0].appendChild(monster_line);
	
	var spell_type_txt = document.createElement("span");
	spell_type_txt.className = "spell_type_txt";
	
	var type_txt = document.createElement("span");
	type_txt.className = "type_txt";
	
	var effect_txt = document.createElement("span");
	effect_txt.className = "effect_txt";
	
	var card_pendulum_effect_txt = document.createElement("span");
	card_pendulum_effect_txt.className = "card_pendulum_effect_txt";
	
	var scale_left_txt = document.createElement("span");
	scale_left_txt.className = "scale_left_txt";
	
	var scale_right_txt = document.createElement("span");
	scale_right_txt.className = "scale_right_txt";
	
	var atk_lbl = document.createElement("span");
	atk_lbl.className = "atk_lbl";
	atk_lbl.innerHTML = 'ATK<font style="font-size: 26px;"> </font>/';
	
	var card_atk_txt = document.createElement("span");
	card_atk_txt.className = "card_atk_txt";

	var def_lbl = document.createElement("span");
	def_lbl.className = "def_lbl";
	def_lbl.innerHTML = 'DEF<font style="font-size: 26px;"> </font>/';
	
	var card_def_txt = document.createElement("span");
	card_def_txt.className = "card_def_txt";
	
	var link_txt = document.createElement("span");
	link_txt.className = "link_txt";
	link_txt.innerHTML = 'LINK - 0';
	
	var passcode_txt = document.createElement("span");
	passcode_txt.className = "passcode_txt selectable";
	
	cardfront_content[0].appendChild(name_txt);
	cardfront_content[0].appendChild(name2_txt);
	cardfront_content[0].appendChild(spell_type_txt);
	cardfront_content[0].appendChild(type_txt);
	cardfront_content[0].appendChild(effect_txt);
	
	cardfront_content[0].appendChild(card_pendulum_effect_txt);
	cardfront_content[0].appendChild(scale_left_txt);
	cardfront_content[0].appendChild(scale_right_txt);
	
	cardfront_content[0].appendChild(atk_lbl);
	cardfront_content[0].appendChild(card_atk_txt);
	cardfront_content[0].appendChild(def_lbl);
	cardfront_content[0].appendChild(card_def_txt);
	cardfront_content[0].appendChild(link_txt);
	cardfront_content[0].appendChild(passcode_txt);
	card.clearLimit();
	//console.timeEnd("CardFront");
	return card;
}

function getCustomFolder(id) {
	if (id < 100000) {
		return "0";
	}
	return Math.floor(id / 100000) + "00000";
}

function correctText(str) {
	str = str.replace(/&/g, '&amp;');
	str = str.replace(/%/g, '&percnt;');
	str = str.replace(/=/g, '&equals;');
	str = str.replace(/</g, '&lt;');
	str = str.replace(/>/g, '&gt;');
	//var arr = ["#", "%", "\\*", "\\+", "<", "=", ">", "@", "\\[", "]", "\\^", "{", "\\|", "}", "∞", "Ü", "Ω", "É", "×"];
	//var arr = ["#", "&percnt;", "\\*", "\\+", "&lt;", "&equals;", "&gt;", "@", "\\[", "]", "\\^", "{", "\\|", "}", "∞", "Ü", "Ω", "É", "×", "☆", "★", "Ɐ", "①", "黒"];
	//var arr = ["#", "&percnt;", "\\*", "\\+", "&lt;", "&equals;", "&gt;", "@", "\\[", "]", "\\^", "{", "\\|", "}", "∞", "Ü", "Ω", "É", "×", "☆", "★", "Ɐ"];
	var arr = ["#", "&percnt;", "\\*", "\\+", "&lt;", "&equals;", "&gt;", "@", "\\[", "]", "\\^", "{", "\\|", "}", "∞", "Ü", "Ω", "É", "×", "☆", "★"];
	arr.forEach(function(e,i){
		str = str.replace(new RegExp(e, "g"), '<font style="font-family: Arial; font-size: 80%;">' + e.replace(/\\/g, '') + '</font>');
	});
	
	if (isNonLatin(str)) {
		for (var i = 0; i < str.length; i++) {
			if (isNonLatin(str[i])) {
				switch(str[i]) {
					case "Ɐ":
						var n = '<span style="position: relative; display: inline-block; transform: rotate(180deg); top: -4px;">A</span>';
						var rest = str.substring(i, str.length);
						str = str.substring(0, i) + rest.replace(str[i], n);
						i += n.length - 1;
						continue;
				}
				var n = '<font style="font-family: Arial; font-size: 80%;">' + str[i] + '</font>';
				var rest = str.substring(i, str.length);
				str = str.substring(0, i) + rest.replace(str[i], n);
				i += n.length - 1;
			}
		}
	}
	
	return str;
}

function isNonLatin(str) {
	//if ((/[^ -~●\r\n]/g).test(str)) {
	if ((/[^ -~●\r\n,\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]/g).test(str)) {
		console.log('true');
		return true;
	}
	//aaàààäää
	return false;
}

function correctEffect(str, rush) {
	str = str.replace(/∞/g, '<font style="font-family: Arial;">∞</font>');
	str = str.replace(/Ω/g, '<font style="font-family: Arial; font-size: 80%;">Ω</font>');
	str = str.replace(/Ɐ/g, '<span style="position: relative; display: inline-block; transform: rotate(180deg); top: 2px;">A</span>');
	if (rush) {
		str = str.replace('[Requirement]', '<b>[Requirement]</b>');
		str = str.replace('[REQUIREMENT]', '<b>[REQUIREMENT]</b>');
		str = str.replace('<br>[Effect]', '<br><b>[Effect]</b>');
		str = str.replace('<br>[EFFECT]', '<br><b>[EFFECT]</b>');
		str = str.replace('<br>[Continuous Effect]', '<br><b>[Continuous Effect]</b>');
		str = str.replace('<br>[CONTINUOUS EFFECT]', '<br><b>[CONTINUOUS EFFECT]</b>');
		str = str.replace('<br>[Multi-Choice Effect]', '<br><b>[Multi-Choice Effect]</b>');
		str = str.replace('<br>[MULTI-CHOICE EFFECT]', '<br><b>[MULTI-CHOICE EFFECT]</b>');
	}
	return str;
}



//loadDeckResponse 1938
//					1676ms


/*function CardFront() {
	console.time("CardFront"); // 15ms, 19ms
	var card = $('<div class="cardfront unselectable"></div>');
	var forbidden = $('<img class="forbidden" src="' + IMAGES_START + 'svg/forbidden.svg" />');
	var limited = $('<img class="limited" src="' + IMAGES_START + 'svg/limited.svg" />');
	var semi_limited = $('<img class="semi_limited" src="' + IMAGES_START + 'svg/semi_limited.svg" />');
	var tcg = $('<img class="tcg" src="' + IMAGES_START + 'svg/tcg.svg" />');
	var ocg = $('<img class="ocg" src="' + IMAGES_START + 'svg/ocg.svg" />');
	var illegal = $('<img class="illegal" src="' + IMAGES_START + 'svg/illegal.svg" />');
	var custom = $('<img class="custom" src="' + IMAGES_START + 'svg/custom.svg" />');
	
	card.extend(card, {
		reset: function() {
			card.removeData();
			card.clearLimit();
		},
			
		initializeFromData: function(data) {
			if (!data.passcode) {
				data.passcode = data.serial_number;
			}
			if (!data.scale) {
				data.scale = data.scale_left;
			}
			card.removeData(); // needed
			card.data(data);
			card.initialize(data.id, data.name, data.treated_as, data.effect, data.pendulum_effect, data.card_type, data.monster_color, data.is_effect, data.type, data.attribute, data.level, data.ability, data.flip, data.pendulum, data.scale, data.arrows, data.atk, data.def, data.tcg_limit, data.ocg_limit, data.passcode, data.tcg, data.ocg, data.pic, data.custom, data.username);
		},
		
		initializeAndLimit: function(data, ocg) {
			card.initializeFromData(data);
			card.setLimit(ocg);
		},
		
		initialize: function(id = 0, name = "", treated_as = "", effect = "", pendulum_effect = "", card_type = "", monster_color = "", is_effect = 0, type = "", attribute = "", level = 0, ability = "", flip = 0, pendulum = 0, scale = 0, arrows = "", atk = "", def = "", tcg_limit = 0, ocg_limit = 0, passcode = "0", tcg = 0, ocg = 0, pic = "", custom = 0, username = "") {
			name2_txt.hide();
			pendulum_front.hide();
			card.find('.level').hide();
			card.find('.rank').hide();
			spell_type_txt.hide();
			type_icon.hide();
			card.find('.black_arrow').hide();
			card.find('.red_arrow').hide();
			monster_line.hide();
			type_txt.hide();
			attrib.hide();
			atk_lbl.hide();
			card_atk_txt.hide();
			def_lbl.hide();
			card_def_txt.hide();
			link_txt.hide();
			passcode_txt.css("color", "black");
			passcode_txt.hide();
			img.css("left", 99);
			img.css("top", 218);
			img.css("width", 618);
			img.css("height", 617);
			type_txt.css("top", 884);
			scale_left_txt.hide();
			scale_right_txt.hide();
			//effect_txt.css("font-size", 29);
			effect_txt.css("font-style", "normal");
			card_pendulum_effect_txt.hide();
			card.data("is_link", false);
			
			name_txt.text(name);
			setText(name_txt);
			effect_txt.html(escapeHTML(effect));
			if (card_type == "Spell" || card_type == "Trap") {
				name_txt.css("color", "white");
				attrib.attr("src", CARD_START + card_type.toLowerCase() + "_attribute.png");
				attrib.show();
				front.attr("src", CARD_START + card_type.toLowerCase() + "_front.jpg");
				var card_type_str = '<font class="spell_type_large">[</font> <font class="spell_type_medium">' + card_type.substring(0, 1) + '</font>' + card_type.substring(1, card_type.length).toUpperCase() + ' <font class="spell_type_medium">C</font>ARD';
				if (!type) {
					type = "Normal";
				}
				if (type != "Normal") {
					card_type_str += '<font style="font-size: 26px;">&nbsp;&nbsp;&nbsp;</font>';
				}
				card_type_str += ' <font class="spell_type_large">]</font>';
				spell_type_txt.html(card_type_str);
				spell_type_txt.show();
				if (type != "Normal") {
					type_icon.attr("src", CARD_START + type.toLowerCase() + ".png");
					type_icon.show();
				}
				effect_txt.css("top", 890);
				effect_txt.css("height", 230);
			}
			else if (card_type == "Monster") {
				if (monster_color == "Normal") {
					//effect_txt.css("font-size", 24);
					effect_txt.css("font-style", "italic");
				}
				name_txt.css("color", "white");
				effect_txt.css("top", 919);
				effect_txt.css("height", 154);
				//monster_line.show();
				if (!monster_color) {
					monster_color = "Effect";
				}
				front.attr("src", CARD_START + monster_color.toLowerCase() + "_front.jpg");
				if (type) {
					var type_str = "";
					type_str = '<font class="type_large">[</font> ' + getType(type);
					if (flip == 1) {
						type_str += ' / ' + getType("Flip");
					}
					if (ability) {
						type_str += ' / ' + getType(ability);
					}
					if (monster_color == "Ritual" || monster_color == "Fusion" || monster_color == "Synchro" || monster_color == "Xyz" || monster_color == "Link") {
						type_str += ' / ' + getType(monster_color);
					}
					if (pendulum == 1) {
						type_str += ' / ' + getType("Pendulum");
					}
					if (is_effect == 1 && monster_color == "Normal") {
						type_str += ' / ' + getType("Normal");
					}
					else if (is_effect == 1 && monster_color != "Token") {
						type_str += ' / ' + getType("Effect");
					}
					if (monster_color == "Token" && type != "") {
						type_str += ' / ' + getType("Token");
					}
					type_str += ' <font class="type_large">]</font>';
					type_txt.html(type_str);
					type_txt.show();
					setText(type_txt);
				}
				if (monster_color == "Token") {
					//effect_txt.hide();
					//type_txt.hide();
				}
				else if (atk) {
					monster_line.show();
					atk_lbl.show();
					card_atk_txt.show();
					card_atk_txt.text(atk);
					def_lbl.show();
					card_def_txt.show();
					card_def_txt.text(def);
				}
				if (monster_color != "Xyz" && monster_color != "Link") {
					name_txt.css("color", "black");
					for (i = 0; i < 12; i++) {
						if (level > i) {
							card.find('.level').eq(i).show();
						}
					}
				}
				else if (monster_color == "Xyz") {
					passcode_txt.css("color", "white");
					for (i = 0; i < 12; i++) {
						if (level > i) {
							card.find('.rank').eq(i).show();
						}
					}
				}
				if (monster_color == "Link") {
					card.data("is_link", true);
					if (arrows.length == 8) {
						card.find('.black_arrow').show();
						for (i = 0; i < 8; i++) {
							if (arrows.substring(i, i + 1) == "1") {
								card.find('.red_arrow').eq(i).show();
							}
						}
					}
					def_lbl.hide();
					card_def_txt.hide();
					if (level > 0) {
						link_txt.text("LINK - " + level);
						link_txt.show();
					}
				}
				if (pendulum == 1) {
					passcode_txt.css("color", "black");
					pendulum_front.show();
					card_pendulum_effect_txt.html(escapeHTML(pendulum_effect));
					card_pendulum_effect_txt.show();
					scale_left_txt.text(scale);
					scale_left_txt.show();
					scale_right_txt.text(scale);
					scale_right_txt.show();
					card.setPendulumText();
				}
				if (attribute) {
					attrib.attr("src", CARD_START + attribute.toLowerCase() + "_attribute.png");
					attrib.show();
				}
			}
			else if (card_type == "Skill") {
				front.attr("src", CARD_START + "skill_front.jpg");
				name_txt.hide();
				name2_txt.show();
				name2_txt.text(name);
				type_str = '[ ' + getType(type) + ' / ' + getType("Skill");
				if (ability) {
					type_str += ' / ' + getType(ability);
				}
				type_str += ' ]';
				type_txt.html(type_str);
				type_txt.show();
				setText(type_txt);
			}
			else {
				front.attr("src", CARD_START + "effect_front.jpg");
				name_txt.css("color", "black");
			}
			
			if (passcode != "0") {
				while (passcode.length < 8) {
					passcode = "0" + passcode;
				}
				passcode_txt.text(passcode);
				passcode_txt.show();
			}
			switch (passcode) {
				case "10000000":
				case "10000001":
				case "10000002":
				case "10000003":
				case "10000010":
				case "10000011":
				case "10000012":
				case "10000020":
				case "10000021":
				case "10000022":
				case "10000023":
				case "10000030":
				case "10000040":
				case "10000080":
				case "10000090":
					passcode_txt.text("");
					break;
			}
			if (username) {
				passcode_txt.text(username);
				passcode_txt.show();
			}
			setCardText(effect_txt);
			//if (pic && id != 0 || card_type == "Skill") { // remind me why id can't be 0?
			//if (pic || card_type == "Skill") {
			if (~~pic || card_type == "Skill" || pic && pic.indexOf("http") == 0) { // ~~http is considered 0
				card.loadImage();
			}
			else {
				card.removeImage(); // added 7/13/19
			}
			card.initialized = true;
		},
		
		loadImage: function() {
			var id = card.data("id");
			var pic = card.data("pic");
			var custom = card.data("custom");
			var monster_color = card.data("monster_color");
			
			if (pic == "0") {
				return;
			}
			var src = CARD_IMAGES_START + id + '.jpg';
			if (custom > 0) {
				src = CUSTOM_PICS_START + id + '.jpg';
			}
			if (monster_color == "Token") {
				src = pic;
			}
			else if (pic.indexOf("http") == 0) {
				src = pic;
			}
			else if (pic != "1") {
				src += '?version=' + pic;
			}
			//img.attr("src", "");
			//img.attr("src", IMAGES_START + "loading.gif");
			//img.attr("src", src);
			
			card.find('.pic').attr("src", IMAGES_START + "loading.gif");
			card.find('.pic').attr("src", src);
			
			card.data("initialized", true);
		},
		
		removeImage: function() {
			card.find('.pic').attr("src", IMAGES_START + "black.jpg");
		},
		
		setPendulumText: function() {
			img.css("left", 53);
			img.css("top", 212);
			img.css("width", 707);
			img.css("height", 569);
			scale_left_txt.css("top", 820);
			scale_right_txt.css("top", 820);
			card_pendulum_effect_txt.css("top", 792);
			card_pendulum_effect_txt.css("height", 93);
			card_pendulum_effect_txt.css("font-size", 25);
			card_pendulum_effect_txt.css("line-height", "26px");
			pendulum_front.find('img').attr("src", CARD_START + "pendulum_front_small2.png");
			//setTimeout(function(){
				if (card_pendulum_effect_txt[0].scrollHeight > card_pendulum_effect_txt.height()) {
					img.css("height", 528);
					scale_left_txt.css("top", 802);
					scale_right_txt.css("top", 802);
					card_pendulum_effect_txt.css("top", 752);
					card_pendulum_effect_txt.css("height", 126);
					card_pendulum_effect_txt.css("font-size", 22);
					card_pendulum_effect_txt.css("line-height", "25px");
					pendulum_front.find('img').attr("src", CARD_START + "pendulum_front_medium2.png");
				}
				if (card_pendulum_effect_txt[0].scrollHeight > card_pendulum_effect_txt.height()) {
					type_txt.css("top", 919);
					effect_txt.css("top", 952);
					effect_txt.css("height", 122);
					//effect_txt.css("line-height", "20px");
					scale_left_txt.css("top", 815);
					scale_right_txt.css("top", 815);
					card_pendulum_effect_txt.css("height", 153);
					card_pendulum_effect_txt.css("font-size", 22.5);
					card_pendulum_effect_txt.css("line-height", "22px");
					pendulum_front.find('img').attr("src", CARD_START + "pendulum_front_large2.png");
				}
			//}, 0);
		},
		
		copyCard: function(e){
			card.initializeFromData(e.data());
			//card.initialize(e.id, e.name, e.treated_as, e.effect, e.pendulum_effect, e.card_type, e.monster_color, e.is_effect, e.type, e.attribute, e.level, e.ability, e.flip, e.pendulum, e.scale, e.arrows, e.atk, e.def, e.tcg_limit, e.ocg_limit, e.serial_number, e.tcg, e.ocg, e.pic, e.custom, e.username);
		},
		
		setLimit: function(ocg_list){
			card.clearLimit();
			if (card.data("custom")) {
				custom[0].style.display = "block";
				return;
			}
			var restriction = card.data("tcg_limit");
			if (ocg_list) {
				restriction = card.data("ocg_limit");
			}
			switch (restriction) {
				case 0:
					forbidden[0].style.display = "block";
					break;
				case 1:
					limited[0].style.display = "block";
					break;
				case 2:
					semi_limited[0].style.display = "block";
					//card.append(semi_limited);
					break;
			}
			if (card.data("tcg") && !card.data("ocg")) {
				tcg[0].style.display = "block";
			}
			if (!card.data("tcg") && card.data("ocg")) {
				ocg[0].style.display = "block";
			}
			if (!card.data("tcg") && !card.data("ocg")) {
				illegal[0].style.display = "block";
			}
		},
		
		clearLimit: function(){
			forbidden.hide();
			limited.hide();
			semi_limited.hide();
			tcg.hide();
			ocg.hide();
			illegal.hide();
			custom.hide();
		}
	});
	card.reset();
	
	var border = $('<img class="card_border" src="' + CARD_START + 'card_border.jpg" />');
	var front = $('<img class="card_color" src="' + CARD_START + 'effect_front.jpg" />');
	var pendulum_front = $('<div class="pendulum_front"></div>');
	pendulum_front.append('<img src="' + CARD_START + 'pendulum_front_small2.png" />');
	
	var img = $('<img class="pic" src="' + IMAGES_START + 'loading.gif" />');
	var name_txt = $('<span class="name_txt"></span>');
	var name2_txt = $('<span class="name2_txt"></span>');
	var attrib = $('<img class="attribute" src="' + CARD_START + 'dark_attribute.png" />');
	
	card.append(border);
	card.append(front);
	card.append(img);
	card.append(pendulum_front);
	card.append(attrib);
	for (var i = 0; i < 12; i++) {
		var level = $('<img class="level level' + (i + 1) + '" src="' + CARD_START + 'level.png" />');
		level.css("left", 677 - (54 * i));
		card.append(level);
	}
	for (i = 0; i < 12; i++) {
		var rank = $('<img class="rank rank' + (i + 1) + '" src="' + CARD_START + 'rank.png" />');
		rank.css("left", 677 - (54 * i));
		card.append(rank);
	}
	for (i = 0; i < 8; i++) {
		var black_arrow = $('<img class="black_arrow black_arrow' + (i + 1) + '" src="' + IMAGES_START + 'svg/black_arrow' + (i + 1) + '.svg" />');
		//var black_arrow = $('<span></span>');
		card.append(black_arrow);
	}
	for (i = 0; i < 8; i++) {
		var red_arrow = $('<img class="red_arrow red_arrow' + (i + 1) + '" src="' + IMAGES_START + 'svg/red_arrow' + (i + 1) + '.svg" />');
		//var red_arrow = $('<span></span>');
		card.append(red_arrow);
	}
	var type_icon = $('<img class="type_icon" src="' + CARD_START + 'continuous.png" />');
	card.append(type_icon);
	
	var monster_line = $('<div class="monster_line"></div>');
	card.append(monster_line);
	
	var spell_type_txt = $('<span class="spell_type_txt"></span>');
	var type_txt = $('<span class="type_txt"></span>');
	var effect_txt = $('<span class="effect_txt"></span>');
	var card_pendulum_effect_txt = $('<span class="card_pendulum_effect_txt"></span>');
	var scale_left_txt = $('<span class="scale_left_txt"></span>');
	var scale_right_txt = $('<span class="scale_right_txt"></span>');
	var atk_lbl = $('<span class="atk_lbl">ATK<font style="font-size: 26px;"> </font>/</span>');
	var card_atk_txt = $('<span class="card_atk_txt">0</span>');
	var def_lbl = $('<span class="def_lbl">DEF<font style="font-size: 26px;"> </font>/</span>');
	var card_def_txt = $('<span class="card_def_txt">0</span>');
	var link_txt = $('<span class="link_txt">LINK - 0</span>');
	var passcode_txt = $('<span class="passcode_txt"></span>');
	card.append(name_txt);
	card.append(name2_txt);
	card.append(spell_type_txt);
	card.append(type_txt);
	card.append(effect_txt);
	card.append(card_pendulum_effect_txt);
	card.append(scale_left_txt);
	card.append(scale_right_txt);
	card.append(atk_lbl);
	card.append(card_atk_txt);
	card.append(def_lbl);
	card.append(card_def_txt);
	card.append(link_txt);
	card.append(passcode_txt);
	card.append(forbidden);
	card.append(limited);
	card.append(semi_limited);
	card.append(tcg);
	card.append(ocg);
	card.append(illegal);
	card.append(custom);
	card.clearLimit();
	console.timeEnd("CardFront");
	return card;
}*/

/*function getType(str) {
	var type = "";
	var arr = str.toUpperCase().split(" ");
	for (var i = 0; i < arr.length; i++) {
		type += '<font class="type_medium">' + arr[i].substring(0, 1) + '</font>' + arr[i].substring(1, arr[i].length);
		if (i < arr.length - 1) {
			type += " ";
		}
	}
	return type;
}*/

function getType(str) {
	var type = "";
	for (var i = 0; i < str.length; i++) {
		if (i == 0 || str[i - 1] == " " || str[i - 1] == "-") {
			type += '<font class="type_medium">' + str[i].toUpperCase() + '</font>';
		}
		else {
			type += str[i].toUpperCase();
		}
	}
	return type;
}

function setCardText(obj) {
	obj.style.fontSize = "29px"; // five lines
	obj.style.lineHeight = "1";
	if (obj.scrollHeight > obj.clientHeight) {
		obj.style.fontSize = "24px"; // six lines
	}
	if (obj.scrollHeight > obj.clientHeight) {
		obj.style.fontSize = "21px"; // seven lines
	}
	if (obj.scrollHeight > obj.clientHeight) {
		obj.style.fontSize = "19px"; // seven lines 2
	}
	if (obj.scrollHeight > obj.clientHeight) {
		obj.style.fontSize = "16.5px"; // seven lines 3
	}
	while (obj.scrollHeight > obj.clientHeight) {
	//while (obj.scrollHeight + 1 > obj.clientHeight) { // loop
	//while (obj.scrollHeight > obj.clientHeight - 40) { // does nothing
	//while (obj.scrollHeight - 20 > obj.clientHeight) { // does nothing
	//while (obj.scrollHeight > obj.clientHeight + 20) { // does nothing
	//while (obj.scrollHeight >= obj.clientHeight) { 	// loop
	//while (obj.scrollHeight <= obj.clientHeight) {		// loop
		var num = parseInt(obj.style.fontSize);
		obj.style.fontSize = num - 1 + "px";
	}
}



/*function setCardText(obj) {
	obj.css("font-size", 29); // five lines
	obj.css("line-height", 1);
	if (obj[0].scrollHeight > obj.height()) {
		obj.css("font-size", 24); // six lines
	}
	if (obj[0].scrollHeight > obj.height()) {
		obj.css("font-size", 21); // seven lines
	}
	if (obj[0].scrollHeight > obj.height()) {
		obj.css("font-size", 19); // seven lines 2
	}
	if (obj[0].scrollHeight > obj.height()) {
		obj.css("font-size", 16.5); // seven lines 3
	}
}*/

/*function DeckCard() {
	var card = new CardFront();
	
	var forbidden = $('<img class="forbidden" src="' + IMAGES_START + 'svg/forbidden.svg" />');
	var limited = $('<img class="limited" src="' + IMAGES_START + 'svg/limited.svg" />');
	var semi_limited = $('<img class="semi_limited" src="' + IMAGES_START + 'svg/semi_limited.svg" />');
	var tcg = $('<img class="tcg" src="' + IMAGES_START + 'svg/tcg.svg" />');
	var ocg = $('<img class="ocg" src="' + IMAGES_START + 'svg/ocg.svg" />');
	var illegal = $('<img class="illegal" src="' + IMAGES_START + 'svg/illegal.svg" />');
	var custom = $('<img class="custom" src="' + IMAGES_START + 'svg/custom.svg" />');
	
	card.append(forbidden);
	card.append(limited);
	card.append(semi_limited);
	card.append(tcg);
	card.append(ocg);
	card.append(illegal);
	card.append(custom);
	return card;
}*/

function Card() {
	//console.time("Card");
	var card = $('<div class="card"></div>');
	//var cardback = $('<div class="cardback"><img src="' + CARD_START + 'cardback.jpg" /></div>');
	var sleeve = $('<img src="' + CARD_START + 'cardback.jpg" width="400" height="580" />');
	var cardback = $('<div class="cardback"></div>');
	cardback.append(sleeve);
	
	var cardfront = newCardFront();
	var content = $('<div class="content"></div>');
	card.append(content);
	
	var white = $('<div class="white"></div>');
	
	content.append(cardback);
	content.append(cardfront);
	content.append(white);
	
	card.extend(card, {
		reset: function() {
			card.removeData();
			card.data("cardfront", cardfront);
			card.data("xyz_arr", []);
			card.css("opacity", 1);
			//card.onRotate(true); // messes up flying cards
		},
		
		onRotate: function(b) {
			var rotationY = getRotationY(card[0]);
			
			
			
			
			/*if (rotationY == 0) {
				rotationY = 0.0001;
				//TweenMax.to(card[0], 0, {"rotationY":rotationY});
				TweenMax.set(card[0], {"rotationY":rotationY});
			}*/
			
			
			
			
			if (rotationY > 90) {
				rotationY = -rotationY;
			}
			var n = 90 - rotationY;
			if (rotationY < 0) {
				n = 90 + rotationY;
			}
			if (n < 0) {
				n = -n;
			}
			n = 90 - n;
			rotationY -= 45 * n / 90;
			if (getRotationY(content[0]) != -rotationY || b === true) {
				TweenMax.to(content, 0, {"rotationY":-rotationY, "xPercent":-50, "yPercent":-50}); // use to, not set
			}
			if (rotationY >= 0 && rotationY < 90) {
				if (cardfront[0].style.display != "block") {
					cardfront[0].style.display = "block";
					//cardfront.show(); // this DRASTICALLY reduces performance for some reason
				}
			}
			else if (rotationY > 90 || rotationY < 0) {
				if (cardfront[0].style.display != "none") {
					cardfront[0].style.display = "none";
					//cardfront.hide();
				}
			}
			
			
			
			
			if (rotationY == 0 && cardfront[0].style.transformStyle != "flat" || flat) { // i think this will help with blurriness // eh, isn't helping that much
				cardfront[0].style.transformStyle = "flat";
			}
			else if (rotationY != 0 && cardfront[0].style.transformStyle != "preserve-3d") {
				//cardfront[0].style.transformStyle = "preserve-3d";
			}
			
			
			/*var rotation = getRotation(card[0]);
			if (rotation == 90 || rotation == 180) {
				card[0].style.transformStyle = "preserve-3d";
			}
			else if (card[0].style.transformStyle != "flat") {
				card[0].style.transformStyle = "flat";
			}*/
			/*if (rotation > 0 && card[0].style.transformStyle != "preserve-3d") {
				log(rotation);
				card[0].style.transformStyle = "preserve-3d";
			}
			if (rotation == 0 && card[0].style.transformStyle != "flat") {
				card[0].style.transformStyle = "flat";
			}*/
		},
		
		
		//TweenMax.to(Player2().m3, 1, {rotation:165, transformStyle:"preserve-3d"});
		
		
		/*setSleeve: function(str) {
			if (!str || str == "1.jpg" || card.data("isSkill")) {
				return;
			}
			var img = $('<img class="sleeve" src="' + SLEEVE_START + str + '" width="400" height="580" />');
			cardback.append(img);
		},
		
		removeSleeve: function() {
			card.find('.sleeve').detach();
		},*/
		
		setSleeve: function(str) {
			//if (!str || str == "1.jpg" || card.data("isSkill")) {
			if (!str) {
				str = "1.jpg";
			}
			if (card.data("isSkill")) {
				return;
			}
			sleeve.attr("src", SLEEVE_START + str);
			card.data("sleeve", str);
		},
		
		removeSleeve: function() {
			sleeve.attr("src", SLEEVE_START + "1.jpg");
		},
		
		startGlow: function(){
			//console.log('startGlow');
			white.show();
			TweenMax.killTweensOf(white);
			TweenMax.fromTo(white, 0.7, {opacity:0}, {opacity:0.3, onComplete:function(){
				TweenMax.fromTo(white, 0.7, {opacity:0.3}, {opacity:0, onComplete:function(){
					card.startGlow();
				}});
			}});
		},
		
		stopGlow: function(){
			console.log('stopGlow');
			white.hide();
			TweenMax.killTweensOf(white);
		},
		
		showFaceDown: function(){
			TweenMax.to(card, 0, {rotationY:180});
		},
		
		getDeckZ: function(){
			return card.data("owner").main_arr.length + 30;
		},
		
		getGraveZ: function(){
			return card.data("owner").grave_arr.length + 30;
		},
		
		getBanishedZ: function(){
			return card.data("owner").grave_arr.length + card.data("owner").banished_arr.length + 30;
		},
		
		getExtraZ: function(){
			return card.data("owner").extra_arr.length + 30;
		}
	});
	card.reset();
	watch(card, 'transform', card.onRotate);
	//console.timeEnd("Card");
	
	if (SAFARI) {
		card.css("perspective-origin", "unset");
	}
	
	//TweenMax.set(content, {transformPerspective:700, "xPercent":-50, "yPercent":-50}); // this seems ideal, but it messes up the flying cards
	TweenMax.set(content, {transformPerspective:700}); // remind me what this is for? // it makes cards sharper it seems
	
	return card;
}

function getRotation(obj) {
	var st = window.getComputedStyle(obj, null);
	var tr = st.getPropertyValue("-webkit-transform") ||
			 st.getPropertyValue("-moz-transform") ||
			 st.getPropertyValue("-ms-transform") ||
			 st.getPropertyValue("-o-transform") ||
			 st.getPropertyValue("transform") ||
			 "none";
	if (tr == "none") {
		console.log('none');
		return 0;
	}
	var values = tr.split('(')[1].split(')')[0].split(',');
	var a = values[0];
	var b = values[1];
	var c = values[2];
	var d = values[3];
	var scale = Math.sqrt(a*a + b*b);
	var sin = b/scale;
	var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
	return angle;
}

function getRotationY(obj) {
	var st = window.getComputedStyle(obj, null);
	var tr = st.getPropertyValue("-webkit-transform") ||
			 st.getPropertyValue("-moz-transform") ||
			 st.getPropertyValue("-ms-transform") ||
			 st.getPropertyValue("-o-transform") ||
			 st.getPropertyValue("transform") ||
			 "none";
	if (tr == "none") {
		return 0;
	}
	var values = tr.split('(')[1].split(')')[0].split(',');
	var rotationY = parseFloat(values[10]);
	if (!rotationY) {
		return 0;
	}
	return -(((rotationY * 360) - 360) / 4);
}

function resetRotationY(obj) {
	var st = window.getComputedStyle(obj[0], null);
	var tr = st.getPropertyValue("-webkit-transform") ||
			 st.getPropertyValue("-moz-transform") ||
			 st.getPropertyValue("-ms-transform") ||
			 st.getPropertyValue("-o-transform") ||
			 st.getPropertyValue("transform") ||
			 "none";
	var values = tr.split('(')[1].split(')')[0].split(',');
	//log('first, obj.css("transform") = ' + obj.css("transform"));
	obj.css("transform", "matrix3d(" + values[0] + ", " + values[1] + ", " + values[2] + ", " + values[3] + ", " + values[4] + ", 1, " + values[6] + ", " + values[7] + ", " + values[8] + ", " + values[9] + ", 1, " + values[11] + ", " + values[12] + ", " + values[13] + ", " + values[14] + ", " + values[15] + ")");
	//log('then, obj.css("transform") = ' + obj.css("transform"));
}

function getScale(obj) {
	var st = window.getComputedStyle(obj, null);
	var tr = st.getPropertyValue("-webkit-transform") ||
			 st.getPropertyValue("-moz-transform") ||
			 st.getPropertyValue("-ms-transform") ||
			 st.getPropertyValue("-o-transform") ||
			 st.getPropertyValue("transform") ||
			 "none";
	if (tr == "none") {
		return 1;
	}
	var values = tr.split('(')[1].split(')')[0].split(',');
	var scale = parseFloat(values[0]);
	if (!scale) {
		scale = parseFloat(values[1]);
	}
	return scale;
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

function getDbId() {
	if (localStorage.getItem("db_id")) {
		db_id = localStorage.getItem("db_id");
	}
	return db_id;
}

function getLogins() {
	logins = [];
	try {
		if (localStorage.getItem("logins")) {
			logins = JSON.parse(localStorage.getItem("logins"));
		}
		for (var i = 0; i < logins.length; i++) {
			if (!logins[i] || !logins[i].username) {
				logins.splice(0, 1);
				i--;
			}
		}
	}
	catch(err) {
		
	}
	return logins;
}

/*function getDbId() {
	if (!localStorage.getItem("db_id")) {
		regular = false;
		localStorage.setItem("db_id", this.db_id);
	}
	else {
		regular = true;
		remember_me = 1;
	}
	var db_id = localStorage.getItem("db_id");
	return db_id;
}*/

function random(num) {
	return Math.floor(Math.random() * num);
}

function randomHex() {
	var str = "";
	var arr = ["a","b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
	for (var i = 0; i < 32; i++) {
		str += arr[Math.floor(Math.random() * arr.length)];
	}
	return str;
}

function messageE(str, callback) {
	displayBox("Message", str, callback);
}

function errorE(str, callback) {
	displayBox("Error", str, callback);
}

function displayBox(title, str, callback, html) {
	hideDisplayBoxes();
	$(':focus').blur();
	$('#msg .ok_btn').focus();
	$('#msg .title_txt').text(title);
	if (html) {
		$('#msg .body_txt').html(str);
	}
	else {
		$('#msg .body_txt').text(str);
	}
	$('#msg').show();
	msg_callback = callback;
}

function msgOK() {
	hideDisplayBoxes();
	if (msg_callback) {
		msg_callback();
	}
}

function getInput(title, str, placeholder, maxChars, callback, restrictedChars, displayaspassword, cancel_callback, tall) {
	hideDisplayBoxes();
	$('#input').show();
	$('#input .title_txt').text(title);
	$('#input .body_txt').text(str);
	$('#input .input_txt').val(placeholder);
	if (~~maxChars > 0) {
		$('#input .input_txt').attr("maxlength", maxChars);
	}
	else {
		$('#input .input_txt').removeAttr("maxlength");
	}
	if (displayaspassword == true) {
		$('#input .input_txt').attr("type", "password");
	}
	else {
		$('#input .input_txt').attr("type", "text");
	}
	if (restrictedChars) {
		$('#input .input_txt').data("regex", restrictedChars);
	}
	else {
		$('#input .input_txt').data("regex", null);
	}
	$('#input .input_txt').focus();
	$('#input .input_txt').select();
	input_callback = callback;
	cancel_callback = cancel_callback;
	
	
	$('#input .body_txt').css("top", 81.5);
	$('#input .body_txt').css("font-size", 25);
	$('#input .input_txt').css("top", 142);
	//if ($('#input .body_txt')[0].getBoundingClientRect().height > $('#input .body_txt').height()) {
	//if ($('#input .body_txt')[0].getBoundingClientRect().height / contentScale > 64) {
	if (tall) {
		$('#input .body_txt').css("top", 74);
		$('#input .body_txt').css("font-size", 22);
		$('#input .input_txt').css("top", 162);
	}
}

function fillCombobox(obj, arr) {
	obj.html("");
	arr.forEach(function(e,i){
		//console.log(e);
		//console.log(escapeHTML(e));
		obj.append('<option value="' + escapeHTML(e) + '">' + upperCamelCase(escapeHTML(e)) + '</option>');
	});
}

function upperCamelCase(str) {
	var arr = str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1, arr[i].length);
	}
	return arr.join(" ");
}

function inputOK() {
	hideDisplayBoxes();
	if (input_callback) {
		input_callback();
	}
}

function getComboBox(title, str, options, index, callback, html) {
	hideDisplayBoxes();
	$('#combo').show();
	$('#combo .title_txt').text(title);
	if (html) {
		$('#combo .body_txt').html(str);
	}
	else {
		$('#combo .body_txt').text(str);
	}
	if (options instanceof Array) {
		fillCombobox($('#combo .combo_cb'), options);
	}
	else {
		$('#combo .combo_cb').html(options);
	}
	$('#combo .combo_cb').selectedIndex(index);
	$('#combo .combo_cb').focus();
	combo_callback = callback;
}

function comboOK() {
	hideDisplayBoxes();
	if (combo_callback) {
		combo_callback();
	}
}

function getConfirmation(title, str, yes_function, no_function, html) {
	hideDisplayBoxes();
	if ($(':focus')[0] != $('#duel .cin_txt')[0]) {
		$(':focus').blur();
	}
	$('#confirm').show();
	$('#confirm .title_txt').text(title);
	setText($('#confirm .title_txt'));
	if (html) {
		$('#confirm .body_txt').html(str);
	}
	else {
		$('#confirm .body_txt').text(str);
	}
	yes_callback = yes_function;
	no_callback = no_function;
}

function getConfirmation2(title, str, yes_function, no_function, cancel_function, html) {
	hideDisplayBoxes();
	if ($(':focus')[0] != $('#duel .cin_txt')[0]) {
		$(':focus').blur();
	}
	$('#confirm2').show();
	$('#confirm2 .title_txt').text(title);
	setText($('#confirm2 .title_txt'));
	if (html) {
		$('#confirm2 .body_txt').html(str);
	}
	else {
		$('#confirm2 .body_txt').text(str);
	}
	yes_callback = yes_function;
	no_callback = no_function;
	cancel_callback = cancel_function;
}

function confirmYes() {
	hideDisplayBoxes();
	if (yes_callback) {
		yes_callback();
	}
}

function confirmNo() {
	hideDisplayBoxes();
	if (no_callback) {
		no_callback();
	}
}

function cancelCallback() {
	hideDisplayBoxes();
	if (cancel_callback) {
		cancel_callback();
	}
}

function hideDisplayBoxes() {
	$('#msg').hide();
	$('#confirm').hide();
	$('#confirm2').hide();
	$('#input').hide();
	$('#input .autocomplete').hide();
	$('#combo').hide();
	hideDim();
}

function killAllTweens() {
	if (!notification_tweening) {
		TweenMax.killAll(true); // finshes tweens early, but works
		//TweenMax.killAll();
	}
}

function addMouseMove() {
	mouseMoveTimer.reset();
	mouseMoveTimer.start();
	$('body').mousemove(updateMouse);
}

function removeMouseMove() {
	mouseMoveTimer.reset();
	$('body').off("mousemove", updateMouse);
}

function previewE(e) {

	//console.log('previewE');

	updateMouse(e);
	var card = $(this);
	var previewTimer = new Timer(50);
	if (card.attr("class").indexOf("cardfront") < 0) {
		if ($('#view').is(":visible")) {
			previewCard(card);
			return;
		}
		else {
			previewTimer.callback = function(){
				previewTimer.reset();
				if (e.type == "mousedown" || e.type == "click" || inBounds(card.find('.content'))) { // added "click" for mobile support
					previewCard(card);
				}
			};
		}
	}
	else {
		previewTimer.callback = function(){
			previewTimer.reset();
			if (e.type == "mousedown" || e.type == "click" || inBounds(card)) { // added "click" for mobile support
				previewFront(card);
			}
		};
	}
	previewTimer.start();
	addMouseMove();
}

function previewCard(card) {
	if (card.data("face_down") && (!duelist && !card.data("isSkill"))) {
		//if (!admin) {
		//if (!admin && username) {
		//	return;
		//}
		if (!replay && !admin) {
			return;
		}
	}
	if (card.data("isSkill") && Math.round(getRotationY(card[0])) == 180 && card.data("controller").username != username) {
		preview.find('.skillback').detach();
		/*if (getRotation(card[0]) == 180) {
			preview_txt.text(card.data("cardfront").data("pendulum_effect"));
		}
		else {
			preview_txt.text(card.data("cardfront").data("effect"));
		}*/
		preview_txt.text(card.find('.skillback').text());
		var skillback = getSkillBack(card.find('.skillback img').attr("src"), card.find('.skillback').text());
		TweenMax.to(skillback, 0, {scaleX:2.0325, scaleY:2.0431});
		preview.append(skillback);
		showPreview();
		return;
	}
	if (!card.data("cardfront").data("initialized")) {
		return;
	}
	//if ((duelist || admin) && (card.data("controller") != player1 && (tag_duel == false || card.data("controller") != player1.partner)) && (card.data("face_down") || getRotationY(card[0]) == 180) && viewing != "Opponent's Extra Deck") {
	//if (!replay && (card.data("controller") != player1 && (tag_duel == false || card.data("controller") != player1.partner)) && (card.data("face_down") || Math.round(getRotationY(card[0])) == 180) && viewing != "Opponent's Extra Deck") {
	if (!replay && (card.data("controller") != player1 && (tag_duel == false || card.data("controller") != player1.partner)) && (card.data("face_down") && getRotationY(card[0]) > 0.5 || Math.round(getRotationY(card[0])) == 180) && viewing != "Opponent's Extra Deck") { // added && getRotationY(card[0]) > 0.5 for when automatic games reveal a card
		return;
	}
	if (!show_cards && isIn(card, player1.hand_arr) >= 0 && !duelist && !card.data("face_up")) {
		return; // should prevent watchers from seeing cards in red's hand
	}
	
	
	//if (!duelist && !admin && !card.front_mc.stage) {
	//	return;
	//}
	if (inBounds(preview_txt)) {
		return;
	}
	//if (mouseX > parseInt(preview_txt.css("left")) && mouseX < parseInt(preview_txt.css("left")) + parseInt(preview_txt.css("width")) && mouseY > parseInt(preview_txt.css("top")) && mouseY < parseInt(preview_txt.css("top")) + parseInt(preview_txt.css("height"))) {
	//	return;
	//}
	previewFront(card.data("cardfront"));
}

function previewFront(cardfront) {
	if (preview.data("id") == 0) {
		preview.data("id", -1);
	}
	if (preview.data("id") == cardfront.data("id") && preview.is(":visible")) {
		return;
	}
	preview.find('.skillback').detach();
	showPreview(); // moved from below because setCardName
	preview.copyCard(cardfront);
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

function showPreview() {
	if (currentLabel == "deck_constructor") {
		preview_txt.css("height", 127);
	}
	else {
		preview_txt.css("height", 152);
	}
	preview_txt.show();
	preview_txt.scrollTop(0);
	preview.show();
	if (parseInt(preview_txt.css("height")) == 227 && currentLabel != "custom_cards") {
		minimizePreview();
	}
}

function previewScrollE(e) {
	preview_vsp = preview_txt.scrollTop();
	var maxVSP = preview_txt.scrollMax();
	if (preview_txt.scrollTop() >= maxVSP) {
		preview_vsp += 1000;
	}
}

function previewMoveE(e) {
	updateMouse(e);
	if (parseInt(preview_txt.css("height")) > 162) {
		preview_vsp = mouseYScaled - 300;
		preview_vsp -= 150
	}
}

function minimizePreview(e) {
	updateMouse(e);
	$('#watchers').show();
	$('#watchers_btn').show();
	if (duelist) {
		$('#log_btn').show();
	}
	if (parseInt(preview_txt.css("height")) == 152) {
		//log('returning');
		//return;
	}
	if (e != null) {
		var maxVSP = preview_txt.scrollMax();
		if (preview_txt.scrollTop() > 1 && preview_txt.scrollTop() < maxVSP) {
			preview_vsp = preview_txt.scrollTop();
		}
	}
	if (currentLabel == "deck_constructor") {
		preview_txt.css("height", 127);
	}
	else {
		preview_txt.css("height", 152);
	}
	setTimeout(function(){
		preview_txt.scrollTop(preview_vsp);
	}, 5);
}

function Timer(millis, callback) {
	var timer = {};
	timer.active = false;
	timer.millis = millis;
	timer.callback = callback;
	timer.start = function(){
		timer.reset();
		timer.active = true;
		timer.task = setInterval(function(){
			if (timer.active) { // 7/28/20
				timer.callback();
			}
		}, timer.millis);
	};
	timer.stop = function(){
		timer.active = false;
		clearInterval(timer.task);
	};
	timer.reset = function(){
		timer.stop();
	};
	timer.destroy = function(){
		timer.reset();
		timer.start = function(){};
		//timer = null;
	};
	return timer;
}

function setText(obj) {
	if (!obj) {
		return;
	}
	if (obj instanceof jQuery) {
		if (!obj[0]) {
			return;
		}
		obj.css("white-space", "nowrap");
		obj.css("transform", "scaleX(1)");
		if (obj[0].scrollWidth > obj.width()) {
			obj.css("transform", "scaleX(" + (obj.width() / obj[0].scrollWidth) + ")");
			obj.css("transform-origin", "top left");
		}
		return;
	}
	obj.style.whiteSpace = "nowrap";
	obj.style.transform = "scaleX(1)";
	if (obj.scrollWidth > obj.clientWidth) {
		obj.style.transform = "scaleX(" + (obj.clientWidth / obj.scrollWidth) + ")";
		obj.style.transformOrigin = "top left";
	}
}

function setCellText(cell) {
	cell.find('span').css("white-space", "nowrap");
	cell.find('span').css("transform", "scaleX(1)");
	if (cell.find('span')[0].scrollWidth > cell.width()) {
		cell.find('span').css("transform", "scaleX(" + (cell.width() / (cell.find('span')[0].scrollWidth + 8)) + ")");
		cell.find('span').css("transform-origin", "top left");
	}
}

/*function setText(obj) {
	if (!obj[0]) { // this makes non jquery elements not work
		//return;
	}
	obj.css("white-space", "nowrap");
	obj.css("transform", "scaleX(1)");
	if (obj[0].scrollWidth > obj.width()) {
		obj.css("transform", "scaleX(" + (obj.width() / obj[0].scrollWidth) + ")");
		obj.css("transform-origin", "top left");
	}
}*/

function randomize(arr) {
	var shuffle_arr = [];
	var index = 0;
	while (arr.length > 0) {
		index = Math.floor(Math.random() * arr.length);
		shuffle_arr.push(arr[index]);
		arr.splice(index, 1);
	}
	for (var i = 0; i < shuffle_arr.length; i++) {
		arr.push(shuffle_arr[i]);
	}
	/*for (i = 1; i < arr.length; i++) {
		if (arr[i].data("name") == arr[i - 1].data("name")) {
			arr.push(arr[i]);
			arr.splice(i, 1);
		}
	}*/
}

function changeComponents(b) { // 1869 ms
	console.time("changeComponents");
	if (GET('nocomps')) {
		$('input, select').each(function(){
			var proxy = $('<div></div>');
			proxy.data("proxy", $(this));
			$(this).data("proxy", proxy);
		});
		return;
	}
	changeInputs(b);
	changeSelects(b);
	changeButtons(b);
	changeCheckboxes(b);
	changeRadios(b);
	resizeComponents(b);
	console.timeEnd("changeComponents");
}

function loadSVGAnimation(obj, id, str, width, height, fps, playing) {
	obj = new MovieClip(playing);
	$.getJSON('https://static.duelingbook.com/' + str + ".json", function(json) {
		obj = createSVGAnimation(obj, id, width, height, fps, json);
		switch(id) {
			case "dim":
				dim = obj;
				break;
			case "private_chat_cycle":
				private_chat_cycle = obj;
				public_chat_cycle = createSVGAnimation(public_chat_cycle, "public_chat_cycle", width, height, fps, json);
				watch_chat_cycle = createSVGAnimation(watch_chat_cycle, "watch_chat_cycle", width, height, fps, json);
				log_cycle = createSVGAnimation(log_cycle, "log_cycle", width, height, fps, json);
				break;
			case "red_stream":
				red_stream = obj;
				break;
			case "blue_stream":
				blue_stream = obj;
				break;
			case "bubbles1":
				bubbles1 = obj;
				bubbles2 = createSVGAnimation(bubbles2, "bubbles2", width, height, fps, json);
				bubbles3 = createSVGAnimation(bubbles3, "bubbles3", width, height, fps, json);
				bubbles4 = createSVGAnimation(bubbles4, "bubbles4", width, height, fps, json);
				break;
			case "m1_select":
				m1_select = obj;
				m2_select = createSVGAnimation(m2_select, "m2_select", width, height, fps, json);
				m3_select = createSVGAnimation(m3_select, "m3_select", width, height, fps, json);
				m4_select = createSVGAnimation(m4_select, "m4_select", width, height, fps, json);
				m5_select = createSVGAnimation(m5_select, "m5_select", width, height, fps, json);
				s1_select = createSVGAnimation(s1_select, "s1_select", width, height, fps, json);
				s2_select = createSVGAnimation(s2_select, "s2_select", width, height, fps, json);
				s3_select = createSVGAnimation(s3_select, "s3_select", width, height, fps, json);
				s4_select = createSVGAnimation(s4_select, "s4_select", width, height, fps, json);
				s5_select = createSVGAnimation(s5_select, "s5_select", width, height, fps, json);
				link_left_select = createSVGAnimation(link_left_select, "link_left_select", width, height, fps, json);
				link_right_select = createSVGAnimation(link_right_select, "link_right_select", width, height, fps, json);
				
				m1_select2 = createSVGAnimation(m1_select2, "m1_select2", width, height, fps, json);
				m2_select2 = createSVGAnimation(m2_select2, "m2_select2", width, height, fps, json);
				m3_select2 = createSVGAnimation(m3_select2, "m3_select2", width, height, fps, json);
				m4_select2 = createSVGAnimation(m4_select2, "m4_select2", width, height, fps, json);
				m5_select2 = createSVGAnimation(m5_select2, "m5_select2", width, height, fps, json);
				
				$('#select_zones').removeClass("glowing");
				break;
				
			case "field_spell1_select":
				field_spell1_select = obj;
				field_spell2_select = createSVGAnimation(field_spell2_select, "field_spell2_select", width, height, fps, json);
				break;
				
				
			case "spark":
				spark = obj;
				spark.json = json;
				break;
				
				
			case "shine":
				shine = obj;
				shine.json = json;
				break;
				
				
			case "yugioh_logo":
				yugioh_logo = obj;
				break;
			case "targets":
				target_select = obj;
				target_select.json = json;
				target_select.width = width;
				$('#targets').children().detach();
				break;
		}
	});
	return obj;
}
	
function createSVGAnimation(obj, id, width, height, fps, json) {
	if (!obj) {
		obj = new MovieClip();
	}
	var playing = obj.playing;
	obj = new SVGAnim(json, width, height, fps);
	$('#' + id).append($(obj.s.node));
	$('#' + id).data("cycle", obj);
	if (!playing) {
		obj.stop(); // why is this here? it makes dim not play in card.html or tourney.html // it's needed for spark or else cpu increases
	}
	
	//obj.stop();
	//if (playing) {
	//	obj.play();
	//}
	
	return obj;
}
	
function MovieClip(playing) {
	var mc = {};
	mc.play = function(){};
	mc.stop = function(){};
	mc.playing = playing;
	return mc;
}

function showDim() {
	$('#dim').show();
	dim.play();
	$('#dim').css("pointer-events", "auto");
	dimTimer.start();
}

function hideDim() {
	$('#dim').hide();
	dim.stop();
}

function abortDim() {
	dimTimer.reset();
	awaiting_cards = false;
	if (!messageShowing()) {
		$('#dim').css("pointer-events", "none");
	}
}
	
function messageShowing() {
	if ($('#msg').is(":visible")) {
		return true;
	}
	if ($('#input').is(":visible")) {
		return true;
	}
	if ($('#confirm').is(":visible")) {
		return true;
	}
	if ($('#confirm2').is(":visible")) {
		return true;
	}
	if ($('#combo').is(":visible")) {
		return true;
	}
	return false;
}

function log(str) {
	console.log(str);
	if (mobile && moderator) {
		$('#duel .cout_txt').append(str + '<br>');
	}
}

function replaceAll(str, str2, str3) {
	return str.split(str2).join(str3);
}

function escapeHTML0(str) {
	str = replaceAll(str, "&", "&amp;");
	str = replaceAll(str, "<", "&lt;");
	return str;
}

function escapeHTML(str) {
	if (!str) {
		return Str(str);
	}
	str = replaceAll(str, "&", "&amp;");
	str = replaceAll(str, "<", "&lt;");
		str = replaceAll(str, ">", "&gt;");
		str = replaceAll(str, '"', "&quot;"); // added 8/7/22 to help Small World parse Maxx "C"
	str = addBreaks(str)
	return str;
}

function escapeHTMLWithLinks(str, b) {
	str = escapeHTML(str);
	str = addLinks(str, b);
	return str;
}

function addBreaks(str) {
	str = replaceAll(str, "\n", "<br>");
	str = replaceAll(str, "\r", "<br>");
	return str;
}

function addLinks(str, b) {
	if (isMalicious(str.toLowerCase())) {
		return str;
	}
	var str2 = "";
	var i = 0;
	while (true) {
		i = str.search("http://[!-~]|https://[!-~]|ftp://[!-~]|www\\.[!-~]");
		if (i < 0) {
			str2 += str;
			return str2;
		}
		str2 += str.substring(0, i);
		str = str.substring(i, str.length);
		for (var j = 0; j < str.length; j++) {
			
			
			
			/*if (i > 6 && str.substring(i - 6).indexOf('href="') == 0) {
				console.log('yes');
				break;
			}*/
			
			
			if (str.charAt(j) == " " || str.charAt(j) == "\n" || str.substring(j).indexOf("<br>") == 0 || str.substring(j).indexOf('"') == 0) {
				str2 += urlToLink(str.substring(0, j), b);
				str = str.substring(j, str.length);
				break;
			}
			else if (j == str.length - 1) {
				str2 += urlToLink(str, b);
				return str2;
			}
		}
	}
	return null;
}

function isHREF(str) {
	for (var i = 1; i < str.length; i++) {
		if (str.charAt(i) == '"') {
			return true;
		}
		if (str.charAt(i) == " " || str.charAt(i) == "\n" || str.charAt(i) == "\n" || str.charAt(i)) {
			return false;
		}
	}
	return false;
}

function isMalicious(msg) {
	var str = msg.toLowerCase();
	if (str.indexOf('src="') >= 0) {
		return true;
	}
	if (str.indexOf('gyazoo') >= 0) {
		return true;
	}
	if (str.indexOf('bit.ly') >= 0) {
		return true;
	}
	if (str.indexOf('goo.gl') >= 0) {
		return true;
	}
	if (str.indexOf('imgvr.cf') >= 0) {
		return true;
	}
	if (str.indexOf('bfy.ty') >= 0) {
		return true;
	}
	if (str.indexOf('grabify') >= 0) {
		return true;
	}
	if (str.indexOf('missingdrivers') >= 0) {
		return true;
	}
	if (str.indexOf('hurr-durr') >= 0) {
		return true;
	}
	if (str.indexOf('gfycat') >= 0) {
		return true;
	}
	if (str.indexOf('liveleak') >= 0) {
		return true;
	}
	if (str.indexOf('ouo.io') >= 0) {
		return true;
	}
	if (str.indexOf('segue.se') >= 0) {
		return true;
	}
	if (str.indexOf('tinyurl.com') >= 0) {
		return true;
	}
	return false;
}

/*function urlToLink(str, b) {
	if (str.indexOf('<') >= 0 || str.indexOf('>') >= 0) {
		return str;
	}
	var first_string;
	if (str.substring(0, 7) == "http://") {
		first_string = "";
	}
	else if (str.substring(0, 8) == "https://") {
		first_string = "";
	}
	else {
		first_string = "http://";
	}
	var url = first_string + replaceAll(str, "\"", "&quot;");
	if (b) {
		return '</span><span class="link"><u><a href="' + url + '" target="_blank">' + str + '</a></u></span><span class="not_link">';
	}
	return '<u><a href="' + url + '" target="_blank">' + str + '</a></u>';
	//return '<a href="' + url + '" target="_blank">' + str + '</a>';
}*/

function urlToLink(str, b) {
	if (str.indexOf('<') >= 0 || str.indexOf('>') >= 0) {
		return str;
	}
	var first_string;
	if (str.substring(0, 7) == "http://") {
		first_string = "";
	}
	else if (str.substring(0, 8) == "https://") {
		first_string = "";
	}
	else {
		first_string = "http://";
	}
	var url = first_string + replaceAll(str, "\"", "&quot;");
	
	
	
	var tourney = URL_START + "tourney?id=";
	if (url.indexOf(tourney) >= 0) {
		var id = url.substring(tourney.length, url.length);
		//if (tourney + id == url && id == parseInt(id) && currentLabel != "tournaments") {
		if (tourney + id == url && id == parseInt(id)) {
			if (b) {
				return '</span><span class="link"><a onclick="gotoPairings({id:' + id + '})""><u>' + str + '</u></a></span><span class="not_link">';
			}
			return '<a onclick="gotoPairings({id:' + id + '})"><u>' + str + '</u></a>';
		}
	}
	
	
	
	var status = URL_START + "status?id=";
	if (url.indexOf(status) >= 0) {
		var id = url.substring(status.length, url.length);
		if (status + id == url && id == parseInt(id) && foundStatus(id)) {
			if (b) {
				return '</span><span class="link"><a onclick="findStatus({id:' + id + ',link:true})""><u>' + str + '</u></a></span><span class="not_link">';
			}
			return '<a onclick="findStatus({id:' + id + ',link:true})"><u>' + str + '</u></a>';
		}
	}
	
	
	
	
	
	if (b) {
		return '</span><span class="link"><a href="' + url + '" target="_blank"><u>' + str + '</u></a></span><span class="not_link">';
	}
	return '<a href="' + url + '" target="_blank"><u>' + str + '</u></a>';
}

function stripSpaces(str) {
	while (str.indexOf('\r\r\r') >= 0) {
		str = str.replace('\r\r\r', '\r\r');
	}
	while (str.indexOf('  ') >= 0) {
		str = str.replace('  ', ' ');
	}
	return str;
}

function replaceReturns(str) {
	return str.replace(/\r/g, '\n');
}

function newCardFront() {
	if (recycled_cardfronts_arr.length > 0) {
		var card = recycled_cardfronts_arr.splice(0, 1)[0];
		card.reset();
		return card;
	}
	return new CardFront();
}

function recycleCardFronts() {
	if (currentLabel == "siding") {
		return;
	}
	for (var i = 0; i < deck_filled_arr.length; i++) {
		recycled_cardfronts_arr.push(deck_filled_arr[i]);
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		recycled_cardfronts_arr.push(side_filled_arr[i]);
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		recycled_cardfronts_arr.push(extra_filled_arr[i]);
	}
}

function inBounds(obj, leeway, logging) {
	//log('inBounds');
	if (!leeway) {
		leeway = 0;
	}
	if (mouseX > obj.offset().left - leeway
		&& mouseX < obj.offset().left + obj[0].getBoundingClientRect().width + leeway
			&& mouseY > obj.offset().top - leeway
				&& mouseY < obj.offset().top + obj[0].getBoundingClientRect().height + leeway) {
					return true;
	}
	if (logging) {
		addLine3("X = " + mouseX + ", L = " + obj.offset().left);
		addLine3("W = " + obj[0].getBoundingClientRect().width);
		addLine3("Y = " + mouseY + ", T = " + obj.offset().top);
		addLine3("H = " + obj[0].getBoundingClientRect().height);
	}
	return false;
}

/*function inBounds(obj, leeway) {
	//log('inBounds');
	if (!leeway) {
		leeway = 0;
	}
	if (mouseX > obj.offset().left - leeway) {
		console.log('A');
	}
	if (mouseX < obj.offset().left + obj[0].getBoundingClientRect().width + leeway) {
		console.log('B');
	}
	if (mouseY > obj.offset().top - leeway) {
		console.log('C');
	}
	if (mouseY < obj.offset().top + obj[0].getBoundingClientRect().height + leeway) {
		console.log('D');
	}
	else {
		console.log(mouseY);
		console.log(obj.offset().top);
		console.log( obj[0].getBoundingClientRect().height);
	}
	if (mouseX > obj.offset().left - leeway
		&& mouseX < obj.offset().left + obj[0].getBoundingClientRect().width + leeway
			&& mouseY > obj.offset().top - leeway
				&& mouseY < obj.offset().top + obj[0].getBoundingClientRect().height + leeway) {
					return true;
	}
	return false;
}

setTimeout(function(){
	console.log(inBounds($('#duel_log .log_txt')));
}, 2000);
*/

/*setInterval(function(){
	//console.log('mouseY = ' + mouseY + ', top = ' + $('#duel_log .log_txt').offset().top + ', height = ' + $('#duel_log .log_txt')[0].getBoundingClientRect().height);
	$('.life_txt').text(mouseY);
}, 500);*/

function inBounds2(obj, leeway, logging) {
	//log('inBounds');
	if (!leeway) {
		leeway = 0;
	}
	if (mouseX > obj.offset().left - leeway
		&& mouseX < obj.offset().left + obj[0].getBoundingClientRect().width + leeway
			&& mouseY > obj.offset().top - leeway
				&& mouseY < obj.offset().top + obj[0].scrollHeight + leeway) {
					return true;
	}
	if (logging) {
		addLine3("X = " + mouseX + ", L = " + obj.offset().left);
		addLine3("W = " + obj[0].getBoundingClientRect().width);
		addLine3("Y = " + mouseY + ", T = " + obj.offset().top);
		addLine3("H = " + obj[0].scrollHeight);
	}
	return false;
}

function onScreen(obj) {
	var zoom = $('#content')[0].style.zoom;
	var bounds = obj.getBoundingClientRect();
	if (bounds.left >= 0
		&& bounds.top >= 0
			&& bounds.right * zoom <= window.innerWidth
				&& bounds.bottom * zoom <= window.innerHeight) {
					console.log('IS ON SCREEN');
					return true;
	}
	console.log('IS NOT SCREEN');
	return false;
}

function updateMouse(e, b) {
	if (e.pageX) {
	    mouseX = e.pageX;
	    mouseY = e.pageY;
	}
	mouseXScaled = mouseX / contentScale - marginLeft / contentScale;
	mouseYScaled = mouseY / contentScale - marginTop / contentScale;
	//if (CHROME || SAFARI) {
	if (zooming) {
		mouseX = mouseXScaled + $('#content').offset().left;
		mouseY = mouseYScaled + $('#content').offset().top;
	}
}

function takeScreenshot(event, usr) {
	/*if (event) {
		if (IE) {
			errorE("This feature is unavailable in Internet Explorer");
			return;
		}
		if (EDGE) {
			errorE("This feature is unavailable in Edge Browser");
			return;
		}
	}*/
	if (taking_screenshot) {
		return;
	}
	var millis = Date.now();
	
	if (SAFARI) {
		if ($('span:contains(\xA0)').length > 0) {
			$('span:contains(\xA0)').each(function(i,e){
				var str = $(this).html();
				str = str.replace(/&nbsp;/g, '<font style="opacity: 0;">.</font>');
				$(this).html(str);
			});
			setTimeout(function(){
				takeScreenshot(event, usr);
			}, 50);
			return;
		}
	}
	if (!active) {
		$('html').css("pointer-events", "none");
		setTimeout(function(){
			$('html').css("pointer-events", "auto");
		}, 5000);
	}
	console.time("dom-to-image");
	taking_screenshot = true;
	$(':focus').blur();
	var zoom = $('#content')[0].style.zoom;
	var prepend_arr = [];
	var scroll_arr = [];
	var handle_arr = [];
	console.time("each");
	var c = $("#content");
	c.find('.os-scrollbar').each(function(){
		var original = $(this);
		var clone = original.clone();
		clone.insertAfter(original);
		original.detach();
		handle_arr.push(function(){
			original.insertAfter(clone);
			clone.detach();
		});
	});
	$('.os-viewport').addClass("unscrollable");
	c.find("*").each(function(i,e){
		var deleting = false;
		var above = false;
		if (e.parentNode.className.indexOf && e.parentNode.className.indexOf("textarea") >= 0) {
			//return true;
		}
		//if (e.parentNode.className.indexOf && e.parentNode.className.indexOf("list") >= 0) { // i'm convinced this helps with restoring the scroll position
		if (e.parentNode.className.indexOf && (e.parentNode.className.indexOf("list") >= 0 || e.parentNode.className.indexOf("duelbutton") >= 0)) { // i'm convinced this helps with restoring the scroll position
			if ($(e).index() <= $(e.parentNode).scrollTop() / 20 + 20) {
				return true;
			}
		}
		if (e.className.indexOf && e.className == "card" && (e.style.top == "-21px" || e.style.top == "603px")) {
			return true;
		}
		
		
		if (e.parentNode.className.indexOf && e.parentNode.className.indexOf("cell") >= 0) {
			return true;
		}
		if (e.className.indexOf && e.className.indexOf("os-content") >= 0) { // helps with lists
			return true;
		}
		
		
		
		
		/*if (e.className.indexOf && e.className.indexOf("os-") >= 0 && e.className.indexOf("scrollpane") < 0) {
			return true;
		}
		if (e.parentNode.indexOf && e.parentNode.indexOf("os-content") >= 0) {
			return true;
		}*/
		
		
		
		
		if (e instanceof HTMLSelectElement) {
			deleting = true;
		}
		if (e instanceof HTMLBRElement) {
			//return true;
		}
		if (e instanceof HTMLFontElement) {
			//return true;
		}
		
		
		/*if (e instanceof HTMLImageElement) {
			console.log('doing');
			e.crossOrigin = "anonymous";
		}*/
		
		
		
		
		if (e.style.display === "none" || e.className.indexOf && e.className.indexOf("cardfront") == 0 && getRotationY(e.parentNode) > 90) {
			deleting = true;
		}
		if (!deleting) {
			var isCell = false;
			if (e.className.indexOf && e.className.indexOf("cell") >= 0) {
				isCell = true;
			}
			var bounds = e.getBoundingClientRect();
			if (bounds.width == 0 || bounds.height == 0) { // deletes large divs with children otherwise
				return true;
			}
			if (bounds.top + bounds.height < 0 && !isCell || bounds.left + bounds.width < 0 || bounds.bottom * zoom - bounds.height > window.innerHeight || bounds.right * zoom - bounds.width > window.innerWidth) {
				deleting = true;
			}
		}
		if (!document.body.contains(e)) {
			return true;
		}
		if (deleting) {
			var parent = e.parentNode;
			var sibling = e.nextElementSibling;
			prepend_arr.push(function(){
				try {
					parent.insertBefore(e, sibling);
				}
				catch(err) {
					parent.appendChild(e);
				}
			});
			//e.remove();
			
			
			parent.removeChild(e);
		}
	});
	/*if (EDGE) {
		c.find('.textarea').each(function(){
			var t = $(this);
			var w = parseInt(t.css("width"));
			log('w = ' + w);
			t.css("width", w + 33);
			log('w = ' + t.css("width"));
			prepend_arr.push(function(){
				t.css("width", w + 17);
			});
		});
	}*/
	if (EDGE && !usr) {
		c.find('*').each(function(i,e){
			if ($(this).css("overflow-y").indexOf("scroll") >= 0 || e instanceof HTMLTextAreaElement && $(this)[0].scrollHeight > ceil($(this).innerHeight())) {
				var t = $(this);
				var w = parseInt(t.css("width"));
				t.css("width", w + 32);
				prepend_arr.push(function(){
					t.css("width", w + 16);
				});
			}
		});
	}
	
	
	
	//EDGE = true;
	
	
	if (fancy_scrollbars) {
		c.find('.scrollpane').each(function(i,e){
			var scrollpane = $(this);
			var oscontent = $(this).find('.os-content:first');
			//var font = parseFloat(scrollpane.css("font-size"));
			//var lineheight = parseFloat(scrollpane.css("line-height"));
			var top = scrollpane.scrollTop();
			var top2 = top;
			var height = parseFloat(scrollpane.css("height"));
			var scrollHeight = scrollpane.scrollHeight();
			
			if (scrollHeight - top < height) {
				top2 = scrollHeight - height;
				//console.log('doing for ' + cssPath(scrollpane[0]));
			}
			
			//console.log('top2 = ' + top2);
			
			var left = scrollpane.scrollLeft();
			oscontent.css("top", -top2); // good for when your scrolled near the top, but not so good when your near the bottom
			oscontent.css("left", -left);
			scroll_arr.push(function(){
				oscontent.css("top", 0);
				oscontent.css("left", 0);
				scrollpane.scrollTop(top);
			});
		});
		/*c.find('*').each(function(i,e){
			if ($(this).css("overflow").indexOf("scroll") >= 0 || $(this).css("overflow-x").indexOf("scroll") >= 0 || $(this).css("overflow-y").indexOf("scroll") >= 0) {
				var overflowX = $(this).css("overflow-x");
				var overflowY = $(this).css("overflow-y");
				scroll_arr2.push(function(){
					oscontent.parent().css("overflow-x", overflowX);
					oscontent.parent().css("overflow-y", overflowY);
				});
				$(this).css("overflow-x", "hidden");
				$(this).css("overflow-y", "hidden");
			}
		});*/
		
		
		
		
		//$('*').off("scroll"); // doesn't work
		//$('.os-viewport').css("overflow-x", "hidden"); // doesn't work
		//$('.os-viewport').css("overflow-y", "hidden"); // doesn't work
		//$('.os-resize-observer-host').detach(); // doesn't work
		//$('.os-content-arrange').detach(); // doesn't work
		//$('.os-padding').detach(); // removes all content
	}
	else {
		c.find('.scrollpane').each(function(i,e){
			var original = $(this);
			var clone = $(this).clone();
			var top = original.scrollTop();
			var div = $('<div class="scrollpane_proxy"><div>');
			div.css("top", -top);
			div.html(clone[0].innerHTML);
			clone.html(div);
			clone.insertAfter(original);
			original.detach();
			scroll_arr.push(function(){
				clone.replaceWith(original);
				e.scrollTop = top;
			});
		});
	}
	//$('#search span').eq(5).show();
	
	
	//log(c.html());
	console.timeEnd("each");
	
	
	
	log(c.html());
	
	
	/*if (moderator) {
		if (IE || EDGE) {
			takeScreenshot3(c[0]);
			return;
		}
	}*/
	
	
	
	
	
	//EDGE = true;
	
	
	
	var defer = $.Deferred();
	var filtered;
	if (EDGE || IE || (mobile && SAFARI)) {
		filtered = defer.then(function(value) {
			return domtoimage.toSvg(c[0], {"bgcolor":"#000000", "width":1024, "height":640, "style":{"transform":"scale(1)", "margin":"0px", "zoom":"1"}, "imagePlaceholder":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});
		});
		filtered.done(function(url) {
			console.timeEnd("dom-to-image");
			var obj = $(url.substring(33, url.length));
			//obj.find('img[src^="data:image/jpeg;base64"], img[src^="data:image/svg+xml;base64"]').each(function(i,e){
			obj.find('img[src^="data:image"]').each(function(i,e){
				var path = cssPath(e);
				var src = $(path).attr("src");
				if (src.indexOf("./images/") == 0) {
					src = src.replace('./images/', 'images/');
				}
				if (src.indexOf("images/") == 0) {
					src = src.replace('images/', 'https://images.duelingbook.com/');
				}
				$(e).attr("src", src);
			});
			obj.find('style:last').html('@font-face { font-family: "Arial"; src: url("https://static.duelingbook.com/fonts/Arial.eot"); src: url("https://static.duelingbook.com/fonts/Arial.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/Arial.svg#Arial") format("svg"), url("https://static.duelingbook.com/fonts/Arial.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/Arial.woff") format("woff"), url("https://static.duelingbook.com/fonts/Arial.woff2") format("woff2"); } @font-face { font-family: "Arial Black2"; src: url("https://static.duelingbook.com/fonts/ArialBlack2.eot"); src: url("https://static.duelingbook.com/fonts/ArialBlack2.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/ArialBlack2.svg#ArialBlack") format("svg"), url("https://static.duelingbook.com/fonts/ArialBlack2.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/ArialBlack2.woff") format("woff"), url("https://static.duelingbook.com/fonts/ArialBlack2.woff2") format("woff2"); } @font-face { font-family: "Arial Rounded MT Bold"; src: url("https://static.duelingbook.com/fonts/ArialRoundedMTBold.eot"); src: url("https://static.duelingbook.com/fonts/ArialRoundedMTBold.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/ArialRoundedMTBold.svg#ArialRoundedMTBold") format("svg"), url("https://static.duelingbook.com/fonts/ArialRoundedMTBold.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/ArialRoundedMTBold.woff") format("woff"), url("https://static.duelingbook.com/fonts/ArialRoundedMTBold.woff2") format("woff2"); } @font-face { font-family: "EssayCaps"; src: url("https://static.duelingbook.com/fonts/EssayCaps.eot"); src: url("https://static.duelingbook.com/fonts/EssayCaps.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/EssayCaps.svg#EssayCaps") format("svg"), url("https://static.duelingbook.com/fonts/EssayCaps.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/EssayCaps.woff") format("woff"), url("https://static.duelingbook.com/fonts/EssayCaps.woff2") format("woff2"); } @font-face { font-family: "Kristen ITC"; src: url("https://static.duelingbook.com/fonts/KristenITC.eot"); src: url("https://static.duelingbook.com/fonts/KristenITC.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/KristenITC.svg#KristenITC") format("svg"), url("https://static.duelingbook.com/fonts/KristenITC.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/KristenITC.woff") format("woff"), url("https://static.duelingbook.com/fonts/KristenITC.woff2") format("woff2"); } @font-face { font-family: "MatrixRegularSmallCaps"; src: url("https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.eot"); src: url("https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.svg#MatrixRegularSmallCaps") format("svg"), url("https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.woff") format("woff"), url("https://static.duelingbook.com/fonts/MatrixRegularSmallCaps.woff2") format("woff2"); } @font-face { font-family: "Stone Serif"; src: url("https://static.duelingbook.com/fonts/StoneSerif.eot"); src: url("https://static.duelingbook.com/fonts/StoneSerif.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/StoneSerif.svg#StoneSerif") format("svg"), url("https://static.duelingbook.com/fonts/StoneSerif.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/StoneSerif.woff") format("woff"), url("https://static.duelingbook.com/fonts/StoneSerif.woff2") format("woff2"); } @font-face { font-family: "Stone Serif Bold"; font-weight: bold; src: url("https://static.duelingbook.com/fonts/StoneSerifBold.eot"); src: url("https://static.duelingbook.com/fonts/StoneSerifBold.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/StoneSerifBold.svg#StoneSerifBold") format("svg"), url("https://static.duelingbook.com/fonts/StoneSerifBold.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/StoneSerifBold.woff") format("woff"), url("https://static.duelingbook.com/fonts/StoneSerifBold.woff2") format("woff2"); } @font-face { font-family: "Stone Serif Italic"; font-style: italic; src: url("https://static.duelingbook.com/fonts/StoneSerifItalic.eot"); src: url("https://static.duelingbook.com/fonts/StoneSerifItalic.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/StoneSerifItalic.svg#StoneSerifItalic") format("svg"), url("https://static.duelingbook.com/fonts/StoneSerifItalic.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/StoneSerifItalic.woff") format("woff"), url("https://static.duelingbook.com/fonts/StoneSerifItalic.woff2") format("woff2"); } @font-face { font-family: "MatrixBook"; src: url("https://static.duelingbook.com/fonts/MatrixBook.eot"); src: url("https://static.duelingbook.com/fonts/MatrixBook.eot?#iefix") format("embedded-opentype"), url("https://static.duelingbook.com/fonts/MatrixBook.svg#MatrixBook") format("svg"), url("https://static.duelingbook.com/fonts/MatrixBook.ttf") format("truetype"), url("https://static.duelingbook.com/fonts/MatrixBook.woff") format("woff"), url("https://static.duelingbook.com/fonts/MatrixBook.woff2") format("woff2"); }');
			obj.find('.cardfront').each(function(i,e){
				if ($(this).data("custom") || $(this).data("id") > 20000) {
					return true;
				}
				var path = cssPath($(this).find('.pic')[0]);
				var src = $(path).attr("src");
				src = src.substring(src.lastIndexOf("/") + 1, src.length);
				if (src.indexOf(".jpg") < 0 && src.indexOf(".gif") < 0) {
					return true;
				}
				var cardimage = $('<img class="cardimage" src="https://images.duelingbook.com/cards-small/' + src + '" />');
				$(e).html(cardimage);
			});
			
			var STR = obj[0].outerHTML;
			STR = STR.replace(/%0A/g, '');
			
			
			
			
			//log(STR);
			
			
			
			
			var fd = new FormData();
			fd.append("user_id", userId);
			fd.append("username", str(username));
			fd.append("password", password);
			fd.append("browser", getBrowser());
			fd.append("platform", getPlatform());
			fd.append("svg", STR);
						
			var xhr = new XMLHttpRequest();
			xhr.open("POST", URL_START + "php-scripts/upload-svg.php", true);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					console.log(xhr.responseText);
					if (xhr.responseText.indexOf("http") != 0) {
						return;
					}
					if (usr) {
						Send({"action":"Send screenshot", "username":usr, "link":xhr.responseText});
					}
					else {
						window.open(xhr.responseText);
						setTimeout(function(){
							if (activated) {
								showAnnouncement("Your Screenshot:", '<a href="' + xhr.responseText + '" target="_blank"><font color="#00CCFF"><u>' + xhr.responseText + '</u></font></a>');
							}
						}, 1000);
					}
				}
			}
			xhr.send(fd);
			undo();
			console.log('c');
		});
	}
	else {
		filtered = defer.then(function(value) {
			//screenshotStyle = {"transform":"scale(1)", "margin":"0px", "zoom":"1"};
			//if (CHROME && getPlatform() != "Linxu") { // Chrome v76, Linux did not need adjusted margins // It also failed without adjusted margins
			if (CHROME) { // Chrome v76, Linux did not need adjusted margins // It also failed without adjusted margins
				//if (getChromeVersion() <= 86 || !PC) { // it looked good until i found a mac on v87
				//if (!PC && getChromeVersion() <= 86) { // this is wrong, because PC Chrome <86 IS supposed to alter margins
				//if (getChromeVersion() < 87) { // good except for 87 pc
				//if (getChromeVersion() <= 86 || (PC && getChromeVersion() >= 87)) { // a pc chrome 87 got it wrong (NT 10.0 was wrong, NT 6.1 was right)
				
				// chrome pc v87 NT 10.0's do not render correct with or without styling left (https://imgur.com/YWg9iTU, https://imgur.com/RhkdG86)
				
				if (PC && getChromeVersion() >= 87 && isBadChrome() || getChromeVersion() >= 87 && getPlatform() != "PC") {
					$('#content').css("margin-left", 0);
					$('#content').css("margin-top", 0);
					$('#content').css("margin", 0);
				}
				else if (isMediumVersion() || (PC && getChromeVersion() >= 87 && !isBadChrome())) {  // Chrome v65, Mac didn't need adjusted margins
					screenshotStyle.left = parseInt(-marginLeft) + "px";
					if (!MAC) {
						//screenshotStyle.top = parseInt(-marginTop) + "px"; // this is not correct for Chrome v86 pc
					}
				}
				
				
				if (PC) { // ?
					if (!zooming) { // ?
						if (alignRight) {
							screenshotStyle.left = parseInt(-marginLeft * 2) + "px";
						}
					}
				}
			}
			
			
			
			
			/*
			//with this block, it still is too much too the right on my chrome pc
			
			style.left = "0px";
			style.top = "0px";
			style.marginLeft = "0px";
			style.marginTop = "0px";
			style.paddingLeft = -marginLeft + "px";
			style.paddingTop = -marginTop + "px";
			
			style.marginLeft = marginLeft + "px";
			style.marginTop = marginTop + "px";
			
			style.marginLeft = -marginLeft + "px";
			style.marginTop = -marginTop + "px";
			*/
			
			//	screenshotStyle = {"transform":"scale(1)", "zoom":"1", "marginLeft":-marginLeft + "px", "marginTop":-marginTop + "px", "left":"0px", "top":"0px", "paddingLeft":"0px", "paddingTop":"0px"}
			//	screenshotStyle = {"transform":"scale(1)", "zoom":"1", "marginLeft":-marginLeft + "px", "marginTop":-marginTop + "px", "left":"0px", "top":"0px", "paddingLeft":"0px", "paddingTop":"0px"}
			//	screenshotStyle = {"transform":"scale(1)", "zoom":"1", "marginLeft":-marginLeft + "px", "marginTop":-marginTop + "px", "left":-marginLeft + "px", "top":-marginTop + "px", "paddingLeft":"0px", "paddingTop":"0px"}
			//	screenshotStyle = {"transform":"scale(1)", "zoom":"1", "marginLeft":"0px", "marginTop":"0px", "left":"0px", "top":"0px", "paddingLeft":"0px", "paddingTop":"0px"}
			
			
			//return domtoimage.toPng(c[0], {"bgcolor":"#000000", "width":1024, "height":640, "style":{"transform":"scale(1)", "margin":"0px", "zoom":"1"}});
			//return domtoimage.toPng(c[0], {"bgcolor":"#000000", "width":1024, "height":640, "style":{"transform":"scale(1)", "margin":"0px", "zoom":"1"}, "filter":isTainted});
			//return domtoimage.toPng(c[0], {"bgcolor":"#000000", "width":1024, "height":640, "style":{"transform":"scale(1)", "margin":"0px", "zoom":"1"}, "imagePlaceholder":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});
			return domtoimage.toPng(c[0], {"bgcolor":"#000000", "width":1024, "height":640, "style":screenshotStyle, "imagePlaceholder":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}); // added marginLeft and marginTop for chrome, but it's messing up other versions of chrome
		});
		filtered.done(function(url) {
			console.timeEnd("dom-to-image");
			//console.log(url);
			//window.open(url);
			
			/*log('url.length = ' + url.length);
			var fd = new FormData();
			fd.append("str", url.substring(33, url.length));
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "https://www.duelingbook.com/php-scripts/put-str.php", true);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					console.log(xhr.responseText);
				}
			}
			xhr.send(fd);
			return;*/
			
			//log('b');
			
			millis = Date.now() - millis;
			//log('seconds = ' + seconds);
			uploadImage(url.substring(22, url.length), 'Duelingbook Screenshot', getImageDescription(millis), 'Client-Id 577062908ebfbf6', usr);
			//resizeImage(url);
			undo();
		});
	}
	defer.resolve();
	//filtered.fail(function(error) {
	filtered.fail(function(error) {
		console.log('fail');
		undo();
		if (usr) {
			Send({"action":"Screenshot fail", "username":usr});
		}
		else {
			errorE("Failed to take screenshot");
		}
		console.log(error);
		if (!SAFARI) {
			console.log(error.srcElement.currentSrc);
		}
		
		
		/*var fd = new FormData();
		fd.append("str", error.srcElement.currentSrc);
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://www.duelingbook.com/php-scripts/put-str.php", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log(xhr.responseText);
			}
		}
		xhr.send(fd);*/
	});
	
	
	/*domtoimage.toPng(c[0], {"bgcolor":"#000000", "width":1024, "height":640, "style":{"transform":"scale(1)", "margin":"0px", "zoom":"1"}}).then(url => { // 5s
	//domtoimage.toPng(c[0], {"bgcolor":"#000000", "width":window.innerWidth, "height":window.innerHeight}).then(url => { // 5s
	//domtoimage.toJpeg(c[0], {"bgcolor":"#000000", "width":1024, "height":640, "style":{"transform":"scale(1)", "margin":"0px"}, "quality":0.5}).then(url => {
		console.timeEnd("dom-to-image");
		console.log(url);
		//window.open(url);
		uploadImage(url.substring(22, url.length), 'Duelingbook Screenshot', 'This image was generated in HTML5', 'Client-Id 577062908ebfbf6', usr);
		//resizeImage(url);
		undo();
	}).catch(function (error) {
		console.log(error);
		console.error('oops, something went wrong!', error);
		undo();
	});*/
	
	
	
	if (!usr) {
		playSound(SnapShot);
	}
	
	function undo() {
		taking_screenshot = false;
		$('html').css("pointer-events", "auto");
		/*if (SAFARI) {
			setTimeout(function(){
				$('#search span:contains("≤"), #search .lvl_rank_lbl, #search .atk_lbl, #search .def_lbl').show();
			}, 50);
		}*/
		prepend_arr.reverse();
		for (var i = 0; i < prepend_arr.length; i++) {
			prepend_arr[i]();
		}
		for (var i = 0; i < handle_arr.length; i++) {
			handle_arr[i]();
		}
		for (var i = 0; i < scroll_arr.length; i++) {
			scroll_arr[i](); // i feel like scroll arr should happen later because the right vsp depends on all content being there? // moved 9/1/19
		}
		while (data_arr.length > 0) {
			handleData(data_arr[0]);
			data_arr.splice(0, 1);
		}
		$('.os-viewport').removeClass("unscrollable");
		$('#content').css("margin", "0 auto");
		resizeE();
	}
}

function isMediumVersion() {
	if (getChromeVersion() == 81) {
		return false;
	}
	if (getChromeVersion() <= 86 && getChromeVersion() > 65) {
		return true;
	}
	return false;
}

function isBadChrome() {
	if (navigator.userAgent.indexOf("NT 10.0") >= 0) {
		return true;
	}
	if (navigator.userAgent.indexOf("NT 6.3") >= 0) {
		return true;
	}
	if (navigator.userAgent.indexOf("NT 6.1") >= 0) {
		return true;
	}
	return false;
}

function getImageDescription(millis) {
	var str = "";
	if (username && !replay) {
		str += username + "\n";
	}
	str += getBrowser();
	if (CHROME) {
		str += " v" + getChromeVersion();
	}
	str += ", " + getPlatform() + "\n";
	str += "Version " + VERSION + "\n";
	str += millis + " millis\n";
	//str += JSON.stringify(screenshotStyle) + "\n";
	//str += navigator.userAgent + "\n";
	str += image_url;
	return str;
}

function isTainted(element) {
	if (element instanceof HTMLImageElement) {
		if (element.src.toLowerCase().indexOf("duelingbook.com") >= 0) {
			return true;
		}
		if ($('#profile_body .profile_txt')[0].contains(element)) {
			return false;
		}
	}
	return true;
}

/*function cssPath(el) {
    if (!(el instanceof Element)) return;
    var path = [];
    while (el.nodeType === Node.ELEMENT_NODE) {
        var selector = el.nodeName.toLowerCase();
        if (el.id) {
            selector += '#' + el.id;
        } else {
            var sib = el, nth = 1;
            while (sib.nodeType === Node.ELEMENT_NODE && (sib = sib.previousSibling) && nth++);
            selector += ":nth-child("+nth+")";
        }
        path.unshift(selector);
        el = el.parentNode;
    }
    return path.join(" > ");
}*/

/*function cssPath(element) {
	var str = "";
	var currentElement = element;
	while(true) {
		if (currentElement.id) {
			return "#" + currentElement.id + str;
		}
		var index = 1;
		var indexElement = $(currentElement);
		while(true) {
			indexElement = $(indexElement).prev();
			if (indexElement.length == 0) {
				break;
			}
			index++;
		}
		str = ":nth-child(" + index + ")" + str;
		if (Array.from(currentElement.classList).length > 0) {
			str = " > ." + Array.from(currentElement.classList)[0] + str;
		}
		else {
			str = " > *" + str;
		}
		if (currentElement.parentNode) {
			currentElement = currentElement.parentNode;
		}
		else {
			break;
		}
	}
	return str.substring(1, str.length) + ":first";
}*/

function cssPath(e) {
	var str = "";
	while(true) {
		if (e.id) {
			return "#" + e.id + str;
		}
		var index = 1;
		var indexElement = $(e);
		while(true) {
			indexElement = $(indexElement).prev();
			if (indexElement.length == 0) {
				break;
			}
			index++;
		}
		str = ":nth-child(" + index + ")" + str;
		if (Array.from(e.classList).length > 0) {
			str = " > ." + Array.from(e.classList)[0] + str;
		}
		else {
			str = " > *" + str;
		}
		if (e.parentNode) {
			e = e.parentNode;
		}
		else {
			break;
		}
	}
	return str.substring(1, str.length) + ":first";
}

function cssImagePath(element) {
	var str = "img:first";
	var currentElement = element;
	while(true) {
		if (currentElement.id) {
			str = " #" + currentElement.id + str;
			break;
		}
		if (Array.from(currentElement.classList).length > 0) {
			str = " ." + Array.from(currentElement.classList).join(".") + str;
		}
		if (currentElement.parentNode) {
			currentElement = currentElement.parentNode;
		}
		else {
			break;
		}
	}
	return str.substring(1, str.length);
}


//cssPath($('#login .username_txt')[0])

//#actions > *:nth-child(2) > *:nth-child(2) > *:nth-child(1)	//exit btn
//#actions > .background_inner > .exit_btn > *:nth-child(1)

//#actions > .background_inner:nth-child(2) > .exit_btn:nth-child(2) > *:nth-child(1)	//exit btn
//#actions > *:nth-child(2) > .background_inner > *:nth-child(2) > .exit_btn > *:nth-child(1)

//$('#statuses > .os-padding:nth-child(3) > .os-viewport.os-viewport-native-scrollbars-overlaid.unscrollable:nth-child(1) > .os-content.u8lwl6.u341s7:nth-child(2) > .status:nth-child(1) > .avatar:nth-child(1) > .avatar_frame:nth-child(1)')

function resizeImage(b64) {
	var img = new Image();
	img.onload = function(){
		var b64;
		var width = this.naturalWidth;
		var height = this.naturalHeight;
		var canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		if (height > 640 && width > 1024 && height / width < 0.625) {
			width = Math.round(width * 640 / height);
			if (Math.abs(width % 2) == 1) {
				width++;
			}
			height = 640;
			canvas.width = width;
			canvas.height = height;
		}
		else if (width > 1024 && height > 640 && width / height > 0.625) {
			height = Math.round(height * 1024 / width);
			if (Math.abs(height % 2) == 1) {
				height++;
			}
			width = 1024;
			canvas.width = width;
			canvas.height = height;
		}
		ctx.drawImage(this, 0, 0, width, height);
		if (height / width < 0.625) {
			var ltrim = (width - (height / 0.625)) / 2;
			canvas.width = (width - ltrim * 2);
			ctx.drawImage(img, -ltrim, 0, width, height);
		}
		else if (height / width > 0.625) {
			var btrim = (height - width * 0.625) / 2;
			canvas.height = width * 0.625;
			ctx.drawImage(img, 0, -btrim, width, height);
		}
		try {
			b64 = canvas.toDataURL();
			//log(b64);
			window.open(b64);
		}
		catch(err) {
			console.log(err);
			errorE("Failed to take screenshot");
		}
		canvas.remove();
		
		//uploadImage(b64.substring(22, b64.length), 'Duelingbook Screenshot', 'This image was generated in HTML5', 'Client-Id 577062908ebfbf6');
		//uploadImage(canvas.toDataURL().split(',')[1], 'Duelingbook Screenshot', 'This image was generated in HTML5', 'Client-Id 577062908ebfbf6');
		//uploadImage(canvas.toDataURL('image/jpeg', 0.9).split(',')[1]	, 'Duelingbook Screenshot', 'This image was generated in HTML5', 'Client-Id 577062908ebfbf6');
		//trace(b64);
		//uploadImage(b64, 'Duelingbook Screenshot', 'This image was generated in HTML5', 'Client-Id 577062908ebfbf6');
	};
	img.setAttribute("src", b64);
	//resizeE();
}

function uploadImage(b64, title, description, id, usr) {
	console.time("uploadImage");
	var fd = new FormData();
	fd.append("image", b64);
	fd.append("type", "base64");
	fd.append("title", title);
	fd.append("description", description);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://api.imgur.com/3/image", true);
		//xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
		//xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.setRequestHeader("Authorization", id);
	xhr.onreadystatechange = function() {
		//console.log(xhr.readyState);
		//console.log(xhr.status);
		//console.log(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.timeEnd("uploadImage");
			console.log(xhr.responseText);
			openScreenshot(xhr.responseText, usr);
		}
	}
	xhr.send(fd);
}

function openScreenshot(str, usr) {
	var data = JSON.parse(str);
	if (usr) {
		Send({"action":"Send screenshot", "username":usr, "link":data.data.link});
	}
	else {
		window.open(data.data.link);
		setTimeout(function(){
			if (activated) {
				showAnnouncement("Your Screenshot:", '<a href="' + data.data.link + '" target="_blank"><font color="#00CCFF"><u>' + data.data.link + '</u></font></a>');
			}
		}, 1000);
	}
	var fd = new FormData();
	fd.append("user_id", userId);
	fd.append("username", username);
	fd.append("password", password);
	fd.append("result", str);
	fd.append("version", VERSION);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/upload-screenshot.php", true);
	xhr.send(fd);
}

function playSound(sound, reset) {
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

function selectText(element) {
	if (element instanceof HTMLFontElement) {
		element = element.parentNode;
	}
	if (!$(element).hasClass("selectable") && !$(element).parent().hasClass("selectable")) {
		return;
	}
	//if ($(element).attr("class") && $(element).attr("class").indexOf("unselectable") >= 0 || $(element).parent().attr("class") && $(element).parent().attr("class").indexOf("unselectable") >= 0) {
	//	//return;
	//}
	if (document.selection) {
		var div = document.body.createTextRange();
		div.moveToElementText(element);
		div.select();
	}
	else {
		var div = document.createRange();
		div.setStartBefore(element);
		div.setEndAfter(element) ;
		window.getSelection().addRange(div);
	}
}

function clearSelection() {
	var sel;
	if ((sel = document.selection) && sel.empty) {
		sel.empty();
	}
	else {
		if (window.getSelection) {
			window.getSelection().removeAllRanges();
		}
		var activeEl = document.activeElement;
		if (activeEl) {
			var tagName = activeEl.nodeName.toLowerCase();
			if (tagName == "textarea" || (tagName == "input" && activeEl.type == "text")) {
				activeEl.selectionStart = activeEl.selectionEnd;
			}
		}
	}
}

function onKeyUp(e) {
	shiftDown = false;
	controlDown = false;
	$('html').off("keyup", onKeyUp);
	return;
}

function goto(str) {
	changing_components = true;
	$('#frames').children().hide();
	//clearSelection(); // enabling this causes inputs to refocus at the beginning when changing frames
	$('#' + str).show();
	currentLabel = str;
	$('#' + currentLabel + ' img').each(function(i,e){
		if ($(this).attr("data-src")) {
			$(this).attr("src", $(this).attr("data-src"));
			$(this).removeAttr("data-src");
		}
	});
	//changeComponents(true);
}

function watchComponent(obj) {
	var div = obj.data("proxy");
	watch(obj, 'display', function(){
		div.css("display", obj.css("display"));
	});
	watch(obj, 'left', function(){
		var left = parseFloat(obj.css("left"));
		if (div.hasClass("checkbox") || div.hasClass("radiobutton")) {
			left += 2;
		}
		div.css("left", left);
	});
	watch(obj, 'top', function(){
		var top = parseFloat(obj.css("top"));
		if (div.hasClass("checkbox") || div.hasClass("radiobutton")) {
			top += 2;
		}
		div.css("top", top);
	});
	watch(obj, 'color', function(){
		div.css("color", obj.css("color"));
	});
}

function getAvatarStart(pic) {
	if (pic.indexOf("http") == 0) {
		return pic;
	}
	if (parseInt(pic.substring(0, pic.indexOf("."))) < 14000) {
		//return CARDS_HIGH_START + pic;
		return CARD_IMAGES_START + pic;
	}
	else {
		return PROFILE_PIC_START + pic;
	}
}

function Cell(str) {
	var cell = document.createElement("div");
	cell.className = "cell cell1";

	var username_txt = document.createElement("span");
	var textNode = document.createTextNode(str);
	username_txt.appendChild(textNode);
	cell.appendChild(username_txt);
	
	if (streaming && isOffensive(str)) {
		$(username_txt).css("opacity", 0);
	}
	
	cell.setAttribute("onclick", "cellClickE(this);");
	cell.setAttribute("ondblclick", "cellDoubleClickE(this);");
	return cell;
}

function Cell2(str) {
	var cell = new Cell(str);
	removeClass(cell, "cell1");
	addClass(cell, "cell2");
	return cell;
}

function cellClickE(cell) {
	$(cell).parent().find('.cell.selected, .cell2.selected').removeClass("selected");
	$(cell).addClass("selected");
}
































/* DECK */

function updateCardLimits() {
	var ocg = $('#' + currentLabel + ' .ocg_limit_rb').is(":checked");
	for (var i = 0; i < deck_arr.length; i++) {
		deck_arr[i].setLimit(ocg);
	}
	for (i = 0; i < side_arr.length; i++) {
		side_arr[i].setLimit(ocg);
	}
	for (i = 0; i < extra_arr.length; i++) {
		extra_arr[i].setLimit(ocg);
	}
	for (i = 0; i < search_arr.length; i++) {
		search_arr[i].setLimit(ocg);
	}
}

function randomizeDeck() {
	//updateTempDeckState();
	randomize(deck_filled_arr);
	//randomize(side_filled_arr);
	//randomize(extra_filled_arr);
	initializeDeckCards();
	setUnsavedChanges();
}

function sortDeck() {
	deck_filled_arr.sort(sortCards2);
	side_filled_arr.sort(sortCards2);
	extra_filled_arr.sort(sortCards2);
	console.time("initializeDeckCards");
	initializeDeckCards();
	console.timeEnd("initializeDeckCards");
}

function sortCards2(a,b) {
	if (a.data("card_type") > b.data("card_type")) {
		return 1;
	}
	if (a.data("card_type") < b.data("card_type")) {
		return -1;
	}
	if (a.data("is_link") > b.data("is_link")) {
		return 1;
	}
	if (a.data("is_link") < b.data("is_link")) {
		return -1;
	}
	if (a.data("monster_color") > b.data("monster_color")) {
		return 1;
	}
	if (a.data("monster_color") < b.data("monster_color")) {
		return -1;
	}
	if (a.data("name").toLowerCase() > b.data("name").toLowerCase()) {
		return 1;
	}
	if (a.data("name").toLowerCase() < b.data("name").toLowerCase()) {
		return -1;
	}
	if (a.data("id") > b.data("id")) {
		return 1;
	}
	if (a.data("id") < b.data("id")) {
		return -1;
	}
}

function clearDeck(b) {
	if (b != true) {
		recycleCardFronts();
	}
	deck_filled_arr = [];
	side_filled_arr = [];
	extra_filled_arr = [];
	cardsInMain = 0;
	cardsInSide = 0;
	cardsInExtra = 0;
	countMain();
	countSide();
	countExtra();
}

function addCardToMain(card, index) {
	if (index == undefined) {
		index = -1
	}
	if (cardsInMain < 60) {
		cardsInMain++;
		if (index >= 0) {
			deck_filled_arr.splice(index, 0, card);
		}
		else {
			deck_filled_arr.push(card);
		}
		if (!loading_deck) {
			initializeDeckCards();
			setUnsavedChanges();
		}
	}
	searching = true;
}

function addCardToSide(card, index) {
	if (index == undefined) {
		index = -1
	}
	if (cardsInSide < 15) {
		cardsInSide++;
		if (index >= 0) {
			side_filled_arr.splice(index, 0, card);
		}
		else {
			side_filled_arr.push(card);
		}
		if (!loading_deck) {
			initializeDeckCards();
			setUnsavedChanges();
		}
	}
	searching = true;
}

function addCardToExtra(card, index) {
	if (index == undefined) {
		index = -1
	}
	if (cardsInExtra < 15) {
		cardsInExtra++;
		if (index >= 0) {
			extra_filled_arr.splice(index, 0, card);
		}
		else {
			extra_filled_arr.push(card);
		}
		if (!loading_deck) {
			initializeDeckCards();
			setUnsavedChanges();
		}
	}
	searching = true;
}

function DeckCard(index) {
	var card = newCardFront();
	card.attr("id", "deck_card" + (index + 1));
	card.addClass("deck_card");
	card.css("left", mainXArray[index]);
	card.css("top", mainYArray[index]);
	addCardDragging(card, removeCardFromMain, deckCardDrop);
	return card;
}

function SideCard(index) {
	var card = newCardFront();
	card.attr("id", "side_card" + (index + 1));
	card.addClass("side_card");
	card.css("left", sideXArray[index]);
	card.css("top", 489.1);
	addCardDragging(card, removeCardFromSide, sideCardDrop);
	return card;
}

function ExtraCard(index) {
	var card = newCardFront();
	card.attr("id", "extra_card" + (index + 1));
	card.addClass("extra_card");
	card.css("left", sideXArray[index]);
	card.css("top", 571.6);
	addCardDragging(card, removeCardFromExtra, extraCardDrop);
	return card;
}

function SearchCard(index) {
	var card = newCardFront();
	card.attr("id", "search_card" + (index + 1));
	card.addClass("search_card");
	card.css("left", searchXArray[index]);
	card.css("top", searchYArray[index]);
	addCardDragging(card, null, searchCardDrop);
	return card;
}

function initializeDeckCards() {
	var ocg = $('#' + currentLabel + ' .ocg_limit_rb').is(":checked");
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (deck_arr.length < i + 1) {
			deck_arr.push(new DeckCard(i));
		}
		if (deck_arr[i].data("id") != deck_filled_arr[i].data("id")) {
			deck_arr[i].copyCard(deck_filled_arr[i]);
			if (currentLabel == "deck_constructor") {
				deck_arr[i].setLimit(ocg);
			}
		}
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		if (side_arr.length < i + 1) {
			side_arr.push(new SideCard(i));
		}
		if (side_arr[i].data("id") != side_filled_arr[i].data("id")) {
			side_arr[i].copyCard(side_filled_arr[i]);
			if (currentLabel == "deck_constructor") {
				side_arr[i].setLimit(ocg);
			}
		}
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		if (extra_arr.length < i + 1) {
			extra_arr.push(new ExtraCard(i));
		}
		if (extra_arr[i].data("id") != extra_filled_arr[i].data("id")) {
			extra_arr[i].copyCard(extra_filled_arr[i]);
			if (currentLabel == "deck_constructor") {
				extra_arr[i].setLimit(ocg);
			}
		}
	}
	cardsInMain = deck_filled_arr.length;
	cardsInSide = side_filled_arr.length;
	cardsInExtra = extra_filled_arr.length;
	countMain();
	countSide();
	countExtra();
}

/*function initializeDeckCards() {
	var ocg = $('#' + currentLabel + ' .ocg_limit_rb').is(":checked");
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (deck_arr[i].data("id") != deck_filled_arr[i].data("id")) {
			deck_arr[i].copyCard(deck_filled_arr[i]);
			if (currentLabel == "deck_constructor") {
				deck_arr[i].setLimit(ocg);
			}
		}
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		if (side_arr[i].data("id") != side_filled_arr[i].data("id")) {
			side_arr[i].copyCard(side_filled_arr[i]);
			if (currentLabel == "deck_constructor") {
				side_arr[i].setLimit(ocg);
			}
		}
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		if (extra_arr[i].data("id") != extra_filled_arr[i].data("id")) {
			extra_arr[i].copyCard(extra_filled_arr[i]);
			if (currentLabel == "deck_constructor") {
				extra_arr[i].setLimit(ocg);
			}
		}
	}
	cardsInMain = deck_filled_arr.length;
	cardsInSide = side_filled_arr.length;
	cardsInExtra = extra_filled_arr.length;
	countMain();
	countSide();
	countExtra();
}*/

function countMain() {
	for (var i = 0; i < deck_arr.length; i++) {
		if (cardsInMain > i) {
			//deck_arr[i].show();
			if (deck_arr[i].parent().length == 0 || !deck_arr[i].parent().is(":visible")) {
				if (currentLabel == "deck_constructor") {
					$('#deck_constructor .cards').append(deck_arr[i]);
				}
				else {
					$('#siding').append(deck_arr[i]);
				}
			}
			if (deck_arr[i][0].style.display != "block") {
				deck_arr[i][0].style.display = "block";
				deck_arr[i].setCardName();
			}
		}
		else {
			//deck_arr[i].hide();
			deck_arr[i][0].style.display = "none";
		}
	}
	var totalNormal = 0;
	var totalEffect = 0;
	var totalRitual = 0;
	var totalPendulum = 0;
	var totalSpell = 0;
	var totalTrap = 0;
		for (i = 0; i < deck_filled_arr.length; i++) {
			if (deck_filled_arr[i].data("card_type") == "Spell") {
				totalSpell++;
			}
			else if (deck_filled_arr[i].data("card_type") == "Trap") {
				totalTrap++;
			}
			else if (deck_filled_arr[i].data("pendulum") == 1) {
				totalPendulum++;
			}
			else if (deck_filled_arr[i].data("monster_color") == "Normal") {
				totalNormal++;
			}
			else if (deck_filled_arr[i].data("monster_color") == "Effect") {
				totalEffect++;
			}
			else if (deck_filled_arr[i].data("monster_color") == "Ritual") {
				totalRitual++;
			}
		}
		$('#deck_constructor .total_txt').text(deck_filled_arr.length);
		$('.total_normal_txt').text(totalNormal);
		$('.total_effect_txt').text(totalEffect);
		$('.total_ritual_txt').text(totalRitual);
		$('.total_pendulum_txt').text(totalPendulum);
		$('.total_spell_txt').text(totalSpell);
		$('.total_trap_txt').text(totalTrap);
}

function countSide() {
	for (var i = 0; i < side_arr.length; i++) {
		if (cardsInSide > i) {
			if (side_arr[i].parent().length == 0 || !side_arr[i].parent().is(":visible")) {
				if (currentLabel == "deck_constructor") {
					$('#deck_constructor .cards').append(side_arr[i]);
				}
				else {
					$('#siding').append(side_arr[i]);
				}
			}
			if (side_arr[i][0].style.display != "block") {
				side_arr[i][0].style.display = "block";
				side_arr[i].setCardName();
			}
		}
		else {
			side_arr[i][0].style.display = "none";
		}
	}
}

function countExtra() {
	for (var i = 0; i < extra_arr.length; i++) {
		if (cardsInExtra > i) {
			if (extra_arr[i].parent().length == 0 || !extra_arr[i].parent().is(":visible")) {
				if (currentLabel == "deck_constructor") {
					$('#deck_constructor .cards').append(extra_arr[i]);
				}
				else {
					$('#siding').append(extra_arr[i]);
				}
			}
			if (extra_arr[i][0].style.display != "block") {
				extra_arr[i][0].style.display = "block";
				extra_arr[i].setCardName();
			}
		}
		else {
			extra_arr[i][0].style.display = "none";
		}
	}
}

function getUnderlyingDeckCard() {
	for (var i = 0; i < deck_arr.length; i++) {
		if (inBounds(deck_arr[i], 5)) {
			return i;
		}
	}
	return -1;
}

function getUnderlyingSideCard() {
	for (var i = 0; i < side_arr.length; i++) {
		if (inBounds(side_arr[i], 4)) {
			return i;
		}
	}
	return -1;
}

function getUnderlyingExtraCard() {
	for (var i = 0; i < extra_arr.length; i++) {
		if (inBounds(extra_arr[i], 4)) {
			return i;
		}
	}
	return -1;
}

function exportDeckYDK() {
	var str = "";
	str += "#created by ..." + "\n";
	str += "#main" + "\n";
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (~~deck_filled_arr[i].data("serial_number") > 0) {
			str += deck_filled_arr[i].data("serial_number") + "\n";
		}
	}
	str += "#extra" + "\n";
	for (i = 0; i < extra_filled_arr.length; i++) {
		if (~~extra_filled_arr[i].data("serial_number") > 0) {
			str += extra_filled_arr[i].data("serial_number") + "\n";	
		}
	}
	str += "!side" + "\n";
	for (i = 0; i < side_filled_arr.length; i++) {
		if (~~side_filled_arr[i].data("serial_number") > 0) {
			str += side_filled_arr[i].data("serial_number") + "\n";
		}
	}
	while (str.indexOf("\n\n") >= 0) {
		str = str.replace("\n\n", "\n");
	}
	var title = deck.data;
	title = replaceSpecialCharacters(title);
	download(str, title + ".ydk");
}

function exportDeckYDKE() {
	var main = [];
	var side = [];
	var extra = [];
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (~~deck_filled_arr[i].data("serial_number") > 0) {
			main.push(~~deck_filled_arr[i].data("serial_number"));
		}
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		if (~~side_filled_arr[i].data("serial_number") > 0) {
			side.push(~~side_filled_arr[i].data("serial_number"));
		}
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		if (~~extra_filled_arr[i].data("serial_number") > 0) {
			extra.push(~~extra_filled_arr[i].data("serial_number"));
		}
	}
	var obj = {
		"main":Uint32Array.from(main),
		"side":Uint32Array.from(side),
		"extra":Uint32Array.from(extra)
	};
	//console.log(obj);
	//console.log(obj.main);
	console.log('now');
	console.log(main);
	console.log(side);
	console.log(extra);
	var url = toURL(obj);
	console.log(url);
}






//btoa(oqKiDw8POzs76OjolZWVpKSklT7jwsL6FhYWZWVlubmPj33X1x4HSrT7+wA=)

//	ydke://oi4RAqIuEQKiLhECD+dxBQ/ncQUP53EFOxq1ADsatQA7GrUA6KAfA+igHwPooB8DlRDGAJUQxgCVEMYApOCjBKTgowSk4KMEle5yBD6kcQHjsCoDwsdyAcLHcgH63BQBFqXVABal1QAWpdUAZbJABGWyQARlskAEubWaA7m1mgOP9wQFj/cEBX32vwDXjlYF145WBR43ggEHCMEESggQBLT8XgH7BHgC+wR4AgAuDQU=!xzRIA8c0SAPXGp8BJpBCAyaQQgNDvt0AZAmPBWQJjwVvdu8AIkiZACJImQAHCMEEuxgRA7sYEQP7BHgC!a9TMBGvUzARP4ewElyFkBZUjpAKVI6QCVRU3AlUVNwJVFTcCzmo2Ac5qNgHOajYBmCW7BZgluwWNJ5gD!

/* 	ydke://
	oi4RAqIuEQKiLhECD+dxBQ/ncQUP53EFOxq1ADsatQA7GrUA6KAfA+igHwPooB8DlRDGAJUQxgCVEMYApOCjBKTgowSk4KMEle5yBD6kcQHjsCoDwsdyAcLHcgH63BQBFqXVABal1QAWpdUAZbJABGWyQARlskAEubWaA7m1mgOP9wQFj/cEBX32vwDXjlYF145WBR43ggEHCMEESggQBLT8XgH7BHgC+wR4AgAuDQU=!
	xzRIA8c0SAPXGp8BJpBCAyaQQgNDvt0AZAmPBWQJjwVvdu8AIkiZACJImQAHCMEEuxgRA7sYEQP7BHgC!
	a9TMBGvUzARP4ewElyFkBZUjpAKVI6QCVRU3AlUVNwJVFTcCzmo2Ac5qNgHOajYBmCW7BZgluwWNJ5gD!

*/

/*
function base64ToPasscodes(base64) {
    return new Uint32Array(
        Uint8Array.from(
            Buffer.from(base64, "base64")
        ).buffer
    );
}

function passcodesToBase64(passcodes) {
	console.log('passcodesToBase64');
	console.log(passcodes);
	console.log(passcodes.buffer);
	BUFFER = new Uint8Array(passcodes.buffer);
	console.log(new Uint8Array(passcodes.buffer));
	console.log('stop');
	//return;
	//console.log(btoa(new Uint8Array(passcodes.buffer)));


	//var enc = new TextEncoder(); // always utf-8
	var dec = new TextDecoder("utf-8");
	console.log(dec.decode(BUFFER));
	
	var enc = new TextEncoder();
	console.log(enc.encode(BUFFER));
	
	//console.log(enc.encode(new Uint8Array(passcodes.buffer)));
	//console.log(enc.encode(Uint32Array.from(passcodes.buffer)));

	console.log(btoa(enc.encode(new Uint8Array(passcodes.buffer))));
	
	console.log(new ArrayBuffer(new Uint8Array(passcodes.buffer)));
	console.log(_arrayBufferToBase64(new ArrayBuffer(new Uint8Array(passcodes.buffer))));
	
	//return ArrayBuffer.from(new Uint8Array(passcodes.buffer)).toString("base64");
	//return new ArrayBuffer(new Uint8Array(passcodes.buffer)).toString("base64");
	return new ArrayBuffer(new Uint8Array(passcodes.buffer));

    //return Buffer.from(new Uint8Array(passcodes.buffer)).toString("base64");
    //return new Uint8Array(passcodes.buffer).toString("base64")
    //return btoa(new Uint8Array(passcodes.buffer));
    
   // return Buffer.from(new Uint8Array(passcodes.buffer)).toString("base64");
    
    //	oqKiDw8POzs76OjolZWVpKSklT7jwsL6FhYWZWVlubmPj33X1x4HSrT7+wA=
}

function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

passcodesToBase64(Uint32Array.from([
  34680482,
  34680482,
  34680482,
  91350799,
  91350799,
  91350799,
  11868731,
  11868731,
  11868731,
  52404456,
  52404456,
  52404456,
  12980373,
  12980373,
  12980373,
  77848740,
  77848740,
  77848740,
  74641045,
  24224830,
  53129443,
  24299458,
  24299458,
  18144506,
  14001430,
  14001430,
  14001430,
  71348837,
  71348837,
  71348837,
  60470713,
  60470713,
  84211599,
  84211599,
  12580477,
  89558743,
  89558743,
  25311006,
  79759367,
  68159562,
  23002292,
  41420027,
  41420027,
  84749824
]));

var BUFFER;
var ENC = new TextDecoder("utf-8");
	ENC = new TextDecoder("base64");



function parseURL(ydke) {
    if (!ydke.startsWith("ydke://")) {
        throw new Error("Unrecognized URL protocol");
    }
    const components = ydke.slice("ydke://".length).split("!");
    if (components.length < 3) {
        throw new Error("Missing ydke URL component");
    }
    return {
        main: base64ToPasscodes(components[0]),
        extra: base64ToPasscodes(components[1]),
        side: base64ToPasscodes(components[2])
    };
}

function toURL(deck) {
    return "ydke://" + passcodesToBase64(JSON.stringify(deck.main)) + "!" + passcodesToBase64(deck.extra) + "!" + passcodesToBase64(deck.side) + "!";
}

function extractURLs(from) {
    const ydkeReg = /ydke:\/\/[A-Za-z0-9+/=]*?![A-Za-z0-9+/=]*?![A-Za-z0-9+/=]*?!/g;
    var match = ydkeReg.exec(from);
    const matches = [];
    while (match !== null) {
        matches.push(match[0]);
        match = ydkeReg.exec(from);
    }
    return matches;
}
*/









/*

// Copyright (C) 2020  Kevin Lu
// SPDX-License-Identifier: LGPL-3.0-or-later

// Note: the following conversions depend on little-endian byte order and
// is approximately equivalent to a pointer cast. This could be made
// endianness-independent in the future but there is not much demand
// considering that the x86 and ARM architectures that this code will run on
// are little-endian.
export function base64ToPasscodes(base64: string): Uint32Array {
    return new Uint32Array(
        Uint8Array.from(
            Buffer.from(base64, "base64")
        ).buffer
    );
}

export function passcodesToBase64(passcodes: Uint32Array): string {
    return Buffer.from(new Uint8Array(passcodes.buffer)).toString("base64");
}


export interface TypedDeck {
    main: Uint32Array, extra: Uint32Array, side: Uint32Array;
}

export function parseURL(ydke: string): TypedDeck {
    if (!ydke.startsWith("ydke://")) {
        throw new Error("Unrecognized URL protocol");
    }
    const components = ydke.slice("ydke://".length).split("!");
    if (components.length < 3) {
        throw new Error("Missing ydke URL component");
    }
    return {
        main: base64ToPasscodes(components[0]),
        extra: base64ToPasscodes(components[1]),
        side: base64ToPasscodes(components[2])
    };
}

export function toURL(deck: TypedDeck): string {
    return "ydke://" +
        passcodesToBase64(deck.main) + "!" +
        passcodesToBase64(deck.extra) + "!" +
        passcodesToBase64(deck.side) + "!";
}

export function extractURLs(from: string): string[] {
    const ydkeReg = /ydke:\/\/[A-Za-z0-9+/=]*?![A-Za-z0-9+/=]*?![A-Za-z0-9+/=]*?!/g;
    let match = ydkeReg.exec(from);
    const matches = [];
    while (match !== null) {
        matches.push(match[0]);
        match = ydkeReg.exec(from);
    }
    return matches;
}
*/

/*

function passcodesToBase64() {
	var arr = Uint32Array.from([
		46986414,
		44095762
	]);
	var obj = new Uint8Array(arr.buffer);
    return Buffer.from(obj).toString("base64");
    // returns "rvTMAhLZoAI="
}


*/


function passcodesToBase64() {
	var arr = Uint32Array.from([
		46986414,
		44095762
	]);
	var obj = new Uint8Array(arr.buffer);
    return Buffer.from(obj).toString("base64");
    // returns "rvTMAhLZoAI="
}









function exportDeckXML() {
	var title = deck.data;
	var xml = '<?xml version="1.0" encoding="utf-8" ?>\n<deck name="' + escapeHTML(title) + '">\n <main>\n';
	for (var i = 0; i < deck_filled_arr.length; i++) {
		xml += '  <card id="' + deck_filled_arr[i].data("id") + '" passcode="' + deck_filled_arr[i].data("serial_number") + '">' + escapeHTML(deck_filled_arr[i].data("name")) + '</card>\n';
	}
	xml += ' </main>\n <side>\n';
	for (i = 0; i < side_filled_arr.length; i++) {
		xml += '  <card id="' + side_filled_arr[i].data("id") + '" passcode="' + side_filled_arr[i].data("serial_number") + '">' + escapeHTML(side_filled_arr[i].data("name")) + '</card>\n';
	}
	xml += ' </side>\n <extra>\n';
	for (i = 0; i < extra_filled_arr.length; i++) {
		xml += '  <card id="' + extra_filled_arr[i].data("id") + '" passcode="' + extra_filled_arr[i].data("serial_number") + '">' + escapeHTML(extra_filled_arr[i].data("name")) + '</card>\n';
	}
	xml += ' </extra>\n</deck>';
	title = replaceSpecialCharacters(title);
	download(xml, title + ".xml");
}

function replaceSpecialCharacters(str) {
	if (str == null) {
		return "Untitled";
	}
	str = str.replace(/"/g, '')
	str = str.replace(/\\/g, '');
	str = str.replace(/\//g, '');
	str = str.replace(/\?/g, '');
	str = str.replace(/:/g, '');
	str = str.replace(/</g, '');
	str = str.replace(/>/g, '');
	str = str.replace(/\|/g, '');
	str = str.replace(/\./g, '');
	return str;
}

function download(data, filename) {
	var file = new Blob([data], {type: 'text/plain'});
	if (window.navigator.msSaveOrOpenBlob) // IE10+
		window.navigator.msSaveOrOpenBlob(file, filename);
	else {
		var a = document.createElement("a"),
		url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(function() {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);  
		}, 0); 
	}
}

function array(data) {
	if (data instanceof Array) {
		return data;
	}
	return [];
}

function Str(s) {
	return str(s);
}

function str(str) {
	if (!str) {
		return "";
	}
	return str;
}

function quote(str) {
	return '"' + str + '"';
}

function updateActive(b) {
	active = b;
}

function muteE() {
	var volume = 0.35;
	if ($('#cross').is(":visible")) {
		$('#cross').hide();
		window.localStorage.setItem("sound", "on");
	}
	else {
		volume = 0;
		$('#cross').show();
		window.localStorage.setItem("sound", "off");
	}
	audio_arr.forEach(function(e,i){
		e.volume = volume;
	});
}

function addClass(element, className) {
	var arr = element.className.split(" ");
	if (arr.indexOf(className) == -1) {
		element.className += " " + className;
	}
}

function removeClass(element, className) {
	var arr = element.className.split(" ");
	if (arr.indexOf(className) >= 0) {
		arr.splice(arr.indexOf(className), 1);
	}
	element.className = arr.join(" ");
}

function determineChatX(chat) {
	var chatX = ceil(chat.css("left"));
	var chatY = ceil(chat.css("top"));
	if (chatX < 0 || chatX > 1024) {
		chatX = 3;
	}
	if (chatY < 0 || chatY > 640 - ceil(chat.css("height"))) {
		chat.css("top", 3);
	}
	var arr = [3, 206, 409, 612, 815];
	if (arr.indexOf(chatX) < 0) {
	//if (arr.indexOf(chatX) < 0 && chatX > 0 && chatX < 1024) {
		return;
	}
	var chats = [$('#online_users'), $('#calls'), $('#public_chat'), $('#private_chat'), $('#watch_chat'), $('#duel_log')];
	outerloop:
	for (var i = arr.length - 1; i >= 0; i--) {
		for (var j = chats.length - 1; j >= 0; j--) {
			if (chats[j].is(":visible") && ceil(chats[j].css("left")) == arr[i]) {
				continue outerloop;
			}
		}
		chatX = arr[i];
	}
	chat.css("left", chatX);
	
	if (!mobile) { // added on 8/30/20 to act as a fix for when focusing an input causes the screen to move down
		setTimeout(function(){
			$('html').scrollTop(0);
			$('html').scrollLeft(0);
		}, 5);
	}
}

function insertAt(index, obj, parent) {
	if (parent.hasClass("scrollpane") && parent.find('.os-content').length > 0) {
		parent = parent.find('.os-content');
		if (parent.find('> .os-resize-observer-host').length > 0) {
			index++;
		}
		if (parent.find('> .os-scrollbar-corner').length > 0) {
			index++;
		}
	}
	if (index == 0) {
		parent.prepend(obj);
		return;
	}
	var arr = parent.children();
	if (arr.length == 0 || index >= arr.length) {
		parent.append(obj);
	}
	else {
		$(obj).insertBefore(arr.eq(index));
	}
}

function addDragging0(element, parent, start_function, end_function) {
	if (!parent) {
		parent = element;
	}
	element.mousedown(function handle_mousedown(e){
		e.preventDefault(); // prevents unwanted text selection
		updateMouse(e);
		if (start_function) {
			start_function();
		}
		var dragXOffset = mouseXScaled - parseInt(parent.css("left"));
		var dragYOffset = mouseYScaled - parseInt(parent.css("top"));
		$('html').mousemove(function(e){
			updateMouse(e);
			TweenMax.to(parent, 0, {left:mouseXScaled - dragXOffset, top:mouseYScaled - dragYOffset});
		});
		$('html').mouseup(function(e){
			$('html').off("mousemove");
			$('html').off("mouseup");
			if (end_function) {
				end_function();
			}
		});
	});
}

function addDragging(element, handle, cancel, start_function, end_function) {
	if (mobile) {
		addDraggingMobile(element, handle, cancel, start_function, end_function);
		return;
	}
	element.draggable({
		"scroll":false,
		//"handle":handle, // handle just doesn't work. it's here for giggles
		"cancel":cancel,
		"start":function(e, ui){
			if (start_function) {
				start_function(e, $(ui));
			}
			updateMouse(e);
			dragXOffset = mouseXScaled - parseInt($(this).css("left"));
			dragYOffset = mouseYScaled - parseInt($(this).css("top"));
		},
		"drag":function(e, ui){
			if (!jello) {
				updateMouse(e); // this corrects the default new x and y position to the scaled x and y position
				ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
			}
		},
		"stop":function(e, ui){
			if (end_function) {
				end_function(e, $(ui));
			}
		}
	});
}

function addDraggingMobile(element, handle, cancel, start_function, end_function) {
	element.draggable({
		"scroll":false,
		"handle":handle,
		"start":function(e, ui){
			if (start_function) {
				start_function(e, $(ui));
			}
			updateMouse(e);
			dragXOffset = mouseXScaled - parseInt($(this).css("left"));
			dragYOffset = mouseYScaled - parseInt($(this).css("top"));
		},
		"drag":function(e, ui){
			if (!jello) {
				updateMouse(e);
				ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
			}
		},
		"stop":function(e, ui){
			if (end_function) {
				end_function(e, $(ui));
			}
		}
	});
}

function appendChat(chat) {
	var focus = $(':focus');
	$('#chats').append(chat);
	focus.focus();
}

function setupInput(cin_txt, focus) {
	/*// older text showed up once
	
	if (focus !== false) {
		focus = true;
	}
	console.log('setupInput');
	if ((admin || ($('#public_chat .minimize2_btn').is(":visible") && moderator >= 2)) && (cin_txt.val() == "Posting as " + username + "..." || cin_txt.val() == "")) {
		console.log('a');
		if (focus) {
			cin_txt.focus();
		}
		cin_txt.val("Posting as " + username + "...");
		cin_txt.css("color", "gray");
		cin_txt.on("click input", clearInput);
	}
	else {
		console.log('b');
		//if ($._data($('#post_status .status_txt')[0], "events").input[0].handler) {
			cin_txt.off("click input", clearInput);
		//}
		if (cin_txt.val() == "Posting as " + username + "...") {
			cin_txt.val("");
			cin_txt.css("color", "black");
		}
	}*/
}

function clearInput(e) {
	$(this).off("click input", clearInput);
	$(this).val("");
	$(this).css("color", "black");
}

function maximizePreview() {
	if (parseInt(preview_txt.css("height")) == 152) {
		if (preview_txt.scrollHeight() >= 159) {
			$('#watchers').hide();
			$('#watchers_btn').hide();
			$('#log_btn').hide();
			preview_txt.css("height", 227);
		}
	}
}

function enterHandler(e) {
	switch(e.which) {
		case 17: // control
		case 91: // command chrome
		case 224: // command firefox
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
		case 33: // page up
		case 34: // page down
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
				if ($('#confirm2').is(":visible")) {
					confirmYes();
				}
				if ($('#combo').is(":visible")) {
					comboOK();
				}
				return;
			}
			switch(document.activeElement) {
				case $('#combo .combo_cb')[0]:
					comboOK();
					break;
				case $('#input .input_txt')[0]:
					inputOK();
					break;
			}
			break;
	}
}

function arrowKeyE(e) {
	if (!active_scrollpane) {
		log('aborting');
		return;
	}
	if ($(':focus').length == 0 || !$(':focus').is(":visible") || $(':focus')[0] == active_scrollpane[0] || inBounds(active_scrollpane) || (active_scrollpane.is(":visible")) && onScreen(active_scrollpane[0])) {
		var amount = (e.which == 40 ? 20 : -20);
		switch(e.which) {
			case 37:
			case 39:
				amount = (e.which == 39 ? 20 : -20);
				if (fancy_scrollbars) {
					if (active_scrollpane.find('.os-scrollbar-horizontal').hasClass("os-scrollbar-unusable")) {
						return;
					}
					active_scrollpane.overlayScrollbars().scroll({x:active_scrollpane.scrollLeft() + amount});
				}
				else {
					if (active_scrollpane.css("overflow-x") != "scroll") {
						return;
					}
					active_scrollpane[0].scrollLeft += amount;
				}
				break;
			case 38:
			case 40:
				if (fancy_scrollbars) {
					if (active_scrollpane.find('.os-scrollbar-vertical').hasClass("os-scrollbar-unusable")) {
						return;
					}
				}
				else {
					if (active_scrollpane.css("overflow-y") != "scroll") {
						return;
					}
				}
				//tweenScrollbar(active_scrollpane, 0.1, {"scrollTop":active_scrollpane.scrollTop() + amount});
				log(active_scrollpane.scrollTop() + amount);
				active_scrollpane.scrollTop(active_scrollpane.scrollTop() + amount);
				break;
		}
	}
}

function loadMessage() {
	if (!showMes) {
		return;
	}
	var width = getWidth();
	var height = getHeight();
	var delta = height - getScaledHeight();
	if (delta > (mes1.height() + 11) * 2) {
		if (!mobile) {
			// setHTML is only for google adsense
			
			mes1.show(); // shows in deck.html if it's not in this (!mobile) block
			mes1.setHTML(banner_ad); 
		
			mes3.show();
			mes3.setHTML(banner_ad);
		}
	}
	else {
		switch(currentLabel) {
			case "front_page":
			case "start":
				break;
			default:
				mes1.hide();
				break;
		}
		mes3.hide();
	}
	delta = width - getScaledWidth();
	//if (delta > (mes4.width() + 11) * 2 && getHeight() >= mes4.height()) {
	if (delta > (mes2.width() + 11) * 2 && getHeight() >= mes2.height()) {
		mes2.show();
		mes2.setHTML(skinny_ad);
	}
	else {
		mes2.hide();
	}
}

function initDB() {
	if (localStorage.getItem("sound") == "off") {
		muteE();
	}
	db_id = getDbId();
	$('*').each(function(i,e){
		if (e instanceof HTMLDivElement) {
			if ($(this).css("overflow").indexOf("scroll") >= 0 || $(this).css("overflow-y").indexOf("scroll") >= 0 || $(this).css("overflow-x").indexOf("scroll") >= 0) { // Tor browser can't just check "overflow"
				$(this).addClass("scrollpane");
				$(this).mouseenter(function(){
					active_scrollpane = $(this);
				});
			}
		}
	});
	
	
	if (window.location.toString().indexOf("duelingbook.com") < 0) {
		$('.vm-placement').detach();
	}
	
	//$('.list').each(function(){
		
	//});
	
	
	
	$('textarea').on('input blur', function(){
		$(this).text($(this).val());
	});
	$('.textarea').addClass("selectable");
	$('input').click(function(){ // for super_cb
		$(this).focus();
	});
	$('input[type=radio]').click(function(){ // for duel_rb / watch_rb
		if (prevFocus) {
			prevFocus.focus();
		}
	});
	$('#content').show();
	$('#content')[0].style.zoom = 1;
	if (mobile) {
		$('#content').css("overflow", "hidden");
	}
	if (!SAFARI) {
		$('#greenlines').show();
	}
	if (mobile) {
		jello = true;
	}
	if (mobile || EDGE || SAFARI) {
		fancy_scrollbars = false; // fancy scrollbars causes dragging to mess up on mobile, and doesn't work on Edge, and takes a long time to load in Safari
	}
	if (CHROME && !mobile) {
		//fancy_scrollbars = false; // fancy scrollbars can't be seen otherwise
	}
	if (GET('scrollbars') == "false") {
		fancy_scrollbars = false;
	}
	if (GET('scrollbars') == "true") {
		fancy_scrollbars = true;
	}
	addScrollBars();
	document.body.style.zoom = 1;
	window.onresize = resizeE;
	window.onscroll = resizeE; // iphones cannot hear onresize, it can only hear scrolling
	window.onorientationchange = orientationE;
	
	//if (CHROME || SAFARI || EDGE) { // text WAS blurry in chrome otherwise // if IE uses zoom, the content isn't centered well // no difference in edge
	if (SAFARI) { // 
		//zooming = true; // if enabled, loading the page is really hard, and usually causes an infinite loop
	}
	
	
	if (alignLeft || alignRight) {
		zooming = false;
	}
	if (!zooming) {
		$(window).off("smartresize");
	}
	resizeE();
	orientationE();
	$('body').css("overflow-y", "scroll");
	$('html').scrollTop(0);
	$('body').css("overflow-y", "hidden");
	$('html').keydown(enterHandler);
	$('html').on('input', function(e){
		if ($(e.target).data("regex")) {
			e.target.value = e.target.value.replace($(e.target).data("regex"), '');
			return;
		}
		//e.target.value = e.target.value.replace(/[^ -~●\r\n]/g, '');
	});
	
	$('html').mousedown(function(e){
		controlFocus = $(e.target);
	});
	if (jello) {
		jelloE();
	}
	changeComponents();
	hideDisplayBoxes();
	initTouchEvents(); // apparently these touch events aren't needed
	TweenMax.ticker.useRAF(false);
	
	if (mobile && SAFARI) {
		TweenMax.ticker.fps(10);
		if (username == "n****r") {
			alert('yeet');
		}
	}
	
	TweenMax.lagSmoothing(0);
	/*if (EDGE) {
		$('img').each(function(i,e){
			if ($(this).attr("src").indexOf(".svg") >= 0) {
				$(this).css("width", "100%");
				//$(this).css("height", "100%");
			}
		});
		unsetWidthAndHeight($('.field_decks'));
		unsetWidthAndHeight($('.field_zones'));
		unsetWidthAndHeight($('#card_menu'));
	}*/
	if (EDGE || IE) {
		$('#dark').css("opacity", "0.5");
		ABOUT_ZERO = 2.5;
	}
	if (SAFARI) {
		$('body').addClass("safari");
		//$('span:contains("&nbsp;")')
		ABOUT_ZERO = 0;
		
	}
	if (CHROME) {
		$('body').addClass("chrome");
		/*setTimeout(function(){
			$('#content').css("transform-style", "flat");
		}, 200);
		setTimeout(function(){
			$('#content').css("transform-style", "preserve-3d");
		}, 4200);*/
		ABOUT_ZERO = 0.1;
		ABOUT_ZERO = 2.5;
	}
	if (FIREFOX) {
		$('body').addClass("firefox");
	}
	if (GET("flat") == "true") {
		flat = true;
		$('body').addClass("flat");
	}
	$('#black').hide();
	/*$('img').each(function(i,e){
		if ($(this).attr("data-src")) {
			images.push($(this));
		}
	});*/
	streaming = GET('censoring') == "true";
	if (alignRight) {
		mes2.detach();
	}
	else if (alignLeft) {
		mes4.detach();
	}
	if (GET('still') != "true") {
		adjustTimer.start();
	}
	if (GET('usecardimages') == "true") {
		usecardimages = true;
	}
	
	/*if (CHROME || EDGE) {
		$('*').each(function(){
			if ($(this).css("perspective") != "none") {
				$(this).css("perspective", "none");
			}
		});
	}*/
	
	
	
	
	/*if (SAFARI) {
		setTimeout(function(){
			TweenMax.set($('#content'), {"scale":1});
			$('#content').css("transform-origin", "top left");
			zooming = true; // if enabled, loading the page is really hard, and usually causes an infinite loop
			resizeE();
		}, 30);
	}*/
	
	document.cookie = "_gat=2;expires=Thu, 01 Jan 2022 00:00:00 GMT;path=/;domain=.duelingbook.com";
	document.cookie = "_gat=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.duelingbook.com";
}

function checkLoggedIn() {
	var fd = new FormData();
	fd.append("db_id", db_id);
		fd.append("version", VERSION);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "logged-in.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			checkLoggedInResponse(xhr.responseText);
		}
	}
	xhr.send(fd);			
}

function unsetWidthAndHeight(obj) {
	obj.css("width", "auto");
	obj.css("height", "auto");
}

function GET(str) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == str) {
			return pair[1];
		}
	}
	return false;
}

/*function touchHandler(e) {
	var touch = e.changedTouches[0];
	var simulatedEvent = document.createEvent("MouseEvent");
	simulatedEvent.initMouseEvent({
		touchstart: "mousedown",
		touchmove: "mousemove",
		touchend: "mouseup"
	}[e.type], true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	touch.target.dispatchEvent(simulatedEvent);
	//e.preventDefault(); // if enabled, click won't fire
}

function initTouchEvents() {
	document.addEventListener("touchstart", touchHandler, true);
	document.addEventListener("touchmove", touchHandler, {passive: false});
	document.addEventListener("touchend", touchHandler, true);
	document.addEventListener("touchcancel", touchHandler, true);
}*/

/*function initTouchEvents() {
	$('html').on("touchend", function(e){
		setTimeout(function(){
			$(e.target).click();
		}, 100);
		e.preventDefault();
	});
}*/

/*function initTouchEvents() {
	$('html').on("touchstart", function(e){
		var returning = false;
		$('html').off("touchend");
		$('html').on("touchend", touchEndE);
		
		$('html').off("touchmove");
		$('html').on("touchmove", function(e){
			returning = true;
		});
		
		$(e.target).mousedown();
		
		function touchEndE(e) {
			$(e.target).mouseout();
			if (returning) {
				return;
			}
			setTimeout(function(){
				if ($(e.target).attr("type") == "text") {
					//messageE('yes');
					//$(e.target).blur();
					//$(e.target).focus();
				}
				else {
					//$(e.target).click();
				}
				$(e.target).click();
			}, 100);
			//e.preventDefault(); // when enabled, focus won't happen // when disabled, stuff is clicked twice
		}
	});
}*/

var clicked_obj = $('<div></div>');
var clicked_millis = 0;

function initTouchEvents() {
	return;
	
	$('html').on("touchstart", function(e){
		var returning = false;
		$('html').off("touchend");
		$('html').on("touchend", touchEndE);
		$('html').off("touchmove");
		$('html').on("touchmove", function(e){
			returning = true;
		});
		$(e.target).mouseover();
		$(e.target).mousedown();
		
		function touchEndE(e) {
			//$(e.target).mouseleave(); // when enabled, it hides tooltips, but makes the card menu instantly disappear
			$('#tooltips > *').hide();
			if (menu.is(":visible") && !$(e.target).hasClass("cardfront") && $(e.target).parents('.cardfront').length == 0 && !$(e.target).hasClass("cardback") && $(e.target).parents('.card').length == 0 && $(e.target)[0].id != "card_menu" && $(e.target).parents('#card_menu').length == 0 && $(e.target)[0].id != "deck_hidden" && $(e.target)[0].id != "extra_hidden") {
				removeCardMenu();
			}
			if (action_list.is(":visible") && $(e.target)[0].id != "action_list" && $(e.target).parents('#action_list').length == 0) {
				hideActionList();
			}
			if (returning) {
				return;
			}
			switch($(e.target)[0].tagName) {
				case "INPUT":
				case "A":
				case "SELECT":
				case "TEXTAREA":
					$(e.target).mouseleave();
					return;
				default:
					//messageE($(e.target)[0].tagName);
					e.preventDefault(); // when enabled, focus won't happen // when disabled, stuff is clicked twice
					break;
			}
			//messageE($(e.target)[0].tagName);
			setTimeout(function(){
				if (Date.now() - clicked_millis < 500 && $(e.target)[0] == clicked_obj[0]) {
					$(e.target).dblclick();
				}
				else {
					//messageE('clicking');
					$(e.target).click();
				}
				clicked_obj = $(e.target);
				clicked_millis = Date.now();
			}, 100);
		}
	});
}







/*

touchstart
touchend
mouseenter
mousemove
mousedown
mouseup
click

*/




/*




$('html').on("click", function(e){
	showAnnouncement("Notification", "click");
});
$('html').on("touchend", function(e){
	$(e.target).click();
		e.preventDefault();
});

document.addEventListener("touchcancel", touchHandler, true);





$('html').on("touchstart", function(e){
	e.preventDefault();
});



$('html').on("touchstart", function(e){
	messageE("touchstart");
	$(e.target).mousedown(e);
	e.preventDefault();
});
$('html').on("touchmove", function(e){
	messageE("touchmove");
	$(e.target).mousemove(e);
	e.preventDefault();
});
$('html').on("touchend", function(e){
	messageE("touchend");
	$(e.target).mouseup(e);
	e.preventDefault();
});




	//showAnnouncement("Notification", "touchend");
	//e.preventDefault();






$('html').off("click");
$('html').off("mousedown");
$('html').off("mouseenter");
$('html').off("mousedown");
$('html').off("mouseup");
$('html').off("touchstart");
$('html').off("touchmove");
$('html').off("touchcancel");
$('html').off("touchend");

$('body').off("click");
$('body').off("mousedown");
$('body').off("mouseenter");
$('body').off("mousedown");
$('body').off("mouseup");
$('body').off("touchstart");
$('body').off("touchmove");
$('body').off("touchcancel");
$('body').off("touchend");




*/

function orientationE() {
	if (!mobile) {
		return;
	}
	var angle = 0;
	if (SAFARI) {
		angle = window.orientation;
	}
	else {
		angle = ScreenOrientation.angle;
	}
	if (angle == 0 || angle == 180) {
		$('meta[name=viewport]').attr("content", "width=1024");
	}
	else {
		$('meta[name=viewport]').attr("content", "height=640");
	}
}

function ioError(e) {
	errorE("IO Error");
	console.log(e);
	console.log(e.message);
}

function getBrowser() {
	if (OPERA) {
		return "Opera";
	}
	if (FIREFOX) {
		return "Firefox";
	}
	if (CHROME) {
		return "Chrome";
	}
	if (SAFARI) {
		return "Safari";
	}
	if (IE) {
		return "Internet Explorer";
	}
	if (EDGE) {
		return "Edge";
	}
	if (TOR) {
		return "Tor";
	}
	if (BLINK) {
		return "Blink";
	}
	return "Unknown";
}

function getPlatform() {
	if (window.navigator.platform.indexOf("Win") == 0) {
		return "PC";
	}
	if (window.navigator.platform.indexOf("Mac") == 0) {
		return "Mac";
	}
	if (window.navigator.platform.indexOf("Lin") == 0) {
		return "Linux";
	}
	if (window.navigator.platform.indexOf("And") == 0) {
		return "Android";
	}
	return window.navigator.platform;
}

// prevents the delete key from navigating back
$(document).unbind('keydown').bind('keydown', function (event) {
    if (event.keyCode === 8) {
        var doPrevent = true;
        var types = ["text", "password", "file", "search", "email", "number", "date", "color", "datetime", "datetime-local", "month", "range", "search", "tel", "time", "url", "week"];
        var d = $(event.srcElement || event.target);
        var disabled = d.prop("readonly") || d.prop("disabled");
        if (!disabled) {
            if (d[0].isContentEditable) {
                doPrevent = false;
            } else if (d.is("input")) {
                var type = d.attr("type");
                if (type) {
                    type = type.toLowerCase();
                }
                if (types.indexOf(type) > -1) {
                    doPrevent = false;
                }
            } else if (d.is("textarea")) {
                doPrevent = false;
            }
        }
        if (doPrevent) {
            event.preventDefault();
            return false;
        }
    }
});

function ceil(str) {
	return Math.ceil(parseFloat(str))
}

function tweenScrollbar(scrollpane, time, obj) {
	var proxy = {};
	proxy.x = scrollpane.scrollLeft();
	proxy.y = scrollpane.scrollTop();
	var tweenX = (~~obj.scrollLeft != scrollpane.scrollLeft());
	var tweenY = (~~obj.scrollTop != scrollpane.scrollTop());
	TweenMax.to(proxy, time, {x:~~obj.scrollLeft, y:~~obj.scrollTop, ease:Expo.easeInOut, onUpdate:function(){
		if (tweenX) {
			if (fancy_scrollbars && scrollpane.overlayScrollbars() && scrollpane.overlayScrollbars().scroll) { // not reliable for some reason
			//if (fancy_scrollbars) { // not reliable for some reason // elements that scroll that are created dynamically did not initialize overlayscrollbars, so this would cause an infinite error loop
			//if (scrollpane.overlayScrollbars()) {
				scrollpane.overlayScrollbars().scroll({x:proxy.x});
			}
			else {
				scrollpane.scrollLeft(proxy.x);
			}
		}
		if (tweenY) {
			scrollpane.scrollTop(proxy.y);
		}
	}});
	TweenMax.to(scrollpane, time, obj);
}

function isTextSelected(input) {
	if (typeof input.selectionStart == "number") {
		return input.selectionStart == 0 && input.selectionEnd == input.value.length;
	} 
	else if (typeof document.selection != "undefined") {
		input.focus();
		return document.selection.createRange().text == input.value;
	}
}

function isOffensive(str) {
	if (!str) {
		return false;
	}
	str = str.toLowerCase();
	for (var i = 0; i < slur_arr.length; i++) {
		if (str.indexOf(slur_arr[i]) >= 0) {
			return true;
		}
	}
	return false;
}

function censor(str) {
	if (!streaming) {
		return str;
	}
	for (var i = 0; i < slur_arr.length; i++) {
		if (str.toLowerCase().indexOf(slur_arr[i]) >= 0) {
			var index = str.toLowerCase().indexOf(slur_arr[i]);
			str = str.substring(0, index) + "[censored]" + str.substring(index + slur_arr[i].length, str.length);
			i--;
		}
	}
	return str;
}

/*function adjustScreen() {
	if (moderator) {
		//console.log('adjustScreen');
	}
	window.onscroll = null;
	setTimeout(function(){
		window.onscroll = resizeE;
	}, 1000);
	var sL = $('html').scrollLeft();
	var sT = $('html').scrollTop();
	if (sL > 0) {
		if (mobile) {
			$('html').scrollLeft(sL - 1);
		}
		else {
			$('html').scrollLeft(0);
		}
		adjustTimer.reset();
		//addLine3("changing left from " + sL + " to " + (sL - 1));
	}
	if (sT > 0) {
		if (mobile) {
			$('html').scrollTop(sT - 1);
		}
		else {
			$('html').scrollTop(0);
		}
		adjustTimer.reset();
		//addLine3("changing top from " + sT + " to " + (sT - 1));
	}
}*/

/*function adjustScreen() {
	console.log('adjustScreen');
	//This is called every second
	window.onscroll = null;
	setTimeout(function(){
		window.onscroll = resizeE;
	}, 50);
	var sL = $('html').scrollLeft();
	var sT = $('html').scrollTop();
	$('html').scrollLeft(sL - 1);
	$('html').scrollTop(sT - 1);
	$('html').scrollLeft(sL);
	$('html').scrollTop(sT);
}*/

function adjustScreen() {
	// The way this is different from above is that this one should not have a conflict with assigning resizeE to window.onscroll
	window.onscroll = null;
	resizeETimer.start();
	var sL = $('html').scrollLeft();
	var sT = $('html').scrollTop();
	$('html').scrollLeft(sL - 1);
	$('html').scrollTop(sT - 1);
	$('html').scrollLeft(sL);
	$('html').scrollTop(sT);
	if (username == "n****r") {
		//addLine("left = " + sL + ", top = " + sT);
	}
}

function addLine3(str) {
	if (!moderator) {
		return;
	}
	addLine(str);
	console.log(str);
}

function toggleAds(div) {
	loadMessage();
	var b1 = div[0].getBoundingClientRect();
	var b2 = mes2[0].getBoundingClientRect();
	var b3 = mes3[0].getBoundingClientRect();
	if (b1.left + b1.width >= b2.left) {
		$('#mes2').hide();
	}
	if (b1.left <= b3.left + b3.width) {
		$('#mes4').hide();
	}
}

function onScreen(obj) {
	var zoom = $('#content')[0].style.zoom;
	var bounds = obj.getBoundingClientRect();
	if (bounds.left >= 0
		&& bounds.top >= 0
			&& bounds.right * zoom <= window.innerWidth
				&& bounds.bottom * zoom <= window.innerHeight) {
					console.log('IS ON SCREEN');
					return true;
	}
	console.log('IS NOT SCREEN');
	return false;
}

function getChromeVersion() {     
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : false;
}

function FriendItem(data) {
	var obj = $('<div class="friend_item"></div>');
	var avatar = new Avatar(data);
	var username_txt = $('<span class="username_txt bisque selectable"></span>');
	username_txt.text(data.username);
	obj.append(avatar);
	obj.append(username_txt);
	return obj;
}

function Avatar(data) {
	if (data.p) {
		data.pic = data.p;
	}
	if (data.u) {
		data.username = data.u;
	}
	
	var avatar = $('<div class="avatar"></div>');
	if (data.pic) {
		avatar.data("pic", getAvatarStart(data.pic));
	}
	avatar.click(function(){
		loadProfile(data.username);
	});
	
	var frame = $('<img class="avatar_frame" src="' + IMAGES_START + 'svg/avatar_red.svg" />');
	if (data.username == username) {
		frame.attr("src", IMAGES_START + "svg/avatar_teal.svg");
	}
	
	var img = $('<img class="image" width="256" height="256" />');
	//img[0].onload = resizeAvatar;
	img[0].onload = function(){
		onLoad(img[0]);
	};
	if (data.delay || !data.pic) {
		img.attr("src", IMAGES_START + "loading.gif");
		avatar.data("started", false);
	}
	else {
		img.attr("src", getAvatarStart(data.pic));
		avatar.data("started", true);
	}
	
	avatar.append(frame);
	avatar.append(img);
	
	if (data.nsfw && !always_show_nsfw) {
			avatar.data("nsfw", true);
		var nsfw = $('<img class="nsfw" src="' + IMAGES_START + 'svg/avatar_nsfw.svg" />');
		avatar.append(nsfw);
	}
	
	if (img[0].complete) {
		onLoad(img[0]);
	}
	
	return avatar;
	
	function onLoad(img) {
		//var img = this;
		//img.style.height = "256px";
		img.style.height = "83.25%";
		img.style.clipPath = "unset";
		if (img.naturalHeight > img.naturalWidth && img.src.indexOf(".gif") < 0) {
			//console.log(img.naturalHeight + " / " + img.naturalWidth);
			//img.style.height = (img.naturalHeight / img.naturalWidth * 256) + "px";
			//var num = img.naturalHeight / img.naturalWidth;
			img.style.height = (((img.naturalHeight / img.naturalWidth * 256) / 256) * 83.25) + "%";
			//img.style.clipPath = "inset(0px 0px " + ~~(((img.naturalHeight / img.naturalWidth) - 1) * 256) + "px 0px round 5.85%)";
			//img.style.clipPath = "inset(0px 0px " + (((((img.naturalHeight / img.naturalWidth) - 1) * 256) / 256) * 83.25) + "% 0px round 5.85%)";
			//img.style.clipPath = "inset(0px 0px " + (-(100 - (num * 100))) + "% 0px round 5.85%)";
			img.style.clipPath = "inset(0px 0px " + (((1 - (img.naturalWidth / img.naturalHeight)) * 100) - 0.01) + "% 0px round 5.85%)";
		}
	}
}

//$('.profile_avatar').find('.image').eq(1).attr("src")
//resizeAvatar($('.profile_avatar'));
//var IMG = $('.profile_avatar').find('.image').eq(0)[0]
	/*function resizeAvatar(avatar) {
		var img = avatar.find('.image').eq(0)[0];
		console.log(resizeAvatar);
		console.log(img);
		if (img.naturalHeight > img.naturalWidth && img.src.indexOf(".gif") < 0) {
			console.log('yes');
			img.style.height = (img.naturalHeight / img.naturalWidth * 256) + "px";
		}
	}*/
	
	/*function resizeAvatar(avatar) {
		var img = avatar.find('.image').eq(0)[0];
		console.log(resizeAvatar);
		console.log(img);
		if (img.naturalHeight > img.naturalWidth && img.src.indexOf(".gif") < 0) {
			img.style.clipPath = "inset(0px 0px 272px 0px)";
		}
	}*/
	
/*function resizeAvatar() {
	var img = this;
	
	img.style.height = "272px";
	img.style.clipPath = "unset";
	
	if (img.naturalHeight > img.naturalWidth && img.src.indexOf(".gif") < 0) {
		img.style.height = (img.naturalHeight / img.naturalWidth * 256) + "px";
		img.style.clipPath = "inset(0px 0px " + ~~(((img.naturalHeight / img.naturalWidth) - 1) * 256) + "px 0px round 5.85%)";
	}
}*/

function getTimeAgo(then) {
	var difference = 0;
	if (typeof(then) == "string") {
		difference = new Date().getTime() - new Date(then).getTime();
	}
	else {
		difference = new Date().getTime() - then;
	}
	var ago = "";
	if (difference < 60000) {
		var seconds = Math.floor(difference / 1000);
		if (seconds == 1) {
			ago = seconds + " second ago";
		}
		else {
			if (seconds <= 0) {
				ago = "Just now";
			}
			else {
				ago = seconds + " seconds ago";
			}
		}
	}
	else if (difference < 3600000) {
		var minutes = Math.floor(difference / 60000);
		if (minutes == 1) {
			ago = minutes + " minute ago";
		}
		else {
			ago = minutes + " minutes ago";
		}
	}
	else if (difference < 86400000) {
		var hours = Math.floor(difference / 3600000);
		if (hours == 1) {
			ago = hours + " hour ago";
		}
		else {
			ago = hours + " hours ago";
		}
	}
	else if (difference < 604800000) {
		var days = Math.floor(difference / 86400000);
		if (days == 1) {
			ago += days + " day ago";
		}
		else {
			ago += days + " days ago";
		}
	}
	else if (difference < 2592000000) {
		var weeks = Math.floor(difference / 604800000);
		if (weeks == 1) {
			ago += weeks + " week ago";
		}
		else {
			ago += weeks + " weeks ago";
		}
	}
	else if (difference < 31536000000) {
		var months = Math.floor(difference / 2592000000);
		if (months == 1) {
			ago += months + " month ago";
		}
		else {
			ago += months + " months ago";
		}
	}
	else {
		var years = Math.floor(difference / 31536000000);
		if (years == 1) {
			ago += years + " year ago";
		}
		else {
			ago += years + " years ago";
		}
	}
	return ago;
}

function loadProfile() {
	
}

function watchDuelE() {
	
}

function dropPlayerE() {
	
}

function Bracket(data) {
	var bracket = $('<div class="bracket bracket' + data.id + '"></div>');
	bracket.data("id", data.id);
	bracket.data("round", data.round);
	bracket.contextmenu(dropPlayerE);
	
	var img = $('<img class="bracket_lines" src="' + IMAGES_START + 'svg/bracket0.svg" width="260" height="61" />');
	bracket.append(img);
	
	if (data.player1.username) {
		var friend_item = new FriendItem(data.player1);
		friend_item.addClass("player" + data.player1_id);
		friend_item.addClass("player1");
		if (data.player1.dropped) {
			friend_item.find('.username_txt').css("text-decoration", "line-through");
		}
		bracket.append(friend_item);
	}
	if (data.player2.username) {
		var friend_item = new FriendItem(data.player2);
		friend_item.addClass("player" + data.player2_id);
		friend_item.addClass("player2");
		friend_item.css("top", 50);
		if (data.player2.dropped) {
			friend_item.find('.username_txt').css("text-decoration", "line-through");
		}
		bracket.append(friend_item);
	}
	if (tourney_data.adjudicator || moderator >= 2) {
		var checkmark1 = $('<img class="checkmark checkmark1" src="' + IMAGES_START + 'checkmark.png" alt="Winner" />');
		
		//var checkmark2 = $('<img class="checkmark checkmark2" src="' + IMAGES_START + 'checkmark.png" alt="Winner" />');
		var checkmark2 = checkmark1.clone().removeClass("checkmark1").addClass("checkmark2")
		checkmark2.css("top", 43);
		
		checkmark1.mouseenter(checkmarkE);
		checkmark2.mouseenter(checkmarkE);
		$(bracket).mouseout(function(){
			checkmark1.css("opacity", 0);
			checkmark2.css("opacity", 0);
			bracket.find('.winner, .loser').show();
		});
		bracket.append(checkmark1);
		bracket.append(checkmark2);
	}
	
	var match_id_txt = $('<span class="match_id_txt selectable">' + data.id + '</span>');
	bracket.append(match_id_txt);
	
	var watch_duel_btn = $('<span class="watch_duel_btn">Watch Duel</span>');
	if (username) {
		watch_duel_btn.click(watchDuelE);
	}
	else {
		watch_duel_btn.text("Duel in progress...");
		watch_duel_btn.css("left", 109);
	}
	
	var replay_btn = $('<span class="replay_btn cyan"><a href="#" target="_blank">Replay</a></span>');
	
	bracket.append(watch_duel_btn);
	bracket.append(replay_btn);
	
	if (data.duel) {
		watch_duel_btn.data("id", data.duel);
		replay_btn.find('a').attr("href", URL_START + "replay?id=" + data.duel);
		replay_btn.css("display", "block");
	}
	if (data.active) {
		watch_duel_btn.css("display", "block");
		replay_btn.css("display", "none");
	}
	
	return bracket;
}

function checkmarkE() {
	if (!tourney_data.adjudicator) {
		return;
	}
	var bracket = $(this).parents('.bracket:first');
	if (bracket.find('.player1').length == 0 || bracket.find('.player2').length == 0) {
		$(this).css("cursor", "auto");
		return;
	}
	bracket.find('.checkmark1, .checkmark2').css("opacity", 0);
	bracket.find('.winner, .loser').hide();
	$(this).css("cursor", "pointer");
	$(this).css("opacity", 1);
}

function getBracketUsername(id) {
	for (var i = 0; i < tourney_data.participants.length; i++) {
		if (tourney_data.participants[i].id == id) {
			return tourney_data.participants[i].username;
		}
	}
	return "";
}

function getPlayerID(str) {
	for (var i = 0; i < tourney_data.participants.length; i++) {
		if (tourney_data.participants[i].username == str) {
			return tourney_data.participants[i].id;
		}
	}
}

function fillBrackets() {
	if (tourney_data.matches.length == 0) {
		return;
	}
	var current_div;
	var current_round = tourney_data.matches[0].round;
	var Y = 0;
	var INCREASE = 150; //var INCREASE = 100;
	var TOP = 75; //var TOP = 50;
	var BASE_ROUND = 1;
	var r1 = 0;
	var r2 = 0;
	for (var i = 0; i < tourney_data.matches.length; i++) {
		if (tourney_data.matches[i].round == 1) {
			r1++;
		}
		else if (tourney_data.matches[i].round == 2) {
			r2++;
		}
	}
	if (r2 > r1) {
		BASE_ROUND = 2;
	}
	for (var i = 0; i < tourney_data.matches.length; i++) {
		if (current_round < tourney_data.matches[i].round || !current_div) {
			Y = 0;
			current_round = tourney_data.matches[i].round;
			current_div = $('<div class="round"></div>');
			current_div.css("left", current_round * 380 - 380);
			if ($('.round:last').length > 0) {
				if (current_round > BASE_ROUND && tourney_data.format != "swiss") {
					current_div.css("top", parseInt($('.round:last').css("top")) + TOP);
					if (r1 % 2 == 0 && BASE_ROUND == 1 || r2 % 2 == 0 && BASE_ROUND == 2) {
						if (tourney_data.format != "swiss") {
							TOP *= 2;
							INCREASE *= 2;
						}
					}
				}
			}
			$('#pairings').append(current_div);
		}
		var bracket = new Bracket(tourney_data.matches[i]);
		bracket.addClass("match" + tourney_data.matches[i].id);
		bracket.addClass("round" + current_round);
		bracket.css("top", Y);
		current_div.append(bracket);
		showWinner(tourney_data.matches[i]);
		if (BASE_ROUND == 2 && tourney_data.matches[i].player2_prereq_match_id) {
		//if (tourney_data.matches[i].player2_prereq_match_id) {
			$('.round1.match' + tourney_data.matches[i].player2_prereq_match_id).css("top", parseInt(bracket.css("top")) + 75); //$('.round1.match' + tourney_data.matches[i].player2_prereq_match_id).css("top", parseInt(bracket.css("top")) + 25);
		}
		Y += INCREASE;
	}
}

function showWinner(data) {
	var div = $('.match' + data.id);
	div.find('.winner').detach();
	div.find('.loser').detach();
	if (data.winner) {
		var checkmark = $('<img class="checkmark winner" src="' + IMAGES_START + 'checkmark.png" alt="Winner" />');
		var xmark = $('<img class="xmark loser" src="' + IMAGES_START + 'xmark.png" alt="Loser" />');
		
		if (data.winner == div.find('.player1 .username_txt').text()) {
			//checkmark.css("top", 0);
			checkmark.css("top", -7);
			xmark.css("top", 57);
		}
		else {
			//checkmark.css("top", 50);
			checkmark.css("top", 43);
			xmark.css("top", 7);
		}
		div.append(checkmark);
		div.append(xmark);
	}
}

function updateWinnerResponse(data) {
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	hideDim(); // eh
	for (var i = 0; i < tourney_data.matches.length; i++) {
		if (tourney_data.matches[i].id == data.match) {
			tourney_data.matches[i].winner = null;
			if (data.action == "Mark winner") {
				tourney_data.matches[i].winner = data.username;
			}
			showWinner(tourney_data.matches[i]);
			
			var next = 0;
			var position = 0;
			/*for (var obj of tourney_data.matches) {
				if (obj.player1_prereq_match_id == data.match) {
					next = obj.id;
					break;
				}
				else if (obj.player2_prereq_match_id == data.match) {
					next = obj.id;
					position = 1;
					break;
				}
			}*/
			for (var j = 0; j < tourney_data.matches.length; j++) {
				var obj = tourney_data.matches[j];
				if (obj.player1_prereq_match_id == data.match) {
					next = obj.id;
					break;
				}
				else if (obj.player2_prereq_match_id == data.match) {
					next = obj.id;
					position = 1;
					break;
				}
			}
			if (next) {
				var friend_item = $('.bracket' + data.match + ' .player' + getPlayerID(data.username)).clone(true);
				friend_item.removeClass("player1");
				friend_item.removeClass("player2");
				friend_item.addClass("player" + (position + 1));
				friend_item.css("top", 50 * position);
				
				//console.log('setting ' + data.username + ' as ' + "player" + (position + 1));
				
				$('.bracket' + next + ' .player' + (position + 1)).detach();
				if (data.local || data.action != "Mark winner") {
					return;
				}
				$('.bracket' + next).append(friend_item);
				TweenMax.fromTo(friend_item, 1, {"left":600, "alpha":0}, {"left":0, "alpha":1, "ease":Expo.easeInOut});
			}
			break;
		}
	}
	//$('.end_tourney_btn').disable(!canEndTourney());
}

function hideCreateTourney() {
	$('#tournaments #create_tourney').hide();
}

function viewTourneyResponse(data) {
	if (duelId) {
		//return;
	}
	if (!selectedTourney || selectedTourney.data("id") != data.id) {
		return;
	}
	if (currentLabel != "tournaments") {
		goto('tournaments'); // helps with notificationClick
		$('#tournaments .back_btn').hide();
	}
	else {
		$('#tournaments .back_btn').show();
	}
	
	
	if (moderator) {
		//data.adjudicator = 2;
	}
	
	$('#tournaments .subtitle').text("");
	$('#tournaments .create_tourney_btn').hide();
	selectedTourney = new Tournament(data);
	selectedTourney.data("id", data.id);
	hideCreateTourney();
	// when a global viewTourneyResponse is sent to the organizer, this is a way to keep his adjudicator status
	$('.adjudicators_list:visible .friend_item').each(function(i,e){
		if ($(this).text() == username) {
			if (i == 0) {
				data.adjudicator = 2;
			}
			else {
				data.adjudicator = 1;
			}
		}
	});
	tourney_data = data;
	showTournament();
}

function showTournament() {
	if (!tourney_ready || !tourney_data) {
		return;
	}
	hideDim();
	$('#tournaments .period_sel').hide();
	var Y = 40;
	selectedTourney.css("top", Y);
		// when editing a tournament, the following block helps render the new data correctly, without losing proxies, and data
		selectedTourney.detach();
		accept_members.detach();
		$('#tournaments .content:first').html("");
	$('#tournaments .content:first').append(selectedTourney);
	selectedTourney.find('.name_txt').text(tourney_data.name);
	selectedTourney.find('.desc_txt').html(escapeHTMLWithLinks(tourney_data.description, true));
	Y += selectedTourney[0].scrollHeight + 20;
	selectedTourney.find('.desc_txt').append('<br><br>');
	selectedTourney.find('.desc_txt').append('<font color="#777777">Format: </font>' + upperCamelCase(tourney_data.format));
	selectedTourney.find('.desc_txt').append('<br>');
	selectedTourney.find('.desc_txt').append('<font color="#777777">Match Type: </font>' + spellFormat(tourney_data.match_type));
	Y += 54;
	if (tourney_data.banlist) {
		selectedTourney.find('.desc_txt').append('<br>');
		selectedTourney.find('.desc_txt').append('<font color="#777777">Banlist: </font>' + escapeHTMLWithLinks(URL_START + "banlist?id=" + tourney_data.banlist));
		Y += 27
	}
	
	setText(selectedTourney.find('.progress_txt'));
	
	selectedTourney.find('.members_txt').show();
	
	var join_tourney_btn = $('<input type="submit" class="join_tourney_btn" value="Join Tournament" />');
	join_tourney_btn.click(joinTourneyE);
	join_tourney_btn.css("left", 55);
	join_tourney_btn.css("top", Y);
	if (username) {
		$('#tournaments .content:first').append(join_tourney_btn);
		changeButton(join_tourney_btn);
		join_tourney_btn.disable(tourney_data.started);
	}
	if (tourney_data.joined) {
		join_tourney_btn.val("Leave Tournament");
	}
	//if (tourney_data.adjudicator == 2 || moderator >= 2 || admin_status >= 3) {
	if (tourney_data.adjudicator == 2) {
		join_tourney_btn.hide();
		
		var start_tourney_btn = $('<input type="submit" class="start_tourney_btn" value="Start Tourney" />');
		start_tourney_btn.click(startTourneyE);
		start_tourney_btn.css("left", 55);
		//Y = parseInt(accept_members.css("top")) + accept_members.height() + 25;
		start_tourney_btn.css("top", Y);
		$('#tournaments .content:first').append(start_tourney_btn);
		changeButton(start_tourney_btn);
		start_tourney_btn.setWidth(100);
		start_tourney_btn.disable(tourney_data.started);
		
		var edit_tourney_btn = $('<input type="submit" class="edit_tourney_btn" value="Edit Tourney" />');
		edit_tourney_btn.click(editTourneyE);
		edit_tourney_btn.css("left", 165);
		edit_tourney_btn.css("top", Y);
		$('#tournaments .content:first').append(edit_tourney_btn);
		changeButton(edit_tourney_btn);
		
		var reset_tourney_btn = $('<input type="submit" class="reset_tourney_btn" value="Suspend Tourney" />');
		reset_tourney_btn.click(resetTourneyE);
		//reset_tourney_btn.css("left", 549);
		reset_tourney_btn.css("left", 539);
		reset_tourney_btn.css("top", Y);
		$('#tournaments .content:first').append(reset_tourney_btn);
		changeButton(reset_tourney_btn);
		reset_tourney_btn.setWidth(108);
		
		var end_tourney_btn = $('<input type="submit" class="end_tourney_btn" value="End Tourney" />');
		end_tourney_btn.click(endTourneyE);
		end_tourney_btn.css("left", 55);
		end_tourney_btn.css("top", Y);
		$('#tournaments .content:first').append(end_tourney_btn);
		changeButton(end_tourney_btn);
		
		if (tourney_data.started) {
			start_tourney_btn.hide();
		}
		else {
			end_tourney_btn.hide();
		}
		if (tourney_data.ended || !tourney_data.started) {
			end_tourney_btn.disable(true);
		}
	}
	var link = $('<div class="tourney_link size18 cyan"></div>');
	link.css("left", 55);
	$('#tournaments .content:first').append(link);
	if (username) {
		Y += 40;
		link.append(escapeHTMLWithLinks(URL_START + "tourney?id=" + tourney_data.id, true));
	}
	else {
		if (!tourney_data.started) {
			Y += 65;
			//selectedTourney.find('.desc_txt').append('<br><br><br><font style="font-family: Arial; font-style: italic;">To join this tourney, click the <b>Tournaments</b> button on <u><a href="https://www.duelingbook.com/" target="_blank">duelingbook.com</a></u><br> and find the tourney there with the same name.</font>');
			selectedTourney.find('.desc_txt').append('<br><br><font style="font-family: Arial; font-style: italic;">To join this tourney, click the <font style="font-family: Arial Black; font-style: normal;">Tournaments</font> button on <u><a href="https://www.duelingbook.com/" target="_blank">duelingbook.com</a></u><br> and find the tourney there with the same name.</font>');
		}
		else {
			//Y += 65;
			link.append(escapeHTMLWithLinks("https://challonge.com/" + tourney_data.url));
			link.css("font-size", 14);
		}
	}
	link.css("top", Y);
	$('#tournaments .content:first').append(accept_members);
	accept_members.find('.joinlist .cell').detach();
	accept_members.css("top", Y + 55);
	accept_members.find('.accept_btn').disable(true);
	accept_members.find('.reject_btn').disable(true);
	accept_members.find('.check_btn').disable(true);
	$('#tournaments .content:first').append(tourney_members);
	tourney_members.css("top", Y - 10);
	tourney_members.find('.members_list').find('.friend_item').detach();
	tourney_members.find('.adjudicators_list').find('.friend_item').detach();
	tourney_members.find('.expand_btn').hide();
	for (var i = 0; i < tourney_data.adjudicators.length; i++) {
		var participant = new FriendItem(tourney_data.adjudicators[i]);
		participant.contextmenu(removePlayerE);
		tourney_members.find('.adjudicators_list').append(participant);
		setText(participant.find('.username_txt'));
	}
	tourney_members.show();
	tourney_members.find('.title_txt').hide();
	if (!tourney_data.started) {
		tourney_members.find('.title_txt').show();
		for (var i = 0; i < tourney_data.participants.length; i++) {
			var participant = new FriendItem(tourney_data.participants[i]);
			participant.contextmenu(removePlayerE);
			tourney_members.find('.members_list').append(participant);
			setText(participant.find('.username_txt'));
		}
	}
	tourney_members.off("contextmenu");
	tourney_members.find('.adjudicators_txt').css("transform", "scaleX(0.9)");
	Y += tourney_members[0].scrollHeight;
	if (tourney_data.adjudicator == 2) {
		tourney_members.find('.adjudicators_txt').css("transform", "scaleX(0.8)");
		tourney_members.find('.adjudicators_list').find('.expand_btn').show();
		addButton(tourney_members.find('.adjudicators_list').find('.expand_btn'), addAdjudicatorE);
		if (!tourney_data.started) {
			tourney_members.find('.members_list').find('.expand_btn').show();
			addButton(tourney_members.find('.members_list').find('.expand_btn'), addPlayerE);
		}
	}
	accept_members.hide();
	if (tourney_data.adjudicator && !tourney_data.started) {
		accept_members.show();
		for (var i = 0; i < tourney_data.joiners.length; i++) {
			addMemberCell(tourney_data.joiners[i].username);
		}
	}
	if (tourney_data.started || !username) {
		$('#tournaments .subtitle').text(tourney_data.name);
	}
	if (tourney_data.started) {
		pairings.html("");
		pairings.css("top", Y);
		pairings.css("height", 0);
		$('#tournaments .content:first').append(pairings);
		fillBrackets();
		$('.checkmark1, .checkmark2').click(updateWinnerE);
		pairings.css("transform", "none");
		pairings.css("height", pairings[0].scrollHeight);
		var scale = pairings.width() / (pairings[0].scrollWidth + 15);
		pairings.css("transform", "scale(" + scale + ")");
		Y += pairings[0].scrollHeight * scale + 20;
		standings.css("top", Y);
		$('#tournaments .content:first').append(standings);
		standings.find('.standing').detach();
		updateScores();
		setTimeout(function(){
			var vsp = parseInt($('#pairings').css("top")) - 23;
			tweenScrollbar($('#tournaments .content:first'), 0.3, {scrollTop:vsp, ease:Expo.easeInOut});
		}, 5);
	}
	
	setTimeout(function(){
		$('.friend_item .username_txt').each(function(){
			setText($(this));
		});
	}, 10);
	
	updateTourneySeconds();
}

function updateScores() {
	tourney_data.participants.sort(sortScore);
	for (var i = 0; i < tourney_data.participants.length; i++) {
		var standing = new Standing(tourney_data.participants[i], i + 1);
		standing.css("top", i * 50);
		standings.find('.players').append(standing);
		setText(standing.find('.username_txt'));
	}
	standings.css("height", 0);
	standings.css("height", standings[0].scrollHeight);
}

function Tournament(data) {
	var tourney = $('<div class="tourney"></div>');
	tourney.data("id", data.id);
	tourney.data("priority", data.priority);
		//tourney.data("total", data.total);
		//tourney.data("max", data.max);
	
	var avatar = new Avatar(data);
	avatar.off("click");
	avatar.click(tourneyClickE);
	avatar.find('.avatar_frame').css("filter", "saturate(0)");
	avatar.find('.nsfw').detach();
	if (data.image) {
		avatar.find('.image').attr("src", IMAGES_START + "tourneys/" + data.id + ".jpg?v=" + data.image);
	}
	else if (!data.automatic) {
		avatar.find('.image').attr("src", IMAGES_START + "swords.jpg");
	}
	avatar.contextmenu(rankTourneyE);
	
	var name_txt = $('<span class="name_txt selectable size24"></span>');
	name_txt.text(data.name);
	name_txt.click(tourneyClickE);
	
	var hosted_by_txt = $('<div class="hosted_by_txt arial_rounded18"></div>');
	hosted_by_txt.html('by <font color="#FFFFCC">' + escapeHTML(data.username) + '</font>');
	
	var date_txt = $('<div class="date_txt arial_rounded18"></div>');
	if (data.started) {
		//date_txt.text("Started " + data.start_date);		
			var timestamp = new Date();
			timestamp.setSeconds(timestamp.getSeconds() - ~~data.started_at);
			tourney.data("started_timestamp", timestamp);
	}
	//else if (data.starts_at) {
	else if (data.starts_at) {
		//date_txt.text("Starts in " + data.starts_at);
		//if (parseInt(data.starts_at) <= 5 && data.starts_at.includes("minute") || data.starts_at.includes("second")) {
		//	date_txt.css("color", "yellow");
		//}
			var timestamp = new Date();
			timestamp.setSeconds(timestamp.getSeconds() - ~~data.starts_at);
			tourney.data("starts_at_timestamp", timestamp);
	}
	
	else if (data.signups_at) {
			var timestamp = new Date();
			timestamp.setSeconds(timestamp.getSeconds() - ~~data.signups_at);
			tourney.data("starts_at_timestamp", timestamp);
	}
	
	else {
		date_txt.text("Created " + data.date);
	}
	
	var members_txt = $('<div class="members_txt arial_rounded18"></div>');
	updateMemberTotal(data, members_txt);
	
	var progress_txt = $('<div class="progress_txt arial_rounded18"></div>');
	if (data.ended) {
		//progress_txt.text("Ended " + data.end_date);
		progress_txt.css("color", "#777777");
			var timestamp = new Date();
			timestamp.setSeconds(timestamp.getSeconds() - ~~data.ended_at);
			tourney.data("ended_timestamp", timestamp);
	}
	else if (data.started) {
		progress_txt.text("In progress...");
		progress_txt.css("color", "#00BB00");
	}
	//else if (data.signups_at) {
	else if (data.signups_at) {
		//progress_txt.text("Signups start in " + data.signups_at);
		progress_txt.text(" "); // this is needed in order for elements to be positioned properly
		progress_txt.css("color", "#777777");
		members_txt.hide();
			var timestamp = new Date();
			timestamp.setSeconds(timestamp.getSeconds() - ~~data.signups_at);
			tourney.data("signups_at_timestamp", timestamp);
	}
	else {
		members_txt.css("top", 55);
	}
	
	var desc_txt = $('<div class="desc_txt size18 cyan selectable"></div>');
	desc_txt.html(escapeHTMLWithLinks(data.desc, true));
	
	/*
				var timestamp = new Date();
				timestamp.setSeconds(timestamp.getSeconds() - ~~data[i].s);
				status.data("timestamp", timestamp);
	*/
	
	
	
	
	
	tourney.append(avatar);
	tourney.append(name_txt);
	tourney.append(hosted_by_txt);
	tourney.append(date_txt);
	tourney.append(progress_txt);
	tourney.append(desc_txt);
	tourney.append(members_txt);
	
	return tourney;
}

function updateTourneySeconds() {
	$('.tourney').each(function(i,e){
		if ($(this).data("started_timestamp")) {
			$(this).find('.date_txt').text("Started " + getTimeAgo($(this).data("started_timestamp").getTime()));
		}
		else if ($(this).data("starts_at_timestamp")) {
			$(this).find('.date_txt').text("Starts in " + getTimeAgo($(this).data("starts_at_timestamp").getTime()).replace(" ago", ""));
			if (parseInt($(this).find('.date_txt').text()) <= 5 && $(this).find('.date_txt').text().includes("minute") || $(this).find('.date_txt').text().includes("second")) {
				date_txt.css("color", "yellow");
			}
		}
		if ($(this).data("ended_timestamp")) {
			$(this).find('.progress_txt').text("Ended " + getTimeAgo($(this).data("ended_timestamp").getTime()));
		}
		else if ($(this).data("signups_at_timestamp")) {
			$(this).find('.progress_txt').text("Signups start in " + getTimeAgo($(this).data("signups_at_timestamp").getTime()).replace(" ago", ""));
		}
	});
}

function Standing(data, rank) {
	var standing = $('<div class="standing"></div>');
	standing.data("wins", data.wins);
	standing.data("losses", data.losses);
	//standing.data("total", data.wins + data.losses);
	
	var rank_txt = $('<span class="rank_txt"></span>');
	rank_txt.text(rank);
	
	var avatar = new Avatar(data);
	
	var username_txt = $('<span class="username_txt bisque selectable"></span>');
	username_txt.text(data.username);
	if (data.dropped) {
		username_txt.css("text-decoration", "line-through");
	}
	
	var score_txt = $('<span class="score_txt"></span>');
	score_txt.text(data.wins + "-" + data.losses);
	
	standing.append(rank_txt);
	standing.append(avatar);
	standing.append(username_txt);
	standing.append(score_txt);
	return standing;
}

/*function sortScore(a, b) {
	if (a.total > b.total) {
		return -1;
	}
	if (a.total < b.total) {
		return 1;
	}
	if (a.wins > b.wins) {
		return -1;
	}
	if (a.wins < b.wins) {
		return 1;
	}
	if (a.wins == b.wins && a.wins + a.losses > b.wins + b.losses) {
		return -1;
	}
	if (a.wins == b.wins && a.wins + a.losses < b.wins + b.losses) {
		return 1;
	}
	if (a.losses < b.losses) {
		return -1;
	}
	if (a.losses > b.losses) {
		return 1;
	}
	return 0;
}*/

function sortScore(a, b) {
	if (a.wins > b.wins) {
		return -1;
	}
	if (a.wins < b.wins) {
		return 1;
	}
	if (a.losses < b.losses) {
		return -1;
	}
	if (a.losses > b.losses) {
		return 1;
	}
	if (a.points > b.points) {
		return -1;
	}
	if (a.points < b.points) {
		return 1;
	}
	return 0;
}

function rankTourneyE() {
	if (!moderator) {
		return true;
	}
	var tourney = $(this).parent();
	//var arr = ["0", "1", "2", "3"];
	var arr = ["3", "2", "1", "0"];
	getComboBox("Rank Tourney", "Select the priority for this tourney: ", arr, arr.indexOf(tourney.data("priority").toString()), function(){
		Send({"action":"Rank tourney", "tourney":~~tourney.data("id"), "rank":~~$('#combo .combo_cb').val()});
		showDim();
	});
	showDim();
	return false;
}

function canEndTourney() {
	if (tourney_data.ended) {
		return false;
	}
	if (!tourney_data.started) {
		return false;
	}
	if (tourney_data.matches.length == 0) {
		return false;
	}
	for (var i = 0; i < tourney_data.matches.length; i++) {
		if (tourney_data.matches[i].winner == null) {
			return false;
		}
	}
	return true;
}

function addAdjudicatorE() {
	
}

function addPlayerE() {
	
}

function removePlayerE() {
	
}

function startTourneyDuelResponse(data) {
	if (duelist && data.duel == duelId && data.automatic) {
		automaticTourney = true;
		$('#call_admin_btn').disable(false);
	}
	if (!selectedTourney || selectedTourney.data("id") != data.id) {
		return;
	}
	$('.bracket' + data.match).find('.replay_btn').hide();
	$('.bracket' + data.match).find('.watch_duel_btn').data("id", data.duel);
	$('.bracket' + data.match).find('.watch_duel_btn').show();
}

function endTourneyDuelResponse(data) {
	if (!selectedTourney || selectedTourney.data("id") != data.id) {
		return;
	}
	$('.bracket' + data.match).find('.replay_btn a').attr("href", URL_START + "replay?id=" + data.duel);
	$('.bracket' + data.match).find('.replay_btn').show();
	$('.bracket' + data.match).find('.watch_duel_btn').hide();
}

/*function leaveTourneyResponse(data) {
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	$('#accept_members .joinlist .cell2').filter(function() {
		return $(this).text() === data.username;
	}).detach();
	$('#tourney_members .friend_item').filter(function() {
		return $(this).text() === data.username;
	}).each(function(){
		var friend_item = $(this);
		TweenMax.to(friend_item, 0.5, {"opacity":0, "onComplete":function(){
			friend_item.detach();
		}});
		tourney_data.total--;
		updateMemberTotal(tourney_data);
	});	
}*/

function leaveTourneyResponse(data) {
	updateMemberTotal(data);
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	$('#accept_members .joinlist .cell2').filter(function() {
		return $(this).text() === data.username;
	}).detach();
	$('#tourney_members .friend_item').filter(function() {
		return $(this).text() === data.username;
	}).each(function(){
		var friend_item = $(this);
		TweenMax.to(friend_item, 0.5, {"opacity":0, "onComplete":function(){
			friend_item.detach();
		}});
		tourney_data.total--;
	});	
}

/*function acceptMemberResponse(data) {
	if (data.username == username && data.approved) {
		var notification = new Notification();
		notification.data("callback", function(){
			gotoPairings(data);
		});
		notification.setupAccepted(data.name);
		addToNotifications(notification, true);
	}
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	tourneys_data = null;
	$('#accept_members .joinlist .cell2').filter(function() {
		return $(this).text() === data.username;
	}).detach();
	if (tourney_members.find('.friend_item').filter(function() {
		return $(this).text() === data.username;
	}).length > 0) {
		return;
	}
	if (data.username == username) {
		$('#tournaments .join_tourney_btn').val("Leave Tournament"); // added 9/1/21
	}
	var member = new FriendItem(data);
	member.contextmenu(removePlayerE);
	//var Y = parseInt(tourney_members.find('.members_list .friend_item:last').css("top")) + 50;
	//member.css("top", Y);
	tourney_members.find('.members_list').append(member);
	setText(member.find('.username_txt'));
	TweenMax.fromTo(member, 1, {"left":600, "alpha":0}, {"left":0, "alpha":1, "ease":Expo.easeInOut});
	tourney_data.total++;
	updateMemberTotal(tourney_data);
}*/

function acceptMemberResponse(data) {
	if (data.username == username && data.approved) {
		var notification = new Notification();
		notification.data("callback", function(){
			gotoPairings(data);
		});
		notification.setupAccepted(data.name);
		addToNotifications(notification, true);
	}
	tourneys_data = null;
	updateMemberTotal(data);
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	$('#accept_members .joinlist .cell2').filter(function() {
		return $(this).text() === data.username;
	}).detach();
	if (tourney_members.find('.friend_item').filter(function() {
		return $(this).text() === data.username;
	}).length > 0) {
		return;
	}
	if (data.username == username) {
		$('#tournaments .join_tourney_btn').val("Leave Tournament"); // added 9/1/21
	}
	var member = new FriendItem(data);
	member.contextmenu(removePlayerE);
	//var Y = parseInt(tourney_members.find('.members_list .friend_item:last').css("top")) + 50;
	//member.css("top", Y);
	tourney_members.find('.members_list').append(member);
	setText(member.find('.username_txt'));
	TweenMax.fromTo(member, 1, {"left":600, "alpha":0}, {"left":0, "alpha":1, "ease":Expo.easeInOut});
	tourney_data.total++;
}

function addAdjudicatorResponse(data) {
	/*if (data.username == username) {
		var notification = new Notification();
		notification.data("callback", function(){
			gotoPairings(data);
		});
		notification.setupAccepted(data.name);
		addToNotifications(notification, true);
	}*/
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	//tourneys_data = null;
	if (tourney_members.find('.friend_item').filter(function() {
		return $(this).text() === data.username;
	}).length > 0) {
		return;
	}
	var member = new FriendItem(data);
	member.contextmenu(removePlayerE);
	tourney_members.find('.adjudicators_list').append(member);
	setText(member.find('.username_txt'));
	TweenMax.fromTo(member, 1, {"left":600, "alpha":0}, {"left":0, "alpha":1, "ease":Expo.easeInOut});
}

/*function removePlayerResponse(data) {
	if (data.username == username && !data.adjudicator) {
		var notification = new Notification();
		notification.data("callback", function(){
			gotoPairings(data);
		});
		notification.setupRemoved(data.name);
		addToNotifications(notification, true);
	}
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	if (data.username == username) {
		$('#tournaments .join_tourney_btn').val("Join Tournament");
	}
	tourneys_data = null;
	hideDim(); // eh
	$('#tourney_members .friend_item').filter(function() {
		return $(this).text() === data.username;
	}).each(function(){
		var friend_item = $(this);
		TweenMax.to(friend_item, 0.5, {"opacity":0, "onComplete":function(){
			friend_item.detach();
		}});
		if ($(this).parents('.adjudicators_list').length == 0) {
			tourney_data.total--;
			updateMemberTotal(tourney_data);
		}
	});
	
	
	
	pairings.find('.username_txt').filter(function() {
		return $(this).text() === data.username;
	}).each(function(){
		$(this).css("text-decoration", "line-through");
	});
}*/

function removePlayerResponse(data) {
	if (data.username == username && !data.adjudicator) {
		var notification = new Notification();
		notification.data("callback", function(){
			gotoPairings(data);
		});
		notification.setupRemoved(data.name);
		addToNotifications(notification, true);
	}
	tourneys_data = null;
	updateMemberTotal(data);
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	if (data.username == username) {
		$('#tournaments .join_tourney_btn').val("Join Tournament");
	}
	tourneys_data = null;
	hideDim(); // eh
	$('#tourney_members .friend_item').filter(function() {
		return $(this).text() === data.username;
	}).each(function(){
		var friend_item = $(this);
		TweenMax.to(friend_item, 0.5, {"opacity":0, "onComplete":function(){
			friend_item.detach();
		}});
		if ($(this).parents('.adjudicators_list').length == 0) {
			tourney_data.total--;
		}
	});
	pairings.find('.username_txt').filter(function() {
		return $(this).text() === data.username;
	}).each(function(){
		$(this).css("text-decoration", "line-through");
	});
}

function updateMemberTotal(data, div) {
	if (!div) {
		div = $('.tourney').filter(function() {
			return $(this).data("id") === data.id;
		}).find('.members_txt');
	}
	var str = data.total;
	if (data.max) {
		str += "/" + data.max
	}
	str += " players";
	div.text(str);
	div.css("color", "#FF8800");
	if (data.total >= data.max && data.max) {
		div.css("color", "#00CC00");
	}
}

function gotoPairings(data) {
	window.open(URL_START + "tourney?id=" + data.id);
}

function spellFormat(str) {
	switch(str) {
		case "m":
			return "Matches";
		default:
			return "Singles";
	}
}

function fixCardData(data) {
	if (data.n) {
		data.name = data.n;
		if (data.ta) {
			data.treated_as = data.ta;
		}
		else {
			data.treated_as = data.n;
		}
		if (data.e) {
			data.effect = data.e;
		}
		if (data.c) {
			data.card_type = data.c;
		}
		if (data.mc) {
			data.monster_color = data.mc;
			if (data.ie == null) {
				data.is_effect = 1;
			}
			data.attribute = data.att;
			data.level = data.lvl;
			if (data.abi) {
				data.ability = data.abi;
			}
			data.flip = parseInt(data.flp);
			data.pendulum = parseInt(data.p);
			if (data.pef) {
				data.pendulum_effect = data.pef;
				data.pendulum_effect_lowercase = normalize(data.pef);
			}
			//data.scale_left = parseInt(data.scl);
			data.scale = parseInt(data.scl);
			if (data.arr) {
				data.arrows = data.arr;
			}
		}
		else {
			data.monster_color = "";
		}
		if (data.typ) {
			data.type = data.typ;
		}
		if (data.tcgl != null) {
			data.tcg_limit = data.tcgl;
		}
		if (data.ocgl != null) {
			data.ocg_limit = data.ocgl;
		}
		if (data.tcg_limit == null && data.tcgl == null) {
			data.tcg_limit = 3;
		}
		if (data.ocg_limit == null && data.ocgl == null) {
			data.ocg_limit = 3;
		}
		if (data.s) {
			data.serial_number = String(data.s);
		}
		if (data.tcg == null) {
			data.tcg = 1;
		}
		if (data.ocg == null) {
			data.ocg = 1;
		}
		if (data.pic == null) {
			data.pic = "1";
		}
		if (data.h != null) {
			data.hidden = 1;
		}
		if (data.d) {
			data.date = data.d;
		}
		if (data.u) {
			data.updated = data.u;
		}
		delete data.n;
		delete data.ta;
		delete data.e;
		delete data.c;
		delete data.mc;
		delete data.ie;
		delete data.att;
		delete data.lvl;
		delete data.abi;
		delete data.flp;
		delete data.p;
		delete data.pef;
		delete data.scl;
		delete data.arr;				
		delete data.typ;
		delete data.tcgl;
		delete data.ocgl;
		delete data.s;
		delete data.d;
		delete data.u;
	}
	data.name_lowercase = normalize(data.name);
	data.effect_lowercase = normalize(data.effect);
}

function normalize(str) {
	if (str.normalize) {
		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
	}
	return str.toLowerCase();
}

function isIn(card, arr) {
	for (var i = 0; i < arr.length; i++) {
		//if (arr[i][0] == card[0]) {
		if (arr[i][0] == card[0] || arr[i].data("id") == card.data("id")) { // changed to accomodate for viewing selections (different cards, same ids)
			return i;
		}
	}
	return -1;
}

function restrictInt(obj) {
	obj.attr("pattern", "[0-9]+");
	obj.on('input', function() {
		this.value = this.value.replace(/[^0-9]/g, '');
	});
}

/*function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}*/

function getCookie(name) {
	var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	if (match) {
		return unescape(match[2]);
	}
}

function removeCardMenu() {
	
}

function addIfNotExists(arr, obj) {
	if (!arr.includes(obj)) {
		arr.push(obj);
	}
}

function stopGif(i) {
	if (!remote || i.getAttribute("src").indexOf(".gif") < 0) { // can't test locally because of a security error
		return;
	}
	var internval = setInterval(function(){
		if (i.complete) {
			clearInterval(internval);
			var c = document.createElement('canvas');
			var w = c.width = i.width;
			var h = c.height = i.height;
			c.getContext('2d').drawImage(i, 0, 0, w, h);
			try {
				i.src = c.toDataURL("image/gif"); // if possible, retain all css aspects
			} 
			catch(e) { // cross-domain -- mimic original with all its tag attributes
				console.log(e);
				
				// i think that because images are now on images.duelingbook.com, that's why there is a security error
				
				//console.log(e.message);
				//console.log(i.src);
				//for (var j = 0, a; a = i.attributes[j]; j++) {
				//	c.setAttribute(a.name, a.value);
				//}
				//i.parentNode.replaceChild(c, i);
			}
		}
	}, 100);
}

function foundStatus(id) {
	for (var i = 0; i < statuses_data.length; i++) {
		if (statuses_data[i].id == id) {
			return true;
		}
	}
	return false;
}

/*

function get_cookie(name){
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

function delete_cookie( name, path, domain ) {
  if( get_cookie( name ) ) {
    document.cookie = name + "=" +
      ((path) ? ";path="+path:"")+
      ((domain)?";domain="+domain:"") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}

delete_cookie("_gat", "/", ".duelingbook.com");
delete_cookie("_gat", "/", "duelingbook.com");
*/