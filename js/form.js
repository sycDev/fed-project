$(function() {
    // jQueryUI datepicker component
    $('#birthday').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:-12",
        dateFormat: 'dd/mm/yy',
        showAnim: 'slideDown',
        maxDate: '-12y',
        onClose: function (dateText, inst) {
            // if user had selected date of birth, remove the red border
            if ($(this).val()) {
                $(this).removeClass("error");
            }
        }
    });
});

$(document).ready(function() {
    // checking for empty input field after blur the field
    // change the border color of the input that is empty
    $('form input').blur(function(e) {
        if (!$(this).val()) {
            e.preventDefault(); // prevent the form to submit
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }
    });

    // change the border color of the selection box if no item is selected
    $('form select').blur(function(e) {
        if (!$(this).val()) {
            e.preventDefault();
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }
    });
});

// the function to enable the jQuery UI tooltip component
function tooltip(selector, message) {
    $(selector).tooltip({ 
        items: selector, 
        content: message,
        position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
        }
    });
    $(selector).tooltip("open");
    $(selector).mouseover(function () { 
        $(this).tooltip("disable");
    });
}

// scroll to top if data validation is failed
function scrollToTop() { 
    if ($(window).scrollTop() != 0) {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    }
}