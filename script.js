document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resource-form');
    const resourcesContainer = document.querySelector('.resources');
  
    // Remove resource
    resourcesContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-btn')) {
        event.target.parentElement.remove();
      }
    });
  
    // Form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const priceInput = document.getElementById('price');
      const stockInput = document.getElementById('stock');
  
      if (nameInput.value === '' || priceInput.value === '' || stockInput.value === '') {
        alert('Please fill in all required fields.');
        return;
      }
  
      const newResource = document.createElement('div');
      newResource.className = 'resource';
      newResource.innerHTML = `
        <h3>Item ${resourcesContainer.children.length + 1}</h3>
        <p>Name: ${nameInput.value}</p>
        <p>Price: $${priceInput.value}</p>
        <p>In Stock: ${stockInput.value === 'yes' ? 'Yes' : 'No'}</p>
        <button class="remove-btn">Remove</button>
      `;
  
      resourcesContainer.insertBefore(newResource, resourcesContainer.firstChild);
  
      form.reset();
    });
  
    // Form reset
    form.addEventListener('reset', () => {
      setTimeout(() => {
        form.reset();
      }, 0);
    });
  });
  