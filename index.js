"use ctrict";

$("#login").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-dark")) {
    console.log(e.target);
    const idMovie = e.target.getAttribute("data-read");
    showModal(idMovie);
    $(".modal-window").classList.remove("modal-hide");
  }
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-window")) {
    $("#close").classList.toggle("animete");
  }
});



$(".nav__span").addEventListener("click", () => {
  $("#card").style.transform= 'translateY(0%)'
});

$("#card_x").addEventListener("click", () => {
  $("#card").style.transform= 'translateY(-200%)'
});


// ------------------MODAL JS -------------------------
"use strict";

$('#login_x').addEventListener("click", () => {
  $(".modal").style.transform="translateY(-200%)"
  $('.overlay').style.display='none'
});

$('#login').addEventListener("click", () => {
  $(".modal").style.transform="translateY(0%)"
  $('.overlay').style.display='block'
});

$('#loginn').addEventListener("click", () => {
  $(".modal").style.transform="translateY(0%)"
  $('.overlay').style.display='block'
});



const registration = (e) => {
  e.preventDefault();

  const userName = $("#username").value.trim();
  const userPassword = $("#password").value.trim();

  if (
    userName.length === 0 ||
    userPassword.length === 0
  ) {
    alert("MALUMOT TOLIQ EMAS ");
  } else {
   alert("SUCCESS")
  }
};


let userName = document.querySelector("#username"),
  passWord = document.querySelector("#password"),
  koz = document.querySelector(".koz");


userName.addEventListener("blur", (event) => {
  if (event.target.value.trim().length === 0) {
    event.target.style.border = "2px solid red";
    event.target.setAttribute("placeholder", "Plasse fill input ..... ");
  } else {
    event.target.style.border = "2px solid green";
    event.target.setAttribute("placeholder", "Eter username ");
  }
});

passWord.addEventListener("blur", (event) => {
  if (event.target.value.trim().length === 0) {
    event.target.style.border = "2px solid red";
    event.target.setAttribute("placeholder", "Plasse fill input ..... ");
  } else {
    event.target.style.border = "2px solid green";
    event.target.setAttribute("placeholder", "Eter username ");
  }
});

passWord.addEventListener("keyup", (event) => {
  if (event.target.value.trim().length === 0) {
    koz.setAttribute("class", "koz d-none");
  } else {
    koz.setAttribute("class", "koz d-black");
  }
});

koz.addEventListener("click", () => {
  if (passWord.getAttribute("type") === "password") {
    passWord.setAttribute("type", "text");
    koz.innerHTML = `<i class="bi bi-eye"></i>`;
  } else {
    passWord.setAttribute("type", "password");
    koz.innerHTML = `<i class="bi  bi-eye-slash"></i>`;
  }
});



$('#compact').addEventListener("click", () => {
  $('#first').style.display = "flex";
  $('#second').style.display = "none";
  $('#third').style.display = "none";
})

$('#sport').addEventListener("click", () => {
  $('#second').style.display = "flex";
  $('#first').style.display = "none";
  $('#third').style.display = "none";
})

$('#vans').addEventListener("click", () => {
  $('#third').style.display = "flex";
  $('#second').style.display = "none";
  $('#first').style.display = "none";
})

var swiper = new Swiper(".mySwiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});