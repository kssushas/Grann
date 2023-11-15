if (window.innerWidth < 1000){
const refs = {
  instList: document.querySelector('.insta-list'),
  instItem: document.querySelectorAll('.insta-item'),
  instElipce: document.querySelectorAll('.item-elipce'),
  prevInstBtn: document.querySelector('.prevInstEl'),
  nextInstBtn: document.querySelector('.nextInstEl'),
};

const numberOfVisibleEl = 2;
const numberOfImgHidden = 2;
let counter = 0;
let counterElipce = 0;

refs.instElipce[counterElipce].style.backgroundColor = '#705c67';
refs.prevInstBtn.style.backgroundColor = 'transparent';
refs.nextInstBtn.style.backgroundColor = '#F5EEE0';

for (let i = 0; i < refs.instItem.length - numberOfVisibleEl; i += 1) {
  refs.instItem[numberOfVisibleEl + i].style.display = 'none';
}

refs.nextInstBtn.addEventListener('click', clickOnNextEl);
refs.prevInstBtn.addEventListener('click', clickOnPrevEl);

function clickOnNextEl() {
  refs.instElipce[counterElipce].style.backgroundColor = '#F5EEE0';
  refs.nextInstBtn.style.backgroundColor = '#F5EEE0';
  refs.prevInstBtn.style.backgroundColor = '#F5EEE0';

  if (
    counter >=
    refs.instItem.length - (numberOfVisibleEl + numberOfImgHidden)
  ) {
    refs.instList.style.justifyContent = 'flex-end';
    refs.nextInstBtn.style.backgroundColor = 'transparent';

    counterElipce = 3;
    refs.instElipce[counterElipce].style.backgroundColor = '#705c67';
    return;
  }
  refs.instItem[counter].style.display = 'none';
  refs.instItem[counter + numberOfVisibleEl].style.display = 'block';
  refs.instElipce[counterElipce + 1].style.backgroundColor = '#705c67';

  counter += 1;
  counterElipce += 1;
}

function clickOnPrevEl() {
  refs.nextInstBtn.style.backgroundColor = '#F5EEE0';
  refs.prevInstBtn.style.backgroundColor = '#F5EEE0';
  refs.instElipce[counterElipce].style.backgroundColor = '#F5EEE0';

  if (counterElipce <= 1) {
    refs.prevInstBtn.style.backgroundColor = 'transparent';
  }

  if (counter <= 0) {
    refs.instList.style.justifyContent = 'flex-start';
    counterElipce = 0;
    refs.instElipce[counterElipce].style.backgroundColor = '#705c67';
    return;
  }

  counter -= 1;
  counterElipce -= 1;

  refs.instItem[counter].style.display = 'block';
  refs.instItem[counter + numberOfVisibleEl].style.display = 'none';
  refs.instElipce[counterElipce].style.backgroundColor = '#705c67';
}
}