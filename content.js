var numberInput = document.getElementById('number-input');
var guessButton = document.getElementById('guess');
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset');
var rangeButton = document.getElementById('new-range');
var answer;
var minNum = 1;
var maxNum = 100;

//√ generates random number and assigns it to var answer
function generate(minNum, maxNum) {
  minNum = parseInt(minNum, 10);
  maxNum = parseInt(maxNum, 10);
  answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

//√ initially disables all buttons
function disableButtons() {
  resetButton.disabled = true;
  clearButton.disabled = true;
  guessButton.disabled = true;
}

//√ specifies actions on startup
window.onload = function() {
  generate (minNum, maxNum);
  disableButtons();
};

//√ set min and max for random generator
rangeButton.addEventListener('click', function() {
  maxNum = document.getElementById('max').value;
  minNum = document.getElementById('min').value;
  if (maxNum < minNum) {
    alert('Maximum must be higher than the minimum');
  }
  else {
  generate (minNum, maxNum);
}
});

//√ enable or disable guess and clear buttons depending on input
numberInput.addEventListener('keyup', function() {
  if (numberInput.value == ""){
    clearButton.disabled = true;
    guessButton.disabled = true;
  }
  else {
    clearButton.disabled = false;
    guessButton.disabled = false;
  }
});

//√ clear button
clearButton.addEventListener('click', function() {
  document.getElementById('number-input');
  numberInput.value = "";
  clearButton.disabled = true;
  guessButton.disabled = true;
});

// √enable or disable reset buttons depending on input
guessButton.addEventListener('click', function(){
  resetButton.disabled = false;
})
rangeButton.addEventListener('click', function(){
  resetButton.disabled = false;
})

//√ reset button
resetButton.addEventListener('click', function() {
  var clearAll = document.querySelectorAll('input');
  for (var i = 0; i < clearAll.length; i++) {
      clearAll[i].value = "";
    }
  generate (minNum, maxNum);
  disableButtons();
  document.getElementById('last-guess').innerText = "N/A"

});

//√ displays last guess
guessButton.addEventListener('click', function () {
  var guess = document.getElementById('number-input').value;
  var tellGuess = document.querySelector('#last-guess');
  tellGuess.innerText = guess;
});

//√ victory conditions
function victory () {
  minNum = parseInt(minNum, 10) - 10;
  maxNum = parseInt(maxNum, 10) + 10;
  document.getElementById('min').value = minNum;
  document.getElementById('max').value = maxNum;
  alert('Congrats! Range increased by 10 on both sides.')
  generate (minNum, maxNum);
}

//√ feedback: informs whether guess was too high, too low, just right, or completely off base
guessButton.addEventListener('click', function() {
  if (numberInput.value == answer) {
    var feedback = document.querySelector('#feedback');
    feedback.innerText = "BOOM!";
    victory();
  }
  else if (numberInput.value < answer && numberInput.value >= minNum) {
    var feedback = document.querySelector('#feedback');
    feedback.innerText = "Too low, try again.";
  }
  else if (numberInput.value > answer && numberInput.value <= maxNum) {
    var feedback = document.querySelector('#feedback');
    feedback.innerText = "Too high, try again.";
  }
  else if (numberInput.value < minNum || numberInput.value > maxNum) {
    var feedback = document.querySelector('#feedback');
    alert("Outside of the range. Try again.");
  }
});
