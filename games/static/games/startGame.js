//Add keydown event to the checkKeyPressed handler
window.addEventListener("keydown", checkKeyPressed, false);

//Wait for the key Spacebar to start the game
function checkKeyPressed(e)
{
    //Spacebar ASCII is 32
    if (e.keyCode == "32")
    {
        //alert("The 'spacebar' is pressed.");
        drawHangingWoman("rightStand");
    }
}
