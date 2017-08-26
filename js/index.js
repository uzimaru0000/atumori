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
        this.on("update", e => {
            if (e > 120) this.parent.removeChild(this);
        });
    }
}
