describe('PA-Parcial 01 - parte 04 - Suite de pruebas app web', function () {
  it('Probar duplicar tarea', function () {
    cy.visit('https://todoist.com/users/showLogin')

    cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
    cy.get('input[name="password"]').click().type("12345678")
    cy.get('button.submit_btn').click()
    cy.wait(3000);

    cy.get('div.task_item_content_text').first().rightclick()
    cy.get('tr.menu_item_duplicate').last().contains('Duplicate').click()
    cy.get('td.close').last().click()
  })
  it('Probar copiar link tarea', function () {
    cy.visit('https://todoist.com/users/showLogin')

    cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
    cy.get('input[name="password"]').click().type("12345678")
    cy.get('button.submit_btn').click()
    cy.wait(3000);

    cy.get('div.task_item_content_text').first().rightclick()
    cy.get('tr.menu_item_link').last().contains('Copy link to task').click()
  })
  it('Probar archivar tarea', function () {
    cy.visit('https://todoist.com/users/showLogin')

    cy.get('input[name="email"]').click().type("en.jimenez@uniandes.edu.co")
    cy.get('input[name="password"]').click().type("12345678")
    cy.get('button.submit_btn').click()
    cy.wait(3000);

    cy.get('div.task_item_content_text').first().rightclick()
    cy.get('tr.menu_item_archive').last().contains('Archive task').click()
  })
})