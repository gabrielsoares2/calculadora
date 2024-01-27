let numeros = document.getElementsByClassName('number');
let visor = document.getElementById('caixaDeEntrada');
let igual = document.getElementById('=');

function calculo(idDoBotao) {

	let valorDoBotao = document.getElementById(idDoBotao).innerHTML;
	visor.value += valorDoBotao;
	return visor;

}

function res() {
		  
	var valor = visor.value;

	var resultado = eval(valor);

    visor.value = resultado;

	return resultado;
}