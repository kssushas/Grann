import { responseBestSellers } from '../js/cakesApi';

const refs = {
  prevEl: document.querySelector('.prevEl'),
  nextEl: document.querySelector('.nextEl'),
  bestlist: document.querySelector('.bestlist'),
  el1: document.querySelector('.el-1'),
  el2: document.querySelector('.el-2'),
  el3: document.querySelector('.el-3'),
};

refs.prevEl.style.backgroundColor = 'transparent';
refs.nextEl.style.backgroundColor = '#F5EEE0';

const screenWidth = window.innerWidth;
let counter = 0;
let total = '';

if (screenWidth > 1000) {
  refs.el3.style.display = 'none';
  refs.el1.style.display = 'none';
  refs.el2.style.display = 'none';

  const numberOfVisibleEl = 4;
  refs.nextEl.addEventListener('click', clickOnNextElDesk);
  refs.prevEl.addEventListener('click', clickOnPrevElDesk);

  for (let i = 0; i < responseBestSellers.length; i += 1) {
    total += markupBest(i);
  }

  refs.bestlist.innerHTML = total;

  const images = document.querySelectorAll('.best-item');

  for (let i = 0; i < images.length - numberOfVisibleEl; i += 1) {
    images[numberOfVisibleEl + i].style.display = 'none';
  }

  function checkBtnColor() {
    switch (counter) {
      case images.length - numberOfVisibleEl:
        refs.prevEl.style.backgroundColor = '#F5EEE0';
        refs.nextEl.style.backgroundColor = 'transparent';
        break;
      case 0:
        refs.prevEl.style.backgroundColor = 'transparent';
        refs.nextEl.style.backgroundColor = '#F5EEE0';
        break;
      default:
        refs.nextEl.style.backgroundColor = '#F5EEE0';
        refs.prevEl.style.backgroundColor = '#F5EEE0';
    }
  }

  function clickOnNextElDesk() {
    if (counter >= images.length - numberOfVisibleEl) {
      return;
    }
    refs.bestlist.style.justifyContent = 'flex-end';

    images[numberOfVisibleEl + counter].style.display = 'block';
    images[counter].style.display = 'none';
    counter += 1;

    checkBtnColor();
  }

  function clickOnPrevElDesk() {
    if (counter <= 0) {
      return;
    }
    refs.bestlist.style.justifyContent = 'flex-start';

    counter -= 1;
    images[numberOfVisibleEl + counter].style.display = 'none';
    images[counter].style.display = 'block';
    
    checkBtnColor();
  }
}

if (screenWidth < 1000) {
  refs.nextEl.addEventListener('click', clickOnNextEl);
  refs.prevEl.addEventListener('click', clickOnPrevEl);

  renderBestProd(counter);

  function renderBestProd(counter) {
    total = markupBest(counter) + markupBest(counter + 1);
    refs.bestlist.innerHTML = total;
    switch (counter) {
      case 0:
        refs.el1.style.fill = '#705A66';
        refs.el2.style.fill = '#F5EEE0';
        refs.el3.style.fill = '#F5EEE0';
        refs.prevEl.style.backgroundColor = 'transparent';
        refs.nextEl.style.backgroundColor = '#F5EEE0';
        break;
      case 2:
        refs.el1.style.fill = '#F5EEE0';
        refs.el2.style.fill = '#705A66';
        refs.el3.style.fill = '#F5EEE0';
        refs.nextEl.style.backgroundColor = '#F5EEE0';
        refs.prevEl.style.backgroundColor = '#F5EEE0';
        break;
      case 4:
        refs.el1.style.fill = '#F5EEE0';
        refs.el2.style.fill = '#F5EEE0';
        refs.el3.style.fill = '#705A66';
        refs.nextEl.style.backgroundColor = 'transparent';
        refs.prevEl.style.backgroundColor = '#F5EEE0';
        break;
    }
  }

  function clickOnNextEl() {
    counter += 2;
    if (responseBestSellers[counter + 1] === undefined) {
      return;
    }
    renderBestProd(counter);
  }

  function clickOnPrevEl() {
    counter -= 2;
    if (responseBestSellers[counter] === undefined) {
      return;
    }
    renderBestProd(counter);
  }
}

function markupBest(counter) {
  return responseBestSellers
    .map((el, index) => {
      if (counter === index) {
        return `<li class="best-item"><img srcset="${el.srcset}" src="${el.src}" alt="cakes" loading ="lazy" class="best-img fade-in"><div class="best-wrap"><h4 class="best-list-title">${el.title}</h4><p class="best-list-p">${el.price}</p><svg class="best-shop-card" width="30" height="30"><use href="../img/svg.svg#icon-shoping-cart"></use></svg></div></li>`;
      }
    })
    .join(' ');
}
