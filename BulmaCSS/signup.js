
// Validating Empty Field
function check_empty() {
    if (document.getElementById('signupForm').value == "" || document.getElementById('userEmail').value == "" || document.getElementById('userPassword').value == "" || document.getElementById('userName').value == "") {
        alert("Fill All Fields !");
    } else {
        document.getElementById('signupForm').submit();
        alert(" Account Successfully Created!");
    }
}
//Function To Display Popup
function showForm() {
   // event.preventDefault()
    document.getElementById('Signup-form').style.display = "block";
}
//Function to Hide Popup
function closeForm() {
    document.getElementById('Signup-form').style.display = "none";
}