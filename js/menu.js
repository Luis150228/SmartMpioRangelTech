const btn = document.querySelector('#btn-menu');
const imgApp = document.querySelector('#img-app');
const menu = document.querySelector('#sidemenu');
const headerMain = document.querySelector('#main-content');
const headerFix = document.querySelector('header');
const btnmin = document.querySelectorAll('.las la-angle-up')

btn.addEventListener('click', e=>{
    menu.classList.toggle('sidebar-min')
    menu.classList.toggle('sidebar-full')
    headerMain.classList.toggle('main-content-min')
    headerMain.classList.toggle('main-content-full')
    headerFix.classList.toggle('head-min')
    headerFix.classList.toggle('head-full')
});

imgApp.addEventListener('mouseenter', e=>{
    menu.classList.toggle('sidebar-min')
    menu.classList.toggle('sidebar-full')
    headerMain.classList.toggle('main-content-min')
    headerMain.classList.toggle('main-content-full')
    headerFix.classList.toggle('head-min')
    headerFix.classList.toggle('head-full')
});

imgApp.addEventListener('mouseout', e=>{
    menu.classList.toggle('sidebar-min')
    menu.classList.toggle('sidebar-full')
    headerMain.classList.toggle('main-content-min')
    headerMain.classList.toggle('main-content-full')
    headerFix.classList.toggle('head-min')
    headerFix.classList.toggle('head-full')
});