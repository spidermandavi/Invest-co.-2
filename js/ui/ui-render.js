function render(){
  renderInfoBar();
  renderStockTable();
  renderToggle();
}

function renderInfoBar(){
  const bar = document.getElementById("infoBar");
  const p = players[currentPlayer];

  bar.innerHTML = `Turn ${turn} | ${p.name} | $${p.money.toFixed(2)}`;
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

  stocks.forEach((s,i)=>{
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${s.name}</td>
      <td>$${s.price.toFixed(2)}</td>
      <td>${(s.change||0).toFixed(2)}</td>
      <td>${s.owned[currentPlayer]}</td>
      <td>
        <button onclick="trade(${i},1)">1</button>
        <button onclick="trade(${i},10)">10</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}
