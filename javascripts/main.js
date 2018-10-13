 import {getMessages} from "../javascripts/Data/data.js"
 import {inputString} from "./components/navBar.js"
 import {enlargeText, switchTheme} from "../javascripts/components/options.js"
 import {customTheme, untick} from "../javascripts/components/custom.js"
import { activateClearButton } from "./components/clearButton.js";


 const initializeApp = () => {
    getMessages();
    enlargeText();
    switchTheme();
    inputString();
    activateClearButton();
    customTheme();
    untick();
 }
 initializeApp();