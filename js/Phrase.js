/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const newPhrase = this.phrase.split('');
        console.log(newPhrase);
    }
    checkLetter() {

    }
    showMatchedLetter() {

    }
}