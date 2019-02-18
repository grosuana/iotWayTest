const electron = require('electron');

// Module to control application life.
const app = electron.app;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// load config

require ('dotenv').config ();

// console.log (process.env);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;

function createWindow () 
{
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: parseInt(process.env.WIDTH), 
		height: parseInt(process.env.HEIGHT)   ,
		// kiosk: true
	});

	mainWindow.setMenu (null);

	// and load the index.html of the app.
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'ui/index.html'),
		protocol: 'file:',
		slashes: true
	}));

	// Open the DevTools.
	if (process.env.NODE_ENV !== 'production') {
		// require('vue-devtools').install();
		mainWindow.webContents.openDevTools();
	}	

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		if (process.env.NODE_ENV !== 'production') {
			require('vue-devtools').uninstall();
		}
		mainWindow = null;
	});
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	app.quit();
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});

//console.log("aaaaaaaaaaaa");