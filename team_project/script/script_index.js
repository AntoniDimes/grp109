
//Gurkirat 
let startTime = 0; //start rtime
let typedCorrect = 0; //score
let mistakes = 0;
let timer;
let timeLimit = 30; // Set a time limit for the test (30 seconds)


// More sentences (Duy)
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
    "Keep your fingers light and let them flow",
    "Hard work beats talent when talent doesn't work hard",
    "Fast fingers and a sharp mind make a great typist",
    "Every great achievement begins with a single keystroke",
    "Patience and persistence lead to perfection",
    "Don't just type fast, type correctly",
    "Programming is like writing a book, but debugging is like editing it",
    "Great typists make fewer mistakes, not just type faster",
    "Time flies when you're focused on improving your skills",
    "The best way to predict the future is to create it",
    "Creativity and logic come together in programming",
    "A good keyboard makes typing more enjoyable",
    "The only way to get better is to keep practicing",
    "Accuracy first, then speed will follow",
    "Type with confidence and see your speed improve",
    "Your words per minute reflect your dedication to practice",
    "Typing tests are a fun way to challenge yourself",
    "Mistakes help you learn, so don't fear them",
    "A well-paced typist is better than a reckless one",
    "Small improvements each day lead to big results",
    "Focus on one word at a time and build momentum",
    "A typist's best tool is muscle memory",
    "The secret to fast typing is rhythm and consistency",
    "Stay relaxed, and let your fingers do the work",
    "Typing is an essential skill in the digital age",
    "Mastering the keyboard takes time and effort",
    "A good typist reads ahead while typing",
    "Words flow better when you're not overthinking",
    "Typing in silence helps improve focus and precision",
    "Speed improves when you stop second-guessing yourself",
    "Let your fingers glide over the keys effortlessly",
    "Perseverance turns slow typists into speed demons",
    "Each keystroke brings you closer to mastery",
    "Typing without looking at the keyboard is a game changer"
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

newSentence(); // sentence is displayed 
userInput.disabled = false; //enables the input field 
userInput.addEventListener('input', checkInput); // Event listenre for user input 
