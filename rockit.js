// main ui, put whatever here
const { app, BrowserWindow, ipcMain, dialog } = require('electron');

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'Aim',
        width: 900,
        height: 650,
        frame: false,
        backgroundColor: '#0a0a0a',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('rocket.html');

    console.log("app is ready");
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
