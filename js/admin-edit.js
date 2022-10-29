var records = JSON.parse(localStorage.getItem("leads_data"));

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // set all the input field value from the data in local storage
    $('#first-name').val(records[id].firstName);
    $('#last-name').val(records[id].lastName);
    $("input[name=gender][value=" + records[id].gender + "]").attr('checked', true);
    $('#birthday').val(records[id].birthday);
    $('#email').val(records[id].email);
    $('#phone').val(records[id].phone);
    $('#status').val(records[id].status);
    $('#course').val(records[id].course);

    // for the form in the admin edit leads page
    $('#admin-edit').submit(function(e) {
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

        // update all the input details if no error
        e.preventDefault(); // prevent the form to submit
        updateData(id); // update the latest data to local storage
        window.location.assign("admin.html"); // direct to lead listing page
    });
});