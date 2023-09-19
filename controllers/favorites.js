/* Os controladores são responsáveis pela lógica da aplicação, */
/* coordenando que resposta deve ser retornada em cada situação. */

import { getAllFavoriteBooks, insertFavoriteBook, deleteFavoriteBookById } from '../services/favorites.js'

/* "req" é a request e "res" é a response, que é o que é devolvido quando chamado */
export function getFavorites(req, res) {
    try {
        const favoriteBooks = getAllFavoriteBooks()
        res.send(favoriteBooks)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export function postFavoriteBook(req, res) {
    try {
        const id = req.params.id
        insertFavoriteBook(id)
        res.status(201)
        res.send("Livro favorito adicionado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export function deleteFavoriteBook(req, res){
    try {
        const id = req.params.id
        /* Verificando se o ID foi fornecido corretamente */
        /* Se "id" não está vazio & "Number(id)" confirma que é um número, */
        /* entra no bloco, se não, gera uma resposta de status 422 (Unprocessable Entity) */
        /* e devolve uma resposta "ID inválido" */
        if (id && Number(id)) {
            deleteFavoriteBookById(id)
            res.send("Livro favorito deletado com sucesso!")
        } else {
            res.status(422)
            res.send('"ID" inválido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}