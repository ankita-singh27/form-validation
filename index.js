const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const form=document.getElementById('form');
const confirmPassError = document.getElementById('confirmpassError');

form.addEventListener('submit', (event)=>{
     event.preventDefault();
     validateForm();
   
const data = {
    fullname: event.target[0].value,
    phonenumber: event.target[1].value,
    email: event.target[2].value,
    password: event.target[3].value,
    confirmpassword: event.target[4].value,
}
console.log(data)
form.reset();

})

function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
   
    nameError.innerHTML ="";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatePhoneNo(){
    let phoneNo = document.getElementById('phoneno').value;

    if(phoneNo.length == 0){
        phoneError.innerHTML = "phone no is required";
        phoneError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(phoneNo.length !== 10){
        phoneError.innerHTML = "phone no should be 10 digits";
        phoneError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    if(!phoneNo.match("[789][0-9]{9}")){
        phoneError.innerHTML = "Enter Valid phone number";
        phoneError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    phoneError.innerHTML = "";
    phoneError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}
const passwrd= document.getElementById('password')
function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
   
}

function validateConfirmPassword(){
    let confirmPassword = document.getElementById('confirmpassword').value;

    if(confirmPassword.length == 0){
        confirmPassError.innerHTML = "Password is required";
        confirmPassError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(passwrd.value !== confirmPassword){
    confirmPassError.innerHTML = "password do not match";
    confirmPassError.previousElementSibling.classList.add('fa-xmark');
    return false;
    
    }
    confirmPassError.innerHTML = "";
     confirmPassError.previousElementSibling.classList.add('fa-check');
     return true;

}

function validateForm(){
    if(!validateName() ||!validatePhoneNo()|| !validateEmail() || !validatePassword() || !validateConfirmPassword()){
        submitError.style.display = "block";
        submitError.innerHTML="please fix the error";
        setTimeout(function(){
            submitError.style.display = "none"; 
        },2000)
    return false;
    }

}

