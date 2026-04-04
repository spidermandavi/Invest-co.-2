// ===== GLOBAL STATE =====
window.GameState = {
  players: [],
  currentPlayer: 0,
  turn: 1,
  actionTracker: {},

  gameMode: "turns",
  modeValue: 20,

  playerColors: ["#ff4c4c","#4caf50","#2196f3","#ff9800"],

  stocks: [
    { name: "CDJ", price: 10, volatility: 0.20, owned: {}, totalSpent: {}, desc: "Clothing company", history:[10] },
    { name: "Panda & Co.", price: 10, volatility: 0.12, owned: {}, totalSpent: {}, desc: "Stable bank", history:[10] },
    { name: "GRAY-BOX", price: 10, volatility: 0.10, owned: {}, totalSpent: {}, desc: "Insurance", history:[10] },
    { name: "BA", price: 10, volatility: 0.40, owned: {}, totalSpent: {}, desc: "Volatile sports brand", history:[10] },
    { name: "SEED", price: 10, volatility: 0.25, owned: {}, totalSpent: {}, desc: "Agriculture", history:[10] },
    { name: "EXTRA FRESH", price: 10, volatility: 0.20, owned: {}, totalSpent: {}, desc: "Food company", history:[10] }
  ]
};
