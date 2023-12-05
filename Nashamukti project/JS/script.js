const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
  wrapper.classList.add('active');
});
document.addEventListener('DOMContentLoaded', function() {
  const slowSections = document.querySelectorAll('.slow-section');

  slowSections.forEach(function(section, index) {
    // Delay the reveal of each section progressively
    setTimeout(function() {
      section.classList.add('show');
    }, (index + 1) * 1000); // Adjust timing as needed (here, each section appears after 1 second)
  });
});

loginLink.addEventListener('click', ()=>{
  wrapper.classList.remove('active');
});

btnLoginPopup.addEventListener('click', ()=>{
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
  wrapper.classList.remove('active-popup');
});