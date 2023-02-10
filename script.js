const gridContainer = document.querySelector('#gridContainer');
// make grids
function makeGrids(numGrids = 16) {
    gridContainer.style.gridTemplateColumns = `repeat(${numGrids}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${numGrids}, 1fr)`

    for(let d = 0; d < numGrids * numGrids; d++){
        let grids = document.createElement('div');
        grids.classList.add('grid')
        grids.addEventListener('mouseover', () => {
            grids.classList.add('hoverEffect')
        });
        gridContainer.appendChild(grids)
    };
};

makeGrids();

// set grid button
let setGridButton = document.getElementById('setGrid');
setGridButton.addEventListener('click', () => {
   numGrids = prompt('set grid size from 1 - 100')
   cleargridContainer()
   makeGrids(numGrids)
});

function cleargridContainer() {
    gridContainer.innerHTML =''
}

function reloadgridContainer() {
    cleargridContainer()
    makeGrids()
}

// set clear button
const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', reloadgridContainer)

// set eraser button
const eraserButton = document.getElementById('eraser')