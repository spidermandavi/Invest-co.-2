function updatePlayerHistory(i){
  let total = GS.players[i].money;
  GS.stocks.forEach(s=> total += s.owned[i]*s.price);
  GS.players[i].history.push(total);
}

function forceSell(){
  const p = GS.players[GS.currentPlayer];
  GS.stocks.forEach((s,i)=>{
    while(s.owned[GS.currentPlayer]>0 && p.money<0){
      sell(i,1);
    }
  });
}

function randomEvent(){
  if(GS.turn < 10 || Math.random() > 0.2) return;

  const events = [
    {text:"Gift", value:200},
    {text:"Repairs", value:-100},
    {text:"Tax return", value:150}
  ];

  let i = Math.floor(Math.random()*GS.players.length);
  let e = events[Math.floor(Math.random()*events.length)];

  GS.players[i].money += e.value;
  popup(`${GS.players[i].name}: ${e.text} (${e.value})`);
}
