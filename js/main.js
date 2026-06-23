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

if (langBtn && langDropdown) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
  });

  // Language selection via Google Translate
  langDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = link.dataset.lang;

      // Update button text
      const langLabels = { de: 'DE', fr: 'FR', it: 'IT', en: 'EN', tr: 'TR', ar: 'AR' };
      langBtn.innerHTML = langLabels[lang] + ' <span class="lang-arrow">&#9662;</span>';

      // Update active state
      langDropdown.querySelectorAll('a').forEach(a => a.classList.remove('lang-active'));
      link.classList.add('lang-active');
      langDropdown.classList.remove('open');

      // Use Google Translate
      if (lang === 'de') {
        // Remove translation - restore original
        const frame = document.querySelector('.goog-te-banner-frame');
        if (frame) {
          const innerDoc = frame.contentDocument || frame.contentWindow.document;
          const restore = innerDoc.querySelector('.goog-te-button button');
          if (restore) restore.click();
        }
        // Also try cookie approach
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;
        location.reload();
      } else {
        document.cookie = 'googtrans=/de/' + lang + '; path=/;';
        document.cookie = 'googtrans=/de/' + lang + '; path=/; domain=.' + window.location.hostname;
        location.reload();
      }
    });
  });
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

// --- Google Translate Widget (hidden, triggered by lang switcher) ---
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'de',
    includedLanguages: 'de,fr,it,en,tr,ar',
    autoDisplay: false
  }, 'google_translate_element');
}

// Inject Google Translate script
(function() {
  const div = document.createElement('div');
  div.id = 'google_translate_element';
  div.style.display = 'none';
  document.body.appendChild(div);

  const script = document.createElement('script');
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(script);
})();
