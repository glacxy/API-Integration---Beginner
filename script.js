// This function runs when the button is clicked
function loadUsers() {

  // Send a GET request to the API URL
  fetch("https://jsonplaceholder.typicode.com/users")

    // Convert the API response into JSON format
    .then(response => response.json())

    // 'users' contains the JSON data returned by the API
    .then(users => {

      // Get the <ul> element from HTML using its ID
      const list = document.getElementById("userList");

      // Clear old data before adding new list items
      list.innerHTML = "";

      // Loop through each user object in the users array
      users.forEach(user => {

        // Create a new <li> (list item) element
        const li = document.createElement("li");

        // Set text inside <li> using user name and email
        li.textContent = user.name + " - " + user.email;

        // Add the <li> inside the <ul>
        list.appendChild(li);
      });
    })

    // Catch and print any error if API fails
    .catch(error => console.error(error));
}
