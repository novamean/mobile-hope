// Login/Logout Specs

(function () {
    'use strict';

    describe('A user who is not logged in', function () {
        var navigateToLoginScreen = function () {
            var menuButton, loginButton;

            menuButton = element.all(by.css('[menu-toggle="left"]'));
            menuButton.get(1).click().then(function () {
                // wait for open-menu transition to complete
                browser.sleep(500);

                loginButton = element(by.id('login-button')).isDisplayed();
                loginButton.click().then(function () {
                    // wait for the open-modal transition to complete
                    browser.sleep(500);
                });
            });
        };

        beforeEach(function () {
            browser.get('/');
            navigateToLoginScreen();
        });

        it('should be able to navigate to the login screen', function () {
            var loginForm = element(by.css('[ng-submit]')),
                username = element(by.model('loginData.username')),
                password = element(by.model('loginData.password'));

            expect(loginForm.isPresent()).toBe(true);
            expect(username.isPresent()).toBe(true);
            expect(password.isPresent()).toBe(true);
        });

        it('should be able to log in with good credentials', function () {
            var username = element(by.model('loginData.username')),
                password = element(by.model('loginData.password')),
                submitButton = element(by.css('[type="submit"]'));

            username.sendKeys('lauren_ipsum');
            password.sendKeys('password');
            submitButton.click();
            // wait for response + animation
            browser.sleep(1500);

            // no login elements
            expect(element.all(by.model('longinData')).count()).toEqual(0);
            // TODO: Replace with a real assertion
        });

        // TODO: login functionality is required before these tests make sense
        // most common sad paths
        xit('should not be able to submit form with an empty username', function () {});
        xit('should not be able to submit form with an empty password', function () {});
        xit('should not be able to log in with a bad password', function () {});
        xit('should not be able to log in with an unknown username', function () {});
    });

    xdescribe('A logged in user', function () {
        it('should be able to log out', function () {});
    });
}());
