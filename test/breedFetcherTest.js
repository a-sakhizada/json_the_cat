const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
    it("returns a string description for a valid breed, via callback", (done) => {
        fetchBreedDescription("Siberian", (err, desc) => {
            //we expect no error for this scenario
            assert.equal(err,null);

            const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
            
            // compare returned description
            assert.equal(expectedDesc, desc.trim());

            done();//in each Mocha test to let the framework know when a each test was completed
        });
    });


    it("returns error details when an invalid/non-existent breed is passed, via callback", (done) => {
        fetchBreedDescription("Taco", (err, desc) => {
            assert.equal(err, err);

            console.log(err);
            const expectedDesc = null;

            console.log(desc);
            assert.equal(expectedDesc, desc);

            done();
        })
    })

});