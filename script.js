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

  // Work gallery: on small screens the photos scroll sideways; keep the counter in step
  var track = document.getElementById('work-track');
  if (track) {
    var items = track.querySelectorAll('.work__item');
    var current = document.querySelector('[data-current]');
    var total = document.querySelector('[data-total]');
    if (total) total.textContent = String(items.length);
    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        var step = items[0].offsetWidth + gap;
        var i = Math.round(track.scrollLeft / step);
        if (current) current.textContent = String(Math.min(items.length, Math.max(1, i + 1)));
        ticking = false;
      });
    }, { passive: true });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
