(function () {
  var toggle = document.querySelector(".ukec-site-toggle");
  var menu = document.querySelector(".ukec-site-menu");
  var year = document.getElementById("currentYear");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
})();
