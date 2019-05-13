jQuery(function () {
    jQuery('#portfolioJS').jcarousel({
        scroll: 1,
        initCallback: function (carousel) {
            jQuery('#portfolioJS_prev').bind('click', function () {
                carousel.prev();
                return false;
            });
            jQuery('#portfolioJS_next').bind('click', function () {
                carousel.next();
                return false;
            });
        }
    });

    $('#portfolioJS a').click(function () {
        $('#preview_bg').width($(document).width()).height($(document).height()).show();

        let frameWidth = 700;

        $('#preview_box').html('<iframe id="preview_frame"></iframe>').css('left', ($(document).width() - frameWidth) / 2 + 'px').show();
        $('#preview_frame').attr('src', $(this).attr('href')).height($(window).height() - 200).width(frameWidth);
        $('#portfolioJS-button').show();
    });
    $('#preview_bg').click(function () {
        hideAll();
    });
    $('#portfolioJS-button').click(function () {
        hideAll();
    });
    function hideAll() {
        $('#preview_bg').hide();
        $('#preview_box').hide();
        $('#portfolioJS-button').hide();
    }
});

jQuery(function () {
    jQuery('#portfolio').jcarousel({
        scroll: 1,
        initCallback: function (carousel) {
            jQuery('#portfolio_prev').bind('click', function () {
                carousel.prev();
                return false;
            });
            jQuery('#portfolio_next').bind('click', function () {
                carousel.next();
                return false;
            });
        }
    });

    $('#portfolio a').click(function () {
        $('#preview_bg').width($(document).width()).height($(document).height()).show();

        let frameWidth = 700;

        $('#preview_box').html('<iframe id="preview_frame"></iframe>').css('left', ($(document).width() - frameWidth) / 2 + 'px').show();
        $('#preview_frame').attr('src', $(this).attr('href')).height($(window).height() - 200).width(frameWidth);
        $('#portfolio-button').show();
    });
    $('#preview_bg').click(function () {
        hideAll();
    });
    $('#portfolio-button').click(function () {
        hideAll();
    });
    function hideAll() {
        $('#preview_bg').hide();
        $('#preview_box').hide();
        $('#portfolio-button').hide();
    }
});

$(document).ready(function () {
    showIFrame('#portfolioJS');
});
function showIFrame(source) {
    let iFrame = $(source);
    iFrame.jcarousel({
        scroll: 1,
        initCallback: function (carousel) {
            jQuery(iFrame + '_prev').bind('click', function () {
                carousel.prev();
                return false;
            });
            jQuery(iFrame + '_next').bind('click', function () {
                carousel.next();
                return false;
            });
        }
    });

    //$(iFrame + ' a').click(function () {
    //    $('#preview_bg').width($(document).width()).height($(document).height()).show();

    //    var frameWidth = $(iFrame).width();

    //    $('#preview_box').html('<iframe id="preview_frame"></iframe>').css('left', ($(document).width() - frameWidth) / 2 + 'px').show();
    //    $('#preview_frame').attr('src', $(this).attr('href')).height($(window).height() - 200).width(frameWidth);
    //    $('#hide-button').show();
    //});
    //$('#preview_bg').click(function () {
    //    hideAll();
    //});
    //$('#hide-button').click(function () {
    //    hideAll();
    //});

    //function hideAll() {
    //    $('#preview_bg').hide();
    //    $('#preview_box').hide();
    //    $('#hide-button').hide();
    //}
}
//    
//}

                