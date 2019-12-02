var slider = document.querySelector('.slider');
var sliderList = slider.querySelector('.slider__list');
var sliderElem = slider.querySelectorAll('.slider__elem');
var prevButton = slider.querySelector('.slider__button_prev');
var nextButton = slider.querySelector('.slider__button_next');
var displayMap = document.querySelector('.button-map');
var map = document.querySelector('.main-content__map');
var museums = document.querySelector('.main-content__museums');
var count = 1;

displayMap.addEventListener('click', function() {
    if (this.innerText.toLowerCase() == "map") {
        map.style.display = 'block';
        museums.style.display = 'none';
        this.innerText = 'Museums';
    } else {
        map.style.display = 'none';
        museums.style.display = 'block';
        this.innerText = 'Map';
    }

})

prevButton.addEventListener('click', function() {

    if (count == sliderElem.length) {
        return;
    }

    var step = slider.offsetWidth;

    sliderList.style.transform = `translateX(-${count*step}px)`;

    count+=1;
})

nextButton.addEventListener('click', function() {
    var step = slider.offsetWidth;

    if (count==1) {
        return;
    }

    sliderList.style.transform = `translateX(-${(count-1)*step - step}px)`;

    count-=1;
})
