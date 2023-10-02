/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Variable that will hold the 'Game' object created when the 'Start Game' button is clicked.

let phraseHunter;

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
    phraseHunter = new Game();
    phraseHunter.startGame();
})

// This event listener will trigger when any of the letter keys of the onscreen keyboard
// are clicked and send the button trhough the game's 'handleInteraction' function.

keyboard.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (button) {
        phraseHunter.handleInteraction(button);
    }
})

// This event listener will trigger when a player keys any key on their keyboard.
// It will first go through a validator and if it passes, will then be sent through 
// the game's 'handleInteraction' function.

document.addEventListener('keyup', (e) => {
    const pressedKey = e.key.toLowerCase();
    let keyboardKey = null;
    if (overlay.style.display === 'none') {
        keyboardBtn.forEach (key => {
            if (key.innerHTML === pressedKey) {
                keyboardKey = key;
            }
        });
        phraseHunter.handleInteraction(keyboardKey);
    }
})

