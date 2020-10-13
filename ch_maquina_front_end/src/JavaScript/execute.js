import * as functions from './functions.js'

function execute(instructions){
	for (var i in instructions) {
		var row = instructions[i].instruccion.split(' ');
		switch(row[0]){
			case 'cargue':
				functions.cargue(row[1]);
				break;
			case 'almacene': 
				functions.almacene(row[1]);
				break;
			case 'reste': 
				functions.reste(row[1]);
				break;
			case 'multiplique':
				functions.multiplique(row[1]);
				break;
			case 'muestre':
				functions.muestre(row[1]);
				break;
			case 'imprima':
				functions.imprima(row[1]);
				break;
		}
		console.log(i)
	}
}

export default execute;