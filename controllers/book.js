/* Os controladores são responsáveis pela lógica da aplicação, */
/* coordenando que resposta deve ser retornada em cada situação. */

import getAllBooks from '../services/book.js'

/* "req" é a request e "res" é a response, que é o que é devolvido quando chamado */
export default function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send('Uma requisição do tipo GET foi feita no book.js')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}