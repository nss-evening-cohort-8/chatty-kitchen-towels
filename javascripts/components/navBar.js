import{choices} from "./string.js";

const inputString = () => {
    const userInput = document.getElementById('input-field');
    let messageBox = document.getElementById('message-box');
    inputField.addEventListener('keypress', (e)=> {
        if(e.keyCode===13){
          messageBox.innerHTML = userInput.value;
        
        }
    })
}
inputString();