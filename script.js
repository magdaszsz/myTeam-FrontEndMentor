const showBtn = document.querySelector('.show-menu');
const mobileMenu = document.querySelector('.mobile-list');
const hideBtn = document.querySelector('.hide-menu')

showBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show-menu');
})

hideBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show-menu');
})