
//Gurkirat 
let startTime = 0; //start rtime
let typedCorrect = 0; //score
let mistakes = 0;
let timer;
let timeLimit = 30; // Set a time limit for the test (30 seconds)

let sentences = [
    "This is a test",
    "This is another test" //to add more sentences to array
];

//DOM elements
let sentenceDisplayed = document.getElementById('sentence'); //display sentence to type
let userInput = document.getElementById('input');//user input
let timeDisplayed = document.getElementById('time');//displays time
let mistakeCounter = document.getElementById('mistakes');//
let results = document.getElementById('result');//displays result

// Function to show a new sentence
function newSentence() { //to display a new sentenec
    let randomIndex = Math.floor(Math.random() * sentences.length); // Get a random sentence
    sentenceDisplayed.textContent = sentences[randomIndex]; // Display the random sentence
    userInput.value = ''; // Clear the input field 
    mistakeCounter.textContent = mistakes; // Resets the mistakes
}
