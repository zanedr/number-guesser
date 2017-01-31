var numberInput = document.getElementById('number-input').value;
var guessButton = document.querySelector('.guess');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.reset');
var answer = Math.floor(Math.random() * 100) + 1;
var tryCount = 0;

document.querySelector('.last-guess').innerText = numberInput;

guessButton.addEventListener('click', function() {
  if (numberInput > answer) {
    document.querySelector('.feedback').innerText = "That is too high.";
  } else if (numberInput < answer) {
    document.querySelector('.feedback').innerText = "That is too low.";
  } else if (numberInput == answer) {
    document.querySelector('.feedback').innerText = "BOOM!";
  } else {
    document.querySelector('.feedback').innerText = "Please choose a number between 1 and 100.";
}});
