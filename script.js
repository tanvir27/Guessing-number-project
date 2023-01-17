let resultPart = document.getElementById('result-body');
let formBoody = document.getElementById('form-field');
let guessingNumber = document.getElementById('guessingNumber');
let button = document.getElementById('button');
let winCount = document.getElementById('win-count');
let lossCount = document.getElementById('loss-count');
let remainingAttempts = document.getElementById('remaining-attempts');
let ResultMessage = document.createElement('p');

let totalWins = 0;
let totalloss = 0;
let attempts = 0;
let totalAttempts = 5;

// handling buttons
button.addEventListener('click', function(){
    attempts++;
    if(attempts>5){
        guessingNumber.disabled = true;
        button.disabled = true;
    }
    else{
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`;
    }
    guessingNumber.value = ''; // clear input value
});

// create randomNumber
function getRandomNumber(limit) {   
    return Math.floor(Math.random() * limit)+1;
}

//result checking 
function checkResult(guessingNumber){
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){
        winCount.innerHTML = `You Have Won`;
        totalWins++;
        lossCount.innerHTML = "";
    }
    else {
        lossCount.innerHTML = `You Have Loss, Random number Was ${randomNumber}`;
        totalloss++;
    }
    ResultMessage.innerHTML = `Won: ${totalWins}, Loss: ${totalloss}`;

    ResultMessage.classList.add("result-text");
    resultPart.appendChild(ResultMessage);
}