<template>
  <div class="home">
    <h1>My Recipes</h1>
    <b-button v-b-modal.addRecipeModal>Add recipe</b-button>
    <AddRecipe @submit-new-recipe='submitRecipe' />
    <div class="recipes">
      <b-card v-for="recipe in recipes" :key="recipe.id" :title="recipe.name">
      </b-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddRecipe from './AddRecipe.vue'

let recipes = ref([
    { name: 'Chicken Tonight', ingredients: ["Chicken", " Chicken Tonight", "Rice"] },
]);

if (window.localStorage.getItem('recipes') !== null) {
    recipes.value = JSON.parse(window.localStorage.getItem('recipes'));
}

function submitRecipe(recipe) {
  recipes.value.push({...recipe})
  window.localStorage.setItem('recipes', JSON.stringify(recipes.value))
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipes .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
}
</style>
