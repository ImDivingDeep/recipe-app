import { createWebHistory, createRouter } from "vue-router";
import RecipeList from "@/components/RecipeList.vue";
import ViewRecipe from "@/components/ViewRecipe.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: RecipeList,
  },
  {
    path: "/recipe/:recipeId",
    name: "Recipe",
    component: ViewRecipe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;