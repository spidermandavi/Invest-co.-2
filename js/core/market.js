function updateMarket() {
  stocks.forEach(s => {
    let change = (Math.random()*2-1)*s.volatility*s.price;
    s.price = Math.max(1, Math.min(500, s.price + change));
    s.change = change;
    s.history.push(s.price);
  });
}

function applyDividends() {
  players.forEach((p, pi)=>{
    stocks.forEach(s=>{
      let owned = s.owned[pi];
      let value = owned*s.price;

      let rate=0;
      if(owned>=2000) rate=0.2;
      else if(owned>=1000) rate=0.1;
      else if(owned>=500) rate=0.075;
      else if(owned>=100) rate=0.05;
      else if(owned>=50) rate=0.025;
      else if(owned>10) rate=0.005;

      p.money += value*rate;
    });
  });
}
