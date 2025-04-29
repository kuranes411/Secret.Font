const inputField = document.getElementById('userInput');
const glyphDisplay = document.getElementById('glyphDisplay');

// Update glyph display live
inputField.addEventListener('input', () => {
    glyphDisplay.textContent = inputField.value;
});

// Trigger fade effect
function triggerFade() {
    glyphDisplay.classList.add('faded');
    console.log("Screenshot key detected — fading text");
}

// Listen for common screenshot hotkeys
document.addEventListener('keydown', (e) => {
    // Mac screenshot keys
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === '4') {
        triggerFade(); // Cmd+Shift+4 or Ctrl+Shift+4
    }
    // Windows Print Screen key
    if (e.key === 'PrintScreen') {
        triggerFade();
    }
});
