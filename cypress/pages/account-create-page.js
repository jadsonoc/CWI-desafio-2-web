import { faker } from '@faker-js/faker'
class AccountCreatePage {
    
    constructor(randomFirstName, randomLastName) {
        this.randomFirstName = randomFirstName; 
        this.randomLastName = randomLastName;
    }
    randomEmail = String(faker.datatype.number({min: 12000})) + faker.internet.email();
    randomPassword = faker.internet.password();
    
    url = 'customer/account/create'
    inputNome = '#firstname'
    inputSobrenome = '#lastname'
    checkParaNewsletter = '#is_subscribed'
    inputEmail = '#email_address'
    inputSenha = '#password'
    inputConfirmaSenha = '#password-confirmation'
    btnCriarConta = 'button.action.submit'

    validaEntradaNaPaginaCadastroUsuario() {
        cy.url().should('contain', this.url);
    }

    preencheCadastroNovoUsuario() {
        cy.get(this.inputNome).type(this.randomFirstName);
        cy.get(this.inputSobrenome).type(this.randomLastName);
        cy.get(this.checkParaNewsletter).click();
        cy.get(this.inputEmail).type(this.randomEmail);
        cy.get(this.inputSenha).type(this.randomPassword);
        cy.get(this.inputConfirmaSenha).type(this.randomPassword);
    }

    criaNovoUsuario() {
        cy.get(this.btnCriarConta).click();
    }
    
}
export default AccountCreatePage