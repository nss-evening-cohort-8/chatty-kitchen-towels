// Dark Scheme Function 
const darkScheme = () => {
    const darkCheckBox = document.getElementById('darkScheme');
    darkCheckBox.addEventListener('click', (e) => {
        if (darkCheckBox.checked) {
            messageArea.style.backgroundColor = "darkgray";
            messageArea.style.color = "white";
        } else {
            messageArea.style.backgroundColor = "white";
            messageArea.style.color = "black";
        }
    })
};
darkScheme();

const largeText = () => {
    const makeBig = document.getElementById("largeText");
    makeBig.addEventListener('click', () => {
    if (largeText.checked){
        messageArea.style.fontSize = "2.0em";  
    }
    else {
        messageArea.style.fontSize = "1.0em";
    }
    })
};
largeText();

export {
    largeText,
    darkScheme
}