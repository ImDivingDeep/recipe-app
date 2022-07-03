<template>
    <b-modal id="addRecipeModal" @ok="submitRecipe" title="Add new recipe">
        <b-form ref="form">
            <b-form-group label="Name" label-for="name" invalid-feedback="Name is required">
                <b-form-input id="name" v-model="recipe.name" required />
            </b-form-group>
            <b-form-group label="Description" label-for="description">
                <b-form-textarea id="description" v-model="recipe.description" required />
            </b-form-group>
            <b-form-group label="Ingredients">
                <div style="display:flex" v-for="(ingredient, index) in recipe.ingredients" :key="index">
                    <b-form-input v-model="recipe.ingredients[index]" />
                    <b-button v-on:click="removeIngredient(index)">X</b-button>
                </div>
                <b-button v-on:click="addIngredient">Add ingredient</b-button>
            </b-form-group>
            <b-form-group label="Instructions" label-for="instructions">
                <b-form-textarea id="instructions" v-model="recipe.instructions" />
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script setup>
import { reactive, defineEmits } from "vue";

const recipe = reactive({
    name: '',
    ingredients: [''],
    description: '',
    instructions: ''
})

const emit = defineEmits(['submit-new-recipe'])

function submitRecipe() {
    emit('submit-new-recipe', recipe)
}

function addIngredient() {
    recipe.ingredients.push('')
}

function removeIngredient(index) {
    recipe.ingredients.splice(index, 1)
}

</script>