describe('Login test for SauceDemo', () => {
  it('Login with right credentials', () => {

    //Opens the SausageDemo webpage 
    cy.visit('/');
    cy.document().its('readyState').should('eq', 'complete');

    //Username and password step
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    //Login button
    cy.get('#login-button').click()
    
    //Confirmation of the correct url when the user login with right credentials
    cy.url().should('include', '/inventory.html');   
  })
})