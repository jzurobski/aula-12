/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');
import checkout from '../support/page_objects/checkout';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {


    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

        
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Realizando a compra de 4 produtos', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'S', 'Green', '1')
        cy.visit('produtos/')
        cy.addProdutos('Apollo Running Short', '32', 'Black', '1')
        cy.visit('produtos/')
        cy.addProdutos('Atlas Fitness Tank', 'XL', 'Blue', '1')
        cy.visit('produtos/')
        cy.addProdutos('Argus All-Weather Tank', 'L', 'Gray', '1')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
        cy.get('.checkout-button').click()

        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let empresaFaker = faker.company.name()
        let endereco = faker.address.streetAddress()
        let enderecoNumero = faker.address.buildingNumber()
        let fone = faker.number.int()
        let email = faker.internet.email()

        checkout.editarInformacoesCheckout(nomeFaker, sobrenomeFaker, empresaFaker, 'Brasil', endereco, enderecoNumero, 'Sao Paulo', 'Sao Paulo', '11111111', fone, email)
    });

});






