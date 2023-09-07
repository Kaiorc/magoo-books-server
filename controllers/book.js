/* Os controladores são responsáveis pela lógica da aplicação, */
/* coordenando que resposta deve ser retornada em cada situação. */

import { getAllBooks, getBookById, insertBook, modifyBook, deleteBookById } from '../services/book.js'

/* "req" é a request e "res" é a response, que é o que é devolvido quando chamado */
export function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export function getBook(req, res) {
    try {
        const id = req.params.id
        const book = getBookById(id)
        res.send(book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

/* Função que recebe os dados do novo livro e os adiciona no banco de dados (arquivo JSON) */
/* recebemos os dados do novo livro acessando ".body" que vem dentro da requisição ("req") */
export function postBook(req, res) {
    try {
        const newBook = req.body
        insertBook(newBook)
        res.status(201)
        res.send("Livro adicionado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

/* Função que recebe os dados do livro a ser modificado e modifica um livro existente com */
/* base em seu ID e nos dados fornecidos no corpo da requisição. */
export function patchBook(req, res){
    try {
        const id = req.params.id
        const body = req.body
        modifyBook(body, id)
        res.send("Livro modificado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export function deleteBook(req, res){
    try {
        const id = req.params.id
        deleteBookById(id)
        res.send("Livro deletado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}