//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)

//let pineTree = document.createElement('img')
//pineTree.src = 'assets/pine-tree.png'
//pineTree.style.position = 'fixed'
//pineTree.style.left = '450px'
//pineTree.style.bottom = '200px'
//document.body.append(pineTree)

function newImage(position, gif, left, bottom){
let image = document.createElement('img')
image.src = gif
image.style.position = 'fixed'
image.style.left = left + 'px'
image.style.bottom = bottom + 'px'
document.body.append(image)
return image
}
function newImage(position, gif, left, bottom){
    
    image.addEventlistener ('click', function(){
        image.remove()
    })
}

newImage ('assets/tree.png', 200,300 )
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png',500, 425)
newImage('assets/green-character.gif', 100, 100)
newImage('assets/sword.png', 500, 405)
newImage('assets/shield.png', 165, 185)
newImage('assets/staff.png', 600, 100)