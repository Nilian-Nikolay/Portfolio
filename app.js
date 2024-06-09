function updateMaskHeight() {
  const bodyHeight = document.body.scrollHeight;
  const maskedBackground = document.querySelector('.masked-background');
  maskedBackground.style.height = `${bodyHeight}px`;
}

window.onload = updateMaskHeight;




// document.addEventListener("DOMContentLoaded", function() {
//   const stackItems = document.querySelectorAll('.stack-item');

//   stackItems.forEach((item, index) => {
//     item.addEventListener('mouseenter', () => {
//       if (index > 0) { // Проверяем, есть ли предыдущий элемент
//         stackItems[index - 1].classList.add('highlight-prev');
//       }
//       if (index < stackItems.length - 1) { // Проверяем, есть ли следующий элемент
//         stackItems[index].classList.add('highlight-next');
//       }
//     });

//     item.addEventListener('mouseleave', () => {
//       if (index > 0) {
//         stackItems[index - 1].classList.remove('highlight-prev');
//       }
//       if (index < stackItems.length - 1) {
//         stackItems[index].classList.remove('highlight-next');
//       }
//     });
//   });
// });








//карусель
document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.querySelector('.carousel-control-prev');
  const nextButton = document.querySelector('.carousel-control-next');
  const carouselInner = document.querySelector('.carousel-inner');
  const totalItems = document.querySelectorAll('.carousel-item').length; // Получаем количество элементов
  let activeIndex = 0;

  prevButton.addEventListener('click', function() {
    if (activeIndex > 0) {
      activeIndex--;
    } else {
      activeIndex = totalItems - 1; // Переход к последнему элементу, если это первый элемент
    }
    updateCarousel();
  });

  nextButton.addEventListener('click', function() {
    if (activeIndex < totalItems - 1) {
      activeIndex++;
    } else {
      activeIndex = 0; // Переход к первому элементу, если это последний элемент
    }
    updateCarousel();
  });

  function updateCarousel() {
    const offset = activeIndex * -50; // Процент смещения
    carouselInner.style.transform = `translateX(${offset}%)`;
  }
});












// модальное окно
let modal = document.getElementById("contactModal");
let btn = document.getElementById("contactButton");

// Получаем элемент <span>, который закрывает модальное окно
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

//вне окна
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







//pet-js
function showContent(contentId, element) {
  // Скрываем все элементы
  var contents = document.querySelectorAll('.project-2');
  contents.forEach(function(content) {
    content.style.display = 'none';
  });

  // Показываем нужный элемент
  var showContent = document.getElementById(contentId);
  if (showContent) {
    showContent.style.display = 'flex';
  }

  // Удаляем активный класс у всех кнопок
  var buttons = document.querySelectorAll('.btn-js');
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });

  // Добавляем активный класс к нажатой кнопке
  if (element) {
    element.classList.add('active');
  }
}

// Инициализация начального состояния
document.addEventListener('DOMContentLoaded', function() {
  var initialButton = document.querySelector('.btn-js.slider');
  if (initialButton) {
    showContent('slider-content', initialButton);
  }
});







//Навигация
function toggleDropdown() {
  const dropdownMenu = document.querySelector('.navigation .dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Закрытие выпадающего меню при клике вне его области
document.addEventListener('click', function(event) {
  const dropdownMenu = document.querySelector('.navigation .dropdown-menu');
  const dropdownButton = document.getElementById('dropdownButton');

  // Проверяем, что клик произошел вне области кнопки и меню
  if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
    dropdownMenu.style.display = 'none';
  }
});

// Закрытие выпадающего меню при клике на ссылку внутри меню
document.querySelectorAll('.navigation .dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const dropdownMenu = document.querySelector('.navigation .dropdown-menu');
    dropdownMenu.style.display = 'none';
  });
});












const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.controls');

let index = 0;

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        slides.forEach(s => s.classList.remove('active'));
        slide.classList.add('active');
        
    });
});



function show(i) {
    slides[index].classList.remove('active');
    slides[i].classList.add('active');
    index = i;
}

controls.forEach((control) => {
    control.addEventListener('click', () => {
        if (control.classList.contains('next')) {
            let i = index + 1;
            if (i >= slides.length) {
                i = 0;
            }
            show(i);
        } else if (control.classList.contains('prev')) {
            let i = index - 1;
            if (i < 0) {
                i = slides.length - 1;
            }
            show(i);
        }
    });
});

show(index);




// for (const slide of slides){
//     slide.addEventListener("click", ()=>{
//         nolActive()
//         slide.classList.add('active')
        
//     })
// }

// function nolActive(){
//     slides.forEach((slide) =>{
//         slide.classList.remove('active')
//     })
// }