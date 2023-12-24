function rozpocznijGre() {
    // Schowaj start-container i pokaż game-container
    document.getElementById('start-container').style.display = 'none';
    // document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'flex';
    document.getElementById('quiz-container').style.flexDirection = 'column' ;
    document.getElementById('quiz-container').style.justifyContent = 'flex-start' ;
    document.getElementById('quiz-container').style.alignItems = 'center'

    // Tutaj możesz dodać logikę dla pierwszego zadania
  }

//   function rozpocznijGre() {
//     // Schowaj start-container i pokaż game-container
//     document.getElementById('start-container').style.display = 'none';
//     document.getElementById('game-container').style.display = 'block';

//     // Tutaj możesz dodać logikę dla pierwszego zadania
//   }

function otworzPrezent() {
    // Schowaj start-container i pokaż game-container
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('otworzPrezent').style.display = 'flex';
    document.getElementById('otworzPrezent').style.flexDirection = 'column' ;
    document.getElementById('otworzPrezent').style.justifyContent = 'flex-start' ;
    document.getElementById('otworzPrezent').style.alignItems = 'center' ;

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

function delayedExecution() {
    // Ustawienie opóźnienia na 3000 milisekund (czyli 3 sekundy)
    setTimeout(shuffle, 1500);
}

// Funkcja wstrzymująca interakcje na stronie przez określony czas
function disableInteractionsForSeconds(seconds) {
    // Utwórz warstwę z nakładką
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0)'; // Przezroczyste tło
    overlay.style.zIndex = '9999';

    // Dodaj warstwę z nakładką do body
    document.body.appendChild(overlay);

    // Po określonym czasie usuń warstwę z nakładką
    setTimeout(function() {
        overlay.parentNode.removeChild(overlay);
    }, seconds * 1000);
}

// Użycie funkcji do wstrzymania interakcji na stronie przez 3 sekundy
// disableInteractionsForSeconds(2);







// ////////////////////////// QUIZ /////////////////////////////////



const questions = [
    {
        question: "Czym jest Boże Narodzenie?",
        answers: ["Święto upamiętniające narodzenie Jezusa", "Święto z okazji narodzenia Boga", "Święto z okazji przybycia Świętego Mikołaja"],
        correctAnswerIndex: 0
    },
    {
        question: "Kiedy obchodzone jest w Polsce Boże Narodzenie?",
        answers: ["24 grudnia", "25 grudnia", "26 grudnia"],
        correctAnswerIndex: 1
    },
    {
        question: "Z jakich wierzeń pierwotnie pochodzi Wigilia Bożego Narodzenia?",
        answers: ["Chrześcijańskich", "Żydowskich", "Słowiańskich"],
        correctAnswerIndex: 2
    },
    {
        question: "Kiedy rozpoczyna się Wigilię?",
        answers: ["Gdy jest już ciemno", "Gdy na niebie pojawi się pierwsza gwiazdka", "O godzinie 18"],
        correctAnswerIndex: 1
    },
    {
        question: "Kto był pierwowzorem Świętego Mikołaja?",
        answers: ["Biskup Miry", "Jezus Chrystus", "Gwiazdor"],
        correctAnswerIndex: 0
    },
    {
        question: "Ile według tradycji powinno być potraw na wigilijnym stole?",
        answers: ["Nieparzysta liczba", "12", "24"],
        correctAnswerIndex: 1
    },
    {
        question: "Kiedy zwierzęta przemawiają ludzkim głosem?",
        answers: ["W Wigilię", "W Boże Narodzenie", "W Wielkanoc"],
        correctAnswerIndex: 0
    },
    {
        question: "Który utwór NIE JEST kolędą?",
        answers: ["'Cicha noc'", "'Wśród nocnej ciszy'", "'Jest taki dzień'"],
        correctAnswerIndex: 2
    },
    {
        question: "Kto stworzył pierwszą szopkę?",
        answers: ["Jan Paweł II", "Franciszek z Asyżu", "Matka Teresa"],
        correctAnswerIndex: 1
    },
    {
        question: "W którym wieku pojawił się zwyczaj całowania pod jemiołą?",
        answers: ["XII wiek", "XIX wiek", "XXI wiek"],
        correctAnswerIndex: 1
    },
    {
        question: "Ile czasu trwa adwent?",
        answers: ["Cztery tygodnie", "Cztery dni", "Cztery miesiące"],
        correctAnswerIndex: 0
    },
    {
        question: "Kogo patronem jest Święty Mikołaj?",
        answers: [ "Żeglarzy, piekarzy, kupców oraz więźniów", "Dzieci, bezdomnych i schorowanych", "Dzieci, reniferów i zimy"],
        correctAnswerIndex: 0
    },
    {
        question: "W którym kraju wymyślono zdobienie drzewek?",
        answers: ["W Polsce", "W USA", "W Niemczech"],
        correctAnswerIndex: 2
    },
    // Dodaj kolejne pytania według potrzeb
];

let currentQuestionIndex = 0;
let userScore = 0;
let userAnswered = false; // Dodana zmienna, aby sprawdzić, czy użytkownik już odpowiedział

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const option = document.createElement("div");
        option.classList.add("option");
        option.textContent = answer;
        option.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(option);
    });
}

function checkAnswer(selectedIndex) {
    if (userAnswered) {
        return; // Jeśli użytkownik już odpowiedział, nie pozwól mu ponownie zaznaczyć odpowiedzi
    }

    userAnswered = true;

    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    options.forEach((option, index) => {
        if (index === currentQuestion.correctAnswerIndex) {
            option.classList.add("correct");
        } else {
            option.classList.add("incorrect");
        }

        option.onclick = null; // Wyłącz obsługę kliknięć po udzieleniu odpowiedzi
    });

    if (selectedIndex === currentQuestion.correctAnswerIndex) {
        userScore++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(() => {
            resetOptions();
            loadQuestion();
            userAnswered = false; // Resetuj zmienną po załadowaniu nowego pytania
        }, 1500); // Po 1,5 sekundy przechodź do następnego pytania
    } else {
        setTimeout(() => {
            showResult();
        }, 2000); // Po 1,5 sekundy pokaż wynik
    }
}

function showResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.textContent = `Twój wynik: ${userScore} / ${questions.length}`;
    document.getElementById('dalej').style.display = 'block';
}

function nextQuestion() {
    // if (currentQuestionIndex < questions.length - 1) {
    //     currentQuestionIndex++;
    //     resetOptions();
    //     loadQuestion();
    //     userAnswered = false; // Resetuj zmienną po załadowaniu nowego pytania
    // } else {
    //     showResult();
    // }
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
}

function resetOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.classList.remove("correct", "incorrect");
        option.onclick = () => checkAnswer(Array.from(options).indexOf(option));
    });
}

// Inicjalizacja pierwszego pytania
loadQuestion();