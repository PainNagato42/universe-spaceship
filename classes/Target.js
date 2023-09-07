class Target {
    constructor(x, y) {
        this.width = 32;
        this.height = 32;
        this.x = x;
        this.y = y;
        this.targetShoot = false;

        const target = new Image();
        target.src = "http://localhost/jeux/universe_spaceship/img/target_boss.png";
        target.onload = () => {
            this.target = target;
        }
        const shoot = new Image();
        shoot.src = "http://localhost/jeux/universe_spaceship/img/shoot_8_boss.png";
        shoot.onload = () => {
            this.shoot = shoot;
        }
    }

    update() {
        this.draw();
    }

    draw() {
        if(this.target || this.shoot) {
            switch (this.targetShoot) {
                case false:
                    ctx.drawImage(this.target, this.x, this.y, this.width, this.height);
                    break;
                case true:
                    this.width = 88;
                    this.height = 83;
                    ctx.drawImage(this.shoot, this.x, this.y, this.width, this.height);
                    break;
            }
        }
    }
}