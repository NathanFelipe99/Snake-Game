let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    //lógica de geração da comida da cobrinha de forma aleatória
    //Math.floor é a função chão, retorna o valor chão (int) de um float
    //Math.random retorna um número aleatório até 1
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function drawFood(){
    context.fillStyle = "red"; //cor da comida
    context.fillRect(food.x, food.y, box, box); 
}

document.addEventListener("keydown", update); //captura o evento keydown (apertar o botao) e chama a função update
function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left"; //37 == seta direita
    if(event.keyCode == 38 && direction != "down") direction = "up";    //38 == seta baixo
    if(event.keyCode == 39 && direction != "left") direction = "right"; //39 == seta esquerda 
    if(event.keyCode == 40 && direction != "up") direction = "down";    //40 == seta cima
}

function start(){
    //snake[0] é o índice da cabeça da cobra
    //se a posição do índice da cabeça no eixo X for maior que a última coluna à direita do canvas e a direção manter-se a direita, é atribuído o valor 0, p/ que o elemento saia no ínicio da linha, na posição 0 do canvas
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    //atenção ao fato de que o canvas é construído de cima para baixo (eixo y)
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;

    creatingBG();
    creatingSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; //se a direção for p/ direita, acrescenta uma box a mais
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //tira o último elemento do array
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(start, 100); //reiniciando o jogo (start) a cada 100 milissegundos, impedindo que ele trave


