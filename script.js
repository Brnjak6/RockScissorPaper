const choiceDiv = document.querySelector('.choice');
const userWins = document.querySelector('.winner');
const userDefeated = document.querySelector('.defeat');
const drawResult = document.querySelector('.draw');
const restartButton = document.querySelector('.sequel');
const computerMessage = document.getElementById('computer_message');

function mySelection(e) {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

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
