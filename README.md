# Secure Stock API 🛡️📦

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/spring--boot-%236DB33F.svg?style=for-the-badge&logo=springboot)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=json%20web%20tokens)

> API REST completa para **controle seguro de estoque**, com endpoints para cadastro, edição, listagem e remoção de produtos — implementada com **Java e Spring Boot**.

---

## 📌 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)  
- [Funcionalidades](#-funcionalidades)  
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)  
- [Endpoints Principais](#-endpoints-principais)  
- [Como Rodar](#-como-rodar)  
- [Configurações de Banco de Dados](#-configurações-do-banco-de-dados)  
- [Aprendizados](#-aprendizados)  
- [Contribuição](#-contribuição)  
- [Licença](#-licença)

---

## 📖 Sobre o Projeto

Secure Stock API é uma **API RESTful** desenvolvida para gerenciar produtos e controlar estoques de maneira segura e eficiente. Ela foi criada com foco em boas práticas de desenvolvimento backend e pode ser usada como base para projetos profissionais ou portfólio.

---

## 🚀 Funcionalidades

- 🔹 Cadastro de produtos  
- 🔹 Listagem geral de produtos  
- 🔹 Busca de produto por ID  
- 🔹 Atualização de produto existente  
- 🔹 Remoção de produto  
- 🔹 Validação de entrada de dados  
- 🔹 Controle de quantidade em estoque  
- 🔹 Integração com banco de dados MySQL  

---

## 🛠 Tecnologias Utilizadas

### Backend

- Java  
- Spring Boot  
- Spring Web MVC  
- Spring Data JPA
- Spring Security

### Banco de Dados

- MySQL  

---

## 📍 Endpoints Principais

| Método | Endpoint             | Descrição                       |
|--------|----------------------|---------------------------------|
| GET    | `/produtos`          | Lista todos os produtos         |
| GET    | `/produtos/{id}`     | Busca produto por ID            |
| POST   | `/produtos`          | Cadastra novo produto           |
| PUT    | `/produtos/{id}`     | Atualiza produto existente      |
| DELETE | `/produtos/{id}`     | Remove produto                  |

---

## ⚙️ Como Rodar

### 📋 Pré-requisitos

Antes de tudo, instale:

- ✔️ Java 21 ou superior  
- ✔️ MySQL  
- ✔️ Maven  
- ✔️ Git  

---

### ▶️ Passo a passo

```bash
# Clone o repositório
git clone https://github.com/ArthurACarvalho/secure-stock-api.git

# Entre na pasta
cd secure-stock-api

# Execute a aplicação
mvn spring-boot:run

A API será iniciada em:

http://localhost:8080
```
###🗄️ Configurações do Banco de Dados

No arquivo application.properties, configure as credenciais do MySQL:

```bash 
spring.datasource.url=jdbc:mysql://localhost:3306/seu_banco_de_dados
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
### Aprendizados

Com este projeto, você poderá demonstrar:

Desenvolvimento de APIs REST com Java e Spring Boot

Persistência de dados com JPA e MySQL

Validação de dados no backend

Organização de código limpo

Uso de Git & GitHub como fluxo de trabalho

Testes de API com Postman

### Contribuição

Contribuições são muito bem-vindas!

Se quiser contribuir:

Faça um fork do projeto

Crie uma branch (feature/minha-feature)

Faça commit das suas alterações

Envie um Pull Request

Sugestões de melhorias:

Novas funcionalidades

Correções de bugs

Melhorias de performance

Melhorias na documentação

### Licença:

Este projeto está sob a licença MIT.

Feito por Arthur A. Carvalho.
