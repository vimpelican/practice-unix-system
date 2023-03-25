document.addEventListener('DOMContentLoaded', () => {
    // Get all the list items
    const items = document.querySelectorAll('li');
  
    // Add a click event listener to each item
    items.forEach((item) => {
      item.addEventListener('click', () => {
        // Remove the selected class from all items
        items.forEach((item) => {
          item.classList.remove('selected');
        });
  
        // Add the selected class to the clicked item
        item.classList.add('selected');
      });
    });
  });
  