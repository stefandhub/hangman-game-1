
/*Creating an array of words, each word has a hint*/
class Word {
 constructor (word, hint) { 
  this.word = word;
  this.hint = hint;
}
}
const word1 = new Word ('cat', "It's not the best friend of a dog")
const word2 = new Word ('pizza', 'The favourite food of each Italian')
const word3 = new Word ('javascript', 'The language that make me tilt')
const word4 = new Word ('hangman', 'The name of this game')

const wordsArray = [word1, word2, word3, word4]
const displayWord = document.getElementById("word");

/*pick a random word from "wordsAr ray" and return it as the word to be guessed*/
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'assets/images/hangman/hangman_2.png';

imgArray[1] = new Image();
imgArray[1].src = 'assets/images/hangman/hangman_3.png';

imgArray[2] = new Image();
imgArray[2].src = 'assets/images/hangman/hangman_4.png';

imgArray[3] = new Image();
imgArray[3].src = 'assets/images/hangman/hangman_5.png';


const input = document.getElementById("input");
let k = 1;
let correctCounter = 0;

function wordToGuess(){
 const randomWord = wordsArray[Math.floor(Math.random()*wordsArray.length)];
  const wordCharacters = Array.from(randomWord.word);
  console.log(wordCharacters);

  for (i = 0; i < wordCharacters.length; i++) {
    const createSpace = document.createElement("span");
    createSpace.className = "word__character";
    document.getElementById("word").appendChild(createSpace);
    createSpace.innerHTML = "?";
  }

  const character = document.getElementsByClassName("word__character");

test(wordCharacters, input, character);
 }

function test(wordCharacters, input, character) {
  input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13){
    checkInput();
    input.value = " " }
  });


function checkInput(){
  if (wordCharacters.includes(input.value)){
      for (let j = 0; j < wordCharacters.length; j++) {
        if (input.value == wordCharacters[j]){
          correctCounter++;
          console.log(correctCounter);
          character[j].innerHTML = input.value;
          youWin(correctCounter, wordCharacters);
        }}} else {
          k++;
          document.getElementById("img").src = "/assets/images/hangman/hangman_" + k + ".png" ;
          youLost(displayWord, input);
        }}}

function youLost(displayWord, input) {
  if (k === 5) {
    displayWord.style.display = "none";
    input.style.display = "none";
    const youLost = document.createElement("div");
    youLost.className = "you__lost";
    youLost.innerHTML = "Oh no..." + "<br>" + "You Lost!";
    document.getElementById("input__zone").appendChild(youLost)

  }
}

function youWin(correctCounter, wordCharacters){
  if (correctCounter === wordCharacters.length) {
    input.style.display = "none";
    const youLost = document.createElement("div");
    youLost.className = "you__lost";
    youLost.innerHTML = "Nice!" + "<br>" + "You Win!";
    document.getElementById("input__zone").appendChild(youLost)
  }
}
wordToGuess();



