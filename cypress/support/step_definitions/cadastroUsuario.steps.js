import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que seja acessada a página de cadastro", () => {
    cy.acessarLinkCreateAnAccount();
});

Given("sejam preenchidos os dados válidos de cadastro", () => {
    cy.preencheCadastroNovoUsuario();
});

When("acionar o botão de Criar uma Conta", () => {
    cy.criaNovoUsuario();
})

Then("será informada a mensagem de Obrigado por registrar-se com nossa loja online", () => {
    cy.validarMensagemSucessoNovoUsuario();
});

