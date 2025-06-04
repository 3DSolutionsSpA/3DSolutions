/* ========================================================================
   js/scripts.js
   Lógica para los carruseles en Home
   ======================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  /* ======================
     2.1. Carrusel principal (Hero)
     ====================== */
  const heroSlides = document.querySelectorAll('.hero-carousel img');
  let heroIndex = 0;

  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextHeroSlide() {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
  }

  // Inicializar: mostrar la primera imagen
  if (heroSlides.length > 0) {
    showHeroSlide(heroIndex);
    setInterval(nextHeroSlide, 5000); // Cambia cada 5 segundos
  }

  /* ======================
     2.2. Carrusel de proyectos (Home)
     ====================== */
  const projectImages = document.querySelectorAll('.project-carousel-wrapper img');
  let projectIndex = 0;

  function showProjectImage(index) {
    projectImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextProjectImage() {
    projectIndex = (projectIndex + 1) % projectImages.length;
    showProjectImage(projectIndex);
  }

  // Inicializar: mostrar la primera
  if (projectImages.length > 0) {
    showProjectImage(projectIndex);
    setInterval(nextProjectImage, 4000); // Cambia cada 4 segundos
  }

  /* ======================
     2.3. Carrusel de logos (no necesita JS ya que se hace con CSS animado)
     ====================== */
  // Nota: la animación @keyframes scrollLogos en CSS desplaza automáticamente.
});

document.addEventListener('DOMContentLoaded', function () {
  // … (carruseles u otro código que ya tengas)

  // 3.1. Toggle menú hamburguesa
  const nav = document.querySelector('nav.nav-wrapper');
  const toggleButton = document.querySelector('.nav-toggle');

  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });

  // Cerrar menú al hacer clic en un enlace (solo en móvil)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
      }
    });
  });
});
