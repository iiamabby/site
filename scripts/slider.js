const resetTranslateX = 0;
const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('prev-button');
const images = Array.from(document.querySelectorAll('.slider img'));
const imagesCount = images.length;

let isDragging = false;
let startPosX = 0;
let currentTranslateX = 0;
let previousTranslateX = 0;
let currentIndex = 0;

function setSliderWidth() {
  let totalWidth = 0;
  images.forEach(image => {
    totalWidth += image.clientWidth;
  });
  slider.style.width = totalWidth + 'px';
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslateX}px)`;

  /* Reset the slider position when exceeding slideWidth or going below negative slideWidth */
  if (currentTranslateX <= -(imagesCount - 1) * getAverageImageWidth() || currentTranslateX >= getAverageImageWidth()) {
    const resetTranslateX = -getAverageImageWidth() + getAverageImageWidth();
    slider.style.transform = `translateX(${resetTranslateX}px)`;
    currentTranslateX = resetTranslateX;
  }
}

function getAverageImageWidth() {
  let totalWidth = 0;
  images.forEach(image => {
    totalWidth += image.clientWidth;
  });
  return totalWidth / imagesCount;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  currentTranslateX -= getAverageImageWidth();
  setSliderPosition();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  currentTranslateX += getAverageImageWidth();
  setSliderPosition();
});

/* Drag Feature */
slider.addEventListener('mousedown', dragStart);
slider.addEventListener('touchstart', dragStart);

slider.addEventListener('mousemove', drag);
slider.addEventListener('touchmove', drag);

slider.addEventListener('mouseup', dragEnd);
slider.addEventListener('touchend', dragEnd);

function dragStart(event) {
  event.preventDefault();

  if (event.type === 'touchstart') {
    startPosX = event.touches[0].clientX;
  } else {
    startPosX = event.clientX;
  }

  isDragging = true;
  previousTranslateX = currentTranslateX;
}

function drag(event) {
  if (!isDragging) return;

  event.preventDefault();

  let currentPosX = 0;

  if (event.type === 'touchmove') {
    currentPosX = event.touches[0].clientX;
  } else {
    currentPosX = event.clientX;
  }

  const diffX = currentPosX - startPosX;
  currentTranslateX = previousTranslateX + diffX;
  setSliderPosition();
}

function dragEnd() {
  isDragging = false;

  /* Snap to the next or previous image based on the drag distance */
  const dragThreshold = getAverageImageWidth() / 4;
  if (Math.abs(currentTranslateX - previousTranslateX) > dragThreshold) {
    if (currentTranslateX < previousTranslateX) {
      currentIndex++;
      currentTranslateX -= getAverageImageWidth();
    } else {
      currentIndex--;
      currentTranslateX += getAverageImageWidth();
    }
  }

  /* Reset the slider position when exceeding slideWidth or going below negative slideWidth */
  if (currentTranslateX <= -(imagesCount - 1) * getAverageImageWidth() || currentTranslateX >= getAverageImageWidth() + getAverageImageWidth()) {
    const resetTranslateX = -getAverageImageWidth();
    slider.style.transform = `translateX(${resetTranslateX}px)`;
    currentTranslateX = resetTranslateX;
  }

  setSliderPosition();
}

setSliderWidth();
setSliderPosition();


        
        
$(document).ready(function() {

    $('.counter').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
});

});  



