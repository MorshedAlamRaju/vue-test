import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.devtools = true;
// After you create app
//window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;

new Vue({
  render: h => h(App),
}).$mount('#app')
