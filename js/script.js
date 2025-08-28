// ==================== PRELOADER ====================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector('.preloader-container')?.classList.add('fade-out');
    document.querySelector('.main-content')?.classList.add('visible');
    document.body.style.overflow = 'auto'; // allow scroll after load
  }, 2200);
});

// ==================== LOADER FADE ====================
setTimeout(() => {
  $('.loader_bg').fadeToggle();
}, 1500);

// ==================== BURGER MENU TOGGLE ====================
function toggleMenu(burger) {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
}

// ==================== SECTION-2: COUNTER ANIMATION ====================
const counters = document.querySelectorAll(".col-numbers h1");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.innerText.replace(/\D/g, '');
    const speed = 450;
    const increment = target / speed;
    let count = 0;

    const counting = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count) + "+";
        requestAnimationFrame(counting);
      } else {
        counter.innerText = target + "+";
      }
    };

    counting();
  };

  updateCount();
});

// ==================== SECTION-3: TYPEWRITER EFFECT ====================
const typewriterElement = document.querySelector(".typewriter-text");
const htmlString = `Unleashing Creativity The <br> Unleashing <span class="Success">Success</span>`;
let hasTyped = false;

function startTypewriter() {
  let i = 0;
  let isTag = false;
  let text = "";

  function type() {
    text += htmlString[i];

    if (htmlString[i] === "<") isTag = true;
    if (htmlString[i] === ">") isTag = false;

    typewriterElement.innerHTML = text;
    i++;

    if (i < htmlString.length) {
      setTimeout(type, isTag ? 0 : 50);
    } else {
      typewriterElement.classList.add("done");
    }
  }

  type();
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasTyped) {
        hasTyped = true;
        startTypewriter();
      }
    });
  },
  { threshold: 0.5 }
);

const section3 = document.querySelector(".section-3");
if (section3) observer.observe(section3);

// ==================== SECTION-7: FAQ TOGGLE ====================
const faqs = document.querySelectorAll('.faqs');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faqs.forEach(item => {
      if (item !== faq) {
        item.classList.remove('active');
        item.querySelector('.answer').style.maxHeight = '0';
      }
    });
    faq.classList.toggle('active');
    const answer = faq.querySelector('.answer');
    answer.style.maxHeight = faq.classList.contains('active') ? answer.scrollHeight + 'px' : '0';
  });
});

// ==================== SERVICE PAGE ACCORDION ====================
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      items.forEach(otherItem => otherItem.classList.remove('active'));

      if (!isActive) item.classList.add('active');
    });
  });
});

// ==================== TESTIMONIALS SWIPER SLIDER ====================
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true
});

$('.testimonial-btn-next').on('click', function () {
  swiper.slideNext();
});
$('.testimonial-btn-pre').on('click', function () {
  swiper.slidePrev();
});

// ==================== CUSTOM SLIDER ====================
let currentIndex = 0;
function nextSlide() {
  const wrapper = document.getElementById("sliderWrapper");
  const totalSlides = wrapper.children.length;
  currentIndex = (currentIndex + 1) % totalSlides;
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// ==================== TEAM SLIDER (Slick) ====================
$(document).ready(function () {
  $('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: '15px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px'
        }
      }
    ]
  });

  // ==================== GENERIC SLICK SLIDER ====================
  $('.slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });
});
