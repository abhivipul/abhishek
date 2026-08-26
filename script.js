'use strict';

/* ── Project data ─────────────────────────────────────── */
const PROJECTS = {
  masaara: {
    title:'Masaara Silver', cat:'Social Media',
    img:'screenshort/Screenshot 2026-08-26 205533.png',
    imgAlt:'Masaara Silver Instagram profile',
    about:'Social media management for Masaara Silver — a luxury silver jewellery brand offering 925 hallmarked Polki Jadau, bridal and modern couture pieces. The goal was to build a consistent, premium visual identity across all content.',
    role:'Social Media Manager — Content planning, visual creative direction, post design, caption writing and overall channel strategy.',
    deliverables:['Content Calendar','Post Creatives','Reels Strategy','Brand Voice','Story Templates'],
    link:'https://www.instagram.com/masaara.silver/',
  },
  rjs: {
    title:'RJS Seva Sadan Foundation', cat:'Social Media',
    img:'screenshort/Screenshot 2026-08-26 205547.png',
    imgAlt:'RJS Seva Sadan Foundation Instagram profile',
    about:'Social media for RJS Seva Sadan Foundation — an NPO spreading happiness and hope through community initiatives including the Ek Pyaau campaign in Raigarh and Raipur.',
    role:'Social Media Manager — Digital storytelling for social impact campaigns, community awareness posts and event coverage.',
    deliverables:['Campaign Content','Awareness Posts','Event Graphics','Impact Stories','Community Engagement'],
    link:'https://www.instagram.com/rjs_sevasadan_foundations/',
  },
  shivanta: {
    title:'Shivanta Hospital Raipur', cat:'Social Media',
    img:'screenshort/Screenshot 2026-08-26 205605.png',
    imgAlt:'Shivanta Hospital Instagram profile',
    about:'Social media management for Shivanta Hospital — an advanced orthopaedic centre for arthroplasty, arthroscopy, spine and trauma surgery. Content builds awareness, trust and patient education.',
    role:'Social Media Manager — Healthcare content strategy, medical education posts, doctor feature creatives and hospital promotional content.',
    deliverables:['Medical Content','Doctor Profiles','Awareness Creatives','Festive Posts','Educational Series'],
    link:'https://www.instagram.com/shivanta_hospital_raipur/',
  },
  dulhan: {
    title:'Dulhan Saree', cat:'Social Media',
    img:'screenshort/Screenshot 2026-08-26 205624.png',
    imgAlt:'Dulhan Saree Instagram profile',
    about:'Fashion-forward social media for Dulhan Saree — a clothing brand offering sarees, lehengas, gowns, chunri, indo-western and sharara. Growing a fashion-conscious audience with vibrant, celebratory content.',
    role:'Social Media Manager — Fashion content direction, product photography strategy, product launch posts and community growth.',
    deliverables:['Fashion Posts','Product Showcases','Sale Campaigns','Reels Content','Story Strategy'],
    link:'https://www.instagram.com/dulhan__saree/',
  },
  subhash: {
    title:'Subhash Enterprises', cat:'Social Media',
    img:'screenshort/Screenshot 2026-08-26 205644.png',
    imgAlt:'Subhash Enterprises Instagram profile',
    about:'Social media for Subhash Enterprises — a tyre retail business in Raigarh operating since 1981, dealing in tyres, tubes, flaps and OTRs across multiple brands.',
    role:'Social Media Manager — Building digital presence for a traditional retail business, product awareness posts and brand content.',
    deliverables:['Product Posts','Brand Awareness','Offer Graphics','Seasonal Content'],
    link:'https://www.instagram.com/subhash.enterprises/',
  },
  patni: {
    title:'Patni Associates Raipur', cat:'Social Media',
    img:'screenshort/Screenshot 2026-08-26 210138.png',
    imgAlt:'Patni Associates Instagram profile',
    about:'Social media management for Patni Associates — an infrastructure development and consultancy firm in Raipur. Content focuses on professional brand positioning, project highlights and festive occasions.',
    role:'Social Media Manager — Brand content creation, festive graphic design and professional social media strategy for a B2B infrastructure firm.',
    deliverables:['Brand Posts','Festive Creatives','Project Highlights','Profile Management'],
    link:'https://www.instagram.com/patni_associates_raipur/',
  },
  bagicha: {
    title:'Bagicha RGH', cat:'Social Media',
    img:'screenshort/Screenshot 2026-08-26 210652.png',
    imgAlt:'Bagicha Restaurant and Cafe Instagram profile',
    about:'Social media for Bagicha — a restaurant and café in Raigarh offering woodfire cuisine, Italian and South Indian food in a warm, green ambience.',
    role:'Social Media Manager — Food and lifestyle content direction, restaurant storytelling, menu showcase posts and ambiance photography strategy.',
    deliverables:['Food Content','Ambiance Posts','Menu Graphics','Event Coverage','Reels'],
    link:'https://www.instagram.com/bagichargh/',
  },
  drankur: {
    title:'Dr. Ankur Singhal', cat:'Social Media',
    img:'screenshort/Screenshot 2026-08-26 210834.png',
    imgAlt:'Dr. Ankur Singhal Instagram profile',
    about:'Personal brand social media for Dr. Ankur Singhal — chief joint replacement and reconstructive expert in Raipur. Building professional authority and patient trust through educational content.',
    role:'Social Media Manager — Medical personal branding, patient education content, media coverage and authority-building posts.',
    deliverables:['Medical Education','Authority Content','Patient Stories','Awareness Campaigns'],
    link:'https://www.instagram.com/dr_ankur_singhal/',
  },
  aashirwad: {
    title:'Aashirwad Solar', cat:'Social Media',
    img:'screenshort/Screenshot 2026-08-26 215444.png',
    imgAlt:'Aashirwad Solar Instagram profile',
    about:'Social media for Aashirwad Solar — promoting solar energy solutions in Raigarh for homes, industries and farms. Content educates the audience about renewable energy while positioning the brand as a trusted local provider.',
    role:'Social Media Manager — Brand content strategy, product promotion and educational content for the solar energy sector.',
    deliverables:['Product Posts','Educational Content','Brand Awareness','Campaign Creatives'],
    link:'https://www.instagram.com/aashirwad.solar/',
  },
};

/* ── Boot ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  initReveal();
  initProjectCards();
  initLightbox();
  initProjectModal();
  initHeroParallax();
  initSmoothScroll();
});

/* ── Nav scroll ────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const tick = () => nav.classList.toggle('sc', window.scrollY > 40);
  window.addEventListener('scroll', tick, {passive:true});
  tick();
}

/* ── Mobile menu ──────────────────────────────────────── */
function initMobileMenu() {
  const btn  = document.getElementById('hbg');
  const menu = document.getElementById('mobmenu');
  if (!btn || !menu) return;

  const toggle = (open) => {
    btn.classList.toggle('o', open);
    menu.classList.toggle('o', open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  btn.addEventListener('click', () => toggle(!menu.classList.contains('o')));

  document.querySelectorAll('.ml').forEach(l =>
    l.addEventListener('click', () => toggle(false))
  );

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('o')) {
      toggle(false);
      btn.focus();
    }
  });
}

/* ── Scroll reveal ────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.r');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ── Social project cards ─────────────────────────────── */
function initProjectCards() {
  document.querySelectorAll('.sm-card[data-pid]').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      openProject(card.dataset.pid);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(card.dataset.pid); }
    });
  });
}

/* ── Lightbox ─────────────────────────────────────────── */
function initLightbox() {
  const overlay = document.getElementById('lb');
  const closeBtn = document.getElementById('lbx');
  const img = document.getElementById('lbimg');
  if (!overlay || !closeBtn || !img) return;

  document.querySelectorAll('[data-lb]').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      img.src = el.dataset.lb;
      img.alt = el.querySelector('img')?.alt || 'Graphic design';
      overlay.classList.add('on');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });

  const close = () => { overlay.classList.remove('on'); document.body.style.overflow = ''; img.src = ''; };
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('on')) close(); });
}

/* ── Project modal ────────────────────────────────────── */
function initProjectModal() {
  const overlay = document.getElementById('pm');
  const closeBtn = document.getElementById('pmx');
  if (!overlay || !closeBtn) return;

  const close = () => { overlay.classList.remove('on'); document.body.style.overflow = ''; };
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('on')) close(); });
}

function openProject(id) {
  const p = PROJECTS[id];
  if (!p) return;
  const overlay = document.getElementById('pm');
  if (!overlay) return;

  document.getElementById('pmimg').src    = p.img;
  document.getElementById('pmimg').alt    = p.imgAlt;
  document.getElementById('pmcat').textContent   = p.cat;
  document.getElementById('pmtitle').textContent = p.title;
  document.getElementById('pmabout').textContent = p.about;
  document.getElementById('pmrole').textContent  = p.role;
  document.getElementById('pmtags').innerHTML =
    p.deliverables.map(d => `<span class="pm__tag">${d}</span>`).join('');
  document.getElementById('pmlink').href = p.link;

  overlay.classList.add('on');
  document.body.style.overflow = 'hidden';
  document.getElementById('pmx').focus();
}

/* ── Hero parallax (desktop only) ────────────────────── */
function initHeroParallax() {
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  if (window.innerWidth < 900) return;

  const portrait = document.querySelector('.hero__pw');
  if (!portrait) return;

  let tx = 0, ty = 0, cx = 0, cy = 0, raf;

  document.addEventListener('mousemove', e => {
    tx = ((e.clientX - window.innerWidth/2) / window.innerWidth) * 10;
    ty = ((e.clientY - window.innerHeight/2) / window.innerHeight) * 6;
  });

  const loop = () => {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    portrait.style.transform = `translate(${cx * .5}px, ${cy * .5}px)`;
    raf = requestAnimationFrame(loop);
  };
  loop();

  const hero = document.querySelector('.hero');
  if (hero) {
    new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        cancelAnimationFrame(raf);
        portrait.style.transform = '';
      } else {
        loop();
      }
    }).observe(hero);
  }
}

/* ── Smooth scroll ────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navh')) || 68;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
    });
  });
}
