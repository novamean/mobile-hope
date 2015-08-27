// Protractor configuration
//
// See the reference configuration for more options:
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

(function () {
    'use strict';

    exports.config = {
        // The timeout for each script run on the browser. This should be longer
        // than the maximum time your application needs to stabilize between tasks.
        allScriptsTimeout: 110000,

        // A base URL for your application under test. Calls to protractor.get()
        // with relative paths will be prepended with this.
        baseUrl: 'http://localhost:8100',

        // Local path to standalone selenium server for gulp tasks. For more
        // information, see:
        // https://github.com/mllrsohn/gulp-protractor#protractor-webdriver
        seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

        // list of files / patterns to load in the browser
        specs: [
            'e2e/**/*.spec.js'
        ],

        // Patterns to exclude.
        exclude: [],

        // ----- Capabilities to be passed to the webdriver instance ----
        //
        // For a full list of available capabilities, see
        // https://code.google.com/p/selenium/wiki/DesiredCapabilities
        // and
        // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
        capabilities: {
            'browserName': 'chrome'
        },

        // ----- The test framework -----
        //
        // Jasmine and Cucumber are fully supported as a test and assertion framework.
        // Mocha has limited beta support. You will need to include your own
        // assertion framework if working with mocha.
        framework: 'jasmine',
        jasmineNodeOpts: {
            showColors: true,
            defaultTimeoutInterval: 30000,
            isVerbose: true,
        },

        // ----- Setup and teardown -----
        //
        // Any actions to be taken before/after tests should be listed here.
        onPrepare: function () {
            // iPhone 6+ screen size
            var width = 414, height = 628;
            browser.driver.manage().window().setSize(width, height);
            return;
        },
    };
}());
