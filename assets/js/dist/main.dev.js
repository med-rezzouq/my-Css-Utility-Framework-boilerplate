"use strict";

var headerMenu = document.querySelector(".header");
var burgerMenu = document.querySelector(".flex-burger .btn-menu");
var burgerMenuSpan = document.querySelector(".flex-burger .btn-menu");
var closebtn = document.querySelector(".closebtn");
var notActiveLang = document.querySelector(".not-active-lang");
burgerMenu.addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "100%";
});
burgerMenuSpan.addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "100%";
});
closebtn.addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "0";
});

function hideCards() {
  document.querySelectorAll(".cardbody").forEach(function (card) {
    card.classList.remove("dblock");
    card.classList.remove("dnone");
    card.classList.add("dnone");
  });
  document.querySelectorAll(".minusicon").forEach(function (minus) {
    var p = minus.previousElementSibling;
    p.classList.remove("dnone");
    p.classList.remove("dblock");
    p.classList.add("dblock");
    minus.classList.remove("dblock");
    minus.classList.remove("dnone");
    minus.classList.add("dnone");
  });
}

document.querySelectorAll(".plusicon").forEach(function (plus) {
  plus.addEventListener("click", function () {
    hideCards();
    var o = plus.parentElement;
    var ms = plus.nextElementSibling;
    console.log(o);
    var m = o.nextElementSibling;
    plus.classList.remove("dblock");
    plus.classList.add("dnone");
    ms.classList.remove("dnone");
    ms.classList.remove("dblock");
    ms.classList.add("dblock");

    if (m.className.split(" ").includes("cardbody")) {
      m.classList.remove("dblock");
      m.classList.add("dblock");
      m.classList.remove("dnone");
    }
  });
});
document.querySelectorAll(".minusicon").forEach(function (minus) {
  minus.addEventListener("click", function () {
    var o = minus.parentElement.nextElementSibling;
    var p = minus.previousElementSibling;
    minus.classList.remove("dblock");
    minus.classList.add("dnone");
    p.classList.remove("dnone");
    p.classList.add("dblock");

    if (o.className.split(" ").includes("cardbody")) {
      o.classList.add("dblock");
      o.classList.remove("dblock");
      o.classList.add("dnone");
    }
  });
});
window.addEventListener("scroll", function (event) {
  if (window.scrollY > 100) {
    headerMenu.classList.add("header-stick");
    headerMenu.classList.remove("header-before-stick");
    notActiveLang.classList.remove("whiteBg");
    notActiveLang.classList.add("whiteBg");
  } else {
    headerMenu.classList.remove("header-stick");
    headerMenu.classList.add("header-before-stick");
    notActiveLang.classList.remove("whiteBg");
  }
});