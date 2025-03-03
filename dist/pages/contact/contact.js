const submitBtn=document.getElementById('submitbutton');
const nameError =document.getElementById('nameError');
const emailError =document.getElementById('emailError');
const phoneError =document.getElementById('phoneError');
const pwdError =document.getElementById('pwdError');

document.getElementById("Name").addEventListener("blur", validateName); 
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("pwd").addEventListener("blur", validatePassword);

submitBtn.addEventListener('click' ,(e)=>{
    e.preventDefault(); 

    let isValid = true;

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validatePassword()) isValid = false;

    if (isValid) {
        const name = document.getElementById("Name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("pwd").value;

        console.log("Form Submitted Successfully");
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
        console.log("Password: " + password);

        alert("Form Submitted Successfully");
        document.getElementById("form").reset();
    }
});
function validateName(){
    let name=document.getElementById('Name').value;
    const namePattern = /^[A-Za-z\s]+$/;


    if(name.length == 0){
        nameError.innerHTML="Name can't be empty , Please add a valid name";
        return false; 
    }
    if (!namePattern.test(name)) {
        nameError.innerHTML = "Name must contain only letters and spaces.";
        return false;}
    if(name.length <3){
        nameError.innerHTML="Name must be atleast 3 characters"
        return false;
    }

    nameError.innerHTML='';
    return true;

}
function validateEmail(){
    let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.length == 0) {
      emailError.innerHTML ="Please enter a valid email address.";
      return false;
    }

    if (!emailPattern.test(email)) {
      emailError.innerHTML = "Please enter a valid email address.";
      return false;
    }
    emailError.innerHTML = "";

    return true;

}

function validatePhone(){
    let phoneNumber=document.getElementById('phone').value;

    if (phoneNumber.length > 0) {
      const mobilePattern = /^\d{10}$/;

      if (!mobilePattern.test(phoneNumber)) {
        phoneError.innerHTML = "Please enter a valid 10 digit phone number .";
        return false;
      }

      phoneError.innerHTML = "";
    }

    return true;
}

function validatePassword(){
    let password = document.getElementById('pwd').value;


    if(password.length==0){
        pwdError.innerHTML = "Password can't be empty.";
        return false;
    }

    if(password.length <8){
        pwdError.innerHTML="Password must contain at least 8 characters";
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        pwdError.innerHTML = "Password must contain at least one uppercase letter.";
        return false;
    }
    if (!/[a-z]/.test(password)) {
        pwdError.innerHTML = "Password must contain at least one lowercase letter.";
        return false;
    }
    if (!/\d/.test(password)) {
        pwdError.innerHTML = "Password must contain at least one number.";
        return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        pwdError.innerHTML = "Password must contain at least one special character.";
        return false;
    }

    pwdError.innerHTML='';
    return true;



}
