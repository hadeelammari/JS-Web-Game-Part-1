//part 3 of the activity request refactoring the code to use the newImage function to create the images 
//so the code to create both the greenCharacter and the pine tree should have been replaced with a call to the newImage function

//The following should have been replaced with newImage('assets/green-character.gif', 100, 100)
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

//The following should have been replaced with newImage('assets/pine-tree.png', 450, 200)
let PineTree = document.createElement ('img')
PineTree.src = 'assets/pine-tree.png'
PineTree.style.position = 'fixed'
PineTree.style.left = '450px'
PineTree.style.bottom = '200px'
document.body.append(PineTree)


function newImage (a,b,c){
    let newImage = document.createElement('img')
    newImage.src = a
    newImage.style.position = 'fixed'
    newImage.style.left = b
    newImage.style.bottom = c
    document.body.append(newImage)

    //There is no requirement for removing images, only items 
    newImage.addEventListener('dblclick', function()
    {
        newImage.remove()
    })
}

newImage('assets/tree.png', "200px", "300px")
newImage('assets/pillar.png', "350px", "100px")
newImage('assets/crate.png', "150px","200px")
newImage('assets/well.png', "500px", "425px")
newImage('assets/sheild.png',"165px","185px")
newImage('assets/staff.png', "600px", "100px")

//Part 5 of the activity request creating a function newItem that will create new items and that includes a dblclick event listener.
//There should be 3 items created using this function sword.png, shield.png, and staff.png
let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})



function background(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

background('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
background('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)
