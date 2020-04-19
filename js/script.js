document.querySelector('.fa-times').addEventListener('click', function () {
    document.querySelector('.fa-times').classList.toggle('close-menu')
    document.querySelector('.fa-bars').classList.toggle('open-menu')
    document.querySelector('.navigation').classList.toggle('open-menu');

});
const date = new Date().getFullYear();
const copyRightP = document.querySelector('.footer') ;
copyRightP.innerText += ` ${date}`;


document.querySelector('.fa-bars').addEventListener('click', function () {
    document.querySelector('.fa-bars').classList.toggle('open-menu');
    document.querySelector('.fa-times').classList.toggle('close-menu');
    document.querySelector('.navigation').classList.toggle('open-menu');

});
//document.querySelector('.fa-times').classList.toggle('close-menu');