import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import path from 'path';

let mainWindow: BrowserWindow | null;

const isDev = process.env.NODE_ENV === 'development' || process.argv.includes('--dev');

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    },
    icon: path.join(__dirname, '../public/icon.png'),
  });

  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, 'renderer/index.html')}`;

  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Create application menu
  createMenu();
};

const createMenu = () => {
  const template: any[] = [
    {
      label: 'File',
      submenu: [
        { role: 'quit' },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'toggleDevTools' },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC handlers for character presets
ipcMain.handle('save-preset', async (event, presetData) => {
  try {
    return { success: true, data: presetData };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle('load-preset', async (event, presetId) => {
  try {
    return { success: true, data: null };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});
