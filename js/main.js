let sliderImg = document.querySelector('.slider-img');

let imgArr = ['img/img1.jpeg', 'img/img2.jpeg', 'img/img3.jpeg', 'img/img4.jpeg', 'img/img5.jpeg', 'img/img6.jpeg', 'img/img7.jpeg', 'img/img8.jpeg', 'img/img9.jpeg'];

let imgIndex = 0;

sliderImg.src = imgArr[imgIndex];


let nextBtn = document.querySelector('.next');

let previousBtn = document.querySelector('.previous');

previousBtn.setAttribute('disabled', 'disabled');


nextBtn.addEventListener('click', next);

previousBtn.addEventListener('click', previous);




function next() {
        imgIndex ++;
        sliderImg.src = imgArr[imgIndex];
    if (imgIndex === (imgArr.length - 1)) {
        nextBtn.setAttribute('disabled', 'disabled');
    } else if (imgIndex === 1){
        previousBtn.removeAttribute('disabled');
    } 
    return sliderImg.src;
};

function previous() {
        imgIndex --;
        sliderImg.src = imgArr[imgIndex];
    if (imgIndex === 0) {
        previousBtn.setAttribute('disabled', 'disabled');
    } else if (imgIndex === (imgArr.length - 2)) {
        nextBtn.removeAttribute('disabled');
    } 
    return sliderImg.src;
};



