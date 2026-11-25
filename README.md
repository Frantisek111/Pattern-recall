# Pattern Recall

Pattern Recall is a simple browser-based memory game. Three random squares on a 3×3 grid light up for two seconds. The player must remember their positions and select them after they disappear.

## How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your web browser.

No installation, server, or additional dependencies are required.

## How to Play

1. Click **Show pattern**.
2. Memorize the three highlighted squares.
3. Select the three squares you remember.
4. Click **Check** to see your results.
5. Click **Play again** to start a new round.

The order of your selections does not matter.

## Project Structure

- `index.html` — Page structure and game controls.
- `style.css` — Game appearance, grid layout and colors.
- `game.js` — Game logic, random pattern generation and player interaction.
- `README.md` — Project documentation.

## Technologies

- HTML
- CSS
- Vanilla JavaScript

## How It Works

JavaScript generates a grid of nine buttons and randomly selects three different squares. The selected squares are highlighted for two seconds. The player's selections are then compared with the original pattern to calculate the score.

All source files must be stored in the same folder. The game runs entirely in the browser without external libraries or APIs.

## What I Learned

- DOM manipulation
- Event listeners
- JavaScript Sets and Maps
- CSS Grid
- JavaScript timers
- Managing game states

History:
1. The pattern show, but its not random.
