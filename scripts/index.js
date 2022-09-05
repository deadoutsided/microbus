const gallSlider = document.querySelectorAll('.gallery__slider');
const gallImg = document.querySelector('.gallery__img');
const form = document.querySelector('.form');
const formBtn = form.querySelector('.form__subm-btn');
const radioBtns = document.querySelectorAll('.press__radio');
const pressHL = document.querySelector('.press__highlight');
const pressPar = document.querySelector('.press__paragraph');
const pressLink = document.querySelector('.press__link');
const gallUrls = [
  {
    src:'./images/gallery__img_bus.jpg',
    alt:'volkswagen T1 едет по дороге'
  },
  {
    src:'./images/gallery__img_panel.jpg',
    alt:'вид передней части кабины'
  },
  {
    src:'./images/gallery__img_seats.jpg',
    alt:'вид задних сидений кабины'
  }
]

const pressInf = [
  {
    par: ' Вэн Volkswagen e-Bulli скрестил классику с современной техникой.',
    hl: 'Drive.ru:',
    ref: 'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html'
  },
  {
    par: ' VW’s e-BULLI concept shows how your classic van can become an EV.',
    hl: 'Engadget:',
    ref: 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html'
  }
]

let gallCount = 0;

function gallSlide(num){
  gallImg.setAttribute('src', gallUrls[num].src);
  gallImg.setAttribute('alt', gallUrls[num].alt);
}

gallSlider[0].addEventListener('click', () => {
  gallCount--;
  if(gallCount < 0){
    gallCount = 2;
  }
  gallSlide(gallCount);
});

gallSlider[1].addEventListener('click', () => {
  gallCount++;
  if(gallCount > 2){
    gallCount = 0;
  }
  gallSlide(gallCount);
});

function formSubmitHandler(evt){
  evt.preventDefault();
  formBtn.textContent = 'Готово!';
}

form.addEventListener('submit', formSubmitHandler);

function radioChange(num){
  pressPar.textContent = pressInf[num].par;
  pressHL.textContent = pressInf[num].hl;
  pressPar.prepend(pressHL);
  pressLink.setAttribute('href', pressInf[num].ref);
  radioBtns[0].toggleAttribute('disabled');
  radioBtns[1].toggleAttribute('disabled');
}

radioBtns[0].addEventListener('click', () => {radioChange(1)});

radioBtns[1].addEventListener('click', () => {radioChange(0)});