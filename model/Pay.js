
function Pay( inputs) {
    this.inputs = inputs;
}
Pay.click_confirm=function ($location) {
    $location.path('/goods_list');
    localStorage.clear();
}
Pay.prototype.show_free_info=function ($scope) {
    var save_momey=0;
    $scope.free_goods=[];
     _.each(this.inputs,function (i) {
         if((i.count-i.pay_count)>0){
             save_momey+=(i.count-i.pay_count)*i.price;
             $scope.free=true;
             i.free_count=i.count-i.pay_count;
             $scope.free_goods.push(i) ;
         }
     })
    $scope.save="节省："+save_momey+"(元)"
}
