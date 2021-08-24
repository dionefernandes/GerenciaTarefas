O projeto foi criado tendo uma pasta raiz com o nome de "gerencia_tarefas" e, dentro deste repositório, há outros dois repositórios sendo o primeiro com o nome de "backend_api" e o segundo com o nome de "frontend_api".

O backend foi desenvolvido utilizano o framework Laravel 8 e uma base de dados MySql.

O frontend foi desenvolvido utilizando React JS.

Para facilitar, na raiz do projeto deixei um arquivo com o nome "gerencia_tarefas.sql" que é a base de dados já contendo alguns registros inseridos para teste.

O nome da base de dados é "gerencia_tarefas" e possui uma tabela com nome de "tarefas".

O usuário do banco de dados é "root" e NÃO há senha.

A configuração do arquivo .env do Laravel deve ficar desta maneira:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=gerencia_tarefas
DB_USERNAME=root
DB_PASSWORD=


O projeto, quando ao backend, está sem a pasta "vendor" e para que o abiente seja preparado, deve-se executar o comando " composer install " para que o composer crie a pasta vendor e baixe os pacotes necessários

Em relação ao frontend, é necessário executar o comando " npm install " para que os módulos necessários sejam instalados.

Estou à disposição em caso de dúvidas.

        E-mail: dionefernandes@gmail.com
        WhatsApp: (14) 9 9792-4625