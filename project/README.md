# Instruções do projeto

### Sistema bancário 🎑

**Este sistema simula uma aplicação bancaria, aonde o usuario pode fazer transferências e ver algumas informações sobre sua conta.**

### Funcionalidades 🔨

- Cadastro de novos clientes ( Consulta a API VIACEP );
- Efetuar login;
- Visualizar saldo bancário;
- Simular transferencias entre contas ( passando o numero de uma conta conhecida );

### Ferramentas 🛠

- Back-End
  - Helmet
  - Cors
  - Express
  - Knex
  - Mysql
  - Eslint
  - bcrypt
  - axios
  - jsonwebtoken



# Modules 

## 📭 Owner 

### 👮‍♀️ Login 

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

### 👮‍♀️ Cadastrar 

```json
{
  "nome" : "kaique", 
	"password" : "123",
	"telefone": "31999332",
	"email": "kaiquemendesilva82@gmail.com",
	"cep" : "30850290" // CEP TEM QUE SER VALIDO
}
```

## 📭 Account 

### 💲 Buscar saldo da conta conta/meusaldo

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
### 💲 Transferência saldo 

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
			"responsável": "tste",
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

## 📭 Address

buscar informações sobre o endereço cadastrado 



