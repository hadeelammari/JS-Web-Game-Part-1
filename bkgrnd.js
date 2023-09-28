// This function creates a tiled pattern of images.
function tile(url, left, bottom, width, height) {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            // Create a new image for each tile position.
            newImage(url, left + w * 100, bottom + h * 100);
        }
    }
}