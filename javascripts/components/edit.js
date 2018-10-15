import {choices} from "../components/string.js"
import {detailsBuilder} from "../components/string.js"

let myInput = document.getElementById("input-field");
window.value = '';

function getFocus() {
    document.getElementById("input-field").focus();
}

let removMess = () => {

  for (let i = 1; i < choices.length; i++) {
    console.log(choices[i]);
    // BELOW IS COMPAIRING THE STRING WITH THE EVENT LISTER OF THE DEL
      if(choices[i].messageId === choices[0].messageId){
        choices.splice(i,1);
      }
    }
    detailsBuilder(choices);
    clearInput();
};


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

let skimFunction =(varHere, varHere2) => {
  for(let t=0;t<choices.length;t++){
    // let oldId = choice["messageId"];
    if(varHere === choices[t].messageId ){
      let replaceOb = varHere2;
            // let varHere2Id = varHere2.messageId
            choices.unshift(replaceOb)
            // clearInput();
            return replaceOb;
    };
  };
}

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
    // detailsBuilder(choices);
    removMess();
    console.log(choices);
    return message_id;
};





export { messEdit, findElement}



