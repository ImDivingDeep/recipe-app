import { createWebHistory, createRouter } from "vue-router";
import RecipeList from "@/components/RecipeList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: RecipeList,
  },
//   {
//     path: "/about",
//     name: "About",
//     component: About,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;