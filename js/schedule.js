$(document).ready(function() {
    // when clicked a row in timetable, link to the program structure in course details page and expand the following
    // module accordion
    $(".timetable tbody").click(function() {
        var link = $(this).find("a").attr("href");
        if (link) {
            window.location = link;
        }
    });
});