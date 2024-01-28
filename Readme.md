# Proxy Reverso com Nginx + NodeJs + MySql + Docker

## Descrição
A idéia principal é que quando um usuário acesse o NGINX, o mesmo fará uma chamada a aplicação Node.js. Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>
```

- Lista de nomes cadastrada no banco de dados.

## Instalação
1. Instale o `docker`.
2. Instale o `git`.
3. Clone este repositório.
4. Execute o comando abaixo buildar com o compose:
```bash
docker compose up --build -d 
```
5. Acesse `http://localhost:8080` 
