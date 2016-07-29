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

CONTROLLER AS SYNTAX:
-$scope prototypically inherits from its parent scope all the way to $rootScope; not a Feature.
-Controller as was introduced to provide a more explicit syntax for declaring methods and properties.
-Angular creates a property on $scope and assigns the instance of the controller to it.
-ng-controller = "MainCtrl as main" results in $scope.main = new MainCtrl()
-Properties and Methods:
  -Properties on Controller are just JS Objects (Don't need to wrap it)
  -Ultimately it comes down to properly exposing properties and methods on the controller to the view
  -Plenty of built-in directives to make interacting with the view a lot easier.
  -A Controller should never know about the view it controls.

NGMODEL & NGSUBMIT:
-For example in a Form:
  -Create name="" in <form
    -Example being name="main.userForm" ng-submit="main.submitUser(main.user)"
      -In script.js:
        -main.submitUser = function(user) {
          main.currentUser = user;
        }
    -Bind it to View to see state.    
  -Then for ngModel:
    -ng-model="main.user.name"
-Can have required="true"

NG-REPEAT & NG-CLICK:
-For collections
-ng-repeat="item in main.items" ng-click="main.setCurrentItem"
-Scope is very good about maintaining context
  -Essentially creates a child scope for every item in the collection
-With Angular 2, scope is going away. By reducing dependency to explicitly call scope helps us get use to it.
-Controller as create this.

CHALLENGE 2:
-Using Filters come with a performance hit, esp if complex objects.
  -Goes through everything...
-If you define custom filter in Controller and thus can optimize (Very much like a service)

CHALLENGE 2 SOLUTION:
-SuperTab
-In real life is ui-router, create edit and create state.
  -However don't jump too far in deep end.
-isValid = $valid

~SERVICES~

SERVICES:
-Provide common functionality across your entire application.
-Services are essentially the Model in the MVW.
-Keep your Controllers skinny so that your Models can be fat.
-Term 'service' is totally overloaded.
-Services can consume services.
-Persistent across entire application. Great for persistent data.
-Okay to start in a controller and promote to a service as necessary.

TESTING SERVICES:
-Service instantiated using constructor function hence you get this.
-Factory is just an object with properties.
-Model actually communicates with server.
-Use 'NAMEModel' as a naming convention.
-If performing just common functionality call it 'NAMEService'

PROMISES:
-Allow us to perform asynchronous operations.
-Basically inversion of using callbacks.
-Then, Catch, Finally.
-Built into some services but you can manually control promises via the $q service.
-When completed, promise is solved.
-Metaphor: When you go to a restaurant, waiting for table and get a beeper. You know when the beeper goes off, you know something will happen. When it does, you exchange the beeper for a table. It's a beeper.
-Instead of using then and success.
-Also can use update (has to do with progress indicator)

$HTTP SERVICE
-Copy ...
-Enables communication with remote servers over the HTTP protocol.
  -Only need to know endpoints.
-Has convenience methods that are modeled after the RESTful verbs.
-Built on top of the promise api.
-Use constant service to extract endpoint out.
  -.constant('ENDPOINT_URI', 'items.json')
-But then extracts the data only
  -function extract(result){
    return result.data;
  }
  -function getItems() {
    return $http.get(ENDPOINT_URI).then(extract);
  }
-If you want to cache, would use $q
-Anytime you need to transform or do some business logic than use $q

CRUD EXAMPLE:

CHALLENGE 3:


CHALLENGE 3 SOLUTION:
-First in Model:
  -service.all = function() {
    var deferred = $q.defer;

    deferred.resolve(boards);

    return deferred.promise;
  }
-Endpoint and payload. Matching up with verb and promises.
-Another branch for more complex

~DIRECTIVES~

DIRECTIVES:
-Allows us to express custom functionality through custom HTML tags and attributes
-Essentially take semantic markup to a whole new level; turn our HTML in a DSL.
-Trying to be a shim for the future.
-Not the best API and learned lesson for Angular 2.
-In the case of ng-animations you can do CSS defined directives.
-Link to DOM, Controller is , DDO is Directive Definition Object
-Directives are like mini Applications
-Example:
  -In index.html
  <div item ng-repeat="item in main.items"></div>
  -In script.js
  .directive('item', function(){
      return {
        replace: true,
        templateURL: 'item.tmpl.html'
      }
  })
-Make sure you do snake-case

LINK:
-Handy for DOM manipulation

CONTROLLER FUNCTION:
-Angular 2 wants to support web components

CHALLENGE 4:

CHALLENGE 4 SOLUTION:

ISOLATED SCOPE:
-This is how ng-click works.

~ROUTING~

ROUTES AND STATES:
-Ui-router allows us to have named views as well as the ability to nest views.
-Application becomes state machine; we can update the portion we want to specifically.
-$stateParams Service sends parameters between states
  -Activate a state through three different mechanisms: navigate to URL, the ui-ref directive or the $state service

THE $STATEPARAMS SERVICE:
-$state Service allows us to navigate to states as well as pass parameters along.
-Has a useful API for getting information about the configuration of the state you are currently in.

CHALLENGE 5:

CHALLENGE 5 SOLUTION:

~WRAP-UP~

APPLYING WHAT YOU'VE LEARNED:
-By separating controllers and views, you can have one controller control multiple views.
-Check out Ionic (For IG clone)

RESOURCES:
-How would put a build process in place. Automation is key.
-Grunt or or Gulp or Webpack.
-Then it comes down resource management, to Browserify or Require.JS.
-Will integrate to Master with Tutorials.
-How to prevent controller scope creep. Recommends using iffys but not needed according to teacher.
-Ionic is amazing. Repo.
-How would you handle routing using ui-router of something large. Look at architecture and understand what is in each folder. Separate features into sub-modules. Within each module manage state definitions for each. Maybe look at a service to handle all of this.
-Server side routing not needed anymore.
-What about SEO? Isomorphic JS
-Use Word Press for Static Applications.
-Bower is a dumb animal. Project File gets too big. Use CDN. Use NPM quite often. 
