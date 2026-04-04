// ===== INIT AFTER DOM LOAD =====
window.addEventListener("DOMContentLoaded", () => {

  const playerCount = document.getElementById("playerCount");
  const startBtn = document.getElementById("startBtn");

  // Player name inputs
  playerCount.addEventListener("change", () => {
    const count = Number(playerCount.value);
    const container = document.getElementById("playerNamesContainer");
    container.innerHTML = "";

    for(let i = 0; i < count; i++){
      const div = document.createElement("div");
      div.innerHTML = `<input id="playerName${i}" placeholder="Player ${i+1}">`;
      container.appendChild(div);
    }
  });

  // Trigger once on load
  playerCount.dispatchEvent(new Event("change"));

  // ✅ START BUTTON FIX
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (window.Game && Game.startGame) {
        Game.startGame();
      }
    });
  }
});

// ===== CONFIRM END GAME =====
function confirmEndGame(){
  if (window.popup) {
    popup(`
      <h2>End Game?</h2>
      <p>Are you sure you want to end the game?</p>
      <button onclick="Game.endGame(true)">Yes</button>
      <button onclick="closePopup()">Cancel</button>
    `);
  }
}

window.confirmEndGame = confirmEndGame;
