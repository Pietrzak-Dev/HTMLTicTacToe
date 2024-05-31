let currentPlayer = 'X';

let gameBoard = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

document.getElementById('player-selection-o').addEventListener('click', function() {changeTurnToO()});
document.getElementById('player-selection-x').addEventListener('click', function() {changeTurnToX()});

const changeTurnToO = () => {
  document.getElementById('player-selection-o').style.backgroundColor = 'green';
  document.getElementById('player-selection-x').style.backgroundColor = 'white';
  currentPlayer = 'O';
  console.log('Current player is now O');
};
const changeTurnToX = () => {
  document.getElementById('player-selection-x').style.backgroundColor = 'green';
  document.getElementById('player-selection-o').style.backgroundColor = 'white';
  currentPlayer = 'X';
  console.log('Current player is now X');
};

const arrayOfGridButtons = document.getElementsByClassName('tic-tac-toe-cell')
for (let i = 0; i < arrayOfGridButtons.length; i++) {
  arrayOfGridButtons[i].addEventListener('click', function() {changeButtonText(arrayOfGridButtons[i]); updateGameBoard(i); console.log(gameBoard); checkForWinner();  });
}

const changeButtonText = (button) => {
  for (const child of button.children) {
    if (child.innerText === '') {
      child.innerText = currentPlayer;
    }
  }
}

const updateGameBoard = (i) => {
  for (let row = 0; row < gameBoard.length; row++) {
    for (let column = 0; column < gameBoard[row].length; column++) {
      if (Number(gameBoard[row][column]) === i + 1) {
        gameBoard[row][column] = currentPlayer;
      }
    }
  }
}
const checkForWinner = () => {
  for (let row = 0; row < gameBoard.length; row++) {
    if (gameBoard[row][0] === gameBoard[row][1] && gameBoard[row][1] === gameBoard[row][2]) {
      window.alert(`${currentPlayer} wins!`);
      return gameBoard[row][0];
    }
  }

  for (let column = 0; column < gameBoard[0].length; column++) {
    if (gameBoard[0][column] === gameBoard[1][column] && gameBoard[1][column] === gameBoard[2][column]) {
      window.alert(`${currentPlayer} wins!`);
      return gameBoard[0][column];
    }
  }

  if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
    window.alert(`${currentPlayer} wins!`);
    return gameBoard[0][0];
  }
  if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
    window.alert(`${currentPlayer} wins!`);
    return gameBoard[0][2];
  }

  return null;
}


