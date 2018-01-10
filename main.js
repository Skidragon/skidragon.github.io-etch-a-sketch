const newGridBtn = document.getElementById('new-grid-btn');
const resetBtn = document.getElementById('reset-btn');
const gridContainer = document.getElementById('grid-container');

function createGridItem() {
  let gridItem = document.createElement('div');
  gridItem.classList.add('default-grid-item');
  return gridItem;
}

function createTracks(numOfItems) {
  let track = document.createElement('div');
  track.classList.add('default-track');
  for (let i = 0; i < numOfItems; i++) {
    track.appendChild(createGridItem());
  }
  return track;
}

function createGrid(numOfItems) {
  for (let i = 0; i < numOfItems; i++) {
    gridContainer.appendChild(createTracks(numOfItems));
  }
  let gridItems = document.querySelectorAll('.default-grid-item');
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseover', function() {
      gridItems[i].classList.add('light-up');
    });
  }
  resetBtn.addEventListener('click', function() {
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].classList.remove('light-up');
    }
  });
}
createGrid(16); //creates default 16 x 16 grid at the beginning

newGridBtn.addEventListener('click', function() {

  let howManyBlocks = prompt("Grid Size?");
  howManyBlocks = parseInt(howManyBlocks);
  //removes previous grid items
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid(howManyBlocks);
  console.log(gridItems);
});
