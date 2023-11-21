import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import authService from './authService';
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
// import "./sytle.css"
import ArgonDashboard from "./argon-dashboard";
const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
authService.init();
