import Vue from 'vue'
import { BootstrapVue, BIcon, BIconSearch, BIconGridFill, BIconList, BIconLinkedin, BIconGithub, BIconTwitter } from 'bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false

import './styles/main.scss'

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconSearch', BIconSearch)
Vue.component('BIconGridFill', BIconGridFill)
Vue.component('BIconList', BIconList)
Vue.component('BIconLinkedin', BIconLinkedin)
Vue.component('BIconGithub', BIconGithub)
Vue.component('BIconTwitter', BIconTwitter)

new Vue({
  render: h => h(App),
}).$mount('#app')
