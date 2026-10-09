/* =====================================================================
   PERSONALIZATION — edit these values to customise the website
   ===================================================================== */
const makeMemoryArt = (label, accent = '#D98C9B') => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 1600'>
      <defs>
        <linearGradient id='bg' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='#F7E7EA'/>
          <stop offset='55%' stop-color='#F4DCD3'/>
          <stop offset='100%' stop-color='#EFD7BB'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='1600' fill='url(#bg)'/>
      <circle cx='600' cy='820' r='470' fill='rgba(255,255,255,0.38)'/>
      <circle cx='600' cy='820' r='360' fill='rgba(255,255,255,0.18)'/>
      <ellipse cx='450' cy='820' rx='120' ry='155' fill='rgba(222,176,142,0.9)'/>
      <ellipse cx='750' cy='820' rx='120' ry='155' fill='rgba(196,145,123,0.9)'/>
      <rect x='290' y='980' width='210' height='300' rx='90' fill='rgba(235,192,167,0.95)'/>
      <rect x='700' y='980' width='210' height='300' rx='90' fill='rgba(232,186,166,0.95)'/>
      <rect x='510' y='860' width='180' height='180' rx='70' fill='rgba(245,220,220,0.95)'/>
      <path d='M 500 1040 Q 600 900 700 1040 L 700 1200 Q 600 1290 500 1200 Z' fill='${accent}' opacity='0.45'/>
      <g fill='${accent}' opacity='0.82'>
        <circle cx='245' cy='260' r='18'/>
        <circle cx='990' cy='260' r='18'/>
        <circle cx='170' cy='430' r='12'/>
        <circle cx='1030' cy='430' r='12'/>
      </g>
      <g fill='rgba(123,50,73,0.9)'>
        <path d='M130 1190 C 210 1090, 230 1050, 300 1040 C 390 1028, 420 1100, 410 1185 C 398 1290, 300 1355, 240 1415 C 190 1360, 120 1280, 130 1190 Z'/>
        <path d='M1070 1190 C 990 1090, 970 1050, 900 1040 C 810 1028, 780 1100, 790 1185 C 802 1290, 900 1355, 960 1415 C 1010 1360, 1080 1280, 1070 1190 Z'/>
      </g>
      <rect x='110' y='1240' width='980' height='220' rx='36' fill='rgba(255,255,255,0.45)'/>
      <text x='600' y='1305' text-anchor='middle' font-family='Georgia, serif' font-weight='700' font-size='80' fill='#6A233A'>Memory ${label}</text>
      <text x='600' y='1378' text-anchor='middle' font-family='Arial, sans-serif' font-size='36' fill='#6A233A' opacity='0.8'>Forever in our hearts</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const CONFIG = {
  her: 'Momo',                 // her name
  me: 'Maazi',                 // your name
  pin: '1010',                 // 4-digit password
  music: 'Had Se Ziada Azaan Sami Khan 128 Kbps.mp3',
  photos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'],
  colors: { wine: '#701C35', rose: '#D98C9B', blush: '#F7DCE2', ivory: '#FFF8F2', gold: '#D8B477', brown: '#49343A' }
};

/* ============================ CONTENT ============================ */
const MEM = [
  ['Dear Momo ❤️', 'I still remember this beautiful moment. There was something so special about being together that day.', 'Every time I look at this picture, it brings back the same smile.'],
  ['A Little Memory 🌷', 'Some photographs capture a place, but this one captures a feeling.', 'I hope whenever you see this, you remember how beautiful that moment was.'],
  ['Remember This? 💗', 'Looking back, I realize how many little moments became beautiful memories.', 'Maybe one day we will look at this picture again and smile.'],
  ['One More Memory 🌸', 'Memories like these remain close to the heart.', 'Thank you for being a beautiful part of my memories.']
];
const BAL = [
  ['My First Note ❤️', 'You make ordinary moments feel special. I am so lucky to have beautiful memories with you.'],
  ['For Your Smile 🌷', 'Your smile has a way of making everything around you feel a little brighter.'],
  ['A Little Reminder 💗', 'Never forget how precious and special you are. You deserve all the happiness in the world.'],
  ['Always Remember 🌸', 'Some people become beautiful chapters in our lives. You are one of those chapters for me.'],
  ['From My Heart 💌', 'Thank you for every laugh, every conversation and every little memory.'],
  ['A Secret Note 🎁', 'If memories could be wrapped as gifts, I would give you every beautiful moment again.'],
  ['For Momo 🌷', 'I hope life gives you countless reasons to smile and very few reasons to cry.'],
  ['One More ❤️', 'Wherever life takes us, I will always be grateful for the moments that made me smile.'],
  ['A Tiny Wish ✨', 'May every dream you have find its way to you.'],
  ['The Last Balloon 🎈', 'Happy Birthday, Momo. You deserve love, peace, happiness and all the beautiful things life can give.']
];
const BCOL = ['#D98C9B', '#8a2a47', '#D8B477', '#F7DCE2', '#b84a62', '#e6a8b3', '#c9a063', '#a8586b', '#f0b8c4', '#701C35'];
const GIFTS = [
  ['💐', 'Tulips Bouquet', 'A beautiful bouquet of tulips for the person who makes everything around me more beautiful.'],
  ['🥟', 'Momos', 'A plate of delicious momos for my Momo — because a Momo deserves momos!'],
  ['🍫', 'Chocolate', 'Something sweet for someone who deserves all the sweetness in the world.'],
  ['🎂', 'Birthday Cake', 'A little extra cake because one celebration is never enough for you.'],
  ['🍛', 'Paneer Butter Masala', 'Your creamy comfort food — Paneer Butter Masala, made with lots of love.'],
  ['🫓', 'Butter Naan', 'Soft, buttery and warm — just like a perfect comfort meal.'],
  ['🍟', 'French Fries', 'Because every beautiful memory deserves a little snack break.'],
  ['🍲', 'Biryani', 'A special biryani just for Momo.'],
  ['🧸', 'Teddy Bear', 'A little teddy to keep you company whenever you need a warm hug.'],
  ['🌺', 'Flower Basket', 'A basket full of flowers to remind you that beautiful things should always surround you.'],
  ['💍', 'Little Ring', 'A tiny symbolic gift representing a beautiful bond and beautiful memories.'],
  ['📿', 'Bracelet', 'Something small to remind you that someone cares about you.'],
  ['👑', 'Princess Crown', 'Because today you are officially the birthday queen.'],
  ['🧸', 'Cute Plushie', 'A soft little friend for all those moments when you need something cute to smile at.'],
  ['🎀', 'Pretty Ribbon', 'A little ribbon to wrap up another beautiful memory.'],
  ['📔', 'Memory Book', 'A book for all the memories we have made and all the beautiful ones still waiting for us.'],
  ['💌', 'Love Letter', 'You are deeply appreciated, deeply cared for and incredibly special.'],
  ['❤️', 'The Biggest Gift', 'My love, my gratitude and every beautiful memory I will always treasure.']
];

/* ============================ HELPERS ============================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const D = x => (rm ? 0.01 : x);          // shortens durations for reduced motion
const R = gsap.utils.random;
const topL = $('#top'), fx = $('#fx');
let cur = null, cleanups = [];
const enter = {};

// Registers a tween/timeline so it is killed automatically when the scene changes.
const own = t => (cleanups.push(() => t.kill()), t);

// Apply colours and names from CONFIG.
Object.entries(CONFIG.colors).forEach(([k, v]) => document.documentElement.style.setProperty('--' + k, v));
$$('.her').forEach(e => (e.textContent = e.hasAttribute('data-up') ? CONFIG.her.toUpperCase() : CONFIG.her));
$$('.me').forEach(e => (e.textContent = CONFIG.me));
gsap.set('#light,#bigHeart', { xPercent: -50, yPercent: -50 });

// Splits text into words ('w') or letters ('c') wrapped in spans; keeps an aria-label.
function split(el, by) {
  const t = el.textContent.trim();
  el.setAttribute('aria-label', t);
  el.innerHTML = t.split(' ').map(w => `<span class="wd" aria-hidden="true">${by === 'c' ? [...w].map(c => `<span class="ch">${c}</span>`).join('') : `<span class="ch">${w}</span>`}</span>`).join(' ');
  return $$('.ch', el);
}
// Fade-and-rise reveal with blur.
function rise(t, delay = 0, stagger = 0.15) {
  return gsap.from(t, { y: 26, opacity: 0, filter: 'blur(8px)', duration: D(0.9), stagger, delay, ease: 'power3.out', clearProps: 'filter' });
}
// Lub-dub heartbeat loop.
function heartbeat(t, a = 1.14) {
  if (rm) return gsap.timeline();
  return own(gsap.timeline({ repeat: -1, repeatDelay: 0.45 })
    .to(t, { scale: a, duration: 0.16, ease: 'power2.out' }).to(t, { scale: 1, duration: 0.16 })
    .to(t, { scale: a * 0.95, duration: 0.16 }).to(t, { scale: 1, duration: 0.35 }));
}
// Heart / confetti burst from a screen point.
function burst(x, y, n = 16) {
  if (rm || topL.children.length > 160) return;
  const set = ['❤️', '💗', '💖', '🌸', '✨'];
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.className = 'cf'; s.textContent = set[i % set.length]; topL.appendChild(s);
    const a = R(0, Math.PI * 2), d = R(60, 190);
    gsap.timeline({ onComplete: () => s.remove() })
      .fromTo(s, { x, y, scale: 0, opacity: 1 }, { x: x + Math.cos(a) * d, y: y + Math.sin(a) * d - 60, scale: R(0.6, 1.4), duration: 0.8, ease: 'power2.out' })
      .to(s, { y: '+=' + R(160, 320), opacity: 0, rotation: R(-200, 200), duration: R(1.2, 2), ease: 'power1.in' });
  }
}
// Rose petals drifting down the screen.
function petals(n = 3) {
  if (rm || topL.children.length > 160) return;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.className = 'cf'; s.textContent = ['🌸', '🌺', '🌷'][i % 3]; s.style.fontSize = R(14, 26) + 'px'; topL.appendChild(s);
    const x = R(0, innerWidth);
    gsap.fromTo(s, { x, y: -30, rotation: 0, opacity: 0.9 }, { x: x + R(-120, 120), y: innerHeight + 40, rotation: R(-360, 360), duration: R(6, 10), ease: 'none', onComplete: () => s.remove() });
  }
}
// Ambient floating hearts and petals behind everything (created once).
function ambient() {
  if (rm) return;
  const e = ['❤️', '💗', '🌸', '💖', '🌷'];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement('span');
    s.className = 'fh'; s.textContent = e[i % 5]; s.style.fontSize = R(12, 30) + 'px'; fx.appendChild(s);
    gsap.set(s, { x: R(0, innerWidth), opacity: R(0.15, 0.4) });
    gsap.fromTo(s, { y: innerHeight + 40 }, { y: -60, duration: R(12, 24), repeat: -1, delay: -R(0, 20), ease: 'none' });
    gsap.to(s, { x: '+=' + R(-60, 60), duration: R(3, 6), yoyo: true, repeat: -1, ease: 'sine.inOut' });
  }
}

/* Scene transition: blur/scale the old screen out, the new one in, then run its enter function. */
function go(id) {
  const next = $('#' + id);
  if (cur === next) return;
  const prev = cur; cur = next;
  cleanups.splice(0).forEach(f => f());
  const tl = gsap.timeline();
  if (prev) tl.to(prev, { opacity: 0, scale: 1.05, filter: 'blur(10px)', duration: D(0.6), ease: 'power2.in' }).set(prev, { display: 'none' });
  tl.set(next, { display: 'flex', opacity: 0, scale: 0.96, filter: 'blur(10px)' })
    .call(() => { next.scrollTop = 0; enter[id] && enter[id](); })
    .to(next, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: D(1), ease: 'power3.out', clearProps: 'filter,transform' });
}

/* =============================== MODAL =============================== */
const modal = $('#modal'), mbox = $('.mbox');
let mopen = false, mcb = null, lastFocus = null; const mq = [];
// Opens the accessible modal; queues if one is already open.
function openModal(em, title, text, cb) {
  if (mopen) { mq.push([em, title, text, cb]); return; }
  mopen = true; mcb = cb; lastFocus = document.activeElement;
  $('#mEmoji').textContent = em; $('#mTitle').textContent = title; $('#mText').textContent = text;
  modal.hidden = false;
  gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: D(0.3) });
  gsap.fromTo(mbox, { scale: 0.7, y: 30, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: D(0.55), ease: 'back.out(1.6)' });
  $('#mClose').focus();
}
// Closes the modal once, restores focus, then runs the callback.
function closeModal() {
  if (!mopen) return;
  mopen = false;
  const cb = mcb; mcb = null;
  gsap.to(modal, { opacity: 0, duration: D(0.25), onComplete: () => {
    modal.hidden = true;
    if (lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true });
    cb && cb();
    if (mq.length && !mopen) openModal(...mq.shift());
  } });
}
$('#mClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
addEventListener('keydown', e => {
  if (!mopen) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Tab') { e.preventDefault(); $('#mClose').focus(); }   // single focusable control: trap focus
});

/* =========================== SCREEN 1: LOCK =========================== */
let pin = '', locked = false;
const dots = $$('#dots i');
['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].forEach(k => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'key'; b.textContent = k;
  b.setAttribute('aria-label', k === 'C' ? 'Clear' : k === '⌫' ? 'Backspace' : 'Digit ' + k);
  b.addEventListener('click', () => key(k));
  $('#pad').appendChild(b);
});
function paintDots() {
  dots.forEach((d, i) => d.classList.toggle('f', i < pin.length));
  $('#dots').setAttribute('aria-label', `PIN entry, ${pin.length} of 4 digits`);
}
// Handles a digit, backspace ('⌫') or clear ('C'); checks the PIN at 4 digits.
function key(k) {
  if (locked || !cur || cur.id !== 's1') return;
  if (k === 'C') pin = ''; else if (k === '⌫') pin = pin.slice(0, -1); else if (pin.length < 4) pin += k;
  paintDots();
  if (pin.length === 4) {
    locked = true;
    if (pin === CONFIG.pin) {
      gsap.to(dots, { scale: 1.5, duration: 0.25, yoyo: true, repeat: 1, stagger: 0.06 });
      gsap.delayedCall(0.9, () => go('s3'));
    } else {
      gsap.fromTo('#dots', { x: -10 }, { x: 0, duration: 0.5, ease: 'elastic.out(1.5,.3)' });
      gsap.delayedCall(0.6, () => go('s2'));
    }
  }
}
addEventListener('keydown', e => {            // physical keyboard
  if (!cur || cur.id !== 's1' || mopen) return;
  if (/^\d$/.test(e.key)) key(e.key);
  else if (e.key === 'Backspace') key('⌫');
  else if (e.key === 'Delete' || e.key === 'Escape') key('C');
});
enter.s1 = () => {
  pin = ''; locked = false; paintDots();
  const w = split($('#s1 h1'), 'w');
  gsap.from(w, { y: 40, opacity: 0, filter: 'blur(10px)', stagger: 0.18, duration: D(1), ease: 'power3.out' });
  rise('#s1 .hand,#s1 .hint,.lockheart', 0.5, 0.15);
  gsap.from('.key', { y: 30, opacity: 0, scale: 0.8, stagger: 0.04, delay: D(1), duration: D(0.6), ease: 'back.out(1.8)' });
  heartbeat('.lockheart');
};

/* ======================== SCREEN 2: WRONG PASSWORD ======================== */
enter.s2 = () => {
  gsap.from('#sad', { scale: 0, rotation: -25, duration: D(0.9), ease: 'elastic.out(1,.5)' });
  if (!rm) own(gsap.to('#sad', { rotation: 8, duration: 0.5, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1 }));
  rise('#s2 h2,#s2 .lead,#again', 0.3, 0.25);
};
$('#again').addEventListener('click', () => go('s1'));

/* ========================= SCREEN 3: ENVELOPE ========================= */
let opened = false;
enter.s3 = () => {
  rise('#s3 h2', 0, 0);
  gsap.from('#envwrap', { y: 60, opacity: 0, scale: 0.85, duration: D(1.1), delay: 0.3, ease: 'back.out(1.4)' });
  gsap.from('#envhint', { opacity: 0, delay: D(1.2), duration: D(0.8) });
  if (!rm) own(gsap.to('#env', { y: -7, duration: 2, yoyo: true, repeat: -1, ease: 'sine.inOut' }));
};
$('#env').addEventListener('click', () => {
  if (opened) return; opened = true;
  gsap.killTweensOf('#env'); gsap.to('#env', { y: 0, duration: 0.2 });
  gsap.timeline()
    .to('.flap', { rotationX: 180, transformPerspective: 700, duration: D(0.9), ease: 'power2.inOut' })
    .to('.seal', { opacity: 0, scale: 2, duration: D(0.4) }, '<')
    .to('#envwrap,#envhint', { y: 50, opacity: 0, duration: D(0.7), ease: 'power2.in' })
    .add(() => {
      $('#envwrap').hidden = true; $('#envhint').hidden = true;
      const p = $('#paper'); p.hidden = false;
      gsap.from(p, { y: 50, opacity: 0, scale: 0.92, duration: D(1.1), ease: 'power3.out' });
      gsap.from('#paper p', { opacity: 0, y: 12, stagger: D(0.35), delay: 0.4, duration: D(0.8) });
      const b = $('#toMem'); b.hidden = false;
      gsap.from(b, { opacity: 0, y: 20, delay: D(0.4 + 7 * 0.35), duration: D(0.8) });
      petals(5);
    });
});
$('#toMem').addEventListener('click', () => go('s4'));

/* ======================= SCREEN 4: SCRATCH MEMORIES ======================= */
const frame = $('#mframe'), img = $('#mimg'), cv = $('#cv'), ctx = cv.getContext('2d', { willReadFrequently: true });
let mi = 0, revealed = false, drawing = false, last = [0, 0], moves = 0, mbusy = false;
// Loads memory i: text, photo (with graceful fallback) and a fresh scratch overlay.
function loadMem(i) {
  revealed = false; drawing = false; moves = 0;
  $('#mnum').textContent = `Memory ${i + 1} of ${MEM.length}`;
  $('#mt').textContent = MEM[i][0]; $('#mx').textContent = MEM[i][1]; $('#mex').textContent = MEM[i][2];
  gsap.set('#mcap,#mnext', { opacity: 0, y: 10 });
  $('#mnext').disabled = true; $('#skip').hidden = false;
  frame.classList.remove('noimg'); frame.dataset.label = `Add ${CONFIG.photos[i]} to the folder to see this memory`;
  img.onerror = () => frame.classList.add('noimg');
  img.src = CONFIG.photos[i];
  cv.width = frame.clientWidth; cv.height = frame.clientHeight;
  ctx.globalCompositeOperation = 'source-over';
  const g = ctx.createLinearGradient(0, 0, cv.width, cv.height);
  g.addColorStop(0, '#D98C9B'); g.addColorStop(0.5, '#D8B477'); g.addColorStop(1, '#a8586b');
  ctx.fillStyle = g; ctx.fillRect(0, 0, cv.width, cv.height);
  ctx.font = '28px serif'; ctx.textAlign = 'center'; ctx.fillStyle = 'rgba(255,248,242,.55)';
  for (let k = 0; k < 14; k++) ctx.fillText('♥', R(10, cv.width - 10), R(30, cv.height - 10));
  ctx.font = '500 15px Poppins,sans-serif'; ctx.fillStyle = '#49343A';
  ctx.fillText('✨ scratch here ✨', cv.width / 2, cv.height / 2);
  gsap.set(cv, { opacity: 1, pointerEvents: 'auto' });
  gsap.set(img, { scale: 1.2, filter: 'blur(6px)' });
}
const cpos = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * cv.width / r.width, (e.clientY - r.top) * cv.height / r.height]; };
function scratch(a, b) {
  ctx.globalCompositeOperation = 'destination-out'; ctx.lineWidth = 46; ctx.lineCap = ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
}
// Samples the canvas alpha; reveals when over half has been scratched away.
function checkScratch() {
  if (revealed) return;
  const d = ctx.getImageData(0, 0, cv.width, cv.height).data; let clear = 0, total = 0;
  for (let i = 3; i < d.length; i += 64) { total++; if (d[i] < 10) clear++; }
  if (clear / total > 0.5) reveal();
}
// Cinematic reveal: overlay dissolves, photo de-blurs, caption and NEXT appear.
function reveal() {
  if (revealed) return; revealed = true; drawing = false;
  $('#skip').hidden = true;
  const r = frame.getBoundingClientRect();
  gsap.timeline()
    .set(cv, { pointerEvents: 'none' })
    .to(cv, { opacity: 0, duration: D(0.8) })
    .to(img, { scale: 1, filter: 'blur(0px)', duration: D(1.6), ease: 'power2.out' }, 0)
    .add(() => burst(r.left + r.width / 2, r.top + r.height / 2, 14), 0.3)
    .to('#mcap,#mnext', { opacity: 1, y: 0, stagger: 0.2, duration: D(0.8) }, 0.8)
    .add(() => { $('#mnext').disabled = false; });
}
cv.addEventListener('pointerdown', e => { if (revealed) return; drawing = true; cv.setPointerCapture(e.pointerId); last = cpos(e); scratch(last, last); });
cv.addEventListener('pointermove', e => { if (!drawing) return; const p = cpos(e); scratch(last, p); last = p; if (++moves % 8 === 0) checkScratch(); });
['pointerup', 'pointercancel'].forEach(ev => cv.addEventListener(ev, () => { if (drawing) { drawing = false; checkScratch(); } }));
$('#skip').addEventListener('click', reveal);
$('#mnext').addEventListener('click', () => {
  if (!revealed || mbusy) return; mbusy = true;
  if (mi < MEM.length - 1) {
    gsap.timeline({ onComplete: () => { mbusy = false; } })
      .to('#s4 .wrap > *:not(h2):not(.lead)', { opacity: 0, y: -15, duration: D(0.4) })
      .add(() => { mi++; loadMem(mi); })
      .fromTo('#mwrap,#skip,#mnum', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: D(0.7) });
  } else { mbusy = false; go('s5'); }
});
enter.s4 = () => {
  mi = 0; mbusy = false; loadMem(0);
  rise('#s4 h2,#s4 .lead,#mnum', 0, 0.15);
  gsap.from('#mwrap', { scale: 0.85, opacity: 0, duration: D(1), delay: 0.4, ease: 'back.out(1.5)' });
  if (!rm) own(gsap.to('#mframe', { y: -8, rotation: 0.8, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.4 }));
};

/* ===================== SCREEN 5: ONE LAST SURPRISE ===================== */
enter.s5 = () => {
  gsap.set(['#s5 h2', '#s5 .lead', '#go5'], { opacity: 0 });
  const tl = own(gsap.timeline());
  tl.fromTo('#h5', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: D(1.6), ease: 'power2.out' })
    .fromTo('#s5 h2', { opacity: 0, y: 24, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: D(1.4) }, '+=0.3')
    .fromTo('#s5 .lead', { opacity: 0, y: 18 }, { opacity: 1, y: 0, stagger: D(1.4), duration: D(1.2) }, '+=0.2')
    .fromTo('#go5', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: D(1), ease: 'back.out(2)' }, '+=0.4')
    .add(() => heartbeat('#h5', 1.2), 0.5);
};
$('#go5').addEventListener('click', () => go('s6'));

/* ========================= SCREEN 6: COUNTDOWN ========================= */
// One single timeline drives all numbers, so no intervals can ever stack up.
enter.s6 = () => {
  const num = $('#num');
  const tl = own(gsap.timeline({ onComplete: () => go('s7') }));
  heartbeat('#pulse', 1.08);
  gsap.set(num, { opacity: 0 });
  for (let i = 10; i >= 0; i--) {
    tl.call(() => { num.textContent = i; })
      .fromTo(num, { scale: 0.4, opacity: 0, filter: 'blur(16px)' }, { scale: 1 + (10 - i) * 0.04, opacity: 1, filter: 'blur(0px)', duration: D(0.4), ease: 'back.out(2)' })
      .to(num, { opacity: 0, scale: '+=0.4', filter: 'blur(12px)', duration: D(0.4), ease: 'power2.in' }, '+=0.2');
  }
};

/* ======================= SCREEN 7: BIRTHDAY ======================= */
enter.s7 = () => {
  const a = split($('#hb1'), 'c'), b = split($('#hb2'), 'c');
  const tl = own(gsap.timeline());
  tl.fromTo('#light', { scale: 0, opacity: 0.9 }, { scale: 1.6, opacity: 0, duration: D(2.4), ease: 'power2.out' })
    .from(a, { y: 60, opacity: 0, scale: 0.6, stagger: 0.05, duration: D(0.9), ease: 'back.out(1.7)' }, 0.2)
    .from(b, { y: 60, opacity: 0, scale: 0.6, stagger: 0.07, duration: D(0.9), ease: 'back.out(1.7)' }, '>-0.4')
    .from('#hbs', { opacity: 0, y: 20, duration: D(1) }, '-=0.2');
  for (let k = 0; k < 5; k++) tl.call(() => { burst(innerWidth / 2, innerHeight / 2.4, 18); petals(4); }, null, 0.8 + k * 1.2);
  tl.call(() => go('s8'), null, 8.5);
};

/* ========================= SCREEN 8: CUPCAKE ========================= */
let cut = false;
enter.s8 = () => {
  cut = false; $('#cut').disabled = false; $('#wish').textContent = '';
  rise('#s8 h2,#s8 .lead', 0, 0.2);
  gsap.from('#cup', { scale: 0, rotation: -20, duration: D(1), delay: 0.4, ease: 'back.out(2)' });
  rise('#cut', 1, 0);
  if (!rm) own(gsap.to('#cup', { y: -10, duration: 1.6, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.5 }));
};
$('#cut').addEventListener('click', () => {
  if (cut) return; cut = true; $('#cut').disabled = true;
  const r = $('#cup').getBoundingClientRect();
  own(gsap.timeline())
    .to('#cup', { rotation: -12, duration: 0.1, yoyo: true, repeat: 5 })
    .to('#cup', { scale: 1.35, duration: D(0.3), ease: 'back.out(3)' })
    .add(() => burst(r.left + r.width / 2, r.top + r.height / 2, 28))
    .to('#cut', { opacity: 0, duration: D(0.3) }, '<')
    .add(() => {
      $('#wish').textContent = 'Close your eyes... and make a wish ✨';
      gsap.fromTo('#wish', { opacity: 0, y: 14, filter: 'blur(8px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: D(1.2) });
    })
    .to({}, { duration: D(2.8) })
    .add(() => go('s9'));
});

/* ========================== SCREEN 9: BALLOONS ========================== */
let popped = 0;
BAL.forEach((m, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'balloon'; b.textContent = i + 1;
  b.setAttribute('aria-label', `Balloon ${i + 1}`);
  b.style.background = `radial-gradient(circle at 30% 28%, rgba(255,255,255,.55), ${BCOL[i]} 60%)`;
  b.style.left = ((i % 5) * 19 + 4 + R(-1, 1)) + '%'; b.style.top = (Math.floor(i / 5) * 48 + 3) + '%';
  b.addEventListener('click', () => popBalloon(i, b));
  $('#sky').appendChild(b);
});
// Pops a balloon exactly once, shows its note, and moves on after the last one.
function popBalloon(i, b) {
  if (b.dataset.done) return; b.dataset.done = '1'; b.setAttribute('aria-disabled', 'true');
  gsap.killTweensOf(b);
  const r = b.getBoundingClientRect();
  popped++; $('#bcount').textContent = `${popped} / ${BAL.length} balloons popped`;
  gsap.timeline().to(b, { scale: 1.35, duration: 0.12 }).to(b, { scale: 0, opacity: 0, duration: 0.18 })
    .add(() => { b.style.visibility = 'hidden'; burst(r.left + r.width / 2, r.top + r.height / 2, 12); openModal('', BAL[i][0], BAL[i][1], () => { if (popped === BAL.length) go('s10'); }); });
}
enter.s9 = () => {
  rise('#s9 h2,#s9 .lead,#bcount', 0, 0.15);
  $$('.balloon:not([data-done])').forEach((b, i) => {
    gsap.from(b, { y: 220, opacity: 0, duration: D(1.1), delay: 0.4 + i * 0.08, ease: 'power2.out', onComplete: () => {
      if (rm || b.dataset.done) return;
      own(gsap.to(b, { y: R(-22, -10), x: R(-10, 10), rotation: R(-5, 5), duration: R(2.2, 3.8), yoyo: true, repeat: -1, ease: 'sine.inOut' }));
    } });
  });
};

/* =========================== SCREEN 10: GIFTS =========================== */
let giftN = 0;
GIFTS.forEach((g, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'gift'; b.textContent = '🎁'; b.setAttribute('aria-label', `Gift ${i + 1}`);
  b.addEventListener('click', () => openGift(i, b));
  $('#grid').appendChild(b);
});
// Opens a gift exactly once with a shake/burst, then shows its message.
function openGift(i, b) {
  if (b.dataset.done) return; b.dataset.done = '1'; b.setAttribute('aria-disabled', 'true');
  const [em, t, m] = GIFTS[i], r = b.getBoundingClientRect();
  giftN++; $('#gcount').textContent = `${giftN} / ${GIFTS.length} gifts opened`;
  gsap.timeline()
    .to(b, { rotation: -10, duration: 0.07, yoyo: true, repeat: 5 })
    .to(b, { scale: 1.3, duration: 0.18 })
    .add(() => { b.textContent = em; b.classList.add('open'); burst(r.left + r.width / 2, r.top + r.height / 2, 10); })
    .to(b, { scale: 1, rotation: 0, duration: D(0.35), ease: 'back.out(2)' })
    .add(() => openModal(em, t, m, () => { if (giftN === GIFTS.length) go('s11'); }));
}
enter.s10 = () => {
  rise('#s10 h2,#s10 .lead,#gcount', 0, 0.15);
  gsap.from('.gift', { scale: 0, opacity: 0, rotation: -15, stagger: 0.05, delay: 0.5, duration: D(0.6), ease: 'back.out(1.8)' });
};

/* ======================= SCREEN 11: FINAL LOVE MESSAGE ======================= */
enter.s11 = () => {
  const il = split($('#ily'), 'c'), mo = split($('#momo'), 'c');
  const tl = own(gsap.timeline());
  tl.fromTo('#bigHeart', { scale: 0.05, opacity: 0 }, { scale: 0.3, opacity: 1, duration: D(1.4), ease: 'power2.out' })
    .to('#bigHeart', { scale: 3, opacity: 0.17, duration: D(2.6), ease: 'power3.inOut' })
    .from(il, { opacity: 0, y: 20, filter: 'blur(10px)', stagger: 0.12, duration: D(0.8) }, '-=1.4')
    .from(mo, { opacity: 0, y: 40, scale: 0.6, stagger: 0.18, duration: D(1), ease: 'back.out(1.7)' }, '-=0.2')
    .from('.fl p', { opacity: 0, y: 18, filter: 'blur(6px)', stagger: D(1.6), duration: D(1.4) }, '+=0.3')
    .fromTo('#sig', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: D(2.2), ease: 'power1.inOut' }, '+=0.2')
    .from('#endHeart', { scale: 0, opacity: 0, duration: D(1), ease: 'back.out(2)' })
    .add(() => heartbeat('#endHeart', 1.2));
  if (!rm) own(gsap.to({}, { duration: 2.2, repeat: -1, onRepeat: () => petals(2) }));
};

/* ============================== MUSIC ============================== */
const mbtn = $('#music'), audio = new Audio();
let musicOK = true, playing = false, userPaused = false;
audio.loop = true; audio.preload = 'auto';
audio.addEventListener('error', () => { musicOK = false; playing = false; mbtn.classList.add('off'); mbtn.title = `Add ${CONFIG.music} to enable music`; });
audio.src = CONFIG.music;
function musicUI() { mbtn.classList.toggle('on', playing); mbtn.setAttribute('aria-pressed', String(playing)); }
// Starts playback (only ever called from a user gesture); one audio element is reused everywhere.
function playMusic() { if (!musicOK) return; audio.play().then(() => { playing = true; musicUI(); }).catch(() => { playing = false; musicUI(); }); }
mbtn.addEventListener('click', () => {
  if (!musicOK) { gsap.fromTo(mbtn, { x: -4 }, { x: 0, duration: 0.4, ease: 'elastic.out(1.5,.3)' }); return; }
  if (playing) { audio.pause(); playing = false; userPaused = true; musicUI(); } else { userPaused = false; playMusic(); }
});
const firstTouch = e => {          // first interaction anywhere starts the music
  if (e.target.closest && e.target.closest('#music')) return;
  removeEventListener('pointerdown', firstTouch); removeEventListener('keydown', firstTouch);
  if (!userPaused) playMusic();
};
addEventListener('pointerdown', firstTouch); addEventListener('keydown', firstTouch);

/* ===================== CURSOR TRAIL + PARALLAX (desktop) ===================== */
if (matchMedia('(pointer:fine)').matches && !rm) {
  let t = 0;
  const qx = gsap.quickTo('.g1', 'x', { duration: 1.4 }), qy = gsap.quickTo('.g1', 'y', { duration: 1.4 });
  const rx = gsap.quickTo('.g2', 'x', { duration: 1.8 }), ry = gsap.quickTo('.g2', 'y', { duration: 1.8 });
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const px = e.clientX / innerWidth - 0.5, py = e.clientY / innerHeight - 0.5;
    qx(px * 40); qy(py * 40); rx(-px * 60); ry(-py * 60);
    const n = performance.now(); if (n - t < 70) return; t = n;
    const s = document.createElement('span'); s.className = 'trail'; s.textContent = '♥'; topL.appendChild(s);
    gsap.fromTo(s, { x: e.clientX, y: e.clientY, opacity: 0.8, scale: 1 }, { y: e.clientY + 26, opacity: 0, scale: 0.3, duration: 1, onComplete: () => s.remove() });
  });
}

/* ======================= GLOBAL BUTTON PRESS FEEDBACK ======================= */
document.addEventListener('click', e => {
  const b = e.target.closest('.btn,.key');
  if (b && !b.disabled) gsap.fromTo(b, { scale: 0.92 }, { scale: 1, duration: 0.45, ease: 'back.out(3)' });
});

/* ================================ START ================================ */
ambient();
go('s1');
