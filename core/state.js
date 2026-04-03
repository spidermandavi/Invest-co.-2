let players = [];
let currentPlayer = 0;
let turn = 1;
let actionTracker = {};

let gameMode = "turns";
let modeValue = 20;

let playerColors = ["#ff4c4c","#4caf50","#2196f3","#ff9800"];

let stocks = [
  { name: "CDJ", price: 10, volatility: 0.20, owned: {}, totalSpent: {}, history:[10], desc:"Clothing company" },
  { name: "Panda & Co.", price: 10, volatility: 0.12, owned: {}, totalSpent: {}, history:[10], desc:"Stable bank" }
];
