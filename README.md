# Tretton37 JS code assignment

## How to run the project

Frontend and Backend

```
npm run install   // to install all dependencies
npm run start     // to start backend and frontend
npm run test      // to test frontend with chrome, firefox and edge
```

Web application

```
cd client
npm install
npm run serve     // to start a development server
npm run build     // to create a production build
```

Backend

```
cd server
npm install
npm run dev
```

## Overview of picked feature requests

Feature requests picked:

- Responsive design, works on mobile and tablets

- Filter by name and office
- Enable switch between a grid and a different view (such as list)
- Don't use our API, build your own API by scraping the current page...

- Works in Chrome, Firefox, Edge
- End-to-end testing (with an existing framework)

Justification for picking these points:
Since I opted to use a UI framework to speed up development it made sense to pick responsive design since most UI frameworks come with tools/components to create such layouts.

Filtering the data is pretty easy with Vue's computed properties and toggling between layouts is made easy with conditional rendering so that's why I picked those two.

Scraping tretton37's meet page was simple due to the fact that no crawling was required and there is a pretty great tool out there for scraping pages, and since I had some basic knowledge about creating an API with Node.js it made sense to pick this one.

Since I developed this product in Chrome I was confident that the web app would run great on Firefox and Edge too sans a few edge cases. I picked up E2E testing with the intention to use that to prove browser compatibility (which I unfortunately didn't manage to fulfill due to running out of time).

# Product description

For this assignment I've created a simple Vue app that uses BootstrapVue as UI framework and a simple backend that scrapes data from tretton37's meet page and serves it from an endpoint. The web app consists of a single page that was designed to match the given wireframe closely, with some creative liberties taken on a few things such as the toolbar and the layout (to make it responsive). You can toggle between grid and list view, and you can filter by office by prefixing your search with "office:" (without quotation marks).

# Thoughts behind code design and reflection

The backend was designed with extendability and separation of concerns in mind. Routes contain the endpoints, controllers handle the actual requests and returns a response, models define the data models used in the app, and services contains the business logic (scraping data and parsing the result). I could've foregone this by e.g. adding a callback function in my route and adding all logic there but that would lead to rigid code.

The frontend isn't designed as well as the backend due to my lack of expertise when it comes to E2E testing, which I had to pick up in order to meet the required amount of points in each category, and running out of time. The main flaw lies in that there are a lot of components that are tightly coupled with the page view, of which could have been made modular instead for reusability and unit testing. For example, I could have made renderless components for e.g. the search input and the grid/list buttons, or create a base component with minimal markup which they could then extend. Perhaps this issue wouldn't exist if I had picked unit testing instead.

I used Cypress for E2E testing and the file structure are structured accordingly to the Cypress docs. You could argue that the single test file I have could be splitted into multiple ones for each component in my web app, in which you wouldn't be incorrect. My thought there was that if someone in the future would like to add another page into the web app then I'd like the test files to be scoped to every page.

# Improvements

- [ ] modular components
