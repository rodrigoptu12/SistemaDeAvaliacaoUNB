# Sistema de Avaliação de Disciplinas e Professores da UnB

Este repositório contém o código-fonte para um sistema de avaliação de disciplinas e professores da Universidade de Brasília (UnB). O sistema foi desenvolvido utilizando a linguagem JavaScript e o framework Express.js para o backend, e HTML, CSS e JavaScript para o frontend.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js (versão 18 ou superior)

## Instalação

1. Clone este repositório em sua máquina local:


2. Acesse o diretório do projeto:

        cd express

3. Instale as dependências do projeto:
    
        npm install

## Configuração

Antes de executar o sistema, é necessário configurar as informações de conexão com o banco de dados. No arquivo `configDB.js`, localize a seção de configuração do banco de dados e preencha as informações necessárias, como nome de usuário, senha e nome do banco de dados.

```javascript
// configDB.js

module.exports = {
  database: {
    host: 'localhost',
    port: '3306',
    user: 'seu-usuario',
    password: 'sua-senha',
    database: 'nome-do-banco'
  }
};
```
Certifique-se de ter um servidor de banco de dados MySQL em execução e que o banco de dados especificado esteja criado.
## Criação das tabelas do banco de dados

Para criar as tabelas do banco de dados, execute o script `initBD.sql` 

    node initDB.js

    "caso de deadlock apenas execute o comando novamente"

## Execução

4. Inicie o servidor:
    
            npm start  

5. Acesse o sistema em seu navegador através do endereço `http://localhost:3000`.

## Utilização
Ao acessar o sistema, você poderá se cadastrar como estudante e realizar avaliações de disciplinas e professores. Os estudantes têm a possibilidade de editar e excluir suas próprias avaliações.

Os administradores são responsáveis por avaliar as denúncias feitas pelos estudantes em relação a comentários ofensivos. Eles podem ignorar a denúncia, aceitá-la e remover o comentário ofensivo ou até mesmo excluir uma conta de estudante.

## Contribuição
Se você deseja contribuir com este projeto, sinta-se à vontade para abrir uma pull request. Ficaremos felizes em receber suas melhorias e sugestões.

