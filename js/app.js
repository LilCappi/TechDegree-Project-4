/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Variable that will hold the 'Game' object created when the 'Start Game' button is clicked.
// Variable that will hold the players total score

let guessThatShonen;
let playerScore = 0;

// Variables for the 'Start Game' button and the onscreen keyboard

const startGameBtn = document.getElementById('btn__reset');
const keyboard = document.querySelector('#qwerty');

// randomNumberGenerator randomly selects a number and returns it.
// ***This is only used for the hex converter below***

function randomNumberGenerator(value) {
    const randomNumber = Math.floor(Math.random() * value);
    return randomNumber;
}

/*  ComponentToHex() && randColorHex()
*
*   I wanted to add a way to change the default background color when a player successfully 
*   guesses the phrase so I pulled this hex converting fuctionality from stackoverflow.
*   This will take a random set of numbers (using the randomNumberGenerator method above)
*   and convert that into a hex that can be set. 
*   https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
*/

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

function randColorHex(r, g, b) { 
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// This event listener will trigger when the 'Start Game' button is clicked on the main overlay.
// This will create a new instance of the game and call the new game's 'startGame' function.

startGameBtn.addEventListener('click', () => {
    guessThatShonen = new Game();
    guessThatShonen.startGame();
})

// This event listener will trigger when any of the letter keys of the onscreen keyboard
// are clicked and send the button trhough the game's 'handleInteraction' function.

keyboard.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (button) {
        guessThatShonen.handleInteraction(button);
    }
})

/* This event listener will trigger when a player keys any key on their keyboard.
* 
*   If the overlay is not displayed
*       Itterate through the onscreen keyboard and find the key that matches 'key.innerHTML' and set it to 'keyboardKey'
*   If 'keyboardKey' is not disabled already
*       Run 'handleInteraction' passing 'keyboardKey' as a parameter
*/ 

document.addEventListener('keyup', (e) => {
    const pressedKey = e.key.toLowerCase();
    let keyboardKey = null;
    if (overlay.style.display === 'none') {
        keyboardBtn.forEach (key => {
            if (key.innerHTML === pressedKey) {
                keyboardKey = key;
            }
        });
        if (keyboardKey.disabled !== true){
            guessThatShonen.handleInteraction(keyboardKey);
        }
    }
})

