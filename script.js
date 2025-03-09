
    const addButton = document.getElementById('add-button');
    const newItemInput = document.getElementById('new-item');
    const itemList = document.getElementById('item-list');

    const addItem = () => {
    //If the input is empty
    const newItemText = newItemInput.value;
    if (!newItemText) return;

    //create the list
    const listItem = document.createElement('li');
    listItem.textContent = newItemText;

    // Create a checkbox for marking completion
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('status-radio');

    // Toggle completed class on check
    checkBox.addEventListener('change', () => {
        listItem.classList.toggle('completed', checkBox.checked);
    });

    //creates the delete button, its class and its function
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', () => {
        itemList.removeChild(listItem);
    });

    // Append delete button to list item
    listItem.append (checkBox, deleteButton);

    // Append item to list
    itemList.appendChild(listItem);

    // Clear input field after appending
    newItemInput.value = '';
    };

    // Attach event listener to the button
    addButton.addEventListener('click', addItem);

    // add event listener for the enter button
    newItemInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });
    