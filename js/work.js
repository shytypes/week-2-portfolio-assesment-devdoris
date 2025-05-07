// Work/Portfolio functionality
export function initWorkFilter() {
    const filters = document.querySelectorAll('.work-filter');
    const workItems = document.querySelectorAll('.work-item');
    
    // Filter work items
    const filterItems = (category) => {
      workItems.forEach(item => {
        const itemCategories = item.getAttribute('data-category').split(' ');
        
        // Reset classes first
        item.classList.remove('hidden', 'visible');
        
        if (category === 'all' || itemCategories.includes(category)) {
          // Apply animation delay based on index for staggered appearance
          setTimeout(() => {
            item.classList.add('visible');
          }, Array.from(workItems).indexOf(item) * 100);
        } else {
          item.classList.add('hidden');
        }
      });
    };
    
    // Add click event to filter buttons
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        // Update active filter
        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        // Filter items
        const category = filter.getAttribute('data-filter');
        filterItems(category);
      });
    });
    
    // Initialize with "all" filter
    filterItems('all');
    
    // Add hover effect to work items
    workItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.querySelector('.work-overlay').style.opacity = '1';
        item.querySelector('.work-info').style.transform = 'translateY(0)';
        item.querySelector('.work-image img').style.transform = 'scale(1.05)';
      });
      
      item.addEventListener('mouseleave', () => {
        item.querySelector('.work-overlay').style.opacity = '0';
        item.querySelector('.work-info').style.transform = 'translateY(2rem)';
        item.querySelector('.work-image img').style.transform = 'scale(1)';
      });
    });
  }