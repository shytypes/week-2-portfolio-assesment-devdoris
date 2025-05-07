// Theme toggle functionality
export function initThemeToggle() {
    const themeButton = document.getElementById('theme-button');
    const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', storedTheme);
    
    // Theme toggle click event
    themeButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // Update theme
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Apply transition class for smooth color changes
      document.body.classList.add('theme-transition');
      setTimeout(() => {
        document.body.classList.remove('theme-transition');
      }, 500);
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      // Only change theme if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    });
    
    // Add special effects based on theme
    const updateThemeEffects = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      
      // Apply different background effects for dark vs light theme
      if (currentTheme === 'dark') {
        // Dark theme specific effects
        document.body.classList.add('dark-theme-active');
        document.body.classList.remove('light-theme-active');
      } else {
        // Light theme specific effects
        document.body.classList.add('light-theme-active');
        document.body.classList.remove('dark-theme-active');
      }
    };
    
    // Run on initial load
    updateThemeEffects();
    
    // Run when theme changes
    themeButton.addEventListener('click', updateThemeEffects);
  }