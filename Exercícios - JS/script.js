//Isabela Oliveira Fernandes    2ºInfonet 

//1. Variáveis e Exibição:
let nome = 'Isabela';
let idade1 = '16';
let curso = 'Infonet';
console.log("Olá eu sou a "+ nome,"tenho " + idade1, "anos e faço parte do curso " + curso, "segundo período.");

//2. Soma de Dois Números:
let num1 = 20;
let num2 = 10;
let soma1 = num1 + num2;
console.log("Soma = " + soma1);

//3. Operações Matemáticas
console.log("Soma = " + soma1);

let sub = num1 - num2;
console.log("Subtração = " + sub);

let mult = num1 * num2;
console.log("Multiplicação = " + mult);

let div = num1 / num2;
console.log("Divisão = " + div);

let resto = num1%num2; //refazer
console.log("Resto da divisão = " + resto);

//4. Conversão de String para Número:
let string = "30";
let stringNum = Number(string); 
console.log("Soma:", stringNum + 20);

//5. Comparações:
let a = 10;
let b ="10";

let test1 = (a == b);
console.log(test1);

let test2 = (a === b);
console.log(test2);

//6. Verificação de Maioridade:
let idade2 = 16;
let maiorDeIdade = 18;

if (idade2 >= maiorDeIdade){
    console.log("Maior de idade.")
}
else{
    console.log("Menor de idade.")
}

//7.Verificação de Número Positivo ou Negativo:
let number = -2;
if (number > 0){
    console.log("O número " + number, "é positivo.");
}
else if(number <0){
    console.log("O número " +number, "é negativo.");
}
else{
    console.log("O número " +number, "é zero.");
}

//8.Classificação de Nota:
let nota = 8;
if (nota >= 7){
    console.log("Aprovado.");
}
else if(nota <5){
    console.log("Reprovado");
}
else{
    console.log("Recuperação");
}

//9. Laço For:
for (let i = 1; i <= 10; i++) {
    console.log(+ i);
}

//10. Soma de 1 a 100:
let soma2 = 0;
for (let i = 1; i <= 100; i++) {
    soma2 += i;
}
console.log("Resultado: " + soma2);

//11. While:
let cont = 5;
while (cont >= 1) {
    console.log(cont);
    cont--;
}

//12. Função Simples:
function DoisNum (c, d) {
    return c + d;
}
let resultado = DoisNum (2, 2);
console.log("Resultado: " + resultado);

//13. Função Par ou Ímpar:
function ParOuImpar(num3) {
    if (num3 % 2 == 0)
        console.log(num3 + " é par.");
    else
        console.log(num3 +" é impar.");
}

ParOuImpar(2);
ParOuImpar(7);
