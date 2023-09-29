/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameBtn = document.getElementById('btn__reset');

startGameBtn.addEventListener('click', () => {
    const newPhrase = new Phrase('Hello all');
    newPhrase.addPhraseToDisplay();
})