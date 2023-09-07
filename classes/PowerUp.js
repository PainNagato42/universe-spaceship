class PowerUp {
    constructor(x, y) {
        this.width = 38;
        this.height = 32;
        this.x = x;
        this.y = y;

        const power = new Image();
        power.src = "http://localhost/jeux/universe_spaceship/img/power_up.png";
        power.onload = () => {
            this.power = power;
        }
    }

    update() {
        this.draw();
        this.move();
    }

    draw() {
        if(this.power) {
            ctx.drawImage(this.power, this.x, this.y, this.width, this.height);
        }
    }

    move() {
        this.x = this.x + 2;
    }
}