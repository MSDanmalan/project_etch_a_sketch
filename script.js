const container = document.querySelector('#container');
// make grids
function makeGrids(numGrids) {
    for(let d = 0; d < numGrids; d++){
        let grids = document.createElement('div');
        grids.classList.add('grid')
        grids.addEventListener('mouseover', () => {
            grids.classList.add('hoverEffect')
        });
        container.appendChild(grids)
    };
};

makeGrids(256);

// set grid button
let setGridButton = document.getElementById('setGrid');
setGridButton.addEventListener('click', () => {
   numGrids = prompt('set grid size from 1 - 100')
   makeGrids(numGrids)
});
