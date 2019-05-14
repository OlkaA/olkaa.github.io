$(document).ready(function () {
    showIFrame('#portfolioJS');
    showIFrame('#portfolio');
});
function showIFrame(source) {
    $(source).jcarousel({
        scroll: 1,
        initCallback: function (carousel) {
            jQuery(source + '_prev').bind('click', function () {
                carousel.prev();
                return false;
            });
            jQuery(source + '_next').bind('click', function () {
                carousel.next();
                return false;
            });
        }
    });

    $(source + ' a').click(function () {
        $('#preview_bg').css('display', 'flex');
        $('#preview_box').html(`<iframe id="preview_frame" src="${$(this).attr('href')}"></iframe>`).show();
        $('.close-button').show();
    });


    hideAll('#preview_bg');
    hideAll('.close-button');

    function hideAll(item) {
        $(item).click(function () {
            $('#preview_bg').hide();
            $('#preview_box').hide();
            $('.close-button').hide();
        });
    }
}