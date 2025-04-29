const inputField = document.getElementById('userInput');
const glyphDisplay = document.getElementById('glyphDisplay');

// Update glyph display live
inputField.addEventListener('input', () => {
    glyphDisplay.textContent = inputField.value;
});

// Watch clipboard changes
async function checkClipboard() {
    try {
        const clipboardItems = await navigator.clipboard.read();
        for (const item of clipboardItems) {
            if (item.types.includes('image/png')) {
                console.log('Screenshot detected!');
                triggerFade();
            }
        }
    } catch (e) {
        console.log('Clipboard access error or permission denied');
    }
    setTimeout(checkClipboard, 1000);
}

// Trigger fade effect
function triggerFade() {
    glyphDisplay.classList.add('faded');
}

// Start monitoring
checkClipboard();
