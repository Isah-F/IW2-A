// Tipos de váriaveis:

//let (permite alterar o valor):
let teste1 = 'maçã';

//const (não permite novo valor):
const teste2 = 'Laranja';
console.log(teste2);

//var:
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

//concatenar:
console.log("6" + 4);
console.log("6" - 4);
console.log("6" * 4);
console.log("6" / 4);


//Operadores:

let contador = 0;
contador ++;    //contador +1
contador +=3;   //contador +3
contador --;    //contador -1
contador -= 5;  //contador -5

console.log(contador);  //contador=(-2)

////////////////////////////////////////////

//Condição:
let numero2 =3;
let testeNull = null;

if (testeNull != null){
    console.log("Não é nulo.");
}
else if (numero2 >4){
    console.log("Número maior do que 4!");
}
else{
    console.log("É nulo.");
}


if ("85" == 85){  //converte os valores
    console.log("Verdadeiro!")
}
if ("85" === 85){ //compara valor e tipo
    console.log("Falso!")
}

//////////////////////////////////////

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

