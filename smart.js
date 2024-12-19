const conteiner=document.querySelector('.container');
const LoginLink=document.querySelector('.SignInLink')
const RegisterLink=document.querySelector('.SignUpLink')
RegisterLink.addEventListener('click', ()=>{
    conteiner.classList.add('active');
})
LoginLink.addEventListener('click', ()=>{
    conteiner.classList.remove('active');
})