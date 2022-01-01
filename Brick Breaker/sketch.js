// This is a brick breaker game inspired by Yining Shi's version shown in 'The Coding Train'
// Link to video: https://www.youtube.com/watch?v=5kEPixL8JoU

let paddle;

function setup() {
    createCanvas(600, 600);
    paddle = new Paddle();
}

function draw() {
    background(0);
    paddle.render();
    paddle.move(10);
}