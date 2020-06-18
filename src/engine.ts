import { direction } from './input.js';
import * as snake from './snake.js';
import { GAME_BOARD } from './values/board.js';
import * as directions from './values/directions.js';
import * as food from './food.js';


export function startGame() {
    setInterval(gameLoop, 150);
    food.generateFood();
}

function gameLoop() {
    if (gameOver())
        window.location.reload();

    draw();
    update();
}

function draw() {
    GAME_BOARD.innerHTML = '';
    snake.draw(GAME_BOARD);
    food.draw(GAME_BOARD);
}

function update() {
    if (direction === directions.STLL) return;

    snake.update(direction);
    if (food.snakeAteFood()) {
        snake.grow();
        food.generateFood();
    }
}


function gameOver() {
    if (snake.snakeOutOfBoundry() || snake.snakeRanIntoItself())
        return true;
}