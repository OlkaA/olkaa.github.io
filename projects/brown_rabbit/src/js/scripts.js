RegExp.escape = function (s) { 
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); 
};

window.onload = function () {

    let images = ['slider-1.jpg', 'slider-2.jpg', 'slider-3.jpg', 'slider-4.jpg', 'slider-5.jpg'];
    $('<img src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.slider');


    //let initValue = new URLSearchParams(window.location.search).get('search'); 
    let initValue = '';

    let searchfor = new Vue({ 
        el: '#searchfor',
        data: { searchField: initValue },
        watch: {
            searchField: function (val) {
                choose_article.searchValue = val;
            }
        }
    });

    let choose_article = new Vue({
        el: '#choose-article',
        data: {// in the object data we insert the properties that we will work with
            searchValue: initValue,
            items: articles,
            pageSize: 3,
            pageIndex: 0
        },
        watch: {
            searchValue: function () {
                console.log(this.searchValue);
                this.pageIndex = 0;
            }
        },
        computed: { 
            filteredList: function () {
                let self = this;

                return self.items.filter(function (item) {
                    for (let key in item) {
                        if (item[key].toLowerCase().includes(self.searchValue.toLowerCase())) {

                            return true;
                        }
                    }
                });
            },
            pagingButtons: function () {
                let self = this;

                let pageAmount = Math.ceil(self.filteredList.length / self.pageSize);

                let itemsPerPage = Array.from({ length: pageAmount }, (v, i) => i);
                //let itemsPerPage = [];

                //for (let i = 0; i < pageAmount; i++) {
                //    itemsPerPage.push(i);
                //}
                return itemsPerPage;
            },
            paginateList: function () {
                let self = this;

                let index = self.pageIndex * self.pageSize;
                return self.filteredList.slice(index, index + self.pageSize);
            }
        },

        methods: {
            readMoreLess: function (item) {
                Vue.set(item, 'isFullText', !item.isFullText);
            },
            highlight: function (item) {
                if (!this.searchValue) {
                    return item;
                }
                
                return item.replace(new RegExp(RegExp.escape(this.searchValue), "gi"),
                    '<span class="highlight">$&</span>');
            },
            changePageIndex: function (item) {
                this.pageIndex = item;
            },
            goToLastPage: function () {
                this.pageIndex = this.pagingButtons.length - 1;
            }
        }
    });
};

