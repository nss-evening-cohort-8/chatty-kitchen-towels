 import {getMessages} from "../javascripts/Data/data.js"
 import { largeText } from "./themes/darktheme.js"
 import { darkScheme } from "./themes/darktheme.js"
 import {inputString} from "./components/navBar.js"

 const initializeApp = () => {
     getMessages();
     inputString();
    //  largeText();
    //  darkScheme();

 }
 initializeApp();