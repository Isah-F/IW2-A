let numero = 1;
let numeroString = String(numero);
let string = "86";
let stringNumero = Number(string);

console.log(typeof numero,numero);
console.log(typeof numeroString,numeroString);
console.log(typeof string,string);
console.log(typeof stringNumero,stringNumero);

//Condição
let numero2 =3;
let testeNull = null;

if (testeNull != null){
    console.log("Não é nulo!");
}
else if (numero2 >4){
    console.log("Número maior do que 4!");
}
else{
    console.log("É nulo");
}

//Tipos de variáveis em Js:

//let

let teste = 2;
teste = 4;

if (teste == 4){
    console.log(teste);

    var pi = 3.14;
}

console.log(pi);

//Operadores:

let contador = 0;
contador ++; //Pega o valor da variavel contador e adiciona +1
contador +=3; //Pega o valor de contador e adiciona +3

console.log(contador);

contador --;
contador -= 5;

console.log(contador);

if ("85" == 85){
    console.log("Verdadeiro!")
}
else{
    console.log("Falso!")
}

