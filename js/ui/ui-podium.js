function showPodium(scores){
  document.getElementById("game").classList.add("hidden");
  const podium = document.getElementById("podium");
  podium.classList.remove("hidden");

  document.getElementById("firstPlace").innerText = scores[0].name;
  document.getElementById("secondPlace").innerText = scores[1]?.name||"";
  document.getElementById("thirdPlace").innerText = scores[2]?.name||"";
}

function resetPodium(){
  resetGame();
  document.getElementById("podium").classList.add("hidden");
}
