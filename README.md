##  API Simples em Node para Gerenciar Tarefas - <img src="https://img.shields.io/badge/-Node.js-000000?style=flat&amp;logo=node.js&amp;logoColor=339933" alt="Node.js">
-------------

### 📜 Regras da aplicação


<details>
  <summary>Listagem de todas as tasks</summary>
    Deve ser possível listar todas as tasks salvas no banco de dados.
    Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`
</details>
<details>
  <summary>Criação de uma task</summary>
 Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
    Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
</details>

<details>
  <summary>Atualização de uma task pelo `id`</summary>
    Deve ser possível atualizar uma task pelo `id`.
    No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.
    Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.
    Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
</details>



<details>
  <summary>Remover uma task pelo `id`</summary>
    Deve ser possível remover uma task pelo `id`.
    Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
</details>

<details>
  <summary>Marcar pelo `id` uma task como completa</summary>
 Deve ser possível marcar a task como completa ou não. Isso significa que se a task estiver concluída, deve voltar ao seu estado “normal”.
Antes da alteração, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
</details>


<details>
  <summary>Importação de tasks em massa por um arquivo CSV</summary>
 Ler dados do arquivo csv e popular no nosso banco em json
</details>




### 🛣️  Rotas: 
- [x] `GET - /tasks`

- [x] `POST - /tasks`
    
- [x] `PUT - /tasks/:id`
    
- [x] `DELETE - /tasks/:id`
    
- [x] `PATCH - /tasks/:id/complete`

   
