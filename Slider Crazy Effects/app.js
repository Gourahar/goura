let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelectorAll('.carousel .thumbnail');

nextDom.onclick = function(){
    console.log("Clicked")
    showSlider('next');
}
prevDom.onclick = function(){
    console.log("Clicked")
    showSlider('prev');
}
let timeRunning = 3000;
let runTimeout;
let timeAutoNext = 7000;

let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    console.log(typeof itemThumbnail);
    if(type ==='next'){
        listItemDom.appendChild(itemSlider[0]);
        carouselDom.classList.add('next');
    }else{
        console.log("click");
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        carouselDom.classList.add('next');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() =>{
        carouselDom.classList.remove('next');
    }, timeRunning)
}

    
