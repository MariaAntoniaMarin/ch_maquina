<template>
	<div id='main_table'>
		<b-container>
			<selections/>
			<info_table/>
		</b-container>
	</div>
</template>

<script type="text/javascript">
	import selections
	import info_table 

	export default {
	  name: 'main_table',
	  components: {
	    selections,
	    info_table
	  }
}
</script>

<style type="text/css">
	
</style>
