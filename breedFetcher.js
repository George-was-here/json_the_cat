const request = require('request');
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;



const breedFetcher = (breed) => {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (!error && data.length) {
      console.log(`Search query results: ${data[0].description}`);
      console.log("Type of Data:", typeof data);
      return;
    }
    if (!error) {
      console.log(`You have not yet found what you are looking for... ${null} ${undefined}`);
      return;
    }
    console.log(`Terribly sorry, but we seem to have encountered an error ${error}`);
    return;
  });
};

breedFetcher(url);


//EDGE CASES!!!
//Write code to output an appropriate message if the requested breed is not found.
//Handle request errors and print the error details to the screen.
//If you haven't already, remember to run eslint on our solution.

