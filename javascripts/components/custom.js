// Setting Options Results DIV to "theme" //
// Logic copied from options.js //
let theme = document.getElementById('optionsResults')

// Setting for Additional Theme Options //
let bumbleTheme = document.getElementById('bumbleBee')
let tinderTheme = document.getElementById('tinderRed')
let plentyTheme = document.getElementById('plentyBlue')
let matchTheme = document.getElementById('matchOrange')

const untick = () => {
    $('#closeButton').click(function (e) {
        $('input:checked').removeAttr('checked');
        e.preventDefault();
    });
    untick();
};

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
    else {
        theme.className = 'main'
    }
}

// Event Listeners //
bumbleTheme.addEventListener('click', customTheme);
tinderTheme.addEventListener('click', customTheme);
plentyTheme.addEventListener('click', customTheme);
matchTheme.addEventListener('click', customTheme);

export { customTheme, untick }