/* Controladores não são responsáveis por fazer conexões com ferramentas e serviços externos, como um banco de dados. */
/* Os responsáveis pelas conexões e pelo retorno em um projeto serão os serviços. */

import fs from 'fs';

/* Função que lê o arquivo JSON de favoritos e retorna os dados */
export function getAllFavorites() {
    return JSON.parse(fs.readFileSync("./favorites.json"))
}

/* Função que escreve os dados do novo favorito no arquivo JSON */
/* Como não é necessário inserir um novo livro por completo, pois ele já existe, */
/* então a função recebe apenas o "id" */
export function insertFavorite(id) {
    const books = JSON.parse(fs.readFileSync("./books.json"))
    const favorites = JSON.parse(fs.readFileSync("./favorites.json"))

    const bookToAdd = books.find(book => book.id === id)

    /* Adicionando o novo livro extraído do "books.json", no array de livros favoritos */
    // books.push(newBook)
    const newFavoriteBooksList = [ ...favorites, bookToAdd ]

    /* Escrevendo o novo array de livros favoritos no arquivo JSON de favoritos */
    fs.writeFileSync("./favorites.json", JSON.stringify(newFavoriteBooksList))
}

/* Função que lê o arquivo JSON de favoritos e deleta o livro com o "id" fornecido */
export function deleteFavoriteById(id) {
    const currentBooks = JSON.parse(fs.readFileSync("./favorites.json"))

    /* Variável que guarda apenas os livros com o "id" diferente do fornecido */
    const filteredBooks = currentBooks.filter(book => book.id !== id)

    /* Escrevendo o novo array de livros favoritos no arquivo JSON de favoritos */
    fs.writeFileSync("./favorites.json", JSON.stringify(filteredBooks))
}