<template>
	<b-container class="memory_table">
	  <b-row >
	    <b-col><h4>Memoria</h4></b-col>
	  </b-row>
	    <b-table sticky-header :items="items" :fields="fields"></b-table>
	  </div>
	</b-container>
</template>

<script>
export default {
    data() {
      return {
        fields: ['Pos', 'Instruccion'],
        items: [
          { Pos:'n', Instruccion: 'instruccion' },
          { Pos:'nn',Instruccion:'as'}
        ]
      }
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