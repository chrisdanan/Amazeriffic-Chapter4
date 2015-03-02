var main = function(){
	"use strict"

	$("a.gal").colorbox({
		rel: "a.gal",
		width: "75%",
		transition: "fade",
		speed: 500
	});
};

$(document).ready(main);