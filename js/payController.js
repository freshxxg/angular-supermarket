/**
 * Created by fanj on 16-9-8.
 */
app.controller('pay_controller', function($scope,$location) {
    $scope.show_original_price=function (subtotal,original_price) {
        if(subtotal!=original_price){
            return true;
        }
    }
    $scope.cart_goods=_.values(JSON.parse(localStorage.getItem("cart_goods")));
    $scope.free_goods=Cart.get_promotiom_goods()||[];
    $scope.free=function () {
        if(free_goods!=[]){
            return true;
        }
    }
    $scope.save=Cart.get_save_money();
    $scope.total=Cart.get_total();
    $scope.sum_count=Cart.get_sum_count($location)||0;
    $scope.click_home=function(){
        $location.path('/');
    }
    $scope.click_cart=function () {
         $location.path('/cart');
    }
    $scope.click_list=function(){
        $location.path('/goods_list');
    }
    $scope.click_ok=function () {
        $location.path('/goods_list');
        localStorage.clear();
    }
});

/*
 app.controller('pay_controller', function($scope,$location) {
 $scope.click_home=function(){
 $location.path('/');
 }
 $scope.click_cart=function () {
 $location.path('/cart');
 }
 $scope.click_list=function(){
 $location.path('/goods_list');
 }
 var cart=new Cart();
 $scope.sum_count=cart.get_sum_count()||0;
 $scope.total=cart.get_total();
 $scope.show_original_price=function (free_count) {
 if(free_count!=0){
 return true;
 }
 }
 $scope.cart_goods=_.values(cart.cart_goods);
 $scope.save=cart.get_save_money();
 $scope.free_goods=cart.get_promotion_goods();
 if($scope.save!=0){
 $scope.free=true;
 }
 $scope.click_ok=function () {
 $location.path('/goods_list');
 localStorage.clear();
 }
 });

 */