app.controller('goods_list_controller', function($scope,$location, $http) {
    $scope.sum_count=Cart.get_sum_count()||0;
    $scope.click_cart=function () {
        if(Cart.get_sum_count()||0 >0){
            $location.path('/cart');
        }
        else{
            alert("您的购物车还没有添加商品");
        }
    }
    $scope.click_home=function(){
        $location.path('/');
    }
    $http.get('../data/items.json').success(function (data) {
        $scope.items=data;
    })
    $scope.click_add_cart=function (item,change_count) {
        var one_goods=new Item(item);
        one_goods.change_count(change_count);
        Cart.get_pay_info();
        $scope.sum_count=Cart.get_sum_count()||0;
    }
})