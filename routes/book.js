import { Router } from "express";
import getBooks from "../controllers/book.js";

/* Instanciando um Router */
const router = Router();

/* Roteamento */
/* O "/" é o path, ou seja, o caminho que a aplicação irá acessar */
router.get('/', getBooks)

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