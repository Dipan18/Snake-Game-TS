import * as keys from './values/keys.js';
import { Position } from './values/position.js';
import * as directions from './values/directions.js';

let previousDirection: Position = directions.UP;
export let direction: Position = directions.STLL;

window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case keys.ARROW_UP:
            if (previousDirection.x === 1) break;
            direction = directions.UP;
            previousDirection = direction;
            break;

        case keys.ARROW_DOWN:
            if (previousDirection.x === -1) break;
            direction = directions.DOWN;
            previousDirection = direction;
            break;

        case keys.ARROW_LEFT:
            if (previousDirection.y === 1) break;
            direction = directions.LEFT;
            previousDirection = direction;
            break;

        case keys.ARROW_RIGHT:
            if (previousDirection.y === -1) break;
            direction = directions.RIGHT;
            previousDirection = direction;
            break;
    }
});