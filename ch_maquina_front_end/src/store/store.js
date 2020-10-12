import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		variables:[
			{'name':'var1','value':'val1'},
			{'name':'var2','value':'val2'},
			{'name':'var3','value':'val3'}
		],
		instructions: [
			{'pos':'0001','instruccion':'instr1'},
			{'pos':'0002','instruccion':'instr2'},
			{'pos':'0003','instruccion':'instr3'}
		],
		labels: [
			{'pos':'0001','name':'lab1'},
			{'pos':'0002','name':'lab2'},
			{'pos':'0003','name':'lab3'}
		],
		memory_t: [
			{'pos':'0001','instruccion':'instr1'},
			{'pos':'0002','instruccion':'instr2'},
			{'pos':'0003','instruccion':'instr3'}
		]
	},
	mutations: {
		addVariables(state, data){
			state.variables = data
		},
		addInstructions(state, data){
			state.instructions = data
		},
		addLabels(state, data){
			state.labels = data
		},
		addMemoryT(state, data){
			state.memory_t = data
		}
	},
	actions: {},
	modules: {},
	getters: {
		variablesTable: state =>{
			return state.variables
		}
	}
});