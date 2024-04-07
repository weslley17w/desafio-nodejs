# Desafio de Desenvolvimento de API de Agendamento

## Descrição

O repositório contém os arquivos do desafio técnico de criar uma API de agendamento. Por se tratar de um projeto de baixa complexidade, optei por usar SQLite para evitar criar e subir um contêiner para um banco de dados como MySQL ou PostgreSQL.

## Como rodar projeto

Depois de clonar o repositório:

```
yarn install
npx prisma migrate dev
yarn start:dev
```

Para executar os testes unitários:

```
yarn test
```

Para executar o projeto final:

```
yarn build
yarn start
```

Aqui está a correção:

caso queira uma ferramenta para visualizar banco de dados:

```
npx prisma studio
```

## Endpoints

- (GET) /schedule - Listar todas as consultas
- POST /schedule - Criar um novo agendamento de uma consulta (necessário o campo "email" na requisição)
- PUT /schedule/:id - Cancelar uma consulta
