
var app = angular.module('myapp', []); 
app.controller('customersCtrl', function($scope, $http) 

	{ $http.get("https://jsonplaceholder.typicode.com/posts")
	     .then(function (response) 
	     	{
	     		console.log(response);
	     		$scope.names = response.data;
	     		$scope.orderByMe = function(x) {
        			$scope.myOrderBy = x;
   				 }
	     	});
	});

