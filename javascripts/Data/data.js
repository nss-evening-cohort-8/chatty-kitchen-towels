import {setCharacters,detailsBuilder,choices} from '../components/string.js'

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText); 
    setCharacters(data.messages);
    detailsBuilder(choices)
}

function executeThisCodeIfXhrFails () {
    console.log("Shit don't do Good");
}

const getMessages = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error',executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/names.json'); 
    myRequest.send();
};

export {getMessages};