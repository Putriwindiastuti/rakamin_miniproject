describe('suite name', () => 
{
    it('test1', () => {
      cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore")
      cy.title().should('eq','Rakamin Academy')
    })
  })