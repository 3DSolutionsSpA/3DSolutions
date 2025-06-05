document.addEventListener('DOMContentLoaded', function () {
  // 1. HERO carousel logic (unchanged)
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

  if (heroSlides.length > 0) {
    showHeroSlide(heroIndex);
    setInterval(nextHeroSlide, 5000);
  }

  // 2. Project carousel logic (unchanged)
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

  if (projectImages.length > 0) {
    showProjectImage(projectIndex);
    setInterval(nextProjectImage, 4000);
  }

  // 3. Hamburger menu toggle logic
  const nav = document.querySelector('nav.nav-wrapper');
  const toggleButton = document.querySelector('.nav-toggle');

  if (nav && toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      // Update aria-expanded for accessibility
      toggleButton.setAttribute('aria-expanded', isOpen);
    });
  }

  // Close menu when a nav link is clicked (on mobile)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        if (toggleButton) {
          toggleButton.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // No JS needed for logos carousel (uses CSS animation)
});