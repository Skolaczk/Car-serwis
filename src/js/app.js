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
