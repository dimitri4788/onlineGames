//Get the canvas element
var canvas = document.getElementById("gameCanvas");

//Create the ctx variable to store the 2D rendering context — the actual tool we will use to paint on the Canvas
var ctx = canvas.getContext("2d");

/**
 * @brief Show the message to user to press the spacebar to start the game
 */
function askUserToPressSpacebar()
{
    ctx.font = '50pt Calibri';
    ctx.fillStyle = '#6A8D95';
    ctx.fillText("Press spacebar to start!", 150, 250);
}

/**
 * @brief It draws the woman
 *
 * @param shapeName The name of the shape to draw
 */
function drawHangingWoman(shapeName)
{
    //Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(shapeName == "leftStand")
    {
        //Left leg of stand
        ctx.beginPath();
        ctx.moveTo(550, 450);
        ctx.lineTo(630, 400);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
    }
    else if(shapeName == "rightStand")
    {
        //Right leg of stand
        ctx.beginPath();
        ctx.moveTo(710, 450);
        ctx.lineTo(630, 400);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#61210B';
        ctx.stroke();
    }
    else
    {
        //block of code to be executed if the condition1 is false and condition2 is false
    }
}







//var stickFigureParts = [];
//TODO make separate file for storing colors of various things
//TODO make separate file for storing x,y coordinate of different pieces

/*
//Vertical bar of stand
ctx.beginPath();
ctx.moveTo(630, 70);
ctx.lineTo(630, 400);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();

//Diagonal bar connecting vertical and horizontal bars
ctx.beginPath();
ctx.moveTo(630, 120);
ctx.lineTo(700, 70);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();

//Horizontal bar of stand
ctx.beginPath();
ctx.moveTo(630, 70);
ctx.lineTo(790, 70);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();

//Short vertical bar of stand
ctx.beginPath();
ctx.moveTo(790, 70);
ctx.lineTo(790, 130);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();

//Woman's face outer
ctx.beginPath();
ctx.arc(790,160,30,0,2*Math.PI);
ctx.stroke();

//Woman's middle part
ctx.beginPath();
ctx.arc(790,272,80,0,2*Math.PI);
ctx.stroke();

//Woman's hair
ctx.beginPath();
ctx.fillStyle = "black";
var hairCoords = [ [758,160], [756,168], [754,176], [824,160], [826,168], [828,176]];
for(var i = 0; i < hairCoords.length; i++)
{
    ctx.beginPath();
    ctx.arc(hairCoords[i][0], hairCoords[i][1], 5, 0, Math.PI * 2, true);
    ctx.fill();
}
ctx.closePath();

//Woman's eyes
ctx.beginPath();
ctx.fillStyle = "black";
var eyesCoords = [ [780,156], [800,156]];
for(var i = 0; i < eyesCoords.length; i++)
{
    ctx.beginPath();
    ctx.arc(eyesCoords[i][0], eyesCoords[i][1], 5, 0, Math.PI * 2, true);
    ctx.fill();
}
ctx.closePath();

//Woman's laughing mouth
ctx.beginPath();
ctx.arc(790, 170, 8, 0, Math.PI, false);
ctx.closePath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fill();
ctx.strokeStyle = '#550000';
ctx.stroke();

//Woman's legs
ctx.beginPath();
ctx.moveTo(750, 400);
ctx.lineTo(770, 350);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();
ctx.beginPath();
ctx.moveTo(830, 400);
ctx.lineTo(810, 350);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();

//Woman's hands
ctx.beginPath();
ctx.moveTo(720, 230);
ctx.lineTo(770, 270);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();
ctx.beginPath();
ctx.moveTo(860, 230);
ctx.lineTo(810, 270);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();
*/

//drawHangingWoman("rightStand");
askUserToPressSpacebar();
