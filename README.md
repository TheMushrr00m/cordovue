CordoVue
===============
Cordova with Vue and Webpack.

Getting Started
---------------

### Prerequisites
To use this you'll need Node.js v6 or newer.

### Installation
***via Github***
``` bash
$ git clone https://github.com/TheMushrr00m/cordovue.git MyAwesomeApp
$ cd MyAwesomeApp
$ yarn install
$ yarn run build
$ yarn run android
$ yarn run ios
```

***via Phonegap***
```bash
$ yarn global add phonegap
$ phonegap create MyAwesomeApp --template cordovue
$ cd MyAwesomeApp
$ yarn install
$ yarn run build
$ yarn run android
$ yarn run ios
```

***via Cordova***
```bash
$ yarn global add cordova
$ cordova create MyAwesomeApp --template=cordovue
$ cd MyAwesomeApp
$ yarn install
$ yarn run build
$ yarn run android
$ yarn run ios
```

Please, change `MyAwesomeApp` with your folder name.  
Then, you can open the app in your browser by visiting [localhost:8888](http://localhost:8888)  

### What's included
- `yarn run dev`: Webpack config for source map & hot-reload (Coming soon).
- `yarn run build`: Production build with HTML/CSS/JS minification.
- `yarn run prepare [ ios | android ]`: Set the platform. Example (`yarn run prepare -- android`).
- `yarn run [ ios | android ]`: Run in the iOS simulator / Android emulator. (Running in another terminal). Or physical device.
- `yarn run compile [ ios | android ]`: Build the app for the specified platform. Example (`yarn run compile -- ios`). (Coming soon).
- `yarn run clean`: Clean the `platforms/` and `dist/` folders. (Coming soon)

### TO-DO
- Add test support.
- Linting maybe.

## License
MIT. Copyright (c) 2017 Gabriel Cueto <@Mushr00m_Dev>.

## Credits
- [Vue Webpack-simple Boilerplate](https://github.com/vuejs-templates/webpack-simple)
