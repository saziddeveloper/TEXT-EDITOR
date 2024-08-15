// Get elements
const inputFontSize = document.getElementById('inputFontSize');
const toggleCaseBtn = document.getElementById('toggleCaseBtn');
const myDropdown = document.getElementById('myDropdown');
const inputFontColor = document.getElementById('inputFontColor');

// Initial status
let isUpperCase = false;
textInput.style.fontSize = '18px'; // Default font size
textInput.style.fontFamily = 'sans-serif'; // Default font family
textInput.style.color = 'black'; // Default font color

// Font Size Adjustment
inputFontSize.addEventListener('input', function() {
    const fontSize = inputFontSize.value + 'px';
    textInput.style.fontSize = fontSize;
});

// Toggle Uppercase/Lowercase
toggleCaseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (isUpperCase) {
        textInput.style.textTransform = 'lowercase';
    } else {
        textInput.style.textTransform = 'uppercase';
    }
    isUpperCase = !isUpperCase;
});

// Font Family Change
myDropdown.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const selectedFont = event.target.getAttribute('data-font');
        textInput.style.fontFamily = selectedFont;
    }
});

// Text Color Change
inputFontColor.addEventListener('input', function() {
    textInput.style.color = inputFontColor.value;
});

// Toggle dropdown visibility
function toggleDropdown() {
    myDropdown.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}