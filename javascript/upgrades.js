function buyDollarUpgrade(index) {
  if (game.dollars.gte(game.dollarUpgrades[index].upg_cost)) {
    game.dollarUpgrades[index].upg.add(1);
    game.dollarUpgrades[index].upg_cost.mul(2);
    document.getElementById("dollarUpg"+ index +"Count").innerText = game.dollarUpgrades[index].upg;
    document.getElementById("dollarUpg"+ index +"Cost").innerText = game.dollarUpgrades[index].upg_cost;
  }
}
