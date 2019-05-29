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
                },
                removeOneElement: function(item){
                        if(item.amount > 1){
                            item.amount--;
                        }
                        else{
                            item.amount = 0;
                            this.cart = this.cart.filter(element => element.id !== item.id);
                            console.log('1' + this.cart);
                        }
                },
                removeAll: function(item){
                    this.cart = this.cart.filter(element => element.id !== item.id);
                    console.log('2' + this.cart);
                },
                showBasket: function(){
                    this.isBasketShown = !this.isBasketShown;
                }
            }
        });

    let products_list = new Vue({
        el: '#products_list',
        data: {
            products: products,
            ifImageBroken: false
        },
        methods: {
            add: function (item, id) { 
                let existedElement = basket.cart.find(element => element.id === id);
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
            }
        }
    
    });

    
}