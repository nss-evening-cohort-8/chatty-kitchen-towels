import { printToDom } from "../helpers/util.js"
import { activateDeletes } from "./delete.js"
import { messEdit } from "../components/edit.js"

let choices = [];

const setCharacters = (newArray) => {
  choices = newArray;
  console.log(choices);
  console.log(newArray);
};

const getmessagez = () => {
  return choices;
}

const detailsBuilder = (messagesArray) => {
  let domString = '';
  messagesArray.forEach((message) => {
    domString += `<div id="${message.messageId}">`
    domString += `<div class="d-flex justify-content-between ml-5 mr-5 align-items-center">`
    domString += `<div class="mt-4">`
    domString += `<h3>${message.name}</h3>`
    domString += `</div>`
    domString += `<div>`
    domString += `<h5 id="${message.messageId}3">${message.message} ${message.createdAt}</h5>`
    domString += `</div>`
    domString += `<div class"mb-4"> `
    domString += `<button id="${message.messageId}1" type="button" class="newMessage1 btn btn-info">EDIT</button>`
    domString += `<button id="${message.messageId}2" type="button" class="newMessage2 btn btn-light">DELETE</button>`
    domString += `</div>`
    domString += `</div>`
    domString += `</div>`
  });
  printToDom(domString);
  activateDeletes();
  messEdit();
};

export { setCharacters, detailsBuilder, choices, getmessagez }