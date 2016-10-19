module scenes {
    export class Play extends objects.Scene {

        private _bg: createjs.Bitmap;
        private myCursor: createjs.Bitmap;

        private _enemy: objects.Enemy;

        constructor() {
            super();
            this.start();
        }

        public start(): void {
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BGGame"));
            this.addChild(this._bg);

            // gAH THE ENEMY
            this._enemy = new objects.Enemy("robber", Math.floor((Math.random() * 5) + 1),"dead");
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
        }
    }
}