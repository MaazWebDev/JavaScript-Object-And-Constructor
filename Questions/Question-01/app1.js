var itemArray = [
    {
        name:"Juice",
        price:"50",
        quantity:"3",
        totalPrice:function(){
            return this.price * this.quantity;
        }
    },
    {
        name:"Cookies",
        price:"30",
        quantity:"6",
        totalPrice:function(){
            return this.price * this.quantity;
        }
    },
    {
        name:"Pizza",
        price:"200",
        quantity:"9",
        totalPrice:function(){
            return this.price * this.quantity;
        }
    },
    {
        name:"Burger",
        price:"100",
        quantity:"12",
        totalPrice:function(){
            return this.price * this.quantity;
        }
    }
]

for(var i = 0 ; i < itemArray.length ; i++){
    document.write(`<div class="card">
    <h3>Printing item name and its total price of each item .</h3>
    <span>Item No : ${i + 1}</span>
    <span>Item Name : ${itemArray[i].name}</span>
    <span>Item Quantity : ${itemArray[i].quantity}</span>
    <span>Item Price : ${itemArray[i].price}</span>
    <span>Item Total Price : ${itemArray[i].totalPrice()}</span>
    </div>`)
}