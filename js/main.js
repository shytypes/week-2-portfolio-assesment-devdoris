// Main JavaScript
import {initNavigation} from './navigation.js';
import {initAnimation} from './animations.js';
import {initWorkFilter} from './work.js';
import {initContactForm} from './contact.js';
import {initCursor} from './cursor.js';
import {initThemeToggle} from './theme.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavigation();
  initAnimation();
  initWorkFilter();
  initContactForm();
  initCursor();
  initThemeToggle();
  
  // Page loaded event
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Preload page transition
    setTimeout(() => {
      document.querySelector('.page-transition').style.display = 'none';
    }, 500);
  });
  
  // Add event listener for all internal links to trigger page transitions
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      // Only proceed if targetId is not just '#' and element exists
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Smooth scroll to the target
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          history.pushState(null, null, targetId);
          
          // Update active navigation
          document.querySelectorAll('.main-nav a').forEach(link => {
            link.classList.remove('active');
          });
          
          const activeLink = document.querySelector(`.main-nav a[href="${targetId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      }
    });
  });
});