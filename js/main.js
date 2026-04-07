// ============================================
//  ITALIA 2025 — Script principal
// ============================================

// --- Menu hamburger ---
function toggleNav(btn) {
  btn.classList.toggle('open');
  document.getElementById('nav-links').classList.toggle('open');
}

// Ferme le menu si on clique sur un lien
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-hamburger')?.classList.remove('open');
      document.getElementById('nav-links')?.classList.remove('open');
    });
  });
});

// --- Navigation : fond opaque au scroll ---
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(26, 18, 8, 0.97)';
  } else {
    nav.style.background = 'rgba(26, 18, 8, 0.85)';
  }
});

// --- Animation d'apparition au scroll ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.timeline-card, .info-card').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
