const d = [
    {
        src : "../img/Rectangle1-1x-min.png",
    },
    {
        src : "./img/catal-1-1x-min.jpg"
    }
]

const li = document.querySelector('.li')
li.innerHTML = `<li><img src =${d[0].src} alt='shhs'></li><li><img src =${d[1].src} alt='shhs'></li>`