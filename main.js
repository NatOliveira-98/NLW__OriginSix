// toggle menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show-menu');
  });
}

// hide menu when select a different section
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show-menu');
  });
}

// header with box-shadow when the page scrolls down
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function headerScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

// testimonials slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

// ScrollReveal - show elements when scroll page
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card, 
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .info,
  footer .brand, footer .social
  `,
  { interval: 100 }
);

// bottom back to top
const backToTopBTN = document.querySelector('.back-to-top');

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopBTN.classList.add('show');
  } else {
    backToTopBTN.classList.remove('show');
  }
}

// active menu selection
const sections = document.querySelectorAll('main section[id]');

function activeNavBar() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

// window scroll events
window.addEventListener('scroll', function () {
  headerScroll();
  backToTop();
  activeNavBar();
});
