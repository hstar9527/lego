import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./routes/index";
import store from "./store/index";
const app = createApp(App);
let baseH5URL = "";
if (process.env.NODE_ENV === "development" || process.env.VUE_APP_STAGINE) {
  // use test backend api when
  // in development env
  // in staging env
  //   baseBackendURL = "https://api.imooc-lego.com";
  baseH5URL = "https://h5.imooc-lego.com";
} else {
  //   baseBackendURL = "https://api.imooc-lego.com";
  baseH5URL = "https://h5.imooc-lego.com";
}
export { baseH5URL };
app.use(Antd).use(router).use(store);
app.mount("#app");
