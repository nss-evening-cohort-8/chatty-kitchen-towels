import { printToDom } from "./helpers/util.js";

// Dark Scheme Function 
const darkScheme = () => {
    const darkCheckBox = document.getElementById('darkScheme');
    darkCheckBox.addEventListener('click', (e) => {
        if (darkCheckBox.checked) {
            message-box.style.backgroundColor = "darkgray";
            message-box.style.color = "white";
        } else {
            message-box.style.backgroundColor = "white";
            message-box.style.color = "black";
        }
    })
};
darkScheme();

const largeText = () => {
    const makeBig = document.getElementById("largeText");
    makeBig.addEventListener('click', () => {
    if (largeText.checked){
        message-box.style.fontSize = "2.0em";  
    }
    else {
        message-box.style.fontSize = "1.0em";
    }
    })
};
largeText();

export {
    largeText,
    darkScheme
}