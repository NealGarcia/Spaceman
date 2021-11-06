// Array of objects -> each object has a word and its hint
var wordsArray = [
    {word: "asteroid",
     hint: "a small rocky body orbiting the sun" },
    {word: "constellation",
     hint: "a group of stars that form a pattern in the sky"},
    {word: "nebula",
     hint: "a giant cloud of dust and gas in space"},
    {word: "telescope",
     hint: "instrument used to view distant objects in space"},
    {word: "satellite",
     hint: "an object in orbit"},      
    {word: "galaxy",
     hint: "a system of stars and planets"}
]

var ufo = document.querySelector(".ufo")
var spaceman = document.querySelector(".spaceman")
var restartButton = document.querySelector(".restart")
var spacesContainer = document.querySelector(".spaces")
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
                'g', 'h', 'i', 'j', 'k', 'l', 
                'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'y',
                'w', 'y']

wordsArray.forEach(word => {
    var space = document.createElement("h2")
    space.setAttribute("id", "space")
    space.innerText = "_"
    spacesContainer.appendChild(space)
})
    var space = document.createElement("h2")
    space.setAttribute("id", "space")
    space.innerText = "_"
    spacesContainer.appendChild(space)

}
