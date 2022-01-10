
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

const handleSignup = async (event) => {
    event.preventDefault();
    const body = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        password: document.getElementById('userPassword').value,
    }
    if (body.name == "" || body.password == "" || body.email == "") {

        alert("Fill All Fields !");
        return false

    }
    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.href ='/';
      } else {
        alert('Failed to Create Account! Please try Again.');
      }


}
document.getElementById('form').addEventListener('submit', handleSignup)