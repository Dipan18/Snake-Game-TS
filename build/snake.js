import { GRID_SIZE } from './values/board.js';
let snake = [{ x: 11, y: 11 }, { x: 12, y: 11 }, { x: 13, y: 11 }];
export function draw(gameBoard) {
    snake.forEach((pos) => {
        const div = document.createElement('div');
        div.className = 'snake';
        div.style.gridRowStart = pos.x.toString();
        div.style.gridColumnStart = pos.y.toString();
        gameBoard.appendChild(div);
    });
}
export function update(direction) {
    // Move The Head
    let oldX = snake[0].x;
    let oldY = snake[0].y;
    snake[0].x += direction.x;
    snake[0].y += direction.y;
    console.log(`head: ${snake[0].x}, ${snake[0].y}`);
    // Move The Rest Of The Body
    for (let i = 1; i < snake.length; i++) {
        const tempX = snake[i].x;
        const tempY = snake[i].y;
        snake[i].x = oldX;
        snake[i].y = oldY;
        oldX = tempX;
        oldY = tempY;
        console.log(`snake${i}: ${snake[i].x}, ${snake[i].y}`);
    }
}
export function grow() {
    snake.push({ x: -1, y: -1 });
}
export function snakeOutOfBoundry() {
    if (snake[0].x > GRID_SIZE || snake[0].y > GRID_SIZE ||
        snake[0].x < 0 || snake[0].y < 0) {
        return true;
    }
    return false;
}
export function snakeRanIntoItself() {
    const headX = snake[0].x;
    const headY = snake[0].y;
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === headX && snake[i].y === headY)
            return true;
    }
    return false;
}
export function getSnakePosition() {
    return snake;
}
