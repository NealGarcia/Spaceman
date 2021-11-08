/* Array of objects -> each object has a word and its hint
// var wordsArray = [
//     [{word: "asteroid",
//      hint: "a small rocky body orbiting the sun" },
//     {word: "constellation",
//      hint: "a group of stars that form a pattern in the sky"},
//     {word: "nebula",
//      hint: "a giant cloud of dust and gas in space"},
//     {word: "telescope",
//      hint: "instrument used to view distant objects in space"},
//     {word: "satellite",
//      hint: "an object in orbit"},      
//     {word: "galaxy",
//      hint: "a system of stars and planets"}]
*/

const word = 'GALAXY'
var ufo = document.querySelector(".ufo")
var spaceman = document.querySelector(".spaceman")
var restartButton = document.querySelector(".restart")
var spacesContainer = document.querySelector(".spaces")
var letter = ""
var letterClicked = ""
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 
                'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X',
                'Y', 'Z']

// Display alphabet buttons
let displayAlphabet = () => {
    alphabetContainer = document.getElementById("alphabetContainer")
    lettersList = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      lettersList.id = 'alphabet';
      letter = document.createElement('li');
      letter.id = alphabet[i];
      letter.setAttribute("class", "letter")
      letter.innerHTML = alphabet[i];
      alphabetContainer.appendChild(lettersList);
      lettersList.appendChild(letter);
    }      
}

// Display spaces 
let displaySpaces = () => {
    for (let i = 0; i < word.length; i++){
        var space = document.createElement("h2")
        space.setAttribute("id", "space")
        space.innerText = "_"
        spacesContainer.appendChild(space)
    }
}

// Displays the word to be guessed in the spaces. Default is hidden. 
let displayWord = () => {
    var guessedWord = document.createElement("h2")
    guessedWord.setAttribute("id", "guessedWord")
    guessedWord.innerText = word
    spacesContainer.appendChild(guessedWord)
}

// Returns true if word contains letter clicked
let guess = () => {
    document.querySelectorAll(".letter").forEach(element => {
        element.addEventListener('click', event => {
            letterClicked = (element.innerText)
            console.log(letterClicked)

            if(word.includes(letterClicked)){
                console.log("true")
                // INSERT FUNCTION CALL IF TRUE
            }
            
            else{
                console.log("false")
                // INSERT FUNCTION CALL IF FALSE
            }
        })
     })
 }

displayAlphabet()
displayWord()
displaySpaces()
guess()

