(function () {
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');
  function closeMenu() {
    if (!btn || !nav) return;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    nav.classList.remove('open');
  }
  function openMenu() {
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
    nav.classList.add('open');
  }
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      if (open) closeMenu(); else openMenu();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  }

  const rises = document.querySelectorAll('.rise');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    rises.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
    rises.forEach((el) => io.observe(el));
  }

  const bar = document.getElementById('callbar');
  const hero = document.querySelector('.hero');
  if (bar && hero && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      bar.classList.toggle('show', !entries[0].isIntersecting);
    }, { threshold: 0 });
    io.observe(hero);
  }

  const form = document.getElementById('req-form');
  const err = document.getElementById('form-err');
  const ok = document.getElementById('form-ok');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (form.name.value || '').trim();
      const phone = (form.phone.value || '').trim();
      if (!name || !phone) {
        if (err) { err.hidden = false; err.focus?.(); }
        (name ? form.phone : form.name).focus();
        return;
      }
      if (err) err.hidden = true;
      form.hidden = true;
      if (ok) { ok.hidden = false; ok.focus?.(); }
    });
  }
})();
