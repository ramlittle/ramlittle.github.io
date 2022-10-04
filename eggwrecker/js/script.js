/*
 OBJECTS PROPERTIES AND METHODS SECTION
 
 eggWrecker is the main character
 */
let eggWrecker = {
    //properties
    rocks: 10,
    wreckedEggs: 0
    //methods
}
// this is the side character
let chicken = {
    /* PROPERTIES*/
    //eggs will be a constant 2D array of 4rows and 4cols
    eggNest: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    /* MEDHODS */

    //randomize location of eggs
    hideEggs: function () {
        /* 
            eggs are represented by 1 and 0
            if eggNest index is set as 1, it has an egg, otherwise
            no egg is there
        */
        for (let row = 0; row < this.eggNest.length; row++) {
            for (let col = 0; col < this.eggNest.length; col++) {
                //locate the eggs in the eggNest 2D array using Math random (0 or 1)
                this.eggNest[row][col] = (Math.floor(Math.random() * 2));
            }
        }
        console.log(this.eggNest);
    }
}

/* INITIALISATION OF GAME */

//chickens will hide their eggs because the dogs are ready to launch their attack
chicken.hideEggs();//eggs are hidden randomly ontheir nests

//HEADER INITIAL VALUES
let eggsRemainingContainer = document.querySelector('.eggs-remaining-container');//container of eggs Remaining on the header
//know how many eggs exists when the game started
let eggsRemaining = countHiddenEggs();
let totalEggsOnGameStart = eggsRemaining;
eggsRemainingContainer.textContent = countHiddenEggs();//display the count of hidden eggs in the container

let ammoContainer = document.querySelector('.ammo-container');
//ammo will be equal to the amount of hidden eggs with additional 2 extra
let ammoCount = countHiddenEggs() + 2;
ammoContainer.textContent = ammoCount;

let eggsWreckedContainer = document.querySelector('.eggs-wrecked-container');
let eggsWrecked = 0;//eggs wrecked by dogs are zero by default
eggsWreckedContainer.textContent = eggsWrecked;//egg wrecked count is placed in the eggs container header section

let coordinatesEntered = [];//this is where all the coordinates entered by player is stored
//DOM VARIABLES
const playBtn = document.querySelector('.play-btn');
const mainHomeContainer = document.querySelector('.main-home-container');
const gameContainer = document.querySelector('.game-container');
const quitGameBtn = document.querySelector('.quit-game-btn');
const instructionsBtn = document.querySelector('.instructions-btn');
const instructionsContainer = document.querySelector('.instructions-container');
const xBtn = document.querySelector('.x-btn');
const launchBtn = document.querySelector('.launch-btn');
const angryDog = document.querySelector('.angry-dog');
const happyDog = document.querySelector('.happy-dog');
const rocketLaunch = document.querySelector('.rocket-launch');
const setCoordinatesBtn = document.querySelector('.set-coordinates-btn')
const rowCoordinates = document.querySelector('.row-coordinates');
const colCoordinates = document.querySelector('.col-coordinates');
const rowCoordinatesLabel = document.querySelector('.row-coordinates-label');
const colCoordinatesLabel = document.querySelector('.col-coordinates-label');
const setCoordinatesBubble = document.querySelector('.set-coordinates-bubble');
const launchNowBubble = document.querySelector('.launch-now-bubble');
const explosion = document.querySelector('.explosion');
const attackMissed = document.querySelector('.attack-missed');
const eggs = document.querySelectorAll('.eggnest img');//select all images of eggnest to put in array
const eggNest = document.querySelector('.eggnest');
const coordinatesEnteredContainer = document.querySelector('.coordinates-entered-container');
const gameOverContainer = document.querySelector('.game-over-container');
const youWinContainer = document.querySelector('.you-win-container');
const youLooseContainer = document.querySelector('.you-loose-container')
const endBtn = document.querySelector('.end-btn');
const scoreInfoContainer = document.querySelector('.score-info-container');
const fieldCoordinatesContainer = document.querySelector('.field-coordinates-container');
const timeLeftContainer = document.querySelector('.time-left-container');
const selectDifficulty = document.querySelector('#select-difficulty');




//CRATER FOR FIELD when missles landed
const row1Col1Crater = document.createElement('img');
const row1Col2Crater = document.createElement('img');
const row1Col3Crater = document.createElement('img');
const row1Col4Crater = document.createElement('img');
const row2Col1Crater = document.createElement('img');
const row2Col2Crater = document.createElement('img');
const row2Col3Crater = document.createElement('img');
const row2Col4Crater = document.createElement('img');
const row3Col1Crater = document.createElement('img');
const row3Col2Crater = document.createElement('img');
const row3Col3Crater = document.createElement('img');
const row3Col4Crater = document.createElement('img');
const row4Col1Crater = document.createElement('img');
const row4Col2Crater = document.createElement('img');
const row4Col3Crater = document.createElement('img');
const row4Col4Crater = document.createElement('img');

//FIELD-NEST VARIABLES
const row1Col1 = document.querySelector('.row1-col1');
const row1Col2 = document.querySelector('.row1-col2');
const row1Col3 = document.querySelector('.row1-col3');
const row1Col4 = document.querySelector('.row1-col4');
const row2Col1 = document.querySelector('.row2-col1');
const row2Col2 = document.querySelector('.row2-col2');
const row2Col3 = document.querySelector('.row2-col3');
const row2Col4 = document.querySelector('.row2-col4');
const row3Col1 = document.querySelector('.row3-col1');
const row3Col2 = document.querySelector('.row3-col2');
const row3Col3 = document.querySelector('.row3-col3');
const row3Col4 = document.querySelector('.row3-col4');
const row4Col1 = document.querySelector('.row4-col1');
const row4Col2 = document.querySelector('.row4-col2');
const row4Col3 = document.querySelector('.row4-col3');
const row4Col4 = document.querySelector('.row4-col4');



//SOUND VARIABLES
const cucoSound = new Audio('../sounds/cuco.mp3');
const confirmSound = new Audio('../sounds/confirm.mp3');
const homeSound = new Audio('../sounds/youloosesound.mp3');
const runSound = new Audio('../sounds/run.mp3');
const playGameSound = new Audio('../sounds/gameplaysound.mp3');
const bazookaSound = new Audio('../sounds/bazookasound.mp3');
const explosionSound = new Audio('../sounds/explosionSound.mp3');
const youWinSound = new Audio('../sounds/youwinsound.mp3');
const youLooseSound = new Audio('../sounds/youloosesound.mp3');
const applauseSound = new Audio('../sounds/applausesound.mp3');
const audienceLaughSound = new Audio('../sounds/audiencelaughsound.mp3');
const dogBarkSound = new Audio('../sounds/dogbark.wav');


//timer

/* EVENTS*/

//PLAY BUTTON
playBtn.addEventListener('click', () => {
    //check if difficulty has been selected
    if (selectDifficulty.value == 'select') {
        alert('Please select difficulty');
    } else {
        /*
            set a difficulty score for player
            easy = need 50% wreckings to win
            medium = need 65% wreckings to win
            hard = need 
        */
        let difficultyScore = 0;
        if (selectDifficulty.value == 'easy') {
            difficultyScore = 50;
            console.log(difficultyScore);
        } else if (selectDifficulty.value == 'medium') {
            difficultyScore = 70;
        } else if (selectDifficulty.value == 'hard') {
            difficultyScore = 90;
        }
        /*
            set interval of timer for 120 s
            this function should be inside eventlistener playbtn so that it will run
        */
        let timeLeft = 120;
        let downloadTimer = setInterval(countDown, 1000);
        function countDown() {

            if (timeLeft <= 0) {
                clearInterval(downloadTimer);
                alert('You are out of time. Game Over!');
                gameOver(totalEggsOnGameStart, eggsWrecked, difficultyScore);
            } else {
                timeLeftContainer.innerHTML = (`${timeLeft} s`);
            }
            timeLeft--;
        }

        //some audio runs in the background when Play button is pressed
        confirmSound.play();
        homeSound.pause();
        playGameSound.play();
        runSound.play();
        mainHomeContainer.style.display = 'none';
        gameContainer.style.display = 'flex';

        //reset coordinates
        rowCoordinates.value = '';
        colCoordinates.value = '';
    }


});


//QUIT GAME BUTTON
quitGameBtn.addEventListener('click', () => {
    if (confirm('Would you like to Exit? Click Ok to return to Home Screen')) {
        confirmSound.play();
        location.reload();//this will refresh the page to reset everything
    }
});

//INSTRUCTIONS BUTTON
instructionsBtn.addEventListener('click', () => {
    confirmSound.play();
    mainHomeContainer.style.display = 'none';
    instructionsContainer.style.display = 'flex';
});
//CLOSE BUTTON
xBtn.addEventListener('click', () => {
    confirmSound.play();
    mainHomeContainer.style.display = 'flex';
    instructionsContainer.style.display = 'none';
});
//LAUNCH BUTTON
launchBtn.addEventListener('click', () => {

    //assign values to row and col for coordinates hit record
    let row = rowCoordinates.value;
    let col = colCoordinates.value;

    //split the entered row and col coordinates to check if there is more than 1 character entry
    let checkRowLength = row.split('');
    console.log(checkRowLength);
    let checkColLength = col.split('');
    console.log(checkColLength);
    //check if row and col are valid coordinates
    if (row < 1 || row > 4 || col < 1 || col > 4) {
        alert('Invalid coordinates');
    } else {

        //if the above pass proceed to play game
        bazookaSound.play();
        rocketLaunch.style.display = 'flex';
        angryDog.style.display = 'flex';
        happyDog.style.display = 'none';
        launchBtn.style.display = 'none';
        rowCoordinates.style.display = 'none';
        colCoordinates.style.display = 'none';
        rowCoordinatesLabel.style.display = 'none';
        colCoordinatesLabel.style.display = 'none';
        setCoordinatesBtn.style.display = 'block';
        setCoordinatesBubble.style.display = 'block';
        launchNowBubble.style.display = 'none';
        fieldCoordinatesContainer.style.display = 'none';




        //when launch button is clicked, check for coordinates of hidden eggs if hit
        //coordinates entered by user is from 1 to 4, so it is deducted by 1 to be read by array

        rowCoordinates.value--;
        colCoordinates.value--;
        if (chicken.eggNest[rowCoordinates.value][colCoordinates.value]) {
            console.log('you got one!');
            dogBarkSound.play();
            explosionSound.play();
            explosion.style.display = 'block';
            eggNest.style.display = 'none';
            chicken.eggNest[rowCoordinates.value][colCoordinates.value] = 0;
            ammoCount--;//deduct from ammo
            ammoContainer.textContent = ammoCount;//display into ammo container header
            eggsWrecked++;//add from eggs wrecked
            eggsWreckedContainer.textContent = eggsWrecked;//display into eggs wreced header
            eggsRemaining--;//eggs should be deducted when it is hit
            eggsRemainingContainer.textContent = eggsRemaining;

            //remove egg images when a hit is registered
            displayEggImagesRemaining(eggsRemaining, countEggImages);

            //if a hit is registered, the coordinates will be recorded for user review
            //so coordinates will be recorded, we add 1 to it.
            rowCoordinates.value++;
            colCoordinates.value++;


            coordinatesEntered.push(`${rowCoordinates.value} X ${colCoordinates.value}`);
            coordinatesEnteredContainer.textContent = coordinatesEntered;
            console.log(coordinatesEntered);
        } else {
            //if attack is missed, play functions below
            console.log('your attack missed');
            cucoSound.play();
            attackMissed.style.display = 'block';
            eggNest.style.display = 'none';
            ammoCount--;//deduct from ammo
            ammoContainer.textContent = ammoCount;//display into ammo container header

            //if a hit is missed, the coordinates will be recorded for user review
            //increase coordinates entered by 1
            rowCoordinates.value++;
            colCoordinates.value++;
            coordinatesEntered.push(`${rowCoordinates.value} X ${colCoordinates.value}`);
            coordinatesEnteredContainer.textContent = coordinatesEntered;
            console.log(coordinatesEntered);
        }
    }
    //check if still have ammo, call gameOver if zero
    if (ammoCount == 0) {
        alert('Out of Ammo, Game Over!');
        console.log(selectDifficulty.value);
        /*
            set a difficulty score for player
            easy = need 50% wreckings to win
            medium = need 65% wreckings to win
            hard = need 
        */
        let difficultyScore = 0;
        if (selectDifficulty.value == 'easy') {
            difficultyScore = 50;
            console.log(difficultyScore);
        } else if (selectDifficulty.value == 'medium') {
            difficultyScore = 70;
        } else if (selectDifficulty.value == 'hard') {
            difficultyScore = 90;
        }
        stateChange(ammoCount, totalEggsOnGameStart, eggsWrecked, difficultyScore);//send this data to gameover function
    }

    //record coordinates that were attacked by user
    markHitCoordinates(row, col);
});

//SET COORDINATES BUTTON
//when set coordinates button is clicked, it will display and hide some elements below
setCoordinatesBtn.addEventListener('click', () => {
    rocketLaunch.style.display = 'none';
    rowCoordinates.style.display = 'block';
    colCoordinates.style.display = 'block';
    rowCoordinatesLabel.style.display = 'block';
    colCoordinatesLabel.style.display = 'block';
    launchBtn.style.display = 'block';
    setCoordinatesBtn.style.display = 'none';
    angryDog.style.display = 'none';
    happyDog.style.display = 'flex';
    setCoordinatesBubble.style.display = 'none';
    launchNowBubble.style.display = 'block';
    explosion.style.display = 'none';
    attackMissed.style.display = 'none';
    eggNest.style.display = 'flex';
    fieldCoordinatesContainer.style.display = 'flex';
});

endBtn.addEventListener('click', () => {
    confirmSound.play();
    location.reload();//this will refresh the page to reset everything
});
/* FUNCTIONS */

//obtain how many eggs were hidden
function countHiddenEggs() {
    let hiddenEggCounter = 0;
    for (let row = 0; row < chicken.eggNest.length; row++) {
        for (let col = 0; col < chicken.eggNest[row].length; col++) {
            if (chicken.eggNest[row][col] == 1) {
                hiddenEggCounter++;
            }
        }
    }
    return hiddenEggCounter;
}

//display the images of eggs depending on how many chickens were able to hide when the dogs came
function displayEggImagesRemaining(eggsRemaining, countEggImages) {
    let count = countEggImages - eggsRemaining;
    for (let index = 0; index < count; index++) {
        eggs[index].style.display = 'none';
    }
}

//mark coordinates that were hit on the field
function markHitCoordinates(row, col) {
    if (row == 1 && col == 1) {
        row1Col1.textContent = '';
        row1Col1Crater.src = 'images/crater.png';
        row1Col1.appendChild(row1Col1Crater);
    } else if (row == 1 && col == 2) {
        row1Col2.textContent = '';
        row1Col2Crater.src = 'images/crater.png';
        row1Col2.appendChild(row1Col2Crater);
    } else if (row == 1 && col == 3) {
        row1Col3.textContent = '';
        row1Col3Crater.src = 'images/crater.png';
        row1Col3.appendChild(row1Col3Crater);
    } else if (row == 1 && col == 4) {
        row1Col4.textContent = '';
        row1Col4Crater.src = 'images/crater.png';
        row1Col4.appendChild(row1Col4Crater);
    } else if (row == 2 && col == 1) {
        row2Col1.textContent = '';
        row2Col1Crater.src = 'images/crater.png';
        row2Col1.appendChild(row2Col1Crater);
    } else if (row == 2 && col == 2) {
        row2Col2.textContent = '';
        row2Col2Crater.src = 'images/crater.png';
        row2Col2.appendChild(row2Col2Crater);
    } else if (row == 2 && col == 3) {
        row2Col3.textContent = '';
        row2Col3Crater.src = 'images/crater.png';
        row2Col3.appendChild(row2Col3Crater);
    } else if (row == 2 && col == 4) {
        row2Col4.textContent = '';
        row2Col4Crater.src = 'images/crater.png';
        row2Col4.appendChild(row2Col4Crater);
    } else if (row == 3 && col == 1) {
        row3Col1.textContent = '';
        row3Col1Crater.src = 'images/crater.png';
        row3Col1.appendChild(row3Col1Crater);
    } else if (row == 3 && col == 2) {
        row3Col2.textContent = '';
        row3Col2Crater.src = 'images/crater.png';
        row3Col2.appendChild(row3Col2Crater);
    } else if (row == 3 && col == 3) {
        row3Col3.textContent = '';
        row3Col3Crater.src = 'images/crater.png';
        row3Col3.appendChild(row3Col3Crater);
    } else if (row == 3 && col == 4) {
        row3Col4.textContent = '';
        row3Col4Crater.src = 'images/crater.png';
        row3Col4.appendChild(row3Col4Crater);
    } else if (row == 4 && col == 1) {
        row4Col1.textContent = '';
        row4Col1Crater.src = 'images/crater.png';
        row4Col1.appendChild(row4Col1Crater);
    } else if (row == 4 && col == 2) {
        row4Col2.textContent = '';
        row4Col2Crater.src = 'images/crater.png';
        row4Col2.appendChild(row4Col2Crater);
    } else if (row == 4 && col == 3) {
        row4Col3.textContent = '';
        row4Col3Crater.src = 'images/crater.png';
        row4Col3.appendChild(row4Col3Crater);
    } else if (row == 4 && col == 4) {
        row4Col4.textContent = '';
        row4Col4Crater.src = 'images/crater.png';
        row4Col4.appendChild(row4Col4Crater);
    }
}

//gameOver function is called if ammo is zero
function gameOver(totalEggsOnGameStart, eggsWrecked, difficultyScore) {
    cucoSound.play();
    gameOverContainer.style.display = 'flex';
    mainHomeContainer.style.display = 'none';
    gameContainer.style.display = 'none';

    //check if player has won or loss the game
    console.log('total eggs: ' + totalEggsOnGameStart);
    console.log('eggs wrecked: ' + eggsWrecked);
    let totalScore = (eggsWrecked / totalEggsOnGameStart) * 100;
    totalScore = totalScore.toFixed(2);//adjust decimal places to two only
    console.log('total score:' + totalScore);

    //display results on screen, if score is over the difficulty score, player wins
    if (totalScore < 15) {
        console.log(`${totalScore} %? Are you even trying to play or bad luck just hit you?`);
        youLooseContainer.style.display = 'flex';
        scoreInfoContainer.textContent = `${totalScore} %? Are you even trying to play or bad luck just hit you?`;
        audienceLaughSound.play();
    } else if (totalScore < 30) {
        console.log(`${totalScore} %? You need more practice. You can't even win easy mode with that marksmanship!`);
        youLooseContainer.style.display = 'flex';
        scoreInfoContainer.textContent = `${totalScore} %? You need more practice. You can't even win easy mode with that marksmanship!`;
        audienceLaughSound.play();
    } else if (totalScore >= difficultyScore) {
        console.log(`You Win! You wrecked ${totalScore} % of the eggs!`);
        youWinContainer.style.display = 'flex';
        scoreInfoContainer.textContent = `You have Won ${selectDifficulty.value} mode! You wrecked ${totalScore} % of the eggs! `;
        applauseSound.play();
    } else {
        console.log(`You loose! You must wreck ${difficultyScore} % of total eggs to Win`);
        youLooseContainer.style.display = 'flex';
        scoreInfoContainer.textContent = `You loss ${selectDifficulty.value} mode! You wrecked ${totalScore} % of eggs. You need at least ${difficultyScore} % to Win`;
        audienceLaughSound.play();
    }
}

//wait 1 second before ending the game
function stateChange(ammoCount, totalEggsOnGameStart, eggsWrecked, difficultyScore) {
    setTimeout(function () {
        if (ammoCount == 0) {
            gameOver(totalEggsOnGameStart, eggsWrecked, difficultyScore);
        }
    }, 1000);
}

function clickPlayAgain() {
    playBtn.click();
}

/* MAIN SECTION */

homeSound.play();//PLAY HOME SOUND BY DEFAULT
let countEggImages = eggs.length;//get count of egg images
displayEggImagesRemaining(eggsRemaining, countEggImages);





