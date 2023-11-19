const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  mobileMenuLinks: document.querySelectorAll('.mob-link'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
document.addEventListener('DOMContentLoaded', documentFunction);

function toggleMenu() {
  refs.menu.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function documentFunction() {
  refs.mobileMenuLinks.forEach(link => {
    link.addEventListener('click', clickOnLink);
  });
}

function clickOnLink(e) {
  e.preventDefault();
 
  const hrefLink = this.getAttribute('href').split('#')[0];
  const targetId = this.getAttribute('href').split('#')[1];
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
    });

    refs.menu.classList.add('is-hidden');
    document.body.classList.toggle('no-scroll');
  

  }   
  // if( hrefLink !== window.location.pathname) {
  //   window.location = `${hrefLink}#${targetId}`;
  // }
}
