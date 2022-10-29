// storing the form input from user to local storage
function storeData() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let birthday = $('#birthday').val();
    let gender = $('input[name="gender"]:checked').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let status = $('#status option:selected').val();
    let course = $('#course option:selected').val();
    
    let formInput = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        gender: gender,
        email: email,
        phone: phone,
        status: status,
        course: course,
    };
    // if it is the first record to add, set the data as an empty array by default first, else get the existing records
    let data = JSON.parse(localStorage.getItem("leads_data")) || [];
    // push the new input data into the array
    data.push(formInput);
    // store the array of data into local storage
    setLocalStorage(data);
}

// implement for leads listing page
function listData(data) {
    let tableData = `<thead>
                            <tr>
                                <td>No.</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Date of Birth</td>
                                <td>Gender</td>
                                <td>Email</td>
                                <td>Contact Number</td>
                                <td>Status</td>
                                <td>Course</td>
                                <td colspan="2">Action</td>
                            </tr>
                        </thead>`;
    if (data.length == 0) {
        tableData += `<td colspan="10">No record</td>`;
    } else {
        for (let i = 0; i < data.length; i++) {
            tableData += `<tbody><tr>`;
            tableData += `<td>${i + 1}</td>
                        <td>${data[i].firstName}</td>
                        <td>${data[i].lastName}</td>
                        <td>${data[i].birthday}</td>
                        <td>${data[i].gender}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].phone}</td>
                        <td>${data[i].status}</td>
                        <td>${data[i].course}</td>
                        <td><span class="material-symbols-outlined" onclick="editData(${i})">edit_square</span></td>
                        <td><span class="material-symbols-outlined" onclick="deleteData(${i})" style="margin-top: 5px;">Delete</span></td>`;
        };
        tableData += `</tr></tbody>`;
    }
    $('#lead-data').html(tableData);
}

// direct to edit leads page with passing the selected id
function editData(id) {
    window.location.assign("admin-edit.html?id=" + id);
}

// delete the selected row of data
function deleteData(id) {
    let data = JSON.parse(localStorage.getItem("leads_data"));
    // remove the selected row of data
    data.splice(id, 1);
    // update the local storage
    setLocalStorage(data);
    // show the latest record
    listData(data);
}

// updating the records in local storage using the form input from admin
function updateData(id) {
    let newFirstName = $('#first-name').val();
    let newLastName = $('#last-name').val();
    let newBirthday = $('#birthday').val();
    let newGender = $('input[name="gender"]:checked').val();
    let newEmail = $('#email').val();
    let newPhone = $('#phone').val();
    let newStatus = $('#status option:selected').val();
    let newCourse = $('#course option:selected').val();

    let data = JSON.parse(localStorage.getItem("leads_data"));
    // assign the new updated form data to the selected row of data
    data[id] = {
        firstName: newFirstName,
        lastName: newLastName,
        birthday: newBirthday,
        gender: newGender,
        email: newEmail,
        phone: newPhone,
        status: newStatus,
        course: newCourse,
    };
    setLocalStorage(data);
}

// set the data to local storage
function setLocalStorage(data) {
    localStorage.setItem("leads_data", JSON.stringify(data));
}