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
-
