/**
 * script.js - Portafolio Matias Alfaro Mendez
 * Vanilla JS: shared data rendering, typed text, scroll-spy, reveal, counters,
 * form, parallax, stagger, terminal animation y subrayado animado del nav.
 */

const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];

const NAV_ITEMS = [
  { href: '#sobre-mi', label: 'Sobre mi' },
  { href: '#skills', label: 'Capacidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Casos' },
  { href: '#certificaciones', label: 'Formacion' },
  { href: '#labs', label: 'Foco' },
  { href: '#contacto', label: 'Contacto' },
];

const FOOTER_ITEMS = [
  { href: '#sobre-mi', label: 'Sobre mi' },
  { href: '#proyectos', label: 'Casos' },
  { href: '#contacto', label: 'Contacto' },
];

const CONTACT_CHANNELS = [
  {
    href: 'mailto:matialfa2018@gmail.com',
    label: 'Email',
    value: 'matialfa2018@gmail.com',
    icon: 'mail',
  },
  {
    href: 'tel:+56951605449',
    label: 'Telefono',
    value: '+56 9 5160 5449',
    icon: 'phone',
  },
  {
    href: 'https://www.linkedin.com/in/matias-alfaro-mendez-82bb57222/',
    label: 'LinkedIn',
    value: 'linkedin.com/in/matias-alfaro-mendez-82bb57222',
    icon: 'linkedin',
    external: true,
  },
  {
    href: 'https://github.com/matialfa2018-hash',
    label: 'GitHub',
    value: 'github.com/matialfa2018-hash',
    icon: 'github',
    external: true,
  },
];

const PROJECTS = [
  {
    id: 'proj1',
    title: 'Modernizacion de plataforma critica - banca',
    featured: true,
    badge: 'caso confidencial',
    statuses: ['banca', 'end-to-end'],
    description:
      'Liderazgo integral de una iniciativa sobre plataforma critica, coordinando alcance, riesgos, dependencias y decisiones entre negocio, operaciones y equipos tecnicos.',
    impact:
      'Gobierno visible del proyecto con decisiones tecnicas mejor aterrizadas en un entorno regulado.',
    matrix: [
      { label: 'Rol', value: 'Jefe de Proyecto TI / Delivery' },
      { label: 'Foco', value: 'Planificacion, control y criterios tecnicos' },
      { label: 'Entorno', value: 'Servicios financieros' },
    ],
    tags: [
      { label: 'PMI', accent: true },
      { label: 'Agile' },
      { label: 'Riesgos' },
      { label: 'Jira' },
      { label: 'Azure' },
    ],
    ctaText: 'Solicitar enfoque PM',
  },
  {
    id: 'proj2',
    title: 'Automatizador de proyectos y generador documental',
    statuses: ['caso real', 'privado'],
    description:
      'Motor de automatizacion en Python que sincroniza proyectos con la web corporativa y extrae datos desde <strong>Salesforce Web</strong> para consolidar informacion operativa y generar documentos.',
    impact:
      'Menos trabajo manual, entregables estandarizados y mejor trazabilidad para equipos y stakeholders.',
    matrix: [
      { label: 'Rol', value: 'Automation / Backend' },
      { label: 'Stack', value: 'Python, parsing y documentos' },
      { label: 'Valor', value: 'Trazabilidad y estandarizacion' },
    ],
    tags: [
      { label: 'Python', accent: true },
      { label: 'Salesforce Web' },
      { label: 'JS parsing' },
      { label: 'Web Scraping' },
      { label: 'Backend' },
      { label: 'Automation' },
    ],
    ctaText: 'Solicitar detalle del automatizador',
  },
  {
    id: 'proj3',
    title: 'Plataforma web corporativa - blog y postulaciones',
    statuses: ['produccion', 'backend integrado'],
    description:
      'Plataforma web corporativa con blog, noticias y postulaciones. Frontend en JavaScript, backend en <strong>PHP y Java</strong> y persistencia en <strong>MySQL sobre DigitalOcean</strong>.',
    impact:
      'Centraliza contenido corporativo y flujo de postulaciones en una misma base operativa.',
    matrix: [
      { label: 'Rol', value: 'Backend / Infra' },
      { label: 'Modulos', value: 'Blog, noticias y postulaciones' },
      { label: 'Infra', value: 'MySQL + DigitalOcean' },
    ],
    tags: [
      { label: 'PHP', accent: true },
      { label: 'Java' },
      { label: 'JavaScript' },
      { label: 'MySQL' },
      { label: 'DigitalOcean' },
    ],
    ctaText: 'Solicitar detalle de la plataforma',
  },
  {
    id: 'proj4',
    title: 'Sistema restaurante demo - carrito, comandera y admin',
    statuses: ['demo funcional', 'apis rest'],
    description:
      'Demo full stack para restaurante con carrito digital, flujo de comandas y panel administrativo. Incluye APIs REST para productos, carrito, pedidos y administracion sobre MySQL.',
    impact:
      'Demuestra capacidad para modelar operacion, exponer servicios y ordenar el flujo entre cliente, cocina y administracion.',
    matrix: [
      { label: 'Rol', value: 'Full stack demo' },
      { label: 'APIs', value: 'Productos, carrito, pedidos y admin' },
      { label: 'Stack', value: 'PHP, JavaScript y MySQL' },
    ],
    tags: [
      { label: 'REST API', accent: true },
      { label: 'PHP' },
      { label: 'JavaScript' },
      { label: 'MySQL' },
      { label: 'Comandas' },
    ],
    ctaText: 'Solicitar detalle de las APIs',
  },
];

const CERTIFICATIONS = [
  {
    org: 'Marco',
    name: 'PMI - gestion de alcance, plazo, costo y calidad',
    highlight: true,
    icon: 'clock',
  },
  {
    org: 'Microsoft',
    name: 'Azure Administrator Associate',
    code: 'AZ-104',
    icon: 'azure',
  },
  {
    org: 'HashiCorp',
    name: 'Terraform - infraestructura como codigo',
    icon: 'terraform',
  },
  {
    org: 'Cisco NetAcad',
    name: 'Python Essentials',
    icon: 'python',
  },
  {
    org: 'Metodologia',
    name: 'Agile / Scrum para seguimiento iterativo y coordinacion cross-team',
    icon: 'clock',
  },
  {
    org: 'Servicio TI',
    name: 'ITIL y continuidad operacional en entornos criticos',
    icon: 'shield',
  },
  {
    org: 'Dominio',
    name: 'Ciberseguridad aplicada a proyectos de alto impacto',
    icon: 'shield',
  },
  {
    org: 'Herramienta',
    name: 'SQL Server y modelado de datos para entornos operativos',
    iconText: 'SQL',
  },
  {
    org: 'Herramienta',
    name: 'Power BI y reporting ejecutivo para stakeholders',
    iconText: 'BI',
    iconTextColor: '#f2c811',
  },
];

const LABS = [
  {
    status: 'core',
    statusClass: 'building',
    title: 'Gobierno de portafolio y reporting ejecutivo',
    description:
      'Seguimiento de avance, hitos, desviaciones y decisiones para stakeholders internos y clientes.',
    next: 'Siguiente paso: consolidar dashboards y rituales de seguimiento multi-proyecto.',
    icon: 'clock',
    tags: ['PMO', 'Reporting', 'Stakeholders'],
  },
  {
    status: 'core',
    statusClass: 'building',
    title: 'Terraform Azure VNet Lab',
    description:
      'Infraestructura como codigo para redes, seguridad y entornos mantenibles en Azure.',
    next: 'Siguiente paso: modularizar despliegues y documentar variables por ambiente.',
    icon: 'terraform',
    tags: ['Terraform', 'Azure', 'IaC'],
  },
  {
    status: 'diferencial',
    statusClass: 'planned',
    title: 'Automation engine con Python',
    description:
      'Flujos para trazabilidad, generacion documental e integracion de datos con foco operativo.',
    next: 'Siguiente paso: publicar una version anonimizada del flujo y su arquitectura.',
    icon: 'python',
    tags: ['Python', 'Automation', 'Backend'],
  },
  {
    status: 'diferencial',
    statusClass: 'planned',
    title: 'Infraestructura y servicios criticos',
    description:
      'Capacidad para gestionar proyectos sobre plataformas, redes, continuidad operativa y servicios TI.',
    next: 'Siguiente paso: publicar mas casos anonimizados orientados a banca y mineria.',
    icon: 'api',
    tags: ['Infraestructura', 'ITIL', 'Continuidad'],
  },
];

const TYPED_STRINGS = [
  'Cloud Developer',
  'Automation Engineer',
  'Backend Engineer',
  'Azure & Terraform',
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  renderSharedContent();
  initYear();
  initTyped();
  initNav();
  initScrollSpy();
  initReveal();
  initCounters();
  initForm();
  initBackToTop();
  initHeroMotion();
  initSectionMotion();
  initTerminalSequence();
  initNavIndicator();
});

function renderSharedContent() {
  renderNavLinks();
  renderFooterLinks();
  renderContactChannels();
  renderProjects();
  renderCertifications();
  renderLabs();
}

function renderNavLinks() {
  const navMenu = $('#nav-menu');
  if (!navMenu) return;

  navMenu.innerHTML = NAV_ITEMS.map(
    item => `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`
  ).join('');
}

function renderFooterLinks() {
  const footerNav = $('#footer-nav');
  if (!footerNav) return;

  footerNav.innerHTML = FOOTER_ITEMS.map(
    item => `<a href="${item.href}">${item.label}</a>`
  ).join('');
}

function renderContactChannels() {
  const container = $('#contact-channels');
  if (!container) return;

  container.innerHTML = CONTACT_CHANNELS.map(channel => `
    <a
      href="${channel.href}"
      class="channel-row reveal reveal-up"
      aria-label="${channel.label}"
      ${channel.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
    >
      <span class="channel-icon">${icon(channel.icon)}</span>
      <span class="channel-val">${channel.value}</span>
      <svg class="channel-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a>
  `).join('');
}

function renderProjects() {
  const container = $('#projects-grid');
  if (!container) return;

  container.innerHTML = PROJECTS.map((project, index) => `
    <article class="proj-card reveal reveal-up${project.featured ? ' proj-card--featured' : ''}" aria-labelledby="${project.id}-title" style="transition-delay:${Math.min(index * 90, 270)}ms">
      <div class="proj-top">
        ${project.badge ? `<span class="proj-badge">${project.badge}</span>` : '<span></span>'}
        <div class="proj-links-top" aria-label="Estado del proyecto">
          ${project.statuses.map(status => `<span class="proj-link-status">${status}</span>`).join('')}
        </div>
      </div>
      <h3 id="${project.id}-title" class="proj-title line-reveal"><span>${project.title}</span></h3>
      <p class="proj-desc">${project.description}</p>
      ${project.impact ? `
        <div class="proj-impact">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          ${project.impact}
        </div>
      ` : ''}
      <div class="proj-matrix">
        ${project.matrix.map(item => `
          <div class="proj-metric-row">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </div>
        `).join('')}
      </div>
      <div class="proj-tags">
        ${project.tags.map(tag => `<span class="tag${tag.accent ? ' tag--accent' : ''}">${tag.label}</span>`).join('')}
      </div>
      <div class="proj-foot">
        <a href="#contacto" class="text-link">${project.ctaText}</a>
      </div>
    </article>
  `).join('');
}

function renderCertifications() {
  const container = $('#certs-list');
  if (!container) return;

  container.innerHTML = CERTIFICATIONS.map((cert, index) => `
    <div class="cert-row reveal reveal-left${cert.highlight ? ' cert-row--star' : ''}" aria-label="${cert.name}" style="transition-delay:${Math.min(index * 60, 300)}ms">
      ${renderCertificationIcon(cert)}
      <div class="cert-text">
        <span class="cert-org">${cert.org}</span>
        <strong class="cert-name">${cert.name}</strong>
      </div>
      ${cert.code ? `<span class="cert-code-tag">${cert.code}</span>` : ''}
    </div>
  `).join('');
}

function renderCertificationIcon(cert) {
  if (cert.iconText) {
    const style = cert.iconTextColor ? ` style="color:${cert.iconTextColor};"` : '';
    return `<div class="cert-icon-wrap cert-icon-wrap--text"${style}>${cert.iconText}</div>`;
  }

  return `<div class="cert-icon-wrap">${icon(cert.icon)}</div>`;
}

function renderLabs() {
  const container = $('#labs-grid');
  if (!container) return;

  container.innerHTML = LABS.map((lab, index) => `
    <div class="lab-card reveal reveal-scale" style="transition-delay:${Math.min(index * 90, 270)}ms">
      <div class="lab-status">
        <span class="sdot sdot--${lab.statusClass}" aria-hidden="true"></span>
        ${lab.status}
      </div>
      <div class="lab-icon">${icon(lab.icon)}</div>
      <h3 class="lab-title line-reveal"><span>${lab.title}</span></h3>
      <p class="lab-desc">${lab.description}</p>
      <p class="lab-next">${lab.next}</p>
      <div class="lab-tags">
        ${lab.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function icon(name) {
  const icons = {
    mail: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    `,
    phone: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
      </svg>
    `,
    linkedin: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 7.06a1.97 1.97 0 100-3.94 1.97 1.97 0 000 3.94zM20.44 13.02c0-3.41-1.82-4.99-4.25-4.99-1.96 0-2.84 1.08-3.33 1.84V8.5H9.49c.04.91 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.38 1.92-1.38 1.35 0 1.89 1.03 1.89 2.54V20h3.37v-6.98z"/>
      </svg>
    `,
    github: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    `,
    clock: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9"></circle>
        <polyline points="12 7 12 12 16 14"></polyline>
      </svg>
    `,
    azure: `
      <svg width="18" height="18" viewBox="0 0 96 96" aria-hidden="true">
        <defs>
          <linearGradient id="az-port" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0078d4"/>
            <stop offset="100%" stop-color="#50e6ff"/>
          </linearGradient>
        </defs>
        <path fill="url(#az-port)" d="M33.2 6L18 51.4l22.8 5.7L60 18.3 33.2 6zm-2 54.3L14 89.9l68-1.3-26.2-27.3-24.6 5z"/>
      </svg>
    `,
    terraform: `
      <svg width="18" height="18" viewBox="0 0 128 128" aria-hidden="true">
        <path fill="#7B42BC" d="M77.2 15.4v35.5l30.8-17.7V-2.3L77.2 15.4zM46.1 33l30.8 17.8V15.4L46.1-2.3V33zm0 35.6l30.8 17.8V50.9L46.1 33v35.6zm-31.3-18V86l30.8 17.8V68.2L14.8 50.6z"/>
      </svg>
    `,
    python: `
      <svg width="18" height="18" viewBox="0 0 128 128" aria-hidden="true">
        <path fill="#3776AB" d="M49.3 4C34.2 4 35.3 10.4 35.3 10.4l0 6.9h14.5v2.1H23.5s-9.7-1.1-9.7 14.1 8.5 14.6 8.5 14.6h5v-7s-.3-8.5 8.4-8.5h14.4s8.1.1 8.1-7.9V12.5S59.7 4 49.3 4zM41 9.6a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2z"/>
        <path fill="#FFD43B" d="M78.7 4.5c15.1 0 14 6.4 14 6.4l0 6.9H78.2v2.1h26.3s9.7-1.1 9.7 14.1-8.5 14.6-8.5 14.6h-5v-7s.3-8.5-8.4-8.5H78.1s-8.1.1-8.1-7.9V13s-.5-8.5 8.7-8.5zm8.3 5.6a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2z"/>
      </svg>
    `,
    shield: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    `,
    api: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M8 9l-3 3 3 3"></path>
        <path d="M16 9l3 3-3 3"></path>
        <path d="M14 4l-4 16"></path>
      </svg>
    `,
  };

  return icons[name] || '';
}

function initYear() {
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initTyped() {
  const el = $('#typed-text');
  if (!el) return;

  if (prefersReducedMotion) {
    el.textContent = TYPED_STRINGS[0];
    return;
  }

  let stringIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = TYPED_STRINGS[stringIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        stringIndex = (stringIndex + 1) % TYPED_STRINGS.length;
      }
    }

    setTimeout(tick, deleting ? 45 : 85);
  }

  tick();
}

function initNav() {
  const header = $('.nav-header');
  const hamburger = $('#hamburger');
  const menu = $('#nav-menu');

  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      menu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });

    $$('.nav-link', menu).forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        menu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }
}

function initScrollSpy() {
  const sections = $$('main section[id]');
  const navLinks = $$('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const sectionMap = new Map(
    navLinks.map(link => [link.getAttribute('href')?.replace('#', ''), link])
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = sectionMap.get(id);
        if (activeLink) {
          activeLink.classList.add('active');
          moveNavIndicator(activeLink);
        }
      });
    },
    {
      rootMargin: '-35% 0px -45% 0px',
      threshold: 0.05,
    }
  );

  sections.forEach(section => observer.observe(section));
}

function initReveal() {
  const items = $$([
    '.reveal',
    '.section-title',
    '.section-intro',
    '.hero-eyebrow',
    '.hero-name',
    '.hero-role',
    '.hero-intro',
    '.quick-stack',
    '.hero-cta',
    '.hero-meta-grid',
    '.hero-loc',
    '.hero-panel',
    '.about-body p',
    '.contact-chip',
    '.skill-cat',
    '.tl-item',
    '.logro-card',
    '.proj-card',
    '.cert-row',
    '.lab-card',
    '.channel-row',
    '.section-label-row',
    '.section-note',
  ].join(','));

  if (!items.length) return;

  items.forEach((item, index) => {
    if (!item.classList.contains('reveal')) {
      item.classList.add('reveal');

      if (
        item.matches('.hero-panel, .cert-row:nth-child(even), .channel-row:nth-child(even)')
      ) {
        item.classList.add('reveal-right');
      } else if (
        item.matches('.contact-chip, .cert-row:nth-child(odd), .channel-row:nth-child(odd)')
      ) {
        item.classList.add('reveal-left');
      } else if (
        item.matches('.skill-cat, .proj-card, .lab-card, .hero-meta-grid')
      ) {
        item.classList.add('reveal-scale');
      } else {
        item.classList.add('reveal-up');
      }
    }

    if (!item.style.transitionDelay) {
      item.style.transitionDelay = `${Math.min(index * 22, 220)}ms`;
    }
  });

  if (prefersReducedMotion) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  items.forEach(item => observer.observe(item));

  $$('.line-reveal').forEach(el => {
    const span = $('span', el);
    if (!span) return;

    const lineObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          lineObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    lineObserver.observe(el);
  });
}

function initCounters() {
  const counters = $$('[data-counter-target]');
  if (!counters.length) return;

  if (prefersReducedMotion) {
    counters.forEach(counter => {
      const target = Number(counter.dataset.counterTarget || 0);
      const suffix = counter.dataset.counterSuffix || '';
      counter.textContent = `${target}${suffix}`;
    });
    return;
  }

  const animateCounter = el => {
    const target = Number(el.dataset.counterTarget || 0);
    const suffix = el.dataset.counterSuffix || '';
    const duration = 1400;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${value}${suffix}`;

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}

function initForm() {
  const form = $('#contact-form');
  if (!form) return;
  const feedback = $('#form-success');
  const feedbackText = feedback?.querySelector('.form-ok-text');
  const submitButton = form.querySelector('button[type="submit"]');
  const submitLabel = submitButton?.childNodes[0];
  const defaultButtonText = submitLabel?.textContent?.trim() || 'Enviar consulta';
  const recipient = form.dataset.recipient?.trim() || 'matialfa2018@gmail.com';
  const configuredAction = form.getAttribute('action')?.trim();
  const endpoint = configuredAction && configuredAction !== '#' ? configuredAction : '';

  const fields = {
    name: {
      input: $('#name', form),
      error: $('#name-error', form),
      validate: value => value.trim().length >= 2 ? '' : 'Ingresa tu nombre.',
    },
    email: {
      input: $('#email', form),
      error: $('#email-error', form),
      validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : 'Ingresa un email válido.',
    },
    subject: {
      input: $('#subject', form),
      error: $('#subject-error', form),
      validate: value => value.trim().length >= 3 ? '' : 'Ingresa un asunto.',
    },
    message: {
      input: $('#message', form),
      error: $('#message-error', form),
      validate: value => value.trim().length >= 10 ? '' : 'Escribe un mensaje un poco más detallado.',
    },
  };

  const setFeedback = (message, tone = 'success') => {
    if (!feedback || !feedbackText) return;

    feedbackText.textContent = message;
    feedback.hidden = false;
    feedback.classList.toggle('is-info', tone === 'info');
    feedback.classList.toggle('is-error', tone === 'error');
  };

  const clearFeedback = () => {
    if (!feedback) return;

    feedback.hidden = true;
    feedback.classList.remove('is-info', 'is-error');
  };

  const setFieldState = (field, message = '') => {
    if (!field.input || !field.error) return;

    field.error.textContent = message;
    field.input.classList.toggle('invalid', Boolean(message));
    field.input.setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  const validateField = key => {
    const field = fields[key];
    if (!field?.input) return true;

    const message = field.validate(field.input.value);
    setFieldState(field, message);
    return !message;
  };

  const setSubmitting = isSubmitting => {
    if (!submitButton || !submitLabel) return;

    submitButton.disabled = isSubmitting;
    submitButton.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');
    submitLabel.textContent = isSubmitting ? 'Enviando...' : `${defaultButtonText} `;
  };

  const buildMailtoLink = data => {
    const body = [
      `Nombre: ${data.name}`,
      `Email: ${data.email}`,
      '',
      data.message,
    ].join('\n');

    return `mailto:${recipient}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
  };

  Object.keys(fields).forEach(key => {
    const field = fields[key];
    if (!field.input) return;

    field.input.addEventListener('input', () => {
      validateField(key);
      clearFeedback();
    });

    field.input.addEventListener('blur', () => {
      validateField(key);
    });
  });

  clearFeedback();
  Object.values(fields).forEach(field => setFieldState(field));

  form.addEventListener('submit', async e => {
    e.preventDefault();
    clearFeedback();

    const firstInvalidKey = Object.keys(fields).find(key => !validateField(key));
    if (firstInvalidKey) {
      fields[firstInvalidKey].input?.focus();
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());
    setSubmitting(true);

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: new FormData(form),
        });

        if (!response.ok) {
          let errorMessage = 'No pude enviar el mensaje. Inténtalo de nuevo en un momento.';

          if (response.status === 429) {
            errorMessage = 'Se alcanzó el límite temporal de envíos. Espera un momento y vuelve a intentar.';
          } else {
            try {
              const data = await response.json();
              if (Array.isArray(data?.errors) && data.errors.length) {
                errorMessage = data.errors.map(item => item.message).join(' ');
              }
            } catch (parseError) {
              // Keep the generic message when the response has no JSON body.
            }
          }

          throw new Error(errorMessage);
        }

        form.reset();
        Object.values(fields).forEach(field => setFieldState(field));
        setFeedback('Mensaje enviado. Te respondo pronto.');
      } else {
        window.location.href = buildMailtoLink(payload);
        form.reset();
        Object.values(fields).forEach(field => setFieldState(field));
        setFeedback('Se abrió tu correo con el mensaje listo para enviar.', 'info');
      }
    } catch (error) {
      const message = error instanceof Error && error.message
        ? error.message
        : `No pude enviar el mensaje ahora. También puedes escribirme a ${recipient}.`;
      setFeedback(message, 'error');
    } finally {
      setSubmitting(false);
    }
  });
}

function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;

  const toggle = () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  };

  toggle();
  window.addEventListener('scroll', toggle, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initHeroMotion() {
  if (prefersReducedMotion) return;

  const hero = $('.hero');
  const copy = $('.hero-copy');
  const panel = $('.hero-panel');
  const glowPrimary = $('.hero-glow--primary');
  const glowSecondary = $('.hero-glow--secondary');
  const grid = $('.hero-grid');

  if (!hero) return;

  let ticking = false;

  function updateHeroMotion() {
    const rect = hero.getBoundingClientRect();
    const viewportH = window.innerHeight || 1;
    const progress = Math.max(-1, Math.min(1, rect.top / viewportH));

    if (copy) {
      copy.style.transform = `translate3d(0, ${progress * -14}px, 0)`;
    }

    if (panel) {
      panel.style.transform = `translate3d(0, ${progress * 18}px, 0)`;
    }

    if (glowPrimary) {
      glowPrimary.style.transform = `translate3d(${progress * -16}px, ${progress * 22}px, 0) scale(${1 + Math.abs(progress) * 0.04})`;
    }

    if (glowSecondary) {
      glowSecondary.style.transform = `translate3d(${progress * 12}px, ${progress * -14}px, 0) scale(${1 + Math.abs(progress) * 0.03})`;
    }

    if (grid) {
      grid.style.transform = `translate3d(0, ${progress * 10}px, 0)`;
    }

    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateHeroMotion);
  }

  updateHeroMotion();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initSectionMotion() {
  if (prefersReducedMotion) return;

  const sections = $$('main section');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('section-in-view', entry.isIntersecting);
      });
    },
    {
      threshold: 0.2,
      rootMargin: '-10% 0px -10% 0px',
    }
  );

  sections.forEach(section => observer.observe(section));
}

function initTerminalSequence() {
  const terminalLines = $$('.hero-terminal .terminal-line');
  if (!terminalLines.length) return;

  if (prefersReducedMotion) {
    terminalLines.forEach(line => line.classList.add('is-visible'));
    return;
  }

  terminalLines.forEach((line, index) => {
    line.style.transitionDelay = `${300 + index * 140}ms`;
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        terminalLines.forEach((line, index) => {
          setTimeout(() => line.classList.add('is-visible'), index * 110);
        });

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  const terminal = $('.hero-terminal');
  if (terminal) observer.observe(terminal);
}

function initNavIndicator() {
  const navMenu = $('#nav-menu');
  if (!navMenu) return;

  let indicator = $('.nav-indicator', navMenu);

  if (!indicator) {
    indicator = document.createElement('span');
    indicator.className = 'nav-indicator';
    navMenu.appendChild(indicator);
  }

  const activeLink = $('.nav-link.active', navMenu) || $('.nav-link', navMenu);
  if (activeLink) moveNavIndicator(activeLink);

  window.addEventListener('resize', () => {
    const current = $('.nav-link.active', navMenu) || $('.nav-link', navMenu);
    if (current) moveNavIndicator(current);
  });
}

function moveNavIndicator(link) {
  const navMenu = $('#nav-menu');
  const indicator = $('.nav-indicator', navMenu);
  if (!navMenu || !indicator || !link) return;

  const menuRect = navMenu.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();

  const left = linkRect.left - menuRect.left;
  const width = linkRect.width;

  indicator.style.width = `${width}px`;
  indicator.style.transform = `translateX(${left}px)`;
  indicator.classList.add('is-visible');
}
/* ═══════════════════════════════════════════════════
   ENHANCED INTERACTIONS — Scroll progress, tilt, magnetic, cursor glow
   ═══════════════════════════════════════════════════ */

const prefersReducedMotionCheck = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Scroll progress bar ── */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);

  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${pct}%`;
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ── Cursor glow ── */
function initCursorGlow() {
  if (prefersReducedMotionCheck) return;
  if (window.matchMedia('(hover: none)').matches) return; // skip touch devices

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;
  let rafId;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animate() {
    glowX = lerp(glowX, mouseX, 0.09);
    glowY = lerp(glowY, mouseY, 0.09);
    glow.style.left = `${glowX}px`;
    glow.style.top  = `${glowY}px`;
    rafId = requestAnimationFrame(animate);
  }

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!rafId) animate();
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    glow.style.opacity = '1';
  });
}

/* ── 3D Card Tilt ── */
function initCardTilt() {
  if (prefersReducedMotionCheck) return;
  if (window.matchMedia('(hover: none)').matches) return;

  const cards = document.querySelectorAll('.proj-card, .logro-card, .focus-card, .principle-card, .lab-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const maxTilt = 7;

      card.style.transform =
        `perspective(700px) rotateX(${-dy * maxTilt}deg) rotateY(${dx * maxTilt}deg) translateZ(6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── Magnetic buttons ── */
function initMagneticButtons() {
  if (prefersReducedMotionCheck) return;
  if (window.matchMedia('(hover: none)').matches) return;

  const btns = document.querySelectorAll('.btn-primary, .btn-outline');

  btns.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) * 0.28;
      const dy   = (e.clientY - cy) * 0.28;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ── Enhanced reveal: stagger children inside visible containers ── */
function initEnhancedReveal() {
  const tl = document.querySelectorAll('.tl-item');
  if (!tl.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  tl.forEach((item, i) => {
    item.style.transitionDelay = `${i * 110}ms`;
    observer.observe(item);
  });
}

/* ── Counter glow on complete ── */
function patchCounterGlow() {
  const counters = document.querySelectorAll('[data-counter-target]');
  counters.forEach(el => {
    const originalTarget = el.dataset.counterTarget;
    const observer = new MutationObserver(() => {
      const val = el.textContent.replace(/\D/g, '');
      if (val >= originalTarget) {
        el.classList.add('counted');
        observer.disconnect();
      }
    });
    observer.observe(el, { childList: true, subtree: true, characterData: true });
  });
}

/* ── Smooth active-section highlight on nav ── */
function patchScrollSpy() {
  const navMenu = document.getElementById('nav-menu');
  if (!navMenu) return;

  const updateIndicator = () => {
    const active = navMenu.querySelector('.nav-link.active') || navMenu.querySelector('.nav-link');
    if (active && typeof moveNavIndicator === 'function') moveNavIndicator(active);
  };

  // Call after a tiny delay to let DOM settle
  requestAnimationFrame(() => {
    updateIndicator();
    window.addEventListener('scroll', () => requestAnimationFrame(updateIndicator), { passive: true });
  });
}

/* ── Hero panel hover sparkle ── */
function initHeroSparkle() {
  if (prefersReducedMotionCheck) return;
  if (window.matchMedia('(hover: none)').matches) return;

  const panel = document.querySelector('.hero-panel');
  if (!panel) return;

  panel.addEventListener('mousemove', e => {
    const rect = panel.getBoundingClientRect();
    const x    = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y    = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    panel.style.setProperty('--mouse-x', `${x}%`);
    panel.style.setProperty('--mouse-y', `${y}%`);
  });
}

/* ── Smooth button ripple ── */
function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const rect   = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size   = Math.max(rect.width, rect.height) * 2;
      ripple.style.cssText = `
        position:absolute; border-radius:50%; pointer-events:none;
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY  - rect.top  - size/2}px;
        background:rgba(255,255,255,.18);
        transform:scale(0); animation:ripple-anim .5s ease forwards;
      `;
      btn.style.overflow   = 'hidden';
      btn.style.position   = 'relative';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 520);
    });
  });

  // Inject ripple keyframe once
  if (!document.getElementById('ripple-style')) {
    const s = document.createElement('style');
    s.id = 'ripple-style';
    s.textContent = `@keyframes ripple-anim{to{transform:scale(1);opacity:0}}`;
    document.head.appendChild(s);
  }
}

/* ── Smooth page-section entrance ── */
function initSectionEntrance() {
  if (prefersReducedMotionCheck) return;

  const sections = document.querySelectorAll('main section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.style.opacity = entry.isIntersecting ? '1' : '0.96';
    });
  }, { threshold: 0.05 });

  sections.forEach(s => observer.observe(s));
}

/* ── Init all enhancements ── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initCursorGlow();
  initCardTilt();
  initMagneticButtons();
  initEnhancedReveal();
  patchCounterGlow();
  patchScrollSpy();
  initHeroSparkle();
  initRipple();
  initSectionEntrance();
});
