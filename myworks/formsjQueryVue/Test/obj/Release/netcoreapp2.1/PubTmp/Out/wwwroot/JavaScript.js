$(document).ready(function () {
    EditUserForm('#userForm');
});

function EditUserForm(formSource) {
    let form = $(formSource);
    let selectUserDropdown = form.find('[data-select="select-user"]');
    let apiUrl = document.body.dataset.apiUrl;
    let userNameControl = form.find('[name="name"]');
    let userAgeControl = form.find('[name="age"]');
    let userIsMarriedControl = form.find('[name="isMarried"]');
    let userNunberOfKidsControl = form.find('[name="numberOfKids"]');
    let createButton = form.find('input[data-type="createButton"]');
    let deleteButton = form.find('input[data-type="deleteButton"]');
  
    populateForm();
    updateUserList();

    userIsMarriedControl.change(resetForm);
    userAgeControl.change(resetForm).keyup(resetForm);

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

        if (person.name === '' || isNaN(parseInt(person.age))) {
            alert($(this).attr('data-empty-form-error-message'));
            return false;
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

    function populateForm(source, createUser) {
        let data = source || {};
        form.find('[data-type="edit-form"]').toggle(!!source || createUser);
        userNameControl.val(data.name);
        userAgeControl.val(data.age);
        userIsMarriedControl.prop('checked', data.isMarried);
        userNunberOfKidsControl.val(data.numberOfKids);
        if (createUser) {
            selectUserDropdown.val('');
        }
        createButton.toggle(!createUser);

        deleteButton.toggle(!!selectUserDropdown.val());
        resetForm();
    }

    function resetForm() {
        let isMarriedVisible = parseInt(userAgeControl.val()) > 20;
        userIsMarriedControl.parent().toggle(isMarriedVisible);

        let isNumberOfKidsVisible = isMarriedVisible && userIsMarriedControl.is(':checked');
        userNunberOfKidsControl.parent().toggle(isNumberOfKidsVisible);
    }

    function getPersonData() {
        return {
            name: userNameControl.val(),
            age: userAgeControl.val(),
            isMarried: userIsMarriedControl.is(':checked'),
            numberOfKids: userNunberOfKidsControl.val()
        };
    }

    function updateUserList() {
        selectUserDropdown.find('option[value!=""]').remove();
        $.get(apiUrl + '/api/values', function (data) {
            for (var key in data) {
                selectUserDropdown.append('<option value="' + key + '">' + data[key] + '</option>');
            }
        });
    }
}
