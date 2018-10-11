// Setting Body to "text" //

let text = document.getElementById('optionsResults')

// Setting Check Box to "fontSize" //

let fontSize = document.getElementById('text')

// Function To Change Font Size If Checked //

function enlargeText() {
    if (fontSize.checked === true) {
      text.style.fontSize = '20px'; 
    }
    else {
        text.style.fontSize = '14px'; 
    }
}

// Event Listener For The Checkbox //

// fontSize.onclick = textChecked
fontSize.addEventListener('click', enlargeText);



// Setting Body to "theme" //

let theme = document.getElementById('optionsResults')

// Setting Theme Check Box to "flipTheme" //

let flipTheme = document.getElementById('theme')

// Function To Flip Theme If Checked //

function switchTheme() {
    if (flipTheme.checked === true) {
        theme.className = 'flipTheme'
    }
    else {
        theme.className = 'main'
    }
}

// Event Listener For The Switch ThemeCheckbox //

// fontSize.onclick = textChecked
flipTheme.addEventListener('click', switchTheme);


export {enlargeText, switchTheme};