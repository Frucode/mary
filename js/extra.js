
// Modal
/* var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
}) */
// Modal

// Side menu

function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const sidebar = document.querySelector('.sidebar');
  menuToggle.classList.toggle('active')
  sidebar.classList.toggle('active')
}

// Side menu