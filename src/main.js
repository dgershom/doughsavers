import Vue from "vue";
import Vuetify from 'vuetify';
import './plugins/vuetify';
import vueResource from 'vue-resource';
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(vueResource);


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


