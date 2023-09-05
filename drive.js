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



let popup=document.getElementById("popup");
function openpopup()
{
    popup.classList.add("open-popup");
}
function showModle()
{
    document.querySelector(".overlay").classList.add("showoverlay");
}
function closepopup()
{
    document.querySelector(".overlay").classList.remove("showoverlay");
    popup.classList.remove("open-popup");
}


let popup1=document.getElementById("popup1");
function openpopup1()
{
    popup1.classList.add("open-popup1");
}
function showModle()
{
    document.querySelector(".overlay").classList.add("showoverlay");
}
function closepopup1()
{
    popup1.classList.remove("open-popup1");
    document.querySelector(".overlay").classList.remove("showoverlay");
}




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay:2500,
    },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

