
// Login com credenciais válidas
describe('Login válido', () => {
  it('TC1 - Verificar o título da página - Positivo', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  
 // Preencher o campo Username
   cy.get('input#user-name').type('standard_user')
   cy.get('input[placeholder="Password"]').type('secret_sauce')

   // Clicar no botão Login
   cy.get('input.btn_action').click()
  })
})

  describe('Login Inválido', () => {
    it('TC2 - utilizar Username inválido - Negativo', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('input#user-name').type('cypress')
      cy.get('input[placeholder="Password"]').type('secret_sauce')
      cy.get('input.btn_action').click()
    })
  })

  describe('Login Inválido', () => {
    it('TC3 - utilizar senha inválida - Negativo', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('input#user-name').type('standard_user')
      cy.get('input[placeholder="Password"]').type('secret_saucecypress')
      cy.get('input.btn_action').click()
      })
  })

  describe('Login Inválido', () => {
    it('TC4 - deixar Username vazio - Negativo', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('input[placeholder="Password"]').type('secret_sauce')
      cy.get('input.btn_action').click()
    })
  })

  describe('Login Inválido', () => {
    it('TC5 - deixar Senha vazia - Negativo', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('input[placeholder="Password"]').type('secret_sauce')
      cy.get('input.btn_action').click()
    })
  })