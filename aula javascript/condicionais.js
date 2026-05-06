const { cacheSignal } = require("react");

//Javascript: Condicionais (if, else, operadores lõgicos)
if (condition) {

}

const idade = 20
if (idade >= 18) {
    console.log("maior de idade")
}

if (idade >= 18) {
  console.log("maior de idade")
} else {
    console.log("menos de idade")
}


//Operadores de comparação
const a = 10;
const b = 5;

console.log("10 > 5:", a > b);
console.log("5 > 10:", b > a);

console.log("5 < 10:", a < b);
console.log("10 < 5", b < a);

console.log("10 >= 5:", a >= b);
console.log("5 >= 10:", b >= a);

//Operador && (E / AND)

const idade2 = 20;
const temDocumento = true;
const estaNaLista = true;

if (idade >= 18 && temDocumento && estaNaLista) {
    console.log("Pode entrar");
} else {
    console.log("Se lascou!!!")
}

// operador //  (OU / OR)
const temDinheiro = false;
const temCartao = true;
const temPix = false;

if (temDinheiro || temCartao || temPix) {
   console.log("Pode comprar!!") 
} else {
    console.log("Não tem como pagar!")

    
}

const usuario = "admin";
const senha = "1234";

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario ==="admin");
const ehGerente = (usuario === "gerente");

if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
    console.log("Acesso liberado")
} else {
    console.log("Acesso negado!")

}

if ((ehAdmin || ehGerente) && senhaCorreta) {
    
} else {
    console.log("Acesso negado!")
}

//Exercício para testar

const usuario = "Caian";
const senha = "123";
const usuario2 = "Gerente";

if ((Caian || Gerente && 123)) {
    console.log("Acesso Liberado!");
} else {
    console.log("Acesso negado!")
}

const usuario2 = prompt("Usuario");
const senha2 = prompt("senha");

const acessoAdmin = (usuario2 === "admin" && senha2 === "1234");
const acessoUser = (usuario2 === "user" && senha2 === "123");

if (acessoAdmin || acessoUser) {
    console.log(Acesso liberado);
} else {
    console.log(Acesso negado);
}

const nota = 75;

if (nota >= 80) {
    console.log("Aprovado")
} else if (nota >= 60) {
    console.log("Recuperação")
}   else {
    console.log("Reprovado")

}

const temp = Number(prompt("Temperatura atual C:"));

if (Number.isNaN(temp)) {
    console.log("Temperatura inválida")
} else if (temp < 0) {
    console.log("Abaixo de zero");
} else if (temp <= 15) {
    console.log("Frio");
}  else if (temp <= 25) {
    console.log("Agradavel");
} else if (temp <= 35); {
    console.log("Quente");
} else {
    console.log("Morte")
}

if (Number.isNaN(temp)) {
    console.log("Abaixo de zero C");
} else if (temp < 0) {
    
} else if (temp >= 0 && temp <= 15)
    console.log("Frio");
    
} else if (temp ) {

    
}

//Semaforo

const vermelho = "Vermelho";
const amarelo = "Amarelo";
const verde = "Verde";

const cor = prompt("Digite a cor do sinal")

if (cor === verde) {
    console.log("Siga");
    
} 

if (cor === amarelo) {
    console.log("Atenção");
    
}

if (cor === vermelho) {
    console.log("Pare!")
}


else {
    console.log("Inválido")
}

//Calculadora de IMC Valida

const peso = 25;
const peso2 = 18.5
    

    



    





    


