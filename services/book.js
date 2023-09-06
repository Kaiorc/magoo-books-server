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