function Paddle() {
    this.width = 160;
    this.height = 20;
    this.pos = createVector(width / 2, height - 40);

    this.render = function() {
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.width, this.height);
    }

    this.move = function(step) {
        if (keyIsDown(65)) {
            this.pos.x -= step;
        }

        if (keyIsDown(68)) {
            this.pos.x += step;
        }
    }
}