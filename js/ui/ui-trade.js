const GS = window.GameState;

// ===== GLOBAL TRADE MODE =====
window.tradeMode = "buy";

// ===== SET MODE =====
function setTradeMode(mode){
  window.tradeMode = mode;
  if (window.render) render();
}

// ===== TRADE ENTRY =====
function trade(i, amount){
  if(window.tradeMode === "buy") buy(i, amount);
  else sell(i, amount);
}

// ===== BUY =====
function buy(i, amount){
  let s = GS.stocks[i];
  let player = GS.players[GS.currentPlayer];

  let cost = s.price * amount;

  if(player.money < cost){
    if (window.popup) popup("Not enough money");
    return;
  }

  player.money -= cost;
  s.owned[GS.currentPlayer] = (s.owned[GS.currentPlayer] || 0) + amount;

  if (window.render) render();
}

// ===== SELL =====
function sell(i, amount){
  let s = GS.stocks[i];
  let player = GS.players[GS.currentPlayer];

  if((s.owned[GS.currentPlayer] || 0) < amount){
    if (window.popup) popup("Not enough shares");
    return;
  }

  s.owned[GS.currentPlayer] -= amount;
  player.money += s.price * amount;

  if (window.render) render();
}

// ===== MAKE GLOBAL =====
window.setTradeMode = setTradeMode;
window.trade = trade;
