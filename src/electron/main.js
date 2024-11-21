import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import MenuTemplate from "./template/menu.js";

const __dirname = import.meta.dirname;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "../../dist/front-pdf/browser/index.html"));
};

// Configurar o menu da aplicação
Menu.setApplicationMenu(Menu.buildFromTemplate(MenuTemplate));

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
