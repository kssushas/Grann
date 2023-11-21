const refs = {
    openShopListBtn: document.querySelector('[data-shopList-open]'),
    closeShopListBtn: document.querySelector('[data-shopList-close]'),
    shopList: document.querySelector('[data-shopList]'),
  };

refs.openShopListBtn.addEventListener('click', toggleList);
refs.closeShopListBtn.addEventListener('click', toggleList);

function toggleList() {
  refs.shopList.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}