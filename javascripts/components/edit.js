
// function messEdit(messageID) {
//     document.getElementById("input-field").value = '';
//     outputEl = document.getElementById(messageID)
//     let fieldEl = document.getElementById("input-field");
//     fieldEl.addEventListener("keypress", function (event) {
//         outputEl.innerHTML = event.target.value
//     })
//     };

const messEdit = () => {
    // const editButtons = document.getElementsByClassName('newMessage1');
    // const editButtons =
     document.getElementById('message11').addEventListener("click",function(){
         console.log("messEdit Prints")
     });

    // console.log(editButtons);
    // for (let i = 0; i < editButtons.length; i++) {
    //     const element = editButtons[i];
    //         element.addEventListener("click", (e) => {
        
    //         const buttonIClicked = e.target;
    //         const cardToDelete = buttonIClicked.parentNode.parentNode;
    //         cardToDelete.remove();
    //         })
    //  }
    }
    // document.getElementById("message11").addEventListener("click", function(){messEdit()});


export {messEdit}



