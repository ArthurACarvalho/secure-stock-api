# API de Controle de Estoque

API REST desenvolvida em Java com Spring Boot para gerenciamento de produtos e controle de estoque.  
O sistema permite cadastrar, listar, atualizar e remover produtos, simulando um cenário real de aplicação empresarial.

Este projeto foi desenvolvido com foco em aprendizado prático, boas práticas de desenvolvimento backend e construção de portfólio para estágio em Análise e Desenvolvimento de Sistemas.

---

## Funcionalidades

- Cadastro de produtos
- Listagem de produtos
- Busca de produto por ID
- Atualização de dados do produto
- Remoção de produtos
- Controle de quantidade em estoque
- Validação de dados de entrada
- Integração com banco de dados MySQL

---

## Tecnologias Utilizadas

### Backend
- Java 21  
- Spring Boot  
- Spring Web MVC  
- Spring Data JPA  
- Hibernate  
- Bean Validation  

### Banco de Dados
- MySQL  

### Ferramentas
- Maven  
- Lombok  
- Spring Boot DevTools  
- Git e GitHub  
- Postman  

---

## Dependências Principais

- spring-boot-starter-webmvc – Criação de APIs REST
- spring-boot-starter-data-jpa – Persistência de dados com JPA e Hibernate
- spring-boot-starter-validation – Validação de dados com Bean Validation
- mysql-connector-j – Conexão com banco de dados MySQL
- lombok – Redução de código boilerplate
- spring-boot-devtools – Ferramentas para desenvolvimento

### Dependências de Teste
- spring-boot-starter-data-jpa-test
- spring-boot-starter-validation-test
- spring-boot-starter-webmvc-test

---

## Arquitetura do Projeto

O projeto segue uma arquitetura baseada em camadas:

- Controller  
  Responsável por receber e responder às requisições HTTP.

- Service  
  Contém as regras de negócio da aplicação.

- Repository  
  Camada de acesso aos dados utilizando Spring Data JPA.

- Model (Entity)  
  Representa as entidades persistidas no banco de dados.

Essa separação facilita a manutenção, os testes e a escalabilidade da aplicação.

---

## Endpoints Principais

| Método | Endpoint         | Descrição                      |
|------|------------------|--------------------------------|
| GET  | /produtos        | Lista todos os produtos        |
| GET  | /produtos/{id}   | Busca produto por ID           |
| POST | /produtos        | Cadastra um novo produto       |
| PUT  | /produtos/{id}   | Atualiza um produto existente |
| DELETE | /produtos/{id} | Remove um produto              |

---

## Como Executar o Projeto

### Pré-requisitos
- Java 21 ou superior
- Maven
- MySQL
- Git

### Passo a passo

```bash
git clone https://github.com/ArthurACarvalho/API-ControledeEstoque.git
cd API-ControledeEstoque
mvn spring-boot:run
A aplicação será iniciada em:
http://localhost:8080
```

Configuração do Banco de Dados
No arquivo application.properties, configure as credenciais do MySQL:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/controle_estoque
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

###Aprendizados

Com este projeto foi possível praticar:

Desenvolvimento de APIs REST com Spring Boot

Persistência de dados com JPA e Hibernate

Validação de dados no backend

Integração com banco de dados relacional

Organização de código em camadas

Versionamento com Git e GitHub
