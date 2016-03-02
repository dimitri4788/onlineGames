window.onload = function()
{
    var alphabets = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z',
                     '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    //Global variables
    var word;                 //Selected word
    var guess;                //Guess
    var guesses = [];         //Stored guesses
    var lives;                //Lives
    var nCorrectGuesses;      //Count correct guesses
    var nVowelsSpecialChar;   //Number of vowels and special character in the movie name
    var spaces;               //Number of spaces in full movie name are marked by '-'

    //Create alphabets ul
    var buttons = function()
    {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for(var i=0; i<alphabets.length; i++)
        {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabets[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    //Create guesses ul
    result = function()
    {
        wordHolder = document.getElementById('wordHold');
        correct = document.createElement('ul');

        for(var i = 0; i < word.length; i++)
        {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if(word[i] === "-")
            {
                guess.innerHTML = "-";
                spaces += 1;
            }
            else if(word[i] === ":" || word[i] === "." || word[i] === "," || word[i] === "&" || word[i] === "'" || word[i] === "*" || word[i] === "!")
            {
                guess.innerHTML = word[i];
                nVowelsSpecialChar += 1
            }
            else if(word[i].toUpperCase() === "A" || word[i].toUpperCase() === "E" || word[i].toUpperCase() === "I" || word[i].toUpperCase() === "O" || word[i].toUpperCase() === "U")
            {
                guess.innerHTML = word[i];
                nVowelsSpecialChar += 1
            }
            else
            {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    //Get element mylives
    var showLives = document.getElementById("mylives");

    //Show lives
    comments = function()
    {
        showLives.innerHTML = "You have " + lives + " lives";
        if(lives < 1)
        {
            showLives.innerHTML = "Game Over!";
        }
        for(var i=0; i<guesses.length; i++)
        {
            if(nCorrectGuesses + spaces + nVowelsSpecialChar === guesses.length)
            {
                showLives.innerHTML = "You Win!";
            }
        }
    }

    //Animate woman
    var animate = function()
    {
        var drawMe = lives;
        drawArray[drawMe]();
    }


    //Hangwoman
    canvas = function()
    {
        myStickWoman = document.getElementById("stickWoman");
        context = myStickWoman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };

    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy)
    {
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }

    head = function()
    {
        myStickWoman = document.getElementById("stickWoman");
        context = myStickWoman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
    }

    hair = function()
    {
        myStickWoman = document.getElementById("stickWoman");
        context = myStickWoman.getContext('2d');
        var hairCoords = [ [39,37], [43,33], [47,29], [73,29], [77,33], [81,37] ];
        for(var i = 0; i < hairCoords.length; i++)
        {
            context.beginPath();
            context.arc(hairCoords[i][0], hairCoords[i][1], 2, 0, Math.PI * 2, true);
            context.stroke();
        }
        context.closePath();
    }

    frame1 = function() { draw(0, 150, 150, 150); };
    frame2 = function() { draw(10, 0, 10, 600); };
    frame3 = function() { draw(0, 5, 70, 5); };
    frame4 = function() { draw(60, 5, 60, 15); };
    torso = function() { draw(60, 36, 60, 70); };
    rightArm = function() { draw(60, 46, 100, 50); };
    leftArm = function() { draw(60, 46, 20, 50); };
    rightLeg = function() { draw(60, 70, 100, 100); };
    leftLeg = function() { draw(60, 70, 20, 100); };
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso, hair, head, frame4, frame3, frame2, frame1];

    //OnClick Function
    check = function()
    {
        list.onclick = function()
        {
            var pGuessed = (this.innerHTML);
            pGuessed = pGuessed.toUpperCase();
            this.setAttribute("class", "active");
            this.onclick = null;

            for(var i = 0; i < word.length; i++)
            {
                if(word[i] === pGuessed)
                {
                    guesses[i].innerHTML = pGuessed;
                    nCorrectGuesses += 1;
                }
            }
            var j = (word.indexOf(pGuessed));
            if(j === -1)
            {
                lives -= 1;
                comments();
                animate();
            }
            else
            {
                comments();
            }
        }
    }

    //This is where the game begins
    play = function()
    {
        //Select a random movie from moviesArray
        var randIdx = Math.floor(Math.random() * moviesArray.length);
        var movieName = moviesArray[randIdx];
        movieName = movieName.toUpperCase();

        //Remove that movie from moviesArray so that it won't get selected again
        moviesArray.splice(randIdx, 1);

        word = movieName;
        word = word.replace(/\s/g, "-");
        buttons();

        guesses = [];
        lives = 10;
        nCorrectGuesses = 0;
        nVowelsSpecialChar = 0;
        spaces = 0;
        result();
        comments();
        canvas();
    }

    //This gets called and to start the game
    play();

    //This gets called when player clicks on "PLAY AGAIN" button
    document.getElementById('reset').onclick = function()
    {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        context.clearRect(0, 0, 100, 100);
        play();
    }
}
