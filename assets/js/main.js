const headerMenu = document.querySelector(".header");
const burgerMenu = document.querySelector(".flex-burger .btn-menu");
const burgerMenuSpan = document.querySelector(".flex-burger .btn-menu");
const closebtn = document.querySelector(".closebtn");
burgerMenu.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "100%";
});

burgerMenuSpan.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "100%";
});

closebtn.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
});

function hideCards() {
  document.querySelectorAll(".cardbody").forEach((card) => {
    card.classList.remove("dblock");
    card.classList.remove("dnone");
    card.classList.add("dnone");
  });

  document.querySelectorAll(".minusicon").forEach((minus) => {
    const p = minus.previousElementSibling;
    p.classList.remove("dnone");
    p.classList.remove("dblock");
    p.classList.add("dblock");
    minus.classList.remove("dblock");
    minus.classList.remove("dnone");
    minus.classList.add("dnone");
  });
}

document.querySelectorAll(".plusicon").forEach((plus) => {
  plus.addEventListener("click", () => {
    hideCards();
    const o = plus.nextElementSibling;
    const m = o.nextElementSibling;
    plus.classList.remove("dblock");
    plus.classList.add("dnone");

    o.classList.remove("dnone");
    o.classList.remove("dblock");
    o.classList.add("dblock");

    if (m.className.split(" ").includes("cardbody")) {
      m.classList.remove("dblock");
      m.classList.add("dblock");
      m.classList.remove("dnone");
    }
  });
});

document.querySelectorAll(".minusicon").forEach((minus) => {
  minus.addEventListener("click", () => {
    const o = minus.nextElementSibling;
    const p = minus.previousElementSibling;

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
  } else {
    headerMenu.classList.remove("header-stick");
    headerMenu.classList.add("header-before-stick");
  }
});
