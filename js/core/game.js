function startGame() {
  let count = Number(document.getElementById("playerCount").value);
  gameMode = document.getElementById("gameMode").value;
  modeValue = Number(document.getElementById("modeValue").value);

  players = [];

  for (let i = 0; i < count; i++) {
    let nameInput = document.getElementById(`playerName${i}`);
    let name = nameInput?.value || `Player ${i+1}`;

    players.push({
      money: 1000,
      name,
      color: playerColors[i],
      history: [1000]
    });
  }

  stocks.forEach(s => {
    s.history = [s.price];
    players.forEach((_, i) => {
      s.owned[i] = 0;
      s.totalSpent[i] = 0;
    });
  });

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  currentPlayer = 0;
  turn = 1;
  actionTracker = {};

  render();
}

function endTurn() {
  currentPlayer++;

  if (currentPlayer >= players.length) {
    currentPlayer = 0;
    turn++;

    updateMarket();
    applyDividends();
    randomEvent();

    players.forEach((_, i) => updatePlayerHistory(i));
  }

  actionTracker = {};

  if (players[currentPlayer].money < 0) forceSell();

  checkWin();
  render();
}

function checkWin(){
  if(gameMode==="turns" && turn>modeValue) return endGame(true);
  if(gameMode==="money" && players.some(p=>p.money>=modeValue)) return endGame(true);
}

function endGame(force=false){
  if(!force) return resetGame();

  let scores = players.map((p,i)=>{
    let total = p.money;
    stocks.forEach(s=> total += s.owned[i] * s.price);
    return { total, name: p.name, color: p.color };
  });

  scores.sort((a,b)=>b.total-a.total);
  showPodium(scores);
}

function resetGame(){
  document.getElementById('setup').classList.remove('hidden');
  document.getElementById('game').classList.add('hidden');
  players=[]; currentPlayer=0; turn=1; actionTracker={};
}
