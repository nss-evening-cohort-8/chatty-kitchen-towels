import {choices} from "../components/string.js";

function getFocus() {
  document.getElementById("input-field").focus();
}

let isEditButtonClicked = false;

const messEdit = () => {
  const editButtons = document.getElementsByClassName("newMessage1");
  for (let i = 0; i < editButtons.length; i++) {
    const element = editButtons[i];
    element.addEventListener("click", (e) => {
      isEditButtonClicked= true;
      let buttonClickedId = e.target.parentNode.parentNode.childNodes[1].childNodes[0].id;
      editChange(buttonClickedId);
      return buttonClickedId;
    })
  }
}

function editChange(bio) {
  // bio is grabbing message ID
  if(isEditButtonClicked){
    document.getElementById("input-field").value = '';
    let outputEl = document.getElementById(bio);
    getFocus();
    let fieldEl = document.getElementById("input-field");
    fieldEl.addEventListener("keypress", function (event) {
      if(event.keyCode === 13){
        // grabbing message ID sosubstring is removing last character of messageID
        let grabMessageId = bio.substring(0, bio.length - 1);
        let result = choices.find(x => {
          return x.messageId === grabMessageId;
        });
        let index1 = choices.findIndex(z => {
          return z.messageId === grabMessageId;
        })
        outputEl.innerHTML = event.target.value + " " + result.createdAt ;
      
        // is updating value of edited message by ID
        result.message = event.target.value;
        // removing object at index1 and replacing with new value
        choices.splice(index1, 1, result);
        document.getElementById("input-field").value = '';
        isEditButtonClicked = false;
      }
    })
  }
};

export { messEdit, isEditButtonClicked }