import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel: string, data: any) => ipcRenderer.send(channel, data),
    invoke: (channel: string, data?: any) => ipcRenderer.invoke(channel, data),
    on: (channel: string, listener: any) => ipcRenderer.on(channel, listener),
    removeListener: (channel: string, listener: any) => ipcRenderer.removeListener(channel, listener),
  },
});
