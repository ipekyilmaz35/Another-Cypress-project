
const usernames = [
  'standard_user', 
  'locked_out_user', 
  'problem_user', 
  'performance_glitch_user', 
  'error_user', 
  'visual_user'];

const password = ['secret_sauce']

describe('Login test for SauceDemo', () => {
  it('Login with right credentials', () => {

    //Opens the SausageDemo webpage 
    cy.visit('/')

    //Username and password step
    cy.get('#user-name').type(usernames)
    cy.get('#password').type(password)

    //Login button
    cy.get('login-button').click()
    
    //Confirmation of the correct url when the user login with right credentials
    cy.url().should('include', '/inventory.html');   
  })
})