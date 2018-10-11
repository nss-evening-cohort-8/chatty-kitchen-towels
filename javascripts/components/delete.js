


const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('newMessage2');
    console.log(deleteButtons);
    for (let i = 0; i < deleteButtons.length; i++) {
      const element = deleteButtons[i];
      element.addEventListener("click", (e) => {
        // remove card that the button was on
        const buttonIClicked = e.target;
        const cardToDelete = buttonIClicked.parentNode.parentNode;
        cardToDelete.remove();
      })
    }
  }


export {activateDeletes}