# Blue Bank - Instruçoes

## Requisitos minimos e/ou softwares pré instalados para o deploy da api e do client localmente:
1. Node.Js
2. Npm
3. MySql 

## Instruções

### API
1. Realizar o clone do projeto para seu desktop
2. Inciar o serviço do mysql local
3. Alterar os parametros do arquivo do diretorio "bluebank/api/config/DbConf.js" da seguinte forma: 
![Alt text](db.jpg?raw=true "DbConf.js") 
- Primeiro parametro (root): Inserir o username do seu usuario no mysql
- Segundo parametro (root1): Inserir a senha do seu usuario no mysql 
4. Acesse o terminal no diretorio da "bluebank/api"
5. Insale as dependencias
```$ npm install
6. Rode o servidor
```$ node index
Sua conexao vai estar aberta em: http://localhost:8080/

### CLIENT





# Blue Bank - Instrucoes originais
Blue Bank é um projeto para testar seus conhecimentos de backend e frontend.

Você irá criar uma aplicação web para simular a transferência bancária entre contas cadastradas.
Esse teste consiste em avaliar seus conhecimentos como fullstack developer.

Você deverá criar um banco de dadaos contendo uma tabela de conta, a tabela deverá conter os seguintes atributos: 
- ID
- CPF do Cliente
- Numero da Agencia 
- Numero da Conta
	
O banco de dados deve ser populado com algumas contas.

## Requisitos Funcionais

1. A tela deverá os seguintes campos: Agencia/Numero da conta origem e destino e valor
2. Verificar a existencia das contas informadas
3. Verificar a disponibilidade do saldo da conta de origem, o valor a ser debitado deve ser maior ou igual ao saldo disponível na conta.

## Requisitos Técnicos

1. Utilizar backend em Java ou NodeJS
2. Aplicar conceitos de orientação a objetos
3. Controlar transação nas operações de saque e deposito

## Diferenciais

1. Aplicar conceitos de SOLID
2. Testes unitários
3. Utilizar bibliotecas de frontend (JQuery, Bootstrap, Angular, ModuleJS, etc)
