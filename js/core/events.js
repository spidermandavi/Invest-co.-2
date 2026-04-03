function updatePlayerHistory(i){
  let total = players[i].money;
  stocks.forEach(s=> total += s.owned[i]*s.price);
  players[i].history.push(total);
}

function forceSell(){
  const p = players[currentPlayer];
  stocks.forEach((s,i)=>{
    while(s.owned[currentPlayer]>0 && p.money<0){
      sell(i,1);
    }
  });
}

function randomEvent(){
  if(turn < 5 || Math.random() > 0.2) return;

  const events = [
    {text:"Gift", value:200},
    {text:"Repairs", value:-100},
    {text:"Tax return", value:150}
  ];

  let i = Math.floor(Math.random()*players.length);
  let e = events[Math.floor(Math.random()*events.length)];

  players[i].money += e.value;
  popup(`${players[i].name}: ${e.text} (${e.value})`);
}
