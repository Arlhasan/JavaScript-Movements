const div = document.getElementById('movableDiv');
let posX = 0;
let posY = 0;
const step = 10; // Adjust this value to control movement speed

function move(direction) {
  switch(direction) {
    case 'up':
      posY -= step;
      break;
    case 'down':
      posY += step;
      break;
    case 'left':
      posX -= step;
      break;
    case 'right':
      posX += step;
      break;
  }
  div.style.top = `${posY}px`;
  div.style.left = `${posX}px`;
}

// Example usage
document.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowUp':
      move('up');
      break;
    case 'ArrowDown':
      move('down');
      break;
    case 'ArrowLeft':
      move('left');
      break;
    case 'ArrowRight':
      move('right');
      break;
  }
});