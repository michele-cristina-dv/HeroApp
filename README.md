## 🦸‍♀️ HeroApp – Testes Automatizados com Cypress
Este repositório contém a automação de testes do projeto HeroApp, utilizando Cypress com arquitetura Page Objects. O foco é validar funcionalidades principais da aplicação, como login e criação de heróis, além de documentar limitações encontradas durante os testes.

## ✅ Funcionalidades Testadas
- Login com dados fixos do arquivo userData.json
- Mensagens de erro para login inválido
- Simulação de criação de herói via testes automatizados

## 🐞 Bugs Identificados
## BUG-001 – Cadastro de Usuário Inexistente
- O sistema não possui funcionalidade para criar novos usuários.
- O login só funciona com os dados pré-configurados no arquivo userData.json.
- Isso limita os testes de fluxo completo de autenticação.

## BUG-002 – Criação de Herói Simulada
- A funcionalidade de criação de herói não está implementada de forma real.
- O teste simula a criação, mas o herói não é persistido nem aparece na lista principal.

## 🧪 Tecnologias Utilizadas
- Cypress
- JavaScript
- Arquitetura Page Objects
- Node.js

## 🛠️ Como Executar o Projeto

Clonar o Repositório

```
git clone https://github.com/michele-cristina-dv/HeroApp.git
```

Acessar a Pasta do Projeto

```
cd cypress-heroes
```

Instalar as Dependências

```
npm install
```

Configurar o Ambiente

```
npm run setup
```

Iniciar o Servidor de Desenvolvimento

```
npm run dev
```

Rodar os Testes com Cypress (Interface Gráfica)
# Em outro terminal:

```
npx cypress open
```

## 🌐 Acessar o Sistema
Após iniciar o servidor, acesse:
http://localhost:3000


Utilize os dados do arquivo userData.json para realizar login e validar os testes automatizados.
