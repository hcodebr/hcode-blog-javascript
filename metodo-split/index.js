let company = "Hcode Treinamentos Você especialista";

// console.log(company.split(' ')); -> Esse código irá retornar todas as palavras da frase em um array
// console.log(company.split(' ', 3)); -> Esse código irá retornar as três primeiras palavras da frase
// console.log(company.split('')); -> Esse código irá retornar todas as letras da frase em um array
// console.log(company.split()); -> Esse código irá retornar a frase inteira como índice único do array
// console.log(company.split('o')); -> Esse código irá retornar as palavras de nossa frase, excluindo a letra "o"
// console.log(company.split('').reverse().join('')); -> Esse código irá retornar nossa frase de maneira invertida

function getNameAndExtensionFromFile(fileName) {
    let result = fileName.split('.');
    return {
        name: result[0],
        extension: result[1]
    };
}

// console.log(getNameAndExtensionFromFile('javascript.jpg')); -> Este código irá exibir o nome e a extensão de um arquivo separadamente, por meio de um objeto

function getUsernameAndDomainFromEmail(email) {
    let result = email.split('@');
    return {
        username: result[0],
        domain: result[1]
    }
}

// console.log(getUsernameAndDomainFromEmail('djalma@hcode.com.br')); -> Este código irá exibir o nome do usuário e o domínio de seu email separadamente, por meio de um objeto