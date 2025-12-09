<h1 align="center">📚 Sistema de Consulta de Livros, Autores e Gêneros</h1>

Este projeto consiste em uma API desenvolvida para fins de estudo e prática, permitindo a consulta e gerenciamento de **livros**, **autores** e **gêneros** através de rotas REST.  
A aplicação foi construída utilizando **Node.js**, **Express**, **Sequelize** e **SQLite**, oferecendo uma base sólida para aprendizado de desenvolvimento backend.

---

## 📑 Sumário
- [Introdução](#introdução)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Endpoints](#endpoints)
- [Como Rodar](#como-rodar)
- [Como Realizar as Requests](#como-realizar-as-requests)
- [Licença](#licença)

---

## 📘 Introdução
Este projeto tem como objetivo demonstrar o funcionamento de uma API simples e organizada, proporcionando:

- Consulta rápida de registros  
- Filtros personalizados  
- Paginação  
- Cadastro de novos dados  

A API foi desenvolvida com foco em clareza, organização e boas práticas, servindo como base para estudos de desenvolvimento backend.

---

## 🛠️ Tecnologias
As tecnologias utilizadas foram:

- **[Node.js](https://nodejs.org/)** – Ambiente de execução  
- **[Express](https://expressjs.com/)** – Framework para rotas HTTP  
- **[Sequelize](https://sequelize.org/)** – ORM para gerenciamento do banco  
- **[SQLite](https://www.sqlite.org/)** – Banco de dados leve e rápido  

---

## 📌 Funcionalidades
- Cadastro de Livros  
- Cadastro de Autores  
- Cadastro de Gêneros  
- Filtros por título, país, tipo e ano  
- Paginação de resultados  
- Consultas dinâmicas via Query Params  

---

## 🌐 Endpoints

### 📘 Livros
- **Criar Livro**  
  `POST /books`
- **Buscar com filtros**  
  `GET /books?title=...&personagemPrincipal=...&publishedYear=...`
- **Paginação**  
  `GET /books?limit=30&page=2`

### 🎭 Gêneros
- **Criar Gênero**  
  `POST /genres`
- **Listar Gêneros**  
  `GET /genres`
- **Filtrar**  
  `GET /genres?type=...&country=...&creationdate=...`

### ✍️ Autores
- **Criar Autor**  
  `POST /authors`
- **Listar Autores**  
  `GET /authors`
- **Filtrar**  
  `GET /authors?name=...&country=...&age=...`

---

## ▶️ Como Rodar

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
---

```
### 2. Clonar o repositório
```bash
npm install
```


### 3. Iniciar o servidor
```bash
npm start
```

### Servidor disponível em:
```bash
http://localhost:3000
```

## 📤 Como Realizar as Requests
### ✔️ Via URL
```bash
curl -X POST http://localhost:3000/books \
-H "Content-Type: application/json" \
-d '{"title":"O Incrivel mundo de Sara","personagemPrincipal":"Sara","publishedYear":2025}'
```

### ✔️ Via Postman / Insomnia
* Crie nova requisição
* Escolha GET ou POST
* Insira a URL
* No caso de POST → Body → Raw → JSON
* Envie o objeto da requisição

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.
Consulte o arquivo LICENSE
 para mais informações.
