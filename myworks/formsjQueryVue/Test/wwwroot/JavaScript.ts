'use strict';

//Data for TipCalculator
let serviceOptions = {
    '30% - Outstanding': 30, 
    '20% - Good': 20,
    '15% - It was OK': 15,
    '10% - Bad': 10,
    '5% - Terrible': 5
};
//Data for Clocks
let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let clockMessage = {
    1: 'Good Morning',
    2: 'Good afternoon',
    3: 'Let\'s party',
    4: 'Wake up',
    5: 'Let\'s have a lunch',
    6: 'Sleep tight!'
};

let hours = [];
for (let i = 0; i < 24; i++) {

    let x = '';
    if (i < 10) { x = '0' + i; }
    else { x += i; }

    hours.push(x);
}

let minutes = [];
for (let i = 0; i < 60; i++) {

    let x = '';
    if (i < 10) { x = '0' + i; }
    else { x += i; }

    minutes.push(x);
}



$(document).ready(function () {
    EditUserForm('#userForm');
    EditUserFormVue('#userFormVue');
    CalculateTips('#jQueryTipCalculator');
    CalculateTipsVue('#VueTipCalculator');
    ClockVue('#ClockVue');
    ClockjQuery('#ClockjQuery');
    AuthenticationVue('#authenticationVue');
});


function EditUserFormVue(formSource) {
    let apiUrl = document.body.dataset.apiUrl;

    let initPerson = {
        name: '',
        age: '',
        isMarried: '',
        numberOfKids: ''
    };

    new Vue({
        el: formSource,
        data: {//вхідні дані
            selectedUserId: '',
            users: {},
            isCreateMode: false,
            showValidation: false,
            person: initPerson
        },
        computed: {//як проперті, динамічно міняються, (кешуються)
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
        created: function () {//обробляється одразу
            this.loadUsers();
        },
        methods: {
            loadUsers: function () {
                let self = this;
                $.get(apiUrl + '/api/values', function (data) {
                    self.users = data;
                });
            },
            populateForm: function (data) {
                this.person = data;
                this.showValidation = false;
            },
            onCreate: function () {
                this.isCreateMode = true;
                this.selectedUserId = '';
                this.populateForm(initPerson);
            },
            onSave: function () {
                let self = this;
                self.showValidation = true;

                if (self.isNameInvalid) {
                    return false;
                }
                if (self.isAgeInvalid) {
                    return false;
                }
                
                ////alert-on save button
                //if (self.person.name === '' || isNaN(parseInt(self.person.age))) {
                //    alert(self.$el.dataset.emptyFormErrorMessage);
                //    return false;
                //}

                $.ajax({
                    type: this.selectedUserId ? 'PUT' : 'POST',
                    contentType: 'application/json',
                    url: apiUrl + '/api/values' + (this.selectedUserId ? '/' + this.selectedUserId : ''),
                    data: JSON.stringify(this.person)
                }).done(function () {
                    self.selectedUserId = '';
                    self.isCreateMode = false;
                    self.loadUsers();
                    self.populateForm(initPerson);
                });
            },
            onDelete: function () {
                let self = this;

                if (!confirm(self.$el.dataset.confirmMessage)) {
                    return false;
                }

                $.ajax({
                    type: 'DELETE',
                    contentType: 'application/json',
                    url: apiUrl + '/api/values/' + this.selectedUserId
                }).done(function () {
                    self.selectedUserId = '';
                    self.loadUsers();
                    self.populateForm(initPerson);
                });
            }
        },
        watch: {
            selectedUserId: function (val) {
                let self = this;
                if (val) {
                    self.isCreateMode = false;
                    $.get(apiUrl + '/api/values/' + val, function (data) {
                        self.populateForm(data);
                    });
                } else {
                    self.populateForm(initPerson);
                }
            }
        }
    });
}


function EditUserForm(formSource) {
    let form = $(formSource);
    let selectUserDropdown = form.find('[data-select="select-user"]');
    let apiUrl = document.body.dataset.apiUrl;
    let userNameControl = form.find('[name="name"]');
    let userAgeControl = form.find('[name="age"]');
    let userIsMarriedControl = form.find('[name="isMarried"]');
    let userNumberOfKidsControl = form.find('[name="numberOfKids"]');
    let createButton = form.find('input[data-type="createButton"]');
    let deleteButton = form.find('input[data-type="deleteButton"]');
    let isNameInvalid = form.find('[data-show-name-validation="isNameInvalid"]');
    let isAgeInvalid = form.find('[data-show-age-validation="isAgeInvalid"]');
    let showValidation = false;
  
    updateUserList();
    populateForm();

    userIsMarriedControl.change(resetForm);
    userAgeControl.change(resetForm).keyup(resetForm);
    userNameControl.keyup(resetForm);

    selectUserDropdown.change(function () {
        populateForm();

        let selectedId = selectUserDropdown.val();
        if (selectedId) {
            $.get(apiUrl + '/api/values/' + selectedId, function (data) {
                populateForm(data);
            });
        }
    });

    createButton.click(function () {
        populateForm(null, true);
    });

    
    form.find('input[data-type="saveButton"]').click(function () {
        let person = getPersonData();
        let personId = selectUserDropdown.val();

        showValidation = true;

        if (person.name.trim() === '' || isNaN(parseInt(person.age))) {
            resetForm();
            return;
        }
        
        $.ajax({
            type: personId ? 'PUT' : 'POST',
            contentType: 'application/json',
            url: apiUrl + '/api/values' + (personId ? '/' + personId : ''),
            data: JSON.stringify(person)
        }).done(function () {
            updateUserList();
            populateForm();
        });
        

            //Possible alert
            //if (person.name.trim() === '' || isNaN(parseInt(person.age))) {
            //    alert($(this).attr('data-empty-form-error-message'));
            //    return false;
            //}

        
        
    });

    deleteButton.click(function () {
        if (!confirm($(this).attr('data-confirm-message'))) {
            return false;
        }

        let personId = selectUserDropdown.val();
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json',
            url: apiUrl + '/api/values/' + personId
        }).done(function () {
            updateUserList();
            populateForm();
        });
    });

    function populateForm(source, createUser) {// показує або ховає форму заповнену або пусту
        let data = source || {};
        showValidation = false;
        form.find('[data-type="edit-form"]').toggle(!!source || createUser); //?
        userNameControl.val(data.name);//записує дані з дата
        userAgeControl.val(data.age);
        userIsMarriedControl.prop('checked', data.isMarried);
        userNumberOfKidsControl.val(data.numberOfKids);
        if (createUser) {
            selectUserDropdown.val('');
        }
        createButton.toggle(!createUser);

        deleteButton.toggle(!!selectUserDropdown.val());//?
        resetForm();
    }

    function resetForm() { //видаляє певні по форми
        let isMarriedVisible = parseInt(userAgeControl.val()) > 20;//діє на мар стат
        userIsMarriedControl.parent().toggle(isMarriedVisible);

        let isNumberOfKidsVisible = isMarriedVisible && userIsMarriedControl.is(':checked');
        userNumberOfKidsControl.parent().toggle(isNumberOfKidsVisible);

        let person = getPersonData();
        isNameInvalid.toggle(showValidation && person.name.trim() === '');
        isAgeInvalid.toggle(showValidation && isNaN(parseInt(person.age)));
    }

    function getPersonData() {//отримує дані на кожного юзера
        return {
            name: userNameControl.val(),
            age: userAgeControl.val(),
            isMarried: userIsMarriedControl.is(':checked'),
            numberOfKids: userNumberOfKidsControl.val()
        };
    }

    function updateUserList() {
        selectUserDropdown.find('option[value!=""]').remove();//видаляє всі старі оптіон, окрім старих
        $.get(apiUrl + '/api/values', function (data) {//заповнює новими диними селект
            for (var key in data) {
                selectUserDropdown.append('<option value="' + key + '">' + data[key] + '</option>');
            }
        });
    }
}


function CalculateTipsVue(formSource) {

    let initValue = '';

    new Vue({
        el: formSource,
        data: {
            amountOfBill: initValue,
            amountOfPeople: initValue,
            serviceLevel: initValue,
            service: serviceOptions
        },
        watch: {
            serviceLevel: function (val) {
                this.serviceLevel = +val;
            },
            amountOfBill: function (val) {
                this.amountOfBill = +val;

                if (isNaN(this.amountOfBill)) {
                    this.amountOfBill = '';
                }
            },
            amountOfPeople: function (val) {
                this.amountOfPeople = +val;

                if (isNaN(this.amountOfPeople)) {
                    this.amountOfPeople = '';
                }
            }
        },
        computed: {
            result: function () {
                

                let tips = Math.ceil(this.amountOfBill * this.serviceLevel / 100);
                let wholeAmount = Math.ceil(this.amountOfBill + tips);
                let wholeAmountPerPerson = Math.ceil(wholeAmount / this.amountOfPeople);

                let result = {
                    wholeAmount: wholeAmount,
                    tips: tips,
                    wholeAmountPerPerson: wholeAmountPerPerson
                };

                if (this.amountOfBill === 0 || this.serviceLevel == 0) {

                    return null;
                }

                return result;
            }
        }
    });
}


function CalculateTips(formSource) {
    let calc = $(formSource);
    let selectOption = calc.find('[data-select="select-option"]');
    let amountOfBill = calc.find('[data-change="amountOfBill"]');
    let amountOfPeople = calc.find('[data-change="amountOfPeople"]');
    let showResult = calc.find('[data-result="result"]');

    showSelectOption();
    calculate(calc);
        
     
    
    function showSelectOption() {
        let data = serviceOptions;

        for (var key in data) {
            selectOption.append('<option value="' + data[key] + '">' + key + '</option>');
        }
    }

    function calculate(item) {
        item.change(function () {

            let selectOptionVal = +selectOption.val();
            let amountOfBillVal = +amountOfBill.val();
            let amountOfPeopleVal = +amountOfPeople.val();

            let result = '';

            //if (isNaN(amountOfBillVal) === true || isNaN(amountOfPeopleVal) === true) {
            //    result = '';
            //}

            let tips = Math.ceil(amountOfBillVal * selectOptionVal / 100);
            let wholeAmount = Math.ceil(amountOfBillVal + tips);
            let wholeAmountPerPerson = Math.ceil(wholeAmount / amountOfPeopleVal);



            if (amountOfBillVal == 0 || selectOptionVal == 0 || isNaN(amountOfBillVal) === true) {
                result = null;
            }
            else if (amountOfPeopleVal == 0 || isNaN(amountOfPeopleVal) === true) {

                result = 'Your whole bill is ' + wholeAmount + '$, which includes tips - '
                    + tips + '$.';
            }

            else {

                result = 'Your whole bill is ' + wholeAmount + '$, which includes tips - '
                    + tips + '$. For each person ' + wholeAmountPerPerson + '$.';
            }

            console.log(result);
            showResult.css('display', 'block');
            showResult.text(result);
        });
    }

}


function ClockVue(formSource) {

    new Vue({
        el: formSource,
        data: {
            date: '',
            time: '',
            currentTime: '',
            hours: hours,
            minutes: minutes,
            toShow: true,
            wakeUpHours: '08',
            wakeUpMinutes: '00',
            lunchHours: '12',
            lunchMinutes: '00',
            napHours: '22',
            napMinutes: '00'
        },
        mounted: function () {

            let self = this;

            setInterval(function () {
                let cd = new Date();

                self.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
                self.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
                self.currentTime = zeroPadding(cd.getHours(), 2) + '' + zeroPadding(cd.getMinutes(), 2);
            }, 1000);

            function zeroPadding(num, digit) {
                var zero = '';
                for (var i = 0; i < digit; i++) {
                    zero += '0';
                }
                return (zero + num).slice(-digit);
            }
        },
        computed: {
            chooseMessage: function () {

                let message = '';
                let wakeUpTime = `${this.wakeUpHours}${this.wakeUpMinutes}`;
                let lunchTime = `${this.lunchHours}${this.lunchMinutes}`;
                let napTime = `${this.napHours}${this.napMinutes}`;

                if (this.currentTime === '') {
                    message = 'Wait...';
                }

                else if (this.currentTime > napTime && this.currentTime < wakeUpTime
                    || wakeUpTime < napTime && this.currentTime > napTime
                ) {
                    message = clockMessage[6];
                }

                else if (this.currentTime > lunchTime && this.currentTime - lunchTime < 60
                ) {
                    message = clockMessage[5];
                }

                else if (this.currentTime === wakeUpTime) {
                    message = clockMessage[4];
                }

                else if (this.currentTime > 1200) {
                    message = clockMessage[2];
                }

                else if (this.currentTime > wakeUpTime                    
                    ) {
                    message = clockMessage[1];
                }

                return message;
            }
        }
    });

    
}


function ClockjQuery(formSource) {
    let clock = $(formSource);
    let date = clock.find('[data-date="date"]');
    let time = clock.find('[data-time="time"]');
    let message = clock.find('[data-message="message"]');
    let wakeUpHours = clock.find('[data-wakeUpHours="wakeUpHours"]');
    let wakeUpMinutes = clock.find('[data-wakeUpMinutes="wakeUpMinutes"]');
    let lunchHours = clock.find('[data-lunchHours="lunchHours"]');
    let lunchMinutes = clock.find('[data-lunchMinutes="lunchMinutes"]');
    let napHours = clock.find('[data-napHours="napHours"]');
    let napMinutes = clock.find('[data-napMinutes="napMinutes"]');
    console.log(time);
    
    updateTime();
    setInterval(updateTime, 1000);
    setInterval(createMessage, 1000 * 5);
    
    fillSelectOption(hours, wakeUpHours);
    fillSelectOption(hours, lunchHours);
    fillSelectOption(hours, napHours);
    fillSelectOption(minutes, wakeUpMinutes);
    fillSelectOption(minutes, lunchMinutes);
    fillSelectOption(minutes, napMinutes);

    wakeUpHours.val('08');
    wakeUpMinutes.val('00');
    lunchHours.val('12');
    lunchMinutes.val('00');
    napHours.val('22');
    napMinutes.val('00');
    message.text('Wait...');

    createMessage();

    function createMessage() {

        let currentTime = time.text().slice(0, 5).split(':').join('');//4 numbers

        let wakeUpTime = `${wakeUpHours.val()}${wakeUpMinutes.val()}`;
        let lunchTime = `${lunchHours.val()}${lunchMinutes.val()}`;
        let napTime = `${napHours.val()}${napMinutes.val()}`;

        let msg = '';

        if (currentTime > napTime && currentTime < wakeUpTime
            || wakeUpTime < napHours.val() + '' + napMinutes.val()
            && currentTime > napTime
        ) {
            msg = clockMessage[6];
        }

        else if (currentTime > lunchTime && currentTime - lunchTime < 60
        ) {
            msg = clockMessage[5];
        }

        else if (currentTime === wakeUpTime) {
            msg = clockMessage[4];
        }

        else if (currentTime > 1200) {
            msg = clockMessage[2];
        }

        else if (currentTime > wakeUpTime) {
            msg = clockMessage[1];

        }

        message.text(msg);
    }
    
    function updateTime() {

        let cd = new Date();

        date = date.text(zeroPadding(cd.getFullYear(), 4)
            + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-'
            + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]);

        time = time.text(zeroPadding(cd.getHours(), 2) + ':'
            + zeroPadding(cd.getMinutes(), 2) + ':'
            + zeroPadding(cd.getSeconds(), 2));
    }

    function zeroPadding(num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    }

    function fillSelectOption(arr, tag) {
        let data = arr;

        data.forEach(function (item, i) {
            tag.append('<option value="' + item + '">' +
                item + '</option>');
        });
    }
}








































//00:00 
//let hours = '';
//let minutes = '';
//for (let i = 0; i < 24; i++) {
//    if (i < 10) { hours = '0' + i }
//    else { hours = i }

//    for (let j = 0; j < 60; j++) {
//        if (j < 10) { minutes = '0' + j }
//        else { minutes = j }

//        console.log(hours + ':' + minutes);
//    }
//}
