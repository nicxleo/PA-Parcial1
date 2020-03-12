describe('PA-Parcial 01 - Suite de pruebas app web', function() {
    /*it('Probar los botones de menú superior', function() {
      cy.visit('https://todoist.com/')

      cy.get('a._4H9G8').click()
      cy.get('._1XYPC').contains('Features').click()
      cy.get('button').contains('Discover new features').click()
      cy.get('._1XYPC').contains('Premium').click()
      cy.get('._1XYPC').contains('For Teams').click()
    })*/
    /*it('Probar registro', function() {
      cy.visit('https://todoist.com/')

      cy.get('a._1uuJG').contains('Signup').click()
      cy.wait(500);
      cy.get("iframe").then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body).find('input[name="full_name"]').click().type("Nicolas Jimenez")
        cy.wrap($body).find('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
        cy.wrap($body).find('input[name="pwd"]').click().type("12345678")
        //cy.wrap($body).find('input[name="accept_terms"]').click()
        cy.wrap($body).find('button[id="submit_button"]').click()
      })
    })*/
    /*it('Probar inicio de sesión', function() {
      cy.visit('https://todoist.com/')

      cy.get('ul.W9ktc').contains('Login').click()
      cy.wait(500);
      cy.get("iframe").then(($iframe) => {
        cy.wait(500);
        const $body = $iframe.contents().find('body')
        cy.wait(500);
        cy.wrap($body).find('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
        cy.wrap($body).find('input[name="password"]').click().type("12345678")
        cy.wrap($body).find('button.submit_btn').click()
      })      
    })*/
    /*it('Probar crear nueva tarea', function() {
      cy.visit('https://todoist.com/app#start')
      
      cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('input[name="password"]').click().type("12345678")
      cy.get('button.submit_btn').click()
      cy.wait(3000);

      cy.get('li.agenda_add_task').contains('Add task').click()
      cy.get('div.item_editor_input').click().type("Nueva Tarea")
      cy.get('div.item_editor_actions').find('button.item_editor_submit').click()
    })*/
    it('Probar duplicar tarea', function() {
      cy.visit('https://todoist.com/app#start')
      
      cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('input[name="password"]').click().type("12345678")
      cy.get('button.submit_btn').click()
      cy.wait(3000);

      cy.get('li.agenda_add_task').contains('Add task').click()
      cy.get('div.item_editor_input').click().type("Nueva Tarea")
      cy.get('div.item_editor_actions').find('button.item_editor_submit').click()
    })
})