const sidebar = document.querySelector('.sidebar');
const hamber = document.querySelector('.hamburger-icon');
const mainContent = document.querySelector('.main-content');
const menuToggle = document.querySelector('#menu-toggle');

hamber.addEventListener('click', function(){
     sidebar.classList.toggle('active')
     mainContent.classList.toggle('active');
     menuToggle.classList.toggle('active')
})

menuToggle.addEventListener('click', function(){
     sidebar.classList.toggle('active')
     mainContent.classList.toggle('active');
     menuToggle.classList.toggle('active')
})