<script setup>
import { fuels } from '../assets/store.js'

</script>


<template>
    <div class="flex main">
        <h2>Carburants</h2>
        <div class="flex main-wrapper">
            <div v-for="fuel of fuels" class="flex column">
                <p class="name">{{ fuel.name }}</p>
                <p>{{ fuel.liters }} litres</p>
                <input type="number" step="0.001" :value="fuel.pricePerLiter">
            </div>
        </div>
    </div>
</template>

<style>
.flex{
    display: flex;
}

.column{
    flex-direction: column;
    width: 20%;
}

.main{
    width: 50%;
}

.main-wrapper{
    margin-left: 25px;
    border: 1px solid var(--vt-c-red);
    background-color: var(--vt-c-red2);
    max-width: 450px;
}

.name{
    font-weight: bold;
}

input{
    border: none;
    color: var(--vt-c-white-soft);
    background-color: transparent;
}
</style>