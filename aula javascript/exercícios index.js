
//Exercício 01

const idade = 18

if (idade >= 18) {
    console.log("maior de idade")
} else {
    console.log("menor de idade")
    
}

const idade2 = Number(prompt("Digite sua idade"));

if (Number.isNaN(idade2)) {
    console.log("Isto não é um n~umero digite novamente")
}

else if (idade2 >= 18) {
    console.log("maior de idade")
} else {
    console.log("menor de idade")
    
}

//correção professor:

/*const idade = Number(prompt("Digite sua idade"));
if (idade >= 18) {
    alert("maior de idade")
} else {
    alert("menor de idade")
}
*/

//Exercício 2

const numero = Number(prompt("Digite um número"));

if (numero > 0) {
    alert("positivo")
    
} else {
    alert("negativo")
    
}

//Correção professor:
/*
const numero = Number(prompt("Digite um número"));
if (numero > 0) {
    alert("O número é positivo")
} else {
    alert("O número é negativo")
}
*/

//Exercício 3

const nota = 75;

if (nota >= 60) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

const nota2 = Number(prompt("Digite sua nota"));

if (nota2 >= 60) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
    
}

//Correção professor:
/*
const nota = Number(prompt("Digite a nota do aluno (0 a 100):"));
if (nota >= 60) {
    alert("Aprovado")
} else {
    alert("Reprovado")
}
*/    
 
//Exercício 4 

const numero4 = Number(prompt("Digite um número:"));

if (numero4 > 0) {
    alert("Positivo")
    }

    if (numero4 === 0) {
        alert("Igual a zero")
    }
 else {
    alert ("Negativo")
    
}

//Correção professor:
/*const numero = Number(prompt("Digite um número:"));
if (numero > 0) {
    alert("O número Positivo")
} else if (numero > 0) {
    alert("O número é negativo")
   
} else {
    alert("O número é igual a zero")
}
*/

//Exercício 5

const idade3 = Number(prompt("Digite sua idade:"));

if (idade3 <= 12) {
    alert("Você é uma criança")

} else if (idade3 >= 13 && idade3 <= 17 ) {
    alert("Você é um adolescente")

} else if (idade3 >= 18) {
    alert("Você é um adulto")
} else {
    alert("Idade inválida")
}

//Correção professor:
const 


//Exercício 6

const n1 = Number(prompt("Número 1:"));
const n2 = Number(prompt("Número 2"));
const operacao = prompt("Operações (+, -, *, %");

let resultado;

if (operacao === "+") {
    resultado = n1 + n2
}else if (operacao === "-") {
    resultado = n1 - n2
}else if (operacao === "*") {
    resultado = n1 * n2
}else if (operacao === "%") {
    resultado = n1 % n2
}

//Intermediários

const usuario = "admin";
const senha = "1234"

const ehAdmin = (usuario === "admin");
const senhaCorreta = (senha === "1234");

if (usuario && senha) {
    console.log("Acesso liberado")
} else {
    console.log("Acesso negado")
}


    

    






