let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg= document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5;
let userValueList = [];

chanceArea.innerHTML = `남은기회 : ${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",focusInput);

function pickRandomNumber() {
    computerNumber = Math.floor(Math.random() * 100) +1;
    console.log("정답",computerNumber);
}

function play() {
    let userValue= userInput.value;
    if (userValue < 1 || userValue > 100) {
        resultText.textContent = "1부터 100사이의 숫자를 입력해주세요" ;
        return;
    }

    if (userValueList.includes(userValue)) {
        resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
        return;
    }
    
    chances--;
    
    chanceArea.innerHTML = `남은 기회:${chances}`;
    userValueList.push(userValue);

    if (userValue < computerNumber) {
        resultAreaImg.src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
        resultText.textContent="UP!";
    }
    else if (userValue > computerNumber) {
        resultAreaImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
        resultText.textContent = "DOWN!"; 
    } else {
        resultAreaImg.src = "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
        resultText.textContent = "정답!";
        gameOver = "true"
    }

    if (chances == 0) {
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function focusInput() {
    userInput.value="";
}

function reset() {
    pickRandomNumber();

    userInput.value="";
    resultAreaImg.scr = "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif";
    resultText.textContent ="죽기 싫다면 맞춰라";
    gameOver = "false";
    playButton.disabled = false;
    chances = 5;
    chanceArea.innerHTML = `남은 기회 : ${chances}`;
    userValueList = [];
}

pickRandomNumber();