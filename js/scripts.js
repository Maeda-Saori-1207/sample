// JavaScript Document

//sp menu
$(document).ready(function(){
	$(".sp_menubtn").on("click", function(){
		$(".sp_menu").toggleClass("open");
		$("body").toggleClass("noscroll");
	});
	$(".sp_menuclose").on("click", function(){
		$(".sp_menu").removeClass("open");
		$("body").removeClass("noscroll");
	});
});				  