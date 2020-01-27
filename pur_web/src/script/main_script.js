let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider__slide');
let leftButton = document.querySelector('.button_prev');
let rightButton = document.querySelector('.button_next');
let stepSlide = slides[0].offsetWidth;

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
    }, .5);

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
    }, .5);
})


//test sublime_txt_3