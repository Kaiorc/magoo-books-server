/* Controladores não são responsáveis por fazer conexões com ferramentas e serviços externos, como um banco de dados. */
/* Os responsáveis pelas conexões e pelo retorno em um projeto serão os serviços. */

import fs from 'fs';

/* Função que lê o arquivo JSON e retorna os dados */
export default function getAllBooks() {
    return JSON.parse(fs.readFileSync("./books.json"))
}