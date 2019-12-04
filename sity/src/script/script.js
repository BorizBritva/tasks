var slider = document.querySelector('.slider');
var sliderList = slider.querySelector('.slider__list');
var sliderElem = slider.querySelectorAll('.slider__elem');
var prevButton = slider.querySelector('.slider__button_prev');
var nextButton = slider.querySelector('.slider__button_next');
var filterButton = document.querySelector('.button-fil');
var filterClose = document.querySelector('.modal-form__name img');
var displayMap = document.querySelector('.button-map');
var map = document.querySelector('.main-content__map');
var museums = document.querySelector('.main-content__museums');
var burger = document.querySelector('.burger-menu img');
var filterElem = document.querySelectorAll('.modal-form__elem');
var count = 1;


//container__museums-filter - отсюда получить отсуп для карты
window.addEventListener('scroll', function() {

    var startPoint = document.querySelector('.slider').offsetHeight + document.querySelector('header').offsetHeight;
    var topMap = document.querySelector('.container__museums-filter').offsetHeight;


      if (window.pageYOffset >= startPoint ) {

        document.querySelector('.container__museums-filter').classList.add('museums-filter__fix');
        map.style.top = `${topMap}px`;
        map.classList.add('map__fix');

        return;

      };

      document.querySelector('.container__museums-filter').classList.remove('museums-filter__fix');
      map.classList.remove('map__fix');
})

filterButton.addEventListener('click', function() {

    document.querySelector('.modal').classList.add('modal-active');

})

filterClose.addEventListener('click', function() {

    document.querySelector('.modal').classList.remove('modal-active');

})

filterElem.forEach(function(item, index) {

    item.addEventListener('click', function(e) {

        if (e.target.classList.contains('modal-form__nameElem')) {
            this.querySelector('.modal-form__nameElem').classList.toggle('filter-active');
            this.querySelector('.modal-form__input').classList.toggle('input-close');
        }

    })

})

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
