<template>
  <div id="app">
    <main_menu/>
    <b-container>
      <b-row>
        <b-col>
          <b-row><selections/></b-row>
          <b-row><info_table/></b-row>
        </b-col>
        <b-col><computer/></b-col>
        <b-col><memory_table/></b-col>
      </b-row>
    </b-container>
    <pie_of_pagina/>
  </div>
</template>

<script>
import main_menu from './components/main_menu.vue'
import memory_table from './components/memory_table.vue'
import pie_of_pagina from './components/pie_of_pagina.vue'
import computer from './components/computer.vue'
import selections from './components/selections.vue'
import info_table from './components/info_table.vue'

export default {
  name: 'app',
  components: {
    main_menu,
    selections,
    info_table,
    memory_table,
    computer,
    pie_of_pagina
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
