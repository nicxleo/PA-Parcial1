describe('PA-Parcial 01 - parte 02 - Suite de pruebas app web', function () {
  Cypress.Commands.add('LoginApp', () => {
    cy.visit('https://www.todoist.com/')
    cy.get('a').contains('Login').click()
    cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
    cy.get('input[name="password"]').click().type("12345678")
    cy.get('button.submit_btn').click()
    cy.wait(2000);
  })

  it('Probar crear nueva tarea', function () {
    cy.LoginApp()

    cy.get('li.agenda_add_task').contains('Add task').click()
    cy.get('div.item_editor_input').click().type("Nueva Tarea")
    cy.get('div.item_editor_actions').find('button.item_editor_submit').click()

    cy.get('#quick_add_task_holder').click()
    cy.get('div.public-DraftStyleDefault-block').last().click().type("Nueva Tarea Barra Menú")
    cy.get('button.item_editor_submit').last().contains('Add Task').click()
  })
  it('Probar crear nuevo proyecto', function () {
    cy.LoginApp()

    cy.get('a.sel_add_project').contains('Add Project').click()
    cy.get('#edit_project_modal_field_name').click().type("Nuevo Proyecto")
    cy.get('button.color_dropdown_toggle').click()
    cy.get('#dropdown-select-3-option-33').click()
    cy.get('button').contains('Add').click()
  })
  it('Probar opciones bandeja', function () {
    cy.LoginApp()

    cy.get('li').contains('Inbox').click()
    cy.get('li').contains('Today').click()
    cy.get('li').contains('Next 7 days').click()
  })
})