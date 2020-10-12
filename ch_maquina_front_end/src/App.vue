<template>
  <div id="app">
    <mainMenu/>
    <b-container>
      <b-row>
        <b-col>
          <b-row><selections/></b-row>
          <b-row><infoTable/></b-row>
        </b-col>
        <b-col><computer/></b-col>
        <b-col><memoryTable/></b-col>
      </b-row>
    </b-container>
    <pieOfPagina/>
  </div>
</template>

<script>
import mainMenu from './components/mainMenu.vue'
import memoryTable from './components/memoryTable.vue'
import pieOfPagina from './components/pieOfPagina.vue'
import computer from './components/computer.vue'
import selections from './components/selections.vue'
import infoTable from './components/infoTable.vue'

export default {
  name: 'app',
  components: {
    mainMenu,
    selections,
    infoTable,
    memoryTable,
    computer,
    pieOfPagina
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
