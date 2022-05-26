# Instruções do projeto


### Sistema bancário 🎑

**Este sistema simula uma aplicação bancaria, aonde o usuario pode fazer transferências e ver algumas informações sobre sua conta.**

### Funcionalidades 🔨

- Cadastro de novos clientes ( Consulta API VIACEP );
- Efetuar login;
- Visualizar saldo bancário;
- Simular transferencias entre contas ( passando o numero de uma conta conhecida );
- Atualizar dados da sua conta (endereço)
- Desativar conta.

### Ferramentas 🛠

- Back-End
  - Swagger | **Documentação** : Documentação API.
  - Helmet | **Segurança** : Define vários cabeçalhos http. 
  - Cors | **Segurança** : Define quais métodos e url a api pode se conectar.
  - Express | **Server** : Framework web. 
  - Knex | **Query Builder** : Conexão I/O, construção de querys, segurança contra sql injection. 
  - Mysql | **Database** : SGDB
  - Eslint | **Code style** : airbnb
  - bcrypt | **hash passwords**
  - axios | **Connect api** : Conexão com a API-VIACEP
  - jsonwebtoken **JSON Web Tokens** : autenticação 

## **Como rodar o projeto ?** 🚶‍♀️

### **Banco de dados**

- SGDB : mysql 
- Database : DESAFIO_BACK

Migrations 

```bash
  npx knex migrate:list

  npx knex migrate:up name_migrate
  or 
  knex migrate:latest
```

### **Node.js**
- Node.JS version 16.15.0

### **Documentação API** 

- Swagger | **em desenvolvimento**
```bash
  http://localhost:4400/api-docs
```

## **Modules** 📁
A estrutura do projeto foi criada baseada em modulos.

- **Modules** 
  - **Owner** (proprietário da conta, cadastro, login) [ controller, repository, services ]
  - **Address** (endereço vinculado a conta. Atualiza o endereço) [ controller, repository, services ]
  - **Account** (conta do proprietário, neste modulo fica toda a regra de negocio relaciada a conta, transferencias, desativar conta) [ controller, repository, services ]

### 📭  **module-Owner** 

### Login 
request 
```json
{
  "email" : "kaiquemendesilva82@gmail.com",
  "password" : "senha"
}
```
response 

```json
{
	"ok": true,
	"message": "Login feito com sucesso.",
	"status_code": "OK",
	"token": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRzdGUiLCJpYXQiOjE2NTM0ODM1MzgsImV4cCI6MTY1MzQ4NjMzOH0.1Y9nY6q7fkBk1Zmfn8enMJlnTfnkUbPOIhwmQLfzwg4"
	}
}
```

###  Cadastrar 

request 

```json
{
  "nome" : "kaique", 
	"password" : "123",
	"telefone": "31999332",
	"email": "kaiquemendesilva82@gmail.com",
	"cep" : "30850290" // CEP TEM QUE SER VALIDO
}
```

## 📭  **module-Account** 

### Buscar saldo da conta/meusaldo

request

```json
{
  "authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRzdGUiLCJpYXQiOjE2NTM0ODMwNDcsImV4cCI6MTY1MzQ4NTg0N30.0sRSdkvFbHJKSMMgXbNHRqBUnEZ9Dj2YBMeIYGhgAoc"
}
```

response

```json
{
  "ok": true,
  "message": "## informações sobre sua conta ##",
  "dados_conta": [
    {
      "conta": "0.030788324554359647",
      "responsavel": 5,
      "saldo": "0,00"
    }
  ],
  "dataConsulta": "2022-05-25 09:51:07",
  "status_code": "OK"
}
```
### Transferência  

request

```json
{
 	"conta" : "0.6190907984898917", // conta para qual quer enviar o dinheiro
	"valor" : 3
}
```
response
```json
{
	"ok": true,
	"message": "#Transferência realizada com sucesso.#",
	"specs": [
		{
			"responsável": "kaiquemendesilva82@gmail.com",
			"data_Transferência": "2022-05-25 10:08:40",
			"conta": "0.6190907984898917", // conta para qual o dinheiro foi enviado.
			"valor": 3
		}
	],
	"status_code": "Created"
}
```

caso envie uma conta que não exista
📢 conta invalida 

```json
{
	"ok": false,
	"message": "Numero da conta invalido/Conta não encontrada.",
	"status_code": "Not Found"
}
```

## 📭  **module-Address**

atualizar endereço

request
````json
 authorization : token

 {
	"cep" : "30850290"
 }
````
response

````json
{
	"ok": true,
	"message": "Endereço atualizado com sucesso.",
	"status_code": "OK"
}
````


### **Objetivos que podem ser alcançados**   📢
- AppError : Modelo de erro, diminuindo a quantidade de codigos repedidos.
- Testes : Implementar testes, evitando futuros imprevistos.
- TypeScript : Escolhir não utilizar TS, pois ainda não me sinto 100% confortável em trabalhar com ele.
### **Objetivos "alcançados"**   📢
- Segurança : Helmet, Cors, Json web tokens, validações em partes da aplicação.
- Estrutura : Projeto criado e estruturado de acordo com alguns padrões : SOLID, Modules...
- Documentação : Documentação feita com swagger.
  

#### **Observação**
Este projeto foi desenvolvido em 2 dias (48 horas), ele faz parte de um processo seletivo para vaga de desenvolvedor júnior.
