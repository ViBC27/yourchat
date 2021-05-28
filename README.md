### Universidade Federal de Alagoas
### Instituto de Computação
### Redes de Computadores 
### 2020.1

#### Alunos: Erycles da Silva Santos e Vitor Barcelos de Cerqueira


### Relatório



### Descrição

Criamos uma aplicação de bate-papo, baseada numa arquitetura cliente/servidor, com o protocolo de transmissão TCP. Nela, utilizamos um servidor socket desenvolvido com os recursos oferecidos pela linguagem Node e com recursos de outras bibliotecas, para que toda a comunicação da aplicação fosse realizada de forma correta. Além disso, utilizamos a plataforma de desenvolvimento Angular para o front-end.
	
### Desenvolvimento

Como já falado anteriormente nossa ideia foi de criar uma sala de chat, conseguimos ter algumas ideias de como estaria definido o projeto. O projeto consiste em duas páginas, a primeira seria para que o usuário possa definir o nome no qual terá na sala, já a segunda página consiste no chat em si.
Quando um usuário é redirecionado para a sala do chat, ele pode ver a quantidade de usuários ativos no momento e cada um dos usuários conectados na sala recebe um aviso que um novo usuário acaba de entrar. A troca de mensagens funciona em tempo real, onde o usuário poderá conversar com várias pessoas conectadas na sala naquele momento. Para a parte de frontend do nosso projeto utilizamos angular, que era algo conhecido para ambos os componentes do grupo.
A linguagem utilizada para o backend do sistema foi NodeJS, por ser uma linguagem que tínhamos uma expertise maior no desenvolvimento e poderíamos implementar o projeto de forma rápida e ágil. O servidor socket criado em NodeJS tem algumas funções básicas, onde é possível enviar a mensagem para todos os usuários conectados no momento em tempo real, desconectá-lo e até mesmo uma função onde o usuário recebe uma mensagem de boas vindas após definir seu nome e essa mesma função comunica os demais usuários que esse novo usuário acabou de ser criado.


### Dificuldades encontradas
- Encontrar bons materiais, que nos ajudassem na questão do socket, demoramos um bom tempo nisso
- Problemas de conectividade em relação a parte de acessos simultâneos ao sistema
- Envio das mensagens para os usuários assim que elas chegam
- Passar os parâmetros de uma página para outra
- Fazer com que o servidor socket funcionasse de acordo com as funções que definimos, principalmente no problema já citado anteriormente que seria o envio das mensagens assim que são enviadas
- Erro em relação à algumas bibliotecas do NodeJs, que achamos que poderia nos ajudar com o objetivo de conectividade, mas acabou que não ajudou e acabou ocasionando alguns erros.



### Como Rodar o projeto
	
- Instalar NodeJS e NPM no computador
- Baixar projeto git
- Deve-se abrir dois terminais, um na pasta de frontend e outro na pasta de backend do projeto
- Em ambos os terminais deve-se executar os comandos yarn install ou npm install
- Para executar o projeto deve-se executar yarn start ou npm start em cada um dos terminais, de frontend e de backend
- O projeto será executado no endereço localhost:4200, deve-se acessar no navegador


- Obs.: O socket estará sendo executado localhost:3000;
