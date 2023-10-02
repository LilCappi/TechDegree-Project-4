/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Variables for:
// Overlay
// Player's hearts
// Onscreen keyboard buttons

const overlay = document.getElementById('overlay');
const heartContainers = document.querySelectorAll('#scoreboard li');
const keyboardBtn = document.querySelectorAll('#qwerty button');

/*  Game Class
*
*   This is the Game class which holds a constructor that sets:
*   Misses (automatically set to zero by default)
*   An array of phrases (created using the constructor from Phrase.js)
*   An 'activePhrase' Which is randomly selected from the 'phrases' array
*/

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Jujutsu Kaisen'),
            new Phrase('Dragon ball Z'),
            new Phrase('My hero Academia'),
            new Phrase('Undead Unluck'),
            new Phrase('Misson Yozakura Family'),
            new Phrase('Spy x Family'),
            new Phrase('One Punch Man'),
            new Phrase('Chainsaw Man'),
            new Phrase('One Piece'),
            new Phrase('Naruto'),
            new Phrase('Pokemon'),
            new Phrase('YuYu Hakusho'),
            new Phrase('Black Clover'),
            new Phrase('Mashle Magic and Muscle'),
            new Phrase('Demon Slayer'),
            new Phrase('Tokyo Ghoul'),
            new Phrase('Hunter x Hunter'),
            new Phrase('Dr Stone'),
            new Phrase('Death Note'),
            new Phrase('Bleach')
        ];
        this.activePhrase = null;
    }

    /*  startGame()
    *
    *   This function sets the overlay display to 'none' and then selects a random quote
    *   from 'phrases' and sets it to 'activePhrase'.
    *   Then 'activePhrase' is displayed to the screen via empty 'li' containers
    */

    startGame() {
        overlay.style.display = 'none'
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /*  getRandomPhrase()
    *
    *   This function selects a phrase from 'phrases' at random
    */

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /*  handleInteraction(@param button = (button.key)) 
    *   
    *   This function handles the onscreen keyboard interaction as well as the 'keyup' event listener in App.js.
    *   This function takes in the 'button' param (which comes through as a 'button.key') and does the following:
    *   Disables the button
    *   Sets button's innerText to 'btnValue'
    *   Checks if the 'activePhrase' contains the 'btnValue', if so:
    *       Set add the 'chosen' class to button
    *       Run the 'btnValue' through the 'showMatchedLetter' function
    *       Run the 'checkForWin' function
    *   else:
    *       Add the 'wrong' class to button
    *       Run the 'removeLife' function
    */

    handleInteraction(button) {
        button.disabled = true;
        const btnValue = button.innerText;

        if (this.activePhrase.checkLetter(btnValue)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(btnValue);
            this.checkForWin();
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    /*  removeLife()
    *
    *   This function:
    *   Sets the 'heartLost' to the selected scoreboard heart based on the number of times missed (thus heartContainers[index])
    *   Sets the 'heartLost' innerHTML to replace the heart image with a 'lostHeart' image
    *   Deducts 100 points from player score
    *   Increments 'missed'
    *   Then checks the value of 'missed' and if it is equal to '5', then runs 'gameover' function with the boolean param 'false' (player lost)
    */

    removeLife() {
        const heartLost = heartContainers[this.missed];
        heartLost.innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">';
        playerScore -= 100;
        this.missed++;
        if (this.missed === 5) {
            this.gameover(false);
        }
    }

    /*  checkForWin()
    *
    *   This function sets all 'li' elements in the phrase ul to 'allLetters' (including spaces)
    *   Then 'numShown' is created and set to zero
    *   'allLetters' is then itterated through and for each letter with 'show' in its class (or if 'space' is in its class), increment 'numShown'
    *   if 'numShown' is equal to the length of 'allLetters':
    *       Run 'gameover' function with the boolean param 'true' (player won)
    */

    checkForWin() {
        const allLetters = document.querySelectorAll('#phrase li');
        let numShown = 0;
        allLetters.forEach(show => {
            if (show.className.includes('space') || show.className.includes('show')) {
                numShown += 1;
            }
        })
        if (numShown === allLetters.length) {
            this.gameover(true)
        }
    }

    /*  gameover(@param gameWon = (boolean))
    *
    *   This function changes the overlay based on whether the player won or lost
    *   Sets 'gameOverMessage' to the overlay 'h1' element
    *   Sets 'thePhrase' to the current 'activePhrase' in all caps
    *   Sets overlay display to 'block'
    *   If player did not win the game
    *       Sets overlay class to 'lose' 
    *       'gameOverMessage' innerHTML is set to the message to a losing message
    *       Resets 'playerScore' back to zero
    *       Then runs 'reset' function
    *   Else player wins the game
    *       Sets '--color-win' var in CSS to a random color hex
    *       Sets overlay class to 'win'
    *       'gameOverMessage' innerHTML is set to a winning message
    *       Then runs 'reset' function
    */

    gameover(gameWon) {
        const gameOverMessage = document.querySelector('#overlay h1');
        const thePhrase = this.activePhrase.phrase.toUpperCase();
        overlay.style.display = 'block';
        if (gameWon !== true) {
            overlay.className = 'lose';
            gameOverMessage.innerHTML = `Sorry, you've lost!<br>The phrase was: "${thePhrase}"<br>Your score was: ${playerScore}`;
            playerScore = 0;
            this.reset();
        } else {
            document.documentElement.style.setProperty('--color-win', randColorHex(randomNumberGenerator(250), randomNumberGenerator(250), randomNumberGenerator(250)));
            overlay.className = 'win';
            gameOverMessage.innerHTML = `You've won!<br>The phrase was: "${thePhrase}"<br>Your score was: ${playerScore}`
            this.reset();
        };
    }

    /*  reset()
    *
    *   This function resets the game after a player has won or lost so that a new game can be started once the 'Start Game' button is clicked
    *   Sets 'phraseUL' to the 'ul' element in the div with the Id 'phrase'
    *   'phraseUl' innerHTML is set to '' to clear out any 'li' elements
    *   'keyboardBtn' is itterated through and removes the 'disabled' attribute from all onscreen keyboard buttons
    *   'heartContainers' is ittereated through and sets all player hearts images to 'liveHeart'
    */
    reset() {
        const phraseUL = document.querySelector('#phrase ul');
        phraseUL.innerHTML = '';
        keyboardBtn.forEach(key => {
            key.className = 'key';
            key.removeAttribute('disabled');
        });
        heartContainers.forEach(heart => {
            heart.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
        });
    }
}