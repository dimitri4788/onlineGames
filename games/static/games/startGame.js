//Add keydown event to the checkKeyPressed handler
window.addEventListener("keydown", checkKeyPressed, false);

/**
 * @brief This function waits for the key spacebar
 *  to be pressed to start the game
 *
 * @param e The event of key pressed
 */
function checkKeyPressed(e)
{
    if(e.keyCode == "32")
    {
        //To detect spacebar
        startTheGame("32");
    }
    else
    {
        //To detect a-z, A-Z, 0-9
        var inputKey = String.fromCharCode(e.keyCode);
        if (/[a-zA-Z0-9]/.test(inputKey))
            startTheGame(inputKey);
    }
}

