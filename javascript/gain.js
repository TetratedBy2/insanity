function calculateDollarGain() {
  let gain = new ExpantaNum(1);
  if (game.dollarUpgrades[0].upg.gt(0)) gain.add(game.dollarUpgrades[0].upg);
  game.dollars = game.dollars.add(gain.div(50));
}

window.setInterval(function() {
  calculateDollarGain()
}, 20);
