$(document).ready(function() {
    // when admin submit the form in the add leads page
    $('#admin-add').submit(function(e) {
        // data validation upon submit the form
        // if the user didn't select a date of birth
        if ($('#birthday').val() == "") {
            e.preventDefault(); // prevent the form to submit
            $('#birthday').addClass("error");
            tooltip('#birthday', "Please select your date of birth");
            scrollToTop();
            return false;
        }

        // if the user enter an invalid email
        let inputEmail = $('#email').val();
        let at = inputEmail.indexOf("@");
        let dot = inputEmail.lastIndexOf(".");
        /*  
            Input validation of email address
            - must contain @ and .
            - at least one character before and after the @
            - at least two characters after the .
        */
        if (at < 1 || dot < at + 2 || dot + 2 >= inputEmail.length) {
            e.preventDefault(); // prevent the form to submit
            $('#email').addClass("error");
            tooltip("#email", "Please enter a valid email address");
            scrollToTop();
            return false;
        }

        // store all the input details if no error
        e.preventDefault(); // prevent the form to submit
        storeData(); // save form input data to local storage
        window.location.assign("admin.html"); // direct to lead listing page
    });
});