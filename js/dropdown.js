// Funzione per mostrare/nascondere il menu dropdown
export function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Chiudere il menu dropdown se l'utente clicca fuori di esso
  export function closeDropdownOnClickOutside() {
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }
  export function setupNavbarCollapse() {
    document.addEventListener('DOMContentLoaded', function () {
      var navbarCollapse = document.getElementById('navbarNav');
      var navLinks = navbarCollapse.querySelectorAll('.nav-link');
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
  
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          bsCollapse.hide();
        });
      });
    });
  }
  