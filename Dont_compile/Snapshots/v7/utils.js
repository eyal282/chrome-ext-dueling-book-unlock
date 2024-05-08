"use strict";

var MAC = window.navigator.platform.indexOf("Mac") >= 0;
var PC = window.navigator.platform.indexOf("Win") >= 0;
var OPERA = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var FIREFOX = typeof InstallTrigger !== 'undefined';
var SAFARI = !!(navigator.userAgent.indexOf("Safari") >= 0);
var IE = /*@cc_on!@*/false || !!document.documentMode;
var EDGE = !IE && !!window.StyleMedia;var CHROME = !!(navigator.userAgent.indexOf("Chrome") >= 0);
var BLINK = (CHROME || OPERA) && !!window.CSS;
var TOR = navigator.plugins.length == 0 && new Date().getTimezoneOffset() == 0;
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
var swfHeight = 640;
var swfWidth = 1024;

//var URL_START = 'https://www.duelingbook.com/simulator/';
var URL_START = 'https://simulator.duelingbook.com/';
//var IMAGES_START = './images/';
//var IMAGES_START = URL_START + 'images/';
//var IMAGES_START = 'https://simulator.duelingbook.com/images/';
var IMAGES_START = 'https://www.duelingbook.com/simulator/images/';
var CARD_START = IMAGES_START + 'card/';
var CARDS_START = IMAGES_START + 'cards/';
//var CARD_IMAGES_START = URL_START + IMAGES_START + 'card-pics/';
var CARD_IMAGES_START = IMAGES_START + 'card-pics/';
var SOFT_PLAYS = ["Target card", "Permission event", "Permission denied", "Pause game", "Resume game", "Add watcher", "Remove watcher", "Duel message", "Watcher message", "Call admin", "Cancel call", "Offer draw", "Revoke draw", "Offer rematch", "Revoke rematch", "Typing"];

var active = false;
var active_scrollpane;
var admin = 0;
var alignLeft = window.location.href.indexOf("align=l") >= 0;
var alignRight = window.location.href.indexOf("align=r") >= 0;
var combo_callback;
var contentScale = 1;
var controlDown = false;
var controlFocus;
var currentLabel = "";
var dragXOffset;
var dragYOffset;
var duelId = 0;
var duelist = false;
var input_callback;
var input_cancel_callback;
var marginLeft = 0;
var marginTop = 0;
var mouseX = 0;
var mouseXScaled = 0;
var mouseY = 0;
var mouseYScaled = 0;
var msg_callback;
var no_callback;
var password;
var prevFocus;
var preview;
var preview_vsp = 0;
var preview_txt = $('#preview_txt');
var shiftDown = false;
var userId = 0;
var username;
var yes_callback;
var zooming = false;

var dimTimer = new Timer(4000);
	dimTimer.callback = abortDim;
var mouseMoveTimer = new Timer(42);
	mouseMoveTimer.callback = removeMouseMove;

var awaiting_cards = false;
var cardsInMain = 0;
var deck_arr = [];
var deck_filled_arr = [];
var deckCardX = 0;
var deckCardY = 0;
var draggedCard = new CardFront();
var mainHeight = 72.5;
var mainWidth = 47.85;
var mainXArray = [247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5, 247.5, 302.5, 357.5, 412.5, 467.5, 522.5, 577.5, 632.5, 687.5, 742.5];
var mainYArray = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 84.5, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 239.5, 317, 317, 317, 317, 317, 317, 317, 317, 317, 317, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5, 394.5];
var search_arr = [];
var searching = false;
var searchXArray = [802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5, 802.75, 857.5, 912.75, 967.5];
var searchYArray = [249.5, 249.5, 249.5, 249.5, 327, 327, 327, 327, 404.5, 404.5, 404.5, 404.5, 482, 482, 482, 482, 559.5, 559.5, 559.5, 559.5];
var sideHeight = 72.5 * 0.666;
var sideWidth = 47.85 * 0.666;

addButton($('#msg .ok_btn'), msgOK);
addButton($('#input .ok_btn'), inputOK);
addButton($('#input .cancel_btn'), cancelCallback);
addButton($('#combo .ok_btn'), comboOK);
addButton($('#combo .cancel_btn'), hideDisplayBoxes);
addButton($('#confirm .yes_btn'), confirmYes);
addButton($('#confirm .no_btn'), confirmNo);
addButton($('#screenshot_btn'), takeScreenshot);

preview = new CardFront();
preview.attr("id", "preview");
preview.css("transform", "scale(0.2460024600246, 0.245991561181435)");
preview.data("name", "preview");
preview.find('.name_txt').addClass("selectable");
preview.hide();

preview_txt.mouseenter(maximizePreview);
preview_txt.mouseleave(minimizePreview);
preview_txt.scroll(previewScrollE);
preview_txt.mousemove(previewMoveE);
preview_txt.hide();

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
				this.data("proxy").text(value);
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

function resizeE() {
	//loadMessage();
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
		$("#content").css("transform", "scale(" + contentScale + ")");
	}
	marginTop = 0;
	if (delta > 0) {
		marginLeft = 0;
	}
	else {
		marginLeft = (window.innerWidth - getScaledWidth()) / 2;
	}
	if (!zooming) {
		$("#content").css("margin-left", marginLeft + "px");
	}
	if ((window.innerHeight / window.innerWidth) > 0.625) {
		marginTop = (window.innerHeight / 2) - ((window.innerWidth * 0.625) / 2);
	}
	$("#content").css("margin-top", (marginTop / parseFloat($('#content')[0].style.zoom)) + "px");
	$('select, option').css("font-size", (12 * contentScale) + "px");
	$('#combo select').css("font-size", (18.6 * contentScale) + "px");
	if (EDGE) {
		contentScale = 1;
	}
}

















function jelloE() {
	jello = true;
	$("body").css("overflow-x", "hidden");
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
	var str = 'input[type=text], input[type=password]';
	if (b) {
		str = '#' + currentLabel + ' input[type=text], #' + currentLabel + ' input[type=password]';
	}
	$(str).each(function(i,e){
		var div = $('<div></div>');
		div.addClass("textinput");
		div.addClass("proxy");
		div.css("left", $(this).css("left"));
		div.css("top", $(this).css("top"));
		div.css("width", parseInt($(this).css("width")) - 6);
		div.css("height", (parseInt($(this).css("height")) - 3) + "px"); /* needs to be a fixed number for Safari */
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
			div.css("opacity", 0);
			$(this).css("opacity", 1);
		});
		$(this).on('focusout', function(){
			div.show();
			div.css("opacity", 1);
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
			obj.css("width", parseInt(obj.css("width")) - 5 + "px");
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









function changeSelects() {
	$('select').each(function(i,e){
		var div = $('<div class="combobox"></div>');
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
		
		var arrow = $('<div class="combobox_arrow"><img src="' +  IMAGES_START + 'svg/combobox_arrow.svg" /></div>');
		div.data("arrow", arrow);
		div.append(arrow);
		
		$(this).data("proxy", div);
		$(this).css("opacity", 0);
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

function changeButtons() {
	$('input[type=submit], input[type=file]').each(function(i,e){
		changeButton($(this));
	});
}

function changeButton(btn) {
	if (btn.data("proxy")) {
		return;
	}
	var div = $('<div class="button"></div>');
	div.addClass("proxy");
	div.addClass("unselectable");
	if (btn.hasClass("button2")) {
		div.addClass("button2");
	}
	div.css("left", btn.css("left"));
	div.css("top", btn.css("top"));
	div.css("width", parseInt(btn.css("width")) - 2);
	div.css("height", "17px"); /* needs to be a fixed number for Safari */
	div.text(btn.val());
	div.data("proxy", btn);
	div.insertAfter(btn);
	btn.data("proxy", div);
	btn.css("opacity", 0);
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

function changeCheckboxes() {
	$('input[type=checkbox]').each(function(i,e){
		var div = $('<div class="checkbox"></div>');
		div.data("proxy", $(this));
		div.css("left", parseInt($(this).css("left")) + 2);
		div.css("top", parseInt($(this).css("top")) + 2);
		
		var check = $('<img class="check" src="' +  IMAGES_START + 'svg/check.svg">');
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

function changeRadios() {
	$('input[type=radio]').each(function(i,e){
		var div = $('<div class="radiobutton"></div>');
		div.data("proxy", $(this));
		div.css("left", parseInt($(this).css("left")) + 2);
		div.css("top", parseInt($(this).css("top")) + 2);
		div.attr("name", $(this).attr("name"));
		div.attr("id", "radiobutton" + (i + 1));
		
		var radio = $('<img class="check" src="' +  IMAGES_START + 'svg/radio.svg">');
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

function log(str) {
	console.log(str);
}

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
}

function toPassword(text) {
	var str = "";
	for (var i = 0; i < text.length; i++) {
		str += "●";
	}
	return str;
}

function CardFront() {
	var card = $('<div class="cardfront unselectable"></div>');
	
	var cardfront_content = $('<div class="cardfront_content"></div>');
	card.append(cardfront_content);
	
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
			card.removeData();
			card.data(data);
			card.initialize(data.id, data.name, data.level, data.effect, data.power, data.hero, data.card_type, data.pic);
		},
		
		initializeAndLimit: function(data, ocg) {
			card.initializeFromData(data);
			//card.setLimit(ocg);
		},
		
		initialize: function(id, name, level, effect, power, hero, card_type, pic) {
			if (!id) {
				id = 0;
			}
			/*if (!name) {
				name = "";
			}
			if (!level) {
				level = 0;
			}
			if (!effect) {
				effect = "";
			}
			if (!power) {
				power = 0;
			}
			if (!hero) {
				hero = "";
			}
			if (!card_type) {
				card_type = "";
			}
			if (!pic) {
				pic = "";
			}*/
			/*if (mobile && SAFARI) {
				if (id > 0 && id < 20000) {
					var cardimage = $('<img class="cardimage" src="https://www.duelingbook.com/images/cards-small/' + id + '.jpg" width="813" height="1185" />');
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
			name_txt.textContent = name;
			card.setCardName();
			effect_txt.textContent = effect;
			card_type_txt.textContent = card_type;
			switch(card_type) {
				case "Drive":
					power = "";
					$(front).css("background", "linear-gradient(90deg, #264d23, #71e469, #264d23)");
					break;
				case "Counter":
					power = "";
					$(front).css("background", "linear-gradient(90deg, #254353, #50a9d8, #254353)");
					break;
				default:
					$(front).css("background", "linear-gradient(90deg, #2f2512, #7b592c, #2f2512)");
					break;
			}
			setText(card_type_txt);
			hero_icon.setAttribute("src", getHeroSrc(hero));
			level_txt.textContent = level;
			power_txt.textContent = power;
			card.data("pic", pic);
			if (full_image) {
				full_image.style.display = "none";
			}
			setCardText(effect_txt);
			this.pic = pic;
			card.removeImage();
			if (id || pic != "0") {
				card.loadImage();
			}
			card.data("initialized", true);
		},
		
		loadImage: function() {
			var id = card.data("id");
			if (!card.data("pic")) {
				return;
			}
			if (card.data("pic") == "0") {
				return;
			}
			var src = CARD_IMAGES_START + id + '.jpg';
			if (card.data("pic") && parseInt(card.data("pic").toString()) != card.data("pic")) {
				src = card.data("pic");
			}
			else if (card.data("pic") != "1") {
				src += "?v=" + card.data("pic")
			}
			if (src == "0") {
				return;
			}
			card.find('.pic').attr("src", IMAGES_START + "loading.gif");
			card.find('.pic').attr("src", src);
		},
		
		removeImage: function() {
			card.find('.pic').attr("src", IMAGES_START + "black.jpg");
		},
		
		copyCard: function(e){
			card.initializeFromData(e.data());
		},
		
		setLimit: function(ocg_list){
			card.clearLimit();
			var limit = card.data("limit");
			switch (limit) {
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
		},
		
		clearLimit: function(){
			/*if (forbidden) {
				forbidden.style.display = "none";
			}
			if (limited) {
				limited.style.display = "none";
			}
			if (semi_limited) {
				semi_limited.style.display = "none";
			}*/
		},
		
		setCardName:function(){
			if (card.parent().hasClass("content") || card[0].style.display == "block") {
				setTimeout(function(){
					setText(name_txt);
				}, 200);
				return;
			}
			setText(name_txt);
		},
	});
	card.reset();
	
	var full_image;
	
	var border = document.createElement("img");
	border.className = "card_border";
	border.setAttribute("src", CARD_START + "card_border.jpg");
	
	var front = document.createElement("div");
	front.className = "card_color";
	
	var level_txt = document.createElement("span");
	level_txt.className = "level_txt";
	level_txt.textContent = 10;
	
	var img = document.createElement("img");
	img.className = "pic";
	img.setAttribute("src", IMAGES_START + "loading.gif");
	
	var power_bg = document.createElement("img");
	power_bg.className = "power_bg";
	power_bg.setAttribute("src", CARD_START + "power.svg");
	
	var power_txt = document.createElement("span");
	power_txt.className = "power_txt";
	power_txt.textContent = 10;
	
	var name_txt = document.createElement("span");
	name_txt.className = "name_txt";
	name_txt.textContent = "Card Name Here";
	
	var hero_bg = document.createElement("img");
	hero_bg.className = "hero_bg";
	hero_bg.setAttribute("src", CARD_START + "circle.svg");
	
	var hero_icon = document.createElement("img");
	hero_icon.className = "hero_icon";
	hero_icon.setAttribute("src", CARD_START + "symbol.svg");
	
	var effect_bg = document.createElement("div");
	effect_bg.className = "effect_bg";

	var effect_txt = document.createElement("span");
	effect_txt.className = "effect_txt";
	effect_txt.textContent = "You can target 1 Level 4 FIRE Beast-Warrior-Type monster in your Graveyard; Special Summon it in face-up Defense Position. Its effects are negated. You can only use the effect of \"Coach Soldier Wolfbark\" once per turn.";
	
	var card_type_img = document.createElement("img");
	card_type_img.className = "card_type_img";
	card_type_img.setAttribute("src", CARD_START + "card_type.svg");
	
	var card_type_txt = document.createElement("span");
	card_type_txt.className = "card_type_txt";
	card_type_txt.textContent = "Follower";
	
	cardfront_content[0].appendChild(border);
	cardfront_content[0].appendChild(front);
	cardfront_content[0].appendChild(level_txt);
	cardfront_content[0].appendChild(img);
	cardfront_content[0].appendChild(power_bg);
	cardfront_content[0].appendChild(power_txt);
	cardfront_content[0].appendChild(name_txt);
	cardfront_content[0].appendChild(effect_bg);
	cardfront_content[0].appendChild(effect_txt);
	cardfront_content[0].appendChild(hero_bg);
	cardfront_content[0].appendChild(hero_icon);
	cardfront_content[0].appendChild(card_type_img);
	cardfront_content[0].appendChild(card_type_txt);
	card.clearLimit();
	return card;
}

function getHeroSrc(hero) {
	switch(hero) {
		case 1:
		case "Becca, The Golden Knight":
			return CARD_START + "becca.png";
		case 2:
		case "Tutaric, Venom Hero":
			return CARD_START + "tutaric.png";
		case 3:
		case "Conquest, The First Rider of the End":
			return CARD_START + "conquest.png";
		case 4:
		case "Zooplo, Greed Cultist Master":
			return CARD_START + "zooplo.png";
		case 5:
		case "Mika, The Combat Botanist":
			return CARD_START + "mika.png";
		default:
			return CARD_START + "symbol.svg";
	}
}

function correctText(str) {
	str = str.replace(/&/g, '&amp;');
	str = str.replace(/%/g, '&percnt;');
	str = str.replace(/=/g, '&equals;');
	str = str.replace(/</g, '&lt;');
	str = str.replace(/>/g, '&gt;');
	var arr = ["#", "&percnt;", "\\*", "\\+", "&lt;", "&equals;", "&gt;", "@", "\\[", "]", "\\^", "{", "\\|", "}", "∞", "Ü", "Ω", "É", "×"];
	arr.forEach(function(e,i){
		str = str.replace(new RegExp(e, "g"), '<font style="font-family: Arial; font-size: 80%;">' + e.replace(/\\/g, '') + '</font>');
	});
	return str;
}

function correctEffect(str) {
	str = str.replace(/∞/g, '<font style="font-family: Arial;">∞</font>');
	str = str.replace(/Ω/g, '<font style="font-family: Arial; font-size: 80%;">Ω</font>');
	return str;
}

function getType(str) {
	var type = "";
	var arr = str.toUpperCase().split(" ");
	for (var i = 0; i < arr.length; i++) {
		type += '<font class="type_medium">' + arr[i].substring(0, 1) + '</font>' + arr[i].substring(1, arr[i].length);
		if (i < arr.length - 1) {
			type += " ";
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
}

function Card() {
	var card = $('<div class="card"></div>');
	var sleeve = $('<img src="' + CARD_START + 'cardback.jpg" width="400" height="580" />');
	var cardback = $('<div class="cardback"></div>');
	cardback.append(sleeve);
	
	var cardfront = new CardFront();
	var content = $('<div class="content"></div>');
	card.append(content);
	
	content.append(cardback);
	content.append(cardfront);
	
	card.extend(card, {
		reset: function() {
			card.removeData();
			card.data("cardfront", cardfront);
			card.data("xyz_arr", []);
		},
		
		onRotate: function(b) {
			var rotationY = getRotationY(card[0]);
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
				}
			}
			else if (rotationY > 90 || rotationY < 0) {
				if (cardfront[0].style.display != "none") {
					cardfront[0].style.display = "none";
				}
			}
			if (rotationY == 0 && cardfront[0].style.transformStyle != "flat") {
				cardfront[0].style.transformStyle = "flat";
			}
			else if (rotationY != 0 && cardfront[0].style.transformStyle != "preserve-3d") {
				cardfront[0].style.transformStyle = "preserve-3d";
			}
		},
		
		setSleeve: function(str) {
			if (!str) {
				str = "1.jpg";
			}
			if (card.data("isSkill")) {
				return;
			}
			card.data("sleeve", str);
		},
		
		showFaceDown: function(){
			TweenMax.to(card, 0, {rotationY:180});
		}
	});
	card.reset();
	watch(card, 'transform', card.onRotate);
	if (SAFARI) {
		card.css("perspective-origin", "unset");
	}
	TweenMax.set(content, {transformPerspective:700});
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
	obj.css("transform", "matrix3d(" + values[0] + ", " + values[1] + ", " + values[2] + ", " + values[3] + ", " + values[4] + ", 1, " + values[6] + ", " + values[7] + ", " + values[8] + ", " + values[9] + ", 1, " + values[11] + ", " + values[12] + ", " + values[13] + ", " + values[14] + ", " + values[15] + ")");
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

function getInput(title, str, placeholder, maxChars, callback, restrictedChars, displayaspassword, cancel_callback) {
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
	input_cancel_callback = cancel_callback;
}

function fillCombobox(obj, arr) {
	obj.html("");
	arr.forEach(function(e,i){
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
	if (input_cancel_callback) {
		input_cancel_callback();
	}
}

function hideDisplayBoxes() {
	$('#msg').hide();
	$('#confirm').hide();
	$('#input').hide();
	$('#combo').hide();
	hideDim();
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
				if (e.type == "mousedown" || inBounds(card.find('.content'))) {
					previewCard(card);
				}
			};
		}
	}
	else {
		previewTimer.callback = function(){
			previewTimer.reset();
			if (e.type == "mousedown" || inBounds(card)) {
				previewFront(card);
			}
		};
	}
	previewTimer.start();
	addMouseMove();
}

function previewCard(card) {
	if (card.data("face_down") && (!duelist && !card.data("isSkill"))) {
		if (!admin && username) {
			return;
		}
	}
	if (!card.data("cardfront").data("initialized")) {
		return;
	}
	if (duelist && (card.data("controller") != player1 && (card.data("face_down")) || getRotationY(card[0]) == 180) && viewing != "Opponent's Extra Deck") {
		return;
	}
	if (inBounds(preview_txt)) {
		return;
	}
	previewFront(card.data("cardfront"));
}

function previewFront(cardfront) {
	if (preview.data("id") == 0) {
		preview.data("id", -1);
	}
	if (preview.data("id") == cardfront.data("id")) {
		return;
	}
	preview.find('.skillback').detach();
	showPreview();
	preview.copyCard(cardfront);
	if (cardfront.data("pendulum")) {
		preview_txt.html("<b>Pendulum Effect:</b><br>" + escapeHTML(cardfront.data("pendulum_effect")) + '<br><br>' + "<b>Monster Effect:</b><br>");
		if (cardfront.data("monster_color") == "Normal") {
			preview_txt.append("<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
		}
		else {
			preview_txt.append(escapeHTML(cardfront.data("effect")));
		}
	}
	else {
		if (cardfront.data("monster_color") == "Normal") {
			preview_txt.html("<i>" + escapeHTML(cardfront.data("effect")) + "</i>");
		}
		else {
			preview_txt.html(escapeHTML(cardfront.data("effect")));
		}
	}
	
}

function showPreview() {
	preview_txt.css("height", 152);
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
	if (e != null) {
		var maxVSP = preview_txt.scrollMax();
		if (preview_txt.scrollTop() > 1 && preview_txt.scrollTop() < maxVSP) {
			preview_vsp = preview_txt.scrollTop();
		}
	}
	preview_txt.css("height", 152);
	setTimeout(function(){
		preview_txt.scrollTop(preview_vsp);
	}, 5);
}

function Timer(millis, callback) {
	var timer = {};
	timer.millis = millis;
	timer.callback = callback;
	timer.start = function(){
		timer.reset();
		timer.task = setInterval(function(){
			timer.callback();
		}, timer.millis);
	};
	timer.stop = function(){
		clearInterval(timer.task);
	};
	timer.reset = function(){
		timer.stop();
	};
	timer.destroy = function(){
		timer.reset();
		timer = null;
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
	for (i = 1; i < arr.length; i++) {
		if (arr[i].data("name") == arr[i - 1].data("name")) {
			arr.push(arr[i]);
			arr.splice(i, 1);
		}
	}
}

function changeComponents() {
	if (GET('nocomps')) {
		$('input, select').each(function(){
			var proxy = $('<div></div>');
			proxy.data("proxy", $(this));
			$(this).data("proxy", proxy);
		});
		return;
	}
	changeInputs();
	changeSelects();
	changeButtons();
	changeCheckboxes();
	changeRadios();
	resizeComponents();
}

function loadSVGAnimation(obj, id, str, width, height, fps, playing) {
	obj = new MovieClip(playing);
	//$.getJSON(URL_START + 'static/' + str + ".json", function(json) {
	$.getJSON('static/' + str + ".json", function(json) {
		obj = createSVGAnimation(obj, id, width, height, fps, json);
		switch(id) {
			case "red_stream":
				red_stream = obj;
				break;
			case "blue_stream":
				blue_stream = obj;
				break;
			case "bubbles1":
				bubbles1 = obj;
				bubbles2 = createSVGAnimation(bubbles2, "bubbles2", width, height, fps, json);
				break;
			case "m1_select":
				m1_select = obj;
				m2_select = createSVGAnimation(m2_select, "m2_select", width, height, fps, json);
				m3_select = createSVGAnimation(m3_select, "m3_select", width, height, fps, json);
				s1_select = createSVGAnimation(s1_select, "s1_select", width, height, fps, json);
				s2_select = createSVGAnimation(s2_select, "s2_select", width, height, fps, json);
				break;
		}
	});
	return obj;
}
	
function createSVGAnimation(obj, id, width, height, fps, json) {
	var playing = obj.playing;
	obj = new SVGAnim(json, width, height, fps);
	$('#' + id).append($(obj.s.node));
	$('#' + id).data("cycle", obj);
	if (!playing) {
		obj.stop();
	}
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
	$('#dim').css("pointer-events", "auto");
	dimTimer.start();
}

function hideDim() {
	$('#dim').hide();
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
	if ($('#combo').is(":visible")) {
		return true;
	}
	return false;
}

function replaceAll(str, str2, str3) {
	return str.split(str2).join(str3);
}

function escapeHTML(str) {
	str = replaceAll(str, "&", "&amp;");
	str = replaceAll(str, "<", "&lt;");
	str = replaceAll(str, ">", "&gt;");
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
			if (str.charAt(j) == " " || str.charAt(j) == "\n" || str.substring(j).indexOf("<br>") == 0) {
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
	if (b) {
		return '</span><span class="link"><u><a href="' + url + '" target="_blank">' + str + '</a></u></span><span class="not_link">';
	}
	return '<u><a href="' + url + '" target="_blank">' + str + '</a></u>';
}

function inBounds(obj, leeway) {
	if (!leeway) {
		leeway = 0;
	}
	if (mouseX > obj.offset().left - leeway
		&& mouseX < obj.offset().left + obj[0].getBoundingClientRect().width + leeway
			&& mouseY > obj.offset().top - leeway
				&& mouseY < obj.offset().top + obj[0].getBoundingClientRect().height + leeway) {
					return true;
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
					return true;
	}
	return false;
}

function updateMouse(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
	mouseXScaled = e.pageX / contentScale - marginLeft / contentScale;
	mouseYScaled = e.pageY / contentScale - marginTop / contentScale;
	if (zooming) {
		mouseX = mouseXScaled + $('#content').offset().left;
		mouseY = mouseYScaled + $('#content').offset().top;
	}
}

function takeScreenshot() {
	$(':focus').blur();
	var defer = $.Deferred();
	var filtered = defer.then(function(value) {
		return domtoimage.toPng($("#content")[0], {"bgcolor":"#000000", "width":1024, "height":640, "style":{"transform":"scale(1)", "margin":"0px", "zoom":"1"}, "imagePlaceholder":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});
	});
	filtered.done(function(url) {
		window.open(url);
	});
	defer.resolve();
	filtered.fail(function(error) {
		console.log(error);
	});
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
	$('#frames').children().hide();
	clearSelection();
	$('#' + str).show();
	currentLabel = str;
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

function Cell(str) {
	var cell = document.createElement("div");
	cell.className = "cell cell1";

	var username_txt = document.createElement("span");
	var textNode = document.createTextNode(str);
	username_txt.appendChild(textNode);
	cell.appendChild(username_txt);
	
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

function updateCardLimits() {
	for (var i = 0; i < deck_arr.length; i++) {
		deck_arr[i].setLimit();
	}
	for (i = 0; i < side_arr.length; i++) {
		side_arr[i].setLimit();
	}
	for (i = 0; i < extra_arr.length; i++) {
		extra_arr[i].setLimit();
	}
	for (i = 0; i < search_arr.length; i++) {
		search_arr[i].setLimit();
	}
}

function randomizeDeck() {
	randomize(deck_filled_arr);
	initializeDeckCards();
	setUnsavedChanges();
}

function sortDeck() {
	deck_filled_arr.sort(sortCards2);
	initializeDeckCards();
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
	if (a.data("name") > b.data("name")) {
		return 1;
	}
	if (a.data("name") < b.data("name")) {
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
	deck_filled_arr = [];
	cardsInMain = 0;
	countMain();
}

function addCardToMain(card, index) {
	if (index == undefined) {
		index = -1
	}
	if (cardsInMain < 45) {
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

function DeckCard(index) {
	var card = new CardFront;
	card.attr("id", "deck_card" + (index + 1));
	card.addClass("deck_card");
	card.css("left", mainXArray[index]);
	card.css("top", mainYArray[index]);
	addCardDragging(card, removeCardFromMain, deckCardDrop);
	return card;
}

function SearchCard(index) {
	var card = new CardFront;
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
	cardsInMain = deck_filled_arr.length;
	countMain();
}

function countMain() {
	for (var i = 0; i < deck_arr.length; i++) {
		if (cardsInMain > i) {
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

function getUnderlyingDeckCard() {
	for (var i = 0; i < deck_arr.length; i++) {
		if (inBounds(deck_arr[i], 5)) {
			return i;
		}
	}
	return -1;
}

function array(data) {
	if (data instanceof Array) {
		return data;
	}
	return [];
}

function str(str) {
	if (!str) {
		return "";
	}
	return str;
}

function updateActive(b) {
	active = b;
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
	var arr = [3, 206];
	if (arr.indexOf(chatX) < 0) {
		return;
	}
	var chats = [$('#online_users'), $('#duel_log')];
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

function addDragging(element, handle, cancel, start_function, end_function) {
	if (mobile) {
		addDragging2(element, handle, cancel, start_function, end_function);
		return;
	}
	element.draggable({
		"scroll":false,
		"cancel":cancel, "start":function(e, ui){
			if (start_function) {
				start_function(e, $(ui));
			}
			updateMouse(e);
			dragXOffset = mouseXScaled - parseInt($(this).css("left"));
			dragYOffset = mouseYScaled - parseInt($(this).css("top"));
		}, "drag":function(e, ui){
			if (!jello) {
				updateMouse(e);
				ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
			}
		}, "stop":function(e, ui){
			if (end_function) {
				end_function(e, $(ui));
			}
		}
	});
}

function addDragging2(element, handle, cancel, start_function, end_function) {
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
		}, "drag":function(e, ui){
			if (!jello) {
				updateMouse(e);
				ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
			}
		}, "stop":function(e, ui){
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

function maximizePreview() {
	if (currentLabel == "deck_constructor") {
		return;
	}
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
	}
}

function initSite() {
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
	$('textarea').on('input blur', function(){
		$(this).text($(this).val());
	});
	$('.textarea').addClass("selectable");
	$('input').click(function(){ 
		$(this).focus();
	});
	$('input[type=radio]').click(function(){
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
	window.onresize = resizeE;
	window.onorientationchange = orientationE;
	if (SAFARI) {
		zooming = true;
	}
	if (alignLeft || alignRight) {
		zooming = false;
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
		e.target.value = e.target.value.replace(/[^ -~\r\n]/g, '');
	});
	$('html').mousedown(function(e){
		controlFocus = $(e.target);
	});
	if (jello) {
		jelloE();
	}
	changeComponents();
	hideDisplayBoxes();
	initTouchEvents();
	TweenMax.ticker.useRAF(false);
	if (mobile && SAFARI) {
		TweenMax.ticker.fps(10);
	}
	TweenMax.lagSmoothing(0);
	if (EDGE || IE) {
		$('#dark').css("opacity", "0.5");
	}
	if (SAFARI) {
		$('body').addClass("safari");
	}
	if (CHROME) {
		$('body').addClass("chrome");
	}
	$('#black').hide();
}

function checkLoggedIn() {
	var fd = new FormData();
	fd.append("db_id", db_id);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "logged-in.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			checkLoggedInResponse(xhr.responseText);
		}
	}
	xhr.send(fd);			
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

function touchHandler(e) {
	var touch = e.changedTouches[0];
	var simulatedEvent = document.createEvent("MouseEvent");
	simulatedEvent.initMouseEvent({
		touchstart: "mousedown",
		touchmove: "mousemove",
		touchend: "mouseup"
	}[e.type], true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	touch.target.dispatchEvent(simulatedEvent);
}

function initTouchEvents() {
	document.addEventListener("touchstart", touchHandler, true);
	document.addEventListener("touchmove", touchHandler, {passive: false});
	document.addEventListener("touchend", touchHandler, true);
	document.addEventListener("touchcancel", touchHandler, true);
}

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

function ceil(str) {
	return Math.ceil(parseFloat(str))
}