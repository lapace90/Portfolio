import { toggleDropdown, closeDropdownOnClickOutside, setupNavbarCollapse } from './dropdown.js';
import { changeLanguage, loadCurrentLanguage } from './translations.js';

// Inizializza tutte le funzionalità
document.addEventListener('DOMContentLoaded', function() {
  setupNavbarCollapse();
  closeDropdownOnClickOutside();
  loadCurrentLanguage();

  document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);
  
  document.getElementById('lang').addEventListener('change', function() {
    changeLanguage(this.value);
  });
});

import { toggleDropdown, closeDropdownOnClickOutside } from './dropdown.js';
import { setupNavbarCollapse } from './navbar.js';
import { changeLanguage, loadCurrentLanguage } from './translations.js';

// Inizializza tutte le funzionalità
document.addEventListener('DOMContentLoaded', function() {
  setupNavbarCollapse();
  closeDropdownOnClickOutside();
  loadCurrentLanguage();

  document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);
  
  document.getElementById('lang').addEventListener('change', function() {
    changeLanguage(this.value);
  });
});
