$(document).ready(function () {
    todoListVue('#todoListVue');
    todoListjQuery('#todoListjQuery');
});

function todoListVue(formSource) {

    new Vue({
        el: formSource,
        data: {
            valueToAdd: '',
            todoItems: []
        },
        methods: {
            addItem: function () {
                if (this.valueToAdd !== '') {
                    this.todoItems.push(this.valueToAdd);
                    this.valueToAdd = '';
                }
            },
            deleteItem: function (index) {
                this.todoItems.splice(index, 1);
            }
        }
    });
}

function todoListjQuery(formSource) {
    let todo = $(formSource);
    let valueToAdd = todo.find('[data-valueToAdd="data-valueToAdd"]');
    let addItem = todo.find('[type="button"]');
    let listOfItems = todo.find('[data-type="list-of-items"]');

    valueToAdd.keypress(function (event) {
        let keycode = event.keyCode || event.which;
        if (keycode === 13) {
            add();
        }
    });
    addItem.click(function () {
        add();
    });
    

    function add() {
        console.log(valueToAdd.val());

        if (valueToAdd.val() !== '') {
            let item = $('<li>' + valueToAdd.val() +
                '<span data-type="new-item">\u274C</span></li>');
            item.find('[data-type="new-item"]').click(function () {
                item.remove();
            });
            listOfItems.append(item);
            valueToAdd.val('');
        }
    }
    


        
}