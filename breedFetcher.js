const request = require('request');

const args = process.argv.slice(2);

const apiRequest = function(type) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${type}`, (error, response, body) => {
    if (error) {
    //console.log(error);
    }
    console.log(typeof body);
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  });
};

apiRequest(args[0]);