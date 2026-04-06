## CitaAI

O CitaAI é um gerador de citações aleatórias, onde o usuário pode buscar novas citações, salvá-las como favoritas e gerenciá-las pela lista de favoritos.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Stack](#stack)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Configurações](#configurações)
- [Autor](#autor)

## Sobre o Projeto

O **CitaAI** é um sistema web de citações aleatórias em tempo real. A cada clique em "New Quote", uma nova frase é buscada via API ZenQuotes e exibida na tela. O usuário pode favoritar citações, visualizar sua lista de favoritos e remover itens individualmente. Os favoritos são salvos no `localStorage`.

## Funcionalidades

- **Citações aleatórias**
  - Busca de citação via API ZenQuotes ao clicar em "New Quote".

- **Favoritos**
  - Adição da citação atual à lista de favoritos.
  - Validação para evitar duplicatas.
  - Exibição do painel de favoritos ao clicar no ícone de coração.
  - Remoção individual de favoritos.

## Stack

- **Frontend**
  - **React**
  - **Vite**

## Estrutura do Projeto

- **`src/`**
  - **`App.jsx`**
  - **`main.jsx`**
  - **`index.css`**
  - **`Components/QuotesApp.jsx`**
  - **`Components/QuotesApp.css`**

## Instalação

Pré-requisitos:

- **Node.js**

1. **Instalar as dependências**

   ```bash
   npm install
   ```

2. **Criar o arquivo `.env` a partir do exemplo**

   ```bash
   cp .env.example .env
   ```

3. **Configurar a variável de ambiente no `.env`**

   - `ZENQUOTES_API_URL`

## Executando o Projeto

```bash
npm run dev
```

Após rodar o comando, acesse a aplicação em `http://localhost:5173`.

## Configurações

As variáveis de ambiente estão em `.env.example`:

O Vite utiliza essa variável para configurar um proxy reverso em `/api/zenquotes`, redirecionando as requisições para a API externa e evitando erros de CORS.

## Autor

**Guilherme Rocha (CoderRocha)**

- GitHub: [CoderRocha](https://github.com/coderrocha)
- LinkedIn: [Guilherme Rocha](https://www.linkedin.com/in/guilherme-rocha-da-silva)

---
