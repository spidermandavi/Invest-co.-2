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
  let s = GS.stocks[i];
  let cost = s.price * amount;
  if(GS.players[GS.currentPlayer].money < cost) return popup("Not enough money");

  GS.players[GS.currentPlayer].money -= cost;
  s.owned[GS.currentPlayer] += amount;
  render();
}

function sell(i, amount){
  let s = GS.stocks[i];
  if(s.owned[GS.currentPlayer] < amount) return popup("Not enough shares");

  s.owned[GS.currentPlayer] -= amount;
  GS.players[GS.currentPlayer].money += s.price * amount;
  render();
}
