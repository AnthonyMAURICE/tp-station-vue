<script setup>
import Fuel from '../components/FuelComp.vue'
import Pump from '../components/PumpComp.vue'

</script>

<template>
  <main>
    <h1>Station service</h1>
    <Fuel />
    <section>
      <article>
        <h2>Pompe n°1</h2>
        <Pump />
      </article>
    </section>
  </main>
</template>


<style scoped>
main{
  margin: 20px;
  padding: 20px;
  border: 1px solid var(--vt-c-white-soft);
}

section{
  margin: 20px 0;
}
</style>