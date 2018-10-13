// Setting Options Results DIV to "theme" //
// Logic copied from options.js //
let theme = document.getElementById('optionsResults')

// Setting for Additional Theme Options //
let bumbleTheme = document.getElementById('bumbleBee')
let tinderTheme = document.getElementById('tinderRed')
let plentyTheme = document.getElementById('plentyBlue')
let matchTheme = document.getElementById('matchOrange')
let callanTheme = document.getElementById('pooJoke')

// const bumbleSwap = () => {
//     const checkBox = document.getElementById('bumbleBee');
//     document.getElementById('body').toggleClass('bumbleTheme');
//     document.getElementById('optionsResults').toggleClass('bumbleTheme');
//     document.getElementById('options').toggleClass('bumbleTheme');
//     document.getElementById('message-box').toggleClass('bumbleTheme');
//     };

// Function to Untick the Additional Theme Box //
const untick = () => {
    const userOptions = document.getElementById('custom');
    const userSelections = document.getElementsByClassName('modalBox');
    if (userSelections.checked === true) {
        userOptions.checked = true
    }
    else {
        (userSelections.checked === false)
        userOptions.checked = false;
    }
}

// Function To Change to Additional Themes if Checked //
const customTheme = () => {
    if (bumbleTheme.checked === true) {
        theme.className = 'bumbleTheme'
    }
    else if
    (tinderTheme.checked === true) {
        theme.className = 'tinderTheme'
    }
    else if
    (plentyTheme.checked === true) {
        theme.className = 'plentyTheme'
    }
    else if
    (matchTheme.checked === true) {
        theme.className = 'matchTheme'
    }
    else if
    (callanTheme.checked === true) {
        theme.className = 'callanTheme'
    }
    else {
        theme.className = 'main'
    }
    untick();
}

const themeChanger = () => {
    const executeThemeChanger = document.getElementById('closeButton')
    executeThemeChanger.addEventListener('click', customTheme);
}

export { themeChanger }