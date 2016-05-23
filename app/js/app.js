

// Declare app level module which depends on views, and components
var form = angular.module('form', ['ui.router', 'ngMaterial', 'ngMessages', 'ngStorage'])

    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }])

    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('pink')
    })

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',  function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/welcome');

        var baseUrl = 'http://localhost:8080/';

        $stateProvider
            .state('form', {
                url: '/',
                abstract: true,
                templateUrl: baseUrl + 'views/form.html',
                controller: 'formController as vm'
            })
            .state('form.welcome', {
                url: 'welcome',
                views: {
                    'content@form': {
                        templateUrl: baseUrl + 'views/welcome.html'
                    }
                },
                data:
                {
                    currentStep: '0'
                }
            })
            .state('form.step-one', {
                url: 'step-one',
                views: {
                    'content@form': {
                        templateUrl: baseUrl + 'views/step-one.html'
                    }
                },
                data:
                {
                    currentStep: '1'
                }
            })
            .state('form.step-two', {
                url: 'step-two',
                views: {
                    'content@form': {
                        templateUrl: baseUrl + 'views/step-two.html'
                    }
                },
                data:
                {
                    currentStep: '2'
                }
            })
            .state('form.step-three', {
                url: 'step-three',
                views: {
                    'content@form': {
                        templateUrl: baseUrl + 'views/step-three.html'
                    }
                },
                data:
                {
                    currentStep: '3'
                }
            })
            .state('form.thanks', {
                url: 'thanks',
                views: {
                    'content@form': {
                        templateUrl: baseUrl + 'views/thanks.html'
                    }
                },
                data:
                {
                    currentStep: '4'
                }
            })

    }]);
