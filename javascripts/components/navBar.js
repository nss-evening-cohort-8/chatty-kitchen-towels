import{choices} from "./string.js";



let messageBox = document.getElementById('message-box');
const users = document.getElementById('names');

// const selectUsers =()=>{
// const userName = document.querySelector('.user:checked').value;
// console.log(userName);
// }
// selectUsers();

const userName=()=>{
const nameDiv= document.getElementById("names");
const inputCollection = nameDiv.getElementsByTagName("input");
for(let i=0; i< inputCollection.length; i++ ){
    if(inputCollection[i].type==="checkbox"){
        inputCollection[i].addEventListener('click', ()=>{ 
            if(inputCollection[i].checked){         
                const userName = document.querySelector('.user:checked').value;
                // console.log(userName);
            }
        })
    }
}
}
userName();
    
const inputString = () => {
    const userInput = document.getElementById('input-field');
    userInput.addEventListener('keypress', (e)=> {
        if(e.keyCode===13){
            let value = userInput.value;

        //   messageBox.innerHTML = userInput.value;
        }
    })
}
inputString();



// const getmessagez = ()=>{
//     return messageaArray;
// }
