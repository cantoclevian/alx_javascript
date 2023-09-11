const request = require('request');

// API URL for the JSON data
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Function to compute the number of completed tasks by user ID
function getCompletedTasksByUser(apiUrl) {
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const todos = JSON.parse(body);

      // Create a map to store the count of completed tasks by user ID
      const completedTasksByUser = new Map();

      todos.forEach((todo) => {
        if (todo.completed) {
          if (!completedTasksByUser.has(todo.userId)) {
            completedTasksByUser.set(todo.userId, 1);
          } else {
            completedTasksByUser.set(todo.userId, completedTasksByUser.get(todo.userId) + 1);
          }
        }
      });

      // Print the number of completed tasks by user ID
      completedTasksByUser.forEach((count, userId) => {
        console.log(`User ID ${userId}: ${count} completed tasks`);
      });
    } else {
      console.error(`Error fetching data from API: ${error}`);
    }
  });
}

// Call the function with the API URL
getCompletedTasksByUser(apiUrl);





