// text-alignment

// Step-1: Get the alignment buttons
const alignLeftBtn = document.getElementById('toggleAlignLeftBtn');
const alignCenterBtn = document.getElementById('toggleAlignCenterBtn');
const alignRightBtn = document.getElementById('toggleAlignRightBtn');
const alignJustifyBtn = document.getElementById('toggleAlignJustifyBtn');

// Step-2: Track the current alignment state
let textAlign = 'left'; // Default alignment

// Helper function to update text alignment
function updateTextAlignment() {
    textInput.style.textAlign = textAlign; // Update text alignment
}

// Step-3: Add event listeners to the alignment buttons
alignLeftBtn.addEventListener('click', function(event) {
    event.preventDefault();
    textAlign = 'left';
    updateTextAlignment();
});

alignCenterBtn.addEventListener('click', function(event) {
    event.preventDefault();
    textAlign = 'center';
    updateTextAlignment();
});

alignRightBtn.addEventListener('click', function(event) {
    event.preventDefault();
    textAlign = 'right';
    updateTextAlignment();
});

alignJustifyBtn.addEventListener('click', function(event) {
    event.preventDefault();
    textAlign = 'justify';
    updateTextAlignment();
});