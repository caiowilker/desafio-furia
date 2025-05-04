🎤 Know Your Fan

Know Your Fan é uma aplicação Full Stack desenvolvida com Spring Boot e React, que permite o cadastro, análise e validação de perfis de fãs com foco em redes sociais e inteligência artificial.

---

🚀 Funcionalidades

- Cadastro de fãs com nome, idade e links sociais (Twitter/Instagram)
- Upload de documentos para verificação
- Análise de redes sociais automatizada
- Validação de perfis com apoio de IA (como ChatGPT)
- Integração backend/frontend via API REST

---

🛠️ Tecnologias Utilizadas

 Backend
- Java 17
- Spring Boot
- Spring Data JPA
- PostgreSQL / H2
- Hibernate
- API RESTful

 Frontend
- React
- React Router DOM
- Axios
- Bootstrap (opcional)

---

⚙️ Como rodar o projeto

 📌 Clonando o repositório
```bash
git clone https://github.com/caiowilker/desafio-furia.git
cd know-your-fan

🔧 Backend (Spring Boot)
Configuração com PostgreSQL
No arquivo src/main/resources/application.properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/furiafan
spring.datasource.username=postgres
spring.datasource.password=senha123
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
server.port=8080

Alternativa com H2 (para testes):
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

Executando:
./mvnw spring-boot:run

💻 Frontend (React)
cd frontend-know-your-fan
npm install
npm start


🌐 Principais Endpoints
Método	Rota	Descrição
POST	/api/fans	Cadastra novo fã
POST	/api/fans/documento/{id}	Faz upload de documento
GET	/api/fans/analise-social	Analisa redes sociais do fã
POST	/api/fans/validar-perfil	Valida perfil usando IA

🎯 Exemplo de Payload

{
  "nome": "João da Silva",
  "idade": 23,
  "linkTwitter": "https://twitter.com/joaodasilva",
  "linkInstagram": "https://instagram.com/joaodasilva"
}

🧠 Validação com Inteligência Artificial
A aplicação pode ser integrada à API da OpenAI (ChatGPT) para validar perfis com base nos dados fornecidos e no comportamento digital dos usuários.

