const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, callback);
};

module.exports = { fetchBreedDescription };

//EDGE CASES!!!
//Write code to output an appropriate message if the requested breed is not found.
//Handle request errors and print the error details to the screen.
//If you haven't already, remember to run eslint on our solution.

