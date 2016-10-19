(function() {
    'use strict';

    
       var app= angular.module('app',  ['ui.router']);
        app.config(function($stateProvider,$urlRouterProvider){

	//For any unmacthed url , redirect to /state1
	$urlRouterProvider.otherwise('/movie1');
	// now set up the states 
	$stateProvider	
	.state('movie1',{
		url:"/movie1",
		templateUrl:'app/partials/movie1.html',
		controller:'MovieController',
		controllerAs:'vm'
	

	})
	.state('movie2',{
		url:"/movie2/ :movieDetails",
		templateUrl: 'app/partials/movie2.html',
		controller : 'MovieDetailController',
		controllerAs : 'detail',
			
	});
});

})();
// CW, EP, BS, VZ