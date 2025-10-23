const menu = document.querySelector('.menu-hamburger')
const nav = document.querySelector('.navigation')

menu.addEventListener('click',()=>{
    nav.classList.toggle('active')
})

document.querySelectorAll('.menu li a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('active'));
});