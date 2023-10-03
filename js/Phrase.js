/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


// Variable set for the 'ul' element in the div with the Id 'phrase'

const phraseUL = document.querySelector('#phrase ul');

/*  Phrase Class
*
*   This is the Phrase class which holds a constructor that sets:
*   'phrase' to a lowercased version of 'phrase'
*   'hint' to a hint that is displayed to help the player guess the phrase
*/

class Phrase {
    constructor(phrase, hint){
        this.phrase = phrase.toLowerCase();
        this.hint = hint;
    }

    /*  addPhraseToDisplay()
    *
    *   This function creates individual 'li' elements for each char in 'phrase' and inserts them into 'phraseUL'
    *   A new 'phrase' const is created and set to split version of 'this.phrase'
    *   Creates a 'phraseHTML' variable
    *   'phrase' is itterated through and for each 'char':
    *   If 'char' is a space
    *       Adds a template litteral of a 'li' element with the class 'space' to 'phraseHTML' 
    *   Else if 'char' is a letter
    *       Adds a template litteral of a 'li' element with the class 'hide letter {char}' and innerHTML of {char} to 'phraseHTML' 
    *   Then inserts 'phraseHTML' into 'phraseUL'
    */

    addPhraseToDisplay() {
        const phrase = this.phrase.split('');
        let phraseHTML = '';
        phrase.forEach(char => {
            if (char === ' ') {
                phraseHTML += `<li class="space"> </li>`;
            } else {
                phraseHTML += `<li class="hide letter ${char}">${char}</li>`;
            }
        })
        phraseUL.insertAdjacentHTML('beforeend', phraseHTML);
    }

    /*  checkLetter(@param char = (letter value))
    *   
    *   This function checks if the param 'char' is in 'phrase'
    *   Returns a boolean value depending on whether 'char' is in 'phrase'
    */

    checkLetter(char) {
        return this.phrase.includes(char);
    }

    /* showMatchedLetter(@param char = (letter value))
    *
    *   This function selects all 'li' elements in the div with Id 'phrase' that match the param 'char' and displays them
    *   'matchingChar' is set to all 'li' elements with the class {char}
    *   'matchingChar' is then itterated thorugh:
    *       Sets each 'li' class to 'show letter {char}
    *       Adds 100 points to the players score
    */

    showMatchedLetter(char) {
        const matchingChar = document.querySelectorAll(`.${char}`);
        matchingChar.forEach(letter => {
            letter.className = `show letter ${char}`;
            playerScore += 100;
        })
    }
}