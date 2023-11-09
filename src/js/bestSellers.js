// import { responseBestSellers } from '../js/cakesApi';

const responseBestSellers = [
  {
      src : "./img/best-1-1x.jpg",
      srcset : "./img/best-1-2x-min.jpg 2x",
      title : "Mango-Passionfruit mousse cake",
      price : "1200UAH/3kg",
  },
  {
      src : "./img/best-2-1x.jpg",
      srcset : "./img/best-2-2x-min.jpg 2x",
      title : "Chocolate brownie",
      price : "300UAH/3pcs",
  },
  {
      src : "./img/best-3-1x-min.jpg",
      srcset : "./img/best-3-2x-min.jpg 2x",
      title : "Choux pastry",
      price : "400UAH/4pcs",
  },
  {
      src : "./img/catal-1-1x-min.jpg",
      srcset : "./img/catal-1-2x-min.jpg 2x",
      title : "Сhocolate cake with raspberries",
      price : "1000UAH/2kg",
  },
  {
      src : "./img/catal-2-1x-min.jpg",
      srcset : "./img/catal-2-2x-min.jpg 2x",
      title : "Passionfruit kiwi cake",
      price : "1100UAH/1.5kg",
  },
  {
      src : "./img/catal-3-1x-min.jpg",
      srcset : "./img/catal-3-2x-min.jpg 2x",
      title : "Snickers cake",
      price : "1400UAH/3kg",
  },
]

// export {responseBestSellers};

const refs = {
  prevEl: document.querySelector('.prevEl'),
  nextEl: document.querySelector('.nextEl'),
  bestlist: document.querySelector('.bestlist'),
  el1: document.querySelector('.el-1'),
  el2: document.querySelector('.el-2'),
  el3: document.querySelector('.el-3'),
};

refs.nextEl.addEventListener('click', clickOnNextEl);
refs.prevEl.addEventListener('click', clickOnPrevEl);

let counter = 0;

refs.nextEl.style.backgroundColor = '#F5EEE0';
refs.prevEl.style.backgroundColor = 'transparent';

renderBestProd(counter);

function renderBestProd(counter) {
  console.log(markupBest(counter) + markupBest(counter+1))
  refs.bestlist.innerHTML = markupBest(counter) + markupBest(counter + 1);
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

function markupBest(counter) {
  return responseBestSellers
    .map((el, index) => {
      if (counter === index) {
        return `<li class="best-item "><img srcset=".${el.srcset}" src=".${el.src}" alt="cakes" loading ="lazy" class="best-img fade-in"><div class="best-wrap"><h4 class="best-list-title">${el.title}</h4><p class="best-list-p">${el.price}</p><svg class="best-shop-card" width="30" height="30"><use href="../img/svg.svg#icon-shoping-cart"></use></svg></div></li>`;
      }
    })
    .join(' ');
}
