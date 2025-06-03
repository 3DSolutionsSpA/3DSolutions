/* ========================================================================
   js/scripts.js
   Lógica para los carruseles en Home
   ======================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  /* ======================
     2.1. Carrusel principal (Hero)
     ====================== */
  const heroImages = document.querySelectorAll('.hero-carousel img');
  let heroIndex = 0;

  function showHeroImage(index) {
    heroImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextHeroImage() {
    heroIndex = (heroIndex + 1) % heroImages.length;
    showHeroImage(heroIndex);
  }

  // Inicializar: mostrar la primera
  if (heroImages.length > 0) {
    showHeroImage(heroIndex);
    setInterval(nextHeroImage, 5000); // Cambia cada 5 segundos
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

