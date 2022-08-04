# REST API SALUS PROJECT

Esta APi Rest foi criada com o objetivo de permitir ao usuário a realização de cadastro de novas unidades de saúde.

### Sobre o projeto salus

O projeto salus consiste num site que permitirá pessoas de diversas localidades terem acesso a informações a respeito de DST's.

Além disso estamos construindo uma comunidade onde as pessoas poderão trocar ideias e experiências, além de descobrir locais onde podem ter atendimento para necessidades relacionadas.

Este projeto está sendo desenvolvido como entrega para o Bootcamp FullStack Developer da Faculdade Impacta.

### Preparando o projeto

1. Faça um clone desse repositório 
  `git clone https://github.com/lucascunha/api-salus-project.git`.
2. Entre na pasta `cd api-salus-project`.
3. Execute um `apm install` para preparar o projeto.
4. Rode `docker-compose up` subir e configurar a base de dados.

### Criando uma tabela na base de dados
Na primeira vez que for executar, será preciso criar a tabela unidades na base de dados:

1. Execute o comando `docker ps -a` e copie o CONTAINER ID do mysql;
2. Em seguida, inicie o container com `docker start <ID do CONTAIER>`;
3. Acesse o container do mysql com `docker exec -it <ID do CONTAIER> bash`;
4. Dentro do container, digite `mysql -uroot -proot` para acessar o BD;
5. Uma vez dentro do mysql, vc pode executar os comandos abaixo para criar a nova tabela:

```
use salusbd;

CREATE TABLE unidades (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(128) NOT NULL,
  endereco VARCHAR(128) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  PRIMARY KEY(ID)
);

```

### Rodando o projeto
```
node server.js
```

### Testando a API

Você pode testar a API usando o Postman (ou outra ferramenta similar) ou até mesmo com curl.

Na pasta resources/test, tem um arquivo .json que você pode importar e que já está preparado para testar a API.

### Próximos passos
- Automatizar a criação da tabela de unidades
- Dockerirar a aplicação para configurar e subir tudo com um só comando