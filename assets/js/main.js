/* =============================================================
   Expstudios — main.js
   - Thème clair / sombre (mémorisé)
   - Langue FR / EN (mémorisée, textes EN dans translations.js)
   - Menu mobile
   - En-tête au scroll + lien actif
   - Apparition au scroll
   - Terminal animé + compteurs
   ============================================================= */
(() => {
  'use strict';

  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Thème ---------- */
  const themeButtons = $$('[data-theme-set]');

  const applyTheme = (theme, save = true) => {
    root.setAttribute('data-theme', theme);
    themeButtons.forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.themeSet === theme));
    });
    if (save) {
      try { localStorage.setItem('theme', theme); } catch (e) { /* stockage indisponible */ }
    }
  };

  applyTheme(root.getAttribute('data-theme') || 'light', false);
  themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => applyTheme(btn.dataset.themeSet));
  });

  // Suit le système tant que l'utilisateur n'a rien choisi
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) { /* ignore */ }
    if (!saved) applyTheme(e.matches ? 'dark' : 'light', false);
  });

  /* ---------- Langue FR / EN ---------- */
  // Le français est lu dans le HTML au chargement, l'anglais vient de translations.js
  const dict = {
    fr: { 'ui.openMenu': 'Ouvrir le menu', 'ui.closeMenu': 'Fermer le menu' },
    en: (window.I18N && window.I18N.en) || {},
  };
  const textNodes = $$('[data-i18n]');
  const attrNodes = $$('[data-i18n-attr]');
  const parseAttrs = (el) => el.dataset.i18nAttr.split(';').map((pair) => pair.split(':'));

  textNodes.forEach((el) => { dict.fr[el.dataset.i18n] = el.innerHTML.trim(); });
  attrNodes.forEach((el) => {
    parseAttrs(el).forEach(([attr, key]) => { dict.fr[key] = el.getAttribute(attr); });
  });

  const t = (key) => {
    const lang = root.getAttribute('lang') === 'en' ? 'en' : 'fr';
    return dict[lang][key] ?? dict.fr[key] ?? '';
  };

  const langButtons = $$('[data-lang-set]');
  const applyLang = (lang, save = true) => {
    const l = lang === 'en' ? 'en' : 'fr';
    root.setAttribute('lang', l);
    textNodes.forEach((el) => {
      const value = t(el.dataset.i18n);
      if (el.tagName === 'TITLE') el.textContent = value;
      else el.innerHTML = value;
    });
    attrNodes.forEach((el) => {
      parseAttrs(el).forEach(([attr, key]) => el.setAttribute(attr, t(key)));
    });
    langButtons.forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.langSet === l));
    });
    if (burger) {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-label', t(open ? 'ui.closeMenu' : 'ui.openMenu'));
    }
    // L'image principale des galeries reprend le texte de la miniature active
    $$('.gallery').forEach((g) => {
      const active = $('.gallery__thumb.is-active', g);
      if (active) $('.gallery__main', g).alt = active.getAttribute('aria-label');
    });
    if (save) {
      try { localStorage.setItem('lang', l); } catch (e) { /* stockage indisponible */ }
    }
  };

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.langSet));
  });

  /* ---------- Menu mobile ---------- */
  const burger = $('.burger');
  const mobileNav = $('#mobile-nav');

  const toggleMenu = (open) => {
    const isOpen = open ?? burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', t(isOpen ? 'ui.closeMenu' : 'ui.openMenu'));
    mobileNav.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  };

  burger?.addEventListener('click', () => toggleMenu());
  $$('a', mobileNav).forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      toggleMenu(false);
      burger.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches) toggleMenu(false);
  });

  // Langue initiale (choisie dans le <head> : mémorisée, sinon langue du navigateur)
  applyLang(root.getAttribute('lang'), false);

  /* ---------- En-tête au scroll ---------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Lien de navigation actif ---------- */
  const navLinks = $$('.nav__link');
  const sections = navLinks
    .map((link) => $(link.getAttribute('href')))
    .filter(Boolean);

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));

  /* ---------- Apparition au scroll ---------- */
  const reveals = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObs = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => revealObs.observe(el));
  }

  /* ---------- Terminal : lignes une à une ---------- */
  const terminal = $('#terminal');
  if (terminal) {
    const lines = $$('.terminal__line', terminal);
    const play = () => lines.forEach((line, i) => {
      setTimeout(() => line.classList.add('is-visible'), reduceMotion ? 0 : 350 + i * 520);
    });
    new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) { play(); obs.disconnect(); }
    }, { threshold: 0.5 }).observe(terminal);
  }

  /* ---------- Compteurs ---------- */
  const counters = $$('[data-count]');
  const animateCount = (el) => {
    const target = Number(el.dataset.count);
    const pad = Number(el.dataset.pad || 0);
    const format = (n) => String(n).padStart(pad, '0');
    if (reduceMotion) { el.textContent = format(target); return; }
    const duration = 900;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = format(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const countObs = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { animateCount(entry.target); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => countObs.observe(c));

  /* ---------- Galeries de captures ---------- */
  $$('.gallery').forEach((gallery) => {
    const main = $('.gallery__main', gallery);
    const thumbs = $$('.gallery__thumb', gallery);

    // Précharge les grandes images au survol de la galerie
    gallery.addEventListener('pointerenter', () => {
      thumbs.forEach((t) => { const img = new Image(); img.src = t.dataset.full; });
    }, { once: true });

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        if (thumb.classList.contains('is-active')) return;
        thumbs.forEach((t) => {
          t.classList.toggle('is-active', t === thumb);
          if (t === thumb) t.setAttribute('aria-current', 'true');
          else t.removeAttribute('aria-current');
        });
        const swap = () => {
          main.src = thumb.dataset.full;
          main.alt = thumb.getAttribute('aria-label');
          main.classList.remove('is-switching');
        };
        if (reduceMotion) { swap(); return; }
        main.classList.add('is-switching');
        setTimeout(swap, 160);
      });
    });
  });

  /* ---------- Année ---------- */
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
