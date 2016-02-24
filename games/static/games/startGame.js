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
    //Spacebar ASCII is 32
    if (e.keyCode == "32")
    {
        startTheGame();
        //alert(moviesArray[0]); XXX
        //console.log(moviesArray.slice(0, 10)); XXX
        //console.log(moviesArray.length); XXX
        //drawHangingWoman("rightStand"); XXX
    }
}
