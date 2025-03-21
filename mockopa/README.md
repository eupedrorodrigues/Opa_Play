# Mockup

### Acesso aos dados da API simulada

Para ter acesso aos dados que alimentarão o projeto, faça o seguinte:

1. Caso você não tenha, instale o pacote [json-server](https://github.com/typicode/json-server);
2. Entre na pasta do projeto, em sua máquina, e, por meio da linha de comando, execute o comando `json-server --watch db.json`, para consumir a API simulada;
3. Inicie a estrutura e o desenvolvimento do projeto.

É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

Caso você tenha problemas com o json-server, tente rodá-lo com `npx json-server db.json` ou
com `yarn json-server <path>/db.json`, em que `<path>` é o caminho completo até o diretório em que o arquivo db.json está localizado. Se mesmo assim não funcionar, busque ajuda na web.
