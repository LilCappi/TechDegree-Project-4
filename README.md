# TechDegree-Project-4
TechDegree Project 4 (OOP Game Show App) *__"Guess that Shonen"__*

![Guess_that_Shonen](https://github.com/LilCappi/TechDegree-Project-4/assets/110640816/bd226b32-1874-41af-9735-4b7fd81d49b4)

## About this project

This project is the fourth in the Team Treehouse TechDegree Full-Stack JavaScript course.

Object-oriented program is the bases for this project.

### Allowing the user to:

* Click on the onscreen keyboard for input
* Typing on the users own keyboard for input
* Displaying correct input selections from a random 'phrase'

## Features
### 'Keyup' event

This will allow players to utilize their own keybard rather than rely on the onscreen keyboard

### Personal stylization

I've changed the name of the project from 'Phase Hunter' to 'Guess that Shonen'.

I also included 15 new 'phrases' or titles of shonen manga/anime to help diversify the phrases a player could guess from.

Some styles set in the base of the CSS form have been changed to personalize the application, such as:

.space width = 30px (original 15px)

.show background-color = #243d91(Dark blue) (original #4ac0d5(light grey-blue))

.show border-radius = 50px (original 5px) 

*(wanted a more round display when a matching letter is displayed to differintiate shown letters and hidden letters)*

.chosen background = #3b9233(green for correct) (original #3a3f58)

.wrong background = #c43333(red for incorrect) (original #f7a964)

.start background-color = #30429b(dark grey-blue) (original #3a3f58)

*__ADDED__* #game-over-message white-space: pre-line (then added a new line to the gameOverMessage to display the phrase the player was trying to guess

### Random winning background color

A random background color is also substituted whenever a player wins rather than displaying the same background.

This utitlizes several functions within the code (componentToHex, randColorHex, and randomNumberGenerator) to replace the '--color-win' variable set in the CSS

*(website cited within the 'App.js' file where function 'componentToHex' and 'randColorHex' came from)*

