import { dataArray } from './cakesApi';

const refs = {
  listOfProducts: document.querySelector('.storage-js'),
};
export const localeStorageKey = 'data';
let arrayOfChosenBooks = [];

if (localStorage.getItem(localeStorageKey)) {
  arrayOfChosenBooks = JSON.parse(localStorage.getItem(localeStorageKey));
}

if (refs.listOfProducts) {
  refs.listOfProducts.addEventListener('click', clickOnSvg);
}

function clickOnSvg(e) {
  if (e.target.nodeName !== 'use') {
    return;
  }
  const targetId = e.target.closest('li').id;
  addToLocaleStorage(targetId);
}

const clickRemove = (imgWrapper, shopIcon, foundObject) => {
  const handler = e => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }
    imgWrapper.classList.remove('show-wrap');
    shopIcon.style.display = 'block';
    clickOnRemoveBtn(foundObject);
    imgWrapper.removeEventListener('click', handler);
  };

  return handler;
};

function addToLocaleStorage(id) {
  const foundObject = dataArray.flat().find(item => item.id === parseInt(id));
  arrayOfChosenBooks.push(foundObject);
  localStorage.setItem(localeStorageKey, JSON.stringify(arrayOfChosenBooks));
  const li = document.getElementById(id);
  const imgWrapper = li.querySelector('.js-btn-wrap');
  const shopIcon = li.querySelector('.js-add-basket');
  imgWrapper.classList.add('show-wrap');
  shopIcon.style.display = 'none';
  imgWrapper.addEventListener(
    'click',
    clickRemove(imgWrapper, shopIcon, foundObject)
  );
}

export function checkLocaleStorage() {
  if (localStorage.getItem(localeStorageKey)) {
    const data = JSON.parse(localStorage.getItem(localeStorageKey));
    console.log(data)
    for (let value of data) {
      if (document.getElementById(value.id)) {
        const foundObject = dataArray
          .flat()
          .find(item => item.id === parseInt(value.id));
        const li = document.getElementById(value.id);
        console.log(li)
        const imgWrapper = li.querySelector('.js-btn-wrap');
        console.log(imgWrapper)
        const shopIcon = li.querySelector('.js-add-basket');
        console.log(shopIcon)
        imgWrapper.classList.add('show-wrap');
        shopIcon.style.display = 'none';
        imgWrapper.addEventListener(
          'click',
          clickRemove(imgWrapper, shopIcon, foundObject)
        );
      }
    }
  }
}

function clickOnRemoveBtn(foundObject) {
  const indexToDelete = arrayOfChosenBooks.findIndex(
    obj => obj.id === foundObject.id
  );
  arrayOfChosenBooks.splice(indexToDelete, 1);
  localStorage.setItem(localeStorageKey, JSON.stringify(arrayOfChosenBooks));
}
