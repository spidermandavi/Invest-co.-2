document.getElementById("playerCount").addEventListener("change",()=>{
  const count = Number(document.getElementById("playerCount").value);
  const container = document.getElementById("playerNamesContainer");
  container.innerHTML = "";

  for(let i=0;i<count;i++){
    const div = document.createElement("div");
    div.innerHTML = `<input id="playerName${i}" placeholder="Player ${i+1}">`;
    container.appendChild(div);
  }
});
function confirmEndGame(){
  Game.popup(`
    <h2>End Game?</h2>
    <p>Are you sure you want to end the game?</p>
    <button onclick="Game.endGame(true)">Yes</button>
    <button onclick="Game.closePopup()">Cancel</button>
  `);
}
window.confirmEndGame = confirmEndGame;
