# 📦 API de Controle de Estoque

API REST desenvolvida para gerenciamento de estoque, permitindo o cadastro, edição, exclusão e consulta de produtos, bem como o controle de entradas e saídas de itens em estoque.


## Funcionalidades

Cadastro de produtos  
Edição de produtos  
Exclusão de produtos  
Listagem de produtos  
Consulta de produto por ID  
Controle de quantidade em estoque  
Registro de entrada de produtos  
Registro de saída de produtos  


## Tecnologias Utilizadas

### Back-end
- Java 21
- Spring Boot
- Banco de dados relacional MySQL

### Dependências do projeto

- **Spring Boot Starter Data JPA**  
  Responsável pela persistência de dados utilizando JPA e Hibernate, facilitando a comunicação com o banco de dados.

- **Spring Boot Starter Validation**  
  Utilizada para validação de dados de entrada por meio de anotações como `@NotNull`, `@NotBlank`, `@Size`, entre outras.

- **Spring Boot Starter Web MVC**  
  Fornece suporte para criação de APIs REST, controllers, mapeamento de requisições HTTP e retorno de respostas em JSON.

- **Spring Boot DevTools**  
  Ferramenta de apoio ao desenvolvimento que permite recarregamento automático da aplicação durante alterações no código.  
  *(Utilizada apenas em ambiente de desenvolvimento)*

- **MySQL Connector/J**  
  Driver JDBC responsável pela conexão da aplicação com o banco de dados MySQL.  
  *(Utilizado apenas em tempo de execução)*

- **Lombok**  
  Biblioteca utilizada para reduzir código boilerplate, gerando automaticamente getters, setters, construtores e outros métodos comuns.

- **Spring Boot Starter Data JPA Test**  
  Oferece suporte para testes da camada de persistência (repositories).

- **Spring Boot Starter Validation Test**  
  Utilizada para testar validações aplicadas nas entidades e DTOs.

- **Spring Boot Starter Web MVC Test**  
  Fornece ferramentas para testes de controllers e endpoints REST.

O gerenciamento de dependências é feito com **Maven**.
  
As dependências seguem as boas práticas recomendadas pelo ecossistema Spring Boot.

### Front-end
- HTML  
- CSS  
- JavaScript 



