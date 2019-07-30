window.onload = function () {

    let basket = new Vue({
            el: '#basket',
            data: {
                cart: JSON.parse(localStorage.getItem('key')) || [], 
                isBasketShown: false
            },
            watch: {
                cart: function() {
                    let arrayToStore = JSON.stringify(this.cart);
                    localStorage.setItem('key', arrayToStore);
                    // JSON.parse(localStorage.getItem('key')). 
                    //LocalStorage is a type of web storage that allows Javascript 
                    //websites and apps to store and access data right in the browser. 
                    //Retrieve a value by the key from LocalStorage.                   
                }
            },
            computed: {
                totalAmountOfItems: function(){
                    return this.cart.reduce((total, element) => {
                        return total + element.amount;
                    }, 0);
                }
            },
            methods: {
                addOneElement: function(item){
                    item.amount++;
                    console.log(item);
                },
                removeOneElement: function(item){
                        if(item.amount > 1){
                            item.amount--;
                        }
                        else{
                            item.amount = 0;
                            this.cart = this.cart.filter(element => element.id !== item.id);
                        }
                },
                removeAll: function(item){
                    this.cart = this.cart.filter(element => element.id !== item.id);
                },
                showBasket: function(){
                    this.isBasketShown = !this.isBasketShown;
                }
            }
        });

    let products_list = new Vue({
        el: '#products_list',
        data: {
            products: products
        },
        methods: {
            add: function (item, id) { 
                let existedElement = basket.cart.find(element => element.id === id);
                //return element from cart array which id in cart array equal to id in products array
                if(existedElement){
                    existedElement.amount += 1;
                } 
                else{
                    basket.cart.push({ name : item, amount : 1, id : id} )
                }  
            },
            readMoreLess: function (item) {
                Vue.set(item, 'isFullText', !item.isFullText);
            },
            imgPlaceholder: function(e){
                e.target.src = "https://via.placeholder.com/150"
                //e.target - is a reference to the object that dispatched (посилає) the event.
                //url with broken image replaces src in img. 
            }
        }
    });

}