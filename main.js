const {app, BrowserWindow, ipcMain} = require("electron");
const path = require("path");
const url = require("url");

var ipcHandler = require("./ipcHandler")(ipcMain);

// keep global reference of the window
let win;

function createWindow() {
    win = new BrowserWindow({width:800,height:600});

    win.loadURL(url.format({
        pathname: path.join(__dirname,"gui","index.html"),
        protocol: "file",
        slashes: true
    }))

    win.webContents.openDevTools();

    win.on("closed", () => {
        // Dereference window object
        // if multiple windows stored in array, the corresponding elements should be deleted now
        win = null;
    })
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    // on macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd+Q
    if (process.platform !== "darwin") {
        app.quit();
    }
})

app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open
    if (win === null) {
        createWindow();
    }
})