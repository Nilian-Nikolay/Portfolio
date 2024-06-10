function updateMaskHeight() {
  const bodyHeight = document.body.scrollHeight;
  const maskedBackground = document.querySelector('.masked-background');
  maskedBackground.style.height = `${bodyHeight}px`;
}
window.onload = updateMaskHeight;





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
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





//pet-js
function showContent(contentId, element) {
  var contents = document.querySelectorAll('.project-2');
  contents.forEach(function(content) {
    content.style.display = 'none';
  });

  var showContent = document.getElementById(contentId);
  if (showContent) {
    showContent.style.display = 'flex';
  }

  var buttons = document.querySelectorAll('.btn-js');
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });

  if (element) {
    element.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var initialButton = document.querySelector('.btn-js.slider');
  if (initialButton) {
    showContent('slider-content', initialButton);
  }
});


//не скролить экран если не мобильная версия 
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.dabble-js a'); 
  const updateHref = () => {
    links.forEach(link => {
      if (window.innerWidth > 643) {
        link.setAttribute('data-href', link.getAttribute('href'));
        link.removeAttribute('href');
      } else {
        if (link.hasAttribute('data-href')) {
          link.setAttribute('href', link.getAttribute('data-href'));
        }
      }
    });
  };
  updateHref();
  window.addEventListener('resize', updateHref);
});





//Навигация
function toggleDropdown() {
  const dropdownMenu = document.querySelector('.navigation .dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Закрытие меню при клике вне
document.addEventListener('click', function(event) {
  const dropdownMenu = document.querySelector('.navigation .dropdown-menu');
  const dropdownButton = document.getElementById('dropdownButton');

  if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
    dropdownMenu.style.display = 'none';
  }
});

// Закрытие при клике на ссылку
document.querySelectorAll('.navigation .dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const dropdownMenu = document.querySelector('.navigation .dropdown-menu');
    dropdownMenu.style.display = 'none';
  });
});






//крестики нолики
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

