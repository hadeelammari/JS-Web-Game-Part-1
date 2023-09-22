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
    
function newImage(url, leftlocation, bottomlocation) {
    let imageObject = document.createElement('img'); 
    imageObject.src = url;
    imageObject.style.position = 'fixed';
    imageObject.style.left = leftlocation;
    imageObject.style.bottom = bottomlocation;
    document.body.append(imageObject); // Use the correctly cased variable name here
}

newImage('assets/boulder.png', '32px', '487px');
newImage('assets/crate.png', '286px', '115px');
newImage('assets/grass.png', '166px', '310px');
newImage('assets/green-character.gif', '422px', '290px');
newImage('assets/log.png', '113px', '25px');
newImage('assets/pillar.png', '500px', '21px');
newImage('assets/pillar.png', '425px', '21px');
newImage('assets/pillar.png', '375px', '21px');
newImage('assets/pillar.png', '495px', '21px');
newImage('assets/pillar.png', '495px', '21px');
newImage('assets/pillar.png', '495px', '21px');
newImage('assets/pine-tree.png', '87px', '378px');
newImage('assets/red-character.gif', '256px', '172px');
newImage('assets/rock.png', '308px', '458px');
newImage('assets/shield.png', '417px', '226px');
newImage('assets/staff.png', '375px', '324px');

newImage('assets/tree.png', '64px', '252px');
newImage('assets/well.png', '481px', '33px');


let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})
