/**
1. Define any variables that are used to track the state of the game:
 - Spaceman  image
 - Target word
 - Hint
 - Player guess - letters
 - Guess result - word includes/does not include letter
 - Wrong guess count
 - Game result - win/loss
 - Result message displaying if player won or lost

2. Define required constants:
 - List or target words and hints
 - Keyboard - letters player can choose


3. Handle computer generating a random target word

4. Handle computer generating a hint:

5. Handle a player clicking a button

6. Compare the player's guess to letters included in the target word

7. Update the game board 
 - If player’s guess is included in the target word, display that letter as many times as it appears in the word. 
 - If player’s guess is not included in the target word, update the number of wrong guesses and the hangman image. 

8. Render a win/lose message to the player 
 - If player guesses all of the letters in the target word, display win message. If player reaches the limit of wrong guesses, display lose message

9. Allow the player to reset the game and play again using a play again button
 - Clear out the state of the game
 - Reset game board and clear display messages.
 */

/*-------------- Constants -------------*/

const wordList = [
    { word: 'adventure', hint: 'An exciting or unusual experience' },
    { word: 'butterfly', hint: 'A colorful insect with large wings' },
    { word: 'chocolate', hint: 'A sweet treat made from cacao beans' },
    { word: 'dinosaur', hint: 'A prehistoric reptile that lived millions of years ago' },
    { word: 'elephant', hint: 'A large mammal with a trunk' },
    { word: 'fireworks', hint: 'Explosive devices used for celebration' },
    { word: 'galaxy', hint: 'A system of stars, stellar remnants, and dark matter' },
    { word: 'horizon', hint: 'The line where the earth and sky appear to meet' },
    { word: 'igloo', hint: 'A dome-shaped shelter made of ice blocks' },
    { word: 'jungle', hint: 'A dense, tropical forest' },
    { word: 'kangaroo', hint: 'A marsupial known for its hopping ability' },
    { word: 'lighthouse', hint: 'A tower with a light used to guide ships' },
    { word: 'mysterious', hint: 'Something that is difficult to understand or explain' },
    { word: 'notebook', hint: 'A book of blank pages for writing' },
    { word: 'octopus', hint: 'A sea creature with eight arms' },
    { word: 'pyramid', hint: 'A large triangular structure from ancient Egypt' },
    { word: 'quasar', hint: 'A very energetic and distant galaxy' },
    { word: 'robot', hint: 'A machine capable of carrying out tasks automatically' },
    { word: 'sunflower', hint: 'A large flower with a yellow head' },
    { word: 'telescope', hint: 'An instrument for observing distant objects' },
    { word: 'umbrella', hint: 'An object used to protect against rain' },
    { word: 'vaccine', hint: 'A biological preparation that provides immunity' },
    { word: 'whale', hint: 'A large marine mammal known for its size and singing' },
    { word: 'xylophone', hint: 'A musical instrument with wooden bars' },
    { word: 'yacht', hint: 'A large boat used for cruising or racing' },
    { word: 'zebra', hint: 'A striped black and white animal' },
    { word: 'airport', hint: 'A place where aircraft take off and land' },
    { word: 'beach', hint: 'A sandy shore by the sea' },
    { word: 'caterpillar', hint: 'The larval stage of a butterfly' },
    { word: 'dragon', hint: 'A mythical creature often depicted as a giant lizard' },
    { word: 'engine', hint: 'A machine that converts fuel into mechanical energy' },
    { word: 'falcon', hint: 'A bird of prey known for its speed' },
    { word: 'garden', hint: 'An area of land for growing plants' },
    { word: 'hospital', hint: 'A place where sick or injured people receive care' },
    { word: 'island', hint: 'A piece of land surrounded by water' },
    { word: 'jellyfish', hint: 'A sea creature with a gelatinous body and tentacles' },
    { word: 'koala', hint: 'A marsupial native to Australia' },
    { word: 'library', hint: 'A place where books and other media are kept' },
    { word: 'monument', hint: 'A structure erected to commemorate a person or event' },
    { word: 'nest', hint: 'A structure built by birds to lay eggs' },
    { word: 'ocean', hint: 'A vast body of saltwater covering most of the Earth' },
    { word: 'penguin', hint: 'A flightless bird that lives in the southern hemisphere' },
    { word: 'quilt', hint: 'A warm bed covering made from patches of fabric' },
    { word: 'rainbow', hint: 'A spectrum of colors appearing in the sky after rain' },
    { word: 'snowflake', hint: 'A small, unique crystal of frozen water' },
    { word: 'train', hint: 'A series of connected railroad cars that move along tracks' },
    { word: 'umbrella', hint: 'An object used to protect from rain or sunlight' },
    { word: 'vulture', hint: 'A bird known for scavenging and feeding on carrion' },
    { word: 'waterfall', hint: 'A flow of water over a cliff' },
    { word: 'xylophone', hint: 'A musical instrument with wooden bars' },
    { word: 'yawn', hint: 'An involuntary action of opening the mouth wide and inhaling deeply' },
    { word: 'zeppelin', hint: 'A large airship or dirigible' },
    { word: 'acorn', hint: 'The nut of an oak tree' },
    { word: 'balloon', hint: 'A flexible bag filled with gas or air' },
    { word: 'cactus', hint: 'A plant adapted to grow in dry, desert conditions' },
    { word: 'dolphin', hint: 'A highly intelligent marine mammal' },
    { word: 'eagle', hint: 'A large bird of prey with a powerful beak' },
    { word: 'fountain', hint: 'A decorative feature that sprays water' },
    { word: 'giraffe', hint: 'The tallest land animal with a long neck' },
    { word: 'honeybee', hint: 'An insect known for producing honey' },
    { word: 'iguana', hint: 'A large lizard native to Central and South America' },
    { word: 'jigsaw', hint: 'A puzzle consisting of pieces that fit together' },
    { word: 'keyhole', hint: 'The small opening in a lock' },
    { word: 'lighthouse', hint: 'A tower with a light used to guide ships' },
    { word: 'moonlight', hint: 'The light emitted by the moon' },
    { word: 'nightmare', hint: 'A frightening dream' },
    { word: 'orchestra', hint: 'A large group of musicians playing together' },
    { word: 'penguin', hint: 'A flightless bird that lives in the southern hemisphere' },
    { word: 'quiche', hint: 'A savory pie with a custard filling' },
    { word: 'rocket', hint: 'A vehicle designed for space travel' },
    { word: 'spaghetti', hint: 'A type of pasta that is long and thin' },
    { word: 'tornado', hint: 'A destructive rotating column of air' },
    { word: 'unicorn', hint: 'A mythical horse-like creature with a single horn' },
    { word: 'volcano', hint: 'An opening in the Earths crust that erupts with lava' },
    { word: 'wilderness', hint: 'A natural environment untouched by human activity' },
    { word: 'xenon', hint: 'A noble gas used in high-intensity lamps' },
    { word: 'yoga', hint: 'A practice involving physical postures and meditation' },
    { word: 'zeppelin', hint: 'A large airship used in the early 20th century' },
    { word: 'alphabet', hint: 'A set of letters used to write a language' },
    { word: 'balloon', hint: 'A flexible bag filled with air or gas' },
    { word: 'caterpillar', hint: 'The larval stage of a butterfly or moth' },
    { word: 'diamond', hint: 'A precious stone known for its brilliance' },
    { word: 'engine', hint: 'A machine that powers vehicles and machinery' },
    { word: 'fossil', hint: 'The preserved remains of a prehistoric organism' },
    { word: 'giraffe', hint: 'A tall African animal with a long neck' },
    { word: 'hologram', hint: 'A three-dimensional image created with laser light' },
    { word: 'iceberg', hint: 'A large piece of ice floating in the sea' },
    { word: 'jigsaw', hint: 'A puzzle made of interlocking pieces' },
    { word: 'kaleidoscope', hint: 'A tube that shows changing patterns of colors' },
    { word: 'lighthouse', hint: 'A tall structure that guides ships at sea' },
    { word: 'mosaic', hint: 'Art made from small pieces of colored stone or glass' },
    { word: 'nucleus', hint: 'The central part of an atom or cell' },
    { word: 'octopus', hint: 'A sea creature with eight arms' },
    { word: 'peacock', hint: 'A bird known for its colorful tail feathers' },
    { word: 'quasar', hint: 'A very energetic and distant galaxy' },
    { word: 'rainforest', hint: 'A dense forest with high rainfall' },
]
const maxGuesses = 9;

/*---------- Variables (state) ---------*/
let correctGuesses = [];
let currentTargetWord;
let wrongGuesses = 0;

/*----- Cached Element References  -----*/

const targetWord = document.querySelector('.target-word');
const wordHint = document.querySelector('.word-hint b');
const keyboard = document.querySelector('.keyboard');
const wrongGuessCount = document.querySelector('.incorrect-guesses b');
const spacemanImage = document.querySelector('.spaceman-image img');
const gameResult = document.querySelector('.game-result');
const gameResultImage = document.querySelector('.game-result-display img');
const gameResultText = document.querySelector('.game-result-display h4');
const resetButton = document.querySelector('.play-again');

/*-------------- Functions -------------*/

const randomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    targetWord.innerHTML = word.split('').map(() => `<li class="letter"></li>`).join('');
    currentTargetWord = word;
    wordHint.innerText = hint;
    console.log(word);
}
randomWord()

const init = (keys, clickedButton) => {
    if(currentTargetWord.includes(clickedButton)) {
        [...currentTargetWord].forEach((letter, index) => {
            if(letter === clickedButton) {
                correctGuesses.push(letter);
                targetWord.querySelectorAll('li')[index].innerText = letter;
                targetWord.querySelectorAll('li')[index].classList.add('guessed');
            }
        })
    } else {
        wrongGuesses++;
        wrongGuessCount.textContent = `${wrongGuesses} / ${maxGuesses}`;
        spacemanImage.src = `file:///Users/nichootero/Downloads/Spaceman/Untitled_Artwork-${wrongGuesses}.jpg`;
    }
    keys.disabled = true;
    if (wrongGuesses === maxGuesses) {
        return winOrLose(false);
    } else if(correctGuesses.length === currentTargetWord.length) {
        return winOrLose(true);
    }
}

wrongGuessCount.textContent = `${wrongGuesses} / ${maxGuesses}`;

const winOrLose = (win) => {
    gameResult.classList.add('show');
    if (win === true) {
        gameResultImage.src = `file:///Users/nichootero/Downloads/Spaceman/Untitled_Artwork%201.GIF`;
        gameResultText.innerText = 'You got the word!';
    } else {
        gameResultImage.src = `file:///Users/nichootero/Downloads/Spaceman/Untitled_Artwork%202.GIF`;
        gameResultText.innerText = `The correct word was : ${currentTargetWord}`;
    }
}

const reset = () => {
    keyboard.querySelectorAll('button').forEach(btn => btn.disabled = false);
    wrongGuesses = 0;
    correctGuesses = [];
    gameResult.classList.remove('show');
    wrongGuessCount.textContent = `${wrongGuesses} / ${maxGuesses}`;
    spacemanImage.src = `file:///Users/nichootero/Downloads/Spaceman/Untitled_Artwork-${wrongGuesses}.jpg`;
    targetWord.innerHTML = currentTargetWord.split('').map(() => `<li class="letter"></li>`).join('');
    randomWord()
}

/*----------- Event Listeners ----------*/

for(let i = 97; i <= 122; i++) {
    const keys = document.createElement('button');
    keys.innerText = String.fromCharCode(i);
    keyboard.appendChild(keys);
    keys.addEventListener('click', event => init(event.target, String.fromCharCode(i)));
}

resetButton.addEventListener('click', event => reset());