<template>
    <a class="cart-button" v-show="!isBasketShown" v-on:click="showBasket()">
        <span class="text-success">{{totalAmountOfItems}}</span>
        <i class="fas fa-cart-arrow-down text-success"></i>
    </a>
    <div class="card border-success mb-1" v-show="isBasketShown">
        <h2 class="text-center">Your basket
            <i class="fas fa-times text-danger" v-on:click="showBasket()"></i>
        </h2>
        <ul class="list-group" >
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in cart">
                {{item.name}}
                <span>
                    <i class="fas fa-plus" v-on:click="addOneElement(item)"></i>
                    <b>{{item.amount}}</b>
                    <i class="fas fa-minus" v-on:click="removeOneElement(item)"></i>
                    <i class="fas fa-trash" v-on:click="removeAll(item)"></i>
                </span>
            </li>
        </ul>
    </div>
</template>


<script>
    export default () => new Vue({
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

</script>