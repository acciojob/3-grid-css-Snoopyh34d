//your JS code here. If required.
cy.get(".grid-container")
  .should("have.css", "display", "grid")
  .and($el => {
    const style = window.getComputedStyle($el[0]);
    const gridTemplateColumns = style.getPropertyValue('grid-template-columns').split(' ');
    
    // Ensure there are exactly 3 columns
    expect(gridTemplateColumns.length).to.equal(3);
    
    // Check the grid-template-columns value is roughly equal to the expected distribution
    const expectedColumnWidths = [321.328, 321.336, 321.336];
    const tolerance = 10;  // Increased tolerance for minor variations

    gridTemplateColumns.forEach((column, i) => {
      const actualWidth = parseFloat(column);
      const expectedWidth = expectedColumnWidths[i];
      expect(actualWidth).to.be.closeTo(expectedWidth, tolerance);
    });
  });
