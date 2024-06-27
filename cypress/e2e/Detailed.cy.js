describe('Detailed View', () => {
  beforeEach(()=>{
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=4f00be73cb2d4b898cc2bbd0e7b852d6", {
      statusCode: 200,
      fixture: 'detailed.json'
    }).as('june27');
    cy.visit('http://localhost:3000')
  })

  it('should have a header section', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
  });
  it('should have a detailed container', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
  });
  it('should have an image', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
  });
  it('should have article title', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
  });
  it('should have date published', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
  });
  it('should have author', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
  });
  it('should have content', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
  });
  it('should have a link to original article', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
  });
})