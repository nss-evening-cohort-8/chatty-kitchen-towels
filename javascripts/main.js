 import {getMessages} from "../javascripts/Data/data.js"
 import {inputString} from "./components/navBar.js"
 import {enlargeText, switchTheme} from "../javascripts/components/options.js"
//  import {customTheme} from "../javascripts/components/custom.js"


 const initializeApp = () => {
    getMessages();
    enlargeText();
    switchTheme();
    inputString();
    // customTheme();
 }
 initializeApp();