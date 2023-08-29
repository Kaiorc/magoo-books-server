/* Importando o Express */
import express from 'express';
import bookRoute from './routes/book.js';

/* Criando uma aplicação Express e salvando em uma variável */
const app = express();

/* Declarando a porta que aplicação usará */
const port = 8000;

/* Roteamento */
/* O primeiro parâmetro é o path, ou seja, o caminho que a aplicação irá acessar */
app.use('/livros', bookRoute);

/* Observa as alterações na porta especificada */
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})