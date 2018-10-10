import {getMessages} from "../Data/data.js"

let choices = [];

const setCharacters = (newArray) => {
  choices = newArray;
  console.log(choices);
  console.log(newArray);
  };

  export {setCharacters}