/* Importando o Express */
// const express = require('express');
import express from 'express';

/* Criando uma aplicação Express e salvando em uma variável */
const app = express();

/* Declarando a porta que aplicação usará */
const port = 8000;

/* Roteamento */
/* O "/" é o path, ou seja, o caminho que a aplicação irá acessar */
/* "req" é a request e "res" é a response, que é o que é devolvido para o usuário */
app.get('/', (req, res) => { 
    res.send("Hello World!")
})

/* Observa as alterações na porta especificada */
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})