// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '100px'
// pineTree.style.bottom = '100px'
// document.body.append(pineTree)

// 
// I was stuck here for an embarrassingly long time, it turned out to be a capital "O" all along.

// function newImage (url, leftlocation, bottomlocation) {
//     let imageobject = document. createElement ('img')
//     imageobject.src = url
//     imageobject.style.position = 'fixed'
//     imageobject.style.left = leftlocation
//     imageobject.style.bottom = bottomlocation
//     document. body. append (imageObject)
// }

//     newImage('assets/green-character.gif', '100px', '100px')
    
// function newImage(url, leftlocation, bottomlocation) {
//     let imageObject = document.createElement('img'); 
//     imageObject.src = url;
//     imageObject.style.position = 'fixed';
//     imageObject.style.left = leftlocation;
//     imageObject.style.bottom = bottomlocation;
//     document.body.append(imageObject); // Use the correctly cased variable name here
// }

// newImage('assets/boulder.png', '32px', '487px');
// newImage('assets/crate.png', '286px', '115px');
// newImage('assets/grass.png', '166px', '310px');
// newImage('assets/green-character.gif', '422px', '290px');
// newImage('assets/log.png', '113px', '25px');
// newImage('assets/pillar.png', '500px', '21px');
// newImage('assets/pillar.png', '425px', '21px');
// newImage('assets/pillar.png', '375px', '21px');
// newImage('assets/pillar.png', '495px', '21px');
// newImage('assets/pillar.png', '495px', '21px');
// newImage('assets/pillar.png', '495px', '21px');
// newImage('assets/pine-tree.png', '87px', '378px');
// newImage('assets/red-character.gif', '256px', '172px');
// newImage('assets/rock.png', '308px', '458px');
// newImage('assets/shield.png', '417px', '226px');
// newImage('assets/staff.png', '375px', '324px');

// newImage('assets/tree.png', '64px', '252px');
// newImage('assets/well.png', '481px', '33px');


// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })
// Define the tile function that creates a grid of images.
// The image at the given URL will be placed in a grid pattern with the specified width and height.
function tile(url, left, bottom, width, height){
    // Loop for the height of the grid.
    for(let h = 0; h < height; h++){
        // Nested loop for the width of the grid.
        for(let w = 0; w < width; w++){
            // Call the newImage function to place an image at the calculated position.
            // Each image is positioned 100 pixels apart horizontally and vertically.
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

// This function creates and places a new image on the page.
function newImage(url, left, bottom){
    // Create a new image element.
    let object = document.createElement('img')
    object.src = url  // Set the source of the image.
    object.style.position = 'fixed'  // Set the image to a fixed position.
    object.style.left = left + 'px'  // Set the horizontal position.
    object.style.bottom = bottom + 'px'  // Set the vertical position.
    document.body.append(object)  // Append the image to the body of the document.
    return object  // Return the image element.
}

// Calculate the position of the horizon and the heights of the sky and grass sections.
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

// Use the tile function to create a sky and grass background.
tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

// ... [rest of the code remains unchanged]

// Place individual images on the page at specified positions.
newImage('assets/green-character.gif', 590, 100)
newImage('assets/tree.png', 777, 250)
newImage('assets/tree.png', 811, 200)
newImage('assets/tree.png', 866, 150)
newImage('assets/pillar.png', 700, 100)
newImage('assets/pillar.png', 900, 100)
newImage('assets/green-character1.gif', 845, 150)
newItem('assets/staff.png', 813, 160)
newImage('assets/pine-tree.png', 450, 460)
newImage('assets/pine-tree.png', 34, 433);
newImage('assets/pine-tree.png', 176, 422);
newImage('assets/pine-tree.png', 82, 322);
newImage('assets/pine-tree.png', 155, 345);
newImage('assets/pine-tree.png', 333, 366);
newImage('assets/pine-tree.png', 200, 234);
newImage('assets/pine-tree.png', 55, 166);
newImage('assets/pine-tree.png', 162, 377);
newImage('assets/pine-tree.png', 145, 185);
newImage('assets/pine-tree.png', 90, 50);

newImage('assets/well.png', 699, 425)
newImage('assets/crate.png', 788, 444)


// Place the sword to the right of the green character.
newItem('assets/sword.png', 670, 100)  // Adjusted left position

// Place the shield to the left of the green character.
newItem('assets/shield.png', 500, 100)  // Adjusted left position




// 

// This function creates a new interactive item on the page.
function newItem(url, left, bottom){
    // Create and place a new image using the newImage function.
    let object = newImage(url, left, bottom)
    // Add an event listener to the image.
    // When the image is double-clicked, its position is changed to (670, 100).
    object.addEventListener('dblclick', () => {
        object.style.left = '612px';
        object.style.bottom = '100px';
    })
}

