import {choices} from "../components/navBar.js";
import { setCharacters, getmessagez } from "./string.js";

const activateClearButton = () => {
    const clearButton = document.getElementById('clear-button');

      clearButton.addEventListener("click", () => {
        const messageBox = document.getElementById('message-box');
        messageBox.innerHTML = '';
        // choices.length=0;
        // grabbing prepopulate messages
        let originalArray = choices.slice(choices.length-6, choices.length);
        setCharacters(originalArray);
        getmessagez(); 
        clearButton.disabled = true;      
      })
    }

export{activateClearButton}