describe("TMDB Favorites - TC01 to TC03 (API based)", () => {
  const movieId = 157336; // Interstellar
  const movieTitle = "Interstellar";

  before(() => {
    cy.tmdbCreateSession();
    cy.tmdbGetAccountId();
  });

  it("TC-01 - Login (create session) berhasil", () => {
    expect(Cypress.env("SESSION_ID"), "SESSION_ID").to.exist;
    expect(Cypress.env("ACCOUNT_ID"), "ACCOUNT_ID").to.exist;
  });

  it("TC-02 - Mark as favorite movie", () => {
    cy.tmdbMarkFavoriteMovie(movieId, true).then(({ body }) => {
      expect(body.status_code).to.be.oneOf([1, 12, 13]);
    });
  });

  it("TC-03 - Validate movie muncul di Favorites", () => {
    cy.tmdbGetFavoriteMovies().then(({ body }) => {
      const found = body.results.some((m) => m.id === movieId || m.title === movieTitle);
      expect(found, "movie exists in favorites").to.eq(true);
    });
  });
});