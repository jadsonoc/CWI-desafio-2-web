class AccountPage {

    url = 'customer/account'
    h1TituloMinhaConta = '[data-ui-id=page-title-wrapper]'
    linkEditaEnderecos = '[data-ui-id=default-billing-edit-link]'
    divMensagemSucesso = '[data-ui-id=message-success]'
    
    validaEntradaNaPaginaContaUsuario() {
        cy.url().should('contain', this.url);
        cy.get(this.h1TituloMinhaConta).should('have.text', 'My Account'); 
    }
  
    validaMensagemCriacaoUsuario() {
        cy.get(this.divMensagemSucesso).should('have.text', '\nThank you for registering with Fake Online Clothing Store.\n' )
    }  

    editaEnderecos() {
        cy.get(this.linkEditaEnderecos).click();
    }

}
export default AccountPage