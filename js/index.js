'use struct'

const electron = require('electron');

let APP = {};

window.onload = () => {
    const screen = electron.screen;
    const size = screen.getPrimaryDisplay().size;
    APP.display = new Display('canvas');
    APP.display.width = size.width;
    APP.display.height = size.height;
};
