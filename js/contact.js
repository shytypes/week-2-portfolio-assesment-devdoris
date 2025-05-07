export function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
      // Create results container
      const resultsContainer = document.createElement('div');
      resultsContainer.id = 'form-results';
      resultsContainer.style.marginTop = '20px';
      resultsContainer.style.padding = '15px';
      resultsContainer.style.border = '1px solid #ddd';
      resultsContainer.style.borderRadius = '5px';
      
      // Insert results container after the form
      contactForm.parentNode.insertBefore(resultsContainer, contactForm.nextSibling);
      
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          // Get all input fields
          const inputs = contactForm.querySelectorAll('input, textarea, select');
          let formData = {};
          
          // Collect all form data
          inputs.forEach(input => {
              formData[input.name || input.id] = input.value.trim();
          });
          
          // Display results in list format
          let resultsHTML = '<h3>Submitted Form Data:</h3><ul>';
          
          for (const [field, value] of Object.entries(formData)) {
              if (value) { // Only show fields with values
                  const fieldName = field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                  resultsHTML += `<li><strong>${fieldName}:</strong> ${value}</li>`;
              }
          }
          
          resultsHTML += '</ul>';
          resultsContainer.innerHTML = resultsHTML;
          
          // Reset form
          contactForm.reset();
          
          // Scroll to results
          resultsContainer.scrollIntoView({ behavior: 'smooth' });
      });
  }
}