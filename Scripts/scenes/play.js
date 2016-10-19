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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this.start();
        }
        Play.prototype.start = function () {
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
        };
        // Run on every tick
        Play.prototype.update = function () {
            // Update objects
            // Update Position of my myCursor based on the stage mouse position 
            this.myCursor.x = stage.mouseX + -35;
            this.myCursor.y = stage.mouseY + -32;
        };
        // Functions for when _enemy is clicked
        Play.prototype._onEnemyClick = function (event) {
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
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map