const backSlideBtn = document.querySelector('.carousel_controls-back');
const forwardSlideBtn = document.querySelector('.carousel_controls-forward');
const slides = document.querySelectorAll('.carousel_item');
const slideWidth = 600;
let currentPosition = 0;
let currentSlideIndex = 0;
let isAnimationCompleted = true;

for (const slide of slides) {
    const index = Array.from(slides).indexOf(slide);
    slide.dataset.index = index;
    slide.style.left = `${currentPosition}px`;
    currentPosition += slideWidth;
}

function moveAllSlides(direction, steps) {
    for (const slide of slides) {
        const currentSlidePosition = parseInt(slide.style.left);
    }
}

backSlideBtn.addEventListener('click', () => {
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;

        for (let i = 1; i < slides.length; i++) {
            const currentPosition = parseInt(slides[i].style.left);
            const targetPosition = currentPosition - slideWidth * slides.length;
            slides[i].style.left = `${targetPosition}px`;
        }

        moveLastSlide(0, 'back');
    }
});

forwardSlideBtn.addEventListener('click', () => {


    if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;

        for (let i = 0; i < slides.length - 1; i++) {
            const currentPosition = parseInt(slides[i].style.left);
            const targetPosition = currentPosition + slideWidth * slides.length;
            slides[i].style.left = `${targetPosition}px`;
        }

        moveLastSlide(slides.length - 1, 'forward');
    }
});

function moveLastSlide(lastSlideIndex, direction) {
    const currentPosition = slideWidth * (slides.length - 1);
    const timer = setInterval(() => {
        if (direction === 'back') {
            slides[lastSlideIndex].style.left = `-${currentPosition}px`;
        }

        if (direction === 'forward') {
            slides[lastSlideIndex].style.left = `${currentPosition}px`;
        }

        clearInterval(timer);
    });
}