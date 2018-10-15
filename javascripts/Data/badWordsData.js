import { badWords, setBadWords, getBadWords} from '../components/badWords.js'

function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
    setBadWords(data.badWords);
    badWords(getBadWords())
}

function executeThisCodeIfXhrFails() {
    console.log("Shit don't do Good");
}

const getNotes = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/badWords.json');
    myRequest.send();
};

export { getNotes };