// Contact form functionality
export function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.querySelector('.form-success');
    const resetFormButton = document.querySelector('.reset-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form fields
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');
        
        // Reset previous errors
        document.querySelectorAll('.form-error').forEach(error => {
          error.textContent = '';
        });
        
        // Validate form
        let isValid = true;
        
        if (!nameField.value.trim()) {
          document.querySelector('[for="name"] + input + .form-error').textContent = 'Please enter your name';
          nameField.focus();
          isValid = false;
        }
        
        if (!emailField.value.trim()) {
          document.querySelector('[for="email"] + input + .form-error').textContent = 'Please enter your email';
          if (isValid) emailField.focus();
          isValid = false;
        } else if (!isValidEmail(emailField.value.trim())) {
          document.querySelector('[for="email"] + input + .form-error').textContent = 'Please enter a valid email address';
          if (isValid) emailField.focus();
          isValid = false;
        }
        
        if (!subjectField.value.trim()) {
          document.querySelector('[for="subject"] + input + .form-error').textContent = 'Please enter a subject';
          if (isValid) subjectField.focus();
          isValid = false;
        }
        
        if (!messageField.value.trim()) {
          document.querySelector('[for="message"] + textarea + .form-error').textContent = 'Please enter your message';
          if (isValid) messageField.focus();
          isValid = false;
        }
        
        // Submit form if valid
        if (isValid) {
          // Simulate form submission
          const submitButton = contactForm.querySelector('button[type="submit"]');
          const originalText = submitButton.textContent;
          
          // Show loading state
          submitButton.disabled = true;
          submitButton.innerHTML = `<span class="loader"></span>`;
          
          // Simulate server request
          setTimeout(() => {
            // Hide the form and show success message
            formSuccess.classList.add('visible');
            
            // Reset form
            contactForm.reset();
            
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalText;
          }, 1500);
        }
      });
      
      // Reset form button
      resetFormButton.addEventListener('click', () => {
        formSuccess.classList.remove('visible');
        contactForm.reset();
      });
      
      // Email validation helper
      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
      
      // Add focus and blur events to form inputs for enhanced UX
      const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
      
      formInputs.forEach(input => {
        // Add focus class to parent when input is focused
        input.addEventListener('focus', () => {
          input.parentElement.classList.add('focused');
        });
        
        // Remove focus class when input loses focus
        input.addEventListener('blur', () => {
          input.parentElement.classList.remove('focused');
        });
        
        // Live validation as user types
        input.addEventListener('input', () => {
          if (input.value.trim()) {
            input.parentElement.classList.add('has-value');
          } else {
            input.parentElement.classList.remove('has-value');
          }
        });
      });
    }
  }