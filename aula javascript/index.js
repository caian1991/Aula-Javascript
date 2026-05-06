const { cacheSignal } = require("react");

let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Olá Mundo!!"
console.log(minhaVariavel)

minhaVariavel = true
console.log(minhaVariavel)

let numero = 10;
let texto = "20";

let resultado = numero + texto;
console.log(resultado)

// Isso é um comentário de linha única
/*
Isso é um comentário
de multiplas linhas
*/
console.log("Isso vai executar"); //mas isso aqui é ignorado

let nome = "Caian"
let Nome = "João"
let NOME = "Maria"
console.log(nome)
console.log(Nome)
console.log(nome)

//Palavras Reservadas
///let, const, var, if, else, for, white, function, return, class, new, switch, case

//Pode começar com letra, posso colocar _ ou $
//Pode conter na palavra, letras, números, _ ou $
//Não pode começar com número
//Não pode ter espaço
//Não pode usar acentos

let nome2;
let nomeCompleto;
let _contador;
let idade2;

//Nomes de funçoes começam com verbos
function calcularMedida() {

}
function buscarUsuario() {

}

//Tipos primitivos
//NUMBER - Número
const preco = 19.9
console.log(typeof preco);

//STRING - Texto
const nome3 = "Caian"
console.log(typeof nome3);

//BOOLEAN - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo);

//NULL - ausencia intencional e valor
const vazio = null;
console.log(typeof vazio);

//UNDEFINED - variavel sem valor
let indefinido;
console.log(typeof indefinido);

//BIGINT - numeros muito grandes
const grande = 54654656626162626261621612216n;
console.log(typeof grande);

//NOT A NUMBER
//Valores Especiais: NaN e Infinity
////INFINITY - divisçao por zero
console.log(5 / 0);
console.log(-5 / 0);

//NaN (Not a Number)
console.log("abc" * 3);
console.log(Math.sqrt(-1));
console.log(0 / 0);

//Checar se é NaN
console.log(Number.isNaN("abc * 3"));

function calcularTotal(preco, quantidade) {
    const total = preco * quantidade

    if (Number.isNaN(total)) {
        console.log("Erro: preço ou quantidade invalidos");
        return 0;
    }
    
    return total;
}

console.log(calcularTotal("abc", 2));
console.log(calcularTotal(10, 5));

//Strings e Template Literals
// // Aspas simples, duplas ou crase
const nome4 = "Caian";
const nome5 = "Maria";
const nome6 = 'João';

//Propriedades e métodos
const nomeCompleto2 = "Caian Malfatti";
console.log(nomeCompleto2.length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLowerCase());


//TEMPLATE STRING (crase) - permite inserir variáveis
const nome7 = "Caian";
const idade = 20;

console.log(`Olá, meu nome é ${nome7} e tenho ${idade} anos.`)

//Conversão de Tipo
console.log(Number("123"));
console.log(parseInt("10,9"));
console.log(parseFloat("10,9"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("oi"));

const texto2 = prompt("Digite um número:");
console.log(texto2 + 5);

const numero2 = Number(prompt("digite um número:"));
console.log(numero2 + 5);
alert(numero2 + 5)

//Operadores Aritméticos
console.log(2 + 3) //soma
console.log(5 - 1) //subtração
console.log(4 * 2) //multiplicação
console.log(10 / 2) //divisão
console.log(10 % 3) // resto da divisão
console.log(2 ** 3) //potencia


console.log(2 + 3 * 4);
console.log((2 + 3) * 4);



//Operadores de comparação
console.log(5 == "5"); // True - verifica valor se são iguais apõs conversão
console.log(5 == 5); // True - valores são iguais

console.log(5 === "5") //False - tipos diferentes (number x string)
console.log(5 === 5) // True - valor e tipo iguais 

console.log(5 != "5") // False - valores nAO SAO DIFERENTES APOS A CONVERSÃO
console.log(5 != 7) // True - valores são diferentes

console.log(5 !== "5") // True - são diferentes apenas no tipo, mas são 
console.log(5 !== 5) // False - são identicos

console.log(!true) - inverte para falso
console.log(!false) - inverte para verdadeiro

const idade3 = 15
console.log(idade3 >= 18);
console.log(!(idade3 >= 18));

const nome8 = "";
const nomeVazio = nome === "";
console.log(nomeVazio)

const nomeNaovazio = nome8 !== "";

console.log(!!true); //mantem verdadeiro

//Estrutura sequencial (Entrada - Prossessamento - Saída) 
//entrada
const nome9 = prompt("Digite seu nome:");
//prossessamento...
//saída
console.log("Olá," + nome9 + "!");

//entrada
console.log(5 + 5);
const n1 = Number(prompt)("Digite o primeiro número:")
const n2 = Number(prompt)("Digite o segundo número:")
//prossessamento
const soma = n1 + n2
//saída
console.log("Resultado: " + soma);

//Dobro de um número
const numero = Number(prompt("Digite um numero"))
const dobro = numero * 2 
alert(`O dobro de ${numero} é ${dobro}`)

//media de 2 notas
const nota1 = Number(prompt("primeira nota"))
const nota2 = Number(prompt("segunda nota"))
const media = (nota1 + nota2) / 2
alert(`media: ${media.toFixed(1)}`)


//Idade detalhada
//converter anos em meses, dias, horas e minutos.

//Faça um programa que leia a **idade de uma pessoa em anos** e mostre a mesma idade aproximada

//-meses
//-dias
//-horas
//-minutos

const idade10 = Number(prompt("Digite sua idade em anos"))
const idadeemmeses = idade * 12
const idadeemdias = idade * 365
const idadeemhoras = idadeemdias * 24
const idadeemminutos = idadeemhoras * 60

console.log(`Idade informada: ${idade10} anos`)
console.log("_________________")
console.log(`${meses} meses`)
console.log(`${dias} dias`)
console.log(`${horas} horas`)
console.log(`${minutos} minutos`)

//celsius - farenheint
//converter temperatura de celsius para fahrenheit

//formula: F = (C x 9/5) + 32

const celsius = Number(prompt("temperatura em C:"))
const F = (celsius * 9/5) + 32
console.log(`$`{celsius} C = ${F.toFixed(1)} F`)









