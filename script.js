// Write your JavaScript code here!

// const { myFetch, addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
    /* let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (jsonArray) {
        });
    });
        listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let destinationPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, destinationPlanet.name, destinationPlanet.diameter, destinationPlanet.star, destinationPlanet.distance, destinationPlanet.moons, destinationPlanet.image);
    }) */

    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (jsonArray) {
            console.log(jsonArray);
            let allPlanets = jsonArray;

            let destinationPlanet = pickPlanet(allPlanets);

            addDestinationInfo(document, destinationPlanet.name, destinationPlanet.diameter, destinationPlanet.star, destinationPlanet.distance, destinationPlanet.moons, destinationPlanet.image);
        });
    });

    let list = document.getElementById('faultyItems');
    list.style.visibility = 'hidden';


    let form = document.getElementById("testForm");
    form.reset();
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // any code in here will execute after the form submits, to make this file more organized, we are going to move any code we put in here into the formSubmission function in the helper file.
        //that way, we can call that formSubmission function here, and reduce the amount of code in this file
        // we have to understand what needs to be passed into the function
        // the document is just the document object, we need to pass it in to be able to use the document object in the actual function - as far as the pilot, copilot, fuelLevel and cargoMass, we
        //need to select these inputs using the DOM and pass in the values of these inputs into the form submission function

        let pilotName = document.getElementById('pilotName');
        let copilotName = document.getElementById('copilotName'); // the copilot doesn't have an ID so assign one for the ones that don't have an ID
        let fuelLevel = document.getElementById('fuelLevel');
        let cargoMass = document.getElementById('cargoMass');

        //alongside selecting all of the input we need to get the list too

        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        form.reset();
    });

});