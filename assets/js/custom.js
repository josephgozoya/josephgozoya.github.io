document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior

      let dropdown = this.nextElementSibling;
      if (dropdown.classList.contains("active")) {
        dropdown.classList.remove("active"); // Hide dropdown if open
      } else {
        document.querySelectorAll(".dropdown").forEach((menu) => menu.classList.remove("active"));
        dropdown.classList.add("active"); // Show clicked dropdown
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu-item")) {
      document.querySelectorAll(".dropdown").forEach((menu) => menu.classList.remove("active"));
    }
  });
});
