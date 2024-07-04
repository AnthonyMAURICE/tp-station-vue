<script setup>
import { fuels } from '../assets/store.js'

</script>

<template>
    <form>
        <select v-model="selected">
            <option v-for="fuel of fuels" :value="{ id: fuel.id }">{{ fuel.name }}</option>
        </select>
        <div>
            <label for="limit">Limite</label>
            <input type="number" id="limit">
            <input type="radio" id="liter" name="limits" checked>
            <label for="liter">litres</label>
            <input type="radio" id="money" name="limits">
            <label for="money">€</label>
        </div>
        <div>
            <label for="price-per-liter">Prix du litre</label>
            <input id="price-shown" type="text" readonly>
        </div>
    </form>
</template>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    width: 50%;
    color: var(--vt-c-gold);
}

select, option, input{
    width: 75%;
    height: 25px;
    color: var(--vt-c-white-soft);
    background-color: var(--vt-c-red2);
    border-color: var(--vt-c-red);
}

div{
    padding: 15px 0;
    border-bottom: 2px solid var(--vt-c-white-soft);
}

#limit{
    border: 1px solid var(--vt-c-red);
    width: 15%;
    margin: 0 20px;
}

input[type='radio'] {
    box-sizing: border-box;
    appearance: none;
    background:  var(--vt-c-red2);
    border: 3px solid var(--vt-c-red);
    width: 15px;
    height: 15px;
    margin: 0 10px;
}

input[type='radio']:checked {
    background: var(--vt-c-gold);
}
</style>