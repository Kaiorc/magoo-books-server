import { Router } from "express";
import { getBooks, getBook } from "../controllers/book.js";

/* Instanciando um Router */
const router = Router();

/* Roteamento */
/* O "/" é o path, ou seja, o caminho que a aplicação irá acessar */
router.get('/', getBooks)

/* Aqui temos outra rota "get", mas dessa vez especificamos, com ":", que teremos um */
/* item variável na rota, que nesse caso é o "id" */
router.get('/:id', getBook)

router.post('/', (req, res) => {
    res.send("Uma requisição do tipo POST foi feita no book.js")
})

router.patch('/', (req, res) => {
    res.send("Uma requisição do tipo PATCH foi feita no book.js")
})

router.delete('/', (req, res) => {
    res.send("Uma requisição do tipo DELETE foi feita no book.js")
})

export default router;