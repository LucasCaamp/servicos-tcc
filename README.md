# ServiçosOnline — TCC (Ember.js)

Marketplace de serviços online com duas visões: **solicitante** (publica pedidos) e **prestador** (aceita e conclui trabalhos).

## Sobre o Ember.js
Framework JavaScript para aplicações web com convenção sobre configuração. Conceitos usados:
- **Router** (`app/router.js`): rotas `/solicitante` e `/prestador`.
- **Templates Handlebars** (`app/templates`): interface declarativa.
- **Controllers** (`app/controllers`): estado e ações de cada tela (`@tracked`, `@action`).
- **Services** (`app/services/servicos.js`): estado compartilhado entre telas; persiste em `localStorage`.
- **Ember CLI**: geração, servidor de desenvolvimento e build.

## Pré-requisitos
Node.js 18+ e npm. Git.

## Como rodar (passo a passo)
```bash
git clone <URL-DO-REPOSITORIO>
cd servicos-tcc
npm install
npx ember serve
```
Abra http://localhost:4200

## Fluxo de uso
1. Em **Solicitante**, publique um pedido.
2. Em **Prestador**, informe seu nome e aceite o pedido; depois conclua.
3. Volte em **Solicitante** e veja o status atualizado.

## Estrutura
`app/router.js`, `app/services/`, `app/controllers/`, `app/templates/`, `app/styles/`.

## Equipe
(preencher nomes e funções)
