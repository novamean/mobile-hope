Mobile Hope
===========

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
