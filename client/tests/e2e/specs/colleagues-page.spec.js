describe('Colleagues Page', () => {
    context('Header', () => {
        it('should have a title with correct text', () => {
            cy.visit('http://localhost:8080');
            cy.contains('h1.colleagues-page__heading', 'The fellowship of the tretton37');
        });
    });

    context('Toolbar', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080');
        });

        it('should have a valid container element', () => {
            cy.get('[data-cy=toolbar-container]').should('exist');
        });

        it('should have a search bar', () => {
            cy.get('[data-cy=search]').should('exist');
        });

        it('should have a grid view button', () => {
            cy.get('[data-cy=grid-button]').should('exist');
        });

        it('should have a list view button', () => {
            cy.get('[data-cy=list-button]').should('exist');
        });
    });

    context('Grid/List buttons functionality', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080');
        });

        it('should show grid view when the grid button is pressed', () => {
            cy.get('[data-cy=grid-button]').click();
            cy.get('[data-cy=grid]').should('exist');
            cy.get('[data-cy=list-group]').should('not.exist');
        });

        it('should show list view when the list button is pressed', () => {
            cy.get('[data-cy=list-button]').click();
            cy.get('[data-cy=list-group]').should('exist');
            cy.get('[data-cy=grid]').should('not.exist');
        });
    });

    context('Filter functionality', () => {
        beforeEach(() => {
            cy.intercept('/get/colleagues', { fixture: 'colleagues'}).as('getColleagues');
            cy.visit('http://localhost:8080');
            cy.wait('@getColleagues');
        });

        it('should only show Darth Vader on the card grid', () => {
            cy.get('[data-cy=search]').type('Darth Vader');
            cy.get('[data-cy=grid]')
                .find('.l-card')
                .should(($card) => {
                    expect($card).to.have.length(1);
                })
                .then(($card) => {
                    expect($card.find('.l-card__title').text().trim()).to.equal('Darth Vader');
                });
        });

        it('should only show Obi-Wan Kenobi on the card grid', () => {
            cy.get('[data-cy=search]').type('office:Jedi Order');
            cy.get('[data-cy=grid]')
                .find('.l-card')
                .should(($card) => {
                    expect($card).to.have.length(1);
                })
                .then(($card) => {
                    expect($card.find('.l-card__title').text().trim()).to.equal('Obi-Wan Kenobi');
                });
        });
    });
});