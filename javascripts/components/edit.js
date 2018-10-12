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
            return buttonClickedId; // I don't think I have to put this here
          })
        }
      }

      function editChange(bio) {
        document.getElementById("input-field").value = '';
        let outputEl = document.getElementById(bio); //this needs to be the div of input
        getFocus(); // may need to move this down a few
        let fieldEl = document.getElementById("input-field");// this is getting what is put in the inputfield
        fieldEl.addEventListener("keypress", function (event) {
            outputEl.innerHTML = event.target.value
        })
        };

export {messEdit}



