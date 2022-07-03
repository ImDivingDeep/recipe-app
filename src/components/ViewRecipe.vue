<template>
    <b-card class="col-md-9 mx-md-auto">
        <h4 class="card-title text-center">{{ recipe.name }}</h4>
        <b-card-text>{{ recipe.description }}</b-card-text>
        <b-card-text>Ingredients:</b-card-text>
        <ul v-for="ingredient in recipe.ingredients" :key="ingredient.id">
            <li>{{ ingredient }}</li>
        </ul>
        <b-card-text>{{ recipe.instructions }}</b-card-text>
    </b-card>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

let recipe = ref(JSON.parse(window.localStorage.getItem('recipes'))[route.params.recipeId])
</script>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
}
</style>