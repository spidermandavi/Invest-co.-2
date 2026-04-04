// ===== DRAW GRAPH =====
function drawGraph(data, color = "#4caf50", canvasId = "graphCanvas"){
  const canvas = document.getElementById(canvasId);
  if (!canvas || !data || data.length < 2) return;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath(); // ✅ important fix

  let max = Math.max(...data);
  let min = Math.min(...data);

  // جلوگیری division by zero
  if (max === min) {
    max += 1;
    min -= 1;
  }

  data.forEach((v, i) => {
    let x = (i / (data.length - 1)) * canvas.width;
    let y = canvas.height - ((v - min) / (max - min)) * canvas.height;

    if(i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
}

// ===== GLOBAL =====
window.drawGraph = drawGraph;

window.Game = window.Game || {};
Game.drawGraph = drawGraph;
