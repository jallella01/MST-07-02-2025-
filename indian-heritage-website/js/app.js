/**
 * Indian Heritage App - Main Angular Application
 * This file initializes the AngularJS application and sets up routing
 */

// Initialize the AngularJS application
const app = angular.module('indianHeritageApp', ['ngRoute']);

// Configure routes
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // Configure routes
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'mainController'
        })
        .when('/gallery', {
            templateUrl: 'templates/gallery.html',
            controller: 'galleryController'
        })
        .when('/cultural-map', {
            templateUrl: 'templates/cultural-map.html',
            controller: 'mapController'
        })
        .when('/events', {
            templateUrl: 'templates/events.html',
            controller: 'eventsController'
        })
        .when('/traditions', {
            templateUrl: 'templates/traditions.html',
            controller: 'traditionsController'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
    
    // Use the HTML5 History API if available
    $locationProvider.hashPrefix('');
}]);

// Run block for global application settings
app.run(['$rootScope', function($rootScope) {
    // Set global application data
    $rootScope.appName = 'Indian Heritage';
    
    // Add a loading state that can be used across the app
    $rootScope.isLoading = false;
    
    // Helper function to scroll to top on route change
    $rootScope.$on('$routeChangeSuccess', function() {
        window.scrollTo(0, 0);
    });
    
    // Add animation classes to elements as they enter the viewport
    $rootScope.initAnimations = function() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    };
}]);

// Directive for handling scroll animations
app.directive('animateOnScroll', [function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.addClass('animate-on-scroll');
            
            // Initially hide the element
            element.css('opacity', '0');
            
            // Add the animation class when the element is in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        element.addClass('fade-in');
                        observer.unobserve(element[0]);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            observer.observe(element[0]);
        }
    };
}]);

// Directive for cultural patterns and border styling
app.directive('culturalPattern', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            // Add the appropriate pattern class based on the attribute value
            if (attrs.culturalPattern === 'background') {
                element.addClass('pattern-bg');
            } else if (attrs.culturalPattern === 'border') {
                element.addClass('cultural-border');
            }
        }
    };
}]);
