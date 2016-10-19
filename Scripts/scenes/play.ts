/*
	File Name:             Play Scene - TS|JS File 
	Authors:               Elaine Mae Villarino, Wallace Balaniuc
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Tuesday, October 18th, 2016
	Website Name:          EV - COMP397 - Midterm
	Program Description:   JS file that contains the components that 
                           are required to render the game's Play scene.
    Revision History:      Add comments.
*/

module scenes {
    export class Play extends objects.Scene {

        private _bg: createjs.Bitmap;
        private myCursor: createjs.Bitmap;

        private _enemy: objects.Enemy;
        private _enemyHealthText: objects.Label;
        private _enemyHealthAmt: number;

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
            
            // Manage Player Score 
            this._scoreAmt = 0;
            // Create _scoreText Label for scene and add to Play Scene container
            this._scoreText = new objects.Label("Score: 0", "Bold 45px Over the Rainbow", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 265);
            this.addChild(this._scoreText);

            // Instantiate the enemy object
            this._enemy = new objects.Enemy("robber", Math.floor((Math.random() * 5) + 1), "dead");
            this._enemy.setPosition(new objects.Vector2(Math.random() * config.Screen.WIDTH, Math.random() * config.Screen.HEIGHT));
            this.addChild(this._enemy);

            // Register enemy for an onclick event
            this._enemy.on("click", this._onEnemyClick, this);

            // Manage Enemy Health 
            this._enemyHealthAmt = this._enemy.life;
            // Create _enemyHealthText Label for scene and add to Play Scene container
            this._enemyHealthText = new objects.Label("Enemy Health: " + this._enemyHealthAmt.toString(), "Bold 25px Over the Rainbow", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 210);
            this.addChild(this._enemyHealthText);

            // Mousy mouse
            stage.cursor = "none"; // Hide the default mouse
            this.myCursor = new createjs.Bitmap(assets.getResult("Mouse")); // So use my awesome mouse instead
            this.addChild(this.myCursor); // Add my mouse
            
            // Add play scene to global stage container
            stage.addChild(this);
        }

        // Run on every tick
        public update(): void {
            // Update objects
            
            // Update Position of my myCursor based on the stage mouse position 
            this.myCursor.x = stage.mouseX + -35;
            this.myCursor.y = stage.mouseY + -32;
        }

        // Functions for when _enemy is clicked
        private _onEnemyClick(event: createjs.MouseEvent): void {
            // Score Update since Enemy is hit
            this._scoreAmt = this._scoreAmt + 5;
            this._scoreText.text = "Score: " + this._scoreAmt.toString();

            // Manage Enemy Health; -1 Enemy Life/Health
            this._enemy.shot();
            this._enemyHealthAmt = this._enemy.life;
            this._enemyHealthText.text = "Enemy Health: " + this._enemyHealthAmt.toString();

            // If Enemy Health reaches zero, remove enemy and add another one
            if (this._enemy.life == 0) {
                //this._enemy.gotoAndPlay("dead");
                this._enemy._dead();

                // Spawn new enemy after previous is removed
                this._enemy = new objects.Enemy("robber", Math.floor(Math.random() * 5) + 1, "dead");
                this._enemy.setPosition(new objects.Vector2(Math.random() * config.Screen.WIDTH, Math.random() * config.Screen.HEIGHT));
                this._enemy.on("click", this._onEnemyClick, this);
                this.addChild(this._enemy);
                
                // To not show 0 get new enemy health right away
                this._enemyHealthAmt = this._enemy.life;
                this._enemyHealthText.text = "Enemy Health: " + this._enemyHealthAmt.toString();
                
                // Add Mouse Again to be First Seen / Over the Enemy Object 
                this.addChild(this.myCursor); 
            }
        }
    }
}