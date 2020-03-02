# ngLibrary

[![Build Status](https://travis-ci.com/mrWh1te/ngLibrary.svg?branch=master)](https://travis-ci.com/mrWh1te/ngLibrary) 
[![Greenkeeper badge](https://badges.greenkeeper.io/mrWh1te/ngLibrary.svg)](https://greenkeeper.io/) 
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/mrWh1te/ngLibrary&style=flat)](https://mergify.io) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/c41968d0-1b4e-4a0d-91a3-bdfec3f32305/deploy-status)](https://app.netlify.com/sites/nglibrary-demo/deploys) 

<img src="https://repository-images.githubusercontent.com/189280438/c0b58800-a72d-11e9-9bc5-b725f0fc4e66" align="right" width="125" />

[App Demo](http://nglibrary-demo.netlify.com) - [App's Storybook](http://nglibrary-demo.netlify.com/storybook) - [App's Bundles' Analytical Report](http://nglibrary-demo.netlify.com/report.html)

"Reserve books" from your local library in this pretend Angular Single Page Application.

It uses robust architecture to breakdown complexity, found in Enterprise applications, with the best coding patterns established by community leaders in Angular, CDK, RxJS, Angular Flex-Layout, NgRX, Angular Material, and a little bit by me, [Michael Lage](https://github.com/mrWh1te).

Have fun!

> Complex applications are like children, in that they need a strong foundation and structure, to grow strong and healthy.

## User Experience

The application has a simple UX & UI to focus on the coding foundation. It has two pages:

### Home Page
Home page has two sections. One, a grid of the library's Inventory of available Books. Second, an area to see greater detail of a book selected in Inventory. You can add a selected book to your Basket. When you are ready to reserve your books, click the navigation icon in the top-right corner to head to the Checkout page.

### Checkout Page
Checkout page has three sections. One, a display of the Basket's contents. Second, a form to reserve the books for "pickup". Third, the form's submit button. This is a pretend app, therefore no actual reservations occur, after the form is submitted successfully.

> Note: The app uses OpenLibrary.org's API for Books' data ie title & cover images

# Architecture Overview
This project's coding patterns are guided from ngLibrary's core programming values:
1) Single Responsibility Principle (SRP)
    - separate concerns, reduce code risks, promote individual growth
2) Minimal Time to Interactive (TTI)
    - loading initial and new pages for smooth UX
3) Good Developer Experience (DX)
    - balance DRY & WET programming principles, don't reinvent the wheel

First, ngLibrary's coding patterns focuses on reducing high cost code risks while separating code into mangeable units, then applying efforts to minimize TTI, and finally approaching the code to maintain a positive developers' experience.

## Single Responsiblity Principle
This project's architecture is centered on the Single Responsiblity Principle as the way to break down app complexity into manageable single purposed pieces of code. Therefore, the application is a *composition* of single purposed units.

This reduces risks involved in project development, efforts in maintaining, developing, fixing features, while promoting flexibility in the application's growth. The application will not hinder the code's development, and the code will not falter the application's growth.

It's like in a formula one car race, the pit stop crew hastily replaces broken parts, to get their team back in the game as fast as possible! The car is a composite of replaceable parts.

### Scaffolding & Compositional Modules
When it comes to separating the application into parts, the first step is by domain, as in [Domain Driven Design (DDD)](https://en.wikipedia.org/wiki/Domain-driven_design). ngLibrary has the following domains: *book*, *books*, *cart* and *checkout* used in its initial layer of [application scaffolding](/src/app).

From there, ngLibrary breaks domains into these three main modules:

1) Data Module
    - Data & Business Logic
        - Data Reducers, Actions, Effects, Selectors, Models, Services
2) Component Module
    - Web Components both Smart & UI
        - Smart/Container Components, Dumb/UI Components
3) View Module
    - Pages, Views & their Routing
        - View Components, Routing Module

None of these are required for any one domain. It's on an "as needed basis" coding pattern to provide an additional layer of separation. The cross-module dependencies between them, follow a simple pattern too. View Modules import Component Modules. Component Modules import Data Modules. Data Modules import other Data Modules. 

View Modules are imported lazily or directly in `AppModule`.

### Component Layers for Composing an App Page
Setting aside the app's foundation (ie `AppModule`), ngLibrary follows a simple pattern to compose pages. It breaks down pages into reusable parts (components):

<center>Layout Component → View Component(s) → Smart Component(s) → UI Component(s)</center>

> Note: View Components may directly use UI Components. UI Components do *not* require Smart Components, for using.

#### Layout Components
The Layout is primarily used at the root module level (`AppModule`). The sole purpose of the Layout module is to provide layout components, as self-reliant templates, to *layout* designated areas (router-outlets) for View components. It's a necessary ingredient in the composition of an application page.

This level of separation makes it simpler to reuse & change an application's pages' templates.

#### View Components
View Components are simple components focused on their template's Smart & UI Components. This component separates pages, and parts of pages from features and routed pages, while providing structure for changing UI style. 

You can learn more about View Components with this official ngLibrary [tutorial on View Components](https://copynpaste.me/de-couple-pages-components-styles).

#### Smart Components
Smart Components are mostly used in View Components' templates. They are what bring to life, dynamic UI Components, by handling their events (output) and data (input). Smart Components' `templates` are embedded since they are simply their respective UI component.

For example, see ngLibrary's [ShoppingCartComponent](/src/app/cart/cart-components/components/shopping-cart/smart/shopping-cart.component.ts). It handles the data (which books are in the shopping cart) and the events (removing a book from the shopping cart) of the Shopping Cart UI Component.

### Minimal Time to Interactive
User Experience is crucial to every app. This project is no different. It's code focuses on minimizing Time to Interactive by managing factors that effect it, such as DOM rendering performance & bundle sizes. By following these patterns, the app's performance will yield a smooth User Experience.

### Minimal TTI Derived Patterns

#### UI Components
UI Components focus on single pieces of the User Interface. This could be a list, a list item, a logo, a comment, and so forth. They mostly have one or more Angular decorated Inputs and/or Outputs. The outputs are for handling events in the UI (ie User clicks something) and the inputs are providing data. This provides a single purpose component that focuses on the UI. 

The popular Smart/UI Components pattern has the added benefit of being compatible with the `onPush` Change Detection Strategy, for Reactive Architecture. This gives the application performance benefits with rendering the DOM, minimizing TTI in page specific features.

> Note: All components in this architecture will work with the `onPush` Change Detection Strategy so it's highly recommended its applied to each component, for fastest DOM rendering.

#### App Module
The root module (`AppModule`) is nothing more than the app's container, like a car's chassis, a basic skeleton, or floor to build the car on. It's a minimal piece that keeps the initial bundle as small as possible. Therefore, this container is a place for separated parts, to be assembled together in a composition of web site pages.

The root module imports only what is necessary to build the Layout of the home page. This minimizes initial Time to Interactive of the initial page load by keeping the initial bundle loaded, as small as possible.

Here are ngLibrary's [AppModule](/src/app/app.module.ts) and [AppComponent](/src/app/app.component.ts)! They are very simple, almost copypasta.

The main code of the App Module is in it's Routing Module ie [AppRoutingModule](/src/app/app-routing.module.ts). It's where the pages are composed with Layout and View components, using a popular coding pattern in the Angular community to break down an application into separate bundles for lazy loading. That minimizes Time to Interactive (TTI) of the initial page load by reducing the intial bundle size. Then to optimize the Time to Interactive (TTI) of subsequent page loads, a `preloadingStrategy` is added, to preload the additional bundles for the other pages, to make subsequent page loads even faster than the first.

> Note: [Guess.js](https://guess-js.github.io/) is an inspiring project that creates an app's preloading strategy based on collected Analytical data. Read the [Angular docs](https://guess-js.github.io/docs/angular) for more.

#### Core Module
The [Core Module](/src/app/core/core.module.ts) follows the popular pattern in the Angular community. It focuses on providing *global* services for the entire app. If you have an `Injectable` service, that all or many components across many pages will use, than it may be best to include it here. For example, the application's root state is often, setup here.

ngLibrary uses [NgRx](https://ngrx.io/) for its application state's needs. NgRx is an amazing module that works fantastically with Angular. There are other amazing application state solutions ([Akita](https://netbasal.gitbook.io/akita/), [NGXS](https://www.ngxs.io/), [MobX](https://github.com/mobxjs/mobx-angular), Multi-Directional with [RxJS](https://rxjs-dev.firebaseapp.com/), just to name a few) that can fit with this underlying architecture, but may require a few tweaks to the Data Modules. Either way, NgRx is often a go-to solution, when building Enterprise applications. It's based on the popular [Redux design pattern](https://redux.js.org/introduction/three-principles/) with the handy Redux DevTools ([Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) & [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/))!

To get the app started, `CoreModule` provides an empty root state. Therefore every app feature can be included in a lazily loaded bundle as a separated [NgRx store feature](https://ngrx.io/guide/store/reducers#register-feature-state). Therefore, the `CoreModule` focuses on an initial setup of a Store for running features, while providing any helper Store [Meta Reducers](https://ngrx.io/guide/store/metareducers), and all global services to the app.

#### Shared Folder
ngLibrary provides a single directory called `shared` for reusable separated modules that have components, pipes, services, grouped by unifying purpose that are helpful across multiple pages or features. This particular approach is helpful in minimizing bundles further, but with [Angular Ivy](https://angular.io/guide/ivy), has become less important, 

For an easier Developer Experience, all Shared functionality can exist under one roof, an unified `SharedModule`. It may lead to slightly bigger bundles, but the Developer Experience benefits may be worth it. Depends on your project and team's needs.

### Managing more Complexity
For some sites, as the number of pages grows, and many features are added, it becomes necessary to deal with the additional complexity in new ways. There are other layers of separation a project can add, to maintain the core values:

- Break down Domains into sub-folders for features
    - Shopping Cart, Checkout Form, etc
- Break down Component Modules into Sub-Component Modules
    - Modal-Components Module, a Card-Components Module, etc.

## Code Summary
Breaking down complexity into reusable simple patterns not only provides the benefits mentioned, but it makes the code predictability too. When navigating folders, things are carefully encapsulated, with clear purpose, making the journey to the code needed easier, given the predictability from the compositional organization.

The increase in code predictability decreases effort to maintain, grow, fix and adapt an application.

### Major 3rd Party Dependencies

In not re-inventing the wheel, ngLibrary uses these libraries in building its foundation:
- `@angular/cdk`
- `@angular/flex-layout`
- `@angular/material`
- `@ngrx/store`
- `@ngrx/effects`
- `@ngrx/entity`
- `ngrx-store-localstorage`

[Angular Flex-layout](https://github.com/angular/flex-layout) separates out the layout portion of CSS styling from the CSS code, with programmable directives in the HTML. [Angular Material](https://material.angular.io/) is used for the header toolbar and form. Finally, the drop-down for the Header Basket is powered by the [CDK's Overlay](https://material.angular.io/cdk/overlay/overview). 

## Storybook

Whether or not you're familiar with [Storybook](https://storybook.js.org/), you can [add a Storybook app](https://storybook.js.org/docs/guides/quick-start-guide/) to your project with ease, to demonstrate ALL of your UI components, in an interactive manner. Check out ngLibrary's [Storybook](nglibrary-demo.netlify.com/storybook/) for a live demo!

## Continuous Integration

Continuous Integration is setup with [TravisCI](https://travis-ci.com). It runs on pushed branches & pull requests. [Greenkeeper](https://greenkeeper.io/) runs in the background to update new dependencies automatically. [Mergify](https://mergify.io) automatically merges pull-requests labeled *automerge*, once all criteria is met (tests passing, etc).

## Continuous Deployment

Continuous Deployment is setup with [Netlify](https://netlify.com). It automatically deploys the latest PROD build from the `master` branch. See the live [Demo](http://nglibrary-demo.netlify.com). 

Netlify automatically deploys Pull-Request builds in various Staging sub-domains! Therefore, while reviewing code in a PR, devs can actually test that version of the code before merging.

## Local Development

After cloning or downloading the repo's code into a folder on your computer, install the dependencies with `npm i`:
```
$ npm i
```

If you haven't already, install Angular's CLI:
```
$ npm i -g @angular/cli
```

You'll need it to run the Angular Development server and build the Production version with AoT.

### Testing

E2E tests are built with [Cypress](https://cypress.io) and unit-tests are built with [Jest](https://jestjs.io/).

Run the tests with this command:
```
$ npm run test
```

### Development server

To run a development server locally (so you can see the app running), run:

```
$ ng serve
```
Then navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.

### Books Seed

There is a `books-isbns.seed.json` which has an array of ISBN-10 strings representing all the books listed in the App. All of those ISBN's were copied from OpenLibrary.org. If you add or remove ISBN's from the Seed, you need to run the `build:e2e:fixtures` script like so:

```
$ npm run build:e2e:fixtures
```

That will build a new fixture file for the E2E testing that stubs the API response from OpenLibrary.org. Otherwise, tests may begin to fail.

## Production Build

Run `ng build` to build the project. The static build will be stored in the `dist/ngLibrary` directory. Use the `--prod` flag for a production build (with AOT). You can deploy that directory with many basic http-servers.

## Further Angular help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

The frontend project's initial commit was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.
