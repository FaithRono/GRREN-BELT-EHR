const signInBtnlink = document.querySelector('.signInBtnlink');
const signUpBtnlink = document.querySelector('.signInBtnlink');
const wrapper = document.querySelector('.wrapper');

signUpBtnlink.addEventListener('click',() => {wrapper.classList.toggle('active');
});

signInBtnlink.addEventListener('click',() => {wrapper.classList.toggle('active');
});


