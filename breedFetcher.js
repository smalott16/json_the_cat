const request = require('request');

const args = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }

    callback(null, body);
  });
};

//fetchBreedDescription("sib", () => {})
module.exports = {
  fetchBreedDescription
};