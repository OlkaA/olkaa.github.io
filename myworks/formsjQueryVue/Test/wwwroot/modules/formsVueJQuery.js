$(document).ready(function () {
    // EditUserForm('#userForm');
    EditUserFormVue('#userFormVue');
});

function EditUserFormVue(formSource) {

    let people = [
        { id: 1, name: "John", age: 25, isMarried: true, numberOfKids: 1 },
        { id: 2, name: "Sara", age: 18, isMarried: false },
    ];

    let initPerson = {
        id: '',
        name: '',
        age: '',
        isMarried: '',
        numberOfKids: ''
    };

    new Vue({
        el: formSource,
        data: {
            selectedUserId: '',
            users: {},
            isCreateMode: false,
            showValidation: false,
            person: initPerson
        },
        computed: {
            isMarriageVisible: function () {
                return parseInt(this.person.age) > 18;
            },
            isNumberOfKidsVisible: function () {
                return this.person.isMarried;
            },
            isNameInvalid: function () {
                return this.person.name.trim() === '';
            },
            isAgeInvalid: function () {
                return isNaN(parseInt(this.person.age));
            }
        },
        created: function () {
            this.loadUsers();
        },
        methods: {
            loadUsers: function () {
                this.users = people;
            },
            populateForm: function (data) {
                console.log(data.id)
                this.person = data;
                console.log(this.person.id)
                this.showValidation = false;
            },
            onCreate: function () {
                this.isCreateMode = true;
                this.selectedUserId = '';

                // this.populateForm(initPerson);
            },
            onSave: function () {
                this.showValidation = true;

                if (this.isNameInvalid) {
                    return false;
                }
                if (this.isAgeInvalid) {
                    return false;
                }

                if(this.person.id){
                    this.users[this.selectedUserId] = this.person;
                }
                else{
                    let user = {
                        id: '_' + Math.random().toString(36).substr(2, 9),
                        name: this.person.name,
                        age: this.person.age,
                        isMarried: this.person.isMarried,
                        numberOfKids: this.person.numberOfKids
                    }
                    this.users = [...this.users, user]
                }

                this.selectedUserId = '';
                //     self.isCreateMode = false;
                //     self.loadUsers();
                //     self.populateForm(initPerson);                
            },
            onDelete: function (id) {
                let self = this;

                if (!confirm(self.$el.dataset.confirmMessage)) {
                    return false;
                }

                this.users.filter(el => el.id = id)
                 //     self.selectedUserId = '';
                //     self.loadUsers();
                //     self.populateForm(initPerson);
            }
        },
        watch: {
            selectedUserId: function (val) {
                console.log('selectedUserId id', val.id)
                this.isCreateMode = true;
                let user = this.users.find(el => el.id = val.id)
                console.log('users', this.users)
                // this.populateForm(this.users.find(el => el.id = val.id));
                // console.log(this.users)
            }

        }
    });
}




// function EditUserForm(formSource) {
//     let form = $(formSource);
//     let selectUserDropdown = form.find('[data-select="select-user"]');
//     let apiUrl = document.body.dataset.apiUrl;
//     let userNameControl = form.find('[name="name"]');
//     let userAgeControl = form.find('[name="age"]');
//     let userIsMarriedControl = form.find('[name="isMarried"]');
//     let userNumberOfKidsControl = form.find('[name="numberOfKids"]');
//     let createButton = form.find('input[data-type="createButton"]');
//     let deleteButton = form.find('input[data-type="deleteButton"]');
//     let isNameInvalid = form.find('[data-show-name-validation="isNameInvalid"]');
//     let isAgeInvalid = form.find('[data-show-age-validation="isAgeInvalid"]');
//     let showValidation = false;

//     updateUserList();
//     populateForm();

//     userIsMarriedControl.change(resetForm);
//     userAgeControl.change(resetForm).keyup(resetForm);
//     userNameControl.keyup(resetForm);

//     selectUserDropdown.change(function () {
//         populateForm();

//         let selectedId = selectUserDropdown.val();
//         if (selectedId) {
//             $.get(apiUrl + '/api/values/' + selectedId, function (data) {
//                 populateForm(data);
//             });
//         }
//     });

//     createButton.click(function () {
//         populateForm(null, true);
//     });


//     form.find('input[data-type="saveButton"]').click(function () {
//         let person = getPersonData();
//         let personId = selectUserDropdown.val();

//         showValidation = true;

//         if (person.name.trim() === '' || isNaN(parseInt(person.age))) {
//             resetForm();
//             return;
//         }

//         $.ajax({
//             type: personId ? 'PUT' : 'POST',
//             contentType: 'application/json',
//             url: apiUrl + '/api/values' + (personId ? '/' + personId : ''),
//             data: JSON.stringify(person)
//         }).done(function () {
//             updateUserList();
//             populateForm();
//         });


//         //Possible alert
//         //if (person.name.trim() === '' || isNaN(parseInt(person.age))) {
//         //    alert($(this).attr('data-empty-form-error-message'));
//         //    return false;
//         //}



//     });

//     deleteButton.click(function () {
//         if (!confirm($(this).attr('data-confirm-message'))) {
//             return false;
//         }

//         let personId = selectUserDropdown.val();
//         $.ajax({
//             type: 'DELETE',
//             contentType: 'application/json',
//             url: apiUrl + '/api/values/' + personId
//         }).done(function () {
//             updateUserList();
//             populateForm();
//         });
//     });

//     function populateForm(source, createUser) {// показує або ховає форму заповнену або пусту
//         let data = source || {};
//         showValidation = false;
//         form.find('[data-type="edit-form"]').toggle(!!source || createUser); //?
//         userNameControl.val(data.name);//записує дані з дата
//         userAgeControl.val(data.age);
//         userIsMarriedControl.prop('checked', data.isMarried);
//         userNumberOfKidsControl.val(data.numberOfKids);
//         if (createUser) {
//             selectUserDropdown.val('');
//         }
//         createButton.toggle(!createUser);

//         deleteButton.toggle(!!selectUserDropdown.val());//?
//         resetForm();
//     }

//     function resetForm() { //видаляє певні по форми
//         let isMarriedVisible = parseInt(userAgeControl.val()) > 20;//діє на мар стат
//         userIsMarriedControl.parent().toggle(isMarriedVisible);

//         let isNumberOfKidsVisible = isMarriedVisible && userIsMarriedControl.is(':checked');
//         userNumberOfKidsControl.parent().toggle(isNumberOfKidsVisible);

//         let person = getPersonData();
//         isNameInvalid.toggle(showValidation && person.name.trim() === '');
//         isAgeInvalid.toggle(showValidation && isNaN(parseInt(person.age)));
//     }

//     function getPersonData() {//отримує дані на кожного юзера
//         return {
//             name: userNameControl.val(),
//             age: userAgeControl.val(),
//             isMarried: userIsMarriedControl.is(':checked'),
//             numberOfKids: userNumberOfKidsControl.val()
//         };
//     }

//     function updateUserList() {
//         selectUserDropdown.find('option[value!=""]').remove();//видаляє всі старі оптіон, окрім старих
//         $.get(apiUrl + '/api/values', function (data) {//заповнює новими диними селект
//             for (var key in data) {
//                 selectUserDropdown.append('<option value="' + key + '">' + data[key] + '</option>');
//             }
//         });
//     }
// }