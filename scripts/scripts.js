function selectTab(target) {
  const tabNum = target.classList[1].slice(6, 7);

  document.querySelectorAll('.accordion-title').forEach(title => {
    title.classList.remove('title-active');
  });
  target.classList.add('title-active');

  document.querySelectorAll('.plus-minus').forEach(char => {
    char.innerText = '+';
  });
  document.querySelector(`.plus-minus-${tabNum}`).innerText = '-';

  document.querySelectorAll('.accordion-content').forEach(content => {
    content.classList.remove('content-active');
  });
  document.querySelector(`.content-${tabNum}`).classList.add('content-active');
}

document.addEventListener('click', function(event) {
  if (event.target.className.includes('accordion-title')) {
    selectTab(event.target);
  }
});

const toggleNav = () => {
  const menu = document.querySelector('.header-bar-menu');
  if (menu.className.includes('header-bar-menu-hidden')) {
    menu.classList.remove('header-bar-menu-hidden');
  } else {
    menu.classList.add('header-bar-menu-hidden');
  }
};

document.querySelector('.header-bar-menu-text').addEventListener('click', toggleNav);
