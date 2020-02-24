// omg pure js
const el = document.querySelector('.overlay');
const header = document.querySelector('.wellcome');
const dark = document.querySelector('.dark-mode');
const darkTrigger = document.querySelector('.dark-mode-trigger');
const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;

const showPage = callback => {
  el.classList.add('show-content');
  callback();
};

const zidx = () => {
  setTimeout(() => {
    el.style.zIndex = '-1';
  }, 1000);
};

const goToGithub = () => {
  document.location = 'https://github.com/marcinolszewski';
};

const handleThemeSwitch = e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkTrigger.textContent = 'light mode';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    darkTrigger.textContent = 'dark mode';
    localStorage.setItem('theme', 'light');
  }
};

currentTheme
  ? document.documentElement.setAttribute('data-theme', currentTheme)
  : null;

currentTheme === 'dark'
  ? (darkTrigger.textContent = 'light mode') && (dark.checked = true)
  : (darkTrigger.textContent = 'dark mode') && null;

dark.addEventListener('click', handleThemeSwitch);
header.addEventListener('click', goToGithub);
document.addEventListener('load', showPage(zidx));
