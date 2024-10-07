describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input') //alias
        cy.get('@subscribe-input').type('serafica.lianne@gmail.com')
        cy.contains(/Successfully subbed: serafica.lianne@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: serafica.lianne@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: serafica.lianne@gmail.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('serafica.lianne@gmail.io')
        cy.contains(/invalid email: serafica.lianne@gmail.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email: serafica.lianne@gmail.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/invalid email: serafica.lianne@gmail.io!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist') // Fail: The display is "Invalid email: !" instead of "fail!"

    })
})