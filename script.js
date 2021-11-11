/* Array of objects -> each object has a word and its hint
// var wordsArray = [
//     {word: "asteroid",
//       hint: "a small rocky body orbiting the sun" },
//     {word: "constellation",
//       hint: "a group of stars that form a pattern in the sky"},
//     {word: "nebula",
//       hint: "a giant cloud of dust and gas in space"},
//     {word: "telescope",
//       hint: "instrument used to view distant objects in space"},
//     {word: "satellite",
//       hint: "an object in orbit"},      
//     {word: "galaxy",
//       hint: "a system of stars and planets"}]
*/

// Array of words
const words = ["ASTEROID", "GALAXY", "NEBULA", "TELESCOPE", "SATELLITE", "CONSTELLATION", "METEOR", "GRAVITY", "PLANET", "INTERSTELLAR",]
const randomWord = words[Math.floor(Math.random() * words.length)]; //expression to pick random word from array
const word = randomWord
var guessedLetters = [];
var beamOpacity = 0;
console.log(word)

var ufo = document.querySelector(".ufo")
var spaceman = document.querySelector(".spaceman")
var spacesContainer = document.querySelector(".spacesContainer")
var letter = ""
var letterClicked = ""
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 
                'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X',
                'Y', 'Z']

// Display alphabet buttons
var displayAlphabet = () => {
    alphabetContainer = document.getElementById("alphabetContainer")
    lettersList = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) {
      lettersList.id = 'alphabet';
      letter = document.createElement('li');
      letter.id = alphabet[i];
      letter.setAttribute("class", "letter")
      letter.innerHTML = alphabet[i];
      alphabetContainer.appendChild(lettersList);
      lettersList.appendChild(letter);
    }      
}

// Go through all the letters of the word and if a letter has not been guessed, there is an underscore
var getWordStatus = () => {
    var wordStatus  = [];
    var splitWord = word.split("");
  
    splitWord.forEach(function (letter) {
      if (guessedLetters.indexOf(letter) > -1) {
        wordStatus.push(letter);
      } else {
        wordStatus.push("_");
      }
    });
  
    return wordStatus;
  };

// Console logs letter when clicked and returns true if 'word' contains letter clicked
var guess = () => {
    document.querySelectorAll(".letter").forEach(element => {
        element.addEventListener('click', event => {
            letterClicked = (element.innerText)
            console.log(letterClicked)

            if(word.includes(letterClicked)){ // If word contains letter clicked
                console.log("true")
                if (guessedLetters.indexOf(letterClicked) > -1) { // check if letter has already been clicked
                    return;
                }
                guessedLetters.push(letterClicked)
                console.log(guessedLetters)
                displayWord();
                hideButton(letterClicked);
                displayGameWon();
                
            }
            
            else{ // If word does not contain letter clicked
                console.log("false")
                subtractGuess() // subtract 1 from guess count
                hideButton(letterClicked)
                
                // increase opacity of beam
                console.log(beamOpacity)
                var beam = document.querySelector(".beam")
                beamOpacity += 0.16
                beam.style.opacity = beamOpacity
                console.log(beamOpacity)
            }
        },{once : true}) // makes the button clickable once
     })
 }

// reset spaces
var resetSpaces = function () {
    var word = document.getElementById("currentWord");
    while (word.firstChild) {
      word.removeChild(word.firstChild);
    }
}

 // Display word AND spaces
 var displayWord = (word) => {
    resetSpaces();
    var currentWordDOM = document.querySelector('#currentWord')
    var currentWord = getWordStatus();
     currentWord.forEach(function (letterClicked) {
         letterContainer = document.querySelector(".letterContainer")
         var spanLetter = document.createElement("span")
         var content = document.createTextNode(letterClicked);

         spanLetter.appendChild(content)
         currentWordDOM.appendChild(spanLetter)
     })
 }

// Subtract 1 guess everytime player chooses wrong letter AND increase opacity of tractor beam
var subtractGuess = () => {
     var num = document.querySelector(".guessesLeft").innerText
     var newNum = parseInt(num);
     newNum = (newNum -1)
    document.querySelector(".guessesLeft").innerText = newNum;
    if (newNum == 0){
        displayGameOver()
    }
}

// Display game over message
var displayGameOver = () => {
    console.log("game over")
    gameOverContainer = document.querySelector(".gameover")
    var gameOver = document.createElement("h1");
    var subHeader = document.createElement("p")
    var subHeader2 = document.createElement("p")
    gameOver.innerText = "GAME OVER"
    subHeader.innerText = "The astronaut was abducted :("
    subHeader2.innerText = `The word is ${word}`
    gameOverContainer.appendChild(gameOver)
    gameOverContainer.appendChild(subHeader)
    gameOverContainer.appendChild(subHeader2)
}

// Display game won message
var displayGameWon = () => {
    if (getWordStatus().indexOf("_") < 0){
        console.log("game won")
        gameOverContainer = document.querySelector(".gameover")
        var gameOver = document.createElement("h1");
        var subHeader = document.createElement("p")
        gameOver.innerText = "GAME OVER"
        subHeader.innerText = "You won! :)"
        gameOverContainer.appendChild(gameOver)
        gameOverContainer.appendChild(subHeader)
    }
}

// Restart game when button pressed
var restart = () => {
    var restartButton = document.querySelector(".restart")
    restartButton.addEventListener("click", event => {
        location.reload();
    })

}

// Change button styling to show it has been clicked
var hideButton = (letterClicked) => {
    var id = letterClicked;
    var letterButton = document.querySelector(`#${id}`)
    letterButton.style.opacity = "0.25";
    // letterButton.style.borderColor = "#C5C5C5"
    // letterButton.style.color = "#C5C5C5"                                                                   
}

// Display hint upon click
var hint = () => {
    var hintButton = document.querySelector("#hintWrapper")
    hintButton.addEventListener('click', event => {
        console.log("hint button test")
        var hint = document.createElement("p")
        if(word == "ASTEROID"){
            hint.innerText = "a small rocky body orbiting the sun"
        }
        if(word == "GALAXY"){
            hint.innerText = "a system of stars and planets"
        }
        if(word == "NEBULA"){
            hint.innerText = "a giant cloud of dust and gas in space"
        }
        if(word == "TELESCOPE"){
            hint.innerText = "an instrument used to view distant objects in space"
        }
        if(word == "SATELLITE"){
            hint.innerText = "an object in orbit"
        }
        if(word == "CONSTELLATION"){
            hint.innerText = "a group of stars that form a pattern in the sky"
        }
        if(word == "METEOR"){
            hint.innerText = "a space rock that enters Earth's atmosphere"
        }
        if(word == "GRAVITY"){
            hint.innerText = "a force that pulls two objects toward each other"
        }
        if(word == "INTERSTELLAR"){
            hint.innerText = "situated or occurring between the stars. Also the name of a Christopher Nolan movie."
        }
        if(word == "PLANET"){
            hint.innerText = "a celestial body orbiting around a star."
    
        }

        hint.setAttribute("id", "hintDescription")
        hintWrapper = document.querySelector("#hintWrapper")
        hintWrapper.appendChild(hint)
    }, {once : true})
}

displayWord()
displayAlphabet()
guess()
restart()
hint()




