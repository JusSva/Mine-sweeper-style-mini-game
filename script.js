//Need to also add labels for each row and column
function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => {
                // Handle click event (e.g., change cell color)
                cell.style.backgroundColor = 'blue';
            });
            cell.addEventListener('click', () => {
                // Handle click event (e.g., change cell color)
                cell.style.backgroundColor = 'red';
            });
            //Could add event listeners here, waiting for a drag, drop or click
            container.appendChild(cell);
        }
        container.appendChild(document.createElement('br')); // Add line break after each row
    }
}

let container = document.getElementById('gridContainer');

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


