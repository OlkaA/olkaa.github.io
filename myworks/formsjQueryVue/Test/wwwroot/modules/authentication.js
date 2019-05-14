$(document).ready(function () {
    AuthenticationVue('#authenticationVue');
    AuthenticationjQuery('#authenticationjQuery');
});

function AuthenticationVue(formSource) {

    let emailValidation = new RegExp('^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z]{2,5}$');
    let passwordValidation = new RegExp('^.{6,}$');

    new Vue({
        el: formSource,
        data: {
            isShow: false,
            email: '',
            password: '',
            showValidation: false
        },
        computed: {
            emailMessage: function () {
                if (this.email === '') {
                    return 'Email should not be empty!';
                }
                else if (this.email.includes('@') === false) {
                    return 'Please include an @ in your e-mail adress!';
                }
                else if (emailValidation.test(this.email) === false) {
                    return 'Please enter a valid email';
                }

                return null;
            },
            passwordMessage: function () {
                let self = this;
                if (passwordValidation.test(self.password) === false) {
                    return 'Password should be at least 6 symbols.';
                }

                return null;
            },
            isEmailValid: function () {
                return !this.emailMessage;
            },
            isPasswordValid: function () {
                return !this.passwordMessage;
            }
        },
        methods: {
            showForm: function () {
                this.isShow = true;
            },
            hideForm: function () {
                this.isShow = false;

                this.email = '';
                this.password = '';
                this.showValidation = false;
            },
            resetForm: function () {
                let self = this;

                if (!confirm(self.$el.dataset.confirmMessage)) {
                    return false;
                }

                this.email = '';
                this.password = '';
                this.showValidation = false;
            },
            submitForm: function () {
                let self = this;
                self.showValidation = true;

                if (!self.isEmailValid) {
                    return false;
                }
                if (!self.isPasswordValid) {
                    return false;
                }

                this.email = '';
                this.password = '';
                this.showValidation = false;
            }
        }
    });
}


function AuthenticationjQuery(formSource) {
    let form = $(formSource);

    let logIn = form.find('[data-log-in="log-in"]');
    let showForm = form.find('[data-show-form="show-form"]');
    let closeForm = form.find('[data-close-form="close-form"]');
    let submitButton = form.find('[data-submit-form="submit"]');
    let resetButton = form.find('[data-reset-form="reset"]');
    let email = form.find('input[type="email"]');
    let password = form.find('input[type="password"]');

    let emailValidation = new RegExp('^[a-zA-Z0-9_\.]+@[a-zA-Z0-9_\.]+\.[a-zA-Z]{2,5}$');
    let passwordValidation = new RegExp('^.{6,}$');

    new Validator(email.get(0), function (val) {
        return val !== '';
    }, 'Empty');
    new Validator(email.get(0), function (val) {
        return val.includes('@') || val === '';
    }, 'Monkey');
    new Validator(email.get(0), function (val) {
        return emailValidation.test(val) === true || val === '' || !val.includes('@');
    }, 'Dot');
    new Validator(password.get(0), function (val) {
        return val !== '' && passwordValidation.test(password.val()) === true;
    }, 'Invalid');

    showHideForm();
    submitButton.click(function () {
        let isValid = Validator.validateForm(form.get(0));
        if (isValid) {
            email.val('');
            password.val('');
        }
    });

    resetButton.click(function () {
        if (!confirm($(this).attr('data-confirm-message'))) {
            return false;
        }

        Validator.eraseAll();

        email.val('');
        password.val('');
    });

    function showHideForm() {
        showForm.css('display', 'none');
        logIn.click(() => showForm.css('display', 'block'));
        closeForm.click(function () {
            showForm.css('display', 'none');
            Validator.eraseAll();
            email.val('');
            password.val('');

        });
    }
}

function Validator(source, validation, key) {//Class
    let self = this;
    this.element = source;
    const msgKey = 'message' + (key || '');
    this.errorMessage = source.dataset[msgKey] || '';
    this.validator = validation;

    this.errorSpan = $('<span class="validator">' + this.errorMessage + '</span>').insertAfter(source);

    $(source).keyup(function () {
        self.validate();
    });

    Validator.allItems = Validator.allItems || [];
    Validator.allItems.push(this);

    return this;
}

Validator.prototype.isValid = function () {//Method returns true or false
    return this.validator(this.element.value);
};

Validator.prototype.validate = function () {//Method toggles span if value valid or not;
    //returns true or false
    let isValid = this.isValid();
    this.errorSpan.toggle(!isValid);
    return isValid;
};
Validator.prototype.hide = function () {
    this.errorSpan.hide();
};
Validator.eraseAll = function () {
    Validator.allItems.forEach(function (el) {
        el.hide();
    });
};
Validator.validateForm = function (form) {
    let isValid = true;
    Validator.allItems.forEach(function (element) {
        if (form.contains(element.element)) {
            isValid &= element.validate();
        }
    });
    return isValid;
};