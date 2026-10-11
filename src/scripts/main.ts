/**
 * JavaScript de la web (mínimo):
 * 1. Menú a pantalla completa (abrir/cerrar, Esc, foco accesible).
 * 2. Animaciones al hacer scroll con IntersectionObserver.
 * La web funciona y se lee entera aunque este script no cargue.
 */

/* ---------- 1. Menú ---------- */
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

if (toggle && menu) {
  const label = toggle.querySelector<HTMLElement>('[data-menu-label]');
  const openText = toggle.dataset.openText ?? 'Menu';
  const closeText = toggle.dataset.closeText ?? 'Close';

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.toggleAttribute('data-open', open);
    menu.inert = !open;
    document.body.classList.toggle('menu-open', open);
    if (label) label.textContent = open ? closeText : openText;
    if (open) {
      menu.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
    }
  };

  menu.inert = true;

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Cerrar al pulsar un enlace del menú
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

  // Cerrar con Esc y devolver el foco al botón
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
}

/* ---------- 2. Animaciones al hacer scroll ---------- */
const animated = document.querySelectorAll<HTMLElement>('.reveal, .lines');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );
  animated.forEach((el) => observer.observe(el));
} else {
  animated.forEach((el) => el.classList.add('is-in'));
}

/* ---------- 3. Informe de seguridad "de tu visita" ---------- */
const report = document.querySelector<HTMLElement>('[data-report]');

if (report) {
  const rows = [...report.querySelectorAll<HTMLElement>('[data-check]')];
  const contactRow = report.querySelector<HTMLElement>('[data-contact-check]');
  const summary = report.querySelector<HTMLElement>('[data-report-summary]');
  const total = Number(summary?.dataset.total ?? rows.length);
  const STORAGE_KEY = 'lvl-contacted';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // localStorage puede fallar (modo privado, cookies bloqueadas…): nunca debe romper la web
  const wasContacted = () => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  };

  const updateSummary = (resolved: boolean) => {
    if (!summary) return;
    const pass = resolved ? total : total - 1;
    const fail = total - pass;
    summary.innerHTML = `<b class="pass">${pass} PASS</b> · <b class="fail">${fail} FAIL</b>`;
  };

  const resolve = () => {
    if (contactRow) contactRow.dataset.state = 'resolved';
    updateSummary(true);
  };

  // Al pulsar "Escríbeme" el hallazgo queda resuelto
  report.querySelector('[data-contact-fix]')?.addEventListener('click', () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* sin almacenamiento: se resuelve solo en esta visita */
    }
    // pequeño retardo para que se vea el cambio al volver del correo
    setTimeout(resolve, 600);
  });

  if (wasContacted()) {
    resolve();
  } else if (!reduceMotion && 'IntersectionObserver' in window) {
    // Animación: cada comprobación pasa por "Comprobando…" antes de mostrar su resultado
    rows.forEach((row) => (row.dataset.state = 'pending'));
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      for (const row of rows) {
        if (row.dataset.state === 'resolved') continue;
        row.dataset.state = 'running';
        await wait(row === contactRow ? 900 : 450);
        // si mientras tanto ya se resolvió (clic en "Escríbeme"), no lo pisamos
        if (row.dataset.state === 'running') row.dataset.state = 'done';
        await wait(120);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(report.querySelector('.report__table') ?? report);
  }
}
