

// This function creates a new image and places it at a specified position.
function newImage(url, left, bottom) {
    // Create a new HTML image element.
    let object = document.createElement('img');
    
    // Set the image source to the given URL.
    object.src = url;
    
    // Style the image. It's positioned relative to the browser window.
    object.style.position = 'fixed';
    object.style.left = left + 'px'; // Horizontal position.
    object.style.bottom = bottom + 'px'; // Vertical position.
    
    // Add the image to the document body.
    document.body.append(object);
    
    // Return the created image object.
    return object;
}

// This function creates a new image that can be double-clicked to move it to a fixed location.
function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom);
    
    // Add an event listener for the double-click event on the image.
    object.addEventListener('dblclick', () => {
        // On double-click, move the image to the specified location.
        object.style.left = '612px';
        object.style.bottom = '100px';
    });
}



// This function sets the character's image based on the direction it's facing.
function setCharacterImage(direction) {
    switch (direction) {
        case 'west':
            character.src = './assets/green-character/west.gif';
            break;
        case 'north':
            character.src = './assets/green-character/north.gif';
            break;
        case 'east':
            character.src = './assets/green-character/east.gif';
            break;
        case 'south':
            character.src = './assets/green-character/south.gif';
            break;
        default:
            character.src = './assets/green-character/static.gif';
            break;
    }
}

// Initialize some global variables.
let direction = null;
let character = newImage('assets/green-character.gif', 460, 0); // Create the main character.
let x = 590; // Initial horizontal position.
let y = 100; // Initial vertical position.
let screenMaxX = window.innerWidth - character.width; // Maximum horizontal position.
let screenMaxY = window.innerHeight - character.height; // Maximum vertical position.



// // Define the visual world.
// let horizon = window.innerHeight / 1.75;
// let heightOfSky = window.innerHeight - horizon;
// let heightOfGrass = horizon;

// // Create tiled images for the sky and grass.
// tile('assets/sky.png', 0, horizon, window.innerWidth / 100, heightOfSky / 100);
// tile('assets/grass.png', 0, 0, window.innerWidth / 100, heightOfGrass / 100);

// [Place other objects using the newImage or newItem function]

// The main game loop. Updates character's position every 1 millisecond.
setInterval(moveCharacter, 1);
