# App de teste de pipeline e deploy

App criado com o básico para testar a criação de um pipeline completo do build até o deploy

Para concluir a tarefa foram criados dois workflows, um de preview e um de produção, ambos realizam os mesmos steps:
- Instala CLI da Vercel
- Resgata informações de ambiente da Vercel
- Faz o Build do projeto
- Faz o Deploy do projeto

A única diferença entre os dois é que o workflow de produção só é ativado quando acontece um push na branch master, o workflow de preview roda sempre que há push em outras branches que não sejam a master.

[Página da aplicação na Vercel](https://react-deploy-test-woad.vercel.app/)

Estou utilizando o período de teste da Vercel, então o app só estará disponível por 6 dias
