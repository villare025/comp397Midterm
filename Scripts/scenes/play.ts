module scenes {
    export class Play extends objects.Scene {

        private _bg: createjs.Bitmap;
        private myCursor: createjs.Bitmap;

        private _enemy: objects.Enemy;

        private _scoreText: objects.Label;
        private _scoreAmt: number;

        constructor() {
            super();
            this.start();
        }

        public start(): void {
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BGGame"));
            this.addChild(this._bg);
            
            //Start zero score 
            this._scoreAmt = 0;

            // Create Label for scene and add to Game Scene container
            this._scoreText = new objects.Label("Score: 0", "40px Kaushan Script", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 250);
            this.addChild(this._scoreText);

            // gAH THE ENEMY
            this._enemy = new objects.Enemy("robber", Math.floor((Math.random() * 5) + 1), "dead");
            this._enemy.setPosition(new objects.Vector2(Math.random() * config.Screen.WIDTH, Math.random() * config.Screen.HEIGHT));
            console.log("Enemy Life: " + this._enemy.life);
            this.addChild(this._enemy);

            //
            this._enemy.on("click", this._onEnemyClick, this);

            // Mousy mouse
            stage.cursor = "none"; // hide their mouse
            this.myCursor = new createjs.Bitmap(assets.getResult("Mouse")); //use my mouse
            this.addChild(this.myCursor); //add my mouse

            stage.addChild(this);
        }

        public update(): void {
            // update position of my mouse 
            this.myCursor.x = stage.mouseX + -35;
            this.myCursor.y = stage.mouseY + -32;
        }

        private _onEnemyClick(event: createjs.MouseEvent): void {
            // Score Update
            this._scoreAmt = this._scoreAmt + 5;
            this._scoreText.text = "Score: " + this._scoreAmt.toString();

            // Enemy Health Manage -1
            this._enemy.shot();
            console.log("Remaining life: " + this._enemy.life);

            if (this._enemy.life <= 0) {
                //this._enemy.gotoAndPlay("dead");
                this._enemy._dead();

                // Spawn new enemy 
                this._enemy = new objects.Enemy("robber", Math.floor(Math.random() * 5) + 1, "dead");
                this._enemy.setPosition(new objects.Vector2(Math.random() * config.Screen.WIDTH, Math.random() * config.Screen.HEIGHT));
                this._enemy.on("click", this._onEnemyClick, this);
                this.addChild(this._enemy);
            }
        }
    }
}