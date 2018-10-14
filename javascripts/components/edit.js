let myInput = document.getElementById("input-field");
window.value= '';
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
      let buttonPath = e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML ;
      myInput.value = buttonPath;
      //  return myInput.value;
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
  fieldEl.addEventListener("keyup", function (event) {
  })
  console.log(outputEl);
 window.value = outputEl;
};

let findElement = () => {
  // window.value.innerHTML = event.target.value;
  let gutsEqual = window.value.innerHTML
  let userEdit = window.value.parentElement.parentElement.childNodes[0].childNodes[0].innerHTML;
  let message_id = window.value.parentElement.parentElement.childNodes[1].childNodes[0].id
  let createdMessage = { messageId: message_id, name: userEdit, message: gutsEqual, createdAt: moment().calendar() };
  
  
  // clearInput();
  // console.log(window.value);
};

export { messEdit, findElement}