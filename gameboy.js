/*


----- GAMEBOY UI -----




--- Screen Color Palette ---

Lightest Green: rgb(155,188,15)
Light Green: rgb(149,172,15)
Dark Green: rgb(48,98,48)
Darkest Green: rgb(15,56,15)

--- UI Buttons ---

"A": HTML id = DMG01
"B": HTML id = DMG02
SELECT: HTML id = select
START: HTML id = start
DPAD :
	UP: HTML id = UP
	DOWN: HTML id = DOWN
	LEFT: HTML id = LEFT
	RIGHT: HTML id = RIGHT 

(ON/OFF SWITCH) 
	SHOULD CONTROL POWER LED, SWITCH CHARACTERISTICS
/* Keypress down/up codes:
	
	(UP)	w: 87
	(LEFT)	A: 65
	(DOWN)	S: 83
	(RIGHT)	D: 68

  (A/DMG01)	J: 74
  (B/DMG02)	K: 75

(SELECT)SPACE: 32
(START)		E: 69

*/


//* 	global variable declaration 	*//
var p = false; 	// global "power variable"


//original gameboy color palette 
var oC = Array("rgb(155, 188, 15)", 	//Lightest Green
			"rgb(149, 172, 15)",		//Light Green
			"rgb(48, 98, 48)",			 //Dark Green
			"rgb(15, 56, 15)",			 //Darkest Green
			"rgb(105, 138, 15)");		 //Screen Off

//  responsive elements for gameboy
 var hA = { b : { A : ["DMG01", 74] ,
 						B : ["DMG02" , 75] ,
 						DP : ["UP", 87, "DOWN", 83, "LEFT", 65, "RIGHT", 68],
 						ST : ["start", 69],
 						SE : ["select", 32]
 			}, on : function(){
 					var init = Array(hA.b.A[0], hA.b.B[0], hA.b.DP[0],hA.b.DP[2],hA.b.DP[4],hA.b.DP[6], hA.b.ST[0], hA.b.SE[0]);
 					
 					console.log(init);

 					document.addEventListener("keydown", queue.add); //monitor keys
 					document.addEventListener("keyup", queue.add);
 					
 					init.forEach(function(el){

	 					document.getElementById(el).addEventListener("click", queue.add);
	 					
	 					console.log(el," is active");
 					});

 					console.log("hardware initialized");
 			}
 		};

var queue = { add : function(nextitem){

				// 	console.log(nextitem);
				v = queue.check(nextitem);
				console.log(v);
				/*	
				if(v == true){

					queue.list.push(nextitem);
					return console.log(nextitem);

				}else{

					return;
				}
			*/

			}, 
			check : function(isittho){
				console.log(isittho);
				
				hA.b.forEach(function(keyvalue){

						console.log(keyvalue);
				});



			}, 
			clear : function(){

				queue.list = [];
			},

			list : []

		}



var randomPixel = { color : function(p){

					var grid = p.split(",");
					var p = document.getElementById(p);

					
					var r = parseInt(Math.random() * 255) + 1;
					var g = parseInt(Math.random() * 255) + 1;
					var b = parseInt(Math.random() * 255) + 1;

					var rgb = Array("rgb(" + r, g, b + ")").toString();

					// set attribute of pixel

					p.style.backgroundColor = rgb;
					p.style.gridRow = grid[0] + "/span 1";
					p.style.gridColumn = grid[1] + "/span 1";
					p.style.backgroundSize = "1px 1px";				


					}, gameboyclassiccolor : function(p){
						
						var grid = p.split(":");
						var p = document.getElementById(p);
						var color = String(oC[Math.floor(Math.random() * 4)]);

						p.style.backgroundColor = color;
					//	p.style.gridRow = grid[0] + "/span 1";
					//	p.style.gridColumn = grid[1] + "/span 1";
					//	p.style.backgroundSize = "1px 1px";	


					},new : function(){


						//insert pixel element
						var s = document.getElementById("screen");
						//var p = Array(parseInt((Math.random() * 144) + 1),(parseInt(Math.random() * 160) + 1));

						//initializing array covering Gameboy Screen
						var a = Array(); 
						for(r = 0; r < 144; r++){

							for(c = 0; c < 160; c++){
								var n = document.createElement("div");
								a.push(r + "," + c);
								n.id = r + "," + c;  //creating unique div insertion
								s.appendChild(n);	//inserting into container
								
								randomPixel.gameboyclassiccolor(n.id); //random color generation
							}
						}

						//checking output
						console.log(" This is a: ",a,
													" This is s: ",s.querySelectorAll("div")
											);
						/*
							obsolete reference
						if(i != null){
									
							console.log("pixel space already occupied");
							randomPixel.new();	
						}
						*/
						

						return;
					}, change : function(){

							var s = document.getElementById("screen").childNodes;
							var c = 0;

							s.forEach(function(item){
					
									bgColor = window.getComputedStyle(item, null).getPropertyValue("background-color");
									if(bgColor !== oC[0]){
										randomPixel.gameboyclassiccolor(item.id);
									}else{
										c++;
									}

								}

							)
							
							if(c == 23040){  //stopping interval

								console.log("c = 23040");
								clearInterval(interval);

							}else if(c < 23040){

							
								console.log(c, " is < ", 23040);
							}else{
								console.log("what why even this?");
								return;
							}

					}
				};
function newpixel(){

	screen = document.getElementById("screen");
	children = screen.childElementCount;
		console.log(children);
	if(children == 23040){
		document.getElementById("powerswitch").addEventListener("click", power);
		var interval = setInterval(change, 16.67);

	}else if(children == 0){
	
		randomPixel.new();
	
	}
	console.log("finish");
	console.log();
	function change(){

							var s = document.getElementById("screen").childNodes;
							var c = 0;

							s.forEach(function(item){
					
									bgColor = window.getComputedStyle(item, null).getPropertyValue("background-color");
									if(bgColor !== oC[0]){
										randomPixel.gameboyclassiccolor(item.id);
									}else{
										c++;
									}

								}

							)
							
							if(c == 23040){  //stopping interval

								console.log("c = 23040");
								clearInterval(interval);

							}else if(c < 23040){

							
							//	console.log(c, " is < ", 23040);
							}else{
								console.log("what why even this?");
								return;
							}

					}
				

	return;

}



function font(){

	tA = document.getElementById("text").value;
}






//*    Gameboy System Functions    *//
/*
	I generically labeled these functions so as to get an idea of how to handle
	the requests, responses, and their relationships here....

	The Model is where game will load.
	The View is display screen is located, and user inputs.(I/O region)
	Controller manages interactions.  

*/



//*     "Power"      *//
// current functions:
// LED "displays" red on/black off
// switch moves to "on" or "off" state
// screen initializes full pixel grid or resets to "off" with no pixels.
//     -current version so "games" will access same view/controller configuration.
function power(){

	var pSwitch = document.getElementById("powerswitch").style;
	var pLed = document.getElementById("powerled").style;
	var screen = document.getElementById("screen");

	var ledSwitch = Array(0, "rgb(200, 20, 20)", 4, "rgb(0, 0, 0)", "30px", "50px"); //led values("on", "off")
	var newState = Array(); 

	//global power variable controls gameboy power state.
	if(p == false){   
		newState = [1,0,4];
		p = true;
		newpixel();

	}else if(p == true){
		newState = [2,4,5];
		p = false;
		
		while(screen.hasChildNodes()){  // clearing pixels off screen
		screen.removeChild(screen.firstChild);
		}
	}else{
		newState = [2,4,5];
		console.log("power element state was invalid, switching to off");
	}

	// screen, power led, and power switch state change
	pLed.backgroundColor = ledSwitch[newState[0]];
	screen.style.backgroundColor = oC[newState[1]];
	pSwitch.marginTop = ledSwitch[newState[2]];

	console.log("Gameboy active state is now: ",p);

	  //run logo before loading program

	return;

}


	












