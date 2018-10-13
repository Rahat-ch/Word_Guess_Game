  var wordBank = ["slytherin", "gryffindor", "always", "dobby", "harry potter","voldemort", "expelliarmus", "chamber of secrets", "goblet of fire"];
  var guessedLetters = [];
  var underscores = [];
  var wrongLetters = [];
  var livesRemaining = 10;
  var wins = 0;
  var losses = 0;
  var randomWord;
  var winCounter = 0;


  // get random word

  function startGame(){
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === ' ') {
        underscores.push('&nbsp;');
      } else {
        underscores.push('_');
      }

    }
    document.getElementById('right_answers').innerHTML = underscores.join (' ');

    //on start
    livesRemaining = 10;
    // This is what i tried to clear the previous answer on start of new game but can't seem to get working
    // function clearBox('right_answers'){
    // document.getElementById('right_answers').innerHTML = "";
    // };
    // clearBox('right_answers');
    underscores.length = randomWord.length;



  }

    function winLose(){
      if (winCounter === randomWord.length){
        alert('You win!');

      } else if (livesRemaining === 0) {
        alert('You lose!');

      }

    };
    //guessing letters

    document.onkeyup = function(event) {
      if (event.keyCode >= 65 && event.keyCode <=90)  {
      guessedLetters = event.key
      function forceLower(guessedLetters){
        guessedLetters.value = guessedLetters.value.toLowerCase();
      }


      if (randomWord.indexOf(guessedLetters) > -1) {
        for (var i = 0; i < randomWord.length; i++) {
          if(randomWord[i] === guessedLetters) {
            underscores[i] = guessedLetters;
            console.log(underscores);
            winCounter++;
            document.getElementById('right_answers').innerHTML = underscores.join(' ');
            winLose();

          }

        }
      } else {
        wrongLetters.push(guessedLetters);
        livesRemaining--;
        console.log(wrongLetters);
        winLose();
        document.getElementById('lives').innerHTML = livesRemaining;

      }
    }
    };

//psuedocode
// still need to display actual wins after game ends and you win - adding wincounter++ there does not work
//logic: whenever the game is finished and all of the guessedletters are correct add 1 to Wins
//need to remove
//add the array of wrong letters and display to div .wrongLetters


































// // var wordList = ["Slytherin", "Chamber of Secrets", "Time Turner", "Prisoner of Azkaban", "Half Blood Prince", "Merlin"];
// //
// // var moniter = document.getElementById('right_answers');
// // moniter.innerHTML = wordList;
// //
// // console.log(moniter);
//
//
// var startGame = document.getElementById('start_button');
// var moniter = document.getElementById('right_answers');
// var guessedLetters = document.getElementById('guessed_answers')
// var livesRemaining = document.getElementById('lives');
// var wins = document.getElementById('win_counter');
// var losses = document.getElementById('loss_counter');
//
// var Hogwarts = {
//     wordList: ["Slytherin", "Chamber  of  Secrets", "Time  Turner", "Prisoner  of  Azkaban", "Half  Blood  Prince", "Merlin"],
//     wins: 0,
//     losses: 0,
//     livesRemaining: 10,
//     gameRunning: false,
//     gameWord: '',
//     gameWordMoniter: [],
//     moniter: [],
//     guessedLetters: [],
//     // Start game function
//     startGame: function() {
//       this.gameRunning = true;
//       this.livesRemaining = 10;
//       this.guessedLetters = [];
//       this.moniter = [];
//       this.gameWordMoniter = [];
//
//
//       // get a word
//       this.gameWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
//
//       //dispay in moniter
//       for (var i = 0; i < this.gameWord.length; i++) {
//           if (this.gameWord[i] === ' ') {
//             this.gameWordMoniter.push('  ');
//           } else {
//             this.gameWordMoniter.push('_');
//             console.log(this.gameWord);
//           }
//       }
//       //display the game content
//       livesRemaining.innerHTML = this.livesRemaining;
//       moniter.innerHTML = this.gameWordMoniter.join(" ");
//       guessedLetters.innerHTML = this.guessedLetters;
//     }
//     };
//
//     guessedLetters: function(letter) {
//       if (this.gameRunning === true && this.gameWordMoniter.indexOf(letter) === -1)
//       {this.gameWordMoniter.push(letter);
//         for (var i = 0; i < this.gameWord.length; i++) {
//             if (this.gameWord[i].toLowerCase() === letter.toLowerCase()) {
//               this.gameWordMoniter[i] = this.gameWord[i];
//             }
//         }
//         moniter.innerHTML = this.gameWordMoniter.joint('');
//         this.checkIncorrect(letter);
//       } else{
//         if(!this.gameRunning)  {
//           alert("The game isn't running right now, you need to press start!");
//         } else {
//           alert("Hellooo you already guessed this, try something else!");
//         }
//       }
//
//       }
//     };
//
//     startGame.onclick = function(){Hogwarts.startGame()};
//
//     //guessing letters
//     document.onkeyup = function(event)  {
//       if (event.keyCode >= 65 && event.keyCode <=90)  {
//         guessedLetters(event.key);
//       }
//     };
