const darkMode = document.querySelector('#flexSwitchCheckDefault')
const footerDark = document.querySelector('footer')
const icon = document.querySelector('a')
const body = document.querySelector('body')
const dark = () => {
  body.style.backgroundColor === 'black' ? body.style.backgroundColor = 'white' : body.style.backgroundColor = 'black';
  body.style.color === 'white' ? body.style.color = 'black' : body.style.color = 'white';
 footerDark.style.backgroundColor === 'black' ? footerDark.style.backgroundColor = 'white' : footerDark.style.backgroundColor = 'black';
  footerDark.style.color === 'white' ? footerDark.style.color = 'black' : footerDark.style.color = 'white';
 }

darkMode.addEventListener('click', dark)