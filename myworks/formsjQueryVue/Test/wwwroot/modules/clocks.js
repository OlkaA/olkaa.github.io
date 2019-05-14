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
    ClockVue('#ClockVue');
    ClockjQuery('#ClockjQuery');
});

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

            function updateTime() {
                let cd = new Date();

                self.time = zeroPadding(cd.getHours(), 2) + ':' +
                    zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
                self.date = zeroPadding(cd.getFullYear(), 4) + '-' +
                    zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
                self.currentTime = zeroPadding(cd.getHours(), 2) + '' +
                    zeroPadding(cd.getMinutes(), 2);
            }
            updateTime();
            setInterval(updateTime, 1000);

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