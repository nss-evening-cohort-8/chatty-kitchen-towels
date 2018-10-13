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
      return buttonClickedId;
    })
  }
}

function editChange(bio) {
  document.getElementById("input-field").value = '';
  let outputEl = document.getElementById(bio);
  getFocus();
  let fieldEl = document.getElementById("input-field");
  fieldEl.addEventListener("keypress", function (event) {
    outputEl.innerHTML = event.target.value
  })
};

export { messEdit }