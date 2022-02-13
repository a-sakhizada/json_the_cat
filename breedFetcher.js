const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search/?name=${breedName}`,
    (error, response, body) => {

        //if error is NOT null
      if (error ) {
        callback(error, null);
      } else { //if it is null
        //deserialize -> convert json string TO a javascript object
        const data = JSON.parse(body);

        if (data.length > 0 && response.statusCode === 200) {
          callback(null, data[0].description);
        } else {
          callback(error, null);
        }
      }
    }
  );
};

//callback(errorVal, descVal) -> error is either null(success) and desc is body OR error from req an null for desc (fail)
module.exports = { fetchBreedDescription };
