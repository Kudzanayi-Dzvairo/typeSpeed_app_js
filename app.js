window.addEventListener('load', init)
//Global Variables

//Available levels
const levels = {
    easy:7,
    medium: 5,
    hard:3
}

//to change level
const currentLevel = levels.hard;

//To change level
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//Initialize Game
function init(){
    //show number of secods in UI
    seconds.innerHTML = currentLevel
    //Load word form array
    showWord(words);
    //start matching on word input 
    wordInput.addEventListener('input', startMatch)
    //Call countdown every second
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);
}

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value ='';
        score++;
    }

    //if score is -1, display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else{
    scoreDisplay.innerHTML = score
    }
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

//Pick and show random word
function showWord(words){
//Gnerate random array index
    const randIndex = Math.floor(Math.random() * words.length);
//Outout random word
    currentWord.innerHTML = words[randIndex]
}

function countdown(){
    //make sure time is not run out 
    if(time > 0){
        //Decrement
        time --
    }else if(time === 0){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

//Check game status 
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over Bitch!!!'
        score = -1;
    }
}