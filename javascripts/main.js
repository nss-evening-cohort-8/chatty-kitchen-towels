 import {getMessages} from "../javascripts/Data/data.js"
 import {enlargeText, switchTheme} from "../javascripts/components/options.js"


 const initializeApp = () => {
    getMessages();
    enlargeText();
    switchTheme();
 }
 initializeApp();