(() => {
  const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  const close = () => { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-label','Open menu'); };
  btn.addEventListener('click', () => { const o = document.body.classList.toggle('nav-open'); btn.setAttribute('aria-expanded', String(o)); btn.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); });
  nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('nav-open')) { close(); btn.focus(); } });
  const f = document.getElementById('qf'), done = document.getElementById('done');
  f.addEventListener('submit', e => { e.preventDefault(); if (!f.checkValidity()) { f.reportValidity(); return; } f.hidden = true; done.hidden = false; done.focus?.(); });
  const cb = document.querySelector('.callbar'), ctas = document.querySelector('.hero .ctas');
  if (cb && ctas && 'IntersectionObserver' in window) { new IntersectionObserver(e => cb.classList.toggle('show', !e[0].isIntersecting)).observe(ctas); } else if (cb) { cb.classList.add('show'); }
})();
