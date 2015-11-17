Mobile Hope Express Server
==========================
[![Slack Badge](http://novamean-slack.herokuapp.com/badge.svg)][slack]
[slack]: http://novamean-slack.herokuapp.com

This directory contains the backend express app for Mobile Hope.



* **`app.js`** - This is the main application file for our server.

* **`api/`** - The API folder contains the logic for each endpoint
  of this application. For example, the files stored in the folder
  `server/api/users` contain logic relating to the `/api/users` endpoint.
  For more information about the Model-View-Controller pattern,
  [click here (Wikipedia on MVC)][wiki-mvc].

  [wiki-mvc]: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

  * `index.js` - This contains the specific routes for the endpoint.
      Routes in this application follow the following RESTful conventions:

      ```
      GET		/api/<endpoint>/		-> index
      GET		/api/<endpoint>/:id		-> show
      POST	/api/<endpoint>/		-> create
      PATCH	/api/<endpoint>/:id		-> update
      DELETE	/api/<endpoint>/:id		-> destroy
      ```
  * `<endpoint>.spec.js` - Unit tests for the endpoint. See
      [Technologies](#technologies) for more details on the testing framework.

  * `<endpoint>.controller.js` - The controller is responsible for
      handling user input and responses. The controller file will export
      methods corresponding to the endpoint routes (typically `#index()`,
      `#show()`, `#create()`, `#update()`, and `#destroy()`)

  * `<endpoint>.model.js` - The model handles the business logic for an
      endpoint, encapsulating the "real-world" behavior and contstrains on
      the object. This includes responsibilities such as persistance,
      validation, and object behavior.

* **`config/*`** - This directory contains configuration for the app.
    Application-wide configuration is stored in the `/environment`, which
    contains a base file (`index.js`) and environment-specific config files
    for development, test, and production.

    Other configuration files (such as `express.js`) are stored in the
    `config/` root.

* **`routes.js`** - This file serves as a manifest for the api routes. It
    imports the specific endpoint resources from each `/api/*/index.js` file.
    It is also responsible for error handling and redirection.

* **`README.md`** - This is the current document, responsible for providing
    some basic application documentation and quick-start instructions.




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
