var main = function(){
	"use strict";

	var tabNumber, //Holds the tab that is clicked.
	toDos = [
					"Finish writing this book",
					"Take Vane to the park",
					"Answer emails",
					"Prep for Monday's class",
					"Make up some new ToDos",
					"Get Groceries"
				]; //Array stores oldest items earlier in array.


	//Array = [span.active, span, span].
	$(".tabs a span").toArray().forEach(function(element){
		//Create a click handler for this element.
		$(element).on("click", function(){
			var $element = $(element),/*Since we're using the jQuery version of element,
										we'll go ahead and create a temporary variable
										so we don't need to keep recreating it.
										*/
				$content, //Hold to-do lists.
				$inputBox = $("<input type='text'>"), //Used to enter new to-do items.
				$button = $("<button>Enter</button>"), //Used to submit new to-do items.
				i; //Loop increment.
				
			//Remove "active" class from all tags.
			$(".tabs a span").removeClass("active");
			//Make element have "active" class.
			$element.addClass("active");
			//Delete all content from tabs.
			$("main .content").empty();

			//Find out which tab was clicked by identifying the
			///child number of the parent of element.

			//"Newest" Tab
			if ($element.parent().is(":nth-child(1)")){
				$content = $("<ul>");
				for(i = (toDos.length - 1); i >= 0; i--)
				{
					$content.append($("<li>").text(toDos[i]));
				}
				$("Main .content").append($content);

				console.log("First tab clicked");
			//"Oldest" Tab
			} else if ($element.parent().is(":nth-child(2)")){
				$content = $("<ul>");
				toDos.forEach(function(todo){
					$content.append($("<li>").text(todo));
				});
				$("Main .content").append($content);

				console.log("Second tab clicked");
			//"Add" Tab
			} else if ($element.parent().is(":nth-child(3)")){
				$button.on("click", function(){
					//Ensure that there is no empty input.
					if($inputBox.val() !== ""){
						toDos.push($inputBox.val());
						$inputBox.val("");
					}
				});

				$inputBox.on("keypress", function(event){
					if(event.keyCode == 13){
						//Ensure that there is no empty input.
						if($inputBox.val() !== ""){
							toDos.push($inputBox.val());
							$inputBox.val("");
						}
					}
				});

				//Add the input box and button to the third tab.
				$("Main .content").append($inputBox);
				$("Main .content").append($button);

				console.log("Third tab clicked");
			}
			//Make browser not follow the link.
			return false;
		});//End click handler.
	});//End forEach loop.

	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);