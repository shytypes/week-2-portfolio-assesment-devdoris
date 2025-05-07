// Animations
export function initAnimation() {
    // Animate skill bars when in viewport
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress', progress + '%');
        
        const rect = bar.getBoundingClientRect();
        const isInViewport = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        
        if (isInViewport) {
          bar.style.width = progress + '%';
        }
      });
    };
    
    // Fade in elements when scrolled into view
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInElements = () => {
      fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInViewport = (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
        
        if (isInViewport) {
          element.classList.add('visible');
        }
      });
    };
    
    // Parallax effect on scroll
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    const parallaxEffect = () => {
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.2;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    // Add fade-in class to elements that should animate
    document.querySelectorAll('.section-header, .about-content, .skills-content, .work-item, .contact-content')
      .forEach(element => {
        if (!element.classList.contains('fade-in')) {
          element.classList.add('fade-in');
        }
      });
    
    // Execute animations on scroll
    window.addEventListener('scroll', () => {
      animateSkillBars();
      fadeInElements();
      parallaxEffect();
    });
    
    // Initial execution
    animateSkillBars();
    fadeInElements();
    
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
          window.scrollTo({
            top: aboutSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    }
  }