(function () {
  document.documentElement.classList.add('js');

  // Mobile menu
  var nav = document.querySelector('.nav');
  var toggle = nav.querySelector('.nav__toggle');
  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  }
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  nav.querySelectorAll('.nav__links a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Contact form: until an endpoint is connected, say so instead of failing silently
  var form = document.querySelector('.form');
  if (form) {
    var note = form.querySelector('.form__note');
    form.addEventListener('submit', function (e) {
      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        note.hidden = false;
        note.textContent = 'This form isn’t connected yet. Call (514) 561-7368 and we’ll take it from there.';
      }
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
