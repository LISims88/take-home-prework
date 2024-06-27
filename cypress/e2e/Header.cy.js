describe('header component', () => {
  beforeEach(()=>{
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=4f00be73cb2d4b898cc2bbd0e7b852d6", {
      statusCode: 200,
      fixture: 'news-api.json'
    }).as('july27');
    cy.visit('http://localhost:3000')
  })

  it('should have a Title', () => {
    cy.get('h1').should('contain', "Top News Headlines Today");
  });
  it('should have a lable', () => {
    cy.get('.filter').should('contain', "Sort:");
  });
  it('should have a select', () => {
    cy.get('select').should('contain', "--Choose your Option--");
  });
})
describe('Select', () => {
  beforeEach(()=>{
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=4f00be73cb2d4b898cc2bbd0e7b852d6", {
      statusCode: 200,
      fixture: 'news-api.json'
    }).as('july27');
    cy.visit('http://localhost:3000')
  })

  it('should have --Choose your Option--', () => {
    cy.get('select').should('contain', "--Choose your Option--");
  });
  it('should have Aphabetically', () => {
    cy.get('select').select('Alphabetically').should('contain', "Alphabetically");
  });
  it('should have Source', () => {
    cy.get('select').select('Source').should('contain', "Source");;
  });
})

describe('Select Alphabetically', () => {
  beforeEach(()=>{
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=4f00be73cb2d4b898cc2bbd0e7b852d6", {
      statusCode: 200,
      fixture: 'news-api.json'
    }).as('july27');
    cy.visit('http://localhost:3000')
  })

  it('should have Aphabetically', () => {
    cy.get('select').select('Alphabetically').should('contain', "Alphabetically");
  });
  it('should be sorted Alphabetically', () => {
    cy.get('select').select('Alphabetically').should('contain', "Alphabetically");
    cy.get(':nth-child(1) > .article').should('contain', "I Am");
    cy.get(':nth-child(20) > .article').should('contain', "Shifty Shellshock");
  });
})

describe('Select Source', () => {
  beforeEach(()=>{
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=4f00be73cb2d4b898cc2bbd0e7b852d6", {
      statusCode: 200,
      fixture: 'news-api.json'
    }).as('july27');
    cy.visit('http://localhost:3000')
  })

  it('should have Source', () => {
    cy.get('select').select('Source').should('contain', "Source");
  });
  it('should be sorted by source', () => {
    cy.get('select').select('Source').should('contain', "Source");
    cy.get(':nth-child(1) > .article').should('contain', "Removed");
    cy.get(':nth-child(20) > .article').should('contain', "COVID");
  });
})