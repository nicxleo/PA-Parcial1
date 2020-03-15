describe('PA-Parcial 01 - parte 03 - Suite de pruebas app web', function () {
  it('Probar buscar tarea', function () {
    cy.visit('https://todoist.com/users/showLogin')

    cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
    cy.get('input[name="password"]').click().type("12345678")
    cy.get('button.submit_btn').click()
    cy.wait(3000);

    cy.get('input.quick_find').click().type("Nueva Tarea")
  })
  it('Probar terminar tarea', function () {
    cy.visit('https://todoist.com/users/showLogin')

    cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
    cy.get('input[name="password"]').click().type("12345678")
    cy.get('button.submit_btn').click()
    cy.wait(3000);

    cy.get('div.ist_checkbox').first().click()
  })
  it('Probar eliminar tarea', function () {
    cy.visit('https://todoist.com/users/showLogin')

    cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
    cy.get('input[name="password"]').click().type("12345678")
    cy.get('button.submit_btn').click()
    cy.wait(3000);

    cy.get('div.task_item_content_text').first().rightclick()
    cy.get('tr.sel_delete_task').last().contains('Delete task').click()
    cy.get('button.ist_button_red').last().contains('Delete').click()
  })
})