const GS = window.GameState;

// ===== PLAYER HISTORY =====
function updatePlayerHistory(i){
  let total = GS.players[i].money;

  GS.stocks.forEach(s => {
    total += (s.owned[i] || 0) * s.price;
  });

  GS.players[i].history.push(total);
}

// ===== FORCE SELL =====
function forceSell(){
  const p = GS.players[GS.currentPlayer];

  GS.stocks.forEach((s, i) => {
    while ((s.owned[GS.currentPlayer] || 0) > 0 && p.money < 0) {
      if (window.sell) sell(i, 1);
      else break;
    }
  });
}

// ===== RANDOM EVENT =====
function randomEvent(){
  if (GS.turn < 10 || Math.random() > 0.2) return;

  const events = [
    {text:"Gift", value:200},
    {text:"Repairs", value:-100},
    {text:"Tax return", value:150}
  ];

  let i = Math.floor(Math.random() * GS.players.length);
  let e = events[Math.floor(Math.random() * events.length)];

  GS.players[i].money += e.value;

  if (window.popup) {
    popup(`${GS.players[i].name}: ${e.text} (${e.value})`);
  }
}

// ===== GLOBAL =====
window.updatePlayerHistory = updatePlayerHistory;
window.forceSell = forceSell;
window.randomEvent = randomEvent;
