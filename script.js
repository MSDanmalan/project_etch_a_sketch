const container = document.querySelector('#container');

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
