import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import './icons'
import './permission'

const { mockXHR } = require('./mock')
mockXHR()

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
