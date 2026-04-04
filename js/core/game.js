const GS = window.GameState;
function startGame() {
  let count = Number(document.getElementById("playerCount").value);
  gameMode = document.getElementById("gameMode").value;
  modeValue = Number(document.getElementById("modeValue").value);

  GS.players = [];

  for (let i = 0; i < count; i++) {
    let nameInput = document.getElementById(`playerName${i}`);
    let name = nameInput?.value || `Player ${i+1}`;

    GS.players.push({
      money: 1000,
      name,
      color: playerColors[i],
      history: [1000]
    });
  }

  GS.stocks.forEach(s => {
    s.history = [s.price];
    GS.players.forEach((_, i) => {
      s.owned[i] = 0;
      s.totalSpent[i] = 0;
    });
  });

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  GS.currentPlayer = 0;
  GS.turn = 1;
  GS.actionTracker = {};

  render();
}

function endTurn() {
  GS.currentPlayer++;

  if (GS.currentPlayer >= GS.players.length) {
    GS.currentPlayer = 0;
    GS.turn++;

    updateMarket();
    applyDividends();
    randomEvent();

    GS.players.forEach((_, i) => updatePlayerHistory(i));
  }

  GS.actionTracker = {};

  if (GS.players[GS.currentPlayer].money < 0) forceSell();

  checkWin();
  render();
}

function checkWin(){
  if(GS.gameMode==="turns" && GS.turn>GS.modeValue) return endGame(true);
  if(GS.gameMode==="money" && GS.players.some(p=>p.money>=GS.modeValue)) return endGame(true);
}

function endGame(force=false){
  if(!force) return resetGame();

  let scores = GS.players.map((p,i)=>{
    let total = p.money;
    GS.stocks.forEach(s=> total += s.owned[i] * s.price);
    return { total, name: p.name, color: p.color };
  });

  scores.sort((a,b)=>b.total-a.total);
  showPodium(scores);
}

function resetGame(){
  document.getElementById('setup').classList.remove('hidden');
  document.getElementById('game').classList.add('hidden');
  GS.players=[]; GS.currentPlayer=0; GS.turn=1; GS.actionTracker={};
}
window.Game = window.Game || {};

Game.startGame = startGame;
Game.endTurn = endTurn;
Game.endGame = endGame;
Game.resetGame = resetGame;
