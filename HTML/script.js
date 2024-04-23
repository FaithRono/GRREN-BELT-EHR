import { createClient } from '@supabase/supabase-js'
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
const { createClient } = _supabase
 const _supabase = createClient('https://wvksmwyiajqlisnmejit.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2a3Ntd3lpYWpxbGlzbm1laml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjEwNzMsImV4cCI6MjAyOTEzNzA3M30.dtyej_wD3t_OT6Uwsyn1fEO43XhBPQK6xbI4CcA2wGs')
console.log(_supabase)
