let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = thumbnailBorderDom.querySelectorAll('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next')
}
let timeRunning = 3000;
let runTimeout;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
}

    if(type ==='next'){
        listItemDom.appendChild(itemSlider[0]);
        itemThumbnail.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() =>{
        carouselDom.classList.remove('next');
    }, timeRunning)
