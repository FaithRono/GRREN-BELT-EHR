/*const signInBtnlink = document.querySelector('.signInBtnlink');
const signUpBtnlink = document.querySelector('.signInBtnlink');
const wrapper = document.querySelector('.wrapper');

signUpBtnlink.addEventListener('click',() => {wrapper.classList.toggle('active');
});

signInBtnlink.addEventListener('click',() => {wrapper.classList.toggle('active');
});*/

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
