const request = require('request');

// Check if the URL argument is provided
if (process.argv.length < 3) {
  console.error('Please provide a URL as the first argument.');
  process.exit(1);
}

// Get the URL from the command line arguments
const url = process.argv[2];

// Make a GET request to the specified URL
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});

