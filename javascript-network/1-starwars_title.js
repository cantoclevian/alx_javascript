 

const request = require('request');

// Function to fetch the movie title by episode number
function getMovieTitleByEpisode(episodeNumber) {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${episodeNumber}`;

  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      console.log(`Episode ${movieData.episode_id}: ${movieData.title}`);
    } else {
      console.error(`Error fetching movie data: ${error}`);
    }
  });
}

// Usage example: Pass the episode number as a command line argument
const episodeNumber = process.argv[2];

if (!episodeNumber) {
  console.error('Please provide an episode number as a command line argument.');
} else {
  getMovieTitleByEpisode(episodeNumber);}


