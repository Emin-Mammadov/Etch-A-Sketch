function createGrid(size) {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        squareDiv.style.paddingTop = `calc(100% / ${size})`;

        squareDiv.addEventListener('mouseenter', () => {
            squareDiv.style.backgroundColor = 'red'; // Or any other color you prefer
        });

        gridContainer.appendChild(squareDiv);
    }
}

function setGridSize() {
    const newSize = parseInt(prompt('Enter the number of squares per side (max 100):', '16'));
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    createGrid(newSize);
}

document.getElementById('squares-button').addEventListener('click', setGridSize);
createGrid(16); // Create initial 16x16 grid
