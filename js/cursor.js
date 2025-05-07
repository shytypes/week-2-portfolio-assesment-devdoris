// Custom cursor functionality
export function initCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // Check if user's device has touch capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      // Update cursor position on mouse move
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // Add slight delay to follower for smooth effect
        setTimeout(() => {
          cursorFollower.style.left = `${e.clientX}px`;
          cursorFollower.style.top = `${e.clientY}px`;
        }, 80);
      });
      
      // Add custom cursor effects on interactive elements
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, .work-item, .social-link');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
          
          if (element.tagName === 'A' || element.tagName === 'BUTTON') {
            cursorFollower.style.backgroundColor = 'rgba(0, 113, 227, 0.2)';
          }
        });
        
        element.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
          cursorFollower.style.backgroundColor = 'rgba(0, 113, 227, 0.2)';
        });
      });
      
      // Hide cursor when mouse leaves window
      document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
          cursor.style.opacity = '0';
          cursorFollower.style.opacity = '0';
        }
      });
      
      // Show cursor when mouse enters window
      document.addEventListener('mouseover', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
      });
    } else {
      // Hide custom cursor on touch devices
      cursor.style.display = 'none';
      cursorFollower.style.display = 'none';
    }
  }