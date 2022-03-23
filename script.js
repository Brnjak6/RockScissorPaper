const choiceDiv = document.querySelector('.choice');
const userWins = document.querySelector('.winner');
const userDefeated = document.querySelector('.defeat');
const drawResult = document.querySelector('.draw');
const restartButton = document.querySelector('.sequel');
const computerMessage = document.getElementById('computer_message');
const triesLeft = document.getElementById('tries_left');
const choicesArray = document.getElementById('choices_array');
const choicesTitle = document.getElementById('choices_title');
let tries = 5;
const triesArray = [];
triesLeft.innerHTML = tries;

function mySelection(e) {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  tries--;
  triesLeft.innerHTML = tries;
  triesArray.push(e);

  if (
    (e === 1 && computerChoice === 2) ||
    (e === 2 && computerChoice === 3) ||
    (e === 3 && computerChoice === 1)
  ) {
    win();
  } else if (e === computerChoice) {
    draw();
  } else {
    defeat();
  }
  if (computerChoice === 1) {
    computerMessage.innerHTML = "Computer's choice was Rock";
  } else if (computerChoice === 2) {
    computerMessage.innerHTML = "Computer's choice was Scissor";
  } else {
    computerMessage.innerHTML = "Computer's choice was Paper";
  }
  restartButton.style.display = 'flex';

  if (tries == 0) {
    restartButton.style.display = 'none';
    choiceDiv.style.display = 'none';

    choicesTitle.style.display = 'inline';

    for (let i = 0; i < triesArray.length; i++) {
      if (triesArray[i] == 1) {
        choicesArray.innerHTML += `<img
        src="./svg/rock.svg"
        width="75"
        height="75"
   
      />`;
      } else if (triesArray[i] == 2) {
        choicesArray.innerHTML += `<img
        src="./svg/scissor.svg"
        width="75"
        height="75"
  
      />`;
      } else if (triesArray[i] == 3) {
        choicesArray.innerHTML += `<img
        src="./svg/paper.svg"
        width="75"
        height="75"
   
      />`;
      }
    }
  }
}

const win = () => {
  userWins.style.display = 'inline';
  choiceDiv.style.display = 'none';
};
const draw = () => {
  drawResult.style.display = 'inline';
  choiceDiv.style.display = 'none';
};
const defeat = () => {
  userDefeated.style.display = 'inline';
  choiceDiv.style.display = 'none';
};

myReset = () => {
  choiceDiv.style.display = 'inline';
  userWins.style.display = 'none';
  drawResult.style.display = 'none';
  userDefeated.style.display = 'none';
  restartButton.style.display = 'none';
  computerMessage.innerHTML = '';
};
