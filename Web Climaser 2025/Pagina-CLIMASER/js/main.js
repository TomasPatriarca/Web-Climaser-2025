// ======== Sticky Header ========
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ======== Scroll suave en anclas ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ======== Fade-in al hacer scroll ========
const fadeElements = document.querySelectorAll('.fade-in');

const showOnScroll = () => {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.9;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// ======== Mensaje de envío de formulario ========
document.querySelector('form')?.addEventListener('submit', function () {
  setTimeout(() => {
    alert('¡Gracias por contactarte con Climaser! Te responderemos a la brevedad.');
  }, 1000);
});

// ======== Texto efecto máquina ========
function typeEffect(element, speed = 100) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(timer);
  }, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.type-title');
  if (title) typeEffect(title);
});

// ======== Año actual en el footer ========
document.getElementById('year').textContent = new Date().getFullYear();
