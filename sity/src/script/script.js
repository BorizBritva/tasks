var slider = document.querySelector('.slider');
var sliderList = slider.querySelector('.slider__list');
var sliderElem = slider.querySelectorAll('.slider__elem');
var prevButton = slider.querySelector('.slider__button_prev');
var nextButton = slider.querySelector('.slider__button_next');
var filter = document.querySelector('.button-fil');
var displayMap = document.querySelector('.button-map');
var map = document.querySelector('.main-content__map');
var museums = document.querySelector('.main-content__museums');
var burger = document.querySelector('.burger-menu img');
var modal = document.querySelector('.modal');
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

burger.addEventListener('click', function() {
  document.querySelector('.header-nav').classList.toggle("active");
})

filter.addEventListener('click', function() {
  modal.style.display = "block";
})

modal.addEventListener('click', function(e) {
  if (!e.target.classList.contains('modalform')) {
    this.style.display = 'none';
  }
})

slider.addEventListener('click', function(e) {

  var step = this.offsetWidth;

  if (e.target.classList.contains('slider__button_prev')) {

    if (count == sliderElem.length) return;

    sliderList.style.transform = `translateX(-${count*step}px)`;

    count+=1;
  }
  else if (e.target.classList.contains('slider__button_next')) {

    if (count==1) return;

    sliderList.style.transform = `translateX(-${(count-1)*step - step}px)`;

    count-=1;
  }

})
/*prevButton.addEventListener('click', function() {

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
})*/
