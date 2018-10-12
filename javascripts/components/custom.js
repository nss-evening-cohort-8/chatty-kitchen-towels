// Setting bumbleBee Check Box to "bumbleTheme" //
let bumbleTheme = document.getElementById('bumbleBee')

// Setting tinderRed Check Box to "tinderTheme" //
let tinderTheme = document.getElementById('tinderRed')

// Setting plentyBlue Check Box to "plentyTheme" //
let plentyTheme = document.getElementById('plentyBlue')

// Setting matchOrange Check Box to "matchTheme" //
let matchTheme = document.getElementById('matchOrange')

// Function To Change to Custom Theme if Checked //
const customTheme = () => {
    if (bumbleTheme.checked === true) {
        bumbleBee.className = 'bumbleTheme'
    }
    else if {
        (tinderTheme.checked === true) {
        tinderRed.className = 'tinderTheme'
    }
    else if {
        (plentyTheme.checked === true) {
        plentyBlue.className = 'plentyTheme'
    }
    else if {
        (matchTheme.checked === true) {
        matchOrange.className = 'matchTheme'
    }
    else {
        theme.className = 'main'
}
]

customTheme.addEventListener('click', );


export {customTheme};