var game = {
  dollars: new ExpantaNum(0),
  dollarUpgrades[1]: {
    {upg: new ExpantaNum(0), upg_cost: new ExpantaNum(10)}
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
