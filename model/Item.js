/**
 * Created by fanj on 16-9-19.
 */
function Item(item) {
    this.name=item.name;
    this.classification=item.classification;
    this.unit=item.unit;
    this.price=item.price;
}
function get_local() {
    return JSON.parse(localStorage.getItem("cart_goods"))||{};
}
function set_local(cart_goods) {
    localStorage.setItem("cart_goods",JSON.stringify(cart_goods));
}
Item.prototype.change_count=function(change_count) {
    var cart_goods=get_local();
    if(this.name in cart_goods){
        cart_goods[this.name].count=Number(cart_goods[this.name].count)+Number(change_count);
        if(cart_goods[this.name].count==0){
            delete (cart_goods[this.name]);
        }
    }
    else{
        cart_goods[this.name]={classification:this.classification,name:this.name, unit:this.unit, price:this.price,count:"1"};
    }
    set_local(cart_goods);
}
Item.prototype.change_input=function (now_count) {
    var cart_goods=get_local();
    if(now_count==0||now_count==""){
        cart_goods[this.name].count=1;
    }
    else{
        cart_goods[this.name].count=now_count;
    }
    set_local(cart_goods);
}