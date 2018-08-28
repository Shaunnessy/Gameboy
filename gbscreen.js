//animation sequences?  Just wanted to separate this so I can experiment with drawing

// Global Variables

var scr = document.getElementById("screen");  //  initialize screen variable. 

var color = Array("rgb(155, 188, 15)", 	//Lightest Green
			"rgb(149, 172, 15)",		//Light Green
			"rgb(48, 98, 48)",			 //Dark Green
			"rgb(15, 56, 15)",			 //Darkest Green
			"rgb(105, 138, 15)");	 //Screen Off

var idle = false;  // idle check variable
var pause;
var font = { char : function(){

				// placed holder variable 
				var start = "0:0";
				var check = start.split(":");
				console.log(check);

				if(check[0] >= 0 && (check[0] + 7) < 144 && check[1] >= 0 && (check[1] + 7) < 160){
					console.log("character will fit");
					for(i = 0; i < 8; i++){
						for(ii = 0; ii < 8; ii++){
							elId = i + ":" + ii;
							document.getElementById(elId).style.backgroundColor = color[3];

						}

					}
			
			}else{
				console.log("attempted font character out of screen limits");
			} Nn : Array(11100011,111100011,)
		}
};



// Draw Functions

(function initializeScreen(){ 

	size = Array(144, 160);

	for(row = 0; row < size[0]; row++){
		for(col = 0; col < size[1]; col++){
			pix = document.createElement("div"); // declare here to get new var each iteration
			pix.id = String(row + ":" + col);
			pix.class = "pixel";
			pix.style.gridArea = row  + "/" +  col + "/span 1" + "/span 1";
			pix.style.backgroundSize = "1px 1px";
			pix.style.backgroundColor = color[4];
			scr.appendChild(pix);  

		}
	}

	// console.log("screen initialized, pixel count:",scr.querySelectorAll("div"));



})();

// logo



function word(){


	font.char();

}

//screen "savers"
function screensaver(){

	if(idle == false){
		console.
		pause = setInterval(linearinterpolation, 16.67);
		idle = true;
		console.log(pause);

	}else if(idle == true){

		clearInterval(pause);
		idle = false;
		newpixel();
		console.log(pause);

	}

}

	


function linearinterpolation(){  // call random rows of divs and change color

	console.log("running linear");
	if(idle == true){
		randoRow = parseInt(Math.random() * 144);
		randoColor = color[parseInt(Math.random() * 3)];
		// console.log(randoColor);
		for(i = 0; i < 160; i++){

			document.getElementById(randoRow + ":" + i).style.backgroundColor = randoColor;
		}

	}else if(idle == false){

		return console.log("linear interpolation off");

	}


}







	