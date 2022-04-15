const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, response, body) => {
  if (error) {
    console.log(`Terribly sorry, but we seem to have encountered an error ${error}`);
    return;
  }
  const data = JSON.parse(body);
  if (!error && data.length) {
    console.log(`Search query results: ${data[0].description}`);
    // console.log("Type of Data:", typeof data);
    return;
  }
  if (!error) {
    console.log(`You have not yet found what you are looking for... ${null} ${undefined}`);
    return;
  }
});