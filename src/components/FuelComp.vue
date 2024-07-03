<script setup>
import { ref } from 'vue'

const gasoil = ref({
    volume: 10000,
    pricePerLiter: 1.882
})

const sp95 = ref({
    volume: 10000,
    pricePerLiter: 1.963
})

const sp98 = ref({
    volume: 10000,
    pricePerLiter: 1.991
})

const e85 = ref({
    volume: 10000,
    pricePerLiter: 1.631
})

const gpl = ref({
    volume: 10000,
    pricePerLiter: 1.32
})

</script>


<template>
    <div class="flex main">
        <h2>Carburants</h2>
        <div class="flex main-wrapper">
            <div class="flex column">
                <p>Gasoil</p>
                <p>{{ gasoil.volume }} litres</p>
                <input type="number" step="0.001" :value="gasoil.pricePerLiter">
            </div>
            <div class="flex column">
                <p>SP95</p>
                <p>{{ sp95.volume }} litres</p>
                <input type="number" step="0.001" :value="sp95.pricePerLiter">
            </div>
            <div class="flex column">
                <p>SP98</p>
                <p>{{ sp98.volume }} litres</p>
                <input type="number" step="0.001" :value="sp98.pricePerLiter">
            </div>
            <div class="flex column">
                <p>E85</p>
                <p>{{ e85.volume }} litres</p>
                <input type="number" step="0.001" :value="e85.pricePerLiter">
            </div>
            <div class="flex column">
                <p>GPL</p>
                <p>{{ gpl.volume }} litres</p>
                <input type="number" step="0.001" :value="gpl.pricePerLiter">
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

input{
    border: none;
    color: var(--vt-c-white-soft);
    background-color: transparent;
}
</style>