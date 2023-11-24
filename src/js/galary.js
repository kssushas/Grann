const refs = {
  galarryLink: document.querySelectorAll('.galarry-link'),
  galaryList: document.querySelector('.galary-list'),
};

const ghUrl = 'https://kssushas.github.io/Grann';

refs.galarryLink.forEach(link => {
  link.addEventListener('click', clickOnGalLink);
});

let targetNumber = 0;
sessionStorage.setItem('btn-value', targetNumber);

function clickOnGalLink(e) {
  e.preventDefault();
  targetNumber = e.target.dataset.num;
  sessionStorage.setItem('btn-value', targetNumber);
  const href = this.getAttribute('href');
  window.location.href = `${ghUrl}${href}`;
}
