describe('Main Page', () => {
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
  it('should have News Container', () => {
    cy.get('.news-container');
  });
  it('should have children', () => {
    cy.get('.news-container > :nth-child(1)').should('contain', "I Am");
    cy.get('.news-container > :nth-child(10)').should('contain', "Tories");
    cy.get('.news-container > :nth-child(20)').should('contain', "Shifty Shellshock");
  });
  it('should have an image', () => {
    cy.get(':nth-child(1) > img').should('be.visible');
    cy.get(':nth-child(10) > img').should('be.visible')
    cy.get(':nth-child(20) > img').should('be.visible')
  });
  it('should have article title', () => {
    cy.get(':nth-child(1) > .article > h4 > a').should('contain', "I Am");
    cy.get(':nth-child(10) > .article > h4 > a').should('contain', "Tories");
    cy.get(':nth-child(20) > .article > h4 > a').should('contain', "Shifty Shellshock")
  });
  it('should have date published', () => {
    cy.get(':nth-child(1) > .article > :nth-child(2)').should('contain', "June 25, 2024 at 11:41 AM");
    cy.get(':nth-child(10) > .article > :nth-child(2)').should('contain', "June 25, 2024 at 9:28 AM");
    cy.get(':nth-child(20) > .article > :nth-child(2)').should('contain', "June 25, 2024 at 6:09 AM");
  });
  it('should have a decription', () => {
    cy.get(':nth-child(1) > .article > :nth-child(3)',{ timeout: 10000 }).should('contain', 'A new Amazon Prime documentary');
    cy.get(':nth-child(10) > .article > :nth-child(3)',{ timeout: 10000 }).should('contain', 'Both Craig Williams and Laura Saunders');
    cy.get(':nth-child(20) > .article > :nth-child(3)',{ timeout: 10000 }).should('contain', 'Shifty Shellshock, the frontman of rap rock band Crazy Town');
  });
  it('article title can click', () => {
    cy.get(':nth-child(1) > .article > h4 > a').should('contain', "I Am").click();
    cy.go('back');
    cy.get(':nth-child(10) > .article > h4 > a').should('contain', "Tories").click();
    cy.go('back');
    cy.get(':nth-child(20) > .article > h4 > a').should('contain', "Shifty Shellshock").click();
    cy.go('back');
  });
})