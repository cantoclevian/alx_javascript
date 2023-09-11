const request = require('request');

// Function to fetch and print characters of a Star Wars movie
function getMovieCharacters(movieId) {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      const characters = movieData.characters;

      if (characters.length === 0) {
        console.log(`No characters found for Episode ${movieData.episode_id}: ${movieData.title}`);
      } else {
        console.log(`Characters in Episode ${movieData.episode_id}: ${movieData.title}`);
        characters.forEach((characterUrl) => {
          request(characterUrl, (charError, charResponse, charBody) => {
            if (!charError && charResponse.statusCode === 200) {
              const characterData = JSON.parse(charBody);
              console.log(characterData.name);
            } else {
              console.error(`Error fetching character data: ${charError}`);
            }
          });
        });
      }
    } else {
      console.error(`Error fetching movie data: ${error}`);
    }
  });
}

// Usage example: Pass the movie ID as a command line argument
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as a command line argument (e.g., 3 for "Return of the Jedi").');
} else {
  getMovieCharacters(movieId);
}

