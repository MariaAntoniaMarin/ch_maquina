<template>
	<b-container class="memory_table">
	  <b-row >
	    <b-col><h4>Memoria</h4></b-col>
	  </b-row>
    <b-row>
          <b-col><h5>Pos</h5></b-col>
            <b-col><h5>Item</h5></b-col>
          </b-row>
          <div v-for = "row_ in memory_t">
            <b-row class = "row_num">
              <b-col class = "col_num">{{row_['Pos']}}</b-col>
              <b-col class = "col_num">{{row_['Instruccion']}}</b-col>
            </b-row>
          </div>
	</b-container>
</template>

<script>

import {bus} from '../main'

export default {
    data() {
      return {
        memory_t:[]
      }
    },
    created (){
      bus.$on('memoryTable',(data) =>{
        this.memory_t = data;
      })
    }
  }
</script>

<style type="text/css">

.memory_table{
	border: 2px solid #ccc;
	border-collapse: collapse;
  	width: 100%;
  	font: normal medium/1.4 sans-serif;
}

.col_num{
  padding: 0.05rem;
  text-align: left;
  border: 1px solid #ccc;
}

.row_num:hover {
  background: LightSteelBlue;
  border-top-color: red;
}

</style>