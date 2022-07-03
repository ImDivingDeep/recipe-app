<template>
  <div class="home">
    <div class="text-center">
      <h1>My Recipes</h1>
      <b-button variant="primary" v-b-modal.addRecipeModal>Add recipe</b-button>
    </div>
    <AddRecipe @submit-new-recipe='submitRecipe' />
    <div class="recipes">
      <b-card class="col-md-6 mx-md-auto" v-for="(recipe, index) in recipes" :key="recipe.id" :title="recipe.name">
        <b-card-text>{{ recipe.description }}</b-card-text>
        <div>
          <router-link :to="{ name:'Recipe', params: {recipeId: index}}" custom v-slot="{ href, navigate }"><b-button variant="primary" :href="href" @click="navigate">View recipe</b-button></router-link>
          <b-button variant="outline-dark" @click="removeRecipe(index)" class="float-end">Remove recipe</b-button>
        </div>
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

function removeRecipe(index) {
  recipes.value.splice(index, 1)
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
