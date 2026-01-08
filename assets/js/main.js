/* =========================
   MENÚ MOBILE
   ========================= */

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

/* Cerrar menú al hacer click */
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

/* =========================
   REVEAL ON SCROLL
   ========================= */

// Revelado de elementos (incluye variantes)
const revealEls = document.querySelectorAll(
  '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target); // solo una vez (más pro)
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => revealObserver.observe(el));

// ============================================
// HERO COLLAGE PARALLAX (ULTRA LEVE)
// ============================================

const parallaxItems = document.querySelectorAll('.lewis-mockup');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  parallaxItems.forEach(item => {
    const speed = item.dataset.speed || 0.2;
    const yPos = scrollY * speed;

    item.style.transform = `translateY(${yPos * -0.15}px)`;
  });
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 24) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

// ============================================
// HERO ENTRANCE ANIMATION
// ============================================

const hero = document.querySelector('.hero');

if (hero) {
  window.addEventListener('load', () => {
    hero.classList.add('is-visible');
  });
}

// ============================================
// HERO PARALLAX (SUBTLE)
// ============================================

let latestScroll = 0;
let ticking = false;

function heroParallax() {
  const heroImg = document.querySelector('.hero__bg img');
  if (!heroImg) return;

  const offset = window.scrollY * 0.15; // intensidad MUY sutil
  heroImg.style.transform = `scale(1) translateY(${offset}px)`;

  ticking = false;
}

window.addEventListener('scroll', () => {
  latestScroll = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(heroParallax);
    ticking = true;
  }
});
