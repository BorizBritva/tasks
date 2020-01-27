document.addEventListener('DOMContentLoaded', function(){

    let sliderList = document.querySelector('.slider__list');
    let slides = document.querySelectorAll('.slider__slide');
    let leftButton = document.querySelector('.button_prev');
    let rightButton = document.querySelector('.button_next');
    let displayWidth = document.documentElement.clientWidth;
    let arraySlides = [];
    let offset = 0;

    slides.forEach((item, i) => {
        arraySlides.push(item.cloneNode(true));
        slides[i].remove();
        sliderList.append(arraySlides[i]);
    });

    function shiftLeft() {

        arraySlides.forEach((item, i) => {
            item.style.transform = `translateX(${offset}px)`;
        })

        offset-=4;
    }

    function shiftRight() {

        arraySlides.forEach((item, i) => {
            item.style.transform = `translateX(${offset}px)`;
        })

        offset+=1;
    }

    leftButton.addEventListener('click', function() {
        let counter = 0;

        let timer = setInterval(function() {
            if (counter <= arraySlides[0].getBoundingClientRect().width) {
                shiftLeft();
                counter+=4;
            } else {
                clearInterval(timer);
            }
        }, 1);
    })

    rightButton.addEventListener('click', function() {
        let counter = 0;

        let timer = setInterval(function() {
            if (counter <= arraySlides[0].getBoundingClientRect().width) {
                shiftRight();
                counter+=1;
            } else {
                clearInterval(timer);
            }
        }, 1);
    })

});
/*let stepSlide = slides[0].offsetWidth;

slides.forEach((item, i) => {
    let step = item.offsetWidth;
    let offset = 20;

    i!=0 ? item.style.left = `${i*step + offset*i}px` : item.style.left = `0px`;
});

function slideLeft(counter) {

    slides.forEach((item, i) => {
        let position = parseFloat(item.style.left);
        let offset = position -= 1;
        item.style.left = `${offset}px`;
    });
};

function slideRight(counter) {

    slides.forEach((item, i) => {
        let position = parseFloat(item.style.left);
        let offset = position += 1;
        item.style.left = `${offset}px`;
    });
}

leftButton.addEventListener('click', function() {
    let counter = 0;

    let timer = setInterval(function() {
        if (counter != stepSlide + 20) {
            slideLeft(counter);
            counter+=1;
        } else {
            clearInterval(timer);
            counter = 0;
        }
    }, 1);

});

rightButton.addEventListener('click', function() {
    let counter = 0;

    let timer = setInterval(function() {
        if (counter != stepSlide + 20) {
            slideRight(counter);
            counter+=1;
        } else {
            clearInterval(timer);

            counter = 0;
        }
    }, 1);
})*/


//test sublime_txt_3
