const {
    contextBridge,
    ipcRenderer
} = require("electron");

console.log("In preload.js");
console.log(ipcRenderer);

contextBridge.exposeInMainWorld(
    "electron", {
        ipcRenderer: ipcRenderer
    }
);