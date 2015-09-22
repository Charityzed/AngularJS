( function ( angular ) {
	'use strict';
	var myApp=angular.module('menu', ['ngRoute']);
    myApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/home',{
            templateUrl:'home.html',
            controller: 'HomeController'
        })
        .when('/gallery',{
            templateUrl:'gallery.html',
            controller: 'galleryController'
        })
        .when('/bid',{
            templateUrl:'bid.html',
            controller: 'bidController'
        });
        myApp.controller('bidController', function($scope){
          $scope.message="Hello You will bid"; 
            $scope.user=null;
            
        });
        
    }]);

	myApp.controller('MenuContaroller',['$scope', function($scope){

	$scope.Main='DOWNLOADS';
	$scope.About="TOPICALS";
	$scope.Gallery="RESEARCH"
	

	
	$scope.English=function() {
	$scope.Main="DOWNLOADS";
	$scope.About="TOPICALS";
	$scope.Gallery="RESEARCH"
	};

	$scope.Swahili=function(){
	$scope.Main="TOA KWA MTANDAO";
	$scope.About="MADA";
	$scope.Gallery="UTAFITI"
};

	$scope.French=function(){
	$scope.Main="TELECHANGER";
	$scope.About="TOPIQUES";
	$scope.Gallery="RECHERCHE"
	};
	}]);
    
	myApp.controller('ListController',function($scope) {
	$scope.reports=[
	{ 	name:'Cyton Weekly Report #20',
		Author:'Cytonn research Team',
		date:"20/June/2015"


	},
	{ 	name:'Cyton Weekly Report #24',
		Author:'Cytonn research Team',
		date:"20/July/2015"


	},
	{ 	name:'Cyton Weekly Report #27',
		Author:'Cytonn research Team',
		date:"20/August/2015"


	},
	{ 	name:'Cyton Weekly Report #31',
		Author:'Cytonn research Team',
		date:"20/Sepembet/2015"


	},
	{ 	name:'Cyton Monthly Report #35',
		Author:'Cytonn research Team',
		date:"12/September/2015"


	},
	{ 	name:'Cyton First Half Report 2015 #36',
		Author:'Cytonn research Team',
		date:"21//2015"


	}
	];
	
} );
    
} ) ( window.angular )