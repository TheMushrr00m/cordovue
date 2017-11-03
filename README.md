CordoVue
===============
A simple apache cordova sample project using Vue, Vuex, Vue-router, ESLint and Webpack.

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
$ yarn build
$ yarn android
$ yarn ios
```

As simple as that!!

Route: '/'
![Cordovue app](preview1.png)

Route: '/#/about'
![Cordovue app](preview2.png)

Please, change `MyAwesomeApp` with your folder name.  
Then, you can open the app in your browser by visiting [localhost:8888](http://localhost:8888)  

### What's included
- `yarn dev`: Webpack config for source map & hot-reload.
- `yarn build`: Production build with HTML/CSS/JS minification.
- `yarn prepare [ ios | android ]`: Set the platform. Example (`yarn prepare -- android`).
- `yarn [ ios | android ]`: Run in the iOS simulator / Android emulator. (Running in another terminal). Or physical device.
- `yarn compile [ ios | android ]`: Build the app for the specified platform. Example (`yarn compile -- ios`). (Coming soon).
- `yarn clean`: Clean the `platforms/` and `dist/` folders. (Coming soon)

### Tutorials
[Presenting Cordovue - Spanish](http://laesporadelhongo.com/cordovue/)

### TO-DO
- Tests (is it necessary?).

## License
MIT. Copyright (c) 2017 Gabriel Cueto <@Mushr00m_Dev>. Modified by @eugenioclrc

## Credits
- [Vue Webpack-simple Boilerplate](https://github.com/vuejs-templates/webpack-simple)

Created with :heart: in Cancún :sunglasses:
