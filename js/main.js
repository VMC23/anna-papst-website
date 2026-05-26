// --- Mobile Navigation ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// --- Character Counter ---
const nachricht = document.getElementById('nachricht');
const charCount = document.getElementById('charCount');

if (nachricht && charCount) {
  nachricht.addEventListener('input', () => {
    charCount.textContent = nachricht.value.length;
  });
}

// --- Form Handling ---
const form = document.getElementById('kontaktForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // In production, this would send data to a server/email service.
    // For now, show confirmation message.
    formSuccess.classList.add('visible');
    form.querySelector('.btn-submit').style.display = 'none';

    // Reset form after short delay
    setTimeout(() => {
      form.reset();
      charCount.textContent = '0';
    }, 300);
  });
}

// --- Scroll Fade-in Animation ---
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in to sections
document.querySelectorAll('.section, .detail-card, .team-group').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// --- Smooth scroll offset for fixed nav ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
