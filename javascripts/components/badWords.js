// Setting Bad Words To An Array //
let words = [];
 const setBadWords = (newArray) => {
    words = newArray;
};
 const getBadWords = () => {
    return words;
}

// Function For The Bad Words Filter //
const badWords = () => {
    let userInput = document.getElementById('input-field');
    const note = userInput.value;
    for (let i = 0; i < words.length; i++) {
        if(note.includes(words[i])){
            const alertWord = words[i];
            alert("You unlocked " + alertWord + " well done, foul mouth!");
        }
    }
}

// Export Functions //
export { badWords, setBadWords, getBadWords };