
// function messEdit(messageID) {
//     document.getElementById("input-field").value = '';
//     outputEl = document.getElementById(messageID)
//     let fieldEl = document.getElementById("input-field");
//     fieldEl.addEventListener("keypress", function (event) {
//         outputEl.innerHTML = event.target.value
//     })
//     };

// const messEdit = () => {
//     const editButtons = document.getElementsByClassName("newMessage1");
    
//     editButtons.addEventListener("click",console.log("messEdit Prints"))
         
//     };
        
    const messEdit = () => {
        const editButtons = document.getElementsByClassName("newMessage1");
        console.log('editButtons');
        for (let i = 0; i < editButtons.length; i++) {
          const element = editButtons[i];
          element.addEventListener("click", (e) => {
            // const buttonIClicked = e.target;
            // const cardToDelete = buttonIClicked.parentNode.parentNode;
            // cardToDelete.remove();
          })
        }
      }


export {messEdit}



