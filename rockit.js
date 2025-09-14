// main ui, put whatever here
const { app, BrowserWindow, ipcMain, dialog } = require('electron');

    createMainWindow()
        this.window = new BrowserWindow({
            title: 'title app',
            width: 900,
            height: 650,
            frame: false,
            backgroundColor: '#0a0a0a',
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
    });

        this.window.loadFile('rocket.html');
        this.setupIPC();
