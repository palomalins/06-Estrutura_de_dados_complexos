let eu = {
    nome : "Paloma",
    idade : 16,
    idioma : ["Inglês", "Espanhol", "Japonês"]
}
console.log(eu)
eu.qualidade = "Empatia";
console.log(eu)
delete eu.idade;
console.log(eu) 

let cadastro = [
    {
        nome: "Pamela",
        idade: 19,
        telefone: 123456789,
        amigos: ["Jaqueline","Maria", "Daniel", "Chris"]
    },
    {
        nome: "Diogo",
        idade: 22,
        telefone: 987654321,
        amigos: ["Marta", " José", "Danilo", "Marcos" ]
    },
    {
        nome: "Enzzo",
        idade: 14,
        telefone: 098567301,
        amigos: ["Yan", "Yago", "Lawrence", "Antônio"]
    },
    {
        nome: "Raissa",
        idade: 20,
        telefone: 876905123,
        amigos: ["Raiane", "Marcos", "Tabata", "Gustavo"]
    },
    {
        nome: "Daniele",
        idade: 29,
        telefone: 90786541,
        amigos: ["Bruno", "Luiza", "Fernanda", "Carol"]
    },
]
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[0])