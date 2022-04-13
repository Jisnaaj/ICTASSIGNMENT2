const form = document.getElementById("forms");


function validate(){
    var email=document.getElementById("email");
    var pass= document.getElementById("pass");
    let error=document.getElementById("error");
    var regexp=  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9])+\.([a-z]{2,3})(.[a-z]{2,3})?$/
    var regexp2= /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/
     
        if(email.value==""){
            error.innerHTML="empty email"
            error.style.color="red";
            return false;
        }

        else if(!regexp.test(email.value)){
            error.innerHTML="inavalid email";
            error.style.color="orange";
            return false;
        }
         else if(pass.value=="")
         {
             error.innerHTML="empty password";
             error.style.color="red";
             return false;
         }
            
     
         else if(!regexp2.test(pass.value))
         {
            error.innerHTML="inavalid password";
            error.style.color="orange";
            return false;
         }
    else {
        error.innerHTML="valid ";
        error.style.color="deep pink";
        return true;
    }
}

form.addEventListener('submit',function (event)
{
    if(!validate()){
        event.preventDefault();
   }
});