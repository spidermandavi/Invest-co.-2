const GS = window.GameState;
function render(){
  renderInfoBar();
  renderStockTable();
  renderToggle();
}

function renderInfoBar(){
  const bar = document.getElementById("infoBar");
  const p = GS.players[GS.currentPlayer];

  bar.innerHTML = `Turn ${GS.turn} | ${p.name} | $${p.money.toFixed(2)}`;
  bar.style.background = p.color;
}

function renderToggle(){
  const el = document.getElementById("buySellToggle");

  el.innerHTML = `
    <button onclick="setTradeMode('buy')" class="${tradeMode==='buy'?'active':''}">BUY</button>
    <button onclick="setTradeMode('sell')" class="${tradeMode==='sell'?'active':''}">SELL</button>
  `;
}

function renderStockTable(){
  const tbody = document.querySelector("#stockTable tbody");
  tbody.innerHTML="";

  GS.stocks.forEach((s,i)=>{
    let row = document.createElement("tr");

    row.innerHTML = `
      <td class="stockName" style="cursor:pointer">${s.name}</td>
      <td>$${s.price.toFixed(2)}</td>
      <td>${(s.change||0).toFixed(2)}</td>
      <td>${s.owned[GS.currentPlayer]}</td>
      <td>
        <button onclick="trade(${i},1)">1</button>
        <button onclick="trade(${i},10)">10</button>
      </td>
    `;

    // ✅ CLICK COMPANY NAME → POPUP + GRAPH
    row.querySelector(".stockName").onclick = () => {
      Game.popup(`
        <h2>${s.name}</h2>
        <p>${s.desc}</p>
        <canvas id="graphCanvas" width="300" height="150"></canvas>
      `);

      setTimeout(()=>{
        Game.drawGraph(s.history);
      },50);
    };

    tbody.appendChild(row);
  });
}
