describe('PA-Parcial 01 - Suite de pruebas app web', function() {
    it('Probar los botones de menú superior', function() {
      cy.visit('https://todoist.com/')

      cy.get('a._4H9G8').click()
      cy.get('._1XYPC').contains('Features').click()
      cy.get('button').contains('Discover new features').click()
      cy.get('._1XYPC').contains('Premium').click()
      cy.get('._1XYPC').contains('For Teams').click()
    })
    it('Probar registro', function() {
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
    })
    it('Probar inicio de sesión', function() {
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
    })
    it('Probar crear nueva tarea', function() {
      cy.visit('https://todoist.com/app#start')
      
      cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('input[name="password"]').click().type("12345678")
      cy.get('button.submit_btn').click()
      cy.wait(3000);

      cy.get('li.agenda_add_task').contains('Add task').click()
      cy.get('div.item_editor_input').click().type("Nueva Tarea")
      cy.get('div.item_editor_actions').find('button.item_editor_submit').click()

      cy.get('#quick_add_task_holder').click()
      cy.get('div.public-DraftStyleDefault-block').click().type("Nueva Tarea Barra Menú")
      cy.get('button.item_editor_submit').contains('Add Task').click()
    })
    it('Probar crear nuevo proyecto', function() {
      cy.visit('https://todoist.com/app#start')
      
      cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('input[name="password"]').click().type("12345678")
      cy.get('button.submit_btn').click()
      cy.wait(3000);

      cy.get('a.sel_add_project').contains('Add Project').click()
      cy.get('#edit_project_modal_field_name').click().type("Nuevo Proyecto")
      cy.get('button.color_dropdown_toggle').click()
      cy.get('#dropdown-select-3-option-33').click()
      cy.get('button').contains('Add').click()
    })
    it('Probar opciones bandeja', function() {
      cy.visit('https://todoist.com/app#start')
      
      cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('input[name="password"]').click().type("12345678")
      cy.get('button.submit_btn').click()
      cy.wait(3000);

      cy.get('li').contains('Inbox').click()
      cy.get('li').contains('Today').click()
      cy.get('li').contains('Next 7 days').click()
    })
    it('Probar buscar tarea', function() {
      cy.visit('https://todoist.com/app#start')
      
      cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('input[name="password"]').click().type("12345678")
      cy.get('button.submit_btn').click()
      cy.wait(3000);

      cy.get('input.quick_find').click().type("Nueva Tarea")
    })
    it('Probar terminar tarea', function() {
      cy.visit('https://todoist.com/app#start')
      
      cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('input[name="password"]').click().type("12345678")
      cy.get('button.submit_btn').click()
      cy.wait(3000);

      cy.get('div.ist_checkbox').first().click()
    })
    it('Probar eliminar tarea', function() {
      cy.visit('https://todoist.com/app#start')
      
      cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('input[name="password"]').click().type("12345678")
      cy.get('button.submit_btn').click()
      cy.wait(3000);

      cy.get('div.task_item_content_text').first().rightclick()
      cy.get('tr.sel_delete_task').contains('Delete task').click()
    })
    it('Probar duplicar tarea', function() {
      cy.visit('https://todoist.com/app#start')
      
      cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('input[name="password"]').click().type("12345678")
      cy.get('button.submit_btn').click()
      cy.wait(3000);

      cy.get('div.task_item_content_text').first().rightclick()
      cy.get('tr.menu_item_duplicate').contains('Duplicate').click()
    })
})