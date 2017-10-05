var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/home',{
        templateUrl:'views/home.html',
        controller:'appController'
    })
    .when('/directory',{
        templateUrl:'views/directory.html',
        controller:'appController'
    })
    .otherwise({
        redirectTo:'/home'
    });
}]);


myApp.directive('randomNinja',[function(){
    return {
        restrict:'E',
        scope:{
            ninjas:'=',
            title:'='
        },
        templateUrl:'views/random.html',
        transclude:true,
        controller:function($scope){
            $scope.random = Math.floor(Math.random()*4);
        }
    };
}]);


myApp.controller('appController',['$scope', '$http' , function($scope , $http){
    
    $scope.removeNinja  = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja,1);
    };
    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available:true
        });
        $scope.newninja.name=" ";
        $scope.newninja.belt=" ";
        $scope.newninja.rate=" ";
    };
$scope.ninjas = [{
    name: "Kakashi",
    belt: "red",
    rate: 50,
    available: true,
    thumb: "img/kakashi.jpg"
}, {
    name: "Itachi",
    belt: "blue",
    rate: 76,
    available: true,
    thumb: "img/itachi.png"
}, {
    name: "Neji",
    belt: "black",
    rate: 60,
    available: true,
    thumb: "img/neji.png"
}, {
    name: "Lee",
    belt: "orange",
    rate: 49,
    available: true,
    thumb: "img/lee.jpg"
}]



}]);
