import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "jquery";
import 'bootstrap/dist/css/bootstrap.css';
require("bootstrap-css-only/css/bootstrap.min.css");
require("mdbvue/lib/css/mdb.min.css");
require("@fortawesome/fontawesome-free/css/all.min.css");


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
