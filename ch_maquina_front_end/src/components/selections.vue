<template>
	<b-container class="choose_table">
		    <b-col>
		    	<b-row>
		    		<b-col>Memoria</b-col>
		    		<b-form-input class="box" placeholder="Enter number value" size="sm"></b-form-input>
		    		<b-col>Kernel</b-col>
		    		<b-form-input class="box" placeholder="Enter number value" size="sm"></b-form-input>
		    	</b-row>
		    </b-col>
		    <b-col>
		    	<b-row><b-col><h5>Velocidad</h5></b-col></b-row>
		    	<b-row cols="3">
		    		<b-col><b-img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MXuMjWq4qipYXOccIw0kHQHaHa%26pid%3DApi&f=1" width="35" height="35" alt="Center image" ></b-img></b-col>
		    		<div class="slidecontainer">
					  <b-form-input v-model="value" type="range" min="0" max="100" size="sm"></b-form-input>
					  <div class="mt-2">Value: {{ value }}</div>
					</div>
		    		<b-col><b-img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AMQ5gBXXrG-_fH-tL9iE_AHaHa%26pid%3DApi&f=1" width="30" height="30" alt="Center image" ></b-img></b-col>
		    	</b-row>
			</b-col>
	</b-container>
</template>

<script type="text/javascript">

  export default {
    data() {
      return {
        value: '50'
      }
    }
  }
</script>

<style type="text/css">
.slidecontainer {
  width: 50%; /* Width of the outside container */
  height: 5%;
}

.box {
  width: 60%; /* Width of the outside container */
  height: 5%;
}

.choose_table{
	border: 2px solid #ccc;
	border-collapse: collapse;
  	width: 100%;
  	font: normal medium/1.4 sans-serif;
}
	
</style>