const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  mobileMenuLinks: document.querySelectorAll('.mob-link'),
};

const mob = document.querySelector('mob');
mob.addEventListener('click', ()=> {
  console.log(window.location)
  console.log(window.location.href)
  console.log(window.location.pathname)
})

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
  
  console.log(hrefLink)
  console.log(targetId)
  console.log( window.location.pathname)
  console.log( window.location)
  // if( hrefLink !== window.location.pathname) {
  //   window.location = `${hrefLink}#${targetId}`;
  // }
 if( `/Grann/${hrefLink}` !== window.location.pathname) {
window.location.href = `https://kssushas.github.io/Grann/${hrefLink}#${targetId}`
  }

 
  
}