const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mainNav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const projectContent = {
  'crime-platform': {
    kicker: 'Proyecto académico / Arquitectura, datos y cloud',
    title: 'Plataforma inteligente de prevención del delito',
    description:
      'Diseño de una plataforma orientada a recopilar, integrar, procesar y analizar datos de seguridad pública para apoyar la prevención del delito.',
    details: [
      ['Diseño realizado', 'Requisitos funcionales y no funcionales, además de modelado entidad-relación, lógico y físico de la base de datos.'],
      ['Arquitectura de datos', 'Propuesta de Data Lake y Data Warehouse para centralizar y habilitar el análisis de información.'],
      ['Enfoque cloud', 'Diseño de componentes escalables y flujos de datos basados en conceptos y servicios de AWS, APIs, analítica e IA.'],
    ],
  },
  insulink: {
    kicker: 'Experiencia profesional / Startup',
    title: 'Desarrollo web y móvil en Insulink',
    description:
      'Contribución al desarrollo de productos digitales dentro de Insulink, startup ganadora en IncuvalVentures.',
    details: [
      ['Web', 'Desarrollo y mantenimiento del sitio de la empresa con HTML, CSS y JavaScript.'],
      ['Móvil', 'Contribución a interfaces y funcionalidades de una aplicación móvil desarrollada con Dart y Flutter.'],
      ['Forma de trabajo', 'Participación en implementación, pruebas, depuración y mejora continua en un entorno con requisitos cambiantes.'],
    ],
  },
  'java-apps': {
    kicker: 'Proyecto académico / Backend y bases de datos',
    title: 'Aplicaciones de gestión basadas en Java',
    description:
      'Conjunto de aplicaciones académicas enfocadas en la construcción de servicios backend, persistencia de datos y operaciones de negocio.',
    details: [
      ['Backend', 'Implementación de servicios y APIs REST con Java y Spring Boot.'],
      ['Datos', 'Modelado y conexión con bases de datos relacionales mediante MySQL y SQL.'],
      ['Fundamentos', 'Aplicación de POO, operaciones CRUD y principios de separación de responsabilidades.'],
    ],
  },
};

const dialog = document.querySelector('#project-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogKicker = document.querySelector('#dialog-kicker');
const dialogDescription = document.querySelector('#dialog-description');
const dialogDetails = document.querySelector('#dialog-details');
const dialogClose = document.querySelector('.dialog-close');

document.querySelectorAll('[data-project]').forEach((card) => {
  card.querySelector('button')?.addEventListener('click', () => {
    const project = projectContent[card.dataset.project];
    if (!project) return;

    dialogKicker.textContent = project.kicker;
    dialogTitle.textContent = project.title;
    dialogDescription.textContent = project.description;
    dialogDetails.replaceChildren(
      ...project.details.map(([label, text]) => {
        const item = document.createElement('div');
        const heading = document.createElement('strong');
        const copy = document.createElement('p');
        heading.textContent = label;
        copy.textContent = text;
        item.append(heading, copy);
        return item;
      })
    );
    dialog.showModal();
  });
});

dialogClose?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
