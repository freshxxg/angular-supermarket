/**
 * Created by fanj on 16-8-31.
 */
function Cart(item) {
    this.name=item.name;
}
function get_local() {
    return JSON.parse(localStorage.getItem("cart_goods"))||{};
}
function set_local(cart_goods) {
    localStorage.setItem("cart_goods",JSON.stringify(cart_goods));
}
Cart.get_sum_count=function (){
    var cart_goods=get_local()
    var sum_count=0;
    _.each(cart_goods,function (one_goods) {
        sum_count+=Number(one_goods.count);
    });
    return sum_count;
}

Cart.get_pay_info=function () {
    var names=["可口可乐","雪碧","方便面"];
    var cart_goods=get_local();
        _.each(cart_goods,function (item) {
        if(names.indexOf(item.name)!=-1 && item.count>=3) {
            item.free_count=Math.floor(item.count/3);;
            item.subtotal=(item.count-item.free_count)*item.price;
            item.original_price=item.count*item.price;
        }
        else{
            item.free_count=0;
            item.subtotal=item.count*item.price;
            item.original_price=item.count*item.price;
        }
    })
    set_local(cart_goods);
}
Cart.get_promotiom_goods=function () {
    var cart_goods=get_local();
    var free_goods=[];
    _.each(cart_goods,function (item) {
        if(item.subtotal!=item.original_price){
            free_goods.push(item);
        }
    })
    return free_goods;
}
Cart.get_total=function () {
    var cart_goods=get_local();
    var total=0;
    _.each(cart_goods,function (one_goods) {
        total+=one_goods.subtotal;
    })
    return total;
}
Cart.get_save_money=function () {
    var save_momey=0;
    var cart_goods=get_local();
    _.each(cart_goods,function (one_goods) {
        save_momey+=one_goods.original_price-one_goods.subtotal;
    })
    return save_momey;
}

