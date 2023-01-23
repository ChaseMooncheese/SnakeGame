document.addEventListener('DOMContentLoaded', () => {

    const numRows = 10;
    const numCols = 10;
    const board = document.querySelector('#board');


    function gameLoop(currentTime){
        window.requestAnimationFrame(gameLoop);
        const secondsPassed = currentTime - lastTime;
        lastTime = currentTime;
    }

    function createBoard(){
        
        for(let i = 0; i < numRows; i++){
            const row = document.createElement('tr');
            for(let j = 0; j < numCols; j++){
                const tile = document.createElement('td');
                tile.setAttribute('id', i * numCols + j);
                row.appendChild(tile);
            }
            board.appendChild(row);
        }
    }

    let lastTime = 0;
    let direction = 'Up';
    createBoard();

    //Add snake

    const snake = {
        
    }
    snake.head.setAttribute('.snakeCell');
    console.log(head);
})