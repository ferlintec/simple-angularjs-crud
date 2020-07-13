# Cadastro de Estados
---

Este projeto contém um cadastro simples de Estados, aplicando as boas práticas de desenvolvimento, utilizando Angular JS e Spring Boot.


---
## Notas Técnicas

A solução foi desenvolvida utilizando as seguintes tecnologias:

- [Angular JS 1.7.9](https://code.angularjs.org/1.7.9/docs/tutorial)
- [Bootstrap 4.5.0](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
- [Java 1.8](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)
- [Spring Boot 2.3.1](https://spring.io/projects/spring-boot)
- JPA com [Hibernate](https://hibernate.org/orm/) 
- [H2 Database](https://www.h2database.com/html/main.html)
- [JUnit](https://junit.org/junit5/) e [Mockito](https://site.mockito.org/)
---

---
## Acesso via Cloud Heroku

O sistema está publicado no Heroku, no seguinte endereço:

- https://crud-state.herokuapp.com/

As instruções de uso de cada API são as mesmas descritas acima, alterando-se apenas a URL dos serviços.


---
## Configuração de ambiente

Para montar o ambiente de desenvolvimento, e testar a aplicação em um IDE, siga as instruções a seguir.

Requisitos:

- [Java 1.8](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html) ou superior
- [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Maven 3.6.3](http://maven.apache.org/download.cgi)
- [Postman](https://www.postman.com/downloads/)
- Sistema operacional Linux, Windows ou Mac


### Instalação do Java

- Instalar o [Java 1.8](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html) , conforme as instruções para seu sistema operacional.


### Instalação do Maven

- Instalar o [Maven 3.6.3](https://maven.apache.org/install.html) , conforme as instruções para seu sistema operacional.


### Instalação da IDE (Eclipse ou IntelliJ IDEA)

Escolher uma das opções. Não há restrições quanto a uso de outra IDE.

- **Opção 1:** Instalar [Eclipse](https://www.eclipse.org/downloads/packages/release/2020-03/r/eclipse-ide-enterprise-java-developers-includes-incubating-components), conforme as instruções para seu sistema operacional.
- **Opção 2:** Instalar [IntelliJ IDEA](https://www.jetbrains.com/idea/download/#section=windows), conforme as instruções para seu sistema operacional.


### Clonar o projeto

- Criar um diretório para armazenar o projeto.
- Abrir o Git Bash(Windows), ou o terminal do Linux, neste diretório.
- Executar o comando 'git clone https://github.com/ferlintec/simple-angularjs-crud.git'
- O sistema deverá solicitar suas credenciais de acesso.
- As configurações de acesso ao banco de dados estão no arquivo ```application.properties```.


Pronto. Os arquivos do projeto estarão salvos no diretório.


---
## Inicialização do sistema



### Inicializar sistema pela IDE

- Abrir IDE de sua escolha (Eclipse ou Intllij IDEA).
- Importar projeto como *Projeto Maven existente*. O projeto está dentro da pasta *<diretório raiz clonado>/simple-angularjs-crud**.
- Após importação do projeto, verificar se o mesmo está configurado com Java 1.8.
- Acesse a classe ```br.com.ferlintec.Statup.java```, e execute como **Java Application**.
- Acessar o sistema no endereço: http:localhost:8080

### Inicializar sistema via linha de comando

- Abrir terminal do sistema operacional.
- Acessar o diretório do projeto: *<diretório raiz clonado>/simple-angularjs-crud**.
- Executar o comando:
```mvn clean package spring-boot:run```
- Acessar o sistema no endereço: http:localhost:8080


Outra forma de inicializar a aplicação, é a seguinte:

- Abrir terminal do sistema operacional.
- Acessar o diretório do projeto: *<diretório raiz clonado>/simple-angularjs-crud**.
- Executar o comando:
```mvn clean package```
- O método acima irá gerar um arquivo .jar da aplicação na pasta target: simple-angularjs-crud-0.0.1-SNAPSHOT.jar
- Executar o comando:
```java -jar target/simple-angularjs-crud-0.0.1-SNAPSHOT.jar &```

## Testes

Os testes unitários foram implementados com Mockito e JUnit. 
Para realizar a chamada direta aos serviços via [Postman](https://www.postman.com/downloads/), acesse o arquivo **State  CRUD test.postman_collection.json** no diretório ```simple-angular-crud```, importe como coleção no Postman, execute os comandos na sequência.

---
## Contato

- Adriano Ferlin
- adriano.ferlin@gmail.com
- +55 (48) 99941-2220
