# ngLibrary

[![Build Status](https://travis-ci.com/mrWh1te/ngLibrary.svg?branch=master)](https://travis-ci.com/mrWh1te/ngLibrary) 
[![Greenkeeper badge](https://badges.greenkeeper.io/mrWh1te/ngLibrary.svg)](https://greenkeeper.io/) 
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/mrWh1te/ngLibrary&style=flat)](https://mergify.io) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/c41968d0-1b4e-4a0d-91a3-bdfec3f32305/deploy-status)](https://app.netlify.com/sites/nglibrary-demo/deploys)

[App Demo](http://nglibrary-demo.netlify.com) - [App's Storybook](http://nglibrary-demo.netlify.com/storybook)

This simple app is a pretend online gateway, to check out books from your local library.

It uses advanced architecture to manage complexity of Enterprise applications through the use of best coding patterns established by community leaders in Angular, RxJS, NgRX and beyond (including a tiny bit by me).

Have fun!

## App Overview

The UX and UI are simple. This project's focus is on a strong coding foundation that promotes healthy Single Page Application growth. It helps maintain Developer Experience while reducing risk by strongly separating concerns. 

The app has two pages:

### Home Page
You can add books to your Basket. There are validation rules as to what you can and cannot add. For example, you cannot add the same book twice. There's a dropdown menu to remove books from your Basket, by clicking the Basket icon in the top nav. When you are ready to Checkout, click the navigation icon at the far right.

### Checkout Page
Displays the Basket's contents and provides a form to reserve these books for "pickup". The form has basic validation rules and will give you helpful feedback in getting it right. Now since this is a pretend app, there is no actual reservations occuring, when you submit the form.

## Code Overview
This project is guided by these primary values:
1) Single Responsibility Principle (SRP)
    - separate concerns, reduce code risks
2) Minimal Time to Interactive (TTI)
    - speed, latency, big O complexity

The coding patterns focus first on reducing high cost code risks, then focuses on minimizing Time to Interactive for a smooth User Experience.

### Single Responsiblity Principle
This project favors Composition. The code has strongly separated concerns into small singular purposed units that are composed as an application. This reduces some high cost code risks such as having a piece of code that becomes costly to remove, through entanglement with other codes, but causes a problem in Production as it's not scaling to demand, costing the business. Being able to delete or replace that piece of code quickly, is important like in a formula one car race, the pit stop crew replaces broken parts as fast as possible, to get their team's car back on track to win the game!

When the code is highly composable, the application becomes more affordably flexible. For example, it's easy in this project to change which page is the home page, where various components go, changing the layout and how data/logic is loaded per page. It's all highly separated, and somewhat composable, which affords cheaper flexibility in making drastic changes to an advanced web application.

Also, it's much easier to cover small pieces of code in testing. Unit-testing becomes powerful when paired with enough E2E testing, in this design.  

#### SRP Derived Patterns
When it comes to separating the application, the first step is by domain, as in Domain Driven Development (DDD). Each domain is like a different type of data, so in this project, the domains are *book*, *books*, *cart* and *checkout*.

The next level of separation depends on the size of the application. For sites with many pages with many features, it's best to break each domain down into the single features, but that will be unnecessary for most web apps. Once the proper scaffolding is in place, there are three main module types:

1) Data Modules
    - Data Reducers, Actions, Effects, Selectors, Models, Services
2) Component Modules
    - Smart/Container, Dumb/UI Components
3) View Modules
    - View Components (ie Pages), Routing

None of these are required per domain. It's on a "as needed basis" coding pattern to provide an additional layer of separation that will give room to the app to grow with the code. It's simple enough to manage cross-module dependencies too that goes up (#3 to #1). View Modules' View Components will use HTML/CSS and Container/UI Components so they import Component Modules. Each Component Module imports Data Modules, depending on the data/business needs of their Components. Data Modules import what they need to provide data and the business logic to interact with it. That's about it. 

This pattern can grow with the needs of the app, by adding an additional layer ie breaking Component Modules into Sub-Component Modules (ie Component-Dialog Modules). But preferarbly, if the app is going to be massive in pages & features, to include an additional layer of separation between Modules and Domains, ie Domain Features.

### Minimal Time to Interactive
User Experience is crucial to every app. If a market is saturated, usually the app with the best User Experience wins out. Everyone enjoys an intuitive, fun animated, app. So this project's code is focused on minimizing TTI by managing factors that effect app performance like bundle sizes, big O complexity, misuse of DOM elements, poor FPS in animations, and so forth. We want the app to be ready for the User to experience, to interact with, as soon as possible, every step of the way. That's how we'll not let the competition ever out pace us.

#### Minimal TTI Derived Patterns

[Storybook](https://storybook.js.org/) has been setup as an example to demonstrate the feasibility of *UI first development*, as a means to reduce development time in building new features. If your team is writing smart/business logic over and over again while building new features, it's highly recommended to try building the UI components first, so your development team can build the more complex business logic once.

The app is running Angular v9.

These are the main dependencies of this app: `@angular/cdk`, `@angular/flex-layout`, `@angular/material`, `@ngrx/store`, `@ngrx/effects`, `@ngrx/entity`, `@ngrx/router-store`, `@ngrx/store-devtools`, and `ngrx-store-localstorage`. It follows a Single-Source of Truth for the application state by using NgRX's Store. It uses `flex-layout` to lay out components programmatically, de-coupling the layout portion of styling UI. Angular's `Material` was used for the form's inputs and main header toolbar. The drop-down for the Cart is powered by the CDK's `Overlay`. 

## CI & CD

This repo was setup to demonstrate a possible real Production Angular app. It has both Continuous Integration (CI) and Continuous Deployment (CD) setup. CI is setup with [Travis](https://travis-ci.com) and runs on pushed branches & pull requests. It runs both [Cypress](https://cypress.io) E2E tests and [Jest](https://jestjs.io/) Unit-Tests. Also, we have [Greenkeeper](https://greenkeeper.io/) running to stay up-to-date on new dependency releases. Finally, we have [Mergify](https://mergify.io) to automatically merge pull-requests labeled "automerge" once all criteria is met (no merge conflicts, merging against master branch & all tests pass).

CD is setup with [Netlify](https://netlify.com). It will automatically deploy the `master` branch PROD build to the [Demo](http://nglibrary-demo.netlify.com). Also, for pull-requests, it will automatically deploy on different sub-domains, the latest code from that branch. Therefore, while reviewing code in a PR, you can actually test it live before merging.

## Guide 

There are two core values that guide this repo.

1) Minimize TTI (Time to Interact)
2) Keep it easy to add and replace new pages & features (extensible code is easier to maintain)

To accomplish that, we follow the best practices & principles established by Angular community leaders and core contributors in regards to the dependencies we use. From that, we follow particular coding patterns to maintain our values. These include, but are not limited too: 

1) Separation of business logic and UI while leveraging the `onPush` change detection strategy
2) Multiple Types of Modules per Domain (Views/Routing, Widgets, Data, etc)
3) Unit & E2E testing
4) Single Responsibilty Principle in Services, Effects, Actions, basically everything in various scopes (strong code separation)
5) NgRX Store as Single Source of Truth in terms of upstream vs downstream logic
6) Not everything needs to be in NgRX Store. If various parts of an app need to effect something like a component, then that should be in the store, otherwise if its isolated to the component itself, it isn't beneficial to go through all the work in adding it to the store.
7) Lazy load modules not required for initial root route 
8) Have a /shared folder for reusuable & self-contained modules
9) Reactive architecture that takes advantage of the the `async` pipe instead of opening observables as subscriptions

That's a pretty condensed & some-what fractured overview of this repo's Programming Style Guide. Detailed articles reviewing these topics and more are published at https://copynpaste.me.

Let's get started!

## Frontend Angular

This isn't for first-timers. If this is your first time building web applications, you're going to have to install a few things. I recommend following this [guide](https://angular.io/guide/setup-local) in getting the right version of NodeJS installed. Once Node is installed, [download the code](https://github.com/mrWh1te/ngLibrary/archive/master.zip) to a folder, then open that folder with a Command Line program such as Terminal, so you can follow along with entering each command:

After cloning or downloading the repo's code into a folder on your computer, install the dependencies with `npm i`:
```
$ npm i
```

If you haven't already, install Angular's CLI:
```
$ npm i -g @angular/cli
```

You'll need it to run the Angular Development server and build the Production version with AoT.

## Development server

To run a development server locally (so you can see the app running), run `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Storybook

This project has a separate [Storybook app](http://nglibrary-demo.netlify.com/storybook) that demonstrates all of the UI components. If you're new to Storybook, I recommend reading [the offical Introduction](https://storybook.js.org/docs/basics/introduction/).

Storybook is a powerful tool in the "UI first development" approach. Along with the useful pattern of separating smart logic from UI, with two different components, this method can be quite effective in reducing development time by iterating over the UI first then building the smart logic once, and only once.

## Books Seed

There is a `books-isbns.seed.json` which has an array of ISBN-10 strings representing all the books listed in the App. All of those ISBN's were copied from OpenLibrary.org. If you add or remove ISBN's from the Seed, you need to run the `build:e2e:fixtures` script like so:

```
$ npm run build:e2e:fixtures
```

That will build a new fixture file for the E2E testing that stubs the API response from OpenLibrary.org. Otherwise, tests may begin to fail.

Also, we don't currently have a Cache-Busting mechanism in place for when you add or remove ISBN's from the Seed (see #21). So for now, just Clear your Local Storage for this app. Specifically the `books` key is what you need to delete.

## Code Scaffolding

The main feature modules were separated into more modules based on type. The main three types are `views`, `widgets` and `data`. This is for our code extensibility value. By not grouping them all together in 1 module, we have greater code flexibility in adding and replacing components in various pages while only importing what we need (and reducing the possibility of circular dependencies). In the future, an article will be published on CopynPaste.me that dives into the reasoning behind the Scaffolding of this project, including the types of Modules.

## Build

Run `ng build` to build the project. The static build will be stored in the `dist/ngLibrary` directory. Use the `--prod` flag for a production build (with AOT). You can deploy that directory with many basic http-servers.

## Running Tests

Run `npm run test` to run both Unit & E2E tests.

## Running Only Unit-Tests

Run `npm run unit-tests` to run the [Jest](https://jestjs.io/) Unit-Tests. 

To run unit-tests in watch mode (re-runs the tests as soon as a test file changes), run `npm run unit-tests:watch`.

## Running Only End-To-End Tests

Run `npm run e2e` to execute the end-to-end tests via [Cypress](https://cypress.io). This requires the Development server running in the background.

To open the Cypress Dashboard app, run `npm run cypress`. If you haven't before, you should definitely try it out. It's pretty cool.

## Further Angular help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

The frontend project's initial commit was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.
