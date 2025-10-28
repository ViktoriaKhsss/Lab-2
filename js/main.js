//  рік 
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

/* Наші майстри*/
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  if (!slides.length || !prev || !next) return;

  let current = 0;
  const show = (i) => slides.forEach((s, idx) => s.classList.toggle("active", idx === i));

  next.addEventListener("click", () => { current = (current + 1) % slides.length; show(current); });
  prev.addEventListener("click", () => { current = (current - 1 + slides.length) % slides.length; show(current); });

  show(current);
});

/* карусель товарів   */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hc-slide");
  const prev = document.querySelector(".hc-prev");
  const next = document.querySelector(".hc-next");
  if (!slides.length || !prev || !next) return;

  let i = 0, timer;

  const show = (n) => {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === n));
  };
  const go = (d=1) => { i = (i + d + slides.length) % slides.length; show(i); };
  const start = () => timer = setInterval(() => go(1), 4000);
  const stop  = () => timer && clearInterval(timer);

  prev.addEventListener("click", () => { stop(); go(-1); start(); });
  next.addEventListener("click", () => { stop(); go(1);  start(); });

  show(i); start();
});

/*  підпункти */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cat-title").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".cat");
      item.classList.toggle("open");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".subscribe-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.sub_email.value.trim();
    if (email) {
      alert(`Дякуємо! Ви підписані: ${email}`);
      form.reset();
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
    
    const mainContainer = document.querySelector('main.content');
    if (!mainContainer) return; 
    
    const createHeart = () => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        const colors = ['yellow', 'blue'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.backgroundImage = `url('img/heart-${randomColor}.png')`;

  
        heart.style.left = `${Math.random() * 80 - 45}%`; 
    
        heart.style.animationDuration = `${Math.random() * 3 + 5}s`; 
        heart.style.animationDelay = `${Math.random() * 2}s`; 
        mainContainer.appendChild(heart);
  
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    };


    setInterval(createHeart, 800); 
    
    // Створюємо кілька сердечок одразу
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 300); 
    }
});

//  Карусель відгуків 
let testiIndex = 0;
const testiSlides = document.querySelectorAll('.testi-slide');
const prevBtn = document.querySelector('.tc-prev');
const nextBtn = document.querySelector('.tc-next');

function showTestimonial(n) {
  testiSlides.forEach((s, i) => s.classList.toggle('active', i === n));
}

function nextTestimonial() {
  testiIndex = (testiIndex + 1) % testiSlides.length;
  showTestimonial(testiIndex);
}

function prevTestimonial() {
  testiIndex = (testiIndex - 1 + testiSlides.length) % testiSlides.length;
  showTestimonial(testiIndex);
}
nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);
setInterval(nextTestimonial, 5000);

