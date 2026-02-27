Cypress.Commands.add("tmdbCreateSession", () => {
  const apiKey = Cypress.env("API_KEY");
  const username = Cypress.env("USERNAME");
  const password = Cypress.env("PASSWORD");

  return cy
    .request("GET", `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
    .then(({ body }) => {
      return cy.request(
        "POST",
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
        { username, password, request_token: body.request_token }
      );
    })
    .then(({ body }) => {
      return cy.request(
        "POST",
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`,
        { request_token: body.request_token }
      );
    })
    .then(({ body }) => {
      Cypress.env("SESSION_ID", body.session_id);
      return body.session_id;
    });
});

Cypress.Commands.add("tmdbGetAccountId", () => {
  const apiKey = Cypress.env("API_KEY");
  const sessionId = Cypress.env("SESSION_ID");

  return cy
    .request("GET", `https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${sessionId}`)
    .then(({ body }) => {
      Cypress.env("ACCOUNT_ID", body.id);
      return body.id;
    });
});

Cypress.Commands.add("tmdbMarkFavoriteMovie", (movieId, isFavorite = true) => {
  const apiKey = Cypress.env("API_KEY");
  const sessionId = Cypress.env("SESSION_ID");
  const accountId = Cypress.env("ACCOUNT_ID");

  return cy.request(
    "POST",
    `https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${apiKey}&session_id=${sessionId}`,
    {
      media_type: "movie",
      media_id: movieId,
      favorite: isFavorite,
    }
  );
});

Cypress.Commands.add("tmdbGetFavoriteMovies", () => {
  const apiKey = Cypress.env("API_KEY");
  const sessionId = Cypress.env("SESSION_ID");
  const accountId = Cypress.env("ACCOUNT_ID");

  return cy.request(
    "GET",
    `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=${apiKey}&session_id=${sessionId}`
  );
});