/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Accept yourself'),
            new Phrase('Life is but a dream'),
            new Phrase('You are amazing'),
            new Phrase('What we think we become'),
            new Phrase('Know your worth')
        ];
        this.activePhrase = null;
    }
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none'
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    handleInteraction() {

    }
    removeLife() {
        const heartsLeft = document.querySelectorAll('#scoreboard li');
        this.missed++;
    }
    checkForWin() {
        const allLetters = document.querySelectorAll('#phrase li');
        let numShown = 0;
        allLetters.forEach(show => {
            if (show.className.includes('space') || show.className.includes('show')) {
                numShown += 1;
            }
        })
        if (numShown === allLetters.length) {
            return didWin = true;
        } else {
            return didWin = false;
        }
    }
    gameover() {

    }
}