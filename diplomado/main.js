let valorUno = 0;
let valorFinal = 0;
let operacion;

const display = document.getElementById('display');
// display.innerHTML = '0';

const boton1 = document.getElementById('1');
boton1.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '1';
});

const boton2 = document.getElementById('2');
boton2.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '2';
});
const boton3 = document.getElementById('3');
boton3.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '3';
});
const boton4 = document.getElementById('4');
boton4.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '4';
});
const boton5 = document.getElementById('5');
boton5.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '5';
});
const boton6 = document.getElementById('6');
boton6.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '6';
});
const boton7 = document.getElementById('7');
boton7.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '7';
});
const boton8 = document.getElementById('8');
boton8.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '8';
});
const boton9 = document.getElementById('9');
boton9.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '9';
});
const boton0 = document.getElementById('0');
boton0.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '0';
});


const botonPunto = document.getElementById('punto');
botonPunto.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '.';
});

const botonOn = document.getElementById('on');
botonOn.addEventListener('click', function () {
  display.innerHTML = '';
});

const botonMas = document.getElementById('+');
botonMas.addEventListener('click', function () {
  valorUno = parseFloat(display.innerHTML);
  operacion = '+'
  display.innerHTML = '';
});
const botonMenos = document.getElementById('-');
botonMenos.addEventListener('click', function () {
  console.log('llegaMENOS', parseFloat(display.innerHTML));
  valorUno = parseFloat(display.innerHTML);
  operacion = '-'
  display.innerHTML = '';
});
const botonMultiplicar = document.getElementById('multiplicacion');
botonMultiplicar.addEventListener('click', function () {
  valorUno = parseFloat(display.innerHTML);
  operacion = '*'
  display.innerHTML = '';
});
const botonDivision= document.getElementById('division');
botonDivision.addEventListener('click', function () {
  valorUno = parseFloat(display.innerHTML);
  operacion = '/'
  display.innerHTML = '';
});
const botonRaizCuadrada = document.getElementById('raizCuadrada');
botonRaizCuadrada.addEventListener('click', function () {  
  valorUno = parseFloat(display.innerHTML);
  operacion = 'raiz'
  //para ver la solucion se debe poner igual
  
});
const botonExponente = document.getElementById('exponente');
botonExponente.addEventListener('click', function () {  
  valorUno = parseFloat(display.innerHTML);
  operacion = 'expo'
  resolverTotal(); 
  
});
const botonPorcentaje = document.getElementById('%');
botonPorcentaje.addEventListener('click', function () {  
  valorUno = parseFloat(display.innerHTML);
  operacion = '%'
  resolverTotal(); 
});

const botonIgual = document.getElementById('=');
botonIgual.addEventListener('click', function () {  
  valorFinal = parseFloat(display.innerHTML);
  //console.log('llegaIGUAL2', valorFinal)
  resolverTotal(); 
  // display.innerHTML = valorUno + valorFinal;
});

//resolver total
function resolverTotal() {
  var res = 0;  
  switch(operacion){
    case '+':
      res= parseFloat(valorUno) +  parseFloat(valorFinal);
      break;
    case '-':      
      res= parseFloat(valorUno) -  parseFloat(valorFinal);
      break;
    case '*':
      res= parseFloat(valorUno) *  parseFloat(valorFinal);
      break;
    case '/':
      res= parseFloat(valorUno) /  parseFloat(valorFinal);
      break;
    case 'raiz':      
      res= Math.sqrt(valorUno) ;
      break;
    case 'expo':      
      res= Math.pow(parseFloat(valorUno), 2 ) ;
      break;
    case '%':      
      res= (parseFloat(valorUno) / 100) ;
      break;
  }
  display.innerHTML = res.toFixed(2);
}

