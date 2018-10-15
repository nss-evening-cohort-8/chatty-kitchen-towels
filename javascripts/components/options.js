// Setting Options Results div to "text" //
let text = document.getElementById('optionsResults')

// Setting Check Box to "fontSize" //
let fontSize = document.getElementById('text')

// Function To Change Font Size If Checked //
const enlargeText = () => {
    if (fontSize.checked === true) {
        text.style.fontSize = '20px';
    }
    else {
        text.style.fontSize = '14px';
    }
}

// Event Listener For The Text Checkbox //
fontSize.addEventListener('click', enlargeText);

// Setting Options Results DIV to "theme" //
let theme = document.getElementById('optionsResults')

// Setting Theme Check Box to "flipTheme" //
let flipTheme = document.getElementById('theme')

// Function To Flip Theme If Checked //
const switchTheme = () => {
    if (flipTheme.checked === true) {
        theme.className = 'flipTheme'
    }
    else {
        theme.className = 'main'
    }
}

// Event Listener For The Switch ThemeCheckbox //
flipTheme.addEventListener('click', switchTheme);

// Export Functions
export { enlargeText, switchTheme };