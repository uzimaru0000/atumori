'use strict'

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform != 'drawin') app.quit();
});

app.on('ready', () => {
    const screen = electron.screen;
    const size = screen.getPrimaryDisplay().size;
    mainWindow = new BrowserWindow({
        left: 0,
        right: 0,
        width: size.width,
        height: size.height,
        frame: false,
        transparent: true,
        resizable: false,
        alwaysOnTop: true
    });
    mainWindow.setIgnoreMouseEvents(true);
    mainWindow.maximize();
    mainWindow.loadURL('file://' + __dirname + '/../index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
