describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    cy.get('[data-test="fundamentals-header"]').should('contain.text','Testing Fundamentals')
    //cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
  })
  it('Accordion works correctly', () => { //it.only() if you want to run this test only
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})

//https://youtu.be/u8vMu7viCm8?si=Wo3mheDKareGY6M-&t=3153