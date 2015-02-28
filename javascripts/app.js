var main = function(){
	"use strict";

	var tabNumber; //Holds the tab that is clicked.

	//Array = [span.active, span, span].
	$(".tabs a span").toArray().forEach(function(element){
		//Create a click handler for this element.
		$(element).on("click", function(){
			//Remove "active" class from all tags.
			$(".tabs a span").removeClass("active");
			//Make element have "active" class.
			$(element).addClass("active");
			//Delete all content from tabs.
			$("main .content").empty();
			//Make browser not follow the link.
			return false;
		});
	});
};

$(document).ready(main);