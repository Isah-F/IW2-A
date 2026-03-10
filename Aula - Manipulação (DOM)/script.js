//Manipulando html pelo JavaScript
let h1 = document.getElementById("olá-mundo"); // acessar um elemento html e colocar no js, pegar uma tag especifica apartir do id e colocar no js
console.log(h1); 

let p = document.querySelector(".paragrafo"); //pegar uma tag especifica apartir da classe "."
console.log(p);

h1.textContent = "Título teste DOM"; // modificando o conteudo
p.textContent = "Parágrafo teste DOM";

p.style.color = "green"; // modificando o estilo = cor

let div = document.getElementById("fundo"); 
console.log(div); 

fundo.style.backgroundColor = "red"; // modificando o estilo = cor de fundo