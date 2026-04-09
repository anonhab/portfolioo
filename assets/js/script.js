/* ============================================================
   HABTAMU BITEW GASHU — PORTFOLIO  |  Main JavaScript
   ============================================================ */

/* ---- Mobile nav ---- */
const navMenu   = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close');

if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
if (navClose)  navClose.addEventListener('click',  () => navMenu.classList.remove('show-menu'));
document.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', () => navMenu.classList.remove('show-menu')));

/* ---- Scroll spy ---- */
const sections = document.querySelectorAll('section[id]');
function scrollSpy() {
  const y = window.scrollY;
  sections.forEach(sec => {
    const h  = sec.offsetHeight;
    const t  = sec.offsetTop - 120;
    const id = sec.getAttribute('id');
    const a  = document.querySelector(`.nav__link[href="#${id}"]`);
    if (a) a.classList.toggle('active-link', y > t && y <= t + h);
  });
}
window.addEventListener('scroll', scrollSpy);

/* ---- Scroll-top button ---- */
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  if (scrollTopBtn) scrollTopBtn.classList.toggle('show', window.scrollY > 320);
});

/* ---- Typed.js ---- */
new Typed('.typing-text', {
  strings: [
    'fintech &amp; payment systems',
    'ISO 8583 integration',
    'full-stack development',
    'Android development',
    'Laravel backend development',
    'POS terminal integration',
  ],
  loop: true,
  typeSpeed: 55,
  backSpeed: 30,
  backDelay: 1600,
});

/* ---- Stats counter ---- */
function runCounters() {
  document.querySelectorAll('.stat__number').forEach(el => {
    const target = +el.getAttribute('data-target');
    const step   = Math.max(1, Math.ceil(target / 45));
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { el.textContent = target; clearInterval(t); }
      else el.textContent = cur;
    }, 35);
  });
}
const statsEl = document.querySelector('.stats__row');
if (statsEl) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { runCounters(); obs.disconnect(); } });
  }, { threshold: 0.3 }).observe(statsEl);
}

/* ---- Project filter ---- */
document.querySelectorAll('.filter__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter__btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-filter');
    document.querySelectorAll('.project__card').forEach(card => {
      card.classList.toggle('hidden', f !== 'all' && card.getAttribute('data-category') !== f);
    });
  });
});

/* ---- Scroll reveal ---- */
const sr = ScrollReveal({ origin:'bottom', distance:'36px', duration:750, delay:80, easing:'ease-out', reset:false });
sr.reveal('.hero__content',    { origin:'left' });
sr.reveal('.hero__image',      { origin:'right', delay:160 });
sr.reveal('.section__title',   {});
sr.reveal('.section__subtitle',{ delay:140 });
sr.reveal('.about__image-wrapper', { origin:'left' });
sr.reveal('.about__content',       { origin:'right', delay:120 });
sr.reveal('.stat__card',       { interval:90 });
sr.reveal('.skills__card',     { interval:100 });
sr.reveal('.project__card',    { interval:80 });
sr.reveal('.timeline__item',   { interval:130, origin:'left' });
sr.reveal('.contact__card',    { interval:90, origin:'left' });
sr.reveal('.contact__form',    { origin:'right', delay:120 });

/* ---- VanillaTilt on project cards ---- */
VanillaTilt.init(document.querySelectorAll('.project__card'), {
  max: 7, speed: 400, glare: true, 'max-glare': 0.08,
});

/* ---- Tab visibility ---- */
document.addEventListener('visibilitychange', () => {
  const fav = document.getElementById('favicon');
  if (document.visibilityState === 'visible') {
    document.title = 'Habtamu Bitew Gashu — Portfolio';
    if (fav) fav.setAttribute('href', 'assets/images/favicon.png');
  } else {
    document.title = 'Come Back! 👋';
    if (fav) fav.setAttribute('href', 'assets/images/favhand.png');
  }
});

/* ---- Disable devtools shortcuts ---- */
document.addEventListener('keydown', e => {
  if (e.keyCode === 123) { e.preventDefault(); return false; }
  if (e.ctrlKey && e.shiftKey && 'ICJ'.includes(String.fromCharCode(e.keyCode))) { e.preventDefault(); return false; }
  if (e.ctrlKey && e.keyCode === 85) { e.preventDefault(); return false; }
});
