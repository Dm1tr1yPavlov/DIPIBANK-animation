function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); 
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      clearInterval(timer);
      current = target;
    }
    element.textContent = Math.floor(current) + "%";
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('.value[data-target]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

function typeWriter(element, text, speed, callback) {
  let i = 0;
  element.innerHTML = '';

  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  element.appendChild(cursor);
  
  function type() {
    if (i < text.length) {
      const char = document.createTextNode(text.charAt(i));
      element.insertBefore(char, cursor);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      element.removeChild(cursor);
      element.classList.add('typewriter-complete');
      callback();
    }
  }
  
  type();
}

function initTypewriter() {
  const titleElement = document.getElementById('typed-text');
  const subtitleElement = document.getElementById('typed-subtitle');
  
  const titleText = "Добро пожаловать в DIPI BANK";
  const subtitleText = "Расширяя возможности вашего финансового путешествия";

  typeWriter(titleElement, titleText, 80, () => {
    setTimeout(() => {
      typeWriter(subtitleElement, subtitleText, 50);
    }, 300);
  });
}

function initRippleEffect() {
  document.querySelectorAll('.ripple-button').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

function initProgressBar() {
  const progressBar = document.getElementById('progressBar');
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

function initStickyHeader() {
  const header = document.getElementById('header');
  const scrollThreshold = 50;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initTypewriter();
  initRippleEffect();
  initProgressBar();
  initCounters();
  initStickyHeader();
});