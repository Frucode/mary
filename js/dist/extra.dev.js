"use strict";

// Modal

/* var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
}) */
// Modal
// Side menu
function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var sidebar = document.querySelector('.sidebar');
  menuToggle.classList.toggle('active');
  sidebar.classList.toggle('active');
} // Side menu