$(document).ready(function(){
	fix_side();
	fix_banner();
	$(window).resize(function(){
		fix_side();
		fix_banner();
	    var window_width = window.innerWidth;
	    if(window_width > 1279){
			$("html").css("overflow","auto");
			$("#close").removeClass("active");
			$("#left").removeClass("active");
			$("#search_background").removeClass("active");
			$("nav .container > ul > li:nth-child(2)").removeClass("active");
	    }
	});
});
function fix_side(){
	var i_top = scrolltop();
	var i_header = $("header").outerHeight();
	var i_nav = $("nav").outerHeight();
	if(i_top>=(i_header+i_nav)){
		$("#left").css({"top":"0px","padding-top":"5px"});
	}else{
		$("#left").css({"top":(i_header+i_nav-i_top+5)+"px","padding-top":"0px"});
	}
	var i_total = total_height();
	var i_footer = $("footer").outerHeight();
	var i_window = window.innerHeight;
	var i_limit_1 = i_total - i_footer;
	var i_limit_2 = i_total - i_footer - i_window;
	if(i_top >= i_limit_2){
		var i_bottom = i_top - i_limit_2;
		document.getElementById("left").style.bottom = i_bottom + 1 + "px";
		var khoang_cach_vuot_limit = i_top - i_limit_2;
		$("#left > .side").css({"height":(i_window - khoang_cach_vuot_limit - 5 - 1)+"px","overflow":"hidden"});
	}else{
		document.getElementById("left").style.bottom = "0px";
		$("#left > .side").css({"height":"auto"});
	}
}
function fix_banner(){
	var i_top = scrolltop();
	var i_side = get_height_side();
	var i_page = get_height_page();
	var i_limit = i_page - 610;
	var i_left = $("#body #right > .page").outerHeight();
	var i_right = $("#body #right > .side").outerHeight();
	if(i_left >= i_right){
		if(i_top >= i_side){
		    if(i_top <= i_limit){
			    $("#body #right > .side > .bottom").css({"position":"fixed","top":"0px","margin-top":"0px"});
		    }else{
		    	var i_margin = i_page - (get_height_side() + 610) + "px";
			    $("#body #right > .side > .bottom").css({"position":"relative","margin-top":i_margin});
		    }
		}else{
			$("#body #right > .side > .bottom").css({"position":"static","margin-top":"0px"});
		}
	}else{
		var i_height_right_bottom = $("#body #right > .side > .bottom").outerHeight(true);
		if(i_height_right_bottom > 610){
			if(i_top >= i_side){
			    if(i_top <= i_limit){
				    $("#body #right > .side > .bottom").css({"position":"fixed","top":"0px","margin-top":"0px"});
			    }else{
			    	var i_margin = i_page - (get_height_side() + 610) + "px";
				    $("#body #right > .side > .bottom").css({"position":"relative","margin-top":i_margin});
			    }
			}else{
				$("#body #right > .side > .bottom").css({"position":"static","margin-top":"0px"});
			}
		}
	}
}
if (window.addEventListener) {
    window.addEventListener("scroll", function() {
    	var window_width = window.innerWidth;
		if(window_width > 1023){
	    	fix_side();
	    	fix_banner();
    	}
    });
}else if (window.attachEvent) {
    window.attachEvent("onscroll", function() {
    	var window_width = window.innerWidth;
		if(window_width > 1023){
	    	fix_side();
	    	fix_banner();
    	}
    });
}
function total_height(){
    var i_header = $("header").outerHeight();
    var i_nav = $("nav").outerHeight();
    var i_body = $("#body").outerHeight();
    var i_footer = $("footer").outerHeight();
    return (i_header + i_nav + i_body + i_footer);
}
function scrolltop() {
	var top = 0;
	if (typeof(window.pageYOffset) == "number") {
	     top = window.pageYOffset;
	}else if (document.body && document.body.scrollTop) {
	     top = document.body.scrollTop;
	}else if (document.documentElement && document.documentElement.scrollTop) {
	     top = document.documentElement.scrollTop;
	}
	return top;
}
function get_height_page(){
	var i_header = $("header").outerHeight();
	var i_nav = $("nav").outerHeight();
	var i_body = $("#body").outerHeight();
	return (i_header + i_nav + i_body);
}
function get_height_side(){
	var i_header = $("header").outerHeight();
	var i_nav = $("nav").outerHeight();
	var i_banner_top = $("#body #right > .side > .top").outerHeight();
	return (i_header + i_nav + i_banner_top);
}
function open_search(){
	$("html").css("overflow","hidden");
	$("#search_background").addClass("active");
	$("#search").addClass("active");
}
function close_search(){
	$("html").css("overflow","auto");
	$("#search_background").removeClass("active");
	$("#search").removeClass("active");
}
function open_menu(){
	$("html").css("overflow","hidden");
	$("#search_background").addClass("active");
	$("#close").addClass("active");
	$("nav .container > ul > li:nth-child(2)").addClass("active");
}
function open_unit(){
	$("html").css("overflow","hidden");
	$("#left").addClass("active");
	$("#close").addClass("active");
}
function close_side(){
	$("html").css("overflow","auto");
	$("#close").removeClass("active");
	$("#left").removeClass("active");
	$("#search_background").removeClass("active");
	$("nav .container > ul > li:nth-child(2)").removeClass("active");
}