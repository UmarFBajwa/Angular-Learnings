BIG PICTURE OF ANGULAR:

-Subset of Angular components
-Module -> Config -> Routes (Designed to setup context for the View and Controller)
-When you setup a Route (State definition), you are essentially pointing to View and Controller
-To extend View, create Directive
-To extend Controller, create Service
-View and Controller together give you Scope
-Very powerful, esoteric things to get lost in the weeds

-Simplified World View
-Everything revoles around View and Controller
-Module and config blocks setup the context for the View and Controller

FILE STRUCTURE:
-Organize your application by Feature
  -Everything in UI Controller
  -Everything else loads into UI View
  -Services goes into Common Folder
  -Services is incredibly overloaded...(constant, factory, service service)
    -Common vs Main
      -Common: Functionality shared across Features (Modules, Services, Directives), but not particular to a specific View
      -Main: Wrapper around UI View, etc.
  -Model: Anything communicating with a service while holding/managing a State
    -Communicate with server and manage a particular Data Model
-Choose a convention your team can agree on and stick with it. Better to be consistent than right.
-File structure should be self-documenting. It should clearly convey intention.
    -Through naming conventions

MODULES and ROUTES:
-Execution is better than philosophy
  -Don't program to program; create to build things people love and use
-The Module:
  -Angular Modules are logical containers to organize your code.
  -If you get proper architecture, modules will oftentimes mirror your file structure if done correctly.
  -Modules promote re-usability as well as an a la carte development experience.
    -Ng-route vs ui-router
-Routes allow us to directly navigate to a specific state within our application
  -Think of them as highways.
  -Primer is not in core and latter is available
  -Choose what to use as it fits needs
  -ngRoute is okay for simple routing
    -Can only use one time in your application
      -Can have name views nor nest your views (1 to 1 relationship)
  -ui-router is exponentially more powerful, turns application into a state machine
    -States not controlled by URL
      -If you click on a button and want to refresh portion of a screen
  -Hence why Angular 2 is completely redoing Routing
  -What if you want to use Express for Routing?
    -Server-side
  -ui-router is a library

NOTERIOUS ROUTES:
-Instantiate ng-app on HTML Tag
  -Do not put in the HEAD Tag
-Has modules including 'ui.router', 'ngAnimate', 'firebase', 'noterious.common', 'gridster'
-For state, have resolve, requires authorization
-If something goes wrong, get redirected to login
-What do I want to go navigate to and what the template and controller I'd like to us.
-Testing:

BASIC ROUTING EXAMPLE:
-Use ui-sref to get substate

TESTING:
-Extremely well suited for testing because state is separated from the DOM
-Unit testing is done with Karma (when developing Feature)
-E2E testing done with Protractor (when Feature complete, make sure it works in relation with entire application)
-People used to jQuery, attaching listeners to DOM, and updates DOM accordingly
-With Angular separating the declarative markup and imperative logic aka easier to test
-The majority of pain when testing in Angular will come from ceremony and not actual testing, aka setting up Karma and whatever you want to test
-When you have state or route change, you lose state. ng-view or ui-view will redraw template. You lose state. If you need anything to persist, you need to put into a service or a model.
-Services are independent on Routes. Inject it into Controller when need it (View Model for that View)(Services are the big M)
-You can put things into local storage. For example if you have a O-Auth, you would need to store that.
  -Stored last route into local storage (AngularStorage is a great library)
  -Identity Management is really hard so export it when you can.
  -$cookie is not that great.

CHALLENGE 1:
-Checkout 01-architecture branch
-Create the file structure for the boards Feature
-Create a boards route
-Write a unit test for the boards route
-For Large Teams have additional folders like Controller etc within each Feature
  -Helpful to for Future Team Members
  -Organized by High Level and separated by Type
  -Alternatively you can nest Features
-How do you test nested state?
-PhantomJS is a web browser without a GUI (Useful because of Javascript API)
  -Tool for Unit testing
  -Shows results in command line. Mocha and Casper are based on it.

~VIEWS AND CONTROLLERS~

VIEWS:
-Views are the DOM after it has been compiled by Angular
-Angular uses templating to encapsulate complex functionality into simple, declarative markup
-The view is primarily responsible for two tasks: displaying model state and conveying interactions

CONTROLLERS:
-Responsible for constructing and maintaining the model for a view to interact with.
-Should be very lightweight and have just enough functionality to satisfy the view.
-Ideally a controller would consume data from a service and then delegate any responsibility to manipulate that data back to that service.
  -Defer any business logic
  -Sort of an Air Traffic Controller
