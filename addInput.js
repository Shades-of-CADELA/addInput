// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const newItemInput = document.getElementById('new-item');
    const itemList = document.getElementById('item-list');

    // Add click event listener to the button
    addButton.addEventListener('click', () => {
        // Get the input value
        const newItemText = newItemInput.value.trim();

        // Check if input is not empty
        if (newItemText) {
            // Create a new <li> element
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;

            // Append the new <li> to the <ul>
            itemList.appendChild(newItem);

            // Clear the input field
            newItemInput.value = '';
        }
    });

    // Optional: Add a way to add items by pressing Enter
    newItemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});