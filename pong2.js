var pong = { canvas : document.createElement("canvas"),
			start : function(){
				this.canvas.height = 144;
				this.canvas.width = 160;
				this.context = this.canvas.getContext("2d");
				this.backgroundColor = "rgb(155, 188, 15)";

				var parent = document.getElementById("screen");
				parent.innerHTML = "";
				parent.insertBefore(this.canvas, null);
				this.interval = setInterval(updatePong, 16.67);

			},
			clear : function(){

				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			}, pause : function(){

				clearInterval(this.interval);
			}

		}
var paddle; // Bottom paddle
var ball;   // Ball 
var paddle2;  //Top paddle
var score = Array(0, 0);  // ScoreBoard
var numBer;
var scoreboard; // first is top, second bottom player


function startGame(){
	
	window.addEventListener("keydown", move);
	backboard = new scoreboard(0, 63, 160, 25);
	paddle = new player(5, 20, "rgb(15, 56, 15)", 80, 139);
	paddle2 = new player(5, 20, "rgb(15, 56, 15)", 80, 0);
	ball = new component(5, 5, "rgb(15, 56, 15)", 80, 77);

	pong.start();
	
	
	
}

function updatePong(){


	pong.clear();
	backboard.update();
	paddle.newPos();
	paddle.update();
	paddle2.newPos();
	paddle2.update();
	ball.newPos();
	ball.update();
	
	

}
function scoreboard(x, y, width, height){
	
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;

	this.update = function(points){

		var ctxt = pong.context;
		ctxt.fillStyle = "rgb(149, 172, 15)";
		ctxt.fillRect(this.x, this.y, this.width, this.height);
		ctxt.fillStyle = "rgb(15, 56, 15)";
		ctxt.fillText(score[0] + " : " + score[1], (this.width/2 - 10), (this.y + 20));
		ctxt.fillText("SCORE", (this.width/2 - 17), (this.y + 10));
	}
	
}

function player(height, width, color, x, y){
	
	this.height = height;
	this.width = width;
	this.x = x;
	this.y = y;
	this.speedX = 1;
	this.speedY = 0;
	this.update = function(){
			
			var ctx = pong.context;
			ctx.fillStyle = color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		};
	this.newPos = function(){

		if((this.x + this.width) < 160 && this.x > 0){
		this.x += this.speedX;
		}else{
			
			this.speedX = -(this.speedX);
			this.x += this.speedX;
			
		}
	};
}

function component(width, height, color, x, y){
	
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.speedX = 1;
	this.speedY = 1;
	console.log(color);
	this.update = function(){
		var ctxt = pong.context; 
		ctxt.fillStyle = color;
		ctxt.fillRect(this.x, this.y, this.width, this.height);


	};
	
	this.newPos = function(){
	
// collision detection array	
	var c = Array(paddle.x, (paddle.x + paddle.width), paddle.y, paddle2.x, (paddle2.x + paddle2.width), (paddle2.y + paddle2.height));
// wall detection array
	var w = Array(0, 0, pong.canvas.width, pong.canvas.height);
//object size
	var obj = Array(this.x, this.y, (this.x + this.width), (this.y + this.height));
	
	// check whether near paddles or not, then check walls
	
	/*
	if(obj[1] > c[5] && obj[3] < c[2]){ //out of paddle range of motion
		console.log("Checking for walls");
		if(obj[0] <= w[0] || obj[0] >= w[2]){
			this.speedX = -(this.speedx);
		}
	}else if(obj[1] <= c[5]){ // within paddle2(top) range of motion
		console.log("top paddle range");
		if(obj[0] >= c[3] && obj[0] <= c[4] || obj[2] <= c[4] && obj[2] >= c[3]){
			
			this.speedY = -(this.speedY);
		}else if(obj[0] < w[1]){
			
			this.x = w[2]/2;
			this.y = w[3]/2;
			score[1] += 1;
		}
		
	}else if(obj[3] >= c[2]){ //within paddle(bottom) range of motion
		console.log("bottom paddle range");
		if(obj[0] >= c[0] && obj[0] <= c[1] || obj[2] >= c[1] && obj[2] <= c[0]){
			
			this.speedY = -(this.speedY);
		}else if(obj[0] > w[3]){
			
			this.x = w[2]/2;
			this.y = w[3]/2;
			score[0] += 1;
		}
	
	}else if(obj[0] <= w[0] || obj[2] >= w[2]){
		console.log("more wall catching");
		this.speedX = -(this.speedX);
	
	}
	*/
	
	//second try for collision


		
	if(obj[0] <= w[0] || obj[2] >= w[2]){  // side wall collision
		
		this.speedX = -(this.speedX);
		
	}
	if((obj[0] > (c[0] - this.width) && obj[0] <= c[1] && obj[3] == c[2]) || (obj[0] > (c[3] - this.width) && obj[0] <= c[4] && obj[1] == c[5])){
			
		this.speedY = -(this.speedY);
		if(this.speedX == 0 && (paddle.speedX == 1 || paddle2.speedX == 1)){

			this.speedX = 1;
		}else if(this.speedX == 0 && (paddle.speedX == -1 || paddle2.speedX == -1)){

			this.speedX = -1;
		}
	}

	//-----------------------//
	// points //


	if(obj[1] > w[3]){ 		
		
		this.x = w[2]/2;
		this.y = w[3]/2;
		score[1] += 1;
		this.speedY = -(this.speedY);
		this.speedX = 0;

	}else if(obj[3] < w[1]){
		
		this.x = w[2]/2;
		this.y = w[3]/2;

		score[0] += 1;

		this.speedY = -(this.speedY);
		this.speedX = 0;

	}
	
	
		this.x += this.speedX;
		this.y += this.speedY;
	
	
	}
	
	// c[left, right, top,| left, right, bottom]

			

}
function move(key){


	var a; // holder for move

	if(key.keyCode == undefined){

		a = key;

	}else{

		a = key.keyCode;
	}
	console.log(a);


	switch(a) {
	
		case 37, "LEFT":  //bottom paddle, move left ( <- arrow key)
			
			paddle.speedX = -1;
			
			break;
		case 39, "RIGHT": // bottom paddle, move right ( -> arrow key)
			
			paddle.speedX = 1;
			
			break;
		
		case 65: // top paddle, move left ("A" key)
		
			paddle2.speedX = -1;
			
			break;
		case 68: // top paddle, move right ("F" key)
				
			paddle2.speedX = 1;

		case "start":


			pong.pause();
			break;
		case "select":

			pong.pause();
			pong.start();
			break;

		default:
			
			break;
			
	}

}


/* Known Issues:

 --- line 253: pong.start will continue adding intervals;
			resolved - added a clearinterval that resets interval

--- Scoreboard Text does not stay centered

--- Ball is a square; 

	Ball resets at same angle it leaves screen;
		resolved, have ball being "served" straight opposite direction until hit, then angled at direction of velocity




*/



