//Js for toggle btn
const before = document.getElementById('before')
const after = document.getElementById('after')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')


after.style.display='none'
btn1.addEventListener('change',goToAfter)
btn2.addEventListener('change',goToBefore)

function goToAfter(){
  after.style.display="grid"
  before.style.display='none'
  after.style.visibility='visible'

  x = document.getElementById('btn1').checked ;
  if(x)
  document.getElementById('btn1').checked = false;
  else
  document.getElementById('btn1').checked = true;
}

function goToBefore(){
  before.style.display="grid"
  after.style.display='none'
  before.style.visibility='visible'

  x = document.getElementById('btn2').checked ;
  if(x)
  document.getElementById('btn2').checked = false;
  else
  document.getElementById('btn2').checked = true;
}

//js for login
const login = document.querySelector('.login')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openLogin)
closeBtn.addEventListener('click', closeLogin)
window.addEventListener('click', outsideClick)

function openLogin() {
  login.style.display = 'block'
}

function closeLogin() {
  login.style.display = 'none'
}

function outsideClick(e) {
  if (e.target == login) {
    closeLogin()
  }
}



