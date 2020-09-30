import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import seasons from './components/seasons'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'


Vue.use(VueRouter);
Vue.use(Chartkick.use(Chart))
const routes = [
  { path: '/', component: Home },
  { path: '/seasons', component: seasons, name: 'seasons' }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

Vue.filter('convert', function (val) {
  return val.slice(6, 10) + '-' + val.slice(3, 5) + '-' + val.slice(0, 2);
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
