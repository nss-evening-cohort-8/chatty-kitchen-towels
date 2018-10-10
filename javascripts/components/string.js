import {getMessages} from "../Data/data.js"

let choices = [];

const setCharacters = (newArray) => {
  choices = newArray;
  console.log(choices);
  console.log(newArray);
  };


  const detailsBuilder = (messagesArray) => {
    let domString = '';
    messagesArray.forEach((message) => { //this turns pets/getpetz into a new array character
       domString +=   `<div class="card  mb-3 bg-light" style="width: 18rem;">`
       domString +=   `<div class="card-body ">`
       domString +=       `<h3 class="card-link text-center">${message.name}</h3>`
       domString +=   `</div>`
       domString +=   `<div class="card-body ">`
       domString +=       `<h5 class="card-title text-center">${message.color}</h5>`
       domString +=       `<p class="card-title text-center">${message.specialSkill}</p>`
       domString +=   `</div>`
       domString +=   `<div class="card-body ">`
       domString +=       `<h5 class="card-link text-center" id="${message.type}">${message.type}</h5>`
       domString +=   `</div>`
       domString +=   `</div>` 
    });
    printToDom(domString);
    // sortEvents();
  };


  export {setCharacters}