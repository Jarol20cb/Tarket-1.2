window.addEventListener("scroll", function() {
    var header = document.querySelector(".headerContainer");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  });



  // Agregamos este código para manejar el evento de clic en los elementos <li>
document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.querySelector(".nav-links");

  // Cerrar el menú al hacer clic en un elemento <li>
  navLinks.addEventListener("click", function() {
    if (window.innerWidth <= 768) {
      menuToggle.checked = false;
    }
  });
});
