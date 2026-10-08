/* ---------- Content ---------- */
const LINKS = {
  pos: 'https://play.google.com/store/apps/details?id=com.tenacioustechies.foodchow.pos&hl=en_IN',
  site: 'https://www.foodchow.com/',
  app: 'https://play.google.com/store/apps/details?id=com.tenacioustechies.foodchow&hl=en_IN',
  customerFigma: 'https://www.figma.com/design/Pa9R41ZOG1T8ptqDmtxhIf/Customer-App-Re-Design%5C?node-id=0-1',
  kidsFigma: 'https://www.figma.com/design/TQUSiKQ1Cs4YS6enjUwzwg/Untitled?node-id=580-2',
  kidsApp: 'https://play.google.com/store/apps/details?id=com.nairv.sparkguru&hl=en_IN'
};

const PROJECTS = [
  {
    id: 'pos',
    product: 'FoodChow POS',
    title: 'A billing counter that keeps up with the rush',
    summary: 'Order, bill and switch service modes on a terminal, tablet or phone.',
    role: 'UI/UX Designer',
    platforms: 'Windows, tablet, mobile',
    year: '2022 – Now',
    tools: 'Figma, Adobe XD',
    img: 'pos-card', alt: 'FoodChow POS on a desktop monitor, an iMin billing terminal and a phone',
    links: [['Google Play', LINKS.pos]],
    study: {
      problem: 'Staff bill with a queue waiting, on three very different screen sizes. The POS has to feel like one product on all of them.',
      research: ['Mapped each module\'s requirements with product and dev.', 'Mapped the counter flow: category, item, order, service mode, bill.', 'Staff search by name or by item code, so both are needed.'],
      strategy: ['One layout everywhere: categories, items, order.', 'Order always visible on large screens.', 'Online orders separated from the counter flow.'],
      wireframes: 'Low-fidelity flows per module, reviewed with product and dev before any visual design.',
      ui: ['Item code and item name search side by side.', 'Large item tiles readable at arm\'s length.', 'On phones, the order collapses into a View Order bar.'],
      prototype: 'Clickable Figma prototypes were the reference for developer handoff.',
      outcome: 'Live on Windows, tablet and mobile, and refined release by release since 2022.',
      caption: 'POS on desktop, iMin terminal and phone.'
    }
  },
  {
    id: 'ordering',
    product: 'FoodChow Online Ordering',
    title: 'From finding a restaurant to checkout',
    summary: 'Discover restaurants, browse a menu and order for delivery, pickup or dine-in.',
    role: 'UI/UX Designer',
    platforms: 'Responsive web',
    year: '2022 – Now',
    tools: 'Figma, Adobe XD',
    img: 'ordering-card', alt: 'FoodChow ordering website on desktop, laptop and phone',
    links: [['foodchow.com', LINKS.site]],
    study: {
      problem: 'Customers start from a craving or from a restaurant. The site must support both and stay consistent from desktop to phone.',
      research: ['Defined pages with product: listing, menu, cart, checkout.', 'Picked the filters that matter: veg, service type, offers.'],
      strategy: ['Cuisines first for quick entry.', 'Service types on every restaurant card.', 'Desktop filter column becomes mobile chips.'],
      wireframes: 'Desktop and mobile wireframed together so responsive behaviour was decided up front.',
      ui: ['Cuisine row with food photos.', 'Cards with area, service types and offers.', 'Mobile menu with tabs, search and clear Add buttons.'],
      prototype: 'Browse-to-checkout prototype used as the handoff reference.',
      outcome: 'Live at foodchow.com across multiple cities.',
      caption: 'Online ordering on desktop, laptop and mobile.'
    }
  },
  {
    id: 'customer',
    product: 'FoodChow Customer App',
    title: 'One app for every way a guest orders',
    summary: 'Order online, scan a table QR, claim offers or book a table.',
    role: 'UI/UX Designer',
    platforms: 'iOS and Android',
    year: '2022 – Now',
    tools: 'Figma',
    img: 'customer-card', alt: 'FoodChow customer app home, discovery and restaurant screens',
    links: [['Figma file', LINKS.customerFigma], ['Google Play', LINKS.app]],
    study: {
      problem: 'Four different intentions shared one feed. Restaurant pages also hid basics like hours and contact.',
      research: ['Listed each entry intention with product.', 'Noted what guests check before ordering: service, distance, diet, offers, hours.'],
      strategy: ['A clear home entry for each intention.', 'Service type as the first choice in discovery.', 'Hours, call, address and ordering together.'],
      wireframes: 'Home, discovery and restaurant detail wireframed as one connected flow.',
      ui: ['Colour-coded entries recognisable at a glance.', 'Quick filter chips and cuisine row.', 'Offers with countdown and a single Claim action.'],
      prototype: 'Figma prototype handed to development.',
      outcome: 'Published on Google Play.',
      caption: 'Home, discovery and restaurant detail.'
    }
  },
  {
    id: 'qr',
    product: 'FoodChow QR Ordering',
    title: 'Scan the table, read the menu, order',
    summary: 'From a table standee to an order on the guest\'s phone, no app needed.',
    role: 'UI/UX Designer',
    platforms: 'Print and mobile web',
    year: '2022 – Now',
    tools: 'Figma',
    img: 'qr-cropped', alt: 'QR ordering standee next to the mobile menu it opens',
    links: [['FoodChow', LINKS.site]],
    study: {
      problem: 'The standee must explain itself in a glance, and the menu must read well on a small screen in restaurant light.',
      research: ['Mapped the journey from table to placed order.', 'Collected restaurant needs: service choice, meal sections, diet markers.'],
      strategy: ['Instruction first, QR directly below.', 'Cashback offer to encourage sign-up without blocking orders.', 'Filters and search above the dish list.'],
      wireframes: 'Standee and menu sketched together as one flow.',
      ui: ['High-contrast standee.', 'Branded menu header with Choose Service.', 'Dish rows with diet marker, price and a large Add button.'],
      prototype: 'Scan-to-add prototype for development.',
      outcome: 'Part of the live FoodChow product.',
      caption: 'QR standee and mobile menu.'
    }
  },
  {
    id: 'kids',
    product: 'Spark Guru',
    title: 'Learning through play, for small hands',
    summary: 'Alphabet activities, matching games and animal facts for young kids.',
    role: 'UI Designer',
    platforms: 'Android',
    year: 'Live',
    tools: 'Figma',
    img: 'kids-card', alt: 'Spark Guru animal facts, learning categories and matching games',
    links: [['Figma file', LINKS.kidsFigma], ['Google Play', LINKS.kidsApp]],
    study: {
      problem: 'Young kids can\'t read labels, so every choice must work from the picture alone.',
      research: ['Defined content: alphabet, numbers, colours, shapes, animals, fruits.', 'Large tap targets, few choices per screen.'],
      strategy: ['One illustrated jungle world.', 'A colour and picture per category.', 'Simple bottom bar for parents.'],
      wireframes: 'Tile grid, game list and fact cards set before illustration.',
      ui: ['Framed category tiles with locked states.', 'Game cards that preview the mechanic.', 'Animal facts on signposts.'],
      prototype: 'Figma prototype handed to the developer.',
      outcome: 'Published on Google Play.',
      caption: 'Animal facts, home and games.'
    }
  }
];

const MORE = [
  ['Multi-outlet management', 'Many outlets, one account', 'Web', 'https://www.figma.com/make/OIoE9fI2dBvdNFTv8dhVdJ/Multi-Outlet-Management-Flow', 'Open prototype'],
  ['Captain and waiter app', 'Table orders on the floor', 'Mobile', 'https://www.figma.com/design/UXfvbFHD9Wg41cSOTprMRG/Captain-App---Waiter-app?node-id=186-17715', 'Open in Figma'],
  ['Delivery settings', 'Delivery setup inside POS', 'POS', 'https://www.figma.com/design/pfezVj76S8QAX2NE9AFOef/Delivery-Setting-Customer-Side-in-POS?node-id=46-93352', 'Open in Figma'],
  ['Add new item', 'Faster menu item form', 'POS', 'https://www.figma.com/design/9HpsvCm0vSh0USKlzFx5PE/Add-Item-New-Design?node-id=0-1', 'Open in Figma'],
  ['Real-time offers', 'Time-limited offers', 'Product feature', 'https://www.figma.com/design/UbNKmCXyV0lqBedevkZll6/real-time-Offer-New', 'Open in Figma'],
  ['Inventory module', 'Stock tracking', 'POS', 'https://chow-design-studio.lovable.app/', 'Open preview']
];

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ext = (label, url, cls = 'text-link') =>
  `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${esc(label)}<svg class="ext" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3h7v7M13 3 4 12"/></svg><span class="sr-only"> (opens in a new tab)</span></a>`;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Hero showcase ---------- */
(function () {
  const wrap = document.querySelector('.showcase');
  if (!wrap) return;
  const stage = $('#showcase-stage');
  const imgs = [...stage.querySelectorAll('img')];
  const tabs = [...wrap.querySelectorAll('[role="tab"]')];
  const nameEl = $('#showcase-name');
  const SLIDE = 5000;
  let i = 0, timer = null;
  wrap.style.setProperty('--slide', SLIDE + 'ms');

  function show(n) {
    i = (n + tabs.length) % tabs.length;
    const t = tabs[i];
    imgs.forEach(im => im.classList.toggle('is-active', im.dataset.id === t.dataset.id));
    tabs.forEach(b => b.setAttribute('aria-selected', String(b === t)));
    nameEl.textContent = t.dataset.name;
    stage.href = '#case/' + t.dataset.id;
    stage.setAttribute('aria-label', 'Read the ' + t.dataset.name + ' case study');
    if (wrap.classList.contains('is-playing')) { // restart progress bar
      const bar = t.querySelector('.tab-bar span'); bar.style.animation = 'none'; bar.offsetWidth; bar.style.animation = '';
    }
  }
  function play() {
    if (reduceMotion) return;
    stop(); wrap.classList.add('is-playing');
    timer = setInterval(() => show(i + 1), SLIDE);
  }
  function stop() { clearInterval(timer); timer = null; }

  tabs.forEach((t, n) => t.addEventListener('click', () => { show(n); play(); }));
  wrap.addEventListener('keydown', e => {
    if (!e.target.matches('[role="tab"]')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault(); show(i + (e.key === 'ArrowRight' ? 1 : -1)); tabs[i].focus(); play();
    }
  });
  // Pause while someone is looking or interacting
  wrap.addEventListener('mouseenter', () => { stop(); wrap.classList.add('is-paused'); });
  wrap.addEventListener('mouseleave', () => { wrap.classList.remove('is-paused'); play(); });
  wrap.addEventListener('focusin', () => { stop(); wrap.classList.add('is-paused'); });
  wrap.addEventListener('focusout', e => { if (!wrap.contains(e.relatedTarget)) { wrap.classList.remove('is-paused'); play(); } });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : play());
  show(0); play();
})();

/* ---------- Render work ---------- */
$('#projects').innerHTML = PROJECTS.map((p, i) => `
  <article class="project" id="project-${p.id}">
    <a class="project-media tint-${p.id}" href="#case/${p.id}" aria-label="Read the ${esc(p.product)} case study">
      <img src="assets/${p.img}-1100.webp" srcset="assets/${p.img}-1100.webp 1100w, assets/${p.img}.webp 1900w" sizes="(max-width: 900px) 92vw, 58vw" alt="${esc(p.alt)}" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
    </a>
    <div class="project-text">
      <p class="project-product">${esc(p.product)}</p>
      <h3>${esc(p.title)}</h3>
      <p class="project-summary">${esc(p.summary)}</p>
      <dl class="project-meta">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Platforms</dt><dd>${esc(p.platforms)}</dd></div>
      </dl>
      <div class="project-actions">
        <a class="btn btn-primary" href="#case/${p.id}">Read case study</a>
        ${p.links.map(l => ext(l[0], l[1])).join('')}
      </div>
    </div>
  </article>`).join('');

$('#more-list').innerHTML = MORE.map(m => `
  <li>
    <a href="${m[3]}" target="_blank" rel="noopener noreferrer">
      <span class="more-name">${esc(m[0])}</span>
      <span class="more-desc">${esc(m[1])}</span>
      <span class="more-tag">${esc(m[2])}</span>
      <span class="more-open">${esc(m[4])}<svg class="ext" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3h7v7M13 3 4 12"/></svg></span>
      <span class="sr-only"> (opens in a new tab)</span>
    </a>
  </li>`).join('');

/* ---------- Case study dialog ---------- */
const dialog = $('#case');
const body = $('#case-body');
let lastFocus = null;

const STEPS = [
  ['problem', 'Problem'], ['research', 'Research'], ['strategy', 'Strategy'],
  ['wireframes', 'Wireframes'], ['ui', 'Final UI'], ['prototype', 'Prototype and handoff'], ['outcome', 'Outcome']
];

function renderCase(p) {
  const s = p.study;
  const idx = PROJECTS.indexOf(p);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const list = arr => `<ul>${arr.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`;
  const block = key => {
    const v = s[key];
    if (key === 'ui') return `${list(v)}<figure class="case-figure tint-${p.id}"><img src="assets/${p.img}.webp" alt="${esc(p.alt)}" loading="lazy" decoding="async"><figcaption>${esc(s.caption)}</figcaption></figure>`;
    return Array.isArray(v) ? list(v) : `<p>${esc(v)}</p>`;
  };
  $('#case-crumb').textContent = `Case study ${idx + 1} of ${PROJECTS.length}`;
  body.innerHTML = `
    <div class="case-head">
      <p class="project-product">${esc(p.product)}</p>
      <h2 id="case-title">${esc(p.title)}</h2>
      <p class="case-lede">${esc(p.summary)}</p>
      <dl class="case-meta">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Platforms</dt><dd>${esc(p.platforms)}</dd></div>
        <div><dt>Timeline</dt><dd>${esc(p.year)}</dd></div>
        <div><dt>Tools</dt><dd>${esc(p.tools)}</dd></div>
      </dl>
      <div class="case-links">${p.links.map(l => ext(l[0], l[1], 'btn btn-ghost')).join('')}</div>
    </div>
    <figure class="case-hero tint-${p.id}"><img src="assets/${p.img}.webp" alt="${esc(p.alt)}" decoding="async"></figure>
    <div class="case-layout">
      <nav class="case-toc" aria-label="Case study sections">
        <ol>${STEPS.map(([k, t]) => `<li><a href="#cs-${k}" data-target="cs-${k}">${t}</a></li>`).join('')}</ol>
      </nav>
      <div class="case-content">
        ${STEPS.map(([k, t], i) => `<section id="cs-${k}" class="case-step"><h3><span class="step-n">${i + 1}</span>${t}</h3>${block(k)}</section>`).join('')}
        <a class="case-next" href="#case/${next.id}">
          <span>Next case study</span>
          <strong>${esc(next.product)}</strong>
        </a>
      </div>
    </div>`;
  body.querySelectorAll('.case-toc a').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const t = body.querySelector('#' + a.dataset.target);
    if (t) t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }));
  setupTocSpy();
}

let spy;
function setupTocSpy() {
  if (spy) spy.disconnect();
  if (!('IntersectionObserver' in window)) return;
  const links = [...body.querySelectorAll('.case-toc a')];
  spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) links.forEach(l => l.toggleAttribute('aria-current', l.dataset.target === en.target.id));
    });
  }, { root: dialog, rootMargin: '-30% 0px -60% 0px' });
  body.querySelectorAll('.case-step').forEach(s => spy.observe(s));
}

function openCase(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  if (!dialog.open) lastFocus = document.activeElement;
  renderCase(p);
  if (!dialog.open) { dialog.showModal(); document.body.classList.add('locked'); }
  dialog.scrollTop = 0;
  $('#case-close').focus({ preventScroll: true });
  document.title = `${p.product} case study — Jaimin Savaliya`;
}

function closeCase() {
  if (dialog.open) dialog.close();
}

dialog.addEventListener('close', () => {
  document.body.classList.remove('locked');
  document.title = 'Jaimin Savaliya — UI/UX Designer';
  if (location.hash.startsWith('#case/')) history.replaceState(null, '', '#work');
  const target = lastFocus && document.contains(lastFocus) ? lastFocus : $('#work');
  if (target && target.focus) target.focus({ preventScroll: true });
});
$('#case-close').addEventListener('click', closeCase);
dialog.addEventListener('click', e => { if (e.target === dialog) closeCase(); });

function route() {
  const m = location.hash.match(/^#case\/([\w-]+)/);
  if (m) openCase(m[1]); else if (dialog.open) dialog.close();
}
window.addEventListener('hashchange', route);
route();

/* ---------- Mobile menu ---------- */
const menuBtn = $('.menu-toggle');
const nav = $('#site-nav');
function setMenu(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); } });

/* ---------- Header state + active nav ---------- */
const header = $('.site-header');
const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

if ('IntersectionObserver' in window) {
  const navLinks = [...nav.querySelectorAll('a')];
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) navLinks.forEach(a => a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['work', 'about', 'skills', 'contact'].forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
}

/* ---------- Copy email ---------- */
const toast = $('#toast');
document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); toast.textContent = 'Email copied'; }
  catch (e) { toast.textContent = 'Copy failed. Select the address instead.'; }
  toast.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => toast.classList.remove('show'), 2200);
}));

$('#year').textContent = new Date().getFullYear();
