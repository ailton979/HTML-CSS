const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', () => {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
});
