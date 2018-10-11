import{choices} from "./string.js";



let messageBox = document.getElementById('message-box');
const users = document.getElementById('names');

const selectUsers =()=>{
const userName = document.querySelector('.user:checked').value;
console.log(userName);
}
selectUsers();
    

const inputString = () => {
    const userInput = document.getElementById('input-field');
    userInput.addEventListener('keypress', (e)=> {
        if(e.keyCode===13){
            console.log('u hit enter');
        //   messageBox.innerHTML = userInput.value;
        }
    })
}
inputString();

// const getmessagez = ()=>{
//     return messageaArray;
// }
