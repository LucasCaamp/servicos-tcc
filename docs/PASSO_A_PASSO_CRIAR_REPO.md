# Criar o repositório (feito por UMA pessoa)
```bash
npx ember-cli@5 new servicos-tcc --no-welcome --skip-git
cd servicos-tcc
# copie a pasta app/ e o README.md deste pacote por cima dos existentes (substitua)
npm install && npx ember serve   # testar
git init && git add . && git commit -m "Projeto base"
# crie o repo no GitHub, adicione os 6 como colaboradores e dê git push
```
Os demais fazem `git clone`, criam uma branch (`git checkout -b nome/tarefa`) e abrem Pull Request.
