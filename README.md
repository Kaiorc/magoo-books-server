# Magoo Books - API (Server)

## Sobre
Este é o servidor (API) do projeto "Magoo Books", uma API REST leve construída com Express para gerenciar um catálogo de livros e uma lista de favoritos. Os dados são persistidos em arquivos JSON simples (`books.json` e `favorites.json`) para facilitar a demonstração e o desenvolvimento local.

## Tecnologias
- **Node.js** (recomendado LTS >= 18): runtime JavaScript que executa o servidor e permite rodar código do lado do servidor.
- **Express** (^4.18.2): framework web minimalista para criar rotas, middlewares e tratar requisições/ respostas HTTP.
- **CORS** (^2.8.5): middleware para configurar e controlar políticas de Cross-Origin Resource Sharing entre frontend e API.
- **Nodemon** (^3.0.1) (dev): utilitário de desenvolvimento que reinicia automaticamente o servidor ao detectar alterações no código.
- **Arquivos JSON** (`books.json`, `favorites.json`): persistência leve usada neste projeto para armazenar dados de exemplo e facilitar o desenvolvimento.

## Front-end

O front-end do projeto é uma aplicação React que consome esta API.

**Repositório do front-end:** [magoo-books](https://github.com/Kaiorc/magoo-books)

## Exibição do projeto completo

```
![Página principal](magoo-books.png)
```

## Estrutura do projeto
```
.
├─ app.js                 — ponto de entrada da aplicação e configuração do Express
├─ books.json             — dados dos livros
├─ favorites.json         — dados dos livros favoritos
├─ routes/                — definições das rotas HTTP
│  ├─ book.js             — rotas relacionadas a livros
│  └─ favorites.js        — rotas relacionadas a favoritos
├─ controllers/           — lógica de controle (recebe requisições e chama serviços)
│  ├─ book.js             — controller das rotas de livros
│  └─ favorites.js        — controller das rotas de favoritos
├─ services/              — lógica de negócio e acesso aos dados
│  ├─ book.js             — operações de leitura/escrita e regras de negócio para livros
│  └─ favorites.js        — operações de leitura/escrita e regras de negócio para favoritos
└─ README.md              — documentação do projeto
```

## Endpoints (principais)
- `GET /livros` — lista todos os livros
- `GET /livros/:id` — obtém detalhes de um livro (se implementado)
- `POST /livros` — cria um novo livro (se implementado)
- `PUT /livros/:id` — atualiza um livro (se implementado)
- `DELETE /livros/:id` — remove um livro (se implementado)

Rotas de favoritos:
- `GET /favorites` — lista livros marcados como favoritos
- `POST /favorites/:id` — adiciona o livro com `id` aos favoritos
- `DELETE /favorites/:id` — remove o livro com `id` dos favoritos

## Como executar (desenvolvimento)
Pré-requisitos: `Node.js`

1. Instalar dependências:

```bash
npm install
```

2. Executar a API:

```bash
node app.js
# Ou, durante desenvolvimento com reload automático, se desejar:
npx nodemon app.js
```

A API escuta por padrão na porta `8000` (conforme `app.js`).

## Configurações
- Porta: `8000` (modificável em `app.js`)
- CORS: atualmente configurado como `origin: "*"` para permitir qualquer origem (ajuste em produção)

## Arquitetura
A arquitetura é simples e organizada em camadas para separar responsabilidades e facilitar a manutenção:

- Rotas (`routes/`) — mapeiam endpoints HTTP para controladores.
- Controladores (`controllers/`) — recebem a requisição, validam/transformam dados e chamam os serviços.
- Serviços (`services/`) — implementam a lógica de negócio e acesso a dados (leitura/escrita em JSON neste projeto).
- Persistência — arquivos JSON (`books.json`, `favorites.json`) usados como fonte de dados.

Diagrama:

![Diagrama da arquitetura](magoo-books-diagram-flowchart.png)