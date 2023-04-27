const { app, BrowserWindow } = require('electron')

function createWindow(){
    const win = new BrowserWindow({width:500, height:600});
    win.loadURL("http://localhost:5173")
}

app.on("ready", createWindow)