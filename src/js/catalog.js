import Swiper from 'swiper';
import {
  dataArray
} from './cakesApi';
import svg from '../img/svg.svg#icon-shoping-cart';
// import { checkLocaleStorage } from './localeStorage';

if (window.innerWidth < 600) {
  new Swiper('.swiper', {
    spaceBetween: 16,
    slidesPerView: 'auto',
  });
}



const refs = {
  catalList: document.querySelector('.catalog-list'),
  catalBtns: document.querySelectorAll('.catalog-btn'),
  swiperWrapper: document.querySelector('.swiper-wrapper'),
};

let selectedBtn = null;

refs.swiperWrapper.addEventListener('click', clickOnBtn);
refs.catalList.innerHTML = markupCatalog(dataArray[0]);
checkLocaleStorage();
changeBtnColor(0);

function clickOnBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  refs.catalList.innerHTML = markupCatalog(dataArray[e.target.id]);
  checkLocaleStorage();
  changeBtnColor(e.target.id);
}

function changeBtnColor(id) {
  if (selectedBtn !== null) {
    refs.catalBtns[selectedBtn].classList.remove('js-btn-color');
  }
  refs.catalBtns[id].classList.add('js-btn-color');
  selectedBtn = id;
}

function markupCatalog(data) {
  return data
    .map(el => {
      return `<li class="catal-item" id=${el.id}>
      <div class="js-img-cover">
        <img src="${el.src}" alt="cakes" loading ="lazy" class="catalog-img fade-in">
        <div class="js-btn-wrap">
        <button class="js-detailed-btn catalog-remove-btn">Remove from the shoping list</button>
        </div>
        </div>
        <div class="catal-wrap">
        <h4 class="catal-list-title">${el.title}</h4>
        <p class="catal-list-p">${el.price}</p>
        <svg class="catal-shop-card js-add-basket"><use href="${svg}"></use></svg>
        </div>
        </li>`;
    })
    .join(' ');
}
