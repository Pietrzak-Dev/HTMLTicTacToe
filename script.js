let currentPlayer = 'X';

document.getElementById('player-selection-o').addEventListener('click', function() {changeTurnToO()});
document.getElementById('player-selection-x').addEventListener('click', function() {changeTurnToX()});

const changeTurnToO = () => {
  currentPlayer = 'O';
  console.log('Current player is now O');
};
const changeTurnToX = () => {
  currentPlayer = 'X';
  console.log('Current player is now X');
};

const arrayOfGridButtons = document.getElementsByClassName('tic-tac-toe-cell')
for (let i = 0; i < arrayOfGridButtons.length; i++) {
  arrayOfGridButtons[i].addEventListener('click', function() {changeButtonText(arrayOfGridButtons[i])});
}

const changeButtonText = (button) => {
  for (const child of button.children) {
    if (child.innerText === '') {
      child.innerText = currentPlayer;
    }
  }
}