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

module scenes {
    export class Menu extends objects.Scene {

        // PRIVATE VARIABLES
        private _playBtn : objects.Button;
        private _bg: createjs.Bitmap;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
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
            this._bg.cache(bounds.x, bounds.y, 800+bounds.width, 600+bounds.height);
            
            // Create BACK Button for scene and add to Game Scene container. Register for onclick event
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        // Run on every tick
        public update() : void {
            // Update objects
        }

        // Functions for when _playBtn is pressed
        private _playBtnClick(event : createjs.MouseEvent) {
            //console.log("PRINT");
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}