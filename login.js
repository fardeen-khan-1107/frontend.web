document.getElementById("email").addEventListener("focus",function()
{
    document.getElementById("email").style.background='#f3f3f3';
});

document.getElementById("email").addEventListener("blur",function(){
    document.getElementById("email").style.backgrounds='none';
});




document.getElementById("password").addEventListener("focus",function()
{
    document.getElementById("password").style.background='#f3f3f3';
});

document.getElementById("password").addEventListener("blur",function(){
    document.getElementById("password").style.backgrounds='none';
});


var email=document.getElementById("email");
var error=document.getElementById("error");
function validemail()
{
    if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        error.innerHTML="";
        email.style.border="2px solid green";
        return false;
    }
    else
    {
        error.innerHTML="invalid email";
        email.style.border="2px solid red";
        return true;
    }
}



let eyeopen=document.getElementById('eye-open');
let password=document.getElementById('password');

eyeopen.onclick=function()
{
    if(password.type=="password")
    {
        password.type="text";
        eyeopen.src="img28.png"
    }
    else
    {
        password.type="password";
        eyeopen.src="img27.png"
    }
}