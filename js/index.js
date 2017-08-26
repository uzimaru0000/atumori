'use struct'

const electron = require('electron');

let APP = {};

window.onload = () => {
    const screen = electron.screen;
    const size = screen.getPrimaryDisplay().size;
    APP.display = new Display('canvas');
    APP.display.width = size.width;
    APP.display.height = size.height;
    APP.display.preload(["image/atumori.png"]);
    const pos = () => new Vector(size.width - 200, size.height - 200);
    APP.display.on("Enter-down", e => APP.display.addChild(new Atumori(pos(), APP.display)));
};

class Atumori extends Sprite {
    constructor(pos, display) {
        super(325, 325, display.getTexture("image/atumori.png"));
        this.pos = pos.clone();
        this.scale = new Vector(2, 2);
        this.age = 0;
        this.fadeTime = display.fps * 0.1;
        this.on("update", e => {
            if (this.age < this.fadeTime) { 
                this.scale.sub(new Vector(1 / this.fadeTime, 1 / this.fadeTime));
            }
            if (this.age > display.fps * 2) this.parent.removeChild(this);
            this.age++;
        });
    }
}
