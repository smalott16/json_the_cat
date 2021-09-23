const request = require('request');

//const args = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  console.log(breedName)
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0]=== undefined) {
      callback(null, "There was an error in your cat breed input");
    } else {
      //console.log(data);
      callback(null, data[0].description);
    }
  });
};

//fetchBreedDescription("sib", () => {})
module.exports = {
  fetchBreedDescription
}
