Project Structure:

/css
- base.css → global styles (fonts, colors, background)
- layout.css → page layout and containers
- components.css → reusable UI elements (tables, buttons)
- trade.css → buy/sell toggle styling
- popup.css → popup modal styling
- podium.css → end-game podium
- animations.css → visual animations

/js/core
- state.js → global game state (players, stocks)
- game.js → main game flow (start, turns, win)
- market.js → stock price updates & dividends
- events.js → random events system

/js/ui
- ui-main.js → UI initialization & listeners
- ui-render.js → rendering UI (tables, info bar)
- ui-popup.js → popup system
- ui-graph.js → chart drawing
- ui-trade.js → trading system (buy/sell toggle)
- ui-podium.js → end screen

main.js
- Enhancements (animations, effects)

index.html
- Loads everything in correct order
