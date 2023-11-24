import { localeStorageKey } from "./localeStorage.js";

const refs = {
    openShopListBtn: document.querySelector('.header-shopping-card'),
    closeShopListBtn: document.querySelector('.shop-close-btn'),
    shopListContainer: document.querySelector('.shop-menu'),
    shopList: document.querySelector('.shopList'),
    shopPriceOrder : document.querySelector('.shop-order-price'),
  };

refs.openShopListBtn.addEventListener('click', toggleShopList);
refs.closeShopListBtn.addEventListener('click', toggleShopList);

function toggleShopList() {
  refs.shopListContainer.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
const localeStorageData = JSON.parse(localStorage.getItem(localeStorageKey)) || [];
  if(!refs.shopListContainer.classList.contains('is-hidden')){
    refs.shopList.innerHTML = markupShopList(localeStorageData);
    refs.shopPriceOrder.innerHTML = markupTotalPrice(localeStorageData);
 }
}

function markupShopList(data) {
 return data.map(el => {
  return `<li class="shopingListItem">
  <img srcset="${el.srcset}" src="${el.src}" alt="${el.title}" class="shop-img">
  <div class="shop-wrap">
    <h2 class="shop-prod-title">${el.title}</h2>
    <p class="shop-price">${el.price}</p>
  </div>
  </li>`
 }).join(' ');
}

function markupTotalPrice(data) {
  const totalPrice = data.reduce((acc, product) => {
    const match = product.price.match(/^\d+/);
    const price = match ? parseInt(match[0],10):0;
    return acc + price;
  }, 0);
  return `<p class="shop-total-price-p">Total cost: ${totalPrice}UAH</p>`
}