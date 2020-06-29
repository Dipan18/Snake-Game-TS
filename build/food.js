import { getSnakePosition } from './snake.js';
import { GRID_SIZE } from './values/board.js';
let foodPos = { x: 0, y: 0 };
export function generateFood() {
    const snake = getSnakePosition();
    const takenX = snake.map(pos => pos.x);
    const takenY = snake.map(pos => pos.y);
    const availableX = [];
    const availableY = [];
    for (let i = 1; i <= GRID_SIZE; i++) {
        if (takenX.indexOf(i) === -1)
            availableX.push(i);
        if (takenY.indexOf(i) === -1)
            availableY.push(i);
    }
    foodPos.x = availableX[Math.floor(Math.random() * availableX.length)];
    foodPos.y = availableY[Math.floor(Math.random() * availableY.length)];
}
export function draw(gameBoard) {
    const div = document.createElement('div');
    div.className = 'food';
    div.style.gridRowStart = foodPos.x.toString();
    div.style.gridColumnStart = foodPos.y.toString();
    gameBoard.appendChild(div);
}
export function snakeAteFood() {
    const head = getSnakePosition()[0];
    if (foodPos.x === head.x && foodPos.y === head.y)
        return true;
    return false;
}
