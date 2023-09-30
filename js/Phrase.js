/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const phraseUL = document.querySelector('#phrase ul');

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phrase = this.phrase.split('');
        console.log(phrase);
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
    checkLetter(char) {
        return this.phraseChar.includes(char);
    }
    showMatchedLetter(char) {

    }
}