# TechDegree-Project-4
TechDegree Project 4 (OOP Game Show App) *__"Guess that Shonen"__*

![Guess_that_Shonen](https://github.com/LilCappi/TechDegree-Project-4/assets/110640816/57076bae-93ef-4b21-803c-cb1aa53debcf)

## About this project

This project is the fourth in the Team Treehouse TechDegree Full-Stack JavaScript course.

Object-oriented program is the bases for this project.

### Allowing the user to:

* Click on the onscreen keyboard for input
* Typing on the users own keyboard for input
* Displaying correct input selections from a random 'phrase'

## Features

### Hints (added a new 'h3' element to #phrase)

Added hints to each phrase to help players discern what the phrase may be. The hint only shows if the player has missed three times.

Each hint is specific to the phrase so no two hints are alike.

### Player Score (added a new 'h3' element to #banner)

Added a neat feature for players to accumulate a score based on the number of matching letters and the number of unused letters.

Players will continue to accumulate a score each time they guess a phrase correctly, for each letter not clicked on while guessing, and if the player can guess the phrase without 
triggering the hint. 

Beware: Players will lose points for each incorrect guess and if a player loses the game, their score will also be lost.

### 'Keyup' event

This will allow players to utilize their own keyboard rather than rely on the onscreen keyboard

### Personal stylization

I've changed the name of the project from 'Phrase Hunter' to 'Guess that Shonen'.

I also included 15 new 'phrases' or titles of shonen manga/anime to help diversify the phrases a player could guess from.

Some styles set in the base of the CSS form have been changed to personalize the application, such as:

.space width = 30px (original 15px)

.show background-color = #243d91(Dark blue) (original #4ac0d5(light grey-blue))

.show border-radius = 50px (original 5px) 

*(wanted a more round display when a matching letter is displayed to differintiate shown letters and hidden letters more)*

.chosen background = #3b9233(green for correct) (original #3a3f58)

.wrong background = #c43333(red for incorrect) (original #f7a964)

.start background-color = #30429b(dark grey-blue) (original #3a3f58)

*__ADDED__* 

#game-over-message white-space: pre-line (then added a new line to the gameOverMessage to display the phrase the player was trying to guess)

#hint color: #942cb4 

font-size: x-large

#score border: 2px solid transparent 

background-color: #b9e618 

padding: 8px 8px 8px 8px 

width: 200px 

margin: auto 

margin-top: 20px 

border-radius: 5px 

font-size: x-large

### Random winning background color

A random background color is also substituted whenever a player wins rather than displaying the same background.

This utitlizes several functions within the code (componentToHex, randColorHex, and randomNumberGenerator) to replace the '--color-win' variable set in the CSS

*(website cited within the 'App.js' file where function 'componentToHex' and 'randColorHex' came from)*

