<template>
    <p>{{ recipe.name }}</p>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params)

let recipe = ref(JSON.parse(window.localStorage.getItem('recipes'))[route.params.recipeId])
</script>