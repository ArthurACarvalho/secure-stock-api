# Secure Stock API 📦


API REST desenvolvida com Spring Boot para gerenciamento de estoque, com autenticação e controle de acesso utilizando JWT.

Projeto criado com foco em aprendizado prático de desenvolvimento backend e aplicação de boas práticas em APIs REST.

---

## Objetivo do Projeto

O objetivo deste projeto foi consolidar conhecimentos em:

- Construção de APIs REST com Spring Boot
- Organização de projeto em camadas
- Integração com banco de dados relacional
- Implementação de autenticação com JWT
- Proteção de rotas com Spring Security

---

## Tecnologias Utilizadas

- Java 21  
- Spring Boot  
- Spring Web  
- Spring Data JPA  
- Spring Security  
- JWT  
- MySQL  
- Maven  

---

## Arquitetura do Projeto

O projeto segue o padrão em camadas:

Controller → Service → Repository → Entity

- **Controller**: expõe os endpoints
- **Service**: contém as regras de negócio
- **Repository**: comunicação com o banco via JPA
- **Entity**: representação das tabelas no banco

Essa separação facilita manutenção, testes e organização do código.

---

## Segurança

A aplicação utiliza:

- Autenticação com JWT
- Rotas protegidas com Spring Security
- Controle de acesso baseado em token

Após autenticação, o usuário recebe um token JWT que deve ser enviado nas requisições protegidas.

---

## Endpoints Principais

### Produtos

| Método | Endpoint      | Descrição        |
|--------|---------------|------------------|
| GET    | /products     | Lista produtos   |
| GET    | /products/{id}| Busca por ID     |
| POST   | /products     | Cadastra produto |
| PUT    | /products/{id}| Atualiza produto |
| DELETE | /products/{id}| Remove produto   |

---

## Como Executar

### Pré-requisitos

- Java 21+
- MySQL
- Maven
- Git

### Passos

```bash
git clone https://github.com/ArthurACarvalho/secure-stock-api.git
cd secure-stock-api
mvn spring-boot:run

A aplicação iniciará em:

http://localhost:8080
```

### Configuração do Banco

No arquivo application.properties:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/secure_stock
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
```

### Principais Aprendizados

Durante o desenvolvimento deste projeto, pratiquei:

Estruturação limpa de projetos Spring

Persistência de dados com JPA

Tratamento de requisições HTTP

Implementação de autenticação segura

Uso de Git para versionamento


### Autor

# Arthur A. Carvalho
