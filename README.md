# IPLTALKS
This is that time of the year where we enjoy fighting over our favorite teams. 
IPL is here and everybody is ready.
IPLTalks is a website designed to recall all those nail-biting matches.
Get all your stats here from toss details to the man of the match winners. 
It also has a Compare Team feature where you can track your favorite team's performance throughout the IPL season.

## Some major points
* The app is made in vue.js. The whole page is divided into various major components such as header, carousel, footer,etc. All these components are attached to Home page by exporting and importing functions.The major app controls are controlled using the app.vue and main.js file. All the png, jpg and media files are stored in the assets and are binded using the vue v-bind directive.
* Have controlled most of the toolwork using the standard tooling baseline, Vue CLI.
* Have used chart.js with chartkick to show the graph between the IPL matches and the teams by filtering and using the data for the particular year. To watch the graph, just go to any IPL season from the homepage and click on the compare teams button.
* The data is fetched by storing the csv file data on google sheets and converting them back into the json format using the free api service.
* The loading time of the page is reduced by using the vue-router provided by the official Vue production.All the routes with their path are defined in the main.js file. Also objects are made with their router instances and are called on the links of the pages.All the media files and images are used of their proper height, width, and size. Minified file of bootstrap-vue is used.
* The app is made mobile-responsive by using the bootstrap-vue,bootstrap and also the media queries.The graph size is fixed to the desktop view and can be controlled using the compare button so that it doesn't always takes the desktop size area.The grid system of the bootstrap(container,row,col-sm,-md,etc), bootstrap-vue(b-row,b-card,etc) are used to control the size of the division in the desktop and mobile view.
* The web app is reliable and easy to use.


## Technologies Used
```
Vue
Vue-CLI
Vue-axios
Node.js
HTML
CSS
Javascript
Bootstrap
Bootstrap-vue
Chart.js
Chartkick
SheetDB API

```

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Production link
[IPLTALKS](https://ipltalkproject.herokuapp.com/#/)
