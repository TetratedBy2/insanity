var game = {
  dollars: new ExpantaNum(0)
}

function prettify() {
  game.dollars.toExponential(2);
}

function updateText() {
  document.getElementById("dollarCount").innerText = game.dollars;
}

window.setInterval(function() {
  prettify(),
  updateText()
}, 20);
