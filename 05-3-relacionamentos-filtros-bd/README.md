<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 5-3: Relacionamentos e filtros no BD
</h3>

<blockquote align="center">“Quer você acredite que consiga fazer uma coisa ou não, você está certo.”</blockquote>

## :rocket: Sobre o desafio

Nessa etapa, você deve criar um relacionamento entre o professor e o estudante. Além disso, deve-se implementar filtros na listagem da tabela de professores.

### Relacionamentos

Adicione um campo `teacher_id` na tabela de estudantes. Em seguida, nas páginas de cadastro e edição de estudantes adicione um campo select que lista todos os professores cadastrados. Por fim, na página de detalhe de um estudante, crie um campo que mostre o o nome do professor do aluno.

### Filtros

Na página de listagem de professores, adicione um input de texto para os filtros e um botão para retornar uma nova listagem com os dados filtrados. No método `index` do controller, faça uma verificação para checar se existem filtros passados por `query params`. Se existir, crie um método `findBy` no model que retorna todos os professores que que tiverem o nome ou a área de atuação em comum com o filtro passado (utilize o `ILIKE`).

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.