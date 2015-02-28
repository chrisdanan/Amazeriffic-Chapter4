var main = function(){
	"use strict";

	//Purpose: Make tab active when user clicks on it.
	var makeTabActive = function(tabNumber){
		//Make all the tabs inactive.
		$(".tabs span").removeClass("active");
		//Make the chosen tab active (indicated by tabNumber).
		$(".tabs a:nth-child(" + tabNumber + ")	span").addClass("active");
	}

	$(".tabs a:nth-child(1)").on("click", function(){
		makeTabActive(1);
		//Need to return false, else the listener will make browser follow the link.
		return false;
	});

	$(".tabs a:nth-child(2)").on("click", function(){
		makeTabActive(2);
		return false;
	});

	$(".tabs a:nth-child(3)").on("click", function(){
		makeTabActive(3);
		return false;
	});
};

$(document).ready(main);