# Telekom Hacker News
The latest news from the Hacker News platform. Built with Angular, it offers a seamless user experience on mobile and desktop.

## Tech Stack
- Angular 17
- TypeScript 5
- TailwindCSS
- Angular Signals

## Features
- Story Feed: View the latest news from Hacker News
- Search Bar: Search for news by title, author using HN api on submit or debounced after delay
- Pagination: Switch through the available pages (first, previous, next, last) using server-side Pagination. Only the necessary subset of data for the current page is retrieved from the server/api. This reduces the amount of data sent to the client, improving initial load times.
- State Management: Angular Signals
- Error Handling: Error handling for all API calls
- Loading State: Loading state for all API calls, visual feedback for the user
- Responsiveness: Responsive design for mobile and desktop  

## Local Setup
Run `npm install` to install all dependencies.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
