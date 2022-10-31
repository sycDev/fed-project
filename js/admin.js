$(document).ready(function() {
    // set the records set an empty array as default if there have no records
    let leadRecords = JSON.parse(localStorage.getItem("leads_data")) || [];
    // show the listing of lead records
    listData(leadRecords);

    // trigger the function to search the data in listing table once admin type in the search box
    $('#search').keyup(function() {
        searchTable($(this).val());
    });

    // function to search the data in listing table
    function searchTable(value) {
        $('#lead-data tbody tr').each(function() {
            var match = 'false';
            $(this).each(function() {
                let data = $(this).text().toLowerCase();
                if (data.indexOf(value.toLowerCase()) >= 0) {  
                    match = 'true';
                }
            });
            if (match == 'true') {
                // show the row of data
                $(this).show();
            } else {
                // hide the row of data
                $(this).hide();
            }
        });
    }
});