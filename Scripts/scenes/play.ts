module scenes {
    export class Play extends objects.Scene {

        private _bg: createjs.Bitmap;

        constructor() {
            super();
            this.start();
        }

        public start() : void {
             // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BGGame"));
            this.addChild(this._bg);

            stage.addChild(this);
        }

        public update() : void {
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}