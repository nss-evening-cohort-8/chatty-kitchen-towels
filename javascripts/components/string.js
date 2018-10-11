import {getMessages} from "../Data/data.js"
import {printToDom} from "../helpers/util.js"

let choices = [];

const setCharacters = (newArray) => {
  choices = newArray;
  console.log(choices);
  console.log(newArray);
  };

  const detailsBuilder = (messagesArray) => {
    let domString = '';
    messagesArray.forEach((message) => { //this turns pets/getpetz into a new array character
    //    domString +=   `<div class="card  mb-3 bg-light" style="width: 18rem;">`
       domString +=   `<div class="ml-5 mr-5">`
       domString +=   `<div class="d-flex justify-content-between">`
       domString +=     `<div class="mt-4">`
       domString +=         `<h3>${message.name}</h3>`
       domString +=     `</div>`
       domString +=     `<div>`
       domString +=         `<h5>${message.message}   ${message.createdAt}</h5>`
    //    domString +=         `<p>${message.createdAt}</p>`
       domString +=     `</div>`
       domString +=     `<div class"mb-4"> `      
       domString +=         `<button type="button" class="btn btn-success">EDIT</button>`
       domString +=         `<button type="button" class="btn btn-warning">DELETE</button>`
       domString +=     `</div>`
       domString +=  `</div>`
       domString +=  `</div>`
    });
    printToDom(domString);
    // sortEvents();
  };


  export {setCharacters,detailsBuilder,choices}