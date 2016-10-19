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
module objects {
    export class Enemy extends objects.GameObject {

        // PRIVATE VARIABLES
        private _move: objects.Vector2;
        private _speed: number;
        private deathAnimString: string; // Death AnimatioN
        private _life: number; // Life

        // PUBLIC VARIABLES
        public name: string;
        public width: number;
        public height: number;
        public center: objects.Vector2;

        // CONSTRUCTOR
        constructor(imageString: string, life: number, deathAnimString: string) {
            super(enemyAtlas, imageString, "");
            this.deathAnimString = deathAnimString;
            this._life = life;
        }

        // See Enemy Health
        get life(): number {
            return this._life;
        }

        // Run on every tick
        public update(): void {
            // Update objects
        }

        // Set enemy position
        public setPosition(pos: objects.Vector2): void {
            this.x = pos.x;
            this.y = pos.y;
        }

        // Get enemy position
        public getPosition(): objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        // Functions for when enemy is clicked/shot
        public shot(): void {
            // Enemy Health - 1
            this._life--;
        }

        // Functions for when enemy is dead
        public _dead(): void {
            // Remove enemy from scene
            currentScene.removeChild(this);
        }
    }
}