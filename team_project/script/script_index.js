
//Gurkirat 
let startTime = 0; //start rtime
let typedCorrect = 0; //score
let mistakes = 0;
let timer;
let timeLimit = 30; // Set a time limit for the test (30 seconds)

let sentences = [
    "This is a test",
    "This is another test",
    "The quick brown fox jumps over the lazy dog",
    "Typing fast requires practice and accuracy",
    "JavaScript is a versatile programming language",
    "Never stop learning and improving your skills",
    "Coding challenges help sharpen problem-solving abilities",
    "A journey of a thousand miles begins with a single step",
    "Success comes to those who work hard and never give up",
    "Practice makes perfect, so keep typing every day",
    "Errors are just stepping stones to mastery",
    "A smooth sea never made a skilled sailor",
    "Stay focused and type with precision",
    "Speed and accuracy go hand in hand",
    "Keep your fingers light and let them flow"
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
