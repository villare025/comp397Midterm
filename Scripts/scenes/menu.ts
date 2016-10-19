/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playBtn : objects.Button;
        private _bg: createjs.Bitmap;
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            
            // Create BG for scene and add to Menu Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BGTitle"));
            this.addChild(this._bg);

            // Blur
            var blurFilter = new createjs.BlurFilter(5, 5, 1);
            this._bg.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            // EVERYTHING
            this._bg.cache(bounds.x, bounds.y, 800+bounds.width, 600+bounds.height);

            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {
        }

        private _playBtnClick(event : createjs.MouseEvent) {
            console.log("PRINT");
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}