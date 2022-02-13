const request = require("request");

//setting a param of name=siberian to search for only siberians

//try{
    request(
        `https://appi.thecatapi.com/v1/breeds/search/?name=${process.argv[2]}`,
        (error, response, body) => {
          //console.log("error:", error); // Print the error if one occurred
          //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
          //console.log("body:", body); // Print the HTML for the Google homepage.
      
          if(error.code === "ENOTFOUND")
          {
              //console.log("ERROR! incorrect API call");
              console.log(error);
              process.exit();
          }


          //deserialize -> convert json string TO a javascript object
          const data = JSON.parse(body);
      
         
          if (data.length > 0 && response.statusCode === 200) {
            console.log(`DESCRIPTION FOR ${process.argv[2]} TYPE CATS: \n`, data[0].description);
          } else {
            //if the item doesnt exist 
            console.log("cant find breed!");
            process.exit();
          }
        }
      );
// }catch(err)
// {
//    throw new Error(error.code)
// }
