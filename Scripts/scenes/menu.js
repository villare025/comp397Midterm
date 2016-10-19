/*
    File Name:             Menu Scene - TS|JS File
    Authors:               Elaine Mae Villarino, Wallace Balaniuc
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Tuesday, October 18th, 2016
    Website Name:          EV - COMP397 - Midterm
    Program Description:   JS file that contains the components that
                           are required to render the game's Menu scene.
    Revision History:      Add comments.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR
        function Menu() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Menu.prototype.start = function () {
            // Add objects to the scene
            console.log("Menu Scene Started");
            // Create BG for Scene and add to Menu Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BGTitle"));
            this.addChild(this._bg);
            // Blur the Background Image
            var blurFilter = new createjs.BlurFilter(5, 5, 1);
            this._bg.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            // Blur EVERYTHING in the image
            this._bg.cache(bounds.x, bounds.y, 800 + bounds.width, 600 + bounds.height);
            // Create BACK Button for scene and add to Game Scene container. Register for onclick event
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        // Run on every tick
        Menu.prototype.update = function () {
            // Update objects
        };
        // Functions for when _playBtn is pressed
        Menu.prototype._playBtnClick = function (event) {
            //console.log("PRINT");
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map