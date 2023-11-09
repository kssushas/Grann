const d = [
    {
        src : "../img/Rectangle1-1x-min.png",
    },
    {
        src : "./img/catal-1-1x-min.jpg"
    },
    {
        src: "Rectangle1-1x-min.png"
    }
]

const li = document.querySelector('.li')
li.innerHTML = `<li><img src ="${d[0].src}" alt='shhs1'></li><li><img src ="./img/${d[2].src}" alt='shhs1'></li><li><img src ="../${d[0].src}" alt='shhs2'></li><li><img src = "${d[1].src}" alt='shhs3'></li>`