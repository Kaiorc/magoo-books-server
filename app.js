/* Importando o Express */
import express from 'express';
import bookRoute from './routes/book.js';
import cors from 'cors';

/* Criando uma aplicação Express e salvando em uma variável */
const app = express();

/* Configurando a aplicação para utilizar JSON */
app.use(express.json())

/* O acesso à requisição na URL onde fica a API que veio do nosso site no localhost:3000 foi bloqueado */
/* pela política da CORS (Cross-origin Resource Sharing). Esse CORS é basicamente um sistema de segurança */
/* para que você controle quem pode fazer requisições para a sua API. Não configuramos isso na API, logo, */
/* o localhost:3000 está bloqueado a fazer requisições para a nossa API por padrão do Express. */
/* Configurando a aplicação para utilizar CORS, assim, preparados para receber requisições de qualquer origem */
app.use(cors({origin: "*"}))

/* Declarando a porta que aplicação usará */
const port = 8000;

/* Roteamento */
/* O primeiro parâmetro é o path, ou seja, o caminho que a aplicação irá acessar */
app.use('/livros', bookRoute);

/* Observa as alterações na porta especificada */
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})