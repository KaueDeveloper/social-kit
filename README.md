# social-kit
Utilitários essenciais para construção de redes sociais: validação de dados, geração de avatares aleatórios e criação de perfis falsos para testes.


---------- Anotações -----------
/fakeUser - gera um usuário fake aleatório
/fakeUser/gender/f - gera um usuário fake aleatório feminino
/fakeUser/gender/m - gera um usuário fake aleatório masculino
/fakeUser/id/(algum número) - seleciona um usuário fake manualmente pelo id
/fakeUser/all - gera todos os usuários fakes
/fakeUser/all/f - gera todos os usuários fakes femininos
/fakeUser/all/m - gera todos os usuários fakes masculinos

--Geração de nomes--
/name - gera um nome aleatório
/name/gender/f - gera um nome aleatório feminino
/name/gender/m - gera um nome aleatório masculino
/name/all - gera todos os nomes fakes
/name/all/f - gera todos os nomes fakes femininos
/name/all/m - gera todos os nomes fakes masculinos

--Validações de email--
/isEmail - faz a validação de email
/isEmail/:domain - faz a validação de email por domínio
/email - gera um email aleatório
/email/:domain - gera um email aleatório por domínio

--Geração de avatares--
/avatar - gera um avatar aleatório
/avatar/gender/f - gera um avatar aleatório feminino
/avatar/gender/m - gera um avatar aleatório masculino
/avatar/id/(algum número) - seleciona um avatar manualmente pelo id

--Geração de postagens--
/post/random - gera uma postagem aleatória
/post/random?limit=(algum número) - delimita a quantidade de postagens aleatórias geradas
/post/random/:user - gera uma postagem aleatória de algum usuário
/post/all - gera todas as postagens da API
/post/all?limit=(algum número) - delimita a quantidade de postagens que serão geradas
/post/all/:user - gera todas as postagens de algum usuário