<template>
	<b-container class="info_table">
		<b-row>
			<b-col>
				<b-row>
					<b-col><h4>Instrucciones</h4></b-col>
    			</b-row>
				<b-row>
					<b-col><h6>Pos</h6></b-col>
	    			<b-col><h6>Inst</h6></b-col>
    			</b-row>
				<div v-for = "n in 15">
			    	<b-row class = "row_num_">
					    <b-col class = "col_num_">{{n}}</b-col>
					    <b-col class = "col_num_">inst</b-col>
				    </b-row>
			    </div>
			</b-col>
			<b-col>
				<b-row>
					<b-col><h4>Variables</h4></b-col>
    			</b-row>
				<b-row>
					<b-col><h6>Name</h6></b-col>
	    			<b-col><h6>Value</h6></b-col>
    			</b-row>
    			<div v-for = "var_ in variables">
			    	<b-row class = "row_num_var">
					    <b-col class = "col_num_var">{{var_['name']}}</b-col>
					    <b-col class = "col_num_var">{{var_['value']}}</b-col>
				    </b-row>
			    </div>
			    <b-row>
					<b-col><h4>Etiquetas</h4></b-col>
    			</b-row>
				<b-row>
					<b-col><h6>Pos</h6></b-col>
	    			<b-col><h6>Etiqueta</h6></b-col>
    			</b-row>
    			<div v-for = "n in 5">
			    	<b-row class = "row_num_lab">
					    <b-col class = "col_num_lab">{{n}}</b-col>
					    <b-col class = "col_num_lab">label</b-col>
				    </b-row>
			    </div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import {bus} from '../main'

export default {
    data() {
      return {
      	variables:[]
      }
    },
    created (){
      bus.$on('variableTable',(data) =>{
        this.variables = data;
      })
    }
  }
</script>

<style>
.col_num_var{
  padding: 0.05rem;
  text-align: center;
  border: 1px solid #ccc;
}

.row_num_var:hover {
  background: LightGreen;
}

.col_num_lab{
  padding: 0.05rem;
  text-align: center;
  border: 1px solid #ccc;
}

.row_num_lab:hover {
  background: LightSalmon;
}

.col_num_{
  padding: 0.05rem;
  text-align: center;
  border: 1px solid #ccc;
}

.row_num_:hover {
  background: silver;
}
</style>