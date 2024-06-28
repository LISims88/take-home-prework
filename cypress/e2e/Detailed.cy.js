describe('Detailed View', () => {
  beforeEach(()=>{
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=4f00be73cb2d4b898cc2bbd0e7b852d6", {
      statusCode: 200,
      fixture: 'news-api.json'
    }).as('june27');
    cy.visit('http://localhost:3000')
    cy.wait('@june27')
  })

  it('should have a header section', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
    cy.get('.filter').should('contain', "Sort:")
    cy.get('select').should('contain', "--Choose your Option--");
  });
  it('should have a detailed container', () => {
    cy.get(':nth-child(1) > .article > h4').click()
    cy.get('.detailed').should('be.visible');
  });
  it('should have an image', () => {
    cy.get(':nth-child(1) > .article > h4').click()
    cy.get('img').should('be.visible');
  });
  it('should have article title', () => {
    cy.get(':nth-child(1) > .article > h4').click()
    cy.get('.article').should('contain', 'I Am');
  });
  it('should have date published', () => {
    cy.get(':nth-child(1) > .article > h4').click()
    cy.get('.article').should('contain', 'Date:');
  });
  it('should have author', () => {
    cy.get(':nth-child(1) > .article > h4').click()
    cy.get('.article').should('contain', 'By: Brittany Spanos');
  });
  it('should have content', () => {
    cy.get(':nth-child(1) > .article > h4').click()
    cy.get('.article').should('contain', 'The new Amazon Prime documentary I Am: Celine Dion offers a gripping and heartbreaking portrait of one of history’s greatest voices struggling to sing again.');
  });
  it('should have a link to original article', () => {
    cy.get(':nth-child(1) > .article > h4').click()
    cy.get('.article > a').should('contain', 'Read more');
  });
})