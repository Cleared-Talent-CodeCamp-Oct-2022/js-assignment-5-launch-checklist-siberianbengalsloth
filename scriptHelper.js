// Write your helper functions here!

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
}

function validateInput(testInput) {
    // take in a value from one of the form inputs and returns information about whether the input is valid or not.If the value passed into this function is empty, we want to return "Empty"
    // else if the value passed is not a number, then return "Not a Number"
    // else if the value is a number, we should return "Is a Number"
    //isNaN(testInput) will return true if the testInput is not a number. ex) isNaN("100") will return false as it will convert the string into a number and if it's words, then it'd return true
    //  
    let testInputNumber = Number(testInput);

    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInputNumber)) {
        return 'Not a Number';
    } else if (isNaN(testInputNumber) === false) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    // given we have called this function in the main script file, let's assess what we now would have access to in this function based on what we passed in
    // first we passed the global document object, so we can now do things like document.getElementById and other DOM operations from within this function
    // we also passed in the value of all the inputs after submitting the form. that means we now have the ability to validate that these values are what they are supposed to be
    // which is why we created the validateInput function
    // what does it mean for the values of the parameters to be valid? None of them should be empty! If any of them is empty, then we need to alert the user that all fields are required
    // in code, it might look like >> if validateInput(pilot) returns "empty" or if we pass in ANY of the values to validateInput and it returns "empty", that means we need to alert that
    // all field are required

    // for this IF statement... we want to test all of the values
    // if pilot is empty OR if copilot is empty OR if fuellevel is empty OR if cargolevel is empty 

    // else if none of the input values are empty, then we need to make sure that they are the correct type
    // if validateInput(pilot) returns "is a number" then the user has provided incorrect data and means we need to send another alert reminding the user to input valid data in all the fields

    // the code in this formsubmission function is a one giant if / else block
    // if we get past checking if all the fields are empty, and we determined that all the fields have correct data, only then we can move on to updating the page to show the information
    // order of operations: 1. if any field is empty, alert the user all fields are required. 2. else if any of the fields have the wrong type of data, alert the user they put in the wrong format
    // 3. else in the case we pass both of these validation steps, we can begin updating the Launch information section using faultystatus


    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');

    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoMass) === 'Empty') {
        window.alert('Please fill out all fields!');
    } else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoMass) === 'Not a Number') {
        window.alert('Please enter the correct type of value!');
    } else {
        list.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilot} is ready to go!`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready to go as well!`;

        if (fuelLevel < 10000 && cargoMass < 10001) {
            fuelStatus.innerHTML = 'Fuel level too low - not enough fuel for the journey!';
            cargoStatus.innerHTML = 'Weight Check OK'
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = 'red';
        } else if (cargoMass > 10000 && fuelLevel > 9999) {
            fuelStatus.innerHTML = 'Fuel check OK';
            cargoStatus.innerHTML = 'The shuttle is too heavy to take off!';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = 'red';
        } else if (cargoMass > 10000 && fuelLevel < 10000) {
            fuelStatus.innerHTML = 'Fuel level too low - not enough fuel for the journey!';
            cargoStatus.innerHTML = 'The shuttle is too heavy to take off!';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = 'red';
        } else {
            fuelStatus.innerHTML = 'Fuel check OK';
            cargoStatus.innerHTML = 'Weight check OK';
            launchStatus.innerHTML = 'Shuttle is ready for launch!'
            launchStatus.style.color = 'green';
        }
    }
}

// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
//         response.json().then(function (jsonArray) {
//             console.log(jsonArray);
//         });
//     });

//     return planetsReturned;
// }

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
