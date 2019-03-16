import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./FTRouter";
import store from "./FTStore";
import axios from "axios";
import { autoChange } from "FTConfig";
import "./registerServiceWorker";
import "FTCss/index.less";

Vue.config.productionTip = false;
axios.defaults.baseURL = autoChange(location.hostname);

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
