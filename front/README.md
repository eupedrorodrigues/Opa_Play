# Opa Play 🎧

![Next](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

<div align="center">
  <img src="./public/images/Macbook.png" width="450px" />
  <img src="./public/images/iPhone.png" height="250px" />
</div>

</br>

Projeto desenvolvido para simular uma plataforma de visualização de vídeos, utilizando uma API simulada com `json-server` para buscar músicas. A interface conta com **animações interativas**, incluindo um efeito ao passar o cursor sobre os cards, proporcionando uma experiência mais dinâmica e intuitiva ao usuário.

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura](#Estrutura)

1. Clone o repositório:

```bash
git clone https://github.com/eupedrorodrigues/Opa_Play.git
```

## Configuração

1. Após o download, vá até o diretório onde salvou o projeto
2. Instale as dependências com `npm install` ou `yarn install`

## Usage

1. Abra o terminal

```
npm run dev
```

## Estrutura

```
📂 public/images    # Contém as imagens do projeto
├──
📂 src
 ├── 📂 app		#Estrutura de rotas e layout da aplicação
 ├── 📂 constants   # Define constantes globais. ex.: imagens
 ├── 📂 components  # Components globais do projeto
 ├── 📂 modules     # Contém os components e a página
 ├── 📂 services    # Estrutura e chamada da API
 ├── 📂 types       # Tipagem global
 ├── 📂 utils       # Contém funções utilitárias reutilizáveis

```
