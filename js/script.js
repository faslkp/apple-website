const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
})
function showHoverMenu(){
    var hoverMenu = document.getElementById("hoverMenu");
    hoverMenu.style.zIndex = "100";
    hoverMenu.style.display = "block";
}
function hideHoverMenu(){
    var hoverMenu = document.getElementById("hoverMenu");
    hoverMenu.style.zIndex = "-100";
    hoverMenu.style.display = "none";
}