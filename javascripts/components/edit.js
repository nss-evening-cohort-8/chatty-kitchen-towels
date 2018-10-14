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
      myInput.value = e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML ;
    })
  }
}

function editChange(bio) {
  document.getElementById("input-field").value = '';
  let outputEl = document.getElementById(bio);
  getFocus();
  let fieldEl = document.getElementById("input-field");
  fieldEl.addEventListener("keyup", function (event) {
  })
 window.value = outputEl;
};

let findElement = () => {
  window.value.innerHTML = event.target.value;
  // could take this information and append the array and then reprint it?
};

export { messEdit, findElement}