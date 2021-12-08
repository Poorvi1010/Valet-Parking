//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
//Give specific height and width to the car image
greencar_height=100;
greencar_width=75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() {
	background_Image_Tag=new Image();
	background_Image_Tag.onload=uploadBackground;
	background_Image_Tag.src=background_image;

	greencar_Image_Tag=new Image();
	greencar_Image_Tag.onload=uploadgreencar;
	greencar_Image_Tag.src=greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_Image_Tag,0,0,canvas.width,canvas.height)
}

function uploadgreencar(){
	
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_Image_Tag,greencar_x,greencar_y,greencar_width,greencar_height)
}
	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	function Up(){
		if(greencar_y>=0){
		greencar_y-=10;
		uploadBackground();
		uploadgreencar();
		}
}

function down()
{
	if(rover_y<=500){
        rover_y+=10;
        uploadBackground();
    uploadgreencar();
    }
}

function left()
{
	if(rover_y<=500){
        rover_y+=10;
        uploadBackground();
    uploadgreencar();
    }
}

function right()
{
	if(greencar_x>=0){
		greencar_x-=10;
		uploadBackground();
		uploadgreencar();
		}
}