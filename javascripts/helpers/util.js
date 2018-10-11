
const printToDom = (stringToPrint) => {
    const selectedDiv = document.getElementById("message-box");
    selectedDiv.innerHTML = stringToPrint;
};

export {printToDom};
