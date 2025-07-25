var game = {
  dollars: new ExpantaNum(0),
  dollarUpgrades: [
    {upg: new ExpantaNum(0), upg_cost: new ExpantaNum(10)}
  ]
}

function prettify() {
  if (game.dollars.gte(1000000)) game.dollars = game.dollars.toPrecision(2);
}

function updateText() {
  document.getElementById("dollarCount").innerText = game.dollars;
}

window.setInterval(function() {
  prettify(),
  updateText()
}, 20);
