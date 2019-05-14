let serviceOptions = {
    '30% - Outstanding': 30,
    '20% - Good': 20,
    '15% - It was OK': 15,
    '10% - Bad': 10,
    '5% - Terrible': 5
};

$(document).ready(function () {
    CalculateTips('#jQueryTipCalculator');
    CalculateTipsVue('#VueTipCalculator');
});

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
                return '';
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