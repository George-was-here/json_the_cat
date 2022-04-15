// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns a error message for a non-existent breed being passed in', (done) => {
    fetchBreedDescription('Husky', (error, desc) => {
      const expectedDesc = `You have not yet found what you are looking for... ${null} ${undefined}`;
      assert.equal(desc, expectedDesc);
    });
    done();
  });
});

// Add another test (it) here which should test the scenario where an invalid/non-existent breed is passed in.