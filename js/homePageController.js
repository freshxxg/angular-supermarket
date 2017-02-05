/**
 * Created by fanj on 16-8-24.
 */
app.controller('home_controller', function($scope,$location) {
    $scope.sum_count=Cart.get_sum_count()||0;
    $scope.click_cart=function () {
        if(Cart.get_sum_count()||0 >0){
            $location.path('/cart');
        }
        else{
            alert("您的购物车还没有添加商品");
        }
    }
    $scope.click_list=function(){
        $location.path('/goods_list');
    }
});