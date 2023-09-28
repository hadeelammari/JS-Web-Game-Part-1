// This function creates a tiled pattern of images.
function tile(url, left, bottom, width, height) {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            // Create a new image for each tile position.
            newImage(url, left + w * 100, bottom + h * 100);
        }
    }
}

// Define the visual world.
let horizon = window.innerHeight / 1.75;
let heightOfSky = window.innerHeight - horizon;
let heightOfGrass = horizon;

// Create tiled images for the sky and grass.
tile('assets/sky.png', 0, horizon, window.innerWidth / 100, heightOfSky / 100);
tile('assets/grass.png', 0, 0, window.innerWidth / 100, heightOfGrass / 100);
