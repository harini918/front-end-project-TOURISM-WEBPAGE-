let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

searchBtn.addEventListener('click', function(){
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', function(){
    loginForm.classList.add('active');
});

formClose.addEventListener('click', function(){
    loginForm.classList.remove('active');
});