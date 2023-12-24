function rozpocznijGre() {
    // Schowaj start-container i pokaż game-container
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    // Tutaj możesz dodać logikę dla pierwszego zadania
  }

function otworzPrezent() {
    // Schowaj start-container i pokaż game-container
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('otworzPrezent').style.display = 'block';

    // Tutaj możesz dodać logikę dla pierwszego zadania
  }



  
function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  function shuffle() {
  //Use nested loops to access each cell of the 3x3 grid
  for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
     for (var column=1;column<=3;column++) { //For each column in this row
    
      var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
      var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
       
      swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
    } 
  } 
  }
  
  function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;

    // Sprawdzanie, czy wszystkie kafelki są na swoich miejscach
    var tilesInOrder = true;
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {
            var currentCell = document.getElementById("cell" + i + j);
            var currentTile = currentCell.className;
            if (currentTile !== "tile" + (3 * (i - 1) + j)) {
                tilesInOrder = false;
                break;
            }
        }
        if (!tilesInOrder) {
            break;
        }
    }

    if (tilesInOrder) {
        // Wyświetlenie powiadomienia, np. przy użyciu alert
        // alert("Gratulacje! Układanka ułożona poprawnie!");
        // document.getElementById('nextLevel').style.display = 'none';
        document.getElementById('nextLevel').style.display = 'block';
        return;
    }



    if (tile!="tile9") { 
         //Checking if white tile on the right
         if (column<3) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         //Checking if white tile is below
         if (row<3) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
    
  }


// BLOKADA interakcji na stronie

// function delayedExecution() {
//     // Ustawienie opóźnienia na 3000 milisekund (czyli 3 sekundy)
//     setTimeout(shuffle, 2500);
// }

// // Funkcja wstrzymująca interakcje na stronie przez określony czas
// function disableInteractionsForSeconds(seconds) {
//     // Utwórz warstwę z nakładką
//     var overlay = document.createElement('div');
//     overlay.style.position = 'fixed';
//     overlay.style.top = '0';
//     overlay.style.left = '0';
//     overlay.style.width = '100%';
//     overlay.style.height = '100%';
//     overlay.style.background = 'rgba(0, 0, 0, 0)'; // Przezroczyste tło
//     overlay.style.zIndex = '9999';

//     // Dodaj warstwę z nakładką do body
//     document.body.appendChild(overlay);

//     // Po określonym czasie usuń warstwę z nakładką
//     setTimeout(function() {
//         overlay.parentNode.removeChild(overlay);
//     }, seconds * 1000);
// }

// // Użycie funkcji do wstrzymania interakcji na stronie przez 3 sekundy
// disableInteractionsForSeconds(3);

