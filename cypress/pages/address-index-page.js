class AddressIndexPage {

    url = 'customer/address/index'
    divMensagemSucesso = '[data-ui-id=message-success]'
    linkMinhaConta = '#block-collapsible-nav .nav.item'

    validaEntradaNaPaginaEndereco() {
        cy.url().should('contain', this.url);
    }

    validaMensagemCriacaoEndereco() {
        cy.get(this.divMensagemSucesso).should('have.text', '\nYou saved the address.\n');
    }  

    acessaMinhaConta() {
        cy.get(this.linkMinhaConta).first().find('a').click();
    }

}
export default AddressIndexPage