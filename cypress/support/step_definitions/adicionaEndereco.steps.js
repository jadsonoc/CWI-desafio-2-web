import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que esteja logado com o usuário cadastrado", () => {
    cy.acessarLinkCreateAnAccount();
    cy.preencheCadastroNovoUsuario();
    cy.criaNovoUsuario();
    cy.validarMensagemSucessoNovoUsuario();
});

When("acessar a página para se adiocionar novo endereço", () => {
    cy.acessarLinkEditAddress();
});

When("preencher os dados válidos", () => {
    cy.preencheCadastroNovoEndereco();
});

When("acionar o botão de Salvar Endereço", () => {
    cy.criaNovoEndereco();
})

Then("será informada a mensagem de Endereço salvo com sucesso", () => {
    cy.validarMensagemSucessoNovoEndereco();
});