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
};

function editChange(bio) {
  let outputEl = document.getElementById(bio);
  getFocus();
  let fieldEl = document.getElementById("input-field");
  fieldEl.addEventListener("keyup", function (event) {
  })
  console.log(outputEl);
  // setAsVarable(outputEl);
 window.value = outputEl;
};

// let setAsVarable = (varableToSet) => {
//   let x = varableToSet;
//   console.log(x);
//   return x;
// }

let findElement = () => {
  window.value.innerHTML = event.target.value;
  clearInput();
  console.log(window.value);
};

export { messEdit, findElement}