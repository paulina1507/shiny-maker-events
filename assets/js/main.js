/* =========================
   MENÚ MOBILE
   ========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navModern = document.querySelector(".nav-modern");

if (menuToggle && navModern) {
  menuToggle.addEventListener("click", () => {
    navModern.classList.toggle("active");
  });

  document.querySelectorAll(".nav-modern a").forEach((link) => {
    link.addEventListener("click", () => {
      navModern.classList.remove("active");
    });
  });
}

/* =========================
   REVEAL ON SCROLL
   ========================= */

// Revelado de elementos (incluye variantes)
const revealEls = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target); // solo una vez (más pro)
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => revealObserver.observe(el));

// ============================================
// HERO COLLAGE PARALLAX (ULTRA LEVE)
// ============================================

const parallaxItems = document.querySelectorAll(".lewis-mockup");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  parallaxItems.forEach((item) => {
    const speed = item.dataset.speed || 0.2;
    const yPos = scrollY * speed;

    item.style.transform = `translateY(${yPos * -0.15}px)`;
  });
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================

const header = document.querySelector(".header-modern");

window.addEventListener("scroll", () => {
  if (window.scrollY > 24) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

// ============================================
// HERO ENTRANCE ANIMATION
// ============================================

const hero = document.querySelector(".hero");

if (hero) {
  window.addEventListener("load", () => {
    hero.classList.add("is-visible");
  });
}

// ============================================
// HERO PARALLAX (SUBTLE)
// ============================================

let latestScroll = 0;
let ticking = false;

function heroParallax() {
  const heroImg = document.querySelector(".hero__bg img");
  if (!heroImg) return;

  const offset = window.scrollY * 0.15; // intensidad MUY sutil
  heroImg.style.transform = `scale(1) translateY(${offset}px)`;

  ticking = false;
}

window.addEventListener("scroll", () => {
  latestScroll = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(heroParallax);
    ticking = true;
  }
});

/* =========================
   REVEAL ICONS ON SCROLL
   ========================= */

const revealIcons = document.querySelectorAll(".reveal-icon");

const iconObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // solo una vez
      }
    });
  },
  {
    threshold: 0.18,
  },
);

revealIcons.forEach((icon) => {
  iconObserver.observe(icon);
});

document.querySelectorAll('.event-card__cta').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.event-card');

    card.classList.add('is-activated');

    setTimeout(() => {
      card.classList.remove('is-activated');
    }, 600);
  });
});

document.querySelectorAll('.package-card .btn--outline').forEach(btn => {
  btn.addEventListener('click', function() {

    // Quitar selección previa
    document.querySelectorAll('.package-card .btn--outline')
      .forEach(b => b.classList.remove('btn--selected'));

    // Activar el actual
    this.classList.add('btn--selected');

  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const increment = target / 60;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;

    item.classList.toggle("active");

    // Cierra los demás si quieres modo exclusivo
    document.querySelectorAll(".faq-item").forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const animatedElements = document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-scale, .reveal-stagger"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.15
  });

  animatedElements.forEach(el => observer.observe(el));

});

(() => {
  const tabs = document.querySelectorAll(".event-tab");
  const video = document.getElementById("catalogVideo");
  const source = document.getElementById("catalogVideoSource");
  const title = document.getElementById("eventTitle");
  const desc = document.getElementById("eventDesc");
  const quoteBtn = document.getElementById("eventQuoteBtn");

  if (!tabs.length || !video || !source || !title || !desc || !quoteBtn) return;

  let currentEvent = "boda";

  function setActiveTab(tab) {
    tabs.forEach(t => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
  }

  function switchVideo(src) {
    if (source.getAttribute("src") === src) return;
    source.setAttribute("src", src);
    video.load();
    video.play().catch(() => {});
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      currentEvent = tab.dataset.event;
      setActiveTab(tab);
      switchVideo(tab.dataset.video);
      title.textContent = tab.dataset.title || "";
      desc.textContent = tab.dataset.desc || "";
    });
  });

  quoteBtn.addEventListener("click", () => {
    // Usa tu función existente
    if (typeof openWhatsApp === "function") openWhatsApp(currentEvent);
  });
})();