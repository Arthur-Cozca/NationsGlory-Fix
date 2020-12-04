const {app, BrowserWindow } = require('electron');

function mainWindow(){
    const mainWind = new BrowserWindow({
        width: 800,
        height: 500,
        icon: "https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A1PA4115PT17X35Y30D173817291S100/views/1,width=500,height=500,appearanceId=1/logo-nationsglory-bleu-sac-en-tissu.jpg",
        webPreferences: {
            nodeIntegration: true
        },
        icon: "./logong.jpg"
    })

    mainWind.loadFile('mainpage.html');
    mainWind.setMenu(null);
}

app.whenReady().then(mainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows.length === 0) {
      mainWindow()
    }
  })