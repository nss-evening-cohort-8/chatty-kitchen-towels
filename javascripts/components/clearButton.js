import {choices} from "../components/navBar.js";
import { setCharacters, getmessagez } from "./string.js";

const activateClearButton = () => {
    const clearButton = document.getElementById('clear-button');

      clearButton.addEventListener("click", () => {
        const messageBox = document.getElementById('message-box');
        messageBox.innerHTML = '';
        choices.length=0;
        clearButton.disabled = true;      
      })
    }

export{activateClearButton}