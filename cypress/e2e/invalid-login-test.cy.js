const usernames = [
    'standard_user', 
    'locked_out_user', 
    'problem_user', 
    'performance_glitch_user', 
    'error_user', 
    'visual_user'];
  
  const password = ['secret_sauce']
  
  describe('When the login test fails for SauceDemo', () => {
    it('Login with wrong credentials', () => {

      
        //Opens the SausageDemo webpage 
        cy.visit('/');
        cy.document().its('readyState').should('eq', 'complete');

        //Username and password step
        cy.get('#user-name').type('user')
        cy.get('#password').type('1234')
  
        //Login button
        cy.get('#login-button').click()
      
        //Confirmation of the correct url when the user login with right credentials
        cy.get('h3[data-test="error"]').should('be.visible');
    })
  })