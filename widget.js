var NUM_OF_SQUARES = 8;
var WIDTH_DELTA = 80; 
var SQUARE_MIN_WIDTH = 150;

function changeSquareWidth(elem) {
	var parant = elem.parentNode;
	var all_squars = parant.childNodes;
	var widget_width = parant.offsetWidth;
	var rest_width = 0;
	var current_width, new_width;

	console.log( 'widget_width=' + widget_width);

	for (i = 0; i < all_squars.length; i++) { 
		if (all_squars[i].nodeName == "LI") {
			console.log( all_squars[i].offsetWidth );

			if (all_squars[i] == elem){
				console.log( 'clicked' );
			}
			else {
				current_width = all_squars[i].offsetWidth;
				new_width = current_width - (WIDTH_DELTA / (NUM_OF_SQUARES - 1));
				if (new_width < SQUARE_MIN_WIDTH) {
					new_width = SQUARE_MIN_WIDTH;
				}
				all_squars[i].style.width = (new_width+"px");
				rest_width += new_width;
			}
		}
	}

	current_width = elem.offsetWidth;
	new_width = widget_width - rest_width;
	elem.style.width = (new_width+"px");
}

// =================================
function setRandomColor() {
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

	return hue;
}

// =================================
function addSquaresToContainer() {
	var squere_node, widget_node;
	var color;
	//console.log('addSquaresToContainer');
	
	widget_node = document.getElementById("widget_squares_container");
	if (widget_node) {
		for (i = 0; i < NUM_OF_SQUARES; i++) { 
			squere_node = document.createElement("LI");
			squere_node.setAttribute("class", "widget_square");
			squere_node.setAttribute("onclick", "changeSquareWidth(this)");
			squere_node.style.background = setRandomColor();
			squere_node.style.width = (100 / NUM_OF_SQUARES + "%");

			widget_node.appendChild(squere_node);
		}
	}
	else {
		//console.log('widget_squares_container dose not exist');
	}
}

setTimeout(addSquaresToContainer, 10);