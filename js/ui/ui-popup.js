function popup(html) {
  const el = document.getElementById("popup");
  const content = document.getElementById("popupContent");

  content.innerHTML = html + `<br><button onclick="closePopup()">OK</button>`;
  el.classList.remove("hidden");
}

function closePopup(){
  document.getElementById("popup").classList.add("hidden");
}
window.Game = window.Game || {};

Game.popup = popup;
Game.closePopup = closePopup;
