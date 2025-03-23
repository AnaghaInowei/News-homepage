document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar      = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
      // Toggle active class on both toggle button and navbar
      menuToggle.classList.toggle('active');
      navbar.classList.toggle('active');
    });
  });
