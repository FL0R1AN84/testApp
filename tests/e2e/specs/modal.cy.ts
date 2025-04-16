describe('ModalRange Component', () => {
  it('opens the modal for ▼ Modal down ▼', () => {
    // Visit the page containing the ModalRange component
    cy.visit('/tabs/tab2')

    // Find the trigger for the ▼ Modal down ▼ modal and click it
    cy.contains('▼ Modal down ▼').click()

    // Assert that the modal is visible
    cy.get('ion-modal').should('exist').and('be.visible')

    // Optionally, verify the modal content
    cy.get('ion-modal')
      .find('.md .title-default')
      .should('contain.text', 'Modal')
  })
})
