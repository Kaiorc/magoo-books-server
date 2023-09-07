import { Router } from "express";
import { getBooks, getBook, postBook, patchBook, deleteBook } from "../controllers/book.js";

/* Instanciando um Router */
const router = Router();

/* Roteamento */
/* O "/" é o path, ou seja, o caminho que a aplicação irá acessar */
router.get('/', getBooks)

/* Aqui temos outra rota "get", mas dessa vez especificamos, com ":", que teremos um */
/* item variável na rota, que nesse caso é o "id" */
router.get('/:id', getBook)

router.post('/', postBook)

router.patch('/:id', patchBook)

router.delete('/:id', deleteBook)

export default router;