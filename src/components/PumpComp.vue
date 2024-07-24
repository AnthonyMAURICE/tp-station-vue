<script setup>
import { ref } from 'vue'
import { fuels } from '../assets/store.js'
const selected = ref({
    id: 0
})


const actualQuantity = ref(0)
const quantityBought = ref(0)

function deliver(){

}

</script>

<template>
    <form>
        <select v-model="selected">
            <option v-for="fuel of fuels" :value="{ id: fuel.id }">{{ fuel.name }}</option>
        </select>
        <div>
            <label for="limit">Limite</label>
            <input v-model.number="quantityBought" type="number" id="limit">
            <input type="radio" id="liter" name="limits" checked>
            <label for="liter">litres</label>
            <input type="radio" id="money" name="limits">
            <label for="money">€</label>
        </div>
        <div class="purchase-elements">
            <label for="price-per-liter">Prix du litre</label>
            <input id="price-per-liter" type="text" readonly :value="fuels[selected.id].pricePerLiter">
            <p>€</p>
        </div>
        <div class="purchase-elements">
            <label for="quantity">Quantité</label>
            <input v-model.number="actualQuantity" id="quantity" type="text" readonly>
            <p>litres</p>
        </div>
        <div class="purchase-elements">
            <label for="price-to-pay">À payer</label>
            <input id="price-to-pay" type="text" readonly>
            <p>€</p>
        </div>
        <div class="trigger">
            <p class="gauge"><span class="filled-gauge" :style="{width: `${actualQuantity / quantityBought *100}%`}"> </span></p>
            <button type="button" @click="deliver">Lancer la distribution</button>
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

select, option, input, button{
    width: 65%;
    height: 25px;
    color: var(--vt-c-white-soft);
    background-color: var(--vt-c-red2);
    border: 1px solid var(--vt-c-red);
}

div{
    padding: 15px 0;
    border-bottom: 2px solid var(--vt-c-white-soft);
}

label{
    width: 25%;
}

#limit{
    border: 1px solid var(--vt-c-red);
    width: 15%;
    margin: 0 20px;
}

#price-shown{
    width: 10%;
    margin-right: 5px;
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

.purchase-elements{
    display: flex;
}

.gauge{
    width: 100%;
    height: 25px;
    background-color: var(--vt-c-red2);
    border: 1px solid var(--vt-c-red);
}

.filled-gauge{
    display: inline-block;
    height: 21px;
    width: 0%;
    margin-top: 1px;
    padding: 1px 0;
    background-color: var(--vt-c-gold);
}

button{
    width: 100%;
    margin-top: 10px;
}
</style>