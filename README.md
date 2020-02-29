# ngLibrary

[![Build Status](https://travis-ci.com/mrWh1te/ngLibrary.svg?branch=master)](https://travis-ci.com/mrWh1te/ngLibrary) 
[![Greenkeeper badge](https://badges.greenkeeper.io/mrWh1te/ngLibrary.svg)](https://greenkeeper.io/) 
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/mrWh1te/ngLibrary&style=flat)](https://mergify.io) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/c41968d0-1b4e-4a0d-91a3-bdfec3f32305/deploy-status)](https://app.netlify.com/sites/nglibrary-demo/deploys) 

<img src="https://repository-images.githubusercontent.com/189280438/c0b58800-a72d-11e9-9bc5-b725f0fc4e66" align="right" width="125" />

[App Demo](http://nglibrary-demo.netlify.com) - [App's Storybook](http://nglibrary-demo.netlify.com/storybook)

This simple app is a pretend gateway, to check out books from your local library.

It uses advanced architecture to breakdown complexity found in Enterprise applications, through the use of the best coding patterns established by community leaders in Angular, CDK, RxJS, Angular Flex-Layout, NgRX, Angular Material, and a tiny bit by [Michael Lage](https://github.com/mrWh1te).

Have fun!

This project focuses on providing a strong coding foundation to promote a healthy Single Page Application life cycle. Complex applications are like children, and in order for them to grow into healthy contributing members of society, we must provide them the necessary structure and boundaries to promote their individual growth.

The application has a simple UX & UI to focus on the coding foundation. It only has two pages:

## Home Page
Has two sections. One, a simple display of Inventory for available Books. Two, an area to see greater detail of a book selected in Inventory. You can add a selected book to your Basket. When you are ready to reserve your books, click the navigation icon in the top-right corner to head to the Checkout page.

## Checkout Page
Has three sections. One, a display of the Basket's contents. Two, a form to reserve the books for "pickup". Finally, three, the actual form submit button. This is a pretend app, therefore no actual reservations occur, no real API calls are made when submitting the form.

> Note: The app uses OpenLibrary.org's API for Books' data: title, cover images, etc.

# Overview
This project is guided by these core values:
1) Single Responsibility Principle (SRP)
    - separate concerns, reduce code risks, promote individual growth
2) Minimal Time to Interactive (TTI)
    - loading initial and new pages
3) Good Developer Experience (DX)
    - balance DRY & WET programming principles, don't reinvent the wheel

The coding patterns focus first on reducing high cost code risks, then focuses on minimizing Time to Interactive for a smooth User Experience, then reusing code (ie components) when applicable.

## Single Responsiblity Principle
This project favors *composition* in its application architecture. Therefore, the app is a composite of single purposed units of code, derived from separating the app's primary concerns. This approach breaks down the complexity of large scale Single Page Applications, into manageable bite size pieces.

This reduces risks involved in project development, efforts in maintaining, developing, fixing features, while promoting flexibility in the application's direction of growth. The application will not hinder the code's development, and the code will not falter the application's growth.

It's like in a formula one car race, the pit stop crew hastily replaces broken parts, to get their team back in the game as fast as possible! The car is a composite of replaceable parts.

### Scaffolding & Modules for Composing an App
When it comes to separating the application into parts, the first step is by domain, as in [Domain Driven Design (DDD)](https://en.wikipedia.org/wiki/Domain-driven_design). ngLibrary has the following domains: *book*, *books*, *cart* and *checkout* used in its initial layer of [application scaffolding](/src/app).

From there, ngLibrary separates further into smaller units by splitting domain code into the following main modules:

1) Data Module
    - Data & Business Logic ie
        - Data Reducers, Actions, Effects, Selectors, Models, Services
2) Component Module
    - Web Components both Smart & UI
        - Smart/Container Components, Dumb/UI Components
3) View Module
    - Components for Pages & Views with Routing
        - View Components, Routing Module

None of these are required for any one domain. It's on an "as needed basis" coding pattern to provide an additional layers of separation to give more individual room for each piece to grow. The cross-module dependencies between them, follow a simple pattern too. View Modules' View Components use HTML/CSS and Smart/UI Components, so they'll import the Component Modules. Component Modules import Smart components rely on Data and Business logic so they import the necessary Data Modules, depending on the data/business needs of their Components. Data Modules might import other Data Modules that its depends on. It's usually a single direction going up.

> Note: It can become necessary, as a domain grows with the app, to separate a Component Module into multiple Sub-Component Modules, ie: Modal-Components Module, a Card-Components Module, etc.

### Component Layers for Composing an App Page
Setting aside the root module (`AppModule`) and how's that composed, let's consider how ngLibrary composes its pages. It uses multiple components in layers:

<center>Layout Component → View Component → Smart Component(s) → UI Component(s)</center>

> Note: View Components can use UI Components directly, bypassing Smart Components. For example, a simple HTML based `BlockUIComponent` might not need a Smart Component.

#### Layout Components
The Layout is used at the root module level (`AppModule`). The composition of an app's pages is within the `Routes` of the [App Module's Routing Module](/src/app/app-routing.module.ts). The sole purpose of the Layout module is to provide the layout components that are full fledged templates, with designated areas (router-outlets) for View components.

This level of separation loosely couples your layout(s) with the rest of your application. Therefore it changing it for all pages, for a few, without disrupting the app, is affordable.

#### View Components
View Components are dedicated to staging areas of a web page. This separation enables projects to move Views across pages, while providing structure for separating UI styling, and dedicating space for the use of Smart & UI components. This increases code predictability, decreasing effort to maintain, grow, adapt the application.

You can learn more about View Components with this [official ngLibrary tutorial](https://copynpaste.me/de-couple-pages-components-styles) on them.

#### Smart Components
Smart Components are mostly used in View Components. They are what bring to life the dynamic UI Components, by handling their events (output) and providing necessary data (input). Smart Components `templates` are embedded, since they only declare their respective UI component. 

For example, see ngLibrary's [ShoppingCartComponent](/src/app/cart/cart-components/components/shopping-cart/smart/shopping-cart.component.ts).

#### UI Components
UI Components focus on pieces of the User's Interface. This could be a list, a list item, a logo, and so on so forth. They mostly have one more Angular decorated Inputs and Outputs. So if a User clicks some where in an UI component, the component can output that event for a Smart component to handle. This separates the business logic from the UI.

Whether or not you're familiar with [Storybook](https://storybook.js.org/), you can add a Storybook app to your project with ease, to demonstrate ALL of your UI components, in an interactive manner. It's worth checking out!

### Minimal Time to Interactive
User Experience is crucial to every app. So this project's code focuses on minimizing TTI by managing factors that effect app performance like bundle sizes. We want the app to be ready for the User to experience, to interact with, as soon as possible, every step of the way.

### Minimal TTI Derived Patterns
ngLibrary slightly favors minimal bundles for lowest TTI over the Developer Experience. The root module (`AppModule`) is nothing more than the app's container, like a car's chassis. It's a minimal approach to keep the initial load as fast as possible, while keeping doors open for application's change in direction. Therefore, this container is a place for separated pieces, to be put together in a composition of web site pages.

#### App Module
The root module focuses on importing only what is necessary to build the Layout of the home page. This minimizes initial TTI, while maintaining strong Developer Experience (DX) by not restraining what the foundational app module must do for the app. All those things it can do, are separated out into importable modules for composing.

Less is more when it comes to the root [AppComponent](/src/app/app.component.ts) and [AppModule](/src/app/app.module.ts)!

The non-boilerplate code of the App Module is it's Routing Module ie [AppRoutingModule](/src/app/app-routing.module.ts). That's where the pages are composed with Layout components and View components (lazily). The lazily loading pattern, popular in the Angular community, creates separate bundles for those pages. That minimizes TTI of the initial page load. Then to optimize the TTI of subsequent page loads, a `preloadingStrategy` is added. That minimizes TTI for subsequent page loads.

> Note: [Guess.js](https://guess-js.github.io/) is an inspiring project that creates an app's preloading strategy based on collected Analytical data. Read the [Angular docs](https://guess-js.github.io/docs/angular) for more.

#### Core Module
This module follows the popular pattern in the Angular community. It focuses on providing global services for the entire app. If you have an `Injectable` service, that all or many components across most pages, than it could be beneficial to include it here. For example, the application's root state could be setup here.

ngLibrary uses [NgRx](https://ngrx.io/) for its application state's needs. NgRx is an amazing module that works fantastically with Angular. There are other amazing application state solutions ([Akita](https://netbasal.gitbook.io/akita/), [NGXS](https://www.ngxs.io/), [MobX](https://github.com/mobxjs/mobx-angular), Multi-Directional with [RxJS](https://rxjs-dev.firebaseapp.com/) just to name a few) out there that will fit with the underlying architecture, but may require a few tweaks to the described Data Modules. Either way, NgRx is often a go-to solution, when building Enterprise applications. It's based on the popular [Redux design pattern](https://redux.js.org/introduction/three-principles/).

One of the patterns used in ngLibrary is of having an empty root state provided in `CoreModule`. Therefore every app feature is a separated [NgRx store feature](https://ngrx.io/guide/store/reducers#register-feature-state). They can be lazily loaded or part of the initial bundle. Therefore, the `CoreModule` focuses on an initial setup of a blank Store, to not restrict app growth, while providing any helper Store [Meta Reducers](https://ngrx.io/guide/store/metareducers), anything necessary for an app feature to run.

#### Shared Module
shared module (DX vs bundle sizes)

### Managing more Complexity
For sites with many pages with many features, ie the app has a wrapper to customize it on a country by country basis. For that kind of complexity, it's best to break each domains into further folders with an additional layer (on as needed basis) ie single features. Making code more singular purposed, smaller through division, will facilitate in breaking down project complexity into more easier bite size pieces.

WIP

This pattern can grow with the needs of the app, by adding an additional layer ie breaking Component Modules into Sub-Component Modules (ie Component-Dialog Modules). But preferably, if the app is going to be massive in pages & features, to include an additional layer of separation between Modules and Domains, ie Domain Features.

The app is running Angular v9.

These are the main dependencies of this app: `@angular/cdk`, `@angular/flex-layout`, `@angular/material`, `@ngrx/store`, `@ngrx/effects`, `@ngrx/entity`, `@ngrx/router-store`, `@ngrx/store-devtools`, and `ngrx-store-localstorage`. It follows a Single-Source of Truth for the application state by using NgRx's Store. It uses `flex-layout` to lay out components programmatically, de-coupling the layout portion of styling UI. Angular's `Material` was used for the form's inputs and main header toolbar. The drop-down for the Cart is powered by the CDK's `Overlay`. 

## CI & CD

This repo was setup to demonstrate a possible real Production Angular app. It has both Continuous Integration (CI) and Continuous Deployment (CD) setup. CI is setup with [Travis](https://travis-ci.com) and runs on pushed branches & pull requests. It runs both [Cypress](https://cypress.io) E2E tests and [Jest](https://jestjs.io/) Unit-Tests. Also, we have [Greenkeeper](https://greenkeeper.io/) running to stay up-to-date on new dependency releases. Finally, we have [Mergify](https://mergify.io) to automatically merge pull-requests labeled "automerge" once all criteria is met (no merge conflicts, merging against master branch & all tests pass).

CD is setup with [Netlify](https://netlify.com). It will automatically deploy the `master` branch PROD build to the [Demo](http://nglibrary-demo.netlify.com). Also, for pull-requests, it will automatically deploy on different sub-domains, the latest code from that branch. Therefore, while reviewing code in a PR, you can actually test it live before merging.

## Guide 

There are two core values that guide this repo.

1) Minimize TTI (Time to Interact)
2) Keep it easy to add and replace new pages & features (extensible code is easier to maintain)

To accomplish that, we follow the best practices & principles established by Angular community leaders and core contributors in regards to the dependencies we use. From that, we follow particular coding patterns to maintain our values. These include, but are not limited too: 

1) Separation of business logic and UI while leveraging the `onPush` change detection strategy
2) Multiple Types of Modules per Domain (Views/Routing, Components, Data, etc)
3) Unit & E2E testing
4) Single Responsibilty Principle in Services, Effects, Actions, basically everything in various scopes (strong code separation)
5) NgRx Store as Single Source of Truth in terms of upstream vs downstream logic
6) Not everything needs to be in NgRx Store. If various parts of an app need to effect something like a component, then that should be in the store, otherwise if its isolated to the component itself, it isn't beneficial to go through all the work in adding it to the store.
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

The main feature modules were separated into more modules based on type. The main three types are `views`, `components` and `data`. This is for our code extensibility value. By not grouping them all together in 1 module, we have greater code flexibility in adding and replacing components in various pages while only importing what we need (and reducing the possibility of circular dependencies). In the future, an article will be published on CopynPaste.me that dives into the reasoning behind the Scaffolding of this project, including the types of Modules.

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
