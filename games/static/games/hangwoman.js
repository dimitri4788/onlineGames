//Get the canvas element
var canvas = document.getElementById("gameCanvas");

//Create the ctx variable to store the 2D rendering context — the actual tool we will use to paint on the Canvas
var ctx = canvas.getContext("2d");

//List of all the alphabets
var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

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
 * @brief Check if the character is a vowel or not
 *
 * @param c Character to be checked
 *
 * @return Returns true or false
 */
function isVowel(c)
{
    //return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1  XXX
    return vowels.indexOf(c.toLowerCase()) !== -1
}

function isSpecialCharacter(c)
{
    if(c == ":")
        return true;
    //TODO think more here
}

/**
 * @brief Check if the character is a whitespace
 *
 * @param c Character to be checked
 *
 * @return Returns true or false
 */
function isWhiteSpace(c)
{
    if((c == ' ') || (c == '\t'))
        return true
    else
        return false
}

/**
 * @brief This is the main function where the game starts.
 *  It selects a random movie from a list of movies in
 *  the moviesArray array and displays only the consonants
 *  to the player
 */
function startTheGame()
{
    //Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var finalMovieString = "";

    //Select a random movie from moviesArray
    var movieName = moviesArray[Math.floor(Math.random() * moviesArray.length)];
    movieName = movieName.toUpperCase();

    //Loop over the movieName string character by character and fill finalMovieString
    for(idx = 0; idx < movieName.length; idx++)
    {
        if(isVowel(movieName[idx]) == true)
        {
            finalMovieString = finalMovieString.concat(" ");
            finalMovieString = finalMovieString.concat(movieName[idx]);
            finalMovieString = finalMovieString.concat(" ");
        }
        else if(isWhiteSpace(movieName[idx]) == true)
        {
            finalMovieString = finalMovieString.concat(" ");
            finalMovieString = finalMovieString.concat(" ");
            finalMovieString = finalMovieString.concat("-");
            finalMovieString = finalMovieString.concat(" ");
            finalMovieString = finalMovieString.concat(" ");
        }
        else if(isSpecialCharacter(movieName[idx]) == true)
        {
            finalMovieString = finalMovieString.concat(" ");
            finalMovieString = finalMovieString.concat(movieName[idx]);
            finalMovieString = finalMovieString.concat(" ");
        }
        else
        {
            finalMovieString = finalMovieString.concat(" ");
            finalMovieString = finalMovieString.concat("_");
            finalMovieString = finalMovieString.concat(" ");
        }
    }
    //ctx.fillText(movieName.toUpperCase(), 150, 250);
    //ctx.fillText(movieName.toUpperCase(), 150, 250);
    ctx.font = '20pt Calibri';
    ctx.fillStyle = '#6A8D95';
    ctx.fillText(finalMovieString, 150, 250);
    ctx.fillText(movieName, 150, 450);
    ctx.fillText(alphabets, 150, 350);


    //ctx.fillText(moviesArray[Math.floor(Math.random() * moviesArray.length)], 150, 250);
    //alert(moviesArray[0]+moviesArray[1]);
    /*
    alert(moviesArray[Math.floor(Math.random() * moviesArray.length)]);
    word = moviesArray[Math.floor(Math.random() * moviesArray.length)];
    var guess;
    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    if(word[i] === "-") {
     guess.innerHTML = "-";
     space = 1;
    } else {
     guess.innerHTML = "_";
    }
    ctx.font = '30pt Calibri';
    ctx.fillStyle = '#6A8D95';
    ctx.fillText(moviesArray[Math.floor(Math.random() * moviesArray.length)], 150, 250);
    */
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
