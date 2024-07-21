

document.addEventListener("DOMContentLoaded", function () {
  const threeLine = document.querySelector(".threeLine");
  const navItems = document.querySelector(".navItems");
  const navItemCloseBtn = document.querySelector(".navItemCloseBtn");
  const hireMeBtn = document.querySelector("#hireMeBtn");
  const hireMeBtnMobile = document.querySelector("#hireMeBtnMobile");

  threeLine.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });
  navItemCloseBtn.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });
  hireMeBtn.addEventListener("click", () => {
    window.location.href = "./contact.html";
  });
  hireMeBtnMobile.addEventListener("click", () => {
    window.location.href = "./contact.html";
  });
});
