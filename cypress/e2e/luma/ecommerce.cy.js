/// <reference types="cypress"/>

describe('Desafio de Automatização Web - Criação de conta de usuário no ecommerce Luma', () => {

    it('Realizar o cadastro do usuário através do Create an Account', () => {
        cy.acessarLinkCreateAnAccount();
        cy.preencheCadastroNovoUsuario();
        cy.criaNovoUsuario();
        cy.validarMensagemSucessoNovoUsuario();
    })

    it('Adicionar um endereço padrão via DefaultBilling Address', () => {
        cy.acessarLinkCreateAnAccount();
        cy.preencheCadastroNovoUsuario();
        cy.criaNovoUsuario();
        cy.validarMensagemSucessoNovoUsuario();
        cy.acessarLinkEditAddress();
        cy.preencheCadastroNovoEndereco();
        cy.criaNovoEndereco();
        cy.validarMensagemSucessoNovoEndereco();
        cy.acessaMinhaContaAPartirDoEnderecoIndex();
    })

})