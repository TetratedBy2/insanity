function calculateDollarGain() {
  let gain = new ExpantaNum(1);
  game.dollars = game.dollars.add(gain.div(50));
}

window.setInterval(function() {
  calculateDollarGain()
}, 20);
