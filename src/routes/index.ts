import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import { message } from "ant-design-vue";
import Home from "../views/Home.vue";
import TemplateDetail from "../views/TemplateDetail.vue";
import Index from "../views/Index.vue";
import store from "../store";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
          meta: { title: "欢迎来到慕课乐高" },
        },
        {
          path: "template/:id",
          name: "template",
          component: TemplateDetail,
          meta: { title: "模版详情" },
        },
      ],
    },
  ],
});

export default router;
