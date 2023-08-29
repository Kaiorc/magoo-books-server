import { Router } from "express";

/* Instanciando um Router */
const router = Router();

/* Roteamento */
/* O "/" é o path, ou seja, o caminho que a aplicação irá acessar */
/* "req" é a request e "res" é a response, que é o que é devolvido quando chamado */
router.get('/', (req, res) => {
    res.send("Hello World! no book.js")
})

/* Exportando o router (equivalente ao "export default" do React)*/
module.exports = router;