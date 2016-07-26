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
-Choose a convention your team can agree on and stick with it. Better to be consistent than right.
-File structure should be self-documenting. It should clearly convey intention.
-Everything in UI Controller
-Everything else loads into UI View
-Services goes into Common Folder
-Services is incredibly overloaded...(constant, factory, service service)
-