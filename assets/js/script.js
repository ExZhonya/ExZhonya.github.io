const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const title = document.querySelector('.title');
const gifImage = document.querySelector('.gif-image');
const buttons = document.querySelector('.buttons');

// Original state
let isYesClicked = false;

yesBtn.addEventListener('click', () => {
    if (!isYesClicked) {
        // Change the GIF
        gifImage.src = 'assets/images/mafu-mafumafu.gif'; // Replace with your new GIF path
        
        // Update the title
        title.textContent = "Thank You! I love you sm!!";
        title.style.color = "#ff69b4"; // Pink color
        title.style.fontSize = "28px";
        
        // Remove the buttons
        buttons.style.display = 'none';
        
        isYesClicked = true;
    }
});

// Keep the existing No button functionality
noBtn.addEventListener('click', () => {
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize) || 18;
    const newSize = currentSize * 1.2;
    yesBtn.style.fontSize = `${newSize}px`;
    
    yesBtn.style.transform = `scale(1.1)`;
    setTimeout(() => {
        yesBtn.style.transform = `scale(1)`;
    }, 100);
});

noBtn.addEventListener('mouseup', () => {
    yesBtn.style.transform = `scale(1)`;
});
