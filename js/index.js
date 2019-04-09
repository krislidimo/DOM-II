//Your code goes here
let nav = document.querySelector('.nav');
console.log(nav);
nav.addEventListener('mouseover', event => {
    if (event.target.tagName === 'A') {
        event.target.style.color = 'blue';
    }
});

let logo = document.querySelector('.logo-heading');
console.log(logo);
logo.addEventListener('mouseover', event => {
    event.target.style.animation = 'newMove 4s 1';
});

window.addEventListener('load', event => {
    alert('Welcome to FunBus!');
});

let imgs = document.querySelector('.home');
console.log(imgs);
imgs.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        event.target.style.border = '2px dashed red';
    }
});

let page = document.querySelector('.container');
console.log(page);
page.addEventListener('resize', event => {
    event.target.style.background = 'red';
});

let text = document.querySelector('.intro p');
text.addEventListener('select', event => {
    // if (event.target.tagName === 'p') {
    event.target.style.background = 'yellow';
    // }
});

let h2 = document.querySelector('.home');
h2.addEventListener('select', event => {
    if (event.target.tagName === 'h1') {
        event.target.style.textDecoration = 'underline';
    }
});