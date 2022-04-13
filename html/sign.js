const form = document.getElementById("form");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const fullname = document.getElementById("fullname");


function validate() {
    var email = document.getElementById("email");
    let error = document.getElementById("error");
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    var phone = document.getElementById("phone");
    var regexpph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var regexppass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&-])?[A-Za-z\d@#$!%*?&-]{8,}$/;

    if(fullname.value.trim()=== ""){

        error.innerHTML="fullname cannot be empty"
        error.style.color="red";
        return false;
    }
    else if (email.value.trim() === "") {

       error.innerHTML= "email cannot be empty";
       error.style.color="red";
        return false;
    }
    else if (!regexp.test(email.value)) {

    error.innerHTML="invalid email format";
    error.style.color="yellow";
    return false;
    }
    else if (phone.value.trim()==="") {

        error.innerHTML="phone no cannot be empty";
        error.style.color="red";
        return false;
     }
    else if (!regexpph.test(phone.value)) {

        error.innerHTML="invalid phone no, maximum 10 numbers";
        error.style.color="yellow";
        return false;
     }
 
    else if (password.value.trim() ===""){

    error.innerHTML="password cannot be empty";
    error.style.color="red";
    return false;
    }
    else if (!regexppass.test(password.value)){

        error.innerHTML="Minimum 8 characters, at least one uppercase, and one lower case, must contain at least  one number";
        error.style.color="red";
        return false;
    }
    else if(password2.value.trim()===""){

        error.innerHTML="confirm password cannot be empty";
        error.style.color="red";
        return false;
    }
     else if(password2.value === password.value)  
    {   
      error.innerHTML="Passwords match"; 
      error.style.color="white"; 
      return true;
    } 
    else if(password2.value !== password.value)  
    {   
      error.innerHTML="Passwords doesnot match";
      error.style.color="orange";
      return false ;
    } 
    else {
        return true;
    }
}

form.addEventListener('submit', function (event) {
    
    if (!validate()) {
        
        event.preventDefault();
    }
});


function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        var pwd = document.getElementById("password");
        if (pwd.value.length == 0) {
            strength.innerHTML = 'password strength';
        } else if (false == enoughRegex.test(pwd.value)) {
            strength.innerHTML = 'More Characters';
        } else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
        }
}


