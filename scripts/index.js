const gallSlider = document.querySelectorAll('.gallery__slider');
const gallImg = document.querySelector('.gallery__img');
const form = document.querySelector('.form');
const formBtn = form.querySelector('.form__subm-btn');
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