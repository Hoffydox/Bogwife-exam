import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretUp, faCaretDown, faShoppingCart, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons'

library.add(faCaretUp, faCaretDown, faShoppingCart, faChevronUp, faTimes)
library.add(faPlayCircle, faPauseCircle)
library.add(faFacebook, faInstagram, faYoutube, faSpotify)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/* 
caret-up
caret-down
shopping-cart
chevron-up

facebook
instagram
youtube
spotify



*/