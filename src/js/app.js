'use strict';
const hamburgerButton = document.querySelector('.header__hamburger');
const listLinks = document.querySelectorAll('.header__link');

const toggleMenu = () => {
  const menu = document.querySelector('.header__menu');
  const hamburgerLine = document.querySelector('.header__line');
  const body = document.querySelector('body');
  menu.classList.toggle('header__menu-off');
  hamburgerLine.classList.toggle('header__line-active');
  body.classList.toggle('body-overflow');
};

hamburgerButton.addEventListener('click', toggleMenu);
listLinks.forEach((listLink) => listLink.addEventListener('click', toggleMenu));

const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const formTextarea = document.querySelector('.form__textarea');
const formEmailMessage = document.querySelector('.form__paragraph-email');
const formTextMessage = document.querySelector('.form__paragraph-text');

const checkEmail = () => {
  const reg =
    /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
  if (!reg.test(formInput.value)) {
    formEmailMessage.textContent = 'E-mail jest niepoprawny';
    formInput.classList.add('form-active');
  } else {
    formEmailMessage.textContent = '';
    formInput.classList.remove('form-active');
  }
};

formInput.addEventListener('input', checkEmail);

const checkMessage = () => {
  if (formTextarea.value.length < 1) {
    formTextMessage.textContent = 'Wiadomość nie może być pusta';
    formTextarea.classList.add('form-active');
  } else {
    formTextMessage.textContent = '';
    formTextarea.classList.remove('form-active');
  }
};

formTextarea.addEventListener('input', checkMessage);

const checkForm = (e) => {
  e.preventDefault();

  if (
    formInput.classList.contains('form-active') ||
    formTextarea.classList.contains('form-active')
  ) {
    alert('Coś poszło nie tak!');
  } else {
    e.target.submit();
  }
};

form.addEventListener('submit', checkForm);

const changeButtonColor = () => {
  const hamburgerLine = document.querySelector('.header__line');
  if (window.scrollY >= window.innerHeight) {
    hamburgerLine.classList.add('header__line-gray');
  } else {
    hamburgerLine.classList.remove('header__line-gray');
  }
};

window.addEventListener('scroll', changeButtonColor);

const media = window.matchMedia('(min-width: 768px)');

if (media.matches) {
  listLinks.forEach((listLink) =>
    listLink.removeEventListener('click', toggleMenu)
  );
}
