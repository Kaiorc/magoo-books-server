/* Biblioteca permite que você trabalhe com arquivos do sistema operacional */
import fs from 'fs';

/* Lendo o arquivo books.json e salvando em uma variável */
const currentData = JSON.parse(fs.readFileSync('./books.json'));

/* Criando um novo dado para ser inserido */
const newData = { id: '3', nome: 'Livro mais que demais' };

console.log(JSON.parse(fs.readFileSync('./books.json')));

/* Escrevendo o novo dado no arquivo books.json */
fs.writeFileSync('./books.json', JSON.stringify([...currentData, newData]))

console.log(JSON.parse(fs.readFileSync('./books.json')))