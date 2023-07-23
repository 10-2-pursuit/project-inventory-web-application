document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resource-form');
    const resourcesContainer = document.querySelector('.resources');
    const removeButton = document.querySelector('.remove-btn')

    
  
    // Remove resource
    removeButton.addEventListener('click', (event) => {
        event.target.parentElement.remove();
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
      <div class="resourceInfo">
        <h3>Album ${resourcesContainer.children.length + 1}</h3>
        <p>Name: ${nameInput.value}</p>
        <p>Price: $${priceInput.value}</p>
        <p>In Stock: ${stockInput.value === 'yes' ? 'Yes' : 'No'}</p>
        <button class="remove-btn">Remove</button>
        </div>
        <div class="resourceImage">
        <img src="https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg" alt="resource"
        />
      </div>
      `;
      
  
      resourcesContainer.insertBefore(newResource, resourcesContainer.firstChild);
  
      form.reset();
    });
  });
  