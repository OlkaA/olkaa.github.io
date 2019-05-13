$(document).ready(function () {
    $('[data-type="pie-chart"]').each(function (index, item) {
        let radius = item.dataset.radius;
        let percent = item.dataset.value;
        let stroke_dasharray = 2 * 3.14 * radius;
        let stroke_dashoffset = stroke_dasharray - stroke_dasharray * percent / 100;
        $(item).addClass('pie-chart').html(`<span>` + percent + `%</span><svg height="100" weight="100" viewBox="0 0 100 100">
                    <circle class="full-circle" cx="50" cy="50" r="40" />
                    <circle id="part-circle" class="part-circle" stroke-dasharray="` + stroke_dasharray + `" stroke-dashoffset="` + stroke_dashoffset + `" cx="50" cy="50" r="40" transform="rotate(-90 50 50)" /> 
                </svg>`);
    });

    //let radius = $('#part-circle').attr('r');
    //let percent = parseInt($('#percent').text());
    //let stroke_dasharray = 2 * 3.14 * radius;
    //let stroke_dashoffset = stroke_dasharray - stroke_dasharray * percent / 100;
    //$('#part-circle').attr('stroke-dasharray', stroke_dasharray);
    //$('#part-circle').attr('stroke-dashoffset', stroke_dashoffset);
});


