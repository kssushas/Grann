import { responseBestSellers } from '../js/cakesApi';
import {checkLocaleStorage} from '../js/localeStorage';
import svg from '../img/svg.svg#icon-shoping-cart';

const refs = {
  prevEl: document.querySelector('.prevEl'),
  nextEl: document.querySelector('.nextEl'),
  nextElMob : document.querySelector('.nextElMob'),
  prevElMob : document.querySelector('.prevElMob'),
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

  const numberOfVisibleEl = 4;
  refs.nextEl.addEventListener('click', clickOnNextElDesk);
  refs.prevEl.addEventListener('click', clickOnPrevElDesk);

  for (let i = 0; i < responseBestSellers.length; i += 1) {
    total += markupBest(i);
  }

  refs.bestlist.innerHTML = total;
  checkLocaleStorage();
 

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
  refs.nextElMob.addEventListener('click', clickOnNextEl);
  refs.prevElMob.addEventListener('click', clickOnPrevEl);

  renderBestProd(counter);

  function renderBestProd(counter) {
    total = markupBest(counter) + markupBest(counter + 1);
    refs.bestlist.innerHTML = total;
    checkLocaleStorage();
    switch (counter) {
      case 0:
        refs.el1.style.fill = '#705A66';
        refs.el2.style.fill = '#F5EEE0';
        refs.el3.style.fill = '#F5EEE0';
        refs.prevElMob.style.backgroundColor = 'transparent';
        refs.nextElMob.style.backgroundColor = '#F5EEE0';
        break;
      case 2:
        refs.el1.style.fill = '#F5EEE0';
        refs.el2.style.fill = '#705A66';
        refs.el3.style.fill = '#F5EEE0';
        refs.nextElMob.style.backgroundColor = '#F5EEE0';
        refs.prevElMob.style.backgroundColor = '#F5EEE0';
        break;
      case 4:
        refs.el1.style.fill = '#F5EEE0';
        refs.el2.style.fill = '#F5EEE0';
        refs.el3.style.fill = '#705A66';
        refs.nextElMob.style.backgroundColor = 'transparent';
        refs.prevElMob.style.backgroundColor = '#F5EEE0';
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
        return `<li class="best-item" id=${el.id}>
        <div class="js-img-cover">
        <img srcset="${el.srcset}" src="${el.src}" alt="cakes" loading ="lazy" class="best-img fade-in">
        <div class="js-btn-wrap">
        <button class="js-detailed-btn best-remove-btn">Remove from the shoping list</button>
        </div>
        </div>
        <div class="best-wrap">
        <h4 class="best-list-title">${el.title}</h4>
        <p class="best-list-p">${el.price}</p>
        <svg class="best-shop-card js-add-basket" width="30" height="30"><use href="${svg}"></use></svg>
        </div>
        </li>`;
      }
    })
    .join(' ');
}