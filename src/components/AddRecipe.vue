<template>
    <b-modal id="addRecipeModal" @ok="submitRecipe" title="Add new recipe">
        <b-form ref="form">
            <b-form-group label="Name" label-for="name" invalid-feedback="Name is required">
                <b-form-input id="name" v-model="recipe.name" required />
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script setup>
import { reactive, defineEmits, nextTick } from "vue";
import { Modal } from 'bootstrap';

const recipe = reactive({
    name: ''
})

const emit = defineEmits(['submit-new-recipe'])

function submitRecipe() {
    emit('submit-new-recipe', recipe)
    nextTick(() => {
        var myModalEl = document.getElementById('addRecipeModal')
        Modal.getInstance(myModalEl)?.hide();
    })
}

</script>