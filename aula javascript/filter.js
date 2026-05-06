/*
const numeros11 = [1, 2, 3, 4, 5, 6, 7, 8];

const nums = [10,55,80,20,100];

const maiores = nums.filter((n) => {
    return n > 50;

});

console.log(maiores);
*/
//map
/*
const peaple = [
    {name: "Lucas", age: 35},
    {name: "Maria", age: 17},
    {name: "João", age: 18},
    {name: "Ana", age: 22},
]

const novoArray = Array.map((Element) => {
        return novoValor;
});

const nomes = people.map((person) => {
    return person.name.touppercase();

})

console.log(nomes);

const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map((numero)=> {
    return numero * 2;
})

console.log(dobro);


const produtos = ["Mouse", "Teclado", "Monitor"];
const frases = produtos.map((produto) => {
    return `Produtos: ${produto}`
    
})

console.log(frases)



const pessoas = [
    {nome: "Lucas", idade: 35};
    {nome: "Maria", idade: 17};
];

const resultado = pessoas.map((pessoa) => {
    return {
        nome: pessoa.nome,
        maiorIdade: pessoa.idade >= 18
    };
});

console.log(resultado);

*/
/*
//Use o map para transformar um array de preços em preços com desconto de 10%.

const precos = [100, 200, 300];
const desconto = precos.map((descontos) => {
    return descontos * 0.9;
})

console.log(desconto)
*/

//Use map para transformar:
/*
const numeros = [1, 2, 3, 4];
const classeNumero = numeros.map((numero) => {
    return `Numero: ${numero}`
});

console.log(esultado);
*/

//Find
/*

const item = Array.find((element) => {
    return condicao;
})

*/
/*
    const maria = people.find((person) => {
        return person.name === "Maria";
    });
  

    console.log(maria);
*/

/*
const numeros18 = [5, 10, 15, 20, 25];

const maiores = numeros18.find((numeroMaior) => {
    return numeroMaior > 18
});

console.log(maiores)
*/

/*
const usuarios = [
    {id:1, nome:"Caian"},
    {id:2, nome:"Joao"},
    {id:3, nome:"Maria"}
]

const usuario = usuarios.find((u) => {
    return u.id === 2
})

console.log(usuario)
*/

/*
const numeros = [5, 8, -2, 10, -7];
const numeroNegativo = numeros.find((numero) => {
    return numero < 0;
});



//Reduce
Array.reduce((acc, elent) => {
    return novoACC;
}, valorInicial);


const numeros = [10, 20, 30];
const soma = numeros.reduce((acc, numero) => {
    console.log("ACC:", acc);
    console.log("Número atual:", numero);
    return acc + numero;

}, 0);

console.log(soma)



const totalIdade = people.reduce((acc, person) => {
    return acc + person.age;


}, 0);

console.log(totalIdade)



const nomes = people.reduce((acc, person) => {
    return acc + "" + person.name;
}, "");

console.log(nomes)
*/

/*
const numeros = [2,3,4];
const multiplicacao = numeros.reduce((acc, numero) => {
    return acc * numero
}, 1);
 console.log(multiplicacao)

*/
/*
 const carrinho = [
    { produto:"Mouse", preco:50},
    { produto:"Teclado", preco: 100},
    { produto:"Monitor", preco: 900}
    ];
    const lista = carrinho.reduce((acc, item) => {
        return acc + item
    }, 0)
 
console.log(lista)
*/



/*
const numeros = [10, 45, 7, 99, 32];

const maior = numeros.reduce((acc, numeromaior) => {

    if(numeromaior > acc) {
    return numeromaior;
}
    return acc;

}, numeros[0]);

console.log(maior)
*/
/*
const produtos2 = [
    {nome: "Mouse", preco: 50},
    {nome: "Teclado", preco: 200},
    {nome: "Monitor", preco: 900},
    {nome: "Notebook", preco: 3000},
];

const resultado = produtos2.filter((produtinho) => {
    return produtinho.preco > 100;
})
.map((produtinho) => {
    return produtinho.nome;
});
console.log(resultado);
*/


/*
const filmes = [
    {nome:"Vingadores", nota:9}
    {nome:"Batman", nota:7}
    {nome:"Dragon Ball", nota:10}
    {nome:"Matrix", nota:8}
];

const filmeRuim = filmes.find((nome) => {
    return filmes.nota < 8;
})

const maiorNota = filmes.filter((melhorfilme) => {
    return melhorfilme.nota >= 10;
})
.map((melhorfilme) => {
    return melhorfilme.nota;
});
console.log(maiorNota)
//está errado 
*/

/*
//switch

const dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
        case 2:
            console.log("Segunda");
            break;
            case 3:
                console.log("Terça");
              break;  

    default:
        console.log("Dia inválido")
        break;
}
*/

/*
const n1 = 10;
const n2 = 5;

const operacao = "+";

switch (operacao) {
    case "+":
        console.log(n1 + n2);
    
        break;
        case "-":
        console.log(n1 - n2);
        break;
        case "*":
        console.log(n1 * n2);
        break;
        case "/":
        console.log(n1 / n2);
        break;

    default:
        console.log("Operação inválida!")
}

*/

//Faça um sistema de notas



const nota = prompt("Digite sua nota: A, B, C, ou D")

switch (nota) {
    case "A":
        console.log("Excelente!")
        
        break;
        case "B":
            console.log("Bom.")
            break;
            case "C":
                console.log("Regular")
                break;
                case "E":
                    console.log("Ruim.")

    default:
        console.log("Nota inválida")
        
}


//Crie um sistema de menu de video game


let opcao;
do {
    opcao = Number(prompt(`
        ===Menu=== 
        1 - Jogar 
        2 - Configurações
        3 - Créditos
        4 - Sair
        `));

        switch (opcao) {
            case 1:
                console.log("Iniciando o jogo!")
                break;

                case 2:
                    console.log("Settings")
                    break;

                    case 3: 
                    console.log("Créditos")
                    break;

                
        
            default:
                break;
        }

         

        } while(opcao !== 4)
    
    
    































