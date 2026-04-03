let tradeMode = "buy";

function setTradeMode(mode){
  tradeMode = mode;
  render();
}

function trade(i, amount){
  if(tradeMode==="buy") buy(i,amount);
  else sell(i,amount);
}

function buy(i, amount){
  let s = stocks[i];
  let cost = s.price * amount;
  if(players[currentPlayer].money < cost) return popup("Not enough money");

  players[currentPlayer].money -= cost;
  s.owned[currentPlayer] += amount;
  render();
}

function sell(i, amount){
  let s = stocks[i];
  if(s.owned[currentPlayer] < amount) return popup("Not enough shares");

  s.owned[currentPlayer] -= amount;
  players[currentPlayer].money += s.price * amount;
  render();
}
