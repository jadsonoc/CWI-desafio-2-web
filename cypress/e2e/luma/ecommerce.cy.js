/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

describe('Desafio de Automatização Web - Criação de conta de usuário no ecommerce Luma', () => {

    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomEmail = String(faker.datatype.number({min: 12000})) + faker.internet.email();
    const randomPassword = faker.internet.password();
    const randomTelephone = faker.phone.number('51 #####-####');
    const randomAddress1 = faker.address.streetName();
    const randomAddress2 = faker.address.buildingNumber();
    const randomAddress3 = faker.address.secondaryAddress();
    const randomCity = faker.address.cityName();
    const randomZipCode = faker.address.zipCode();



    it.skip('Realizar o cadastro do usuário através do Create an Account', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        //cy.get('.panel > .header > :nth-child(3) > a')
        cy.get('.panel > .header > ul').children().last().find('a').click()
        cy.get('#firstname').type(randomFirstName)
        cy.get('#lastname').type(randomLastName)
        cy.get('#is_subscribed').click()
        cy.get('#email_address').type(randomEmail)
        cy.get('#password').type(randomPassword)
        cy.get('#password-confirmation').type(randomPassword)
        cy.get('button.action.submit').click()
        cy.url().should('contain', 'customer/account')
        cy.get('[data-ui-id=message-success]').should('have.text', '\nThank you for registering with Fake Online Clothing Store.\n' )
    })

    it.skip('Adicionar um endereço padrão via DefaultBilling Address', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        //cy.get('.panel > .header > :nth-child(3) > a')
        cy.get('.panel > .header > ul').children().last().find('a').click()
        cy.get('#firstname').type(randomFirstName)
        cy.get('#lastname').type(randomLastName)
        cy.get('#is_subscribed').click()
        cy.get('#email_address').type(randomEmail)
        cy.get('#password').type(randomPassword)
        cy.get('#password-confirmation').type(randomPassword)
        cy.get('button.action.submit').click()
        cy.url().should('contain', 'customer/account')
        cy.get('[data-ui-id=message-success]').should('have.text', '\nThank you for registering with Fake Online Clothing Store.\n' )
        cy.get('[data-ui-id=default-billing-edit-link]').click()
        cy.url().should('contain', 'customer/address/edit')
        cy.get('#firstname').should('have.value', randomFirstName)
        cy.get('#lastname').should('have.value', randomLastName)
        cy.get('#telephone').type(randomTelephone)
        cy.get('#street_1').type(randomAddress1)
        cy.get('#street_2').type(randomAddress2)
        cy.get('#street_3').type(randomAddress3)
        cy.get('#city').type(randomCity)
        cy.get('#region_id > option').then(selRegion => {
            const randomRegionSelectIndex = Math.floor(Math.random() * ((selRegion.length - 1) - 0 + 1));
            cy.get('#region_id > option').eq(randomRegionSelectIndex).then(($selected) => {
                let randomState = $selected.text();
                cy.get('#region_id').select(randomState)
            })
        })
        cy.get('#zip').type(randomZipCode)
        cy.get('[data-action=save-address]').click()
        cy.url().should('contain', 'customer/address/index')
        cy.get('[data-ui-id=message-success]').should('have.text', '\nYou saved the address.\n')
        cy.get('#block-collapsible-nav .nav.item').first().find('a').click()
        cy.get('[data-ui-id=page-title-wrapper]').should('have.text', 'My Account')
    })
})