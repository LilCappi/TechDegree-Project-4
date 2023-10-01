/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let phraseHunter;
let didWin;

const startGameBtn = document.getElementById('btn__reset');

startGameBtn.addEventListener('click', () => {
    phraseHunter = new Game();
    phraseHunter.startGame();
})