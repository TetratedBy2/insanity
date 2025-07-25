var game = {
  dollars: new ExpantaNum(0),
  upgrades: {
    upg1: new ExpantaNum(0),
    upg1_cost: new ExpantaNum(10)
  }
}

function prettify() {
  game.dollars = game.dollars.toExponential(2);
}

function updateText() {
  document.getElementById("dollarCount").innerText = game.dollars;
}

window.setInterval(function() {
  prettify(),
  updateText()
}, 20);
