var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Enemy Objects - TS|JS File
    Authors:               Elaine Mae Villarino, Wallace Balaniuc
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Tuesday, October 18th, 2016
    Website Name:          EV - COMP397 - Midterm
    Program Description:   JS file that contains the components that
                           are required to manage the game's Enemy bject.
    Revision History:      Add comments.
*/
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // CONSTRUCTOR
        function Enemy(imageString, life, deathAnimString) {
            _super.call(this, enemyAtlas, imageString, "");
            this.deathAnimString = deathAnimString;
            this._life = life;
        }
        Object.defineProperty(Enemy.prototype, "life", {
            // See Enemy Health
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        // Run on every tick
        Enemy.prototype.update = function () {
            // Update objects
        };
        // Set enemy position
        Enemy.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        // Get enemy position
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        // Functions for when enemy is clicked/shot
        Enemy.prototype.shot = function () {
            // Enemy Health - 1
            this._life--;
        };
        // Functions for when enemy is dead
        Enemy.prototype._dead = function () {
            // Remove enemy from scene
            this.gotoAndPlay(this.deathAnimString);
            currentScene.removeChild(this);
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map