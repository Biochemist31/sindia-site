/* Laboratoire SinDia — script commun.
   Tout est facultatif : sans JavaScript, le site reste entièrement utilisable
   (menu déplié, contenu visible, catalogue complet affiché). */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Menu mobile ----------
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // ---------- Année du pied de page ----------
  var annee = document.getElementById('annee');
  if (annee) annee.textContent = new Date().getFullYear();

  // ---------- Révélation au défilement ----------
  if (!reduce && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      'main .card, main .tile, main .steps li, main .google-card, main .daynight, ' +
      'main .info-list, main .notice, main .cat-domain, main .page-title, main .faq details'
    );
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(targets, function (el, i) {
      el.classList.add('anim-in');
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      io.observe(el);
    });
  }

  // ---------- Compteurs animés (note Google) ----------
  if (!reduce && 'IntersectionObserver' in window) {
    var counters = document.querySelectorAll('[data-to]');
    var cio = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        obs.unobserve(en.target);
        var el = en.target;
        var to = parseFloat(el.getAttribute('data-to'));
        var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
        var t0 = null, dur = 1100;
        function step(ts) {
          if (t0 === null) t0 = ts;
          var k = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - k, 3);
          var val = (to * eased).toFixed(dec).replace('.', ',');
          el.firstChild.nodeValue = val;
          if (k < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    Array.prototype.forEach.call(counters, function (el) { cio.observe(el); });
  }

  // ---------- Catalogue d'examens : recherche + filtres ----------
  var search = document.getElementById('catSearch');
  var results = document.getElementById('catResults');
  if (search && results) {
    var exams = results.querySelectorAll('.exam');
    var domains = results.querySelectorAll('.cat-domain');
    var chips = document.querySelectorAll('#catChips .chip');
    var statusEl = document.getElementById('catStatus');
    var emptyEl = document.getElementById('catEmpty');
    var activeFilter = 'all';

    function fold(t) {
      return t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    }

    function apply() {
      var q = fold(search.value.trim());
      var shown = 0;
      Array.prototype.forEach.call(exams, function (ex) {
        var okText = !q || ex.getAttribute('data-search').indexOf(q) !== -1;
        var okDom = activeFilter === 'all' || ex.getAttribute('data-domain') === activeFilter;
        var vis = okText && okDom;
        ex.classList.toggle('is-hidden', !vis);
        if (vis) shown++;
      });
      // Masquer les domaines vides
      Array.prototype.forEach.call(domains, function (dom) {
        var any = dom.querySelectorAll('.exam:not(.is-hidden)').length > 0;
        dom.classList.toggle('is-hidden', !any);
      });
      if (emptyEl) emptyEl.hidden = shown !== 0;
      if (statusEl) {
        statusEl.textContent = (q || activeFilter !== 'all')
          ? shown + (shown > 1 ? ' examens trouvés' : ' examen trouvé')
          : '';
      }
    }

    search.addEventListener('input', apply);

    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener('click', function () {
        activeFilter = chip.getAttribute('data-filter');
        Array.prototype.forEach.call(chips, function (c) {
          var on = c === chip;
          c.classList.toggle('is-active', on);
          c.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        apply();
      });
    });
  }
})();
