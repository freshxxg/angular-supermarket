/**
 * Created by fanj on 16-9-1.
 */
app.controller('cart_controller', function($scope,$location) {
    $scope.show_original_price=function (subtotal,original_price) {
        if(subtotal!=original_price){
            return true;
        }
    }
    $scope.cart_goods=_.values(JSON.parse(localStorage.getItem("cart_goods")));
    $scope.sum_count=Cart.get_sum_count()||0;
    $scope.total=Cart.get_total();
    $scope.click_home=function(){
        $location.path('/');
    }
    $scope.click_list=function(){
        $location.path('/goods_list');
    }
    $scope.click_pay=function(){
        $location.path('/pay');
    }
    $scope.add_lest_count=function (item,change_count) {
        var one_goods=new Item(item);
        one_goods.change_count(change_count);
        Cart.get_pay_info();
        $scope.sum_count=Cart.get_sum_count()||0;
        $scope.total=Cart.get_total();
        $scope.cart_goods=_.values(JSON.parse(localStorage.getItem("cart_goods")));
    }
    $scope.enter_input=function (item) {
        var now_count=event.target.value;
        var one_item=new Item(item);
        one_item.change_input(now_count);
        Cart.get_pay_info();
        $scope.sum_count=Cart.get_sum_count()||0;
        $scope.total=Cart.get_total();
        $scope.cart_goods=_.values(JSON.parse(localStorage.getItem("cart_goods")));
    }
})