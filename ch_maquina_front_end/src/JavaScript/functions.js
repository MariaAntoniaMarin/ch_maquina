import {store} from '../store/store.js'

function almacene(varName){
	//console.log(store.state.acumulador);
	var data = {'name':varName,'value':store.state.acumulador.value};
	//store.dispatch('changeVariable',data);
	store.commit('changeVariableValue',data);
	console.log(data);
}

function cargue(varName){
	const value = store.getters.variableValue(varName);
	//store.dispatch('changeAcumulador',value.value);
	store.commit('changeAcumuladorValue',value.value);
	console.log(value.value);
}

function reste(varName){
	const value = store.getters.variableValue(varName);
	const newValue = store.state.acumulador.value - value.value;
	//store.dispatch('changeAcumulador',newValue);
	store.commit('changeAcumuladorValue',newValue);
	console.log(newValue);
}

function multiplique(varName){
	const value = store.getters.variableValue(varName);
	const newValue = store.state.acumulador.value * value.value;
	//store.dispatch('changeAcumulador',newValue);
	store.commit('changeAcumuladorValue',newValue);
	console.log(newValue);
}

function muestre(varName){
	const value = store.getters.variableValue(varName);
	//store.dispatch('changeMonitor',value.value);
	store.commit('changeMonitorValue',value.value)
	console.log(value.value);
}

function imprima(varName){
	const value = store.getters.variableValue(varName);
	//store.dispatch('changePrinter',value.value);
	store.commit('changePrinterValue',value.value);
	console.log(value.value);
}

function sume(varName){
	const value = store.getters.variableValue(varName);
	const newValue = store.state.acumulador.value + value.value;
	//store.dispatch('changeAcumulador',newValue);
	store.commit('changeAcumuladorValue',newValue);
	console.log(newValue);
}

export {almacene,cargue,reste,multiplique,muestre,imprima};