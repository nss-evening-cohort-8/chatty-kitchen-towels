
const printToDom = (stringToPrint) => {
    const selectedDiv = document.getElementById("messageArea");
    selectedDiv.innerHTML = stringToPrint;
};

export {printToDom};
