

// This function updates the character's position based on its current direction.
function moveCharacter() {
    let futureX = x;
    let futureY = y;

    // Update position based on direction.
    if (direction === 'west') futureX = x - 1;
    if (direction === 'north') futureY = y + 1;
    if (direction === 'east') futureX = x + 1;
    if (direction === 'south') futureY = y - 1;

    // Ensure character doesn't go out of screen bounds.
    // if (futureX >= 0 && futureX <= screenMaxX) x = futureX;
    // if (futureY >= 0 && futureY <= screenMaxY) y = futureY;

    let screenMaxX = window.innerWidth - character.offsetWidth;
    let screenMaxY = window.innerHeight - character.offsetHeight;

    if (futureX >= 0 && futureX <= screenMaxX) {
        x = futureX;
    }

    // so close, but he still walks off the bottom of the page


    if (futureY >= 0 && futureY <= window.innerHeight - character.offsetHeight) y = futureY;


    // Update the character's visual position and z-index.
    character.style.left = x + 'px';
    character.style.bottom = y + 'px';
    character.style.zIndex = y; // zIndex ensures objects "behind" the character appear correctly.
}

// Event listeners for arrow key presses.
document.addEventListener('keydown', (event) => {
    // Set the direction based on arrow key pressed.
    if (event.key === 'ArrowLeft') {
        direction = 'west';
        setCharacterImage(direction);
    }
    if (event.key === 'ArrowUp') {
        direction = 'north';
        setCharacterImage(direction);
    }
    if (event.key === 'ArrowRight') {
        direction = 'east';
        setCharacterImage(direction);
    }
    if (event.key === 'ArrowDown') {
        direction = 'south';
        setCharacterImage(direction);
    }
});

// Reset direction when arrow key is released.
document.addEventListener('keyup', () => {
    direction = null;
    setCharacterImage();
});
// The main game loop. Updates character's position every 1 millisecond.
setInterval(moveCharacter, 1);
