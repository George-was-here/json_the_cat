const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`Terribly sorry, but we seem to have encountered an error ${error}`);
    return;
  }
  console.log(desc);
});