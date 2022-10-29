$(function() {
    // jQueryUI vertical tabs component
    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");

    // jQueryUI accordion component
    $(".accordion").accordion({
        collapsible: true, 
        active: false,
        heightStyle: "content",
        activate: function(event, ui) {
            // auto scroll to top when accordion is expanded
            if(!$.isEmptyObject(ui.newHeader.offset())) {
                $('html:not(:animated), body:not(:animated)').animate({
                    scrollTop: ui.newHeader.offset().top-150
                }, 500);
            }
        }
    });
});

$(document).ready(function() {
    // when clicked a row in schedule table, link to the following schedule page
    $(".schedule tbody tr").click(function() {
        var link = $(this).find("a").attr("href");
        if (link) {
            window.location = link;
        }
    });

    var hash = window.location.hash;
    if (hash) {
        // trim the hash to get the element name
        hashTrimed = (hash).substring(0, hash.indexOf('-'));
        if (hashTrimed == "#accordion") {
            // get the module number clicked from the path hash passed in this course details page
            var index = parseInt(hash.replace("#accordion-", ""));
            // get the accordion div
            var accordion = document.getElementById("accordion-" + index);
            // navigate to the program structure tabs by default
            $('#tabs').tabs("option", "active", 1);
            // expand the accordion by default
            $(accordion).accordion('option', 'active' , 0);
        }
    }
});