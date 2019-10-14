# Restaurant Ionic
This project is an Ionic application that suits any restaurant’s needs to display its menu and enable an ordering process.

## Dependecies, Run and Build

### Install Ionic CLI
To run this app you need to have Ionic CLI installed

```bash
$ sudo npm install -g ionic
```

You can revert back and restore any version of Ionic CLI by using the command:
```bash
$ sudo npm install -g ionic@{ionic_version}
```

eg:
```bash
$ sudo npm install -g ionic@4.1
```

### Install NodeJS dependencies
Run `npm install` to install all needed dependencies.

### Run the app
Use `ionic serve` to run the app for a browser preview

or

use `ionic serve --lab` to run the app in a browser on more platforms at the same time.

### Add a platform
```bash
$ cordova platform add <platform>
```

Supported Cordova platforms:
```bash
$ cordova platform add ios
$ cordova platform add android
```

### Build the app
```bash
$ cordova build
```

### Emulate the app on simulator
iOS:
```bash
$ cordova emulate ios
```

Android:
```bash
$ cordova emulate android
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-console** - This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows.
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0.
* **cordova-plugin-splashscreen** - This plugin is required to work with splash screens. This plugin displays and hides a splash screen during application launch.
* **cordova-plugin-statusbar** - Used to customize the iOS and Android StatusBar, alter the appearance of the status bar (color/style).
* **ionic-plugin-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.
* **cordova-plugin-inappbrowser** - It handles opening a browser view in older versions of iOS and Android.
* **cordova-plugin-email-composer** - The plugin provides access to the standard interface that manages the editing and sending an email message.
* **cordova-plugin-calendar** - This plugin allows you to add events to the Calendar of the mobile device.

## Demo
- [Web preview](https://skounis.github.io/ionic-demo-restaurant/restaurant-ionic-4/)

## Documentation
* [Restaurant Ionic 4 Quick Start Guide](https://docs.google.com/document/d/1BvND8zuBt3FG1L-v1kUgzlo2BebCjg5yjNO1Yv6175o/edit?usp=sharing)

## Changelog
```
1.0 - Oct 3, 2019
- Initial release
```

## Credits
* [Ionic Framework](http://ionicframework.com/)

## Third Party Licenses
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
