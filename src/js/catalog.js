import Swiper from 'swiper';
import {
  responseChouxPastry,
  responseTistechko,
  responsePizza,
  responseBestSellers,
} from './cakesApi';

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

const dataArray = [
  responseBestSellers,
  responseTistechko,
  responseChouxPastry,
  responsePizza,
];
let selectedBtn = null;

refs.swiperWrapper.addEventListener('click', clickOnBtn);
refs.catalList.innerHTML = markupCatalog(dataArray[0]);
changeBtnColor(0);

function clickOnBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  refs.catalList.innerHTML = markupCatalog(dataArray[e.target.id]);
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
      return `<li class="catal-item">
        <img src="${el.src}" alt="cakes" loading ="lazy" class="catalog-img fade-in">
        <div class="catal-wrap">
        <h4 class="catal-list-title">${el.title}</h4>
        <p class="catal-list-p">${el.price}</p>
        <svg class="catal-shop-card"><use href="../img/svg.svg#icon-shoping-cart"></use></svg>
        </div>
        </li>`;
    })
    .join(' ');
}
