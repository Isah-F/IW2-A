// Tipos de váriaveis:

//let (permite alterar o valor):
let teste = 2;
console.log(teste);
teste = 4;
console.log(teste);

//const (não permite novo valor):
const teste2 = 'Laranja';
console.log(teste2);

//var - variáveis que podem ter o seu valor alterado, porém, com escopo global
var teste3 = 'Pêra';

if (teste3){ //Atribui 'Isah4' à variável teste123
    var teste123 = 'Uva';
}
console.log(teste123);

//string:
let nome = 'Isah';

//número:
let numero = 16;

console.log('Numero é ' + numero * 2 + '!');
console.log('Meu nome é: '+ nome);

//booleanos:
let maiorDeIdade = numero >= 18;
console.log(maiorDeIdade);

//null e undefind
let testenull = null;
let testeundefind;

console.log(testenull);
console.log(testeundefind *2);


/////////////////////////////////////////////

//concatenar - conversão:
console.log("6" + 4); //string
console.log("6" - 4); //number
console.log("6" * 4); //number
console.log("6" / 4); //number

//Conversão de tipos:
let num = 1;
let numString = String(num); //convertendo o número 1 para string.
let string = "86";
let stringNum = Number(string); //convertendo o número 86 para número.

console.log(typeof num,num);
console.log(typeof numString,numString);
console.log(typeof string,string);
console.log(typeof stringNum,stringNum);

///////////////////////////////////

//Operadores:

let contador = 0;
contador ++;    //contador +1
contador +=3;   //contador +3
contador --;    //contador -1
contador -= 5;  //contador -5

console.log(contador);  //contador=(-2)

////////////////////////////////////////////

//>= / <= / || / && / == / === (além de valor, compara o tipo)...

if (idade >= 18 && testeNull == null) //Sem chaves para if's de uma linha1
    console.log('Teste');

if ("85" == 85){  //converte os valores
    console.log("Verdadeiro!")
}
if ("85" === 85){ //compara valor e tipo
    console.log("Falso!")
}
////////////////////////////////////////////

//Condição:
if (testeNull != null) {
    console.log('Não é nulo');
}
else {
    console.log('Nulo');
}


if (idade) {
    console.log('Idade existe e foi definida!');
}
else {
    console.log('Idade não definida');
}


if (testeUndefined) {
    console.log('Undefined tem valor!');
}
else if (testeNull) {
    console.log('Null tem valor!');
}
else {
    console.log('Caímos no else!');
}

//////////////////////////////////////

//Repetição:
//for 

for (let i = 0; i <= 10; i++) {
    console.log('Printando: ' + i);
}

//while
let cont = 3;
while (cont >= 0) {
    console.log('contador: ' + cont);
    cont--;
}

//////////////////////////////////////

//Funções:

//Se a minha função tiver 'return', ela retorna algo. Se não, é 'void'
function verificaSeParOuImpar(num) {
    if (num % 2 == 0)
        console.log('É par!');
    else
        console.log('É impar!');
}

verificaSeParOuImpar(3);
verificaSeParOuImpar(6);

function multiplicaPorDois(valor) {
    return valor * 2;
}

let teste4 = multiplicaPorDois(2);
console.log(teste4);

//////////////////////////////////////

