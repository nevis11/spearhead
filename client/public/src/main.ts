import StartGame from './game/index';

// Ensure the DOM is fully loaded before starting the game
document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById('game-container');
  if (gameContainer) {
    StartGame('game-container');
  } else {
    console.error('Game container not found');
  }
});