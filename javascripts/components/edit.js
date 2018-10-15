import {choices} from "../components/string.js"
import {detailsBuilder} from "../components/string.js"

let myInput = document.getElementById("input-field");
window.value = '';

function getFocus() {
    document.getElementById("input-field").focus();
}

const messEdit = () => {
    const editButtons = document.getElementsByClassName("newMessage1");
    for (let i = 0; i < editButtons.length; i++) {
        const element = editButtons[i];
        element.addEventListener("click", (e) => {
            let buttonClickedId = e.target.parentNode.parentNode.childNodes[1].childNodes[0].id;
            editChange(buttonClickedId);
            let buttonPath = e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML;
            myInput.value = buttonPath;
        })
    }
}

const clearInput = () => {
    document.getElementById("input-field").value = '';
    document.getElementById("input-field").blur();
};

function editChange(bio) {
    let outputEl = document.getElementById(bio);
    getFocus();
    let fieldEl = document.getElementById("input-field");
    fieldEl.addEventListener("keyup", function(event) {})
    window.value = outputEl;
};

let findElement = () => {
    let gutsEqual = event.target.value;
    let userEdit = window.value.parentElement.parentElement.childNodes[0].childNodes[0].innerHTML;
    let message_id = window.value.parentElement.parentElement.childNodes[1].childNodes[0].id
    let newCleanMessId2 = `${message_id.substring(0, message_id.length-1)}`;
    let createdMessage = {
        messageId: newCleanMessId2,
        name: userEdit,
        message: gutsEqual,
        createdAt: moment().calendar()
    };
    skimFunction(newCleanMessId2, createdMessage);
    // passingCMessage(createdMessage);
    return message_id;
};

let removeID = (idRemove) => {
    let r = 0;
    for (r = 0; r < choices; r++) {
        if (choices[r].messageId === idRemove) {
            delete choices[r];
        }
    }
};

let skimFunction = (varHere, varHere2) => {
    choices.forEach((choice) => {
        let oldId = choice["messageId"];
        if (oldId === varHere) {
            let replaceObj = varHere2;
            let varHere2Id = varHere2.messageId
            choices.unshift(replaceObj)
            detailsBuilder(choices);
            removeID(varHere2);
            // clearInput();
        }
    });


    // let i=0;
    //   for(i=0;i<choices;i++){
    //     if(choices[i].messageId === message_id){
    //     console.log(choices[i]);
    //     };
    //   };

};

export { messEdit, findElement}



