# IPLTALKS
A fronted work which shows the details of the previous IPL matches and also have a section for latest IPL News and the IPL related videos.

# Some major points
* The app is made in vue.js. The whole page is divided into various major components such as header, carousel, footer,etc. All these components are attached to Home page by exporting and importing functions.The major app controls are controlled using the app.vue and main.js file. All the png, jpg and media files are stored in the assets and are binded using the vue v-bind directive.
* I have controlled most of the toolwork using the standard tooling baseline, Vue CLI.
* I have used chart.js with chartkick to show the graph between the IPL matches and the teams by filtering and using the data for the particular year. To watch the graph, just go to any IPL season from the homepage and click on the compare teams button.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
