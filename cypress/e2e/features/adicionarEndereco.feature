Feature: Adicionar endereço para usuário cadastrado

    Scenario: Adicionar um endereço padrão via Default Billing Address
        Given que esteja logado com o usuário cadastrado
        When acessar a página para se adiocionar novo endereço
        And preencher os dados válidos
        And acionar o botão de Salvar Endereço
        Then será informada a mensagem de Endereço salvo com sucesso