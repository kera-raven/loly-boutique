'use strict';

/* ============================================================
   SETTINGS
   WHATSAPP_URL: put your number with country code, e.g.
   'https://wa.me/201001234567'  (or just '201001234567').
   Leave empty and the site shows a message instead of sending.
   ============================================================ */
const WHATSAPP_URL = 'https://wa.me/201113349847';

/* ============================================================
   CATALOG
   Per product (all optional):
   image:   main photo file name in assets/products/  e.g. 'delina.jpg'
   gallery: extra photos, e.g. ['delina-2.jpg', 'delina-3.jpg']
   specs:   details shown in the product window,
            e.g. { 'Size': '100 ml', 'Type': 'Eau de Parfum' }
   desc:    one short sentence about the product
   Prices are in EGP.
   ============================================================ */
const CATEGORIES = ['Men', 'Women', 'Unisex', 'Boxes & Sets'];

const CATALOG = {
  'Men': [
    { name: 'Y (Yves Saint Laurent)', price: 650, image: 'Y (Yves Saint Laurent).jpg', gallery: [], specs: {}, desc: 'A fresh, clean woody-aromatic scent with apple, ginger and sage over amber woods.' },
    { name: 'Laverne Balance', price: 750, image: 'laverne balance.jpg', gallery: [], specs: {}, desc: 'Fresh woody and aromatic blend with crisp spices and a clean modern base.' },
    { name: '1 Million Gold', price: 750, image: '1 Million Gold.jpg', gallery: [], specs: {}, desc: 'Bold warm amber and spicy leather scent with a rich sweet finish.' },
    { name: 'Stronger With You Intensely', price: 800, image: '', gallery: [], specs: {}, desc: 'A warm, sweet amber-vanilla scent with spicy and woody touches.' },
    { name: 'Stronger With You Absolutely', price: 800, image: '', gallery: [], specs: {}, desc: 'A deeper, richer take on the Stronger With You line.' },
    { name: 'Fakhar Lattafa', price: 950, image: '', gallery: [], specs: {}, desc: 'Fresh spicy and fruity-woody fragrance with a smooth warm trail.' },
    { name: 'Versace', price: 600, image: '', gallery: [], specs: {}, desc: 'A fresh minty-citrus opening with sweet vanilla and tonka over a woody base; bold and energetic.' },
    { name: 'Half Moon', price: 650, image: '', gallery: [], specs: {}, desc: 'Deep woody and smoky-spicy scent with a rich dark character.' },
    { name: 'Dior Homme Intense', price: 650, image: '', gallery: [], specs: {}, desc: 'A smooth, powdery iris fragrance with lavender and warm woods.' },
    { name: 'Parfums de Marly', price: 650, image: '', gallery: [], specs: {}, desc: 'A smooth blend of apple, lavender and vanilla over warm woods and spice.' },
    { name: 'Arrogate Blue', price: 950, image: '', gallery: [], specs: {}, desc: 'A bright opening of grapefruit, lemon and pink pepper that dries down to incense and vetiver.' },
    { name: 'Issey Miyake', price: 750, image: '', gallery: [], specs: {}, desc: 'A fresh, clean citrus-aquatic scent with a touch of spice and soft woods.' }
  ],
  'Women': [
    { name: 'Laverne Sense', price: 650, image: 'Laverne Sense.jpg', gallery: [], specs: {}, desc: 'A soft floral-fruity scent: blackcurrant and tangerine, a jasmine and iris heart, and a musky base.' },
    { name: 'Sakina', price: 800, image: 'sakina.jpg', gallery: [], specs: {}, desc: 'Soft floral and warm musky scent with a smooth, elegant touch.' },
    { name: 'Eman', price: 800, image: 'eman.jpg', gallery: [], specs: {}, desc: 'Feminine floral-fruity fragrance with a sweet, refined base.' },
    { name: 'Delina La Rosée', price: 850, image: 'delina.jpg', gallery: [], specs: { 'Size': '75 ml' }, desc: 'A soft, dewy rose floral with a fresh fruity sparkle.' },
    { name: 'Gissah', price: 950, image: 'gissah pink.jpg', gallery: [], specs: {}, desc: 'A feminine Gissah fragrance in a signature pink bottle.' },
    { name: 'Olympea Flora', price: 650, image: 'Olympéa Flora.jpg', gallery: [], specs: {}, desc: 'A light floral interpretation of the Olympea line, soft and feminine.' },
    { name: 'Libre Mini (30ml)', price: 100, image: 'Libre Mini.jpg', gallery: [], specs: { 'Size': '30 ml' }, desc: 'A lavender and orange blossom scent with a warm musk-vanilla base.' },
    { name: 'Good Girl (30ml)', price: 100, image: 'good girl mini.jpg', gallery: [], specs: { 'Size': '30 ml' }, desc: 'A bold, sweet floral with jasmine, tuberose and almond over cocoa and tonka warmth.' },
    { name: 'Laverne Splash', price: 200, image: '', gallery: [], specs: {}, desc: 'Light, refreshing mist-style scent ideal for daily freshness.' },
    { name: 'Arrogate Pink', price: 950, image: '', gallery: [], specs: {}, desc: 'A sweet, feminine floral with orange blossom and almond, jasmine and violet, over soft musk.' },
    { name: 'Lipstick', price: 800, image: 'lipstick.jpg', gallery: [], specs: {}, desc: 'A sweet powdery rose and iris perfume with a soft, vintage cosmetic vibe.' },
    { name: 'Victoria (30ml)', price: 100, image: '', gallery: [], specs: { 'Size': '30 ml' }, desc: 'Sweet, alluring floral-vanilla scent in a compact travel size.' }
  ],
  'Unisex': [
    { name: 'Baccarat Rouge 540', price: 650, image: '', gallery: [], specs: {}, desc: 'An airy amber-floral with jasmine, saffron and cedar, known for its glowing sweet-woody trail.' },
    { name: 'Vintage Tobacco', price: 650, image: '', gallery: [], specs: {}, desc: 'Rich warm tobacco and spiced wood blend with a deep, cozy finish.' },
    { name: 'Erba Pura', price: 950, image: '', gallery: [], specs: {}, desc: 'A juicy, sunny fruity musk with warm amber-vanilla in the base.' },
    { name: 'Tom Ford', price: 650, image: '', gallery: [], specs: {}, desc: 'A rich, warm blend of sweet tobacco leaf and vanilla with spice, cocoa and dried fruit.' },
    { name: 'Black Afgano', price: 700, image: '', gallery: [], specs: {}, desc: 'A dark, resinous scent with incense and oud; intense and distinctive.' },
    { name: 'Vanilla Powder', price: 550, image: 'vanilla powder.jpg', gallery: [], specs: {}, desc: 'Soft powdery vanilla and sweet warm notes with a smooth, comforting trail.' }
  ],
  'Boxes & Sets': [
    { name: 'Risk Box', price: 1350, image: '', gallery: [], specs: {}, desc: 'Gift box selection combining signature scents and matching items.' },
    { name: 'Arrogate Box', price: 1600, image: '', gallery: [], specs: {}, desc: 'A gift box with one full-size Arrogate Pink perfume and four mini travel perfumes from the Arrogate collection.' },
    { name: 'Laverne Bag', price: 1350, image: '', gallery: [], specs: {}, desc: 'A pink Laverne gift bag with a full-size Sense perfume and a matching Sense perfumed jar.' },
    { name: 'Assaf Sunglasses Box', price: 2600, image: '', gallery: [], specs: {}, desc: 'A gift box with one full-size Assaf perfume, five mini Assaf perfumes and a pair of stylish sunglasses.' },
    { name: 'Assaf Box (30ml)', price: 950, image: '', gallery: [], specs: { 'Size': '30 ml' }, desc: 'A gift box with six mini (30 ml) assorted Assaf perfumes, including Frankel, Miss Flora, Miss Sakura and Gris Dior.' },
    { name: 'The Body Shop Box', price: 650, image: '', gallery: [], specs: {}, desc: '' },
    { name: 'Bianco Latte Set', price: 750, image: '', gallery: [], specs: {}, desc: 'A creamy, milky-vanilla gourmand scent in a gift set.' },
    { name: 'Musk Set', price: 900, image: '', gallery: [], specs: {}, desc: 'Curated musk-focused fragrance set with clean, soft, and versatile scents.' },
    { name: 'Assaf 3-Piece Set', price: 500, image: '', gallery: [], specs: {}, desc: 'A gift set with three mini perfumes from the Arrogate Pink collection.' }
  ]
};

/* ---------- Build flat product list with ids ---------- */
const PRODUCTS = [];
CATEGORIES.forEach(function (cat, ci) {
  CATALOG[cat].forEach(function (p, i) {
    PRODUCTS.push({ id: 'p' + ci + '-' + i, category: cat, name: p.name, price: p.price, image: p.image, gallery: p.gallery || [], specs: p.specs || {}, desc: p.desc || '' });
  });
});

/* ---------- Helpers ---------- */
const $ = function (id) { return document.getElementById(id); };
const money = function (n) { return 'EGP ' + n.toLocaleString('en-US'); };
const LOGO = 'logo.jpeg';
const STORE_KEY = 'loly-cart-v1';

let cart = {};      // { productId: quantity }
let activeCat = 'All';
let toastTimer = null;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    Object.keys(saved).forEach(function (id) {
      if (PRODUCTS.some(function (p) { return p.id === id; }) && saved[id] > 0) cart[id] = saved[id];
    });
  } catch (e) { cart = {}; }
}
function saveCart() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ }
}
function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('show'); }, 3200);
}

/* ---------- Intro ---------- */
(function intro() {
  const node = $('intro');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let done = false;
  document.body.classList.add('locked');
  function dismiss() {
    if (done) return;
    done = true;
    node.classList.add('hide');
    document.body.classList.remove('locked');
    setTimeout(function () { if (node.parentNode) node.parentNode.removeChild(node); }, 800);
  }
  $('skipIntro').addEventListener('click', dismiss);
  setTimeout(dismiss, reduce ? 700 : 3200);
})();

/* ---------- Tabs and grid ---------- */
function renderTabs() {
  const box = $('tabs');
  box.textContent = '';
  ['All'].concat(CATEGORIES).forEach(function (c) {
    const b = el('button', 'tab' + (c === activeCat ? ' active' : ''), c);
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', c === activeCat ? 'true' : 'false');
    b.addEventListener('click', function () { setCategory(c); });
    box.appendChild(b);
  });
}

function setCategory(c) {
  activeCat = c;
  renderTabs();
  renderGrid();
}

function photoBox(p, file) {
  const box = el('div', 'photo');
  function placeholder() {
    box.textContent = '';
    box.classList.remove('has-img');
    const ph = el('div', 'ph');
    const logo = el('img');
    logo.src = LOGO;
    logo.alt = '';
    ph.appendChild(logo);
    ph.appendChild(el('span', '', 'Loly Boutique'));
    box.appendChild(ph);
  }
  if (file) {
    const img = el('img');
    img.loading = 'lazy';
    img.alt = p.name;
    img.addEventListener('error', placeholder);
    img.src = 'assets/products/' + encodeURIComponent(file);
    box.classList.add('has-img');
    box.appendChild(img);
  } else {
    placeholder();
  }
  return box;
}

function renderGrid() {
  const grid = $('grid');
  grid.textContent = '';
  PRODUCTS.filter(function (p) { return activeCat === 'All' || p.category === activeCat; })
    .forEach(function (p) {
      const card = el('article', 'card');
      card.appendChild(el('span', 'cat', p.category));
      card.appendChild(photoBox(p, p.image));
      const h = el('h3');
      const tb = el('button', 'title-btn', p.name);
      tb.type = 'button';
      tb.addEventListener('click', function () { openProduct(p.id); });
      h.appendChild(tb);
      card.appendChild(h);
      card.addEventListener('click', function (e) {
        if (!e.target.closest('.add') && !e.target.closest('.title-btn')) openProduct(p.id);
      });
      card.appendChild(el('p', 'price', money(p.price)));
      const add = el('button', 'add', 'Add to Cart');
      add.type = 'button';
      add.addEventListener('click', function () { addToCart(p.id); });
      card.appendChild(add);
      grid.appendChild(card);
    });
}

/* ---------- Cart ---------- */
function findProduct(id) { return PRODUCTS.find(function (p) { return p.id === id; }); }
function cartCount() { return Object.keys(cart).reduce(function (s, id) { return s + cart[id]; }, 0); }
function cartTotal() { return Object.keys(cart).reduce(function (s, id) { return s + cart[id] * findProduct(id).price; }, 0); }

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  const badge = $('cartCount');
  badge.classList.remove('pop');
  void badge.offsetWidth;
  badge.classList.add('pop');
  toast(findProduct(id).name + ' added to cart');
}
function changeQty(id, d) {
  cart[id] = (cart[id] || 0) + d;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}
function removeItem(id) { delete cart[id]; saveCart(); renderCart(); }

function renderCart() {
  $('cartCount').textContent = cartCount();
  $('cartTotal').textContent = money(cartTotal());
  const box = $('cartItems');
  box.textContent = '';
  const ids = Object.keys(cart);
  if (!ids.length) {
    box.appendChild(el('p', 'empty', 'Your cart is empty. Add a fragrance from the collection.'));
    return;
  }
  ids.forEach(function (id) {
    const p = findProduct(id);
    const item = el('div', 'item');
    item.appendChild(el('span', 'item-name', p.name));
    item.appendChild(el('span', 'item-price', money(p.price * cart[id])));

    const qty = el('div', 'qty');
    const minus = el('button', '', '\u2212');
    minus.type = 'button';
    minus.setAttribute('aria-label', 'Decrease quantity of ' + p.name);
    minus.addEventListener('click', function () { changeQty(id, -1); });
    const plus = el('button', '', '+');
    plus.type = 'button';
    plus.setAttribute('aria-label', 'Increase quantity of ' + p.name);
    plus.addEventListener('click', function () { changeQty(id, 1); });
    qty.appendChild(minus);
    qty.appendChild(el('span', '', String(cart[id])));
    qty.appendChild(plus);
    item.appendChild(qty);

    const rm = el('button', 'remove', 'Remove');
    rm.type = 'button';
    rm.addEventListener('click', function () { removeItem(id); });
    item.appendChild(rm);
    box.appendChild(item);
  });
}

/* ---------- Drawer, modal, menu ---------- */
function openCart() {
  $('drawer').classList.add('open');
  $('drawer').setAttribute('aria-hidden', 'false');
  $('overlay').hidden = false;
  document.body.classList.add('locked');
}
function closeCart() {
  $('drawer').classList.remove('open');
  $('drawer').setAttribute('aria-hidden', 'true');
  if (!$('modal').classList.contains('open')) {
    $('overlay').hidden = true;
    document.body.classList.remove('locked');
  }
}
function openModal() {
  if (!cartCount()) { toast('Your cart is empty.'); return; }
  const s = $('summary');
  s.textContent = '';
  Object.keys(cart).forEach(function (id) {
    const p = findProduct(id);
    const r = el('div', 'row');
    r.appendChild(el('span', '', p.name + ' \u00d7 ' + cart[id]));
    r.appendChild(el('span', '', money(p.price * cart[id])));
    s.appendChild(r);
  });
  const t = el('div', 'row sum-total');
  t.appendChild(el('span', '', 'Total'));
  t.appendChild(el('span', '', money(cartTotal())));
  s.appendChild(t);
  closeCart();
  $('overlay').hidden = true;
  $('modal').classList.add('open');
  $('modal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
}
function closeModal() {
  $('modal').classList.remove('open');
  $('modal').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('locked');
}
function closeMenu() {
  $('nav').classList.remove('open');
  $('burger').setAttribute('aria-expanded', 'false');
}

/* ---------- Product details ---------- */
let currentId = null;
let pmFiles = [];

function showPmImage(i) {
  const p = findProduct(currentId);
  const main = $('pmMain');
  main.textContent = '';
  main.appendChild(photoBox(p, pmFiles[i] || ''));
  const th = $('pmThumbs');
  th.textContent = '';
  if (pmFiles.length < 2) return;
  pmFiles.forEach(function (f, idx) {
    const b = el('button', 'thumb' + (idx === i ? ' active' : ''));
    b.type = 'button';
    b.setAttribute('aria-label', 'Photo ' + (idx + 1));
    const im = el('img');
    im.alt = '';
    im.addEventListener('error', function () { b.style.display = 'none'; });
    im.src = 'assets/products/' + encodeURIComponent(f);
    b.appendChild(im);
    b.addEventListener('click', function () { showPmImage(idx); });
    th.appendChild(b);
  });
}

function openProduct(id) {
  const p = findProduct(id);
  if (!p) return;
  currentId = id;
  pmFiles = [p.image].concat(p.gallery).filter(Boolean);
  $('pmCat').textContent = p.category;
  $('pmTitle').textContent = p.name;
  $('pmPrice').textContent = money(p.price);
  $('pmDesc').textContent = p.desc;
  $('pmDesc').hidden = !p.desc;
  const dl = $('pmSpecs');
  dl.textContent = '';
  const keys = Object.keys(p.specs);
  keys.forEach(function (k) {
    const row = el('div');
    row.appendChild(el('dt', '', k));
    row.appendChild(el('dd', '', p.specs[k]));
    dl.appendChild(row);
  });
  if (!keys.length && !p.desc) $('pmDesc').textContent = 'More details coming soon.';
  if (!keys.length && !p.desc) $('pmDesc').hidden = false;
  showPmImage(0);
  $('pModal').classList.add('open');
  $('pModal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
}
function closeProduct() {
  if (!$('pModal').classList.contains('open')) return;
  $('pModal').classList.remove('open');
  $('pModal').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('locked');
}

/* ---------- WhatsApp order ---------- */
function buildWhatsAppLink(text) {
  const base = WHATSAPP_URL.trim();
  if (!base) return '';
  if (/^\+?\d[\d\s-]*$/.test(base)) return 'https://wa.me/' + base.replace(/\D/g, '') + '?text=' + encodeURIComponent(text);
  return base + (base.indexOf('?') === -1 ? '?' : '&') + 'text=' + encodeURIComponent(text);
}

function submitOrder(e) {
  e.preventDefault();
  const f = e.target;
  let ok = true;
  ['name', 'phone', 'gov', 'area', 'address'].forEach(function (k) {
    const bad = !f.elements[k].value.trim();
    f.elements[k].classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  if (!ok) { toast('Please fill in all required fields.'); return; }

  const lines = ['*New order - Loly Boutique*', ''];
  Object.keys(cart).forEach(function (id) {
    const p = findProduct(id);
    lines.push('\u2022 ' + p.name + ' \u00d7 ' + cart[id] + ' = ' + money(p.price * cart[id]));
  });
  lines.push('', '*Total:* ' + money(cartTotal()), '');
  lines.push('الاسم: ' + f.elements.name.value.trim());
  lines.push('الهاتف: ' + f.elements.phone.value.trim());
  lines.push('المحافظة: ' + f.elements.gov.value.trim());
  lines.push('المنطقة: ' + f.elements.area.value.trim());
  lines.push('العنوان: ' + f.elements.address.value.trim());
  if (f.elements.notes.value.trim()) lines.push('ملاحظات: ' + f.elements.notes.value.trim());

  const link = buildWhatsAppLink(lines.join('\n'));
  if (!link) {
    toast('WhatsApp is not set up yet. Add your number to WHATSAPP_URL in script.js.');
    return;
  }
  window.open(link, '_blank', 'noopener');
}

/* ---------- Init ---------- */
function init() {
  $('year').textContent = new Date().getFullYear();
  loadCart();
  renderTabs();
  renderGrid();
  renderCart();

  $('openCart').addEventListener('click', openCart);
  $('closeCart').addEventListener('click', closeCart);
  $('overlay').addEventListener('click', closeCart);
  $('checkoutBtn').addEventListener('click', openModal);
  $('closeModal').addEventListener('click', closeModal);
  $('modal').addEventListener('click', function (e) { if (e.target === $('modal')) closeModal(); });
  $('orderForm').addEventListener('submit', submitOrder);
  $('closeP').addEventListener('click', closeProduct);
  $('pModal').addEventListener('click', function (e) { if (e.target === $('pModal')) closeProduct(); });
  $('pmAdd').addEventListener('click', function () { if (currentId) addToCart(currentId); });

  $('burger').addEventListener('click', function () {
    const open = $('nav').classList.toggle('open');
    $('burger').setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (a.dataset.filter) setCategory(a.dataset.filter);
      closeMenu();
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeProduct();
    closeModal();
    closeCart();
    closeMenu();
  });
}

init();
