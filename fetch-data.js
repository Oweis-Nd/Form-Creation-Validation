// Asynchronous function to fetch and display user data
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Container where data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list to hold user names
        const userList = document.createElement('ul');

        // Loop through each user and add their name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the complete list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Clear any existing content
        dataContainer.innerHTML = '';

        // Display an error message
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run fetchUserData once the page has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
S
