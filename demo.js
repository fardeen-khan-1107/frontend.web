let dropdown = document.querySelector('.dropdown');
dropdown.onclick=function()
{
    dropdown.classList.toggle('active');
}


let dropdown1=document.querySelector('.dropdown1');
dropdown1.onclick=function()
{
    dropdown1.classList.toggle('active');
}


let dropdown2=document.querySelector('.dropdown2');
dropdown2.onclick=function()
{
    dropdown2.classList.toggle('active');
}


var email=document.getElementById("email");
var error=document.getElementById("error");
function main()
{
    if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        error.innerHTML="valid email";
        email.style.border="2px solid green";
        email.style.color="green"
        return false;
    }
    else
    {
        error.innerHTML="invalid email";
        email.style.border="2px solid red";
        return true;
    }
}

function fn(){
    var valid=true;
    var name=document.getElementById('name').value;
    var last=document.getElementById('last').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    if(name==''){
        valid=false;
        var com=document.getElementById('error1');
        com.innerHTML="enter your name";
    }
    else if(name.length<=5){
        valid=false;
        var com=document.getElementById('error1');
        com.innerHTML="name should contain more than 5 char";
    }
    else{
        document.getElementById('error1').innerHTML=" ";
    }

    if(last=='')
    {
        valid=false;
        var error=document.getElementById('error2');
        error.innerHTML='enter last name';
    }
    else
    {
        document.getElementById('error2').innerHTML="";
    }

    if(phone=='')
    {
        valid=false;
        var error=document.getElementById('error4');
        error.innerHTML="enter mobile number";
    }
    else if(phone.length<10 || phone.length>10)
    {
        valid=false;
        var error=document.getElementById('error4');
        error.innerHTML="invalid mobile number";
    }
    else
    {
        document.getElementById('error4').innerHTML="";
    }



    var patter=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(patter))
    {
        valid=false;
        var error=document.getElementById('error3');
        email.style.border="2px solid green";
        error.innerHTML="valid id"; 
    }
    else if(email=='')
    {
        valid=false;
        var error=document.getElementById('error3');
        error.innerHTML="enter your correct id";
    }

    return valid;
}

