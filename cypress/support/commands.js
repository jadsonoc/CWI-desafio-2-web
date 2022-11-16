/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
import AccountCreatePage from '../pages/account-create-page';
import AccountPage from '../pages/account-page';
import AddressEditPage from '../pages/address-edit-page';
import AddressIndexPage from '../pages/address-index-page';
import HomePage from '../pages/home-page';


const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
var accountCreatePage = null;

const homePage = new HomePage();
const accountPage = new AccountPage();
const addressEditPage = new AddressEditPage(randomFirstName, randomLastName);
const addressIndexPage = new AddressIndexPage();

Cypress.Commands.add('acessarLinkCreateAnAccount', () => {
    homePage.acessar();
    homePage.criarUmaConta();
})

Cypress.Commands.add('preencheCadastroNovoUsuario', () => {
    accountCreatePage = new AccountCreatePage(randomFirstName, randomLastName);
    accountCreatePage.validaEntradaNaPaginaCadastroUsuario();
    accountCreatePage.preencheCadastroNovoUsuario();
})

Cypress.Commands.add('criaNovoUsuario', () => { 
    accountCreatePage = new AccountCreatePage(randomFirstName, randomLastName);
    accountCreatePage.criaNovoUsuario();
})

Cypress.Commands.add('validarMensagemSucessoNovoUsuario', () => {
    accountPage.validaEntradaNaPaginaContaUsuario();
    accountPage.validaMensagemCriacaoUsuario();
})

Cypress.Commands.add('acessarLinkEditAddress', () => {
    accountPage.editaEnderecos();
})

Cypress.Commands.add('preencheCadastroNovoEndereco', () => {
    addressEditPage.validaEntradaNaPaginaEditaEndereco();
    addressEditPage.validaDadosIniciaisApresentados();
    addressEditPage.preencheCadastroNovoEndereco();
})

Cypress.Commands.add('criaNovoEndereco', () => { 
    addressEditPage.salvaEndereco();
})

Cypress.Commands.add('validarMensagemSucessoNovoEndereco', () => {
    addressIndexPage.validaEntradaNaPaginaEndereco();
    addressIndexPage.validaMensagemCriacaoEndereco();
})

Cypress.Commands.add('acessaMinhaContaAPartirDoEnderecoIndex', () => {
    addressIndexPage.acessaMinhaConta();
    accountPage.validaEntradaNaPaginaContaUsuario();
})



