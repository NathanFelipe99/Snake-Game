let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function creatingBG(){
    context.fillStyle = "lightgreen"; 
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function creatingSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function start(){
    creatingBG();
    creatingSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; //se a direção for p/ direita, acrescenta uma box a mais
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop(); //tira o último elemento do array
    
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(start, 100); //reiniciando o jogo (start) a cada 100 milissegundos, impedindo que ele trave

