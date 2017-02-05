var app=angular.module('myApp',["ngRoute"])
app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'../html/homepage.html',
            controller:'home_controller'
        })
        .when('/goods_list',{
            templateUrl:'../html/goods_list.html',
            controller:'goods_list_controller'
        })
        .when('/cart',{
            templateUrl:'../html/cart.html',
            controller:'cart_controller'
        })
        .when('/pay',{
            templateUrl:'../html/pay.html',
            controller:'pay_controller'
        })
        .otherwise({redirectTo:'/'});
}
])