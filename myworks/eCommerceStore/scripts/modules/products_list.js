export default (basket) => new Vue({
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
