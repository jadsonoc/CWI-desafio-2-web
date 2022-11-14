Feature: Cadastrar usuário
    
    Scenario: Cadastrar um novo usuário
        Given que seja acessada a página de cadastro
        And sejam preenchidos os dados válidos de cadastro
        When acionar o botão de Criar uma Conta
        Then será informada a mensagem de Obrigado por registrar-se com nossa loja online
