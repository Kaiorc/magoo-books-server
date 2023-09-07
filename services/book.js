/* Controladores não são responsáveis por fazer conexões com ferramentas e serviços externos, como um banco de dados. */
/* Os responsáveis pelas conexões e pelo retorno em um projeto serão os serviços. */

import fs from 'fs';

/* Função que lê o arquivo JSON e retorna os dados */
export function getAllBooks() {
    return JSON.parse(fs.readFileSync("./books.json"))
}

/* Função que lê o arquivo JSON e retorna o livro com o "id" fornecido */
export function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("./books.json"))
    
    /* Variável que guarda o livro com o mesmo "id" fornecido */
    /* O resultado sempre será apenas um elemento, já que um "id" deve */
    /* ser sempre único. */
    const filteredBook = books.filter(book => book.id === id)[0]

    return filteredBook
}

/* Função que escreve os dados do novo livro no arquivo JSON */
export function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("./books.json"))

    /* Adicionando o novo livro no array de livros */
    // books.push(newBook)
    const newBookList = [ ...books, newBook ]

    /* Escrevendo o novo array de livros no arquivo JSON */
    fs.writeFileSync("./books.json", JSON.stringify(newBookList))
}

/* Função que modifica dados de um livro já existente*/
export function modifyBook(modifications, id) {
    let currentBooks = JSON.parse(fs.readFileSync("./books.json"))

    /* Variável que guarda o livro com o mesmo "id" fornecido */
    const modifiedIndex = currentBooks.findIndex(book => book.id === id)

    /* "currentBooks[modifiedIndex]" criará um objeto novo em um índice específico de livrosAtuais com todos */
    /* os campos que existem neste último. Já o "modifications" consiste em um objeto que possui os campos com */
    /* os dados a serem alterados. Quando realizamos o Spreading de "currentBooks[modifiedIndex]", examinamos */
    /* todos os campos que este item possui e criamos um objeto para cada um deles. Já o Spreading de modifications */
    /* compara os campos modificados com os objetos de "currentBooks". Caso exista um objeto compatível com o campo */
    /* modificado, ele será substituído pelo conteúdo de "modifications",mantendo os outros campos inalterados. Caso */
    /* não haja este objeto, um novo campo será criado. */
    const modifiedContent = { ...currentBooks[modifiedIndex], ...modifications }

    /* No final, o "modifiedContent" será um objeto que conterá tudo o que temos em "currentBooks" junto */
    /* às modificações. Nosso "currentBooks" no "[modifiedIndex]" é o objeto que queremos modificar e */
    /* que portanto deverá receber a mistura dos nossos dois valores — ou seja, o "modifiedContent". Com */
    /* isso, conseguiremos editar apenas os valores modificados. */
    currentBooks[modifiedIndex] = modifiedContent

    fs.writeFileSync("./books.json", JSON.stringify(currentBooks))
}