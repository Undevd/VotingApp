angular.module('app', ['ngResource', 'ngRoute', 'as.sortable']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        
        .when('/vote/cast-vote', {templateUrl: '/partials/vote/cast-vote', controller: "mvVoteCtrl", title: 'Create Vote'})
        .when('/vote/display-results', {templateUrl: '/partials/vote/display-results', controller: "mvResultCtrl", title: 'View Results'})

        .otherwise({redirectTo: '/404'});
});

angular.module('app').run(function($rootScope, $location) {

    //Set the default title
    var defaultTitle = 'Voting App';

    //Set the title in the root scope
    $rootScope.title = defaultTitle;

    //When the route change is starting
    $rootScope.$on('$routeChangeStart', function(event, current, previous) {
    });

    //When the route change has finished successfully
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {

        //If the current route exists and it has a title
        if (current.$$route && current.$$route.title) {

            //Append the route title after the default title
            $rootScope.title = defaultTitle + ': ' + current.$$route.title;
        }
        else {
            
            //Otherwise, set the title to the default
            $rootScope.title = defaultTitle;
        }
    });
});