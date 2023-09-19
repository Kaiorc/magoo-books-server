import { Router } from "express";
import { getFavorites, postFavoriteBook, deleteFavoriteBook } from "../controllers/favorites.js";

/* Instanciando um Router */
const router = Router();

/* Roteamento */
/* O "/" é o path, ou seja, o caminho que a aplicação irá acessar */
router.get('/', getFavorites)

/* Aqui temos uma rota "post", mas dessa vez especificamos, com ":", que teremos um */
/* item variável na rota, que nesse caso é o "id" */
router.post('/:id', postFavoriteBook)

router.delete('/:id', deleteFavoriteBook)

export default router;