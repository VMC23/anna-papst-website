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

// --- Language Switcher ---
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

// Store original DE texts on first load
const originalTexts = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
  originalTexts[el.getAttribute('data-i18n')] = el.innerHTML;
});

function setLanguage(lang) {
  const htmlEl = document.documentElement;

  if (lang === 'de') {
    // Restore original German texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (originalTexts[key]) {
        el.innerHTML = originalTexts[key];
      }
    });
    htmlEl.setAttribute('lang', 'de');
    htmlEl.removeAttribute('dir');
  } else if (translations[lang]) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });
    htmlEl.setAttribute('lang', lang);

    // RTL for Arabic
    if (lang === 'ar') {
      htmlEl.setAttribute('dir', 'rtl');
    } else {
      htmlEl.removeAttribute('dir');
    }
  }

  // Update aria-label for exit button
  const exitBtn = document.getElementById('exitBtn');
  if (exitBtn) {
    const ariaKey = exitBtn.getAttribute('data-i18n-aria');
    if (ariaKey && lang !== 'de' && translations[lang] && translations[lang][ariaKey]) {
      exitBtn.setAttribute('aria-label', translations[lang][ariaKey]);
    } else if (lang === 'de') {
      exitBtn.setAttribute('aria-label', 'Seite verlassen');
    }
  }

  // Update button label and active state
  const langLabels = { de: 'DE', fr: 'FR', it: 'IT', en: 'EN', tr: 'TR', ar: 'AR' };
  langBtn.innerHTML = langLabels[lang] + ' <span class="lang-arrow">&#9662;</span>';
  langDropdown.querySelectorAll('a').forEach(a => a.classList.remove('lang-active'));
  const activeLink = langDropdown.querySelector(`[data-lang="${lang}"]`);
  if (activeLink) activeLink.classList.add('lang-active');

  // Persist choice
  localStorage.setItem('ichau-lang', lang);
}

if (langBtn && langDropdown) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
  });

  // Language selection
  langDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = link.dataset.lang;
      setLanguage(lang);
      langDropdown.classList.remove('open');
    });
  });

  // Restore saved language on load
  const savedLang = localStorage.getItem('ichau-lang');
  if (savedLang && savedLang !== 'de') {
    setLanguage(savedLang);
  }
}

// --- Accordion Toggles ---
const accordions = [
  { btn: 'projektToggle', content: 'projektContent' },
  { btn: 'teamToggle', content: 'teamContent' }
];

accordions.forEach(({ btn, content }) => {
  const toggle = document.getElementById(btn);
  const panel = document.getElementById(content);
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      panel.classList.toggle('open');
    });
  }
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
    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = '...';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(res => {
      if (res.ok) {
        formSuccess.classList.add('visible');
        submitBtn.style.display = 'none';
        form.reset();
        charCount.textContent = '0';
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Absenden';
      }
    }).catch(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Absenden';
    });
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
