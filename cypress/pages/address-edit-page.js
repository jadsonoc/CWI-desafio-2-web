import { faker } from '@faker-js/faker'

class AddressEditPage {
    
    constructor(randomFirstName, randomLastName) {
        this.randomFirstName = randomFirstName; 
        this.randomLastName = randomLastName;
    }
    randomTelephone = faker.phone.number('51 #####-####');
    randomAddress1 = faker.address.streetName();
    randomAddress2 = faker.address.buildingNumber();
    randomAddress3 = faker.address.secondaryAddress();
    randomCity = faker.address.cityName();
    randomZipCode = faker.address.zipCode();

    url = 'customer/address/edit'
    inputNome = '#firstname'
    inputSobrenome = '#lastname'
    inputTelefone = '#telephone'
    inputEnderecoLinha1 = '#street_1'
    inputEnderecoLinha2 = '#street_2'
    inputEnderecoLinha3 = '#street_3'
    inputCidade = '#city'
    selectEstado = '#region_id'
    optionSelectEstado = '#region_id > option'
    inputCEP = '#zip'
    btnSalvaEndereco = '[data-action=save-address]'

    validaEntradaNaPaginaEditaEndereco() {
        cy.url().should('contain', this.url);
    }

    validaDadosIniciaisApresentados() {
        cy.get('#firstname').should('have.value', this.randomFirstName)
        cy.get('#lastname').should('have.value', this.randomLastName)
    }

    preencheCadastroNovoEndereco() {
        cy.get(this.inputTelefone).type(this.randomTelephone)
        cy.get(this.inputEnderecoLinha1).type(this.randomAddress1)
        cy.get(this.inputEnderecoLinha2).type(this.randomAddress2)
        cy.get(this.inputEnderecoLinha3).type(this.randomAddress3)
        cy.get(this.inputCidade).type(this.randomCity)
        cy.get(this.optionSelectEstado).then(selRegion => {
            const randomRegionSelectIndex = Math.floor(Math.random() * ((selRegion.length - 1) - 0 + 1));
            cy.get(this.optionSelectEstado).eq(randomRegionSelectIndex).then(($selected) => {
                let randomState = $selected.text();
                cy.get(this.selectEstado).select(randomState)
            })
        })
        cy.get(this.inputCEP).type(this.randomZipCode)
    }

    salvaEndereco() {
        cy.get(this.btnSalvaEndereco).click()
    }
    
}
export default AddressEditPage
