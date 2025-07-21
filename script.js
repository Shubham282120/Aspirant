//   slider  
let currentIndex = 0;
function nextSlide() {
  const wrapper = document.getElementById("sliderWrapper");
  const totalSlides = wrapper.children.length;
  currentIndex = (currentIndex + 1) % totalSlides;
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

//   navbar burger menu
   function toggleMenu(burger) {
      const navLinks = document.getElementById("nav-links");
      navLinks.classList.toggle("active");
      burger.classList.toggle("active");
    }


// preeloader hide 
 window.addEventListener("load", () => {
      setTimeout(() => {
        document.querySelector('.preloader-container').classList.add('fade-out');
        document.querySelector('.main-content').classList.add('visible');
        document.body.style.overflow = 'auto'; // allow scroll after load
      }, 2200); // after plane animation
    });

//slick slider setting
$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
  });
});

// section-2 count animation

const counters = document.querySelectorAll(".col-numbers h1");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.innerText.replace(/\D/g, '');
    const speed = 450 // lower is faster
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



// type writer animation section-3 texts

const element = document.querySelector(".typewriter-text");
const htmlString = `Unleashing Creativity The <br> Unleashing <span class="Success">Success</span>`;
let hasTyped = false; // Prevent multiple runs

// Typewriter function configuration
function startTypewriter() {
  let i = 0;
  let isTag = false;
  let text = "";

  function type() {
    text += htmlString[i];

    if (htmlString[i] === "<") isTag = true;
    if (htmlString[i] === ">") isTag = false;

    element.innerHTML = text;

    i++;
    if (i < htmlString.length) {
      setTimeout(type, isTag ? 0 : 50);
    } else {
      element.classList.add("done"); // Hide cursor
    }
  }

  type();
}
// Observer to detect .section-3 typed

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasTyped) {
        hasTyped = true;
        startTypewriter();
      }
    });
  },
  {
    threshold: 0.5, // 50% of section must be visible
  }
);

// Start printing section-3
observer.observe(document.querySelector(".section-3"));

// team-slider

 $(document).ready(function () {
      $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
    });

// loader
setTimeout(function () {
  $('.loader_bg').fadeToggle();
}, 1500);


// section-7 FAQs toggle
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
        if (faq.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = '0';
        }
      });
    });
 


// testamonials slider
 let currentTestimonial = 0;
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    function showTestimonial(index, direction) {
      testimonialCards.forEach((card) => {
        card.classList.remove('active', 'animate-left', 'animate-right');
      });

      const newCard = testimonialCards[index];
      newCard.classList.add('active', direction === 'left' ? 'animate-left' : 'animate-right');
    }

    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
      showTestimonial(currentTestimonial, 'right');
    }

    function prevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
      showTestimonial(currentTestimonial, 'left');
    }