const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Copy code ---------- */

const toast = document.querySelector<HTMLElement>('.toast');
let toastTimer: number | undefined;

function showToast(message: string) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-on');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-on'), 1800);
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers / insecure contexts
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  }
}

function burst(x: number, y: number) {
  if (reducedMotion) return;
  const count = 14;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.className = 'spark';
    s.style.left = `${x - 3}px`;
    s.style.top = `${y - 3}px`;
    document.body.appendChild(s);
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    const dist = 40 + Math.random() * 50;
    s.animate(
      [
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(0.2)`, opacity: 0 },
      ],
      { duration: 650 + Math.random() * 250, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' },
    ).onfinish = () => s.remove();
  }
}

document.addEventListener('click', async (e) => {
  const btn = (e.target as Element).closest<HTMLElement>('[data-copy]');
  if (!btn) return;
  const ok = await copyText(btn.dataset.copy ?? '');
  if (ok) {
    showToast(`Copied ${btn.dataset.copy} ✓`);
    const r = btn.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2);
  } else {
    showToast(`Code: ${btn.dataset.copy}`);
  }
});

/* ---------- Card tilt toward the cursor ---------- */

const MAX_TILT = 7; // degrees

// Decide per event rather than via (hover: hover) and (pointer: fine): that query only
// describes the *primary* pointer, so touchscreen laptops report "coarse" even when a
// mouse is in use, and the tilt never turned on.
const isMouse = (e: PointerEvent) => e.pointerType === 'mouse' || e.pointerType === 'pen';

if (!reducedMotion) {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    let frame = 0;

    card.addEventListener('pointerenter', (e) => {
      if (isMouse(e)) card.classList.add('is-tilting');
    });

    card.addEventListener('pointermove', (e) => {
      if (!isMouse(e)) return;
      card.classList.add('is-tilting');
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width; // 0..1
        const py = (e.clientY - r.top) / r.height; // 0..1
        // Tilt the side under the cursor toward the viewer.
        card.style.setProperty('--ry', `${(px - 0.5) * 2 * MAX_TILT}deg`);
        card.style.setProperty('--rx', `${(0.5 - py) * 2 * MAX_TILT}deg`);
        card.style.setProperty('--mx', `${px * 100}%`);
        card.style.setProperty('--my', `${py * 100}%`);
      });
    });

    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

/* ---------- Scroll reveal ---------- */

const revealEls = document.querySelectorAll<HTMLElement>('.reveal');

// Stagger siblings that reveal together (e.g. cards in a grid).
document.querySelectorAll<HTMLElement>('.grid, .steps, .hero__content').forEach((group) => {
  group.querySelectorAll<HTMLElement>(':scope > .reveal').forEach((el, i) => {
    el.style.setProperty('--delay', `${Math.min(i * 0.07, 0.5)}s`);
  });
});

if ('IntersectionObserver' in window && !reducedMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}
