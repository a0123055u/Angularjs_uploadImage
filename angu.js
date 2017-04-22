var searchApp = angular.module('search',[]);


searchApp.controller('SimpleController',function($scope){

		$scope.customers=[
		{name:'John Smith',city:'Paris'},{name:'Thiru Valluvan',city:'Singapore'},{name:'Srinivasan',city:'LOS Angels'}
		];
    
    $scope.addCustomer = function(){
        $scope.customers.push({name:$scope.newCustomer.name,city:$scope.newCustomer.city})
    };
    
    
    
    searchApp.config(function($routeProvider){
    $routeProvider
    .when('/view1',
          {
        controller: 'SimpleController',
        templateUrl:'Partials/View1.html'
        })
    .when('/view2',
          {
        controller:'SimpleController',
           templateUrl:'Partials/View2.html'
            })
    .otherwise({redirectTo:'/View1'});
});
});



           
