$(document).ready(function(){
	fix_banner();
	$(window).resize(function(){
		fix_banner();
	    var window_width = window.innerWidth;
	    if(window_width > 1279){
			$("html").css("overflow","auto");
			$("#close").removeClass("active");
			$("#search_background").removeClass("active");
			$("nav .container > ul > li:nth-child(2)").removeClass("active");
	    }
	});
});
function fix_banner(){
	var i_top = scrolltop();
	var i_side = get_height_side();
	var i_page = get_height_page();
	var i_limit = i_page - 610;
	if(i_top >= i_side){
		if(i_top <= i_limit){
			$("#right .bottom").css({"position":"fixed","top":"0px","margin-top":"0px"});
		}else{
			var i_margin = i_page - (get_height_side() + 610) + "px";
			$("#right .bottom").css({"position":"relative","margin-top":i_margin});
		}
	}else{
		$("#right .bottom").css({"position":"static","margin-top":"0px"});
	}
}
if (window.addEventListener) {
    window.addEventListener("scroll", function() {
    	var window_width = window.innerWidth;
		if(window_width > 1279){
	    	fix_banner();
    	}
    });
}else if (window.attachEvent) {
    window.attachEvent("onscroll", function() {
    	var window_width = window.innerWidth;
		if(window_width > 1279){
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
	var i_banner_top = $("#right .top").outerHeight();
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
function close_side(){
	$("html").css("overflow","auto");
	$("#close").removeClass("active");
	$("#search_background").removeClass("active");
	$("nav .container > ul > li:nth-child(2)").removeClass("active");
}