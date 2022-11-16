class HomePage {
    
    url = Cypress.config('baseUrl');
    btnCriarUmaConta = '.panel > .header > ul';

    acessar() {
        cy.visit(this.url);
    }

    criarUmaConta() {
        //cy.get('.panel > .header > :nth-child(3) > a')
        cy.get(this.btnCriarUmaConta).children().last().find('a').click();
    }
    
} export default HomePage