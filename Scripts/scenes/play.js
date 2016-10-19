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
        };
        Play.prototype.update = function () {
            // update position of my mouse 
            this.myCursor.x = stage.mouseX + -35;
            this.myCursor.y = stage.mouseY + -32;
        };
        Play.prototype._onEnemyClick = function (event) {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map