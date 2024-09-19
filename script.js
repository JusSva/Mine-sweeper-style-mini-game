//Need to also add labels for each row and column

//Creating the grid and the ability to change the background color of each square   
cellColor = 'white'
text = ''
function createGrid(rows, cols) {
    gridContainer.classList.add('grid')
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => {
                // Handle click event (e.g., change cell color)
                if (cellColor === 'white') {
                    cellColor = 'chartreuse'
                    //text = 'Player'
                } else if (cellColor === 'chartreuse') {
                    cellColor = 'blueviolet'
                    //text = 'Monster'
                } else if (cellColor === 'blueviolet') {
                    cellColor = 'red'
                    //text = 'Trap'
                } else if (cellColor === 'red') {
                    cellColor = 'grey'
                    //text = 'Miscelanious'
                } else if (cellColor === 'grey') {
                    cellColor = 'white'
                    text = ''
                }
                cell.style.backgroundColor = cellColor;
                cell.innerHTML = text;
            });
            container.appendChild(cell);
        }
        container.appendChild(document.createElement('br')); // Add line break after each row
    }
}


let container = document.getElementById('gridContainer');

//Gets the data that the user has input and uses it to generate the desired grid
let xLength, yLength;
document.getElementById('generateGrid').addEventListener("click", function (event) {
    event.preventDefault();
    xLength = document.getElementById('xSize').value;
    yLength = document.getElementById('ySize').value;
});

function buttonClick() {
    createGrid(xLength, yLength);
};
const button = document.querySelector('button');
button.addEventListener('click', buttonClick);

//Creating the tokens for the various things that could be seen on the board
class token {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
}

const player = new token ('player', 'chartreuse')
const monster = new token('monster', 'blueviolet')
const trap = new token('trap', 'red')
const misc = new token('miscelanious', 'grey')

const tokens = [player, monster, trap, misc]

// //She was adding the ships randomly to the computer's board, I will not be doing that just yet, but I will keep it as a note

//function addShipPiece (ship) {
  //  //First it looks for the board that has the id of 'computer'
    //const allBoardBlocks = document.querySelectorAll('#computer div')
  //  //Randomly determines if the ship is horizontal or not
  //  //These two lines could probably be reduced to just one
    //let randomBoolean = Math.random() < 0.5
    //let isHorizontal = randomBoolean
  //  //Determines a "seed" for the random start
    //let randomStartIndex = Math.floor(Math.random() * 100 )

 //   // if it is horizontal, it will check the value of the randomStartIndex and if it is lower than the specified one,
 //   // it will keep it the way that it is, but if it is smaller, the randomStartIndex will be reduced by the length of the specific ship
    //let validStart = isHorizontal ? randomStartIndex <= 100 - ship.length ? randomStartIndex :
      //  100 - ship.length :
      //  //handle vertical
      //  //the same will be done for when the ship is vertical, not horizontal
        //randomStartIndex <= 100 - ship.length * 10 ? randomStartIndex :
         //randomStartIndex - ship.length * 10 + width

    //let shipBlocks = []

//  //This for loop if saving the coordinates of the random ship placements  
    //for (let i = 0; i < ship.length; i++) {
        //if (isHorizontal) {
           //shipBlocks.push(allBoardBlocks[Number(validStart) + i])
        //} else {
            //shipBlocks.push(allBoardBlocks[Number(validStart) + i * 10])
        //}
    //}

//  // this will check if the placement of the ship is valid, meaning it does not circle around the board in some way
    //let valid
    //if (isHorizontal) {
        //shipBlocks.every((_shipBlock, index) =>
            //valid = shipBlocks[0].id % width ! == width - (shipBlocks.length - (index + 1)))
    //} else {
        //shipBlocks.every((_shipBlock, index) => 
            //valid = shipBlocks[0].id < 90 + (width * index +1)    
        //)
    //}

//  // will check if the randomly chosen coordinate is already taken by a ship or not
    //const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains('taken'))

//  // if the randomly chosen position is valid and is not taken, the ship will be placed
    //if (valid && notTaken) {
        //shipBlocks.foeEach(shipBlock => {
            //shipBlock.classList.add(ship.name)
            //shipBlock.classList.add('taken')
        //})
//  // if the chosen position is taken, the code will rerun the same function, until it gets an unocupied position
    //} else {
        //addShipPiece(ship)
    //}
//}

//ships.forEach(ship => addShipPiece(ship))
