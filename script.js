const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  // Alterna entre ícone de menu e ícone de fechar
  toggleButton.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
});
