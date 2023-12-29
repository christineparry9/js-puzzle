// todo
// Select all the tiles
const gameTable = document.querySelector('#game');
const gameTiles = gameTable.querySelectorAll('td');

// Check if a tile has an empty neighbour
const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
    (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
    (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
    (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
};

// Move the tile
const moveTile = (element) => {
  // Select the empty place
  const emptyTile = document.querySelector('.empty');
  emptyTile.innerHTML = element.innerHTML;
  emptyTile.classList.remove('empty');
  element.innerHTML = '';
  element.classList.add('empty');
};

const winTable = document.querySelector('#win');
const winTiles = winTable.querySelectorAll('td');

const checkIfTablesAreIdentical = () => {
  for (let i = 0; i < gameTiles.length; i++) {
    if (gameTiles[i].innerHTML !== winTiles[i].innerHTML) {
      return false;
    }
  }
  return true;
};

// Usage example
if (checkIfTablesAreIdentical()) {
  alert("You win!");
} else {
  console.log("The tables are not identical.");
}


// Add event listener on each tile
gameTiles.forEach((tile) => {
  tile.addEventListener('click', (e) => {
    if (canMove(tile)) {
      moveTile(tile);
      e.preventDefault
      if (checkIfTablesAreIdentical()) {
        console.log("The tables are identical!");
      } else {
        console.log("The tables are not identical.");
      }
    }
  });
});
