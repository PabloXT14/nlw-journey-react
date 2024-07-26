<h1 align="center">
  <img
    src=".github/nlw-journey-logo.png"
    title="Logo NLW Journey"
    alt="Logo NLW Journey"
    width="30px"
  />
  NLW Journey (React)
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pabloxt14/nlw-journey-react">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/pabloxt14/nlw-journey-react" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pabloxt14/nlw-journey-react">
  
  <a href="https://github.com/pabloxt14/nlw-journey-react/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pabloxt14/nlw-journey-react">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

   <a href="https://github.com/pabloxt14/nlw-journey-react/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pabloxt14/nlw-journey-react?style=social">
  </a>
</p>

<p>
  <img src=".github/cover.png" alt="Capa do projeto" />
</p>

<h4 align="center"> 
	🚀 Aplicação finalizada 🚀
</h4>

<p align="center">
 <a href="#-about">About</a> | 
 <a href="#-layout">Layout</a> | 
 <a href="#-setup">Setup</a> | 
 <a href="#-technologies">Technologies</a> | 
 <a href="#-license">License</a>
</p>


## 💻 About

Esta aplicação de nome **Plann.er** consiste em um site desktop para montar planos de viagem com amigos, registrar atividades e links úteis.

Os principais aprendizados neste projeto são a separação e componentização da interface em pequenas partes que podem ser reutilizadas, desta forma, facilitando também a manutenção futura. Ademais, também teve-se a implementação de roteamento com `React Route DOM` para a apresentação das rotas/paginas da aplicação de maneira dinâmica. Contudo, também vale destacar implementação de uma interface totalmente padronizada com princípios de um bom design usando o `Tailwind`.

Todavia, essa aplicação foi desenvolvida durante o NLW Journey da [Rocketseat](https://www.rocketseat.com.br/) utilizando principalmente tecnologias como `React`, `TypeScript` e `Tailwind`.


<!-- ## 🔗 Deploy

O deploy da aplicação pode ser acessada através da seguinte URL base: https://pabloxt14-nlw-expert-notes.vercel.app/ -->


## 🎨 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1392276515495389646/nlw-journey-planejador-de-viagem). É necessário ter conta no [Figma](https://www.figma.com/) para acessá-lo.

A seguir, veja uma demonstração das principais telas da aplicação:

### Nova Viagem (Local e Data)

<p align="center">
  <img
    src=".github/screens/new-trip_local-and-date.png"
    alt="New Trip - Local and Date"
    title="New Trip - Local and Date"
    width="100%"
  />
</p>

### Nova Viagem (Pessoas)

<p align="center">
  <img
    src=".github/screens/new-trip_people.png"
    alt="New Trip - People"
    title="New Trip - People"
    width="100%"
  />
</p>

### Nova Viagem (Convidar)

<p align="center">
  <img
    src=".github/screens/new-trip_invite.png"
    alt="New Trip - Invite"
    title="New Trip - Invite"
    width="100%"
  />
</p>

### Nova Viagem (Finalizar)

<p align="center">
  <img
    src=".github/screens/new-trip_finish.png"
    alt="New Trip - Finish"
    title="New Trip - Finish"
    width="100%"
  />
</p>

### Nova Viagem (Confirmar)

<p align="center">
  <img
    src=".github/screens/new-trip_confirm.png"
    alt="New Trip - Confirm"
    title="New Trip - Confirm"
    width="100%"
  />
</p>

### Detalhes da Viagem (Full Page)

<p align="center">
  <img
    src=".github/screens/trip-details_full.png"
    alt="Trip Details - Full"
    title="Trip Details - Full"
    width="100%"
  />
</p>

### Detalhes da Viagem (Nova Atividade)

<p align="center">
  <img
    src=".github/screens/trip-details_new-activity.png"
    alt="Trip Details - New Activity"
    title="Trip Details - New Activity"
    width="100%"
  />
</p>

### Detalhes da Viagem (Novo Link)

<p align="center">
  <img
    src=".github/screens/trip-details_new-link.png"
    alt="Trip Details - New Link"
    title="Trip Details - New Link"
    width="100%"
  />
</p>

### Detalhes da Viagem (Confirmar Participante)

<p align="center">
  <img
    src=".github/screens/trip-details_confirm-participant.png"
    alt="Trip Details - Confirm Participant"
    title="Trip Details - Confirm Participant"
    width="100%"
  />
</p>

## ⚙ Setup

### 📝 Requisites

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) 
* Para reproduzir o acesso a API back-end com os dados necessários para o front-end, clone o seguinte [repositório](https://github.com/pabloxt14/nlw-journey-node) que contem a API do nosso back-end feita em Node.js e execute na sua máquina.

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Cloning and Running

Passo a passo para clonar e executar a aplicação na sua máquina:

```bash
# Clone este repositório
$ git clone git@github.com:pabloxt14/nlw-journey-react.git

# Acesse a pasta do projeto no terminal
$ cd nlw-journey-react

# Instale as dependências
$ npm install

# Execute a API back-end

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação inciará em alguma porta disponível que poderá ser acessada pelo navegador
```


## 🛠 Technologies

As seguintes principais ferramentas foram usadas na construção do projeto:

- **[React + Vite](https://vitejs.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[TailwindCSS](https://tailwindcss.com/)**
- **[TailwindCSS Variants](https://www.tailwind-variants.org/)**
- **[React Router DOM](https://reactrouter.com/)**
- **[React Query](https://tanstack.com/query/latest)**
- **[Zustand](https://zustand-demo.pmnd.rs/)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Sooner](https://sonner.emilkowal.ski/)**
- **[React Day Picker](https://daypicker.dev/)**
- **[date-fns](https://date-fns.org/)**
- **[Axios](https://axios-http.com/ptbr/docs/intro)**
- **[Radix UI](https://www.radix-ui.com/)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](./package.json)


## 📝 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

<p align="center">
  Feito com 💜 por Pablo Alan 👋🏽 <a href="https://www.linkedin.com/in/pabloalan/" target="_blank">Entre em contato!</a>  
</p>