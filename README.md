# TMDB Favorite - QA Project

## Overview
This project demonstrates my QA approach in testing the "Favorite Movie" feature from The Movie Database (TMDB).  
The objective is to validate functionality, usability, and basic reliability through manual and automation testing.

## Scope (User Stories)

- US-01: User can login successfully
- US-02: User can add a movie to favorite
- US-03: User can remove movie from favorite
- US-04: Favorite list displays correct movies
- US-05: System prevents unauthorized access

## Test Environment

- Application: TMDB
- URL: https://www.themoviedb.org/
- Browser: Chrome (latest version)
- OS: macOS
- Test Type: Manual + Automation
- Date Tested: (isi tanggal kamu test)

## Manual Testing

Manual test cases are available here:
📂 [Test Cases](./test-cases)

Testing evidence (screenshots & recordings):
📂 [Evidence](./evidence)

## Automation

Automation testing is implemented using Cypress.

Project location:
📂 [Automation Folder](./automation)

How to run automation:

1. Open terminal
2. Navigate to automation folder
3. Install dependencies:
   npm install
4. Run Cypress:
   npx cypress open

## Notes / Known Issues

- (Isi jika ada bug yang kamu temukan)
- (Contoh: Favorite button delay response)