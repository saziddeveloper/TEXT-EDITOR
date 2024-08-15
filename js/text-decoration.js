// text-decoration-field


// Step-1: Get input field and the buttons
const textInput = document.getElementById('textInput');
const toggleBoldBtn = document.getElementById('toggleBoldBtn');
const toggleItalicBtn = document.getElementById('toggleItalicBtn');
const toggleUnderlineBtn = document.getElementById('toggleUnderlineBtn');
const toggleThroughBtn = document.getElementById('toggleThroughBtn');

// Step-2: Track the current state (bold, italic, underline, through)
let isBold = false;
let isItalic = false;
let isUnderline = false;
let isThrough = false;

// Helper function to update text decorations
function updateTextDecorations() {
    let decorations = [];
    
    if (isUnderline) {
        decorations.push('underline');
    }
    if (isThrough) {
        decorations.push('line-through');
    }
    
    textInput.style.textDecoration = decorations.join(' ');
    textInput.style.fontWeight = isBold ? 'bold' : 'normal';
    textInput.style.fontStyle = isItalic ? 'italic' : 'normal';
}

// Step-3: Add event listeners to the buttons
toggleBoldBtn.addEventListener('click', function(event) {
    event.preventDefault();
    isBold = !isBold;
    updateTextDecorations();
});

toggleItalicBtn.addEventListener('click', function(event) {
    event.preventDefault();
    isItalic = !isItalic;
    updateTextDecorations();
});

toggleUnderlineBtn.addEventListener('click', function(event) {
    event.preventDefault();
    isUnderline = !isUnderline;
    updateTextDecorations();
});

toggleThroughBtn.addEventListener('click', function(event) {
    event.preventDefault();
    isThrough = !isThrough;
    updateTextDecorations();
});
