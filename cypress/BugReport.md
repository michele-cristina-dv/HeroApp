🐞 Bug Report – Login e Heróis
ID: BUG-001
Título: Sistema não permite criação de novo usuário (somente login com userData.json)

Severidade: Média
Prioridade: Alta
Ambiente: Localhost

Descrição:
Não existe funcionalidade de cadastro de usuário no sistema. O login só funciona com o e-mail e senha que já estão configurados no arquivo userData.json. Isso limita os testes, pois não é possível criar novos usuários nem validar fluxos de cadastro.

Passos para Reproduzir:

Acessar a página de login.

Procurar opção de “Cadastrar novo usuário”.

Verificar que não existe essa funcionalidade.

Resultado Esperado:
O sistema deveria permitir que um usuário criasse uma nova conta diretamente.

Resultado Obtido:
Só é possível logar com o usuário já configurado manualmente no userData.json.

ID: BUG-002
Título: Sistema não permite criar novo herói (apenas simulação via teste automatizado)

Severidade: Média
Prioridade: Média
Ambiente: Localhost

Descrição:
A funcionalidade de criação de herói não está implementada de forma real. Embora o código permita simular a criação do herói usando heroesPageInstance, o herói não é persistido nem aparece de forma real na lista.

Passos para Reproduzir:

Logar com usuário válido (userData.userSucess).

Acessar a tela de “Criar Herói”.

Preencher os campos obrigatórios (nome, preço, fãs, saves).

Confirmar a criação.

Resultado Esperado:
O herói deveria ser criado e aparecer na lista principal de heróis.

Resultado Obtido:
O herói não é criado de verdade e não aparece na lista (funcionalidade apenas simulada no teste).

🎯 Resumo

O login funciona corretamente, mas só com usuários já configurados (userData.json).

Cadastro de usuários não existe, então não dá pra criar novos logins.

Criação de heróis não funciona de verdade, só é possível simular nos testes.

Mensagens de login inválido estão corretas, exibindo "Invalid email or password".