/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
import AccountCreatePage from '../pages/account-create-page';
import AccountPage from '../pages/account-page';
import AddressEditPage from '../pages/address-edit-page';
import AddressIndexPage from '../pages/address-index-page';
import HomePage from '../pages/home-page';

//Dados gerados e armazenados nesse momento para viabilizar a asserção na página de 
//edição de endereço (Adicionar um novo endereço)
const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();

const homePage = new HomePage();
const accountCreatePage = new AccountCreatePage(randomFirstName, randomLastName);
const accountPage = new AccountPage();
const addressEditPage = new AddressEditPage(randomFirstName, randomLastName);
const addressIndexPage = new AddressIndexPage();

Cypress.Commands.add('acessarLinkCreateAnAccount', () => {
    homePage.acessar();
    homePage.criarUmaConta();
})

Cypress.Commands.add('cadastrarNovoUsuario', () => {
    accountCreatePage.validaEntradaNaPaginaCadastroUsuario();
    accountCreatePage.preencheCadastroNovoUsuario();
    accountCreatePage.criaNovoUsuario();
    accountPage.validaEntradaNaPaginaContaUsuario();
    accountPage.validaMensagemCriacaoUsuario();
})

Cypress.Commands.add('acessarLinkEditAddress', () => {
    accountPage.editaEnderecos();
})

Cypress.Commands.add('cadastraNovoEndereco', () => {
    addressEditPage.validaEntradaNaPaginaEditaEndereco();
    addressEditPage.validaDadosIniciaisApresentados();
    addressEditPage.preencheCadastroNovoEndereco();
    addressEditPage.salvaEndereco();
    addressIndexPage.validaEntradaNaPaginaEndereco();
    addressIndexPage.validaMensagemCriacaoEndereco();
})

Cypress.Commands.add('acessaMinhaContaAPartirDoEnderecoIndex', () => {
    addressIndexPage.acessaMinhaConta();
    accountPage.validaEntradaNaPaginaContaUsuario();
})



