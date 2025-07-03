document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      console.log("Toggle clicked!"); // Check if this logs
    });
  } else {
    console.error("Menu toggle or nav menu not found.");
  }
});








