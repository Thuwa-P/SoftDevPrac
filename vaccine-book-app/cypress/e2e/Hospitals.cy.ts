describe("template spec", () => {
  it("should perform user interactions", () => {
    //visit home page
    cy.visit("/");
    //check if there is a video on the home page
    cy.get("video", { timeout: 20000 }).should("exist");
    //check if video is palying
    cy.get("video").should("not.have.prop", "paused", true);
    //wait 5 seconds
    cy.wait(5000);
    //pause the video
    cy.get('[data-test-id="pauseButton"]').click();

    // Check if the video is in pause state (paused should be true)
    cy.get("video").should("have.prop", "paused", true);

    // Click the banner's bottom-right button to navigate to /hospital
    cy.get('[data-test-id="bannerButton"]').click();

    // Check if the URL is /hospital
    cy.url({ timeout: 10000 }).should("include", "/hospital");

    // Check if there are at least 3 images on the /hospital page
    cy.get("img").should("have.length.gte", 3);
  });
});
