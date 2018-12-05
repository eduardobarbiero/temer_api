# Aplicação para emissão de pedidos

## Tecnologias
* Node v7.10.0
* Npm v6.1.0
* Hapi v17.8.1
* PG v7.7.1
* Sequelize v4.41.2
* Postgres v9.6.0

## Utilização
### Requisitos necessários:
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Postgres](https://www.postgresql.org/download/)

### Instalação
1. Clone o repositório: `git clone https://github.com/eduardobarbiero/temer_api.git`;
2. Instale as dependências: `npm install`;
3. Para criação da base de dados(caso for local) utilizar `sequelize db:create`;
4. Migração da base de dados utilizar `sequelize db:migrate`;
5. Execute o comando `sequelize db:seed:all` para migrar a carga inicial;
6. A configuração dos dados de conexão com o banco de dados e porta do servidor devem ser feitos através de variaveis de ambiente para ser usado em produção: 
* NODE_ENV - default development;
* PORT - default 3000;
* DB_USERNAME;
* DB_PASSWORD;
* DB_NAME;
* DB_HOSTNAME;
* DB_PORT.
7. Execute `npm start` para iniciar o servidor;
8. Utilize a URL `http://localhost:3000/#/ ou com o numero da porta que foi definida`.

### Testes
1. Execute o comando `NODE_ENV=test sequelize db:create` para criar a base de dados de teste;
2. Execute o comando `NODE_ENV=test sequelize db:migrate` para migrar a base de teste;
3. Execute o comando `NODE_ENV=test sequelize db:seed:all` para migrar a carga inicial;
4. Execute `npm test` para iniciar os testes.