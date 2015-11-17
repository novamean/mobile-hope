Mobile Hope
===========
PULL REQUEST DOCUMENTATION AT END 

[![Slack Badge](http://novamean-slack.herokuapp.com/badge.svg)][slack]
[slack]: http://novamean-slack.herokuapp.com

Mobile Hope is an mobile app to manage the operations of Mobile Hope in Leesburg, VA.  [The Mobile Hope program](http://www.mobilehopeloudoun.org/) is designed to support the needs of precariously housed, homeless and at risk youth living in Loudon County. 


Table of contents
-----------------
  
  * [Technologies](#technologies)
  * [Project Structure](#project-structure)
  * [Contributing](#contributing)
  
Technologies
------------

* MEAN Stack: [MongoDB][mongo], [Express.js][express], [Angular.js][angular], [Node.js][node]
* [Ionic Framework][ionic]: front-end SDK for developing mobile applications, built on [Cordova][cordova]
* [Gulp][gulp]: task runner
* [AWS Cloud][mongo-aws]: MongoDB in the cloud!

[mongo]:    https://www.mongodb.org/
[express]:  http://expressjs.com/
[angular]:  https://angularjs.org/
[node]:     http://nodejs.org
[ionic]:    http://ionicframework.com/
[cordova]:  https://cordova.apache.org/
[gulp]:     http://gulpjs.com/
[mongo-aws]: https://s3.amazonaws.com/quickstart-reference/mongodb/latest/doc/MongoDB_on_the_AWS_Cloud.pdf

### Testing

* Front-end testing: TBD
* [Protractor](https://angular.github.io/protractor/#/): end-to-end test framework for Angular.js (e2e)
* [Mocha](https://mochajs.org/): javascript bdd testing framework (server)
* [Should](https://shouldjs.github.io/): expressive assertion library (server)
* [Supertest](https://github.com/visionmedia/supertest): testing library for node.js HTTP servers (server)

Project Structure
-----------------

Here is the basic annotated structure of this application:

```
.
├── Feature\ Research
├── LICENSE
├── README.md
├── bower.json                manages the production dependencies of the app
├── config.xml                apache cordova configuration
├── gulpfile.js               defines the application tasks (e.g. gulp watch, gulp test, etc.)
├── hooks/                    contains scripts used to customize cordova commands
├── ionic.project             ionic project configuration
├── node_modules/
├── notes/
├── package.json              defines application identification and dependencies (npm)
├── scss/                     contains uncompiled scss for the client app (compiled to ./www/css)
├── server/                   contains the express server code
└── www/                      contains the client-side application code
```


Contributing
------------

We ♥ contributers!

If you want to contribute to this project, claim an issue
on the Issues tab, fork the project, and start working! When your feature
or bugfix is ready, create a merge request back upstream and we'll
take a look!

### Communication

We manage our issues/planning through GitHub Issues. To come to one of
the group meetings, check out our [Meetup schedule][novamean].
To join the conversation, join our team [Slack channel][novamean-slack].

[novamean]:       http://www.meetup.com/NOVA-MEAN/
[novamean-slack]: http://novamean-slack.herokuapp.com/

### Guidelines

In general, try to keep your code neat and readable, make sure the test suite
passes before creating a pull request, and we'd appreciate test coverage for
new features/bug fixes!


Issue 15 - Story - List of Clothing Items
------------------------------------
 PULL REQUEST 11/16/2015
 
 - USES A DATASERVICE (Factory) From my reading, factorties seem preferred.
 - SERVER - MH1Server is an node express server to connect to a MongoLab backend.
 
 To create categorries db in Mongo Shell
 
 > db.categories.save([{categoryTitle: 'Clothing', itemId: 1},
             {categoryTitle: 'Food', itemId: 2},
             {categoryTitle: 'School Supplies', itemId: 3}])
  
    - Data structure is:
        Categories:
        [{"_id":"5608785be4b0830d6c8021c5","itemId":"1","categoryTitle":"Clothing","created":"2015-11-17T02:34:42.471Z"},
        {"_id":"560878c2e4b0830d6c8021c9","itemId":"2","categoryTitle":"Food","created":"2015-11-17T02:34:42.476Z"},
        {"_id":"561856c2e4b060b59d7c6cd4","itemId":"3","categoryTitle":"School Supplies","created":"2015-11-17T02:34:42.476Z"}]
        
        Items:  Created using Mocaroo
        [{"_id":"56105239e4b09f9838bc0b18","itemId":1,"item":"Shirt","itemColor":"","itemCondition":"","itemSize":"XL","itemTitle":"","created":"2015-11-17T02:36:55.380Z"},
        {"_id":"5610526ce4b09f9838bc0b23","itemId":1,"item":"Shirt","itemColor":"","itemCondition":"","itemSize":"M","itemTitle":"","created":"2015-11-17T02:36:55.381Z"},
        {"_id":"561855b7e4b04099f9014114","itemId":2,"item":"Tomato Sauce","itemColor":"","itemCondition":"","itemSize":"8 ozs.","itemTitle":"","created":"2015-11-17T02:36:55.381Z"},
        {"_id":"5618561fe4b060b59d7c6cc9","itemId":1,"item":"Slacks","itemColor":"","itemCondition":"","itemSize":"36","itemTitle":"","created":"2015-11-17T02:36:55.381Z"},
        {"_id":"56185641e4b060b59d7c6cce","itemId":1,"item":"Suit","itemColor":"","itemCondition":"","itemSize":"43L","itemTitle":"","created":"2015-11-17T02:36:55.381Z"},
        {"_id":"56185669e4b060b59d7c6cd0","itemId":1,"item":"Hoodie","size":"XL","itemColor":"","itemCondition":"","itemSize":"","itemTitle":"","created":"2015-11-17T02:36:55.381Z"},
        {"_id":"564786dfe4b04a6f73355406","itemId":1,"item":"rhoncus mauris","itemColor":"Goldenrod","itemCondition":"Fair","itemSize":"2XL","itemTitle":"","created":"2015-11-17T02:36:55.382Z"},
        {"_id":"56478d94e4b04a6f73355466","itemId":1,"item":"vulputate","itemColor":"Teal","itemCondition":"NIB","itemSize":"M","itemTitle":"","created":"2015-11-17T02:36:55.382Z"},
        {"_id":"56478f2fe4b04a6f73355483","itemId":3,"item":"faucibus","itemColor":"Khaki","itemCondition":"Excellent","itemSize":"L","itemTitle":"","created":"2015-11-17T02:36:55.382Z"},
        {"_id":"56478f75e4b04a6f7335548e","itemId":2,"item":"cursus","itemColor":"Khaki","itemCondition":"Good","itemSize":"S","itemTitle":"","created":"2015-11-17T02:36:55.382Z"}]
    
    - Use ionic serve to start both the ionic project and the backend server
        - ionic.project includes a gulp start-up task to start backend server
        - gulp startuptask uses gulp ('server:start') for this server
        -  project uses node v 4.  node-sass had to be replaced with node-sass@2

ionic serve to run
gulp test to run tests

karma/jasmine tests included.  
Install Karma and Jasmine to use.

Some are failing and have been skipped.
Would like feedback on why data is undefined.