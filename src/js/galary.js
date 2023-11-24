const refs = {
    galarryLink : document.querySelectorAll('.galarry-link'),
    galaryList : document.querySelector('.galary-list'),
}

refs.galarryLink.forEach(link => {
    link.addEventListener('click', clickOnGalLink)
})

let targetNumber=0;

function clickOnGalLink(e) {
    e.preventDefault();
     targetNumber = e.target.dataset.num;
const href = this.getAttribute('href');
// window.location.href = href;
return targetNumber;
}


export {targetNumber};
