let div = document.getElementById("container"); 
console.log(div); 

let h1 = document.querySelector(".subtitulo"); 
console.log(h1);

h1.textContent = "Aula - Eventos Html+Script";

function gerarAlerta() {  
    alert("Teste com fuction via JS!");
}

let botao = document.getElementById("botao-alerta"); 
botao.addEventListener("click", function () {  //detecta o evento e executa a função
    div.style.color = "green";

    let novoElementoP = document.createElement("p");
    novoElementoP.textContent = "Teste de criação a partir do clique!";

    document.body.appendChild(novoElementoP); //Body pode ser acessado direto
});

h1.addEventListener("mouseenter", function(){ //ao apassar o mouse em cima do h1, some
    botao.style.display = "none";
});

h1.addEventListener("mouseout", function(){ //ao tirar o mouse de cima, volta
    botao.style.display = "block";
});

//

let input = document.getElementById("input-numero");
let botaoMult = document.getElementById("botao-mult");
let textoFinal = document.getElementById("texto-final");

botaoMult.addEventListener("click", function(){
    let resultado =  input.value * 2; 
    textoFinal.textContent = resultado;
});
//////////////exercício//////////////

let input1 = document.getElementById("input-numero1");
let input2 = document.getElementById("input-numero2");

let botaoSoma = document.getElementById("botao-soma");
let textoResul = document.getElementById("texto-resul");

botaoSoma.addEventListener("click", function(){
    let resulSoma =  Number(input1.value) + Number(input2.value); 
    textoResul.textContent = resulSoma;
});